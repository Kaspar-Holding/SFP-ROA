
from datetime import datetime, timezone
from rest_framework import serializers
from .models import AI_ProductTaken, AR_ProductTaken, AssuranceInvestment, AssuranceRisk, EB_Cover, EmployeeBenefits, IP_ProductTaken, InvestmentPlanning, RF_LinkedParty, RP_ProductTaken, RP_ProductTaken_BenDesc, Risk_BenDesc, RiskFactors, RiskPlanning, STIC_Sec_Fire, STIP_Loss, STIC_Loss, ShortTermInsuranceCommerical, ShortTermInsurancePersonal, UserAccount, Form, Fiduciary, GapCover
from .models import Medical, STIC_Sec_2, STIC_Sec_3, STIC_Sec_4, STIC_Sec_5, STIC_Sec_6, STIC_Sec_7, STIC_Sec_8, STIC_Sec_9, STIC_Sec_10, STIC_Sec_11, STIC_Sec_12, STIC_Sec_13, STIC_Sec_14, STIC_Sec_15, STIC_Sec_16, STIC_Sec_17, STIC_Sec_18, STIC_Sec_19, STIC_Sec_20, STIC_Sec_21
from .models import STIP_Sec_AddProp, STIP_Sec_Build, STIP_Sec_HC, STIP_Sec_LegalA, STIP_Sec_MotorC, STIP_Sec_PersonalLL, STIP_Sec_Trailer, STIP_Sec_Vehicle, STIP_Sec_WaterC
from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = '__all__'
        
class UserAccountsSerializers(serializers.ModelSerializer):
    class Meta():
        model = UserAccount
        fields = '__all__'


class FormSerializers(serializers.ModelSerializer):
    class Meta():
        model = Form
        fields = '__all__'
    

    def create(self, validated_data):
        return Form.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.clientName = validated_data.get('clientName', instance.clientName)
        instance.clientIdNumber = validated_data.get('clientIdNumber', instance.clientIdNumber)
        instance.clientAddress = validated_data.get('clientAddress', instance.clientAddress)
        instance.clientPhoneNumber = validated_data.get('clientPhoneNumber', instance.clientPhoneNumber)
        instance.clientEmail = validated_data.get('clientEmail', instance.clientEmail)
        instance.clientDateOfBirth = validated_data.get('clientDateOfBirth', instance.clientDateOfBirth)
        instance.clientLetterOfIntroduction = validated_data.get('clientLetterOfIntroduction', instance.clientLetterOfIntroduction)
        instance.clientLetterOfIntroductionReason = validated_data.get('clientLetterOfIntroductionReason', instance.clientLetterOfIntroductionReason)
        instance.clientLetterOfIntroductionAccess = validated_data.get('clientLetterOfIntroductionAccess', instance.clientLetterOfIntroductionAccess)
        instance.clientLetterOfIntroductionAccessReason = validated_data.get('clientLetterOfIntroductionAccessReason', instance.clientLetterOfIntroductionAccessReason)
        instance.clientFica = validated_data.get('clientFica', instance.clientFica)
        instance.clientFicaReason = validated_data.get('clientFicaReason', instance.clientFicaReason)
        instance.clientReplacement = validated_data.get('clientReplacement', instance.clientReplacement)
        instance.clientReplacementReason = validated_data.get('clientReplacementReason', instance.clientReplacementReason)
        instance.clientBackgroundInfo = validated_data.get('clientBackgroundInfo', instance.clientBackgroundInfo)
        

        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance

class FiduciarySerializers(serializers.ModelSerializer):
    class Meta():
        model = Fiduciary
        fields = '__all__'
    

    def create(self, validated_data):
        return Fiduciary.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)
        # instance.clientIdNumber = validated_data.get('clientIdNumber', instance.clientIdNumber)
        instance.fiduciaryWillInPlace = validated_data.get('fiduciaryWillInPlace', instance.fiduciaryWillInPlace)
        instance.fiduciaryExecutorDetails = validated_data.get('fiduciaryExecutorDetails', instance.fiduciaryExecutorDetails)
        instance.fiduciaryWillKeepingPlace = validated_data.get('fiduciaryWillKeepingPlace', instance.fiduciaryWillKeepingPlace)
        instance.fiduciaryWillUpdationDate = validated_data.get('fiduciaryWillUpdationDate', instance.fiduciaryWillUpdationDate)
        instance.fiduciaryConsequencesExplained = validated_data.get('fiduciaryConsequencesExplained', instance.fiduciaryConsequencesExplained)
        instance.fiduciaryClientInstructions = validated_data.get('fiduciaryClientInstructions', instance.fiduciaryClientInstructions)
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class InvestmentPlanningSerializers(serializers.ModelSerializer):
    class Meta():
        model = InvestmentPlanning
        fields = '__all__'
    

    def create(self, validated_data):
        return InvestmentPlanning.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)
        # instance.clientIdNumber = validated_data.get('clientIdNumber', instance.clientIdNumber)
        instance.IP_SourceOfIncome = validated_data.get('IP_SourceOfIncome', instance.IP_SourceOfIncome)
        instance.IP_OtherSourceOfIncome = validated_data.get('IP_OtherSourceOfIncome', instance.IP_OtherSourceOfIncome)    
        instance.IP_InvestmentTerm = validated_data.get('IP_InvestmentTerm', instance.IP_InvestmentTerm)    
        instance.IP_InvestmentTermDetails = validated_data.get('IP_InvestmentTermDetails', instance.IP_InvestmentTermDetails)    
        instance.IP_Liquidity = validated_data.get('IP_Liquidity', instance.IP_Liquidity)    
        instance.IP_LiquidityDetails = validated_data.get('IP_LiquidityDetails', instance.IP_LiquidityDetails)      
        instance.IP_Type = validated_data.get('IP_Type', instance.IP_Type)    
        instance.IP_TypeDetails = validated_data.get('IP_TypeDetails', instance.IP_TypeDetails)      
        instance.IP_PremiumType = validated_data.get('IP_PremiumType', instance.IP_PremiumType)    
        instance.IP_PremiumTypeDetails = validated_data.get('IP_PremiumTypeDetails', instance.IP_PremiumTypeDetails)      
        instance.IP_IncomeRequired = validated_data.get('IP_IncomeRequired', instance.IP_IncomeRequired)    
        instance.IP_IncomeRequiredDetails = validated_data.get('IP_IncomeRequiredDetails', instance.IP_IncomeRequiredDetails)      
        instance.IP_InvestmentStrategy = validated_data.get('IP_InvestmentStrategy', instance.IP_InvestmentStrategy)    
        instance.IP_InvestmentStrategyDetails = validated_data.get('IP_InvestmentStrategyDetails', instance.IP_InvestmentStrategyDetails)    
        instance.IP_ReturnRequired = validated_data.get('IP_ReturnRequired', instance.IP_ReturnRequired)    
        instance.IP_ReturnRequiredDetails = validated_data.get('IP_ReturnRequiredDetails', instance.IP_ReturnRequiredDetails)    
        instance.IP_RiskProfile = validated_data.get('IP_RiskProfile', instance.IP_RiskProfile)      
        instance.IP_RiskProfileDetails = validated_data.get('IP_RiskProfileDetails', instance.IP_RiskProfileDetails)      

        instance.IP_RecommendationSummary = validated_data.get('IP_RecommendationSummary', instance.IP_RecommendationSummary)    

        instance.IP_AltS_1 = validated_data.get('IP_AltS_1', instance.IP_AltS_1)    
        instance.IP_AltS_2 = validated_data.get('IP_AltS_2', instance.IP_AltS_2)    
        instance.IP_AltS_3 = validated_data.get('IP_AltS_3', instance.IP_AltS_3)    
        instance.updated_at = datetime.now(timezone.utc)

        
        instance.save()
        return instance

class RiskPlanningSerializers(serializers.ModelSerializer):
    class Meta():
        model = RiskPlanning
        fields = '__all__'
    

    def create(self, validated_data):
        return RiskPlanning.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)

        instance.RP_DC_LumpSumTotalNeed = validated_data.get('RP_DC_LumpSumTotalNeed', instance.RP_DC_LumpSumTotalNeed)
        instance.RP_DC_LumpSumExistingProvisions = validated_data.get('RP_DC_LumpSumExistingProvisions', instance.RP_DC_LumpSumExistingProvisions)
        instance.RP_DC_LumpSumExistingShortfallSurplus = validated_data.get('RP_DC_LumpSumExistingShortfallSurplus', instance.RP_DC_LumpSumExistingShortfallSurplus)
        instance.RP_DC_LumpSumInvestments = validated_data.get('RP_DC_LumpSumInvestments', instance.RP_DC_LumpSumInvestments)

        instance.RP_DC_IncomeTotalNeed = validated_data.get('RP_DC_IncomeTotalNeed', instance.RP_DC_IncomeTotalNeed)
        instance.RP_DC_IncomeExistingProvisions = validated_data.get('RP_DC_IncomeExistingProvisions', instance.RP_DC_IncomeExistingProvisions)
        instance.RP_DC_IncomeExistingShortfallSurplus = validated_data.get('RP_DC_IncomeExistingShortfallSurplus', instance.RP_DC_IncomeExistingShortfallSurplus)
        instance.RP_DC_IncomeInvestments = validated_data.get('RP_DC_IncomeInvestments', instance.RP_DC_IncomeInvestments)

        instance.RP_DC_FB_TotalNeed = validated_data.get('RP_DC_FB_TotalNeed', instance.RP_DC_FB_TotalNeed)
        instance.RP_DC_FB_ExistingProvisions = validated_data.get('RP_DC_FB_ExistingProvisions', instance.RP_DC_FB_ExistingProvisions)
        instance.RP_DC_FB_ExistingShortfallSurplus = validated_data.get('RP_DC_FB_ExistingShortfallSurplus', instance.RP_DC_FB_ExistingShortfallSurplus)
        instance.RP_DC_FB_Investments = validated_data.get('RP_DC_FB_Investments', instance.RP_DC_FB_Investments)

        instance.RP_DC_Other = validated_data.get('RP_DC_Other', instance.RP_DC_Other)
        instance.RP_DC_OtherTotalNeed = validated_data.get('RP_DC_OtherTotalNeed', instance.RP_DC_OtherTotalNeed)
        instance.RP_DC_OtherExistingProvisions = validated_data.get('RP_DC_OtherExistingProvisions', instance.RP_DC_OtherExistingProvisions)
        instance.RP_DC_OtherExistingShortfallSurplus = validated_data.get('RP_DC_OtherExistingShortfallSurplus', instance.RP_DC_OtherExistingShortfallSurplus)
        instance.RP_DC_OtherInvestments = validated_data.get('RP_DC_OtherInvestments', instance.RP_DC_OtherInvestments)

        instance.RP_DC_Comments = validated_data.get('RP_DC_Comments', instance.RP_DC_Comments)

        instance.RP_DiC_LumpSumTotalNeed = validated_data.get('RP_DiC_LumpSumTotalNeed', instance.RP_DiC_LumpSumTotalNeed)
        instance.RP_DiC_LumpSumExistingProvisions = validated_data.get('RP_DiC_LumpSumExistingProvisions', instance.RP_DiC_LumpSumExistingProvisions)
        instance.RP_DiC_LumpSumExistingShortfallSurplus = validated_data.get('RP_DiC_LumpSumExistingShortfallSurplus', instance.RP_DiC_LumpSumExistingShortfallSurplus)
        instance.RP_DiC_LumpSumInvestments = validated_data.get('RP_DiC_LumpSumInvestments', instance.RP_DiC_LumpSumInvestments)

        instance.RP_DiC_PI_TotalNeed = validated_data.get('RP_DiC_PI_TotalNeed', instance.RP_DiC_PI_TotalNeed)
        instance.RP_DiC_PI_ExistingProvisions = validated_data.get('RP_DiC_PI_ExistingProvisions', instance.RP_DiC_PI_ExistingProvisions)
        instance.RP_DiC_PI_ExistingShortfallSurplus = validated_data.get('RP_DiC_PI_ExistingShortfallSurplus', instance.RP_DiC_PI_ExistingShortfallSurplus)
        instance.RP_DiC_PI_Investments = validated_data.get('RP_DiC_PI_Investments', instance.RP_DiC_PI_Investments)

        instance.RP_DiC_TI_TotalNeed = validated_data.get('RP_DiC_TI_TotalNeed', instance.RP_DiC_TI_TotalNeed)
        instance.RP_DiC_TI_ExistingProvisions = validated_data.get('RP_DiC_TI_ExistingProvisions', instance.RP_DiC_TI_ExistingProvisions)
        instance.RP_DiC_TI_ExistingShortfallSurplus = validated_data.get('RP_DiC_TI_ExistingShortfallSurplus', instance.RP_DiC_TI_ExistingShortfallSurplus)
        instance.RP_DiC_TI_Investments = validated_data.get('RP_DiC_TI_Investments', instance.RP_DiC_TI_Investments)    

        instance.RP_DiC_SiB_TotalNeed = validated_data.get('RP_DiC_SiB_TotalNeed', instance.RP_DiC_SiB_TotalNeed)
        instance.RP_DiC_SiB_ExistingProvisions = validated_data.get('RP_DiC_SiB_ExistingProvisions', instance.RP_DiC_SiB_ExistingProvisions)
        instance.RP_DiC_SiB_ExistingShortfallSurplus = validated_data.get('RP_DiC_SiB_ExistingShortfallSurplus', instance.RP_DiC_SiB_ExistingShortfallSurplus)
        instance.RP_DiC_SiB_Investments = validated_data.get('RP_DiC_SiB_Investments', instance.RP_DiC_SiB_Investments)    

        instance.RP_DiC_Other1 = validated_data.get('RP_DiC_Other1', instance.RP_DiC_Other1)
        instance.RP_DiC_OtherTotalNeed1 = validated_data.get('RP_DiC_OtherTotalNeed1', instance.RP_DiC_OtherTotalNeed1)
        instance.RP_DiC_OtherExistingProvisions1 = validated_data.get('RP_DiC_OtherExistingProvisions1', instance.RP_DiC_OtherExistingProvisions1)
        instance.RP_DiC_OtherExistingShortfallSurplus1 = validated_data.get('RP_DiC_OtherExistingShortfallSurplus1', instance.RP_DiC_OtherExistingShortfallSurplus1)
        instance.RP_DiC_OtherInvestments1 = validated_data.get('RP_DiC_OtherInvestments1', instance.RP_DiC_OtherInvestments1) 

        instance.RP_DiC_Other2 = validated_data.get('RP_DiC_Other2', instance.RP_DiC_Other2)
        instance.RP_DiC_OtherTotalNeed2 = validated_data.get('RP_DiC_OtherTotalNeed2', instance.RP_DiC_OtherTotalNeed2)
        instance.RP_DiC_OtherExistingProvisions2 = validated_data.get('RP_DiC_OtherExistingProvisions2', instance.RP_DiC_OtherExistingProvisions2)
        instance.RP_DiC_OtherExistingShortfallSurplus2 = validated_data.get('RP_DiC_OtherExistingShortfallSurplus2', instance.RP_DiC_OtherExistingShortfallSurplus2)
        instance.RP_DiC_OtherInvestments2 = validated_data.get('RP_DiC_OtherInvestments2', instance.RP_DiC_OtherInvestments2) 

        instance.RP_DiC_Comments = validated_data.get('RP_DiC_Comments', instance.RP_DiC_Comments)

        instance.RP_DrC_LumpSumTotalNeed = validated_data.get('RP_DrC_LumpSumTotalNeed', instance.RP_DrC_LumpSumTotalNeed)
        instance.RP_DrC_LumpSumExistingProvisions = validated_data.get('RP_DrC_LumpSumExistingProvisions', instance.RP_DrC_LumpSumExistingProvisions)
        instance.RP_DrC_LumpSumExistingShortfallSurplus = validated_data.get('RP_DrC_LumpSumExistingShortfallSurplus', instance.RP_DrC_LumpSumExistingShortfallSurplus)
        instance.RP_DrC_LumpSumInvestments = validated_data.get('RP_DrC_LumpSumInvestments', instance.RP_DrC_LumpSumInvestments)

        instance.RP_DrC_IncomeTotalNeed = validated_data.get('RP_DrC_IncomeTotalNeed', instance.RP_DrC_IncomeTotalNeed)
        instance.RP_DrC_IncomeExistingProvisions = validated_data.get('RP_DrC_IncomeExistingProvisions', instance.RP_DrC_IncomeExistingProvisions)
        instance.RP_DrC_IncomeExistingShortfallSurplus = validated_data.get('RP_DrC_IncomeExistingShortfallSurplus', instance.RP_DrC_IncomeExistingShortfallSurplus)
        instance.RP_DrC_IncomeInvestments = validated_data.get('RP_DrC_IncomeInvestments', instance.RP_DrC_IncomeInvestments)

        instance.RP_DrC_Other1 = validated_data.get('RP_DrC_Other1', instance.RP_DrC_Other1)
        instance.RP_DrC_OtherTotalNeed1 = validated_data.get('RP_DrC_OtherTotalNeed1', instance.RP_DrC_OtherTotalNeed1)
        instance.RP_DrC_OtherExistingProvisions1 = validated_data.get('RP_DrC_OtherExistingProvisions1', instance.RP_DrC_OtherExistingProvisions1)
        instance.RP_DrC_OtherExistingShortfallSurplus1 = validated_data.get('RP_DrC_OtherExistingShortfallSurplus1', instance.RP_DrC_OtherExistingShortfallSurplus1)
        instance.RP_DrC_OtherInvestments1 = validated_data.get('RP_DrC_OtherInvestments1', instance.RP_DrC_OtherInvestments1) 

        instance.RP_DrC_Other2 = validated_data.get('RP_DrC_Other2', instance.RP_DrC_Other2)
        instance.RP_DrC_OtherTotalNeed2 = validated_data.get('RP_DrC_OtherTotalNeed2', instance.RP_DrC_OtherTotalNeed2)
        instance.RP_DrC_OtherExistingProvisions2 = validated_data.get('RP_DrC_OtherExistingProvisions2', instance.RP_DrC_OtherExistingProvisions2)
        instance.RP_DrC_OtherExistingShortfallSurplus2 = validated_data.get('RP_DrC_OtherExistingShortfallSurplus2', instance.RP_DrC_OtherExistingShortfallSurplus2)
        instance.RP_DrC_OtherInvestments2 = validated_data.get('RP_DrC_OtherInvestments2', instance.RP_DrC_OtherInvestments2) 

        instance.RP_DrC_Comments = validated_data.get('RP_DrC_Comments', instance.RP_DrC_Comments)

        instance.RP_LC_FinancialSolutions = validated_data.get('RP_LC_FinancialSolutions', instance.RP_LC_FinancialSolutions)
        instance.RP_DiC_FinancialSolutions = validated_data.get('RP_DiC_FinancialSolutions', instance.RP_DiC_FinancialSolutions)
        instance.RP_DrC_FinancialSolutions = validated_data.get('RP_DrC_FinancialSolutions', instance.RP_DrC_FinancialSolutions)

        instance.RP_AltS_1 = validated_data.get('RP_AltS_1', instance.RP_AltS_1)
        instance.RP_AltS_2 = validated_data.get('RP_AltS_2', instance.RP_AltS_2)
        instance.RP_AltS_3 = validated_data.get('RP_AltS_3', instance.RP_AltS_3)



        instance.updated_at = datetime.now(timezone.utc)

        
        instance.save()
        return instance

class AssuranceInvestmentSerializers(serializers.ModelSerializer):
    class Meta():
        model = AssuranceInvestment
        fields = '__all__'
    

    def create(self, validated_data):
        return AssuranceInvestment.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)

        instance.AI_Term = validated_data.get('AI_Term', instance.AI_Term)    
        instance.AI_TermDetails = validated_data.get('AI_TermDetails', instance.AI_TermDetails)  
        # instance.AI_Type = validated_data.get('AI_Type', instance.AI_Type)    
        # instance.AI_TypeDetails = validated_data.get('AI_TypeDetails', instance.AI_TypeDetails)    
        instance.AI_PremiumType = validated_data.get('AI_PremiumType', instance.AI_PremiumType)    
        instance.AI_PremiumTypeDetails = validated_data.get('AI_PremiumTypeDetails', instance.AI_PremiumTypeDetails)       
        instance.AI_Strategy = validated_data.get('AI_Strategy', instance.AI_Strategy)  
        instance.AI_StrategyDetails = validated_data.get('AI_StrategyDetails', instance.AI_StrategyDetails)    
        instance.AI_ReturnRequired = validated_data.get('AI_ReturnRequired', instance.AI_ReturnRequired)  
        instance.AI_ReturnRequiredDetails = validated_data.get('AI_ReturnRequiredDetails', instance.AI_ReturnRequiredDetails)    
        instance.AI_RiskProfile = validated_data.get('AI_RiskProfile', instance.AI_RiskProfile)    
        instance.AI_RiskProfileDetails = validated_data.get('AI_RiskProfileDetails', instance.AI_RiskProfileDetails)      

        instance.AI_TRP_TotalNeed = validated_data.get('AI_TRP_TotalNeed', instance.AI_TRP_TotalNeed)    
        instance.AI_TRP_ExistingProvisions = validated_data.get('AI_TRP_ExistingProvisions', instance.AI_TRP_ExistingProvisions)    
        instance.AI_TRP_ExistingShortfallSurplus = validated_data.get('AI_TRP_ExistingShortfallSurplus', instance.AI_TRP_ExistingShortfallSurplus)    
        instance.AI_TRP_ExistingInvestments = validated_data.get('AI_TRP_ExistingInvestments', instance.AI_TRP_ExistingInvestments)    

        instance.AI_RA_TotalNeed = validated_data.get('AI_RA_TotalNeed', instance.AI_RA_TotalNeed)    
        instance.AI_RA_ExistingProvisions = validated_data.get('AI_RA_ExistingProvisions', instance.AI_RA_ExistingProvisions)    
        instance.AI_RA_ExistingShortfallSurplus = validated_data.get('AI_RA_ExistingShortfallSurplus', instance.AI_RA_ExistingShortfallSurplus)    
        instance.AI_RA_ExistingInvestments = validated_data.get('AI_RA_ExistingInvestments', instance.AI_RA_ExistingInvestments)    

        instance.AI_CR_TotalNeed = validated_data.get('AI_CR_TotalNeed', instance.AI_CR_TotalNeed)    
        instance.AI_CR_ExistingProvisions = validated_data.get('AI_CR_ExistingProvisions', instance.AI_CR_ExistingProvisions)    
        instance.AI_CR_ExistingShortfallSurplus = validated_data.get('AI_CR_ExistingShortfallSurplus', instance.AI_CR_ExistingShortfallSurplus)    
        instance.AI_CR_ExistingInvestments = validated_data.get('AI_CR_ExistingInvestments', instance.AI_CR_ExistingInvestments)    

        instance.AI_Other = validated_data.get('AI_Other', instance.AI_Other)    
        instance.AI_Other_TotalNeed = validated_data.get('AI_Other_TotalNeed', instance.AI_Other_TotalNeed)    
        instance.AI_Other_ExistingProvisions = validated_data.get('AI_Other_ExistingProvisions', instance.AI_Other_ExistingProvisions)    
        instance.AI_Other_ExistingShortfallSurplus = validated_data.get('AI_Other_ExistingShortfallSurplus', instance.AI_Other_ExistingShortfallSurplus)    
        instance.AI_Other_ExistingInvestments = validated_data.get('AI_Other_ExistingInvestments', instance.AI_Other_ExistingInvestments)    

        instance.AI_FinancialSolutions = validated_data.get('AI_FinancialSolutions', instance.AI_FinancialSolutions)    
        instance.AI_AltS_1 = validated_data.get('AI_AltS_1', instance.AI_AltS_1)  
        instance.AI_AltS_2 = validated_data.get('AI_AltS_2', instance.AI_AltS_2)  
        instance.AI_AltS_3 = validated_data.get('AI_AltS_3', instance.AI_AltS_3)  

        # instance.AI_Pr_Taken = validated_data.get('AI_Pr_Taken', instance.AI_Pr_Taken)  
        # instance.AI_Pr_Provider = validated_data.get('AI_Pr_Provider', instance.AI_Pr_Provider)    
        # instance.AI_Pr_PolicyNumber = validated_data.get('AI_Pr_PolicyNumber', instance.AI_Pr_PolicyNumber)    
        # instance.AI_Pr_Name = validated_data.get('AI_Pr_Name', instance.AI_Pr_Name)    
        # instance.AI_Pr_Premium = validated_data.get('AI_Pr_Premium', instance.AI_Pr_Premium)    
        # instance.AI_Pr_PremiumFrequency = validated_data.get('AI_Pr_PremiumFrequency', instance.AI_Pr_PremiumFrequency) 
        # instance.AI_Pr_Escalation = validated_data.get('AI_Pr_Escalation', instance.AI_Pr_Escalation)    
        # instance.AI_Pr_EAC = validated_data.get('AI_Pr_EAC', instance.AI_Pr_EAC)    
        # instance.AI_Pr_ContractingParty = validated_data.get('AI_Pr_ContractingParty', instance.AI_Pr_ContractingParty)    
        # instance.AI_Pr_LivesAssured = validated_data.get('AI_Pr_LivesAssured', instance.AI_Pr_LivesAssured)    
        # instance.AI_Pr_PremiumPayer = validated_data.get('AI_Pr_PremiumPayer', instance.AI_Pr_PremiumPayer)    
        # instance.AI_Pr_Beneficiary = validated_data.get('AI_Pr_Beneficiary', instance.AI_Pr_Beneficiary)    
        # instance.AI_Pr_IniC = validated_data.get('AI_Pr_IniC', instance.AI_Pr_IniC)    
        # instance.AI_Pr_IniC_Percentage = validated_data.get('AI_Pr_IniC_Percentage', instance.AI_Pr_IniC_Percentage)    
        # instance.AI_Pr_OnC = validated_data.get('AI_Pr_OnC', instance.AI_Pr_OnC)    
        # instance.AI_Pr_OnC_Percentage = validated_data.get('AI_Pr_OnC_Percentage', instance.AI_Pr_OnC_Percentage)

        # instance.AI_Portfolio = validated_data.get('AI_Portfolio', instance.AI_Portfolio)
        
        # instance.AI_PF_1 = validated_data.get('AI_PF_1', instance.AI_PF_1)
        # instance.AI_PF_Percentage1 = validated_data.get('AI_PF_Percentage1', instance.AI_PF_Percentage1)
        # instance.AI_PF_Provided1 = validated_data.get('AI_PF_Provided1', instance.AI_PF_Provided1)
        # instance.AI_PF_Discussed1 = validated_data.get('AI_PF_Discussed1', instance.AI_PF_Discussed1)
        
        # instance.AI_PF_2 = validated_data.get('AI_PF_2', instance.AI_PF_2)
        # instance.AI_PF_Percentage2 = validated_data.get('AI_PF_Percentage2', instance.AI_PF_Percentage2)
        # instance.AI_PF_Provided2 = validated_data.get('AI_PF_Provided2', instance.AI_PF_Provided2)
        # instance.AI_PF_Discussed2 = validated_data.get('AI_PF_Discussed2', instance.AI_PF_Discussed2)
        
        # instance.AI_PF_3 = validated_data.get('AI_PF_3', instance.AI_PF_3)
        # instance.AI_PF_Percentage3 = validated_data.get('AI_PF_Percentage3', instance.AI_PF_Percentage3)
        # instance.AI_PF_Provided3 = validated_data.get('AI_PF_Provided3', instance.AI_PF_Provided3)
        # instance.AI_PF_Discussed3 = validated_data.get('AI_PF_Discussed3', instance.AI_PF_Discussed3)
        
        # instance.AI_PF_4 = validated_data.get('AI_PF_4', instance.AI_PF_4)
        # instance.AI_PF_Percentage4 = validated_data.get('AI_PF_Percentage4', instance.AI_PF_Percentage4)
        # instance.AI_PF_Provided4 = validated_data.get('AI_PF_Provided4', instance.AI_PF_Provided4)
        # instance.AI_PF_Discussed4 = validated_data.get('AI_PF_Discussed4', instance.AI_PF_Discussed4)
        
        # instance.AI_PF_5 = validated_data.get('AI_PF_5', instance.AI_PF_5)
        # instance.AI_PF_Percentage5 = validated_data.get('AI_PF_Percentage5', instance.AI_PF_Percentage5)
        # instance.AI_PF_Provided5 = validated_data.get('AI_PF_Provided5', instance.AI_PF_Provided5)
        # instance.AI_PF_Discussed5 = validated_data.get('AI_PF_Discussed5', instance.AI_PF_Discussed5)
        
        # instance.AI_PF_6 = validated_data.get('AI_PF_6', instance.AI_PF_6)
        # instance.AI_PF_Percentage6 = validated_data.get('AI_PF_Percentage6', instance.AI_PF_Percentage6)
        # instance.AI_PF_Provided6 = validated_data.get('AI_PF_Provided6', instance.AI_PF_Provided6)
        # instance.AI_PF_Discussed6 = validated_data.get('AI_PF_Discussed6', instance.AI_PF_Discussed6)
        
        # instance.AI_PF_7 = validated_data.get('AI_PF_7', instance.AI_PF_7)
        # instance.AI_PF_Percentage7 = validated_data.get('AI_PF_Percentage7', instance.AI_PF_Percentage7)
        # instance.AI_PF_Provided7 = validated_data.get('AI_PF_Provided7', instance.AI_PF_Provided7)
        # instance.AI_PF_Discussed7 = validated_data.get('AI_PF_Discussed7', instance.AI_PF_Discussed7)

        # instance.AI_PF_Reasons = validated_data.get('AI_PF_Reasons', instance.AI_PF_Reasons)
        # instance.AI_PF_MaterialAspects = validated_data.get('AI_PF_MaterialAspects', instance.AI_PF_MaterialAspects)
        # instance.AI_PF_Pr_Details = validated_data.get('AI_PF_Pr_Details', instance.AI_PF_Pr_Details)
        # instance.AI_PF_NominationOfBeneficiaries = validated_data.get('AI_PF_NominationOfBeneficiaries', instance.AI_PF_NominationOfBeneficiaries)

        # instance.AI_SourceOfFunds = validated_data.get('AI_SourceOfFunds', instance.AI_SourceOfFunds)
        # instance.AI_SourceOfFundsDetail = validated_data.get('AI_SourceOfFundsDetail', instance.AI_SourceOfFundsDetail)
        
        instance.updated_at = datetime.now(timezone.utc)

        
        instance.save()
        return instance

class AssuranceRiskSerializers(serializers.ModelSerializer):
    class Meta():
        model = AssuranceRisk
        fields = '__all__'
    

    def create(self, validated_data):
        return AssuranceRisk.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)

        instance.AR_BusinessTradeName = validated_data.get('AR_BusinessTradeName', instance.AR_BusinessTradeName)    
        instance.AR_BusinessRegisteredName = validated_data.get('AR_BusinessRegisteredName', instance.AR_BusinessRegisteredName)    
        instance.AR_BusinessAuthorisedPersons = validated_data.get('AR_BusinessAuthorisedPersons', instance.AR_BusinessAuthorisedPersons)    
        instance.AR_BusinessFinancialAdvisor = validated_data.get('AR_BusinessFinancialAdvisor', instance.AR_BusinessFinancialAdvisor)    
        instance.AR_BusinessAddress = validated_data.get('AR_BusinessAddress', instance.AR_BusinessAddress)    
        instance.AR_BusinessEmail = validated_data.get('AR_BusinessEmail', instance.AR_BusinessEmail)    
        instance.AR_BusinessPhoneNumber = validated_data.get('AR_BusinessPhoneNumber', instance.AR_BusinessPhoneNumber)    
        instance.AR_BusinessDate = validated_data.get('AR_BusinessDate', instance.AR_BusinessDate)    

        instance.AR_ComDisc_AuthorizedPerson = validated_data.get('AR_ComDisc_AuthorizedPerson', instance.AR_ComDisc_AuthorizedPerson)  
        instance.AR_ComDisc_AuthorizedPersonDetail = validated_data.get('AR_ComDisc_AuthorizedPersonDetail', instance.AR_ComDisc_AuthorizedPersonDetail)    
        instance.AR_ComDisc_Authority = validated_data.get('AR_ComDisc_Authority', instance.AR_ComDisc_Authority)  
        instance.AR_ComDisc_AuthorityDetail = validated_data.get('AR_ComDisc_AuthorityDetail', instance.AR_ComDisc_AuthorityDetail)    

        instance.AR_FICA = validated_data.get('AR_FICA', instance.AR_FICA)  
        instance.AR_FICADetail = validated_data.get('AR_FICADetail', instance.AR_FICADetail)    

        instance.AR_RepPrs_Taken = validated_data.get('AR_RepPrs_Taken', instance.AR_RepPrs_Taken)  
        instance.AR_RepPrs_TakenDetail = validated_data.get('AR_RepPrs_TakenDetail', instance.AR_RepPrs_TakenDetail)    
        instance.AR_RepPrs_Explained = validated_data.get('AR_RepPrs_Explained', instance.AR_RepPrs_Explained)  
        instance.AR_RepPrs_ExplainedDetail = validated_data.get('AR_RepPrs_ExplainedDetail', instance.AR_RepPrs_ExplainedDetail)    
        instance.AR_RepPrs_Cancelled = validated_data.get('AR_RepPrs_Cancelled', instance.AR_RepPrs_Cancelled)  
        instance.AR_RepPrs_CancelledDetail = validated_data.get('AR_RepPrs_CancelledDetail', instance.AR_RepPrs_CancelledDetail)   

        instance.AR_SourceOfFunds = validated_data.get('AR_SourceOfFunds', instance.AR_SourceOfFunds)  
        instance.AR_SourceOfFundsDetail = validated_data.get('AR_SourceOfFundsDetail', instance.AR_SourceOfFundsDetail)    
        
        instance.AR_ReplacementBackInfo = validated_data.get('AR_ReplacementBackInfo', instance.AR_ReplacementBackInfo)    

        instance.AR_BusA_BnS = validated_data.get('AR_BusA_BnS', instance.AR_BusA_BnS)   
        instance.AR_BusA_KeyP_Insurance = validated_data.get('AR_BusA_KeyP_Insurance', instance.AR_BusA_KeyP_Insurance)   
        instance.AR_BusA_ContingentLiability = validated_data.get('AR_BusA_ContingentLiability', instance.AR_BusA_ContingentLiability)   
        instance.AR_BusA_BusOvProt = validated_data.get('AR_BusA_BusOvProt', instance.AR_BusA_BusOvProt)   
        instance.AR_BusA_CLARedm = validated_data.get('AR_BusA_CLARedm', instance.AR_BusA_CLARedm)   
        instance.AR_BusA_DebitLoanRedemption = validated_data.get('AR_BusA_DebitLoanRedemption', instance.AR_BusA_DebitLoanRedemption)   
        instance.AR_BusA_FundingOfFutureExpenses = validated_data.get('AR_BusA_FundingOfFutureExpenses', instance.AR_BusA_FundingOfFutureExpenses)   
        instance.AR_BusA_FundingOfDeferredGratuities = validated_data.get('AR_BusA_FundingOfDeferredGratuities', instance.AR_BusA_FundingOfDeferredGratuities)   
        instance.AR_BusA_Details = validated_data.get('AR_BusA_Details', instance.AR_BusA_Details)     

        instance.AR_BnS_DC_TotalNeed = validated_data.get('AR_BnS_DC_TotalNeed', instance.AR_BnS_DC_TotalNeed)    
        instance.AR_BnS_DC_Provisions = validated_data.get('AR_BnS_DC_Provisions', instance.AR_BnS_DC_Provisions)    
        instance.AR_BnS_DC_ShortfallSurplus = validated_data.get('AR_BnS_DC_ShortfallSurplus', instance.AR_BnS_DC_ShortfallSurplus)    
        instance.AR_BnS_DC_Investments = validated_data.get('AR_BnS_DC_Investments', instance.AR_BnS_DC_Investments)    
            
        instance.AR_BnS_DiC_TotalNeed = validated_data.get('AR_BnS_DiC_TotalNeed', instance.AR_BnS_DiC_TotalNeed)    
        instance.AR_BnS_DiC_ExistingProvisions = validated_data.get('AR_BnS_DiC_ExistingProvisions', instance.AR_BnS_DiC_ExistingProvisions)    
        instance.AR_BnS_DiC_ExistingShortfallSurplus = validated_data.get('AR_BnS_DiC_ExistingShortfallSurplus', instance.AR_BnS_DiC_ExistingShortfallSurplus)    
        instance.AR_BnS_DiC_Investments = validated_data.get('AR_BnS_DiC_Investments', instance.AR_BnS_DiC_Investments)       
            
        instance.AR_BnS_Other = validated_data.get('AR_BnS_Other', instance.AR_BnS_Other)    
        instance.AR_BnS_OtherTotalNeed = validated_data.get('AR_BnS_OtherTotalNeed', instance.AR_BnS_OtherTotalNeed)    
        instance.AR_BnS_OtherExistingProvisions = validated_data.get('AR_BnS_OtherExistingProvisions', instance.AR_BnS_OtherExistingProvisions)    
        instance.AR_BnS_OtherExistingShortfallSurplus = validated_data.get('AR_BnS_OtherExistingShortfallSurplus', instance.AR_BnS_OtherExistingShortfallSurplus)    
        instance.AR_BnS_OtherInvestments = validated_data.get('AR_BnS_OtherInvestments', instance.AR_BnS_OtherInvestments)       

        instance.AR_BnS_Comments = validated_data.get('AR_BnS_Comments', instance.AR_BnS_Comments)    

        instance.AR_KeyP_DC_TotalNeed = validated_data.get('AR_KeyP_DC_TotalNeed', instance.AR_KeyP_DC_TotalNeed)    
        instance.AR_KeyP_DC_ExistingProvisions = validated_data.get('AR_KeyP_DC_ExistingProvisions', instance.AR_KeyP_DC_ExistingProvisions)    
        instance.AR_KeyP_DC_ExistingShortfallSurplus = validated_data.get('AR_KeyP_DC_ExistingShortfallSurplus', instance.AR_KeyP_DC_ExistingShortfallSurplus)    
        instance.AR_KeyP_DC_Investments = validated_data.get('AR_KeyP_DC_Investments', instance.AR_KeyP_DC_Investments)                

        instance.AR_KeyP_DiC_TotalNeed = validated_data.get('AR_KeyP_DiC_TotalNeed', instance.AR_KeyP_DiC_TotalNeed)    
        instance.AR_KeyP_DiC_ExistingProvisions = validated_data.get('AR_KeyP_DiC_ExistingProvisions', instance.AR_KeyP_DiC_ExistingProvisions)    
        instance.AR_KeyP_DiC_ExistingShortfallSurplus = validated_data.get('AR_KeyP_DiC_ExistingShortfallSurplus', instance.AR_KeyP_DiC_ExistingShortfallSurplus)    
        instance.AR_KeyP_DiC_Investments = validated_data.get('AR_KeyP_DiC_Investments', instance.AR_KeyP_DiC_Investments)    
            
        instance.AR_KeyP_TI_CoverTotalNeed = validated_data.get('AR_KeyP_TI_CoverTotalNeed', instance.AR_KeyP_TI_CoverTotalNeed)    
        instance.AR_KeyP_TI_CoverExistingProvisions = validated_data.get('AR_KeyP_TI_CoverExistingProvisions', instance.AR_KeyP_TI_CoverExistingProvisions)    
        instance.AR_KeyP_TI_CoverExistingShortfallSurplus = validated_data.get('AR_KeyP_TI_CoverExistingShortfallSurplus', instance.AR_KeyP_TI_CoverExistingShortfallSurplus)    
        instance.AR_KeyP_TI_CoverInvestments = validated_data.get('AR_KeyP_TI_CoverInvestments', instance.AR_KeyP_TI_CoverInvestments)    
            
        instance.AR_KeyP_PI_CoverTotalNeed = validated_data.get('AR_KeyP_PI_CoverTotalNeed', instance.AR_KeyP_PI_CoverTotalNeed)    
        instance.AR_KeyP_PI_CoverExistingProvisions = validated_data.get('AR_KeyP_PI_CoverExistingProvisions', instance.AR_KeyP_PI_CoverExistingProvisions)    
        instance.AR_KeyP_PI_CoverExistingShortfallSurplus = validated_data.get('AR_KeyP_PI_CoverExistingShortfallSurplus', instance.AR_KeyP_PI_CoverExistingShortfallSurplus)    
        instance.AR_KeyP_PI_CoverInvestments = validated_data.get('AR_KeyP_PI_CoverInvestments', instance.AR_KeyP_PI_CoverInvestments)    
            
        instance.AR_KeyP_Other = validated_data.get('AR_KeyP_Other', instance.AR_KeyP_OtherTotalNeed)    
        instance.AR_KeyP_OtherTotalNeed = validated_data.get('AR_KeyP_OtherTotalNeed', instance.AR_KeyP_OtherTotalNeed)    
        instance.AR_KeyP_OtherExistingProvisions = validated_data.get('AR_KeyP_OtherExistingProvisions', instance.AR_KeyP_OtherExistingProvisions)    
        instance.AR_KeyP_OtherExistingShortfallSurplus = validated_data.get('AR_KeyP_OtherExistingShortfallSurplus', instance.AR_KeyP_OtherExistingShortfallSurplus)    
        instance.AR_KeyP_OtherInvestments = validated_data.get('AR_KeyP_OtherInvestments', instance.AR_KeyP_OtherInvestments)  
            
        instance.AR_KeyP_Comments = validated_data.get('AR_KeyP_Comments', instance.AR_KeyP_Comments)        

        instance.AR_SureNLia_DC_TotalNeed = validated_data.get('AR_SureNLia_DC_TotalNeed', instance.AR_SureNLia_DC_TotalNeed)    
        instance.AR_SureNLia_DC_Provisions = validated_data.get('AR_SureNLia_DC_Provisions', instance.AR_SureNLia_DC_Provisions)    
        instance.AR_SureNLia_DC_ShortfallSurplus = validated_data.get('AR_SureNLia_DC_ShortfallSurplus', instance.AR_SureNLia_DC_ShortfallSurplus)    
        instance.AR_SureNLia_DC_Investments = validated_data.get('AR_SureNLia_DC_Investments', instance.AR_SureNLia_DC_Investments)                

        instance.AR_SureNLia_DiC_TotalNeed = validated_data.get('AR_SureNLia_DiC_TotalNeed', instance.AR_SureNLia_DiC_TotalNeed)    
        instance.AR_SureNLia_DiC_Provisions = validated_data.get('AR_SureNLia_DiC_Provisions', instance.AR_SureNLia_DiC_Provisions)    
        instance.AR_SureNLia_DiC_ShortfallSurplus = validated_data.get('AR_SureNLia_DiC_ShortfallSurplus', instance.AR_SureNLia_DiC_ShortfallSurplus)    
        instance.AR_SureNLia_DiC_Investments = validated_data.get('AR_SureNLia_DiC_Investments', instance.AR_SureNLia_DiC_Investments)    

        instance.AR_SureNLia_Other = validated_data.get('AR_SureNLia_Other', instance.AR_SureNLia_OtherTotalNeed)    
        instance.AR_SureNLia_OtherTotalNeed = validated_data.get('AR_SureNLia_OtherTotalNeed', instance.AR_SureNLia_OtherTotalNeed)    
        instance.AR_SureNLia_OtherProvisions = validated_data.get('AR_SureNLia_OtherProvisions', instance.AR_SureNLia_OtherProvisions)    
        instance.AR_SureNLia_OtherShortfallSurplus = validated_data.get('AR_SureNLia_OtherShortfallSurplus', instance.AR_SureNLia_OtherShortfallSurplus)    
        instance.AR_SureNLia_OtherInvestments = validated_data.get('AR_SureNLia_OtherInvestments', instance.AR_SureNLia_OtherInvestments)    

        instance.AR_SureNLia_Comments = validated_data.get('AR_SureNLia_Comments', instance.AR_SureNLia_Comments)    

        instance.AR_BusOvProt_TI_CoverTotalNeed = validated_data.get('AR_BusOvProt_TI_CoverTotalNeed', instance.AR_BusOvProt_TI_CoverTotalNeed)    
        instance.AR_BusOvProt_TI_CoverExistingProvisions = validated_data.get('AR_BusOvProt_TI_CoverExistingProvisions', instance.AR_BusOvProt_TI_CoverExistingProvisions)    
        instance.AR_BusOvProt_TI_CoverExistingShortfallSurplus = validated_data.get('AR_BusOvProt_TI_CoverExistingShortfallSurplus', instance.AR_BusOvProt_TI_CoverExistingShortfallSurplus)    
        instance.AR_BusOvProt_TI_CoverInvestments = validated_data.get('AR_BusOvProt_TI_CoverInvestments', instance.AR_BusOvProt_TI_CoverInvestments)                    

        instance.AR_BusOvProt_PI_CoverTotalNeed = validated_data.get('AR_BusOvProt_PI_CoverTotalNeed', instance.AR_BusOvProt_PI_CoverTotalNeed)    
        instance.AR_BusOvProt_PI_CoverExistingProvisions = validated_data.get('AR_BusOvProt_PI_CoverExistingProvisions', instance.AR_BusOvProt_PI_CoverExistingProvisions)    
        instance.AR_BusOvProt_PI_CoverExistingShortfallSurplus = validated_data.get('AR_BusOvProt_PI_CoverExistingShortfallSurplus', instance.AR_BusOvProt_PI_CoverExistingShortfallSurplus)    
        instance.AR_BusOvProt_PI_CoverInvestments = validated_data.get('AR_BusOvProt_PI_CoverInvestments', instance.AR_BusOvProt_PI_CoverInvestments)        
            
        instance.AR_BusOvProt_Other = validated_data.get('AR_BusOvProt_Other', instance.AR_BusOvProt_Other)    
        instance.AR_BusOvProt_OtherTotalNeed = validated_data.get('AR_BusOvProt_OtherTotalNeed', instance.AR_BusOvProt_OtherTotalNeed)    
        instance.AR_BusOvProt_OtherExistingProvisions = validated_data.get('AR_BusOvProt_OtherExistingProvisions', instance.AR_BusOvProt_OtherExistingProvisions)    
        instance.AR_BusOvProt_OtherExistingShortfallSurplus = validated_data.get('AR_BusOvProt_OtherExistingShortfallSurplus', instance.AR_BusOvProt_OtherExistingShortfallSurplus)    
        instance.AR_BusOvProt_OtherInvestments = validated_data.get('AR_BusOvProt_OtherInvestments', instance.AR_BusOvProt_OtherInvestments)        
            
        instance.AR_BusOvProt_Comments = validated_data.get('AR_BusOvProt_Comments', instance.AR_BusOvProt_Comments)  

        instance.AR_CLARedm_DC_TotalNeed = validated_data.get('AR_CLARedm_DC_TotalNeed', instance.AR_CLARedm_DC_TotalNeed)    
        instance.AR_CLARedm_DC_ExistingProvisions = validated_data.get('AR_CLARedm_DC_ExistingProvisions', instance.AR_CLARedm_DC_ExistingProvisions)    
        instance.AR_CLARedm_DC_ExistingShortfallSurplus = validated_data.get('AR_CLARedm_DC_ExistingShortfallSurplus', instance.AR_CLARedm_DC_ExistingShortfallSurplus)    
        instance.AR_CLARedm_DC_Investments = validated_data.get('AR_CLARedm_DC_Investments', instance.AR_CLARedm_DC_Investments)    
        
        instance.AR_CLARedm_DiC_TotalNeed = validated_data.get('AR_CLARedm_DiC_TotalNeed', instance.AR_CLARedm_DiC_TotalNeed)    

        instance.AR_CLARedm_DiC_ExistingProvisions = validated_data.get('AR_CLARedm_DiC_ExistingProvisions', instance.AR_CLARedm_DiC_ExistingProvisions)    
        instance.AR_CLARedm_DiC_ExistingShortfallSurplus = validated_data.get('AR_CLARedm_DiC_ExistingShortfallSurplus', instance.AR_CLARedm_DiC_ExistingShortfallSurplus)    
        instance.AR_CLARedm_DiC_Investments = validated_data.get('AR_CLARedm_DiC_Investments', instance.AR_CLARedm_DiC_Investments)    
            
        instance.AR_CLARedm_Other = validated_data.get('AR_CLARedm_Other', instance.AR_CLARedm_Other)    
        instance.AR_CLARedm_OtherTotalNeed = validated_data.get('AR_CLARedm_OtherTotalNeed', instance.AR_CLARedm_OtherTotalNeed)    
        instance.AR_CLARedm_OtherExistingProvisions = validated_data.get('AR_CLARedm_OtherExistingProvisions', instance.AR_CLARedm_OtherExistingProvisions)    
        instance.AR_CLARedm_OtherExistingShortfallSurplus = validated_data.get('AR_CLARedm_OtherExistingShortfallSurplus', instance.AR_CLARedm_OtherExistingShortfallSurplus)    
        instance.AR_CLARedm_OtherInvestments = validated_data.get('AR_CLARedm_OtherInvestments', instance.AR_CLARedm_OtherInvestments)    
            
        # instance.AR_CLARedm_Comments = validated_data.get('AR_CLARedm_Comments', instance.AR_CLARedm_Comments)   

        instance.AR_DLARedm_DC_TotalNeed = validated_data.get('AR_DLARedm_DC_TotalNeed', instance.AR_DLARedm_DC_TotalNeed)    
        instance.AR_DLARedm_DC_ExistingProvisions = validated_data.get('AR_DLARedm_DC_ExistingProvisions', instance.AR_DLARedm_DC_ExistingProvisions)    
        instance.AR_DLARedm_DC_ExistingShortfallSurplus = validated_data.get('AR_DLARedm_DC_ExistingShortfallSurplus', instance.AR_DLARedm_DC_ExistingShortfallSurplus)    
        instance.AR_DLARedm_DC_Investments = validated_data.get('AR_DLARedm_DC_Investments', instance.AR_DLARedm_DC_Investments)    
        
        instance.AR_DLARedm_DiC_TotalNeed = validated_data.get('AR_DLARedm_DiC_TotalNeed', instance.AR_DLARedm_DiC_TotalNeed)    
        instance.AR_DLARedm_DiC_ExistingProvisions = validated_data.get('AR_DLARedm_DiC_ExistingProvisions', instance.AR_DLARedm_DiC_ExistingProvisions)    
        instance.AR_DLARedm_DiC_ExistingShortfallSurplus = validated_data.get('AR_DLARedm_DiC_ExistingShortfallSurplus', instance.AR_DLARedm_DiC_ExistingShortfallSurplus)    
        instance.AR_DLARedm_DiC_Investments = validated_data.get('AR_DLARedm_DiC_Investments', instance.AR_DLARedm_DiC_Investments)    
            
        instance.AR_DLARedm_Other = validated_data.get('AR_DLARedm_Other', instance.AR_DLARedm_Other)    
        instance.AR_DLARedm_OtherTotalNeed = validated_data.get('AR_DLARedm_OtherTotalNeed', instance.AR_DLARedm_OtherTotalNeed)    
        instance.AR_DLARedm_OtherExistingProvisions = validated_data.get('AR_DLARedm_OtherExistingProvisions', instance.AR_DLARedm_OtherExistingProvisions)    
        instance.AR_DLARedm_OtherExistingShortfallSurplus = validated_data.get('AR_DLARedm_OtherExistingShortfallSurplus', instance.AR_DLARedm_OtherExistingShortfallSurplus)    
        instance.AR_DLARedm_OtherInvestments = validated_data.get('AR_DLARedm_OtherInvestments', instance.AR_DLARedm_OtherInvestments)    
            
        # instance.AR_DLARedm_Comments = validated_data.get('AR_DLARedm_Comments', instance.AR_DLARedm_Comments)   
            
        instance.AR_LifeCoverFinancialSolutions = validated_data.get('AR_LifeCoverFinancialSolutions', instance.AR_LifeCoverFinancialSolutions)    
        instance.AR_DiC_FinancialSolutions = validated_data.get('AR_DiC_FinancialSolutions', instance.AR_DiC_FinancialSolutions)   

        instance.AR_AltS_1 = validated_data.get('AR_AltS_1', instance.AR_AltS_1)    
        instance.AR_AltS_2 = validated_data.get('AR_AltS_2', instance.AR_AltS_2)    
        instance.AR_AltS_3 = validated_data.get('AR_AltS_3', instance.AR_AltS_3)    

        # instance.AR_ProductProvider = validated_data.get('AR_ProductProvider', instance.AR_ProductProvider)    
        # instance.AR_PolicyNumber = validated_data.get('AR_PolicyNumber', instance.AR_PolicyNumber)    
        # instance.AR_ProductName = validated_data.get('AR_ProductName', instance.AR_ProductName)    
        # instance.AR_ProductPremium = validated_data.get('AR_ProductPremium', instance.AR_ProductPremium)    
        # instance.AR_ProductPremiumFrequency = validated_data.get('AR_ProductPremiumFrequency', instance.AR_ProductPremiumFrequency)
        # instance.AR_ProductPattern = validated_data.get('AR_ProductPattern', instance.AR_ProductPattern)    
        # instance.AR_ProductEscalation = validated_data.get('AR_ProductEscalation', instance.AR_ProductEscalation)    
        # instance.AR_ProductContractingParty = validated_data.get('AR_ProductContractingParty', instance.AR_ProductContractingParty)    
        # instance.AR_ProductLivesAssured = validated_data.get('AR_ProductLivesAssured', instance.AR_ProductLivesAssured)    
        # instance.AR_ProductPremiumPayer = validated_data.get('AR_ProductPremiumPayer', instance.AR_ProductPremiumPayer)    
        # instance.AR_Product1stYearCommission = validated_data.get('AR_Product1stYearCommission', instance.AR_Product1stYearCommission)    
        # instance.AR_Product2ndYearCommission = validated_data.get('AR_Product2ndYearCommission', instance.AR_Product2ndYearCommission)    
        # # instance.AR_ProductOngoingFees = validated_data.get('AR_ProductOngoingFees', instance.AR_ProductOngoingFees)    
        # # instance.AR_ProductOngoingFeesFrequency = validated_data.get('AR_ProductOngoingFeesFrequency', instance.AR_ProductOngoingFeesFrequency)    
            
        # instance.AR_BenDesc_1 = validated_data.get('AR_BenDesc_1', instance.AR_BenDesc_1)
        # instance.AR_BenDesc_CoverAmount1 = validated_data.get('AR_BenDesc_CoverAmount1', instance.AR_BenDesc_CoverAmount1)
        # instance.AR_BenDesc_2 = validated_data.get('AR_BenDesc_2', instance.AR_BenDesc_2)
        # instance.AR_BenDesc_CoverAmount2 = validated_data.get('AR_BenDesc_CoverAmount2', instance.AR_BenDesc_CoverAmount2)
        # instance.AR_BenDesc_3 = validated_data.get('AR_BenDesc_3', instance.AR_BenDesc_3)
        # instance.AR_BenDesc_CoverAmount3 = validated_data.get('AR_BenDesc_CoverAmount3', instance.AR_BenDesc_CoverAmount3)
        # # instance.AR_BenDesc_4 = validated_data.get('AR_BenDesc_4', instance.AR_BenDesc_4)
        # # instance.AR_BenDesc_CoverAmount4 = validated_data.get('AR_BenDesc_CoverAmount4', instance.AR_BenDesc_CoverAmount4)
        # # instance.AR_BenDesc_5 = validated_data.get('AR_BenDesc_5', instance.AR_BenDesc_5)
        # # instance.AR_BenDesc_CoverAmount5 = validated_data.get('AR_BenDesc_CoverAmount5', instance.AR_BenDesc_CoverAmount5)
        # # instance.AR_BenDesc_6 = validated_data.get('AR_BenDesc_6', instance.AR_BenDesc_6)
        # # instance.AR_BenDesc_CoverAmount6 = validated_data.get('AR_BenDesc_CoverAmount6', instance.AR_BenDesc_CoverAmount6)
        # # instance.AR_BenDesc_7 = validated_data.get('AR_BenDesc_7', instance.AR_BenDesc_7)
        # # instance.AR_BenDesc_CoverAmount7 = validated_data.get('AR_BenDesc_CoverAmount7', instance.AR_BenDesc_CoverAmount7)
            
        # instance.AR_ProductReasons = validated_data.get('AR_ProductReasons', instance.AR_ProductReasons)
        # instance.AR_ProductMaterialAspects = validated_data.get('AR_ProductMaterialAspects', instance.AR_ProductMaterialAspects)
        # instance.AR_ProductDetails = validated_data.get('AR_ProductDetails', instance.AR_ProductDetails)
        # instance.AR_ProductBriefSummary = validated_data.get('AR_ProductBriefSummary', instance.AR_ProductBriefSummary)
        # instance.AR_Cessionaries = validated_data.get('AR_Cessionaries', instance.AR_Cessionaries)
        # instance.AR_InformationExplained = validated_data.get('AR_InformationExplained', instance.AR_InformationExplained)

        
        instance.updated_at = datetime.now(timezone.utc)

        
        instance.save()
        return instance

class EmployeeBenefitsSerializers(serializers.ModelSerializer):
    class Meta():
        model = EmployeeBenefits
        fields = '__all__'
    

    def create(self, validated_data):
        return EmployeeBenefits.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)
        
        instance.EB_ClientName = validated_data.get('EB_ClientName', instance.EB_ClientName)
        instance.EB_ClientIdNumber = validated_data.get('EB_ClientIdNumber', instance.EB_ClientIdNumber)
        instance.EB_ClientAddress = validated_data.get('EB_ClientAddress', instance.EB_ClientAddress)
        instance.EB_ClientPhoneNumber = validated_data.get('EB_ClientPhoneNumber', instance.EB_ClientPhoneNumber)
        instance.EB_ClientCellNumber = validated_data.get('EB_ClientCellNumber', instance.EB_ClientCellNumber)
        instance.EB_ClientEmail = validated_data.get('EB_ClientEmail', instance.EB_ClientEmail)
        instance.EB_ClientDate = validated_data.get('EB_ClientDate', instance.EB_ClientDate)
        instance.EB_ClientFinancialAdvisor = validated_data.get('EB_ClientFinancialAdvisor', instance.EB_ClientFinancialAdvisor)
        instance.EB_ClientFeeDetails = validated_data.get('EB_ClientFeeDetails', instance.EB_ClientFeeDetails)

        instance.EB_BusinessName = validated_data.get('EB_BusinessName', instance.EB_BusinessName)
        instance.EB_BusinessAddress = validated_data.get('EB_BusinessAddress', instance.EB_BusinessAddress)
        instance.EB_BusinessContactPerson = validated_data.get('EB_BusinessContactPerson', instance.EB_BusinessContactPerson)
        instance.EB_BusinessPhoneNumber = validated_data.get('EB_BusinessPhoneNumber', instance.EB_BusinessPhoneNumber)
        instance.EB_BusinessCellNumber = validated_data.get('EB_BusinessCellNumber', instance.EB_BusinessCellNumber)
        instance.EB_BusinessEmail = validated_data.get('EB_BusinessEmail', instance.EB_BusinessEmail)
        instance.EB_BusinessNature = validated_data.get('EB_BusinessNature', instance.EB_BusinessNature)
        instance.EB_BusinessUnion = validated_data.get('EB_BusinessUnion', instance.EB_BusinessUnion)
        instance.EB_BusinessDetails = validated_data.get('EB_BusinessDetails', instance.EB_BusinessDetails)
        instance.EB_BusinessNumberOfEmployees = validated_data.get('EB_BusinessNumberOfEmployees', instance.EB_BusinessNumberOfEmployees)
        instance.EB_BusinessNumberOfEligibleEmployees = validated_data.get('EB_BusinessNumberOfEligibleEmployees', instance.EB_BusinessNumberOfEligibleEmployees)
        instance.EB_BusinessNumberOfExcludedCategories = validated_data.get('EB_BusinessNumberOfExcludedCategories', instance.EB_BusinessNumberOfExcludedCategories)

        instance.EB_BusEx_FundsName = validated_data.get('EB_BusEx_FundsName', instance.EB_BusEx_FundsName)
        instance.EB_BusEx_FundsAdmin = validated_data.get('EB_BusEx_FundsAdmin', instance.EB_BusEx_FundsAdmin)
        instance.EB_BusEx_FundsCurrentValue = validated_data.get('EB_BusEx_FundsCurrentValue', instance.EB_BusEx_FundsCurrentValue)
        instance.EB_BusEx_FundsActiveMembers = validated_data.get('EB_BusEx_FundsActiveMembers', instance.EB_BusEx_FundsActiveMembers)
        instance.EB_BusEx_FundsFullyPaidMembers = validated_data.get('EB_BusEx_FundsFullyPaidMembers', instance.EB_BusEx_FundsFullyPaidMembers)
        instance.EB_BusEx_FundsFullyReasonForChange = validated_data.get('EB_BusEx_FundsFullyReasonForChange', instance.EB_BusEx_FundsFullyReasonForChange)

        instance.EB_BusB_CoverType = validated_data.get('EB_BusB_CoverType', instance.EB_BusB_CoverType)
        instance.EB_BusB_Cover = validated_data.get('EB_BusB_Cover', instance.EB_BusB_Cover)
        instance.EB_BusB_CoverDetails = validated_data.get('EB_BusB_CoverDetails', instance.EB_BusB_CoverDetails)

        instance.EB_BusEmp_Retire_In5Years = validated_data.get('EB_BusEmp_Retire_In5Years', instance.EB_BusEmp_Retire_In5Years)
        instance.EB_BusEmp_Retire_In5YearsPercentage = validated_data.get('EB_BusEmp_Retire_In5YearsPercentage', instance.EB_BusEmp_Retire_In5YearsPercentage)
        instance.EB_BusEmp_Fin_Illiterate = validated_data.get('EB_BusEmp_Fin_Illiterate', instance.EB_BusEmp_Fin_Illiterate)
        instance.EB_BusEmp_Fin_IlliteratePercentage = validated_data.get('EB_BusEmp_Fin_IlliteratePercentage', instance.EB_BusEmp_Fin_IlliteratePercentage)
        instance.EB_BusEmp_Fin_Sophisticated = validated_data.get('EB_BusEmp_Fin_Sophisticated', instance.EB_BusEmp_Fin_Sophisticated)
        instance.EB_BusEmp_Fin_SophisticatedPercentage = validated_data.get('EB_BusEmp_Fin_SophisticatedPercentage', instance.EB_BusEmp_Fin_SophisticatedPercentage)
        instance.EB_BusHS_TurnOver = validated_data.get('EB_BusHS_TurnOver', instance.EB_BusHS_TurnOver)
        instance.EB_BusHS_TurnOverPercentage = validated_data.get('EB_BusHS_TurnOverPercentage', instance.EB_BusHS_TurnOverPercentage)
        instance.EB_BusI_Choice = validated_data.get('EB_BusI_Choice', instance.EB_BusI_Choice)
        instance.EB_BusI_ChoicePercentage = validated_data.get('EB_BusI_ChoicePercentage', instance.EB_BusI_ChoicePercentage)
        instance.EB_BusinessItP = validated_data.get('EB_BusinessItP', instance.EB_BusinessItP)
        instance.EB_BusinessItP_Percentage = validated_data.get('EB_BusinessItP_Percentage', instance.EB_BusinessItP_Percentage)
        
        instance.EB_BusEmp_AdditionalComments = validated_data.get('EB_BusEmp_AdditionalComments', instance.EB_BusEmp_AdditionalComments)

        instance.EB_BusRB_Category1 = validated_data.get('EB_BusRB_Category1', instance.EB_BusRB_Category1)
        instance.EB_BusRB_Category2 = validated_data.get('EB_BusRB_Category2', instance.EB_BusRB_Category2)
        instance.EB_BusRB_Category3 = validated_data.get('EB_BusRB_Category3', instance.EB_BusRB_Category3)
        instance.EB_BusRB_Category4 = validated_data.get('EB_BusRB_Category4', instance.EB_BusRB_Category4)

        instance.EB_BusRB_MemContrib_Category1 = validated_data.get('EB_BusRB_MemContrib_Category1', instance.EB_BusRB_MemContrib_Category1)
        instance.EB_BusRB_MemContrib_Category2 = validated_data.get('EB_BusRB_MemContrib_Category2', instance.EB_BusRB_MemContrib_Category2)
        instance.EB_BusRB_MemContrib_Category3 = validated_data.get('EB_BusRB_MemContrib_Category3', instance.EB_BusRB_MemContrib_Category3)
        instance.EB_BusRB_MemContrib_Category4 = validated_data.get('EB_BusRB_MemContrib_Category4', instance.EB_BusRB_MemContrib_Category4)

        instance.EB_BusRB_EmpContrib_Category1 = validated_data.get('EB_BusRB_EmpContrib_Category1', instance.EB_BusRB_EmpContrib_Category1)
        instance.EB_BusRB_EmpContrib_Category2 = validated_data.get('EB_BusRB_EmpContrib_Category2', instance.EB_BusRB_EmpContrib_Category2)
        instance.EB_BusRB_EmpContrib_Category3 = validated_data.get('EB_BusRB_EmpContrib_Category3', instance.EB_BusRB_EmpContrib_Category3)
        instance.EB_BusRB_EmpContrib_Category4 = validated_data.get('EB_BusRB_EmpContrib_Category4', instance.EB_BusRB_EmpContrib_Category4)

        instance.EB_BusRB_NormRetire_AgeCategory1 = validated_data.get('EB_BusRB_NormRetire_AgeCategory1', instance.EB_BusRB_NormRetire_AgeCategory1)
        instance.EB_BusRB_NormRetire_AgeCategory2 = validated_data.get('EB_BusRB_NormRetire_AgeCategory2', instance.EB_BusRB_NormRetire_AgeCategory2)
        instance.EB_BusRB_NormRetire_AgeCategory3 = validated_data.get('EB_BusRB_NormRetire_AgeCategory3', instance.EB_BusRB_NormRetire_AgeCategory3)
        instance.EB_BusRB_NormRetire_AgeCategory4 = validated_data.get('EB_BusRB_NormRetire_AgeCategory4', instance.EB_BusRB_NormRetire_AgeCategory4)

        instance.EB_BusRB_FlexibleGroupLife = validated_data.get('EB_BusRB_FlexibleGroupLife', instance.EB_BusRB_FlexibleGroupLife)
        instance.EB_BusRB_Approved = validated_data.get('EB_BusRB_Approved', instance.EB_BusRB_Approved)
        instance.EB_BusRB_ApprovedCategory1 = validated_data.get('EB_BusRB_ApprovedCategory1', instance.EB_BusRB_ApprovedCategory1)
        instance.EB_BusRB_ApprovedCategory2 = validated_data.get('EB_BusRB_ApprovedCategory2', instance.EB_BusRB_ApprovedCategory2)
        instance.EB_BusRB_ApprovedCategory3 = validated_data.get('EB_BusRB_ApprovedCategory3', instance.EB_BusRB_ApprovedCategory3)
        instance.EB_BusRB_ApprovedCategory4 = validated_data.get('EB_BusRB_ApprovedCategory4', instance.EB_BusRB_ApprovedCategory4)
        instance.EB_BusRB_UnApproved = validated_data.get('EB_BusRB_UnApproved', instance.EB_BusRB_UnApproved)
        instance.EB_BusRB_UnApprovedCategory1 = validated_data.get('EB_BusRB_UnApprovedCategory1', instance.EB_BusRB_UnApprovedCategory1)
        instance.EB_BusRB_UnApprovedCategory2 = validated_data.get('EB_BusRB_UnApprovedCategory2', instance.EB_BusRB_UnApprovedCategory2)
        instance.EB_BusRB_UnApprovedCategory3 = validated_data.get('EB_BusRB_UnApprovedCategory3', instance.EB_BusRB_UnApprovedCategory3)
        instance.EB_BusRB_UnApprovedCategory4 = validated_data.get('EB_BusRB_UnApprovedCategory4', instance.EB_BusRB_UnApprovedCategory4)

        instance.EB_BusinessRiskFundTakeOver = validated_data.get('EB_BusinessRiskFundTakeOver', instance.EB_BusinessRiskFundTakeOver)

        instance.EB_BusRB_SpouseLC_Category1 = validated_data.get('EB_BusRB_SpouseLC_Category1', instance.EB_BusRB_SpouseLC_Category1)
        instance.EB_BusRB_SpouseLC_Category2 = validated_data.get('EB_BusRB_SpouseLC_Category2', instance.EB_BusRB_SpouseLC_Category2)
        instance.EB_BusRB_SpouseLC_Category3 = validated_data.get('EB_BusRB_SpouseLC_Category3', instance.EB_BusRB_SpouseLC_Category3)
        instance.EB_BusRB_SpouseLC_Category4 = validated_data.get('EB_BusRB_SpouseLC_Category4', instance.EB_BusRB_SpouseLC_Category4)
        instance.EB_BusRB_SpouseLC_Notes = validated_data.get('EB_BusRB_SpouseLC_Notes', instance.EB_BusRB_SpouseLC_Notes)

        instance.EB_BusRB_TrauBenSa_Category1 = validated_data.get('EB_BusRB_TrauBenSa_Category1', instance.EB_BusRB_TrauBenSa_Category1)
        instance.EB_BusRB_TrauBenSa_Category2 = validated_data.get('EB_BusRB_TrauBenSa_Category2', instance.EB_BusRB_TrauBenSa_Category2)
        instance.EB_BusRB_TrauBenSa_Category3 = validated_data.get('EB_BusRB_TrauBenSa_Category3', instance.EB_BusRB_TrauBenSa_Category3)
        instance.EB_BusRB_TrauBenSa_Category4 = validated_data.get('EB_BusRB_TrauBenSa_Category4', instance.EB_BusRB_TrauBenSa_Category4)

        instance.EB_BusRB_FB_CoverCategory1 = validated_data.get('EB_BusRB_FB_CoverCategory1', instance.EB_BusRB_FB_CoverCategory1)
        instance.EB_BusRB_FB_CoverCategory2 = validated_data.get('EB_BusRB_FB_CoverCategory2', instance.EB_BusRB_FB_CoverCategory2)
        instance.EB_BusRB_FB_CoverCategory3 = validated_data.get('EB_BusRB_FB_CoverCategory3', instance.EB_BusRB_FB_CoverCategory3)
        instance.EB_BusRB_FB_CoverCategory4 = validated_data.get('EB_BusRB_FB_CoverCategory4', instance.EB_BusRB_FB_CoverCategory4)
        
        instance.EB_BusRB_CapDisBen_Approved = validated_data.get('EB_BusRB_CapDisBen_Approved', instance.EB_BusRB_CapDisBen_Approved)
        instance.EB_BusRB_CapDisBen_ApprovedCategory1 = validated_data.get('EB_BusRB_CapDisBen_ApprovedCategory1', instance.EB_BusRB_CapDisBen_ApprovedCategory1)
        instance.EB_BusRB_CapDisBen_ApprovedCategory2 = validated_data.get('EB_BusRB_CapDisBen_ApprovedCategory2', instance.EB_BusRB_CapDisBen_ApprovedCategory2)
        instance.EB_BusRB_CapDisBen_ApprovedCategory3 = validated_data.get('EB_BusRB_CapDisBen_ApprovedCategory3', instance.EB_BusRB_CapDisBen_ApprovedCategory3)
        instance.EB_BusRB_CapDisBen_ApprovedCategory4 = validated_data.get('EB_BusRB_CapDisBen_ApprovedCategory4', instance.EB_BusRB_CapDisBen_ApprovedCategory4)
        instance.EB_BusRB_CapDisBen_UnApproved = validated_data.get('EB_BusRB_CapDisBen_UnApproved', instance.EB_BusRB_CapDisBen_UnApproved)
        instance.EB_BusRB_CapDisBen_UnApprovedCategory1 = validated_data.get('EB_BusRB_CapDisBen_UnApprovedCategory1', instance.EB_BusRB_CapDisBen_UnApprovedCategory1)
        instance.EB_BusRB_CapDisBen_UnApprovedCategory2 = validated_data.get('EB_BusRB_CapDisBen_UnApprovedCategory2', instance.EB_BusRB_CapDisBen_UnApprovedCategory2)
        instance.EB_BusRB_CapDisBen_UnApprovedCategory3 = validated_data.get('EB_BusRB_CapDisBen_UnApprovedCategory3', instance.EB_BusRB_CapDisBen_UnApprovedCategory3)
        instance.EB_BusRB_CapDisBen_UnApprovedCategory4 = validated_data.get('EB_BusRB_CapDisBen_UnApprovedCategory4', instance.EB_BusRB_CapDisBen_UnApprovedCategory4)
        
        instance.EB_BusRB_DiIBenWaitPer_Category1 = validated_data.get('EB_BusRB_DiIBenWaitPer_Category1', instance.EB_BusRB_DiIBenWaitPer_Category1)
        instance.EB_BusRB_DiIBenWaitPer_Category2 = validated_data.get('EB_BusRB_DiIBenWaitPer_Category2', instance.EB_BusRB_DiIBenWaitPer_Category2)
        instance.EB_BusRB_DiIBenWaitPer_Category3 = validated_data.get('EB_BusRB_DiIBenWaitPer_Category3', instance.EB_BusRB_DiIBenWaitPer_Category3)
        instance.EB_BusRB_DiIBenWaitPer_Category4 = validated_data.get('EB_BusRB_DiIBenWaitPer_Category4', instance.EB_BusRB_DiIBenWaitPer_Category4)

        instance.EB_BusRB_ConvOp = validated_data.get('EB_BusRB_ConvOp', instance.EB_BusRB_ConvOp)
        instance.EB_BusRB_GrowthRates = validated_data.get('EB_BusRB_GrowthRates', instance.EB_BusRB_GrowthRates)
        instance.EB_BusRB_DisabilityBenefitsNotes = validated_data.get('EB_BusRB_DisabilityBenefitsNotes', instance.EB_BusRB_DisabilityBenefitsNotes)
        
        instance.EB_BusRB_AccidentBenefit = validated_data.get('EB_BusRB_AccidentBenefit', instance.EB_BusRB_AccidentBenefit)
        instance.EB_BusRB_AccidentBenefitCategory1 = validated_data.get('EB_BusRB_AccidentBenefitCategory1', instance.EB_BusRB_AccidentBenefitCategory1)
        instance.EB_BusRB_AccidentBenefitCategory2 = validated_data.get('EB_BusRB_AccidentBenefitCategory2', instance.EB_BusRB_AccidentBenefitCategory2)
        instance.EB_BusRB_AccidentBenefitCategory3 = validated_data.get('EB_BusRB_AccidentBenefitCategory3', instance.EB_BusRB_AccidentBenefitCategory3)
        instance.EB_BusRB_AccidentBenefitCategory4 = validated_data.get('EB_BusRB_AccidentBenefitCategory4', instance.EB_BusRB_AccidentBenefitCategory4)
        instance.EB_BusRB_AccidentBenefitReason = validated_data.get('EB_BusRB_AccidentBenefitReason', instance.EB_BusRB_AccidentBenefitReason)
        
        instance.EB_BusRB_DiC_Reason = validated_data.get('EB_BusRB_DiC_Reason', instance.EB_BusRB_DiC_Reason)
        instance.EB_BusRB_DrC_Reason = validated_data.get('EB_BusRB_DrC_Reason', instance.EB_BusRB_DrC_Reason)
        instance.EB_BusRB_DrC_Summary = validated_data.get('EB_BusRB_DrC_Summary', instance.EB_BusRB_DrC_Summary)

        instance.EB_BusRecom_ProductAdmin = validated_data.get('EB_BusRecom_ProductAdmin', instance.EB_BusRecom_ProductAdmin)
        instance.EB_BusRecom_ProductName = validated_data.get('EB_BusRecom_ProductName', instance.EB_BusRecom_ProductName)
        instance.EB_BusRecom_FundType = validated_data.get('EB_BusRecom_FundType', instance.EB_BusRecom_FundType)
        instance.EB_BusRecom_RecommendationFundType = validated_data.get('EB_BusRecom_RecommendationFundType', instance.EB_BusRecom_RecommendationFundType)
        instance.EB_BusRecom_Portfolio = validated_data.get('EB_BusRecom_Portfolio', instance.EB_BusRecom_Portfolio)
        instance.EB_BusRecom_ClientAccepted = validated_data.get('EB_BusRecom_ClientAccepted', instance.EB_BusRecom_ClientAccepted)
        instance.EB_BusRecom_ClientRisks = validated_data.get('EB_BusRecom_ClientRisks', instance.EB_BusRecom_ClientRisks)

        instance.EB_BusFReplace_Name = validated_data.get('EB_BusFReplace_Name', instance.EB_BusFReplace_Name)
        instance.EB_BusFReplace_RegNo = validated_data.get('EB_BusFReplace_RegNo', instance.EB_BusFReplace_RegNo)
        instance.EB_BusFReplace_Type = validated_data.get('EB_BusFReplace_Type', instance.EB_BusFReplace_Type)
        instance.EB_BusFReplace_Detail = validated_data.get('EB_BusFReplace_Detail', instance.EB_BusFReplace_Detail)

        instance.EB_BusFReplace_FeeChargesReplaced = validated_data.get('EB_BusFReplace_FeeChargesReplaced', instance.EB_BusFReplace_FeeChargesReplaced)
        instance.EB_BusFReplace_FeeChargesExisting = validated_data.get('EB_BusFReplace_FeeChargesExisting', instance.EB_BusFReplace_FeeChargesExisting)
        instance.EB_BusFReplace_TnC_Replaced = validated_data.get('EB_BusFReplace_TnC_Replaced', instance.EB_BusFReplace_TnC_Replaced)
        instance.EB_BusFReplace_TnC_Existing = validated_data.get('EB_BusFReplace_TnC_Existing', instance.EB_BusFReplace_TnC_Existing)
        instance.EB_BusFReplace_HealthChangesReplaced = validated_data.get('EB_BusFReplace_HealthChangesReplaced', instance.EB_BusFReplace_HealthChangesReplaced)
        instance.EB_BusFReplace_HealthChangesExisting = validated_data.get('EB_BusFReplace_HealthChangesExisting', instance.EB_BusFReplace_HealthChangesExisting)
        instance.EB_BusFReplace_TaxImplicationsReplaced = validated_data.get('EB_BusFReplace_TaxImplicationsReplaced', instance.EB_BusFReplace_TaxImplicationsReplaced)
        instance.EB_BusFReplace_TaxImplicationsExisting = validated_data.get('EB_BusFReplace_TaxImplicationsExisting', instance.EB_BusFReplace_TaxImplicationsExisting)
        instance.EB_BusFReplace_MaterialDifferencesReplaced = validated_data.get('EB_BusFReplace_MaterialDifferencesReplaced', instance.EB_BusFReplace_MaterialDifferencesReplaced)
        instance.EB_BusFReplace_MaterialDifferencesExisting = validated_data.get('EB_BusFReplace_MaterialDifferencesExisting', instance.EB_BusFReplace_MaterialDifferencesExisting)
        instance.EB_BusFReplace_PenaltiesReplaced = validated_data.get('EB_BusFReplace_PenaltiesReplaced', instance.EB_BusFReplace_PenaltiesReplaced)
        instance.EB_BusFReplace_PenaltiesExisting = validated_data.get('EB_BusFReplace_PenaltiesExisting', instance.EB_BusFReplace_PenaltiesExisting)
        instance.EB_BusFReplace_RealisedReplaced = validated_data.get('EB_BusFReplace_RealisedReplaced', instance.EB_BusFReplace_RealisedReplaced)
        instance.EB_BusFReplace_RealisedExisting = validated_data.get('EB_BusFReplace_RealisedExisting', instance.EB_BusFReplace_RealisedExisting)
        
        instance.EB_BusFReplace_EligGr_Proposed = validated_data.get('EB_BusFReplace_EligGr_Proposed', instance.EB_BusFReplace_EligGr_Proposed)
        instance.EB_BusFReplace_EligGr_Existing = validated_data.get('EB_BusFReplace_EligGr_Existing', instance.EB_BusFReplace_EligGr_Existing)
        instance.EB_BusFReplace_MemContrib_Proposed = validated_data.get('EB_BusFReplace_MemContrib_Proposed', instance.EB_BusFReplace_MemContrib_Proposed)
        instance.EB_BusFReplace_MemContrib_Existing = validated_data.get('EB_BusFReplace_MemContrib_Existing', instance.EB_BusFReplace_MemContrib_Existing)
        instance.EB_BusFReplace_EmpContrib_Proposed = validated_data.get('EB_BusFReplace_EmpContrib_Proposed', instance.EB_BusFReplace_EmpContrib_Proposed)
        instance.EB_BusFReplace_EmpContrib_Existing = validated_data.get('EB_BusFReplace_EmpContrib_Existing', instance.EB_BusFReplace_EmpContrib_Existing)
        instance.EB_BusFReplace_EmpContrib_PercentageProposed = validated_data.get('EB_BusFReplace_EmpContrib_PercentageProposed', instance.EB_BusFReplace_EmpContrib_PercentageProposed)
        instance.EB_BusFReplace_EmpContrib_PercentageExisting = validated_data.get('EB_BusFReplace_EmpContrib_PercentageExisting', instance.EB_BusFReplace_EmpContrib_PercentageExisting)
        instance.EB_BusFReplace_AdminFee_Proposed = validated_data.get('EB_BusFReplace_AdminFee_Proposed', instance.EB_BusFReplace_AdminFee_Proposed)
        instance.EB_BusFReplace_AdminFee_Existing = validated_data.get('EB_BusFReplace_AdminFee_Existing', instance.EB_BusFReplace_AdminFee_Existing)
        instance.EB_BusFReplace_BenPayDis_Proposed = validated_data.get('EB_BusFReplace_BenPayDis_Proposed', instance.EB_BusFReplace_BenPayDis_Proposed)
        instance.EB_BusFReplace_BenPayDis_Existing = validated_data.get('EB_BusFReplace_BenPayDis_Existing', instance.EB_BusFReplace_BenPayDis_Existing)
        instance.EB_BusFReplace_BenPayD_Proposed = validated_data.get('EB_BusFReplace_BenPayD_Proposed', instance.EB_BusFReplace_BenPayD_Proposed)
        instance.EB_BusFReplace_BenPayD_Existing = validated_data.get('EB_BusFReplace_BenPayD_Existing', instance.EB_BusFReplace_BenPayD_Existing)
        instance.EB_BusFReplace_BenPayW_Proposed = validated_data.get('EB_BusFReplace_BenPayW_Proposed', instance.EB_BusFReplace_BenPayW_Proposed)
        instance.EB_BusFReplace_BenPayW_Existing = validated_data.get('EB_BusFReplace_BenPayW_Existing', instance.EB_BusFReplace_BenPayW_Existing)
        instance.EB_BusFReplace_BenPayRe_Proposed = validated_data.get('EB_BusFReplace_BenPayRe_Proposed', instance.EB_BusFReplace_BenPayRe_Proposed)
        instance.EB_BusFReplace_BenPayRe_Existing = validated_data.get('EB_BusFReplace_BenPayRe_Existing', instance.EB_BusFReplace_BenPayRe_Existing)
        instance.EB_BusFReplace_NormRetire_AgeProposed = validated_data.get('EB_BusFReplace_NormRetire_AgeProposed', instance.EB_BusFReplace_NormRetire_AgeProposed)
        instance.EB_BusFReplace_NormRetire_AgeExisting = validated_data.get('EB_BusFReplace_NormRetire_AgeExisting', instance.EB_BusFReplace_NormRetire_AgeExisting)
        instance.EB_BusFReplace_ConvOp_Proposed = validated_data.get('EB_BusFReplace_ConvOp_Proposed', instance.EB_BusFReplace_ConvOp_Proposed)
        instance.EB_BusFReplace_ConvOp_Existing = validated_data.get('EB_BusFReplace_ConvOp_Existing', instance.EB_BusFReplace_ConvOp_Existing)
        instance.EB_BusFReplace_HouseL_Proposed = validated_data.get('EB_BusFReplace_HouseL_Proposed', instance.EB_BusFReplace_HouseL_Proposed)
        instance.EB_BusFReplace_HouseL_Existing = validated_data.get('EB_BusFReplace_HouseL_Existing', instance.EB_BusFReplace_HouseL_Existing)
        instance.EB_BusFReplace_AdminC_Proposed = validated_data.get('EB_BusFReplace_AdminC_Proposed', instance.EB_BusFReplace_AdminC_Proposed)
        instance.EB_BusFReplace_AdminC_Existing = validated_data.get('EB_BusFReplace_AdminC_Existing', instance.EB_BusFReplace_AdminC_Existing)
        instance.EB_BusFReplace_InvestFee_Proposed = validated_data.get('EB_BusFReplace_InvestFee_Proposed', instance.EB_BusFReplace_InvestFee_Proposed)
        instance.EB_BusFReplace_InvestFee_Existing = validated_data.get('EB_BusFReplace_InvestFee_Existing', instance.EB_BusFReplace_InvestFee_Existing)
        instance.EB_BusFReplace_CoR_Proposed = validated_data.get('EB_BusFReplace_CoR_Proposed', instance.EB_BusFReplace_CoR_Proposed)
        instance.EB_BusFReplace_CoR_Existing = validated_data.get('EB_BusFReplace_CoR_Existing', instance.EB_BusFReplace_CoR_Existing)
        instance.EB_BusFReplace_BenA_Proposed = validated_data.get('EB_BusFReplace_BenA_Proposed', instance.EB_BusFReplace_BenA_Proposed)
        instance.EB_BusFReplace_BenA_Existing = validated_data.get('EB_BusFReplace_BenA_Existing', instance.EB_BusFReplace_BenA_Existing)
        instance.EB_BusFReplace_InvestCh_Proposed = validated_data.get('EB_BusFReplace_InvestCh_Proposed', instance.EB_BusFReplace_InvestCh_Proposed)
        instance.EB_BusFReplace_InvestCh_Existing = validated_data.get('EB_BusFReplace_InvestCh_Existing', instance.EB_BusFReplace_InvestCh_Existing)


        
        instance.updated_at = datetime.now(timezone.utc)

        
        instance.save()
        return instance

class GapCoverSerializers(serializers.ModelSerializer):
    class Meta():
        model = GapCover
        fields = '__all__'
    

    def create(self, validated_data):
        return GapCover.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)
        
        instance.GP_ClientName = validated_data.get('GP_ClientName', instance.GP_ClientName)
        instance.GP_ClientIdNumber = validated_data.get('GP_ClientIdNumber', instance.GP_ClientIdNumber)
        instance.GP_ClientAddress = validated_data.get('GP_ClientAddress', instance.GP_ClientAddress)
        instance.GP_ClientEmail = validated_data.get('GP_ClientEmail', instance.GP_ClientEmail)
        instance.GP_ClientPhoneNumber = validated_data.get('GP_ClientPhoneNumber', instance.GP_ClientPhoneNumber)
        instance.GP_ClientMedicalAidName = validated_data.get('GP_ClientMedicalAidName', instance.GP_ClientMedicalAidName)
        instance.GP_ClientInceptionDate = validated_data.get('GP_ClientInceptionDate', instance.GP_ClientInceptionDate)
        instance.GP_Date = validated_data.get('GP_Date', instance.GP_Date)
            
        instance.GP_Benefits = validated_data.get('GP_Benefits', instance.GP_Benefits)
        instance.GP_MedicalDependent = validated_data.get('GP_MedicalDependent', instance.GP_MedicalDependent)

        instance.GP_MemberName1 = validated_data.get('GP_MemberName1', instance.GP_MemberName1)
        instance.GP_MemberRelationship1 = validated_data.get('GP_MemberRelationship1', instance.GP_MemberRelationship1)
        instance.GP_MemberAidPlan1 = validated_data.get('GP_MemberAidPlan1', instance.GP_MemberAidPlan1)
        instance.GP_MemberName2 = validated_data.get('GP_MemberName2', instance.GP_MemberName2)
        instance.GP_MemberRelationship2 = validated_data.get('GP_MemberRelationship2', instance.GP_MemberRelationship2)
        instance.GP_MemberAidPlan2 = validated_data.get('GP_MemberAidPlan2', instance.GP_MemberAidPlan2)
        instance.GP_MemberName3 = validated_data.get('GP_MemberName3', instance.GP_MemberName3)
        instance.GP_MemberRelationship3 = validated_data.get('GP_MemberRelationship3', instance.GP_MemberRelationship3)
        instance.GP_MemberAidPlan3 = validated_data.get('GP_MemberAidPlan3', instance.GP_MemberAidPlan3)
        instance.GP_MemberName4 = validated_data.get('GP_MemberName4', instance.GP_MemberName4)
        instance.GP_MemberRelationship4 = validated_data.get('GP_MemberRelationship4', instance.GP_MemberRelationship4)
        instance.GP_MemberAidPlan4 = validated_data.get('GP_MemberAidPlan4', instance.GP_MemberAidPlan4)

        instance.GP_Provider = validated_data.get('GP_Provider', instance.GP_Provider)
        instance.GP_Option = validated_data.get('GP_Option', instance.GP_Option)
        instance.GP_Motivation = validated_data.get('GP_Motivation', instance.GP_Motivation)
        instance.GP_TotalPremium = validated_data.get('GP_TotalPremium', instance.GP_TotalPremium)
        instance.GP_BrokerFee = validated_data.get('GP_BrokerFee', instance.GP_BrokerFee)
        instance.GP_Commission = validated_data.get('GP_Commission', instance.GP_Commission)

        instance.GP_CP_Rate = validated_data.get('GP_CP_Rate', instance.GP_CP_Rate)
        instance.GP_NP_Rate = validated_data.get('GP_NP_Rate', instance.GP_NP_Rate)
        instance.GP_CP_Overall = validated_data.get('GP_CP_Overall', instance.GP_CP_Overall)
        instance.GP_NP_Overall = validated_data.get('GP_NP_Overall', instance.GP_NP_Overall)
        instance.GP_CP_CoPayment_B = validated_data.get('GP_CP_CoPayment_B', instance.GP_CP_CoPayment_B)
        instance.GP_NP_CoPayment_B = validated_data.get('GP_NP_CoPayment_B', instance.GP_NP_CoPayment_B)
        instance.GP_CP_SubLimit_B = validated_data.get('GP_CP_SubLimit_B', instance.GP_CP_SubLimit_B)
        instance.GP_NP_SubLimit_B = validated_data.get('GP_NP_SubLimit_B', instance.GP_NP_SubLimit_B)
        instance.GP_CP_Cancer_B = validated_data.get('GP_CP_Cancer_B', instance.GP_CP_Cancer_B)
        instance.GP_NP_Cancer_B = validated_data.get('GP_NP_Cancer_B', instance.GP_NP_Cancer_B)
        instance.GP_CP_CancerD_B = validated_data.get('GP_CP_CancerD_B', instance.GP_CP_CancerD_B)
        instance.GP_NP_CancerD_B = validated_data.get('GP_NP_CancerD_B', instance.GP_NP_CancerD_B)
        instance.GP_CP_Other_B = validated_data.get('GP_CP_Other_B', instance.GP_CP_Other_B)
        instance.GP_NP_Other_B = validated_data.get('GP_NP_Other_B', instance.GP_NP_Other_B)
        instance.GP_CP_CasualB = validated_data.get('GP_CP_CasualB', instance.GP_CP_CasualB)
        instance.GP_NP_CasualB = validated_data.get('GP_NP_CasualB', instance.GP_NP_CasualB)
        instance.GP_CP_TraumaB = validated_data.get('GP_CP_TraumaB', instance.GP_CP_TraumaB)
        instance.GP_NP_TraumaB = validated_data.get('GP_NP_TraumaB', instance.GP_NP_TraumaB)
        instance.GP_CP_PreW_B = validated_data.get('GP_CP_PreW_B', instance.GP_CP_PreW_B)
        instance.GP_NP_PreW_B = validated_data.get('GP_NP_PreW_B', instance.GP_NP_PreW_B)
        instance.GP_CP_Med_SW_B = validated_data.get('GP_CP_Med_SW_B', instance.GP_CP_Med_SW_B)
        instance.GP_NP_Med_SW_B = validated_data.get('GP_NP_Med_SW_B', instance.GP_NP_Med_SW_B)
        instance.GP_CP_Accidental_DC_B = validated_data.get('GP_CP_Accidental_DC_B', instance.GP_CP_Accidental_DC_B)
        instance.GP_NP_Accidental_DC_B = validated_data.get('GP_NP_Accidental_DC_B', instance.GP_NP_Accidental_DC_B)
        instance.GP_CP_GenWait_P = validated_data.get('GP_CP_GenWait_P', instance.GP_CP_GenWait_P)
        instance.GP_NP_GenWait_P = validated_data.get('GP_NP_GenWait_P', instance.GP_NP_GenWait_P)
        instance.GP_CP_PreExist_P = validated_data.get('GP_CP_PreExist_P', instance.GP_CP_PreExist_P)
        instance.GP_NP_PreExist_P = validated_data.get('GP_NP_PreExist_P', instance.GP_NP_PreExist_P)
        instance.GP_CP_Specific_P = validated_data.get('GP_CP_Specific_P', instance.GP_CP_Specific_P)
        instance.GP_NP_Specific_P = validated_data.get('GP_NP_Specific_P', instance.GP_NP_Specific_P)

        instance.GP_Exclusions = validated_data.get('GP_Exclusions', instance.GP_Exclusions)
        instance.GP_Other_Exclusions = validated_data.get('GP_Other_Exclusions', instance.GP_Other_Exclusions)
        instance.GP_GeneralComments = validated_data.get('GP_GeneralComments', instance.GP_GeneralComments)
            
        instance.GP_FinanAdvisor_ProdRecomm = validated_data.get('GP_FinanAdvisor_ProdRecomm', instance.GP_FinanAdvisor_ProdRecomm)
        instance.GP_FinanAdvisor_Reasons = validated_data.get('GP_FinanAdvisor_Reasons', instance.GP_FinanAdvisor_Reasons)
        instance.GP_FinanAdvisor_Consequences = validated_data.get('GP_FinanAdvisor_Consequences', instance.GP_FinanAdvisor_Consequences)
        instance.GP_FinanAdvisor_FeeCommission = validated_data.get('GP_FinanAdvisor_FeeCommission', instance.GP_FinanAdvisor_FeeCommission)
        instance.GP_FinanAdvisor_OtherComments = validated_data.get('GP_FinanAdvisor_OtherComments', instance.GP_FinanAdvisor_OtherComments)
        instance.GP_FinanAdvisor_Date = validated_data.get('GP_FinanAdvisor_Date', instance.GP_FinanAdvisor_Date)
        
        instance.updated_at = datetime.now(timezone.utc)

        
        instance.save()
        return instance

class ShortTermInsurancePersonalSerializers(serializers.ModelSerializer):
    class Meta():
        model = ShortTermInsurancePersonal
        fields = '__all__'
    

    def create(self, validated_data):
        return ShortTermInsurancePersonal.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)
        
        instance.STIP_Underwritten_By = validated_data.get("STIP_Underwritten_By", instance.STIP_Underwritten_By)
        instance.STIP_Branch_Name = validated_data.get("STIP_Branch_Name", instance.STIP_Branch_Name)
        instance.STIP_Branch_Number = validated_data.get("STIP_Branch_Number", instance.STIP_Branch_Number)
        instance.STIP_Quotation_Number = validated_data.get("STIP_Quotation_Number", instance.STIP_Quotation_Number)
        instance.STIP_Policy_Number = validated_data.get("STIP_Policy_Number", instance.STIP_Policy_Number)
        instance.STIP_Inception_Date = validated_data.get("STIP_Inception_Date", instance.STIP_Inception_Date)
            
        instance.STIP_Applicant_Surname = validated_data.get("STIP_Applicant_Surname", instance.STIP_Applicant_Surname)
        instance.STIP_Applicant_Gender = validated_data.get("STIP_Applicant_Gender", instance.STIP_Applicant_Gender)
        instance.STIP_Applicant_Initials = validated_data.get("STIP_Applicant_Initials", instance.STIP_Applicant_Initials)
        instance.STIP_Applicant_Title = validated_data.get("STIP_Applicant_Title", instance.STIP_Applicant_Title)
        instance.STIP_Applicant_DateofBirth = validated_data.get("STIP_Applicant_DateofBirth", instance.STIP_Applicant_DateofBirth)
        instance.STIP_Applicant_IdNumber = validated_data.get("STIP_Applicant_IdNumber", instance.STIP_Applicant_IdNumber)
        instance.STIP_Applicant_Email = validated_data.get("STIP_Applicant_Email", instance.STIP_Applicant_Email)
        instance.STIP_Applicant_ContactNumber = validated_data.get("STIP_Applicant_ContactNumber", instance.STIP_Applicant_ContactNumber)

        instance.STIP_General_Refused = validated_data.get("STIP_General_Refused", instance.STIP_General_Refused)
        instance.STIP_General_RefusedDetails = validated_data.get("STIP_General_RefusedDetails", instance.STIP_General_RefusedDetails)
        instance.STIP_General_Risks = validated_data.get("STIP_General_Risks", instance.STIP_General_Risks)
        instance.STIP_General_RisksDetails = validated_data.get("STIP_General_RisksDetails", instance.STIP_General_RisksDetails)
        instance.STIP_General_LastDate = validated_data.get("STIP_General_LastDate", instance.STIP_General_LastDate)
        instance.STIP_General_InsurerName = validated_data.get("STIP_General_InsurerName", instance.STIP_General_InsurerName)

        # instance.STIP_General_TypeOfLoss = validated_data.get("STIP_General_TypeOfLoss", instance.STIP_General_TypeOfLoss)
        # instance.STIP_General_LossYear = validated_data.get("STIP_General_LossYear", instance.STIP_General_LossYear)
        # instance.STIP_General_LossAmount = validated_data.get("STIP_General_LossAmount", instance.STIP_General_LossAmount)
        # instance.STIP_General_LossInsurer = validated_data.get("STIP_General_LossInsurer", instance.STIP_General_LossInsurer)
            
        instance.STIP_CnRI_Existing_Company = validated_data.get("STIP_CnRI_Existing_Company", instance.STIP_CnRI_Existing_Company)
        instance.STIP_CnRI_Replacement_Company = validated_data.get("STIP_CnRI_Replacement_Company", instance.STIP_CnRI_Replacement_Company)
        instance.STIP_CnRI_Existing_Provider = validated_data.get("STIP_CnRI_Existing_Provider", instance.STIP_CnRI_Existing_Provider)
        instance.STIP_CnRI_Replacement_Provider = validated_data.get("STIP_CnRI_Replacement_Provider", instance.STIP_CnRI_Replacement_Provider)
        instance.STIP_CnRI_Existing_Product = validated_data.get("STIP_CnRI_Existing_Product", instance.STIP_CnRI_Existing_Product)
        instance.STIP_CnRI_Replacement_Product = validated_data.get("STIP_CnRI_Replacement_Product", instance.STIP_CnRI_Replacement_Product)

        
        instance.STIP_CnRI_1_Recomm = validated_data.get("STIP_CnRI_1_Recomm", instance.STIP_CnRI_1_Recomm) 
        instance.STIP_CnRI_1_Accepted = validated_data.get("STIP_CnRI_1_Accepted", instance.STIP_CnRI_1_Accepted) 
        instance.STIP_CnRI_1_CoverAmount = validated_data.get("STIP_CnRI_1_CoverAmount", instance.STIP_CnRI_1_CoverAmount) 
        instance.STIP_CnRI_1_Premium1 = validated_data.get("STIP_CnRI_1_Premium1", instance.STIP_CnRI_1_Premium1) 
        instance.STIP_CnRI_1_Premium2 = validated_data.get("STIP_CnRI_1_Premium2", instance.STIP_CnRI_1_Premium2) 
        instance.STIP_CnRI_1_Excess1 = validated_data.get("STIP_CnRI_1_Excess1", instance.STIP_CnRI_1_Excess1) 
        instance.STIP_CnRI_1_Excess2 = validated_data.get("STIP_CnRI_1_Excess2", instance.STIP_CnRI_1_Excess2) 
        instance.STIP_CnRI_1_Cover = validated_data.get("STIP_CnRI_1_Cover", instance.STIP_CnRI_1_Cover) 
        
        instance.STIP_CnRI_2_Recomm = validated_data.get("STIP_CnRI_2_Recomm", instance.STIP_CnRI_2_Recomm) 
        instance.STIP_CnRI_2_Accepted = validated_data.get("STIP_CnRI_2_Accepted", instance.STIP_CnRI_2_Accepted) 
        instance.STIP_CnRI_2_CoverAmount = validated_data.get("STIP_CnRI_2_CoverAmount", instance.STIP_CnRI_2_CoverAmount) 
        instance.STIP_CnRI_2_Premium1 = validated_data.get("STIP_CnRI_2_Premium1", instance.STIP_CnRI_2_Premium1) 
        instance.STIP_CnRI_2_Premium2 = validated_data.get("STIP_CnRI_2_Premium2", instance.STIP_CnRI_2_Premium2) 
        instance.STIP_CnRI_2_Excess1 = validated_data.get("STIP_CnRI_2_Excess1", instance.STIP_CnRI_2_Excess1) 
        instance.STIP_CnRI_2_Excess2 = validated_data.get("STIP_CnRI_2_Excess2", instance.STIP_CnRI_2_Excess2) 
        instance.STIP_CnRI_2_Cover = validated_data.get("STIP_CnRI_2_Cover", instance.STIP_CnRI_2_Cover) 
        
        instance.STIP_CnRI_3_Recomm = validated_data.get("STIP_CnRI_3_Recomm", instance.STIP_CnRI_3_Recomm) 
        instance.STIP_CnRI_3_Accepted = validated_data.get("STIP_CnRI_3_Accepted", instance.STIP_CnRI_3_Accepted) 
        instance.STIP_CnRI_3_CoverAmount = validated_data.get("STIP_CnRI_3_CoverAmount", instance.STIP_CnRI_3_CoverAmount) 
        instance.STIP_CnRI_3_Premium1 = validated_data.get("STIP_CnRI_3_Premium1", instance.STIP_CnRI_3_Premium1) 
        instance.STIP_CnRI_3_Premium2 = validated_data.get("STIP_CnRI_3_Premium2", instance.STIP_CnRI_3_Premium2) 
        instance.STIP_CnRI_3_Excess1 = validated_data.get("STIP_CnRI_3_Excess1", instance.STIP_CnRI_3_Excess1) 
        instance.STIP_CnRI_3_Excess2 = validated_data.get("STIP_CnRI_3_Excess2", instance.STIP_CnRI_3_Excess2) 
        instance.STIP_CnRI_3_Cover = validated_data.get("STIP_CnRI_3_Cover", instance.STIP_CnRI_3_Cover) 
        
        instance.STIP_CnRI_4_Recomm = validated_data.get("STIP_CnRI_4_Recomm", instance.STIP_CnRI_4_Recomm) 
        instance.STIP_CnRI_4_Accepted = validated_data.get("STIP_CnRI_4_Accepted", instance.STIP_CnRI_4_Accepted) 
        instance.STIP_CnRI_4_CoverAmount = validated_data.get("STIP_CnRI_4_CoverAmount", instance.STIP_CnRI_4_CoverAmount) 
        instance.STIP_CnRI_4_Premium1 = validated_data.get("STIP_CnRI_4_Premium1", instance.STIP_CnRI_4_Premium1) 
        instance.STIP_CnRI_4_Premium2 = validated_data.get("STIP_CnRI_4_Premium2", instance.STIP_CnRI_4_Premium2) 
        instance.STIP_CnRI_4_Excess1 = validated_data.get("STIP_CnRI_4_Excess1", instance.STIP_CnRI_4_Excess1) 
        instance.STIP_CnRI_4_Excess2 = validated_data.get("STIP_CnRI_4_Excess2", instance.STIP_CnRI_4_Excess2) 
        instance.STIP_CnRI_4_Cover = validated_data.get("STIP_CnRI_4_Cover", instance.STIP_CnRI_4_Cover) 
        
        instance.STIP_CnRI_5_Recomm = validated_data.get("STIP_CnRI_5_Recomm", instance.STIP_CnRI_5_Recomm) 
        instance.STIP_CnRI_5_Accepted = validated_data.get("STIP_CnRI_5_Accepted", instance.STIP_CnRI_5_Accepted) 
        instance.STIP_CnRI_5_CoverAmount = validated_data.get("STIP_CnRI_5_CoverAmount", instance.STIP_CnRI_5_CoverAmount) 
        instance.STIP_CnRI_5_Premium1 = validated_data.get("STIP_CnRI_5_Premium1", instance.STIP_CnRI_5_Premium1) 
        instance.STIP_CnRI_5_Premium2 = validated_data.get("STIP_CnRI_5_Premium2", instance.STIP_CnRI_5_Premium2) 
        instance.STIP_CnRI_5_Excess1 = validated_data.get("STIP_CnRI_5_Excess1", instance.STIP_CnRI_5_Excess1) 
        instance.STIP_CnRI_5_Excess2 = validated_data.get("STIP_CnRI_5_Excess2", instance.STIP_CnRI_5_Excess2) 
        instance.STIP_CnRI_5_Cover = validated_data.get("STIP_CnRI_5_Cover", instance.STIP_CnRI_5_Cover) 
        
        instance.STIP_CnRI_6_Recomm = validated_data.get("STIP_CnRI_6_Recomm", instance.STIP_CnRI_6_Recomm) 
        instance.STIP_CnRI_6_Accepted = validated_data.get("STIP_CnRI_6_Accepted", instance.STIP_CnRI_6_Accepted) 
        instance.STIP_CnRI_6_CoverAmount = validated_data.get("STIP_CnRI_6_CoverAmount", instance.STIP_CnRI_6_CoverAmount) 
        instance.STIP_CnRI_6_Premium1 = validated_data.get("STIP_CnRI_6_Premium1", instance.STIP_CnRI_6_Premium1) 
        instance.STIP_CnRI_6_Premium2 = validated_data.get("STIP_CnRI_6_Premium2", instance.STIP_CnRI_6_Premium2) 
        instance.STIP_CnRI_6_Excess1 = validated_data.get("STIP_CnRI_6_Excess1", instance.STIP_CnRI_6_Excess1) 
        instance.STIP_CnRI_6_Excess2 = validated_data.get("STIP_CnRI_6_Excess2", instance.STIP_CnRI_6_Excess2) 
        instance.STIP_CnRI_6_Cover = validated_data.get("STIP_CnRI_6_Cover", instance.STIP_CnRI_6_Cover) 
        
        instance.STIP_CnRI_7_Recomm = validated_data.get("STIP_CnRI_7_Recomm", instance.STIP_CnRI_7_Recomm) 
        instance.STIP_CnRI_7_Accepted = validated_data.get("STIP_CnRI_7_Accepted", instance.STIP_CnRI_7_Accepted) 
        instance.STIP_CnRI_7_CoverAmount = validated_data.get("STIP_CnRI_7_CoverAmount", instance.STIP_CnRI_7_CoverAmount) 
        instance.STIP_CnRI_7_Premium1 = validated_data.get("STIP_CnRI_7_Premium1", instance.STIP_CnRI_7_Premium1) 
        instance.STIP_CnRI_7_Premium2 = validated_data.get("STIP_CnRI_7_Premium2", instance.STIP_CnRI_7_Premium2) 
        instance.STIP_CnRI_7_Excess1 = validated_data.get("STIP_CnRI_7_Excess1", instance.STIP_CnRI_7_Excess1) 
        instance.STIP_CnRI_7_Excess2 = validated_data.get("STIP_CnRI_7_Excess2", instance.STIP_CnRI_7_Excess2) 
        instance.STIP_CnRI_7_Cover = validated_data.get("STIP_CnRI_7_Cover", instance.STIP_CnRI_7_Cover) 
        
        instance.STIP_CnRI_8_Recomm = validated_data.get("STIP_CnRI_8_Recomm", instance.STIP_CnRI_8_Recomm) 
        instance.STIP_CnRI_8_Accepted = validated_data.get("STIP_CnRI_8_Accepted", instance.STIP_CnRI_8_Accepted) 
        instance.STIP_CnRI_8_CoverAmount = validated_data.get("STIP_CnRI_8_CoverAmount", instance.STIP_CnRI_8_CoverAmount) 
        instance.STIP_CnRI_8_Premium1 = validated_data.get("STIP_CnRI_8_Premium1", instance.STIP_CnRI_8_Premium1) 
        instance.STIP_CnRI_8_Premium2 = validated_data.get("STIP_CnRI_8_Premium2", instance.STIP_CnRI_8_Premium2) 
        instance.STIP_CnRI_8_Excess1 = validated_data.get("STIP_CnRI_8_Excess1", instance.STIP_CnRI_8_Excess1) 
        instance.STIP_CnRI_8_Excess2 = validated_data.get("STIP_CnRI_8_Excess2", instance.STIP_CnRI_8_Excess2) 
        instance.STIP_CnRI_8_Cover = validated_data.get("STIP_CnRI_8_Cover", instance.STIP_CnRI_8_Cover) 
        
        instance.STIP_CnRI_9_Recomm = validated_data.get("STIP_CnRI_9_Recomm", instance.STIP_CnRI_9_Recomm) 
        instance.STIP_CnRI_9_Accepted = validated_data.get("STIP_CnRI_9_Accepted", instance.STIP_CnRI_9_Accepted) 
        instance.STIP_CnRI_9_CoverAmount = validated_data.get("STIP_CnRI_9_CoverAmount", instance.STIP_CnRI_9_CoverAmount) 
        instance.STIP_CnRI_9_Premium1 = validated_data.get("STIP_CnRI_9_Premium1", instance.STIP_CnRI_9_Premium1) 
        instance.STIP_CnRI_9_Premium2 = validated_data.get("STIP_CnRI_9_Premium2", instance.STIP_CnRI_9_Premium2) 
        instance.STIP_CnRI_9_Excess1 = validated_data.get("STIP_CnRI_9_Excess1", instance.STIP_CnRI_9_Excess1) 
        instance.STIP_CnRI_9_Excess2 = validated_data.get("STIP_CnRI_9_Excess2", instance.STIP_CnRI_9_Excess2) 
        instance.STIP_CnRI_9_Cover = validated_data.get("STIP_CnRI_9_Cover", instance.STIP_CnRI_9_Cover) 
        
        instance.STIP_CnRI_10_Recomm = validated_data.get("STIP_CnRI_10_Recomm", instance.STIP_CnRI_10_Recomm) 
        instance.STIP_CnRI_10_Accepted = validated_data.get("STIP_CnRI_10_Accepted", instance.STIP_CnRI_10_Accepted) 
        instance.STIP_CnRI_10_CoverAmount = validated_data.get("STIP_CnRI_10_CoverAmount", instance.STIP_CnRI_10_CoverAmount) 
        instance.STIP_CnRI_10_Premium1 = validated_data.get("STIP_CnRI_10_Premium1", instance.STIP_CnRI_10_Premium1) 
        instance.STIP_CnRI_10_Premium2 = validated_data.get("STIP_CnRI_10_Premium2", instance.STIP_CnRI_10_Premium2) 
        instance.STIP_CnRI_10_Excess1 = validated_data.get("STIP_CnRI_10_Excess1", instance.STIP_CnRI_10_Excess1) 
        instance.STIP_CnRI_10_Excess2 = validated_data.get("STIP_CnRI_10_Excess2", instance.STIP_CnRI_10_Excess2) 
        instance.STIP_CnRI_10_Cover = validated_data.get("STIP_CnRI_10_Cover", instance.STIP_CnRI_10_Cover) 
        
        instance.STIP_CnRI_11_Recomm = validated_data.get("STIP_CnRI_11_Recomm", instance.STIP_CnRI_11_Recomm) 
        instance.STIP_CnRI_11_Accepted = validated_data.get("STIP_CnRI_11_Accepted", instance.STIP_CnRI_11_Accepted) 
        instance.STIP_CnRI_11_CoverAmount = validated_data.get("STIP_CnRI_11_CoverAmount", instance.STIP_CnRI_11_CoverAmount) 
        instance.STIP_CnRI_11_Premium1 = validated_data.get("STIP_CnRI_11_Premium1", instance.STIP_CnRI_11_Premium1) 
        instance.STIP_CnRI_11_Premium2 = validated_data.get("STIP_CnRI_11_Premium2", instance.STIP_CnRI_11_Premium2) 
        instance.STIP_CnRI_11_Excess1 = validated_data.get("STIP_CnRI_11_Excess1", instance.STIP_CnRI_11_Excess1) 
        instance.STIP_CnRI_11_Excess2 = validated_data.get("STIP_CnRI_11_Excess2", instance.STIP_CnRI_11_Excess2) 
        instance.STIP_CnRI_11_Cover = validated_data.get("STIP_CnRI_11_Cover", instance.STIP_CnRI_11_Cover) 
        
        instance.STIP_CnRI_12_Recomm = validated_data.get("STIP_CnRI_12_Recomm", instance.STIP_CnRI_12_Recomm) 
        instance.STIP_CnRI_12_Accepted = validated_data.get("STIP_CnRI_12_Accepted", instance.STIP_CnRI_12_Accepted) 
        instance.STIP_CnRI_12_CoverAmount = validated_data.get("STIP_CnRI_12_CoverAmount", instance.STIP_CnRI_12_CoverAmount) 
        instance.STIP_CnRI_12_Premium1 = validated_data.get("STIP_CnRI_12_Premium1", instance.STIP_CnRI_12_Premium1) 
        instance.STIP_CnRI_12_Premium2 = validated_data.get("STIP_CnRI_12_Premium2", instance.STIP_CnRI_12_Premium2) 
        instance.STIP_CnRI_12_Excess1 = validated_data.get("STIP_CnRI_12_Excess1", instance.STIP_CnRI_12_Excess1) 
        instance.STIP_CnRI_12_Excess2 = validated_data.get("STIP_CnRI_12_Excess2", instance.STIP_CnRI_12_Excess2) 
        instance.STIP_CnRI_12_Cover = validated_data.get("STIP_CnRI_12_Cover", instance.STIP_CnRI_12_Cover) 
        
        instance.STIP_CnRI_13_Recomm = validated_data.get("STIP_CnRI_13_Recomm", instance.STIP_CnRI_13_Recomm) 
        instance.STIP_CnRI_13_Accepted = validated_data.get("STIP_CnRI_13_Accepted", instance.STIP_CnRI_13_Accepted) 
        instance.STIP_CnRI_13_CoverAmount = validated_data.get("STIP_CnRI_13_CoverAmount", instance.STIP_CnRI_13_CoverAmount) 
        instance.STIP_CnRI_13_Premium1 = validated_data.get("STIP_CnRI_13_Premium1", instance.STIP_CnRI_13_Premium1) 
        instance.STIP_CnRI_13_Premium2 = validated_data.get("STIP_CnRI_13_Premium2", instance.STIP_CnRI_13_Premium2) 
        instance.STIP_CnRI_13_Excess1 = validated_data.get("STIP_CnRI_13_Excess1", instance.STIP_CnRI_13_Excess1) 
        instance.STIP_CnRI_13_Excess2 = validated_data.get("STIP_CnRI_13_Excess2", instance.STIP_CnRI_13_Excess2) 
        instance.STIP_CnRI_13_Cover = validated_data.get("STIP_CnRI_13_Cover", instance.STIP_CnRI_13_Cover) 
        
        instance.STIP_CnRI_14_Recomm = validated_data.get("STIP_CnRI_14_Recomm", instance.STIP_CnRI_14_Recomm) 
        instance.STIP_CnRI_14_Accepted = validated_data.get("STIP_CnRI_14_Accepted", instance.STIP_CnRI_14_Accepted) 
        instance.STIP_CnRI_14_CoverAmount = validated_data.get("STIP_CnRI_14_CoverAmount", instance.STIP_CnRI_14_CoverAmount) 
        instance.STIP_CnRI_14_Premium1 = validated_data.get("STIP_CnRI_14_Premium1", instance.STIP_CnRI_14_Premium1) 
        instance.STIP_CnRI_14_Premium2 = validated_data.get("STIP_CnRI_14_Premium2", instance.STIP_CnRI_14_Premium2) 
        instance.STIP_CnRI_14_Excess1 = validated_data.get("STIP_CnRI_14_Excess1", instance.STIP_CnRI_14_Excess1) 
        instance.STIP_CnRI_14_Excess2 = validated_data.get("STIP_CnRI_14_Excess2", instance.STIP_CnRI_14_Excess2) 
        instance.STIP_CnRI_14_Cover = validated_data.get("STIP_CnRI_14_Cover", instance.STIP_CnRI_14_Cover) 
        
        instance.STIP_CnRI_15_Recomm = validated_data.get("STIP_CnRI_15_Recomm", instance.STIP_CnRI_15_Recomm) 
        instance.STIP_CnRI_15_Accepted = validated_data.get("STIP_CnRI_15_Accepted", instance.STIP_CnRI_15_Accepted) 
        instance.STIP_CnRI_15_CoverAmount = validated_data.get("STIP_CnRI_15_CoverAmount", instance.STIP_CnRI_15_CoverAmount) 
        instance.STIP_CnRI_15_Premium1 = validated_data.get("STIP_CnRI_15_Premium1", instance.STIP_CnRI_15_Premium1) 
        instance.STIP_CnRI_15_Premium2 = validated_data.get("STIP_CnRI_15_Premium2", instance.STIP_CnRI_15_Premium2) 
        instance.STIP_CnRI_15_Excess1 = validated_data.get("STIP_CnRI_15_Excess1", instance.STIP_CnRI_15_Excess1) 
        instance.STIP_CnRI_15_Excess2 = validated_data.get("STIP_CnRI_15_Excess2", instance.STIP_CnRI_15_Excess2) 
        instance.STIP_CnRI_15_Cover = validated_data.get("STIP_CnRI_15_Cover", instance.STIP_CnRI_15_Cover) 
        
        instance.STIP_CnRI_16_Recomm = validated_data.get("STIP_CnRI_16_Recomm", instance.STIP_CnRI_16_Recomm) 
        instance.STIP_CnRI_16_Accepted = validated_data.get("STIP_CnRI_16_Accepted", instance.STIP_CnRI_16_Accepted) 
        instance.STIP_CnRI_16_CoverAmount = validated_data.get("STIP_CnRI_16_CoverAmount", instance.STIP_CnRI_16_CoverAmount) 
        instance.STIP_CnRI_16_Premium1 = validated_data.get("STIP_CnRI_16_Premium1", instance.STIP_CnRI_16_Premium1) 
        instance.STIP_CnRI_16_Premium2 = validated_data.get("STIP_CnRI_16_Premium2", instance.STIP_CnRI_16_Premium2) 
        instance.STIP_CnRI_16_Excess1 = validated_data.get("STIP_CnRI_16_Excess1", instance.STIP_CnRI_16_Excess1) 
        instance.STIP_CnRI_16_Excess2 = validated_data.get("STIP_CnRI_16_Excess2", instance.STIP_CnRI_16_Excess2) 
        instance.STIP_CnRI_16_Cover = validated_data.get("STIP_CnRI_16_Cover", instance.STIP_CnRI_16_Cover) 
        
        instance.STIP_CnRI_17_Recomm = validated_data.get("STIP_CnRI_17_Recomm", instance.STIP_CnRI_17_Recomm) 
        instance.STIP_CnRI_17_Accepted = validated_data.get("STIP_CnRI_17_Accepted", instance.STIP_CnRI_17_Accepted) 
        instance.STIP_CnRI_17_CoverAmount = validated_data.get("STIP_CnRI_17_CoverAmount", instance.STIP_CnRI_17_CoverAmount) 
        instance.STIP_CnRI_17_Premium1 = validated_data.get("STIP_CnRI_17_Premium1", instance.STIP_CnRI_17_Premium1) 
        instance.STIP_CnRI_17_Premium2 = validated_data.get("STIP_CnRI_17_Premium2", instance.STIP_CnRI_17_Premium2) 
        instance.STIP_CnRI_17_Excess1 = validated_data.get("STIP_CnRI_17_Excess1", instance.STIP_CnRI_17_Excess1) 
        instance.STIP_CnRI_17_Excess2 = validated_data.get("STIP_CnRI_17_Excess2", instance.STIP_CnRI_17_Excess2) 
        instance.STIP_CnRI_17_Cover = validated_data.get("STIP_CnRI_17_Cover", instance.STIP_CnRI_17_Cover) 
        
        instance.STIP_CnRI_18_Recomm = validated_data.get("STIP_CnRI_18_Recomm", instance.STIP_CnRI_18_Recomm) 
        instance.STIP_CnRI_18_Accepted = validated_data.get("STIP_CnRI_18_Accepted", instance.STIP_CnRI_18_Accepted) 
        instance.STIP_CnRI_18_CoverAmount = validated_data.get("STIP_CnRI_18_CoverAmount", instance.STIP_CnRI_18_CoverAmount) 
        instance.STIP_CnRI_18_Premium1 = validated_data.get("STIP_CnRI_18_Premium1", instance.STIP_CnRI_18_Premium1) 
        instance.STIP_CnRI_18_Premium2 = validated_data.get("STIP_CnRI_18_Premium2", instance.STIP_CnRI_18_Premium2) 
        instance.STIP_CnRI_18_Excess1 = validated_data.get("STIP_CnRI_18_Excess1", instance.STIP_CnRI_18_Excess1) 
        instance.STIP_CnRI_18_Excess2 = validated_data.get("STIP_CnRI_18_Excess2", instance.STIP_CnRI_18_Excess2) 
        instance.STIP_CnRI_18_Cover = validated_data.get("STIP_CnRI_18_Cover", instance.STIP_CnRI_18_Cover) 
        
        instance.STIP_CnRI_19_Recomm = validated_data.get("STIP_CnRI_19_Recomm", instance.STIP_CnRI_19_Recomm) 
        instance.STIP_CnRI_19_Accepted = validated_data.get("STIP_CnRI_19_Accepted", instance.STIP_CnRI_19_Accepted) 
        instance.STIP_CnRI_19_CoverAmount = validated_data.get("STIP_CnRI_19_CoverAmount", instance.STIP_CnRI_19_CoverAmount) 
        instance.STIP_CnRI_19_Premium1 = validated_data.get("STIP_CnRI_19_Premium1", instance.STIP_CnRI_19_Premium1) 
        instance.STIP_CnRI_19_Premium2 = validated_data.get("STIP_CnRI_19_Premium2", instance.STIP_CnRI_19_Premium2) 
        instance.STIP_CnRI_19_Excess1 = validated_data.get("STIP_CnRI_19_Excess1", instance.STIP_CnRI_19_Excess1) 
        instance.STIP_CnRI_19_Excess2 = validated_data.get("STIP_CnRI_19_Excess2", instance.STIP_CnRI_19_Excess2) 
        instance.STIP_CnRI_19_Cover = validated_data.get("STIP_CnRI_19_Cover", instance.STIP_CnRI_19_Cover) 
        
        instance.STIP_CnRI_20_Recomm = validated_data.get("STIP_CnRI_20_Recomm", instance.STIP_CnRI_20_Recomm) 
        instance.STIP_CnRI_20_Accepted = validated_data.get("STIP_CnRI_20_Accepted", instance.STIP_CnRI_20_Accepted) 
        instance.STIP_CnRI_20_CoverAmount = validated_data.get("STIP_CnRI_20_CoverAmount", instance.STIP_CnRI_20_CoverAmount) 
        instance.STIP_CnRI_20_Premium1 = validated_data.get("STIP_CnRI_20_Premium1", instance.STIP_CnRI_20_Premium1) 
        instance.STIP_CnRI_20_Premium2 = validated_data.get("STIP_CnRI_20_Premium2", instance.STIP_CnRI_20_Premium2) 
        instance.STIP_CnRI_20_Excess1 = validated_data.get("STIP_CnRI_20_Excess1", instance.STIP_CnRI_20_Excess1) 
        instance.STIP_CnRI_20_Excess2 = validated_data.get("STIP_CnRI_20_Excess2", instance.STIP_CnRI_20_Excess2) 
        instance.STIP_CnRI_20_Cover = validated_data.get("STIP_CnRI_20_Cover", instance.STIP_CnRI_20_Cover) 
        
        instance.STIP_CnRI_21_Recomm = validated_data.get("STIP_CnRI_21_Recomm", instance.STIP_CnRI_21_Recomm) 
        instance.STIP_CnRI_21_Accepted = validated_data.get("STIP_CnRI_21_Accepted", instance.STIP_CnRI_21_Accepted) 
        instance.STIP_CnRI_21_CoverAmount = validated_data.get("STIP_CnRI_21_CoverAmount", instance.STIP_CnRI_21_CoverAmount) 
        instance.STIP_CnRI_21_Premium1 = validated_data.get("STIP_CnRI_21_Premium1", instance.STIP_CnRI_21_Premium1) 
        instance.STIP_CnRI_21_Premium2 = validated_data.get("STIP_CnRI_21_Premium2", instance.STIP_CnRI_21_Premium2) 
        instance.STIP_CnRI_21_Excess1 = validated_data.get("STIP_CnRI_21_Excess1", instance.STIP_CnRI_21_Excess1) 
        instance.STIP_CnRI_21_Excess2 = validated_data.get("STIP_CnRI_21_Excess2", instance.STIP_CnRI_21_Excess2) 
        instance.STIP_CnRI_21_Cover = validated_data.get("STIP_CnRI_21_Cover", instance.STIP_CnRI_21_Cover) 
        
        instance.STIP_CnRI_22_Recomm = validated_data.get("STIP_CnRI_22_Recomm", instance.STIP_CnRI_22_Recomm) 
        instance.STIP_CnRI_22_Accepted = validated_data.get("STIP_CnRI_22_Accepted", instance.STIP_CnRI_22_Accepted) 
        instance.STIP_CnRI_22_CoverAmount = validated_data.get("STIP_CnRI_22_CoverAmount", instance.STIP_CnRI_22_CoverAmount) 
        instance.STIP_CnRI_22_Premium1 = validated_data.get("STIP_CnRI_22_Premium1", instance.STIP_CnRI_22_Premium1) 
        instance.STIP_CnRI_22_Premium2 = validated_data.get("STIP_CnRI_22_Premium2", instance.STIP_CnRI_22_Premium2) 
        instance.STIP_CnRI_22_Excess1 = validated_data.get("STIP_CnRI_22_Excess1", instance.STIP_CnRI_22_Excess1) 
        instance.STIP_CnRI_22_Excess2 = validated_data.get("STIP_CnRI_22_Excess2", instance.STIP_CnRI_22_Excess2) 
        instance.STIP_CnRI_22_Cover = validated_data.get("STIP_CnRI_22_Cover", instance.STIP_CnRI_22_Cover) 
        
        instance.STIP_CnRI_23_Recomm = validated_data.get("STIP_CnRI_23_Recomm", instance.STIP_CnRI_23_Recomm) 
        instance.STIP_CnRI_23_Accepted = validated_data.get("STIP_CnRI_23_Accepted", instance.STIP_CnRI_23_Accepted) 
        instance.STIP_CnRI_23_CoverAmount = validated_data.get("STIP_CnRI_23_CoverAmount", instance.STIP_CnRI_23_CoverAmount) 
        instance.STIP_CnRI_23_Premium1 = validated_data.get("STIP_CnRI_23_Premium1", instance.STIP_CnRI_23_Premium1) 
        instance.STIP_CnRI_23_Premium2 = validated_data.get("STIP_CnRI_23_Premium2", instance.STIP_CnRI_23_Premium2) 
        instance.STIP_CnRI_23_Excess1 = validated_data.get("STIP_CnRI_23_Excess1", instance.STIP_CnRI_23_Excess1) 
        instance.STIP_CnRI_23_Excess2 = validated_data.get("STIP_CnRI_23_Excess2", instance.STIP_CnRI_23_Excess2) 
        instance.STIP_CnRI_23_Cover = validated_data.get("STIP_CnRI_23_Cover", instance.STIP_CnRI_23_Cover) 
        
        instance.STIP_CnRI_24_Recomm = validated_data.get("STIP_CnRI_24_Recomm", instance.STIP_CnRI_24_Recomm) 
        instance.STIP_CnRI_24_Accepted = validated_data.get("STIP_CnRI_24_Accepted", instance.STIP_CnRI_24_Accepted) 
        instance.STIP_CnRI_24_CoverAmount = validated_data.get("STIP_CnRI_24_CoverAmount", instance.STIP_CnRI_24_CoverAmount) 
        instance.STIP_CnRI_24_Premium1 = validated_data.get("STIP_CnRI_24_Premium1", instance.STIP_CnRI_24_Premium1) 
        instance.STIP_CnRI_24_Premium2 = validated_data.get("STIP_CnRI_24_Premium2", instance.STIP_CnRI_24_Premium2) 
        instance.STIP_CnRI_24_Excess1 = validated_data.get("STIP_CnRI_24_Excess1", instance.STIP_CnRI_24_Excess1) 
        instance.STIP_CnRI_24_Excess2 = validated_data.get("STIP_CnRI_24_Excess2", instance.STIP_CnRI_24_Excess2) 
        instance.STIP_CnRI_24_Cover = validated_data.get("STIP_CnRI_24_Cover", instance.STIP_CnRI_24_Cover) 
        
        instance.STIP_CnRI_25_Recomm = validated_data.get("STIP_CnRI_25_Recomm", instance.STIP_CnRI_25_Recomm) 
        instance.STIP_CnRI_25_Accepted = validated_data.get("STIP_CnRI_25_Accepted", instance.STIP_CnRI_25_Accepted) 
        instance.STIP_CnRI_25_CoverAmount = validated_data.get("STIP_CnRI_25_CoverAmount", instance.STIP_CnRI_25_CoverAmount) 
        instance.STIP_CnRI_25_Premium1 = validated_data.get("STIP_CnRI_25_Premium1", instance.STIP_CnRI_25_Premium1) 
        instance.STIP_CnRI_25_Premium2 = validated_data.get("STIP_CnRI_25_Premium2", instance.STIP_CnRI_25_Premium2) 
        instance.STIP_CnRI_25_Excess1 = validated_data.get("STIP_CnRI_25_Excess1", instance.STIP_CnRI_25_Excess1) 
        instance.STIP_CnRI_25_Excess2 = validated_data.get("STIP_CnRI_25_Excess2", instance.STIP_CnRI_25_Excess2) 
        instance.STIP_CnRI_25_Cover = validated_data.get("STIP_CnRI_25_Cover", instance.STIP_CnRI_25_Cover) 
        
        instance.STIP_CnRI_26_Recomm = validated_data.get("STIP_CnRI_26_Recomm",instance.STIP_CnRI_26_Recomm) 
        instance.STIP_CnRI_26_Accepted = validated_data.get("STIP_CnRI_26_Accepted",instance.STIP_CnRI_26_Accepted) 
        instance.STIP_CnRI_26_CoverAmount = validated_data.get("STIP_CnRI_26_CoverAmount",instance.STIP_CnRI_26_CoverAmount) 
        instance.STIP_CnRI_26_Premium1 = validated_data.get("STIP_CnRI_26_Premium1",instance.STIP_CnRI_26_Premium1) 
        instance.STIP_CnRI_26_Premium2 = validated_data.get("STIP_CnRI_26_Premium2",instance.STIP_CnRI_26_Premium2) 
        instance.STIP_CnRI_26_Excess1 = validated_data.get("STIP_CnRI_26_Excess1",instance.STIP_CnRI_26_Excess1) 
        instance.STIP_CnRI_26_Excess2 = validated_data.get("STIP_CnRI_26_Excess2",instance.STIP_CnRI_26_Excess2) 
        instance.STIP_CnRI_26_Cover = validated_data.get("STIP_CnRI_26_Cover",instance.STIP_CnRI_26_Cover) 
        
        instance.STIP_CnRI_27_Recomm = validated_data.get("STIP_CnRI_27_Recomm", instance.STIP_CnRI_27_Recomm)
        instance.STIP_CnRI_27_Accepted = validated_data.get("STIP_CnRI_27_Accepted", instance.STIP_CnRI_27_Accepted)
        instance.STIP_CnRI_27_CoverAmount = validated_data.get("STIP_CnRI_27_CoverAmount", instance.STIP_CnRI_27_CoverAmount)
        instance.STIP_CnRI_27_Premium1 = validated_data.get("STIP_CnRI_27_Premium1", instance.STIP_CnRI_27_Premium1)
        instance.STIP_CnRI_27_Premium2 = validated_data.get("STIP_CnRI_27_Premium2", instance.STIP_CnRI_27_Premium2)
        instance.STIP_CnRI_27_Excess1 = validated_data.get("STIP_CnRI_27_Excess1", instance.STIP_CnRI_27_Excess1)
        instance.STIP_CnRI_27_Excess2 = validated_data.get("STIP_CnRI_27_Excess2", instance.STIP_CnRI_27_Excess2) 
        instance.STIP_CnRI_27_Cover = validated_data.get("STIP_CnRI_27_Cover", instance.STIP_CnRI_27_Cover) 

        instance.STIP_CnRI_FeeCharges = validated_data.get("STIP_CnRI_FeeCharges", instance.STIP_CnRI_FeeCharges)
        instance.STIP_CnRI_Commission = validated_data.get("STIP_CnRI_Commission", instance.STIP_CnRI_Commission)
        instance.STIP_CnRI_TotalPremium = validated_data.get("STIP_CnRI_TotalPremium", instance.STIP_CnRI_TotalPremium)
            
        instance.STIP_CnRen_Existing_Company = validated_data.get("STIP_CnRen_Existing_Company", instance.STIP_CnRen_Existing_Company)
        instance.STIP_CnRen_Replacement_Company = validated_data.get("STIP_CnRen_Replacement_Company", instance.STIP_CnRen_Replacement_Company)
        instance.STIP_CnRen_Existing_Provider = validated_data.get("STIP_CnRen_Existing_Provider", instance.STIP_CnRen_Existing_Provider)
        instance.STIP_CnRen_Replacement_Provider = validated_data.get("STIP_CnRen_Replacement_Provider", instance.STIP_CnRen_Replacement_Provider)
        instance.STIP_CnRen_Existing_Product = validated_data.get("STIP_CnRen_Existing_Product", instance.STIP_CnRen_Existing_Product)
        instance.STIP_CnRen_Replacement_Product = validated_data.get("STIP_CnRen_Replacement_Product", instance.STIP_CnRen_Replacement_Product)
            
        
        instance.STIP_CnRen_1_Recomm = validated_data.get("STIP_CnRen_1_Recomm", instance.STIP_CnRen_1_Recomm) 
        instance.STIP_CnRen_1_Accepted = validated_data.get("STIP_CnRen_1_Accepted", instance.STIP_CnRen_1_Accepted) 
        instance.STIP_CnRen_1_CoverAmount = validated_data.get("STIP_CnRen_1_CoverAmount", instance.STIP_CnRen_1_CoverAmount) 
        instance.STIP_CnRen_1_Premium1 = validated_data.get("STIP_CnRen_1_Premium1", instance.STIP_CnRen_1_Premium1) 
        instance.STIP_CnRen_1_Premium2 = validated_data.get("STIP_CnRen_1_Premium2", instance.STIP_CnRen_1_Premium2) 
        instance.STIP_CnRen_1_Excess1 = validated_data.get("STIP_CnRen_1_Excess1", instance.STIP_CnRen_1_Excess1) 
        instance.STIP_CnRen_1_Excess2 = validated_data.get("STIP_CnRen_1_Excess2", instance.STIP_CnRen_1_Excess2) 
        instance.STIP_CnRen_1_Cover = validated_data.get("STIP_CnRen_1_Cover", instance.STIP_CnRen_1_Cover) 
        
        instance.STIP_CnRen_2_Recomm = validated_data.get("STIP_CnRen_2_Recomm", instance.STIP_CnRen_2_Recomm) 
        instance.STIP_CnRen_2_Accepted = validated_data.get("STIP_CnRen_2_Accepted", instance.STIP_CnRen_2_Accepted) 
        instance.STIP_CnRen_2_CoverAmount = validated_data.get("STIP_CnRen_2_CoverAmount", instance.STIP_CnRen_2_CoverAmount) 
        instance.STIP_CnRen_2_Premium1 = validated_data.get("STIP_CnRen_2_Premium1", instance.STIP_CnRen_2_Premium1) 
        instance.STIP_CnRen_2_Premium2 = validated_data.get("STIP_CnRen_2_Premium2", instance.STIP_CnRen_2_Premium2) 
        instance.STIP_CnRen_2_Excess1 = validated_data.get("STIP_CnRen_2_Excess1", instance.STIP_CnRen_2_Excess1) 
        instance.STIP_CnRen_2_Excess2 = validated_data.get("STIP_CnRen_2_Excess2", instance.STIP_CnRen_2_Excess2) 
        instance.STIP_CnRen_2_Cover = validated_data.get("STIP_CnRen_2_Cover", instance.STIP_CnRen_2_Cover) 
        
        instance.STIP_CnRen_3_Recomm = validated_data.get("STIP_CnRen_3_Recomm", instance.STIP_CnRen_3_Recomm) 
        instance.STIP_CnRen_3_Accepted = validated_data.get("STIP_CnRen_3_Accepted", instance.STIP_CnRen_3_Accepted) 
        instance.STIP_CnRen_3_CoverAmount = validated_data.get("STIP_CnRen_3_CoverAmount", instance.STIP_CnRen_3_CoverAmount) 
        instance.STIP_CnRen_3_Premium1 = validated_data.get("STIP_CnRen_3_Premium1", instance.STIP_CnRen_3_Premium1) 
        instance.STIP_CnRen_3_Premium2 = validated_data.get("STIP_CnRen_3_Premium2", instance.STIP_CnRen_3_Premium2) 
        instance.STIP_CnRen_3_Excess1 = validated_data.get("STIP_CnRen_3_Excess1", instance.STIP_CnRen_3_Excess1) 
        instance.STIP_CnRen_3_Excess2 = validated_data.get("STIP_CnRen_3_Excess2", instance.STIP_CnRen_3_Excess2) 
        instance.STIP_CnRen_3_Cover = validated_data.get("STIP_CnRen_3_Cover", instance.STIP_CnRen_3_Cover) 

        instance.STIP_CnRen_4_Recomm = validated_data.get("STIP_CnRen_4_Recomm", instance.STIP_CnRen_4_Recomm) 
        instance.STIP_CnRen_4_Accepted = validated_data.get("STIP_CnRen_4_Accepted", instance.STIP_CnRen_4_Accepted) 
        instance.STIP_CnRen_4_CoverAmount = validated_data.get("STIP_CnRen_4_CoverAmount", instance.STIP_CnRen_4_CoverAmount) 
        instance.STIP_CnRen_4_Premium1 = validated_data.get("STIP_CnRen_4_Premium1", instance.STIP_CnRen_4_Premium1) 
        instance.STIP_CnRen_4_Premium2 = validated_data.get("STIP_CnRen_4_Premium2", instance.STIP_CnRen_4_Premium2) 
        instance.STIP_CnRen_4_Excess1 = validated_data.get("STIP_CnRen_4_Excess1", instance.STIP_CnRen_4_Excess1) 
        instance.STIP_CnRen_4_Excess2 = validated_data.get("STIP_CnRen_4_Excess2", instance.STIP_CnRen_4_Excess2) 
        instance.STIP_CnRen_4_Cover = validated_data.get("STIP_CnRen_4_Cover", instance.STIP_CnRen_4_Cover) 
        
        instance.STIP_CnRen_5_Recomm = validated_data.get("STIP_CnRen_5_Recomm", instance.STIP_CnRen_5_Recomm) 
        instance.STIP_CnRen_5_Accepted = validated_data.get("STIP_CnRen_5_Accepted", instance.STIP_CnRen_5_Accepted) 
        instance.STIP_CnRen_5_CoverAmount = validated_data.get("STIP_CnRen_5_CoverAmount", instance.STIP_CnRen_5_CoverAmount) 
        instance.STIP_CnRen_5_Premium1 = validated_data.get("STIP_CnRen_5_Premium1", instance.STIP_CnRen_5_Premium1) 
        instance.STIP_CnRen_5_Premium2 = validated_data.get("STIP_CnRen_5_Premium2", instance.STIP_CnRen_5_Premium2) 
        instance.STIP_CnRen_5_Excess1 = validated_data.get("STIP_CnRen_5_Excess1", instance.STIP_CnRen_5_Excess1) 
        instance.STIP_CnRen_5_Excess2 = validated_data.get("STIP_CnRen_5_Excess2", instance.STIP_CnRen_5_Excess2) 
        instance.STIP_CnRen_5_Cover = validated_data.get("STIP_CnRen_5_Cover", instance.STIP_CnRen_5_Cover) 
        
        instance.STIP_CnRen_6_Recomm = validated_data.get("STIP_CnRen_6_Recomm", instance.STIP_CnRen_6_Recomm) 
        instance.STIP_CnRen_6_Accepted = validated_data.get("STIP_CnRen_6_Accepted", instance.STIP_CnRen_6_Accepted) 
        instance.STIP_CnRen_6_CoverAmount = validated_data.get("STIP_CnRen_6_CoverAmount", instance.STIP_CnRen_6_CoverAmount) 
        instance.STIP_CnRen_6_Premium1 = validated_data.get("STIP_CnRen_6_Premium1", instance.STIP_CnRen_6_Premium1) 
        instance.STIP_CnRen_6_Premium2 = validated_data.get("STIP_CnRen_6_Premium2", instance.STIP_CnRen_6_Premium2) 
        instance.STIP_CnRen_6_Excess1 = validated_data.get("STIP_CnRen_6_Excess1", instance.STIP_CnRen_6_Excess1) 
        instance.STIP_CnRen_6_Excess2 = validated_data.get("STIP_CnRen_6_Excess2", instance.STIP_CnRen_6_Excess2) 
        instance.STIP_CnRen_6_Cover = validated_data.get("STIP_CnRen_6_Cover", instance.STIP_CnRen_6_Cover) 
        
        instance.STIP_CnRen_7_Recomm = validated_data.get("STIP_CnRen_7_Recomm", instance.STIP_CnRen_7_Recomm) 
        instance.STIP_CnRen_7_Accepted = validated_data.get("STIP_CnRen_7_Accepted", instance.STIP_CnRen_7_Accepted) 
        instance.STIP_CnRen_7_CoverAmount = validated_data.get("STIP_CnRen_7_CoverAmount", instance.STIP_CnRen_7_CoverAmount) 
        instance.STIP_CnRen_7_Premium1 = validated_data.get("STIP_CnRen_7_Premium1", instance.STIP_CnRen_7_Premium1) 
        instance.STIP_CnRen_7_Premium2 = validated_data.get("STIP_CnRen_7_Premium2", instance.STIP_CnRen_7_Premium2) 
        instance.STIP_CnRen_7_Excess1 = validated_data.get("STIP_CnRen_7_Excess1", instance.STIP_CnRen_7_Excess1) 
        instance.STIP_CnRen_7_Excess2 = validated_data.get("STIP_CnRen_7_Excess2", instance.STIP_CnRen_7_Excess2) 
        instance.STIP_CnRen_7_Cover = validated_data.get("STIP_CnRen_7_Cover", instance.STIP_CnRen_7_Cover) 
        
        instance.STIP_CnRen_8_Recomm = validated_data.get("STIP_CnRen_8_Recomm", instance.STIP_CnRen_8_Recomm) 
        instance.STIP_CnRen_8_Accepted = validated_data.get("STIP_CnRen_8_Accepted", instance.STIP_CnRen_8_Accepted) 
        instance.STIP_CnRen_8_CoverAmount = validated_data.get("STIP_CnRen_8_CoverAmount", instance.STIP_CnRen_8_CoverAmount) 
        instance.STIP_CnRen_8_Premium1 = validated_data.get("STIP_CnRen_8_Premium1", instance.STIP_CnRen_8_Premium1) 
        instance.STIP_CnRen_8_Premium2 = validated_data.get("STIP_CnRen_8_Premium2", instance.STIP_CnRen_8_Premium2) 
        instance.STIP_CnRen_8_Excess1 = validated_data.get("STIP_CnRen_8_Excess1", instance.STIP_CnRen_8_Excess1) 
        instance.STIP_CnRen_8_Excess2 = validated_data.get("STIP_CnRen_8_Excess2", instance.STIP_CnRen_8_Excess2) 
        instance.STIP_CnRen_8_Cover = validated_data.get("STIP_CnRen_8_Cover", instance.STIP_CnRen_8_Cover) 
        
        instance.STIP_CnRen_9_Recomm = validated_data.get("STIP_CnRen_9_Recomm", instance.STIP_CnRen_9_Recomm) 
        instance.STIP_CnRen_9_Accepted = validated_data.get("STIP_CnRen_9_Accepted", instance.STIP_CnRen_9_Accepted) 
        instance.STIP_CnRen_9_CoverAmount = validated_data.get("STIP_CnRen_9_CoverAmount", instance.STIP_CnRen_9_CoverAmount) 
        instance.STIP_CnRen_9_Premium1 = validated_data.get("STIP_CnRen_9_Premium1", instance.STIP_CnRen_9_Premium1) 
        instance.STIP_CnRen_9_Premium2 = validated_data.get("STIP_CnRen_9_Premium2", instance.STIP_CnRen_9_Premium2) 
        instance.STIP_CnRen_9_Excess1 = validated_data.get("STIP_CnRen_9_Excess1", instance.STIP_CnRen_9_Excess1) 
        instance.STIP_CnRen_9_Excess2 = validated_data.get("STIP_CnRen_9_Excess2", instance.STIP_CnRen_9_Excess2) 
        instance.STIP_CnRen_9_Cover = validated_data.get("STIP_CnRen_9_Cover", instance.STIP_CnRen_9_Cover) 
        
        instance.STIP_CnRen_10_Recomm = validated_data.get("STIP_CnRen_10_Recomm", instance.STIP_CnRen_10_Recomm) 
        instance.STIP_CnRen_10_Accepted = validated_data.get("STIP_CnRen_10_Accepted", instance.STIP_CnRen_10_Accepted) 
        instance.STIP_CnRen_10_CoverAmount = validated_data.get("STIP_CnRen_10_CoverAmount", instance.STIP_CnRen_10_CoverAmount) 
        instance.STIP_CnRen_10_Premium1 = validated_data.get("STIP_CnRen_10_Premium1", instance.STIP_CnRen_10_Premium1) 
        instance.STIP_CnRen_10_Premium2 = validated_data.get("STIP_CnRen_10_Premium2", instance.STIP_CnRen_10_Premium2) 
        instance.STIP_CnRen_10_Excess1 = validated_data.get("STIP_CnRen_10_Excess1", instance.STIP_CnRen_10_Excess1) 
        instance.STIP_CnRen_10_Excess2 = validated_data.get("STIP_CnRen_10_Excess2", instance.STIP_CnRen_10_Excess2) 
        instance.STIP_CnRen_10_Cover = validated_data.get("STIP_CnRen_10_Cover", instance.STIP_CnRen_10_Cover) 
        
        instance.STIP_CnRen_11_Recomm = validated_data.get("STIP_CnRen_11_Recomm", instance.STIP_CnRen_11_Recomm) 
        instance.STIP_CnRen_11_Accepted = validated_data.get("STIP_CnRen_11_Accepted", instance.STIP_CnRen_11_Accepted) 
        instance.STIP_CnRen_11_CoverAmount = validated_data.get("STIP_CnRen_11_CoverAmount", instance.STIP_CnRen_11_CoverAmount) 
        instance.STIP_CnRen_11_Premium1 = validated_data.get("STIP_CnRen_11_Premium1", instance.STIP_CnRen_11_Premium1) 
        instance.STIP_CnRen_11_Premium2 = validated_data.get("STIP_CnRen_11_Premium2", instance.STIP_CnRen_11_Premium2) 
        instance.STIP_CnRen_11_Excess1 = validated_data.get("STIP_CnRen_11_Excess1", instance.STIP_CnRen_11_Excess1) 
        instance.STIP_CnRen_11_Excess2 = validated_data.get("STIP_CnRen_11_Excess2", instance.STIP_CnRen_11_Excess2) 
        instance.STIP_CnRen_11_Cover = validated_data.get("STIP_CnRen_11_Cover", instance.STIP_CnRen_11_Cover) 
        
        instance.STIP_CnRen_12_Recomm = validated_data.get("STIP_CnRen_12_Recomm", instance.STIP_CnRen_12_Recomm) 
        instance.STIP_CnRen_12_Accepted = validated_data.get("STIP_CnRen_12_Accepted", instance.STIP_CnRen_12_Accepted) 
        instance.STIP_CnRen_12_CoverAmount = validated_data.get("STIP_CnRen_12_CoverAmount", instance.STIP_CnRen_12_CoverAmount) 
        instance.STIP_CnRen_12_Premium1 = validated_data.get("STIP_CnRen_12_Premium1", instance.STIP_CnRen_12_Premium1) 
        instance.STIP_CnRen_12_Premium2 = validated_data.get("STIP_CnRen_12_Premium2", instance.STIP_CnRen_12_Premium2) 
        instance.STIP_CnRen_12_Excess1 = validated_data.get("STIP_CnRen_12_Excess1", instance.STIP_CnRen_12_Excess1) 
        instance.STIP_CnRen_12_Excess2 = validated_data.get("STIP_CnRen_12_Excess2", instance.STIP_CnRen_12_Excess2) 
        instance.STIP_CnRen_12_Cover = validated_data.get("STIP_CnRen_12_Cover", instance.STIP_CnRen_12_Cover) 
        
        instance.STIP_CnRen_13_Recomm = validated_data.get("STIP_CnRen_13_Recomm", instance.STIP_CnRen_13_Recomm) 
        instance.STIP_CnRen_13_Accepted = validated_data.get("STIP_CnRen_13_Accepted", instance.STIP_CnRen_13_Accepted) 
        instance.STIP_CnRen_13_CoverAmount = validated_data.get("STIP_CnRen_13_CoverAmount", instance.STIP_CnRen_13_CoverAmount) 
        instance.STIP_CnRen_13_Premium1 = validated_data.get("STIP_CnRen_13_Premium1", instance.STIP_CnRen_13_Premium1) 
        instance.STIP_CnRen_13_Premium2 = validated_data.get("STIP_CnRen_13_Premium2", instance.STIP_CnRen_13_Premium2) 
        instance.STIP_CnRen_13_Excess1 = validated_data.get("STIP_CnRen_13_Excess1", instance.STIP_CnRen_13_Excess1) 
        instance.STIP_CnRen_13_Excess2 = validated_data.get("STIP_CnRen_13_Excess2", instance.STIP_CnRen_13_Excess2) 
        instance.STIP_CnRen_13_Cover = validated_data.get("STIP_CnRen_13_Cover", instance.STIP_CnRen_13_Cover) 
        
        instance.STIP_CnRen_14_Recomm = validated_data.get("STIP_CnRen_14_Recomm", instance.STIP_CnRen_14_Recomm) 
        instance.STIP_CnRen_14_Accepted = validated_data.get("STIP_CnRen_14_Accepted", instance.STIP_CnRen_14_Accepted) 
        instance.STIP_CnRen_14_CoverAmount = validated_data.get("STIP_CnRen_14_CoverAmount", instance.STIP_CnRen_14_CoverAmount) 
        instance.STIP_CnRen_14_Premium1 = validated_data.get("STIP_CnRen_14_Premium1", instance.STIP_CnRen_14_Premium1) 
        instance.STIP_CnRen_14_Premium2 = validated_data.get("STIP_CnRen_14_Premium2", instance.STIP_CnRen_14_Premium2) 
        instance.STIP_CnRen_14_Excess1 = validated_data.get("STIP_CnRen_14_Excess1", instance.STIP_CnRen_14_Excess1) 
        instance.STIP_CnRen_14_Excess2 = validated_data.get("STIP_CnRen_14_Excess2", instance.STIP_CnRen_14_Excess2) 
        instance.STIP_CnRen_14_Cover = validated_data.get("STIP_CnRen_14_Cover", instance.STIP_CnRen_14_Cover) 
        
        instance.STIP_CnRen_15_Recomm = validated_data.get("STIP_CnRen_15_Recomm", instance.STIP_CnRen_15_Recomm) 
        instance.STIP_CnRen_15_Accepted = validated_data.get("STIP_CnRen_15_Accepted", instance.STIP_CnRen_15_Accepted) 
        instance.STIP_CnRen_15_CoverAmount = validated_data.get("STIP_CnRen_15_CoverAmount", instance.STIP_CnRen_15_CoverAmount) 
        instance.STIP_CnRen_15_Premium1 = validated_data.get("STIP_CnRen_15_Premium1", instance.STIP_CnRen_15_Premium1) 
        instance.STIP_CnRen_15_Premium2 = validated_data.get("STIP_CnRen_15_Premium2", instance.STIP_CnRen_15_Premium2) 
        instance.STIP_CnRen_15_Excess1 = validated_data.get("STIP_CnRen_15_Excess1", instance.STIP_CnRen_15_Excess1) 
        instance.STIP_CnRen_15_Excess2 = validated_data.get("STIP_CnRen_15_Excess2", instance.STIP_CnRen_15_Excess2) 
        instance.STIP_CnRen_15_Cover = validated_data.get("STIP_CnRen_15_Cover", instance.STIP_CnRen_15_Cover) 
        
        instance.STIP_CnRen_16_Recomm = validated_data.get("STIP_CnRen_16_Recomm", instance.STIP_CnRen_16_Recomm) 
        instance.STIP_CnRen_16_Accepted = validated_data.get("STIP_CnRen_16_Accepted", instance.STIP_CnRen_16_Accepted) 
        instance.STIP_CnRen_16_CoverAmount = validated_data.get("STIP_CnRen_16_CoverAmount", instance.STIP_CnRen_16_CoverAmount) 
        instance.STIP_CnRen_16_Premium1 = validated_data.get("STIP_CnRen_16_Premium1", instance.STIP_CnRen_16_Premium1) 
        instance.STIP_CnRen_16_Premium2 = validated_data.get("STIP_CnRen_16_Premium2", instance.STIP_CnRen_16_Premium2) 
        instance.STIP_CnRen_16_Excess1 = validated_data.get("STIP_CnRen_16_Excess1", instance.STIP_CnRen_16_Excess1) 
        instance.STIP_CnRen_16_Excess2 = validated_data.get("STIP_CnRen_16_Excess2", instance.STIP_CnRen_16_Excess2) 
        instance.STIP_CnRen_16_Cover = validated_data.get("STIP_CnRen_16_Cover", instance.STIP_CnRen_16_Cover) 
        
        instance.STIP_CnRen_17_Recomm = validated_data.get("STIP_CnRen_17_Recomm", instance.STIP_CnRen_17_Recomm) 
        instance.STIP_CnRen_17_Accepted = validated_data.get("STIP_CnRen_17_Accepted", instance.STIP_CnRen_17_Accepted) 
        instance.STIP_CnRen_17_CoverAmount = validated_data.get("STIP_CnRen_17_CoverAmount", instance.STIP_CnRen_17_CoverAmount) 
        instance.STIP_CnRen_17_Premium1 = validated_data.get("STIP_CnRen_17_Premium1", instance.STIP_CnRen_17_Premium1) 
        instance.STIP_CnRen_17_Premium2 = validated_data.get("STIP_CnRen_17_Premium2", instance.STIP_CnRen_17_Premium2) 
        instance.STIP_CnRen_17_Excess1 = validated_data.get("STIP_CnRen_17_Excess1", instance.STIP_CnRen_17_Excess1) 
        instance.STIP_CnRen_17_Excess2 = validated_data.get("STIP_CnRen_17_Excess2", instance.STIP_CnRen_17_Excess2) 
        instance.STIP_CnRen_17_Cover = validated_data.get("STIP_CnRen_17_Cover", instance.STIP_CnRen_17_Cover) 
        
        instance.STIP_CnRen_18_Recomm = validated_data.get("STIP_CnRen_18_Recomm", instance.STIP_CnRen_18_Recomm) 
        instance.STIP_CnRen_18_Accepted = validated_data.get("STIP_CnRen_18_Accepted", instance.STIP_CnRen_18_Accepted) 
        instance.STIP_CnRen_18_CoverAmount = validated_data.get("STIP_CnRen_18_CoverAmount", instance.STIP_CnRen_18_CoverAmount) 
        instance.STIP_CnRen_18_Premium1 = validated_data.get("STIP_CnRen_18_Premium1", instance.STIP_CnRen_18_Premium1) 
        instance.STIP_CnRen_18_Premium2 = validated_data.get("STIP_CnRen_18_Premium2", instance.STIP_CnRen_18_Premium2) 
        instance.STIP_CnRen_18_Excess1 = validated_data.get("STIP_CnRen_18_Excess1", instance.STIP_CnRen_18_Excess1) 
        instance.STIP_CnRen_18_Excess2 = validated_data.get("STIP_CnRen_18_Excess2", instance.STIP_CnRen_18_Excess2) 
        instance.STIP_CnRen_18_Cover = validated_data.get("STIP_CnRen_18_Cover", instance.STIP_CnRen_18_Cover) 
        
        instance.STIP_CnRen_19_Recomm = validated_data.get("STIP_CnRen_19_Recomm", instance.STIP_CnRen_19_Recomm) 
        instance.STIP_CnRen_19_Accepted = validated_data.get("STIP_CnRen_19_Accepted", instance.STIP_CnRen_19_Accepted) 
        instance.STIP_CnRen_19_CoverAmount = validated_data.get("STIP_CnRen_19_CoverAmount", instance.STIP_CnRen_19_CoverAmount) 
        instance.STIP_CnRen_19_Premium1 = validated_data.get("STIP_CnRen_19_Premium1", instance.STIP_CnRen_19_Premium1) 
        instance.STIP_CnRen_19_Premium2 = validated_data.get("STIP_CnRen_19_Premium2", instance.STIP_CnRen_19_Premium2) 
        instance.STIP_CnRen_19_Excess1 = validated_data.get("STIP_CnRen_19_Excess1", instance.STIP_CnRen_19_Excess1) 
        instance.STIP_CnRen_19_Excess2 = validated_data.get("STIP_CnRen_19_Excess2", instance.STIP_CnRen_19_Excess2) 
        instance.STIP_CnRen_19_Cover = validated_data.get("STIP_CnRen_19_Cover", instance.STIP_CnRen_19_Cover) 
        
        instance.STIP_CnRen_20_Recomm = validated_data.get("STIP_CnRen_20_Recomm", instance.STIP_CnRen_20_Recomm) 
        instance.STIP_CnRen_20_Accepted = validated_data.get("STIP_CnRen_20_Accepted", instance.STIP_CnRen_20_Accepted) 
        instance.STIP_CnRen_20_CoverAmount = validated_data.get("STIP_CnRen_20_CoverAmount", instance.STIP_CnRen_20_CoverAmount) 
        instance.STIP_CnRen_20_Premium1 = validated_data.get("STIP_CnRen_20_Premium1", instance.STIP_CnRen_20_Premium1) 
        instance.STIP_CnRen_20_Premium2 = validated_data.get("STIP_CnRen_20_Premium2", instance.STIP_CnRen_20_Premium2) 
        instance.STIP_CnRen_20_Excess1 = validated_data.get("STIP_CnRen_20_Excess1", instance.STIP_CnRen_20_Excess1) 
        instance.STIP_CnRen_20_Excess2 = validated_data.get("STIP_CnRen_20_Excess2", instance.STIP_CnRen_20_Excess2) 
        instance.STIP_CnRen_20_Cover = validated_data.get("STIP_CnRen_20_Cover", instance.STIP_CnRen_20_Cover) 
        
        instance.STIP_CnRen_21_Recomm = validated_data.get("STIP_CnRen_21_Recomm", instance.STIP_CnRen_21_Recomm) 
        instance.STIP_CnRen_21_Accepted = validated_data.get("STIP_CnRen_21_Accepted", instance.STIP_CnRen_21_Accepted) 
        instance.STIP_CnRen_21_CoverAmount = validated_data.get("STIP_CnRen_21_CoverAmount", instance.STIP_CnRen_21_CoverAmount) 
        instance.STIP_CnRen_21_Premium1 = validated_data.get("STIP_CnRen_21_Premium1", instance.STIP_CnRen_21_Premium1) 
        instance.STIP_CnRen_21_Premium2 = validated_data.get("STIP_CnRen_21_Premium2", instance.STIP_CnRen_21_Premium2) 
        instance.STIP_CnRen_21_Excess1 = validated_data.get("STIP_CnRen_21_Excess1", instance.STIP_CnRen_21_Excess1) 
        instance.STIP_CnRen_21_Excess2 = validated_data.get("STIP_CnRen_21_Excess2", instance.STIP_CnRen_21_Excess2) 
        instance.STIP_CnRen_21_Cover = validated_data.get("STIP_CnRen_21_Cover", instance.STIP_CnRen_21_Cover) 
        
        instance.STIP_CnRen_22_Recomm = validated_data.get("STIP_CnRen_22_Recomm", instance.STIP_CnRen_22_Recomm) 
        instance.STIP_CnRen_22_Accepted = validated_data.get("STIP_CnRen_22_Accepted", instance.STIP_CnRen_22_Accepted) 
        instance.STIP_CnRen_22_CoverAmount = validated_data.get("STIP_CnRen_22_CoverAmount", instance.STIP_CnRen_22_CoverAmount) 
        instance.STIP_CnRen_22_Premium1 = validated_data.get("STIP_CnRen_22_Premium1", instance.STIP_CnRen_22_Premium1) 
        instance.STIP_CnRen_22_Premium2 = validated_data.get("STIP_CnRen_22_Premium2", instance.STIP_CnRen_22_Premium2) 
        instance.STIP_CnRen_22_Excess1 = validated_data.get("STIP_CnRen_22_Excess1", instance.STIP_CnRen_22_Excess1) 
        instance.STIP_CnRen_22_Excess2 = validated_data.get("STIP_CnRen_22_Excess2", instance.STIP_CnRen_22_Excess2) 
        instance.STIP_CnRen_22_Cover = validated_data.get("STIP_CnRen_22_Cover", instance.STIP_CnRen_22_Cover) 
        
        instance.STIP_CnRen_23_Recomm = validated_data.get("STIP_CnRen_23_Recomm", instance.STIP_CnRen_23_Recomm) 
        instance.STIP_CnRen_23_Accepted = validated_data.get("STIP_CnRen_23_Accepted", instance.STIP_CnRen_23_Accepted) 
        instance.STIP_CnRen_23_CoverAmount = validated_data.get("STIP_CnRen_23_CoverAmount", instance.STIP_CnRen_23_CoverAmount) 
        instance.STIP_CnRen_23_Premium1 = validated_data.get("STIP_CnRen_23_Premium1", instance.STIP_CnRen_23_Premium1) 
        instance.STIP_CnRen_23_Premium2 = validated_data.get("STIP_CnRen_23_Premium2", instance.STIP_CnRen_23_Premium2) 
        instance.STIP_CnRen_23_Excess1 = validated_data.get("STIP_CnRen_23_Excess1", instance.STIP_CnRen_23_Excess1) 
        instance.STIP_CnRen_23_Excess2 = validated_data.get("STIP_CnRen_23_Excess2", instance.STIP_CnRen_23_Excess2) 
        instance.STIP_CnRen_23_Cover = validated_data.get("STIP_CnRen_23_Cover", instance.STIP_CnRen_23_Cover) 
        
        instance.STIP_CnRen_24_Recomm = validated_data.get("STIP_CnRen_24_Recomm", instance.STIP_CnRen_24_Recomm) 
        instance.STIP_CnRen_24_Accepted = validated_data.get("STIP_CnRen_24_Accepted", instance.STIP_CnRen_24_Accepted) 
        instance.STIP_CnRen_24_CoverAmount = validated_data.get("STIP_CnRen_24_CoverAmount", instance.STIP_CnRen_24_CoverAmount) 
        instance.STIP_CnRen_24_Premium1 = validated_data.get("STIP_CnRen_24_Premium1", instance.STIP_CnRen_24_Premium1) 
        instance.STIP_CnRen_24_Premium2 = validated_data.get("STIP_CnRen_24_Premium2", instance.STIP_CnRen_24_Premium2) 
        instance.STIP_CnRen_24_Excess1 = validated_data.get("STIP_CnRen_24_Excess1", instance.STIP_CnRen_24_Excess1) 
        instance.STIP_CnRen_24_Excess2 = validated_data.get("STIP_CnRen_24_Excess2", instance.STIP_CnRen_24_Excess2) 
        instance.STIP_CnRen_24_Cover = validated_data.get("STIP_CnRen_24_Cover", instance.STIP_CnRen_24_Cover) 
        
        instance.STIP_CnRen_25_Recomm = validated_data.get("STIP_CnRen_25_Recomm", instance.STIP_CnRen_25_Recomm) 
        instance.STIP_CnRen_25_Accepted = validated_data.get("STIP_CnRen_25_Accepted", instance.STIP_CnRen_25_Accepted) 
        instance.STIP_CnRen_25_CoverAmount = validated_data.get("STIP_CnRen_25_CoverAmount", instance.STIP_CnRen_25_CoverAmount) 
        instance.STIP_CnRen_25_Premium1 = validated_data.get("STIP_CnRen_25_Premium1", instance.STIP_CnRen_25_Premium1) 
        instance.STIP_CnRen_25_Premium2 = validated_data.get("STIP_CnRen_25_Premium2", instance.STIP_CnRen_25_Premium2) 
        instance.STIP_CnRen_25_Excess1 = validated_data.get("STIP_CnRen_25_Excess1", instance.STIP_CnRen_25_Excess1) 
        instance.STIP_CnRen_25_Excess2 = validated_data.get("STIP_CnRen_25_Excess2", instance.STIP_CnRen_25_Excess2) 
        instance.STIP_CnRen_25_Cover = validated_data.get("STIP_CnRen_25_Cover", instance.STIP_CnRen_25_Cover) 
        
        instance.STIP_CnRen_26_Recomm = validated_data.get("STIP_CnRen_26_Recomm",instance.STIP_CnRen_26_Recomm) 
        instance.STIP_CnRen_26_Accepted = validated_data.get("STIP_CnRen_26_Accepted",instance.STIP_CnRen_26_Accepted) 
        instance.STIP_CnRen_26_CoverAmount = validated_data.get("STIP_CnRen_26_CoverAmount",instance.STIP_CnRen_26_CoverAmount) 
        instance.STIP_CnRen_26_Premium1 = validated_data.get("STIP_CnRen_26_Premium1",instance.STIP_CnRen_26_Premium1) 
        instance.STIP_CnRen_26_Premium2 = validated_data.get("STIP_CnRen_26_Premium2",instance.STIP_CnRen_26_Premium2) 
        instance.STIP_CnRen_26_Excess1 = validated_data.get("STIP_CnRen_26_Excess1",instance.STIP_CnRen_26_Excess1) 
        instance.STIP_CnRen_26_Excess2 = validated_data.get("STIP_CnRen_26_Excess2",instance.STIP_CnRen_26_Excess2) 
        instance.STIP_CnRen_26_Cover = validated_data.get("STIP_CnRen_26_Cover",instance.STIP_CnRen_26_Cover) 
        
        instance.STIP_CnRen_27_Recomm = validated_data.get("STIP_CnRen_27_Recomm", instance.STIP_CnRen_27_Recomm)
        instance.STIP_CnRen_27_Accepted = validated_data.get("STIP_CnRen_27_Accepted", instance.STIP_CnRen_27_Accepted)
        instance.STIP_CnRen_27_CoverAmount = validated_data.get("STIP_CnRen_27_CoverAmount", instance.STIP_CnRen_27_CoverAmount)
        instance.STIP_CnRen_27_Premium1 = validated_data.get("STIP_CnRen_27_Premium1", instance.STIP_CnRen_27_Premium1)
        instance.STIP_CnRen_27_Premium2 = validated_data.get("STIP_CnRen_27_Premium2", instance.STIP_CnRen_27_Premium2)
        instance.STIP_CnRen_27_Excess1 = validated_data.get("STIP_CnRen_27_Excess1", instance.STIP_CnRen_27_Excess1)
        instance.STIP_CnRen_27_Excess2 = validated_data.get("STIP_CnRen_27_Excess2", instance.STIP_CnRen_27_Excess2)
        instance.STIP_CnRen_27_Cover = validated_data.get("STIP_CnRen_27_Cover", instance.STIP_CnRen_27_Cover)

        instance.STIP_CnRen_FeeCharges = validated_data.get("STIP_CnRen_FeeCharges", instance.STIP_CnRen_FeeCharges)
        instance.STIP_CnRen_Commission = validated_data.get("STIP_CnRen_Commission", instance.STIP_CnRen_Commission)
        instance.STIP_CnRen_TotalPremium = validated_data.get("STIP_CnRen_TotalPremium", instance.STIP_CnRen_TotalPremium)

        instance.STIP_CnRI_AdviseGiven = validated_data.get("STIP_CnRI_AdviseGiven", instance.STIP_CnRI_AdviseGiven)
        instance.STIP_CnRI_ReplacePurpose = validated_data.get("STIP_CnRI_ReplacePurpose", instance.STIP_CnRI_ReplacePurpose)
        instance.STIP_CnRI_ReplaceReason = validated_data.get("STIP_CnRI_ReplaceReason", instance.STIP_CnRI_ReplaceReason)
        instance.STIP_CnRI_ReplaceSupplier = validated_data.get("STIP_CnRI_ReplaceSupplier", instance.STIP_CnRI_ReplaceSupplier)

        instance.STIP_HC_AddComments = validated_data.get("STIP_HC_AddComments", instance.STIP_HC_AddComments)
        instance.STIP_HC_ResidentialArea = validated_data.get("STIP_HC_ResidentialArea", instance.STIP_HC_ResidentialArea)
        instance.STIP_HC_StreetNumber = validated_data.get("STIP_HC_StreetNumber", instance.STIP_HC_StreetNumber)
        instance.STIP_HC_PostalCode = validated_data.get("STIP_HC_PostalCode", instance.STIP_HC_PostalCode)
        instance.STIP_HC_ResidenceType = validated_data.get("STIP_HC_ResidenceType", instance.STIP_HC_ResidenceType)
        instance.STIP_HC_Flat_GroundLevel = validated_data.get("STIP_HC_Flat_GroundLevel", instance.STIP_HC_Flat_GroundLevel)
        instance.STIP_HC_WallConstruction = validated_data.get("STIP_HC_WallConstruction", instance.STIP_HC_WallConstruction)
        instance.STIP_HC_RoofConstruction = validated_data.get("STIP_HC_RoofConstruction", instance.STIP_HC_RoofConstruction)
        instance.STIP_HC_SM_BurglarBar = validated_data.get("STIP_HC_SM_BurglarBar", instance.STIP_HC_SM_BurglarBar)
        instance.STIP_HC_SM_SecurityGate = validated_data.get("STIP_HC_SM_SecurityGate", instance.STIP_HC_SM_SecurityGate)
        instance.STIP_HC_SM_AlarmSystem = validated_data.get("STIP_HC_SM_AlarmSystem", instance.STIP_HC_SM_AlarmSystem)
        instance.STIP_HC_SM_SecurityArea = validated_data.get("STIP_HC_SM_AlarmSystem", instance.STIP_HC_SM_AlarmSystem)
        instance.STIP_HC_NoClaimBonus = validated_data.get("STIP_HC_NoClaimBonus", instance.STIP_HC_NoClaimBonus)
        instance.STIP_HC_SumInsured = validated_data.get("STIP_HC_SumInsured", instance.STIP_HC_SumInsured)
        instance.STIP_HCEx_BusinessType = validated_data.get("STIP_HCEx_BusinessType", instance.STIP_HCEx_BusinessType)
        instance.STIP_HCEx_InsuredAmount = validated_data.get("STIP_HCEx_InsuredAmount", instance.STIP_HCEx_InsuredAmount)
        instance.STIP_HC_ADI_General1 = validated_data.get("STIP_HC_ADI_General1", instance.STIP_HC_ADI_General1)
        instance.STIP_HC_ADI_General2 = validated_data.get("STIP_HC_ADI_General2", instance.STIP_HC_ADI_General1)
        instance.STIP_HC_ADI_MechElecBreakdown = validated_data.get("STIP_HC_ADI_MechElecBreakdown", instance.STIP_HC_ADI_MechElecBreakdown)
        instance.STIP_HC_ADI_ElectronicalBreakdown = validated_data.get("STIP_HC_ADI_ElectronicalBreakdown", instance.STIP_HC_ADI_ElectronicalBreakdown)
        instance.STIP_HC_ADI_PowerSurgeCover1 = validated_data.get("STIP_HC_ADI_PowerSurgeCover1", instance.STIP_HC_ADI_PowerSurgeCover1)
        instance.STIP_HC_ADI_PowerSurgeCover2 = validated_data.get("STIP_HC_ADI_PowerSurgeCover2", instance.STIP_HC_ADI_PowerSurgeCover2)
        instance.STIP_HC_ADI_PowerSurgeCover3 = validated_data.get("STIP_HC_ADI_PowerSurgeCover3", instance.STIP_HC_ADI_PowerSurgeCover3)
        instance.STIP_HC_Fee = validated_data.get("STIP_HC_Fee", instance.STIP_HC_Fee)
        instance.STIP_HC_Commission = validated_data.get("STIP_HC_Commission", instance.STIP_HC_Commission)
        instance.STIP_HC_TotalPremium = validated_data.get("STIP_HC_TotalPremium", instance.STIP_HC_TotalPremium)

        instance.STIP_Build_AddComments = validated_data.get("STIP_Build_AddComments", instance.STIP_Build_AddComments)
        instance.STIP_Build_ResidentialArea = validated_data.get("STIP_Build_ResidentialArea", instance.STIP_Build_ResidentialArea)
        instance.STIP_Build_StreetNumber = validated_data.get("STIP_Build_StreetNumber", instance.STIP_Build_StreetNumber)
        instance.STIP_Build_PostalCode = validated_data.get("STIP_Build_PostalCode", instance.STIP_Build_PostalCode)
        instance.STIP_Build_ResidenceType = validated_data.get("STIP_Build_ResidenceType", instance.STIP_Build_ResidenceType)
        instance.STIP_Build_Type = validated_data.get("STIP_Build_Type", instance.STIP_Build_Type)
        # instance.STIP_Build_Flat_GroundLevel = validated_data.get("STIP_Build_Flat_GroundLevel", instance.STIP_Build_Flat_GroundLevel)
        instance.STIP_Build_Voluntary = validated_data.get("STIP_Build_Voluntary", instance.STIP_Build_Voluntary)
        instance.STIP_Build_SnL = validated_data.get("STIP_Build_SnL", instance.STIP_Build_SnL)
        instance.STIP_Build_ADI = validated_data.get("STIP_Build_ADI", instance.STIP_Build_ADI)
        instance.STIP_Build_WallConstruction = validated_data.get("STIP_Build_WallConstruction", instance.STIP_Build_WallConstruction)
        instance.STIP_Build_RoofConstruction = validated_data.get("STIP_Build_RoofConstruction", instance.STIP_Build_RoofConstruction)
        instance.STIP_Build_Fee = validated_data.get("STIP_Build_Fee", instance.STIP_Build_Fee)
        instance.STIP_Build_Commission = validated_data.get("STIP_Build_Commission", instance.STIP_Build_Commission)
        instance.STIP_Build_TotalPremium = validated_data.get("STIP_Build_TotalPremium", instance.STIP_Build_TotalPremium)
        instance.STIP_Build_AdditionalAdvise = validated_data.get("STIP_Build_AdditionalAdvise", instance.STIP_Build_AdditionalAdvise)

        instance.STIP_AddProp_AddComments = validated_data.get("STIP_AddProp_AddComments", instance.STIP_AddProp_AddComments)
        instance.STIP_AddProp_ResidentialArea = validated_data.get("STIP_AddProp_ResidentialArea", instance.STIP_AddProp_ResidentialArea)
        instance.STIP_AddProp_StreetNumber = validated_data.get("STIP_AddProp_StreetNumber", instance.STIP_AddProp_StreetNumber)
        instance.STIP_AddProp_PostalCode = validated_data.get("STIP_AddProp_PostalCode", instance.STIP_AddProp_PostalCode)
        instance.STIP_AddProp_ResidenceType = validated_data.get("STIP_AddProp_ResidenceType", instance.STIP_AddProp_ResidenceType)
        instance.STIP_AddProp_Type = validated_data.get("STIP_AddProp_Type", instance.STIP_AddProp_Type)
        # instance.STIP_AddProp_Flat_GroundLevel = validated_data.get("STIP_AddProp_Flat_GroundLevel", instance.STIP_AddProp_Flat_GroundLevel)
        instance.STIP_AddProp_Voluntary = validated_data.get("STIP_AddProp_Voluntary", instance.STIP_AddProp_Voluntary)
        instance.STIP_AddProp_SnL = validated_data.get("STIP_AddProp_SnL", instance.STIP_AddProp_SnL)
        instance.STIP_AddProp_ADI = validated_data.get("STIP_AddProp_ADI", instance.STIP_AddProp_ADI)
        instance.STIP_AddProp_WallConstruction = validated_data.get("STIP_AddProp_WallConstruction", instance.STIP_AddProp_WallConstruction)
        instance.STIP_AddProp_RoofConstruction = validated_data.get("STIP_AddProp_RoofConstruction", instance.STIP_AddProp_RoofConstruction)
        instance.STIP_AddProp_Fee = validated_data.get("STIP_AddProp_Fee", instance.STIP_AddProp_Fee)
        instance.STIP_AddProp_Commission = validated_data.get("STIP_AddProp_Commission", instance.STIP_AddProp_Commission)
        instance.STIP_AddProp_TotalPremium = validated_data.get("STIP_AddProp_TotalPremium", instance.STIP_AddProp_TotalPremium)
        instance.STIP_AddProp_AdditionalAdvise = validated_data.get("STIP_AddProp_AdditionalAdvise", instance.STIP_AddProp_AdditionalAdvise)

        instance.STIP_Vehicle_AddComments = validated_data.get("STIP_Vehicle_AddComments", instance.STIP_Vehicle_AddComments)
        instance.STIP_Vehicle_Owner = validated_data.get("STIP_Vehicle_Owner", instance.STIP_Vehicle_Owner)
        instance.STIP_Vehicle_RegOwner = validated_data.get("STIP_Vehicle_RegOwner", instance.STIP_Vehicle_RegOwner)
        instance.STIP_Vehicle_Usage = validated_data.get("STIP_Vehicle_Usage", instance.STIP_Vehicle_Usage)
        instance.STIP_Vehicle_ONParkingOptions = validated_data.get("STIP_Vehicle_ONParkingOptions", instance.STIP_Vehicle_ONParkingOptions)
        instance.STIP_Vehicle_ONParking = validated_data.get("STIP_Vehicle_ONParking", instance.STIP_Vehicle_ONParking)
        instance.STIP_Vehicle_ONOtherParking = validated_data.get("STIP_Vehicle_ONOtherParking", instance.STIP_Vehicle_ONOtherParking)
        instance.STIP_Vehicle_CoverType = validated_data.get("STIP_Vehicle_CoverType", instance.STIP_Vehicle_CoverType)
        instance.STIP_Vehicle_SM1 = validated_data.get("STIP_Vehicle_SM1", instance.STIP_Vehicle_SM1)
        instance.STIP_Vehicle_SM2 = validated_data.get("STIP_Vehicle_SM2", instance.STIP_Vehicle_SM2)
        instance.STIP_Vehicle_SM3 = validated_data.get("STIP_Vehicle_SM3", instance.STIP_Vehicle_SM3)
        instance.STIP_Vehicle_SM4 = validated_data.get("STIP_Vehicle_SM4", instance.STIP_Vehicle_SM4)
        instance.STIP_Vehicle_Driver = validated_data.get("STIP_Vehicle_Driver", instance.STIP_Vehicle_Driver)
        instance.STIP_Vehicle_DriverLicIssDate = validated_data.get("STIP_Vehicle_DriverLicIssDate", instance.STIP_Vehicle_DriverLicIssDate)
        instance.STIP_Vehicle_LicCode = validated_data.get("STIP_Vehicle_LicCode", instance.STIP_Vehicle_LicCode)
        instance.STIP_Vehicle_SumInsured = validated_data.get("STIP_Vehicle_SumInsured", instance.STIP_Vehicle_SumInsured)
        instance.STIP_Vehicle_ClaimBonus = validated_data.get("STIP_Vehicle_ClaimBonus", instance.STIP_Vehicle_ClaimBonus)
        instance.STIP_Vehicle_VoluntaryExcess = validated_data.get("STIP_Vehicle_VoluntaryExcess", instance.STIP_Vehicle_VoluntaryExcess)
        instance.STIP_Vehicle_Extras1 = validated_data.get("STIP_Vehicle_Extras1", instance.STIP_Vehicle_Extras1)
        instance.STIP_Vehicle_ExtrasAmount1 = validated_data.get("STIP_Vehicle_ExtrasAmount1", instance.STIP_Vehicle_ExtrasAmount1)
        instance.STIP_Vehicle_Extras2 = validated_data.get("STIP_Vehicle_Extras2", instance.STIP_Vehicle_Extras2)
        instance.STIP_Vehicle_ExtrasAmount2 = validated_data.get("STIP_Vehicle_ExtrasAmount2", instance.STIP_Vehicle_ExtrasAmount2)
        instance.STIP_Vehicle_Extras3 = validated_data.get("STIP_Vehicle_Extras3", instance.STIP_Vehicle_Extras3)
        instance.STIP_Vehicle_ExtrasAmount3 = validated_data.get("STIP_Vehicle_ExtrasAmount3", instance.STIP_Vehicle_ExtrasAmount3)
        instance.STIP_Vehicle_Extras4 = validated_data.get("STIP_Vehicle_Extras4", instance.STIP_Vehicle_Extras4)
        instance.STIP_Vehicle_ExtrasAmount4 = validated_data.get("STIP_Vehicle_ExtrasAmount4", instance.STIP_Vehicle_ExtrasAmount4)
        instance.STIP_Vehicle_Extras5 = validated_data.get("STIP_Vehicle_Extras5", instance.STIP_Vehicle_Extras5)
        instance.STIP_Vehicle_ExtrasAmount5 = validated_data.get("STIP_Vehicle_ExtrasAmount5", instance.STIP_Vehicle_ExtrasAmount5)
        instance.STIP_Vehicle_Extras6 = validated_data.get("STIP_Vehicle_Extras6", instance.STIP_Vehicle_Extras6)
        instance.STIP_Vehicle_ExtrasAmount6 = validated_data.get("STIP_Vehicle_ExtrasAmount6", instance.STIP_Vehicle_ExtrasAmount6)
        instance.STIP_Vehicle_Extras7 = validated_data.get("STIP_Vehicle_Extras7", instance.STIP_Vehicle_Extras7)
        instance.STIP_Vehicle_ExtrasAmount7 = validated_data.get("STIP_Vehicle_ExtrasAmount7", instance.STIP_Vehicle_ExtrasAmount7)
        instance.STIP_Vehicle_Extras8 = validated_data.get("STIP_Vehicle_Extras8", instance.STIP_Vehicle_Extras8)
        instance.STIP_Vehicle_ExtrasAmount8 = validated_data.get("STIP_Vehicle_ExtrasAmount8", instance.STIP_Vehicle_ExtrasAmount8)
        instance.STIP_Vehicle_Extras9 = validated_data.get("STIP_Vehicle_Extras9", instance.STIP_Vehicle_Extras9)
        instance.STIP_Vehicle_ExtrasAmount9 = validated_data.get("STIP_Vehicle_ExtrasAmount9", instance.STIP_Vehicle_ExtrasAmount10)
        instance.STIP_Vehicle_Extras10 = validated_data.get("STIP_Vehicle_Extras10", instance.STIP_Vehicle_Extras10)
        instance.STIP_Vehicle_ExtrasAmount10 = validated_data.get("STIP_Vehicle_ExtrasAmount10", instance.STIP_Vehicle_ExtrasAmount10)
        instance.STIP_Vehicle_Extras11 = validated_data.get("STIP_Vehicle_Extras11", instance.STIP_Vehicle_Extras11)
        instance.STIP_Vehicle_ExtrasAmount11 = validated_data.get("STIP_Vehicle_ExtrasAmount11", instance.STIP_Vehicle_ExtrasAmount11)
        instance.STIP_Vehicle_Extras12 = validated_data.get("STIP_Vehicle_Extras12", instance.STIP_Vehicle_Extras12)
        instance.STIP_Vehicle_ExtrasAmount12 = validated_data.get("STIP_Vehicle_ExtrasAmount12", instance.STIP_Vehicle_ExtrasAmount12)
        instance.STIP_Vehicle_Extras13 = validated_data.get("STIP_Vehicle_Extras13", instance.STIP_Vehicle_Extras13)
        instance.STIP_Vehicle_ExtrasAmount13 = validated_data.get("STIP_Vehicle_ExtrasAmount13", instance.STIP_Vehicle_ExtrasAmount13)
        instance.STIP_Vehicle_Extras14 = validated_data.get("STIP_Vehicle_Extras14", instance.STIP_Vehicle_Extras14)
        instance.STIP_Vehicle_ExtrasAmount14 = validated_data.get("STIP_Vehicle_ExtrasAmount14", instance.STIP_Vehicle_ExtrasAmount1)
        instance.STIP_Vehicle_AC1 = validated_data.get("STIP_Vehicle_AC1", instance.STIP_Vehicle_AC1)
        instance.STIP_Vehicle_AC2 = validated_data.get("STIP_Vehicle_AC2", instance.STIP_Vehicle_AC2)
        instance.STIP_Vehicle_AC3 = validated_data.get("STIP_Vehicle_AC3", instance.STIP_Vehicle_AC2)
        instance.STIP_Vehicle_AC4 = validated_data.get("STIP_Vehicle_AC4", instance.STIP_Vehicle_AC2)
        instance.STIP_Vehicle_Fees = validated_data.get("STIP_Vehicle_Fees", instance.STIP_Vehicle_Fees)
        instance.STIP_Vehicle_Commission = validated_data.get("STIP_Vehicle_Commission", instance.STIP_Vehicle_Commission)
        instance.STIP_Vehicle_TotalPremium = validated_data.get("STIP_Vehicle_Commission", instance.STIP_Vehicle_Commission)
        instance.STIP_Vehicle_Comments = validated_data.get("STIP_Vehicle_Comments", instance.STIP_Vehicle_Comments)
            
        instance.STIP_MotorC_AddComments = validated_data.get("STIP_MotorC_AddComments", instance.STIP_MotorC_AddComments)
        instance.STIP_MotorC_RegOwner = validated_data.get("STIP_MotorC_RegOwner", instance.STIP_MotorC_RegOwner)
        instance.STIP_MotorC_Usage = validated_data.get("STIP_MotorC_Usage", instance.STIP_MotorC_Usage)
        instance.STIP_MotorC_ONParkingOptions = validated_data.get("STIP_MotorC_ONParkingOptions", instance.STIP_MotorC_ONParkingOptions)
        instance.STIP_MotorC_ONParking = validated_data.get("STIP_MotorC_ONParking", instance.STIP_MotorC_ONParking)
        instance.STIP_MotorC_ONOtherParking = validated_data.get("STIP_MotorC_ONOtherParking", instance.STIP_MotorC_ONOtherParking)
        instance.STIP_MotorC_CoverType = validated_data.get("STIP_MotorC_CoverType", instance.STIP_MotorC_CoverType)
        instance.STIP_MotorC_Driver = validated_data.get("STIP_MotorC_Driver", instance.STIP_MotorC_Driver)
        instance.STIP_MotorC_Driver1 = validated_data.get("STIP_MotorC_Driver1", instance.STIP_MotorC_Driver1)
        instance.STIP_MotorC_DriverLicIssDate = validated_data.get("STIP_MotorC_DriverLicIssDate", instance.STIP_MotorC_DriverLicIssDate)
        instance.STIP_MotorC_LicCode = validated_data.get("STIP_MotorC_LicCode", instance.STIP_MotorC_LicCode)
        instance.STIP_MotorC_SumInsured = validated_data.get("STIP_MotorC_SumInsured", instance.STIP_MotorC_SumInsured)
        instance.STIP_MotorC_ClaimBonus = validated_data.get("STIP_MotorC_ClaimBonus", instance.STIP_MotorC_ClaimBonus)
        instance.STIP_MotorC_Fees = validated_data.get("STIP_MotorC_Fees", instance.STIP_MotorC_Fees)
        instance.STIP_MotorC_Commission = validated_data.get("STIP_MotorC_Commission", instance.STIP_MotorC_Commission)
        instance.STIP_MotorC_TotalPremium = validated_data.get("STIP_MotorC_TotalPremium", instance.STIP_MotorC_TotalPremium)
        instance.STIP_MotorC_Comments = validated_data.get("STIP_MotorC_Comments", instance.STIP_MotorC_Comments)

        instance.STIP_Trailer_AddComments = validated_data.get("STIP_Trailer_AddComments", instance.STIP_Trailer_AddComments)
        instance.STIP_Trailer_RegOwner = validated_data.get("STIP_Trailer_RegOwner", instance.STIP_Trailer_RegOwner)
        instance.STIP_Trailer_Type = validated_data.get("STIP_Trailer_Type", instance.STIP_Trailer_Type)
        instance.STIP_Trailer_ONParkingOptions = validated_data.get("STIP_Trailer_ONParkingOptions", instance.STIP_Trailer_ONParkingOptions)
        instance.STIP_Trailer_ONOtherParking = validated_data.get("STIP_Trailer_ONOtherParking", instance.STIP_Trailer_ONOtherParking)
        instance.STIP_Trailer_SumInsured = validated_data.get("STIP_Trailer_SumInsured", instance.STIP_Trailer_SumInsured)
        instance.STIP_Trailer_ClaimBonus = validated_data.get("STIP_Trailer_ClaimBonus", instance.STIP_Trailer_ClaimBonus)
        instance.STIP_Trailer_Fees = validated_data.get("STIP_Trailer_Fees", instance.STIP_Trailer_Fees)
        instance.STIP_Trailer_Commission = validated_data.get("STIP_Trailer_Commission", instance.STIP_Trailer_Commission)
        instance.STIP_Trailer_TotalPremium = validated_data.get("STIP_Trailer_TotalPremium", instance.STIP_Trailer_TotalPremium)
        instance.STIP_Trailer_Comments = validated_data.get("STIP_Trailer_Comments", instance.STIP_Trailer_Comments)

        instance.STIP_WaterC_AddComments = validated_data.get("STIP_WaterC_AddComments", instance.STIP_WaterC_AddComments)
        instance.STIP_WaterC_RegOwner = validated_data.get("STIP_WaterC_RegOwner", instance.STIP_WaterC_RegOwner)
        instance.STIP_WaterC_Type = validated_data.get("STIP_WaterC_Type", instance.STIP_WaterC_Type)
        instance.STIP_WaterC_Hull = validated_data.get("STIP_WaterC_Hull", instance.STIP_WaterC_Hull)
        instance.STIP_WaterC_SumInsured = validated_data.get("STIP_WaterC_SumInsured", instance.STIP_WaterC_SumInsured)
        instance.STIP_WaterC_VIN = validated_data.get("STIP_WaterC_VIN", instance.STIP_WaterC_VIN)
        instance.STIP_WaterC_EngineNumber = validated_data.get("STIP_WaterC_EngineNumber", instance.STIP_WaterC_EngineNumber)
        instance.STIP_WaterC_OC_Glitter = validated_data.get("STIP_WaterC_OC_Glitter", instance.STIP_WaterC_OC_Glitter)
        instance.STIP_WaterC_OC_SpecifiedAccessories = validated_data.get("STIP_WaterC_OC_SpecifiedAccessories", instance.STIP_WaterC_OC_SpecifiedAccessories)
        instance.STIP_WaterC_OC_MotorType = validated_data.get("STIP_WaterC_OC_MotorType", instance.STIP_WaterC_OC_MotorType)
        instance.STIP_WaterC_OC_Output = validated_data.get("STIP_WaterC_OC_Output", instance.STIP_WaterC_OC_Output)
        instance.STIP_WaterC_Fees = validated_data.get("STIP_WaterC_Fees", instance.STIP_WaterC_Fees)
        instance.STIP_WaterC_Commission = validated_data.get("STIP_WaterC_Commission", instance.STIP_WaterC_Commission)
        instance.STIP_WaterC_TotalPremium = validated_data.get("STIP_WaterC_TotalPremium", instance.STIP_WaterC_TotalPremium)
        instance.STIP_WaterC_Comments = validated_data.get("STIP_WaterC_Comments", instance.STIP_WaterC_Comments)

        instance.STIP_PersonalLL_AddComments = validated_data.get("STIP_PersonalLL_AddComments", instance.STIP_PersonalLL_AddComments)
        instance.STIP_PersonalLL_IndemnityLimit = validated_data.get("STIP_PersonalLL_IndemnityLimit", instance.STIP_PersonalLL_IndemnityLimit)
        instance.STIP_PersonalLL_IndemnityLimitDetail = validated_data.get("STIP_PersonalLL_IndemnityLimitDetail", instance.STIP_PersonalLL_IndemnityLimitDetail)
        instance.STIP_PersonalLL_Fees = validated_data.get("STIP_PersonalLL_Fees", instance.STIP_PersonalLL_Fees)
        instance.STIP_PersonalLL_Commission = validated_data.get("STIP_PersonalLL_Commission", instance.STIP_PersonalLL_Commission)
        instance.STIP_PersonalLL_TotalPremium = validated_data.get("STIP_PersonalLL_TotalPremium", instance.STIP_PersonalLL_TotalPremium)
        instance.STIP_PersonalLL_Comments = validated_data.get("STIP_PersonalLL_Comments", instance.STIP_PersonalLL_Comments)

        instance.STIP_LegalA_AddComments = validated_data.get("STIP_LegalA_AddComments", instance.STIP_LegalA_AddComments)
        instance.STIP_LegalA_IndemnityLimit = validated_data.get("STIP_LegalA_IndemnityLimit", instance.STIP_LegalA_IndemnityLimit)
        instance.STIP_LegalA_IndemnityLimitDetail = validated_data.get("STIP_LegalA_IndemnityLimitDetail", instance.STIP_LegalA_IndemnityLimitDetail)
        instance.STIP_LegalA_Fees = validated_data.get("STIP_LegalA_Fees", instance.STIP_LegalA_Fees)
        instance.STIP_LegalA_Commission = validated_data.get("STIP_LegalA_Commission", instance.STIP_LegalA_Commission)
        instance.STIP_LegalA_TotalPremium = validated_data.get("STIP_LegalA_TotalPremium", instance.STIP_LegalA_TotalPremium)
        instance.STIP_LegalA_Comments = validated_data.get("STIP_LegalA_Comments", instance.STIP_LegalA_Comments)

        instance.STIP_ProductConsidered = validated_data.get("STIP_ProductConsidered", instance.STIP_ProductConsidered)
        instance.STIP_ProductRecommended = validated_data.get("STIP_ProductRecommended", instance.STIP_ProductRecommended)
        instance.STIP_ProductReasons = validated_data.get("STIP_ProductReasons", instance.STIP_ProductReasons)

        instance.STIP_DbyI_AddComments = validated_data.get("STIP_DbyI_AddComments", instance.STIP_DbyI_AddComments)
        instance.STIP_DbyI_IName = validated_data.get("STIP_DbyI_IName", instance.STIP_DbyI_IName)
        instance.STIP_DbyI_Code = validated_data.get("STIP_DbyI_Code", instance.STIP_DbyI_Code)
        instance.STIP_DbyI_Signature = validated_data.get("STIP_DbyI_Signature", instance.STIP_DbyI_Signature)
        instance.STIP_DbyI_Date = validated_data.get("STIP_DbyI_Date", instance.STIP_DbyI_Date)

        # instance.STIP_MSA_ClientName = validated_data.get("STIP_MSA_ClientName", instance.STIP_MSA_ClientName)
        # instance.STIP_MSA_ClientIdNumber = validated_data.get("STIP_MSA_ClientIdNumber", instance.STIP_MSA_ClientIdNumber)
        # instance.STIP_MSA_ClientAddress = validated_data.get("STIP_MSA_ClientAddress", instance.STIP_MSA_ClientAddress)
        # instance.STIP_MSA_ClientEmail = validated_data.get("STIP_MSA_ClientEmail", instance.STIP_MSA_ClientEmail)
        # instance.STIP_MSA_ClientPhone = validated_data.get("STIP_MSA_ClientPhone", instance.STIP_MSA_ClientPhone)
        # instance.STIP_MSA_ClientDate = validated_data.get("STIP_MSA_ClientDate", instance.STIP_MSA_ClientDate)

        # instance.STIP_MSA_Name = validated_data.get("STIP_MSA_Name", instance.STIP_MSA_Name)
        # instance.STIP_MSA_MaritalStatus = validated_data.get("STIP_MSA_MaritalStatus", instance.STIP_MSA_MaritalStatus)
        # instance.STIP_MSA_Gender = validated_data.get("STIP_MSA_Gender", instance.STIP_MSA_Gender)
        # instance.STIP_MSA_Occupation = validated_data.get("STIP_MSA_Occupation", instance.STIP_MSA_Occupation)
        # instance.STIP_MSA_Income = validated_data.get("STIP_MSA_Income", instance.STIP_MSA_Income)
        # instance.STIP_MSA_Subsidy = validated_data.get("STIP_MSA_Subsidy", instance.STIP_MSA_Subsidy)
        # instance.STIP_MSA_Dependant = validated_data.get("STIP_MSA_Dependant", instance.STIP_MSA_Dependant)
        # instance.STIP_MSA_Spouse = validated_data.get("STIP_MSA_Spouse", instance.STIP_MSA_Spouse)
        # instance.STIP_MSA_AdultDependant = validated_data.get("STIP_MSA_AdultDependant", instance.STIP_MSA_AdultDependant)
        # instance.STIP_MSA_ChronicM = validated_data.get("STIP_MSA_ChronicM", instance.STIP_MSA_ChronicM)
        # instance.STIP_MSA_ChronicS = validated_data.get("STIP_MSA_ChronicM", instance.STIP_MSA_ChronicM)
        # instance.STIP_MSA_ChronicAD = validated_data.get("STIP_MSA_ChronicAD", instance.STIP_MSA_ChronicAD)
        # instance.STIP_MSA_ChronicC = validated_data.get("STIP_MSA_ChronicC", instance.STIP_MSA_ChronicC)
        # instance.STIP_MSA_ChronicOC = validated_data.get("STIP_MSA_ChronicOC", instance.STIP_MSA_ChronicOC)
        # instance.STIP_MSA_PFromDate = validated_data.get("STIP_MSA_PFromDate", instance.STIP_MSA_PFromDate)
        # instance.STIP_MSA_PTODate = validated_data.get("STIP_MSA_PTODate", instance.STIP_MSA_PTODate)

        # instance.STIP_BackInfo = validated_data.get("STIP_BackInfo", instance.STIP_BackInfo)
            
        # instance.STIP_SNA_Needs1 = validated_data.get("STIP_SNA_Needs1", instance.STIP_SNA_Needs1)
        # instance.STIP_SNA_Comments1 = validated_data.get("STIP_SNA_Comments1", instance.STIP_SNA_Comments1)
        # instance.STIP_SNA_Needs2 = validated_data.get("STIP_SNA_Needs2", instance.STIP_SNA_Needs2)
        # instance.STIP_SNA_Comments2 = validated_data.get("STIP_SNA_Comments2", instance.STIP_SNA_Comments2)
        # instance.STIP_SNA_Needs3 = validated_data.get("STIP_SNA_Needs3", instance.STIP_SNA_Needs3)
        # instance.STIP_SNA_Comments3 = validated_data.get("STIP_SNA_Comments3", instance.STIP_SNA_Comments3)
        # instance.STIP_SNA_Needs4 = validated_data.get("STIP_SNA_Needs4", instance.STIP_SNA_Needs4)
        # instance.STIP_SNA_Comments4 = validated_data.get("STIP_SNA_Comments4", instance.STIP_SNA_Comments4)
        # instance.STIP_SNA_Needs5 = validated_data.get("STIP_SNA_Needs5", instance.STIP_SNA_Needs5)
        # instance.STIP_SNA_Comments5 = validated_data.get("STIP_SNA_Comments5", instance.STIP_SNA_Comments5)
        # instance.STIP_SNA_Needs6 = validated_data.get("STIP_SNA_Needs6", instance.STIP_SNA_Needs6)
        # instance.STIP_SNA_Comments6 = validated_data.get("STIP_SNA_Comments6", instance.STIP_SNA_Comments6)
        # instance.STIP_SNA_Needs7 = validated_data.get("STIP_SNA_Needs7", instance.STIP_SNA_Needs7)
        # instance.STIP_SNA_Comments7 = validated_data.get("STIP_SNA_Comments7", instance.STIP_SNA_Comments7)
        # instance.STIP_SNA_Needs8 = validated_data.get("STIP_SNA_Needs8", instance.STIP_SNA_Needs8)
        # instance.STIP_SNA_Comments8 = validated_data.get("STIP_SNA_Comments8", instance.STIP_SNA_Comments8)
        # instance.STIP_SNA_Needs9 = validated_data.get("STIP_SNA_Needs9", instance.STIP_SNA_Needs9)
        # instance.STIP_SNA_Comments9 = validated_data.get("STIP_SNA_Comments9", instance.STIP_SNA_Comments9)
        # instance.STIP_SNA_Needs10 = validated_data.get("STIP_SNA_Needs10", instance.STIP_SNA_Needs10)
        # instance.STIP_SNA_Comments10 = validated_data.get("STIP_SNA_Comments10", instance.STIP_SNA_Comments1)
            
        # instance.STIP_CoMAB_Current1 = validated_data.get("STIP_CoMAB_Current1", instance.STIP_CoMAB_Current1)
        # instance.STIP_CoMAB_Replaced1 = validated_data.get("STIP_CoMAB_Replaced1", instance.STIP_CoMAB_Replaced1)
        # instance.STIP_CoMAB_Current2 = validated_data.get("STIP_CoMAB_Current2", instance.STIP_CoMAB_Current2)
        # instance.STIP_CoMAB_Replaced2 = validated_data.get("STIP_CoMAB_Replaced2", instance.STIP_CoMAB_Replaced2)
        # instance.STIP_CoMAB_Current3 = validated_data.get("STIP_CoMAB_Current3", instance.STIP_CoMAB_Current3)
        # instance.STIP_CoMAB_Replaced3 = validated_data.get("STIP_CoMAB_Replaced3", instance.STIP_CoMAB_Replaced3)
        # instance.STIP_CoMAB_Current4 = validated_data.get("STIP_CoMAB_Current4", instance.STIP_CoMAB_Current4)
        # instance.STIP_CoMAB_Replaced4 = validated_data.get("STIP_CoMAB_Replaced4", instance.STIP_CoMAB_Replaced4)
        # instance.STIP_CoMAB_Current5 = validated_data.get("STIP_CoMAB_Current5", instance.STIP_CoMAB_Current5)
        # instance.STIP_CoMAB_Replaced5 = validated_data.get("STIP_CoMAB_Replaced5", instance.STIP_CoMAB_Replaced5)
        # instance.STIP_CoMAB_Current6 = validated_data.get("STIP_CoMAB_Current6", instance.STIP_CoMAB_Current6)
        # instance.STIP_CoMAB_Replaced6 = validated_data.get("STIP_CoMAB_Replaced6", instance.STIP_CoMAB_Replaced6)
        # instance.STIP_CoMAB_Current7 = validated_data.get("STIP_CoMAB_Current7", instance.STIP_CoMAB_Current7)
        # instance.STIP_CoMAB_Replaced7 = validated_data.get("STIP_CoMAB_Replaced7", instance.STIP_CoMAB_Replaced7)
        # instance.STIP_CoMAB_Current8 = validated_data.get("STIP_CoMAB_Current8", instance.STIP_CoMAB_Current8)
        # instance.STIP_CoMAB_Replaced8 = validated_data.get("STIP_CoMAB_Replaced8", instance.STIP_CoMAB_Replaced8)
        # instance.STIP_CoMAB_Current9 = validated_data.get("STIP_CoMAB_Current9", instance.STIP_CoMAB_Current9)
        # instance.STIP_CoMAB_Replaced9 = validated_data.get("STIP_CoMAB_Replaced9", instance.STIP_CoMAB_Replaced9)
        # instance.STIP_CoMAB_Current10 = validated_data.get("STIP_CoMAB_Current10", instance.STIP_CoMAB_Current10)
        # instance.STIP_CoMAB_Replaced10 = validated_data.get("STIP_CoMAB_Replaced10", instance.STIP_CoMAB_Replaced10)
        # instance.STIP_CoMAB_Current11 = validated_data.get("STIP_CoMAB_Current11", instance.STIP_CoMAB_Current11)
        # instance.STIP_CoMAB_Replaced11 = validated_data.get("STIP_CoMAB_Replaced11", instance.STIP_CoMAB_Replaced11)
        # instance.STIP_CoMAB_Current12 = validated_data.get("STIP_CoMAB_Current12", instance.STIP_CoMAB_Current12)
        # instance.STIP_CoMAB_Replaced12 = validated_data.get("STIP_CoMAB_Replaced12", instance.STIP_CoMAB_Replaced1)

        # instance.STIP_SectionD_SnF = validated_data.get("STIP_SectionD_SnF", instance.STIP_SectionD_SnF)
        # instance.STIP_SectionE_PMB = validated_data.get("STIP_SectionE_PMB", instance.STIP_SectionE_PMB)

        # instance.STIP_SectionF_NotAccepted = validated_data.get("STIP_SectionF_NotAccepted", instance.STIP_SectionF_NotAccepted)
        # instance.STIP_SectionF_Reasons = validated_data.get("STIP_SectionF_Reasons", instance.STIP_SectionF_Reasons)
        # instance.STIP_SectionF_Consequences = validated_data.get("STIP_SectionF_Consequences", instance.STIP_SectionF_Consequences)
        # instance.STIP_SectionF_Fee = validated_data.get("STIP_SectionF_Fee", instance.STIP_SectionF_Fee)
        # instance.STIP_SectionF_Comments = validated_data.get("STIP_SectionF_Comments", instance.STIP_SectionF_Comments)
        # instance.STIP_SectionF_Date = validated_data.get("STIP_SectionF_Date", instance.STIP_SectionF_Date)
        # instance.STIP_SectionF_ClientName = validated_data.get("STIP_SectionF_ClientName", instance.STIP_SectionF_ClientName)

        instance.updated_at = datetime.now(timezone.utc)

        
        instance.save()
        return instance


class MedicalSerializers(serializers.ModelSerializer):
    class Meta():
        model = Medical
        fields = '__all__'
    

    def create(self, validated_data):
        return Medical.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)
        
        instance.MSA_ClientName = validated_data.get("MSA_ClientName", instance.MSA_ClientName)
        instance.MSA_ClientIdNumber = validated_data.get("MSA_ClientIdNumber", instance.MSA_ClientIdNumber)
        instance.MSA_ClientAddress = validated_data.get("MSA_ClientAddress", instance.MSA_ClientAddress)
        instance.MSA_ClientEmail = validated_data.get("MSA_ClientEmail", instance.MSA_ClientEmail)
        instance.MSA_ClientPhone = validated_data.get("MSA_ClientPhone", instance.MSA_ClientPhone)
        instance.MSA_ClientDate = validated_data.get("MSA_ClientDate", instance.MSA_ClientDate)

        instance.MSA_Name = validated_data.get("MSA_Name", instance.MSA_Name)
        instance.MSA_MaritalStatus = validated_data.get("MSA_MaritalStatus", instance.MSA_MaritalStatus)
        instance.MSA_Gender = validated_data.get("MSA_Gender", instance.MSA_Gender)
        instance.MSA_Occupation = validated_data.get("MSA_Occupation", instance.MSA_Occupation)
        instance.MSA_Income = validated_data.get("MSA_Income", instance.MSA_Income)
        instance.MSA_Subsidy = validated_data.get("MSA_Subsidy", instance.MSA_Subsidy)
        instance.MSA_Dependant = validated_data.get("MSA_Dependant", instance.MSA_Dependant)
        instance.MSA_Spouse = validated_data.get("MSA_Spouse", instance.MSA_Spouse)
        instance.MSA_AdultDependant = validated_data.get("MSA_AdultDependant", instance.MSA_AdultDependant)
        instance.MSA_ChronicM = validated_data.get("MSA_ChronicM", instance.MSA_ChronicM)
        instance.MSA_ChronicS = validated_data.get("MSA_ChronicM", instance.MSA_ChronicM)
        instance.MSA_ChronicAD = validated_data.get("MSA_ChronicAD", instance.MSA_ChronicAD)
        instance.MSA_ChronicC = validated_data.get("MSA_ChronicC", instance.MSA_ChronicC)
        instance.MSA_ChronicOC = validated_data.get("MSA_ChronicOC", instance.MSA_ChronicOC)
        instance.MSA_PFromDate = validated_data.get("MSA_PFromDate", instance.MSA_PFromDate)
        instance.MSA_PTODate = validated_data.get("MSA_PTODate", instance.MSA_PTODate)

        instance.BackInfo = validated_data.get("BackInfo", instance.BackInfo)
            
        instance.SNA_Needs1 = validated_data.get("SNA_Needs1", instance.SNA_Needs1)
        instance.SNA_Comments1 = validated_data.get("SNA_Comments1", instance.SNA_Comments1)
        instance.SNA_Needs2 = validated_data.get("SNA_Needs2", instance.SNA_Needs2)
        instance.SNA_Comments2 = validated_data.get("SNA_Comments2", instance.SNA_Comments2)
        instance.SNA_Needs3 = validated_data.get("SNA_Needs3", instance.SNA_Needs3)
        instance.SNA_Comments3 = validated_data.get("SNA_Comments3", instance.SNA_Comments3)
        instance.SNA_Needs4 = validated_data.get("SNA_Needs4", instance.SNA_Needs4)
        instance.SNA_Comments4 = validated_data.get("SNA_Comments4", instance.SNA_Comments4)
        instance.SNA_Needs5 = validated_data.get("SNA_Needs5", instance.SNA_Needs5)
        instance.SNA_Comments5 = validated_data.get("SNA_Comments5", instance.SNA_Comments5)
        instance.SNA_Needs6 = validated_data.get("SNA_Needs6", instance.SNA_Needs6)
        instance.SNA_Comments6 = validated_data.get("SNA_Comments6", instance.SNA_Comments6)
        instance.SNA_Needs7 = validated_data.get("SNA_Needs7", instance.SNA_Needs7)
        instance.SNA_Comments7 = validated_data.get("SNA_Comments7", instance.SNA_Comments7)
        instance.SNA_Needs8 = validated_data.get("SNA_Needs8", instance.SNA_Needs8)
        instance.SNA_Comments8 = validated_data.get("SNA_Comments8", instance.SNA_Comments8)
        instance.SNA_Needs9 = validated_data.get("SNA_Needs9", instance.SNA_Needs9)
        instance.SNA_Comments9 = validated_data.get("SNA_Comments9", instance.SNA_Comments9)
        instance.SNA_Other = validated_data.get("SNA_Other", instance.SNA_Other)
        instance.SNA_Needs10 = validated_data.get("SNA_Needs10", instance.SNA_Needs10)
        instance.SNA_Comments10 = validated_data.get("SNA_Comments10", instance.SNA_Comments1)
            
        instance.CoMAB_Current1 = validated_data.get("CoMAB_Current1", instance.CoMAB_Current1)
        instance.CoMAB_Replaced1 = validated_data.get("CoMAB_Replaced1", instance.CoMAB_Replaced1)
        instance.CoMAB_Current2 = validated_data.get("CoMAB_Current2", instance.CoMAB_Current2)
        instance.CoMAB_Replaced2 = validated_data.get("CoMAB_Replaced2", instance.CoMAB_Replaced2)
        instance.CoMAB_Current3 = validated_data.get("CoMAB_Current3", instance.CoMAB_Current3)
        instance.CoMAB_Replaced3 = validated_data.get("CoMAB_Replaced3", instance.CoMAB_Replaced3)
        instance.CoMAB_Current4 = validated_data.get("CoMAB_Current4", instance.CoMAB_Current4)
        instance.CoMAB_Replaced4 = validated_data.get("CoMAB_Replaced4", instance.CoMAB_Replaced4)
        instance.CoMAB_Current5 = validated_data.get("CoMAB_Current5", instance.CoMAB_Current5)
        instance.CoMAB_Replaced5 = validated_data.get("CoMAB_Replaced5", instance.CoMAB_Replaced5)
        instance.CoMAB_Current6 = validated_data.get("CoMAB_Current6", instance.CoMAB_Current6)
        instance.CoMAB_Replaced6 = validated_data.get("CoMAB_Replaced6", instance.CoMAB_Replaced6)
        instance.CoMAB_Current7 = validated_data.get("CoMAB_Current7", instance.CoMAB_Current7)
        instance.CoMAB_Replaced7 = validated_data.get("CoMAB_Replaced7", instance.CoMAB_Replaced7)
        instance.CoMAB_Current8 = validated_data.get("CoMAB_Current8", instance.CoMAB_Current8)
        instance.CoMAB_Replaced8 = validated_data.get("CoMAB_Replaced8", instance.CoMAB_Replaced8)
        instance.CoMAB_Current9 = validated_data.get("CoMAB_Current9", instance.CoMAB_Current9)
        instance.CoMAB_Replaced9 = validated_data.get("CoMAB_Replaced9", instance.CoMAB_Replaced9)
        instance.CoMAB_Current10 = validated_data.get("CoMAB_Current10", instance.CoMAB_Current10)
        instance.CoMAB_Replaced10 = validated_data.get("CoMAB_Replaced10", instance.CoMAB_Replaced10)
        instance.CoMAB_Current11 = validated_data.get("CoMAB_Current11", instance.CoMAB_Current11)
        instance.CoMAB_Replaced11 = validated_data.get("CoMAB_Replaced11", instance.CoMAB_Replaced11)
        instance.CoMAB_Current12 = validated_data.get("CoMAB_Current12", instance.CoMAB_Current12)
        instance.CoMAB_Replaced12 = validated_data.get("CoMAB_Replaced12", instance.CoMAB_Replaced1)

        instance.SectionD_SnF = validated_data.get("SectionD_SnF", instance.SectionD_SnF)
        instance.SectionE_PMB = validated_data.get("SectionE_PMB", instance.SectionE_PMB)

        instance.SectionF_NotAccepted = validated_data.get("SectionF_NotAccepted", instance.SectionF_NotAccepted)
        instance.SectionF_Reasons = validated_data.get("SectionF_Reasons", instance.SectionF_Reasons)
        instance.SectionF_Consequences = validated_data.get("SectionF_Consequences", instance.SectionF_Consequences)
        instance.SectionF_Fee = validated_data.get("SectionF_Fee", instance.SectionF_Fee)
        instance.SectionF_Comments = validated_data.get("SectionF_Comments", instance.SectionF_Comments)
        instance.SectionF_Date = validated_data.get("SectionF_Date", instance.SectionF_Date)
        instance.SectionF_ClientName = validated_data.get("SectionF_ClientName", instance.SectionF_ClientName)


        instance.updated_at = datetime.now(timezone.utc)

        
        instance.save()
        return instance


class ShortTermInsuranceCommericalSerializers(serializers.ModelSerializer):
    class Meta():
        model = ShortTermInsuranceCommerical
        fields = '__all__'
    

    def create(self, validated_data):
        return ShortTermInsuranceCommerical.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)
        
        instance.STIC_Quotation_Number = validated_data.get("STIC_Quotation_Number",instance.STIC_Quotation_Number) 
        instance.STIC_Underwritten_By = validated_data.get("STIC_Underwritten_By",instance.STIC_Underwritten_By) 
        instance.STIC_Branch_Name = validated_data.get("STIC_Branch_Name",instance.STIC_Branch_Name) 
        instance.STIC_Branch_Number = validated_data.get("STIC_Branch_Number",instance.STIC_Branch_Number) 
        instance.STIC_Inception_Date = validated_data.get("STIC_Inception_Date",instance.STIC_Inception_Date) 
        instance.STIC_Renewal_Date = validated_data.get("STIC_Renewal_Date",instance.STIC_Renewal_Date) 
        instance.STIC_Payment_Method_Annual = validated_data.get("STIC_Payment_Method_Annual",instance.STIC_Payment_Method_Annual) 
        instance.STIC_Payment_Method_Monthly = validated_data.get("STIC_Payment_Method_Monthly",instance.STIC_Payment_Method_Monthly) 
        instance.STIC_Sasria_Annual = validated_data.get("STIC_Sasria_Annual",instance.STIC_Sasria_Annual) 
        instance.STIC_Sasria_Monthly = validated_data.get("STIC_Sasria_Monthly",instance.STIC_Sasria_Monthly) 
        instance.STIC_Business_Owner = validated_data.get("STIC_Business_Owner",instance.STIC_Business_Owner) 
        instance.STIC_Client_Id_Number = validated_data.get("STIC_Client_Id_Number",instance.STIC_Client_Id_Number) 
        instance.STIC_Company_Reg_Number = validated_data.get("STIC_Company_Reg_Number",instance.STIC_Company_Reg_Number) 
        instance.STIC_Company_VAT_Number = validated_data.get("STIC_Company_VAT_Number",instance.STIC_Company_VAT_Number) 
        instance.STIC_Postal_Address = validated_data.get("STIC_Postal_Address",instance.STIC_Postal_Address) 
        instance.STIC_Risk_Address = validated_data.get("STIC_Risk_Address",instance.STIC_Risk_Address) 
        instance.STIC_Contact_Person = validated_data.get("STIC_Contact_Person",instance.STIC_Contact_Person) 
        instance.STIC_TelePhone_Number = validated_data.get("STIC_TelePhone_Number",instance.STIC_TelePhone_Number) 
        instance.STIC_Fax_Number = validated_data.get("STIC_Fax_Number",instance.STIC_Fax_Number) 
        instance.STIC_CellPhone_Number = validated_data.get("STIC_CellPhone_Number",instance.STIC_CellPhone_Number) 
        instance.STIC_Email = validated_data.get("STIC_Email",instance.STIC_Email) 
        instance.STIC_Business_Description = validated_data.get("STIC_Business_Description",instance.STIC_Business_Description) 
        instance.STIC_Lower_Premium = validated_data.get("STIC_Lower_Premium",instance.STIC_Lower_Premium) 
        instance.STIC_Higher_Premium = validated_data.get("STIC_Higher_Premium",instance.STIC_Higher_Premium) 
        instance.STIC_Applicable_Option = validated_data.get("STIC_Applicable_Option",instance.STIC_Applicable_Option) 
        instance.STIC_General_Cancelled = validated_data.get("STIC_General_Cancelled",instance.STIC_General_Cancelled) 
        instance.STIC_General_Cancelled_Detail = validated_data.get("STIC_General_Cancelled_Detail",instance.STIC_General_Cancelled_Detail) 
        instance.STIC_General_LossType = validated_data.get("STIC_General_LossType",instance.STIC_General_LossType) 
        instance.STIC_General_Year = validated_data.get("STIC_General_Year",instance.STIC_General_Year) 
        instance.STIC_General_Amount = validated_data.get("STIC_General_Amount",instance.STIC_General_Amount) 
        instance.STIC_General_Insurer = validated_data.get("STIC_General_Insurer",instance.STIC_General_Insurer) 
        instance.STIC_Replacement_Advise = validated_data.get("STIC_Replacement_Advise",instance.STIC_Replacement_Advise) 
        instance.STIC_Replacement_Purpose = validated_data.get("STIC_Replacement_Purpose",instance.STIC_Replacement_Purpose) 
        instance.STIC_Replacement_Reason = validated_data.get("STIC_Replacement_Reason",instance.STIC_Replacement_Reason) 
        instance.STIC_Replacement_Suppliers = validated_data.get("STIC_Replacement_Suppliers",instance.STIC_Replacement_Suppliers) 
        instance.STIC_Fin_FnC_Existing = validated_data.get("STIC_Fin_FnC_Existing",instance.STIC_Fin_FnC_Existing) 
        instance.STIC_Fin_FnC_Replacement = validated_data.get("STIC_Fin_FnC_Replacement",instance.STIC_Fin_FnC_Replacement) 
        instance.STIC_Fin_STnC_Existing = validated_data.get("STIC_Fin_STnC_Existing",instance.STIC_Fin_STnC_Existing) 
        instance.STIC_Fin_STnC_Replacement = validated_data.get("STIC_Fin_STnC_Replacement",instance.STIC_Fin_STnC_Replacement) 
        instance.STIC_Fin_ImpOnPre_Existing = validated_data.get("STIC_Fin_ImpOnPre_Existing",instance.STIC_Fin_ImpOnPre_Existing) 
        instance.STIC_Fin_ImpOnPre_Replacement = validated_data.get("STIC_Fin_ImpOnPre_Replacement",instance.STIC_Fin_ImpOnPre_Replacement) 
        instance.STIC_Fin_Excesses_Existing = validated_data.get("STIC_Fin_Excesses_Existing",instance.STIC_Fin_Excesses_Existing) 
        instance.STIC_Fin_Excesses_Replacement = validated_data.get("STIC_Fin_Excesses_Replacement",instance.STIC_Fin_Excesses_Replacement) 
        instance.STIC_Fin_VABen_Existing = validated_data.get("STIC_Fin_VABen_Existing",instance.STIC_Fin_VABen_Existing) 
        instance.STIC_Fin_VABen_Replacement = validated_data.get("STIC_Fin_VABen_Replacement",instance.STIC_Fin_VABen_Replacement) 
        instance.STIC_Fin_AdvisorComm_Existing = validated_data.get("STIC_Fin_AdvisorComm_Existing",instance.STIC_Fin_AdvisorComm_Existing) 
        instance.STIC_Fin_AdvisorComm_Replacement = validated_data.get("STIC_Fin_AdvisorComm_Replacement",instance.STIC_Fin_AdvisorComm_Replacement) 
        instance.STIC_ProdComp_Existing_Company = validated_data.get("STIC_ProdComp_Existing_Company",instance.STIC_ProdComp_Existing_Company) 
        instance.STIC_ProdComp_Replacement_Company = validated_data.get("STIC_ProdComp_Replacement_Company",instance.STIC_ProdComp_Replacement_Company) 
        instance.STIC_ProdComp_Existing_Provider = validated_data.get("STIC_ProdComp_Existing_Provider",instance.STIC_ProdComp_Existing_Provider) 
        instance.STIC_ProdComp_Replacement_Provider = validated_data.get("STIC_ProdComp_Replacement_Provider",instance.STIC_ProdComp_Replacement_Provider) 
        instance.STIC_ProdComp_Existing_Product = validated_data.get("STIC_ProdComp_Existing_Product",instance.STIC_ProdComp_Existing_Product) 
        instance.STIC_ProdComp_Replacement_Product = validated_data.get("STIC_ProdComp_Replacement_Product",instance.STIC_ProdComp_Replacement_Product) 
        instance.STIC_ProdComp_Recommended1 = validated_data.get("STIC_ProdComp_Recommended1",instance.STIC_ProdComp_Recommended1) 
        instance.STIC_ProdComp_Accepted1 = validated_data.get("STIC_ProdComp_Accepted1",instance.STIC_ProdComp_Accepted1) 
        instance.STIC_ProdComp_CoverAmount1 = validated_data.get("STIC_ProdComp_CoverAmount1",instance.STIC_ProdComp_CoverAmount1)
        instance.STIC_ProdComp_ExistP_Premium1 = validated_data.get("STIC_ProdComp_ExistP_Premium1",instance.STIC_ProdComp_ExistP_Premium1)
        instance.STIC_ProdComp_ExistP_Excess1 = validated_data.get("STIC_ProdComp_ExistP_Excess1",instance.STIC_ProdComp_ExistP_Excess1)
        instance.STIC_ProdComp_RecommP_Premium1 = validated_data.get("STIC_ProdComp_RecommP_Premium1",instance.STIC_ProdComp_RecommP_Premium1)
        instance.STIC_ProdComp_RecommP_Excess1 = validated_data.get("STIC_ProdComp_RecommP_Excess1",instance.STIC_ProdComp_RecommP_Excess1)
        instance.STIC_ProdComp_Recommended2 = validated_data.get("STIC_ProdComp_Recommended2",instance.STIC_ProdComp_Recommended2) 
        instance.STIC_ProdComp_Accepted2 = validated_data.get("STIC_ProdComp_Accepted2",instance.STIC_ProdComp_Accepted2) 
        instance.STIC_ProdComp_CoverAmount2 = validated_data.get("STIC_ProdComp_CoverAmount2",instance.STIC_ProdComp_CoverAmount2)
        instance.STIC_ProdComp_ExistP_Premium2 = validated_data.get("STIC_ProdComp_ExistP_Premium2",instance.STIC_ProdComp_ExistP_Premium2)
        instance.STIC_ProdComp_ExistP_Excess2 = validated_data.get("STIC_ProdComp_ExistP_Excess2",instance.STIC_ProdComp_ExistP_Excess2)
        instance.STIC_ProdComp_RecommP_Premium2 = validated_data.get("STIC_ProdComp_RecommP_Premium2",instance.STIC_ProdComp_RecommP_Premium2)
        instance.STIC_ProdComp_RecommP_Excess2 = validated_data.get("STIC_ProdComp_RecommP_Excess2",instance.STIC_ProdComp_RecommP_Excess2)
        instance.STIC_ProdComp_Recommended3 = validated_data.get("STIC_ProdComp_Recommended3",instance.STIC_ProdComp_Recommended3) 
        instance.STIC_ProdComp_Accepted3 = validated_data.get("STIC_ProdComp_Accepted3",instance.STIC_ProdComp_Accepted3) 
        instance.STIC_ProdComp_CoverAmount3 = validated_data.get("STIC_ProdComp_CoverAmount3",instance.STIC_ProdComp_CoverAmount3)
        instance.STIC_ProdComp_ExistP_Premium3 = validated_data.get("STIC_ProdComp_ExistP_Premium3",instance.STIC_ProdComp_ExistP_Premium3)
        instance.STIC_ProdComp_ExistP_Excess3 = validated_data.get("STIC_ProdComp_ExistP_Excess3",instance.STIC_ProdComp_ExistP_Excess3)
        instance.STIC_ProdComp_RecommP_Premium3 = validated_data.get("STIC_ProdComp_RecommP_Premium3",instance.STIC_ProdComp_RecommP_Premium3)
        instance.STIC_ProdComp_RecommP_Excess3 = validated_data.get("STIC_ProdComp_RecommP_Excess3",instance.STIC_ProdComp_RecommP_Excess3)
        instance.STIC_ProdComp_Recommended4 = validated_data.get("STIC_ProdComp_Recommended4",instance.STIC_ProdComp_Recommended4) 
        instance.STIC_ProdComp_Accepted4 = validated_data.get("STIC_ProdComp_Accepted4",instance.STIC_ProdComp_Accepted4) 
        instance.STIC_ProdComp_CoverAmount4 = validated_data.get("STIC_ProdComp_CoverAmount4",instance.STIC_ProdComp_CoverAmount4)
        instance.STIC_ProdComp_ExistP_Premium4 = validated_data.get("STIC_ProdComp_ExistP_Premium4",instance.STIC_ProdComp_ExistP_Premium4)
        instance.STIC_ProdComp_ExistP_Excess4 = validated_data.get("STIC_ProdComp_ExistP_Excess4",instance.STIC_ProdComp_ExistP_Excess4)
        instance.STIC_ProdComp_RecommP_Premium4 = validated_data.get("STIC_ProdComp_RecommP_Premium4",instance.STIC_ProdComp_RecommP_Premium4)
        instance.STIC_ProdComp_RecommP_Excess4 = validated_data.get("STIC_ProdComp_RecommP_Excess4",instance.STIC_ProdComp_RecommP_Excess4)
        instance.STIC_ProdComp_Recommended5 = validated_data.get("STIC_ProdComp_Recommended5",instance.STIC_ProdComp_Recommended5) 
        instance.STIC_ProdComp_Accepted5 = validated_data.get("STIC_ProdComp_Accepted5",instance.STIC_ProdComp_Accepted5) 
        instance.STIC_ProdComp_CoverAmount5 = validated_data.get("STIC_ProdComp_CoverAmount5",instance.STIC_ProdComp_CoverAmount5)
        instance.STIC_ProdComp_ExistP_Premium5 = validated_data.get("STIC_ProdComp_ExistP_Premium5",instance.STIC_ProdComp_ExistP_Premium5)
        instance.STIC_ProdComp_ExistP_Excess5 = validated_data.get("STIC_ProdComp_ExistP_Excess5",instance.STIC_ProdComp_ExistP_Excess5)
        instance.STIC_ProdComp_RecommP_Premium5 = validated_data.get("STIC_ProdComp_RecommP_Premium5",instance.STIC_ProdComp_RecommP_Premium5)
        instance.STIC_ProdComp_RecommP_Excess5 = validated_data.get("STIC_ProdComp_RecommP_Excess5",instance.STIC_ProdComp_RecommP_Excess5)
        instance.STIC_ProdComp_Recommended6 = validated_data.get("STIC_ProdComp_Recommended6",instance.STIC_ProdComp_Recommended6) 
        instance.STIC_ProdComp_Accepted6 = validated_data.get("STIC_ProdComp_Accepted6",instance.STIC_ProdComp_Accepted6) 
        instance.STIC_ProdComp_CoverAmount6 = validated_data.get("STIC_ProdComp_CoverAmount6",instance.STIC_ProdComp_CoverAmount6)
        instance.STIC_ProdComp_ExistP_Premium6 = validated_data.get("STIC_ProdComp_ExistP_Premium6",instance.STIC_ProdComp_ExistP_Premium6)
        instance.STIC_ProdComp_ExistP_Excess6 = validated_data.get("STIC_ProdComp_ExistP_Excess6",instance.STIC_ProdComp_ExistP_Excess6)
        instance.STIC_ProdComp_RecommP_Premium6 = validated_data.get("STIC_ProdComp_RecommP_Premium6",instance.STIC_ProdComp_RecommP_Premium6)
        instance.STIC_ProdComp_RecommP_Excess6 = validated_data.get("STIC_ProdComp_RecommP_Excess6",instance.STIC_ProdComp_RecommP_Excess6)
        instance.STIC_ProdComp_Recommended7 = validated_data.get("STIC_ProdComp_Recommended7",instance.STIC_ProdComp_Recommended7) 
        instance.STIC_ProdComp_Accepted7 = validated_data.get("STIC_ProdComp_Accepted7",instance.STIC_ProdComp_Accepted7) 
        instance.STIC_ProdComp_CoverAmount7 = validated_data.get("STIC_ProdComp_CoverAmount7",instance.STIC_ProdComp_CoverAmount7)
        instance.STIC_ProdComp_ExistP_Premium7 = validated_data.get("STIC_ProdComp_ExistP_Premium7",instance.STIC_ProdComp_ExistP_Premium7)
        instance.STIC_ProdComp_ExistP_Excess7 = validated_data.get("STIC_ProdComp_ExistP_Excess7",instance.STIC_ProdComp_ExistP_Excess7)
        instance.STIC_ProdComp_RecommP_Premium7 = validated_data.get("STIC_ProdComp_RecommP_Premium7",instance.STIC_ProdComp_RecommP_Premium7)
        instance.STIC_ProdComp_RecommP_Excess7 = validated_data.get("STIC_ProdComp_RecommP_Excess7",instance.STIC_ProdComp_RecommP_Excess7)
        instance.STIC_ProdComp_Recommended8 = validated_data.get("STIC_ProdComp_Recommended8",instance.STIC_ProdComp_Recommended8) 
        instance.STIC_ProdComp_Accepted8 = validated_data.get("STIC_ProdComp_Accepted8",instance.STIC_ProdComp_Accepted8) 
        instance.STIC_ProdComp_CoverAmount8 = validated_data.get("STIC_ProdComp_CoverAmount8",instance.STIC_ProdComp_CoverAmount8)
        instance.STIC_ProdComp_ExistP_Premium8 = validated_data.get("STIC_ProdComp_ExistP_Premium8",instance.STIC_ProdComp_ExistP_Premium8)
        instance.STIC_ProdComp_ExistP_Excess8 = validated_data.get("STIC_ProdComp_ExistP_Excess8",instance.STIC_ProdComp_ExistP_Excess8)
        instance.STIC_ProdComp_RecommP_Premium8 = validated_data.get("STIC_ProdComp_RecommP_Premium8",instance.STIC_ProdComp_RecommP_Premium8)
        instance.STIC_ProdComp_RecommP_Excess8 = validated_data.get("STIC_ProdComp_RecommP_Excess8",instance.STIC_ProdComp_RecommP_Excess8)
        instance.STIC_ProdComp_Recommended9 = validated_data.get("STIC_ProdComp_Recommended9",instance.STIC_ProdComp_Recommended9) 
        instance.STIC_ProdComp_Accepted9 = validated_data.get("STIC_ProdComp_Accepted9",instance.STIC_ProdComp_Accepted9) 
        instance.STIC_ProdComp_CoverAmount9 = validated_data.get("STIC_ProdComp_CoverAmount9",instance.STIC_ProdComp_CoverAmount9)
        instance.STIC_ProdComp_ExistP_Premium9 = validated_data.get("STIC_ProdComp_ExistP_Premium9",instance.STIC_ProdComp_ExistP_Premium9)
        instance.STIC_ProdComp_ExistP_Excess9 = validated_data.get("STIC_ProdComp_ExistP_Excess9",instance.STIC_ProdComp_ExistP_Excess9)
        instance.STIC_ProdComp_RecommP_Premium9 = validated_data.get("STIC_ProdComp_RecommP_Premium9",instance.STIC_ProdComp_RecommP_Premium9)
        instance.STIC_ProdComp_RecommP_Excess9 = validated_data.get("STIC_ProdComp_RecommP_Excess9",instance.STIC_ProdComp_RecommP_Excess9)
        instance.STIC_ProdComp_Recommended10 = validated_data.get("STIC_ProdComp_Recommended10",instance.STIC_ProdComp_Recommended10) 
        instance.STIC_ProdComp_Accepted10 = validated_data.get("STIC_ProdComp_Accepted10",instance.STIC_ProdComp_Accepted10) 
        instance.STIC_ProdComp_CoverAmount10 = validated_data.get("STIC_ProdComp_CoverAmount10",instance.STIC_ProdComp_CoverAmount10)
        instance.STIC_ProdComp_ExistP_Premium10 = validated_data.get("STIC_ProdComp_ExistP_Premium10",instance.STIC_ProdComp_ExistP_Premium10)
        instance.STIC_ProdComp_ExistP_Excess10 = validated_data.get("STIC_ProdComp_ExistP_Excess10",instance.STIC_ProdComp_ExistP_Excess10)
        instance.STIC_ProdComp_RecommP_Premium10 = validated_data.get("STIC_ProdComp_RecommP_Premium10",instance.STIC_ProdComp_RecommP_Premium10)
        instance.STIC_ProdComp_RecommP_Excess10 = validated_data.get("STIC_ProdComp_RecommP_Excess10",instance.STIC_ProdComp_RecommP_Excess10)
        instance.STIC_ProdComp_Recommended11 = validated_data.get("STIC_ProdComp_Recommended11",instance.STIC_ProdComp_Recommended11) 
        instance.STIC_ProdComp_Accepted11 = validated_data.get("STIC_ProdComp_Accepted11",instance.STIC_ProdComp_Accepted11) 
        instance.STIC_ProdComp_CoverAmount11 = validated_data.get("STIC_ProdComp_CoverAmount11",instance.STIC_ProdComp_CoverAmount11)
        instance.STIC_ProdComp_ExistP_Premium11 = validated_data.get("STIC_ProdComp_ExistP_Premium11",instance.STIC_ProdComp_ExistP_Premium11)
        instance.STIC_ProdComp_ExistP_Excess11 = validated_data.get("STIC_ProdComp_ExistP_Excess11",instance.STIC_ProdComp_ExistP_Excess11)
        instance.STIC_ProdComp_RecommP_Premium11 = validated_data.get("STIC_ProdComp_RecommP_Premium11",instance.STIC_ProdComp_RecommP_Premium11)
        instance.STIC_ProdComp_RecommP_Excess11 = validated_data.get("STIC_ProdComp_RecommP_Excess11",instance.STIC_ProdComp_RecommP_Excess11)
        instance.STIC_ProdComp_Recommended12 = validated_data.get("STIC_ProdComp_Recommended12",instance.STIC_ProdComp_Recommended12) 
        instance.STIC_ProdComp_Accepted12 = validated_data.get("STIC_ProdComp_Accepted12",instance.STIC_ProdComp_Accepted12) 
        instance.STIC_ProdComp_CoverAmount12 = validated_data.get("STIC_ProdComp_CoverAmount12",instance.STIC_ProdComp_CoverAmount12)
        instance.STIC_ProdComp_ExistP_Premium12 = validated_data.get("STIC_ProdComp_ExistP_Premium12",instance.STIC_ProdComp_ExistP_Premium12)
        instance.STIC_ProdComp_ExistP_Excess12 = validated_data.get("STIC_ProdComp_ExistP_Excess12",instance.STIC_ProdComp_ExistP_Excess12)
        instance.STIC_ProdComp_RecommP_Premium12 = validated_data.get("STIC_ProdComp_RecommP_Premium12",instance.STIC_ProdComp_RecommP_Premium12)
        instance.STIC_ProdComp_RecommP_Excess12 = validated_data.get("STIC_ProdComp_RecommP_Excess12",instance.STIC_ProdComp_RecommP_Excess12)
        instance.STIC_ProdComp_Recommended13 = validated_data.get("STIC_ProdComp_Recommended13",instance.STIC_ProdComp_Recommended13) 
        instance.STIC_ProdComp_Accepted13 = validated_data.get("STIC_ProdComp_Accepted13",instance.STIC_ProdComp_Accepted13) 
        instance.STIC_ProdComp_CoverAmount13 = validated_data.get("STIC_ProdComp_CoverAmount13",instance.STIC_ProdComp_CoverAmount13)
        instance.STIC_ProdComp_ExistP_Premium13 = validated_data.get("STIC_ProdComp_ExistP_Premium13",instance.STIC_ProdComp_ExistP_Premium13)
        instance.STIC_ProdComp_ExistP_Excess13 = validated_data.get("STIC_ProdComp_ExistP_Excess13",instance.STIC_ProdComp_ExistP_Excess13)
        instance.STIC_ProdComp_RecommP_Premium13 = validated_data.get("STIC_ProdComp_RecommP_Premium13",instance.STIC_ProdComp_RecommP_Premium13)
        instance.STIC_ProdComp_RecommP_Excess13 = validated_data.get("STIC_ProdComp_RecommP_Excess13",instance.STIC_ProdComp_RecommP_Excess13)
        instance.STIC_ProdComp_Recommended14 = validated_data.get("STIC_ProdComp_Recommended14",instance.STIC_ProdComp_Recommended14) 
        instance.STIC_ProdComp_Accepted14 = validated_data.get("STIC_ProdComp_Accepted14",instance.STIC_ProdComp_Accepted14) 
        instance.STIC_ProdComp_CoverAmount14 = validated_data.get("STIC_ProdComp_CoverAmount14",instance.STIC_ProdComp_CoverAmount14)
        instance.STIC_ProdComp_ExistP_Premium14 = validated_data.get("STIC_ProdComp_ExistP_Premium14",instance.STIC_ProdComp_ExistP_Premium14)
        instance.STIC_ProdComp_ExistP_Excess14 = validated_data.get("STIC_ProdComp_ExistP_Excess14",instance.STIC_ProdComp_ExistP_Excess14)
        instance.STIC_ProdComp_RecommP_Premium14 = validated_data.get("STIC_ProdComp_RecommP_Premium14",instance.STIC_ProdComp_RecommP_Premium14)
        instance.STIC_ProdComp_RecommP_Excess14 = validated_data.get("STIC_ProdComp_RecommP_Excess14",instance.STIC_ProdComp_RecommP_Excess14)
        instance.STIC_ProdComp_Recommended15 = validated_data.get("STIC_ProdComp_Recommended15",instance.STIC_ProdComp_Recommended15) 
        instance.STIC_ProdComp_Accepted15 = validated_data.get("STIC_ProdComp_Accepted15",instance.STIC_ProdComp_Accepted15) 
        instance.STIC_ProdComp_CoverAmount15 = validated_data.get("STIC_ProdComp_CoverAmount15",instance.STIC_ProdComp_CoverAmount15)
        instance.STIC_ProdComp_ExistP_Premium15 = validated_data.get("STIC_ProdComp_ExistP_Premium15",instance.STIC_ProdComp_ExistP_Premium15)
        instance.STIC_ProdComp_ExistP_Excess15 = validated_data.get("STIC_ProdComp_ExistP_Excess15",instance.STIC_ProdComp_ExistP_Excess15)
        instance.STIC_ProdComp_RecommP_Premium15 = validated_data.get("STIC_ProdComp_RecommP_Premium15",instance.STIC_ProdComp_RecommP_Premium15)
        instance.STIC_ProdComp_RecommP_Excess15 = validated_data.get("STIC_ProdComp_RecommP_Excess15",instance.STIC_ProdComp_RecommP_Excess15)
        instance.STIC_ProdComp_Recommended16 = validated_data.get("STIC_ProdComp_Recommended16",instance.STIC_ProdComp_Recommended16) 
        instance.STIC_ProdComp_Accepted16 = validated_data.get("STIC_ProdComp_Accepted16",instance.STIC_ProdComp_Accepted16) 
        instance.STIC_ProdComp_CoverAmount16 = validated_data.get("STIC_ProdComp_CoverAmount16",instance.STIC_ProdComp_CoverAmount16)
        instance.STIC_ProdComp_ExistP_Premium16 = validated_data.get("STIC_ProdComp_ExistP_Premium16",instance.STIC_ProdComp_ExistP_Premium16)
        instance.STIC_ProdComp_ExistP_Excess16 = validated_data.get("STIC_ProdComp_ExistP_Excess16",instance.STIC_ProdComp_ExistP_Excess16)
        instance.STIC_ProdComp_RecommP_Premium16 = validated_data.get("STIC_ProdComp_RecommP_Premium16",instance.STIC_ProdComp_RecommP_Premium16)
        instance.STIC_ProdComp_RecommP_Excess16 = validated_data.get("STIC_ProdComp_RecommP_Excess16",instance.STIC_ProdComp_RecommP_Excess16)
        instance.STIC_ProdComp_Recommended17 = validated_data.get("STIC_ProdComp_Recommended17",instance.STIC_ProdComp_Recommended17) 
        instance.STIC_ProdComp_Accepted17 = validated_data.get("STIC_ProdComp_Accepted17",instance.STIC_ProdComp_Accepted17) 
        instance.STIC_ProdComp_CoverAmount17 = validated_data.get("STIC_ProdComp_CoverAmount17",instance.STIC_ProdComp_CoverAmount17)
        instance.STIC_ProdComp_ExistP_Premium17 = validated_data.get("STIC_ProdComp_ExistP_Premium17",instance.STIC_ProdComp_ExistP_Premium17)
        instance.STIC_ProdComp_ExistP_Excess17 = validated_data.get("STIC_ProdComp_ExistP_Excess17",instance.STIC_ProdComp_ExistP_Excess17)
        instance.STIC_ProdComp_RecommP_Premium17 = validated_data.get("STIC_ProdComp_RecommP_Premium17",instance.STIC_ProdComp_RecommP_Premium17)
        instance.STIC_ProdComp_RecommP_Excess17 = validated_data.get("STIC_ProdComp_RecommP_Excess17",instance.STIC_ProdComp_RecommP_Excess17)
        instance.STIC_ProdComp_Recommended18 = validated_data.get("STIC_ProdComp_Recommended18",instance.STIC_ProdComp_Recommended18) 
        instance.STIC_ProdComp_Accepted18 = validated_data.get("STIC_ProdComp_Accepted18",instance.STIC_ProdComp_Accepted18) 
        instance.STIC_ProdComp_CoverAmount18 = validated_data.get("STIC_ProdComp_CoverAmount18",instance.STIC_ProdComp_CoverAmount18)
        instance.STIC_ProdComp_ExistP_Premium18 = validated_data.get("STIC_ProdComp_ExistP_Premium18",instance.STIC_ProdComp_ExistP_Premium18)
        instance.STIC_ProdComp_ExistP_Excess18 = validated_data.get("STIC_ProdComp_ExistP_Excess18",instance.STIC_ProdComp_ExistP_Excess18)
        instance.STIC_ProdComp_RecommP_Premium18 = validated_data.get("STIC_ProdComp_RecommP_Premium18",instance.STIC_ProdComp_RecommP_Premium18)
        instance.STIC_ProdComp_RecommP_Excess18 = validated_data.get("STIC_ProdComp_RecommP_Excess18",instance.STIC_ProdComp_RecommP_Excess18)
        instance.STIC_ProdComp_Recommended19 = validated_data.get("STIC_ProdComp_Recommended19",instance.STIC_ProdComp_Recommended19) 
        instance.STIC_ProdComp_Accepted19 = validated_data.get("STIC_ProdComp_Accepted19",instance.STIC_ProdComp_Accepted19) 
        instance.STIC_ProdComp_CoverAmount19 = validated_data.get("STIC_ProdComp_CoverAmount19",instance.STIC_ProdComp_CoverAmount19)
        instance.STIC_ProdComp_ExistP_Premium19 = validated_data.get("STIC_ProdComp_ExistP_Premium19",instance.STIC_ProdComp_ExistP_Premium19)
        instance.STIC_ProdComp_ExistP_Excess19 = validated_data.get("STIC_ProdComp_ExistP_Excess19",instance.STIC_ProdComp_ExistP_Excess19)
        instance.STIC_ProdComp_RecommP_Premium19 = validated_data.get("STIC_ProdComp_RecommP_Premium19",instance.STIC_ProdComp_RecommP_Premium19)
        instance.STIC_ProdComp_RecommP_Excess19 = validated_data.get("STIC_ProdComp_RecommP_Excess19",instance.STIC_ProdComp_RecommP_Excess19)
        instance.STIC_ProdComp_Recommended20 = validated_data.get("STIC_ProdComp_Recommended20",instance.STIC_ProdComp_Recommended20) 
        instance.STIC_ProdComp_Accepted20 = validated_data.get("STIC_ProdComp_Accepted20",instance.STIC_ProdComp_Accepted20) 
        instance.STIC_ProdComp_CoverAmount20 = validated_data.get("STIC_ProdComp_CoverAmount20",instance.STIC_ProdComp_CoverAmount20)
        instance.STIC_ProdComp_ExistP_Premium20 = validated_data.get("STIC_ProdComp_ExistP_Premium20",instance.STIC_ProdComp_ExistP_Premium20)
        instance.STIC_ProdComp_ExistP_Excess20 = validated_data.get("STIC_ProdComp_ExistP_Excess20",instance.STIC_ProdComp_ExistP_Excess20)
        instance.STIC_ProdComp_RecommP_Premium20 = validated_data.get("STIC_ProdComp_RecommP_Premium20",instance.STIC_ProdComp_RecommP_Premium20)
        instance.STIC_ProdComp_RecommP_Excess20 = validated_data.get("STIC_ProdComp_RecommP_Excess20",instance.STIC_ProdComp_RecommP_Excess20)
        instance.STIC_ProdComp_Recommended21 = validated_data.get("STIC_ProdComp_Recommended21",instance.STIC_ProdComp_Recommended21) 
        instance.STIC_ProdComp_Accepted21 = validated_data.get("STIC_ProdComp_Accepted21",instance.STIC_ProdComp_Accepted21) 
        instance.STIC_ProdComp_CoverAmount21 = validated_data.get("STIC_ProdComp_CoverAmount21",instance.STIC_ProdComp_CoverAmount21)
        instance.STIC_ProdComp_ExistP_Premium21 = validated_data.get("STIC_ProdComp_ExistP_Premium21",instance.STIC_ProdComp_ExistP_Premium21)
        instance.STIC_ProdComp_ExistP_Excess21 = validated_data.get("STIC_ProdComp_ExistP_Excess21",instance.STIC_ProdComp_ExistP_Excess21)
        instance.STIC_ProdComp_RecommP_Premium21 = validated_data.get("STIC_ProdComp_RecommP_Premium21",instance.STIC_ProdComp_RecommP_Premium21)
        instance.STIC_ProdComp_RecommP_Excess21 = validated_data.get("STIC_ProdComp_RecommP_Excess21",instance.STIC_ProdComp_RecommP_Excess21)
        instance.STIC_ProdComp_Recommended22 = validated_data.get("STIC_ProdComp_Recommended22",instance.STIC_ProdComp_Recommended22) 
        instance.STIC_ProdComp_Accepted22 = validated_data.get("STIC_ProdComp_Accepted22",instance.STIC_ProdComp_Accepted22) 
        instance.STIC_ProdComp_CoverAmount22 = validated_data.get("STIC_ProdComp_CoverAmount22",instance.STIC_ProdComp_CoverAmount22)
        instance.STIC_ProdComp_ExistP_Premium22 = validated_data.get("STIC_ProdComp_ExistP_Premium22",instance.STIC_ProdComp_ExistP_Premium22)
        instance.STIC_ProdComp_ExistP_Excess22 = validated_data.get("STIC_ProdComp_ExistP_Excess22",instance.STIC_ProdComp_ExistP_Excess22)
        instance.STIC_ProdComp_RecommP_Premium22 = validated_data.get("STIC_ProdComp_RecommP_Premium22",instance.STIC_ProdComp_RecommP_Premium22)
        instance.STIC_ProdComp_RecommP_Excess22 = validated_data.get("STIC_ProdComp_RecommP_Excess22",instance.STIC_ProdComp_RecommP_Excess22)
        instance.STIC_ProdComp_Recommended23 = validated_data.get("STIC_ProdComp_Recommended23",instance.STIC_ProdComp_Recommended23) 
        instance.STIC_ProdComp_Accepted23 = validated_data.get("STIC_ProdComp_Accepted23",instance.STIC_ProdComp_Accepted23) 
        instance.STIC_ProdComp_CoverAmount23 = validated_data.get("STIC_ProdComp_CoverAmount23",instance.STIC_ProdComp_CoverAmount23)
        instance.STIC_ProdComp_ExistP_Premium23 = validated_data.get("STIC_ProdComp_ExistP_Premium23",instance.STIC_ProdComp_ExistP_Premium23)
        instance.STIC_ProdComp_ExistP_Excess23 = validated_data.get("STIC_ProdComp_ExistP_Excess23",instance.STIC_ProdComp_ExistP_Excess23)
        instance.STIC_ProdComp_RecommP_Premium23 = validated_data.get("STIC_ProdComp_RecommP_Premium23",instance.STIC_ProdComp_RecommP_Premium23)
        instance.STIC_ProdComp_RecommP_Excess23 = validated_data.get("STIC_ProdComp_RecommP_Excess23",instance.STIC_ProdComp_RecommP_Excess23)
        instance.STIC_ProdComp_Recommended24 = validated_data.get("STIC_ProdComp_Recommended24",instance.STIC_ProdComp_Recommended24) 
        instance.STIC_ProdComp_Accepted24 = validated_data.get("STIC_ProdComp_Accepted24",instance.STIC_ProdComp_Accepted24) 
        instance.STIC_ProdComp_CoverAmount24 = validated_data.get("STIC_ProdComp_CoverAmount24",instance.STIC_ProdComp_CoverAmount24)
        instance.STIC_ProdComp_ExistP_Premium24 = validated_data.get("STIC_ProdComp_ExistP_Premium24",instance.STIC_ProdComp_ExistP_Premium24)
        instance.STIC_ProdComp_ExistP_Excess24 = validated_data.get("STIC_ProdComp_ExistP_Excess24",instance.STIC_ProdComp_ExistP_Excess24)
        instance.STIC_ProdComp_RecommP_Premium24 = validated_data.get("STIC_ProdComp_RecommP_Premium24",instance.STIC_ProdComp_RecommP_Premium24)
        instance.STIC_ProdComp_RecommP_Excess24 = validated_data.get("STIC_ProdComp_RecommP_Excess24",instance.STIC_ProdComp_RecommP_Excess24)
        instance.STIC_ProdComp_Recommended25 = validated_data.get("STIC_ProdComp_Recommended25",instance.STIC_ProdComp_Recommended25) 
        instance.STIC_ProdComp_Accepted25 = validated_data.get("STIC_ProdComp_Accepted25",instance.STIC_ProdComp_Accepted25) 
        instance.STIC_ProdComp_CoverAmount25 = validated_data.get("STIC_ProdComp_CoverAmount25",instance.STIC_ProdComp_CoverAmount25)
        instance.STIC_ProdComp_ExistP_Premium25 = validated_data.get("STIC_ProdComp_ExistP_Premium25",instance.STIC_ProdComp_ExistP_Premium25)
        instance.STIC_ProdComp_ExistP_Excess25 = validated_data.get("STIC_ProdComp_ExistP_Excess25",instance.STIC_ProdComp_ExistP_Excess25)
        instance.STIC_ProdComp_RecommP_Premium25 = validated_data.get("STIC_ProdComp_RecommP_Premium25",instance.STIC_ProdComp_RecommP_Premium25)
        instance.STIC_ProdComp_RecommP_Excess25 = validated_data.get("STIC_ProdComp_RecommP_Excess25",instance.STIC_ProdComp_RecommP_Excess25)
        instance.STIC_ProdComp_Recommended26 = validated_data.get("STIC_ProdComp_Recommended26",instance.STIC_ProdComp_Recommended26) 
        instance.STIC_ProdComp_Accepted26 = validated_data.get("STIC_ProdComp_Accepted26",instance.STIC_ProdComp_Accepted26) 
        instance.STIC_ProdComp_CoverAmount26 = validated_data.get("STIC_ProdComp_CoverAmount26",instance.STIC_ProdComp_CoverAmount26)
        instance.STIC_ProdComp_ExistP_Premium26 = validated_data.get("STIC_ProdComp_ExistP_Premium26",instance.STIC_ProdComp_ExistP_Premium26)
        instance.STIC_ProdComp_ExistP_Excess26 = validated_data.get("STIC_ProdComp_ExistP_Excess26",instance.STIC_ProdComp_ExistP_Excess26)
        instance.STIC_ProdComp_RecommP_Premium26 = validated_data.get("STIC_ProdComp_RecommP_Premium26",instance.STIC_ProdComp_RecommP_Premium26) 
        instance.STIC_ProdComp_RecommP_Excess26 = validated_data.get("STIC_ProdComp_RecommP_Excess26",instance.STIC_ProdComp_RecommP_Excess26) 
        instance.STIC_ProdComp_Recommended26 = validated_data.get("STIC_ProdComp_Recommended26",instance.STIC_ProdComp_Recommended26) 
        instance.STIC_ProdComp_Accepted26 = validated_data.get("STIC_ProdComp_Accepted26",instance.STIC_ProdComp_Accepted26) 
        instance.STIC_ProdComp_CoverAmount26 = validated_data.get("STIC_ProdComp_CoverAmount26",instance.STIC_ProdComp_CoverAmount26)
        instance.STIC_ProdComp_ExistP_Premium26 = validated_data.get("STIC_ProdComp_ExistP_Premium26",instance.STIC_ProdComp_ExistP_Premium26)
        instance.STIC_ProdComp_ExistP_Excess26 = validated_data.get("STIC_ProdComp_ExistP_Excess26",instance.STIC_ProdComp_ExistP_Excess26)
        instance.STIC_ProdComp_RecommP_Premium26 = validated_data.get("STIC_ProdComp_RecommP_Premium26",instance.STIC_ProdComp_RecommP_Premium26)
        instance.STIC_ProdComp_RecommP_Excess26 = validated_data.get("STIC_ProdComp_RecommP_Excess26",instance.STIC_ProdComp_RecommP_Excess26)
        instance.STIC_ProdComp_Recommended27 = validated_data.get("STIC_ProdComp_Recommended27",instance.STIC_ProdComp_Recommended27) 
        instance.STIC_ProdComp_Accepted27 = validated_data.get("STIC_ProdComp_Accepted27",instance.STIC_ProdComp_Accepted27) 
        instance.STIC_ProdComp_CoverAmount27 = validated_data.get("STIC_ProdComp_CoverAmount27",instance.STIC_ProdComp_CoverAmount27)
        instance.STIC_ProdComp_ExistP_Premium27 = validated_data.get("STIC_ProdComp_ExistP_Premium27",instance.STIC_ProdComp_ExistP_Premium27)
        instance.STIC_ProdComp_ExistP_Excess27 = validated_data.get("STIC_ProdComp_ExistP_Excess27",instance.STIC_ProdComp_ExistP_Excess27)
        instance.STIC_ProdComp_RecommP_Premium27 = validated_data.get("STIC_ProdComp_RecommP_Premium27",instance.STIC_ProdComp_RecommP_Premium27)
        instance.STIC_ProdComp_RecommP_Excess27 = validated_data.get("STIC_ProdComp_RecommP_Excess27",instance.STIC_ProdComp_RecommP_Excess27)
        instance.STIC_ProdComp_Recommended28 = validated_data.get("STIC_ProdComp_Recommended28",instance.STIC_ProdComp_Recommended28) 
        instance.STIC_ProdComp_Accepted28 = validated_data.get("STIC_ProdComp_Accepted28",instance.STIC_ProdComp_Accepted28) 
        instance.STIC_ProdComp_CoverAmount28 = validated_data.get("STIC_ProdComp_CoverAmount28",instance.STIC_ProdComp_CoverAmount28)
        instance.STIC_ProdComp_ExistP_Premium28 = validated_data.get("STIC_ProdComp_ExistP_Premium28",instance.STIC_ProdComp_ExistP_Premium28)
        instance.STIC_ProdComp_ExistP_Excess28 = validated_data.get("STIC_ProdComp_ExistP_Excess28",instance.STIC_ProdComp_ExistP_Excess28)
        instance.STIC_ProdComp_RecommP_Premium28 = validated_data.get("STIC_ProdComp_RecommP_Premium28",instance.STIC_ProdComp_RecommP_Premium28)
        instance.STIC_ProdComp_RecommP_Excess28 = validated_data.get("STIC_ProdComp_RecommP_Excess28",instance.STIC_ProdComp_RecommP_Excess28)
        instance.STIC_ProdComp_Recommended29 = validated_data.get("STIC_ProdComp_Recommended29",instance.STIC_ProdComp_Recommended29) 
        instance.STIC_ProdComp_Accepted29 = validated_data.get("STIC_ProdComp_Accepted29",instance.STIC_ProdComp_Accepted29) 
        instance.STIC_ProdComp_CoverAmount29 = validated_data.get("STIC_ProdComp_CoverAmount29",instance.STIC_ProdComp_CoverAmount29)
        instance.STIC_ProdComp_ExistP_Premium29 = validated_data.get("STIC_ProdComp_ExistP_Premium29",instance.STIC_ProdComp_ExistP_Premium29)
        instance.STIC_ProdComp_ExistP_Excess29 = validated_data.get("STIC_ProdComp_ExistP_Excess29",instance.STIC_ProdComp_ExistP_Excess29)
        instance.STIC_ProdComp_RecommP_Premium29 = validated_data.get("STIC_ProdComp_RecommP_Premium29",instance.STIC_ProdComp_RecommP_Premium29)
        instance.STIC_ProdComp_RecommP_Excess29 = validated_data.get("STIC_ProdComp_RecommP_Excess29",instance.STIC_ProdComp_RecommP_Excess29)
        instance.STIC_ProdComp_Recommended30 = validated_data.get("STIC_ProdComp_Recommended30",instance.STIC_ProdComp_Recommended30) 
        instance.STIC_ProdComp_Accepted30 = validated_data.get("STIC_ProdComp_Accepted30",instance.STIC_ProdComp_Accepted30) 
        instance.STIC_ProdComp_CoverAmount30 = validated_data.get("STIC_ProdComp_CoverAmount30",instance.STIC_ProdComp_CoverAmount30)
        instance.STIC_ProdComp_ExistP_Premium30 = validated_data.get("STIC_ProdComp_ExistP_Premium30",instance.STIC_ProdComp_ExistP_Premium30)
        instance.STIC_ProdComp_ExistP_Excess30 = validated_data.get("STIC_ProdComp_ExistP_Excess30",instance.STIC_ProdComp_ExistP_Excess30)
        instance.STIC_ProdComp_RecommP_Premium30 = validated_data.get("STIC_ProdComp_RecommP_Premium30",instance.STIC_ProdComp_RecommP_Premium30)
        instance.STIC_ProdComp_RecommP_Excess30 = validated_data.get("STIC_ProdComp_RecommP_Excess30",instance.STIC_ProdComp_RecommP_Excess30)
        instance.STIC_ProdComp_Recommended31 = validated_data.get("STIC_ProdComp_Recommended31",instance.STIC_ProdComp_Recommended31) 
        instance.STIC_ProdComp_Accepted31 = validated_data.get("STIC_ProdComp_Accepted31",instance.STIC_ProdComp_Accepted31) 
        instance.STIC_ProdComp_CoverAmount31 = validated_data.get("STIC_ProdComp_CoverAmount31",instance.STIC_ProdComp_CoverAmount31)
        instance.STIC_ProdComp_ExistP_Premium31 = validated_data.get("STIC_ProdComp_ExistP_Premium31",instance.STIC_ProdComp_ExistP_Premium31)
        instance.STIC_ProdComp_ExistP_Excess31 = validated_data.get("STIC_ProdComp_ExistP_Excess31",instance.STIC_ProdComp_ExistP_Excess31)
        instance.STIC_ProdComp_RecommP_Premium31 = validated_data.get("STIC_ProdComp_RecommP_Premium31",instance.STIC_ProdComp_RecommP_Premium31)
        instance.STIC_ProdComp_RecommP_Excess31 = validated_data.get("STIC_ProdComp_RecommP_Excess31",instance.STIC_ProdComp_RecommP_Excess31)
        instance.STIC_ProdComp_Recommended32 = validated_data.get("STIC_ProdComp_Recommended32",instance.STIC_ProdComp_Recommended32) 
        instance.STIC_ProdComp_Accepted32 = validated_data.get("STIC_ProdComp_Accepted32",instance.STIC_ProdComp_Accepted32) 
        instance.STIC_ProdComp_CoverAmount32 = validated_data.get("STIC_ProdComp_CoverAmount32",instance.STIC_ProdComp_CoverAmount32)
        instance.STIC_ProdComp_ExistP_Premium32 = validated_data.get("STIC_ProdComp_ExistP_Premium32",instance.STIC_ProdComp_ExistP_Premium32)
        instance.STIC_ProdComp_ExistP_Excess32 = validated_data.get("STIC_ProdComp_ExistP_Excess32",instance.STIC_ProdComp_ExistP_Excess32)
        instance.STIC_ProdComp_RecommP_Premium32 = validated_data.get("STIC_ProdComp_RecommP_Premium32",instance.STIC_ProdComp_RecommP_Premium32)
        instance.STIC_ProdComp_RecommP_Excess32 = validated_data.get("STIC_ProdComp_RecommP_Excess32",instance.STIC_ProdComp_RecommP_Excess32)
        instance.STIC_ProdComp_Recommended33 = validated_data.get("STIC_ProdComp_Recommended33",instance.STIC_ProdComp_Recommended33) 
        instance.STIC_ProdComp_Accepted33 = validated_data.get("STIC_ProdComp_Accepted33",instance.STIC_ProdComp_Accepted33) 
        instance.STIC_ProdComp_CoverAmount33 = validated_data.get("STIC_ProdComp_CoverAmount33",instance.STIC_ProdComp_CoverAmount33)
        instance.STIC_ProdComp_ExistP_Premium33 = validated_data.get("STIC_ProdComp_ExistP_Premium33",instance.STIC_ProdComp_ExistP_Premium33)
        instance.STIC_ProdComp_ExistP_Excess33 = validated_data.get("STIC_ProdComp_ExistP_Excess33",instance.STIC_ProdComp_ExistP_Excess33)
        instance.STIC_ProdComp_RecommP_Premium33 = validated_data.get("STIC_ProdComp_RecommP_Premium33",instance.STIC_ProdComp_RecommP_Premium33)
        instance.STIC_ProdComp_RecommP_Excess33 = validated_data.get("STIC_ProdComp_RecommP_Excess33",instance.STIC_ProdComp_RecommP_Excess33)
        instance.STIC_ProdComp_Recommended34 = validated_data.get("STIC_ProdComp_Recommended34",instance.STIC_ProdComp_Recommended34) 
        instance.STIC_ProdComp_Accepted34 = validated_data.get("STIC_ProdComp_Accepted34",instance.STIC_ProdComp_Accepted34) 
        instance.STIC_ProdComp_CoverAmount34 = validated_data.get("STIC_ProdComp_CoverAmount34",instance.STIC_ProdComp_CoverAmount34)
        instance.STIC_ProdComp_ExistP_Premium34 = validated_data.get("STIC_ProdComp_ExistP_Premium34",instance.STIC_ProdComp_ExistP_Premium34)
        instance.STIC_ProdComp_ExistP_Excess34 = validated_data.get("STIC_ProdComp_ExistP_Excess34",instance.STIC_ProdComp_ExistP_Excess34)
        instance.STIC_ProdComp_RecommP_Premium34 = validated_data.get("STIC_ProdComp_RecommP_Premium34",instance.STIC_ProdComp_RecommP_Premium34)
        instance.STIC_ProdComp_RecommP_Excess34 = validated_data.get("STIC_ProdComp_RecommP_Excess34",instance.STIC_ProdComp_RecommP_Excess34)

        instance.STIC_ProdComp_Recommended35 = validated_data.get("STIC_ProdComp_Recommended35",instance.STIC_ProdComp_Recommended35) 
        instance.STIC_ProdComp_Accepted35 = validated_data.get("STIC_ProdComp_Accepted35",instance.STIC_ProdComp_Accepted35) 
        instance.STIC_ProdComp_CoverAmount35 = validated_data.get("STIC_ProdComp_CoverAmount35",instance.STIC_ProdComp_CoverAmount35)
        instance.STIC_ProdComp_ExistP_Premium35 = validated_data.get("STIC_ProdComp_ExistP_Premium35",instance.STIC_ProdComp_ExistP_Premium35)
        instance.STIC_ProdComp_ExistP_Excess35 = validated_data.get("STIC_ProdComp_ExistP_Excess35",instance.STIC_ProdComp_ExistP_Excess35)
        instance.STIC_ProdComp_RecommP_Premium35 = validated_data.get("STIC_ProdComp_RecommP_Premium35",instance.STIC_ProdComp_RecommP_Premium35)
        instance.STIC_ProdComp_RecommP_Excess35 = validated_data.get("STIC_ProdComp_RecommP_Excess35",instance.STIC_ProdComp_RecommP_Excess35)

        instance.STIC_ProdComp_Recommended36 = validated_data.get("STIC_ProdComp_Recommended36",instance.STIC_ProdComp_Recommended36) 
        instance.STIC_ProdComp_Accepted36 = validated_data.get("STIC_ProdComp_Accepted36",instance.STIC_ProdComp_Accepted36) 
        instance.STIC_ProdComp_CoverAmount36 = validated_data.get("STIC_ProdComp_CoverAmount36",instance.STIC_ProdComp_CoverAmount36)
        instance.STIC_ProdComp_ExistP_Premium36 = validated_data.get("STIC_ProdComp_ExistP_Premium36",instance.STIC_ProdComp_ExistP_Premium36)
        instance.STIC_ProdComp_ExistP_Excess36 = validated_data.get("STIC_ProdComp_ExistP_Excess36",instance.STIC_ProdComp_ExistP_Excess36)
        instance.STIC_ProdComp_RecommP_Premium36 = validated_data.get("STIC_ProdComp_RecommP_Premium36",instance.STIC_ProdComp_RecommP_Premium36)
        instance.STIC_ProdComp_RecommP_Excess36 = validated_data.get("STIC_ProdComp_RecommP_Excess36",instance.STIC_ProdComp_RecommP_Excess36)

        instance.STIC_ProdComp_Recommended37 = validated_data.get("STIC_ProdComp_Recommended37",instance.STIC_ProdComp_Recommended37) 
        instance.STIC_ProdComp_Accepted37 = validated_data.get("STIC_ProdComp_Accepted37",instance.STIC_ProdComp_Accepted37) 
        instance.STIC_ProdComp_CoverAmount37 = validated_data.get("STIC_ProdComp_CoverAmount37",instance.STIC_ProdComp_CoverAmount37)
        instance.STIC_ProdComp_ExistP_Premium37 = validated_data.get("STIC_ProdComp_ExistP_Premium37",instance.STIC_ProdComp_ExistP_Premium37)
        instance.STIC_ProdComp_ExistP_Excess37 = validated_data.get("STIC_ProdComp_ExistP_Excess37",instance.STIC_ProdComp_ExistP_Excess37)
        instance.STIC_ProdComp_RecommP_Premium37 = validated_data.get("STIC_ProdComp_RecommP_Premium37",instance.STIC_ProdComp_RecommP_Premium37)
        instance.STIC_ProdComp_RecommP_Excess37 = validated_data.get("STIC_ProdComp_RecommP_Excess37",instance.STIC_ProdComp_RecommP_Excess37)

        instance.STIC_ProdComp_Recommended38 = validated_data.get("STIC_ProdComp_Recommended38",instance.STIC_ProdComp_Recommended38) 
        instance.STIC_ProdComp_Accepted38 = validated_data.get("STIC_ProdComp_Accepted38",instance.STIC_ProdComp_Accepted38) 
        instance.STIC_ProdComp_CoverAmount38 = validated_data.get("STIC_ProdComp_CoverAmount38",instance.STIC_ProdComp_CoverAmount38)
        instance.STIC_ProdComp_ExistP_Premium38 = validated_data.get("STIC_ProdComp_ExistP_Premium38",instance.STIC_ProdComp_ExistP_Premium38)
        instance.STIC_ProdComp_ExistP_Excess38 = validated_data.get("STIC_ProdComp_ExistP_Excess38",instance.STIC_ProdComp_ExistP_Excess38)
        instance.STIC_ProdComp_RecommP_Premium38 = validated_data.get("STIC_ProdComp_RecommP_Premium38",instance.STIC_ProdComp_RecommP_Premium38)
        instance.STIC_ProdComp_RecommP_Excess38 = validated_data.get("STIC_ProdComp_RecommP_Excess38",instance.STIC_ProdComp_RecommP_Excess38)

        instance.STIC_ProdComp_Recommended39 = validated_data.get("STIC_ProdComp_Recommended39",instance.STIC_ProdComp_Recommended39) 
        instance.STIC_ProdComp_Accepted39 = validated_data.get("STIC_ProdComp_Accepted39",instance.STIC_ProdComp_Accepted39) 
        instance.STIC_ProdComp_CoverAmount39 = validated_data.get("STIC_ProdComp_CoverAmount39",instance.STIC_ProdComp_CoverAmount39)
        instance.STIC_ProdComp_ExistP_Premium39 = validated_data.get("STIC_ProdComp_ExistP_Premium39",instance.STIC_ProdComp_ExistP_Premium39)
        instance.STIC_ProdComp_ExistP_Excess39 = validated_data.get("STIC_ProdComp_ExistP_Excess39",instance.STIC_ProdComp_ExistP_Excess39)
        instance.STIC_ProdComp_RecommP_Premium39 = validated_data.get("STIC_ProdComp_RecommP_Premium39",instance.STIC_ProdComp_RecommP_Premium39)
        instance.STIC_ProdComp_RecommP_Excess39 = validated_data.get("STIC_ProdComp_RecommP_Excess39",instance.STIC_ProdComp_RecommP_Excess39)

        instance.STIC_ProdComp_Recommended40 = validated_data.get("STIC_ProdComp_Recommended40",instance.STIC_ProdComp_Recommended40) 
        instance.STIC_ProdComp_Accepted40 = validated_data.get("STIC_ProdComp_Accepted40",instance.STIC_ProdComp_Accepted40) 
        instance.STIC_ProdComp_CoverAmount40 = validated_data.get("STIC_ProdComp_CoverAmount40",instance.STIC_ProdComp_CoverAmount40)
        instance.STIC_ProdComp_ExistP_Premium40 = validated_data.get("STIC_ProdComp_ExistP_Premium40",instance.STIC_ProdComp_ExistP_Premium40)
        instance.STIC_ProdComp_ExistP_Excess40 = validated_data.get("STIC_ProdComp_ExistP_Excess40",instance.STIC_ProdComp_ExistP_Excess40)
        instance.STIC_ProdComp_RecommP_Premium40 = validated_data.get("STIC_ProdComp_RecommP_Premium40",instance.STIC_ProdComp_RecommP_Premium40)
        instance.STIC_ProdComp_RecommP_Excess40 = validated_data.get("STIC_ProdComp_RecommP_Excess40",instance.STIC_ProdComp_RecommP_Excess40)

        instance.STIC_ProdComp_Recommended41 = validated_data.get("STIC_ProdComp_Recommended41",instance.STIC_ProdComp_Recommended41) 
        instance.STIC_ProdComp_Accepted41 = validated_data.get("STIC_ProdComp_Accepted41",instance.STIC_ProdComp_Accepted41) 
        instance.STIC_ProdComp_CoverAmount41 = validated_data.get("STIC_ProdComp_CoverAmount41",instance.STIC_ProdComp_CoverAmount41)
        instance.STIC_ProdComp_ExistP_Premium41 = validated_data.get("STIC_ProdComp_ExistP_Premium41",instance.STIC_ProdComp_ExistP_Premium41)
        instance.STIC_ProdComp_ExistP_Excess41 = validated_data.get("STIC_ProdComp_ExistP_Excess41",instance.STIC_ProdComp_ExistP_Excess41)
        instance.STIC_ProdComp_RecommP_Premium41 = validated_data.get("STIC_ProdComp_RecommP_Premium41",instance.STIC_ProdComp_RecommP_Premium41)
        instance.STIC_ProdComp_RecommP_Excess41 = validated_data.get("STIC_ProdComp_RecommP_Excess41",instance.STIC_ProdComp_RecommP_Excess41)

        instance.STIC_ProdComp_Recommended42 = validated_data.get("STIC_ProdComp_Recommended42",instance.STIC_ProdComp_Recommended42) 
        instance.STIC_ProdComp_Accepted42 = validated_data.get("STIC_ProdComp_Accepted42",instance.STIC_ProdComp_Accepted42) 
        instance.STIC_ProdComp_CoverAmount42 = validated_data.get("STIC_ProdComp_CoverAmount42",instance.STIC_ProdComp_CoverAmount42)
        instance.STIC_ProdComp_ExistP_Premium42 = validated_data.get("STIC_ProdComp_ExistP_Premium42",instance.STIC_ProdComp_ExistP_Premium42)
        instance.STIC_ProdComp_ExistP_Excess42 = validated_data.get("STIC_ProdComp_ExistP_Excess42",instance.STIC_ProdComp_ExistP_Excess42)
        instance.STIC_ProdComp_RecommP_Premium42 = validated_data.get("STIC_ProdComp_RecommP_Premium42",instance.STIC_ProdComp_RecommP_Premium42)
        instance.STIC_ProdComp_RecommP_Excess42 = validated_data.get("STIC_ProdComp_RecommP_Excess42",instance.STIC_ProdComp_RecommP_Excess42)

        instance.STIC_ProdComp_Recommended43 = validated_data.get("STIC_ProdComp_Recommended43",instance.STIC_ProdComp_Recommended43) 
        instance.STIC_ProdComp_Accepted43 = validated_data.get("STIC_ProdComp_Accepted43",instance.STIC_ProdComp_Accepted43) 
        instance.STIC_ProdComp_CoverAmount43 = validated_data.get("STIC_ProdComp_CoverAmount43",instance.STIC_ProdComp_CoverAmount43)
        instance.STIC_ProdComp_ExistP_Premium43 = validated_data.get("STIC_ProdComp_ExistP_Premium43",instance.STIC_ProdComp_ExistP_Premium43)
        instance.STIC_ProdComp_ExistP_Excess43 = validated_data.get("STIC_ProdComp_ExistP_Excess43",instance.STIC_ProdComp_ExistP_Excess43)
        instance.STIC_ProdComp_RecommP_Premium43 = validated_data.get("STIC_ProdComp_RecommP_Premium43",instance.STIC_ProdComp_RecommP_Premium43)
        instance.STIC_ProdComp_RecommP_Excess43 = validated_data.get("STIC_ProdComp_RecommP_Excess43",instance.STIC_ProdComp_RecommP_Excess43)

        instance.STIC_ProdComp_Recommended44 = validated_data.get("STIC_ProdComp_Recommended44",instance.STIC_ProdComp_Recommended44) 
        instance.STIC_ProdComp_Accepted44 = validated_data.get("STIC_ProdComp_Accepted44",instance.STIC_ProdComp_Accepted44) 
        instance.STIC_ProdComp_CoverAmount44 = validated_data.get("STIC_ProdComp_CoverAmount44",instance.STIC_ProdComp_CoverAmount44)
        instance.STIC_ProdComp_ExistP_Premium44 = validated_data.get("STIC_ProdComp_ExistP_Premium44",instance.STIC_ProdComp_ExistP_Premium44)
        instance.STIC_ProdComp_ExistP_Excess44 = validated_data.get("STIC_ProdComp_ExistP_Excess44",instance.STIC_ProdComp_ExistP_Excess44)
        instance.STIC_ProdComp_RecommP_Premium44 = validated_data.get("STIC_ProdComp_RecommP_Premium44",instance.STIC_ProdComp_RecommP_Premium44)
        instance.STIC_ProdComp_RecommP_Excess44 = validated_data.get("STIC_ProdComp_RecommP_Excess44",instance.STIC_ProdComp_RecommP_Excess44)

        instance.STIC_ProdComp_FeeNCharges = validated_data.get("STIC_ProdComp_FeeNCharges",instance.STIC_ProdComp_FeeNCharges)
        instance.STIC_ProdComp_Commission = validated_data.get("STIC_ProdComp_Commission",instance.STIC_ProdComp_Commission)
        instance.STIC_ProdComp_TotalPremium = validated_data.get("STIC_ProdComp_TotalPremium",instance.STIC_ProdComp_TotalPremium)
        instance.STIC_Fire_Limit = validated_data.get("STIC_Fire_Limit",instance.STIC_Fire_Limit)
        instance.STIC_Fire_ItemNumber = validated_data.get("STIC_Fire_ItemNumber",instance.STIC_Fire_ItemNumber)
        instance.STIC_Fire_Premium = validated_data.get("STIC_Fire_Premium",instance.STIC_Fire_Premium)
        instance.STIC_Fire_PremNumber = validated_data.get("STIC_Fire_PremNumber",instance.STIC_Fire_PremNumber)
        instance.STIC_Buildings_Insured = validated_data.get("STIC_Buildings_Insured",instance.STIC_Buildings_Insured)
        instance.STIC_Rental_Insured = validated_data.get("STIC_Rental_Insured",instance.STIC_Rental_Insured)
        instance.STIC_Others_Insured = validated_data.get("STIC_Others_Insured",instance.STIC_Others_Insured)
        instance.STIC_Stocks_Insured = validated_data.get("STIC_Stocks_Insured",instance.STIC_Stocks_Insured)
        instance.STIC_Stocks_Insured = validated_data.get("STIC_Stocks_Insured",instance.STIC_Stocks_Insured)
        instance.STIC_Miscellaneous1_Insured = validated_data.get("STIC_Miscellaneous1_Insured",instance.STIC_Miscellaneous1_Insured)
        instance.STIC_Miscellaneous2_Insured = validated_data.get("STIC_Miscellaneous2_Insured",instance.STIC_Miscellaneous2_Insured)
        instance.STIC_Earthquake_Insured = validated_data.get("STIC_Earthquake_Insured",instance.STIC_Earthquake_Insured) 
        instance.STIC_Malicious_Damage_Insured = validated_data.get("STIC_Malicious_Damage_Insured",instance.STIC_Malicious_Damage_Insured) 
        instance.STIC_Special_Insured = validated_data.get("STIC_Special_Insured",instance.STIC_Special_Insured) 
        instance.STIC_LeakFull_Insured = validated_data.get("STIC_LeakFull_Insured",instance.STIC_LeakFull_Insured) 
        instance.STIC_LeakFirst_Insured = validated_data.get("STIC_LeakFirst_Insured",instance.STIC_LeakFirst_Insured) 
        instance.STIC_SnLLimited_Insured = validated_data.get("STIC_SnLLimited_Insured",instance.STIC_SnLLimited_Insured) 
        instance.STIC_SnLComprehensive_Insured = validated_data.get("STIC_SnLComprehensive_Insured",instance.STIC_SnLComprehensive_Insured) 
        instance.STIC_RnS_Insured = validated_data.get("STIC_RnS_Insured",instance.STIC_RnS_Insured) 
        instance.STIC_SDC_Insured = validated_data.get("STIC_SDC_Insured",instance.STIC_SDC_Insured) 
        instance.STIC_BuildCombined_Limit = validated_data.get("STIC_BuildCombined_Limit",instance.STIC_BuildCombined_Limit)
        instance.STIC_BuildCombined_ItemNumber = validated_data.get("STIC_BuildCombined_ItemNumber",instance.STIC_BuildCombined_ItemNumber)
        instance.STIC_BuildCombined_Premium = validated_data.get("STIC_BuildCombined_Premium",instance.STIC_BuildCombined_Premium)
        instance.STIC_BuildCombined_PremNumber = validated_data.get("STIC_BuildCombined_PremNumber",instance.STIC_BuildCombined_PremNumber)
        instance.STIC_BuildCombined_ColumnRef = validated_data.get("STIC_BuildCombined_ColumnRef",instance.STIC_BuildCombined_ColumnRef)
        instance.STIC_BuildCombined_Sum = validated_data.get("STIC_BuildCombined_Sum",instance.STIC_BuildCombined_Sum)
        instance.STIC_BuildCombined_Construct = validated_data.get("STIC_BuildCombined_Construct",instance.STIC_BuildCombined_Construct) 
        instance.STIC_BuildCombined_Desc = validated_data.get("STIC_BuildCombined_Desc",instance.STIC_BuildCombined_Desc)
        instance.STIC_Extensions_RnS = validated_data.get("STIC_Extensions_RnS",instance.STIC_Extensions_RnS)
        instance.STIC_Extensions_Geysers = validated_data.get("STIC_Extensions_Geysers",instance.STIC_Extensions_Geysers)
        instance.STIC_Extensions_SnL = validated_data.get("STIC_Extensions_SnL",instance.STIC_Extensions_SnL)
        instance.STIC_Extensions_PoA = validated_data.get("STIC_Extensions_PoA",instance.STIC_Extensions_PoA)
        instance.STIC_Extensions_IorE = validated_data.get("STIC_Extensions_IorE",instance.STIC_Extensions_IorE)
        instance.STIC_OC_Limit = validated_data.get("STIC_OC_Limit",instance.STIC_OC_Limit)
        instance.STIC_OC_ItemNumber = validated_data.get("STIC_OC_ItemNumber",instance.STIC_OC_ItemNumber)
        instance.STIC_OC_Premium = validated_data.get("STIC_OC_Premium",instance.STIC_OC_Premium)
        instance.STIC_OC_PremNumber = validated_data.get("STIC_OC_PremNumber",instance.STIC_OC_PremNumber)
        instance.STIC_OC_PremisesNum = validated_data.get("STIC_OC_PremisesNum",instance.STIC_OC_PremisesNum)
        instance.STIC_OC_Sum = validated_data.get("STIC_OC_Sum",instance.STIC_OC_Sum)
        instance.STIC_OC_Construct = validated_data.get("STIC_OC_Construct",instance.STIC_OC_Construct) 
        instance.STIC_OC_Desc = validated_data.get("STIC_OC_Desc",instance.STIC_OC_Desc)
        instance.STIC_OC_Doc_Sum = validated_data.get("STIC_OC_Doc_Sum",instance.STIC_OC_Doc_Sum)
        instance.STIC_OC_Doc_Premium = validated_data.get("STIC_OC_Doc_Premium",instance.STIC_OC_Doc_Premium)
        instance.STIC_OC_LLDoc_Sum = validated_data.get("STIC_OC_LLDoc_Sum",instance.STIC_OC_LLDoc_Sum)
        instance.STIC_OC_LLDoc_Premium = validated_data.get("STIC_OC_LLDoc_Premium",instance.STIC_OC_LLDoc_Premium)
        instance.STIC_OC_RnS_Sum = validated_data.get("STIC_OC_RnS_Sum",instance.STIC_OC_RnS_Sum)
        instance.STIC_OC_RnS_Premium = validated_data.get("STIC_OC_RnS_Premium",instance.STIC_OC_RnS_Premium)
        instance.STIC_OC_TheftF_Sum = validated_data.get("STIC_OC_TheftF_Sum",instance.STIC_OC_TheftF_Sum)
        instance.STIC_OC_TheftF_Premium = validated_data.get("STIC_OC_TheftF_Premium",instance.STIC_OC_TheftF_Premium)
        instance.STIC_OC_Theft_Sum = validated_data.get("STIC_OC_Theft_Sum",instance.STIC_OC_Theft_Sum)
        instance.STIC_OC_Theft_Premium = validated_data.get("STIC_OC_Theft_Premium",instance.STIC_OC_Theft_Premium)
        instance.STIC_OC_Total_Premium = validated_data.get("STIC_OC_Total_Premium",instance.STIC_OC_Total_Premium)
        instance.STIC_BusInt_Limit = validated_data.get("STIC_BusInt_Limit",instance.STIC_BusInt_Limit)
        instance.STIC_BusInt_Premium = validated_data.get("STIC_BusInt_Premium",instance.STIC_BusInt_Premium)
        instance.STIC_BusInt_ItemNumber = validated_data.get("STIC_BusInt_ItemNumber",instance.STIC_BusInt_ItemNumber)
        instance.STIC_BusInt_PremNumber = validated_data.get("STIC_BusInt_PremNumber",instance.STIC_BusInt_PremNumber)
        instance.STIC_BusInt_Basis = validated_data.get("STIC_BusInt_Basis",instance.STIC_BusInt_Basis)
        instance.STIC_BusInt_Indemnity = validated_data.get("STIC_BusInt_Indemnity",instance.STIC_BusInt_Indemnity)
        instance.STIC_BusInt_Type1 = validated_data.get("STIC_BusInt_Type1",instance.STIC_BusInt_Type1) 
        instance.STIC_BusInt_Type2 = validated_data.get("STIC_BusInt_Type2",instance.STIC_BusInt_Type2) 
        instance.STIC_BusInt_Type3 = validated_data.get("STIC_BusInt_Type3",instance.STIC_BusInt_Type3) 
        instance.STIC_BusInt_Type4 = validated_data.get("STIC_BusInt_Type4",instance.STIC_BusInt_Type4) 
        instance.STIC_BusInt_Type5 = validated_data.get("STIC_BusInt_Type5",instance.STIC_BusInt_Type5) 
        instance.STIC_BusInt_Type6 = validated_data.get("STIC_BusInt_Type6",instance.STIC_BusInt_Type6) 
        instance.STIC_BusInt_Type7 = validated_data.get("STIC_BusInt_Type7",instance.STIC_BusInt_Type7) 
        instance.STIC_BusInt_Type8 = validated_data.get("STIC_BusInt_Type8",instance.STIC_BusInt_Type8) 
        instance.STIC_BusInt_Type9 = validated_data.get("STIC_BusInt_Type9",instance.STIC_BusInt_Type9)
        instance.STIC_BusInt_Type9_1 = validated_data.get("STIC_BusInt_Type9_1",instance.STIC_BusInt_Type9_1)
        instance.STIC_BusInt_Type10 = validated_data.get("STIC_BusInt_Type10",instance.STIC_BusInt_Type10)
        instance.STIC_BusInt_Type11 = validated_data.get("STIC_BusInt_Type11",instance.STIC_BusInt_Type11) 
        instance.STIC_BusInt_Type11_1 = validated_data.get("STIC_BusInt_Type11_1",instance.STIC_BusInt_Type11_1)
        instance.STIC_BusInt_Type12 = validated_data.get("STIC_BusInt_Type12",instance.STIC_BusInt_Type12)
        instance.STIC_BusInt_Type13 = validated_data.get("STIC_BusInt_Type13",instance.STIC_BusInt_Type13)
        instance.STIC_BusInt_Type14 = validated_data.get("STIC_BusInt_Type14",instance.STIC_BusInt_Type14) 
        instance.STIC_BusInt_Type14_1 = validated_data.get("STIC_BusInt_Type14_1",instance.STIC_BusInt_Type14_1)
        instance.STIC_BusInt_Type15 = validated_data.get("STIC_BusInt_Type15",instance.STIC_BusInt_Type15) 
        instance.STIC_BusInt_Type15_1 = validated_data.get("STIC_BusInt_Type15_1",instance.STIC_BusInt_Type15_1)
        instance.STIC_BusInt_Type16 = validated_data.get("STIC_BusInt_Type16",instance.STIC_BusInt_Type16) 
        instance.STIC_BusInt_Type16_1 = validated_data.get("STIC_BusInt_Type16_1",instance.STIC_BusInt_Type16_1)
        instance.STIC_BusInt_Type17 = validated_data.get("STIC_BusInt_Type17",instance.STIC_BusInt_Type17)
        instance.STIC_BusInt_Type18 = validated_data.get("STIC_BusInt_Type18",instance.STIC_BusInt_Type18)
        instance.STIC_BusInt_Type19 = validated_data.get("STIC_BusInt_Type19",instance.STIC_BusInt_Type19) 
        instance.STIC_BusInt_Type19_1 = validated_data.get("STIC_BusInt_Type19_1",instance.STIC_BusInt_Type19_1)
        instance.STIC_BusInt_Type20 = validated_data.get("STIC_BusInt_Type20",instance.STIC_BusInt_Type20) 
        instance.STIC_BusInt_Type20_1 = validated_data.get("STIC_BusInt_Type20_1",instance.STIC_BusInt_Type20_1)
        instance.STIC_BusInt_Type21 = validated_data.get("STIC_BusInt_Type21",instance.STIC_BusInt_Type21) 
        instance.STIC_BusInt_Type21_1 = validated_data.get("STIC_BusInt_Type21_1",instance.STIC_BusInt_Type21_1)
        instance.STIC_BusInt_Type22 = validated_data.get("STIC_BusInt_Type22",instance.STIC_BusInt_Type22) 
        instance.STIC_BusInt_Type22_1 = validated_data.get("STIC_BusInt_Type22_1",instance.STIC_BusInt_Type22_1)
        instance.STIC_BusInt_Type23 = validated_data.get("STIC_BusInt_Type23",instance.STIC_BusInt_Type23) 
        instance.STIC_BusInt_Type23_1 = validated_data.get("STIC_BusInt_Type23_1",instance.STIC_BusInt_Type23_1)
        instance.STIC_BusInt_TotalPremium = validated_data.get("STIC_BusInt_TotalPremium",instance.STIC_BusInt_TotalPremium)
        instance.STIC_BusInt_Comments = validated_data.get("STIC_BusInt_Comments",instance.STIC_BusInt_Comments) 
        instance.STIC_BusInt_PremisesNumber = validated_data.get("STIC_BusInt_PremisesNumber",instance.STIC_BusInt_PremisesNumber)
        instance.STIC_BusInt_Basis = validated_data.get("STIC_BusInt_Basis",instance.STIC_BusInt_Basis)
        instance.STIC_BusInt_IndemPer = validated_data.get("STIC_BusInt_IndemPer",instance.STIC_BusInt_IndemPer)
        instance.STIC_BusInt_Suppliers = validated_data.get("STIC_BusInt_Suppliers",instance.STIC_BusInt_Suppliers) 
        instance.STIC_BusInt_Type2_1 = validated_data.get("STIC_BusInt_Type2_1",instance.STIC_BusInt_Type2_1) 
        instance.STIC_BusInt_Type2_2 = validated_data.get("STIC_BusInt_Type2_2",instance.STIC_BusInt_Type2_2) 
        instance.STIC_BusInt_Type2_3 = validated_data.get("STIC_BusInt_Type2_3",instance.STIC_BusInt_Type2_3) 
        instance.STIC_BusInt_Type2_4 = validated_data.get("STIC_BusInt_Type2_4",instance.STIC_BusInt_Type2_4) 
        instance.STIC_BusInt_Type2_5 = validated_data.get("STIC_BusInt_Type2_5",instance.STIC_BusInt_Type2_5) 
        instance.STIC_BusInt_Type2_6 = validated_data.get("STIC_BusInt_Type2_6",instance.STIC_BusInt_Type2_6) 
        instance.STIC_BusInt_Type2_7 = validated_data.get("STIC_BusInt_Type2_7",instance.STIC_BusInt_Type2_7) 
        instance.STIC_BusInt_Type2_8 = validated_data.get("STIC_BusInt_Type2_8",instance.STIC_BusInt_Type2_8) 
        instance.STIC_BusInt_Type2_9 = validated_data.get("STIC_BusInt_Type2_9",instance.STIC_BusInt_Type2_9)
        instance.STIC_BusInt_Type2_9_1 = validated_data.get("STIC_BusInt_Type2_9_1",instance.STIC_BusInt_Type2_9_1)
        instance.STIC_BusInt_Type2_10 = validated_data.get("STIC_BusInt_Type2_10",instance.STIC_BusInt_Type2_10)
        instance.STIC_BusInt_Type2_11 = validated_data.get("STIC_BusInt_Type2_11",instance.STIC_BusInt_Type2_11) 
        instance.STIC_BusInt_Type2_11_1 = validated_data.get("STIC_BusInt_Type2_11_1",instance.STIC_BusInt_Type2_11_1)
        instance.STIC_BusInt_Type2_12 = validated_data.get("STIC_BusInt_Type2_12",instance.STIC_BusInt_Type2_12)
        instance.STIC_BusInt_Type2_13 = validated_data.get("STIC_BusInt_Type2_13",instance.STIC_BusInt_Type2_13)
        instance.STIC_BusInt_Type2_14 = validated_data.get("STIC_BusInt_Type2_14",instance.STIC_BusInt_Type2_14) 
        instance.STIC_BusInt_Type2_14_1 = validated_data.get("STIC_BusInt_Type2_14_1",instance.STIC_BusInt_Type2_14_1)
        instance.STIC_BusInt_Type2_15 = validated_data.get("STIC_BusInt_Type2_15",instance.STIC_BusInt_Type2_15) 
        instance.STIC_BusInt_Type2_15_1 = validated_data.get("STIC_BusInt_Type2_15_1",instance.STIC_BusInt_Type2_15_1)
        instance.STIC_BusInt_Type2_16 = validated_data.get("STIC_BusInt_Type2_16",instance.STIC_BusInt_Type2_16) 
        instance.STIC_BusInt_Type2_16_1 = validated_data.get("STIC_BusInt_Type2_16_1",instance.STIC_BusInt_Type2_16_1)
        instance.STIC_BusInt_Type2_17 = validated_data.get("STIC_BusInt_Type2_17",instance.STIC_BusInt_Type2_17)
        instance.STIC_BusInt_Type2_18 = validated_data.get("STIC_BusInt_Type2_18",instance.STIC_BusInt_Type2_18)
        instance.STIC_BusInt_Type2_19 = validated_data.get("STIC_BusInt_Type2_19",instance.STIC_BusInt_Type2_19) 
        instance.STIC_BusInt_Type2_19_1 = validated_data.get("STIC_BusInt_Type2_19_1",instance.STIC_BusInt_Type2_19_1)
        instance.STIC_BusInt_Type2_20 = validated_data.get("STIC_BusInt_Type2_20",instance.STIC_BusInt_Type2_20) 
        instance.STIC_BusInt_Type2_20_1 = validated_data.get("STIC_BusInt_Type2_20_1",instance.STIC_BusInt_Type2_20_1)
        instance.STIC_BusInt_Type2_21 = validated_data.get("STIC_BusInt_Type2_21",instance.STIC_BusInt_Type2_21) 
        instance.STIC_BusInt_Type2_21_1 = validated_data.get("STIC_BusInt_Type2_21_1",instance.STIC_BusInt_Type2_21_1)
        instance.STIC_BusInt_Type2_22 = validated_data.get("STIC_BusInt_Type2_22",instance.STIC_BusInt_Type2_22) 
        instance.STIC_BusInt_Type2_22_1 = validated_data.get("STIC_BusInt_Type2_22_1",instance.STIC_BusInt_Type2_22_1)
        instance.STIC_BusInt_Type2_23 = validated_data.get("STIC_BusInt_Type2_23",instance.STIC_BusInt_Type2_23) 
        instance.STIC_BusInt_Type2_23_1 = validated_data.get("STIC_BusInt_Type2_23_1",instance.STIC_BusInt_Type2_23_1)
        instance.STIC_BusInt2_TotalPremium = validated_data.get("STIC_BusInt2_TotalPremium",instance.STIC_BusInt2_TotalPremium)
        instance.STIC_BusInt2_Comments = validated_data.get("STIC_BusInt2_Comments",instance.STIC_BusInt2_Comments) 
        instance.STIC_Sec5_Limit = validated_data.get("STIC_Sec5_Limit",instance.STIC_Sec5_Limit)
        instance.STIC_Sec5_Premium = validated_data.get("STIC_Sec5_Premium",instance.STIC_Sec5_Premium)
        instance.STIC_Sec5_ItemNumber = validated_data.get("STIC_Sec5_ItemNumber",instance.STIC_Sec5_ItemNumber)
        instance.STIC_Sec5_PremNumber = validated_data.get("STIC_Sec5_PremNumber",instance.STIC_Sec5_PremNumber)
        instance.STIC_Sec5_1 = validated_data.get("STIC_Sec5_1",instance.STIC_Sec5_1) 
        instance.STIC_Sec5_2 = validated_data.get("STIC_Sec5_2",instance.STIC_Sec5_2) 
        instance.STIC_Sec5_Extension_1 = validated_data.get("STIC_Sec5_Extension_1",instance.STIC_Sec5_Extension_1) 
        instance.STIC_Sec5_Extension_2 = validated_data.get("STIC_Sec5_Extension_2",instance.STIC_Sec5_Extension_2) 
        instance.STIC_Sec5_Extension_3 = validated_data.get("STIC_Sec5_Extension_3",instance.STIC_Sec5_Extension_3) 
        instance.STIC_Sec5_Extension_4 = validated_data.get("STIC_Sec5_Extension_4",instance.STIC_Sec5_Extension_4) 
        instance.STIC_Sec5_Extension_5 = validated_data.get("STIC_Sec5_Extension_5",instance.STIC_Sec5_Extension_5) 
        instance.STIC_Sec5_AnnualPremium = validated_data.get("STIC_Sec5_AnnualPremium",instance.STIC_Sec5_AnnualPremium)
        instance.STIC_Sec5_Comments = validated_data.get("STIC_Sec5_Comments",instance.STIC_Sec5_Comments) 
        instance.STIC_Sec6_Limit = validated_data.get("STIC_Sec6_Limit",instance.STIC_Sec6_Limit)
        instance.STIC_Sec6_Premium = validated_data.get("STIC_Sec6_Premium",instance.STIC_Sec6_Premium)
        instance.STIC_Sec6_ItemNumber = validated_data.get("STIC_Sec6_ItemNumber",instance.STIC_Sec6_ItemNumber)
        instance.STIC_Sec6_PremNumber = validated_data.get("STIC_Sec6_PremNumber",instance.STIC_Sec6_PremNumber)
        instance.STIC_Sec6_1 = validated_data.get("STIC_Sec6_1",instance.STIC_Sec6_1)
        instance.STIC_Sec6_2 = validated_data.get("STIC_Sec6_2",instance.STIC_Sec6_2)
        instance.STIC_Sec6_3 = validated_data.get("STIC_Sec6_3",instance.STIC_Sec6_3) 
        instance.STIC_Sec6_4 = validated_data.get("STIC_Sec6_4",instance.STIC_Sec6_4) 
        instance.STIC_Sec6_5 = validated_data.get("STIC_Sec6_5",instance.STIC_Sec6_5)
        instance.STIC_Sec6_6 = validated_data.get("STIC_Sec6_6",instance.STIC_Sec6_6)
        instance.STIC_Sec6_Comments = validated_data.get("STIC_Sec6_Comments",instance.STIC_Sec6_Comments) 
        instance.STIC_Sec7_Limit = validated_data.get("STIC_Sec7_Limit",instance.STIC_Sec7_Limit)
        instance.STIC_Sec7_Premium = validated_data.get("STIC_Sec7_Premium",instance.STIC_Sec7_Premium)
        instance.STIC_Sec7_ItemNumber = validated_data.get("STIC_Sec7_ItemNumber",instance.STIC_Sec7_ItemNumber)
        instance.STIC_Sec7_PremNumber = validated_data.get("STIC_Sec7_PremNumber",instance.STIC_Sec7_PremNumber)
        instance.STIC_Sec7_1 = validated_data.get("STIC_Sec7_1",instance.STIC_Sec7_1)
        instance.STIC_Sec7_2 = validated_data.get("STIC_Sec7_2",instance.STIC_Sec7_2)
        instance.STIC_Sec7_3 = validated_data.get("STIC_Sec7_3",instance.STIC_Sec7_3) 
        instance.STIC_Sec7_4 = validated_data.get("STIC_Sec7_4",instance.STIC_Sec7_4) 
        instance.STIC_Sec7_5 = validated_data.get("STIC_Sec7_5",instance.STIC_Sec7_5)
        instance.STIC_Sec7_6 = validated_data.get("STIC_Sec7_6",instance.STIC_Sec7_6)
        instance.STIC_Sec7_7 = validated_data.get("STIC_Sec7_7",instance.STIC_Sec7_7)
        instance.STIC_Sec7_8 = validated_data.get("STIC_Sec7_8",instance.STIC_Sec7_8)
        instance.STIC_Sec7_9 = validated_data.get("STIC_Sec7_9",instance.STIC_Sec7_9)
        instance.STIC_Sec7_Extension_Included1 = validated_data.get("STIC_Sec7_Extension_Included1",instance.STIC_Sec7_Extension_Included1) 
        instance.STIC_Sec7_Extension_Limit1 = validated_data.get("STIC_Sec7_Extension_Limit1",instance.STIC_Sec7_Extension_Limit1)
        instance.STIC_Sec7_Extension_Premium1 = validated_data.get("STIC_Sec7_Extension_Premium1",instance.STIC_Sec7_Extension_Premium1)
        instance.STIC_Sec7_Extension_Included2 = validated_data.get("STIC_Sec7_Extension_Included2",instance.STIC_Sec7_Extension_Included2) 
        instance.STIC_Sec7_Extension_Limit2 = validated_data.get("STIC_Sec7_Extension_Limit2",instance.STIC_Sec7_Extension_Limit2)
        instance.STIC_Sec7_Extension_Premium2 = validated_data.get("STIC_Sec7_Extension_Premium2",instance.STIC_Sec7_Extension_Premium2)
        instance.STIC_Sec7_Extension_Included3 = validated_data.get("STIC_Sec7_Extension_Included3",instance.STIC_Sec7_Extension_Included3) 
        instance.STIC_Sec7_Extension_Limit3 = validated_data.get("STIC_Sec7_Extension_Limit3",instance.STIC_Sec7_Extension_Limit3)
        instance.STIC_Sec7_Extension_Premium3 = validated_data.get("STIC_Sec7_Extension_Premium3",instance.STIC_Sec7_Extension_Premium3)
        instance.STIC_Sec7_AnnualPremium = validated_data.get("STIC_Sec7_AnnualPremium",instance.STIC_Sec7_AnnualPremium) 
        instance.STIC_Sec7_Comments = validated_data.get("STIC_Sec7_Comments",instance.STIC_Sec7_Comments) 
        instance.STIC_Sec8_Limit = validated_data.get("STIC_Sec8_Limit",instance.STIC_Sec8_Limit)
        instance.STIC_Sec8_Premium = validated_data.get("STIC_Sec8_Premium",instance.STIC_Sec8_Premium)
        instance.STIC_Sec8_ItemNumber = validated_data.get("STIC_Sec8_ItemNumber",instance.STIC_Sec8_ItemNumber)
        instance.STIC_Sec8_PremNumber = validated_data.get("STIC_Sec8_PremNumber",instance.STIC_Sec8_PremNumber)
        instance.STIC_Sec8_1 = validated_data.get("STIC_Sec8_1",instance.STIC_Sec8_1)
        instance.STIC_Sec8_2 = validated_data.get("STIC_Sec8_2",instance.STIC_Sec8_2)
        instance.STIC_Sec8_Extension_Included1 = validated_data.get("STIC_Sec8_Extension_Included1",instance.STIC_Sec8_Extension_Included1) 
        instance.STIC_Sec8_Extension_Included2 = validated_data.get("STIC_Sec8_Extension_Included2",instance.STIC_Sec8_Extension_Included2) 
        # instance.STIC_Sec8_Extension_Included3 = validated_data.get("STIC_Sec8_Extension_Included3",instance.STIC_Sec8_Extension_Included3) 
        instance.STIC_Sec8_AnnualPremium = validated_data.get("STIC_Sec8_AnnualPremium",instance.STIC_Sec8_AnnualPremium) 
        instance.STIC_Sec8_Comments = validated_data.get("STIC_Sec8_Comments",instance.STIC_Sec8_Comments) 
        instance.STIC_Sec9_Limit = validated_data.get("STIC_Sec9_Limit",instance.STIC_Sec9_Limit)
        instance.STIC_Sec9_Premium = validated_data.get("STIC_Sec9_Premium",instance.STIC_Sec9_Premium)
        instance.STIC_Sec9_ItemNumber = validated_data.get("STIC_Sec9_ItemNumber",instance.STIC_Sec9_ItemNumber)
        instance.STIC_Sec9_PremNumber = validated_data.get("STIC_Sec9_PremNumber",instance.STIC_Sec9_PremNumber)
        instance.STIC_Sec9_1 = validated_data.get("STIC_Sec9_1",instance.STIC_Sec9_1)
        instance.STIC_Sec9_2 = validated_data.get("STIC_Sec9_2",instance.STIC_Sec9_2)
        instance.STIC_Sec9_3 = validated_data.get("STIC_Sec9_3",instance.STIC_Sec9_3)
        instance.STIC_Sec9_4 = validated_data.get("STIC_Sec9_4",instance.STIC_Sec9_4)
        instance.STIC_Sec9_5 = validated_data.get("STIC_Sec9_5",instance.STIC_Sec9_5)
        instance.STIC_Sec9_6 = validated_data.get("STIC_Sec9_6",instance.STIC_Sec9_6)
        instance.STIC_Sec9_Extension_Included1 = validated_data.get("STIC_Sec9_Extension_Included1",instance.STIC_Sec9_Extension_Included1) 
        instance.STIC_Sec9_Extension_Limit1 = validated_data.get("STIC_Sec9_Extension_Limit1",instance.STIC_Sec9_Extension_Limit1)
        instance.STIC_Sec9_Extension_Premium1 = validated_data.get("STIC_Sec9_Extension_Premium1",instance.STIC_Sec9_Extension_Premium1)
        instance.STIC_Sec9_Extension_Included2 = validated_data.get("STIC_Sec9_Extension_Included2",instance.STIC_Sec9_Extension_Included2) 
        instance.STIC_Sec9_Extension_Limit2 = validated_data.get("STIC_Sec9_Extension_Limit2",instance.STIC_Sec9_Extension_Limit2)
        instance.STIC_Sec9_Extension_Premium2 = validated_data.get("STIC_Sec9_Extension_Premium2",instance.STIC_Sec9_Extension_Premium2)
        instance.STIC_Sec9_Extension_Included3 = validated_data.get("STIC_Sec9_Extension_Included3",instance.STIC_Sec9_Extension_Included3) 
        instance.STIC_Sec9_Extension_Limit3 = validated_data.get("STIC_Sec9_Extension_Limit3",instance.STIC_Sec9_Extension_Limit3)
        instance.STIC_Sec9_Extension_Premium3 = validated_data.get("STIC_Sec9_Extension_Premium3",instance.STIC_Sec9_Extension_Premium3)
        instance.STIC_Sec9_Extension_Included4 = validated_data.get("STIC_Sec9_Extension_Included4",instance.STIC_Sec9_Extension_Included4) 
        instance.STIC_Sec9_Extension_Limit4 = validated_data.get("STIC_Sec9_Extension_Limit4",instance.STIC_Sec9_Extension_Limit4)
        instance.STIC_Sec9_Extension_Premium4 = validated_data.get("STIC_Sec9_Extension_Premium4",instance.STIC_Sec9_Extension_Premium4)
        instance.STIC_Sec9_Extension_Included5 = validated_data.get("STIC_Sec9_Extension_Included5",instance.STIC_Sec9_Extension_Included5) 
        instance.STIC_Sec9_Extension_Limit5 = validated_data.get("STIC_Sec9_Extension_Limit5",instance.STIC_Sec9_Extension_Limit5)
        instance.STIC_Sec9_Extension_Premium5 = validated_data.get("STIC_Sec9_Extension_Premium5",instance.STIC_Sec9_Extension_Premium5)
        instance.STIC_Sec9_Extension_Included6 = validated_data.get("STIC_Sec9_Extension_Included6",instance.STIC_Sec9_Extension_Included6) 
        instance.STIC_Sec9_Extension_Limit6 = validated_data.get("STIC_Sec9_Extension_Limit6",instance.STIC_Sec9_Extension_Limit6)
        instance.STIC_Sec9_Extension_Premium6 = validated_data.get("STIC_Sec9_Extension_Premium6",instance.STIC_Sec9_Extension_Premium6)
        instance.STIC_Sec9_AnnualPremium = validated_data.get("STIC_Sec9_AnnualPremium",instance.STIC_Sec9_AnnualPremium) 
        instance.STIC_Sec9_Comments = validated_data.get("STIC_Sec9_Comments",instance.STIC_Sec9_Comments) 
        instance.STIC_Sec10_Limit = validated_data.get("STIC_Sec10_Limit",instance.STIC_Sec10_Limit)
        instance.STIC_Sec10_Premium = validated_data.get("STIC_Sec10_Premium",instance.STIC_Sec10_Premium)
        instance.STIC_Sec10_ItemNumber = validated_data.get("STIC_Sec10_ItemNumber",instance.STIC_Sec10_ItemNumber)
        instance.STIC_Sec10_PremNumber = validated_data.get("STIC_Sec10_PremNumber",instance.STIC_Sec10_PremNumber)
        instance.STIC_Sec10_1 = validated_data.get("STIC_Sec10_1",instance.STIC_Sec10_1)
        instance.STIC_Sec10_2 = validated_data.get("STIC_Sec10_2",instance.STIC_Sec10_2)
        instance.STIC_Sec10_3 = validated_data.get("STIC_Sec10_3",instance.STIC_Sec10_3)
        instance.STIC_Sec10_4 = validated_data.get("STIC_Sec10_4",instance.STIC_Sec10_4)
        instance.STIC_Sec10_5 = validated_data.get("STIC_Sec10_5",instance.STIC_Sec10_5)
        instance.STIC_Sec10_6 = validated_data.get("STIC_Sec10_6",instance.STIC_Sec10_6)
        instance.STIC_Sec10_7 = validated_data.get("STIC_Sec10_7",instance.STIC_Sec10_7)
        instance.STIC_Sec10_Extension_Included1 = validated_data.get("STIC_Sec10_Extension_Included1",instance.STIC_Sec10_Extension_Included1) 
        instance.STIC_Sec10_Extension_Limit1 = validated_data.get("STIC_Sec10_Extension_Limit1",instance.STIC_Sec10_Extension_Limit1)
        instance.STIC_Sec10_Extension_Premium1 = validated_data.get("STIC_Sec10_Extension_Premium1",instance.STIC_Sec10_Extension_Premium1)
        instance.STIC_Sec10_Extension_Included2 = validated_data.get("STIC_Sec10_Extension_Included2",instance.STIC_Sec10_Extension_Included2) 
        instance.STIC_Sec10_Extension_Limit2 = validated_data.get("STIC_Sec10_Extension_Limit2",instance.STIC_Sec10_Extension_Limit2)
        instance.STIC_Sec10_Extension_Premium2 = validated_data.get("STIC_Sec10_Extension_Premium2",instance.STIC_Sec10_Extension_Premium2)
        instance.STIC_Sec10_Extension_Included3 = validated_data.get("STIC_Sec10_Extension_Included3",instance.STIC_Sec10_Extension_Included3) 
        instance.STIC_Sec10_Extension_Limit3 = validated_data.get("STIC_Sec10_Extension_Limit3",instance.STIC_Sec10_Extension_Limit3)
        instance.STIC_Sec10_Extension_Premium3 = validated_data.get("STIC_Sec10_Extension_Premium3",instance.STIC_Sec10_Extension_Premium3)
        instance.STIC_Sec10_Extension_Included4 = validated_data.get("STIC_Sec10_Extension_Included4",instance.STIC_Sec10_Extension_Included4) 
        instance.STIC_Sec10_Extension_Limit4 = validated_data.get("STIC_Sec10_Extension_Limit4",instance.STIC_Sec10_Extension_Limit4)
        instance.STIC_Sec10_Extension_Premium4 = validated_data.get("STIC_Sec10_Extension_Premium4",instance.STIC_Sec10_Extension_Premium4)
        instance.STIC_Sec10_AnnualPremium = validated_data.get("STIC_Sec10_AnnualPremium",instance.STIC_Sec10_AnnualPremium) 
        instance.STIC_Sec10_Comments = validated_data.get("STIC_Sec10_Comments",instance.STIC_Sec10_Comments) 
        instance.STIC_Sec11_Limit = validated_data.get("STIC_Sec11_Limit",instance.STIC_Sec11_Limit)
        instance.STIC_Sec11_Premium = validated_data.get("STIC_Sec11_Premium",instance.STIC_Sec11_Premium)
        instance.STIC_Sec11_ItemNumber = validated_data.get("STIC_Sec11_ItemNumber",instance.STIC_Sec11_ItemNumber)
        instance.STIC_Sec11_PremNumber = validated_data.get("STIC_Sec11_PremNumber",instance.STIC_Sec11_PremNumber)
        instance.STIC_Sec11_1 = validated_data.get("STIC_Sec11_1",instance.STIC_Sec11_1) 
        instance.STIC_Sec11_2 = validated_data.get("STIC_Sec11_2",instance.STIC_Sec11_2)
        instance.STIC_Sec11_3 = validated_data.get("STIC_Sec11_3",instance.STIC_Sec11_3)
        instance.STIC_Sec11_4 = validated_data.get("STIC_Sec11_4",instance.STIC_Sec11_4)
        instance.STIC_Sec11_5 = validated_data.get("STIC_Sec11_5",instance.STIC_Sec11_5)
        instance.STIC_Sec11_6 = validated_data.get("STIC_Sec11_6",instance.STIC_Sec11_6)
        instance.STIC_Sec11_7 = validated_data.get("STIC_Sec11_7",instance.STIC_Sec11_7)
        instance.STIC_Sec11_8 = validated_data.get("STIC_Sec11_8",instance.STIC_Sec11_8)
        instance.STIC_Sec11_9 = validated_data.get("STIC_Sec11_9",instance.STIC_Sec11_9)
        instance.STIC_Sec11_10 = validated_data.get("STIC_Sec11_10",instance.STIC_Sec11_10)
        instance.STIC_Sec11_AnnualPremium = validated_data.get("STIC_Sec11_AnnualPremium",instance.STIC_Sec11_AnnualPremium) 
        instance.STIC_Sec11_Comments = validated_data.get("STIC_Sec11_Comments",instance.STIC_Sec11_Comments) 
        instance.STIC_Sec12_Limit = validated_data.get("STIC_Sec12_Limit",instance.STIC_Sec12_Limit)
        instance.STIC_Sec12_Premium = validated_data.get("STIC_Sec12_Premium",instance.STIC_Sec12_Premium)
        instance.STIC_Sec12_ItemNumber = validated_data.get("STIC_Sec12_ItemNumber",instance.STIC_Sec12_ItemNumber)
        instance.STIC_Sec12_PremNumber = validated_data.get("STIC_Sec12_PremNumber",instance.STIC_Sec12_PremNumber)
        instance.STIC_Sec12_1 = validated_data.get("STIC_Sec12_1",instance.STIC_Sec12_1)
        instance.STIC_Sec12_2 = validated_data.get("STIC_Sec12_2",instance.STIC_Sec12_2)
        instance.STIC_Sec12_3 = validated_data.get("STIC_Sec12_3",instance.STIC_Sec12_3)
        instance.STIC_Sec12_4 = validated_data.get("STIC_Sec12_4",instance.STIC_Sec12_4)
        instance.STIC_Sec12_5 = validated_data.get("STIC_Sec12_5",instance.STIC_Sec12_5)
        instance.STIC_Sec12_6 = validated_data.get("STIC_Sec12_6",instance.STIC_Sec12_6)
        instance.STIC_Sec12_Extension_Included1 = validated_data.get("STIC_Sec12_Extension_Included1",instance.STIC_Sec12_Extension_Included1) 
        instance.STIC_Sec12_Extension_Included2 = validated_data.get("STIC_Sec12_Extension_Included2",instance.STIC_Sec12_Extension_Included2) 
        instance.STIC_Sec12_Extension_Included3 = validated_data.get("STIC_Sec12_Extension_Included3",instance.STIC_Sec12_Extension_Included3) 
        instance.STIC_Sec12_Extension_Included4 = validated_data.get("STIC_Sec12_Extension_Included4",instance.STIC_Sec12_Extension_Included4) 
        instance.STIC_Sec12_Extension_Included5 = validated_data.get("STIC_Sec12_Extension_Included5",instance.STIC_Sec12_Extension_Included5) 
        instance.STIC_Sec12_AnnualPremium = validated_data.get("STIC_Sec12_AnnualPremium",instance.STIC_Sec12_AnnualPremium) 
        instance.STIC_Sec12_Comments = validated_data.get("STIC_Sec12_Comments",instance.STIC_Sec12_Comments) 
        instance.STIC_Sec13_Limit = validated_data.get("STIC_Sec13_Limit",instance.STIC_Sec13_Limit)
        instance.STIC_Sec13_Premium = validated_data.get("STIC_Sec13_Premium",instance.STIC_Sec13_Premium)
        instance.STIC_Sec13_ItemNumber = validated_data.get("STIC_Sec13_ItemNumber",instance.STIC_Sec13_ItemNumber)
        instance.STIC_Sec13_PremNumber = validated_data.get("STIC_Sec13_PremNumber",instance.STIC_Sec13_PremNumber)
        instance.STIC_Sec13_1 = validated_data.get("STIC_Sec13_1",instance.STIC_Sec13_1)
        instance.STIC_Sec13_2 = validated_data.get("STIC_Sec13_2",instance.STIC_Sec13_2)
        instance.STIC_Sec13_3 = validated_data.get("STIC_Sec13_3",instance.STIC_Sec13_3)
        instance.STIC_Sec13_4 = validated_data.get("STIC_Sec13_4",instance.STIC_Sec13_4)
        instance.STIC_Sec13_5 = validated_data.get("STIC_Sec13_5",instance.STIC_Sec13_5)
        instance.STIC_Sec13_6 = validated_data.get("STIC_Sec13_6",instance.STIC_Sec13_6)
        instance.STIC_Sec13_7 = validated_data.get("STIC_Sec13_7",instance.STIC_Sec13_7) 
        instance.STIC_Sec13_8 = validated_data.get("STIC_Sec13_8",instance.STIC_Sec13_8)
        instance.STIC_Sec13_9 = validated_data.get("STIC_Sec13_9",instance.STIC_Sec13_9)
        instance.STIC_Sec13_10 = validated_data.get("STIC_Sec13_10",instance.STIC_Sec13_10)
        instance.STIC_Sec13_11 = validated_data.get("STIC_Sec13_11",instance.STIC_Sec13_11)
        instance.STIC_Sec13_12 = validated_data.get("STIC_Sec13_12",instance.STIC_Sec13_12) 
        instance.STIC_Sec13_13 = validated_data.get("STIC_Sec13_13",instance.STIC_Sec13_13)
        instance.STIC_Sec13_14 = validated_data.get("STIC_Sec13_14",instance.STIC_Sec13_14)
        instance.STIC_Sec13_15 = validated_data.get("STIC_Sec13_15",instance.STIC_Sec13_15)
        instance.STIC_Sec13_16 = validated_data.get("STIC_Sec13_16",instance.STIC_Sec13_16) 
        instance.STIC_Sec13_17 = validated_data.get("STIC_Sec13_17",instance.STIC_Sec13_17)
        instance.STIC_Sec13_18 = validated_data.get("STIC_Sec13_18",instance.STIC_Sec13_18)
        instance.STIC_Sec13_19 = validated_data.get("STIC_Sec13_19",instance.STIC_Sec13_19)
        instance.STIC_Sec13_20 = validated_data.get("STIC_Sec13_20",instance.STIC_Sec13_20) 
        instance.STIC_Sec13_21 = validated_data.get("STIC_Sec13_21",instance.STIC_Sec13_21)
        instance.STIC_Sec13_22 = validated_data.get("STIC_Sec13_22",instance.STIC_Sec13_22)
        instance.STIC_Sec13_23 = validated_data.get("STIC_Sec13_23",instance.STIC_Sec13_23)
        instance.STIC_Sec13_24 = validated_data.get("STIC_Sec13_24",instance.STIC_Sec13_24) 
        instance.STIC_Sec13_25 = validated_data.get("STIC_Sec13_25",instance.STIC_Sec13_25)
        instance.STIC_Sec13_26 = validated_data.get("STIC_Sec13_26",instance.STIC_Sec13_26)
        instance.STIC_Sec13_27 = validated_data.get("STIC_Sec13_27",instance.STIC_Sec13_27)
        instance.STIC_Sec13_28 = validated_data.get("STIC_Sec13_28",instance.STIC_Sec13_28) 
        instance.STIC_Sec13_29 = validated_data.get("STIC_Sec13_29",instance.STIC_Sec13_29)
        instance.STIC_Sec13_30 = validated_data.get("STIC_Sec13_30",instance.STIC_Sec13_30) 
        instance.STIC_Sec13_31 = validated_data.get("STIC_Sec13_31",instance.STIC_Sec13_31) 
        instance.STIC_Sec13_32 = validated_data.get("STIC_Sec13_32",instance.STIC_Sec13_32) 
        # instance.STIC_Sec13_33 = validated_data.get("STIC_Sec13_33",instance.STIC_Sec13_33) 
        instance.STIC_Sec13_AnnualPremium = validated_data.get("STIC_Sec13_AnnualPremium",instance.STIC_Sec13_AnnualPremium) 
        instance.STIC_Sec13_Comments = validated_data.get("STIC_Sec13_Comments",instance.STIC_Sec13_Comments) 
        instance.STIC_Sec14_Limit = validated_data.get("STIC_Sec14_Limit",instance.STIC_Sec14_Limit)
        instance.STIC_Sec14_Premium = validated_data.get("STIC_Sec14_Premium",instance.STIC_Sec14_Premium)
        instance.STIC_Sec14_ItemNumber = validated_data.get("STIC_Sec14_ItemNumber",instance.STIC_Sec14_ItemNumber)
        instance.STIC_Sec14_PremNumber = validated_data.get("STIC_Sec14_PremNumber",instance.STIC_Sec14_PremNumber)
        instance.STIC_Sec14_1 = validated_data.get("STIC_Sec14_1",instance.STIC_Sec14_1)
        instance.STIC_Sec14_2 = validated_data.get("STIC_Sec14_2",instance.STIC_Sec14_2)
        instance.STIC_Sec14_3 = validated_data.get("STIC_Sec14_3",instance.STIC_Sec14_3)
        instance.STIC_Sec14_4 = validated_data.get("STIC_Sec14_4",instance.STIC_Sec14_4)
        instance.STIC_Sec14_5 = validated_data.get("STIC_Sec14_5",instance.STIC_Sec14_5)
        instance.STIC_Sec14_6 = validated_data.get("STIC_Sec14_6",instance.STIC_Sec14_6)
        instance.STIC_Sec14_Recommended1 = validated_data.get("STIC_Sec14_Recommended1",instance.STIC_Sec14_Recommended1) 
        instance.STIC_Sec14_Accepted1 = validated_data.get("STIC_Sec14_Accepted1",instance.STIC_Sec14_Accepted1) 
        instance.STIC_Sec14_CoverAmount1 = validated_data.get("STIC_Sec14_CoverAmount1",instance.STIC_Sec14_CoverAmount1)
        instance.STIC_Sec14_Recommended12 = validated_data.get("STIC_Sec14_Recommended12",instance.STIC_Sec14_Recommended12) 
        instance.STIC_Sec14_Accepted2 = validated_data.get("STIC_Sec14_Accepted2",instance.STIC_Sec14_Accepted2) 
        instance.STIC_Sec14_CoverAmount2 = validated_data.get("STIC_Sec14_CoverAmount2",instance.STIC_Sec14_CoverAmount2)
        instance.STIC_Sec14_Recommended3 = validated_data.get("STIC_Sec14_Recommended3",instance.STIC_Sec14_Recommended3) 
        instance.STIC_Sec14_Accepted3 = validated_data.get("STIC_Sec14_Accepted3",instance.STIC_Sec14_Accepted3) 
        instance.STIC_Sec14_CoverAmount3 = validated_data.get("STIC_Sec14_CoverAmount3",instance.STIC_Sec14_CoverAmount3)
        instance.STIC_Sec14_Recommended4 = validated_data.get("STIC_Sec14_Recommended4",instance.STIC_Sec14_Recommended4) 
        instance.STIC_Sec14_Accepted4 = validated_data.get("STIC_Sec14_Accepted4",instance.STIC_Sec14_Accepted4) 
        instance.STIC_Sec14_CoverAmount4 = validated_data.get("STIC_Sec14_CoverAmount4",instance.STIC_Sec14_CoverAmount4)
        instance.STIC_Sec14_Recommended5 = validated_data.get("STIC_Sec14_Recommended5",instance.STIC_Sec14_Recommended5) 
        instance.STIC_Sec14_Accepted5 = validated_data.get("STIC_Sec14_Accepted5",instance.STIC_Sec14_Accepted5) 
        instance.STIC_Sec14_CoverAmount5 = validated_data.get("STIC_Sec14_CoverAmount5",instance.STIC_Sec14_CoverAmount5)
        instance.STIC_Sec14_Recommended6 = validated_data.get("STIC_Sec14_Recommended6",instance.STIC_Sec14_Recommended6) 
        instance.STIC_Sec14_Accepted6 = validated_data.get("STIC_Sec14_Accepted6",instance.STIC_Sec14_Accepted6) 
        instance.STIC_Sec14_CoverAmount6 = validated_data.get("STIC_Sec14_CoverAmount6",instance.STIC_Sec14_CoverAmount6)
        instance.STIC_Sec14_Recommended7 = validated_data.get("STIC_Sec14_Recommended7",instance.STIC_Sec14_Recommended7) 
        instance.STIC_Sec14_Accepted7 = validated_data.get("STIC_Sec14_Accepted7",instance.STIC_Sec14_Accepted7) 
        instance.STIC_Sec14_CoverAmount7 = validated_data.get("STIC_Sec14_CoverAmount7",instance.STIC_Sec14_CoverAmount7)
        instance.STIC_Sec14_Recommended8 = validated_data.get("STIC_Sec14_Recommended8",instance.STIC_Sec14_Recommended8) 
        instance.STIC_Sec14_Accepted8 = validated_data.get("STIC_Sec14_Accepted8",instance.STIC_Sec14_Accepted8) 
        instance.STIC_Sec14_CoverAmount8 = validated_data.get("STIC_Sec14_CoverAmount8",instance.STIC_Sec14_CoverAmount8)
        instance.STIC_Sec14_Recommended9 = validated_data.get("STIC_Sec14_Recommended9",instance.STIC_Sec14_Recommended9) 
        instance.STIC_Sec14_Accepted9 = validated_data.get("STIC_Sec14_Accepted9",instance.STIC_Sec14_Accepted9) 
        instance.STIC_Sec14_CoverAmount9 = validated_data.get("STIC_Sec14_CoverAmount9",instance.STIC_Sec14_CoverAmount9)
        instance.STIC_Sec14_Recommended10 = validated_data.get("STIC_Sec14_Recommended10",instance.STIC_Sec14_Recommended10) 
        instance.STIC_Sec14_Accepted10 = validated_data.get("STIC_Sec14_Accepted10",instance.STIC_Sec14_Accepted10) 
        instance.STIC_Sec14_CoverAmount10 = validated_data.get("STIC_Sec14_CoverAmount10",instance.STIC_Sec14_CoverAmount10)
        instance.STIC_Sec14_Recommended11 = validated_data.get("STIC_Sec14_Recommended11",instance.STIC_Sec14_Recommended11) 
        instance.STIC_Sec14_Accepted11 = validated_data.get("STIC_Sec14_Accepted11",instance.STIC_Sec14_Accepted11) 
        instance.STIC_Sec14_CoverAmount11 = validated_data.get("STIC_Sec14_CoverAmount11",instance.STIC_Sec14_CoverAmount11)
        instance.STIC_Sec14_Recommended12 = validated_data.get("STIC_Sec14_Recommended12",instance.STIC_Sec14_Recommended12) 
        instance.STIC_Sec14_Accepted12 = validated_data.get("STIC_Sec14_Accepted12",instance.STIC_Sec14_Accepted12) 
        instance.STIC_Sec14_CoverAmount12 = validated_data.get("STIC_Sec14_CoverAmount12",instance.STIC_Sec14_CoverAmount12)
        instance.STIC_Sec15_Limit = validated_data.get("STIC_Sec15_Limit",instance.STIC_Sec15_Limit)
        instance.STIC_Sec15_Premium = validated_data.get("STIC_Sec15_Premium",instance.STIC_Sec15_Premium)
        instance.STIC_Sec15_ItemNumber = validated_data.get("STIC_Sec15_ItemNumber",instance.STIC_Sec15_ItemNumber)
        instance.STIC_Sec15_PremNumber = validated_data.get("STIC_Sec15_PremNumber",instance.STIC_Sec15_PremNumber)
        instance.STIC_Sec15_1 = validated_data.get("STIC_Sec15_1",instance.STIC_Sec15_1)
        instance.STIC_Sec15_1_1 = validated_data.get("STIC_Sec15_1_1",instance.STIC_Sec15_1_1)
        instance.STIC_Sec15_2 = validated_data.get("STIC_Sec15_2",instance.STIC_Sec15_2)
        instance.STIC_Sec15_2_1 = validated_data.get("STIC_Sec15_2_1",instance.STIC_Sec15_2_1)
        instance.STIC_Sec15_3 = validated_data.get("STIC_Sec15_3",instance.STIC_Sec15_3)
        instance.STIC_Sec15_3_1 = validated_data.get("STIC_Sec15_3_1",instance.STIC_Sec15_3_1)
        instance.STIC_Sec15_AnnualPremium = validated_data.get("STIC_Sec15_AnnualPremium",instance.STIC_Sec15_AnnualPremium) 
        instance.STIC_Sec15_Comments = validated_data.get("STIC_Sec15_Comments",instance.STIC_Sec15_Comments) 
        instance.STIC_Sec16_Limit = validated_data.get("STIC_Sec16_Limit",instance.STIC_Sec16_Limit)
        instance.STIC_Sec16_Premium = validated_data.get("STIC_Sec16_Premium",instance.STIC_Sec16_Premium)
        instance.STIC_Sec16_ItemNumber = validated_data.get("STIC_Sec16_ItemNumber",instance.STIC_Sec16_ItemNumber)
        instance.STIC_Sec16_PremNumber = validated_data.get("STIC_Sec16_PremNumber",instance.STIC_Sec16_PremNumber)
        instance.STIC_Sec16_1 = validated_data.get("STIC_Sec16_1",instance.STIC_Sec16_1)
        instance.STIC_Sec16_2 = validated_data.get("STIC_Sec16_2",instance.STIC_Sec16_2)
        instance.STIC_Sec16_3 = validated_data.get("STIC_Sec16_3",instance.STIC_Sec16_3)
        instance.STIC_Sec16_4 = validated_data.get("STIC_Sec16_4",instance.STIC_Sec16_4)
        instance.STIC_Sec16_5 = validated_data.get("STIC_Sec16_5",instance.STIC_Sec16_5)
        instance.STIC_Sec16_6 = validated_data.get("STIC_Sec16_6",instance.STIC_Sec16_6)
        instance.STIC_Sec16_7 = validated_data.get("STIC_Sec16_7",instance.STIC_Sec16_7)
        instance.STIC_Sec16_8 = validated_data.get("STIC_Sec16_8",instance.STIC_Sec16_8)
        instance.STIC_Sec16_9 = validated_data.get("STIC_Sec16_9",instance.STIC_Sec16_9)
        instance.STIC_Sec16_10 = validated_data.get("STIC_Sec16_10",instance.STIC_Sec16_10) 
        instance.STIC_Sec16_Extension1 = validated_data.get("STIC_Sec16_Extension1",instance.STIC_Sec16_Extension1) 
        instance.STIC_Sec16_Extension2 = validated_data.get("STIC_Sec16_Extension2",instance.STIC_Sec16_Extension2) 
        instance.STIC_Sec16_Extension3 = validated_data.get("STIC_Sec16_Extension3",instance.STIC_Sec16_Extension3) 
        instance.STIC_Sec16_Extension4 = validated_data.get("STIC_Sec16_Extension4",instance.STIC_Sec16_Extension4) 
        instance.STIC_Sec16_Extension5 = validated_data.get("STIC_Sec16_Extension5",instance.STIC_Sec16_Extension5) 
        instance.STIC_Sec16_Extension6 = validated_data.get("STIC_Sec16_Extension6",instance.STIC_Sec16_Extension6) 
        instance.STIC_Sec16_Extension7 = validated_data.get("STIC_Sec16_Extension7",instance.STIC_Sec16_Extension7) 
        instance.STIC_Sec16_Extension8 = validated_data.get("STIC_Sec16_Extension8",instance.STIC_Sec16_Extension8) 
        instance.STIC_Sec16_Extension9 = validated_data.get("STIC_Sec16_Extension9",instance.STIC_Sec16_Extension9) 
        instance.STIC_Sec16_AnnualPremium = validated_data.get("STIC_Sec16_AnnualPremium",instance.STIC_Sec16_AnnualPremium) 
        instance.STIC_Sec16_Comments = validated_data.get("STIC_Sec16_Comments",instance.STIC_Sec16_Comments) 
        instance.STIC_Sec17_Limit = validated_data.get("STIC_Sec17_Limit",instance.STIC_Sec17_Limit)
        instance.STIC_Sec17_Premium = validated_data.get("STIC_Sec17_Premium",instance.STIC_Sec17_Premium)
        instance.STIC_Sec17_ItemNumber = validated_data.get("STIC_Sec17_ItemNumber",instance.STIC_Sec17_ItemNumber)
        instance.STIC_Sec17_PremNumber = validated_data.get("STIC_Sec17_PremNumber",instance.STIC_Sec17_PremNumber)
        instance.STIC_Sec17_1 = validated_data.get("STIC_Sec17_1",instance.STIC_Sec17_1)
        instance.STIC_Sec17_2 = validated_data.get("STIC_Sec17_2",instance.STIC_Sec17_2)
        instance.STIC_Sec17_3 = validated_data.get("STIC_Sec17_3",instance.STIC_Sec17_3)
        instance.STIC_Sec17_4 = validated_data.get("STIC_Sec17_4",instance.STIC_Sec17_4)
        instance.STIC_Sec17_5 = validated_data.get("STIC_Sec17_5",instance.STIC_Sec17_5)
        instance.STIC_Sec17_6 = validated_data.get("STIC_Sec17_6",instance.STIC_Sec17_6) 
        instance.STIC_Sec17_7 = validated_data.get("STIC_Sec17_7",instance.STIC_Sec17_7)
        instance.STIC_Sec17_8 = validated_data.get("STIC_Sec17_8",instance.STIC_Sec17_8)
        instance.STIC_Sec17_9 = validated_data.get("STIC_Sec17_9",instance.STIC_Sec17_9) 
        instance.STIC_Sec17_10 = validated_data.get("STIC_Sec17_10",instance.STIC_Sec17_10) 
        instance.STIC_Sec17_Extension1 = validated_data.get("STIC_Sec17_Extension1",instance.STIC_Sec17_Extension1) 
        instance.STIC_Sec17_ExtensionLimit1 = validated_data.get("STIC_Sec17_ExtensionLimit1",instance.STIC_Sec17_ExtensionLimit1) 
        instance.STIC_Sec17_ExtensionPremium1 = validated_data.get("STIC_Sec17_ExtensionPremium1",instance.STIC_Sec17_ExtensionPremium1) 
        instance.STIC_Sec17_Extension2 = validated_data.get("STIC_Sec17_Extension2",instance.STIC_Sec17_Extension2) 
        instance.STIC_Sec17_ExtensionLimit2 = validated_data.get("STIC_Sec17_ExtensionLimit2",instance.STIC_Sec17_ExtensionLimit2) 
        instance.STIC_Sec17_ExtensionPremium2 = validated_data.get("STIC_Sec17_ExtensionPremium2",instance.STIC_Sec17_ExtensionPremium2) 
        instance.STIC_Sec17_Extension3 = validated_data.get("STIC_Sec17_Extension3",instance.STIC_Sec17_Extension3) 
        instance.STIC_Sec17_ExtensionLimit3 = validated_data.get("STIC_Sec17_ExtensionLimit3",instance.STIC_Sec17_ExtensionLimit3) 
        instance.STIC_Sec17_ExtensionPremium3 = validated_data.get("STIC_Sec17_ExtensionPremium3",instance.STIC_Sec17_ExtensionPremium3) 
        instance.STIC_Sec17_Extension4 = validated_data.get("STIC_Sec17_Extension4",instance.STIC_Sec17_Extension4) 
        instance.STIC_Sec17_ExtensionLimit4 = validated_data.get("STIC_Sec17_ExtensionLimit4",instance.STIC_Sec17_ExtensionLimit4) 
        instance.STIC_Sec17_ExtensionPremium4 = validated_data.get("STIC_Sec17_ExtensionPremium4",instance.STIC_Sec17_ExtensionPremium4) 
        instance.STIC_Sec17_Extension5 = validated_data.get("STIC_Sec17_Extension5",instance.STIC_Sec17_Extension5) 
        instance.STIC_Sec17_ExtensionLimit5 = validated_data.get("STIC_Sec17_ExtensionLimit5",instance.STIC_Sec17_ExtensionLimit5) 
        instance.STIC_Sec17_ExtensionPremium5 = validated_data.get("STIC_Sec17_ExtensionPremium5",instance.STIC_Sec17_ExtensionPremium5) 
        instance.STIC_Sec17_Extension6 = validated_data.get("STIC_Sec17_Extension6",instance.STIC_Sec17_Extension6) 
        instance.STIC_Sec17_ExtensionLimit6 = validated_data.get("STIC_Sec17_ExtensionLimit6",instance.STIC_Sec17_ExtensionLimit6) 
        instance.STIC_Sec17_ExtensionPremium6 = validated_data.get("STIC_Sec17_ExtensionPremium6",instance.STIC_Sec17_ExtensionPremium6) 
        instance.STIC_Sec17_Extension7 = validated_data.get("STIC_Sec17_Extension7",instance.STIC_Sec17_Extension7) 
        instance.STIC_Sec17_ExtensionLimit7 = validated_data.get("STIC_Sec17_ExtensionLimit7",instance.STIC_Sec17_ExtensionLimit7) 
        instance.STIC_Sec17_ExtensionPremium7 = validated_data.get("STIC_Sec17_ExtensionPremium7",instance.STIC_Sec17_ExtensionPremium7) 
        instance.STIC_Sec17_Extension8 = validated_data.get("STIC_Sec17_Extension8",instance.STIC_Sec17_Extension8) 
        instance.STIC_Sec17_ExtensionLimit8 = validated_data.get("STIC_Sec17_ExtensionLimit8",instance.STIC_Sec17_ExtensionLimit8) 
        instance.STIC_Sec17_ExtensionPremium8 = validated_data.get("STIC_Sec17_ExtensionPremium8",instance.STIC_Sec17_ExtensionPremium8) 
        instance.STIC_Sec17_Extension9 = validated_data.get("STIC_Sec17_Extension9",instance.STIC_Sec17_Extension9) 
        instance.STIC_Sec17_ExtensionLimit9 = validated_data.get("STIC_Sec17_ExtensionLimit9",instance.STIC_Sec17_ExtensionLimit9) 
        instance.STIC_Sec17_ExtensionPremium9 = validated_data.get("STIC_Sec17_ExtensionPremium9",instance.STIC_Sec17_ExtensionPremium9) 
        instance.STIC_Sec17_AnnualPremium = validated_data.get("STIC_Sec17_AnnualPremium",instance.STIC_Sec17_AnnualPremium) 
        instance.STIC_Sec17_Comments = validated_data.get("STIC_Sec17_Comments",instance.STIC_Sec17_Comments) 
        instance.STIC_Sec18_Limit = validated_data.get("STIC_Sec18_Limit",instance.STIC_Sec18_Limit)
        instance.STIC_Sec18_Premium = validated_data.get("STIC_Sec18_Premium",instance.STIC_Sec18_Premium)
        instance.STIC_Sec18_ItemNumber = validated_data.get("STIC_Sec18_ItemNumber",instance.STIC_Sec18_ItemNumber)
        instance.STIC_Sec18_PremNumber = validated_data.get("STIC_Sec18_PremNumber",instance.STIC_Sec18_PremNumber)
        instance.STIC_Sec18_1 = validated_data.get("STIC_Sec18_1",instance.STIC_Sec18_1)
        instance.STIC_Sec18_2 = validated_data.get("STIC_Sec18_2",instance.STIC_Sec18_2)
        instance.STIC_Sec18_3 = validated_data.get("STIC_Sec18_3",instance.STIC_Sec18_3)
        instance.STIC_Sec18_4 = validated_data.get("STIC_Sec18_4",instance.STIC_Sec18_4)
        instance.STIC_Sec18_5 = validated_data.get("STIC_Sec18_5",instance.STIC_Sec18_5)
        instance.STIC_Sec18_6 = validated_data.get("STIC_Sec18_6",instance.STIC_Sec18_6)
        instance.STIC_Sec18_7 = validated_data.get("STIC_Sec18_7",instance.STIC_Sec18_7)
        instance.STIC_Sec18_8 = validated_data.get("STIC_Sec18_8",instance.STIC_Sec18_8)
        instance.STIC_Sec18_9 = validated_data.get("STIC_Sec18_9",instance.STIC_Sec18_9)
        instance.STIC_Sec18_10 = validated_data.get("STIC_Sec18_10",instance.STIC_Sec18_10)
        instance.STIC_Sec18_11 = validated_data.get("STIC_Sec18_11",instance.STIC_Sec18_11)
        instance.STIC_Sec18_12 = validated_data.get("STIC_Sec18_12",instance.STIC_Sec18_12)
        instance.STIC_Sec18_13 = validated_data.get("STIC_Sec18_13",instance.STIC_Sec18_13)
        instance.STIC_Sec18_14 = validated_data.get("STIC_Sec18_14",instance.STIC_Sec18_14)
        instance.STIC_Sec18_15 = validated_data.get("STIC_Sec18_15",instance.STIC_Sec18_15)
        instance.STIC_Sec18_16 = validated_data.get("STIC_Sec18_16",instance.STIC_Sec18_16)
        instance.STIC_Sec18_17 = validated_data.get("STIC_Sec18_17",instance.STIC_Sec18_17)
        instance.STIC_Sec18_18 = validated_data.get("STIC_Sec18_18",instance.STIC_Sec18_18)
        instance.STIC_Sec18_19 = validated_data.get("STIC_Sec18_19",instance.STIC_Sec18_19)
        instance.STIC_Sec18_20 = validated_data.get("STIC_Sec18_20",instance.STIC_Sec18_20) 
        instance.STIC_Sec18_21 = validated_data.get("STIC_Sec18_21",instance.STIC_Sec18_21)
        instance.STIC_Sec18_22 = validated_data.get("STIC_Sec18_22",instance.STIC_Sec18_22)
        instance.STIC_Sec18_23 = validated_data.get("STIC_Sec18_23",instance.STIC_Sec18_23)
        instance.STIC_Sec18_24 = validated_data.get("STIC_Sec18_24",instance.STIC_Sec18_24)
        instance.STIC_Sec18_25 = validated_data.get("STIC_Sec18_25",instance.STIC_Sec18_25)
        instance.STIC_Sec18_26 = validated_data.get("STIC_Sec18_26", instance.STIC_Sec18_26)
        instance.STIC_Sec18_27 = validated_data.get("STIC_Sec18_27", instance.STIC_Sec18_27)
        instance.STIC_Sec18_27 = validated_data.get("STIC_Sec18_27", instance.STIC_Sec18_27)
        instance.STIC_Sec18_FaP1 = validated_data.get("STIC_Sec18_FaP1", instance.STIC_Sec18_FaP1) 
        instance.STIC_Sec18_FaP1_1 = validated_data.get("STIC_Sec18_FaP1_1", instance.STIC_Sec18_FaP1_1)
        instance.STIC_Sec18_FaP1_2 = validated_data.get("STIC_Sec18_FaP1_2", instance.STIC_Sec18_FaP1_2)
        instance.STIC_Sec18_FaP2 = validated_data.get("STIC_Sec18_FaP2", instance.STIC_Sec18_FaP2) 
        instance.STIC_Sec18_FaP2_1 = validated_data.get("STIC_Sec18_FaP2_1", instance.STIC_Sec18_FaP2_1)
        instance.STIC_Sec18_FaP2_2 = validated_data.get("STIC_Sec18_FaP2_2", instance.STIC_Sec18_FaP2_2)
        instance.STIC_Sec18_FaP3 = validated_data.get("STIC_Sec18_FaP3", instance.STIC_Sec18_FaP3) 
        instance.STIC_Sec18_FaP3_1 = validated_data.get("STIC_Sec18_FaP3_1", instance.STIC_Sec18_FaP3_1)
        instance.STIC_Sec18_FaP3_2 = validated_data.get("STIC_Sec18_FaP3_2", instance.STIC_Sec18_FaP3_2)
        instance.STIC_Sec18_FaP4 = validated_data.get("STIC_Sec18_FaP4", instance.STIC_Sec18_FaP4) 
        instance.STIC_Sec18_FaP4_1 = validated_data.get("STIC_Sec18_FaP4_1", instance.STIC_Sec18_FaP4_1)
        instance.STIC_Sec18_FaP4_2 = validated_data.get("STIC_Sec18_FaP4_2", instance.STIC_Sec18_FaP4_2)
        instance.STIC_Sec18_FaP5 = validated_data.get("STIC_Sec18_FaP5", instance.STIC_Sec18_FaP5) 
        instance.STIC_Sec18_FaP5_1 = validated_data.get("STIC_Sec18_FaP5_1", instance.STIC_Sec18_FaP5_1)
        instance.STIC_Sec18_FaP5_2 = validated_data.get("STIC_Sec18_FaP5_2", instance.STIC_Sec18_FaP5_2)
        instance.STIC_Sec18_FaP6 = validated_data.get("STIC_Sec18_FaP6", instance.STIC_Sec18_FaP6) 
        instance.STIC_Sec18_FaP6_1 = validated_data.get("STIC_Sec18_FaP6_1", instance.STIC_Sec18_FaP6_1)
        instance.STIC_Sec18_FaP6_2 = validated_data.get("STIC_Sec18_FaP6_2", instance.STIC_Sec18_FaP6_2)
        instance.STIC_Sec18_Extension1 = validated_data.get("STIC_Sec18_Extension1", instance.STIC_Sec18_Extension1) 
        instance.STIC_Sec18_Extension1_1 = validated_data.get("STIC_Sec18_Extension1_1", instance.STIC_Sec18_Extension1_1)
        instance.STIC_Sec18_Extension1_2 = validated_data.get("STIC_Sec18_Extension1_2", instance.STIC_Sec18_Extension1_2)
        instance.STIC_Sec18_Extension2 = validated_data.get("STIC_Sec18_Extension2", instance.STIC_Sec18_Extension2) 
        instance.STIC_Sec18_Extension2_1 = validated_data.get("STIC_Sec18_Extension2_1", instance.STIC_Sec18_Extension2_1)
        instance.STIC_Sec18_Extension3 = validated_data.get("STIC_Sec18_Extension3", instance.STIC_Sec18_Extension3) 
        instance.STIC_Sec18_Extension3_1 = validated_data.get("STIC_Sec18_Extension3_1", instance.STIC_Sec18_Extension3_1)
        instance.STIC_Sec18_Extension4 = validated_data.get("STIC_Sec18_Extension4", instance.STIC_Sec18_Extension4) 
        instance.STIC_Sec18_Extension4_1 = validated_data.get("STIC_Sec18_Extension4_1", instance.STIC_Sec18_Extension4_1)
        instance.STIC_Sec18_Extension5 = validated_data.get("STIC_Sec18_Extension5", instance.STIC_Sec18_Extension5) 
        instance.STIC_Sec18_Extension5_1 = validated_data.get("STIC_Sec18_Extension5_1", instance.STIC_Sec18_Extension5_1)
        instance.STIC_Sec18_Extension6 = validated_data.get("STIC_Sec18_Extension6", instance.STIC_Sec18_Extension6) 
        instance.STIC_Sec18_Extension6_1 = validated_data.get("STIC_Sec18_Extension6_1", instance.STIC_Sec18_Extension6_1)
        instance.STIC_Sec18_Comments = validated_data.get("STIC_Sec18_Comments", instance.STIC_Sec18_Comments) 
        instance.STIC_Sec19_Limit = validated_data.get("STIC_Sec19_Limit", instance.STIC_Sec19_Limit)
        instance.STIC_Sec19_Premium = validated_data.get("STIC_Sec19_Premium", instance.STIC_Sec19_Premium)
        instance.STIC_Sec19_ItemNumber = validated_data.get("STIC_Sec19_ItemNumber", instance.STIC_Sec19_ItemNumber)
        instance.STIC_Sec19_PremNumber = validated_data.get("STIC_Sec19_PremNumber", instance.STIC_Sec19_PremNumber)
        instance.STIC_Sec19_Part1_1 = validated_data.get("STIC_Sec19_Part1_1", instance.STIC_Sec19_Part1_1)
        instance.STIC_Sec19_Part1_2 = validated_data.get("STIC_Sec19_Part1_2", instance.STIC_Sec19_Part1_2)
        instance.STIC_Sec19_Part1_3 = validated_data.get("STIC_Sec19_Part1_3", instance.STIC_Sec19_Part1_3)
        instance.STIC_Sec19_Part1_4 = validated_data.get("STIC_Sec19_Part1_4", instance.STIC_Sec19_Part1_4)
        instance.STIC_Sec19_Part1_5 = validated_data.get("STIC_Sec19_Part1_5", instance.STIC_Sec19_Part1_5)
        instance.STIC_Sec19_Part1_6 = validated_data.get("STIC_Sec19_Part1_6", instance.STIC_Sec19_Part1_6)
        instance.STIC_Sec19_Part1_7 = validated_data.get("STIC_Sec19_Part1_7", instance.STIC_Sec19_Part1_7)
        instance.STIC_Sec19_Part1_8 = validated_data.get("STIC_Sec19_Part1_8", instance.STIC_Sec19_Part1_8)
        instance.STIC_Sec19_Part1_9 = validated_data.get("STIC_Sec19_Part1_9", instance.STIC_Sec19_Part1_9)
        instance.STIC_Sec19_Part2_1 = validated_data.get("STIC_Sec19_Part2_1", instance.STIC_Sec19_Part2_1)
        instance.STIC_Sec19_Part2_2 = validated_data.get("STIC_Sec19_Part2_2", instance.STIC_Sec19_Part2_2)
        instance.STIC_Sec19_Part2_3 = validated_data.get("STIC_Sec19_Part2_3", instance.STIC_Sec19_Part2_3)
        instance.STIC_Sec19_Part2_4 = validated_data.get("STIC_Sec19_Part2_4", instance.STIC_Sec19_Part2_4)
        instance.STIC_Sec19_Part2_5 = validated_data.get("STIC_Sec19_Part2_5", instance.STIC_Sec19_Part2_5)
        instance.STIC_Sec19_Extension1 = validated_data.get("STIC_Sec19_Extension1", instance.STIC_Sec19_Extension1) 
        instance.STIC_Sec19_Extension_Premium1 = validated_data.get("STIC_Sec19_Extension_Premium1", instance.STIC_Sec19_Extension_Premium1)
        instance.STIC_Sec19_Extension2 = validated_data.get("STIC_Sec19_Extension2", instance.STIC_Sec19_Extension2) 
        instance.STIC_Sec19_Extension_Premium2 = validated_data.get("STIC_Sec19_Extension_Premium2", instance.STIC_Sec19_Extension_Premium2)
        instance.STIC_Sec19_RoD_1 = validated_data.get("STIC_Sec19_RoD_1", instance.STIC_Sec19_RoD_1)
        instance.STIC_Sec19_RoD_2 = validated_data.get("STIC_Sec19_RoD_2", instance.STIC_Sec19_RoD_2)
        instance.STIC_Sec19_RoD_3 = validated_data.get("STIC_Sec19_RoD_3", instance.STIC_Sec19_RoD_3)
        instance.STIC_Sec19_RoD_4 = validated_data.get("STIC_Sec19_RoD_4", instance.STIC_Sec19_RoD_4)
        instance.STIC_Sec19_RoD_5 = validated_data.get("STIC_Sec19_RoD_5", instance.STIC_Sec19_RoD_5)
        instance.STIC_Sec19_AnnualPremium = validated_data.get("STIC_Sec19_AnnualPremium", instance.STIC_Sec19_AnnualPremium) 
        instance.STIC_Sec19_Comments = validated_data.get("STIC_Sec19_Comments", instance.STIC_Sec19_Comments) 
        instance.STIC_Sec20_Limit = validated_data.get("STIC_Sec20_Limit", instance.STIC_Sec20_Limit)
        instance.STIC_Sec20_Premium = validated_data.get("STIC_Sec20_Premium", instance.STIC_Sec20_Premium)
        instance.STIC_Sec20_ItemNumber = validated_data.get("STIC_Sec20_ItemNumber", instance.STIC_Sec20_ItemNumber)
        instance.STIC_Sec20_PremNumber = validated_data.get("STIC_Sec20_PremNumber", instance.STIC_Sec20_PremNumber)
        instance.STIC_Sec20_1 = validated_data.get("STIC_Sec20_1", instance.STIC_Sec20_1)
        instance.STIC_Sec20_2 = validated_data.get("STIC_Sec20_2", instance.STIC_Sec20_2)
        instance.STIC_Sec20_3 = validated_data.get("STIC_Sec20_3", instance.STIC_Sec20_3)
        instance.STIC_Sec20_4 = validated_data.get("STIC_Sec20_4", instance.STIC_Sec20_4)
        instance.STIC_Sec20_5 = validated_data.get("STIC_Sec20_5", instance.STIC_Sec20_5)
        instance.STIC_Sec20_6 = validated_data.get("STIC_Sec20_6", instance.STIC_Sec20_6)
        instance.STIC_Sec20_Extension1 = validated_data.get("STIC_Sec20_Extension1", instance.STIC_Sec20_Extension1) 
        instance.STIC_Sec20_Extension_Premium1 = validated_data.get("STIC_Sec20_Extension_Premium1", instance.STIC_Sec20_Extension_Premium1)
        instance.STIC_Sec20_Extension2 = validated_data.get("STIC_Sec20_Extension2", instance.STIC_Sec20_Extension2) 
        instance.STIC_Sec20_Extension_Premium2 = validated_data.get("STIC_Sec20_Extension_Premium2", instance.STIC_Sec20_Extension_Premium2)
        instance.STIC_Sec20_AnnualPremium = validated_data.get("STIC_Sec20_AnnualPremium", instance.STIC_Sec20_AnnualPremium) 
        instance.STIC_Sec20_Comments = validated_data.get("STIC_Sec20_Comments", instance.STIC_Sec20_Comments) 
        instance.STIC_Sec21_Limit = validated_data.get("STIC_Sec21_Limit", instance.STIC_Sec21_Limit)
        instance.STIC_Sec21_Premium = validated_data.get("STIC_Sec21_Premium", instance.STIC_Sec21_Premium)
        instance.STIC_Sec21_ItemNumber = validated_data.get("STIC_Sec21_ItemNumber", instance.STIC_Sec21_ItemNumber)
        instance.STIC_Sec21_PremNumber = validated_data.get("STIC_Sec21_PremNumber", instance.STIC_Sec21_PremNumber)
        instance.STIC_Sec21_1 = validated_data.get("STIC_Sec21_1", instance.STIC_Sec21_1)
        instance.STIC_Sec21_2 = validated_data.get("STIC_Sec21_2", instance.STIC_Sec21_2)
        instance.STIC_Sec21_3 = validated_data.get("STIC_Sec21_3", instance.STIC_Sec21_3)
        instance.STIC_Sec21_4 = validated_data.get("STIC_Sec21_4", instance.STIC_Sec21_4)
        instance.STIC_Sec21_5 = validated_data.get("STIC_Sec21_5", instance.STIC_Sec21_5)
        instance.STIC_Sec21_6 = validated_data.get("STIC_Sec21_6", instance.STIC_Sec21_6)
        instance.STIC_Sec21_Extension1 = validated_data.get("STIC_Sec21_Extension1", instance.STIC_Sec21_Extension1) 
        instance.STIC_Sec21_Extension_Premium1 = validated_data.get("STIC_Sec21_Extension_Premium1", instance.STIC_Sec21_Extension_Premium1)
        instance.STIC_Sec21_Extension2 = validated_data.get("STIC_Sec21_Extension2", instance.STIC_Sec21_Extension2) 
        instance.STIC_Sec21_Extension_Premium2 = validated_data.get("STIC_Sec21_Extension_Premium2", instance.STIC_Sec21_Extension_Premium2)
        instance.STIC_Sec21_AnnualPremium = validated_data.get("STIC_Sec21_AnnualPremium", instance.STIC_Sec21_AnnualPremium) 
        instance.STIC_Sec21_Comments = validated_data.get("STIC_Sec21_Comments", instance.STIC_Sec21_Comments) 
        instance.STIC_SecD_1 = validated_data.get("STIC_SecD_1", instance.STIC_SecD_1)
        instance.STIC_SecD_2 = validated_data.get("STIC_SecD_2", instance.STIC_SecD_2)
        instance.STIC_SecD_3 = validated_data.get("STIC_SecD_3", instance.STIC_SecD_3)
        instance.STIC_SecD_4 = validated_data.get("STIC_SecD_4", instance.STIC_SecD_4) 
        instance.STIC_SecD_5 = validated_data.get("STIC_SecD_5", instance.STIC_SecD_5)
        instance.STIC_SecD_6 = validated_data.get("STIC_SecD_6", instance.STIC_SecD_6)
        instance.STIC_SecD_7 = validated_data.get("STIC_SecD_7", instance.STIC_SecD_7)
        instance.STIC_SecD_8 = validated_data.get("STIC_SecD_8", instance.STIC_SecD_8)
        instance.STIC_SecD_9 = validated_data.get("STIC_SecD_9", instance.STIC_SecD_9)
        instance.STIC_SecD_10 = validated_data.get("STIC_SecD_10", instance.STIC_SecD_10)
        instance.STIC_SecD_11 = validated_data.get("STIC_SecD_11", instance.STIC_SecD_11)
        instance.STIC_SecD_12 = validated_data.get("STIC_SecD_12", instance.STIC_SecD_12)
        instance.STIC_SecD_13 = validated_data.get("STIC_SecD_13", instance.STIC_SecD_13)
        instance.STIC_SecE_1 = validated_data.get("STIC_SecE_1", instance.STIC_SecE_1)
        instance.STIC_SecE_2 = validated_data.get("STIC_SecE_2", instance.STIC_SecE_2)
        instance.STIC_SecE_3 = validated_data.get("STIC_SecE_3", instance.STIC_SecE_3)
        instance.STIC_SecG_1 = validated_data.get("STIC_SecG_1", instance.STIC_SecG_1)
        instance.STIC_SecG_2 = validated_data.get("STIC_SecG_2", instance.STIC_SecG_2)
        instance.STIC_SecG_3 = validated_data.get("STIC_SecG_3", instance.STIC_SecG_3)

        instance.STIC_ProdComp_ExistP_Cover1 = validated_data.get("STIC_ProdComp_ExistP_Cover1",instance.STIC_ProdComp_ExistP_Cover1)
        instance.STIC_ProdComp_ExistP_Cover2 = validated_data.get("STIC_ProdComp_ExistP_Cover2",instance.STIC_ProdComp_ExistP_Cover2)
        instance.STIC_ProdComp_ExistP_Cover3 = validated_data.get("STIC_ProdComp_ExistP_Cover3",instance.STIC_ProdComp_ExistP_Cover3)
        instance.STIC_ProdComp_ExistP_Cover4 = validated_data.get("STIC_ProdComp_ExistP_Cover4",instance.STIC_ProdComp_ExistP_Cover4)
        instance.STIC_ProdComp_ExistP_Cover5 = validated_data.get("STIC_ProdComp_ExistP_Cover5",instance.STIC_ProdComp_ExistP_Cover5)
        instance.STIC_ProdComp_ExistP_Cover6 = validated_data.get("STIC_ProdComp_ExistP_Cover6",instance.STIC_ProdComp_ExistP_Cover6)
        instance.STIC_ProdComp_ExistP_Cover7 = validated_data.get("STIC_ProdComp_ExistP_Cover7",instance.STIC_ProdComp_ExistP_Cover7)
        instance.STIC_ProdComp_ExistP_Cover8 = validated_data.get("STIC_ProdComp_ExistP_Cover8",instance.STIC_ProdComp_ExistP_Cover8)
        instance.STIC_ProdComp_ExistP_Cover9 = validated_data.get("STIC_ProdComp_ExistP_Cover9",instance.STIC_ProdComp_ExistP_Cover9)
        instance.STIC_ProdComp_ExistP_Cover10 = validated_data.get("STIC_ProdComp_ExistP_Cover10",instance.STIC_ProdComp_ExistP_Cover10)
        instance.STIC_ProdComp_ExistP_Cover11 = validated_data.get("STIC_ProdComp_ExistP_Cover11",instance.STIC_ProdComp_ExistP_Cover11)
        instance.STIC_ProdComp_ExistP_Cover12 = validated_data.get("STIC_ProdComp_ExistP_Cover12",instance.STIC_ProdComp_ExistP_Cover12)
        instance.STIC_ProdComp_ExistP_Cover13 = validated_data.get("STIC_ProdComp_ExistP_Cover13",instance.STIC_ProdComp_ExistP_Cover13)
        instance.STIC_ProdComp_ExistP_Cover14 = validated_data.get("STIC_ProdComp_ExistP_Cover14",instance.STIC_ProdComp_ExistP_Cover14)
        instance.STIC_ProdComp_ExistP_Cover15 = validated_data.get("STIC_ProdComp_ExistP_Cover15",instance.STIC_ProdComp_ExistP_Cover15)
        instance.STIC_ProdComp_ExistP_Cover16 = validated_data.get("STIC_ProdComp_ExistP_Cover16",instance.STIC_ProdComp_ExistP_Cover16)
        instance.STIC_ProdComp_ExistP_Cover17 = validated_data.get("STIC_ProdComp_ExistP_Cover17",instance.STIC_ProdComp_ExistP_Cover17)
        instance.STIC_ProdComp_ExistP_Cover18 = validated_data.get("STIC_ProdComp_ExistP_Cover18",instance.STIC_ProdComp_ExistP_Cover18)
        instance.STIC_ProdComp_ExistP_Cover19 = validated_data.get("STIC_ProdComp_ExistP_Cover19",instance.STIC_ProdComp_ExistP_Cover19)
        instance.STIC_ProdComp_ExistP_Cover21 = validated_data.get("STIC_ProdComp_ExistP_Cover21",instance.STIC_ProdComp_ExistP_Cover21)
        instance.STIC_ProdComp_ExistP_Cover22 = validated_data.get("STIC_ProdComp_ExistP_Cover22",instance.STIC_ProdComp_ExistP_Cover22)
        instance.STIC_ProdComp_ExistP_Cover23 = validated_data.get("STIC_ProdComp_ExistP_Cover23",instance.STIC_ProdComp_ExistP_Cover23)
        instance.STIC_ProdComp_ExistP_Cover24 = validated_data.get("STIC_ProdComp_ExistP_Cover24",instance.STIC_ProdComp_ExistP_Cover24)
        instance.STIC_ProdComp_ExistP_Cover25 = validated_data.get("STIC_ProdComp_ExistP_Cover25",instance.STIC_ProdComp_ExistP_Cover25)
        instance.STIC_ProdComp_ExistP_Cover26 = validated_data.get("STIC_ProdComp_ExistP_Cover26",instance.STIC_ProdComp_ExistP_Cover26)
        instance.STIC_ProdComp_ExistP_Cover27 = validated_data.get("STIC_ProdComp_ExistP_Cover27",instance.STIC_ProdComp_ExistP_Cover27)
        instance.STIC_ProdComp_ExistP_Cover28 = validated_data.get("STIC_ProdComp_ExistP_Cover28",instance.STIC_ProdComp_ExistP_Cover28)
        instance.STIC_ProdComp_ExistP_Cover29 = validated_data.get("STIC_ProdComp_ExistP_Cover29",instance.STIC_ProdComp_ExistP_Cover29)
        instance.STIC_ProdComp_ExistP_Cover30 = validated_data.get("STIC_ProdComp_ExistP_Cover30",instance.STIC_ProdComp_ExistP_Cover30)
        instance.STIC_ProdComp_ExistP_Cover31 = validated_data.get("STIC_ProdComp_ExistP_Cover31",instance.STIC_ProdComp_ExistP_Cover31)
        instance.STIC_ProdComp_ExistP_Cover32 = validated_data.get("STIC_ProdComp_ExistP_Cover32",instance.STIC_ProdComp_ExistP_Cover32)
        instance.STIC_ProdComp_ExistP_Cover33 = validated_data.get("STIC_ProdComp_ExistP_Cover33",instance.STIC_ProdComp_ExistP_Cover33)
        instance.STIC_ProdComp_ExistP_Cover34 = validated_data.get("STIC_ProdComp_ExistP_Cover34",instance.STIC_ProdComp_ExistP_Cover34)
        instance.STIC_ProdComp_ExistP_Cover35 = validated_data.get("STIC_ProdComp_ExistP_Cover35",instance.STIC_ProdComp_ExistP_Cover35)
        instance.STIC_ProdComp_ExistP_Cover36 = validated_data.get("STIC_ProdComp_ExistP_Cover36",instance.STIC_ProdComp_ExistP_Cover36)
        instance.STIC_ProdComp_ExistP_Cover37 = validated_data.get("STIC_ProdComp_ExistP_Cover37",instance.STIC_ProdComp_ExistP_Cover37)
        instance.STIC_ProdComp_ExistP_Cover38 = validated_data.get("STIC_ProdComp_ExistP_Cover38",instance.STIC_ProdComp_ExistP_Cover38)
        instance.STIC_ProdComp_ExistP_Cover39 = validated_data.get("STIC_ProdComp_ExistP_Cover39",instance.STIC_ProdComp_ExistP_Cover39)
        instance.STIC_ProdComp_ExistP_Cover40 = validated_data.get("STIC_ProdComp_ExistP_Cover40",instance.STIC_ProdComp_ExistP_Cover40)
        instance.STIC_ProdComp_ExistP_Cover41 = validated_data.get("STIC_ProdComp_ExistP_Cover41",instance.STIC_ProdComp_ExistP_Cover41)
        instance.STIC_ProdComp_ExistP_Cover42 = validated_data.get("STIC_ProdComp_ExistP_Cover42",instance.STIC_ProdComp_ExistP_Cover42)
        instance.STIC_ProdComp_ExistP_Cover43 = validated_data.get("STIC_ProdComp_ExistP_Cover43",instance.STIC_ProdComp_ExistP_Cover43)
        instance.STIC_ProdComp_ExistP_Cover44 = validated_data.get("STIC_ProdComp_ExistP_Cover44",instance.STIC_ProdComp_ExistP_Cover44)
        

        instance.updated_at = datetime.now(timezone.utc)

        
        instance.save()
        return instance





class RiskFactorsSerializers(serializers.ModelSerializer):
    class Meta():
        model = RiskFactors
        fields = '__all__'
    

    def create(self, validated_data):
        return RiskFactors.objects.create(**validated_data)

    def updateStatus(self, instance, validated_data):
        instance.status = validated_data.get("status", instance.status)
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.RF_Overall_Risk = validated_data.get('RF_Overall_Risk', instance.RF_Overall_Risk)
        instance.RF_BU_Risk = validated_data.get('RF_BU_Risk', instance.RF_BU_Risk)
        instance.RF_Date = validated_data.get('RF_Date', instance.RF_Date)
        instance.RF_ClientName = validated_data.get('RF_ClientName', instance.RF_ClientName)
        instance.RF_ClientId = validated_data.get('RF_ClientId', instance.RF_ClientId)
        instance.RF_CompleteByName = validated_data.get('RF_CompleteByName', instance.RF_CompleteByName)
        # instance.RF_EventID = validated_data.get('RF_EventID', instance.RF_EventID)
        instance.RF_CompleteByRole = validated_data.get('RF_CompleteByRole', instance.RF_CompleteByRole)
        # instance.RF_AdjustedRisk = validated_data.get('RF_AdjustedRisk', instance.RF_AdjustedRisk)
        # instance.RF_GCO_Risk = validated_data.get('RF_GCO_Risk', instance.RF_GCO_Risk)
        # instance.RF_Approvals = validated_data.get('RF_Approvals', instance.RF_Approvals)
        instance.RF_ClientType = validated_data.get('RF_ClientType', instance.RF_ClientType)
        instance.RF_Occupation = validated_data.get('RF_Occupation', instance.RF_Occupation)
        instance.RF_CountryOfBirth = validated_data.get('RF_CountryOfBirth', instance.RF_CountryOfBirth)
        instance.RF_CountryOfResidence = validated_data.get('RF_CountryOfResidence', instance.RF_CountryOfResidence)
        instance.RF_Nationality = validated_data.get('RF_Nationality', instance.RF_Nationality)
        instance.RF_Different_Nationality = validated_data.get('RF_Different_Nationality', instance.RF_Different_Nationality)
        instance.RF_CountryOfTax = validated_data.get('RF_CountryOfTax', instance.RF_CountryOfTax)
        instance.RF_Industry = validated_data.get('RF_Industry', instance.RF_Industry)
        instance.RF_SourceOfFunds = validated_data.get('RF_SourceOfFunds', instance.RF_SourceOfFunds)
        instance.RF_RelationshipToClient = validated_data.get('RF_RelationshipToClient', instance.RF_RelationshipToClient)
        instance.RF_CountryOfRegistration = validated_data.get('RF_CountryOfRegistration', instance.RF_CountryOfRegistration)
        instance.RF_CountryOfOperation = validated_data.get('RF_CountryOfOperation', instance.RF_CountryOfOperation)
        instance.RF_Type_Legal_Entity = validated_data.get('RF_Type_Legal_Entity', instance.RF_Type_Legal_Entity)
        instance.RF_Client_Relationship = validated_data.get('RF_Client_Relationship', instance.RF_Client_Relationship)
        instance.RF_Product_Name = validated_data.get('RF_Product_Name', instance.RF_Product_Name)
        instance.RF_Product_Category = validated_data.get('RF_Product_Category', instance.RF_Product_Category)
        instance.RF_Transaction_Flow = validated_data.get('RF_Transaction_Flow', instance.RF_Transaction_Flow)
        instance.RF_Transaction_Method = validated_data.get('RF_Transaction_Method', instance.RF_Transaction_Method)
        instance.RF_Transaction_Reason = validated_data.get('RF_Transaction_Reason', instance.RF_Transaction_Reason)
        instance.RF_High_Transaction_Reason = validated_data.get('RF_High_Transaction_Reason', instance.RF_High_Transaction_Reason)
        instance.RF_Transaction_Frequency = validated_data.get('RF_Transaction_Frequency', instance.RF_Transaction_Frequency)
        instance.RF_Transaction_Value = validated_data.get('RF_Transaction_Value', instance.RF_Transaction_Value)
        instance.RF_Currency_Value = validated_data.get('RF_Currency_Value', instance.RF_Currency_Value)
        instance.RF_Transaction_Geography = validated_data.get('RF_Transaction_Geography', instance.RF_Transaction_Geography)
        instance.RF_Funds_Jurisdiction = validated_data.get('RF_Funds_Jurisdiction', instance.RF_Funds_Jurisdiction)
        instance.RF_Delivery_Channel = validated_data.get('RF_Delivery_Channel', instance.RF_Delivery_Channel)
        instance.RF_Linked_Party_Acting = validated_data.get('RF_Linked_Party_Acting', instance.RF_Linked_Party_Acting)
        instance.RF_Linked_Party_Paying = validated_data.get('RF_Linked_Party_Paying', instance.RF_Linked_Party_Paying)
        instance.RF_Client_Match = validated_data.get('RF_Client_Match', instance.RF_Client_Match)
        instance.RF_Client_Beneficiaries = validated_data.get('RF_Client_Beneficiaries', instance.RF_Client_Beneficiaries)
        # instance.RF_Adjust_Risk1 = validated_data.get('RF_Adjust_Risk1', instance.RF_Adjust_Risk1)
        # instance.RF_Name = validated_data.get('RF_Name', instance.RF_Name)
        # instance.RF_ID = validated_data.get('RF_ID', instance.RF_ID)
        # instance.RF_Linked_Party = validated_data.get('RF_Linked_Party', instance.RF_Linked_Party)
        # instance.RF_RCA = validated_data.get('RF_RCA', instance.RF_RCA)
        # instance.RF_Birth_Country = validated_data.get('RF_Birth_Country', instance.RF_Birth_Country)
        # instance.RF_Residence_Country = validated_data.get('RF_Residence_Country', instance.RF_Residence_Country)
        # instance.RF_Nationality1 = validated_data.get('RF_Nationality1', instance.RF_Nationality1)
        # instance.RF_Control1 = validated_data.get('RF_Control1', instance.RF_Control1)
        # instance.RF_Control2 = validated_data.get('RF_Control2', instance.RF_Control2)
        # instance.RF_Control3 = validated_data.get('RF_Control3', instance.RF_Control3)
        # instance.RF_Another_Control1 = validated_data.get('RF_Another_Control1', instance.RF_Another_Control1)
        # instance.RF_Another_Control2 = validated_data.get('RF_Another_Control2', instance.RF_Another_Control2)
        instance.status = validated_data.get("status", instance.status)
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class RF_LinkedPartySerializers(serializers.ModelSerializer):
    class Meta():
        model = RF_LinkedParty
        fields = '__all__'
    

    def create(self, validated_data):
        return RF_LinkedParty.objects.create(**validated_data)

    def updateStatus(self, instance, validated_data):
        instance.status = validated_data.get("status", instance.status)
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)
        instance.RF_LP_Adjust_Risk = validated_data.get('RF_LP_Adjust_Risk', instance.RF_LP_Adjust_Risk)
        instance.RF_LP_Name = validated_data.get('RF_LP_Name', instance.RF_LP_Name)
        instance.RF_LP_Client_Relationship = validated_data.get('RF_LP_Client_Relationship', instance.RF_LP_Client_Relationship)
        instance.RF_LP_ID = validated_data.get('RF_LP_ID', instance.RF_LP_ID)
        instance.RF_LP_Linked_Party = validated_data.get('RF_LP_Linked_Party', instance.RF_LP_Linked_Party)
        instance.RF_LP_RCA = validated_data.get('RF_LP_RCA', instance.RF_LP_RCA)
        instance.RF_LP_Birth_Country = validated_data.get('RF_LP_Birth_Country', instance.RF_LP_Birth_Country)
        instance.RF_LP_Residence_Country = validated_data.get('RF_LP_Residence_Country', instance.RF_LP_Residence_Country)
        instance.RF_LP_Nationality = validated_data.get('RF_LP_Nationality', instance.RF_LP_Nationality)
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class RP_ProductTakenSerializer(serializers.ModelSerializer):
    class Meta():
        model = RP_ProductTaken
        fields = '__all__'
    

    def create(self, validated_data):
        return RP_ProductTaken.objects.create(**validated_data)

    def updateStatus(self, instance, validated_data):
        instance.status = validated_data.get("status", instance.status)
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)
        instance.Product_Taken = validated_data.get('Product_Taken', instance.Product_Taken)
        instance.Product_Provider = validated_data.get('Product_Provider', instance.Product_Provider)
        instance.Policy_Number = validated_data.get('Policy_Number', instance.Policy_Number)
        instance.Product_Name = validated_data.get('Product_Name', instance.Product_Name)
        instance.Product_Premium = validated_data.get('Product_Premium', instance.Product_Premium)
        instance.Product_PremiumFrequency = validated_data.get('Product_PremiumFrequency', instance.Product_PremiumFrequency)
        instance.Product_Pattern = validated_data.get('Product_Pattern', instance.Product_Pattern)
        instance.Product_Escalation = validated_data.get('Product_Escalation', instance.Product_Escalation)
        instance.Product_ContractingParty = validated_data.get('Product_ContractingParty', instance.Product_ContractingParty)
        instance.Product_LivesAssured = validated_data.get('Product_LivesAssured', instance.Product_LivesAssured)
        instance.Product_Beneficiary = validated_data.get('Product_Beneficiary', instance.Product_Beneficiary)
        instance.Product_PremiumPayer = validated_data.get('Product_PremiumPayer', instance.Product_PremiumPayer)
        instance.Product_1stYearCommission = validated_data.get('Product_1stYearCommission', instance.Product_1stYearCommission)
        instance.Product_2ndYearCommission = validated_data.get('Product_2ndYearCommission', instance.Product_2ndYearCommission)
        instance.Product_OngoingFees = validated_data.get('Product_OngoingFees', instance.Product_OngoingFees)
        instance.Product_OngoingFeesFrequency = validated_data.get('Product_OngoingFeesFrequency', instance.Product_OngoingFeesFrequency)
        instance.Product_OngoingFeesFrequency1 = validated_data.get('Product_OngoingFeesFrequency1', instance.Product_OngoingFeesFrequency1)
        instance.TotalFees_n_Commissions = validated_data.get('TotalFees_n_Commissions', instance.TotalFees_n_Commissions)
        instance.ProductReasons = validated_data.get('ProductReasons', instance.ProductReasons)
        instance.ProductMaterialAspects = validated_data.get('ProductMaterialAspects', instance.ProductMaterialAspects)
        instance.ProductDetails = validated_data.get('ProductDetails', instance.ProductDetails)
        instance.ExecutorFee = validated_data.get('ExecutorFee', instance.ExecutorFee)
        instance.NominationOfBeneficiaries = validated_data.get('NominationOfBeneficiaries', instance.NominationOfBeneficiaries)
        instance.InformationExplained = validated_data.get('InformationExplained', instance.InformationExplained)
        instance.BenDesc_1 = validated_data.get('BenDesc_1', instance.BenDesc_1)
        instance.BenDesc_2 = validated_data.get('BenDesc_2', instance.BenDesc_2)
        instance.BenDesc_3 = validated_data.get('BenDesc_3', instance.BenDesc_3)
        instance.BenDesc_4 = validated_data.get('BenDesc_4', instance.BenDesc_4)
        instance.BenDesc_5 = validated_data.get('BenDesc_5', instance.BenDesc_5)
        instance.BenDesc_6 = validated_data.get('BenDesc_6', instance.BenDesc_6)
        instance.BenDesc_7 = validated_data.get('BenDesc_7', instance.BenDesc_7)
        instance.BenDesc_CoverAmount_1 = validated_data.get('BenDesc_CoverAmount_1', instance.BenDesc_CoverAmount_1)
        instance.BenDesc_CoverAmount_2 = validated_data.get('BenDesc_CoverAmount_2', instance.BenDesc_CoverAmount_2)
        instance.BenDesc_CoverAmount_3 = validated_data.get('BenDesc_CoverAmount_3', instance.BenDesc_CoverAmount_3)
        instance.BenDesc_CoverAmount_4 = validated_data.get('BenDesc_CoverAmount_4', instance.BenDesc_CoverAmount_4)
        instance.BenDesc_CoverAmount_5 = validated_data.get('BenDesc_CoverAmount_5', instance.BenDesc_CoverAmount_5)
        instance.BenDesc_CoverAmount_6 = validated_data.get('BenDesc_CoverAmount_6', instance.BenDesc_CoverAmount_6)
        instance.BenDesc_CoverAmount_7 = validated_data.get('BenDesc_CoverAmount_7', instance.BenDesc_CoverAmount_7)
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class RP_ProductTaken_BenDescSerializers(serializers.ModelSerializer):
    class Meta():
        model = RP_ProductTaken_BenDesc
        fields = '__all__'
    

    def create(self, validated_data):
        return RP_ProductTaken_BenDesc.objects.create(**validated_data)

    def updateStatus(self, instance, validated_data):
        instance.status = validated_data.get("status", instance.status)
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.advisorId = validated_data.get('advisorId', instance.advisorId)
        instance.formId = validated_data.get('formId', instance.formId)
        instance.productTakenId = validated_data.get('productTakenId', instance.productTakenId)
        instance.BenDesc = validated_data.get('BenDesc', instance.BenDesc)
        instance.BenDesc_CoverAmount = validated_data.get('BenDesc_CoverAmount', instance.BenDesc_CoverAmount)
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class IP_ProductTakenSerializer(serializers.ModelSerializer):
    class Meta():
        model = IP_ProductTaken
        fields = '__all__'
    

    def create(self, validated_data):
        return IP_ProductTaken.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.ProductTaken = validated_data.get('ProductTaken', instance.ProductTaken)    
        instance.ProductProvider = validated_data.get('ProductProvider', instance.ProductProvider)    
        instance.PolicyNumber = validated_data.get('PolicyNumber', instance.PolicyNumber)    
        instance.ProductName = validated_data.get('ProductName', instance.ProductName)    
        instance.ProductPremium = validated_data.get('ProductPremium', instance.ProductPremium)    
        instance.ProductPremiumFrequency = validated_data.get('ProductPremiumFrequency', instance.ProductPremiumFrequency)   
        instance.ProductEscalation = validated_data.get('ProductEscalation', instance.ProductEscalation)    
        instance.ProductEAC = validated_data.get('ProductEAC', instance.ProductEAC)    
        instance.ProductContractingParty = validated_data.get('ProductContractingParty', instance.ProductContractingParty)    
        instance.ProductLivesAssured = validated_data.get('ProductLivesAssured', instance.ProductLivesAssured)    
        instance.ProductPremiumLayer = validated_data.get('ProductPremiumLayer', instance.ProductPremiumLayer)    
        instance.ProductBeneficiary = validated_data.get('ProductBeneficiary', instance.ProductBeneficiary)    
        instance.Product_IniC = validated_data.get('Product_IniC', instance.Product_IniC)    
        instance.Product_IniC_Percentage = validated_data.get('Product_IniC_Percentage', instance.Product_IniC_Percentage)    
        instance.Product_OnC = validated_data.get('Product_OnC', instance.Product_OnC)    
        instance.Product_OnC_Percentage = validated_data.get('Product_OnC_Percentage', instance.Product_OnC_Percentage)    

        instance.SFPSolutionFunds = validated_data.get('SFPSolutionFunds', instance.SFPSolutionFunds)
        instance.SFPSolutionFundsDetails = validated_data.get('SFPSolutionFundsDetails', instance.SFPSolutionFundsDetails)

        instance.ItP = validated_data.get('ItP', instance.ItP)
        instance.ItP_Fund = validated_data.get('ItP_Fund', instance.ItP_Fund)
        instance.ItP_FundPercentage = validated_data.get('ItP_FundPercentage', instance.ItP_FundPercentage)
        instance.ItP_FundProvided = validated_data.get('ItP_FundProvided', instance.ItP_FundProvided)
        instance.ItP_FundDiscussed = validated_data.get('ItP_FundDiscussed', instance.ItP_FundDiscussed)
        
        instance.ItP_Fund1 = validated_data.get('ItP_Fund1', instance.ItP_Fund1)
        instance.ItP_FundPercentage1 = validated_data.get('ItP_FundPercentage1', instance.ItP_FundPercentage1)
        instance.ItP_FundProvided1 = validated_data.get('ItP_FundProvided1', instance.ItP_FundProvided1)
        instance.ItP_FundDiscussed1 = validated_data.get('ItP_FundDiscussed1', instance.ItP_FundDiscussed1)
        
        instance.ItP_Fund2 = validated_data.get('ItP_Fund2', instance.ItP_Fund2)
        instance.ItP_FundPercentage2 = validated_data.get('ItP_FundPercentage2', instance.ItP_FundPercentage2)
        instance.ItP_FundProvided2 = validated_data.get('ItP_FundProvided2', instance.ItP_FundProvided2)
        instance.ItP_FundDiscussed2 = validated_data.get('ItP_FundDiscussed2', instance.ItP_FundDiscussed2)
        
        instance.ItP_Fund3 = validated_data.get('ItP_Fund3', instance.ItP_Fund3)
        instance.ItP_FundPercentage3 = validated_data.get('ItP_FundPercentage3', instance.ItP_FundPercentage3)
        instance.ItP_FundProvided3 = validated_data.get('ItP_FundProvided3', instance.ItP_FundProvided3)
        instance.ItP_FundDiscussed3 = validated_data.get('ItP_FundDiscussed3', instance.ItP_FundDiscussed3)
        
        instance.ItP_Fund4 = validated_data.get('ItP_Fund4', instance.ItP_Fund4)
        instance.ItP_FundPercentage4 = validated_data.get('ItP_FundPercentage4', instance.ItP_FundPercentage4)
        instance.ItP_FundProvided4 = validated_data.get('ItP_FundProvided4', instance.ItP_FundProvided4)
        instance.ItP_FundDiscussed4 = validated_data.get('ItP_FundDiscussed4', instance.ItP_FundDiscussed4)
        
        instance.ItP_Fund5 = validated_data.get('ItP_Fund5', instance.ItP_Fund5)
        instance.ItP_FundPercentage5 = validated_data.get('ItP_FundPercentage5', instance.ItP_FundPercentage5)
        instance.ItP_FundProvided5 = validated_data.get('ItP_FundProvided5', instance.ItP_FundProvided5)
        instance.ItP_FundDiscussed5 = validated_data.get('ItP_FundDiscussed5', instance.ItP_FundDiscussed5)
        
        instance.ItP_Fund6 = validated_data.get('ItP_Fund6', instance.ItP_Fund6)
        instance.ItP_FundPercentage6 = validated_data.get('ItP_FundPercentage6', instance.ItP_FundPercentage6)
        instance.ItP_FundProvided6 = validated_data.get('ItP_FundProvided6', instance.ItP_FundProvided6)
        instance.ItP_FundDiscussed6 = validated_data.get('ItP_FundDiscussed6', instance.ItP_FundDiscussed6)
        
        instance.ItP_Fund7 = validated_data.get('ItP_Fund7', instance.ItP_Fund7)
        instance.ItP_FundPercentage7 = validated_data.get('ItP_FundPercentage7', instance.ItP_FundPercentage7)
        instance.ItP_FundProvided7 = validated_data.get('ItP_FundProvided7', instance.ItP_FundProvided7)
        instance.ItP_FundDiscussed7 = validated_data.get('ItP_FundDiscussed7', instance.ItP_FundDiscussed7)
            
        instance.ItP_FundsReasons = validated_data.get('ItP_FundsReasons', instance.ItP_FundsReasons)

        instance.ItP_FundsMaterialAspects = validated_data.get('ItP_FundsMaterialAspects', instance.ItP_FundsMaterialAspects)
        instance.ItP_ProductDetails = validated_data.get('ItP_ProductDetails', instance.ItP_ProductDetails)
        instance.ItP_ExecutorFee = validated_data.get('ItP_ExecutorFee', instance.ItP_ExecutorFee)
        instance.ItP_NominationOfBeneficiaries = validated_data.get('ItP_NominationOfBeneficiaries', instance.ItP_NominationOfBeneficiaries)
        instance.ItP_InformationExplained = validated_data.get('ItP_InformationExplained', instance.ItP_InformationExplained)
        instance.ItP_FundsAdditionComments = validated_data.get('ItP_FundsAdditionComments', instance.ItP_FundsAdditionComments)
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class AR_ProductTakenSerializer(serializers.ModelSerializer):
    class Meta():
        model = AR_ProductTaken
        fields = '__all__'
    

    def create(self, validated_data):
        return AR_ProductTaken.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.ProductTaken = validated_data.get('ProductTaken', instance.ProductTaken)    
        instance.ProductProvider = validated_data.get('ProductProvider', instance.ProductProvider)    
        instance.PolicyNumber = validated_data.get('PolicyNumber', instance.PolicyNumber)    
        instance.ProductName = validated_data.get('ProductName', instance.ProductName)    
        instance.ProductPremium = validated_data.get('ProductPremium', instance.ProductPremium)    
        instance.ProductPremiumFrequency = validated_data.get('ProductPremiumFrequency', instance.ProductPremiumFrequency)   
        instance.ProductPattern = validated_data.get('ProductPattern', instance.ProductPattern)    
        instance.ProductEscalation = validated_data.get('ProductEscalation', instance.ProductEscalation)    
        instance.ProductContractingParty = validated_data.get('ProductContractingParty', instance.ProductContractingParty)    
        instance.ProductLivesAssured = validated_data.get('ProductLivesAssured', instance.ProductLivesAssured)    
        instance.ProductPremiumPayer = validated_data.get('ProductPremiumPayer', instance.ProductPremiumPayer)    
        instance.Product1stYearCommission = validated_data.get('Product1stYearCommission', instance.Product1stYearCommission)    
        instance.Product2ndYearCommission = validated_data.get('Product2ndYearCommission', instance.Product2ndYearCommission)    
        
        instance.BenDesc_1 = validated_data.get('BenDesc_1', instance.BenDesc_1)    
        instance.BenDesc_CoverAmount1 = validated_data.get('BenDesc_CoverAmount1', instance.BenDesc_CoverAmount1)    
        instance.BenDesc_2 = validated_data.get('BenDesc_2', instance.BenDesc_2)    
        instance.BenDesc_CoverAmount2 = validated_data.get('BenDesc_CoverAmount2', instance.BenDesc_CoverAmount2)    
        instance.BenDesc_3 = validated_data.get('BenDesc_3', instance.BenDesc_3)    
        instance.BenDesc_CoverAmount3 = validated_data.get('BenDesc_CoverAmount3', instance.BenDesc_CoverAmount3)    
        instance.BenDesc_4 = validated_data.get('BenDesc_4', instance.BenDesc_4)    
        instance.BenDesc_CoverAmount4 = validated_data.get('BenDesc_CoverAmount4', instance.BenDesc_CoverAmount4)    
        instance.BenDesc_5 = validated_data.get('BenDesc_5', instance.BenDesc_5)    
        instance.BenDesc_CoverAmount5 = validated_data.get('BenDesc_CoverAmount5', instance.BenDesc_CoverAmount5)    
        instance.BenDesc_6 = validated_data.get('BenDesc_6', instance.BenDesc_6)    
        instance.BenDesc_CoverAmount6 = validated_data.get('BenDesc_CoverAmount6', instance.BenDesc_CoverAmount6)    
        instance.BenDesc_7 = validated_data.get('BenDesc_7', instance.BenDesc_7)    
        instance.BenDesc_CoverAmount7 = validated_data.get('BenDesc_CoverAmount7', instance.BenDesc_CoverAmount7)    
        
        instance.ProductReasons = validated_data.get('ProductReasons', instance.ProductReasons)    
        instance.ProductMaterialAspects = validated_data.get('ProductMaterialAspects', instance.ProductMaterialAspects)    
        instance.ProductAdditionComments = validated_data.get('ProductAdditionComments', instance.ProductAdditionComments)    
        instance.ProductDetails = validated_data.get('ProductDetails', instance.ProductDetails)    
        instance.ProductBriefSummary = validated_data.get('ProductBriefSummary', instance.ProductBriefSummary)    
        instance.Cessionaries = validated_data.get('Cessionaries', instance.Cessionaries)    
        instance.InformationExplained = validated_data.get('InformationExplained', instance.InformationExplained)    
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class AI_ProductTakenSerializer(serializers.ModelSerializer):
    class Meta():
        model = AI_ProductTaken
        fields = '__all__'
    

    def create(self, validated_data):
        return AI_ProductTaken.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Pr_Taken = validated_data.get('Pr_Taken', instance.Pr_Taken)  
        instance.Pr_Provider = validated_data.get('Pr_Provider', instance.Pr_Provider)    
        instance.Pr_PolicyNumber = validated_data.get('Pr_PolicyNumber', instance.Pr_PolicyNumber)    
        instance.Pr_Name = validated_data.get('Pr_Name', instance.Pr_Name)    
        instance.Pr_Premium = validated_data.get('Pr_Premium', instance.Pr_Premium)    
        instance.Pr_PremiumFrequency = validated_data.get('Pr_PremiumFrequency', instance.Pr_PremiumFrequency) 
        instance.Pr_Escalation = validated_data.get('Pr_Escalation', instance.Pr_Escalation)    
        instance.Pr_EAC = validated_data.get('Pr_EAC', instance.Pr_EAC)    
        instance.Pr_ContractingParty = validated_data.get('Pr_ContractingParty', instance.Pr_ContractingParty)    
        instance.Pr_LivesAssured = validated_data.get('Pr_LivesAssured', instance.Pr_LivesAssured)    
        instance.Pr_PremiumPayer = validated_data.get('Pr_PremiumPayer', instance.Pr_PremiumPayer)    
        instance.Pr_Beneficiary = validated_data.get('Pr_Beneficiary', instance.Pr_Beneficiary)    
        instance.Pr_IniC = validated_data.get('Pr_IniC', instance.Pr_IniC)    
        instance.Pr_IniC_Percentage = validated_data.get('Pr_IniC_Percentage', instance.Pr_IniC_Percentage)    
        instance.Pr_OnC = validated_data.get('Pr_OnC', instance.Pr_OnC)    
        instance.Pr_OnC_Percentage = validated_data.get('Pr_OnC_Percentage', instance.Pr_OnC_Percentage)

        instance.Portfolio = validated_data.get('Portfolio', instance.Portfolio)
        
        instance.PF_1 = validated_data.get('PF_1', instance.PF_1)
        instance.PF_Percentage1 = validated_data.get('PF_Percentage1', instance.PF_Percentage1)
        instance.PF_Provided1 = validated_data.get('PF_Provided1', instance.PF_Provided1)
        instance.PF_Discussed1 = validated_data.get('PF_Discussed1', instance.PF_Discussed1)
        
        instance.PF_2 = validated_data.get('PF_2', instance.PF_2)
        instance.PF_Percentage2 = validated_data.get('PF_Percentage2', instance.PF_Percentage2)
        instance.PF_Provided2 = validated_data.get('PF_Provided2', instance.PF_Provided2)
        instance.PF_Discussed2 = validated_data.get('PF_Discussed2', instance.PF_Discussed2)
        
        instance.PF_3 = validated_data.get('PF_3', instance.PF_3)
        instance.PF_Percentage3 = validated_data.get('PF_Percentage3', instance.PF_Percentage3)
        instance.PF_Provided3 = validated_data.get('PF_Provided3', instance.PF_Provided3)
        instance.PF_Discussed3 = validated_data.get('PF_Discussed3', instance.PF_Discussed3)
        
        instance.PF_4 = validated_data.get('PF_4', instance.PF_4)
        instance.PF_Percentage4 = validated_data.get('PF_Percentage4', instance.PF_Percentage4)
        instance.PF_Provided4 = validated_data.get('PF_Provided4', instance.PF_Provided4)
        instance.PF_Discussed4 = validated_data.get('PF_Discussed4', instance.PF_Discussed4)
        
        instance.PF_5 = validated_data.get('PF_5', instance.PF_5)
        instance.PF_Percentage5 = validated_data.get('PF_Percentage5', instance.PF_Percentage5)
        instance.PF_Provided5 = validated_data.get('PF_Provided5', instance.PF_Provided5)
        instance.PF_Discussed5 = validated_data.get('PF_Discussed5', instance.PF_Discussed5)
        
        instance.PF_6 = validated_data.get('PF_6', instance.PF_6)
        instance.PF_Percentage6 = validated_data.get('PF_Percentage6', instance.PF_Percentage6)
        instance.PF_Provided6 = validated_data.get('PF_Provided6', instance.PF_Provided6)
        instance.PF_Discussed6 = validated_data.get('PF_Discussed6', instance.PF_Discussed6)
        
        instance.PF_7 = validated_data.get('PF_7', instance.PF_7)
        instance.PF_Percentage7 = validated_data.get('PF_Percentage7', instance.PF_Percentage7)
        instance.PF_Provided7 = validated_data.get('PF_Provided7', instance.PF_Provided7)
        instance.PF_Discussed7 = validated_data.get('PF_Discussed7', instance.PF_Discussed7)

        instance.PF_Reasons = validated_data.get('PF_Reasons', instance.PF_Reasons)
        instance.PF_MaterialAspects = validated_data.get('PF_MaterialAspects', instance.PF_MaterialAspects)
        instance.PF_AdditionalComments = validated_data.get('PF_AdditionalComments', instance.PF_AdditionalComments)
        instance.PF_ExecutorFee = validated_data.get('PF_ExecutorFee', instance.PF_ExecutorFee)
        instance.PF_InformationExplained = validated_data.get('PF_InformationExplained', instance.PF_InformationExplained)
        instance.PF_Pr_Details = validated_data.get('PF_Pr_Details', instance.PF_Pr_Details)
        instance.PF_NominationOfBeneficiaries = validated_data.get('PF_NominationOfBeneficiaries', instance.PF_NominationOfBeneficiaries)

        instance.SourceOfFunds = validated_data.get('SourceOfFunds', instance.SourceOfFunds)
        instance.SourceOfFundsDetail = validated_data.get('SourceOfFundsDetail', instance.SourceOfFundsDetail)
         
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class EB_CoverSerializer(serializers.ModelSerializer):
    class Meta():
        model = EB_Cover
        fields = '__all__'
    

    def create(self, validated_data):
        return EB_Cover.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.BusB_CoverType = validated_data.get('BusB_CoverType', instance.BusB_CoverType)  
        instance.BusB_Cover = validated_data.get('BusB_Cover', instance.BusB_Cover)    
        instance.BusB_CoverDetails = validated_data.get('BusB_CoverDetails', instance.BusB_CoverDetails)    
         
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance
    
class Risk_BenDescSerializer(serializers.ModelSerializer):
    class Meta():
        model = Risk_BenDesc
        fields = '__all__'
    

    def create(self, validated_data):
        return Risk_BenDesc.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.BenDesc = validated_data.get('BenDesc', instance.BenDesc)  
        instance.BenDesc_CoverAmount = validated_data.get('BenDesc_CoverAmount', instance.BenDesc_CoverAmount)         
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIP_Loss_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIP_Loss
        fields = '__all__'
    

    def create(self, validated_data):
        return STIP_Loss.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.General_TypeOfLoss = validated_data.get('General_TypeOfLoss', instance.General_TypeOfLoss)  
        instance.General_LossYear = validated_data.get('General_LossYear', instance.General_LossYear)  
        instance.General_LossAmount = validated_data.get('General_LossAmount', instance.General_LossAmount)    
        instance.General_LossInsurer = validated_data.get('General_LossInsurer', instance.General_LossInsurer)    
         
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance
    
class STIC_Loss_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Loss
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Loss.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.General_TypeOfLoss = validated_data.get('General_TypeOfLoss', instance.General_TypeOfLoss)  
        instance.General_LossYear = validated_data.get('General_LossYear', instance.General_LossYear)  
        instance.General_LossAmount = validated_data.get('General_LossAmount', instance.General_LossAmount)    
        instance.General_LossInsurer = validated_data.get('General_LossInsurer', instance.General_LossInsurer)    
         
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_Fire_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_Fire
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_Fire.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Fire_AddComments = validated_data.get('Fire_AddComments', instance.Fire_AddComments)  
        instance.Fire_Limit = validated_data.get('Fire_Limit', instance.Fire_Limit)  
        instance.Fire_ItemNumber = validated_data.get('Fire_ItemNumber', instance.Fire_ItemNumber)  
        instance.Fire_Premium = validated_data.get('Fire_Premium', instance.Fire_Premium)    
        instance.Fire_PremNumber = validated_data.get('Fire_PremNumber', instance.Fire_PremNumber)    
        instance.Buildings_Insured = validated_data.get('Buildings_Insured', instance.Buildings_Insured)  
        instance.Rental_Insured = validated_data.get('Rental_Insured', instance.Rental_Insured)  
        instance.Others_Insured = validated_data.get('Others_Insured', instance.Others_Insured)    
        instance.Stocks_Insured = validated_data.get('Stocks_Insured', instance.Stocks_Insured)    
        instance.Miscellaneous1_Insured = validated_data.get('Miscellaneous1_Insured', instance.Miscellaneous1_Insured)  
        instance.Miscellaneous2_Insured = validated_data.get('Miscellaneous2_Insured', instance.Miscellaneous2_Insured)  
        instance.Earthquake_Insured = validated_data.get('Earthquake_Insured', instance.Earthquake_Insured)    
        instance.Malicious_Damage_Insured = validated_data.get('Malicious_Damage_Insured', instance.Malicious_Damage_Insured)    
        instance.Special_Insured = validated_data.get('Special_Insured', instance.Special_Insured)  
        instance.LeakFull_Insured = validated_data.get('LeakFull_Insured', instance.LeakFull_Insured)  
        instance.LeakFirst_Insured = validated_data.get('LeakFirst_Insured', instance.LeakFirst_Insured)    
        instance.SnLLimited_Insured = validated_data.get('SnLLimited_Insured', instance.SnLLimited_Insured)    
        instance.SnLComprehensive_Insured = validated_data.get('SnLComprehensive_Insured', instance.SnLComprehensive_Insured)    
        instance.RnS_Insured = validated_data.get('RnS_Insured', instance.RnS_Insured)    
        instance.SDC_Insured = validated_data.get('SDC_Insured', instance.SDC_Insured)    
         
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_2_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_2
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_2.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.BuildCombined_AddComments = validated_data.get('BuildCombined_AddComments', instance.BuildCombined_AddComments)  
        instance.BuildCombined_Limit = validated_data.get('BuildCombined_Limit', instance.BuildCombined_Limit)  
        instance.BuildCombined_ItemNumber = validated_data.get('BuildCombined_ItemNumber', instance.BuildCombined_ItemNumber)  
        instance.BuildCombined_Premium = validated_data.get('BuildCombined_Premium', instance.BuildCombined_Premium)    
        instance.BuildCombined_PremNumber = validated_data.get('BuildCombined_PremNumber', instance.BuildCombined_PremNumber)    
        instance.BuildCombined_ColumnRef = validated_data.get('BuildCombined_ColumnRef', instance.BuildCombined_ColumnRef)  
        instance.BuildCombined_Sum = validated_data.get('BuildCombined_Sum', instance.BuildCombined_Sum)  
        instance.BuildCombined_Construct = validated_data.get('BuildCombined_Construct', instance.BuildCombined_Construct)    
        instance.BuildCombined_Desc = validated_data.get('BuildCombined_Desc', instance.BuildCombined_Desc)    
        instance.Extensions_RnS = validated_data.get('Extensions_RnS', instance.Extensions_RnS)  
        instance.Extensions_Geysers = validated_data.get('Extensions_Geysers', instance.Extensions_Geysers)  
        instance.Extensions_SnL = validated_data.get('Extensions_SnL', instance.Extensions_SnL)    
        instance.Extensions_PoA = validated_data.get('Extensions_PoA', instance.Extensions_PoA)    
        instance.Extensions_IorE = validated_data.get('Extensions_IorE', instance.Extensions_IorE) 
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_3_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_3
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_3.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.OC_AddComments = validated_data.get('OC_AddComments', instance.OC_AddComments)  
        instance.OC_Limit = validated_data.get('OC_Limit', instance.OC_Limit)  
        instance.OC_ItemNumber = validated_data.get('OC_ItemNumber', instance.OC_ItemNumber)  
        instance.OC_Premium = validated_data.get('OC_Premium', instance.OC_Premium)    
        instance.OC_PremNumber = validated_data.get('OC_PremNumber', instance.OC_PremNumber)    
        instance.OC_PremisesNum = validated_data.get('OC_PremisesNum', instance.OC_PremisesNum)  
        instance.OC_Sum = validated_data.get('OC_Sum', instance.OC_Sum)  
        instance.OC_Construct = validated_data.get('OC_Construct', instance.OC_Construct)    
        instance.OC_Desc = validated_data.get('OC_Desc', instance.OC_Desc)    
        instance.OC_Doc_Sum = validated_data.get('OC_Doc_Sum', instance.OC_Doc_Sum)  
        instance.OC_Doc_Premium = validated_data.get('OC_Doc_Premium', instance.OC_Doc_Premium)  
        instance.OC_LLDoc_Sum = validated_data.get('OC_LLDoc_Sum', instance.OC_LLDoc_Sum)    
        instance.OC_LLDoc_Premium = validated_data.get('OC_LLDoc_Premium', instance.OC_LLDoc_Premium)    
        instance.OC_RnS_Sum = validated_data.get('OC_RnS_Sum', instance.OC_RnS_Sum) 
        instance.OC_RnS_Premium = validated_data.get('OC_RnS_Premium', instance.OC_RnS_Premium) 
        instance.OC_TheftF_Sum = validated_data.get('OC_TheftF_Sum', instance.OC_TheftF_Sum) 
        instance.OC_TheftF_Premium = validated_data.get('OC_TheftF_Premium', instance.OC_TheftF_Premium) 
        instance.OC_Theft_Sum = validated_data.get('OC_Theft_Sum', instance.OC_Theft_Sum) 
        instance.OC_Theft_Premium = validated_data.get('OC_Theft_Premium', instance.OC_Theft_Premium) 
        instance.OC_Total_Premium = validated_data.get('OC_Total_Premium', instance.OC_Total_Premium) 
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_4_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_4
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_4.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.BusInt_AddComments = validated_data.get('BusInt_AddComments', instance.BusInt_AddComments)  
        instance.BusInt_Limit = validated_data.get('BusInt_Limit', instance.BusInt_Limit)  
        instance.BusInt_Premium = validated_data.get('BusInt_Premium', instance.BusInt_Premium)  
        instance.BusInt_ItemNumber = validated_data.get('BusInt_ItemNumber', instance.BusInt_ItemNumber)  
        instance.BusInt_PremNumber = validated_data.get('BusInt_PremNumber', instance.BusInt_PremNumber)    
        instance.BusInt_Basis = validated_data.get('BusInt_Basis', instance.BusInt_Basis)    
        instance.BusInt_Indemnity = validated_data.get('BusInt_Indemnity', instance.BusInt_Indemnity)  
        instance.BusInt_Type1 = validated_data.get('BusInt_Type1', instance.BusInt_Type1)  
        instance.BusInt_Type2 = validated_data.get('BusInt_Type2', instance.BusInt_Type2)    
        instance.BusInt_Type3 = validated_data.get('BusInt_Type3', instance.BusInt_Type3)    
        instance.BusInt_Type4 = validated_data.get('BusInt_Type4', instance.BusInt_Type4)  
        instance.BusInt_Type5 = validated_data.get('BusInt_Type5', instance.BusInt_Type5)  
        instance.BusInt_Type6 = validated_data.get('BusInt_Type6', instance.BusInt_Type6)    
        instance.BusInt_Type7 = validated_data.get('BusInt_Type7', instance.BusInt_Type7)    
        instance.BusInt_Type8 = validated_data.get('BusInt_Type8', instance.BusInt_Type8) 
        instance.BusInt_Type9 = validated_data.get('BusInt_Type9', instance.BusInt_Type9) 
        instance.BusInt_Type9_1 = validated_data.get('BusInt_Type9_1', instance.BusInt_Type9_1) 
        instance.BusInt_Type10 = validated_data.get('BusInt_Type10', instance.BusInt_Type10) 
        instance.BusInt_Type11 = validated_data.get('BusInt_Type11', instance.BusInt_Type11) 
        instance.BusInt_Type11_1 = validated_data.get('BusInt_Type11_1', instance.BusInt_Type11_1) 
        instance.BusInt_Type12 = validated_data.get('BusInt_Type12', instance.BusInt_Type12) 
        instance.BusInt_Type13 = validated_data.get('BusInt_Type13', instance.BusInt_Type13)  
        instance.BusInt_Type14 = validated_data.get('BusInt_Type14', instance.BusInt_Type14)  
        instance.BusInt_Type14_1 = validated_data.get('BusInt_Type14_1', instance.BusInt_Type14_1)  
        instance.BusInt_Type15 = validated_data.get('BusInt_Type15', instance.BusInt_Type15)    
        instance.BusInt_Type15_1 = validated_data.get('BusInt_Type15_1', instance.BusInt_Type15_1)    
        instance.BusInt_Type16 = validated_data.get('BusInt_Type16', instance.BusInt_Type16)  
        instance.BusInt_Type16_1 = validated_data.get('BusInt_Type16_1', instance.BusInt_Type16_1)  
        instance.BusInt_Type17 = validated_data.get('BusInt_Type17', instance.BusInt_Type17)    
        instance.BusInt_Type18 = validated_data.get('BusInt_Type18', instance.BusInt_Type18)    
        instance.BusInt_Type19 = validated_data.get('BusInt_Type19', instance.BusInt_Type19)  
        instance.BusInt_Type19_1 = validated_data.get('BusInt_Type19_1', instance.BusInt_Type19_1)  
        instance.BusInt_Type20 = validated_data.get('BusInt_Type20', instance.BusInt_Type20)    
        instance.BusInt_Type20_1 = validated_data.get('BusInt_Type20_1', instance.BusInt_Type20_1)    
        instance.BusInt_Type21 = validated_data.get('BusInt_Type21', instance.BusInt_Type21) 
        instance.BusInt_Type21_1 = validated_data.get('BusInt_Type21_1', instance.BusInt_Type21_1) 
        instance.BusInt_Type22 = validated_data.get('BusInt_Type22', instance.BusInt_Type22) 
        instance.BusInt_Type22_1 = validated_data.get('BusInt_Type22_1', instance.BusInt_Type22_1) 
        instance.BusInt_Type23 = validated_data.get('BusInt_Type23', instance.BusInt_Type23) 
        instance.BusInt_Type23_1 = validated_data.get('BusInt_Type23_1', instance.BusInt_Type23_1) 
        instance.BusInt_TotalPremium = validated_data.get('BusInt_TotalPremium', instance.BusInt_TotalPremium) 
        instance.BusInt_Comments = validated_data.get('BusInt_Comments', instance.BusInt_Comments)  
        instance.BusInt_PremisesNumber = validated_data.get('BusInt_PremisesNumber', instance.BusInt_PremisesNumber)  
        instance.BusInt_Basis = validated_data.get('BusInt_Basis', instance.BusInt_Basis)  
        instance.BusInt_IndemPer = validated_data.get('BusInt_IndemPer', instance.BusInt_IndemPer)    
        instance.BusInt_Suppliers = validated_data.get('BusInt_Suppliers', instance.BusInt_Suppliers)    
        instance.BusInt_Type2_1 = validated_data.get('BusInt_Type2_1', instance.BusInt_Type2_1)  
        instance.BusInt_Type2_2 = validated_data.get('BusInt_Type2_2', instance.BusInt_Type2_2)  
        instance.BusInt_Type2_3 = validated_data.get('BusInt_Type2_3', instance.BusInt_Type2_3)    
        instance.BusInt_Type2_4 = validated_data.get('BusInt_Type2_4', instance.BusInt_Type2_4)    
        instance.BusInt_Type2_5 = validated_data.get('BusInt_Type2_5', instance.BusInt_Type2_5)  
        instance.BusInt_Type2_6 = validated_data.get('BusInt_Type2_6', instance.BusInt_Type2_6)  
        instance.BusInt_Type2_7 = validated_data.get('BusInt_Type2_7', instance.BusInt_Type2_7)    
        instance.BusInt_Type2_8 = validated_data.get('BusInt_Type2_8', instance.BusInt_Type2_8)    
        instance.BusInt_Type2_9 = validated_data.get('BusInt_Type2_9', instance.BusInt_Type2_9) 
        instance.BusInt_Type2_9_1 = validated_data.get('BusInt_Type2_9_1', instance.BusInt_Type2_9_1) 
        instance.BusInt_Type2_10 = validated_data.get('BusInt_Type2_10', instance.BusInt_Type2_10) 
        instance.BusInt_Type2_11 = validated_data.get('BusInt_Type2_11', instance.BusInt_Type2_11) 
        instance.BusInt_Type2_11_1 = validated_data.get('BusInt_Type2_11_1', instance.BusInt_Type2_11_1) 
        instance.BusInt_Type2_12 = validated_data.get('BusInt_Type2_12', instance.BusInt_Type2_12) 
        instance.BusInt_Type2_13 = validated_data.get('BusInt_Type2_13', instance.BusInt_Type2_13) 
        instance.BusInt_Type2_14 = validated_data.get('BusInt_Type2_14', instance.BusInt_Type2_14)  
        instance.BusInt_Type2_14_1 = validated_data.get('BusInt_Type2_14_1', instance.BusInt_Type2_14_1)  
        instance.BusInt_Type2_15 = validated_data.get('BusInt_Type2_15', instance.BusInt_Type2_15)  
        instance.BusInt_Type2_15_1 = validated_data.get('BusInt_Type2_15_1', instance.BusInt_Type2_15_1)    
        instance.BusInt_Type2_16 = validated_data.get('BusInt_Type2_16', instance.BusInt_Type2_16)    
        instance.BusInt_Type2_16_1 = validated_data.get('BusInt_Type2_16_1', instance.BusInt_Type2_16_1)  
        instance.BusInt_Type2_17 = validated_data.get('BusInt_Type2_17', instance.BusInt_Type2_17)  
        instance.BusInt_Type2_18 = validated_data.get('BusInt_Type2_18', instance.BusInt_Type2_18)    
        instance.BusInt_Type2_19 = validated_data.get('BusInt_Type2_19', instance.BusInt_Type2_19)    
        instance.BusInt_Type2_19_1 = validated_data.get('BusInt_Type2_19_1', instance.BusInt_Type2_19_1)  
        instance.BusInt_Type2_20 = validated_data.get('BusInt_Type2_20', instance.BusInt_Type2_20)  
        instance.BusInt_Type2_20_1 = validated_data.get('BusInt_Type2_20_1', instance.BusInt_Type2_20_1)    
        instance.BusInt_Type2_21 = validated_data.get('BusInt_Type2_21', instance.BusInt_Type2_21)    
        instance.BusInt_Type2_21_1 = validated_data.get('BusInt_Type2_21_1', instance.BusInt_Type2_21_1) 
        instance.BusInt_Type2_22 = validated_data.get('BusInt_Type2_22', instance.BusInt_Type2_22) 
        instance.BusInt_Type2_22_1 = validated_data.get('BusInt_Type2_22_1', instance.BusInt_Type2_22_1) 
        instance.BusInt_Type2_23 = validated_data.get('BusInt_Type2_23', instance.BusInt_Type2_23) 
        instance.BusInt_Type2_23_1 = validated_data.get('BusInt_Type2_23_1', instance.BusInt_Type2_23_1) 
        instance.BusInt2_TotalPremium = validated_data.get('BusInt2_TotalPremium', instance.BusInt2_TotalPremium) 
        instance.BusInt2_Comments = validated_data.get('BusInt2_Comments', instance.BusInt2_Comments) 
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_5_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_5
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_5.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec5_AddComments = validated_data.get('Sec5_AddComments', instance.Sec5_AddComments)  
        instance.Sec5_Limit = validated_data.get('Sec5_Limit', instance.Sec5_Limit)  
        instance.Sec5_Premium = validated_data.get('Sec5_Premium', instance.Sec5_Premium)  
        instance.Sec5_ItemNumber = validated_data.get('Sec5_ItemNumber', instance.Sec5_ItemNumber)  
        instance.Sec5_PremNumber = validated_data.get('Sec5_PremNumber', instance.Sec5_PremNumber)    
        instance.Sec5_1 = validated_data.get('Sec5_1', instance.Sec5_1)    
        instance.Sec5_2 = validated_data.get('Sec5_2', instance.Sec5_2)  
        instance.Sec5_Extension_1 = validated_data.get('Sec5_Extension_1', instance.Sec5_Extension_1)  
        instance.Sec5_Extension_2 = validated_data.get('Sec5_Extension_2', instance.Sec5_Extension_2)    
        instance.Sec5_Extension_3 = validated_data.get('Sec5_Extension_3', instance.Sec5_Extension_3)    
        instance.Sec5_Extension_4 = validated_data.get('Sec5_Extension_4', instance.Sec5_Extension_4)  
        instance.Sec5_Extension_5 = validated_data.get('Sec5_Extension_5', instance.Sec5_Extension_5)  
        instance.Sec5_AnnualPremium = validated_data.get('Sec5_AnnualPremium', instance.Sec5_AnnualPremium)    
        instance.Sec5_Comments = validated_data.get('Sec5_Comments', instance.Sec5_Comments)   
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_6_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_6
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_6.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec6_AddComments = validated_data.get('Sec6_AddComments', instance.Sec6_AddComments)  
        instance.Sec6_Limit = validated_data.get('Sec6_Limit', instance.Sec6_Limit)  
        instance.Sec6_Premium = validated_data.get('Sec6_Premium', instance.Sec6_Premium)  
        instance.Sec6_ItemNumber = validated_data.get('Sec6_ItemNumber', instance.Sec6_ItemNumber)  
        instance.Sec6_PremNumber = validated_data.get('Sec6_PremNumber', instance.Sec6_PremNumber)    
        instance.Sec6_1 = validated_data.get('Sec6_1', instance.Sec6_1)    
        instance.Sec6_2 = validated_data.get('Sec6_2', instance.Sec6_2)  
        instance.Sec6_3 = validated_data.get('Sec6_3', instance.Sec6_3)  
        instance.Sec6_4 = validated_data.get('Sec6_4', instance.Sec6_4)    
        instance.Sec6_5 = validated_data.get('Sec6_5', instance.Sec6_5)    
        instance.Sec6_6 = validated_data.get('Sec6_6', instance.Sec6_6)  
        instance.Sec6_Comments = validated_data.get('Sec6_Comments', instance.Sec6_Comments)    
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_7_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_7
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_7.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec7_AddComments = validated_data.get('Sec7_AddComments', instance.Sec7_AddComments)  
        instance.Sec7_Limit = validated_data.get('Sec7_Limit', instance.Sec7_Limit)  
        instance.Sec7_Premium = validated_data.get('Sec7_Premium', instance.Sec7_Premium)  
        instance.Sec7_ItemNumber = validated_data.get('Sec7_ItemNumber', instance.Sec7_ItemNumber)  
        instance.Sec7_PremNumber = validated_data.get('Sec7_PremNumber', instance.Sec7_PremNumber)    
        instance.Sec7_1 = validated_data.get('Sec7_1', instance.Sec7_1)    
        instance.Sec7_2 = validated_data.get('Sec7_2', instance.Sec7_2)  
        instance.Sec7_3 = validated_data.get('Sec7_3', instance.Sec7_3)  
        instance.Sec7_4 = validated_data.get('Sec7_4', instance.Sec7_4)    
        instance.Sec7_5 = validated_data.get('Sec7_5', instance.Sec7_5)    
        instance.Sec7_6 = validated_data.get('Sec7_6', instance.Sec7_6)  
        instance.Sec7_7 = validated_data.get('Sec7_7', instance.Sec7_7)    
        instance.Sec7_8 = validated_data.get('Sec7_8', instance.Sec7_8)  
        instance.Sec7_9 = validated_data.get('Sec7_9', instance.Sec7_9)  
        instance.Sec7_Extension_Included1 = validated_data.get('Sec7_Extension_Included1', instance.Sec7_Extension_Included1)  
        instance.Sec7_Extension_Limit1 = validated_data.get('Sec7_Extension_Limit1', instance.Sec7_Extension_Limit1)  
        instance.Sec7_Extension_Premium1 = validated_data.get('Sec7_Extension_Premium1', instance.Sec7_Extension_Premium1)    
        instance.Sec7_Extension_Included2 = validated_data.get('Sec7_Extension_Included2', instance.Sec7_Extension_Included2)    
        instance.Sec7_Extension_Limit2 = validated_data.get('Sec7_Extension_Limit2', instance.Sec7_Extension_Limit2)  
        instance.Sec7_Extension_Premium2 = validated_data.get('Sec7_Extension_Premium2', instance.Sec7_Extension_Premium2)  
        instance.Sec7_Extension_Included3 = validated_data.get('Sec7_Extension_Included3', instance.Sec7_Extension_Included3)    
        instance.Sec7_Extension_Limit3 = validated_data.get('Sec7_Extension_Limit3', instance.Sec7_Extension_Limit3)    
        instance.Sec7_Extension_Premium3 = validated_data.get('Sec7_Extension_Premium3', instance.Sec7_Extension_Premium3)  
        instance.Sec7_AnnualPremium = validated_data.get('Sec7_AnnualPremium', instance.Sec7_AnnualPremium)    
        instance.Sec7_Comments = validated_data.get('Sec7_Comments', instance.Sec7_Comments)    
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_8_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_8
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_8.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec8_AddComments = validated_data.get('Sec8_AddComments', instance.Sec8_AddComments)  
        instance.Sec8_Limit = validated_data.get('Sec8_Limit', instance.Sec8_Limit)  
        instance.Sec8_Premium = validated_data.get('Sec8_Premium', instance.Sec8_Premium)  
        instance.Sec8_ItemNumber = validated_data.get('Sec8_ItemNumber', instance.Sec8_ItemNumber)  
        instance.Sec8_PremNumber = validated_data.get('Sec8_PremNumber', instance.Sec8_PremNumber)    
        instance.Sec8_1 = validated_data.get('Sec8_1', instance.Sec8_1)    
        instance.Sec8_2 = validated_data.get('Sec8_2', instance.Sec8_2)  
        instance.Sec8_Extension_Included1 = validated_data.get('Sec8_Extension_Included1', instance.Sec8_Extension_Included1)  
        instance.Sec8_Extension_Included2 = validated_data.get('Sec8_Extension_Included2', instance.Sec8_Extension_Included2)    
        instance.Sec8_AnnualPremium = validated_data.get('Sec8_AnnualPremium', instance.Sec8_AnnualPremium)    
        instance.Sec8_Comments = validated_data.get('Sec8_Comments', instance.Sec8_Comments)
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_9_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_9
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_9.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec9_AddComments = validated_data.get('Sec9_AddComments', instance.Sec9_AddComments)  
        instance.Sec9_Limit = validated_data.get('Sec9_Limit', instance.Sec9_Limit)  
        instance.Sec9_Premium = validated_data.get('Sec9_Premium', instance.Sec9_Premium)  
        instance.Sec9_ItemNumber = validated_data.get('Sec9_ItemNumber', instance.Sec9_ItemNumber)  
        instance.Sec9_PremNumber = validated_data.get('Sec9_PremNumber', instance.Sec9_PremNumber)  
        instance.Sec9_1 = validated_data.get('Sec9_1', instance.Sec9_1)  
        instance.Sec9_2 = validated_data.get('Sec9_2', instance.Sec9_2)  
        instance.Sec9_3 = validated_data.get('Sec9_3', instance.Sec9_3)  
        instance.Sec9_4 = validated_data.get('Sec9_4', instance.Sec9_4)  
        instance.Sec9_5 = validated_data.get('Sec9_5', instance.Sec9_5)  
        instance.Sec9_6 = validated_data.get('Sec9_6', instance.Sec9_6)  
        instance.Sec9_Extension_Included1 = validated_data.get('Sec9_Extension_Included1', instance.Sec9_Extension_Included1)  
        instance.Sec9_Extension_Limit1 = validated_data.get('Sec9_Extension_Limit1', instance.Sec9_Extension_Limit1)    
        instance.Sec9_Extension_Premium1 = validated_data.get('Sec9_Extension_Premium1', instance.Sec9_Extension_Premium1)    
        instance.Sec9_Extension_Included2 = validated_data.get('Sec9_Extension_Included2', instance.Sec9_Extension_Included2)    
        instance.Sec9_Extension_Limit2 = validated_data.get('Sec9_Extension_Limit2', instance.Sec9_Extension_Limit2)    
        instance.Sec9_Extension_Premium2 = validated_data.get('Sec9_Extension_Premium2', instance.Sec9_Extension_Premium2)    
        instance.Sec9_Extension_Included3 = validated_data.get('Sec9_Extension_Included3', instance.Sec9_Extension_Included3)    
        instance.Sec9_Extension_Limit3 = validated_data.get('Sec9_Extension_Limit3', instance.Sec9_Extension_Limit3)  
        instance.Sec9_Extension_Premium3 = validated_data.get('Sec9_Extension_Premium3', instance.Sec9_Extension_Premium3)  
        instance.Sec9_Extension_Included4 = validated_data.get('Sec9_Extension_Included4', instance.Sec9_Extension_Included4)  
        instance.Sec9_Extension_Limit4 = validated_data.get('Sec9_Extension_Limit4', instance.Sec9_Extension_Limit4)  
        instance.Sec9_Extension_Premium4 = validated_data.get('Sec9_Extension_Premium4', instance.Sec9_Extension_Premium4)  
        instance.Sec9_Extension_Included5 = validated_data.get('Sec9_Extension_Included5', instance.Sec9_Extension_Included5)  
        instance.Sec9_Extension_Limit5 = validated_data.get('Sec9_Extension_Limit5', instance.Sec9_Extension_Limit5)    
        instance.Sec9_Extension_Premium5 = validated_data.get('Sec9_Extension_Premium5', instance.Sec9_Extension_Premium5)    
        instance.Sec9_Extension_Included6 = validated_data.get('Sec9_Extension_Included6', instance.Sec9_Extension_Included6)    
        instance.Sec9_Extension_Limit6 = validated_data.get('Sec9_Extension_Limit6', instance.Sec9_Extension_Limit6)    
        instance.Sec9_Extension_Premium6 = validated_data.get('Sec9_Extension_Premium6', instance.Sec9_Extension_Premium6)    
        instance.Sec9_AnnualPremium = validated_data.get('Sec9_AnnualPremium', instance.Sec9_AnnualPremium)    
        instance.Sec9_Comments = validated_data.get('Sec9_Comments', instance.Sec9_Comments)
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_10_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_10
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_10.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec10_AddComments = validated_data.get('Sec10_AddComments', instance.Sec10_AddComments)  
        instance.Sec10_Limit = validated_data.get('Sec10_Limit', instance.Sec10_Limit)  
        instance.Sec10_Premium = validated_data.get('Sec10_Premium', instance.Sec10_Premium)  
        instance.Sec10_ItemNumber = validated_data.get('Sec10_ItemNumber', instance.Sec10_ItemNumber)  
        instance.Sec10_PremNumber = validated_data.get('Sec10_PremNumber', instance.Sec10_PremNumber)  
        instance.Sec10_1 = validated_data.get('Sec10_1', instance.Sec10_1)  
        instance.Sec10_2 = validated_data.get('Sec10_2', instance.Sec10_2)  
        instance.Sec10_3 = validated_data.get('Sec10_3', instance.Sec10_3)  
        instance.Sec10_4 = validated_data.get('Sec10_4', instance.Sec10_4)  
        instance.Sec10_5 = validated_data.get('Sec10_5', instance.Sec10_5)  
        instance.Sec10_6 = validated_data.get('Sec10_6', instance.Sec10_6)  
        instance.Sec10_7 = validated_data.get('Sec10_7', instance.Sec10_7)  
        instance.Sec10_Extension_Included1 = validated_data.get('Sec10_Extension_Included1', instance.Sec10_Extension_Included1)    
        instance.Sec10_Extension_Limit1 = validated_data.get('Sec10_Extension_Limit1', instance.Sec10_Extension_Limit1)    
        instance.Sec10_Extension_Premium1 = validated_data.get('Sec10_Extension_Premium1', instance.Sec10_Extension_Premium1)    
        instance.Sec10_Extension_Included2 = validated_data.get('Sec10_Extension_Included2', instance.Sec10_Extension_Included2)    
        instance.Sec10_Extension_Limit2 = validated_data.get('Sec10_Extension_Limit2', instance.Sec10_Extension_Limit2)    
        instance.Sec10_Extension_Premium2 = validated_data.get('Sec10_Extension_Premium2', instance.Sec10_Extension_Premium2)    
        instance.Sec10_Extension_Included3 = validated_data.get('Sec10_Extension_Included3', instance.Sec10_Extension_Included3)  
        instance.Sec10_Extension_Limit3 = validated_data.get('Sec10_Extension_Limit3', instance.Sec10_Extension_Limit3)  
        instance.Sec10_Extension_Premium3 = validated_data.get('Sec10_Extension_Premium3', instance.Sec10_Extension_Premium3)  
        instance.Sec10_Extension_Included4 = validated_data.get('Sec10_Extension_Included4', instance.Sec10_Extension_Included4)  
        instance.Sec10_Extension_Limit4 = validated_data.get('Sec10_Extension_Limit4', instance.Sec10_Extension_Limit4)  
        instance.Sec10_Extension_Premium4 = validated_data.get('Sec10_Extension_Premium4', instance.Sec10_Extension_Premium4)  
        instance.Sec10_AnnualPremium = validated_data.get('Sec10_AnnualPremium', instance.Sec10_AnnualPremium)    
        instance.Sec10_Comments = validated_data.get('Sec10_Comments', instance.Sec10_Comments)    
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_11_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_11
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_11.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec11_AddComments = validated_data.get('Sec11_AddComments', instance.Sec11_AddComments)  
        instance.Sec11_Limit = validated_data.get('Sec11_Limit', instance.Sec11_Limit)  
        instance.Sec11_Premium = validated_data.get('Sec11_Premium', instance.Sec11_Premium)  
        instance.Sec11_ItemNumber = validated_data.get('Sec11_ItemNumber', instance.Sec11_ItemNumber)  
        instance.Sec11_PremNumber = validated_data.get('Sec11_PremNumber', instance.Sec11_PremNumber)  
        instance.Sec11_1 = validated_data.get('Sec11_1', instance.Sec11_1)  
        instance.Sec11_2 = validated_data.get('Sec11_2', instance.Sec11_2)  
        instance.Sec11_3 = validated_data.get('Sec11_3', instance.Sec11_3)  
        instance.Sec11_4 = validated_data.get('Sec11_4', instance.Sec11_4)  
        instance.Sec11_5 = validated_data.get('Sec11_5', instance.Sec11_5)  
        instance.Sec11_6 = validated_data.get('Sec11_6', instance.Sec11_6)  
        instance.Sec11_7 = validated_data.get('Sec11_7', instance.Sec11_7)  
        instance.Sec11_8 = validated_data.get('Sec11_8', instance.Sec11_8)    
        instance.Sec11_9 = validated_data.get('Sec11_9', instance.Sec11_9)    
        instance.Sec11_10 = validated_data.get('Sec11_10', instance.Sec11_10)    
        instance.Sec11_AnnualPremium = validated_data.get('Sec11_AnnualPremium', instance.Sec11_AnnualPremium)    
        instance.Sec11_Comments = validated_data.get('Sec11_Comments', instance.Sec11_Comments)
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_12_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_12
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_12.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec12_AddComments = validated_data.get('Sec12_AddComments', instance.Sec12_AddComments)  
        instance.Sec12_Limit = validated_data.get('Sec12_Limit', instance.Sec12_Limit)  
        instance.Sec12_Premium = validated_data.get('Sec12_Premium', instance.Sec12_Premium)  
        instance.Sec12_ItemNumber = validated_data.get('Sec12_ItemNumber', instance.Sec12_ItemNumber)  
        instance.Sec12_PremNumber = validated_data.get('Sec12_PremNumber', instance.Sec12_PremNumber)  
        instance.Sec12_1 = validated_data.get('Sec12_1', instance.Sec12_1)  
        instance.Sec12_2 = validated_data.get('Sec12_2', instance.Sec12_2)  
        instance.Sec12_3 = validated_data.get('Sec12_3', instance.Sec12_3)  
        instance.Sec12_4 = validated_data.get('Sec12_4', instance.Sec12_4)  
        instance.Sec12_5 = validated_data.get('Sec12_5', instance.Sec12_5)  
        instance.Sec12_6 = validated_data.get('Sec12_6', instance.Sec12_6)  
        instance.Sec12_Extension_Included1 = validated_data.get('Sec12_Extension_Included1', instance.Sec12_Extension_Included1)  
        instance.Sec12_Extension_Included2 = validated_data.get('Sec12_Extension_Included2', instance.Sec12_Extension_Included2)  
        instance.Sec12_Extension_Included3 = validated_data.get('Sec12_Extension_Included3', instance.Sec12_Extension_Included3)    
        instance.Sec12_Extension_Included4 = validated_data.get('Sec12_Extension_Included4', instance.Sec12_Extension_Included4)    
        instance.Sec12_Extension_Included5 = validated_data.get('Sec12_Extension_Included5', instance.Sec12_Extension_Included5)    
        instance.Sec12_AnnualPremium = validated_data.get('Sec12_AnnualPremium', instance.Sec12_AnnualPremium)    
        instance.Sec12_Comments = validated_data.get('Sec12_Comments', instance.Sec12_Comments)
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_13_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_13
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_13.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec13_AddComments = validated_data.get('Sec13_AddComments', instance.Sec13_AddComments)  
        instance.Sec13_Limit = validated_data.get('Sec13_Limit', instance.Sec13_Limit)  
        instance.Sec13_Premium = validated_data.get('Sec13_Premium', instance.Sec13_Premium)  
        instance.Sec13_ItemNumber = validated_data.get('Sec13_ItemNumber', instance.Sec13_ItemNumber)  
        instance.Sec13_PremNumber = validated_data.get('Sec13_PremNumber', instance.Sec13_PremNumber)  
        instance.Sec13_1 = validated_data.get('Sec13_1', instance.Sec13_1)  
        instance.Sec13_2 = validated_data.get('Sec13_2', instance.Sec13_2)  
        instance.Sec13_3 = validated_data.get('Sec13_3', instance.Sec13_3)  
        instance.Sec13_4 = validated_data.get('Sec13_4', instance.Sec13_4)  
        instance.Sec13_5 = validated_data.get('Sec13_5', instance.Sec13_5)  
        instance.Sec13_6 = validated_data.get('Sec13_6', instance.Sec13_6)  
        instance.Sec13_7 = validated_data.get('Sec13_7', instance.Sec13_7)  
        instance.Sec13_8 = validated_data.get('Sec13_8', instance.Sec13_8)  
        instance.Sec13_9 = validated_data.get('Sec13_9', instance.Sec13_9)  
        instance.Sec13_10 = validated_data.get('Sec13_10', instance.Sec13_10)  
        instance.Sec13_11 = validated_data.get('Sec13_11', instance.Sec13_11)  
        instance.Sec13_12 = validated_data.get('Sec13_12', instance.Sec13_12)  
        instance.Sec13_13 = validated_data.get('Sec13_13', instance.Sec13_13)  
        instance.Sec13_14 = validated_data.get('Sec13_14', instance.Sec13_14)  
        instance.Sec13_15 = validated_data.get('Sec13_15', instance.Sec13_15)  
        instance.Sec13_16 = validated_data.get('Sec13_16', instance.Sec13_16)  
        instance.Sec13_17 = validated_data.get('Sec13_17', instance.Sec13_17)  
        instance.Sec13_18 = validated_data.get('Sec13_18', instance.Sec13_18)  
        instance.Sec13_19 = validated_data.get('Sec13_19', instance.Sec13_19)  
        instance.Sec13_20 = validated_data.get('Sec13_20', instance.Sec13_20)  
        instance.Sec13_21 = validated_data.get('Sec13_21', instance.Sec13_21)  
        instance.Sec13_22 = validated_data.get('Sec13_22', instance.Sec13_22)  
        instance.Sec13_23 = validated_data.get('Sec13_23', instance.Sec13_23)  
        instance.Sec13_24 = validated_data.get('Sec13_24', instance.Sec13_24)  
        instance.Sec13_25 = validated_data.get('Sec13_25', instance.Sec13_25)  
        instance.Sec13_26 = validated_data.get('Sec13_26', instance.Sec13_26)  
        instance.Sec13_27 = validated_data.get('Sec13_27', instance.Sec13_27)  
        instance.Sec13_28 = validated_data.get('Sec13_28', instance.Sec13_28)  
        instance.Sec13_29 = validated_data.get('Sec13_29', instance.Sec13_29)  
        instance.Sec13_30 = validated_data.get('Sec13_30', instance.Sec13_30)  
        instance.Sec13_31 = validated_data.get('Sec13_31', instance.Sec13_31)  
        instance.Sec13_32 = validated_data.get('Sec13_32', instance.Sec13_32)  
        instance.Sec13_AnnualPremium = validated_data.get('Sec13_AnnualPremium', instance.Sec13_AnnualPremium)  
        instance.Sec13_Comments = validated_data.get('Sec13_Comments', instance.Sec13_Comments)  
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_14_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_14
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_14.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec14_AddComments = validated_data.get('Sec14_AddComments', instance.Sec14_AddComments)  
        instance.Sec14_Limit = validated_data.get('Sec14_Limit', instance.Sec14_Limit)  
        instance.Sec14_Premium = validated_data.get('Sec14_Premium', instance.Sec14_Premium)  
        instance.Sec14_ItemNumber = validated_data.get('Sec14_ItemNumber', instance.Sec14_ItemNumber)  
        instance.Sec14_PremNumber = validated_data.get('Sec14_PremNumber', instance.Sec14_PremNumber)  
        instance.Sec14_1 = validated_data.get('Sec14_1', instance.Sec14_1)  
        instance.Sec14_2 = validated_data.get('Sec14_2', instance.Sec14_2)  
        instance.Sec14_3 = validated_data.get('Sec14_3', instance.Sec14_3)  
        instance.Sec14_4 = validated_data.get('Sec14_4', instance.Sec14_4)  
        instance.Sec14_5 = validated_data.get('Sec14_5', instance.Sec14_5)  
        instance.Sec14_6 = validated_data.get('Sec14_6', instance.Sec14_6)  
        instance.Sec14_Recommended1 = validated_data.get('Sec14_Recommended1', instance.Sec14_Recommended1)  
        instance.Sec14_Accepted1 = validated_data.get('Sec14_Accepted1', instance.Sec14_Accepted1)  
        instance.Sec14_CoverAmount1 = validated_data.get('Sec14_CoverAmount1', instance.Sec14_CoverAmount1)  
        instance.Sec14_Recommended2 = validated_data.get('Sec14_Recommended2', instance.Sec14_Recommended2)  
        instance.Sec14_Accepted2 = validated_data.get('Sec14_Accepted2', instance.Sec14_Accepted2)  
        instance.Sec14_CoverAmount2 = validated_data.get('Sec14_CoverAmount2', instance.Sec14_CoverAmount2)  
        instance.Sec14_Recommended3 = validated_data.get('Sec14_Recommended3', instance.Sec14_Recommended3)  
        instance.Sec14_Accepted3 = validated_data.get('Sec14_Accepted3', instance.Sec14_Accepted3)  
        instance.Sec14_CoverAmount3 = validated_data.get('Sec14_CoverAmount3', instance.Sec14_CoverAmount3)  
        instance.Sec14_Recommended4 = validated_data.get('Sec14_Recommended4', instance.Sec14_Recommended4)  
        instance.Sec14_Accepted4 = validated_data.get('Sec14_Accepted4', instance.Sec14_Accepted4)  
        instance.Sec14_CoverAmount4 = validated_data.get('Sec14_CoverAmount4', instance.Sec14_CoverAmount4)  
        instance.Sec14_Recommended5 = validated_data.get('Sec14_Recommended5', instance.Sec14_Recommended5)  
        instance.Sec14_Accepted5 = validated_data.get('Sec14_Accepted5', instance.Sec14_Accepted5)  
        instance.Sec14_CoverAmount5 = validated_data.get('Sec14_CoverAmount5', instance.Sec14_CoverAmount5)  
        instance.Sec14_Recommended6 = validated_data.get('Sec14_Recommended6', instance.Sec14_Recommended6)  
        instance.Sec14_Accepted6 = validated_data.get('Sec14_Accepted6', instance.Sec14_Accepted6)  
        instance.Sec14_CoverAmount6 = validated_data.get('Sec14_CoverAmount6', instance.Sec14_CoverAmount6)  
        instance.Sec14_Recommended7 = validated_data.get('Sec14_Recommended7', instance.Sec14_Recommended7)  
        instance.Sec14_Accepted7 = validated_data.get('Sec14_Accepted7', instance.Sec14_Accepted7)  
        instance.Sec14_CoverAmount7 = validated_data.get('Sec14_CoverAmount7', instance.Sec14_CoverAmount7)  
        instance.Sec14_Recommended8 = validated_data.get('Sec14_Recommended8', instance.Sec14_Recommended8)  
        instance.Sec14_Accepted8 = validated_data.get('Sec14_Accepted8', instance.Sec14_Accepted8)  
        instance.Sec14_CoverAmount8 = validated_data.get('Sec14_CoverAmount8', instance.Sec14_CoverAmount8)  
        instance.Sec14_Recommended9 = validated_data.get('Sec14_Recommended9', instance.Sec14_Recommended9)  
        instance.Sec14_Accepted9 = validated_data.get('Sec14_Accepted9', instance.Sec14_Accepted9)  
        instance.Sec14_CoverAmount9 = validated_data.get('Sec14_CoverAmount9', instance.Sec14_CoverAmount9)  
        instance.Sec14_Recommended10 = validated_data.get('Sec14_Recommended10', instance.Sec14_Recommended10)  
        instance.Sec14_Accepted10 = validated_data.get('Sec14_Accepted10', instance.Sec14_Accepted10)  
        instance.Sec14_CoverAmount10 = validated_data.get('Sec14_CoverAmount10', instance.Sec14_CoverAmount10)  
        instance.Sec14_Recommended11 = validated_data.get('Sec14_Recommended11', instance.Sec14_Recommended11)  
        instance.Sec14_Accepted11 = validated_data.get('Sec14_Accepted11', instance.Sec14_Accepted11)  
        instance.Sec14_CoverAmount11 = validated_data.get('Sec14_CoverAmount11', instance.Sec14_CoverAmount11)  
        instance.Sec14_Recommended12 = validated_data.get('Sec14_Recommended12', instance.Sec14_Recommended12)  
        instance.Sec14_Accepted12 = validated_data.get('Sec14_Accepted12', instance.Sec14_Accepted12)  
        instance.Sec14_CoverAmount12 = validated_data.get('Sec14_CoverAmount12', instance.Sec14_CoverAmount12)  
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_15_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_15
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_15.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec15_AddComments = validated_data.get('Sec15_AddComments', instance.Sec15_AddComments)  
        instance.Sec15_Limit = validated_data.get('Sec15_Limit', instance.Sec15_Limit)  
        instance.Sec15_Premium = validated_data.get('Sec15_Premium', instance.Sec15_Premium)  
        instance.Sec15_ItemNumber = validated_data.get('Sec15_ItemNumber', instance.Sec15_ItemNumber)  
        instance.Sec15_PremNumber = validated_data.get('Sec15_PremNumber', instance.Sec15_PremNumber)  
        instance.Sec15_1 = validated_data.get('Sec15_1', instance.Sec15_1)  
        instance.Sec15_1_1 = validated_data.get('Sec15_1_1', instance.Sec15_1_1)  
        instance.Sec15_2 = validated_data.get('Sec15_2', instance.Sec15_2)  
        instance.Sec15_2_1 = validated_data.get('Sec15_2_1', instance.Sec15_2_1)  
        instance.Sec15_3 = validated_data.get('Sec15_3', instance.Sec15_3)  
        instance.Sec15_3_1 = validated_data.get('Sec15_3_1', instance.Sec15_3_1)  
        instance.Sec15_AnnualPremium = validated_data.get('Sec15_AnnualPremium', instance.Sec15_AnnualPremium)  
        instance.Sec15_Comments = validated_data.get('Sec15_Comments', instance.Sec15_Comments)  
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_16_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_16
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_16.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec16_AddComments = validated_data.get('Sec16_AddComments', instance.Sec16_AddComments)  
        instance.Sec16_Limit = validated_data.get('Sec16_Limit', instance.Sec16_Limit)  
        instance.Sec16_Premium = validated_data.get('Sec16_Premium', instance.Sec16_Premium)  
        instance.Sec16_ItemNumber = validated_data.get('Sec16_ItemNumber', instance.Sec16_ItemNumber)  
        instance.Sec16_PremNumber = validated_data.get('Sec16_PremNumber', instance.Sec16_PremNumber)  
        instance.Sec16_1 = validated_data.get('Sec16_1', instance.Sec16_1)  
        instance.Sec16_2 = validated_data.get('Sec16_2', instance.Sec16_2)  
        instance.Sec16_3 = validated_data.get('Sec16_3', instance.Sec16_3)  
        instance.Sec16_4 = validated_data.get('Sec16_4', instance.Sec16_4)  
        instance.Sec16_5 = validated_data.get('Sec16_5', instance.Sec16_5)  
        instance.Sec16_6 = validated_data.get('Sec16_6', instance.Sec16_6)  
        instance.Sec16_7 = validated_data.get('Sec16_7', instance.Sec16_7)  
        instance.Sec16_8 = validated_data.get('Sec16_8', instance.Sec16_8)  
        instance.Sec16_9 = validated_data.get('Sec16_9', instance.Sec16_9)  
        instance.Sec16_10 = validated_data.get('Sec16_10', instance.Sec16_10)  
        instance.Sec16_Extension1 = validated_data.get('Sec16_Extension1', instance.Sec16_Extension1)  
        instance.Sec16_Extension2 = validated_data.get('Sec16_Extension2', instance.Sec16_Extension2)  
        instance.Sec16_Extension3 = validated_data.get('Sec16_Extension3', instance.Sec16_Extension3)  
        instance.Sec16_Extension4 = validated_data.get('Sec16_Extension4', instance.Sec16_Extension4)  
        instance.Sec16_Extension5 = validated_data.get('Sec16_Extension5', instance.Sec16_Extension5)  
        instance.Sec16_Extension6 = validated_data.get('Sec16_Extension6', instance.Sec16_Extension6)  
        instance.Sec16_Extension7 = validated_data.get('Sec16_Extension7', instance.Sec16_Extension7)  
        instance.Sec16_Extension8 = validated_data.get('Sec16_Extension8', instance.Sec16_Extension8)  
        instance.Sec16_Extension9 = validated_data.get('Sec16_Extension9', instance.Sec16_Extension9)  
        instance.Sec16_AnnualPremium = validated_data.get('Sec16_AnnualPremium', instance.Sec16_AnnualPremium)  
        instance.Sec16_Comments = validated_data.get('Sec16_Comments', instance.Sec16_Comments)  
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_17_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_17
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_17.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec17_AddComments = validated_data.get('Sec17_AddComments', instance.Sec17_AddComments)  
        instance.Sec17_Limit = validated_data.get('Sec17_Limit', instance.Sec17_Limit)  
        instance.Sec17_Premium = validated_data.get('Sec17_Premium', instance.Sec17_Premium)  
        instance.Sec17_ItemNumber = validated_data.get('Sec17_ItemNumber', instance.Sec17_ItemNumber)  
        instance.Sec17_PremNumber = validated_data.get('Sec17_PremNumber', instance.Sec17_PremNumber)  
        instance.Sec17_1 = validated_data.get('Sec17_1', instance.Sec17_1)  
        instance.Sec17_2 = validated_data.get('Sec17_2', instance.Sec17_2)  
        instance.Sec17_3 = validated_data.get('Sec17_3', instance.Sec17_3)  
        instance.Sec17_4 = validated_data.get('Sec17_4', instance.Sec17_4)  
        instance.Sec17_5 = validated_data.get('Sec17_5', instance.Sec17_5)  
        instance.Sec17_6 = validated_data.get('Sec17_6', instance.Sec17_6)  
        instance.Sec17_7 = validated_data.get('Sec17_7', instance.Sec17_7)  
        instance.Sec17_8 = validated_data.get('Sec17_8', instance.Sec17_8)  
        instance.Sec17_9 = validated_data.get('Sec17_9', instance.Sec17_9)  
        instance.Sec17_10 = validated_data.get('Sec17_10', instance.Sec17_10)  
        instance.Sec17_Extension1 = validated_data.get('Sec17_Extension1', instance.Sec17_Extension1)  
        instance.Sec17_ExtensionLimit1 = validated_data.get('Sec17_ExtensionLimit1', instance.Sec17_ExtensionLimit1)  
        instance.Sec17_ExtensionPremium1 = validated_data.get('Sec17_ExtensionPremium1', instance.Sec17_ExtensionPremium1)  
        instance.Sec17_Extension2 = validated_data.get('Sec17_Extension2', instance.Sec17_Extension2)  
        instance.Sec17_ExtensionLimit2 = validated_data.get('Sec17_ExtensionLimit2', instance.Sec17_ExtensionLimit2)  
        instance.Sec17_ExtensionPremium2 = validated_data.get('Sec17_ExtensionPremium2', instance.Sec17_ExtensionPremium2)  
        instance.Sec17_Extension3 = validated_data.get('Sec17_Extension3', instance.Sec17_Extension3)  
        instance.Sec17_ExtensionLimit3 = validated_data.get('Sec17_ExtensionLimit3', instance.Sec17_ExtensionLimit3)  
        instance.Sec17_ExtensionPremium3 = validated_data.get('Sec17_ExtensionPremium3', instance.Sec17_ExtensionPremium3)  
        instance.Sec17_Extension4 = validated_data.get('Sec17_Extension4', instance.Sec17_Extension4)  
        instance.Sec17_ExtensionLimit4 = validated_data.get('Sec17_ExtensionLimit4', instance.Sec17_ExtensionLimit4)  
        instance.Sec17_ExtensionPremium4 = validated_data.get('Sec17_ExtensionPremium4', instance.Sec17_ExtensionPremium4)  
        instance.Sec17_Extension5 = validated_data.get('Sec17_Extension5', instance.Sec17_Extension5)  
        instance.Sec17_ExtensionLimit5 = validated_data.get('Sec17_ExtensionLimit5', instance.Sec17_ExtensionLimit5)  
        instance.Sec17_ExtensionPremium5 = validated_data.get('Sec17_ExtensionPremium5', instance.Sec17_ExtensionPremium5)  
        instance.Sec17_Extension6 = validated_data.get('Sec17_Extension6', instance.Sec17_Extension6)  
        instance.Sec17_ExtensionLimit6 = validated_data.get('Sec17_ExtensionLimit6', instance.Sec17_ExtensionLimit6)  
        instance.Sec17_ExtensionPremium6 = validated_data.get('Sec17_ExtensionPremium6', instance.Sec17_ExtensionPremium6)  
        instance.Sec17_Extension7 = validated_data.get('Sec17_Extension7', instance.Sec17_Extension7)  
        instance.Sec17_ExtensionLimit7 = validated_data.get('Sec17_ExtensionLimit7', instance.Sec17_ExtensionLimit7)  
        instance.Sec17_ExtensionPremium7 = validated_data.get('Sec17_ExtensionPremium7', instance.Sec17_ExtensionPremium7)  
        instance.Sec17_Extension8 = validated_data.get('Sec17_Extension8', instance.Sec17_Extension8)  
        instance.Sec17_ExtensionLimit8 = validated_data.get('Sec17_ExtensionLimit8', instance.Sec17_ExtensionLimit8)  
        instance.Sec17_ExtensionPremium8 = validated_data.get('Sec17_ExtensionPremium8', instance.Sec17_ExtensionPremium8)  
        instance.Sec17_Extension9 = validated_data.get('Sec17_Extension9', instance.Sec17_Extension9)  
        instance.Sec17_ExtensionLimit9 = validated_data.get('Sec17_ExtensionLimit9', instance.Sec17_ExtensionLimit9)  
        instance.Sec17_ExtensionPremium9 = validated_data.get('Sec17_ExtensionPremium9', instance.Sec17_ExtensionPremium9)  
        instance.Sec17_AnnualPremium = validated_data.get('Sec17_AnnualPremium', instance.Sec17_AnnualPremium)  
        instance.Sec17_Comments = validated_data.get('Sec17_Comments', instance.Sec17_Comments)  
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_18_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_18
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_18.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec18_AddComments = validated_data.get('Sec18_AddComments', instance.Sec18_AddComments)  
        instance.Sec18_Limit = validated_data.get('Sec18_Limit', instance.Sec18_Limit)  
        instance.Sec18_Premium = validated_data.get('Sec18_Premium', instance.Sec18_Premium)  
        instance.Sec18_ItemNumber = validated_data.get('Sec18_ItemNumber', instance.Sec18_ItemNumber)  
        instance.Sec18_PremNumber = validated_data.get('Sec18_PremNumber', instance.Sec18_PremNumber)  
        instance.Sec18_1 = validated_data.get('Sec18_1', instance.Sec18_1)  
        instance.Sec18_2 = validated_data.get('Sec18_2', instance.Sec18_2)  
        instance.Sec18_3 = validated_data.get('Sec18_3', instance.Sec18_3)  
        instance.Sec18_4 = validated_data.get('Sec18_4', instance.Sec18_4)  
        instance.Sec18_5 = validated_data.get('Sec18_5', instance.Sec18_5)  
        instance.Sec18_6 = validated_data.get('Sec18_6', instance.Sec18_6)  
        instance.Sec18_7 = validated_data.get('Sec18_7', instance.Sec18_7)  
        instance.Sec18_8 = validated_data.get('Sec18_8', instance.Sec18_8)  
        instance.Sec18_9 = validated_data.get('Sec18_9', instance.Sec18_9)  
        instance.Sec18_10 = validated_data.get('Sec18_10', instance.Sec18_10)  
        instance.Sec18_11 = validated_data.get('Sec18_11', instance.Sec18_11)  
        instance.Sec18_12 = validated_data.get('Sec18_12', instance.Sec18_12)  
        instance.Sec18_13 = validated_data.get('Sec18_13', instance.Sec18_13)  
        instance.Sec18_14 = validated_data.get('Sec18_14', instance.Sec18_14)  
        instance.Sec18_15 = validated_data.get('Sec18_15', instance.Sec18_15)  
        instance.Sec18_16 = validated_data.get('Sec18_16', instance.Sec18_16)  
        instance.Sec18_17 = validated_data.get('Sec18_17', instance.Sec18_17)  
        instance.Sec18_18 = validated_data.get('Sec18_18', instance.Sec18_18)  
        instance.Sec18_19 = validated_data.get('Sec18_19', instance.Sec18_19)  
        instance.Sec18_20 = validated_data.get('Sec18_20', instance.Sec18_20)  
        instance.Sec18_21 = validated_data.get('Sec18_21', instance.Sec18_21)  
        instance.Sec18_22 = validated_data.get('Sec18_22', instance.Sec18_22)  
        instance.Sec18_23 = validated_data.get('Sec18_23', instance.Sec18_23)  
        instance.Sec18_24 = validated_data.get('Sec18_24', instance.Sec18_24)  
        instance.Sec18_25 = validated_data.get('Sec18_25', instance.Sec18_25)  
        instance.Sec18_26 = validated_data.get('Sec18_26', instance.Sec18_26)  
        instance.Sec18_27 = validated_data.get('Sec18_27', instance.Sec18_27)  
        instance.Sec18_27 = validated_data.get('Sec18_27', instance.Sec18_27)  
        instance.Sec18_FaP1 = validated_data.get('Sec18_FaP1', instance.Sec18_FaP1)  
        instance.Sec18_FaP1_1 = validated_data.get('Sec18_FaP1_1', instance.Sec18_FaP1_1)  
        instance.Sec18_FaP1_2 = validated_data.get('Sec18_FaP1_2', instance.Sec18_FaP1_2)  
        instance.Sec18_FaP2 = validated_data.get('Sec18_FaP2', instance.Sec18_FaP2)  
        instance.Sec18_FaP2_1 = validated_data.get('Sec18_FaP2_1', instance.Sec18_FaP2_1)  
        instance.Sec18_FaP2_2 = validated_data.get('Sec18_FaP2_2', instance.Sec18_FaP2_2)  
        instance.Sec18_FaP3 = validated_data.get('Sec18_FaP3', instance.Sec18_FaP3)  
        instance.Sec18_FaP3_1 = validated_data.get('Sec18_FaP3_1', instance.Sec18_FaP3_1)  
        instance.Sec18_FaP3_2 = validated_data.get('Sec18_FaP3_2', instance.Sec18_FaP3_2)  
        instance.Sec18_FaP4 = validated_data.get('Sec18_FaP4', instance.Sec18_FaP4)  
        instance.Sec18_FaP4_1 = validated_data.get('Sec18_FaP4_1', instance.Sec18_FaP4_1)  
        instance.Sec18_FaP4_2 = validated_data.get('Sec18_FaP4_2', instance.Sec18_FaP4_2)  
        instance.Sec18_FaP5 = validated_data.get('Sec18_FaP5', instance.Sec18_FaP5)  
        instance.Sec18_FaP5_1 = validated_data.get('Sec18_FaP5_1', instance.Sec18_FaP5_1)  
        instance.Sec18_FaP5_2 = validated_data.get('Sec18_FaP5_2', instance.Sec18_FaP5_2)  
        instance.Sec18_FaP6 = validated_data.get('Sec18_FaP6', instance.Sec18_FaP6)  
        instance.Sec18_FaP6_1 = validated_data.get('Sec18_FaP6_1', instance.Sec18_FaP6_1)  
        instance.Sec18_FaP6_2 = validated_data.get('Sec18_FaP6_2', instance.Sec18_FaP6_2)  
        instance.Sec18_Extension1 = validated_data.get('Sec18_Extension1', instance.Sec18_Extension1)  
        instance.Sec18_Extension1_1 = validated_data.get('Sec18_Extension1_1', instance.Sec18_Extension1_1)  
        instance.Sec18_Extension1_2 = validated_data.get('Sec18_Extension1_2', instance.Sec18_Extension1_2)  
        instance.Sec18_Extension2 = validated_data.get('Sec18_Extension2', instance.Sec18_Extension2)  
        instance.Sec18_Extension2_1 = validated_data.get('Sec18_Extension2_1', instance.Sec18_Extension2_1)  
        instance.Sec18_Extension3 = validated_data.get('Sec18_Extension3', instance.Sec18_Extension3)  
        instance.Sec18_Extension3_1 = validated_data.get('Sec18_Extension3_1', instance.Sec18_Extension3_1)  
        instance.Sec18_Extension4 = validated_data.get('Sec18_Extension4', instance.Sec18_Extension4)  
        instance.Sec18_Extension4_1 = validated_data.get('Sec18_Extension4_1', instance.Sec18_Extension4_1)  
        instance.Sec18_Extension5 = validated_data.get('Sec18_Extension5', instance.Sec18_Extension5)  
        instance.Sec18_Extension5_1 = validated_data.get('Sec18_Extension5_1', instance.Sec18_Extension5_1)  
        instance.Sec18_Extension6 = validated_data.get('Sec18_Extension6', instance.Sec18_Extension6)  
        instance.Sec18_Extension6_1 = validated_data.get('Sec18_Extension6_1', instance.Sec18_Extension6_1)  
        instance.Sec18_Comments = validated_data.get('Sec18_Comments', instance.Sec18_Comments)  
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_19_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_19
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_19.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec19_AddComments = validated_data.get('Sec19_AddComments', instance.Sec19_AddComments)  
        instance.Sec19_Limit = validated_data.get('Sec19_Limit', instance.Sec19_Limit)  
        instance.Sec19_Premium = validated_data.get('Sec19_Premium', instance.Sec19_Premium)  
        instance.Sec19_ItemNumber = validated_data.get('Sec19_ItemNumber', instance.Sec19_ItemNumber)  
        instance.Sec19_PremNumber = validated_data.get('Sec19_PremNumber', instance.Sec19_PremNumber)  
        instance.Sec19_Part1_1 = validated_data.get('Sec19_Part1_1', instance.Sec19_Part1_1)  
        instance.Sec19_Part1_2 = validated_data.get('Sec19_Part1_2', instance.Sec19_Part1_2)  
        instance.Sec19_Part1_3 = validated_data.get('Sec19_Part1_3', instance.Sec19_Part1_3)  
        instance.Sec19_Part1_4 = validated_data.get('Sec19_Part1_4', instance.Sec19_Part1_4)  
        instance.Sec19_Part1_5 = validated_data.get('Sec19_Part1_5', instance.Sec19_Part1_5)  
        instance.Sec19_Part1_6 = validated_data.get('Sec19_Part1_6', instance.Sec19_Part1_6)  
        instance.Sec19_Part1_7 = validated_data.get('Sec19_Part1_7', instance.Sec19_Part1_7)  
        instance.Sec19_Part1_8 = validated_data.get('Sec19_Part1_8', instance.Sec19_Part1_8)  
        instance.Sec19_Part1_9 = validated_data.get('Sec19_Part1_9', instance.Sec19_Part1_9)  
        instance.Sec19_Part2_1 = validated_data.get('Sec19_Part2_1', instance.Sec19_Part2_1)  
        instance.Sec19_Part2_2 = validated_data.get('Sec19_Part2_2', instance.Sec19_Part2_2)  
        instance.Sec19_Part2_3 = validated_data.get('Sec19_Part2_3', instance.Sec19_Part2_3)  
        instance.Sec19_Part2_4 = validated_data.get('Sec19_Part2_4', instance.Sec19_Part2_4)  
        instance.Sec19_Part2_5 = validated_data.get('Sec19_Part2_5', instance.Sec19_Part2_5)  
        instance.Sec19_Extension1 = validated_data.get('Sec19_Extension1', instance.Sec19_Extension1)  
        instance.Sec19_Extension_Premium1 = validated_data.get('Sec19_Extension_Premium1', instance.Sec19_Extension_Premium1)  
        instance.Sec19_Extension2 = validated_data.get('Sec19_Extension2', instance.Sec19_Extension2)  
        instance.Sec19_Extension_Premium2 = validated_data.get('Sec19_Extension_Premium2', instance.Sec19_Extension_Premium2)  
        instance.Sec19_RoD_1 = validated_data.get('Sec19_RoD_1', instance.Sec19_RoD_1)  
        instance.Sec19_RoD_2 = validated_data.get('Sec19_RoD_2', instance.Sec19_RoD_2)  
        instance.Sec19_RoD_3 = validated_data.get('Sec19_RoD_3', instance.Sec19_RoD_3)  
        instance.Sec19_RoD_4 = validated_data.get('Sec19_RoD_4', instance.Sec19_RoD_4)  
        instance.Sec19_RoD_5 = validated_data.get('Sec19_RoD_5', instance.Sec19_RoD_5)  
        instance.Sec19_AnnualPremium = validated_data.get('Sec19_AnnualPremium', instance.Sec19_AnnualPremium)  
        instance.Sec19_Comments = validated_data.get('Sec19_Comments', instance.Sec19_Comments)  
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_20_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_20
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_20.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec20_AddComments = validated_data.get('Sec20_AddComments', instance.Sec20_AddComments)  
        instance.Sec20_Limit = validated_data.get('Sec20_Limit', instance.Sec20_Limit)  
        instance.Sec20_Premium = validated_data.get('Sec20_Premium', instance.Sec20_Premium)  
        instance.Sec20_ItemNumber = validated_data.get('Sec20_ItemNumber', instance.Sec20_ItemNumber)  
        instance.Sec20_PremNumber = validated_data.get('Sec20_PremNumber', instance.Sec20_PremNumber)  
        instance.Sec20_1 = validated_data.get('Sec20_1', instance.Sec20_1)  
        instance.Sec20_2 = validated_data.get('Sec20_2', instance.Sec20_2)  
        instance.Sec20_3 = validated_data.get('Sec20_3', instance.Sec20_3)  
        instance.Sec20_4 = validated_data.get('Sec20_4', instance.Sec20_4)  
        instance.Sec20_5 = validated_data.get('Sec20_5', instance.Sec20_5)  
        instance.Sec20_6 = validated_data.get('Sec20_6', instance.Sec20_6)  
        instance.Sec20_Extension1 = validated_data.get('Sec20_Extension1', instance.Sec20_Extension1)  
        instance.Sec20_Extension_Premium1 = validated_data.get('Sec20_Extension_Premium1', instance.Sec20_Extension_Premium1)  
        instance.Sec20_Extension2 = validated_data.get('Sec20_Extension2', instance.Sec20_Extension2)  
        instance.Sec20_Extension_Premium2 = validated_data.get('Sec20_Extension_Premium2', instance.Sec20_Extension_Premium2)  
        instance.Sec20_AnnualPremium = validated_data.get('Sec20_AnnualPremium', instance.Sec20_AnnualPremium)  
        instance.Sec20_Comments = validated_data.get('Sec20_Comments', instance.Sec20_Comments)  
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIC_Sec_21_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIC_Sec_21
        fields = '__all__'
    

    def create(self, validated_data):
        return STIC_Sec_21.objects.create(**validated_data)

    def update(self, instance, validated_data):
        
        instance.Sec21_AddComments = validated_data.get('Sec21_AddComments', instance.Sec21_AddComments)  
        instance.Sec21_Limit = validated_data.get('Sec21_Limit', instance.Sec21_Limit)  
        instance.Sec21_Premium = validated_data.get('Sec21_Premium', instance.Sec21_Premium)  
        instance.Sec21_ItemNumber = validated_data.get('Sec21_ItemNumber', instance.Sec21_ItemNumber)  
        instance.Sec21_PremNumber = validated_data.get('Sec21_PremNumber', instance.Sec21_PremNumber)  
        instance.Sec21_1 = validated_data.get('Sec21_1', instance.Sec21_1)  
        instance.Sec21_2 = validated_data.get('Sec21_2', instance.Sec21_2)  
        instance.Sec21_3 = validated_data.get('Sec21_3', instance.Sec21_3)  
        instance.Sec21_4 = validated_data.get('Sec21_4', instance.Sec21_4)  
        instance.Sec21_5 = validated_data.get('Sec21_5', instance.Sec21_5)  
        instance.Sec21_6 = validated_data.get('Sec21_6', instance.Sec21_6)  
        instance.Sec21_Extension1 = validated_data.get('Sec21_Extension1', instance.Sec21_Extension1)  
        instance.Sec21_Extension_Premium1 = validated_data.get('Sec21_Extension_Premium1', instance.Sec21_Extension_Premium1)  
        instance.Sec21_Extension2 = validated_data.get('Sec21_Extension2', instance.Sec21_Extension2)  
        instance.Sec21_Extension_Premium2 = validated_data.get('Sec21_Extension_Premium2', instance.Sec21_Extension_Premium2)  
        instance.Sec21_AnnualPremium = validated_data.get('Sec21_AnnualPremium', instance.Sec21_AnnualPremium)  
        instance.Sec21_Comments = validated_data.get('Sec21_Comments', instance.Sec21_Comments)  
        
        instance.updated_at = datetime.now(timezone.utc)
        instance.save()
        return instance

class STIP_Sec_HC_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIP_Sec_HC
        fields = '__all__'

    def create(self, validated_data):
        return STIP_Sec_HC.objects.create(**validated_data)

class STIP_Sec_Build_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIP_Sec_Build
        fields = '__all__'

    def create(self, validated_data):
        return STIP_Sec_Build.objects.create(**validated_data)

class STIP_Sec_WaterC_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIP_Sec_WaterC
        fields = '__all__'

    def create(self, validated_data):
        return STIP_Sec_WaterC.objects.create(**validated_data)

class STIP_Sec_Vehicle_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIP_Sec_Vehicle
        fields = '__all__'

    def create(self, validated_data):
        return STIP_Sec_Vehicle.objects.create(**validated_data)

class STIP_Sec_PersonalLL_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIP_Sec_PersonalLL
        fields = '__all__'

    def create(self, validated_data):
        return STIP_Sec_PersonalLL.objects.create(**validated_data)

class STIP_Sec_LegalA_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIP_Sec_LegalA
        fields = '__all__'

    def create(self, validated_data):
        return STIP_Sec_LegalA.objects.create(**validated_data)

class STIP_Sec_Trailer_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIP_Sec_Trailer
        fields = '__all__'

    def create(self, validated_data):
        return STIP_Sec_Trailer.objects.create(**validated_data)

class STIP_Sec_MotorC_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIP_Sec_MotorC
        fields = '__all__'

    def create(self, validated_data):
        return STIP_Sec_MotorC.objects.create(**validated_data)

class STIP_Sec_AddProp_Serializer(serializers.ModelSerializer):
    class Meta():
        model = STIP_Sec_AddProp
        fields = '__all__'

    def create(self, validated_data):
        return STIP_Sec_AddProp.objects.create(**validated_data)