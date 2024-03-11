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
from django.db.models.functions import (
    ExtractDay, ExtractMonth, ExtractQuarter, ExtractWeek,
    ExtractWeekDay, ExtractIsoYear, ExtractYear,
)
import re


class commissionInsights(APIView):

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
        reviewsData = ComplianceDocument.objects.all()
        if not user.is_superuser:
            if user.userType == 1:
                reviewsData = reviewsData.filter(user=user.pk)
            if user.userType == 2:
                reviewsData = reviewsData.filter(user=user.pk)
            if user.userType == 3:
                regional_manager = region_manager.objects.filter(manager=user.pk)
                if regional_manager.exists():
                    advisor_ids = user_profile.objects.filter(region=regional_manager.first().region.pk)
                    if advisor_ids.exists():
                        advisor_ids = list(advisor_ids.values_list('user',flat=True))
                        reviewsData = reviewsData.filter(advisor__in=advisor_ids)
                    reviewsData = reviewsData.filter(advisor__in=advisor_ids)
            if user.userType == 5:
                advisor_ids = user_profile.objects.filter(bac=user.pk)
                if advisor_ids.exists():
                    advisor_ids = list(advisor_ids.values_list('user',flat=True))
                    reviewsData = reviewsData.filter(advisor__in=advisor_ids)
            if user.userType == 6:
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
        if advisor != "all":
            reviewsData = reviewsData.filter(advisor=int(advisor))
        if businessType != "all":
            reviewsData = reviewsData.filter(businessType=int(businessType))
        
        total_reviews = reviewsData.count()
        total_documents = reviewsData.values()
        total_regions = reviewsData.values('region').distinct().count()
        total_advisors = reviewsData.values('advisor').distinct().count()
        total_commission = reviewsData.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
        total_commission = round(total_commission,2) if total_commission else 0.0
        # for review_document in total_documents:
        #     gk = GateKeeping.objects.filter(document=review_document['id'])
        #     if gk.exists():
        #         gk = gk.values().latest('version')
        #         total_commission += float(gk['commission'].replace(',', '.'))
        # Date wise Trend
        commission_trend = []
        if filterType == 1:
            datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
            for date in datewise_data:
                commission = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                if commission.exists():
                    commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
                else:
                    commission = 0
                        # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
                commission_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(commission)])
        if filterType == 2:
            datewise_data = reviewsData.values('updated_at__year','updated_at__month', 'updated_at__day').distinct().order_by('updated_at__year','updated_at__month', 'updated_at__day')
            for date in datewise_data:
                commission = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'], updated_at__day=date['updated_at__day'])
                if commission.exists():
                    commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
                else:
                    commission = 0
                        # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
                commission_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}-{date['updated_at__day']}", '%Y-%m-%d') , '%d %b %Y'), int(commission)])
        if filterType == 3:
            datewise_data = reviewsData.values('updated_at__date', 'updated_at__hour').distinct().order_by('updated_at__date', 'updated_at__hour')
            for date in datewise_data:
                commission = reviewsData.filter(updated_at__date=date['updated_at__date'], updated_at__hour=date['updated_at__hour'])
                if commission.exists():
                    commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
                else:
                    commission = 0
                        # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
                commission_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__date']} {date['updated_at__hour']}", '%Y-%m-%d %H'), "%I %p"), int(commission)])
        if filterType == 4:
            if customFilterType == 1:
                if (datetime.strptime(todate, "%Y-%m-%d") - datetime.strptime(fromdate, "%Y-%m-%d")).days > 30:
                    datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                    for date in datewise_data:
                        commission = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                        if commission.exists():
                            commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
                        else:
                            commission = 0
                                # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
                        commission_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(commission)])
                else:
                    datewise_data = reviewsData.values('updated_at__date').distinct().order_by('updated_at__date')
                    for date in datewise_data:
                        commission = reviewsData.filter(updated_at__date=date['updated_at__date'])
                        if commission.exists():
                            commission = commission.values('updated_at__date').aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
                        else:
                            commission = 0
                                # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
                        commission_trend.append([date['updated_at__date'].strftime('%d %b %Y'), int(commission)])
            if customFilterType == 2:
                datewise_data = reviewsData.values('updated_at__year','updated_at__week').distinct().order_by('updated_at__year','updated_at__week')
                for date in datewise_data:
                    commission = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__week=date['updated_at__week'])
                    if commission.exists():
                        commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
                    else:
                        commission = 0
                            # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
                    commission_trend.append([f"{date['updated_at__year']} Week {date['updated_at__week']}", int(commission)])
            if customFilterType == 3:
                datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                for date in datewise_data:
                    commission = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                    if commission.exists():
                        commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
                    else:
                        commission = 0
                            # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
                    commission_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(commission)])
            if customFilterType == 4:
                datewise_data = reviewsData.values('updated_at__year','updated_at__quarter').distinct().order_by('updated_at__year','updated_at__quarter')
                for date in datewise_data:
                    commission = reviewsData.filter(updated_at__year=date['updated_at__year'], updated_at__quarter=date['updated_at__quarter'])
                    if commission.exists():
                        commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
                    else:
                        commission = 0
                            # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
                    commission_trend.append([f"{date['updated_at__year']} Quarter {date['updated_at__quarter']}", int(commission)])
            if customFilterType == 5:
                datewise_data = reviewsData.values('updated_at__year').distinct().order_by('updated_at__year')
                for date in datewise_data:
                    commission = reviewsData.filter(updated_at__year=date['updated_at__year'])
                    if commission.exists():
                        commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
                    else:
                        commission = 0
                    commission_trend.append([f"{date['updated_at__year']}", int(commission)])
        # Regions
        available_regions = regions.objects.all().values('region')
        if user.userType == 3:
            regional_manager = region_manager.objects.filter(manager=user.pk)
            if regional_manager.exists():
                available_regions = available_regions.filter(id=regional_manager.first().region.pk).values('region')
        if user.userType == 5:
            region_ids = user_profile.objects.filter(bac=user.pk)
            if region_ids.exists():
                region_ids = list(region_ids.values_list('region',flat=True))
                available_regions = available_regions.filter(id__in=region_ids).values('region')
        if user.userType == 6:
            region = user_profile.objects.filter(user=user.pk).first().region
            reviewsData = reviewsData.filter(region=region.region)
            available_regions = available_regions.filter(id=region.pk).values('region')
        # Region wise Trend
        region_commission_trend = []
        regionsData = []
        top_regions = []
        for region in available_regions:
            # reviewIds = ComplianceDocument.objects.filter(region=region['region']).values_list('id', flat=True)
            # commission = 0
            # for reviewId in reviewIds:
            #     gk = GateKeeping.objects.filter(document=reviewId)
            #     if gk.exists():
            #         gk = gk.values().latest('version')
            #         commission += float(gk['commission'].replace(',', '.'))
            # print(reviewsData)
            commission = reviewsData.filter(region=region['region'])
            # print(commission)
            if commission.exists():
                commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
            else:
                commission = 0
                    # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
            region_commission_trend.append([region['region'], int(commission)])
            top_regions.append({"region": region['region'], "commission": int(commission)})
            regionsData.append(region['region'])
            # if commission != 0:
            #     region_commission_trend.append([region['region'], int(commission)])
            #     top_regions.append({"region": region['region'], "commission": int(commission)})
            #     regionsData.append(region['region'])
        top_regions = sorted(top_regions, key=lambda d: d['commission'], reverse=True)
        # Advisor wise Trend
        advisor_commission_trend = []
        available_advisors = UserAccount.objects.filter(userType=6).values()
        advisorsData = []
        top_advisors = []
        for advisor in available_advisors:
            # reviewIds = ComplianceDocument.objects.filter(advisor=advisor['id']).values_list('id', flat=True)
            # commission = 0
            # for reviewId in reviewIds:
            #     gk = GateKeeping.objects.filter(document=reviewId)
            #     if gk.exists():
            #         gk = gk.values().latest('version')
            #         commission += float(gk['commission'].replace(',', '.'))
            commission = reviewsData.filter(advisor=advisor['id'])
            if commission.exists():
                commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
            else:
                commission = 0

                    # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
            if commission != 0:
                advisor_profile = user_profile.objects.filter(user=advisor['id'])
                name = f"{advisor['first_name']} {advisor['last_name']}"
                if advisor_profile.exists():
                    name = advisor_profile.first().Full_Name
                    name = f"{name} ({advisor_profile.first().ID_Number})"
                top_advisors.append({"advisor": f"{name}", "email": advisor['email'], "commission": commission})
        top_advisors = sorted(top_advisors, key=lambda d: d['commission'], reverse=True)
        # Business Type wise Trend
        businessType_commission_trend = []
        business_total_commission = 0
        for i in range(1,16):
            commission = reviewsData.filter(businessType=i)
            if commission.exists():
                commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
            else:
                commission = 0
            business_total_commission += int(commission)

            # reviewIds = ComplianceDocument.objects.filter(businessType=i).values_list('id', flat=True)
            # commission = 0
            # for reviewId in reviewIds:
            #     gk = GateKeeping.objects.filter(document=reviewId)
            #     if gk.exists():
            #         gk = gk.values().latest('version')
            #         commission += float(gk['commission'].replace(',', '.'))

                    # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
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
            businessType_commission_trend.append([businessType, int(commission)])
            # if commission != 0:
            #     # businessType_commission_trend.append([businessType, commission, round(commission/total_commission*100)])
            #     businessType_commission_trend.append([businessType, int(commission)])
        for row in businessType_commission_trend:
            commission_percentage = round(row[1]/business_total_commission * 100) if business_total_commission != 0 else 0
            row.append(commission_percentage)
        commissiondata = {
            "total_reviews" : total_reviews,
            "total_documents" : total_documents,
            "total_commission" : total_commission,
            "total_regions" : total_regions,
            "total_advisors" : total_advisors,
            "top_advisors" : top_advisors,
            "commission_trend" : commission_trend,
            "top_regions" : top_regions,
            "region_commission_trend" : region_commission_trend,
            "businessType_commission_trend" : businessType_commission_trend,
        }
        return Response(commissiondata, 200)

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
        reviewsData = ComplianceDocument.objects.all()
        if not user.is_superuser:
            if user.userType == 1:
                reviewsData = reviewsData.filter(user=user.pk)
            if user.userType == 2:
                reviewsData = reviewsData.filter(user=user.pk)
            if user.userType == 3:
                regional_manager = region_manager.objects.filter(manager=user.pk)
                if regional_manager.exists():
                    advisor_ids = user_profile.objects.filter(region=regional_manager.first().region.pk)
                    if advisor_ids.exists():
                        advisor_ids = list(advisor_ids.values_list('user',flat=True))
                        reviewsData = reviewsData.filter(advisor__in=advisor_ids)
                    reviewsData = reviewsData.filter(advisor__in=advisor_ids)
            if user.userType == 5:
                advisor_ids = user_profile.objects.filter(bac=user.pk)
                if advisor_ids.exists():
                    advisor_ids = list(advisor_ids.values_list('user',flat=True))
                    reviewsData = reviewsData.filter(advisor__in=advisor_ids)
            if user.userType == 6:
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
        if advisor != "all":
            reviewsData = reviewsData.filter(advisor=int(advisor))
        if businessType != "all":
            reviewsData = reviewsData.filter(businessType=int(businessType))

        total_reviews = reviewsData.count()
        total_documents = reviewsData.values()
        total_regions = reviewsData.values('region').distinct().count()
        total_advisors = reviewsData.values('advisor').distinct().count()
        total_investment_lump_sum = reviewsData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
        total_investment_recurring = reviewsData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
        
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
            # Regions
        available_regions = regions.objects.all().values('region')
        available_regions = regions.objects.all().values('region')
        if user.userType == 3:
            regional_manager = region_manager.objects.filter(manager=user.pk)
            if regional_manager.exists():
                available_regions = available_regions.filter(id=regional_manager.first().region.pk)
        if user.userType == 5:
            region_ids = user_profile.objects.filter(bac=user.pk)
            if region_ids.exists():
                region_ids = list(region_ids.values_list('region',flat=True))
                available_regions = available_regions.filter(id__in=region_ids)
        if user.userType == 6:
            region = user_profile.objects.filter(user=user.pk).first()
            reviewsData = reviewsData.filter(advisor=user.pk)
            available_regions = available_regions.filter(id=region.region.pk)
        # Region wise Trend
        region_investment_trend = []
        regionsData = []
        top_regions = []
        for region in available_regions:
            investmentData = reviewsData.filter(region=region['region'])
            if investmentData.exists():
                lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
            else:
                lump_sum = 0
                recurring = 0
                    # lump_sum_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "lump_sum": float(gk['lump_sum'].replace(',', '.'))})
            region_investment_trend.append([region['region'], int(lump_sum), int(recurring)])
            top_regions.append({"region": region['region'], "lump_sum": int(lump_sum), "recurring":int(recurring)})
            regionsData.append(region['region'])
            # if lump_sum != 0:
            #     region_investment_trend.append([region['region'], int(lump_sum), int(recurring)])
            #     top_regions.append({"region": region['region'], "lump_sum": lump_sum, "recurring":recurring})
            #     regionsData.append(region['region'])
        top_regions_lump_sum = sorted(top_regions, key=lambda d: d['lump_sum'], reverse=True)
        top_regions_recurring = sorted(top_regions, key=lambda d: d['recurring'], reverse=True)
        # Advisor wise Trend
        advisor_lump_sum_trend = []
        available_advisors = UserAccount.objects.filter(userType=6).values()
        advisorsData = []
        top_advisors = []
        for advisor in available_advisors:
            # reviewIds = reviewsData.filter(advisor=advisor['id']).values_list('id', flat=True)
            # lump_sum = 0
            # for reviewId in reviewIds:
            #     gk = GateKeeping.objects.filter(document=reviewId)
            #     if gk.exists():
            #         gk = gk.values().latest('version')
            #         lump_sum += float(gk['lump_sum'].replace(',', '.'))
            investmentData = reviewsData.filter(advisor=advisor['id'])
            if investmentData.exists():
                lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
            else:
                lump_sum = 0
                recurring = 0

                    # lump_sum_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "lump_sum": float(gk['lump_sum'].replace(',', '.'))})
            if lump_sum != 0:
                advisor_profile = user_profile.objects.filter(user=advisor['id'])
                name = f"{advisor['first_name']} {advisor['last_name']}"
                if advisor_profile.exists():
                    name = advisor_profile.first().Full_Name
                    name = f"{name} ({advisor_profile.first().ID_Number})"
                top_advisors.append({"advisor": f"{name}", "email": advisor['email'], "lump_sum": lump_sum, "recurring": recurring})
        top_advisors_lump_sum = sorted(top_advisors, key=lambda d: d['lump_sum'], reverse=True)
        top_advisors_recurring = sorted(top_advisors, key=lambda d: d['recurring'], reverse=True)
        # Business Type wise Trend
        businessType_investment_trend = []
        business_total_investment_lump_sum = 0
        business_total_investment_recurring = 0
        for i in range(1,16):
            investmentData = reviewsData.filter(businessType=i)
            if investmentData.exists():
                lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
            else:
                lump_sum = 0
                recurring = 0
            business_total_investment_lump_sum += lump_sum
            business_total_investment_recurring += recurring

            # reviewIds = reviewsData.filter(businessType=i).values_list('id', flat=True)
            # lump_sum = 0
            # for reviewId in reviewIds:
            #     gk = GateKeeping.objects.filter(document=reviewId)
            #     if gk.exists():
            #         gk = gk.values().latest('version')
            #         lump_sum += float(gk['lump_sum'].replace(',', '.'))

                    # lump_sum_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "lump_sum": float(gk['lump_sum'].replace(',', '.'))})
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
            businessType_investment_trend.append([businessType, int(lump_sum), int(recurring)])
            # if lump_sum != 0:
            #     # businessType_investment_trend.append([businessType, lump_sum, round(lump_sum/total_investment_lump_sum*100)])
            #     businessType_investment_trend.append([businessType, int(lump_sum), int(recurring)])
        # for row in businessType_investment_trend:
        #     lump_sum_percentage = round(row[1]/business_total_investment_lump_sum * 100)
        #     row.append(lump_sum_percentage)
        #     recurring_percentage = round(row[2]/business_total_investment_recurring * 100)
        #     row.append(recurring_percentage)
        lump_sumdata = {
            "total_reviews" : total_reviews,
            "total_documents" : total_documents,
            "total_regions" : total_regions,
            "total_investment_lump_sum" : total_investment_lump_sum,
            "total_investment_recurring" : total_investment_recurring,
            "top_regions_lump_sum" : top_regions_lump_sum,
            "top_regions_recurring" : top_regions_recurring,
            "total_advisors" : total_advisors,
            "top_advisors_lump_sum" : top_advisors_lump_sum,
            "top_advisors_recurring" : top_advisors_recurring,
            "investment_trend" : lump_sum_trend,
            "top_regions" : top_regions,
            "region_investment_trend" : region_investment_trend,
            "businessType_investment_trend" : businessType_investment_trend,
        }
        return Response(lump_sumdata, 200)

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
        starting_point = request.data['starting_point']
        # Annual Data
        reviewsData = ComplianceDocument.objects.all()
        if not user.is_superuser:
            if user.userType == 1:
                reviewsData = reviewsData.filter(user=user.pk)
            if user.userType == 2:
                reviewsData = reviewsData.filter(user=user.pk)
            if user.userType == 3:
                regional_manager = region_manager.objects.filter(manager=user.pk)
                if regional_manager.exists():
                    advisor_ids = user_profile.objects.filter(region=regional_manager.first().region.pk)
                    if advisor_ids.exists():
                        advisor_ids = list(advisor_ids.values_list('user',flat=True))
                        reviewsData = reviewsData.filter(advisor__in=advisor_ids)
                    reviewsData = reviewsData.filter(advisor__in=advisor_ids)
            if user.userType == 5:
                advisor_ids = user_profile.objects.filter(bac=user.pk)
                if advisor_ids.exists():
                    advisor_ids = list(advisor_ids.values_list('user',flat=True))
                    reviewsData = reviewsData.filter(advisor__in=advisor_ids)
            if user.userType == 6:
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
        if advisor != "all":
            reviewsData = reviewsData.filter(advisor=int(advisor))

        if businessType != "all":
            reviewsData = reviewsData.filter(businessType=int(businessType))
        if starting_point != "all":
            if starting_point == "arc":
                reviewsData = reviewsData.filter(starting_point=int(1))
            if starting_point == "gk":
                reviewsData = reviewsData.filter(starting_point=int(2))
        total_cases = reviewsData.count()
        first_approval = 0
        first_partial_approval = 0
        first_not_approved = 0
        # Normal Trend
        reviews = reviewsData.values()
        for review in reviews:
            if review['referred'] == False:
                gk = GateKeeping.objects.filter(document=review['id'])
                if gk.exists():
                    versions = gk.count()
                    if versions == 1:
                        if review['status'] == 1:
                            first_approval += 1
                        if review['status'] == 2:
                            first_not_approved += 1
                        if review['status'] == 4:
                            first_partial_approval += 1
            else:
                arcdata = arc.objects.filter(document=review['id'])
                if arcdata.exists():
                    versions = arcdata.count()
                    if versions == 1:
                        if review['status'] == 1:
                            first_approval += 1
                        if review['status'] == 2:
                            first_not_approved += 1
                        if review['status'] == 4:
                            first_partial_approval += 1
        
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
        # Top Regions
        available_regions = regions.objects.all().values('region')
        if user.userType == 3:
            regional_manager = region_manager.objects.filter(manager=user.pk)
            if regional_manager.exists():
                available_regions = available_regions.filter(id=regional_manager.first().region.pk)
        if user.userType == 5:
            region_ids = user_profile.objects.filter(bac=user.pk)
            if region_ids.exists():
                region_ids = list(region_ids.values_list('region',flat=True))
                available_regions = available_regions.filter(id__in=region_ids)
        if user.userType == 6:
            region = user_profile.objects.filter(user=user.pk).first()
            reviewsData = reviewsData.filter(advisor=user.pk)
            available_regions = available_regions.filter(id=region.region.pk)
        top_regions = []
        for region in available_regions:
            reviewIds = reviewsData.filter(region=region['region']).values_list('id', flat=True)
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
                else:
                    arcdata = arc.objects.filter(document=reviewId)
                    if arcdata.exists():
                        versions = arcdata.count()
                        if versions == 1:
                            if reviewData['status'] == 1:
                                review_first_approval += 1
            if review_first_approval != 0:
                top_regions.append({"region": region['region'], "first_approval": review_first_approval})
        
        top_regions = sorted(top_regions, key=lambda d: d['first_approval'], reverse=True)
        # Top 10 Advisors
        available_advisors = UserAccount.objects.filter(userType=6).values()
        if user.userType == 6:
            available_advisors = available_advisors.filter(id=user.pk)
        top_advisors = []
        for advisor in available_advisors:
            reviewIds = reviewsData.filter(advisor=advisor['id']).values_list('id', flat=True)
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
                else:
                    arcdata = arc.objects.filter(document=reviewId)
                    if arcdata.exists():
                        versions = arcdata.count()
                        if versions == 1:
                            if reviewData['status'] == 1:
                                review_first_approval += 1
            if review_first_approval != 0:
                advisor_profile = user_profile.objects.filter(user=advisor['id'])
                name = f"{advisor['first_name']} {advisor['last_name']}"
                if advisor_profile.exists():
                    name = advisor_profile.first().Full_Name
                top_advisors.append({"advisor": f"{name}", "email": advisor['email'], "first_approval": review_first_approval})
            
        top_advisors = sorted(top_advisors, key=lambda d: d['first_approval'], reverse=True)

        monitoringData = {
            "kpis" : {
                "total_reviews": total_cases,
                "first_approval": first_approval,
                "first_not_approved": first_not_approved,
                "first_partial_approval": first_partial_approval,
            },
            "trend" : {
                "first_approval": first_approval,
                "first_not_approved": first_not_approved,
                "first_partial_approval": first_partial_approval,
            },
            "date_monitoring_trend" : monitoring_trend,
            "top_regions" : top_regions,
            "top_advisors" : top_advisors,
        }
        return Response(monitoringData, 200)
    
