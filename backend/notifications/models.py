from django.db import models
from data.models import UserAccount
from django.utils import timezone
from datetime import timedelta
from logs.models import Log
# Create your models here.

class Notifications(models.Model):
    account = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    notificationType = models.IntegerField(default=0)
    downloading_link = models.TextField(blank=True, default="")
    log = models.ForeignKey(Log, on_delete=models.SET_NULL, null=True)
    user = models.IntegerField(default=0)
    title = models.CharField(max_length=255, blank=True, default="")
    message = models.TextField()
    status = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class CalendarEvents(models.Model):
    title = models.CharField(max_length=150)
    type = models.IntegerField(default=0)
    start_time = models.DateField(null=True, blank=True)
    end_time = models.DateField(null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)