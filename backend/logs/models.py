from django.db import models
from data.models import UserAccount
# Create your models here.

class Log(models.Model):
    account = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    log_name = models.CharField(max_length=255, blank=True, default="")
    log_type = models.IntegerField(default=1)
    status = models.IntegerField(default=0)
    closed_at = models.DateTimeField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class LogKPIs(models.Model):
    account = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    log = models.ForeignKey(Log, on_delete=models.CASCADE)
    kpis = models.JSONField(default=dict)

    created_at = models.DateTimeField(auto_now_add=True)


class LogContent(models.Model):
    account = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    log = models.ForeignKey(Log, on_delete=models.CASCADE)
    log_type = models.IntegerField(default=1)
    downloading_link = models.TextField(blank=True, default="")
    log_description = models.TextField(blank=True, default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
