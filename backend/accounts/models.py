import email
from random import random
from statistics import mode
from django.db import models

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None,is_superuser=False):
        if not email:
            raise ValueError("Please enter email")

        email = self.normalize_email(email)
        user = self.model(email=email, name=name, username = email)
        user.set_password(password)
        user.save()

        user.is_staff = is_superuser
        user.is_superuser = is_superuser

        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, password=None):
        
        user = self.create_user(
            email,
            name,
            password=password
        )
        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255, unique=True,blank=True,null=True,)
    name = models.CharField(max_length=255)
    # firstname = models.CharField(max_length=255)
    # lastname = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    is_active = models.IntegerField(default=1)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    role = models.IntegerField(default=1)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','password','is_superuser'] 

    def get_full_name(self):
        return self.name

# Create your models here.
class Form(models.Model):   
    advisor_id = models.IntegerField()
    form_type = models.IntegerField(default=1)
    client_name = models.CharField(max_length=256)
    client_id = models.CharField(max_length=256)
    client_address = models.CharField(max_length=256)
    client_email = models.CharField(max_length=256)
    # client_financial_advisor = advisor_id
    client_date_of_birth = models.DateField()
    client_letter_of_introduction = models.BooleanField(default=False)
    client_letter_of_introduction_reason = models.CharField(max_length=256, blank=True)
    client_fica = models.BooleanField(default=False)
    client_fica_reason = models.CharField(max_length=256, blank=True)
    client_background_info = models.CharField(max_length=1000)
    

    status = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
