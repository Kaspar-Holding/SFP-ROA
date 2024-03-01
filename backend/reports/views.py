from datetime import datetime, timedelta
from django.shortcuts import render
from rest_framework.decorators import APIView
from rest_framework.response import Response
from django.db.models import Sum, Count, FloatField
from django.db.models.functions import Cast
from django.http import Http404
# Create your views here.
from compliance.models import ComplianceDocument, GateKeeping, arc
from data.models import regions, UserAccount, Disclosures, user_profile, region_manager
from tasks.tasks import commission_report

class commissionReport(APIView):

    def post(self, request):
        user = request.user
        commission_report.delay(user.pk, request.data)
        return Response({"message" : "Request Added to Queue."}, 200)
