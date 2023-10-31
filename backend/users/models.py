from django.db import models
from data.models import UserAccount
# Create your models here.
class flag_colors(models.Model):

    color = models.TextField( default="", null=True, blank=True) 

    created_at = models.DateTimeField(auto_now_add=True) 
    update_at = models.DateTimeField(auto_now_add=True) 

class flagged_users(models.Model):
    color = models.ForeignKey(flag_colors, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)

    created_at = models.DateTimeField(auto_now_add=True) 
    update_at = models.DateTimeField(auto_now_add=True) 

