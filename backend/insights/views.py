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
        total_commission = ComplianceDocument.objects.all().aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
        # for review_document in total_documents:
        #     gk = GateKeeping.objects.filter(document=review_document['id'])
        #     if gk.exists():
        #         gk = gk.values().latest('version')
        #         total_commission += float(gk['commission'].replace(',', '.'))
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
                commission = commission.values('updated_at__date').aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
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
                commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
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
                commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
            else:
                commission = 0

                    # commission_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "commission": float(gk['commission'].replace(',', '.'))})
            if commission != 0:
                top_advisors.append({"advisor": f"{advisor['first_name']} {advisor['last_name']}", "email": advisor['email'], "commission": commission})
        top_advisors = sorted(top_advisors, key=lambda d: d['commission'], reverse=True)[:10]
        # Business Type wise Trend
        businessType_commission_trend = []
        business_total_commission = 0
        for i in range(1,16):
            commission = ComplianceDocument.objects.filter(businessType=i)
            if commission.exists():
                commission = commission.aggregate(total_commission=Sum(Cast('commission', output_field=FloatField())))['total_commission']
            else:
                commission = 0
            business_total_commission += commission

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
                # businessType_commission_trend.append([businessType, commission, round(commission/total_commission*100,2)])
                businessType_commission_trend.append([businessType, commission])
        for row in businessType_commission_trend:
            commission_percentage = round(row[1]/business_total_commission * 100,2)
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
        total_reviews = ComplianceDocument.objects.all().count()
        total_documents = ComplianceDocument.objects.all().values()
        total_regions = ComplianceDocument.objects.all().values('region').distinct().count()
        total_advisors = ComplianceDocument.objects.all().values('advisor').distinct().count()
        total_investment_lump_sum = ComplianceDocument.objects.all().aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
        total_investment_recurring = ComplianceDocument.objects.all().aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
        
        datewise_data = ComplianceDocument.objects.all().values('updated_at__date').distinct().order_by('updated_at__date')
        lump_sum_trend = []
        for date in datewise_data:
            investmentData = ComplianceDocument.objects.filter(updated_at__date=date['updated_at__date'])
            if investmentData.exists():
                lump_sum = investmentData.values('updated_at__date').aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                recurring = investmentData.values('updated_at__date').aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
            else:
                lump_sum = 0
                recurring = 0
                    # lump_sum_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "lump_sum": float(gk['lump_sum'].replace(',', '.'))})
            lump_sum_trend.append([date['updated_at__date'].strftime('%d %b %Y'), lump_sum, recurring])
            # Regions
        available_regions = regions.objects.all().values('region')
        # Region wise Trend
        region_investment_trend = []
        regionsData = []
        top_regions = []
        for region in available_regions:
            # reviewIds = ComplianceDocument.objects.filter(region=region['region']).values_list('id', flat=True)
            # lump_sum = 0
            # for reviewId in reviewIds:
            #     gk = GateKeeping.objects.filter(document=reviewId)
            #     if gk.exists():
            #         gk = gk.values().latest('version')
            #         lump_sum += float(gk['lump_sum'].replace(',', '.'))
            investmentData = ComplianceDocument.objects.filter(region=region['region'])
            if investmentData.exists():
                lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
            else:
                lump_sum = 0
                recurring = 0
                    # lump_sum_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "lump_sum": float(gk['lump_sum'].replace(',', '.'))})
            if lump_sum != 0:
                region_investment_trend.append([region['region'], lump_sum, recurring])
                top_regions.append({"region": region['region'], "lump_sum": lump_sum, "recurring":recurring})
                regionsData.append(region['region'])
        top_regions_lump_sum = sorted(top_regions, key=lambda d: d['lump_sum'], reverse=True)[:5]
        top_regions_recurring = sorted(top_regions, key=lambda d: d['recurring'], reverse=True)[:5]
        # Advisor wise Trend
        advisor_lump_sum_trend = []
        available_advisors = UserAccount.objects.filter(userType=6).values()
        advisorsData = []
        top_advisors = []
        for advisor in available_advisors:
            # reviewIds = ComplianceDocument.objects.filter(advisor=advisor['id']).values_list('id', flat=True)
            # lump_sum = 0
            # for reviewId in reviewIds:
            #     gk = GateKeeping.objects.filter(document=reviewId)
            #     if gk.exists():
            #         gk = gk.values().latest('version')
            #         lump_sum += float(gk['lump_sum'].replace(',', '.'))
            investmentData = ComplianceDocument.objects.filter(advisor=advisor['id'])
            if investmentData.exists():
                lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
            else:
                lump_sum = 0
                recurring = 0

                    # lump_sum_trend.append({"date" : review_document['updated_at__date'].strftime('%d %b %Y'), "lump_sum": float(gk['lump_sum'].replace(',', '.'))})
            if lump_sum != 0:
                top_advisors.append({"advisor": f"{advisor['first_name']} {advisor['last_name']}", "email": advisor['email'], "lump_sum": lump_sum, "recurring": recurring})
        top_advisors_lump_sum = sorted(top_advisors, key=lambda d: d['lump_sum'], reverse=True)[:10]
        top_advisors_recurring = sorted(top_advisors, key=lambda d: d['recurring'], reverse=True)[:10]
        # Business Type wise Trend
        businessType_investment_trend = []
        business_total_investment_lump_sum = 0
        business_total_investment_recurring = 0
        for i in range(1,16):
            investmentData = ComplianceDocument.objects.filter(businessType=i)
            if investmentData.exists():
                lump_sum = investmentData.aggregate(total_investment_lump_sum=Sum(Cast('lump_sum', output_field=FloatField())))['total_investment_lump_sum']
                recurring = investmentData.aggregate(total_investment_recurring=Sum(Cast('monthly_premium', output_field=FloatField())))['total_investment_recurring']
            else:
                lump_sum = 0
                recurring = 0
            business_total_investment_lump_sum += lump_sum
            business_total_investment_recurring += recurring

            # reviewIds = ComplianceDocument.objects.filter(businessType=i).values_list('id', flat=True)
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
            if lump_sum != 0:
                # businessType_investment_trend.append([businessType, lump_sum, round(lump_sum/total_investment_lump_sum*100,2)])
                businessType_investment_trend.append([businessType, lump_sum, recurring])
        # for row in businessType_investment_trend:
        #     lump_sum_percentage = round(row[1]/business_total_investment_lump_sum * 100,2)
        #     row.append(lump_sum_percentage)
        #     recurring_percentage = round(row[2]/business_total_investment_recurring * 100,2)
        #     row.append(recurring_percentage)
        lump_sumdata = {
            "total_reviews" : total_reviews,
            "total_documents" : total_documents,
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
        reviews = ComplianceDocument.objects.all()
        total = reviews.count()
        first_approval = 0
        first_partial_approval = 0
        first_not_approved = 0
        reviews = reviews.values()
        # for review in reviews():
        #     if review['referred'] == False:
        #         if gk.exists():
        #             gk = GateKeeping.objects.filter(document=review['id'])
        #             versions = gk.count()
        #             if versions == 1:
        #                 if review['status'] == 1:
        #                     first_approval += 1
        #                 if review['status'] == 2:
        #                     first_not_approved += 1
        #                 if review['status'] == 4:
        #                     first_not_approved += 1
        #     else:



        monitoringData = {}
        return Response(monitoringData, 200)