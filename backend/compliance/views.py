from django.shortcuts import render
from rest_framework.decorators import APIView, api_view
from rest_framework.response import Response
from data.models import UserAccount, categorisation, user_profile, regions
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
    data = ComplianceDocument.objects.filter(Q(user=request.user.pk)|Q(picked_up=request.user.pk))
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
            advisor = UserAccount.objects.filter(pk=row['advisor'])
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
                trend = {
                    # "created" : data.filter(created_at__range=date_range).count(),
                    "approved" : data.filter(created_at__range=date_range,status=1).count(),
                    "rejected" : data.filter(created_at__range=date_range,status=2).count(),
                    "referred" : data.filter(created_at__range=date_range,referred=True).count(),
                }
                kpis = {
                    "created" : data.filter(created_at__range=date_range).count(),
                    "approved" : data.filter(created_at__range=date_range,status=1).count(),
                    "rejected" : data.filter(created_at__range=date_range,status=2).count(),
                    "referred" : data.filter(created_at__range=date_range,referred=True).count(),
                }
                time_trend = ComplianceDocument.objects.filter(created_at__range=date_range).order_by('created_at__date').values('created_at__date').annotate(total=Count('id'))
                trend_data = []
                for i in range(len(time_trend)):
                    trend_data.append([
                        time_trend[i]['created_at__date'].strftime('%d %b %y'),
                        time_trend[i]['total']
                    ])
                total = data.count()
                data = data.values()
                p = Paginator(data, request.data['page_size'])
                data = p.page(request.data['page_number']).object_list
                for row in data:
                    advisor = UserAccount.objects.filter(pk=row['advisor'])
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
                        "total_pages" : 0,
                        "has_pages" : 0,
                        "total_records" : 0,
                        "pagelimit" : request.data['page_size'],
                        "next" : None,
                        "results" : [],
                        "trend_data": [], 
                        "kpis": kpis, 
                        "trend" : trend
                    }
                )
        else:
            if user.userType == 1:  
                data = ComplianceDocument.objects.filter(Q(user=user.pk) | Q(picked_up=user.pk)).order_by('-created_at')
                records = []
                if data.exists():
                    created = 0
                    kpis = {
                        "created" : data.filter(created_at__range=date_range).count(),
                        "approved" : data.filter(created_at__range=date_range,status=1).count(),
                        "rejected" : data.filter(created_at__range=date_range,status=2).count(),
                        "referred" : data.filter(created_at__range=date_range,referred=True).count(),
                    }
                    trend = {
                        # "created" : data.filter(created_at__range=date_range).count(),
                        "approved" : data.filter(created_at__range=date_range,status=1).count(),
                        "rejected" : data.filter(created_at__range=date_range,status=2).count(),
                        "referred" : data.filter(created_at__range=date_range,referred=True).count(),
                    }  
                    time_trend = ComplianceDocument.objects.filter(user=user.pk,created_at__range=date_range).order_by('created_at__date').values('created_at__date').annotate(total=Count('id'))
                    trend_data = []
                    for i in range(len(time_trend)):
                        trend_data.append([
                            time_trend[i]['created_at__date'].strftime('%d %b %y'),
                            time_trend[i]['total']
                        ])
                    total = data.count()
                    data = ComplianceDocument.objects.filter(Q(user=user.pk) | Q(picked_up=user.pk) | Q(status=3)).order_by('-created_at')
                    data = data.values()
                    p = Paginator(data, request.data['page_size'])
                    data = p.page(request.data['page_number']).object_list
                    for row in data:
                        advisor = UserAccount.objects.filter(pk=row['advisor'])
                        if advisor.exists():
                            advisor = advisor.values().first()
                            row['advisor'] = f"{advisor['first_name']} ({advisor['email']})"
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
                            "total_pages" : 0,
                            "has_pages" : 0,
                            "total_records" : 0,
                            "pagelimit" : request.data['page_size'],
                            "next" : None,
                            "trend_data": [], 
                            "results" : [],
                            "kpis": kpis, 
                            "trend" : trend
                        }
                    )
            if user.userType == 2:            
                data = ComplianceDocument.objects.filter(user=user.pk).order_by('-created_at')
                if data.exists():
                    kpis = {
                        "created" : data.filter(created_at__range=date_range).count(),
                        "approved" : data.filter(created_at__range=date_range,status=1).count(),
                        "rejected" : data.filter(created_at__range=date_range,status=2).count(),
                        "referred" : data.filter(created_at__range=date_range,referred=True).count(),
                    }
                    trend = {
                        # "created" : data.filter(created_at__range=date_range).count(),
                        "approved" : data.filter(created_at__range=date_range,status=1).count(),
                        "rejected" : data.filter(created_at__range=date_range,status=2).count(),
                        "referred" : data.filter(created_at__range=date_range,referred=True).count(),
                    } 
                    time_trend = ComplianceDocument.objects.filter(user=user.pk,created_at__range=date_range).order_by('created_at__date').values('created_at__date').annotate(total=Count('id'))
                    trend_data = []
                    for i in range(len(time_trend)):
                        trend_data.append([
                            time_trend[i]['created_at__date'].strftime('%d %b %y'),
                            time_trend[i]['total']
                        ])
                    total = data.count()
                    data = data.values()
                    p = Paginator(data, request.data['page_size'])
                    data = p.page(request.data['page_number']).object_list
                    for row in data:
                        advisor = UserAccount.objects.filter(pk=row['advisor'])
                        if advisor.exists():
                            advisor = advisor.values().first()
                            row['advisor'] = f"{advisor['first_name']} ({advisor['email']})"
                        else:
                            raise Http404
                        dId = row['id']
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
                            "kpis": kpis, 
                            "trend_data": trend_data, 
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
                            "total_pages" : 0,
                            "has_pages" : 0,
                            "total_records" : 0,
                            "pagelimit" : request.data['page_size'],
                            "next" : None,
                            "results" : [],
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
                    advisor = UserAccount.objects.filter(pk=row['advisor'])
                    if advisor.exists():
                        advisor = advisor.values().first()
                        row['advisor'] = f"{advisor['first_name']} ({advisor['email']})"
                    else:
                        raise Http404
                    dId = row['id']
                    arc_status = False
                    userData = UserAccount.objects.filter(pk=row['user_id']).values().first()
                    print(f"{userData['first_name']} {userData['last_name']} ({userData['email']})")
                    row['review_user'] = f"{userData['first_name']} {userData['last_name']} ({userData['email']})"
                    if arc.objects.filter(document=row['id']).exists():
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
                        advisor = UserAccount.objects.filter(pk=row['advisor'])
                        if advisor.exists():
                            advisor = advisor.values().first()
                            row['advisor'] = f"{advisor['first_name']} ({advisor['email']})"
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
                data = ComplianceDocument.objects.filter(user=user.pk).order_by('-created_at')
                if data.exists():
                    kpis = {
                        "created" : data.count(),
                        "approved" : data.filter(status=1).count(),
                        "rejected" : data.filter(status=2).count(),
                        "referred" : data.filter(referred=True).count(),
                    }
                    data = data.values()
                    for row in data:
                        advisor = UserAccount.objects.filter(pk=row['advisor'])
                        if advisor.exists():
                            advisor = advisor.values().first()
                            row['advisor'] = f"{advisor['first_name']} ({advisor['email']})"
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
        advisor = UserAccount.objects.filter(pk=document['advisor']).values().first()
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                            if key == "replacement":
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
                    gk = gatekeepingDocument
                    gatekeepingDocument = gatekeepingDocument.values().latest('id')
                    version = gatekeepingDocument['version']
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
                                if key == "replacement":
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
                                if key == "replacement":
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
                                if key == "replacement":
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
                                if key == "replacement":
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
                                if key == "replacement":
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
                                if key == "replacement":
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
                                if key == "replacement":
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
                aDoc = arcDocument
                arcDocument = arcDocument.values().latest('id')
                businessType = document['businessType']
                arc_score = 0
                if businessType < 14 :
                    aDocument = aDoc.values("client_needs","appropriate_fna","fna_outcome","product_suitability","alternative_solutions","material_aspects","special_terms","replacement_terms").latest('id')
                    arc_total = 120
                    for key in aDocument:
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
                            if key == "replacement_terms":
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
        if user.is_superuser or user.userType == 1 or user.userType == 2:
            regionsData = regions.objects.all().order_by('region')
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
            return Response(status.HTTP_401_UNAUTHORIZED)
        
