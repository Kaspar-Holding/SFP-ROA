from datetime import datetime, timedelta
from django.shortcuts import render
from rest_framework.decorators import APIView
from rest_framework.response import Response
from django.db.models import Q, Sum, Count, FloatField
from django.db.models.functions import Cast
from django.http import Http404
# Create your views here.
from compliance.models import ComplianceDocument, GateKeeping, arc
from data.models import regions, UserAccount, Disclosures, user_profile, region_manager

class businessTypeInsights(APIView):

    def post(self, request):
        user = request.user
        if user.userType != 6:
            return Response(401)
        filterType = int(request.data['filterType'])
        year = request.data['year']
        monthyear = request.data['monthyear']
        month = request.data['month']
        date = request.data['date']
        fromdate = request.data['fromdate']
        todate = request.data['todate']
        customFilterType = int(request.data['customFilterType'])
        region = (request.data['region'])
        
        businessType = (request.data['businessType'])
        # Annual Data
        reviewsData = ComplianceDocument.objects.all()
        reviewsData = reviewsData.filter(advisor=user.pk)
        if filterType == 1:
            reviewsData = reviewsData.filter(updated_at__year=year)
        if filterType == 2:
            reviewsData = reviewsData.filter(updated_at__year=monthyear, updated_at__month=month)
        if filterType == 3:
            reviewsData = reviewsData.filter(updated_at__date=date)
        if filterType == 4:
            date_range = (datetime.strptime(fromdate, '%Y-%m-%d') , datetime.strptime(todate, '%Y-%m-%d') + timedelta(days=1))
            reviewsData = reviewsData.filter(updated_at__range=date_range)
        if region != "all":
            reviewsData = reviewsData.filter(region=region)
        if businessType != "all":
            reviewsData = reviewsData.filter(businessType=int(businessType))

        
        kpisData = reviewsData
        total_reviews = kpisData.count()
        total_approvals = kpisData.filter(status=1).count()
        total_denied = kpisData.filter(status=2).count()
        total_partial_approvals = kpisData.filter(status=4).count()

        businessType_trend = []
        businessType_trend_list = []
        
        business_total_reviews = 0
        business_total_rejected_reviews = 0
        business_total_first_approvals = 0
        for i in range(1,16):
            reviews = reviewsData.filter(businessType=i)
            if reviews.exists():
                reviews = reviews.aggregate(total_reviews=Count('id'))['total_reviews']
            else:
                reviews = 0
            business_total_reviews += reviews
            # Approved
            first_approval = 0
            approved_reviewsData = reviewsData.filter(businessType=i,status=1)
            if approved_reviewsData.exists():
                reviewIds = approved_reviewsData.values_list('id', flat=True)
                for reviewId in reviewIds:
                    reviewData = reviewsData.filter(id=reviewId).values().first()
                    gk = GateKeeping.objects.filter(document=reviewId)
                    if reviewData['referred'] == False:
                        if gk.exists():
                            versions = gk.count()
                            if versions == 1:
                                if reviewData['status'] == 1:
                                    first_approval += 1
            rejected_reviews = reviewsData.filter(businessType=i,status=2).count()
            business_total_first_approvals += first_approval
            # Rejected
            
            
            business_total_rejected_reviews += rejected_reviews
            if i == 1:
                businessType = "Business Assurance"
            if i == 2:
                businessType = "Comm release"
            if i == 3:
                businessType = "Employee Benefits"
            if i == 4:
                businessType = "Funeral"
            if i == 5:
                businessType = "GAP Cover"
            if i == 6:
                businessType = "Recurring - Investment"
            if i == 7:
                businessType = "Lumpsum - Investment"
            if i == 8:
                businessType = "Investment- Both"
            if i == 9:
                businessType = "Medical Aid"
            if i == 10:
                businessType = "Other"
            if i == 11:
                businessType = "Will"
            if i == 12:
                businessType = "Risk"
            if i == 13:
                businessType = "ST Re-issued/instated"
            if i == 14:
                businessType = "Short Term Commercial"
            if i == 15:
                businessType = "Short Term Personal"  
            if reviews != 0:
                businessType_trend.append([businessType, reviews, rejected_reviews])
                businessType_trend_list.append({"businessType":businessType, "reviews": reviews,"rejected_reviews" : rejected_reviews})
            # if rejected_reviews != 0:
            #     businessType_rejection_trend.append([businessType, rejected_reviews, first_approval])
        for row in businessType_trend:
            percentage = round(row[1]/business_total_reviews * 100) if business_total_reviews != 0 else 0
            row.append(percentage)
        businessType_trend_list = sorted(businessType_trend_list, key=lambda d: d["reviews"], reverse=True) 
            
        advisorData = {
            "kpis" : {
                "total_reviews" : total_reviews,
                "total_approvals" : total_approvals,
                "total_denied" : total_denied,
                "total_partial_approvals" : total_partial_approvals,
            },
            "businessType_trend": businessType_trend,
            "businessType_trend_list": businessType_trend_list,
        }
        return Response(advisorData, 200)
    
