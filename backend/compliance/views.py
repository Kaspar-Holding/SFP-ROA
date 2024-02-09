from django.forms.models import model_to_dict
import uuid
import babel.numbers
import pandas as pd
from rest_framework.decorators import APIView, api_view
from rest_framework.response import Response
from data.models import UserAccount, categorisation, user_profile, regions, region_manager
from .models import ComplianceDocument, GateKeeping, DocumentComments, arc_questions, arc, arc_question_header, review_status
from .serializers import ComplianceDocument_Serializer, review_status_Serializer, GateKeeping_Serializer, DocumentComments_Serializer, arc_questions_Serializer, arc_Serializer, arc_question_header_Serializer
from rest_framework import status
from django.db.models import Q, Sum, Count
from django.core.paginator import Paginator
from django.http import Http404
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank
from datetime import datetime, timedelta
import pytz
from users.models import flag_colors, flagged_users
# Create your views here.

class updateDocumentStatus(APIView):

    def post(self, request, format=None):
        document = ComplianceDocument.objects.filter(id=request.data['dId'])
        user = request.user
        if document.exists():
            document.update(status=request.data['status'])
            data = {"document" : request.data['dId'], "status" : request.data['status']}
            if request.data['status'] == 3:
                document.update(status=request.data['status'], referred=True)
            status_serializer = review_status_Serializer(data=data)
            if status_serializer.is_valid():
                status_serializer.save()
            else:
                print(status_serializer.errors)
            if request.data['status'] == 1:
                reviewStatus = "approved"
            if request.data['status'] == 2:
                reviewStatus = "not approved"
            if request.data['status'] == 3:
                reviewStatus = "referred"
                
            if request.data['status'] == 4:
                reviewStatus = "partially approved"
            comment = {
                    "user" : 0,
                    "type" : 3,
                    "title" : "",
                    "comment" : f"Review was {reviewStatus} by {user.first_name} {user.last_name} ({user.email})",  
                    "document" : request.data['dId']
                }
            documentCommentSerializer = DocumentComments_Serializer(data=comment)
            if documentCommentSerializer.is_valid():
                documentCommentSerializer.save()
            else:
                print(documentCommentSerializer.errors)
            return Response(200)
        else:
            raise Http404
        
# class Compl        
@api_view(['POST'])
def searchComplianceDocument(request):
    if request.user.is_superuser:
        data = ComplianceDocument.objects.all()
        if data.exists():
            search_query = SearchQuery(request.data['search_query'], search_type='websearch')
            search_vector = SearchVector('policy_number')
            if request.data['search_query'] != "":
                # data = data.annotate(search=search_vector).filter(search=search_query).values().order_by('-created_at')
                data = data.filter(Q(advisor__user_profile__Full_Name=request.data['search_query'])|Q(advisor__first_name=request.data['search_query'])|Q(policy_number__icontains=request.data['search_query'])|Q(clientName__icontains=request.data['search_query'])).values().order_by('-created_at')
            else:
                data = data.values().order_by('-created_at')
            p = Paginator(data, request.data['page_size'])
            data = p.page(request.data['page_number']).object_list
            for row in data:
                advisor = UserAccount.objects.filter(pk=row['advisor_id'])
                if advisor.exists():
                    advisor = advisor.values().first()
                    row['advisor'] = f"{advisor['first_name']} ({advisor['email']})"
                else:
                    raise Http404
                userData = UserAccount.objects.filter(pk=row['user_id'])
                if userData.exists():
                    userData = userData.values().first()
                    row['review_user'] = f"{userData['first_name']} {userData['last_name']} ({userData['email']})"
                else:
                    raise Http404
                dId = row['id']
                if row['status'] == 0:
                    gatekeeping = GateKeeping.objects.filter(document=dId)
                    if gatekeeping.exists():
                        gatekeeping = gatekeeping.values().latest('id')
                        row['last_review_date'] = gatekeeping['created_at']
                    else:
                        row['last_review_date'] = row['created_at']
                else:
                    row['last_review_date'] = row['created_at']

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
        data = ComplianceDocument.objects.all()
        if data.exists():
            search_query = SearchQuery(request.data['search_query'], search_type='websearch')
            search_vector = SearchVector('policy_number')
            if request.data['search_query'] != "":
                # data = data.annotate(search=search_vector).filter(search=search_query).values().order_by('-created_at')
                data = data.filter(Q(policy_number__icontains=request.data['search_query'])|Q(clientName__icontains=request.data['search_query'])).values().order_by('-created_at')
            else:
                data = data.values().order_by('-created_at')
            p = Paginator(data, request.data['page_size'])
            data = p.page(request.data['page_number']).object_list
            for row in data:
                advisor = UserAccount.objects.filter(pk=row['advisor_id'])
                if advisor.exists():
                    advisor = advisor.values().first()
                    row['advisor_id'] = f"{advisor['first_name']} ({advisor['email']})"
                else:
                    raise Http404
                userData = UserAccount.objects.filter(pk=row['user_id'])
                if userData.exists():
                    userData = userData.values().first()
                    row['review_user'] = f"{userData['first_name']} {userData['last_name']} ({userData['email']})"
                else:
                    raise Http404
                dId = row['id']
                if row['status'] == 0:
                    gatekeeping = GateKeeping.objects.filter(document=dId)
                    if gatekeeping.exists():
                        gatekeeping = gatekeeping.values().latest('id')
                        row['last_review_date'] = gatekeeping['created_at']
                    else:
                        row['last_review_date'] = row['created_at']
                else:
                    row['last_review_date'] = row['created_at']

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
        
class complainceDocumentsInfo(APIView):

    def post(self, request):
        if "page_size" not in request.data:
            return Response({"message": "Page Size was not passed"}, 400)
        if "sort_by" not in request.data:
            return Response({"message": "Sort By was not passed"}, 400)
        if "sort_direction" not in request.data:
            return Response({"message": "Sort Direction was not passed"}, 400)
        
        user = request.user
        orderBy = request.data['sort_by']
        orderDirection = request.data['sort_direction']
        if orderDirection == "up":
            orderBy = orderBy
        if orderDirection == "down":
            orderBy = f"-{orderBy}"
        today = datetime.today().strftime('%Y-%m-%d')
        date_range = (datetime.strptime(today,'%Y-%m-%d') - timedelta(days=15) , datetime.strptime(today,'%Y-%m-%d') + timedelta(days=1))
        if user.is_superuser:
            data = ComplianceDocument.objects.all().order_by('-created_at')
            if data.exists():
                total = data.count()
                data = data.values()
                p = Paginator(data, request.data['page_size'])
                data = p.page(request.data['page_number']).object_list
                for row in data:
                    advisor = UserAccount.objects.filter(pk=row['advisor_id'])
                    if advisor.exists():
                        advisor = advisor.values().first()
                        row['advisor'] = f"{advisor['first_name']} ({advisor['email']})"
                    else:
                        raise Http404
                    dId = row['id']
                    arc_status = False
                    gatekeeper = UserAccount.objects.filter(pk=row['user_id']).values().first()
                    row['gatekeeper'] = f"{gatekeeper['first_name']} {gatekeeper['last_name']} ({gatekeeper['email']})"
                    if arc.objects.filter(document=row['id']).exists():
                        arc_status = True
                    row['arc_status'] = arc_status
                    row['last_review_date'] = row['updated_at']
                
                if orderBy[0] == "-":
                    data = sorted(data, key=lambda d: d[orderBy[1:]], reverse=True) 
                else:
                    data = sorted(data, key=lambda d: d[orderBy])  

                return Response(
                    {
                        "total_pages" : p.num_pages,
                        "has_pages" : p.num_pages,
                        "total_records" : total,
                        "pagelimit" : request.data['page_size'],
                        "next" : p.page(request.data['page_number']).has_next(),
                        "results" : data ,
                    }
                )
            else:
                return Response(
                    {
                        "total_pages" : 0,
                        "has_pages" : 0,
                        "total_records" : 0,
                        "pagelimit" : request.data['page_size'],
                        "next" : None,
                        "results" : [],
                    }
                )
        else:
            if user.userType == 1:  
                data = ComplianceDocument.objects.filter(Q(user=user.pk) | Q(picked_up=user.pk)).order_by('-created_at')
                records = []
                if data.exists():
                    created = 0
                    total = data.count()
                    data = ComplianceDocument.objects.filter(Q(user=user.pk) | Q(picked_up=user.pk) | Q(status=3)).order_by('-created_at')
                    data = data.values()
                    p = Paginator(data, request.data['page_size'])
                    data = p.page(request.data['page_number']).object_list
                    for row in data:
                        advisor = UserAccount.objects.filter(pk=row['advisor_id'])
                        if advisor.exists():
                            advisor = advisor.values().first()
                            row['advisor_id'] = f"{advisor['first_name']} ({advisor['email']})"
                        else:
                            raise Http404
                        arc_status = False
                        
                        userData = UserAccount.objects.filter(pk=row['user_id']).values().first()
                        row['review_user'] = f"{userData['first_name']} {userData['last_name']} ({userData['email']})"
                        if row['status'] == 3 and not arc.objects.filter(document=row['id']).exists():
                            records.append(row)
                        if row['user_id'] == user.pk:
                            records.append(row)
                            created += 1
                        elif arc.objects.filter(document=row['id']).exists():
                            arc_record = arc.objects.filter(document=row['id']).values().first()
                            if arc_record['user_id'] == user.pk:
                                records.append(row)
                                arc_status = True
                                created += 1
                        row['arc_status'] = arc_status
                        row['last_review_date'] = row['updated_at']    
                    
                    if orderBy[0] == "-":
                        data = sorted(data, key=lambda d: d[orderBy[1:]], reverse=True) 
                    else:
                        data = sorted(data, key=lambda d: d[orderBy])                 
                    
                            
                    return Response(
                        {
                            "total_pages" : p.num_pages,
                            "has_pages" : p.num_pages,
                            "total_records" : total,
                            "pagelimit" : request.data['page_size'],
                            "next" : p.page(request.data['page_number']).has_next(),
                            "results" : data ,
                        }
                    )
                else:
                    return Response(
                        {
                            "total_pages" : 0,
                            "has_pages" : 0,
                            "total_records" : 0,
                            "pagelimit" : request.data['page_size'],
                            "next" : None,
                            "results" : [],
                        }
                    )
            if user.userType == 2:            
                data = ComplianceDocument.objects.all().order_by('-created_at')
                data = data.filter(Q(user=user.pk)|~Q(status=1))
                if data.exists():
                    
                    total = data.count()
                    data = data.values()
                    p = Paginator(data, request.data['page_size'])
                    data = p.page(request.data['page_number']).object_list
                    for row in data:
                        advisor = UserAccount.objects.filter(pk=row['advisor_id'])
                        if advisor.exists():
                            advisor = advisor.values().first()
                            row['advisor_id'] = f"{advisor['first_name']} ({advisor['email']})"
                        else:
                            raise Http404
                        arc_status = False
                        if arc.objects.filter(document=row['id']).exists():
                            arc_status = True
                        row['arc_status'] = arc_status
                        row['last_review_date'] = row['updated_at'] 
                    
                    if orderBy[0] == "-":
                        data = sorted(data, key=lambda d: d[orderBy[1:]], reverse=True) 
                    else:
                        data = sorted(data, key=lambda d: d[orderBy])  
                    return Response(
                        {
                            "total_pages" : p.num_pages,
                            "has_pages" : p.num_pages,
                            "total_records" : total,
                            "pagelimit" : request.data['page_size'],
                            "next" : p.page(request.data['page_number']).has_next(),
                            "results" : data , 
                        }
                    )
                else:
                    return Response(
                        {
                            "total_pages" : 0,
                            "has_pages" : 0,
                            "total_records" : 0,
                            "pagelimit" : request.data['page_size'],
                            "next" : None,
                            "results" : [],
                        }
                    )
            else:
                raise Http404

        
