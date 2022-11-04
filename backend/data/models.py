from email.policy import default
from sre_constants import MAX_UNTIL
from django.db import models

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from pytz import timezone
from uritemplate import partial

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
    partial_password = models.BooleanField(default=True)
    # firstname = models.CharField(max_length=255)
    # lastname = models.CharField(max_length=255)
    admin_id = models.IntegerField(default=0)
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

import datetime
# Create your models here.
class Form(models.Model):   
    advisorId = models.IntegerField()
    # form_type = models.IntegerField(default=1)
    clientName = models.CharField(max_length=256, default="John Doe")
    clientIdNumber = models.CharField(max_length=256, default="")
    clientAddress = models.CharField(max_length=256, default="")
    clientPhoneNumber = models.CharField(max_length=256, default="")
    clientEmail = models.CharField(max_length=256, default="")
    # client_financial_advisor = advisor_id
    clientDateOfBirth = models.DateField(default=datetime.date.today)
    clientLetterOfIntroduction = models.IntegerField(default=0)
    clientLetterOfIntroductionReason = models.CharField(max_length=256, default="", blank=True)
    clientLetterOfIntroductionAccess = models.IntegerField(default=0)
    clientLetterOfIntroductionAccessReason = models.CharField(max_length=256, default="", blank=True)
    clientFica = models.IntegerField(default=0)
    clientFicaReason = models.CharField(max_length=256, default="", blank=True)
    clientBackgroundInfo = models.CharField(max_length=1000)
    

    status = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class Fiduciary(models.Model):   
    advisorId = models.IntegerField()
    formId = models.IntegerField()
    # form_type = models.IntegerField(default=1)
    # clientIdNumber = models.CharField(max_length=256, default="", blank=True)
    fiduciaryWillInPlace = models.IntegerField(default=0) 
    fiduciaryWillUpdationDate = models.CharField(max_length=500, default="", blank=True)
    fiduciaryWillKeepingPlace = models.CharField(max_length=500, default="", blank=True)
    fiduciaryExecutorDetails = models.CharField(max_length=500, default="", blank=True)
    fiduciaryClientInstructions = models.CharField(max_length=500, default="", blank=True)
    fiduciaryConsequencesExplained = models.CharField(max_length=500, default="", blank=True)
    
    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class InvestmentPlanning(models.Model):   
    advisorId = models.IntegerField()
    formId = models.IntegerField()
    # form_type = models.IntegerField(default=1)
    # clientIdNumber = models.CharField(max_length=256, default="", blank=True)
    IP_SourceOfIncome = models.IntegerField(default=1)    
    IP_OtherSourceOfIncome = models.CharField(max_length=500, default="", blank=True)    
    IP_InvestmentTerm = models.CharField(max_length=500, default="", blank=True)    
    IP_InvestmentTermDetails = models.CharField(max_length=500, default="", blank=True)    
    IP_Liquidity = models.IntegerField(default=0)    
    IP_LiquidityDetails = models.CharField(max_length=500, default="", blank=True)      
    IP_Type = models.IntegerField(default=0)    
    IP_TypeDetails = models.CharField(max_length=500, default="", blank=True)      
    IP_PremiumType = models.IntegerField(default=0)    
    IP_PremiumTypeDetails = models.CharField(max_length=500, default="", blank=True)      
    IP_IncomeRequired = models.IntegerField(default=0)    
    IP_IncomeRequiredDetails = models.CharField(max_length=500, default="", blank=True)      
    IP_InvestmentStrategy = models.IntegerField(default=1)    
    IP_InvestmentStrategyDetails = models.CharField(max_length=500, default="", blank=True)    
    IP_ReturnRequired = models.IntegerField(default=1)    
    IP_ReturnRequiredDetails = models.CharField(max_length=500, default="", blank=True)    
    IP_RiskProfile = models.IntegerField(default=1)      
    IP_RiskProfileDetails = models.CharField(max_length=500, default="", blank=True)      

    IP_RecommendationSummary = models.CharField(max_length=500, default="", blank=True)    

    IP_AltS_1 = models.CharField(max_length=500, default="", blank=True)    
    IP_AltS_2 = models.CharField(max_length=500, default="", blank=True)    
    IP_AltS_3 = models.CharField(max_length=500, default="", blank=True)    

    IP_ProductTaken = models.IntegerField(default=1)    
    IP_ProductProvider = models.CharField(max_length=500, default="", blank=True)    
    IP_PolicyNumber = models.CharField(max_length=500, default="", blank=True)    
    IP_ProductName = models.CharField(max_length=500, default="", blank=True)    
    IP_ProductPremium = models.CharField(max_length=500, default="", blank=True)    
    IP_ProductPremiumFrequency = models.IntegerField(default=1)   
    IP_ProductEscalation = models.CharField(max_length=500, default="", blank=True)    
    IP_ProductEAC = models.CharField(max_length=500, default="", blank=True)    
    IP_ProductContractingParty = models.CharField(max_length=500, default="", blank=True)    
    IP_ProductLivesAssured = models.CharField(max_length=500, default="", blank=True)    
    IP_ProductPremiumLayer = models.CharField(max_length=500, default="", blank=True)    
    IP_ProductBeneficiary = models.CharField(max_length=500, default="", blank=True)    
    IP_Product_IniC = models.CharField(max_length=500, default="", blank=True)    
    IP_Product_IniC_Percentage = models.CharField(max_length=500, default="", blank=True)    
    IP_Product_OnC = models.CharField(max_length=500, default="", blank=True)    
    IP_Product_OnC_Percentage = models.CharField(max_length=500, default="", blank=True)    

    IP_SFPSolutionFunds = models.IntegerField(default=0)
    IP_SFPSolutionFundsDetails = models.CharField(max_length=500, default="", blank=True)

    IP_ItP = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_Fund = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundPercentage = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundProvided = models.IntegerField(default=0)
    IP_ItP_FundDiscussed = models.IntegerField(default=0)
    
    IP_ItP_Fund1 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundPercentage1 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundProvided1 = models.IntegerField(default=0)
    IP_ItP_FundDiscussed1 = models.IntegerField(default=0)

    IP_ItP_Fund2 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundPercentage2 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundProvided2 = models.IntegerField(default=0)
    IP_ItP_FundDiscussed2 = models.IntegerField(default=0)

    IP_ItP_Fund3 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundPercentage3 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundProvided3 = models.IntegerField(default=0)
    IP_ItP_FundDiscussed3 = models.IntegerField(default=0)

    IP_ItP_Fund4 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundPercentage4 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundProvided4 = models.IntegerField(default=0)
    IP_ItP_FundDiscussed4 = models.IntegerField(default=0)

    IP_ItP_Fund5 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundPercentage5 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundProvided5 = models.IntegerField(default=0)
    IP_ItP_FundDiscussed5 = models.IntegerField(default=0)

    IP_ItP_Fund6 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundPercentage6 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundProvided6 = models.IntegerField(default=0)
    IP_ItP_FundDiscussed6 = models.IntegerField(default=0)

    IP_ItP_Fund7 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundPercentage7 = models.CharField(max_length=500, default="", blank=True)
    IP_ItP_FundProvided7 = models.IntegerField(default=0)
    IP_ItP_FundDiscussed7 = models.IntegerField(default=0)

    IP_ItP_FundsReasons = models.CharField(max_length=500, default="", blank=True)

    IP_ItP_FundsMaterialAspects = models.CharField(max_length=500, default="", blank=True)

    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class AssuranceInvestment(models.Model):   
    advisorId = models.IntegerField()
    formId = models.IntegerField()
    # form_type = models.IntegerField(default=1)
    # clientIdNumber = models.CharField(max_length=256, default="", blank=True)

    AI_Term = models.CharField(max_length=500, default="", blank=True)    
    AI_TermDetails = models.CharField(max_length=500, default="", blank=True)  
    # AI_Type = models.IntegerField(default=0)    
    # AI_TypeDetails = models.IntegerField(default=0)    
    AI_PremiumType = models.IntegerField(default=0)    
    AI_PremiumTypeDetails = models.CharField(max_length=500, default="", blank=True)       
    AI_Strategy = models.IntegerField(default=1)    
    AI_StrategyDetails = models.CharField(max_length=500, default="", blank=True)    
    AI_ReturnRequired = models.IntegerField(default=1)    
    AI_ReturnRequiredDetails = models.CharField(max_length=500, default="", blank=True)    
    AI_RiskProfile = models.IntegerField(default=1)      
    AI_RiskProfileDetails = models.CharField(max_length=500, default="", blank=True)      

    AI_TRP_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AI_TRP_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AI_TRP_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AI_TRP_ExistingInvestments = models.CharField(max_length=500, default="", blank=True)    

    AI_RA_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AI_RA_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AI_RA_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AI_RA_ExistingInvestments = models.CharField(max_length=500, default="", blank=True)    

    AI_CR_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AI_CR_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AI_CR_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AI_CR_ExistingInvestments = models.CharField(max_length=500, default="", blank=True)    

    AI_Other_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AI_Other_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AI_Other_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AI_Other_ExistingInvestments = models.CharField(max_length=500, default="", blank=True)    

    AI_FinancialSolutions = models.CharField(max_length=500, default="", blank=True)    
    AI_AltS_1 = models.CharField(max_length=500, default="", blank=True)    
    AI_AltS_2 = models.CharField(max_length=500, default="", blank=True)    
    AI_AltS_3 = models.CharField(max_length=500, default="", blank=True)    

    # AI_Pr_Taken = models.IntegerField(default=1)    
    AI_Pr_Provider = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_PolicyNumber = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_Name = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_Premium = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_PremiumFrequency = models.IntegerField(default=1)   
    AI_Pr_Escalation = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_EAC = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_ContractingParty = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_LivesAssured = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_PremiumPayer = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_Beneficiary = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_IniC = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_IniC_Percentage = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_OnC = models.CharField(max_length=500, default="", blank=True)    
    AI_Pr_OnC_Percentage = models.CharField(max_length=500, default="", blank=True)

    AI_Portfolio = models.CharField(max_length=500, default="", blank=True)
    
    AI_PF_1 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Percentage1 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Provided1 = models.BooleanField(default=False)
    AI_PF_Discussed1 = models.BooleanField(default=False)

    AI_PF_2 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Percentage2 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Provided2 = models.BooleanField(default=False)
    AI_PF_Discussed2 = models.BooleanField(default=False)

    AI_PF_3 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Percentage3 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Provided3 = models.BooleanField(default=False)
    AI_PF_Discussed3 = models.BooleanField(default=False)

    AI_PF_4 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Percentage4 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Provided4 = models.BooleanField(default=False)
    AI_PF_Discussed4 = models.BooleanField(default=False)

    AI_PF_5 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Percentage5 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Provided5 = models.BooleanField(default=False)
    AI_PF_Discussed5 = models.BooleanField(default=False)

    AI_PF_6 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Percentage6 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Provided6 = models.BooleanField(default=False)
    AI_PF_Discussed6 = models.BooleanField(default=False)

    AI_PF_7 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Percentage7 = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Provided7 = models.BooleanField(default=False)
    AI_PF_Discussed7 = models.BooleanField(default=False)

    AI_PF_Reasons = models.CharField(max_length=500, default="", blank=True)
    AI_PF_MaterialAspects = models.CharField(max_length=500, default="", blank=True)
    AI_PF_Pr_Details = models.CharField(max_length=500, default="", blank=True)
    AI_PF_NominationOfBeneficiaries = models.CharField(max_length=500, default="", blank=True)

    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class RiskPlanning(models.Model):   
    advisorId = models.IntegerField()
    formId = models.IntegerField()
    # form_type = models.IntegerField(default=1)
    # clientIdNumber = models.CharField(max_length=256, default="", blank=True)
    
    RP_DC_LumpSumTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_LumpSumExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_LumpSumExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_LumpSumInvestments = models.CharField(max_length=500, default="", blank=True)    
    
    RP_DC_IncomeTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_IncomeExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_IncomeExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_IncomeInvestments = models.CharField(max_length=500, default="", blank=True)    
    
    RP_DC_FB_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_FB_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_FB_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_FB_Investments = models.CharField(max_length=500, default="", blank=True)    

    RP_DC_OtherTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_OtherExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_OtherExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    RP_DC_OtherInvestments = models.CharField(max_length=500, default="", blank=True)    
    
    RP_DC_Comments = models.CharField(max_length=500, default="", blank=True)    

    RP_DiC_LumpSumTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_LumpSumExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_LumpSumExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_LumpSumInvestments = models.CharField(max_length=500, default="", blank=True)    
    
    RP_DiC_PI_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_PI_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_PI_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_PI_Investments = models.CharField(max_length=500, default="", blank=True)    
    
    RP_DiC_TI_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_TI_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_TI_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_TI_Investments = models.CharField(max_length=500, default="", blank=True)        
    
    RP_DiC_SiB_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_SiB_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_SiB_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_SiB_Investments = models.CharField(max_length=500, default="", blank=True)  

    RP_DiC_OtherTotalNeed1 = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_OtherExistingProvisions1 = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_OtherExistingShortfallSurplus1 = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_OtherInvestments1 = models.CharField(max_length=500, default="", blank=True)     
    
    RP_DiC_OtherTotalNeed2 = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_OtherExistingProvisions2 = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_OtherExistingShortfallSurplus2 = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_OtherInvestments2 = models.CharField(max_length=500, default="", blank=True)     

    RP_DiC_Comments = models.CharField(max_length=500, default="", blank=True)    
    
    RP_DrC_LumpSumTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_LumpSumExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_LumpSumExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_LumpSumInvestments = models.CharField(max_length=500, default="", blank=True)    
    
    RP_DrC_IncomeTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_IncomeExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_IncomeExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_IncomeInvestments = models.CharField(max_length=500, default="", blank=True)    
    
    RP_DrC_OtherTotalNeed1 = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_OtherExistingProvisions1 = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_OtherExistingShortfallSurplus1 = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_OtherInvestments1 = models.CharField(max_length=500, default="", blank=True)     
    
    RP_DrC_OtherTotalNeed2 = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_OtherExistingProvisions2 = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_OtherExistingShortfallSurplus2 = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_OtherInvestments2 = models.CharField(max_length=500, default="", blank=True)     

    RP_DrC_Comments = models.CharField(max_length=500, default="", blank=True)    
  
    RP_LC_FinancialSolutions = models.CharField(max_length=500, default="", blank=True)    
    RP_DiC_FinancialSolutions = models.CharField(max_length=500, default="", blank=True)    
    RP_DrC_FinancialSolutions = models.CharField(max_length=500, default="", blank=True)    

    RP_AltS_1 = models.CharField(max_length=500, default="", blank=True)    
    RP_AltS_2 = models.CharField(max_length=500, default="", blank=True)    
    RP_AltS_3 = models.CharField(max_length=500, default="", blank=True)    

    RP_Product_Taken = models.CharField(max_length=500, default="", blank=True)   
    RP_Product_Provider = models.CharField(max_length=500, default="", blank=True)    
    RP_Policy_Number = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_Name = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_Premium = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_PremiumFrequency = models.IntegerField(default=0)   
    RP_Product_Pattern = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_Escalation = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_ContractingParty = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_LivesAssured = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_Beneficiary = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_PremiumPayer = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_1stYearCommission = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_2ndYearCommission = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_OngoingFees = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_OngoingFeesFrequency = models.CharField(max_length=500, default="", blank=True)    
    RP_Product_OngoingFeesFrequency1 = models.IntegerField(default=0)     

    RP_TotalFees_n_Commissions = models.CharField(max_length=500, default="", blank=True)
    
    RP_BenDesc_1 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_CoverAmount1 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_2 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_CoverAmount2 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_3 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_CoverAmount3 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_4 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_CoverAmount4 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_5 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_CoverAmount5 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_6 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_CoverAmount6 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_7 = models.CharField(max_length=500, default="", blank=True)
    RP_BenDesc_CoverAmount7 = models.CharField(max_length=500, default="", blank=True)
    
    RP_ProductReasons = models.CharField(max_length=500, default="", blank=True)
    RP_ProductMaterialAspects = models.CharField(max_length=500, default="", blank=True)
    RP_ProductDetails = models.CharField(max_length=500, default="", blank=True)
    RP_ExecutorFee = models.CharField(max_length=500, default="", blank=True)
    RP_NominationOfBeneficiaries = models.CharField(max_length=500, default="", blank=True)
    RP_InformationExplained = models.CharField(max_length=500, default="", blank=True)

    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class AssuranceRisk(models.Model):   
    advisorId = models.IntegerField()
    formId = models.IntegerField()
    # form_type = models.IntegerField(default=1)
    # clientIdNumber = models.CharField(max_length=256, default="", blank=True)
    
    AR_BusinessTradeName = models.CharField(max_length=500, default="", blank=True)    
    AR_BusinessRegisteredName = models.CharField(max_length=500, default="", blank=True)    
    AR_BusinessAuthorisedPersons = models.CharField(max_length=500, default="", blank=True)    
    AR_BusinessFinancialAdvisor = models.CharField(max_length=500, default="", blank=True)    
    AR_BusinessAddress = models.CharField(max_length=500, default="", blank=True)    
    AR_BusinessEmail = models.CharField(max_length=500, default="", blank=True)    
    AR_BusinessPhoneNumber = models.CharField(max_length=500, default="", blank=True)    
    AR_BusinessDate = models.CharField(max_length=500, default="", blank=True)    

    AR_ComDisc_AuthorizedPerson = models.IntegerField(default="0")    
    AR_ComDisc_AuthorizedPersonDetail = models.CharField(max_length=500, default="", blank=True)    
    AR_ComDisc_Authority = models.IntegerField(default="0")    
    AR_ComDisc_AuthorityDetail = models.CharField(max_length=500, default="", blank=True)    

    AR_FICA = models.IntegerField(default="0")    
    AR_FICADetail = models.CharField(max_length=500, default="", blank=True)    

    AR_RepPrs_Taken = models.IntegerField(default="0")    
    AR_RepPrs_TakenDetail = models.CharField(max_length=500, default="", blank=True)    
    AR_RepPrs_Explained = models.IntegerField(default="0")    
    AR_RepPrs_ExplainedDetail = models.CharField(max_length=500, default="", blank=True)    
    AR_RepPrs_Cancelled = models.IntegerField(default="0")    
    AR_RepPrs_CancelledDetail = models.CharField(max_length=500, default="", blank=True)   

    AR_SourceOfFunds = models.IntegerField(default="0")    
    AR_SourceOfFundsDetail = models.CharField(max_length=500, default="", blank=True)    
 
    AR_ReplacementBackInfo = models.CharField(max_length=500, default="", blank=True)    

    AR_BusA_BnS = models.BooleanField(default=False)    
    AR_BusA_KeyP_Insurance = models.BooleanField(default=False)    
    AR_BusA_ContingentLiability = models.BooleanField(default=False)    
    AR_BusA_BusOvProt = models.BooleanField(default=False)    
    AR_BusA_CLARedm = models.BooleanField(default=False)    
    AR_BusA_DebitLoanRedemption = models.BooleanField(default=False)    
    AR_BusA_FundingOfFutureExpenses = models.BooleanField(default=False)    
    AR_BusA_FundingOfDeferredGratuities = models.BooleanField(default=False)    
    AR_BusA_Details = models.CharField(max_length=500, default="", blank=True)     

    AR_BnS_DC_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_BnS_DC_Provisions = models.CharField(max_length=500, default="", blank=True)    
    AR_BnS_DC_ShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_BnS_DC_Investments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_BnS_DiC_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_BnS_DiC_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_BnS_DiC_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_BnS_DiC_Investments = models.CharField(max_length=500, default="", blank=True)       

    AR_BnS_OtherTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_BnS_OtherExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_BnS_OtherExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_BnS_OtherInvestments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_BnS_Comments = models.CharField(max_length=500, default="", blank=True)    

    AR_KeyP_DC_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_DC_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_DC_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_DC_Investments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_KeyP_DiC_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_DiC_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_DiC_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_DiC_Investments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_KeyP_TI_CoverTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_TI_CoverExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_TI_CoverExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_TI_CoverInvestments = models.CharField(max_length=500, default="", blank=True)        
    
    AR_KeyP_PI_CoverTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_PI_CoverExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_PI_CoverExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_PI_CoverInvestments = models.CharField(max_length=500, default="", blank=True)        

    AR_KeyP_OtherTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_OtherExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_OtherExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_KeyP_OtherInvestments = models.CharField(max_length=500, default="", blank=True)     
    
    AR_KeyP_Comments = models.CharField(max_length=500, default="", blank=True)        

    AR_SureNLia_DC_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_SureNLia_DC_Provisions = models.CharField(max_length=500, default="", blank=True)    
    AR_SureNLia_DC_ShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_SureNLia_DC_Investments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_SureNLia_DiC_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_SureNLia_DiC_Provisions = models.CharField(max_length=500, default="", blank=True)    
    AR_SureNLia_DiC_ShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_SureNLia_DiC_Investments = models.CharField(max_length=500, default="", blank=True)       

    AR_SureNLia_OtherTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_SureNLia_OtherProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_SureNLia_OtherShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_SureNLia_OtherInvestments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_SureNLia_Comments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_BusOvProt_TI_CoverTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_BusOvProt_TI_CoverExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_BusOvProt_TI_CoverExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_BusOvProt_TI_CoverInvestments = models.CharField(max_length=500, default="", blank=True)        
    
    AR_BusOvProt_PI_CoverTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_BusOvProt_PI_CoverExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_BusOvProt_PI_CoverExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_BusOvProt_PI_CoverInvestments = models.CharField(max_length=500, default="", blank=True)        

    AR_BusOvProt_OtherTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_BusOvProt_OtherExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_BusOvProt_OtherExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_BusOvProt_OtherInvestments = models.CharField(max_length=500, default="", blank=True)     
    
    AR_BusOvProt_Comments = models.CharField(max_length=500, default="", blank=True)  

    AR_CLARedm_DC_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_CLARedm_DC_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_CLARedm_DC_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_CLARedm_DC_Investments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_CLARedm_DiC_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_CLARedm_DiC_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_CLARedm_DiC_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_CLARedm_DiC_Investments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_CLARedm_OtherTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_CLARedm_OtherExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_CLARedm_OtherExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_CLARedm_OtherInvestments = models.CharField(max_length=500, default="", blank=True)     
    
    # AR_CLARedm_Comments = models.CharField(max_length=500, default="", blank=True)   

    AR_DLARedm_DC_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_DLARedm_DC_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_DLARedm_DC_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_DLARedm_DC_Investments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_DLARedm_DiC_TotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_DLARedm_DiC_ExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_DLARedm_DiC_ExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_DLARedm_DiC_Investments = models.CharField(max_length=500, default="", blank=True)    
    
    AR_DLARedm_OtherTotalNeed = models.CharField(max_length=500, default="", blank=True)    
    AR_DLARedm_OtherExistingProvisions = models.CharField(max_length=500, default="", blank=True)    
    AR_DLARedm_OtherExistingShortfallSurplus = models.CharField(max_length=500, default="", blank=True)    
    AR_DLARedm_OtherInvestments = models.CharField(max_length=500, default="", blank=True)     
    
    # AR_DLARedm_Comments = models.CharField(max_length=500, default="", blank=True)   
    
    AR_LifeCoverFinancialSolutions = models.CharField(max_length=500, default="", blank=True)    
    AR_DiC_FinancialSolutions = models.CharField(max_length=500, default="", blank=True)   

    AR_AltS_1 = models.CharField(max_length=500, default="", blank=True)    
    AR_AltS_2 = models.CharField(max_length=500, default="", blank=True)    
    AR_AltS_3 = models.CharField(max_length=500, default="", blank=True)    

    AR_ProductProvider = models.CharField(max_length=500, default="", blank=True)    
    AR_PolicyNumber = models.CharField(max_length=500, default="", blank=True)    
    AR_ProductName = models.CharField(max_length=500, default="", blank=True)    
    AR_ProductPremium = models.CharField(max_length=500, default="", blank=True)    
    AR_ProductPremiumFrequency = models.IntegerField(default=1)   
    AR_ProductPattern = models.CharField(max_length=500, default="", blank=True)    
    AR_ProductEscalation = models.CharField(max_length=500, default="", blank=True)    
    AR_ProductContractingParty = models.CharField(max_length=500, default="", blank=True)    
    AR_ProductLivesAssured = models.CharField(max_length=500, default="", blank=True)    
    AR_ProductPremiumPayer = models.CharField(max_length=500, default="", blank=True)    
    AR_Product1stYearCommission = models.CharField(max_length=500, default="", blank=True)    
    AR_Product2ndYearCommission = models.CharField(max_length=500, default="", blank=True)    
    # AR_ProductOngoingFees = models.CharField(max_length=500, default="", blank=True)    
    # AR_ProductOngoingFeesFrequency = models.CharField(max_length=500, default="", blank=True)    
    
    AR_BenDesc_1 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_CoverAmount1 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_2 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_CoverAmount2 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_3 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_CoverAmount3 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_4 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_CoverAmount4 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_5 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_CoverAmount5 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_6 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_CoverAmount6 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_7 = models.CharField(max_length=500, default="", blank=True)
    AR_BenDesc_CoverAmount7 = models.CharField(max_length=500, default="", blank=True)
    
    AR_ProductReasons = models.CharField(max_length=500, default="", blank=True)
    AR_ProductMaterialAspects = models.CharField(max_length=500, default="", blank=True)
    AR_ProductDetails = models.CharField(max_length=500, default="", blank=True)
    AR_ProductBriefSummary = models.CharField(max_length=500, default="", blank=True)
    AR_Cessionaries = models.CharField(max_length=500, default="", blank=True)
    AR_InformationExplained = models.CharField(max_length=500, default="", blank=True)

    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class EmployeeBenefits(models.Model):   
    advisorId = models.IntegerField()
    formId = models.IntegerField()
    # form_type = models.IntegerField(default=1)
    # clientIdNumber = models.CharField(max_length=256, default="", blank=True)
    
    EB_ClientName = models.CharField(max_length=256, default="", blank=True)
    EB_ClientIdNumber = models.CharField(max_length=256, default="", blank=True)
    EB_ClientAddress = models.CharField(max_length=256, default="", blank=True)
    EB_ClientPhoneNumber = models.CharField(max_length=256, default="", blank=True)
    EB_ClientCellNumber = models.CharField(max_length=256, default="", blank=True)
    EB_ClientEmail = models.CharField(max_length=256, default="", blank=True)
    EB_ClientDate = models.CharField(max_length=256, default="", blank=True)
    EB_ClientFinancialAdvisor = models.CharField(max_length=256, default="", blank=True)
    EB_ClientFeeDetails = models.CharField(max_length=256, default="", blank=True)

    EB_BusinessName = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessAddress = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessContactPerson = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessPhoneNumber = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessCellNumber = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessEmail = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessNature = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessUnion = models.IntegerField(default=0)
    EB_BusinessDetails = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessNumberOfEmployees = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessNumberOfEligibleEmployees = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessNumberOfExcludedCategories = models.CharField(max_length=256, default="", blank=True)

    EB_BusEx_FundsName = models.CharField(max_length=256, default="", blank=True)
    EB_BusEx_FundsAdmin = models.CharField(max_length=256, default="", blank=True)
    EB_BusEx_FundsCurrentValue = models.CharField(max_length=256, default="", blank=True)
    EB_BusEx_FundsActiveMembers = models.CharField(max_length=256, default="", blank=True)
    EB_BusEx_FundsFullyPaidMembers = models.CharField(max_length=256, default="", blank=True)
    EB_BusEx_FundsFullyReasonForChange = models.CharField(max_length=256, default="", blank=True)

    EB_BusB_CoverType = models.IntegerField(default=0)
    EB_BusB_Cover = models.IntegerField(default=0)
    EB_BusB_CoverDetails = models.CharField(max_length=256, default="", blank=True)

    EB_BusEmp_Retire_In5Years = models.IntegerField(default=0)
    EB_BusEmp_Retire_In5YearsPercentage = models.CharField(max_length=256, default="", blank=True)
    EB_BusEmp_Fin_Illiterate = models.IntegerField(default=0)
    EB_BusEmp_Fin_IlliteratePercentage = models.CharField(max_length=256, default="", blank=True)
    EB_BusEmp_Fin_Sophisticated = models.IntegerField(default=0)
    EB_BusEmp_Fin_SophisticatedPercentage = models.CharField(max_length=256, default="", blank=True)
    EB_BusHS_TurnOver = models.IntegerField(default=0)
    EB_BusHS_TurnOverPercentage = models.CharField(max_length=256, default="", blank=True)
    EB_BusI_Choice = models.IntegerField(default=0)
    EB_BusI_ChoicePercentage = models.CharField(max_length=256, default="", blank=True)
    EB_BusinessItP = models.IntegerField(default=0)
    EB_BusinessItP_Percentage = models.CharField(max_length=256, default="", blank=True)
    
    EB_BusEmp_AdditionalComments = models.CharField(max_length=256, default="", blank=True)

    EB_BusRB_Category1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_Category2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_Category3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_Category4 = models.CharField(max_length=256, default="", blank=True)

    EB_BusRB_MemContrib_Category1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_MemContrib_Category2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_MemContrib_Category3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_MemContrib_Category4 = models.CharField(max_length=256, default="", blank=True)

    EB_BusRB_EmpContrib_Category1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_EmpContrib_Category2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_EmpContrib_Category3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_EmpContrib_Category4 = models.CharField(max_length=256, default="", blank=True)

    EB_BusRB_NormRetire_AgeCategory1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_NormRetire_AgeCategory2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_NormRetire_AgeCategory3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_NormRetire_AgeCategory4 = models.CharField(max_length=256, default="", blank=True)

    EB_BusRB_FlexibleGroupLife = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_Approved = models.IntegerField(default=0)
    EB_BusRB_ApprovedCategory1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_ApprovedCategory2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_ApprovedCategory3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_ApprovedCategory4 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_UnApproved = models.IntegerField(default=0)
    EB_BusRB_UnApprovedCategory1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_UnApprovedCategory2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_UnApprovedCategory3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_UnApprovedCategory4 = models.CharField(max_length=256, default="", blank=True)

    EB_BusinessRiskFundTakeOver = models.IntegerField(default=0)

    EB_BusRB_SpouseLC_Category1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_SpouseLC_Category2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_SpouseLC_Category3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_SpouseLC_Category4 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_SpouseLC_Notes = models.CharField(max_length=256, default="", blank=True)

    EB_BusRB_TrauBenSa_Category1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_TrauBenSa_Category2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_TrauBenSa_Category3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_TrauBenSa_Category4 = models.CharField(max_length=256, default="", blank=True)

    EB_BusRB_FB_CoverCategory1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_FB_CoverCategory2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_FB_CoverCategory3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_FB_CoverCategory4 = models.CharField(max_length=256, default="", blank=True)
    
    EB_BusRB_CapDisBen_Approved = models.IntegerField(default=0)
    EB_BusRB_CapDisBen_ApprovedCategory1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_CapDisBen_ApprovedCategory2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_CapDisBen_ApprovedCategory3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_CapDisBen_ApprovedCategory4 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_CapDisBen_UnApproved = models.IntegerField(default=0)
    EB_BusRB_CapDisBen_UnApprovedCategory1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_CapDisBen_UnApprovedCategory2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_CapDisBen_UnApprovedCategory3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_CapDisBen_UnApprovedCategory4 = models.CharField(max_length=256, default="", blank=True)
    
    EB_BusRB_DiIBenWaitPer_Category1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_DiIBenWaitPer_Category2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_DiIBenWaitPer_Category3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_DiIBenWaitPer_Category4 = models.CharField(max_length=256, default="", blank=True)

    EB_BusRB_ConvOp = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_GrowthRates = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_DisabilityBenefitsNotes = models.CharField(max_length=256, default="", blank=True)
    
    EB_BusRB_AccidentBenefit = models.IntegerField(default=0)
    EB_BusRB_AccidentBenefitCategory1 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_AccidentBenefitCategory2 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_AccidentBenefitCategory3 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_AccidentBenefitCategory4 = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_AccidentBenefitReason = models.CharField(max_length=256, default="", blank=True)
    
    EB_BusRB_DiC_Reason = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_DrC_Reason = models.CharField(max_length=256, default="", blank=True)
    EB_BusRB_DrC_Summary = models.CharField(max_length=256, default="", blank=True)

    EB_BusRecom_ProductAdmin = models.CharField(max_length=256, default="", blank=True)
    EB_BusRecom_ProductName = models.CharField(max_length=256, default="", blank=True)
    EB_BusRecom_FundType = models.CharField(max_length=256, default="", blank=True)
    EB_BusRecom_RecommendationFundType = models.CharField(max_length=256, default="", blank=True)
    EB_BusRecom_Porfolio = models.IntegerField(default=0)
    EB_BusRecom_ClientAccepted = models.IntegerField(default=0)
    EB_BusRecom_ClientRisks = models.CharField(max_length=256, default="", blank=True)

    EB_BusFReplace_Name = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_RegNo = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_Type = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_Detail = models.IntegerField(default=0)

    EB_BusFReplace_FeeChargesReplaced = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_FeeChargesExisting = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_TnC_Replaced = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_TnC_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_HealthChangesReplaced = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_HealthChangesExisting = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_TaxImplicationsReplaced = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_TaxImplicationsExisting = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_MaterialDifferencesReplaced = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_MaterialDifferencesExisting = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_PenaltiesReplaced = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_PenaltiesExisting = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_RealisedReplaced = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_RealisedExisting = models.CharField(max_length=256, default="", blank=True)
    
    EB_BusFReplace_EligGr_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_EligGr_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_MemContrib_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_MemContrib_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_EmpContrib_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_EmpContrib_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_EmpContrib_PercentageProposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_EmpContrib_PercentageExisting = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_AdminFee_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_AdminFee_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_BenPayDis_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_BenPayDis_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_BenPayD_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_BenPayD_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_BenPayW_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_BenPayW_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_BenPayRe_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_BenPayRe_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_NormRetire_AgeProposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_NormRetire_AgeExisting = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_ConvOp_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_ConvOp_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_HouseL_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_HouseL_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_AdminC_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_AdminC_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_InvestFee_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_InvestFee_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_CoR_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_CoR_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_BenA_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_BenA_Existing = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_InvestCh_Proposed = models.CharField(max_length=256, default="", blank=True)
    EB_BusFReplace_InvestCh_Existing = models.CharField(max_length=256, default="", blank=True)

    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)