class reasonOfRejectionInsights(APIView):

    def post(self, request):
        user = request.user
        if user.userType != 6:
            return Response(401)
        filterType = int(request.data['filterType'])
        year = request.data['year']
        monthyear = request.data['monthyear']
        month = request.data['month']
        date = request.data['date']
        fromdate = request.data['fromdate']
        todate = request.data['todate']
        customFilterType = int(request.data['customFilterType'])
        region = (request.data['region'])
        
        businessType = (request.data['businessType'])
        # Annual Data
        reviewsData = ComplianceDocument.objects.all()
        reviewsData = reviewsData.filter(advisor=user.pk)
        if filterType == 1:
            reviewsData = reviewsData.filter(updated_at__year=year)
        if filterType == 2:
            reviewsData = reviewsData.filter(updated_at__year=monthyear, updated_at__month=month)
        if filterType == 3:
            reviewsData = reviewsData.filter(updated_at__date=date)
        if filterType == 4:
            date_range = (datetime.strptime(fromdate, '%Y-%m-%d') , datetime.strptime(todate, '%Y-%m-%d') + timedelta(days=1))
            reviewsData = reviewsData.filter(updated_at__range=date_range)
        if region != "all":
            reviewsData = reviewsData.filter(region=region)
        if businessType != "all":
            reviewsData = reviewsData.filter(businessType=int(businessType))

        businessType_rejection_trend = []
        rejection_reasons = {
            "FICA (Clear ID)" : 0,
            "Proof of Screening" : 0,
            "DRA" : 0,
            "Letter of Introduction" : 0,
            "Authorisation Letter" : 0,
            "ROA Type" : 0,
            "ROA (All sections completed)" : 0,
            "FNA (Appropriate FNA filed" : 0,
            "Application" : 0,
            "Quotation" : 0,
            "Risk Portfolio" : 0,
            "Mandate" : 0,
            "Replacement" : 0,
            "Replacement Type" : 0,
            "Date of Screening" : 0,
            "Timeously" : 0,
            "Policy Schedule" : 0,
            "Commission Release Form" : 0,
        }
        rejected_reviews_data = reviewsData.filter(status=2)
        if rejected_reviews_data.exists():
            for rejected_document in rejected_reviews_data:
                rejected = GateKeeping.objects.filter(document=rejected_document.pk).latest('-updated_at')
                if rejected.fica == 0:
                    rejection_reasons['FICA (Clear ID)'] = rejection_reasons['FICA (Clear ID)'] + 1
                if rejected.proof_of_screening == 0:
                    rejection_reasons['Proof of Screening'] = rejection_reasons['Proof of Screening'] + 1
                if rejected.dra == 0:
                    rejection_reasons['DRA'] = rejection_reasons['DRA'] + 1
                if rejected.letter_of_intro == 0:
                    rejection_reasons['Letter of Introduction'] = rejection_reasons['Letter of Introduction'] + 1
                if rejected.authorisation_letter == 0:
                    rejection_reasons['Authorisation Letter'] = rejection_reasons['Authorisation Letter'] + 1
                if rejected.roa_type == 0:
                    rejection_reasons['ROA Type'] = rejection_reasons['ROA Type'] + 1
                if rejected.roa == 0:
                    rejection_reasons['ROA (All sections completed)'] = rejection_reasons['ROA (All sections completed)'] + 1
                if rejected.fna == 0:
                    rejection_reasons['FNA (Appropriate FNA filed'] = rejection_reasons['FNA (Appropriate FNA filed'] + 1
                if rejected.application == 0:
                    rejection_reasons['Application'] = rejection_reasons['Application'] + 1
                if rejected.quotation == 0:
                    rejection_reasons['Quotation'] = rejection_reasons['Quotation'] + 1
                if rejected.risk_portfolio == 0:
                    rejection_reasons['Risk Portfolio'] = rejection_reasons['Risk Portfolio'] + 1
                if rejected.mandate == 0:
                    rejection_reasons['Mandate'] = rejection_reasons['Mandate'] + 1
                if rejected.replacement == 0:
                    rejection_reasons['Replacement'] = rejection_reasons['Replacement'] + 1
                if rejected.replacement_type == 0:
                    rejection_reasons['Replacement Type'] = rejection_reasons['Replacement Type'] + 1
                if rejected.date_of_screening == 0:
                    rejection_reasons['Date of Screening'] = rejection_reasons['Date of Screening'] + 1
                if rejected.timeously == 0:
                    rejection_reasons['Timeously'] = rejection_reasons['Timeously'] + 1
                if rejected.policy_schedule == 0:
                    rejection_reasons['Policy Schedule'] = rejection_reasons['Policy Schedule'] + 1
                if rejected.commission_release_form == 0:
                    rejection_reasons['Commission Release Form'] = rejection_reasons['Commission Release Form'] + 1
        for reason in rejection_reasons.keys():
            if rejection_reasons[reason] != 0:
                businessType_rejection_trend.append([reason, rejection_reasons[reason]]) 
        advisorData = {
            "businessType_rejection_trend": businessType_rejection_trend,
        }
        return Response(advisorData, 200)