class loadagents(APIView):

    def get(self, request):
        user = request.user
        if user.is_superuser or user.userType == 1 or user.userType == 2:
            advisors = UserAccount.objects.filter(userType = 6)
            if advisors.exists():
                advisors = advisors.values()
                data = []
                for advisor in advisors:
                    profile = user_profile.objects.filter(user=advisor['id'])
                    id_number = ""
                    if profile.exists():
                        profile = user_profile.objects.filter(user=advisor['id']).values().first()
                        id_number = profile['id_number']
                    data.append({
                        "value" : advisor['id'],
                        "label" : f"{advisor['first_name']} {advisor['last_name']} ({id_number})",
                        "name" : "advisor",
                        "id" : advisor['id'],
                    })
                return Response({
                    "advisors" : data
                })
            else:
                raise Http404
        else:
            return Response(status.HTTP_401_UNAUTHORIZED)
        
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
                    data['IdNumber'] = profile['id_number']
                    data['supervision'] = profile['supervision']
                    user_region = regions.objects.filter(pk=profile['region_id'])
                    data['region'] = ""
                    if user_region.exists():
                        user_region = user_region.values().first()
                        data['region'] = user_region['region']
                    user_categorisation = categorisation.objects.filter(pk=profile['categorisation_id'])
                    data['categorisation'] = ""
                    if user_categorisation.exists():
                        user_categorisation = user_categorisation.values().first()
                        data['categorisation'] = user_categorisation['categorisation']
                    user_bac = UserAccount.objects.filter(pk=profile['bac_id'])
                    data['bac'] = ""
                    data['bac_name'] = ""
                    if user_bac.exists():
                        user_bac = user_bac.values().first()
                        data['bac'] = f"{user_bac['id']}"
                        data['bac_name'] = f"{user_bac['first_name']} {user_bac['last_name']}"
                    # user_supervision = UserAccount.objects.filter(pk=profile['supervision_id'])
                    # data['supervisor'] = ""
                    # data['supervisor_name'] = ""
                    # if user_supervision.exists():
                    #     user_supervision = user_supervision.values().first()
                    #     data['supervisor'] = f"{user_supervision['id']}"
                    #     data['supervisor_name'] = f"{user_supervision['first_name']} {user_supervision['last_name']}"
                    data['supervisor_name'] = f"N.A."
                flaggedData = flagged_users.objects.filter(user=request.data['advisorId'])
                flag_color = ""
                if flaggedData.exists():
                    flaggedData = flaggedData.values().first()
                    flag_color_data = flag_colors.objects.filter(id=flaggedData['color_id'])
                    if flag_color_data.exists():
                        flag_color_data = flag_color_data.values().first()
                        flag_color = flag_color_data['color']
                data['flag'] = flag_color
                
                return Response({
                    "data" : data
                })
            else:
                raise Http404
        else:
            return Response(status.HTTP_401_UNAUTHORIZED)
        