class ShortTermInsuranceCommerical(models.Model):   
    advisorId = models.IntegerField()
    formId = models.IntegerField()
    # form_type = models.IntegerField(default=1)
    clientIdNumber = models.CharField(max_length=256, default="", blank=True)
    
    STIC_Quotation_Number = models.CharField(max_length=256, default="", blank=True)
    STIC_Underwritten_By = models.CharField(max_length=256, default="", blank=True)
    STIC_Branch_Name = models.CharField(max_length=256, default="", blank=True)
    STIC_Branch_Number = models.CharField(max_length=256, default="", blank=True)
    STIC_Inception_Date = models.CharField(max_length=256, default="", blank=True)
    STIC_Renewal_Date = models.CharField(max_length=256, default="", blank=True)
    STIC_Payment_Method_Annual = models.IntegerField(default="0")
    STIC_Payment_Method_Monthly = models.IntegerField(default="0")
    STIC_Sasria_Annual = models.IntegerField(default="0")
    STIC_Sasria_Monthly = models.IntegerField(default="0")

    STIC_Business_Owner = models.CharField(max_length=256, default="", blank=True)
    STIC_Client_Id_Number = models.CharField(max_length=256, default="", blank=True)
    STIC_Company_Reg_Number = models.CharField(max_length=256, default="", blank=True)
    STIC_Company_VAT_Number = models.CharField(max_length=256, default="", blank=True)
    STIC_Postal_Address = models.CharField(max_length=256, default="", blank=True)
    STIC_Risk_Address = models.CharField(max_length=256, default="", blank=True)
    STIC_Contact_Person = models.CharField(max_length=256, default="", blank=True)
    STIC_TelePhone_Number = models.CharField(max_length=256, default="", blank=True)
    STIC_Fax_Number = models.CharField(max_length=256, default="", blank=True)
    STIC_CellPhone_Number = models.CharField(max_length=256, default="", blank=True)
    STIC_Email = models.CharField(max_length=256, default="", blank=True)
    STIC_Business_Description = models.CharField(max_length=256, default="", blank=True)

    STIC_Lower_Premium = models.IntegerField(default="0")
    STIC_Higher_Premium = models.IntegerField(default="0")
    STIC_Applicable_Option = models.CharField(max_length=256, default="", blank=True)

    STIC_General_Cancelled = models.IntegerField(default="0")
    STIC_General_Cancelled_Detail = models.CharField(max_length=256, default="", blank=True)

    STIC_General_History = models.JSONField(max_length=2048, default=dict)

    STIC_Replacement_Advise = models.IntegerField(default="0")
    STIC_Replacement_Advise_Details = models.CharField(max_length=256, default="", blank=True)
    STIC_Replacement_Reason = models.CharField(max_length=256, default="", blank=True)
    STIC_Replacement_Suppliers = models.CharField(max_length=256, default="", blank=True)

    STIC_Fin_FnC_Existing = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_FnC_Replacement = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_STnC_Existing = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_STnC_Replacement = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_ImpOnPre_Existing = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_ImpOnPre_Replacement = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_Excesses_Existing = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_Excesses_Replacement = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_VABen_Existing = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_VABen_Replacement = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_AdvisorComm_Existing = models.CharField(max_length=256, default="", blank=True)
    STIC_Fin_AdvisorComm_Replacement = models.CharField(max_length=256, default="", blank=True)

    # Product Comparison

    # Remaining:
    STIC_Buildings_Insured = models.CharField(max_length=256, default="", blank=True)
    STIC_Rental_Insured = models.CharField(max_length=256, default="", blank=True)
    STIC_Others_Insured = models.CharField(max_length=256, default="", blank=True)
    STIC_Stocks_Insured = models.CharField(max_length=256, default="", blank=True)
    STIC_Stocks_Insured = models.CharField(max_length=256, default="", blank=True)
    STIC_Miscellaneous1_Insured = models.CharField(max_length=256, default="", blank=True)
    STIC_Miscellaneous2_Insured = models.CharField(max_length=256, default="", blank=True)

    STIC_Earthquake_Insured = models.IntegerField(default="0")
    STIC_Malicious_Damage_Insured = models.IntegerField(default="0")
    STIC_Special_Insured = models.IntegerField(default="0")
    STIC_LeakFull_Insured = models.IntegerField(default="0")
    STIC_LeakFirst_Insured = models.IntegerField(default="0")
    STIC_SnLLimited_Insured = models.IntegerField(default="0")
    STIC_SnLComprehensive_Insured = models.IntegerField(default="0")
    STIC_RnS_Insured = models.IntegerField(default="0")
    STIC_SDC_Insured = models.IntegerField(default="0")

    STIC_BuildCombined_ColumnRef = models.CharField(max_length=256, default="", blank=True)
    STIC_BuildCombined_Sum = models.CharField(max_length=256, default="", blank=True)
    STIC_BuildCombined_Construct = models.IntegerField(default="0")
    STIC_BuildCombined_Desc = models.CharField(max_length=256, default="", blank=True)

    STIC_Extensions_RnS = models.CharField(max_length=256, default="", blank=True)
    STIC_Extensions_Geysers = models.CharField(max_length=256, default="", blank=True)
    STIC_Extensions_SnL = models.CharField(max_length=256, default="", blank=True)
    STIC_Extensions_PoA = models.CharField(max_length=256, default="", blank=True)
    STIC_Extensions_IorE = models.CharField(max_length=256, default="", blank=True)

    STIC_OC_PremisesNum = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_Sum = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_Construct = models.IntegerField(default="0")
    STIC_OC_Desc = models.CharField(max_length=256, default="", blank=True)

    STIC_OC_Doc_Sum = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_Doc_Premium = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_LLDoc_Sum = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_LLDoc_Premium = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_RnS_Sum = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_RnS_Premium = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_TheftF_Sum = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_TheftF_Premium = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_Theft_Sum = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_Theft_Premium = models.CharField(max_length=256, default="", blank=True)
    STIC_OC_Total_Premium = models.CharField(max_length=256, default="", blank=True)

    STIC_BusInt_PremiseNumber = models.CharField(max_length=256, default="", blank=True)
    STIC_BusInt_Basis = models.CharField(max_length=256, default="", blank=True)
    STIC_BusInt_Indemnity = models.CharField(max_length=256, default="", blank=True)

    STIC_BusInt_Gross_Profit = models.IntegerField(default="0")
    STIC_BusInt_Gross_Rental = models.IntegerField(default="0")
    STIC_BusInt_Revenue = models.IntegerField(default="0")
    STIC_BusInt_CoW = models.IntegerField(default="0")
    STIC_BusInt_Wages = models.IntegerField(default="0")
    STIC_BusInt_Wages1 = models.CharField(max_length=256, default="", blank=True)
    STIC_BusInt_FnP = models.IntegerField(default="0")
    STIC_BusInt_StandCharges = models.IntegerField(default="0")
    STIC_BusInt_Extensions = models.IntegerField(default="0")
    STIC_BusInt_Sum = models.CharField(max_length=256, default="", blank=True)
    STIC_BusInt_Suppliers = models.IntegerField(default="0")

    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class ShortTermInsurancePersonal(models.Model):   
    advisorId = models.IntegerField()
    formId = models.IntegerField()
    # form_type = models.IntegerField(default=1)
    clientIdNumber = models.CharField(max_length=256, default="", blank=True)
    
    STIP_Underwritten_By = models.CharField(max_length=256, default="", blank=True)
    STIP_Branch_Name = models.CharField(max_length=256, default="", blank=True)
    STIP_Branch_Number = models.CharField(max_length=256, default="", blank=True)
    STIP_Quotation_Number = models.CharField(max_length=256, default="", blank=True)
    STIP_Policy_Number = models.CharField(max_length=256, default="", blank=True)
    STIP_Inception_Date = models.CharField(max_length=256, default="", blank=True)
    
    STIP_Applicant_Surname = models.CharField(max_length=256, default="", blank=True)
    STIP_Applicant_Gender = models.IntegerField(default="0")
    STIP_Applicant_Initials = models.CharField(max_length=256, default="", blank=True)
    STIP_Applicant_Title = models.CharField(max_length=256, default="", blank=True)
    

    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class GapCover(models.Model):   
    advisorId = models.IntegerField()
    formId = models.IntegerField()
    # form_type = models.IntegerField(default=1)
    # clientIdNumber = models.CharField(max_length=256, default="", blank=True)
        
    GP_ClientName = models.CharField(max_length=256, default="", blank=True)
    GP_ClientIdNumber = models.CharField(max_length=256, default="", blank=True)
    GP_ClientAddress = models.CharField(max_length=256, default="", blank=True)
    GP_ClientEmail = models.CharField(max_length=256, default="", blank=True)
    GP_ClientPhoneNumber = models.CharField(max_length=256, default="", blank=True)
    GP_ClientMedicalAidName = models.CharField(max_length=256, default="", blank=True)
    GP_ClientInceptionDate = models.CharField(max_length=256, default="", blank=True)
    GP_Date = models.CharField(max_length=256, default="", blank=True)
    
    GP_Benefits = models.CharField(max_length=1000, default="", blank=True)
    GP_MedicalDependent = models.IntegerField(default=1)

    GP_MemberName1 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberRelationship1 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberAidPlan1 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberName2 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberRelationship2 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberAidPlan2 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberName3 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberRelationship3 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberAidPlan3 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberName4 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberRelationship4 = models.CharField(max_length=1000, default="", blank=True)
    GP_MemberAidPlan4 = models.CharField(max_length=1000, default="", blank=True)

    GP_Provider = models.CharField(max_length=1000, default="", blank=True)
    GP_Option = models.CharField(max_length=1000, default="", blank=True)
    GP_Motivation = models.CharField(max_length=1000, default="", blank=True)
    GP_TotalPremium = models.CharField(max_length=1000, default="", blank=True)
    GP_BrokerFee = models.CharField(max_length=1000, default="", blank=True)
    GP_Commission = models.CharField(max_length=1000, default="", blank=True)

    GP_CP_Rate = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_Rate = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_Overall = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_Overall = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_CoPayment_B = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_CoPayment_B = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_SubLimit_B = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_SubLimit_B = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_Cancer_B = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_Cancer_B = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_CancerD_B = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_CancerD_B = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_Other_B = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_Other_B = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_CasualB = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_CasualB = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_TraumaB = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_TraumaB = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_PreW_B = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_PreW_B = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_Med_SW_B = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_Med_SW_B = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_Accidental_DC_B = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_Accidental_DC_B = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_GenWait_P = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_GenWait_P = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_PreExist_P = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_PreExist_P = models.CharField(max_length=1000, default="", blank=True)
    GP_CP_Specific_P = models.CharField(max_length=1000, default="", blank=True)
    GP_NP_Specific_P = models.CharField(max_length=1000, default="", blank=True)

    GP_Exclusions = models.IntegerField(default=1)
    GP_Other_Exclusions = models.CharField(max_length=1000, default="", blank=True)
    GP_GeneralComments = models.CharField(max_length=1000, default="", blank=True)
    
    GP_FinanAdvisor_ProdRecomm = models.CharField(max_length=1000, default="", blank=True)
    GP_FinanAdvisor_Reasons = models.CharField(max_length=1000, default="", blank=True)
    GP_FinanAdvisor_Consequences = models.IntegerField(default=1)
    GP_FinanAdvisor_FeeCommission = models.IntegerField(default=1)
    GP_FinanAdvisor_OtherComments = models.IntegerField(default=1)
    GP_FinanAdvisor_Date = models.IntegerField(default=1)

    status = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)