class firstApprovalInsights(APIView):

    def post(self, request):
        user = request.user
        if user.userType != 6:
            return Response(401)
        filterType = int(request.data['filterType'])
        year = request.data['year']
        monthyear = request.data['monthyear']
        month = request.data['month']
        date = request.data['date']
        fromdate = request.data['fromdate']
        todate = request.data['todate']
        customFilterType = int(request.data['customFilterType'])
        region = (request.data['region'])
        
        businessType = (request.data['businessType'])
        # Annual Data
        reviewsData = ComplianceDocument.objects.all()
        reviewsData = reviewsData.filter(advisor=user.pk)
        if filterType == 1:
            reviewsData = reviewsData.filter(updated_at__year=year)
        if filterType == 2:
            reviewsData = reviewsData.filter(updated_at__year=monthyear, updated_at__month=month)
        if filterType == 3:
            reviewsData = reviewsData.filter(updated_at__date=date)
        if filterType == 4:
            date_range = (datetime.strptime(fromdate, '%Y-%m-%d') , datetime.strptime(todate, '%Y-%m-%d') + timedelta(days=1))
            reviewsData = reviewsData.filter(updated_at__range=date_range)
        if region != "all":
            reviewsData = reviewsData.filter(region=region)
        if businessType != "all":
            reviewsData = reviewsData.filter(businessType=int(businessType))

        trend_data = []
        total_review_first_approval = 0
        if filterType == 1:
            datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
            for date in datewise_data:
                gk_total_reviews = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month']).count()
                review_first_approval = 0
                reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month']).values_list('id', flat=True)
                for reviewId in reviewIds:
                    reviewData = reviewsData.filter(id=reviewId).values().first()
                    gk = GateKeeping.objects.filter(document=reviewId)
                    if reviewData['referred'] == False:
                        if gk.exists():
                            versions = gk.count()
                            if versions == 1:
                                if reviewData['status'] == 1:
                                    review_first_approval += 1
                if gk_total_reviews != 0 :
                    total_review_first_approval += review_first_approval
                    trend_data.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), gk_total_reviews, review_first_approval])
        if filterType == 2:
            datewise_data = reviewsData.values('updated_at__date').distinct().order_by('updated_at__date')
            for date in datewise_data:
                gk_total_reviews = reviewsData.filter(updated_at__date=date['updated_at__date']).count()
                review_first_approval = 0
                reviewIds = reviewsData.filter(updated_at__date=date['updated_at__date']).values_list('id', flat=True)
                for reviewId in reviewIds:
                    reviewData = reviewsData.filter(id=reviewId).values().first()
                    gk = GateKeeping.objects.filter(document=reviewId)
                    if reviewData['referred'] == False:
                        if gk.exists():
                            versions = gk.count()
                            if versions == 1:
                                if reviewData['status'] == 1:
                                    review_first_approval += 1
                if gk_total_reviews != 0 :
                    total_review_first_approval += review_first_approval
                    trend_data.append([date['updated_at__date'].strftime('%d %b %Y'), gk_total_reviews, review_first_approval])
        if filterType == 3:
            datewise_data = reviewsData.values('updated_at__date', 'updated_at__hour').distinct().order_by('updated_at__date', 'updated_at__hour')
            for date in datewise_data:
                gk_total_reviews = reviewsData.filter(updated_at__date=date['updated_at__date'], updated_at__hour=date['updated_at__hour']).count()
                review_first_approval = 0
                reviewIds = reviewsData.filter(updated_at__date=date['updated_at__date'], updated_at__hour=date['updated_at__hour']).values_list('id', flat=True)
                for reviewId in reviewIds:
                    reviewData = reviewsData.filter(id=reviewId).values().first()
                    gk = GateKeeping.objects.filter(document=reviewId)
                    if reviewData['referred'] == False:
                        if gk.exists():
                            versions = gk.count()
                            if versions == 1:
                                if reviewData['status'] == 1:
                                    review_first_approval += 1
                if gk_total_reviews != 0 :
                    total_review_first_approval += review_first_approval
                    trend_data.append([datetime.strftime(datetime.strptime(f"{date['updated_at__date']} {date['updated_at__hour']}", '%Y-%m-%d %H'), "%I %p"), gk_total_reviews, review_first_approval])
        if filterType == 4:
            if customFilterType == 1:
                if (datetime.strptime(todate, "%Y-%m-%d") - datetime.strptime(fromdate, "%Y-%m-%d")).days > 30:
                    datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                    for date in datewise_data:
                        gk_total_reviews = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month']).count()
                        review_first_approval = 0
                        reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month']).values_list('id', flat=True)
                        for reviewId in reviewIds:
                            reviewData = reviewsData.filter(id=reviewId).values().first()
                            gk = GateKeeping.objects.filter(document=reviewId)
                            if reviewData['referred'] == False:
                                if gk.exists():
                                    versions = gk.count()
                                    if versions == 1:
                                        if reviewData['status'] == 1:
                                            review_first_approval += 1
                        if gk_total_reviews != 0 :
                            total_review_first_approval += review_first_approval
                            trend_data.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), gk_total_reviews, review_first_approval])
                else:
                    datewise_data = reviewsData.values('updated_at__date').distinct().order_by('updated_at__date')
                    for date in datewise_data:
                        gk_total_reviews = reviewsData.filter(updated_at__date=date['updated_at__date']).count()
                        review_first_approval = 0
                        reviewIds = reviewsData.filter(updated_at__date=date['updated_at__date']).values_list('id', flat=True)
                        for reviewId in reviewIds:
                            reviewData = reviewsData.filter(id=reviewId).values().first()
                            gk = GateKeeping.objects.filter(document=reviewId)
                            if reviewData['referred'] == False:
                                if gk.exists():
                                    versions = gk.count()
                                    if versions == 1:
                                        if reviewData['status'] == 1:
                                            review_first_approval += 1
                        if gk_total_reviews != 0 :
                            total_review_first_approval += review_first_approval
                            trend_data.append([date['updated_at__date'].strftime('%d %b %Y'), gk_total_reviews, review_first_approval])
            if customFilterType == 2:
                datewise_data = reviewsData.values('updated_at__year','updated_at__week').distinct().order_by('updated_at__year','updated_at__week')
                for date in datewise_data:
                    gk_total_reviews = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__week=date['updated_at__week']).count()
                    review_first_approval = 0
                    reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__week=date['updated_at__week']).values_list('id', flat=True)
                    for reviewId in reviewIds:
                        reviewData = reviewsData.filter(id=reviewId).values().first()
                        gk = GateKeeping.objects.filter(document=reviewId)
                        if reviewData['referred'] == False:
                            if gk.exists():
                                versions = gk.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                    if gk_total_reviews != 0 :
                        total_review_first_approval += review_first_approval
                        trend_data.append([f"{date['updated_at__year']} Week {date['updated_at__week']}", gk_total_reviews, review_first_approval])
            if customFilterType == 3:
                datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                for date in datewise_data:
                    gk_total_reviews = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month']).count()
                    review_first_approval = 0
                    reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month']).values_list('id', flat=True)
                    for reviewId in reviewIds:
                        reviewData = reviewsData.filter(id=reviewId).values().first()
                        gk = GateKeeping.objects.filter(document=reviewId)
                        if reviewData['referred'] == False:
                            if gk.exists():
                                versions = gk.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                    if gk_total_reviews != 0 :
                        total_review_first_approval += review_first_approval
                        trend_data.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), gk_total_reviews, review_first_approval])
            if customFilterType == 4:
                datewise_data = reviewsData.values('updated_at__year','updated_at__quarter').distinct().order_by('updated_at__year','updated_at__quarter')
                for date in datewise_data:
                    gk_total_reviews = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__quarter=date['updated_at__quarter']).count()
                    review_first_approval = 0
                    reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__quarter=date['updated_at__quarter']).values_list('id', flat=True)
                    for reviewId in reviewIds:
                        reviewData = reviewsData.filter(id=reviewId).values().first()
                        gk = GateKeeping.objects.filter(document=reviewId)
                        if reviewData['referred'] == False:
                            if gk.exists():
                                versions = gk.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                    if gk_total_reviews != 0 :
                        total_review_first_approval += review_first_approval
                        trend_data.append([f"{date['updated_at__year']} Quarter {date['updated_at__quarter']}", gk_total_reviews, review_first_approval])
            if customFilterType == 5:
                datewise_data = reviewsData.values('updated_at__year').distinct().order_by('updated_at__year')
                for date in datewise_data:
                    gk_total_reviews = reviewsData.filter(updated_at__year=date['updated_at__year']).count()
                    review_first_approval = 0
                    reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year']).values_list('id', flat=True)
                    for reviewId in reviewIds:
                        reviewData = reviewsData.filter(id=reviewId).values().first()
                        gk = GateKeeping.objects.filter(document=reviewId)
                        if reviewData['referred'] == False:
                            if gk.exists():
                                versions = gk.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                    if gk_total_reviews != 0 :
                        total_review_first_approval += review_first_approval
                        trend_data.append([f"{date['updated_at__year']}", gk_total_reviews, review_first_approval])    
        advisorData = {
            "trend_data": trend_data,
        }
        return Response(advisorData, 200)
    

