from datetime import datetime, timedelta
from django.shortcuts import render
import pytz
from data.models import Form, UserAccount, Disclosures
from data.serializers import FormSerializers, Disclosures_Serializer, DisclosuresProducts_Serializer, RiskPlanningSerializers, InvestmentPlanningSerializers
from data.serializers import AssuranceInvestmentSerializers, AssuranceRiskSerializers, EmployeeBenefitsSerializers, FiduciarySerializers, ShortTermInsuranceCommericalSerializers
from data.serializers import ShortTermInsurancePersonalSerializers, MedicalSerializers, GapCoverSerializers
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from django.db.models import Q, Count, Sum
from django.core.paginator import Paginator
from django.contrib.postgres.search import SearchQuery, SearchVector

# Create your views here.

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
            search_vector = SearchVector('clientName','clientIdNumber', 'clientPhoneNumber')
            if "search_query" in request.data and request.data['search_query'] != "":
                data = data.annotate(search=search_vector).filter(search=search_query).values().order_by('-created_at')
                # data = data.filter(Q(clientName__icontains=request.data['search_query'])|Q(clientIdNumber__icontains=request.data['search_query'])|Q(clientEmail__icontains=request.data['search_query'])).values().order_by('-created_at')
            else:
                data = data.values().order_by('-created_at')
            # data = data.values().order_by('-created_at')
            p = Paginator(data, request.data['page_size'])
            data = p.page(request.data['page_number']).object_list
            for row in data:
                if user.is_superuser:
                    advisor = UserAccount.objects.filter(pk=row['advisorId'])
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
        return Response(serializer.data)

    def post(self, request, format=None):
        disclosuresData = request.data['data']
        disclosuresData['advisorId'] = request.user.pk
        if Disclosures.objects.filter(client_id_number=disclosuresData['client_id_number']).exists():
            return Response({"message": f"Form with Client ID {disclosuresData['client_id_number']} Already Exists","code":400},400)
        if Disclosures.objects.filter(client_email=disclosuresData['client_email']).exists():
            return Response({"message": f"Form with Client Email {disclosuresData['client_email']} Already Exists","code":400},400)
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
        serializer = Disclosures_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
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
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
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
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
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
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
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
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
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
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
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
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
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
                        "completed" : data.filter(status=1).count(),
                    }
                    kpis = {
                        "new" : data.filter(status=0).count(),
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
       