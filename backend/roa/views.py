from datetime import datetime, timedelta
from django.core.files.base import ContentFile
import base64
import pandas as pd
from django.shortcuts import render
import pytz
from data.models import Form, UserAccount, Disclosures, DisclosuresAdvisorSubCodes, DisclosuresProducts
from data.serializers import FormSerializers, Disclosures_Serializer, DisclosuresProducts_Serializer, RiskPlanningSerializers, InvestmentPlanningSerializers
from data.serializers import AssuranceInvestmentSerializers, AssuranceRiskSerializers, EmployeeBenefitsSerializers, FiduciarySerializers, ShortTermInsuranceCommericalSerializers
from data.serializers import ShortTermInsurancePersonalSerializers, MedicalSerializers, GapCoverSerializers, DisclosuresProductProviders_Serializer, DisclosuresAdvisorSubCodes_Serializer
from rest_framework.decorators import APIView
from rest_framework.response import Response
from tasks.tasks import roa_disclosure_products_update
from rest_framework import status
from django.http import Http404
from django.db.models import Q, Count, Sum
from django.core.paginator import Paginator
from django.contrib.postgres.search import SearchQuery, SearchVector
import json
from logs.models import Log, LogContent, LogKPIs
from logs.serializers import LogSerializer, LogContentSerializer, LogKPIsSerializer
from django.http import StreamingHttpResponse
import uuid
from data.models import user_profile, DisclosuresProductProviders, DisclosuresAdvisorSubCodes
# Create your views here.


class updateFormAPI(APIView):
    def get(self, request, pk):
        form = Disclosures.objects.filter(id=pk)
        if form.exists():
            form = form.first()
            form_status = form.status
            new_status = 0
            if form_status == 0:
                new_status = 1
            data = {
                "status" : new_status
            }
            
            serializers = Disclosures_Serializer(form, data=data, partial=True)
            if serializers.is_valid():
                serializers.save()
                return Response({'message': "Successfully updated"}, 200)
            else:
                return Response({"errors" : serializers.errors},400)

        return Response(404)

class FormListAPIs(APIView):
    
    def get(self, request, format=None):
        snippets = Disclosures.objects.filter(advisorId=request.user.pk)
        serializer = Disclosures_Serializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        user = request.user
        if user.is_superuser:
            data = Disclosures.objects.all()
        else:
            data = Disclosures.objects.filter(advisorId=request.user.pk)
        if data.exists():
            search_query = SearchQuery(request.data['search_query'], search_type='websearch')
            search_vector = SearchVector('policy_number','client_name','client_id_number', 'client_contact', 'client_email')
            if "search_query" in request.data and request.data['search_query'] != "":
                # data = data.annotate(search=search_vector).filter(search=search_query).values().order_by('-created_at')
                data = data.filter(Q(policy_number__icontains=request.data['search_query'])|Q(client_name__icontains=request.data['search_query'])|Q(client_id_number__icontains=request.data['search_query'])|Q(client_contact__icontains=request.data['search_query'])|Q(client_email__icontains=request.data['search_query'])).values().order_by('-created_at')
            else:
                data = data.values().order_by('-created_at')
            # data = data.values().order_by('-created_at')
            p = Paginator(data, request.data['page_size'])
            data = p.page(request.data['page_number']).object_list
            for row in data:
                if user.is_superuser:
                    advisor = UserAccount.objects.filter(pk=row['advisorId_id'])
                    if advisor.exists():
                        advisor = advisor.values().first()
                        row['advisor'] = f"{advisor['first_name']} ({advisor['email']})"
                    else:
                        row['advisor'] = "Not Assigned"

            # print(p.num_pages)
            if request.data['page_number'] <= p.num_pages:
                    
                return Response(
                    {
                        "total_pages" : p.num_pages,
                        "has_pages" : p.num_pages,
                        "total_records" : len(data),
                        "next" : p.page(request.data['page_number']).has_next(),
                        "results" : data
                    }
                )
            else:
                return Response(
                    {
                        "total_pages" : p.num_pages,
                        "has_pages" : p.num_pages,
                        "total_records" : len(data),
                        "next" : p.page(request.data['page_number']).has_next(),
                        "results" : data
                    }
                )
        else:
            return Response(
                {
                    "total_pages" : 0,
                    "has_pages" : 0,
                    "total_records" : 0,
                    "next" : False,
                    "results" : []
                }
            )