class monitoringInsights(APIView):

    def post(self, request):
        user = request.user
        filterType = int(request.data['filterType'])
        year = request.data['year']
        monthyear = request.data['monthyear']
        month = request.data['month']
        date = request.data['date']
        fromdate = request.data['fromdate']
        todate = request.data['todate']
        customFilterType = int(request.data['customFilterType'])
        region = (request.data['region'])
        advisor = (request.data['advisor'])
        businessType = (request.data['businessType'])
        # Annual Data
        reviewsData = ComplianceDocument.objects.filter(advisor=user.pk)
        if filterType == 1:
            reviewsData = reviewsData.filter(updated_at__year=year)
        if filterType == 2:
            reviewsData = reviewsData.filter(updated_at__year=monthyear, updated_at__month=month)
        if filterType == 3:
            reviewsData = reviewsData.filter(updated_at__date=date)
        if filterType == 4:
            date_range = (datetime.strptime(fromdate, '%Y-%m-%d') , datetime.strptime(todate, '%Y-%m-%d') + timedelta(days=1))
            reviewsData = reviewsData.filter(updated_at__range=date_range)
        if region != "all":
            reviewsData = reviewsData.filter(region=region)
        if advisor != "all":
            reviewsData = reviewsData.filter(advisor=int(advisor))

        if businessType != "all":
            reviewsData = reviewsData.filter(businessType=int(businessType))
        
        # Trend
        monitoring_trend = []
        
        if filterType == 1:
            datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
            total_review_first_approval = 0
            for date in datewise_data:
                reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month']).values_list('id', flat=True)
                review_first_approval = 0
                review_first_partial_approval = 0
                review_first_not_approved = 0
                for reviewId in reviewIds:
                    reviewData = reviewsData.filter(id=reviewId).values().first()
                    if reviewData['referred'] == False:
                        gk = GateKeeping.objects.filter(document=reviewId)
                        if gk.exists():
                            versions = gk.count()
                            if versions == 1:
                                if reviewData['status'] == 1:
                                    review_first_approval += 1
                                if reviewData['status'] == 2:
                                    review_first_not_approved += 1
                                if reviewData['status'] == 4:
                                    review_first_partial_approval += 1
                    else:
                        arcdata = arc.objects.filter(document=reviewId)
                        if arcdata.exists():
                            versions = arcdata.count()
                            if versions == 1:
                                if reviewData['status'] == 1:
                                    review_first_approval += 1
                                if reviewData['status'] == 2:
                                    review_first_not_approved += 1
                                if reviewData['status'] == 4:
                                    review_first_partial_approval += 1
                if review_first_approval != 0 or review_first_not_approved != 0 or review_first_partial_approval != 0:
                    total_review_first_approval += review_first_approval
                    monitoring_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), review_first_approval, review_first_not_approved, review_first_partial_approval])
        if filterType == 2:
            datewise_data = reviewsData.values('updated_at__date').distinct().order_by('updated_at__date')
            total_review_first_approval = 0
            for date in datewise_data:
                reviewIds = reviewsData.filter(updated_at__date=date['updated_at__date']).values_list('id', flat=True)
                review_first_approval = 0
                review_first_partial_approval = 0
                review_first_not_approved = 0
                for reviewId in reviewIds:
                    reviewData = reviewsData.filter(id=reviewId).values().first()
                    if reviewData['referred'] == False:
                        gk = GateKeeping.objects.filter(document=reviewId)
                        if gk.exists():
                            versions = gk.count()
                            if versions == 1:
                                if reviewData['status'] == 1:
                                    review_first_approval += 1
                                if reviewData['status'] == 2:
                                    review_first_not_approved += 1
                                if reviewData['status'] == 4:
                                    review_first_partial_approval += 1
                    else:
                        arcdata = arc.objects.filter(document=reviewId)
                        if arcdata.exists():
                            versions = arcdata.count()
                            if versions == 1:
                                if reviewData['status'] == 1:
                                    review_first_approval += 1
                                if reviewData['status'] == 2:
                                    review_first_not_approved += 1
                                if reviewData['status'] == 4:
                                    review_first_partial_approval += 1
                if review_first_approval != 0 or review_first_not_approved != 0 or review_first_partial_approval != 0:
                    total_review_first_approval += review_first_approval
                    monitoring_trend.append([date['updated_at__date'].strftime('%d %b %Y'), review_first_approval, review_first_not_approved, review_first_partial_approval])
        if filterType == 3:
            datewise_data = reviewsData.values('updated_at__date', 'updated_at__hour').distinct().order_by('updated_at__date', 'updated_at__hour')
            total_review_first_approval = 0
            for date in datewise_data:
                reviewIds = reviewsData.filter(updated_at__date=date['updated_at__date'], updated_at__hour=date['updated_at__hour']).values_list('id', flat=True)
                review_first_approval = 0
                review_first_partial_approval = 0
                review_first_not_approved = 0
                for reviewId in reviewIds:
                    reviewData = reviewsData.filter(id=reviewId).values().first()
                    if reviewData['referred'] == False:
                        gk = GateKeeping.objects.filter(document=reviewId)
                        if gk.exists():
                            versions = gk.count()
                            if versions == 1:
                                if reviewData['status'] == 1:
                                    review_first_approval += 1
                                if reviewData['status'] == 2:
                                    review_first_not_approved += 1
                                if reviewData['status'] == 4:
                                    review_first_partial_approval += 1
                    else:
                        arcdata = arc.objects.filter(document=reviewId)
                        if arcdata.exists():
                            versions = arcdata.count()
                            if versions == 1:
                                if reviewData['status'] == 1:
                                    review_first_approval += 1
                                if reviewData['status'] == 2:
                                    review_first_not_approved += 1
                                if reviewData['status'] == 4:
                                    review_first_partial_approval += 1
                if review_first_approval != 0 or review_first_not_approved != 0 or review_first_partial_approval != 0:               
                    total_review_first_approval += review_first_approval
                    monitoring_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__date']} {date['updated_at__hour']}", '%Y-%m-%d %H'), "%I %p"), review_first_approval, review_first_not_approved, review_first_partial_approval])
        if filterType == 4:
            if customFilterType == 1:
                if (datetime.strptime(todate, "%Y-%m-%d") - datetime.strptime(fromdate, "%Y-%m-%d")).days > 30:
                    datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                    total_review_first_approval = 0
                    for date in datewise_data:
                        reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month']).values_list('id', flat=True)
                        review_first_approval = 0
                        review_first_partial_approval = 0
                        review_first_not_approved = 0
                        for reviewId in reviewIds:
                            reviewData = reviewsData.filter(id=reviewId).values().first()
                            if reviewData['referred'] == False:
                                gk = GateKeeping.objects.filter(document=reviewId)
                                if gk.exists():
                                    versions = gk.count()
                                    if versions == 1:
                                        if reviewData['status'] == 1:
                                            review_first_approval += 1
                                        if reviewData['status'] == 2:
                                            review_first_not_approved += 1
                                        if reviewData['status'] == 4:
                                            review_first_partial_approval += 1
                            else:
                                arcdata = arc.objects.filter(document=reviewId)
                                if arcdata.exists():
                                    versions = arcdata.count()
                                    if versions == 1:
                                        if reviewData['status'] == 1:
                                            review_first_approval += 1
                                        if reviewData['status'] == 2:
                                            review_first_not_approved += 1
                                        if reviewData['status'] == 4:
                                            review_first_partial_approval += 1
                        if review_first_approval != 0 or review_first_not_approved != 0 or review_first_partial_approval != 0:       
                            total_review_first_approval += review_first_approval
                            monitoring_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), review_first_approval, review_first_not_approved, review_first_partial_approval])
                else:
                    datewise_data = reviewsData.values('updated_at__date').distinct().order_by('updated_at__date')
                    total_review_first_approval = 0
                    for date in datewise_data:
                        reviewIds = reviewsData.filter(updated_at__date=date['updated_at__date']).values_list('id', flat=True)
                        review_first_approval = 0
                        review_first_partial_approval = 0
                        review_first_not_approved = 0
                        for reviewId in reviewIds:
                            reviewData = reviewsData.filter(id=reviewId).values().first()
                            if reviewData['referred'] == False:
                                gk = GateKeeping.objects.filter(document=reviewId)
                                if gk.exists():
                                    versions = gk.count()
                                    if versions == 1:
                                        if reviewData['status'] == 1:
                                            review_first_approval += 1
                                        if reviewData['status'] == 2:
                                            review_first_not_approved += 1
                                        if reviewData['status'] == 4:
                                            review_first_partial_approval += 1
                            else:
                                arcdata = arc.objects.filter(document=reviewId)
                                if arcdata.exists():
                                    versions = arcdata.count()
                                    if versions == 1:
                                        if reviewData['status'] == 1:
                                            review_first_approval += 1
                                        if reviewData['status'] == 2:
                                            review_first_not_approved += 1
                                        if reviewData['status'] == 4:
                                            review_first_partial_approval += 1
                        if review_first_approval != 0 or review_first_not_approved != 0 or review_first_partial_approval != 0:      
                            total_review_first_approval += review_first_approval
                            monitoring_trend.append([date['updated_at__date'].strftime('%d %b %Y'), review_first_approval, review_first_not_approved, review_first_partial_approval])
            if customFilterType == 2:
                datewise_data = reviewsData.values('updated_at__year','updated_at__week').distinct().order_by('updated_at__year','updated_at__week')
                total_review_first_approval = 0
                for date in datewise_data:
                    reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__week=date['updated_at__week']).values_list('id', flat=True)
                    review_first_approval = 0
                    review_first_partial_approval = 0
                    review_first_not_approved = 0
                    for reviewId in reviewIds:
                        reviewData = reviewsData.filter(id=reviewId).values().first()
                        if reviewData['referred'] == False:
                            gk = GateKeeping.objects.filter(document=reviewId)
                            if gk.exists():
                                versions = gk.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                                    if reviewData['status'] == 2:
                                        review_first_not_approved += 1
                                    if reviewData['status'] == 4:
                                        review_first_partial_approval += 1
                        else:
                            arcdata = arc.objects.filter(document=reviewId)
                            if arcdata.exists():
                                versions = arcdata.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                                    if reviewData['status'] == 2:
                                        review_first_not_approved += 1
                                    if reviewData['status'] == 4:
                                        review_first_partial_approval += 1
                    if review_first_approval != 0 or review_first_not_approved != 0 or review_first_partial_approval != 0:      
                        total_review_first_approval += review_first_approval
                        monitoring_trend.append([f"{date['updated_at__year']} Week {date['updated_at__week']}", review_first_approval, review_first_not_approved, review_first_partial_approval])
            if customFilterType == 3:
                datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                total_review_first_approval = 0
                for date in datewise_data:
                    reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month']).values_list('id', flat=True)
                    review_first_approval = 0
                    review_first_partial_approval = 0
                    review_first_not_approved = 0
                    for reviewId in reviewIds:
                        reviewData = reviewsData.filter(id=reviewId).values().first()
                        if reviewData['referred'] == False:
                            gk = GateKeeping.objects.filter(document=reviewId)
                            if gk.exists():
                                versions = gk.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                                    if reviewData['status'] == 2:
                                        review_first_not_approved += 1
                                    if reviewData['status'] == 4:
                                        review_first_partial_approval += 1
                        else:
                            arcdata = arc.objects.filter(document=reviewId)
                            if arcdata.exists():
                                versions = arcdata.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                                    if reviewData['status'] == 2:
                                        review_first_not_approved += 1
                                    if reviewData['status'] == 4:
                                        review_first_partial_approval += 1
                    if review_first_approval != 0 or review_first_not_approved != 0 or review_first_partial_approval != 0:      
                        total_review_first_approval += review_first_approval
                        monitoring_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), review_first_approval, review_first_not_approved, review_first_partial_approval])
            if customFilterType == 4:
                datewise_data = reviewsData.values('updated_at__year','updated_at__quarter').distinct().order_by('updated_at__year','updated_at__quarter')
                total_review_first_approval = 0
                for date in datewise_data:
                    reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__quarter=date['updated_at__quarter']).values_list('id', flat=True)
                    review_first_approval = 0
                    review_first_partial_approval = 0
                    review_first_not_approved = 0
                    for reviewId in reviewIds:
                        reviewData = reviewsData.filter(id=reviewId).values().first()
                        if reviewData['referred'] == False:
                            gk = GateKeeping.objects.filter(document=reviewId)
                            if gk.exists():
                                versions = gk.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                                    if reviewData['status'] == 2:
                                        review_first_not_approved += 1
                                    if reviewData['status'] == 4:
                                        review_first_partial_approval += 1
                        else:
                            arcdata = arc.objects.filter(document=reviewId)
                            if arcdata.exists():
                                versions = arcdata.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                                    if reviewData['status'] == 2:
                                        review_first_not_approved += 1
                                    if reviewData['status'] == 4:
                                        review_first_partial_approval += 1
                    if review_first_approval != 0 or review_first_not_approved != 0 or review_first_partial_approval != 0:      
                        total_review_first_approval += review_first_approval
                        monitoring_trend.append([f"{date['updated_at__year']} Quarter {date['updated_at__quarter']}", review_first_approval, review_first_not_approved, review_first_partial_approval])
            if customFilterType == 5:
                datewise_data = reviewsData.values('updated_at__year').distinct().order_by('updated_at__year')
                total_review_first_approval = 0
                for date in datewise_data:
                    reviewIds = reviewsData.filter(updated_at__year=date['updated_at__year']).values_list('id', flat=True)
                    review_first_approval = 0
                    review_first_partial_approval = 0
                    review_first_not_approved = 0
                    for reviewId in reviewIds:
                        reviewData = reviewsData.filter(id=reviewId).values().first()
                        if reviewData['referred'] == False:
                            gk = GateKeeping.objects.filter(document=reviewId)
                            if gk.exists():
                                versions = gk.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                                    if reviewData['status'] == 2:
                                        review_first_not_approved += 1
                                    if reviewData['status'] == 4:
                                        review_first_partial_approval += 1
                        else:
                            arcdata = arc.objects.filter(document=reviewId)
                            if arcdata.exists():
                                versions = arcdata.count()
                                if versions == 1:
                                    if reviewData['status'] == 1:
                                        review_first_approval += 1
                                    if reviewData['status'] == 2:
                                        review_first_not_approved += 1
                                    if reviewData['status'] == 4:
                                        review_first_partial_approval += 1
                    if review_first_approval != 0 or review_first_not_approved != 0 or review_first_partial_approval != 0:      
                        total_review_first_approval += review_first_approval
                        monitoring_trend.append([f"{date['updated_at__year']}", review_first_approval, review_first_not_approved, review_first_partial_approval])
        for row in monitoring_trend:
            percentage = round(row[1]/total_review_first_approval * 100) if total_review_first_approval != 0 else 0
            row.append(percentage)
        monitoringData = {
            "date_monitoring_trend" : monitoring_trend,
        }
        return Response(monitoringData, 200)
  