class gatekeeperInsights(APIView):

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
        gatekeeper = (request.data['gatekeeper'])
        businessType = (request.data['businessType'])
        # Annual Data
        reviewsData = ComplianceDocument.objects.all()
        if not user.is_superuser:
            if user.userType == 1:
                reviewsData = reviewsData.filter(user=user.pk)
            if user.userType == 2:
                reviewsData = reviewsData.filter(user=user.pk)
            if user.userType == 3:
                regional_manager = region_manager.objects.filter(manager=user.pk)
                if regional_manager.exists():
                    advisor_ids = user_profile.objects.filter(region=regional_manager.first().region.pk)
                    if advisor_ids.exists():
                        advisor_ids = list(advisor_ids.values_list('user',flat=True))
                        reviewsData = reviewsData.filter(advisor__in=advisor_ids)
                    reviewsData = reviewsData.filter(advisor__in=advisor_ids)
            if user.userType == 5:
                advisor_ids = user_profile.objects.filter(bac=user.pk)
                if advisor_ids.exists():
                    advisor_ids = list(advisor_ids.values_list('user',flat=True))
                    reviewsData = reviewsData.filter(advisor__in=advisor_ids)
            if user.userType == 6:
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
        if gatekeeper != "all":
            reviewsData = reviewsData.filter(user=int(gatekeeper))
        if businessType != "all":
            reviewsData = reviewsData.filter(businessType=int(businessType))

        gatekeepers = UserAccount.objects.filter(userType=2)
        if gatekeepers.exists():
            gatekeeperIds = gatekeepers.values_list('id', flat=True)
            kpisData = reviewsData.filter(user__in=gatekeeperIds)
            total_reviews = kpisData.count()
            total_approvals = kpisData.filter(status=1).count()
            total_denied = kpisData.filter(status=2).count()
            total_partial_approvals = kpisData.filter(status=4).count()

            businessType_trend = []
            businessType_trend_list = []
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
            rejected_reviews_data = reviewsData.filter(user__in=gatekeeperIds,status=2)
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

            business_total_reviews = 0
            business_total_rejected_reviews = 0
            business_total_first_approvals = 0
            for i in range(1,16):
                reviews = reviewsData.filter(user__in=gatekeeperIds,businessType=i)
                if reviews.exists():
                    reviews = reviews.aggregate(total_reviews=Count('id'))['total_reviews']
                else:
                    reviews = 0
                business_total_reviews += reviews
                # Approved
                first_approval = 0
                approved_reviewsData = reviewsData.filter(user__in=gatekeeperIds,businessType=i,status=1)
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
                rejected_reviews = reviewsData.filter(user__in=gatekeeperIds,businessType=i,status=2).count()
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
            for row in businessType_rejection_trend:
                percentage = round(row[1]/business_total_rejected_reviews * 100) if business_total_rejected_reviews != 0 else 0
                row.append(percentage)
            businessType_trend_list = sorted(businessType_trend_list, key=lambda d: d["reviews"], reverse=True) 
            # Datewise Data
            date_gatekeeping_trend = []
            date_businesstype_trend = []
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
                        date_gatekeeping_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), gk_total_reviews, review_first_approval])
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
                        date_gatekeeping_trend.append([date['updated_at__date'].strftime('%d %b %Y'), gk_total_reviews, review_first_approval])
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
                        date_gatekeeping_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__date']} {date['updated_at__hour']}", '%Y-%m-%d %H'), "%I %p"), gk_total_reviews, review_first_approval])
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
                                date_gatekeeping_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), gk_total_reviews, review_first_approval])
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
                                date_gatekeeping_trend.append([date['updated_at__date'].strftime('%d %b %Y'), gk_total_reviews, review_first_approval])
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
                            date_gatekeeping_trend.append([f"{date['updated_at__year']} Week {date['updated_at__week']}", gk_total_reviews, review_first_approval])
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
                            date_gatekeeping_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), gk_total_reviews, review_first_approval])
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
                            date_gatekeeping_trend.append([f"{date['updated_at__year']} Quarter {date['updated_at__quarter']}", gk_total_reviews, review_first_approval])
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
                            date_gatekeeping_trend.append([f"{date['updated_at__year']}", gk_total_reviews, review_first_approval])    
                
                
                
                # # Business Type
                # review_first_approval = 0
                # bt_data = []
                # for i in range(1,16):
                #     reviews = reviewsData.filter(updated_at__date=date['updated_at__date'],user__in=gatekeeperIds,businessType=i)
                #     if reviews.exists():
                #         bt_total_reviews = reviews.aggregate(total_reviews=Count('id'))['total_reviews']
                #     else:
                #         bt_total_reviews = 0
                #     reviewIds = reviews.values_list('id', flat=True)
                #     for reviewId in reviewIds:
                #         reviewData = reviewsData.filter(id=reviewId).values().first()
                #         gk = GateKeeping.objects.filter(document=reviewId)
                #         if reviewData['referred'] == False:
                #             if gk.exists():
                #                 versions = gk.count()
                #                 if versions == 1:
                #                     if reviewData['status'] == 1:
                #                         review_first_approval += 1
                #     if i == 1:
                #         businessType = "Business Assurance"
                #     if i == 2:
                #         businessType = "Comm release"
                #     if i == 3:
                #         businessType = "Employee Benefits"
                #     if i == 4:
                #         businessType = "Funeral"
                #     if i == 5:
                #         businessType = "GAP Cover"
                #     if i == 6:
                #         businessType = "Recurring - Investment"
                #     if i == 7:
                #         businessType = "Lumpsum - Investment"
                #     if i == 8:
                #         businessType = "Investment- Both"
                #     if i == 9:
                #         businessType = "Medical Aid"
                #     if i == 10:
                #         businessType = "Other"
                #     if i == 11:
                #         businessType = "Will"
                #     if i == 12:
                #         businessType = "Risk"
                #     if i == 13:
                #         businessType = "ST Re-issued/instated"
                #     if i == 14:
                #         businessType = "Short Term Commercial"
                #     if i == 15:
                #         businessType = "Short Term Personal"  
                #     if bt_total_reviews != 0 :
                #         bt_data.append({"name": businessType, "data":""})
                # date_businesstype_trend.append([date['updated_at__date'].strftime('%d %b %Y'), bt_total_reviews, review_first_approval])
                
            for row in date_gatekeeping_trend:
                commission_percentage = round(row[1]/total_review_first_approval * 100) if total_review_first_approval != 0 else 0
                row.append(commission_percentage)
            gatekeeperData = {
                "kpis" : {
                    "total_reviews" : total_reviews,
                    "total_approvals" : total_approvals,
                    "total_denied" : total_denied,
                    "total_partial_approvals" : total_partial_approvals,
                },
                "businessType_trend": businessType_trend,
                "businessType_trend_list": businessType_trend_list,
                "businessType_rejection_trend": businessType_rejection_trend,
                "date_gatekeeping_trend": date_gatekeeping_trend,
                "date_businesstype_trend": date_businesstype_trend,
            }
            return Response(gatekeeperData, 200)
        else:
            raise Http404
        
    
