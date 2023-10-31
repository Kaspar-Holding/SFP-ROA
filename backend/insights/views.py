from django.shortcuts import render
from rest_framework.decorators import APIView
from rest_framework.response import Response
from django.db.models import Sum, Count, FloatField
from django.db.models.functions import Cast
# Create your views here.
from compliance.models import ComplianceDocument, GateKeeping, arc
from data.models import regions, UserAccount
from django.db.models.functions import (
    ExtractDay, ExtractMonth, ExtractQuarter, ExtractWeek,
    ExtractWeekDay, ExtractIsoYear, ExtractYear,
)
import re


class commissionInsights(APIView):

    def post(self, request):
        total_reviews = ComplianceDocument.objects.all().count()
        total_documents = ComplianceDocument.objects.all().values()
        total_regions = ComplianceDocument.objects.all().values('region').distinct().count()
        total_advisors = ComplianceDocument.objects.all().values('advisor').distinct().count()
        total_commission = 0
        for review_document in total_documents:
            gk = GateKeeping.objects.filter(document=review_document['id'])
            if gk.exists():
                gk = gk.values().latest('version')
                total_commission += float(gk['commission'].replace(',', '.'))
        # Date wise Trend
        datewise_data = ComplianceDocument.objects.all().values('updated_at__date').distinct().order_by('updated_at__date')
        commission_trend = []
        for date in datewise_data:
            # reviewIds = ComplianceDocument.objects.filter(updated_at__date=date['updated_at__date']).values_list('id', flat=True)
            # commission = 0
            # for reviewId in reviewIds:
            #     gk = GateKeeping.objects.filter(document=reviewId)
            #     if gk.exists():
            #         gk = gk.values().latest('version')
            commission = ComplianceDocument.objects.filter(updated_at__date=date['updated_at__date'])
            if commission.exists():
                commission = commission.values('updated_at__date').annotate(total_commission=Sum(Cast('commission', output_field=FloatField())))[0]['total_commission']
            else:
                commission = 0
                    # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
            commission_trend.append([date['updated_at__date'].strftime('%d %b %Y'), commission])
            # Regions
        available_regions = regions.objects.all().values('region')
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
            commission = ComplianceDocument.objects.filter(region=region['region'])
            if commission.exists():
                commission = commission.values('region').annotate(total_commission=Sum(Cast('commission', output_field=FloatField())))[0]['total_commission']
            else:
                commission = 0
                    # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
            if commission != 0:
                region_commission_trend.append([region['region'], commission])
                top_regions.append({"region": region['region'], "commission": commission})
                regionsData.append(region['region'])
        top_regions = sorted(top_regions, key=lambda d: d['commission'], reverse=True)[:5]
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
            commission = ComplianceDocument.objects.filter(advisor=advisor['id'])
            if commission.exists():
                commission = commission.values('advisor').annotate(total_commission=Sum(Cast('commission', output_field=FloatField())))[0]['total_commission']
            else:
                commission = 0

                    # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
            if commission != 0:
                top_advisors.append({"advisor": f"{advisor['first_name']} {advisor['last_name']}", "email": advisor['email'], "commission": commission})
        top_advisors = sorted(top_advisors, key=lambda d: d['commission'], reverse=True)[:10]
        # Business Type wise Trend
        businessType_commission_trend = []
        for i in range(1,16):
            commission = ComplianceDocument.objects.filter(businessType=i)
            if commission.exists():
                commission = commission.values('businessType').annotate(total_commission=Sum(Cast('commission', output_field=FloatField())))[0]['total_commission']
            else:
                commission = 0

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
            if commission != 0:
                businessType_commission_trend.append([businessType, commission, int(commission/total_commission*100)])

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