class investmentInsights(APIView):

    def post(self, request):
        user = request.user
        filterType = int(request.data['filterType'])
        year = request.data['year']
        monthyear = request.data['monthyear']
        month = request.data['month']
        date = request.data['date']
        fromdate = request.data['fromdate']
        todate = request.data['todate']
        customFilterType = int(request.data['customFilterType'])
        region = (request.data['region'])
        advisor = (request.data['advisor'])
        businessType = (request.data['businessType'])
        # Annual Data
        reviewsData = ComplianceDocument.objects.filter(advisor=user.pk)
        lump_sum_trend = []
        
        if filterType == 1:
            datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
            for date in datewise_data:
                investmentData = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                if investmentData.exists():
                    lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                    recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
                else:
                    lump_sum = 0
                    recurring = 0
                    
                lump_sum_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(lump_sum), int(recurring)])
        if filterType == 2:
            datewise_data = reviewsData.values('updated_at__date').distinct().order_by('updated_at__date')
            for date in datewise_data:
                investmentData = reviewsData.filter(updated_at__date=date['updated_at__date'])
                if investmentData.exists():
                    lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                    recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
                else:
                    lump_sum = 0
                    recurring = 0
                lump_sum_trend.append([date['updated_at__date'].strftime('%d %b %Y'), int(lump_sum), int(recurring)])
        if filterType == 3:
            datewise_data = reviewsData.values('updated_at__date', 'updated_at__hour').distinct().order_by('updated_at__date', 'updated_at__hour')
            for date in datewise_data:
                investmentData = reviewsData.filter(updated_at__date=date['updated_at__date'], updated_at__hour=date['updated_at__hour'])
                if investmentData.exists():
                    lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                    recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
                else:
                    lump_sum = 0
                    recurring = 0                    
                lump_sum_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__date']} {date['updated_at__hour']}", '%Y-%m-%d %H'), "%I %p"), int(lump_sum), int(recurring)])
        if filterType == 4:
            if customFilterType == 1:
                if (datetime.strptime(todate, "%Y-%m-%d") - datetime.strptime(fromdate, "%Y-%m-%d")).days > 30:
                    datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                    for date in datewise_data:
                        investmentData = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                        if investmentData.exists():
                            lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                            recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
                        else:
                            lump_sum = 0
                            recurring = 0    
                        lump_sum_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(lump_sum), int(recurring)])
                else:
                    datewise_data = reviewsData.values('updated_at__date').distinct().order_by('updated_at__date')
                    for date in datewise_data:
                        investmentData = reviewsData.filter(updated_at__date=date['updated_at__date'])
                        if investmentData.exists():
                            lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                            recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
                        else:
                            lump_sum = 0
                            recurring = 0   
                        lump_sum_trend.append([date['updated_at__date'].strftime('%d %b %Y'), int(lump_sum), int(recurring)])
            if customFilterType == 2:
                datewise_data = reviewsData.values('updated_at__year','updated_at__week').distinct().order_by('updated_at__year','updated_at__week')
                for date in datewise_data:
                    investmentData = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__week=date['updated_at__week'])
                    if investmentData.exists():
                        lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                        recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
                    else:
                        lump_sum = 0
                        recurring = 0   
                    lump_sum_trend.append([f"{date['updated_at__year']} Week {date['updated_at__week']}", int(lump_sum), int(recurring)])
            if customFilterType == 3:
                datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                for date in datewise_data:
                    investmentData = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                    if investmentData.exists():
                        lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                        recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
                    else:
                        lump_sum = 0
                        recurring = 0   
                    lump_sum_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(lump_sum), int(recurring)])
            if customFilterType == 4:
                datewise_data = reviewsData.values('updated_at__year','updated_at__quarter').distinct().order_by('updated_at__year','updated_at__quarter')
                for date in datewise_data:
                    investmentData = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__quarter=date['updated_at__quarter'])
                    if investmentData.exists():
                        lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                        recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
                    else:
                        lump_sum = 0
                        recurring = 0   
                    lump_sum_trend.append([f"{date['updated_at__year']} Quarter {date['updated_at__quarter']}", int(lump_sum), int(recurring)])
            if customFilterType == 5:
                datewise_data = reviewsData.values('updated_at__year').distinct().order_by('updated_at__year')
                for date in datewise_data:
                    investmentData = reviewsData.filter(updated_at__year=date['updated_at__year'])
                    if investmentData.exists():
                        lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                        recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
                    else:
                        lump_sum = 0
                        recurring = 0   
                    lump_sum_trend.append([f"{date['updated_at__year']}", int(lump_sum), int(recurring)])
            
        lump_sumdata = {
            "investment_trend" : lump_sum_trend,
        }
        return Response(lump_sumdata, 200)