class complainceKPISnTrends(APIView):

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
            data = ComplianceDocument.objects.all().order_by('-created_at')
            if data.exists():                
                trend_data = []
                if filterType == 1:
                    data = data.filter(created_at__year=year)
                    trend = {
                        # "created" : data.filter(created_at__range=date_range).count(),
                        "approved" : data.filter(status=1).count(),
                        "rejected" : data.filter(status=2).count(),
                        "referred" : data.filter(referred=True).count(),
                    }
                    kpis = {
                        "created" : data.count(),
                        "approved" : data.filter(status=1).count(),
                        "rejected" : data.filter(status=2).count(),
                        "referred" : data.filter(referred=True).count(),
                    }
                    # Trending
                    datewise_data = data.values('created_at__year','created_at__month').distinct().order_by('created_at__year','created_at__month')
                    for date in datewise_data:
                        total_reviews = 0
                        review_data = data.filter(created_at__year=date['created_at__year'],created_at__month=date['created_at__month'])
                        if review_data.exists():
                            total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                        trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__year']}-{date['created_at__month']}", '%Y-%m') , '%b %Y'), total_reviews])
                if filterType == 2:
                    data = data.filter(created_at__year=monthyear, created_at__month=month)
                    trend = {
                        # "created" : data.filter(created_at__range=date_range).count(),
                        "approved" : data.filter(created_at__month=month,status=1).count(),
                        "rejected" : data.filter(created_at__month=month,status=2).count(),
                        "referred" : data.filter(created_at__month=month,referred=True).count(),
                    }
                    kpis = {
                        "created" : data.count(),
                        "approved" : data.filter(status=1).count(),
                        "rejected" : data.filter(status=2).count(),
                        "referred" : data.filter(referred=True).count(),
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
                        # "created" : data.filter(created_at__range=date_range).count(),
                        "approved" : data.filter(status=1).count(),
                        "rejected" : data.filter(status=2).count(),
                        "referred" : data.filter(referred=True).count(),
                    }
                    kpis = {
                        "created" : data.count(),
                        "approved" : data.filter(status=1).count(),
                        "rejected" : data.filter(status=2).count(),
                        "referred" : data.filter(referred=True).count(),
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
                        # "created" : data.filter(created_at__range=date_range).count(),
                        "approved" : data.filter(status=1).count(),
                        "rejected" : data.filter(status=2).count(),
                        "referred" : data.filter(referred=True).count(),
                    }
                    kpis = {
                        "created" : data.count(),
                        "approved" : data.filter(status=1).count(),
                        "rejected" : data.filter(status=2).count(),
                        "referred" : data.filter(referred=True).count(),
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
            if user.userType == 1:  
                data = ComplianceDocument.objects.filter(Q(user=user.pk) | Q(picked_up=user.pk)).order_by('-created_at')
                if data.exists():
                    trend_data = []
                    if filterType == 1:
                        data = data.filter(created_at__year=year)
                        trend = {
                            # "created" : data.filter(created_at__range=date_range).count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
                        }
                        kpis = {
                            "created" : data.count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
                        }
                        # Trending
                        datewise_data = data.values('created_at__year','created_at__month').distinct().order_by('created_at__year','created_at__month')
                        for date in datewise_data:
                            total_reviews = 0
                            review_data = data.filter(created_at__year=date['created_at__year'],created_at__month=date['created_at__month'])
                            if review_data.exists():
                                total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                            trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__year']}-{date['created_at__month']}", '%Y-%m') , '%b %Y'), total_reviews])
                    if filterType == 2:
                        data = data.filter(created_at__year=monthyear, created_at__month=month)
                        trend = {
                            # "created" : data.filter(created_at__range=date_range).count(),
                            "approved" : data.filter(created_at__month=month,status=1).count(),
                            "rejected" : data.filter(created_at__month=month,status=2).count(),
                            "referred" : data.filter(created_at__month=month,referred=True).count(),
                        }
                        kpis = {
                            "created" : data.count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
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
                            # "created" : data.filter(created_at__range=date_range).count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
                        }
                        kpis = {
                            "created" : data.count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
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
                            # "created" : data.filter(created_at__range=date_range).count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
                        }
                        kpis = {
                            "created" : data.count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
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
            if user.userType == 2:            
                data = ComplianceDocument.objects.filter(user=user.pk).order_by('-created_at')
                if data.exists():                    
                    trend_data = []
                    if filterType == 1:
                        data = data.filter(created_at__year=year)
                        trend = {
                            # "created" : data.filter(created_at__range=date_range).count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
                        }
                        kpis = {
                            "created" : data.count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
                        }
                        # Trending
                        datewise_data = data.values('created_at__year','created_at__month').distinct().order_by('created_at__year','created_at__month')
                        for date in datewise_data:
                            total_reviews = 0
                            review_data = data.filter(created_at__year=date['created_at__year'],created_at__month=date['created_at__month'])
                            if review_data.exists():
                                total_reviews = review_data.aggregate(total_reviews=Count('id'))['total_reviews']
                            trend_data.append([datetime.strftime(datetime.strptime(f"{date['created_at__year']}-{date['created_at__month']}", '%Y-%m') , '%b %Y'), total_reviews])
                    if filterType == 2:
                        data = data.filter(created_at__year=monthyear, created_at__month=month)
                        trend = {
                            # "created" : data.filter(created_at__range=date_range).count(),
                            "approved" : data.filter(created_at__month=month,status=1).count(),
                            "rejected" : data.filter(created_at__month=month,status=2).count(),
                            "referred" : data.filter(created_at__month=month,referred=True).count(),
                        }
                        kpis = {
                            "created" : data.count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
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
                            # "created" : data.filter(created_at__range=date_range).count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
                        }
                        kpis = {
                            "created" : data.count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
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
                            # "created" : data.filter(created_at__range=date_range).count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
                        }
                        kpis = {
                            "created" : data.count(),
                            "approved" : data.filter(status=1).count(),
                            "rejected" : data.filter(status=2).count(),
                            "referred" : data.filter(referred=True).count(),
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
                raise Http404


        
class ComplianceDocumentList(APIView):

    def get(self, request, format=None):
        user = request.user
        today = datetime.today().strftime('%Y-%m-%d')
        date_range = (datetime.strptime(today,'%Y-%m-%d') - timedelta(days=15) , datetime.strptime(today,'%Y-%m-%d') + timedelta(days=1))
        if user.is_superuser:
            data = ComplianceDocument.objects.all().order_by('-created_at')
            if data.exists():
                trend = {
                    # "created" : data.filter(created_at__range=date_range).count(),
                    "approved" : data.filter(created_at__range=date_range,status=1).count(),
                    "rejected" : data.filter(created_at__range=date_range,status=2).count(),
                    "referred" : data.filter(created_at__range=date_range,referred=True).count(),
                }
                kpis = {
                    "total" : data.count(),
                    "approved" : data.filter(status=1).count(),
                    "rejected" : data.filter(status=2).count(),
                    "referred" : data.filter(referred=True).count(),
                }
                data = data.values()
                p = Paginator(data, request.data['page_size'])
                data = p.page(request.data['page_number']).object_list
                for row in data:
                    advisor = UserAccount.objects.filter(pk=row['advisor_id'])
                    if advisor.exists():
                        advisor = advisor.values().first()
                        row['advisor_id'] = f"{advisor['first_name']} ({advisor['email']})"
                    else:
                        raise Http404
                    dId = row['id']
                    arc_status = False
                    userData = UserAccount.objects.filter(pk=row['user_id']).values().first()
                    # print(f"{userData['first_name']} {userData['last_name']} ({userData['email']})")
                    row['review_user'] = f"{userData['first_name']} {userData['last_name']} ({userData['email']})"
                    if arc.objects.filter(document=row['id']).exists():
                        arcData = arc.objects.filter(document=row['id']).order_by('updated_at').values("user","updated_at")

                        arc_status = True
                    row['arc_status'] = arc_status
                    row['last_review_date'] = row['updated_at']

                return Response({"data":data, "kpis": kpis, "trend" : trend})
            else:
                kpis = {
                    "total" : 0,
                    "approved" : 0,
                    "rejected" : 0,
                    "referred" : 0,
                }
                return Response({"data":[], "kpis": kpis, "trend": trend})
        else:
            if user.userType == 1:  
                data = ComplianceDocument.objects.filter(Q(user=user.pk) | Q(picked_up=user.pk)).order_by('-created_at')
                records = []
                if data.exists():
                    created = 0
                    kpis = {
                        "total" : data.count(),
                        "approved" : data.filter(status=1).count(),
                        "rejected" : data.filter(status=2).count(),
                        "referred" : data.filter(referred=True).count(),
                    }
                    data = data.values()
                    for row in data:
                        advisor = UserAccount.objects.filter(pk=row['advisor_id'])
                        if advisor.exists():
                            advisor = advisor.values().first()
                            row['advisor_id'] = f"{advisor['first_name']} ({advisor['email']})"
                        else:
                            raise Http404
                        arc_status = False
                        userData = UserAccount.objects.filter(pk=row['user_id']).values().first()
                        row['review_user'] = f"{userData['first_name']} {userData['last_name']} ({userData['email']})"
                        if row['status'] == 3 and not arc.objects.filter(document=row['id']).exists():
                            records.append(row)
                        if row['user_id'] == user.pk:
                            records.append(row)
                            created += 1
                        elif arc.objects.filter(document=row['id']).exists():
                            arc_record = arc.objects.filter(document=row['id']).values().first()
                            if arc_record['user_id'] == user.pk:
                                records.append(row)
                                arc_status = True
                                created += 1
                        row['arc_status'] = arc_status
                        row['last_review_date'] = row['updated_at']                    
                    
                    trend = {
                        "created" : created,
                        "approved" : data.filter(created_at__range=date_range,status=1).count(),
                        "rejected" : data.filter(created_at__range=date_range,status=2).count(),
                        "referred" : data.filter(created_at__range=date_range,referred=True).count(),
                    }          
                    return Response({"data":records, "kpis": kpis, "trend": trend})
                else:
                    kpis = {
                        "total" : 0,
                        "approved" : 0,
                        "rejected" : 0,
                        "referred" : 0,
                    }
                    return Response({"data":[], "kpis": kpis})
            if user.userType == 2:            
                data = ComplianceDocument.objects.all(user=user.pk).order_by('-created_at')
                if data.exists():
                    kpis = {
                        "created" : data.count(),
                        "approved" : data.filter(status=1).count(),
                        "rejected" : data.filter(status=2).count(),
                        "referred" : data.filter(referred=True).count(),
                    }
                    data = data.values()
                    for row in data:
                        advisor = UserAccount.objects.filter(pk=row['advisor_id'])
                        if advisor.exists():
                            advisor = advisor.values().first()
                            row['advisor_id'] = f"{advisor['first_name']} ({advisor['email']})"
                        else:
                            raise Http404
                        dId = row['id']
                        arc_status = False
                        if arc.objects.filter(document=row['id']).exists():
                            arc_status = True
                        row['arc_status'] = arc_status
                        row['last_review_date'] = row['updated_at']

                    return Response({"data":data, "trend": kpis})
                else:
                    kpis = {
                        "total" : 0,
                        "approved" : 0,
                        "rejected" : 0,
                        "referred" : 0,
                    }
                    return Response({"data":[], "kpis": kpis})
            else:
                raise Http404

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        newData['lump_sum'] = str(newData['lump_sum']).replace(" ","").replace(",",".")
        newData['monthly_premium'] = str(newData['monthly_premium']).replace(" ","").replace(",",".")
        newData['commission'] = str(newData['commission']).replace(" ","").replace(",",".")
        # newData['starting_point'] = 2
        if user.userType == 1:
            newData['referred'] = True
            newData['picked_up'] = user.pk
        #     newData['starting_point'] = 1        
        serializer = ComplianceDocument_Serializer(data=newData)
        if serializer.is_valid():
            document = serializer.save()
            data = {"document" : document.pk, "status" : 0}
            status_serializer = review_status_Serializer(data=data)
            if status_serializer.is_valid():
                review = status_serializer.save()
                if newData['starting_point'] == 2 and user.userType == 1:
                    comment = {
                        "user" : 0,
                        "type" : 3,
                        "title" : "",
                        "comment" : f"This review document was initiated by an ARC {user.first_name} ({user.email}) with Gatekeeping questionaire as starting point.",  
                        "document" : review.pk
                    }
                if newData['starting_point'] == 1 and user.userType == 1:
                    comment = {
                        "user" : 0,
                        "type" : 3,
                        "title" : "",
                        "comment" : f"This review document was initiated by an ARC {user.first_name} ({user.email}) with ARC questionaire as starting point.",  
                        "document" : review.pk
                    }
                else:
                    if user.userType == 1:
                        reviewerType = "ARC"
                    if user.userType == 2: 
                        reviewerType = "Gatekeeper" 
                    comment = {
                        "user" : 0,
                        "type" : 3,
                        "title" : "",
                        "comment" : f"This review document was initiated by an {reviewerType} {user.first_name} ({user.email}).",  
                        "document" : review.pk
                    }
                documentCommentSerializer = DocumentComments_Serializer(data=comment)
                if documentCommentSerializer.is_valid():
                    documentCommentSerializer.save()
            else:
                print(status_serializer.errors)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class ComplianceDocumentDetails(APIView):

    def get_object(self, pk):
        try:
            return ComplianceDocument.objects.filter(pk=pk)
        except ComplianceDocument.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        document = self.get_object(pk)
        document = document.values().latest('created_at')
        advisor = UserAccount.objects.filter(pk=document['advisor_id']).values().first()
        # advisor_profile = user_profile.objects.filter(user=document['advisor']).values().first()
        document['advisor_name'] = f"{advisor['first_name']} {advisor['last_name']}"
        document['advisor_email'] = advisor['email']
        profile = user_profile.objects.filter(user=advisor['id'])
        # advisor['email'] = advisor['email']
        # document['IdNumber'] = ""
        # document['advisorEmail'] = advisor['email']
        # document['bac'] = ""
        # document['bac_name'] = ""
        # document['supervisor'] = ""
        # document['supervisor_name'] = ""
        # document['region'] = ""
        flaggedData = flagged_users.objects.filter(user=advisor['id'])
        flag_color = ""
        if flaggedData.exists():
            flaggedData = flaggedData.values().first()
            flag_color_data = flag_colors.objects.filter(id=flaggedData['color_id'])
            if flag_color_data.exists():
                flag_color_data = flag_color_data.values().first()
                flag_color = flag_color_data['color']
        document['flag'] = flag_color
        if profile.exists():
            profile = user_profile.objects.filter(user=advisor['id']).values().first()
            document['IdNumber'] = profile['id_number']
            user_region = regions.objects.filter(pk=profile['region_id'])
            document['region'] = ""
            if user_region.exists():
                user_region = user_region.values().first()
                document['region'] = user_region['region']
            user_bac = UserAccount.objects.filter(pk=profile['bac_id'])
            document['bac'] = ""
            document['bac_name'] = ""
            if user_bac.exists():
                user_bac = user_bac.values().first()
                document['bac'] = f"{user_bac['id']}"
                document['bac_name'] = f"{user_bac['first_name']} {user_bac['last_name']}"
            arc_status = False
            if arc.objects.filter(document=document['id']).exists():
                arc_status = True
            document['arc_status'] = arc_status
        else:
            user_bac = UserAccount.objects.filter(pk=document['BAC'])
            if user_bac.exists():
                user_bac = user_bac.values().first()
                document['bac'] = f"{user_bac['id']}"
                document['bac_name'] = f"{user_bac['first_name']} {user_bac['last_name']}"
            arc_status = False
            if arc.objects.filter(document=document['id']).exists():
                arc_status = True
            document['arc_status'] = arc_status
        # document['bac'] = advisor_profile['bac']
        # document['advisor_region'] = advisor_profile['region']
        
        return Response(document)

    def post(self, request, pk, format=None):
        old = ComplianceDocument.objects.filter(pk=request.data['id'])
        if old.exists():
            oldData = old.values().first()
            if oldData['businessType'] != request.data['businessType']:
                gk = GateKeeping.objects.filter(document=pk)
                if gk.exists():
                    gk.delete()
            old.update(policy_number=request.data['policy_number'],clientName=request.data['clientName'],supplier=request.data['supplier'],product=request.data['product'],businessType=request.data['businessType'],otherBusinessType=request.data['otherBusinessType'])
            return Response(200)
        else:
            raise Http404
    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class GateKeepingList(APIView):

    def get(self, request, format=None):
        snippets = GateKeeping.objects.filter(advisor=request.user.pk)
        serializer = GateKeeping_Serializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        currenttime = datetime.now(pytz.timezone('Africa/Johannesburg')).strftime('%I:%M %p %d %b %Y')
        newData['user'] = user.pk
        if "document_id" in newData:
            newData['document'] = newData['document_id']
        gatekeepingdata = GateKeeping.objects.filter(document=newData['document'])
        document = ComplianceDocument.objects.filter(id=newData['document']).values().first()
        if gatekeepingdata.exists():
            old_version = gatekeepingdata.values().latest('created_at')['version']
            if gatekeepingdata.values().latest('created_at')['user_id'] != user.pk:
                version = old_version + 1
                newData['version'] = version
                if gatekeepingdata.values().earliest('created_at') != user.pk:
                    comment = {
                            "user" : 0,
                            "type" : 3,
                            "title" : "",
                            "comment" : f"Gatekeeping Document was updated by an external user {user.first_name} {user.last_name} ({user.email}) who did not create it. Thus a new version was created.",  
                            "document" : newData['document']
                        }
                    documentCommentSerializer = DocumentComments_Serializer(data=comment)
                    if documentCommentSerializer.is_valid():
                        documentCommentSerializer.save()
                else:
                    comment = {
                            "user" : 0,
                            "type" : 3,
                            "title" : "",
                            "comment" : f"Gatekeeping Document was updated by user {user.first_name} {user.last_name} ({user.email}) who created it. Thus a new version was created.",  
                            "document" : newData['document']
                        }
                    documentCommentSerializer = DocumentComments_Serializer(data=comment)
                    if documentCommentSerializer.is_valid():
                        documentCommentSerializer.save()
            else:
                if document['status'] == 2:
                    ComplianceDocument.objects.filter(id=newData['document']).update(status=7)
                    version = old_version + 1
                    newData['version'] = version
                else:
                    newData['version'] = old_version
        else:
            newData['version'] = 1
            version = 1
        if gatekeepingdata.exists() and old_version == newData['version']:
            version = newData['version']
            oldReview = GateKeeping.objects.get(id=gatekeepingdata.values().latest('created_at')['id'])
            serializer = GateKeeping_Serializer(instance=oldReview,data=newData)
            if serializer.is_valid():
                ComplianceDocument.objects.filter(id=newData['document']).update(updated_at=datetime.now())
                dId = serializer.save()
                gatekeepingDocument = GateKeeping.objects.filter(pk=dId.pk).values().first()
                gk = GateKeeping.objects.filter(pk=dId.pk)
                document = ComplianceDocument.objects.filter(pk=gatekeepingDocument['document_id'])
                document = document.values().first()
                businessType = document['businessType']
                score = 0
                missing = f"This case has some outstanding requirements before it can be approved for the release of commission:\n<ul>"
                total = 0
                # replacement = False
                # gkDocument = gk.values("replacement").first()
                # if gkDocument['replacement'] == 1:
                #     replacement = True
                if businessType == 1 or (businessType > 4 and businessType < 9) :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['risk_portfolio'] + gatekeepingDocument['mandate'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","risk_portfolio","mandate","replacement").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 3 or businessType == 4:
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 5 or businessType == 9:
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 12:
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 10 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 11 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['application']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","application").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 13 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra']
                    gkDocument = gk.values("fica","policy_schedule","proof_of_screening","dra").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            if key == "policy_schedule":
                                missing += "<li>Policy Schedule</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 14 or businessType == 15 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement']
                    gkDocument = gk.values("fica","policy_schedule","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            if key == "policy_schedule":
                                missing += "<li>Policy Schedule</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 2 :
                    # score = gatekeepingDocument['proof_of_screening']
                    gkDocument = gk.values("commission_release_form" ).latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"                                
                            if key == "commission_release_form":
                                missing += "<li>Commission Release Form</li>"
                            if key == "identity":
                                missing += "<li>Identity</li>"
                            if key == "disclosure":
                                missing += "<li>Disclosure</li>"
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                    score = round(score/total *100)
                
                missing += "</ul>"
                if missing != f"This case has some outstanding requirements before it can be approved for the release of commission:\n<ul></ul>":
                    comment = {
                        "user" : 0,
                        "type" : 3,
                        "title" : "",
                        "comment" : missing.replace('<ul>','').replace('</ul>','').replace('<li>','').replace('</li>',', '),  
                        "document" : gatekeepingDocument['document_id']
                    }
                else:
                    comment = {
                        "user" : 0,
                        "type" : 3,
                        "title" : "",
                        "comment" : f"No GK documents are missing as of {currenttime}",  
                        "document" : gatekeepingDocument['document_id']
                    }
                    missing = f"No GK documents are missing as of {currenttime}"
                documentCommentSerializer = DocumentComments_Serializer(data=comment)
                if documentCommentSerializer.is_valid():
                    documentCommentSerializer.save()
                else:
                    print(documentCommentSerializer.errors)
                print(missing)

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                print(serializer.errors)
            return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = GateKeeping_Serializer(data=newData)
            if serializer.is_valid():
                ComplianceDocument.objects.filter(id=newData['document']).update(updated_at=datetime.now())
                dId = serializer.create(serializer.validated_data)
                gatekeepingDocument = GateKeeping.objects.filter(pk=dId.pk).values().first()
                gk = GateKeeping.objects.filter(pk=dId.pk)
                
                # replacement = False
                # gkDocument = gk.values("replacement").first()
                # if gkDocument['replacement'] == 1:
                #     replacement = True
                document = ComplianceDocument.objects.filter(pk=gatekeepingDocument['document_id'])
                document = document.values().first()
                businessType = document['businessType']
                score = 0
                missing = f"This case has some outstanding requirements in review version {version} before it can be approved for the release of commission:\n<ul>"
                total = 0
                if businessType == 1 or (businessType > 4 and businessType < 9) :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['risk_portfolio'] + gatekeepingDocument['mandate'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","risk_portfolio","mandate","replacement","date_of_screening","timeously").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 3 or businessType == 4:
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement","date_of_screening","timeously").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                                
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 5 or businessType == 9:
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","date_of_screening","timeously").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 12:
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement","date_of_screening","timeously").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 10 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","date_of_screening","timeously").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement":
                                missing += "<li>Replacement?</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 11 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['application']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","application","date_of_screening","timeously").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 13 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra']
                    gkDocument = gk.values("fica","policy_schedule","proof_of_screening","dra","date_of_screening","timeously").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            if key == "policy_schedule":
                                missing += "<li>Policy Schedule</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 14 or businessType == 15 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement']
                    gkDocument = gk.values("fica","policy_schedule","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement","date_of_screening","timeously").latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "fica":
                                missing += "<li>FICA (Clear ID)</li>"
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "dra":
                                missing += "<li>DRA</li>"
                            if key == "letter_of_intro":
                                missing += "<li>Introduction letter</li>"
                            if key == "authorisation_letter":
                                missing += "<li>Authorisation letter</li>"
                            # if key == "roa_type":
                            #     missing += "<li>ROA Type</li>"
                            if key == "roa":
                                missing += "<li>ROA (All sections completed)</li>"
                            if key == "fna":
                                missing += "<li>FNA (Appropriate FNA filed)</li>"
                            if key == "application":
                                missing += "<li>Application</li>"
                            if key == "quotation":
                                missing += "<li>Quotation</li>"
                            if key == "risk_portfolio":
                                missing += "<li>Risk Portfolio</li>"
                            if key == "mandate":
                                missing += "<li>Mandate</li>"
                            if key == "replacement" : #and replacement == False:
                                missing += "<li>Replacement?</li>"
                            if key == "policy_schedule":
                                missing += "<li>Policy Schedule</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                            # if key == "replacement_type":
                            #     missing += "<li>Type of Replacement</li>"
                    score = round(score/total *100)
                if businessType == 2 :
                    # score = gatekeepingDocument['proof_of_screening']
                    gkDocument = gk.values("commission_release_form" ).latest('created_at')
                    for key in gkDocument:
                        if int(gkDocument[key]) == 0:
                            total += 100
                            if key == "proof_of_screening":
                                missing += "<li>Proof of Screening</li>"
                            if key == "commission_release_form":
                                missing += "<li>Commission Release Form</li>"
                            if key == "identity":
                                missing += "<li>Identity</li>"
                            if key == "disclosure":
                                missing += "<li>Disclosure</li>"
                        if int(gkDocument[key]) == 100:
                            total += 100
                            score += int(gkDocument[key])
                    score = round(score/total *100)
                
                missing += "</ul>"
                if missing != f"This case has some outstanding requirements in review version {version} before it can be approved for the release of commission:\n<ul></ul>":
                    comment = {
                        "user" : 0,
                        "type" : 3,
                        "title" : "",
                        "comment" : missing.replace('<ul>','').replace('</ul>','').replace('<li>','').replace('</li>',', '),  
                        "document" : gatekeepingDocument['document_id']
                    }
                else:
                    comment = {
                        "user" : 0,
                        "type" : 3,
                        "title" : "",
                        "comment" : f"No GK documents are missing as of {currenttime}",  
                        "document" : gatekeepingDocument['document_id']
                    }
                    missing = f"No GK documents are missing as of {currenttime}"
                documentCommentSerializer = DocumentComments_Serializer(data=comment)
                if documentCommentSerializer.is_valid():
                    documentCommentSerializer.save()
                else:
                    print(documentCommentSerializer.errors)
                

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                print(serializer.errors)
            return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class GateKeepingDetails(APIView):

    def get_object(self, pk):
        try:
            return GateKeeping.objects.get(pk=pk)
        except GateKeeping.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        if ComplianceDocument.objects.filter(pk=pk).exists():
            data = GateKeeping.objects.filter(document=pk)
            if data.exists():
                versions = data.values().order_by('version')
                data = data.values().latest('id')
                return Response({"data": data, "versions" : versions}, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = GateKeeping_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class GateKeepingVersionDetail(APIView):

    def get_object(self, pk):
        try:
            return GateKeeping.objects.get(pk=pk)
        except GateKeeping.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = GateKeeping_Serializer(snippet)
        return Response(serializer.data)

class ARCList(APIView):

    def get(self, request, format=None):
        snippets = arc.objects.filter(advisor=request.user.pk)
        serializer = arc_Serializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        if "document_id" in newData:
            newData['document'] = newData['document_id']
        arcdata = arc.objects.filter(document=newData['document'])
        if arcdata.exists():
            version = arcdata.values().first()['version']
            version += 1
            newData['version'] = version
        else:
            newData['version'] = 1
        serializer = arc_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class arcDetails(APIView):

    def get_object(self, pk):
        try:
            return arc.objects.get(pk=pk)
        except arc.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        if ComplianceDocument.objects.filter(pk=pk).exists():
            data = arc.objects.filter(document=pk)
            if data.exists():
                versions = data.values().order_by('version')
                data = data.values().latest('id')
                return Response({"data": data, "versions" : versions}, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class arcVersionDetail(APIView):

    def get_object(self, pk):
        try:
            return arc.objects.get(pk=pk)
        except arc.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_Serializer(snippet)
        return Response(serializer.data)

class ComplianceDocumentSummary(APIView):
    def get(self, request, pk, format=None):
        user = request.user
        currenttime = datetime.now(pytz.timezone('Africa/Johannesburg')).strftime('%I:%M %p %d %b %Y')
        document = ComplianceDocument.objects.filter(pk=pk)
        if document.exists():
            document = document.values().first()
            missing = f"This case has some outstanding requirements before it can be approved for the release of commission:\n<ul>"
            score = 0
            if document['starting_point'] == 2:
                gatekeepingDocument = GateKeeping.objects.filter(document=pk)
                if gatekeepingDocument.exists():
                    gatekeepingDocument = gatekeepingDocument
                    gk = gatekeepingDocument
                    # replacement = False
                    # gkDocument = gk.values("replacement").first()
                    # if gkDocument['replacement'] == 1:
                    #     replacement = True
                    
                    # version = gatekeepingDocument['version']
                    businessType = document['businessType']
                    total = 0
                    if businessType == 1 or (businessType > 4 and businessType < 9) :
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['risk_portfolio'] + gatekeepingDocument['mandate'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                        gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","risk_portfolio","mandate","replacement","date_of_screening","timeously").latest('id')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                                if key == "fica":
                                    missing += "<li>FICA (Clear ID)</li>"
                                if key == "proof_of_screening":
                                    missing += "<li>Proof of Screening</li>"
                                if key == "dra":
                                    missing += "<li>DRA</li>"
                                if key == "letter_of_intro":
                                    missing += "<li>Introduction letter</li>"
                                if key == "authorisation_letter":
                                    missing += "<li>Authorisation letter</li>"
                                # if key == "roa_type":
                                #     missing += "<li>ROA Type</li>"
                                if key == "roa":
                                    missing += "<li>ROA (All sections completed)</li>"
                                if key == "fna":
                                    missing += "<li>FNA (Appropriate FNA filed)</li>"
                                if key == "application":
                                    missing += "<li>Application</li>"
                                if key == "quotation":
                                    missing += "<li>Quotation</li>"
                                if key == "risk_portfolio":
                                    missing += "<li>Risk Portfolio</li>"
                                if key == "mandate":
                                    missing += "<li>Mandate</li>"
                                if key == "replacement" : #and replacement == False:
                                    missing += "<li>Replacement?</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                                # if key == "replacement_type":
                                #     missing += "<li>Type of Replacement</li>"
                        score = round(score/total *100)
                    if businessType == 3 or businessType == 4:
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                        gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement","date_of_screening","timeously").latest('id')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                                if key == "fica":
                                    missing += "<li>FICA (Clear ID)</li>"
                                if key == "proof_of_screening":
                                    missing += "<li>Proof of Screening</li>"
                                if key == "dra":
                                    missing += "<li>DRA</li>"
                                if key == "letter_of_intro":
                                    missing += "<li>Introduction letter</li>"
                                if key == "authorisation_letter":
                                    missing += "<li>Authorisation letter</li>"
                                # if key == "roa_type":
                                #     missing += "<li>ROA Type</li>"
                                if key == "roa":
                                    missing += "<li>ROA (All sections completed)</li>"
                                if key == "fna":
                                    missing += "<li>FNA (Appropriate FNA filed)</li>"
                                if key == "application":
                                    missing += "<li>Application</li>"
                                if key == "quotation":
                                    missing += "<li>Quotation</li>"
                                if key == "risk_portfolio":
                                    missing += "<li>Risk Portfolio</li>"
                                if key == "mandate":
                                    missing += "<li>Mandate</li>"
                                if key == "replacement" : #and replacement == False:
                                    missing += "<li>Replacement?</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                                # if key == "replacement_type":
                                #     missing += "<li>Type of Replacement</li>"
                        score = round(score/total *100)
                    if businessType == 5 or businessType == 9:
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation']
                        gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","date_of_screening","timeously").latest('id')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                                if key == "fica":
                                    missing += "<li>FICA (Clear ID)</li>"
                                if key == "proof_of_screening":
                                    missing += "<li>Proof of Screening</li>"
                                if key == "dra":
                                    missing += "<li>DRA</li>"
                                if key == "letter_of_intro":
                                    missing += "<li>Introduction letter</li>"
                                if key == "authorisation_letter":
                                    missing += "<li>Authorisation letter</li>"
                                # if key == "roa_type":
                                #     missing += "<li>ROA Type</li>"
                                if key == "roa":
                                    missing += "<li>ROA (All sections completed)</li>"
                                if key == "fna":
                                    missing += "<li>FNA (Appropriate FNA filed)</li>"
                                if key == "application":
                                    missing += "<li>Application</li>"
                                if key == "quotation":
                                    missing += "<li>Quotation</li>"
                                if key == "risk_portfolio":
                                    missing += "<li>Risk Portfolio</li>"
                                if key == "mandate":
                                    missing += "<li>Mandate</li>"
                                if key == "replacement" : #and replacement == False:
                                    missing += "<li>Replacement?</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                                # if key == "replacement_type":
                                #     missing += "<li>Type of Replacement</li>"
                        score = round(score/total *100)
                    if businessType == 12:
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                        gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement","date_of_screening","timeously").latest('id')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                                if key == "fica":
                                    missing += "<li>FICA (Clear ID)</li>"
                                if key == "proof_of_screening":
                                    missing += "<li>Proof of Screening</li>"
                                if key == "dra":
                                    missing += "<li>DRA</li>"
                                if key == "letter_of_intro":
                                    missing += "<li>Introduction letter</li>"
                                if key == "authorisation_letter":
                                    missing += "<li>Authorisation letter</li>"
                                # if key == "roa_type":
                                #     missing += "<li>ROA Type</li>"
                                if key == "roa":
                                    missing += "<li>ROA (All sections completed)</li>"
                                if key == "fna":
                                    missing += "<li>FNA (Appropriate FNA filed)</li>"
                                if key == "application":
                                    missing += "<li>Application</li>"
                                if key == "quotation":
                                    missing += "<li>Quotation</li>"
                                if key == "risk_portfolio":
                                    missing += "<li>Risk Portfolio</li>"
                                if key == "mandate":
                                    missing += "<li>Mandate</li>"
                                if key == "replacement" : #and replacement == False:
                                    missing += "<li>Replacement?</li>"
                            if key == "date_of_screening":
                                missing += "<li>Date of screening?</li>"
                            if key == "timeously":
                                missing += "<li>Timeously(within a month)?</li>"
                                # if key == "replacement_type":
                                #     missing += "<li>Type of Replacement</li>"
                        score = round(score/total *100)
                    if businessType == 10 :
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa']
                        gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","date_of_screening","timeously").latest('id')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                                if key == "fica":
                                    missing += "<li>FICA (Clear ID)</li>"
                                if key == "proof_of_screening":
                                    missing += "<li>Proof of Screening</li>"
                                if key == "dra":
                                    missing += "<li>DRA</li>"
                                if key == "letter_of_intro":
                                    missing += "<li>Introduction letter</li>"
                                if key == "authorisation_letter":
                                    missing += "<li>Authorisation letter</li>"
                                # if key == "roa_type":
                                #     missing += "<li>ROA Type</li>"
                                if key == "roa":
                                    missing += "<li>ROA (All sections completed)</li>"
                                if key == "fna":
                                    missing += "<li>FNA (Appropriate FNA filed)</li>"
                                if key == "application":
                                    missing += "<li>Application</li>"
                                if key == "quotation":
                                    missing += "<li>Quotation</li>"
                                if key == "risk_portfolio":
                                    missing += "<li>Risk Portfolio</li>"
                                if key == "mandate":
                                    missing += "<li>Mandate</li>"
                                if key == "replacement" : #and replacement == False:
                                    missing += "<li>Replacement?</li>"
                                if key == "date_of_screening":
                                    missing += "<li>Date of screening?</li>"
                                if key == "timeously":
                                    missing += "<li>Timeously(within a month)?</li>"
                                # if key == "replacement_type":
                                #     missing += "<li>Type of Replacement</li>"
                        score = round(score/total *100)
                    if businessType == 11 :
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['application']
                        gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","application","date_of_screening","timeously").latest('id')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                                if key == "fica":
                                    missing += "<li>FICA (Clear ID)</li>"
                                if key == "proof_of_screening":
                                    missing += "<li>Proof of Screening</li>"
                                if key == "dra":
                                    missing += "<li>DRA</li>"
                                if key == "letter_of_intro":
                                    missing += "<li>Introduction letter</li>"
                                if key == "authorisation_letter":
                                    missing += "<li>Authorisation letter</li>"
                                # if key == "roa_type":
                                #     missing += "<li>ROA Type</li>"
                                if key == "roa":
                                    missing += "<li>ROA (All sections completed)</li>"
                                if key == "fna":
                                    missing += "<li>FNA (Appropriate FNA filed)</li>"
                                if key == "application":
                                    missing += "<li>Application</li>"
                                if key == "quotation":
                                    missing += "<li>Quotation</li>"
                                if key == "risk_portfolio":
                                    missing += "<li>Risk Portfolio</li>"
                                if key == "mandate":
                                    missing += "<li>Mandate</li>"
                                if key == "replacement" : #and replacement == False:
                                    missing += "<li>Replacement?</li>"
                                if key == "date_of_screening":
                                    missing += "<li>Date of screening?</li>"
                                if key == "timeously":
                                    missing += "<li>Timeously(within a month)?</li>"
                                # if key == "replacement_type":
                                #     missing += "<li>Type of Replacement</li>"
                        score = round(score/total *100)
                    if businessType == 13 :
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra']
                        gkDocument = gk.values("fica","proof_of_screening","dra","policy_schedule","date_of_screening","timeously").latest('id')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                                if key == "fica":
                                    missing += "<li>FICA (Clear ID)</li>"
                                if key == "proof_of_screening":
                                    missing += "<li>Proof of Screening</li>"
                                if key == "dra":
                                    missing += "<li>DRA</li>"
                                if key == "letter_of_intro":
                                    missing += "<li>Introduction letter</li>"
                                if key == "authorisation_letter":
                                    missing += "<li>Authorisation letter</li>"
                                # if key == "roa_type":
                                #     missing += "<li>ROA Type</li>"
                                if key == "roa":
                                    missing += "<li>ROA (All sections completed)</li>"
                                if key == "fna":
                                    missing += "<li>FNA (Appropriate FNA filed)</li>"
                                if key == "application":
                                    missing += "<li>Application</li>"
                                if key == "quotation":
                                    missing += "<li>Quotation</li>"
                                if key == "risk_portfolio":
                                    missing += "<li>Risk Portfolio</li>"
                                if key == "mandate":
                                    missing += "<li>Mandate</li>"
                                if key == "replacement" : #and replacement == False:
                                    missing += "<li>Replacement?</li>"
                                if key == "policy_schedule":
                                    missing += "<li>Policy Schedule?</li>"
                                if key == "date_of_screening":
                                    missing += "<li>Date of screening?</li>"
                                if key == "timeously":
                                    missing += "<li>Timeously(within a month)?</li>"
                                # if key == "replacement_type":
                                #     missing += "<li>Type of Replacement</li>"
                        score = round(score/total *100)
                    if businessType == 14 or businessType == 15 :
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement']
                        gkDocument = gk.values("fica","policy_schedule","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement","date_of_screening","timeously").latest('id')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                                if key == "fica":
                                    missing += "<li>FICA (Clear ID)</li>"
                                if key == "proof_of_screening":
                                    missing += "<li>Proof of Screening</li>"
                                if key == "dra":
                                    missing += "<li>DRA</li>"
                                if key == "letter_of_intro":
                                    missing += "<li>Introduction letter</li>"
                                if key == "authorisation_letter":
                                    missing += "<li>Authorisation letter</li>"
                                if key == "date_of_screening":
                                    missing += "<li>Date of screening?</li>"
                                if key == "timeously":
                                    missing += "<li>Timeously(within a month)?</li>"
                                # if key == "roa_type":
                                #     missing += "<li>ROA Type</li>"
                                if key == "roa":
                                    missing += "<li>ROA (All sections completed)</li>"
                                if key == "fna":
                                    missing += "<li>FNA (Appropriate FNA filed)</li>"
                                if key == "application":
                                    missing += "<li>Application</li>"
                                if key == "quotation":
                                    missing += "<li>Quotation</li>"
                                if key == "risk_portfolio":
                                    missing += "<li>Risk Portfolio</li>"
                                if key == "mandate":
                                    missing += "<li>Mandate</li>"
                                if key == "replacement" : #and replacement == False:
                                    missing += "<li>Replacement?</li>"
                                if key == "policy_schedule":
                                    missing += "<li>Policy Schedule?</li>"
                                # if key == "replacement_type":
                                #     missing += "<li>Type of Replacement</li>"
                        score = round(score/total *100)
                    if businessType == 2 :
                        # score = gatekeepingDocument['proof_of_screening']
                        gkDocument = gk.values("commission_release_form" ).latest('created_at')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                                if key == "proof_of_screening":
                                    missing += "<li>Proof of Screening</li>"
                                if key == "commission_release_form":
                                    missing += "<li>Commission Release Form</li>"
                                if key == "identity":
                                    missing += "<li>Identity</li>"
                                if key == "disclosure":
                                    missing += "<li>Disclosure</li>"
                        score = round(score/total *100)

                    # missing += "</ul>"
            arcDocument = arc.objects.filter(document=pk)
            arcStatus = False
            arc_score = 0
            if arcDocument.exists():
                arcStatus = True
                arcDocument = arcDocument
                aDoc = arcDocument
                replacement = False
                arcDocument = aDoc.values("replacement_terms").first()
                if arcDocument['replacement_terms'] == 1:
                    replacement = True
                businessType = document['businessType']
                arc_score = 0
                if businessType < 14 :
                    aDocument = aDoc.values("client_needs","appropriate_fna","fna_outcome","product_suitability","alternative_solutions","material_aspects","special_terms","replacement_terms").latest('id')
                    arc_total = 120 if replacement == False else 100
                    for key in aDocument:
                        if key == "replacement_terms" and replacement:
                            continue    
                        arc_score += aDocument[key]
                        if aDocument[key] == 0:
                            if key == "client_needs":
                                missing += "<li>Client Needs</li>"
                            if key == "appropriate_fna":
                                missing += "<li>Appropriate FNA</li>"
                            if key == "fna_outcome":
                                missing += "<li>FNA Outcome</li>"
                            if key == "product_suitability":
                                missing += "<li>Product Suitability</li>"
                            if key == "alternative_solutions":
                                missing += "<li>Alternative Solutions</li>"
                            if key == "material_aspects":
                                missing += "<li>Material Aspects</li>"
                            if key == "special_terms":
                                missing += "<li>Special Terms</li>"
                            if key == "replacement_terms" and replacement == False:
                                missing += "<li>Replacement Terms</li>"
                    arc_score = round(arc_score/arc_total *100)
                if businessType >= 14 :
                    aDocument = aDoc.values("disclosure_a", "disclosure_b", "personal_details_a", "personal_details_b", "general_a", "general_b", "general_c", "general_d", "risk_classes_a", "risk_classes_b", "fna_a", "fna_b", "recommended_products_a", "recommended_products_b", "recommended_products_c", "replacements_a", "replacements_b", "replacements_c", "replacements_d", "client_consent_a", "client_consent_b", ).latest('id')
                    for key in aDocument:
                        arc_score += aDocument[key]
                        if aDocument[key] == 0:
                            if key == "disclosure_a":
                                missing += "<li>Disclosure A</li>"
                            if key == "disclosure_b":
                                missing += "<li>Disclosure B</li>"
                            if key == "personal_details_a":
                                missing += "<li>Personal Details A</li>"
                            if key == "personal_details_b":
                                missing += "<li>Personal Details B</li>"
                            if key == "general_a":
                                missing += "<li>General A</li>"
                            if key == "general_b":
                                missing += "<li>General B</li>"
                            if key == "general_c":
                                missing += "<li>General C</li>"
                            if key == "general_d":
                                missing += "<li>General D</li>"
                            if key == "risk_classes_a":
                                missing += "<li>Risk Classes A</li>"
                            if key == "risk_classes_b":
                                missing += "<li>Risk Classes B</li>"
                            if key == "fna_a":
                                missing += "<li>Financial Needs Analysis A</li>"
                            if key == "fna_b":
                                missing += "<li>Financial Needs Analysis B</li>"
                            if key == "recommended_products_a":
                                missing += "<li>Recommended Products A</li>"
                            if key == "recommended_products_b":
                                missing += "<li>Recommended Products B</li>"
                            if key == "recommended_products_c":
                                missing += "<li>Recommended Products C</li>"
                            if key == "replacements_a":
                                missing += "<li>Replacements A</li>"
                            if key == "replacements_b":
                                missing += "<li>Replacements B</li>"
                            if key == "replacements_c":
                                missing += "<li>Replacements C</li>"
                            if key == "replacements_d":
                                missing += "<li>Replacements D</li>"
                            if key == "client_consent_a":
                                missing += "<li>Client Consent A</li>"
                            if key == "client_consent_b":
                                missing += "<li>Client Consent B</li>"
                    arc_total = 100
                    for key in aDocument:
                        if aDocument[key] == 5:
                            arc_score += aDocument[key]
                    arc_score = round(arc_score/arc_total *100)
            
            missing += "</ul>"
            comments = DocumentComments.objects.filter(document=pk).values().order_by('-created_at')
            for comment in comments:
                user = UserAccount.objects.filter(id=comment['user_id'])
                if user.exists():
                    user = user.values().first()
                    comment['commenting_user'] = f"{user['first_name']} {user['last_name']}"  
            emailResponse = f"""
                    Dear Advisor<br/><br/>Thank you for submitting the case {document['policy_number']} for compliance review. {missing}<br/>Please provide these outstanding requirements:
                    <br/>Once you have met these requirements, please upload the updated documents to Sanfin and resubmit the case for a second review by completing the task: "Gatekeeper Requires More Compliance Documents"/ "ARC Requires More Compliance Documents" on Sanfin. Please notify me once you have done this.
                    <br/><br/>Let me know if you have any other questions.
                    <br/><br/>Kind Regards
                """
            if missing == f"This case has some outstanding requirements before it can be approved for the release of commission:\n<ul></ul>":
                emailResponse = f"""
                        Dear Advisor<br/><br/>Thank you for submitting the case {document['policy_number']} for compliance review. No documents were missing.
                        <br/><br/>Kind Regards
                    """

            
            return Response({
                "score" : score,
                "arc_score" : arc_score,
                "arc_status" : arcStatus,
                "comments" : comments,
                "missing": emailResponse
            })
            # else:
            #     raise Http404
        else:
            raise Http404
        
    def post(self, request, pk, format=None):
        user = request.user
        document = ComplianceDocument.objects.filter(pk=pk)
        if document.exists():
            status = request.data['status']
            data = {
                "document" : pk,
                "status": status,
                "user" : user.pk
            }
            old = ComplianceDocument.objects.get(pk=pk)
            serializer = ComplianceDocument_Serializer(instance=old, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    "message": "Updated",
                    }, 200)
            else:
                return Response({
                    "error": serializer.errors,
                    }, 500)
        else:
            raise Http404


class DocumentCommentsList(APIView):

    def get(self, request, format=None):
        snippets = DocumentComments.objects.filter(advisor=request.user.pk)
        serializer = DocumentComments_Serializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        serializer = DocumentComments_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class DocumentCommentsDetails(APIView):

    def get_object(self, pk):
        try:
            return DocumentComments.objects.get(pk=pk)
        except DocumentComments.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = DocumentComments_Serializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = DocumentComments_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class arc_questionsList(APIView):

    def get(self, request, format=None):
        snippets = arc_questions.objects.filter()
        serializer = arc_questions_Serializer(snippets, many=True)        
        data = serializer.data
        for row in data :
            category = arc_question_header.objects.filter(id=row['category'])
            if category.exists():
                row['category'] = category.values().first()['title']
            else:
                row['category'] = ""
        return Response(data)

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        serializer = arc_questions_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class arc_questionsDetails(APIView):

    def get_object(self, pk):
        try:
            return arc_questions.objects.get(pk=pk)
        except arc_questions.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_questions_Serializer(snippet)
        data = serializer.data
        category = arc_question_header.objects.filter(id=data['category'])
        if category.exists():
            category = category.values().first()
            data['category'] = {
                'id' : category['id'],
                'name' : 'category',
                'label' : category['title'],
                'value' : str(category['title']).lower(),
            }
        else:
            data['category'] = ""
        return Response(data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_questions_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class arc_question_headerList(APIView):

    def get(self, request, format=None):
        snippets = arc_question_header.objects.filter()
        serializer = arc_question_header_Serializer(snippets, many=True)
        data = []
        for row in serializer.data:
            data.append({
                'id' : row['id'],
                'name' : 'category',
                'label' : row['title'],
                'value' : str(row['title']).lower(),
            })
        return Response({"data": serializer.data, "select_data": data})

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        serializer = arc_question_header_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class arc_question_headerDetails(APIView):

    def get_object(self, pk):
        try:
            return arc_question_header.objects.get(pk=pk)
        except arc_question_header.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_question_header_Serializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_question_header_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class arcList(APIView):

    def get(self, request, format=None):
        snippets = arc.objects.filter()
        serializer = arc_Serializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        newData['document'] = newData['document_id'] if "document" not in request.data else newData['document']
        reviewDoc = ComplianceDocument.objects.filter(id=newData['document'])
        if user.userType != 1:
            return Response({"message": "You don't have access to perform this."}, 401)
        if reviewDoc.exists():
            reviewDoc = reviewDoc.values().first()
            if reviewDoc['status'] == 3:
                ComplianceDocument.objects.filter(id=newData['document']).update(picked_up = user.pk)
            ComplianceDocument.objects.filter(id=newData['document']).update(updated_at=datetime.now())
            arcdata = arc.objects.filter(document=newData['document'])
            old_version = arcdata.values().latest('created_at')['version'] if arcdata.exists() else 0
            version = 0
            if arcdata.exists():
                if arcdata.values().latest('created_at')['user_id'] != user.pk:
                    version = old_version + 1
                    newData['version'] = version
                    if arcdata.values().earliest('created_at') != user.pk:
                        comment = {
                                "user" : 0,
                                "type" : 3,
                                "title" : "",
                                "comment" : f"ARC Document was updated by an external user {user.first_name} {user.last_name} ({user.email}) who did not create it. Thus a new version was created.",  
                                "document" : newData['document']
                            }
                        documentCommentSerializer = DocumentComments_Serializer(data=comment)
                        if documentCommentSerializer.is_valid():
                            documentCommentSerializer.save()
                    else:
                        comment = {
                                "user" : 0,
                                "type" : 3,
                                "title" : "",
                                "comment" : f"ARC Document was updated by user {user.first_name} {user.last_name} ({user.email}) who created it. Thus a new version was created.",  
                                "document" : newData['document']
                            }
                        documentCommentSerializer = DocumentComments_Serializer(data=comment)
                        if documentCommentSerializer.is_valid():
                            documentCommentSerializer.save()
                else:
                    if reviewDoc['status'] == 2:
                        ComplianceDocument.objects.filter(id=newData['document']).update(status=7)
                        version = old_version + 1
                    else:
                        version = old_version
            else:
                if reviewDoc['user_id'] != user.pk:
                    ComplianceDocument.objects.filter(id=newData['document']).update(status = 5)
                version = 1
                old_version = 1
            newData['version'] = version
            currenttime = datetime.now(pytz.timezone('Africa/Johannesburg')).strftime('%I:%M %p %d %b %Y')
            if arcdata.exists() and old_version == newData['version']:
                oldReview = arc.objects.get(id=arcdata.values().latest('created_at')['id'])
                serializer = arc_Serializer(instance=oldReview, data=newData)
                if serializer.is_valid():
                    serializer.save()
                    missing = f"This case has some outstanding requirements in ARC review version {version} (updated on {currenttime}) before it can be approved for the release of commission:\n"
                    businessType = reviewDoc['businessType']
                    if businessType < 14 :
                        aDocument = arcdata.values("client_needs","appropriate_fna","fna_outcome","product_suitability","alternative_solutions","material_aspects","special_terms","replacement_terms").latest('id')
                        for key in aDocument:
                            if aDocument[key] == 0:
                                if key == "client_needs":
                                    missing += "Client Needs, "
                                if key == "appropriate_fna":
                                    missing += "Appropriate FNA, "
                                if key == "fna_outcome":
                                    missing += "FNA Outcome"
                                if key == "product_suitability":
                                    missing += "Product Suitability, "
                                if key == "alternative_solutions":
                                    missing += "Alternative Solutions, "
                                if key == "material_aspects":
                                    missing += "Material Aspects, "
                                if key == "special_terms":
                                    missing += "Special Terms, "
                                if key == "replacement_terms":
                                    missing += "Replacement Terms"
                    if businessType >= 14 :
                        aDocument = arcdata.values("disclosure_a", "disclosure_b", "personal_details_a", "personal_details_b", "general_a", "general_b", "general_c", "general_d", "risk_classes_a", "risk_classes_b", "fna_a", "fna_b", "recommended_products_a", "recommended_products_b", "recommended_products_c", "replacements_a", "replacements_b", "replacements_c", "replacements_d", "client_consent_a", "client_consent_b", ).latest('id')
                        for key in aDocument:
                            if aDocument[key] == 0:
                                if key == "disclosure_a":
                                    missing += "<li>Disclosure A</li>"
                                if key == "disclosure_b":
                                    missing += "<li>Disclosure B</li>"
                                if key == "personal_details_a":
                                    missing += "<li>Personal Details A</li>"
                                if key == "personal_details_b":
                                    missing += "<li>Personal Details B</li>"
                                if key == "general_a":
                                    missing += "<li>General A</li>"
                                if key == "general_b":
                                    missing += "<li>General B</li>"
                                if key == "general_c":
                                    missing += "<li>General C</li>"
                                if key == "general_d":
                                    missing += "<li>General D</li>"
                                if key == "risk_classes_a":
                                    missing += "<li>Risk Classes A</li>"
                                if key == "risk_classes_b":
                                    missing += "<li>Risk Classes B</li>"
                                if key == "fna_a":
                                    missing += "<li>Financial Needs Analysis A</li>"
                                if key == "fna_b":
                                    missing += "<li>Financial Needs Analysis B</li>"
                                if key == "recommended_products_a":
                                    missing += "<li>Recommended Products A</li>"
                                if key == "recommended_products_b":
                                    missing += "<li>Recommended Products B</li>"
                                if key == "recommended_products_c":
                                    missing += "<li>Recommended Products C</li>"
                                if key == "replacements_a":
                                    missing += "<li>Replacements A</li>"
                                if key == "replacements_b":
                                    missing += "<li>Replacements B</li>"
                                if key == "replacements_c":
                                    missing += "<li>Replacements C</li>"
                                if key == "replacements_d":
                                    missing += "<li>Replacements D</li>"
                                if key == "client_consent_a":
                                    missing += "<li>Client Consent A</li>"
                                if key == "client_consent_b":
                                    missing += "<li>Client Consent B</li>"
                    
                    if missing != f"This case has some outstanding requirements in ARC review version {version} (updated on {currenttime}) before it can be approved for the release of commission:\n":
                        comment = {
                            "user" : 0,
                            "type" : 3,
                            "title" : "",
                            "comment" : missing.replace('<ul>','').replace('</ul>','').replace('<li>','').replace('</li>',', '),  
                            "document" : newData['document']
                        }
                    else:
                        comment = {
                            "user" : 0,
                            "type" : 3,
                            "title" : "",
                            "comment" : f"No ARC documents are missing as of {currenttime}",  
                            "document" : newData['document']
                        }
                    documentCommentSerializer = DocumentComments_Serializer(data=comment)
                    if documentCommentSerializer.is_valid():
                        documentCommentSerializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    print(serializer.errors)
                    return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
            else:
                serializer = arc_Serializer(data=newData)
                if serializer.is_valid():
                    newARC_id = serializer.create(serializer.validated_data)
                    arcdata = arc.objects.filter(id=newARC_id.pk)

                    missing = f"This case has some outstanding requirements in ARC review version {version} before it can be approved for the release of commission:\n"
                    aDocument = arcdata.values("client_needs","appropriate_fna","fna_outcome","product_suitability","alternative_solutions","material_aspects","special_terms","replacement_terms").latest('id')
                    for key in aDocument:
                        if aDocument[key] == 0:
                            if key == "client_needs":
                                missing += "Client Needs, "
                            if key == "appropriate_fna":
                                missing += "Appropriate FNA, "
                            if key == "fna_outcome":
                                missing += "FNA Outcome"
                            if key == "product_suitability":
                                missing += "Product Suitability, "
                            if key == "alternative_solutions":
                                missing += "Alternative Solutions, "
                            if key == "material_aspects":
                                missing += "Material Aspects, "
                            if key == "special_terms":
                                missing += "Special Terms, "
                            if key == "replacement_terms":
                                missing += "Replacement Terms"
                    if missing == f"This case has some outstanding requirements in ARC review version {version} before it can be approved for the release of commission:\n":
                        comment = {
                            "user" : 0,
                            "type" : 3,
                            "title" : "",
                            "comment" : f"Review was picked up by an ARC, {user.first_name} {user.last_name} ({user.email}). {missing}",  
                            "document" : newData['document']
                        }
                    else:
                        comment = {
                            "user" : 0,
                            "type" : 3,
                            "title" : "",
                            "comment" : f"No ARC documents are missing as of {currenttime}",  
                            "document" : newData['document']
                        }
                    documentCommentSerializer = DocumentComments_Serializer(data=comment)
                    if documentCommentSerializer.is_valid():
                        documentCommentSerializer.save()
                else:
                    return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
                if arcdata.exists() and reviewDoc['status'] == 2:
                    comment = {
                        "user" : 0,
                        "type" : 3,
                        "title" : "",
                        "comment" : f"Review was updated to Not Aproved and edited, {user.first_name} {user.last_name} ({user.email})",  
                        "document" : newData['document']
                    }
                else:                    
                    comment = {
                        "user" : 0,
                        "type" : 3,
                        "title" : "",
                        "comment" : f"Review was picked up by an ARC, {user.first_name} {user.last_name} ({user.email})",  
                        "document" : newData['document']
                    }
                documentCommentSerializer = DocumentComments_Serializer(data=comment)
                if documentCommentSerializer.is_valid():
                    documentCommentSerializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            raise Http404


class loadRegions(APIView):

    def get(self, request):
        user = request.user
        if user.is_superuser or user.userType != 6:
            regionsData = regions.objects.all().order_by('region')
            if user.userType == 3:
                regional_manager = region_manager.objects.filter(manager=user.pk)
                if regional_manager.exists():
                    regional_manager = regional_manager.first()
                    regionsData = regionsData.filter(id=regional_manager.region.pk)
                else:
                    raise Http404
            if user.userType == 5:
                region_ids = user_profile.objects.filter(bac=user.pk)
                if region_ids.exists():
                    region_ids = list(region_ids.values_list('region', flat=True))
                    regionsData = regionsData.filter(id__in=region_ids)
                else:
                    raise Http404
            if regionsData.exists():
                regionsData = regionsData.values()
                data = []
                for region in regionsData:
                    data.append({
                        "value" : region['id'],
                        "label" : f"{region['region']}",
                        "name" : "region",
                        "id" : f"{region['region']}",
                    })
                return Response({
                    "regions" : data
                })
            else:
                raise Http404
        else:
            user_profile_data = user_profile.objects.filter(user=user.pk).select_related('region')
            if user_profile_data.exists():
                region = user_profile_data.first().region
                if region is not None:
                    data = [{
                            "value" : region.pk,
                            "label" : f"{region.region}",
                            "name" : "region",
                            "id" : f"{region.region}",
                        }]
                    return Response({
                        "regions" : data
                    })
                else:
                    raise Http404
            else:
                raise Http404
        
class loadagents(APIView):

    def get(self, request):
        user = request.user
        if user.is_superuser or user.userType != 6:
            advisors = user_profile.objects.filter(user__userType = 6).order_by('Full_Name')
            if "region" in request.data:
                advisors = advisors.filter(region=request.data['region'])
            if user.userType == 3:
                region = region_manager.objects.filter(manager=user.pk)
                if region.exists():
                    advisors = advisors.filter(region=region.first().region.pk)
                else:
                    raise Http404
            if user.userType == 5:
                advisors = advisors.filter(bac=user.pk)
            data = []
            if advisors.exists():
                for advisor in advisors:
                    data.append({
                        "value" : advisor.user.pk,
                        "label" : f"{advisor.Full_Name} ({advisor.ID_Number})",
                        "name" : "advisor",
                        "id" : advisor.user.pk,
                    })
                return Response({
                    "advisors" : data
                })
        else:
            advisors = UserAccount.objects.filter(id=user.pk).order_by('first_name')
            if advisors.exists():
                advisors = advisors.values()
                print(advisors)
                data = []
                for advisor in advisors:
                    profile = user_profile.objects.filter(user=advisor['id'])
                    name = f"{advisor['first_name']} {advisor['last_name']}"
                    id_number = ""
                    if profile.exists():
                        profile = user_profile.objects.filter(user=advisor['id']).values().first()
                        id_number = profile['ID_Number']
                        name = profile['Full_Name']
                    data.append({
                        "value" : advisor['id'],
                        "label" : f"{name} ({id_number})",
                        "name" : "advisor",
                        "id" : advisor['id'],
                    })
                return Response({
                    "advisors" : data
                })
            return Response({
                "advisors" : data
            })
        
class loadgatekeepers(APIView):

    def get(self, request):
        user = request.user
        if user.is_superuser or user.userType == 1 or user.userType == 2:
            gatekeepers = UserAccount.objects.filter(userType = 2)
            if gatekeepers.exists():
                gatekeepers = gatekeepers.values()
                data = []
                for gatekeeper in gatekeepers:
                    profile = user_profile.objects.filter(user=gatekeeper['id'])
                    id_number = ""
                    if profile.exists():
                        profile = user_profile.objects.filter(user=gatekeeper['id']).values().first()
                        id_number = profile['id_number']
                    data.append({
                        "value" : gatekeeper['id'],
                        "label" : f"{gatekeeper['first_name']} {gatekeeper['last_name']} ({id_number})",
                        "name" : "gatekeeper",
                        "id" : gatekeeper['id'],
                    })
                return Response({
                    "gatekeepers" : data
                })
            else:
                raise Http404
        else:
            return Response(status.HTTP_401_UNAUTHORIZED)

class loadbacs(APIView):

    def get(self, request):
        user = request.user
        if user.is_superuser or user.userType == 1 or user.userType == 2:
            bacs = UserAccount.objects.filter(userType = 5)
            if bacs.exists():
                bacs = bacs.values()
                data = []
                for advisor in bacs:
                    profile = user_profile.objects.filter(user=advisor['id'])
                    id_number = ""
                    data.append({
                        "value" : advisor['id'],
                        "label" : f"{advisor['first_name']} {advisor['last_name']}",
                        "name" : "BAC",
                        "id" : advisor['id'],
                    })
                return Response({
                    "bacs" : data
                })
            else:
                raise Http404
        else:
            return Response(status.HTTP_401_UNAUTHORIZED)
        

class loadagentsDetail(APIView):

    def post(self, request):
        user = request.user
        if user.is_superuser or user.userType == 1 or user.userType == 2:
            data = request.data['data']
            
            advisor = UserAccount.objects.filter(userType = 6, pk=request.data['advisorId']).order_by('first_name')
            if advisor.exists():
                advisor = advisor.values().first()
                data['advisor'] = request.data['advisorId']
                profile = user_profile.objects.filter(user=advisor['id'])
                # advisor['email'] = advisor['email']
                data['IdNumber'] = ""
                data['advisorEmail'] = advisor['email']
                data['bac'] = ""
                data['bac_name'] = ""
                data['supervisor'] = ""
                data['supervisor_name'] = ""
                data['region'] = ""
                data['categorisation'] = ""
                if profile.exists():
                    profile = user_profile.objects.filter(user=advisor['id']).values().first()
                    data['IdNumber'] = profile['ID_Number']
                    data['supervision'] = profile['supervision']
                    user_region = regions.objects.filter(pk=profile['region_id'])
                    data['region'] = ""
                    if user_region.exists():
                        user_region = user_region.values().first()
                        data['region'] = user_region['region']
                    # user_categorisation = categorisation.objects.filter(pk=profile['categorisation_id'])
                    data['categorisation'] = profile['Investment_Category_option'] if profile['Investment_Category_option'] else ""
                    # if user_categorisation.exists():
                    #     user_categorisation = user_categorisation.values().first()
                    #     data['categorisation'] = user_categorisation['categorisation']
                    user_bac = UserAccount.objects.filter(pk=profile['bac_id'])
                    data['bac'] = ""
                    data['bac_name'] = ""
                    if user_bac.exists():
                        user_bac = user_bac.values().first()
                        data['bac'] = f"{user_bac['id']}"
                        data['bac_name'] = f"{user_bac['first_name']} {user_bac['last_name']}"
                    data['flag'] = profile['Advisor_Tag']
                    # user_supervision = UserAccount.objects.filter(pk=profile['supervision_id'])
                    # data['supervisor'] = ""
                    # data['supervisor_name'] = ""
                    # if user_supervision.exists():
                    #     user_supervision = user_supervision.values().first()
                    #     data['supervisor'] = f"{user_supervision['id']}"
                    #     data['supervisor_name'] = f"{user_supervision['first_name']} {user_supervision['last_name']}"
                    data['supervisor_name'] = f"N.A."
                # flaggedData = flagged_users.objects.filter(user=request.data['advisorId'])
                # flag_color = ""
                # if flaggedData.exists():
                #     flaggedData = flaggedData.values().first()
                #     flag_color_data = flag_colors.objects.filter(id=flaggedData['color_id'])
                #     if flag_color_data.exists():
                #         flag_color_data = flag_color_data.values().first()
                #         flag_color = flag_color_data['color']
                
                return Response({
                    "data" : data
                })
            else:
                raise Http404
        else:
            return Response(status.HTTP_401_UNAUTHORIZED)
        

class ExportData(APIView):

    def post(self, request):
        data = request.data
        documents = ComplianceDocument.objects.all().order_by('-created_at')
        filter_type = int(data['filter_type'])
        if filter_type != 0:
            if filter_type == 1:
                year = data['year']
                documents = documents.filter(created_at__year=year).order_by('created_at__year')
            elif filter_type == 2:
                date = str(data['month_date'])
                month = date.split('-')[1]
                year = date.split('-')[0]
                documents = documents.filter(created_at__year=year, created_at__month=month).order_by('created_at__year', 'created_at__month')
            elif filter_type == 3:
                date = str(data['date'])
                day = date.split('-')[2]
                month = date.split('-')[1]
                year = date.split('-')[0]
                documents = documents.filter(created_at__year=year, created_at__month=month, created_at__day=day).order_by('created_at__year', 'created_at__month', 'created_at__day')
            else:
                fromdate = request.data['fromdate']
                todate = request.data['todate']
                date_range = (datetime.strptime(fromdate, '%Y-%m-%d') , datetime.strptime(todate, '%Y-%m-%d') + timedelta(days=1))
                documents = documents.filter(created_at__range=date_range)
        requestedData = []
        for document in documents:
            advisor_name = document.advisor.first_name + " " + document.advisor.last_name
            advisor_id = document.IdNumber
            region_name = "N/A"
            regional_manager_name = "N/A"
            regional_manager_email = "N/A"
            bac_name = ""
            bac_email = ""
            advisor = user_profile.objects.filter(user=document.advisor.pk)
            if advisor.exists():
                advisor = advisor.first()
                advisor_name = advisor.Full_Name 
                advisor_id = advisor.ID_Number 
                region_name = advisor.region.region
                regional_manager = region_manager.objects.filter(region=advisor.region.pk)
                if regional_manager.exists():
                    regional_manager = regional_manager.first()
                    regional_manager = UserAccount.objects.filter(id=regional_manager.manager.pk)
                    if regional_manager.exists():
                        regional_manager = regional_manager.first()
                        regional_manager_name = regional_manager.first_name + " " + regional_manager.last_name
                        regional_manager_email = regional_manager.email
                        regional_manager_profile = user_profile.objects.filter(user=regional_manager.pk)
                        if regional_manager_profile.exists():
                            regional_manager_name = regional_manager_profile.first().Full_Name
                bac = advisor.bac.pk
                if bac != "":
                    bac = UserAccount.objects.get(id=bac)
                    bac_name = bac.first_name + " " + bac.last_name
                    bac_email = bac.email
                    bac_details = user_profile.objects.filter(id=bac.pk)
                    if bac_details.exists():
                        bac_details = bac_details.first()
                        bac_name = bac_details.Full_Name
            business_type = document.businessType
            business_type_name = ""
            if business_type == 1:
                business_type_name = "Business Assurance"
            if business_type == 2:
                business_type_name = "Comm release"
            if business_type == 3:
                business_type_name = "Employee Benefits"
            if business_type == 4:
                business_type_name = "Funeral"
            if business_type == 5:
                business_type_name = "GAP Cover"
            if business_type == 6:
                business_type_name = "Recurring - Investment"
            if business_type == 7:
                business_type_name = "Lumpsum - Investment"
            if business_type == 8:
                business_type_name = "Investment- Both"
            if business_type == 9:
                business_type_name = "Medical Aid"
            if business_type == 10:
                business_type_name = "Other"
            if business_type == 11:
                business_type_name = "Will"
            if business_type == 12:
                business_type_name = "Risk"
            if business_type == 13:
                business_type_name = "ST Re-issued/instated"
            if business_type == 14:
                business_type_name = "Short Term Commercial"
            if business_type == 15:
                business_type_name = "Short Term Personal" 
            initiating_user_type = "Admin"
            if document.user.userType == 1:
                initiating_user_type = "ARC"
            if document.user.userType == 2:
                initiating_user_type = "Gatekeeper"
            if document.user.userType == 3:
                initiating_user_type = "Manager"
            if document.user.userType == 5:
                initiating_user_type = "B.A.C."
            gatekeeping_data = {}
            total_gatekeeping_versions = 0
            final_gatekeeping_score = 0
            gatekeeping = GateKeeping.objects.filter(document=document.pk)
            if gatekeeping.exists():
                total_gatekeeping_versions = gatekeeping.count()
                for counter, gatekeeping_record in enumerate(gatekeeping):
                    fica = ""
                    if gatekeeping_record.fica == 100:
                        fica = "Yes"
                    elif gatekeeping_record.fica == 1:
                        fica = "No"
                    elif gatekeeping_record.fica == 0:
                        fica = "N/A"
                    proof_of_screening = ""
                    if gatekeeping_record.proof_of_screening == 100:
                        proof_of_screening = "Yes"
                    elif gatekeeping_record.proof_of_screening == 1:
                        proof_of_screening = "No"
                    elif gatekeeping_record.proof_of_screening == 2:
                        proof_of_screening = "N/A"
                    dra = ""
                    if gatekeeping_record.dra == 100:
                        proof_of_screening = "Yes"
                    elif gatekeeping_record.dra == 1:
                        proof_of_screening = "No"
                    elif gatekeeping_record.dra == 0:
                        proof_of_screening = "N/A"
                    letter_of_intro = ""
                    if gatekeeping_record.letter_of_intro == 100:
                        letter_of_intro = "Yes"
                    elif gatekeeping_record.letter_of_intro == 1:
                        letter_of_intro = "No"
                    elif gatekeeping_record.letter_of_intro == 0:
                        letter_of_intro = "N/A"
                    authorisation_letter = ""
                    if gatekeeping_record.authorisation_letter == 100:
                        authorisation_letter = "Yes"
                    elif gatekeeping_record.authorisation_letter == 1:
                        authorisation_letter = "No"
                    elif gatekeeping_record.authorisation_letter == 0:
                        authorisation_letter = "N/A"
                    roa_type = ""
                    if gatekeeping_record.roa_type == 100:
                        roa_type = "SanFin ROA"
                    elif gatekeeping_record.roa_type == 0:
                        roa_type = "SFP ROA"
                    elif gatekeeping_record.roa_type == 1:
                        roa_type = "Glacier Ice"
                    elif gatekeeping_record.roa_type == 2:
                        roa_type = "Compare Med"
                    elif gatekeeping_record.roa_type == 3:
                        roa_type = "Get Quote"
                    elif gatekeeping_record.roa_type == 4:
                        roa_type = "No"
                    roa = ""
                    if gatekeeping_record.roa == 100:
                        roa = "Yes"
                    elif gatekeeping_record.roa == 1:
                        roa = "No"
                    elif gatekeeping_record.roa == 0:
                        roa = "N/A"
                    fna = ""
                    if gatekeeping_record.fna == 100:
                        fna = "Yes"
                    elif gatekeeping_record.fna == 1:
                        fna = "No"
                    elif gatekeeping_record.fna == 0:
                        fna = "N/A"
                    application = ""
                    if gatekeeping_record.application == 100:
                        application = "Yes"
                    elif gatekeeping_record.application == 1:
                        application = "No"
                    elif gatekeeping_record.application == 0:
                        application = "N/A"
                    quotation = ""
                    if gatekeeping_record.quotation == 100:
                        quotation = "Yes"
                    elif gatekeeping_record.quotation == 1:
                        quotation = "No"
                    elif gatekeeping_record.quotation == 0:
                        quotation = "N/A"
                    risk_portfolio = ""
                    if gatekeeping_record.risk_portfolio == 1:
                        risk_portfolio = "Yes"
                    elif gatekeeping_record.risk_portfolio == 1:
                        risk_portfolio = "No"
                    elif gatekeeping_record.risk_portfolio == 0:
                        risk_portfolio = "N/A"
                    mandate = ""
                    if gatekeeping_record.mandate == 1:
                        mandate = "Yes"
                    elif gatekeeping_record.mandate == 1:
                        mandate = "No"
                    elif gatekeeping_record.mandate == 0:
                        mandate = "N/A"
                    replacement = ""
                    if gatekeeping_record.replacement == 1:
                        replacement = "Yes"
                    elif gatekeeping_record.replacement == 1:
                        replacement = "No"
                    elif gatekeeping_record.replacement == 0:
                        replacement = "N/A"
                    replacement_type = ""
                    if gatekeeping_record.replacement_type == 100:
                        replacement_type = "Rule 19"
                    elif gatekeeping_record.replacement_type == 1:
                        replacement_type = "Not Rule 19"
                    elif gatekeeping_record.replacement_type == 0:
                        replacement_type = "N/A"
                    date_of_screening = ""
                    if int(gatekeeping_record.date_of_screening) == 100:
                        date_of_screening = "Before quote date"
                    elif int(gatekeeping_record.date_of_screening) == 1:
                        date_of_screening = "After quote date"
                    elif gatekeeping_record.replacement_type == 0:
                        date_of_screening = "N/A"
                    timeously = ""
                    if int(gatekeeping_record.timeously) == 100:
                        timeously = "Yes"
                    elif int(gatekeeping_record.timeously) == 1:
                        timeously = "No"
                    elif int(gatekeeping_record.timeously) == 0:
                        timeously = "N/A"
                    policy_schedule = ""
                    if gatekeeping_record.policy_schedule == 100:
                        policy_schedule = "Yes"
                    elif gatekeeping_record.policy_schedule == 1:
                        policy_schedule = "No"
                    elif gatekeeping_record.policy_schedule == 0:
                        policy_schedule = "N/A"
                    commission_release_form = ""
                    if gatekeeping_record.commission_release_form == 100:
                        commission_release_form = "Yes"
                    elif gatekeeping_record.commission_release_form == 1:
                        commission_release_form = "No"
                    elif gatekeeping_record.commission_release_form == 0:
                        commission_release_form = "N/A"
                    iteration = "First"
                    if counter+1 == 1:
                        iteration = "First"
                    elif counter+1 == 2:
                        iteration = "Second"
                    elif counter+1 == 3:
                        iteration = "3rd"
                    else:
                        iteration = f"{counter+1}th"
                    total = 0
                    score = 0
                    if business_type == 1 or (business_type > 4 and business_type < 9) :
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['risk_portfolio'] + gatekeepingDocument['mandate'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                        gkDocument = GateKeeping.objects.filter(pk=gatekeeping_record.pk).values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","risk_portfolio","mandate","replacement").latest('created_at')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                        score = round(score/total *100) if total != 0 else 0
                    if business_type == 3 or business_type == 4:
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                        gkDocument = GateKeeping.objects.filter(pk=gatekeeping_record.pk).values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement").latest('created_at')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                        score = round(score/total *100) if total != 0 else 0
                    if business_type == 5 or business_type == 9:
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation']
                        gkDocument = GateKeeping.objects.filter(pk=gatekeeping_record.pk).values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation").latest('created_at')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                        score = round(score/total *100) if total != 0 else 0
                    if business_type == 12:
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                        gkDocument = GateKeeping.objects.filter(pk=gatekeeping_record.pk).values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement").latest('created_at')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                        score = round(score/total *100) if total != 0 else 0
                    if business_type == 10 :
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa']
                        gkDocument = GateKeeping.objects.filter(pk=gatekeeping_record.pk).values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa").latest('created_at')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                        score = round(score/total *100) if total != 0 else 0
                    if business_type == 11 :
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['application']
                        gkDocument = GateKeeping.objects.filter(pk=gatekeeping_record.pk).values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","application").latest('created_at')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                        score = round(score/total *100) if total != 0 else 0
                    if business_type == 13 :
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra']
                        gkDocument = GateKeeping.objects.filter(pk=gatekeeping_record.pk).values("fica","policy_schedule","proof_of_screening","dra").latest('created_at')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                        score = round(score/total *100) if total != 0 else 0
                    if business_type == 14 or business_type == 15 :
                        # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement']
                        gkDocument = GateKeeping.objects.filter(pk=gatekeeping_record.pk).values("fica","policy_schedule","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement").latest('created_at')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                            if int(gkDocument[key]) == 0:
                                total += 100
                        score = round(score/total *100) if total != 0 else 0
                    if business_type == 2 :
                    # score = gatekeepingDocument['proof_of_screening']
                        gkDocument = GateKeeping.objects.filter(pk=gatekeeping_record.pk).values("commission_release_form" ).latest('created_at')
                        for key in gkDocument:
                            if int(gkDocument[key]) == 0:
                                total += 100
                            if int(gkDocument[key]) == 100:
                                total += 100
                                score += int(gkDocument[key])
                        score = round(score/total *100) if total != 0 else 0
                    if counter+1 == total_gatekeeping_versions:
                        final_gatekeeping_score = score
                    
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - FICA (Clear ID)"] = fica
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Proof of Screening"] = proof_of_screening
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - DRA"] = dra
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Letter of Introduction"] = letter_of_intro
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Authorisation Letter"] = authorisation_letter
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - ROA Type"] = roa_type
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - ROA (All sections completed)"] = roa
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - FNA (Appropriate FNA filed"] = fna
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Application"] = application
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Quotation"] = quotation
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Risk Portfolio"] = risk_portfolio
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Mandate"] = mandate
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Replacement"] = replacement
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Replacement Type"] = replacement_type
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Date of Screening"] = date_of_screening
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Timeously"] = timeously
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Policy Schedule"] = policy_schedule
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Commission Release Form"] = commission_release_form
                    gatekeeping_data[f"{iteration} Review - Gatekeeper - Score"] = score
            
            arc_data = {}
            total_arc_versions = 0
            final_arc_score = 0
            arc_records = arc.objects.filter(document=document.pk)
            if arc_records.exists():
                total_arc_versions = arc_records.count()
                for counter, arc_record in enumerate(arc_records):
                    client_needs = ""
                    if arc_record.client_needs == 100:
                        client_needs = "Approved"
                    elif arc_record.client_needs == 1:
                        client_needs = "Partially Approved"
                    elif arc_record.client_needs == 0:
                        client_needs = "Not Approved"
                    appropriate_fna = ""
                    if arc_record.appropriate_fna == 100:
                        appropriate_fna = "Approved"
                    elif arc_record.appropriate_fna == 1:
                        appropriate_fna = "Partially Approved"
                    elif arc_record.appropriate_fna == 0:
                        appropriate_fna = "Not Approved"
                    fna_outcome = ""
                    if arc_record.fna_outcome == 100:
                        fna_outcome = "Approved"
                    elif arc_record.fna_outcome == 1:
                        fna_outcome = "Partially Approved"
                    elif arc_record.fna_outcome == 0:
                        fna_outcome = "Not Approved"
                    product_suitability = ""
                    if arc_record.product_suitability == 100:
                        product_suitability = "Approved"
                    elif arc_record.product_suitability == 1:
                        product_suitability = "Partially Approved"
                    elif arc_record.product_suitability == 0:
                        product_suitability = "Not Approved"
                    alternative_solutions = ""
                    if arc_record.alternative_solutions == 100:
                        alternative_solutions = "Approved"
                    elif arc_record.alternative_solutions == 1:
                        alternative_solutions = "Partially Approved"
                    elif arc_record.alternative_solutions == 0:
                        alternative_solutions = "Not Approved"
                    material_aspects = ""
                    if arc_record.material_aspects == 100:
                        material_aspects = "Approved"
                    elif arc_record.material_aspects == 1:
                        material_aspects = "Partially Approved"
                    elif arc_record.material_aspects == 0:
                        material_aspects = "Not Approved"
                    special_terms = ""
                    if arc_record.special_terms == 100:
                        special_terms = "Approved"
                    elif arc_record.special_terms == 1:
                        special_terms = "Partially Approved"
                    elif arc_record.special_terms == 0:
                        special_terms = "Not Approved"
                    replacement_terms = ""
                    if arc_record.replacement_terms == 100:
                        replacement_terms = "Approved"
                    elif arc_record.replacement_terms == 1:
                        replacement_terms = "Partially Approved"
                    elif arc_record.replacement_terms == 0:
                        replacement_terms = "Not Approved"
                    disclosure_a = ""
                    if arc_record.disclosure_a == 100:
                        disclosure_a = "Approved"
                    elif arc_record.disclosure_a == 1:
                        disclosure_a = "Partially Approved"
                    elif arc_record.disclosure_a == 0:
                        disclosure_a = "Not Approved"
                    disclosure_b = ""
                    if arc_record.disclosure_b == 100:
                        disclosure_b = "Approved"
                    elif arc_record.disclosure_b == 1:
                        disclosure_b = "Partially Approved"
                    elif arc_record.disclosure_b == 0:
                        disclosure_b = "Not Approved"
                    personal_details_a = ""
                    if arc_record.personal_details_a == 100:
                        personal_details_a = "Approved"
                    elif arc_record.personal_details_a == 1:
                        personal_details_a = "Partially Approved"
                    elif arc_record.personal_details_a == 0:
                        personal_details_a = "Not Approved"
                    general_a = ""
                    if arc_record.general_a == 100:
                        general_a = "Approved"
                    elif arc_record.general_a == 1:
                        general_a = "Partially Approved"
                    elif arc_record.general_a == 0:
                        general_a = "Not Approved"
                    general_b = ""
                    if arc_record.general_b == 100:
                        general_b = "Approved"
                    elif arc_record.general_b == 1:
                        general_b = "Partially Approved"
                    elif arc_record.general_b == 0:
                        general_b = "Not Approved"
                    general_c = ""
                    if arc_record.general_c == 100:
                        general_c = "Approved"
                    elif arc_record.general_c == 1:
                        general_c = "Partially Approved"
                    elif arc_record.general_c == 0:
                        general_c = "Not Approved"
                    general_d = ""
                    if arc_record.general_d == 100:
                        general_d = "Approved"
                    elif arc_record.general_d == 1:
                        general_d = "Partially Approved"
                    elif arc_record.general_d == 0:
                        general_d = "Not Approved"
                    risk_classes_a = ""
                    if arc_record.risk_classes_a == 100:
                        risk_classes_a = "Approved"
                    elif arc_record.risk_classes_a == 1:
                        risk_classes_a = "Partially Approved"
                    elif arc_record.risk_classes_a == 0:
                        risk_classes_a = "Not Approved"
                    risk_classes_b = ""
                    if arc_record.risk_classes_b == 100:
                        risk_classes_b = "Approved"
                    elif arc_record.risk_classes_b == 1:
                        risk_classes_b = "Partially Approved"
                    elif arc_record.risk_classes_b == 0:
                        risk_classes_b = "Not Approved"
                    fna_a = ""
                    if arc_record.fna_a == 100:
                        fna_a = "Approved"
                    elif arc_record.fna_a == 1:
                        fna_a = "Partially Approved"
                    elif arc_record.fna_a == 0:
                        fna_a = "Not Approved"
                    fna_b = ""
                    if arc_record.fna_b == 100:
                        fna_b = "Approved"
                    elif arc_record.fna_b == 1:
                        fna_b = "Partially Approved"
                    elif arc_record.fna_b == 0:
                        fna_b = "Not Approved"
                    recommended_products_a = ""
                    if arc_record.recommended_products_a == 100:
                        recommended_products_a = "Approved"
                    elif arc_record.recommended_products_a == 1:
                        recommended_products_a = "Partially Approved"
                    elif arc_record.recommended_products_a == 0:
                        recommended_products_a = "Not Approved"
                    recommended_products_b = ""
                    if arc_record.recommended_products_b == 100:
                        recommended_products_b = "Approved"
                    elif arc_record.recommended_products_b == 1:
                        recommended_products_b = "Partially Approved"
                    elif arc_record.recommended_products_b == 0:
                        recommended_products_b = "Not Approved"
                    recommended_products_c = ""
                    if arc_record.recommended_products_c == 100:
                        recommended_products_c = "Approved"
                    elif arc_record.recommended_products_c == 1:
                        recommended_products_c = "Partially Approved"
                    elif arc_record.recommended_products_c == 0:
                        recommended_products_c = "Not Approved"
                    replacements_a = ""
                    if arc_record.replacements_a == 100:
                        replacements_a = "Approved"
                    elif arc_record.replacements_a == 1:
                        replacements_a = "Partially Approved"
                    elif arc_record.replacements_a == 0:
                        replacements_a = "Not Approved"
                    replacements_b = ""
                    if arc_record.replacements_b == 100:
                        replacements_b = "Approved"
                    elif arc_record.replacements_b == 1:
                        replacements_b = "Partially Approved"
                    elif arc_record.replacements_b == 0:
                        replacements_b = "Not Approved"
                    replacements_c = ""
                    if arc_record.replacements_c == 100:
                        replacements_c = "Approved"
                    elif arc_record.replacements_c == 1:
                        replacements_c = "Partially Approved"
                    elif arc_record.replacements_c == 0:
                        replacements_c = "Not Approved"
                    replacements_d = ""
                    if arc_record.replacements_d == 100:
                        replacements_d = "Approved"
                    elif arc_record.replacements_d == 1:
                        replacements_d = "Partially Approved"
                    elif arc_record.replacements_d == 0:
                        replacements_d = "Not Approved"
                    client_consent_a = ""
                    if arc_record.client_consent_a == 100:
                        client_consent_a = "Approved"
                    elif arc_record.client_consent_a == 1:
                        client_consent_a = "Partially Approved"
                    elif arc_record.client_consent_a == 0:
                        client_consent_a = "Not Approved"
                    client_consent_b = ""
                    if arc_record.client_consent_b == 100:
                        client_consent_b = "Approved"
                    elif arc_record.client_consent_b == 1:
                        client_consent_b = "Partially Approved"
                    elif arc_record.client_consent_b == 0:
                        client_consent_b = "Not Approved"
                    arc_score = 0

                    if business_type < 14 :
                        aDocument = arc.objects.filter(pk=arc_record.pk).values("client_needs","appropriate_fna","fna_outcome","product_suitability","alternative_solutions","material_aspects","special_terms","replacement_terms").latest('id')
                        arc_total = 120 if replacement == False else 100
                        for key in aDocument:
                            if key == "replacement_terms" and replacement:
                                continue    
                            arc_score += aDocument[key]
                        arc_score = round(arc_score/arc_total *100) if total != 0 else 0
                    if business_type >= 14 :
                        aDocument = arc.objects.filter(pk=arc_record.pk).values("disclosure_a", "disclosure_b", "personal_details_a", "personal_details_b", "general_a", "general_b", "general_c", "general_d", "risk_classes_a", "risk_classes_b", "fna_a", "fna_b", "recommended_products_a", "recommended_products_b", "recommended_products_c", "replacements_a", "replacements_b", "replacements_c", "replacements_d", "client_consent_a", "client_consent_b", ).latest('id')
                        for key in aDocument:
                            arc_score += aDocument[key]
                        arc_total = 100
                        for key in aDocument:
                            if aDocument[key] == 5:
                                arc_score += aDocument[key]
                        arc_score = round(arc_score/arc_total *100) if total != 0 else 0

                    if counter+1 == total_arc_versions:
                        final_arc_score = arc_score
                    
                    iteration = "First"
                    if counter+1 == 1:
                        iteration = "First"
                    elif counter+1 == 2:
                        iteration = "Second"
                    elif counter+1 == 3:
                        iteration = "3rd"
                    else:
                        iteration = f"{counter+1}th"
                    
                    arc_data[f"{iteration} Review - ARC - Clients needs"] = client_needs
                    arc_data[f"{iteration} Review - ARC - Appropriate FNA"] = appropriate_fna
                    arc_data[f"{iteration} Review - ARC - FNA outcome"] = fna_outcome
                    arc_data[f"{iteration} Review - ARC - Product suitability"] = product_suitability
                    arc_data[f"{iteration} Review - ARC - Alternative Solutions"] = alternative_solutions
                    arc_data[f"{iteration} Review - ARC - Material Aspects"] = material_aspects
                    arc_data[f"{iteration} Review - ARC - Special Terms"] = special_terms
                    arc_data[f"{iteration} Review - ARC - Replacement Terms"] = replacement_terms
                    arc_data[f"{iteration} Review - ARC - Disclosures Questions: Has FAIS disclosure documents (permit) been signed and filed?"] = disclosure_a
                    arc_data[f"{iteration} Review - ARC - Disclosures Questions: Has client has provided authority to access information?"] = disclosure_b
                    arc_data[f"{iteration} Review - ARC - General Questions: Personal Details Questions: Was the name, surname gender, identifying number and client preference filled in correctly?"] = personal_details_a
                    arc_data[f"{iteration} Review - ARC - General Questions: Has the refusal of cover question been answered and details provided where the response is positive?"] = general_a
                    arc_data[f"{iteration} Review - ARC - General Questions: Is this a replacement (or partial replacement) of cover?"] = general_b
                    arc_data[f"{iteration} Review - ARC - General Questions: List of clients’ previous insurer"] = general_c
                    arc_data[f"{iteration} Review - ARC - General Questions: Has details of previous losses been completed with details?"] = general_d
                    arc_data[f"{iteration} Review - ARC - Risk Classes / Client needs (Factual Questions): Has all the relevant risk classes been identified and offered?"] = risk_classes_a
                    arc_data[f"{iteration} Review - ARC - Risk Classes / Client needs (Factual Questions): Have all questions in the identified risk classes been answered"] = risk_classes_b
                    arc_data[f"{iteration} Review - ARC - Financial Needs Analysis Summary / Cover Recommendations: Was the need of the client identified in the ROA?"] = fna_a
                    arc_data[f"{iteration} Review - ARC - Financial Needs Analysis Summary / Cover Recommendations: Was option or additional cover offered and discussed with the client? Are the responses recorded?"] = fna_b
                    arc_data[f"{iteration} Review - ARC - Recommended Products: Has the optional cover recommendations been made for all risk classes? Optional cover on buildings, contents, all risk, rental car, caravan contents or glitter finish on watercraft, etc. "] = recommended_products_a
                    arc_data[f"{iteration} Review - ARC - Recommended Products: Is there an explanation that illustrates exclusions, special conditions or endorsements, or a reason to refuse cover? (e.g. no burglar bars, or linked alarm, immobilizer)"] = recommended_products_b
                    arc_data[f"{iteration} Review - ARC - Recommended Products: Is the quote on file?"] = recommended_products_c
                    arc_data[f"{iteration} Review - ARC - Replacements: Is this product a replacement? "] = replacements_a
                    arc_data[f"{iteration} Review - ARC - Replacements: Has the purpose and reasons been identified?"] = replacements_b
                    arc_data[f"{iteration} Review - ARC - Replacements: Has the comparison section been completed?"] = replacements_c
                    arc_data[f"{iteration} Review - ARC - Replacements: Has the required information been captured adequately on the Comparison ROA?"] = replacements_d
                    arc_data[f"{iteration} Review - ARC - Client Consent: Has the debit order instruction been completed and signed?"] = client_consent_a
                    arc_data[f"{iteration} Review - ARC - Client Consent: Has the client consented to a credit check for STI purposes?"] = client_consent_b
                    arc_data[f"{iteration} Review - ARC - Score"] = arc_score
            comments_data = {}
            comments = DocumentComments.objects.filter(document=document.pk)
            for counter, comment in enumerate(comments):
                comments_data[f"Comment {counter+1} By"] = comment.user.first_name
                comments_data[f"Comment {counter+1}"] = comment.comment
            picked_up_name = ""
            picked_up_email = ""
            picked_up_type = ""
            if document.picked_up != 0:
                picked_up_data = UserAccount.objects.filter(pk=document.picked_up)
                if picked_up_data.exists():
                    picked_up_data = picked_up_data.first()
                    picked_up_name = picked_up_data.first_name + " " + picked_up_data.last_name
                    picked_up_email = picked_up_data.email
                    picked_up_type = "ARC" if picked_up_data.userType == 1 else "Gatekeeper"
                    picked_up_user_profile = user_profile.objects.filter(user=picked_up_data.pk)
                    if picked_up_user_profile.exists():
                        picked_up_user_profile = picked_up_user_profile.first()
                        picked_up_name = picked_up_user_profile.Full_Name
            document_data = {
                "Document Creation Date" : document.created_at.strftime('%H:%M:%S %d %b %Y'), 
                "Document Last Update Date" : document.updated_at.strftime('%H:%M:%S %d %b %Y'), 
                "Policy Number" : document.policy_number, 
                "Initiating User" : document.user.first_name + " " + document.user.last_name, 
                "Initiating User Email" : document.user.email, 
                "Initiating User Type" : "ARC" if initiating_user_type == 1 else "Gatekeeper", 
                "Picked Up by User" : picked_up_name, 
                "Picked Up by User Email" : picked_up_email, 
                "Picked Up by User Type" : picked_up_type, 
                "Advisor" : advisor_name, 
                "Advisor Email" : document.advisor.email, 
                "Advisor ID Number" : advisor_id, 
                "Advisor Region." : region_name, 
                "Advisor Regional Manager" : regional_manager_name, 
                "Advisor Regional Manager Email" : regional_manager_email, 
                "Advisor B.A.C." : bac_name, 
                "Advisor B.A.C. Email" : bac_email, 
                "Client Name" : document.clientName, 
                "Supplier" : document.supplier, 
                "Product" : document.product, 
                "Business Type" : business_type_name, 
                "Starting Type" : "Gatekeeper Level" if document.starting_point == 1 else "ARC Level", 
                "Gatekeeping Versions" : total_gatekeeping_versions, 
                "Gatekeeping Final Score" : final_gatekeeping_score, 
                "ARC Versions" : total_arc_versions, 
                "ARC Final Score" : final_arc_score, 
                "Lump Sum" : document.lump_sum, 
                "Monthly Premium" : document.monthly_premium, 
                "Commission" : document.commission, 
                # "Lump Sum" : babel.numbers.format_currency(str(document.lump_sum).replace(" ","").replace(",","."), 'ZAR', locale='en_ZA', currency_digits=False), 
                # "Monthly Premium" : babel.numbers.format_currency(str(document.monthly_premium).replace(" ","").replace(",","."), 'ZAR', locale='en_ZA', currency_digits=False), 
                # "Commission" : babel.numbers.format_currency(str(document.commission).replace(" ","").replace(",","."), 'ZAR', locale='en_ZA', currency_digits=False), 
            }
            document_data.update(gatekeeping_data)
            document_data.update(arc_data)
            document_data.update(comments_data)
            requestedData.append(document_data)
        document_df = pd.DataFrame(requestedData)
        if len(requestedData) > 0:
            file_name = f"static/csv/complaince_export_{uuid.uuid4()}.csv"
            document_df.to_csv(f"{file_name}")
            return Response({"file": file_name},200)
        return Response({"message": "No data found"},404)