class sanlamInsights(APIView):

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

        businessType = (request.data['businessType'])
        # Annual Data
        reviewsData = ComplianceDocument.objects.all()

        if not user.is_superuser:
            if user.userType == 1:
                reviewsData = reviewsData.filter(user=user.pk)
            if user.userType == 2:
                reviewsData = reviewsData.filter(user=user.pk)
            if user.userType == 3:
                regional_manager = region_manager.objects.filter(manager=user.pk)
                if regional_manager.exists():
                    advisor_ids = user_profile.objects.filter(region=regional_manager.first().region.pk)
                    if advisor_ids.exists():
                        advisor_ids = list(advisor_ids.values_list('user',flat=True))
                        reviewsData = reviewsData.filter(advisor__in=advisor_ids)
                    reviewsData = reviewsData.filter(advisor__in=advisor_ids)
            if user.userType == 5:
                advisor_ids = user_profile.objects.filter(bac=user.pk)
                if advisor_ids.exists():
                    advisor_ids = list(advisor_ids.values_list('user',flat=True))
                    reviewsData = reviewsData.filter(advisor__in=advisor_ids)
            if user.userType == 6:
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
        sanlam_product_Supplier = ['Sanlam', 'Santam', 'SHA', 'Glacier']
        sanlam_data = reviewsData.filter(Q(supplier__icontains="sanlam")|Q(supplier__icontains="santam")|Q(supplier__icontains="sha")|Q(supplier__icontains="glacier"))
        total_sanlam_reviews = sanlam_data.count()
        total_sanlam_regions = sanlam_data.values('region').distinct().count()
        total_sanlam_advisors = sanlam_data.values('advisor').distinct().count()
        total_sanlam_commission = sanlam_data.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
        total_sanlam_commission = round(total_sanlam_commission,2) if total_sanlam_commission else 0.0

        non_sanlam_data = reviewsData.filter(~Q(supplier__icontains="sanlam"),~Q(supplier__icontains="santam"),~Q(supplier__icontains="sha"),~Q(supplier__icontains="glacier"))
        total_non_sanlam_reviews = non_sanlam_data.count()
        total_non_sanlam_regions = non_sanlam_data.values('region').distinct().count()
        total_non_sanlam_advisors = non_sanlam_data.values('advisor').distinct().count()
        total_non_sanlam_commission = non_sanlam_data.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
        total_non_sanlam_commission = round(total_non_sanlam_commission,2) if total_non_sanlam_commission else 0.0
        
        cases_trend = []
        if filterType == 1:
            datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
            for date in datewise_data:
                sanlam_cases = 0
                non_sanlam_cases = 0
                sanlam = sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                if sanlam.exists():
                    sanlam_cases = sanlam.count()
                non_sanlam = non_sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                if non_sanlam.exists():
                    non_sanlam_cases = non_sanlam.count()
                cases_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(sanlam_cases), int(non_sanlam_cases)])
        if filterType == 2:
            datewise_data = reviewsData.values('updated_at__year','updated_at__month', 'updated_at__day').distinct().order_by('updated_at__year','updated_at__month', 'updated_at__day')
            for date in datewise_data:
                sanlam = sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'], updated_at__day=date['updated_at__day'])
                non_sanlam = non_sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'], updated_at__day=date['updated_at__day'])
                sanlam_cases = 0
                non_sanlam_cases = 0
                if sanlam.exists():
                    sanlam_cases = sanlam.count()
                if non_sanlam.exists():
                    non_sanlam_cases = non_sanlam.count()                
                cases_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}-{date['updated_at__day']}", '%Y-%m-%d') , '%d %b %Y'), int(sanlam_cases), int(non_sanlam_cases)])
        if filterType == 3:
            datewise_data = reviewsData.values('updated_at__date', 'updated_at__hour').distinct().order_by('updated_at__date', 'updated_at__hour')
            for date in datewise_data:
                sanlam = sanlam_data.filter(updated_at__date=date['updated_at__date'], updated_at__hour=date['updated_at__hour'])
                non_sanlam = non_sanlam_data.filter(updated_at__date=date['updated_at__date'], updated_at__hour=date['updated_at__hour'])
                sanlam_cases = 0
                non_sanlam_cases = 0
                if sanlam.exists():
                    sanlam_cases = sanlam.count()
                if non_sanlam.exists():
                    non_sanlam_cases = non_sanlam.count()  
                cases_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__date']} {date['updated_at__hour']}", '%Y-%m-%d %H'), "%I %p"), int(sanlam_cases), int(non_sanlam_cases)])
        if filterType == 4:
            if customFilterType == 1:
                if (datetime.strptime(todate, "%Y-%m-%d") - datetime.strptime(fromdate, "%Y-%m-%d")).days > 30:
                    datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                    for date in datewise_data:
                        sanlam = sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                        non_sanlam = non_sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                        sanlam_cases = 0
                        non_sanlam_cases = 0
                        if sanlam.exists():
                            sanlam_cases = sanlam.count()
                        if non_sanlam.exists():
                            non_sanlam_cases = non_sanlam.count()
                        cases_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(sanlam_cases), int(non_sanlam_cases)])
                else:
                    datewise_data = reviewsData.values('updated_at__date').distinct().order_by('updated_at__date')
                    for date in datewise_data:
                        sanlam = sanlam_data.filter(updated_at__date=date['updated_at__date'])
                        non_sanlam = non_sanlam_data.filter(updated_at__date=date['updated_at__date'])
                        sanlam_cases = 0
                        non_sanlam_cases = 0
                        if sanlam.exists():
                            sanlam_cases = sanlam.count()
                        if non_sanlam.exists():
                            non_sanlam_cases = non_sanlam.count()
                        cases_trend.append([date['updated_at__date'].strftime('%d %b %Y'), int(sanlam_cases), int(non_sanlam_cases)])
            if customFilterType == 2:
                datewise_data = reviewsData.values('updated_at__year','updated_at__week').distinct().order_by('updated_at__year','updated_at__week')
                for date in datewise_data:
                    sanlam = sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__week=date['updated_at__week'])
                    non_sanlam = non_sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__week=date['updated_at__week'])
                    sanlam_cases = 0
                    non_sanlam_cases = 0
                    if sanlam.exists():
                        sanlam_cases = sanlam.count()
                    if non_sanlam.exists():
                        non_sanlam_cases = non_sanlam.count()  
                    cases_trend.append([f"{date['updated_at__year']} Week {date['updated_at__week']}", int(sanlam_cases), int(non_sanlam_cases)])
            if customFilterType == 3:
                datewise_data = reviewsData.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                for date in datewise_data:
                    sanlam = sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                    non_sanlam = non_sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                    sanlam_cases = 0
                    non_sanlam_cases = 0
                    if sanlam.exists():
                        sanlam_cases = sanlam.count()
                    if non_sanlam.exists():
                        non_sanlam_cases = non_sanlam.count()  
                    cases_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(sanlam_cases), int(non_sanlam_cases)])
            if customFilterType == 4:
                datewise_data = reviewsData.values('updated_at__year','updated_at__quarter').distinct().order_by('updated_at__year','updated_at__quarter')
                for date in datewise_data:
                    sanlam = sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__quarter=date['updated_at__quarter'])
                    non_sanlam = non_sanlam_data.filter(updated_at__year=date['updated_at__year'], updated_at__quarter=date['updated_at__quarter'])
                    sanlam_cases = 0
                    non_sanlam_cases = 0
                    if sanlam.exists():
                        sanlam_cases = sanlam.count()
                    if non_sanlam.exists():
                        non_sanlam_cases = non_sanlam.count()  
                    cases_trend.append([f"{date['updated_at__year']} Quarter {date['updated_at__quarter']}", int(sanlam_cases), int(non_sanlam_cases)])
            if customFilterType == 5:
                datewise_data = reviewsData.values('updated_at__year').distinct().order_by('updated_at__year')
                for date in datewise_data:
                    sanlam = sanlam_data.filter(updated_at__year=date['updated_at__year'])
                    non_sanlam = non_sanlam_data.filter(updated_at__year=date['updated_at__year'])
                    sanlam_cases = 0
                    non_sanlam_cases = 0
                    if sanlam.exists():
                        sanlam_cases = sanlam.count()
                    if non_sanlam.exists():
                        non_sanlam_cases = non_sanlam.count()  
                    cases_trend.append([f"{date['updated_at__year']}", int(sanlam_cases), int(non_sanlam_cases)])
        return Response({
            "sanlam_kpis" : {
                "total_reviews" : total_sanlam_reviews,
                "total_commission" : total_sanlam_commission,
                "total_regions" : total_sanlam_regions,
                "total_advisors" : total_sanlam_advisors,
            },
            "non_sanlam_kpis" : {
                "total_reviews" : total_non_sanlam_reviews,
                "total_commission" : total_non_sanlam_commission,
                "total_regions" : total_non_sanlam_regions,
                "total_advisors" : total_non_sanlam_advisors,
            },
            "trend" : cases_trend
        }, 200)
        