class businessType2Insights(APIView):

    def post(self, request):
        user = request.user
        filterType = int(request.data['filterType'])
        year = request.data['year']
        monthyear = request.data['monthyear']
        month = request.data['month']
        date = request.data['date']
        fromdate = request.data['fromdate']
        todate = request.data['todate']
        customFilterType = int(request.data['customFilterType'])
        region = (request.data['region'])
        advisor = (request.data['advisor'])
        businessType = (request.data['businessType'])
        # Annual Data
        reviewsData = ComplianceDocument.objects.filter(advisor=user.pk)
        if filterType == 1:
            reviewsData = reviewsData.filter(updated_at__year=year)
        if filterType == 2:
            reviewsData = reviewsData.filter(updated_at__year=monthyear, updated_at__month=month)
        if filterType == 3:
            reviewsData = reviewsData.filter(updated_at__date=date)
        if filterType == 4:
            date_range = (datetime.strptime(fromdate, '%Y-%m-%d') , datetime.strptime(todate, '%Y-%m-%d') + timedelta(days=1))
            reviewsData = reviewsData.filter(updated_at__range=date_range)
        if region != "all":
            reviewsData = reviewsData.filter(region=region)
        if advisor != "all":
            reviewsData = reviewsData.filter(advisor=int(advisor))
        if businessType != "all":
            reviewsData = reviewsData.filter(businessType=int(businessType))
        # Business Type wise Trend
        businessType_trend = []
        business_total_commission = 0
        for i in range(1,16):
            commission = reviewsData.filter(businessType=i)
            if commission.exists():
                commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
            else:
                commission = 0
            business_total_commission += int(commission)
            if i == 1:
                businessType = "Business Assurance"
            if i == 2:
                businessType = "Comm release"
            if i == 3:
                businessType = "Employee Benefits"
            if i == 4:
                businessType = "Funeral"
            if i == 5:
                businessType = "GAP Cover"
            if i == 6:
                businessType = "Recurring - Investment"
            if i == 7:
                businessType = "Lumpsum - Investment"
            if i == 8:
                businessType = "Investment- Both"
            if i == 9:
                businessType = "Medical Aid"
            if i == 10:
                businessType = "Other"
            if i == 11:
                businessType = "Will"
            if i == 12:
                businessType = "Risk"
            if i == 13:
                businessType = "ST Re-issued/instated"
            if i == 14:
                businessType = "Short Term Commercial"
            if i == 15:
                businessType = "Short Term Personal"    
            businessType_trend.append([businessType, int(commission)])
        for row in businessType_trend:
            commission_percentage = round(row[1]/business_total_commission * 100) if business_total_commission != 0 else 0
            row.append(commission_percentage)
        commissiondata = {
            "businessType_trend" : businessType_trend,
        }
        return Response(commissiondata, 200)