class FormAPIs(APIView):

    def get_object(self, pk):
        try:
            return Disclosures.objects.get(pk=pk)
        except Form.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = Disclosures_Serializer(snippet)
        products = DisclosuresProducts.objects.filter(~Q(product_provider=None),formId=pk)
        products_data = []
        for product in products:
            if product is None:
                continue
            products_data.append({
                "product_id" : product.product_provider.pk,
                "product" : product.product_provider.product.product,
                "subcode" : product.product_provider.subcode,
                "status" : product.status,
            })
            # print(products_data)
        return Response({"data": serializer.data, "products" :products_data})

    def post(self, request, format=None):
        disclosuresData = request.data['data']
        disclosuresData['advisorId'] = request.user.pk
        # if Disclosures.objects.filter(client_id_number=disclosuresData['client_id_number']).exists():
        #     return Response({"message": f"Form with Client ID {disclosuresData['client_id_number']} Already Exists","code":400},400)
        # if Disclosures.objects.filter(client_email=disclosuresData['client_email']).exists():
        #     return Response({"message": f"Form with Client Email {disclosuresData['client_email']} Already Exists","code":400},400)
        serializer = Disclosures_Serializer(data=disclosuresData)
        if serializer.is_valid():
            data = serializer.create(serializer.validated_data)
            formId = data.pk
            recordOfAdviceData = {
                "advisorId" : request.user.pk,
                "formId" : formId,
                "clientName" : disclosuresData['client_name'],
                "clientIdNumber" : disclosuresData['client_id_number'],
                "clientPhoneNumber" : disclosuresData['client_contact'],
                "clientEmail" : disclosuresData['client_email'],
                "clientDateOfBirth" : datetime.now(pytz.timezone('Africa/Johannesburg')).strftime("%Y-%m-%d"),
            }
            roa_serializer = FormSerializers(data=recordOfAdviceData)
            if roa_serializer.is_valid():
                roa_serializer.create(roa_serializer.validated_data)
            else:
                print(roa_serializer.errors)
            product_data = request.data['product_data']
            for product in product_data:
                product['formId'] = formId
                product['product_provider'] = product['product_id']
            pd_serializer = DisclosuresProducts_Serializer(data=product_data, many=True)
            if pd_serializer.is_valid():
                pd_serializer.create(pd_serializer.validated_data)
            else:
                print(pd_serializer.errors)
            rp_data = {
                "advisorId" : request.user.pk,
                "formId" : formId,
            }
            rp_serializer = RiskPlanningSerializers(data=rp_data)
            if rp_serializer.is_valid():
                rp_serializer.create(rp_serializer.validated_data)
            else:
                print(rp_serializer.errors)
            ip_data = {
                "advisorId" : request.user.pk,
                "formId" : formId,
            }
            ip_serializer = InvestmentPlanningSerializers(data=ip_data)
            if ip_serializer.is_valid():
                ip_serializer.create(ip_serializer.validated_data)
            else:
                print(ip_serializer.errors)
            ai_data = {
                "advisorId" : request.user.pk,
                "formId" : formId,
            }
            ai_serializer = AssuranceInvestmentSerializers(data=ai_data)
            if ai_serializer.is_valid():
                ai_serializer.create(ai_serializer.validated_data)
            else:
                print(ai_serializer.errors)
            ar_data = {
                "advisorId" : request.user.pk,
                "formId" : formId,
            }
            ar_serializer = AssuranceRiskSerializers(data=ar_data)
            if ar_serializer.is_valid():
                ar_serializer.create(ar_serializer.validated_data)
            else:
                print(ar_serializer.errors)
            eb_data = {
                "advisorId" : request.user.pk,
                "formId" : formId,
                "EB_ClientName" : disclosuresData['client_name'],
                "EB_ClientIdNumber" : disclosuresData['client_id_number'],
                "EB_ClientPhoneNumber" : disclosuresData['client_contact'],
                "EB_ClientEmail" : disclosuresData['client_email'],
            }
            eb_serializer = EmployeeBenefitsSerializers(data=eb_data)
            if eb_serializer.is_valid():
                eb_serializer.create(eb_serializer.validated_data)
            else:
                print(eb_serializer.errors)
            fid_data = {
                "advisorId" : request.user.pk,
                "formId" : formId,
            }
            fid_serializer = FiduciarySerializers(data=fid_data)
            if fid_serializer.is_valid():
                fid_serializer.create(fid_serializer.validated_data)
            else:
                print(fid_serializer.errors)
            sti_c_data = {
                "advisorId" : request.user.pk,
                "formId" : formId,
            }
            sti_c_serializer = ShortTermInsuranceCommericalSerializers(data=sti_c_data)
            if sti_c_serializer.is_valid():
                sti_c_serializer.create(sti_c_serializer.validated_data)
            else:
                print(sti_c_serializer.errors)
            sti_p_data = {
                "advisorId" : request.user.pk,
                "formId" : formId,
                "STIC_Client_Id_Number" : disclosuresData['client_id_number'],
            }
            sti_p_serializer = ShortTermInsurancePersonalSerializers(data=sti_p_data)
            if sti_p_serializer.is_valid():
                sti_p_serializer.create(sti_p_serializer.validated_data)
            else:
                print(sti_p_serializer.errors)
            med_data = {
                "advisorId" : request.user.pk,
                "formId" : formId,
                "MSA_ClientName" : disclosuresData['client_name'],
                "MSA_ClientIdNumber" : disclosuresData['client_id_number'],
                "MSA_ClientEmail" : disclosuresData['client_email'],
                "MSA_ClientPhone" : disclosuresData['client_contact'],
                "SectionF_ClientName" : disclosuresData['client_name'],
            }
            med_serializer = MedicalSerializers(data=med_data)
            if med_serializer.is_valid():
                med_serializer.create(med_serializer.validated_data)
            else:
                print(med_serializer.errors)
            gap_data = {
                "advisorId" : request.user.pk,
                "formId" : formId,
                "GP_ClientName" : disclosuresData['client_name'],
                "GP_ClientIdNumber" : disclosuresData['client_id_number'],
                "GP_ClientEmail" : disclosuresData['client_email'],
                "GP_ClientPhoneNumber" : disclosuresData['client_contact']
            }
            gap_serializer = GapCoverSerializers(data=gap_data)
            if gap_serializer.is_valid():
                gap_serializer.create(gap_serializer.validated_data)
            else:
                print(gap_serializer.errors)
            
            productsData = request.data['product_data']
            if productsData != []:
                for product in productsData:
                    product['formId'] = formId
                product_serializer = DisclosuresProducts_Serializer(data=productsData, many=True)
                if product_serializer.is_valid():
                    product_serializer.create(product_serializer.validated_data)
                else:
                    print(product_serializer.errors)
            responseData = serializer.data
            responseData['id'] = data.pk
            return Response({"formId": data.pk}, status=status.HTTP_201_CREATED)
        else:
            print(product_serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = Disclosures_Serializer(snippet, data=request.data['data'])
        if serializer.is_valid():
            serializer.save()
            DisclosuresProducts.objects.filter(formId=pk).delete()
            product_data = request.data['product_data']
            for product in product_data:
                product['formId'] = pk
                product['product_provider'] = product['product_id']
            pd_serializer = DisclosuresProducts_Serializer(data=product_data, many=True)
            if pd_serializer.is_valid():
                pd_serializer.create(pd_serializer.validated_data)
            else:
                print(pd_serializer.errors)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
  
class roaKPISnTrends(APIView):

    def post(self, request):
        if "filterType" not in request.data:
            return Response({"message": "Filter Type was not passed"}, 400)
        if "year" not in request.data:
            return Response({"message": "Year was not passed"}, 400)
        if "monthyear" not in request.data:
            return Response({"message": "Month Year was not passed"}, 400)
        if "month" not in request.data:
            return Response({"message": "Month was not passed"}, 400)
        if "date" not in request.data:
            return Response({"message": "Date was not passed"}, 400)
        if "fromdate" not in request.data:
            return Response({"message": "From Date was not passed"}, 400)
        if "todate" not in request.data:
            return Response({"message": "To Date was not passed"}, 400)
        if "customFilterType" not in request.data:
            return Response({"message": "Custom Filter Type was not passed"}, 400)

        user = request.user
        filterType = int(request.data['filterType'])
        year = request.data['year']
        monthyear = request.data['monthyear']
        month = request.data['month']
        date = request.data['date']
        fromdate = request.data['fromdate']
        todate = request.data['todate']
        customFilterType = int(request.data['customFilterType'])
        if user.is_superuser:
            data = Disclosures.objects.all().order_by('-created_at')
            if data.exists():                
                trend_data = []
                if filterType == 1:
                    data = data.filter(created_at__year=year)
                    trend = {
                        # "created" : data.filter(created_at__range=date_range).count(),
                        "new" : data.filter(status=0).count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "total" : data.count(),
                        "new" : data.filter(status=0).count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    # Trending
                    datewise_data = data.values('created_at__year','created_at__month').distinct().order_by('created_at__year','created_at__month')
                    for date in datewise_data:
                        total_forms = 0
                        review_data = data.filter(created_at__year=date['created_at__year'],created_at__month=date['created_at__month'])
                        if review_data.exists():
                            total_forms = review_data.aggregate(total_forms=Count('id'))['total_forms']
                        trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__year']}-{date['created_at__month']}", '%Y-%m') , '%b %Y'), total_forms])
                if filterType == 2:
                    data = data.filter(created_at__year=monthyear, created_at__month=month)
                    trend = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    # Trending
                    datewise_data = data.values('created_at__date').distinct().order_by('created_at__date')
                    for date in datewise_data:
                        total_reviews = 0
                        review_data = data.filter(created_at__date=date['created_at__date'])
                        if review_data.exists():
                            total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                        trend_data.append([date['created_at__date'].strftime('%d %b %Y'), total_reviews])
                if filterType == 3:
                    data = data.filter(created_at__date=date)
                    trend = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
                        "completed" : data.filter(status=1).count(),
                        "total" : data.count(),
                    }
                    # Trending
                    datewise_data = data.values('created_at__date', 'created_at__hour').distinct().order_by('created_at__date', 'created_at__hour')
                    for date in datewise_data:
                        total_reviews = 0
                        review_data = data.filter(created_at__date=date['created_at__date'],created_at__hour=date['created_at__hour'])
                        if review_data.exists():
                            total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                        trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__date']} {date['created_at__hour']}", '%Y-%m-%d %H'), "%I %p"), total_reviews])
                if filterType == 4:
                    date_range = (datetime.strptime(fromdate, '%Y-%m-%d') , datetime.strptime(todate, '%Y-%m-%d') + timedelta(days=1))
                    data = data.filter(created_at__range=date_range)
                    trend = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    # Trending
                    if customFilterType == 1:
                        if (datetime.strptime(todate, "%Y-%m-%d") - datetime.strptime(fromdate, "%Y-%m-%d")).days > 30:
                            datewise_data = data.values('created_at__year','created_at__month').distinct().order_by('created_at__year','created_at__month')
                            for date in datewise_data:
                                total_reviews = 0
                                review_data = data.filter(created_at__year=date['created_at__year'],created_at__month=date['created_at__month'])
                                if review_data.exists():
                                    total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                                trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__year']}-{date['created_at__month']}", '%Y-%m') , '%b %Y'), total_reviews])
                        else:
                            datewise_data = data.values('created_at__date').distinct().order_by('created_at__date')
                            for date in datewise_data:
                                total_reviews = 0
                                review_data = data.filter(created_at__date=date['created_at__date'])
                                if review_data.exists():
                                    total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                                trend_data.append([date['created_at__date'].strftime('%d %b %Y'), total_reviews])
                    if customFilterType == 2:
                        datewise_data = data.values('created_at__year','created_at__week').distinct().order_by('created_at__year','created_at__week')
                        for date in datewise_data:
                            total_reviews = 0
                            review_data = data.filter(created_at__year=date['created_at__year'],created_at__week=date['created_at__week'])
                            if review_data.exists():
                                total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                            trend_data.append([f"{date['created_at__year']} Week {date['created_at__week']}", total_reviews])
                    if customFilterType == 3:
                        datewise_data = data.values('created_at__year','created_at__month').distinct().order_by('created_at__year','created_at__month')
                        for date in datewise_data:
                            total_reviews = 0
                            review_data = data.filter(created_at__year=date['created_at__year'],created_at__month=date['created_at__month'])
                            if review_data.exists():
                                total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                            trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__year']}-{date['created_at__month']}", '%Y-%m') , '%b %Y'), total_reviews])
                    if customFilterType == 4:
                        datewise_data = data.values('created_at__year','created_at__quarter').distinct().order_by('created_at__year','created_at__quarter')
                        for date in datewise_data:
                            total_reviews = 0
                            review_data = data.filter(created_at__year=date['created_at__year'],created_at__quarter=date['created_at__quarter'])
                            if review_data.exists():
                                total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                            trend_data.append([f"{date['created_at__year']} Quarter {date['created_at__quarter']}", total_reviews])
                    if customFilterType == 5:
                        datewise_data = data.values('created_at__year').distinct().order_by('created_at__year')
                        for date in datewise_data:
                            total_reviews = 0
                            review_data = data.filter(created_at__year=date['created_at__year'])
                            if review_data.exists():
                                total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                            trend_data.append([f"{date['created_at__year']}", total_reviews])  
                return Response(
                    {
                        "trend_data": trend_data, 
                        "kpis": kpis, 
                        "trend" : trend
                    }
                )
            
            else:
                kpis = {
                    "created" : 0,
                    "approved" : 0,
                    "rejected" : 0,
                    "referred" : 0,
                }
                trend = {
                    "created" : 0,
                    "approved" : 0,
                    "rejected" : 0,
                    "referred" : 0,
                }
                return Response(
                    {
                        "trend_data": [], 
                        "kpis": kpis, 
                        "trend" : trend
                    }
                )
        else:
            data = Disclosures.objects.filter(advisorId=request.user.pk).order_by('-created_at')
            if data.exists():                
                trend_data = []
                if filterType == 1:
                    data = data.filter(created_at__year=year)
                    trend = {
                        # "created" : data.filter(created_at__range=date_range).count(),
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    # Trending
                    datewise_data = data.values('created_at__year','created_at__month').distinct().order_by('created_at__year','created_at__month')
                    for date in datewise_data:
                        total_forms = 0
                        review_data = data.filter(created_at__year=date['created_at__year'],created_at__month=date['created_at__month'])
                        if review_data.exists():
                            total_forms = review_data.aggregate(total_forms=Count('id'))['total_forms']
                        trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__year']}-{date['created_at__month']}", '%Y-%m') , '%b %Y'), total_forms])
                if filterType == 2:
                    data = data.filter(created_at__year=monthyear, created_at__month=month)
                    trend = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    # Trending
                    datewise_data = data.values('created_at__date').distinct().order_by('created_at__date')
                    for date in datewise_data:
                        total_reviews = 0
                        review_data = data.filter(created_at__date=date['created_at__date'])
                        if review_data.exists():
                            total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                        trend_data.append([date['created_at__date'].strftime('%d %b %Y'), total_reviews])
                if filterType == 3:
                    data = data.filter(created_at__date=date)
                    trend = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    # Trending
                    datewise_data = data.values('created_at__date', 'created_at__hour').distinct().order_by('created_at__date', 'created_at__hour')
                    for date in datewise_data:
                        total_reviews = 0
                        review_data = data.filter(created_at__date=date['created_at__date'],created_at__hour=date['created_at__hour'])
                        if review_data.exists():
                            total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                        trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__date']} {date['created_at__hour']}", '%Y-%m-%d %H'), "%I %p"), total_reviews])
                if filterType == 4:
                    date_range = (datetime.strptime(fromdate, '%Y-%m-%d') , datetime.strptime(todate, '%Y-%m-%d') + timedelta(days=1))
                    data = data.filter(created_at__range=date_range)
                    trend = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
                        "total" : data.count(),
                        "completed" : data.filter(status=1).count(),
                    }
                    # Trending
                    if customFilterType == 1:
                        if (datetime.strptime(todate, "%Y-%m-%d") - datetime.strptime(fromdate, "%Y-%m-%d")).days > 30:
                            datewise_data = data.values('created_at__year','created_at__month').distinct().order_by('created_at__year','created_at__month')
                            for date in datewise_data:
                                total_reviews = 0
                                review_data = data.filter(created_at__year=date['created_at__year'],created_at__month=date['created_at__month'])
                                if review_data.exists():
                                    total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                                trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__year']}-{date['created_at__month']}", '%Y-%m') , '%b %Y'), total_reviews])
                        else:
                            datewise_data = data.values('created_at__date').distinct().order_by('created_at__date')
                            for date in datewise_data:
                                total_reviews = 0
                                review_data = data.filter(created_at__date=date['created_at__date'])
                                if review_data.exists():
                                    total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                                trend_data.append([date['created_at__date'].strftime('%d %b %Y'), total_reviews])
                    if customFilterType == 2:
                        datewise_data = data.values('created_at__year','created_at__week').distinct().order_by('created_at__year','created_at__week')
                        for date in datewise_data:
                            total_reviews = 0
                            review_data = data.filter(created_at__year=date['created_at__year'],created_at__week=date['created_at__week'])
                            if review_data.exists():
                                total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                            trend_data.append([f"{date['created_at__year']} Week {date['created_at__week']}", total_reviews])
                    if customFilterType == 3:
                        datewise_data = data.values('created_at__year','created_at__month').distinct().order_by('created_at__year','created_at__month')
                        for date in datewise_data:
                            total_reviews = 0
                            review_data = data.filter(created_at__year=date['created_at__year'],created_at__month=date['created_at__month'])
                            if review_data.exists():
                                total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                            trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__year']}-{date['created_at__month']}", '%Y-%m') , '%b %Y'), total_reviews])
                    if customFilterType == 4:
                        datewise_data = data.values('created_at__year','created_at__quarter').distinct().order_by('created_at__year','created_at__quarter')
                        for date in datewise_data:
                            total_reviews = 0
                            review_data = data.filter(created_at__year=date['created_at__year'],created_at__quarter=date['created_at__quarter'])
                            if review_data.exists():
                                total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                            trend_data.append([f"{date['created_at__year']} Quarter {date['created_at__quarter']}", total_reviews])
                    if customFilterType == 5:
                        datewise_data = data.values('created_at__year').distinct().order_by('created_at__year')
                        for date in datewise_data:
                            total_reviews = 0
                            review_data = data.filter(created_at__year=date['created_at__year'])
                            if review_data.exists():
                                total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                            trend_data.append([f"{date['created_at__year']}", total_reviews])  
                return Response(
                    {
                        "trend_data": trend_data, 
                        "kpis": kpis, 
                        "trend" : trend
                    }
                )
            
            else:
                kpis = {
                    "created" : 0,
                    "approved" : 0,
                    "rejected" : 0,
                    "referred" : 0,
                }
                trend = {
                    "created" : 0,
                    "approved" : 0,
                    "rejected" : 0,
                    "referred" : 0,
                }
                return Response(
                    {
                        "trend_data": [], 
                        "kpis": kpis, 
                        "trend" : trend
                    }
                )
       


class BulkProductUpdate(APIView):
    def post(self, request, format=None):
        def error401():
            res = {"message":"You can't perform this action"}
            yield f"data: {json.dumps(res)}\n\n" 
        
        def response(requestedData):
            yield "data: [START]\n\n" 
            if 'productsCsvFile' not in requestedData:
                yield "data: [ERROR] No file found\n\n"
            else:
                yield "data: [SUCCESS] File found\n\n"
                logData = {
                    "account" : request.user.pk,
                    "log_name" : f"Bulk Products Upload {uuid.uuid4()}",
                    "log_type" : 1,
                    "status" : 0,
                }
                log_serializer = LogSerializer(data=logData)
                if log_serializer.is_valid():
                    log_serializer.save()
                    log_id = log_serializer.data['id']
                else:
                    print(log_serializer.errors)
                logKPIs = {
                    "account" : request.user.pk,
                    "log" : log_id,
                    "kpis" : {
                        "total_users": 0,"total_products":0, "total_products_added": 0, "total_user_products_updated" : 0,
                    }
                }
                log_kpis_serializer = LogKPIsSerializer(data=logKPIs)
                if log_kpis_serializer.is_valid():
                    log_kpis_serializer.create(log_kpis_serializer.validated_data)
                else:
                    print(log_kpis_serializer.errors)
                csv_data = request.data['productsCsvFile']
                format, csvstr = csv_data.split(';base64,')
                ext = format.split('/')[-1]
                file_name = "'productsCsvFile." + ext
                csvData = ContentFile(base64.b64decode(csvstr), name=file_name) 
                sheets = pd.read_excel(csvData, sheet_name=None)

                # Access sheet names as a dictionary
                sheet_names = sheets.keys()
                
                total_users = 0
                total_sheets = 0
                total_products = 0
                total_products_added = 0
                total_products_updated = 0
                for sheet in sheet_names:
                    total_sheets += 1
                    logContent = {
                        "account" : request.user.pk,
                        "log" : log_id,
                        "log_type" : 1,
                        "log_description" : f"Updating products for {sheet}.",
                    } 
                    log_content_serializer = LogContentSerializer(data=logContent)
                    if log_content_serializer.is_valid():
                        log_content_serializer.create(log_content_serializer.validated_data)
                    else:
                        print(log_content_serializer.errors)
                    
                    product_type = 1
                    if "ST" in sheet:
                        product_type = 1
                    if "Health" in sheet:
                        product_type = 2
                    if "Life" in sheet:
                        product_type = 3

                    disclosures_product_df = pd.read_excel(csvData, sheet_name=sheet, header = 1)

                    disclosures_product_df.fillna('', inplace=True)
                    disclosures_product_df.rename(columns={'Unnamed: 0': 'ProductsList'}, inplace=True)
                    # disclosures_product_df.columns = disclosures_product_df.columns.str.replace(' ', '_').str.replace('__', '_').str.replace('.', '_')

                    logContent = {
                        "account" : request.user.pk,
                        "log" : log_id,
                        "log_type" : 1,
                        "log_description" : f"Updating products in database.",
                    } 
                    log_content_serializer = LogContentSerializer(data=logContent)
                    if log_content_serializer.is_valid():
                        log_content_serializer.create(log_content_serializer.validated_data)
                    else:
                        print(log_content_serializer.errors)
                    total_users = 0
                    for product in disclosures_product_df.columns:
                        users = disclosures_product_df['ProductsList'].tolist()
                        if product == "MPY":
                            continue
                        if product == "ProductsList":
                            continue
                        product = product.strip()
                        update_log = ""
                        create_log = ""
                        total_products += 1
                        disclosure_product = DisclosuresProductProviders.objects.filter(product=product)
                        if disclosure_product.exists():
                            total_products_updated += 1
                            update_log = f"<p>Product {product} exists and updated.</p>"
                            disclosure_product_data = {
                                "product" : product,
                                "product_type" : product_type,
                            }
                            disclosure_product_serializer = DisclosuresProductProviders_Serializer(instance=disclosure_product.first(), data=disclosure_product_data, partial=True)
                            if disclosure_product_serializer.is_valid():
                                disclosure_product_serializer.save()
                                logContent = {
                                    "account" : request.user.pk,
                                    "log" : log_id,
                                    "log_type" : 1,
                                    "log_description" : f"Product {product} exists and updated.",
                                } 
                                log_content_serializer = LogContentSerializer(data=logContent)
                                if log_content_serializer.is_valid():
                                    log_content_serializer.create(log_content_serializer.validated_data)
                                else:
                                    print(log_content_serializer.errors)
                            else:
                                print(disclosure_product_serializer.errors) 
                            for user in users:
                                if user == "":
                                    continue
                                if user == "Email":
                                    continue
                                if user == "N/A":
                                    continue
                                user_data = user_profile.objects.filter(user__email__iexact=user)
                                if user_data.exists():
                                    user_data = user_data.first()
                                    logContent = {
                                        "account" : request.user.pk,
                                        "log" : log_id,
                                        "log_type" : 1,
                                        "log_description" : f"User {user_data.Full_Name} exists.",
                                    } 
                                    log_content_serializer = LogContentSerializer(data=logContent)
                                    if log_content_serializer.is_valid():
                                        log_content_serializer.create(log_content_serializer.validated_data)
                                    else:
                                        print(log_content_serializer.errors)
                                    user_product_data = disclosures_product_df.iloc[disclosures_product_df.loc[disclosures_product_df['ProductsList']==user].index[0]].to_dict()
                                    user_product_data = {k: v for k, v in user_product_data.items() if v != ""}
                                    if product in user_product_data:
                                        if user_product_data[product] != "RESIGNED":
                                            user_product_data = {
                                                "email": user,
                                                "user": user_data.user.pk,
                                                "product": disclosure_product.first().pk,
                                                "subcode": user_product_data[product]
                                            }
                                            old_data = DisclosuresAdvisorSubCodes.objects.filter(user=user_data.user.pk, product=disclosure_product.first().pk)
                                            if old_data.exists():
                                                serializer = DisclosuresAdvisorSubCodes_Serializer(instance=old_data.first(), data=user_product_data)
                                                if serializer.is_valid():
                                                    serializer.save()
                                                    logContent = {
                                                        "account" : request.user.pk,
                                                        "log" : log_id,
                                                        "log_type" : 1,
                                                        "log_description" : f"Product {product} for user {user_data.Full_Name} updated.",
                                                    } 
                                                    log_content_serializer = LogContentSerializer(data=logContent)
                                                    if log_content_serializer.is_valid():
                                                        log_content_serializer.create(log_content_serializer.validated_data)
                                                    else:
                                                        print(log_content_serializer.errors)
                                            else:
                                                serializer = DisclosuresAdvisorSubCodes_Serializer(data=user_product_data)
                                                if serializer.is_valid():
                                                    serializer.create(serializer.validated_data)
                                                    logContent = {
                                                        "account" : request.user.pk,
                                                        "log" : log_id,
                                                        "log_type" : 1,
                                                        "log_description" : f"Product {product} for user {user_data.Full_Name} added.",
                                                    } 
                                                    log_content_serializer = LogContentSerializer(data=logContent)
                                                    if log_content_serializer.is_valid():
                                                        log_content_serializer.create(log_content_serializer.validated_data)
                                                    else:
                                                        print(log_content_serializer.errors)
                        else:
                            total_products_added += 1
                            create_log = f"<p>Product {product} added</p>"

                            disclosure_product_data = {
                                "product" : product,
                                "product_type" : product_type,
                            }
                            disclosure_product_serializer = DisclosuresProductProviders_Serializer(data=disclosure_product_data)
                            if disclosure_product_serializer.is_valid():
                                disclosure_product = disclosure_product_serializer.create(disclosure_product_serializer.validated_data)
                                logContent = {
                                    "account" : request.user.pk,
                                    "log" : log_id,
                                    "log_type" : 1,
                                    "log_description" : f"Product {product} already exists.",
                                } 
                                log_content_serializer = LogContentSerializer(data=logContent)
                                if log_content_serializer.is_valid():
                                    log_content_serializer.create(log_content_serializer.validated_data)
                                else:
                                    print(log_content_serializer.errors)
                            else:
                                print(disclosure_product_serializer.errors) 
                            for user in users:
                                if user == "":
                                    continue
                                if user == "Email":
                                    continue
                                if user == "N/A":
                                    continue
                                user_data = user_profile.objects.filter(user__email__iexact=user)
                                if user_data.exists():
                                    user_data = user_data.first()
                                    logContent = {
                                        "account" : request.user.pk,
                                        "log" : log_id,
                                        "log_type" : 1,
                                        "log_description" : f"User {user_data.Full_Name} exists.",
                                    } 
                                    log_content_serializer = LogContentSerializer(data=logContent)
                                    if log_content_serializer.is_valid():
                                        log_content_serializer.create(log_content_serializer.validated_data)
                                    else:
                                        print(log_content_serializer.errors)
                                    user_product_data = disclosures_product_df.iloc[disclosures_product_df.loc[disclosures_product_df['ProductsList']==user].index[0]].to_dict()
                                    user_product_data = {k: v for k, v in user_product_data.items() if v != ""}
                                    if product in user_product_data:
                                        if user_product_data[product] != "RESIGNED":
                                            user_product_data = {
                                                "email": user,
                                                "user": user_data.user.pk,
                                                "product": disclosure_product.pk,
                                                "subcode": user_product_data[product]
                                            }
                                            old_data = DisclosuresAdvisorSubCodes.objects.filter(user=user_data.user.pk, product=disclosure_product.pk)
                                            if old_data.exists():
                                                serializer = DisclosuresAdvisorSubCodes_Serializer(instance=old_data.first(), data=user_product_data)
                                                if serializer.is_valid():
                                                    serializer.save()
                                                    logContent = {
                                                        "account" : request.user.pk,
                                                        "log" : log_id,
                                                        "log_type" : 1,
                                                        "log_description" : f"Product {product} for user {user_data.Full_Name} updated.",
                                                    } 
                                                    log_content_serializer = LogContentSerializer(data=logContent)
                                                    if log_content_serializer.is_valid():
                                                        log_content_serializer.create(log_content_serializer.validated_data)
                                                    else:
                                                        print(log_content_serializer.errors)
                                            else:
                                                serializer = DisclosuresAdvisorSubCodes_Serializer(data=user_product_data)
                                                if serializer.is_valid():
                                                    serializer.create(serializer.validated_data)
                                                    logContent = {
                                                        "account" : request.user.pk,
                                                        "log" : log_id,
                                                        "log_type" : 1,
                                                        "log_description" : f"Product {product} for user {user_data.Full_Name} added.",
                                                    } 
                                                    log_content_serializer = LogContentSerializer(data=logContent)
                                                    if log_content_serializer.is_valid():
                                                        log_content_serializer.create(log_content_serializer.validated_data)
                                                    else:
                                                        print(log_content_serializer.errors)   
                        logKPIs = {
                            "account" : request.user.pk,
                            "log" : log_id,
                            "kpis" : {
                                "total_sheets":total_sheets, "total_products":total_products, "total_products_added": total_products_added, "total_products_updated" : total_products_updated,
                            }
                        }
                        kpisID = LogKPIs.objects.get(account=request.user.pk, log=log_id)
                        log_kpis_serializer = LogKPIsSerializer(instance=kpisID, data=logKPIs)
                        if log_kpis_serializer.is_valid():
                            log_kpis_serializer.save()
                        else:
                            print(log_kpis_serializer.errors)
                        kpis = {
                            "total_users" : total_users,
                            "total_sheets" : total_sheets,
                            "total_products" : total_products,
                            "total_products_added" : total_products_added,
                            "total_products_updated" : total_products_updated,
                            "logs": {
                                "create_log": create_log,
                                "update_log": update_log
                            }
                        }
                        yield f"data: {json.dumps(kpis)}\n\n"                 
                        logContent = {
                            "account" : request.user.pk,
                            "log" : log_id,
                            "log_type" : 2,
                            "log_description" : f"Products updated.",
                        } 
                        log_content_serializer = LogContentSerializer(data=logContent)
                        if log_content_serializer.is_valid():
                            log_content_serializer.create(log_content_serializer.validated_data)
                        else:
                            print(log_content_serializer.errors)
                    # for i in range(len(disclosures_product_df)):
                    #     disclosures_product_data = disclosures_product_df.iloc[i].to_dict()
                    #     name = disclosures_product_data['MPY']
                    #     logContent = {
                    #         "account" : request.user.pk,
                    #         "log" : log_id,
                    #         "log_type" : 3,
                    #         "log_description" : f"Updating User {name} products.",
                    #     } 
                    #     log_content_serializer = LogContentSerializer(data=logContent)
                    #     if log_content_serializer.is_valid():
                    #         log_content_serializer.create(log_content_serializer.validated_data)
                    #     else:
                    #         print(log_content_serializer.errors)
                    #     disclosures_product_data = {k: v for k, v in disclosures_product_data.items() if v != ""}
                    #     user = user_profile.objects.filter(Full_Name__iexact=name)
                    #     if user.exists():
                    #         total_users += 1
                    #         user = user.first().user.pk
                    #         for product in disclosures_product_data.keys():
                    #             disclosure_product = DisclosuresProductProviders.objects.filter(product=product)
                    #             if disclosure_product.exists():
                    #                 disclosure_product = disclosure_product.first()
                    #                 user_disclosures_product_data = {
                    #                     "product" : disclosure_product.pk,
                    #                     "user" : disclosure_product.pk,
                    #                     "subcode" : disclosures_product_data[product]
                    #                 }
                    #                 advisor_product = DisclosuresAdvisorSubCodes.objects.filter(product=disclosure_product.pk, user=user)
                    #                 if advisor_product.exists():
                    #                     serializer = DisclosuresAdvisorSubCodes_Serializer(instance=advisor_product.first().pk,data=user_disclosures_product_data, partial=True)
                    #                     if serializer.is_valid():
                    #                         serializer.save()
                    #                         logContent = {
                    #                             "account" : request.user.pk,
                    #                             "log" : log_id,
                    #                             "log_type" : 4,
                    #                             "log_description" : f"User {name} subcodes updated for {product}.",
                    #                         } 
                    #                         log_content_serializer = LogContentSerializer(data=logContent)
                    #                         if log_content_serializer.is_valid():
                    #                             log_content_serializer.create(log_content_serializer.validated_data)
                    #                             total_user_products_updated += 1
                    #                         else:
                    #                             print(log_content_serializer.errors)
                    #                 else:
                    #                     serializer = DisclosuresAdvisorSubCodes_Serializer(data=user_disclosures_product_data)
                    #                     if serializer.is_valid():
                    #                         serializer.create(serializer.validated_data)
                    #                         logContent = {
                    #                             "account" : request.user.pk,
                    #                             "log" : log_id,
                    #                             "log_type" : 5,
                    #                             "log_description" : f"User {name} subcodes updated for {product}.",
                    #                         } 
                    #                         log_content_serializer = LogContentSerializer(data=logContent)
                    #                         if log_content_serializer.is_valid():
                    #                             log_content_serializer.create(log_content_serializer.validated_data)
                    #                         else:
                    #                             print(log_content_serializer.errors)
                    #             logContent = {
                    #                 "account" : request.user.pk,
                    #                 "log" : log_id,
                    #                 "log_type" : 6,
                    #                 "log_description" : f"User {name} subcodes updated for all available products.",
                    #             } 
                    #             log_content_serializer = LogContentSerializer(data=logContent)
                    #             if log_content_serializer.is_valid():
                    #                 log_content_serializer.create(log_content_serializer.validated_data)
                    #             else:
                    #                 print(log_content_serializer.errors)
                    #         logKPIs = {
                    #             "account" : request.user.pk,
                    #             "log" : log_id,
                    #             "kpis" : {
                    #                 "total_users": total_users,"total_products":total_products, "total_products_added": total_products_added, "total_user_products_updated" : total_user_products_updated,
                    #             }
                    #         }
                    #         kpisID = LogKPIs.objects.get(account=request.user.pk, log=log_id)
                    #         log_kpis_serializer = LogKPIsSerializer(instance=kpisID, data=logKPIs)
                    #         if log_kpis_serializer.is_valid():
                    #             log_kpis_serializer.save()
                    #         else:
                    #             print(log_kpis_serializer.errors)
                    #         kpis = {
                    #             "total_users" : total_users,
                    #             "total_products" : total_products,
                    #             "total_products_added" : total_products_added,
                    #             "total_user_products_updated" : total_user_products_updated,
                    #         }
                    #         yield f"data: {json.dumps(kpis)}\n\n"
                    #     else:
                    #         logContent = {
                    #             "account" : request.user.pk,
                    #             "log" : log_id,
                    #             "log_type" : 404,
                    #             "log_description" : f"User {name} does not exists.",
                    #         } 
                    #         log_content_serializer = LogContentSerializer(data=logContent)
                    #         if log_content_serializer.is_valid():
                    #             log_content_serializer.create(log_content_serializer.validated_data)
                    #         else:
                    #             print(log_content_serializer.errors)
                    #         continue
            
        if request.user.is_superuser == False:
            return StreamingHttpResponse(error401(), content_type='text/event-stream')
        return StreamingHttpResponse(response(request.data), content_type='text/event-stream')

class BulkProductUpdate_v2(APIView):
    def post(self, request, format=None):
        if not request.user.is_superuser:
            return Response(401)
        else:
            roa_disclosure_products_update.delay(request.user.pk, request.data)
            return Response({"message": "Product excel file added to queue"})

    

class advisorProducts(APIView):

    def get(self, request, pk):
        if request.user.is_superuser:
            disclosureProducts = DisclosuresAdvisorSubCodes.objects.filter(~Q(product=None), user=pk)
            products_data = []
            for product in disclosureProducts:
                products_data.append({
                    "id" : product.pk,
                    "product_id" : product.product.pk,
                    "product" : product.product.product,
                    "subcode" : product.subcode,
                    "status" : True
                })
            return Response(products_data, 200)
        return Response(400)
    def post(self, request, pk):
        product = DisclosuresProductProviders.objects.filter(product=request.data['product'])
        if product.exists():
            product = product.first()
            advisor_product = DisclosuresAdvisorSubCodes.objects.filter(product=product.pk, user=pk)
            if advisor_product.exists():     
                advisor_product = advisor_product.first()   
                data = {
                    "subcode" : request.data['subcode'],
                }
                serializer = DisclosuresAdvisorSubCodes_Serializer(instance=advisor_product,data=data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    return Response(200)
                else:
                    print(serializer.errors)
                    return Response(400)
            else:
                data = {
                    "product" : product.pk,
                    "user" : pk,
                    "subcode" : request.data['subcode'],
                }
                serializer = DisclosuresAdvisorSubCodes_Serializer(data=data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(200)
                else:
                    print(serializer.errors)
                    return Response(400)
        else:
            data = {
                "product" : request.data['product']
            }
            serializer = DisclosuresProductProviders_Serializer(data=data)
            if serializer.is_valid():
                product = serializer.save()
                data = {
                    "product" : product.pk,
                    "user" : pk,
                    "subcode" : request.data['subcode'],
                }
                serializer = DisclosuresAdvisorSubCodes_Serializer(data=data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(200)
                else:
                    print(serializer.errors)
                    return Response(400)
            else:
                print(serializer.errors)
                return Response(400)
    def put(self, request, pk):
        product = DisclosuresAdvisorSubCodes.objects.filter(id=request.data['product_id'], user=pk)
        if product.exists():
            product.delete()
            return Response(200)
        else:
            return Response(404)


class advisorDisclosureProducts(APIView):

    def get(self, request):
        disclosureProducts = DisclosuresAdvisorSubCodes.objects.filter(~Q(product=None), user=request.user.pk)
        products_data = []
        for product in disclosureProducts:
            products_data.append({
                "product_id" : product.pk,
                "product" : product.product.product,
                "subcode" : product.subcode,
                "status" : True
            })
        return Response(products_data, 200)
    

class FormAdvisorProfile(APIView):
    def get(self, request, pk):
        form = Disclosures.objects.filter(id=pk)
        if not form.exists():
            return Response(404)
        form = form.first()

        userData = UserAccount.objects.filter(id=form.advisorId.pk).values('email', 'first_name', 'last_name').first()

        user_profile_data = user_profile.objects.filter(user=form.advisorId)
        if user_profile_data.exists():
            user_profile_data = user_profile_data.values().first()
            userData['full_name'] = user_profile_data['Full_Name']
            userData['contact_cell'] = user_profile_data['Contact_Cell']
            userData['qualification'] = ""
            if user_profile_data['Qualification_Name'] != "nan" or user_profile_data['Qualification_Name'] != "" :
                userData['qualification'] = user_profile_data['Qualification_Name']
            userData['address'] = ""
            if user_profile_data['Address_Postal_1'] != "nan" :
                userData['address'] += user_profile_data['Address_Postal_1'] + ", "
            else:
                userData['address'] += user_profile_data['Address_Physical_1'] + ", "
            if user_profile_data['Address_Postal_2'] != "nan" :
                userData['address'] += user_profile_data['Address_Postal_2'] + ", "
            else:
                userData['address'] += user_profile_data['Address_Physical_2'] + ", "
            if user_profile_data['Address_Postal_3'] != "nan" :
                userData['address'] += user_profile_data['Address_Postal_3'] + ", "
            else:
                userData['address'] += user_profile_data['Address_Physical_3'] + ", "
            if user_profile_data['Address_Postal_Postal_Code'] != "nan" :
                userData['address'] += f"{int(float(user_profile_data['Address_Postal_Postal_Code'])):04}" if user_profile_data['Address_Postal_Postal_Code'] != "" else ""
            else:
                userData['address'] += f"{int(float(user_profile_data['Address_Physical_Postal_Code'])):04}" if user_profile_data['Address_Physical_Postal_Code'] != "" else ""

            userData['LTI_SC_A'] = True if user_profile_data['Category1_1_Registration_Status'] == "Accredited" or user_profile_data['Category1_1_Registration_Status'] == "Under Supervision" else False
            userData['LTI_SC_A_Supervisor'] = True if user_profile_data['Category1_1_Supervisor'] != "nan" else False
            
            userData['Pension_funds'] = True if user_profile_data['Category1_7_Registration_Status'] == "Accredited" or user_profile_data['Category1_7_Registration_Status'] == "Under Supervision" else False
            userData['Pension_funds_Supervisor'] = True if user_profile_data['Category1_7_Supervisor'] != "nan" else False
            
            userData['RPension_funds'] = True if user_profile_data['Category1_5_Registration_Status'] == "Accredited" or user_profile_data['Category1_5_Registration_Status'] == "Under Supervision" else False
            userData['RPension_funds_Supervisor'] = True if user_profile_data['Category1_5_Supervisor'] != "nan" else False
            
            userData['LTI_SC_B1'] = True if user_profile_data['Category1_3_Registration_Status'] == "Accredited" or user_profile_data['Category1_3_Registration_Status'] == "Under Supervision" else False
            userData['LTI_SC_B1_Supervisor'] = True if user_profile_data['Category1_3_Supervisor'] != "nan" else False
            
            userData['LTI_SC_B1A'] = True if user_profile_data['Category1_22_Registration_Status'] == "Accredited" or user_profile_data['Category1_22_Registration_Status'] == "Under Supervision" else False
            userData['LTI_SC_B1A_Supervisor'] = True if user_profile_data['Category1_22_Supervisor'] != "nan" else False
            
            userData['LTI_SC_B2'] = True if user_profile_data['Category1_20_Registration_Status'] == "Accredited" or user_profile_data['Category1_20_Registration_Status'] == "Under Supervision" else False
            userData['LTI_SC_B2_Supervisor'] = True if user_profile_data['Category1_20_Supervisor'] != "nan" else False
            
            userData['LTI_SC_B2A'] = True if user_profile_data['Category1_21_Registration_Status'] == "Accredited" or user_profile_data['Category1_21_Registration_Status'] == "Under Supervision" else False
            userData['LTI_SC_B2A_Supervisor'] = True if user_profile_data['Category1_21_Supervisor'] != "nan" else False
            
            userData['LTI_SC_C'] = True if user_profile_data['Category1_4_Registration_Status'] == "Accredited" or user_profile_data['Category1_4_Registration_Status'] == "Under Supervision" else False
            userData['LTI_SC_C_Supervisor'] = True if user_profile_data['Category1_4_Supervisor'] != "nan" else False
            
            userData['LTI_Deposits'] = True if user_profile_data['Category1_17_Registration_Status'] == "Accredited" or user_profile_data['Category1_17_Registration_Status'] == "Under Supervision" else False
            userData['LTI_Deposits_Supervisor'] = True if user_profile_data['Category1_17_Supervisor'] != "nan" else False
            
            userData['STI_Deposits'] = True if user_profile_data['Category1_18_Registration_Status'] == "Accredited" or user_profile_data['Category1_18_Registration_Status'] == "Under Supervision" else False
            userData['STI_Deposits_Supervisor'] = True if user_profile_data['Category1_18_Supervisor'] != "nan" else False
            
            userData['STI_PL'] = True if user_profile_data['Category1_2_Registration_Status'] == "Accredited" or user_profile_data['Category1_2_Registration_Status'] == "Under Supervision" else False
            userData['STI_PL_Supervisor'] = True if user_profile_data['Category1_2_Supervisor'] != "nan" else False
            
            userData['STI_PL_A'] = True if user_profile_data['Category1_23_Registration_Status'] == "Accredited" or user_profile_data['Category1_23_Registration_Status'] == "Under Supervision" else False
            userData['STI_PL_A_Supervisor'] = True if user_profile_data['Category1_23_Supervisor'] != "nan" else False
            
            userData['STI_CL'] = True if user_profile_data['Category1_6_Registration_Status'] == "Accredited" or user_profile_data['Category1_6_Registration_Status'] == "Under Supervision" else False
            userData['STI_CL_Supervisor'] = True if user_profile_data['Category1_6_Supervisor'] != "nan" else False
            
            userData['CIC'] = True if user_profile_data['Category1_14_Registration_Status'] == "Accredited" or user_profile_data['Category1_14_Registration_Status'] == "Under Supervision" else False
            userData['CIC_Supervisor'] = True if user_profile_data['Category1_14_Supervisor'] != "nan" else False
            
            userData['HSB'] = True if user_profile_data['Category1_16_Registration_Status'] == "Accredited" or user_profile_data['Category1_16_Registration_Status'] == "Under Supervision" else False
            userData['HSB_Supervisor'] = True if user_profile_data['Category1_16_Supervisor'] != "nan" else False
            
            userData['Shares'] = True if user_profile_data['Category1_8_Registration_Status'] == "Accredited" or user_profile_data['Category1_8_Registration_Status'] == "Under Supervision" else False
            userData['Shares_Supervisor'] = True if user_profile_data['Category1_8_Supervisor'] != "nan" else False
            
            userData['Bonds'] = True if user_profile_data['Category1_12_Registration_Status'] == "Accredited" or user_profile_data['Category1_12_Registration_Status'] == "Under Supervision" else False
            userData['Bonds_Supervisor'] = True if user_profile_data['Category1_12_Supervisor'] != "nan" else False
            
            userData['Money_market'] = True if user_profile_data['Category1_9_Registration_Status'] == "Accredited" or user_profile_data['Category1_9_Registration_Status'] == "Under Supervision" else False
            userData['Money_market_Supervisor'] = True if user_profile_data['Category1_9_Supervisor'] != "nan" else False
            
            userData['Debentures'] = True if user_profile_data['Category1_10_Registration_Status'] == "Accredited" or user_profile_data['Category1_10_Registration_Status'] == "Under Supervision" else False
            userData['Debentures_Supervisor'] = True if user_profile_data['Category1_10_Supervisor'] != "nan" else False
            
            userData['Warrants'] = True if user_profile_data['Category1_11_Registration_Status'] == "Accredited" or user_profile_data['Category1_11_Registration_Status'] == "Under Supervision" else False
            userData['Warrants_Supervisor'] = True if user_profile_data['Category1_11_Supervisor'] != "nan" else False
            # Get the current date and time in the 'Africa/Johannesburg' timezone
            now = datetime.now(pytz.timezone('Africa/Johannesburg'))
            # Get the appointment date from the user_profile_data dictionary
            userData['inservice'] = (user_profile_data['Appointment_Date'])
            appointment_date = (user_profile_data['Appointment_Date'])
            experience = now.year - appointment_date.year
            experience = experience if experience != 0 else 1
            dofa = user_profile_data['DOFA']
            industry_experience = now.year - dofa.year
            industry_experience = industry_experience if industry_experience != 0 else 1

            # Calculate the difference in years
            userData['experience'] = experience
            userData['industry_experience'] = industry_experience
            
        return Response({"profile" : userData}, 200)