class advisorInsights(APIView):

    def post(self, request):
        advisors = user_profile.objects.filter(user__userType=6)
        
        roa_forms_position_per_region = 0 
        investment_position_per_region = 0 
        first_approved_position_per_region = 0 

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
        advisor = request.data['advisor']
        businessType = (request.data['businessType'])
        if advisors.exists():
            if region != "all":
                advisors = advisors.filter(region__region=region)
            advisorIds = advisors.values_list('user__pk', flat=True) if advisor == "all" else advisors.filter(pk=advisor).values_list('id', flat=True)
            roa_data = Disclosures.objects.filter(advisorId__in=advisorIds)
            compliance_data = ComplianceDocument.objects.filter(advisor__in=advisorIds)
            if not user.is_superuser:
                if user.userType == 1:
                    compliance_data = compliance_data.filter(user=user.pk)
                if user.userType == 2:
                    compliance_data = compliance_data.filter(user=user.pk)
                if user.userType == 3:
                    regional_manager = region_manager.objects.filter(manager=user.pk)
                    if regional_manager.exists():
                        advisor_ids = user_profile.objects.filter(region=regional_manager.first().region.pk)
                        if advisor_ids.exists():
                            advisor_ids = list(advisor_ids.values_list('user',flat=True))
                            compliance_data = compliance_data.filter(advisor__in=advisor_ids)
                        compliance_data = compliance_data.filter(advisor__in=advisor_ids)
                if user.userType == 5:
                    advisor_ids = user_profile.objects.filter(bac=user.pk)
                    if advisor_ids.exists():
                        advisor_ids = list(advisor_ids.values_list('user',flat=True))
                        compliance_data = compliance_data.filter(advisor__in=advisor_ids)
                if user.userType == 6:
                    advisors = advisors.filter(user=user.pk)
                    compliance_data = compliance_data.filter(advisor=user.pk)
                    roa_data = roa_data.filter(advisorId=user.pk)
            if filterType == 1:
                compliance_data = compliance_data.filter(updated_at__year=year)
                roa_data = roa_data.filter(updated_at__year=year)
            if filterType == 2:
                compliance_data = compliance_data.filter(updated_at__year=monthyear, updated_at__month=month)
                roa_data = roa_data.filter(updated_at__year=monthyear, updated_at__month=month)
            if filterType == 3:
                compliance_data = compliance_data.filter(updated_at__date=date)
                roa_data = roa_data.filter(updated_at__date=date)
            if filterType == 4:
                date_range = (datetime.strptime(fromdate, '%Y-%m-%d') , datetime.strptime(todate, '%Y-%m-%d') + timedelta(days=1))
                compliance_data = compliance_data.filter(updated_at__range=date_range)
                roa_data = roa_data.filter(updated_at__range=date_range)
            if region != "all":
                compliance_data = compliance_data.filter(region=region)
                roa_data = roa_data
            if advisor != "all":
                compliance_data = compliance_data.filter(advisor=int(advisor))
            if businessType != "all":
                compliance_data = compliance_data.filter(businessType=int(businessType))  
            total_reviews = compliance_data.count()
            total_approved = compliance_data.filter(status=1).count()
            total_not_approved = compliance_data.filter(status=2).count()
            total__partial_approved = compliance_data.filter(status=4).count()
            total_ROA_forms = roa_data.count()
            advisorsData = {
                "total_ROA_forms" : total_ROA_forms,
                "total_reviews" : total_reviews,
                "total_approved" : total_approved,
                "total_not_approved" : total_not_approved,
                "total__partial_approved" : total__partial_approved,
            }

            roa_trend = []
            if filterType == 1:
                datewise_data = roa_data.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                for date in datewise_data:
                    roa_forms = roa_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                    if roa_forms.exists():
                        roa_forms = roa_forms.aggregate(total_forms=Count("id"))['total_forms']
                    else:
                        roa_forms = 0
                            # roa_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "roa_forms": float(gk['roa_forms'].replace(',', '.'))})
                    roa_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(roa_forms)])
            if filterType == 2:
                datewise_data = roa_data.values('updated_at__year','updated_at__month', 'updated_at__day').distinct().order_by('updated_at__year','updated_at__month', 'updated_at__day')
                for date in datewise_data:
                    roa_forms = roa_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'], updated_at__day=date['updated_at__day'])
                    if roa_forms.exists():
                        roa_forms = roa_forms.aggregate(total_forms=Count("id"))['total_forms']
                    else:
                        roa_forms = 0
                            # roa_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "roa_forms": float(gk['roa_forms'].replace(',', '.'))})
                    roa_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}-{date['updated_at__day']}", '%Y-%m-%d') , '%d %b %Y'), int(roa_forms)])
            if filterType == 3:
                datewise_data = roa_data.values('updated_at__date', 'updated_at__hour').distinct().order_by('updated_at__date', 'updated_at__hour')
                for date in datewise_data:
                    roa_forms = roa_data.filter(updated_at__date=date['updated_at__date'], updated_at__hour=date['updated_at__hour'])
                    if roa_forms.exists():
                        roa_forms = roa_forms.aggregate(total_forms=Count("id"))['total_forms']
                    else:
                        roa_forms = 0
                            # roa_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "roa_forms": float(gk['roa_forms'].replace(',', '.'))})
                    roa_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__date']} {date['updated_at__hour']}", '%Y-%m-%d %H'), "%I %p"), int(roa_forms)])
            if filterType == 4:
                if customFilterType == 1:
                    if (datetime.strptime(todate, "%Y-%m-%d") - datetime.strptime(fromdate, "%Y-%m-%d")).days > 30:
                        datewise_data = roa_data.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                        for date in datewise_data:
                            roa_forms = roa_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                            if roa_forms.exists():
                                roa_forms = roa_forms.aggregate(total_forms=Count("id"))['total_forms']
                            else:
                                roa_forms = 0
                                    # roa_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "roa_forms": float(gk['roa_forms'].replace(',', '.'))})
                            roa_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(roa_forms)])
                    else:
                        datewise_data = roa_data.values('updated_at__date').distinct().order_by('updated_at__date')
                        for date in datewise_data:
                            roa_forms = roa_data.filter(updated_at__date=date['updated_at__date'])
                            if roa_forms.exists():
                                roa_forms = roa_forms.values('updated_at__date').aggregate(total_forms=Count("id"))['total_forms']
                            else:
                                roa_forms = 0
                                    # roa_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "roa_forms": float(gk['roa_forms'].replace(',', '.'))})
                            roa_trend.append([date['updated_at__date'].strftime('%d %b %Y'), int(roa_forms)])
                if customFilterType == 2:
                    datewise_data = roa_data.values('updated_at__year','updated_at__week').distinct().order_by('updated_at__year','updated_at__week')
                    for date in datewise_data:
                        roa_forms = roa_data.filter(updated_at__year=date['updated_at__year'], updated_at__week=date['updated_at__week'])
                        if roa_forms.exists():
                            roa_forms = roa_forms.aggregate(total_forms=Count("id"))['total_forms']
                        else:
                            roa_forms = 0
                                # roa_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "roa_forms": float(gk['roa_forms'].replace(',', '.'))})
                        roa_trend.append([f"{date['updated_at__year']} Week {date['updated_at__week']}", int(roa_forms)])
                if customFilterType == 3:
                    datewise_data = roa_data.values('updated_at__year','updated_at__month').distinct().order_by('updated_at__year','updated_at__month')
                    for date in datewise_data:
                        roa_forms = roa_data.filter(updated_at__year=date['updated_at__year'], updated_at__month=date['updated_at__month'])
                        if roa_forms.exists():
                            roa_forms = roa_forms.aggregate(total_forms=Count("id"))['total_forms']
                        else:
                            roa_forms = 0
                                # roa_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "roa_forms": float(gk['roa_forms'].replace(',', '.'))})
                        roa_trend.append([datetime.strftime(datetime.strptime(f"{date['updated_at__year']}-{date['updated_at__month']}", '%Y-%m') , '%b %Y'), int(roa_forms)])
                if customFilterType == 4:
                    datewise_data = roa_data.values('updated_at__year','updated_at__quarter').distinct().order_by('updated_at__year','updated_at__quarter')
                    for date in datewise_data:
                        roa_forms = roa_data.filter(updated_at__year=date['updated_at__year'], updated_at__quarter=date['updated_at__quarter'])
                        if roa_forms.exists():
                            roa_forms = roa_forms.aggregate(total_forms=Count("id"))['total_forms']
                        else:
                            roa_forms = 0
                                # roa_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "roa_forms": float(gk['roa_forms'].replace(',', '.'))})
                        roa_trend.append([f"{date['updated_at__year']} Quarter {date['updated_at__quarter']}", int(roa_forms)])
                if customFilterType == 5:
                    datewise_data = roa_data.values('updated_at__year').distinct().order_by('updated_at__year')
                    for date in datewise_data:
                        roa_forms = roa_data.filter(updated_at__year=date['updated_at__year'])
                        if roa_forms.exists():
                            roa_forms = roa_forms.aggregate(total_forms=Count("id"))['total_forms']
                        else:
                            roa_forms = 0
                        roa_trend.append([f"{date['updated_at__year']}", int(roa_forms)])
            advisorsData['roa_trend'] = roa_trend
            region_data = []
            available_regions = regions.objects.all()

            if user.userType == 3:
                regional_manager = region_manager.objects.filter(manager=user.pk)
                if regional_manager.exists():
                    available_regions = available_regions.filter(id=regional_manager.first().region.pk)
            if user.userType == 5:
                region_ids = user_profile.objects.filter(bac=user.pk)
                if region_ids.exists():
                    region_ids = list(region_ids.values_list('region',flat=True))
                    available_regions = available_regions.filter(id__in=region_ids)
            if user.userType == 6:
                advisorRegion = user_profile.objects.get(user=user.pk).region
                available_regions = available_regions.filter(id=advisorRegion.pk)
                advisors = advisors.filter(user__pk=user.pk)
            advisor_investment_position_data = []
            if user.userType == 6:
                position_regions = regions.objects.all()
                if region != "all":
                    position_regions = position_regions.filter(region=region)
                roa_position_data = []
                investment_position_data = []
                for region in regions.objects.all():
                    advisors_list = user_profile.objects.filter(user__userType=6, region=region.pk)
                    for advisor in advisors_list:
                        total_forms = Disclosures.objects.filter(advisorId=advisor.user.pk).count()
                        if total_forms != 0:
                            roa_position_data.append({
                                "advisor" : advisor.user.pk,
                                "total_forms" : Disclosures.objects.filter(advisorId=advisor.user.pk).count()
                            })
                        investment_data = ComplianceDocument.objects.filter(advisor=advisor.user.pk)
                        lump_sum = investment_data.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                        recurring = investment_data.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
                        lump_sum = lump_sum if lump_sum is not None else 0
                        recurring = recurring if recurring is not None else 0
                        total_investment = lump_sum + recurring
                        if total_investment != 0:
                            investment_position_data.append({
                                "advisor" : advisor.user.pk,
                                "advisor_name" : advisor.Full_Name,
                                "total_investment" : lump_sum + recurring,
                                "status" : False
                            })
                roa_position_data = sorted(roa_position_data, key=lambda d: d['total_forms'], reverse=True)
                investment_position_data = sorted(investment_position_data, key=lambda d: d['total_investment'], reverse=True)  
                for i in range(len(investment_position_data)):
                    investment_position_data[i]['index'] = i+1   
                advisor_investment_position_data = investment_position_data[:5]            
                for i in range(len(roa_position_data)):
                    if roa_position_data[i]['advisor'] == user.pk:
                        roa_forms_position_per_region = i+1
                        break
                
                for i in range(len(investment_position_data)):
                    if investment_position_data[i]['advisor'] == user.pk:
                        investment_position_per_region = i+1
                        hmm_data = investment_position_data[i]
                        hmm_data['status'] = True
                        advisor_investment_position_data.append(hmm_data)
                        break
                    

                    

            for region in available_regions:
                if user.userType == 6:
                    advisors_ids = list(user_profile.objects.filter(user__userType=6, user=user.pk, region=region.pk).values_list('user__pk', flat=True))
                else:
                    advisors_ids = list(user_profile.objects.filter(user__userType=6, region=region.pk).values_list('user__pk', flat=True))
                forms = roa_data.filter(advisorId__in=advisors_ids)
                total_forms = forms.count()
                total_forms = total_forms if total_forms else 0
                total_completed_forms = forms.filter(status=1).count()
                total_completed_forms = total_completed_forms if total_completed_forms else 0
                region_data.append({
                    'region' : region.region,
                    'total_forms': total_forms,
                    'total_completed': total_completed_forms
                })

            region_data = sorted(region_data, key=lambda d: d['total_forms'], reverse=True)

            advisorsData['region_wise_data'] = region_data
            advisorsData['roa_forms_position_per_region'] = roa_forms_position_per_region
            advisorsData['investment_position_per_region'] = investment_position_per_region
            advisorsData['investment_position_data'] = advisor_investment_position_data
            advisorsData['first_approved_position_per_region'] = first_approved_position_per_region
            advisor_wise_data = []
            for advisor in advisors:
                forms = roa_data.filter(advisorId=advisor.user.pk)
                total_forms = forms.count()
                total_forms = total_forms if total_forms else 0
                total_completed_forms = forms.filter(status=1).count()
                total_completed_forms = total_completed_forms if total_completed_forms else 0
                if total_forms != 0:
                    advisor_wise_data.append({
                        "advisor" : f"{advisor.Full_Name} ({advisor.user.email})",
                        'total_forms': total_forms,
                        'total_completed': total_completed_forms
                    })
            advisor_wise_data = sorted(advisor_wise_data, key=lambda d: d['total_forms'], reverse=True)
            advisorsData['advisor_wise_data'] = advisor_wise_data
                
            return Response(advisorsData, 200)
        else:
            raise Http404
        

     
class loadAdvisors(APIView):

    def post(self, request):
        user = request.user
        if user.is_superuser or user.userType != 6:
            advisors = user_profile.objects.filter(user__userType = 6).order_by('Full_Name')
            if "region" in request.data:
                advisors = advisors.filter(region__region=request.data['region']) if request.data['region'] != "all" else advisors
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