from django.db import models
from data.models import UserAccount
# Create your models here.
import datetime

# Create your models here.
class ComplianceDocument(models.Model):   
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    previous_user = models.IntegerField(default=0)
    advisor = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name="advisor")
    policy_number = models.CharField(max_length=256, unique=True)
    clientName = models.TextField( default="")
    IdNumber = models.TextField( default="")
    BAC = models.TextField( default="")
    supplier = models.TextField( default="", blank=True)
    product = models.TextField( default="", blank=True)
    businessType = models.IntegerField( default=0)
    otherBusinessType = models.TextField( default="", blank=True)
    # businessUnit = models.IntegerField(default = 1)
    categorisation = models.TextField( default="", blank=True)
    advisorEmail = models.TextField( default="", blank=True)
    supervisor = models.TextField( default="", blank=True)
    region = models.TextField( default="", blank=True)
    starting_point = models.IntegerField( default=2)
    
    lump_sum = models.TextField( default="", blank=True)
    monthly_premium = models.TextField( default="", blank=True)
    commission = models.TextField( default="", blank=True)
    
    referred = models.BooleanField(default=False)
    picked_up = models.IntegerField(default=0)

    status = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class review_status(models.Model):
    document = models.ForeignKey(ComplianceDocument, on_delete=models.CASCADE)
    
    status = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    
class GateKeeping(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    document = models.ForeignKey(ComplianceDocument, on_delete=models.CASCADE)
    version = models.IntegerField(default=1)

    lump_sum = models.TextField( default="", blank=True)
    monthly_premium = models.TextField( default="", blank=True)
    commission = models.TextField( default="", blank=True)

    fica = models.IntegerField(default=0, blank=True)
    proof_of_screening = models.IntegerField(default=0, blank=True)
    dra = models.IntegerField(default=0, blank=True)
    letter_of_intro = models.IntegerField(default=0, blank=True)
    authorisation_letter = models.IntegerField(default=0, blank=True)
    roa_type = models.IntegerField(default=0, blank=True)
    roa = models.IntegerField(default=0, blank=True)
    fna = models.IntegerField(default=0, blank=True)
    application = models.IntegerField(default=0, blank=True)
    quotation = models.IntegerField(default=0, blank=True)
    risk_portfolio = models.IntegerField(default=0, blank=True)
    mandate = models.IntegerField(default=0, blank=True)
    replacement = models.IntegerField(default=0, blank=True)
    replacement_type = models.IntegerField(default=0, blank=True)

    date_of_screening = models.IntegerField(default=0, blank=True)
    timeously = models.IntegerField(default=0, blank=True)

    # fica = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # proof_of_screening = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # dra = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # letter_of_intro = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # authorisation_letter = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # roa_type = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # roa = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # fna = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # application = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # quotation = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # risk_portfolio = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # mandate = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # replacement = models.IntegerField(choices=(('100','Yes'),('0','No'), ('-1','N/A')), default=0, blank=True)
    # replacement_type = models.IntegerField(choices=(('1','Rule 19'),('0','Select'),('2','Non rule 19')), default=0, blank=True)

    policy_schedule = models.TextField( default="", blank=True)
    commission_release_form = models.TextField( default="", blank=True)
    referral_reason = models.TextField( default="", blank=True)

    # status = models.IntegerField(choices=(('0','New Case'),('1','Approved'),('2','Outstanding Requirements'),('3','Referred')), default=0, blank=True)
    status = models.IntegerField(default=0, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class arc_question_header(models.Model):
    title = models.TextField(default="Main")

    status = models.BooleanField(default=True)

class arc_questions(models.Model):
    question = models.TextField("")
    category = models.ForeignKey(arc_question_header, on_delete=models.CASCADE)
    total = models.IntegerField(default=1)
    max_score = models.IntegerField(default=15)
    
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class arc(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    document = models.ForeignKey(ComplianceDocument, on_delete=models.CASCADE)
    version = models.IntegerField(default=1)

    client_needs = models.IntegerField(default=0)
    appropriate_fna = models.IntegerField(default=0)
    fna_outcome = models.IntegerField(default=0)
    product_suitability = models.IntegerField(default=0)
    alternative_solutions = models.IntegerField(default=0)
    material_aspects = models.IntegerField(default=0)
    special_terms = models.IntegerField(default=0)
    replacement_terms = models.IntegerField(default=0)
    disclosure_a = models.IntegerField(default=0)
    disclosure_b = models.IntegerField(default=0)
    personal_details_a = models.IntegerField(default=0)
    personal_details_b = models.IntegerField(default=0)
    general_a = models.IntegerField(default=0)
    general_b = models.IntegerField(default=0)
    general_c = models.IntegerField(default=0)
    general_d = models.IntegerField(default=0)
    risk_classes_a = models.IntegerField(default=0)
    risk_classes_b = models.IntegerField(default=0)
    fna_a = models.IntegerField(default=0)
    fna_b = models.IntegerField(default=0)
    recommended_products_a = models.IntegerField(default=0)
    recommended_products_b = models.IntegerField(default=0)
    recommended_products_c = models.IntegerField(default=0)
    replacements_a = models.IntegerField(default=0)
    replacements_b = models.IntegerField(default=0)
    replacements_c = models.IntegerField(default=0)
    replacements_d = models.IntegerField(default=0)
    client_consent_a = models.IntegerField(default=0)
    client_consent_b = models.IntegerField(default=0)

    # status = models.IntegerField(choices=(('1','Approved'),('2','Outstanding Requirements'),('3','Referred')), default=0, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
class DocumentComments(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    document = models.ForeignKey(ComplianceDocument, on_delete=models.CASCADE)
    type = models.IntegerField(default=1)

    title = models.TextField( default="", blank=True)
    comment = models.TextField( default="", blank=True)

    status = models.IntegerField(choices=(('1','Approved'),('2','Outstanding Requirements'),('3','Referred')), default=0, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)