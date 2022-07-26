from django.contrib import admin
from .models import UserAccount
# Register your models here.

@admin.register(UserAccount)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id','name','email']