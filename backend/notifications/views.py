from icalendar import Calendar
import base64
from django.core.files.base import ContentFile
import uuid
import pandas as pd
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from data.models import UserAccount
from django.core.paginator import Paginator
from notifications.serializers import NotificationsSerializer, CalendarEventsSerializer
from .models import Notifications, CalendarEvents
from logs.models import Log, LogKPIs
from logs.serializers import LogSerializer, LogContentSerializer, LogKPIsSerializer
from datetime import datetime, timedelta, timezone
from rest_framework import status
from data.models import UserAccount
from django.db.models import Q
# Create your views here.

class NotificationAPI(APIView):

    def post(self, request, format=None):
        if not request.user.is_superuser:
            return Response(401)
        data = request.data
        users = UserAccount.objects.all()
        notificationType = data['notificationType'] or 1
        userType = data['userType'] or 'all'
        if userType != 'all':
            users = users.filter(userType=userType)
        for user in users:
            notificationData = data
            notificationData['account'] = user.pk
            notificationData['notificationType'] = notificationType
            serializer = NotificationsSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"message": "Notifications Generated"}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def getAllNotifications(request):
    user = request.user
    page_size = request.data['page_size']
    page_number = request.data['page_number']
    notificationsData = Notifications.objects.filter(account=user.pk).select_related('account','log').order_by('-created_at')
    total_records = notificationsData.count()
    p = Paginator(notificationsData, page_size)
    notificationsData = p.page(page_number).object_list
    data = []
    if notificationsData.exists():
        for notification in notificationsData:
            if notification.account.is_superuser:
                userInfo = notification.account.first_name + " " + notification.account.last_name
            else:
                userInfo = "You"
            currentTime = datetime.now(timezone.utc)
            time = ""
            if (currentTime - notification.created_at).days == 0:
                if str(timedelta(seconds=(datetime.now(timezone.utc)- notification.created_at).seconds)) == '00':
                    time = 'less than a minute ago'
                if str(timedelta(seconds=(currentTime - notification.created_at).seconds)).split(':')[0] == '0':
                    time = str(timedelta(seconds=(currentTime - notification.created_at).seconds)).split(':')[1] + ' minutes ago'
                if str(timedelta(seconds=(currentTime - notification.created_at).seconds)).split(':')[0] != '0':
                    time = str(timedelta(seconds=(currentTime - notification.created_at).seconds)).split(':')[0] + ' hours ago'
            else:
                time =  f"{(currentTime - notification.created_at).days} days ago."
            link = None
            if notification.downloading_link != "" and datetime.now(timezone.utc) < notification.downloading_expiry:
                link = notification.downloading_link
            data.append({
                'title' : notification.title,
                'message' : notification.message,
                'type' : notification.notificationType,
                'log_name' : notification.log.log_name if notification.log is not None else None,
                'log' : notification.log.pk if notification.log is not None else None,
                'time' : time,
                'downloading_link' : link,
                'status' : notification.status
            })
            break
        responseData = {
            "total_pages" : p.num_pages,
            "has_pages" : p.num_pages,
            "total_records" : total_records,
            "results" : [data[0]]
        }
        return Response(responseData, 200)
    else:
        return Response( {
            "total_pages" : 0,
            "has_pages" : 0,
            "total_records" : 0,
            "results" : []
        }, 200)

@api_view(['POST'])
def getAnnoucementNotifications(request):
    user = request.user
    page_size = request.data['page_size']
    page_number = request.data['page_number']
    notificationsData = Notifications.objects.filter(notificationType=2,account=user.pk, status=False).select_related('account','log').order_by('-created_at')
    total_records = notificationsData.count()
    p = Paginator(notificationsData, page_size)
    notificationsData = p.page(page_number).object_list
    data = []
    if notificationsData.exists():
        for notification in notificationsData:
            if notification.account.is_superuser:
                userInfo = notification.account.first_name + " " + notification.account.last_name
            else:
                userInfo = "You"
            currentTime = datetime.now(timezone.utc)
            time = ""
            if (currentTime - notification.created_at).days == 0:
                if str(timedelta(seconds=(datetime.now(timezone.utc)- notification.created_at).seconds)) == '00':
                    time = 'less than a minute ago'
                if str(timedelta(seconds=(currentTime - notification.created_at).seconds)).split(':')[0] == '0':
                    time = str(timedelta(seconds=(currentTime - notification.created_at).seconds)).split(':')[1] + ' minutes ago'
                if str(timedelta(seconds=(currentTime - notification.created_at).seconds)).split(':')[0] != '0':
                    time = str(timedelta(seconds=(currentTime - notification.created_at).seconds)).split(':')[0] + ' hours ago'
            else:
                time =  f"{(currentTime - notification.created_at).days} days ago."
            link = None
            if notification.downloading_link != "" and datetime.now(timezone.utc) < notification.downloading_expiry:
                link = notification.downloading_link
            data.append({
                'id' : notification.pk,
                'title' : notification.title,
                'message' : notification.message,
                'type' : notification.notificationType,
                'log_name' : notification.log.log_name if notification.log is not None else None,
                'log' : notification.log.pk if notification.log is not None else None,
                'time' : time,
                'downloading_link' : link,
                'status' : notification.status
            })
        responseData = {
            "total_pages" : p.num_pages,
            "has_pages" : p.num_pages,
            "total_records" : total_records,
            "results" : data
        }
        return Response(responseData, 200)
    else:
        return Response( {
            "total_pages" : 0,
            "has_pages" : 0,
            "total_records" : 0,
            "results" : []
        }, 200)

