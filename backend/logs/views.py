from django.shortcuts import render
from rest_framework.decorators import APIView
from rest_framework.response import Response
from .models import Log, LogContent, LogKPIs
from .serializers import LogSerializer, LogContentSerializer
from data.models import UserAccount, user_profile
from django.db.models import Q
from django.core.paginator import Paginator
# Create your views here.

class LogListView(APIView):
    def post(self, request):
        logs = Log.objects.filter(account=request.user.pk)
        order_by = request.data['order_by'] if 'order_by' in request.data else '-created_at'
        page_number = request.data['page_number'] if 'page_number' in request.data else 1
        page_size = request.data['page_size'] if 'page_size' in request.data else 10
        if logs.exists():
            logs = logs.order_by(order_by)
            total = logs.count()
            paginator = Paginator(logs, page_size)
            logs = paginator.page(page_number)
            logData = LogSerializer(logs, many=True).data
            if page_number <= paginator.num_pages:
                return Response(
                    {
                        "total_pages" : paginator.num_pages,
                        "has_pages" : paginator.num_pages,
                        "total_records" : total,
                        "next" : paginator.page(page_number).has_next(),
                        "results" : logData
                    }
                )
            else:
                return Response(
                    {
                        "total_pages" : paginator.num_pages,
                        "has_pages" : paginator.num_pages,
                        "total_records" : total,
                        "next" : paginator.page(page_number).has_next(),
                        "results" : logData
                    }
                )
                    
        return Response(
                    {
                        "total_pages" : 0,
                        "has_pages" : 0,
                        "total_records" : 0,
                        "next" : None,
                        "results" : []
                    }
                )

class LogView(APIView):
    def post(self, request):
        data = request.data
        logData = {}
        log = Log.objects.filter(account=request.user.pk, id=data['log_id'])
        if log.exists():
            updated_by = log.first().account.pk
            log = log.values().first()
            updating_user = user_profile.objects.filter(user=updated_by).select_related('user')
            log['updated_by'] = ""
            if updating_user.exists():
                updating_user = updating_user.first()
                log['updated_by'] = updating_user.Full_Name
            else:
                user = UserAccount.objects.filter(id=updated_by)
                if user.exists():
                    user = user.first()
                    log['updated_by'] = user.first_name + " " + user.last_name
            logs = LogContent.objects.filter( ~Q(log_description=''), account=request.user.pk, log=log['id'])
            logData = []
            time_taken = 0
            time_taken = round((log['closed_at'] - log['created_at']).total_seconds() / 60, 2) if log['status'] == 1 else 0
            if logs.exists():
                logs = logs.order_by('-created_at')
                logData = LogContentSerializer(logs, many=True).data
        kpis = LogKPIs.objects.filter(account=request.user.pk, log=data['log_id'])
        kpisData = {}
        if kpis.exists():
            kpis = kpis.values().first()
            kpisData = kpis['kpis']
        kpisData['time_taken'] = time_taken
        return Response({'message': "Found","code": "200", "logInfo" : log, "logData" : logData, "kpisData": kpisData , },200)