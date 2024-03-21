from django.db import models
from data.models import UserAccount, Disclosures, Form, AssuranceRisk, AssuranceInvestment, InvestmentPlanning, RiskPlanning, EmployeeBenefits, Fiduciary, ShortTermInsuranceCommerical, ShortTermInsurancePersonal, Medical, GapCover
# Create your models here.

class backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Disclosures")

    created_at = models.DateField(auto_now_add=True)

class roa_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    roa  = models.ForeignKey(Form, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="ROA")
    
    created_at = models.DateField(auto_now_add=True)

class rp_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    rp  = models.ForeignKey(RiskPlanning, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Risk Planning")
    
    created_at = models.DateField(auto_now_add=True)

class ip_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    ip  = models.ForeignKey(InvestmentPlanning, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Investment Planning")
    
    created_at = models.DateField(auto_now_add=True)

class ar_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    ar  = models.ForeignKey(AssuranceRisk, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Assurance Risk")
    
    created_at = models.DateField(auto_now_add=True)

class ai_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    ai  = models.ForeignKey(AssuranceInvestment, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Assurance Investment")
    
    created_at = models.DateField(auto_now_add=True)

class emp_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    emp  = models.ForeignKey(EmployeeBenefits, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Employee Benefits")
    
    created_at = models.DateField(auto_now_add=True)

class fiduciary_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    fiduciary  = models.ForeignKey(Fiduciary, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Fiduciary")

    created_at = models.DateField(auto_now_add=True)

class stp_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    stp  = models.ForeignKey(ShortTermInsurancePersonal, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Short Term Personal")
    created_at = models.DateField(auto_now_add=True)

class stc_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    stc  = models.ForeignKey(ShortTermInsuranceCommerical, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Short Term Commercial")

    created_at = models.DateField(auto_now_add=True)

class medical_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    medical  = models.ForeignKey(Medical, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Medical")

    created_at = models.DateField(auto_now_add=True)

class gap_cover_backup(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True)
    form = models.ForeignKey(Disclosures, on_delete=models.SET_NULL, null=True)
    gap_cover  = models.ForeignKey(GapCover, on_delete=models.SET_NULL, null=True)
    data = models.JSONField(null=True, blank=True, default=dict)
    backup_type = models.CharField(max_length=100, default="Gap Cover")

    created_at = models.DateField(auto_now_add=True)