@api_view(['POST'])
def readNotification(request):
    user = request.user
    notificationData = Notifications.objects.filter(id=request.data['id'],account=user.pk)
    if notificationData.exists():
        notification = {
            'id' : request.data['id'],
            'account' : user.pk,
            'status' : True
        }
        old = Notifications.objects.get(id=request.data['id'],account=user.pk)
        serializer = NotificationsSerializer(instance=old, data=notification, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message' : "Notification is read"
            }, 200)
        else:
            print(serializer.errors)
    else:
        return Response({
            'message' : 'Not Found'
        }, 404)

@api_view(['GET'])
def readAllNotifications(request):
    user = request.user
    notificationData = Notifications.objects.filter(account=user.pk)
    if notificationData.exists():
        notificationData.update(status=True)
        return Response({
            'message' : "Notifications are read"
        }, 200)
    else:
        return Response({
            'message' : 'Not Found'
        }, 404)

class readSpecificNotifications(APIView):
    def get(self, request, pk):
        notification = Notifications.objects.filter(id=pk, account=request.user.pk)
        if notification.exists():
            notification.update(status=True)
            return Response({
                'message' : "Notifications is read"
            }, 200)
        
        return Response({
            'message' : 'Not Found'
        }, 404)

@api_view(['GET'])
def getUnreadNotifications(request):
    user = request.user
    notificationsData = Notifications.objects.filter(~Q(notificationType=2),account=user.pk)
    return Response({
        'total' : notificationsData.filter(status=False).count()
    }, 200)



class BulkEventUpload(APIView):
    def post(self, request, format=None):
        requestedData = request.data
        if 'eventFile' not in requestedData:
            return Response(400)
        else:
            logData = {
                "account" : request.user.pk,
                "log_name" : f"Bulk Event Upload {uuid.uuid4()}",
                "log_type" : 2,
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
                    "created": 0,
                }
            }
            log_kpis_serializer = LogKPIsSerializer(data=logKPIs)
            if log_kpis_serializer.is_valid():
                logKPIsid = log_kpis_serializer.create(log_kpis_serializer.validated_data)
                logKPIsid = logKPIsid.pk
            else:
                print(log_kpis_serializer.errors)
            csv_data = request.data['eventFile']
            format, csvstr = csv_data.split(';base64,')
            ext = format.split('/')[-1]
            file_name = "'eventFile." + ext
            ics_data = base64.b64decode(csvstr).decode('utf-8')
            calendar = Calendar.from_ical(ics_data)
            # with open(csvData, 'rb') as f:
            created = 0
            
            for component in calendar.walk():
                if component.name == "VEVENT":
                    calendar_data = {
                        "title" : str(component.get('summary', '')),
                        "start_time" : component.decoded('dtstart'),
                        "end_time" : component.decoded('dtend'),
                        "description" : str(component.get('description', '')),
                        "location" : str(component.get('location', '')),
                    }
                    calendarSerializer = CalendarEventsSerializer(data=calendar_data)
                    if calendarSerializer.is_valid():
                        calendarSerializer.create(calendarSerializer.validated_data)
                        created += 1
                        logContent = {
                            "account" : request.user.pk,
                            "log" : log_id,
                            "log_type" : 7,
                            "log_description" : f"New Event Created {calendar_data['title']}.",
                        } 
                        log_content_serializer = LogContentSerializer(data=logContent)
                        if log_content_serializer.is_valid():
                            log_content_serializer.create(log_content_serializer.validated_data)
                        else:
                            print(log_content_serializer.errors)
                    else:
                        print(calendarSerializer.errors)
                        
            logKPIs = {
                "account" : request.user.pk,
                "log" : log_id,
                "kpis" : {
                    "created": created,
                }
            }
            kpisID = LogKPIs.objects.get(account=request.user.pk, log=log_id)
            log_kpis_serializer = LogKPIsSerializer(instance=kpisID, data=logKPIs)
            if log_kpis_serializer.is_valid():
                log_kpis_serializer.save()
            else:
                print(log_kpis_serializer.errors)

            logData = {
                "status" : 1,
                "closed_at" : datetime.now(),
            }
            log = Log.objects.get(id=log_id)
            log_serializer = LogSerializer(log, data=logData, partial=True)
            if log_serializer.is_valid():
                log_serializer.save()
                print("Log updated")
            else:
                print(log_serializer.errors)
    
        if request.user.is_superuser == False:
            return Response(401)
        return Response({"message": "New Events added"}, 201)
    

class Events(APIView):

    def get(self, request):
        events = CalendarEvents.objects.all()
        if not request.user.is_superuser:
            if "sfp" or "succession" in request.user.email:
                events = events.filter(title__icontains="sfp")
            else:
                events = events.filter(title__icontains="afp")
        event_data = []
        for event in events:
            background_color = ""
            if "SFP" in event.title:
                background_color = "#007A8D"
            if "AFP" in event.title:
                background_color = "#6AC7D2"
            if "birthday" in event.title:
                background_color = "green"
            event_data.append({
                "title" : event.title,
                "start" : event.start_time,
                "end" : event.end_time,
                "backgroundColor" : background_color,
            })
        return Response(event_data, 200)