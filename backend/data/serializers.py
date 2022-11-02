
from datetime import datetime, timezone
from rest_framework import serializers
from .models import AssuranceInvestment, AssuranceRisk, EmployeeBenefits, InvestmentPlanning, RiskPlanning, UserAccount, Form, Fiduciary
from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = {'id', 'email', 'name', 'password', 'is_staff', 'is_superuser'}

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

    # def update(self, instance, validated_data):
    #     instance.advisor_id = validated_data.get('advisor_id', instance.advisor_id)
    #     # instance.form_type = validated_data.get('form_type', instance.form_type)
    #     instance.client_name = validated_data.get('client_name', instance.client_name)
    #     instance.client_id = validated_data.get('client_id', instance.client_id)
    #     instance.client_address = validated_data.get('client_address', instance.client_address)
    #     instance.client_email = validated_data.get('client_email', instance.client_email)
    #     # client_financial_advisor = advisor_id
    #     instance.client_date_of_birth = validated_data.get('client_date_of_birth', instance.client_date_of_birth)
    #     instance.client_letter_of_introduction = validated_data.get('client_letter_of_introduction', instance.client_letter_of_introduction)
    #     instance.client_letter_of_introduction_reason = validated_data.get('client_letter_of_introduction_reason', instance.client_letter_of_introduction_reason)
    #     instance.client_fica = validated_data.get('client_fica', instance.client_fica)
    #     instance.client_fica_reason = validated_data.get('client_fica_reason', instance.client_fica_reason)
    #     instance.client_background_info = validated_data.get('client_background_info', instance.client_background_info)
        

    #     instance.status = validated_data.get('status', instance.status)
    #     instance.save()
    #     return instance

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

        instance.IP_ProductTaken = validated_data.get('IP_ProductTaken', instance.IP_ProductTaken)    
        instance.IP_ProductProvider = validated_data.get('IP_ProductProvider', instance.IP_ProductProvider)    
        instance.IP_PolicyNumber = validated_data.get('IP_PolicyNumber', instance.IP_PolicyNumber)    
        instance.IP_ProductName = validated_data.get('IP_ProductName', instance.IP_ProductName)    
        instance.IP_ProductPremium = validated_data.get('IP_ProductPremium', instance.IP_ProductPremium)    
        instance.IP_ProductPremiumFrequency = validated_data.get('IP_ProductPremiumFrequency', instance.IP_ProductPremiumFrequency)   
        instance.IP_ProductEscalation = validated_data.get('IP_ProductEscalation', instance.IP_ProductEscalation)    
        instance.IP_ProductEAC = validated_data.get('IP_ProductEAC', instance.IP_ProductEAC)    
        instance.IP_ProductContractingParty = validated_data.get('IP_ProductContractingParty', instance.IP_ProductContractingParty)    
        instance.IP_ProductLivesAssured = validated_data.get('IP_ProductLivesAssured', instance.IP_ProductLivesAssured)    
        instance.IP_ProductPremiumLayer = validated_data.get('IP_ProductPremiumLayer', instance.IP_ProductPremiumLayer)    
        instance.IP_ProductBeneficiary = validated_data.get('IP_ProductBeneficiary', instance.IP_ProductBeneficiary)    
        instance.IP_Product_IniC = validated_data.get('IP_Product_IniC', instance.IP_Product_IniC)    
        instance.IP_Product_IniC_Percentage = validated_data.get('IP_Product_IniC_Percentage', instance.IP_Product_IniC_Percentage)    
        instance.IP_Product_OnC = validated_data.get('IP_Product_OnC', instance.IP_Product_OnC)    
        instance.IP_Product_OnC_Percentage = validated_data.get('IP_Product_OnC_Percentage', instance.IP_Product_OnC_Percentage)    

        instance.IP_SFPSolutionFunds = validated_data.get('IP_SFPSolutionFunds', instance.IP_SFPSolutionFunds)
        instance.IP_SFPSolutionFundsDetails = validated_data.get('IP_SFPSolutionFundsDetails', instance.IP_SFPSolutionFundsDetails)

        instance.IP_ItP = validated_data.get('IP_ItP', instance.IP_ItP)
        instance.IP_ItP_Fund = validated_data.get('IP_ItP_Fund', instance.IP_ItP_Fund)
        instance.IP_ItP_FundPercentage = validated_data.get('IP_ItP_FundPercentage', instance.IP_ItP_FundPercentage)
        instance.IP_ItP_FundProvided = validated_data.get('IP_ItP_FundProvided', instance.IP_ItP_FundProvided)
        instance.IP_ItP_FundDiscussed = validated_data.get('IP_ItP_FundDiscussed', instance.IP_ItP_FundDiscussed)
        
        instance.IP_ItP_Fund1 = validated_data.get('IP_ItP_Fund1', instance.IP_ItP_Fund1)
        instance.IP_ItP_FundPercentage1 = validated_data.get('IP_ItP_FundPercentage1', instance.IP_ItP_FundPercentage1)
        instance.IP_ItP_FundProvided1 = validated_data.get('IP_ItP_FundProvided1', instance.IP_ItP_FundProvided1)
        instance.IP_ItP_FundDiscussed1 = validated_data.get('IP_ItP_FundDiscussed1', instance.IP_ItP_FundDiscussed1)
        
        instance.IP_ItP_Fund2 = validated_data.get('IP_ItP_Fund2', instance.IP_ItP_Fund2)
        instance.IP_ItP_FundPercentage2 = validated_data.get('IP_ItP_FundPercentage2', instance.IP_ItP_FundPercentage2)
        instance.IP_ItP_FundProvided2 = validated_data.get('IP_ItP_FundProvided2', instance.IP_ItP_FundProvided2)
        instance.IP_ItP_FundDiscussed2 = validated_data.get('IP_ItP_FundDiscussed2', instance.IP_ItP_FundDiscussed2)
        
        instance.IP_ItP_Fund3 = validated_data.get('IP_ItP_Fund3', instance.IP_ItP_Fund3)
        instance.IP_ItP_FundPercentage3 = validated_data.get('IP_ItP_FundPercentage3', instance.IP_ItP_FundPercentage3)
        instance.IP_ItP_FundProvided3 = validated_data.get('IP_ItP_FundProvided3', instance.IP_ItP_FundProvided3)
        instance.IP_ItP_FundDiscussed3 = validated_data.get('IP_ItP_FundDiscussed3', instance.IP_ItP_FundDiscussed3)
        
        instance.IP_ItP_Fund4 = validated_data.get('IP_ItP_Fund4', instance.IP_ItP_Fund4)
        instance.IP_ItP_FundPercentage4 = validated_data.get('IP_ItP_FundPercentage4', instance.IP_ItP_FundPercentage4)
        instance.IP_ItP_FundProvided4 = validated_data.get('IP_ItP_FundProvided4', instance.IP_ItP_FundProvided4)
        instance.IP_ItP_FundDiscussed4 = validated_data.get('IP_ItP_FundDiscussed4', instance.IP_ItP_FundDiscussed4)
        
        instance.IP_ItP_Fund5 = validated_data.get('IP_ItP_Fund5', instance.IP_ItP_Fund5)
        instance.IP_ItP_FundPercentage5 = validated_data.get('IP_ItP_FundPercentage5', instance.IP_ItP_FundPercentage5)
        instance.IP_ItP_FundProvided5 = validated_data.get('IP_ItP_FundProvided5', instance.IP_ItP_FundProvided5)
        instance.IP_ItP_FundDiscussed5 = validated_data.get('IP_ItP_FundDiscussed5', instance.IP_ItP_FundDiscussed5)
        
        instance.IP_ItP_Fund6 = validated_data.get('IP_ItP_Fund6', instance.IP_ItP_Fund6)
        instance.IP_ItP_FundPercentage6 = validated_data.get('IP_ItP_FundPercentage6', instance.IP_ItP_FundPercentage6)
        instance.IP_ItP_FundProvided6 = validated_data.get('IP_ItP_FundProvided6', instance.IP_ItP_FundProvided6)
        instance.IP_ItP_FundDiscussed6 = validated_data.get('IP_ItP_FundDiscussed6', instance.IP_ItP_FundDiscussed6)
        
        instance.IP_ItP_Fund7 = validated_data.get('IP_ItP_Fund7', instance.IP_ItP_Fund7)
        instance.IP_ItP_FundPercentage7 = validated_data.get('IP_ItP_FundPercentage7', instance.IP_ItP_FundPercentage7)
        instance.IP_ItP_FundProvided7 = validated_data.get('IP_ItP_FundProvided7', instance.IP_ItP_FundProvided7)
        instance.IP_ItP_FundDiscussed7 = validated_data.get('IP_ItP_FundDiscussed7', instance.IP_ItP_FundDiscussed7)
            
        instance.IP_ItP_FundsReasons = validated_data.get('IP_ItP_FundsReasons', instance.IP_ItP_FundsReasons)

        instance.IP_ItP_FundsMaterialAspects = validated_data.get('IP_ItP_FundsMaterialAspects', instance.IP_ItP_FundsMaterialAspects)
        
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

        instance.RP_DiC_OtherTotalNeed1 = validated_data.get('RP_DiC_OtherTotalNeed1', instance.RP_DiC_OtherTotalNeed1)
        instance.RP_DiC_OtherExistingProvisions1 = validated_data.get('RP_DiC_OtherExistingProvisions1', instance.RP_DiC_OtherExistingProvisions1)
        instance.RP_DiC_OtherExistingShortfallSurplus1 = validated_data.get('RP_DiC_OtherExistingShortfallSurplus1', instance.RP_DiC_OtherExistingShortfallSurplus1)
        instance.RP_DiC_OtherInvestments1 = validated_data.get('RP_DiC_OtherInvestments1', instance.RP_DiC_OtherInvestments1) 

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

        instance.RP_DrC_OtherTotalNeed1 = validated_data.get('RP_DrC_OtherTotalNeed1', instance.RP_DrC_OtherTotalNeed1)
        instance.RP_DrC_OtherExistingProvisions1 = validated_data.get('RP_DrC_OtherExistingProvisions1', instance.RP_DrC_OtherExistingProvisions1)
        instance.RP_DrC_OtherExistingShortfallSurplus1 = validated_data.get('RP_DrC_OtherExistingShortfallSurplus1', instance.RP_DrC_OtherExistingShortfallSurplus1)
        instance.RP_DrC_OtherInvestments1 = validated_data.get('RP_DrC_OtherInvestments1', instance.RP_DrC_OtherInvestments1) 

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

        instance.RP_Product_Taken = validated_data.get('RP_Product_Taken', instance.RP_Product_Taken)    
        instance.RP_Product_Provider = validated_data.get('RP_Product_Provider', instance.RP_Product_Provider)
        instance.RP_Policy_Number = validated_data.get('RP_Policy_Number', instance.RP_Policy_Number)
        instance.RP_Product_Name = validated_data.get('RP_Product_Name', instance.RP_Product_Name)
        instance.RP_Product_Premium = validated_data.get('RP_Product_Premium', instance.RP_Product_Premium)
        instance.RP_Product_PremiumFrequency = validated_data.get('RP_Product_PremiumFrequency', instance.RP_Product_PremiumFrequency) 
        instance.RP_Product_Pattern = validated_data.get('RP_Product_Pattern', instance.RP_Product_Pattern)
        instance.RP_Product_Escalation = validated_data.get('RP_Product_Escalation', instance.RP_Product_Escalation)
        instance.RP_Product_ContractingParty = validated_data.get('RP_Product_ContractingParty', instance.RP_Product_ContractingParty)
        instance.RP_Product_LivesAssured = validated_data.get('RP_Product_LivesAssured', instance.RP_Product_LivesAssured)
        instance.RP_Product_Beneficiary = validated_data.get('RP_Product_Beneficiary', instance.RP_Product_Beneficiary)
        instance.RP_Product_PremiumPayer = validated_data.get('RP_Product_PremiumPayer', instance.RP_Product_PremiumPayer)
        instance.RP_Product_1stYearCommission = validated_data.get('RP_Product_1stYearCommission', instance.RP_Product_1stYearCommission)
        instance.RP_Product_2ndYearCommission = validated_data.get('RP_Product_2ndYearCommission', instance.RP_Product_2ndYearCommission)
        instance.RP_Product_OngoingFees = validated_data.get('RP_Product_OngoingFees', instance.RP_Product_OngoingFees)
        instance.RP_Product_OngoingFeesFrequency = validated_data.get('RP_Product_OngoingFeesFrequency', instance.RP_Product_OngoingFeesFrequency)
        instance.RP_Product_OngoingFeesFrequency1 = validated_data.get('RP_Product_OngoingFeesFrequency1', instance.RP_Product_OngoingFeesFrequency1)

        instance.RP_TotalFees_n_Commissions = validated_data.get('RP_TotalFees_n_Commissions', instance.RP_TotalFees_n_Commissions)

        instance.RP_BenDesc_1 = validated_data.get('RP_BenDesc_1', instance.RP_BenDesc_1)
        instance.RP_BenDesc_CoverAmount1 = validated_data.get('RP_BenDesc_CoverAmount1', instance.RP_BenDesc_CoverAmount1)
        instance.RP_BenDesc_2 = validated_data.get('RP_BenDesc_2', instance.RP_BenDesc_2)
        instance.RP_BenDesc_CoverAmount2 = validated_data.get('RP_BenDesc_CoverAmount2', instance.RP_BenDesc_CoverAmount2)
        instance.RP_BenDesc_3 = validated_data.get('RP_BenDesc_3', instance.RP_BenDesc_3)
        instance.RP_BenDesc_CoverAmount3 = validated_data.get('RP_BenDesc_CoverAmount3', instance.RP_BenDesc_CoverAmount3)
        instance.RP_BenDesc_4 = validated_data.get('RP_BenDesc_4', instance.RP_BenDesc_4)
        instance.RP_BenDesc_CoverAmount4 = validated_data.get('RP_BenDesc_CoverAmount4', instance.RP_BenDesc_CoverAmount4)
        instance.RP_BenDesc_5 = validated_data.get('RP_BenDesc_5', instance.RP_BenDesc_5)
        instance.RP_BenDesc_CoverAmount5 = validated_data.get('RP_BenDesc_CoverAmount5', instance.RP_BenDesc_CoverAmount5)
        instance.RP_BenDesc_6 = validated_data.get('RP_BenDesc_6', instance.RP_BenDesc_6)
        instance.RP_BenDesc_CoverAmount6 = validated_data.get('RP_BenDesc_CoverAmount6', instance.RP_BenDesc_CoverAmount6)
        instance.RP_BenDesc_7 = validated_data.get('RP_BenDesc_7', instance.RP_BenDesc_7)
        instance.RP_BenDesc_CoverAmount7 = validated_data.get('RP_BenDesc_CoverAmount7', instance.RP_BenDesc_CoverAmount7)

        instance.RP_ProductReasons = validated_data.get('RP_ProductReasons', instance.RP_ProductReasons)
        instance.RP_ProductMaterialAspects = validated_data.get('RP_ProductMaterialAspects', instance.RP_ProductMaterialAspects)
        instance.RP_ProductDetails = validated_data.get('RP_ProductDetails', instance.RP_ProductDetails)
        instance.RP_ExecutorFee = validated_data.get('RP_ExecutorFee', instance.RP_ExecutorFee)
        instance.RP_NominationOfBeneficiaries = validated_data.get('RP_NominationOfBeneficiaries', instance.RP_NominationOfBeneficiaries)
        instance.RP_InformationExplained = validated_data.get('RP_InformationExplained', instance.RP_InformationExplained)


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

        instance.AI_Other_TotalNeed = validated_data.get('AI_Other_TotalNeed', instance.AI_Other_TotalNeed)    
        instance.AI_Other_ExistingProvisions = validated_data.get('AI_Other_ExistingProvisions', instance.AI_Other_ExistingProvisions)    
        instance.AI_Other_ExistingShortfallSurplus = validated_data.get('AI_Other_ExistingShortfallSurplus', instance.AI_Other_ExistingShortfallSurplus)    
        instance.AI_Other_ExistingInvestments = validated_data.get('AI_Other_ExistingInvestments', instance.AI_Other_ExistingInvestments)    

        instance.AI_FinancialSolutions = validated_data.get('AI_FinancialSolutions', instance.AI_FinancialSolutions)    
        instance.AI_AltS_1 = validated_data.get('AI_AltS_1', instance.AI_AltS_1)  
        instance.AI_AltS_2 = validated_data.get('AI_AltS_2', instance.AI_AltS_2)  
        instance.AI_AltS_3 = validated_data.get('AI_AltS_3', instance.AI_AltS_3)  

        # instance.AI_Pr_Taken = validated_data.get('AI_Pr_Taken', instance.AI_Pr_Taken)  
        instance.AI_Pr_Provider = validated_data.get('AI_Pr_Provider', instance.AI_Pr_Provider)    
        instance.AI_Pr_PolicyNumber = validated_data.get('AI_Pr_PolicyNumber', instance.AI_Pr_PolicyNumber)    
        instance.AI_Pr_Name = validated_data.get('AI_Pr_Name', instance.AI_Pr_Name)    
        instance.AI_Pr_Premium = validated_data.get('AI_Pr_Premium', instance.AI_Pr_Premium)    
        instance.AI_Pr_PremiumFrequency = validated_data.get('AI_Pr_PremiumFrequency', instance.AI_Pr_PremiumFrequency) 
        instance.AI_Pr_Escalation = validated_data.get('AI_Pr_Escalation', instance.AI_Pr_Escalation)    
        instance.AI_Pr_EAC = validated_data.get('AI_Pr_EAC', instance.AI_Pr_EAC)    
        instance.AI_Pr_ContractingParty = validated_data.get('AI_Pr_ContractingParty', instance.AI_Pr_ContractingParty)    
        instance.AI_Pr_LivesAssured = validated_data.get('AI_Pr_LivesAssured', instance.AI_Pr_LivesAssured)    
        instance.AI_Pr_PremiumPayer = validated_data.get('AI_Pr_PremiumPayer', instance.AI_Pr_PremiumPayer)    
        instance.AI_Pr_Beneficiary = validated_data.get('AI_Pr_Beneficiary', instance.AI_Pr_Beneficiary)    
        instance.AI_Pr_IniC = validated_data.get('AI_Pr_IniC', instance.AI_Pr_IniC)    
        instance.AI_Pr_IniC_Percentage = validated_data.get('AI_Pr_IniC_Percentage', instance.AI_Pr_IniC_Percentage)    
        instance.AI_Pr_OnC = validated_data.get('AI_Pr_OnC', instance.AI_Pr_OnC)    
        instance.AI_Pr_OnC_Percentage = validated_data.get('AI_Pr_OnC_Percentage', instance.AI_Pr_OnC_Percentage)

        instance.AI_Portfolio = validated_data.get('AI_Portfolio', instance.AI_Portfolio)
        
        instance.AI_PF_1 = validated_data.get('AI_PF_1', instance.AI_PF_1)
        instance.AI_PF_Percentage1 = validated_data.get('AI_PF_Percentage1', instance.AI_PF_Percentage1)
        instance.AI_PF_Provided1 = validated_data.get('AI_PF_Provided1', instance.AI_PF_Provided1)
        instance.AI_PF_Discussed1 = validated_data.get('AI_PF_Discussed1', instance.AI_PF_Discussed1)
        
        instance.AI_PF_2 = validated_data.get('AI_PF_2', instance.AI_PF_2)
        instance.AI_PF_Percentage2 = validated_data.get('AI_PF_Percentage2', instance.AI_PF_Percentage2)
        instance.AI_PF_Provided2 = validated_data.get('AI_PF_Provided2', instance.AI_PF_Provided2)
        instance.AI_PF_Discussed2 = validated_data.get('AI_PF_Discussed2', instance.AI_PF_Discussed2)
        
        instance.AI_PF_3 = validated_data.get('AI_PF_3', instance.AI_PF_3)
        instance.AI_PF_Percentage3 = validated_data.get('AI_PF_Percentage3', instance.AI_PF_Percentage3)
        instance.AI_PF_Provided3 = validated_data.get('AI_PF_Provided3', instance.AI_PF_Provided3)
        instance.AI_PF_Discussed3 = validated_data.get('AI_PF_Discussed3', instance.AI_PF_Discussed3)
        
        instance.AI_PF_4 = validated_data.get('AI_PF_4', instance.AI_PF_4)
        instance.AI_PF_Percentage4 = validated_data.get('AI_PF_Percentage4', instance.AI_PF_Percentage4)
        instance.AI_PF_Provided4 = validated_data.get('AI_PF_Provided4', instance.AI_PF_Provided4)
        instance.AI_PF_Discussed4 = validated_data.get('AI_PF_Discussed4', instance.AI_PF_Discussed4)
        
        instance.AI_PF_5 = validated_data.get('AI_PF_5', instance.AI_PF_5)
        instance.AI_PF_Percentage5 = validated_data.get('AI_PF_Percentage5', instance.AI_PF_Percentage5)
        instance.AI_PF_Provided5 = validated_data.get('AI_PF_Provided5', instance.AI_PF_Provided5)
        instance.AI_PF_Discussed5 = validated_data.get('AI_PF_Discussed5', instance.AI_PF_Discussed5)
        
        instance.AI_PF_6 = validated_data.get('AI_PF_6', instance.AI_PF_6)
        instance.AI_PF_Percentage6 = validated_data.get('AI_PF_Percentage6', instance.AI_PF_Percentage6)
        instance.AI_PF_Provided6 = validated_data.get('AI_PF_Provided6', instance.AI_PF_Provided6)
        instance.AI_PF_Discussed6 = validated_data.get('AI_PF_Discussed6', instance.AI_PF_Discussed6)
        
        instance.AI_PF_7 = validated_data.get('AI_PF_7', instance.AI_PF_7)
        instance.AI_PF_Percentage7 = validated_data.get('AI_PF_Percentage7', instance.AI_PF_Percentage7)
        instance.AI_PF_Provided7 = validated_data.get('AI_PF_Provided7', instance.AI_PF_Provided7)
        instance.AI_PF_Discussed7 = validated_data.get('AI_PF_Discussed7', instance.AI_PF_Discussed7)

        instance.AI_PF_Reasons = validated_data.get('AI_PF_Reasons', instance.AI_PF_Reasons)
        instance.AI_PF_MaterialAspects = validated_data.get('AI_PF_MaterialAspects', instance.AI_PF_MaterialAspects)
        instance.AI_PF_Pr_Details = validated_data.get('AI__', instance.AI_PF_Pr_Details)
        instance.AI_PF_NominationOfBeneficiaries = validated_data.get('AI_PF_NominationOfBeneficiaries', instance.AI_PF_NominationOfBeneficiaries)

        
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

        instance.AR_ProductProvider = validated_data.get('AR_ProductProvider', instance.AR_ProductProvider)    
        instance.AR_PolicyNumber = validated_data.get('AR_PolicyNumber', instance.AR_PolicyNumber)    
        instance.AR_ProductName = validated_data.get('AR_ProductName', instance.AR_ProductName)    
        instance.AR_ProductPremium = validated_data.get('AR_ProductPremium', instance.AR_ProductPremium)    
        instance.AR_ProductPremiumFrequency = validated_data.get('AR_ProductPremiumFrequency', instance.AR_ProductPremiumFrequency)
        instance.AR_ProductPattern = validated_data.get('AR_ProductPattern', instance.AR_ProductPattern)    
        instance.AR_ProductEscalation = validated_data.get('AR_ProductEscalation', instance.AR_ProductEscalation)    
        instance.AR_ProductContractingParty = validated_data.get('AR_ProductContractingParty', instance.AR_ProductContractingParty)    
        instance.AR_ProductLivesAssured = validated_data.get('AR_ProductLivesAssured', instance.AR_ProductLivesAssured)    
        instance.AR_ProductPremiumPayer = validated_data.get('AR_ProductPremiumPayer', instance.AR_ProductPremiumPayer)    
        instance.AR_Product1stYearCommission = validated_data.get('AR_Product1stYearCommission', instance.AR_Product1stYearCommission)    
        instance.AR_Product2ndYearCommission = validated_data.get('AR_Product2ndYearCommission', instance.AR_Product2ndYearCommission)    
        # instance.AR_ProductOngoingFees = validated_data.get('AR_ProductOngoingFees', instance.AR_ProductOngoingFees)    
        # instance.AR_ProductOngoingFeesFrequency = validated_data.get('AR_ProductOngoingFeesFrequency', instance.AR_ProductOngoingFeesFrequency)    
            
        instance.AR_BenDesc_1 = validated_data.get('AR_BenDesc_1', instance.AR_BenDesc_1)
        instance.AR_BenDesc_CoverAmount1 = validated_data.get('AR_BenDesc_CoverAmount1', instance.AR_BenDesc_CoverAmount1)
        instance.AR_BenDesc_2 = validated_data.get('AR_BenDesc_2', instance.AR_BenDesc_2)
        instance.AR_BenDesc_CoverAmount2 = validated_data.get('AR_BenDesc_CoverAmount2', instance.AR_BenDesc_CoverAmount2)
        instance.AR_BenDesc_3 = validated_data.get('AR_BenDesc_3', instance.AR_BenDesc_3)
        instance.AR_BenDesc_CoverAmount3 = validated_data.get('AR_BenDesc_CoverAmount3', instance.AR_BenDesc_CoverAmount3)
        # instance.AR_BenDesc_4 = validated_data.get('AR_BenDesc_4', instance.AR_BenDesc_4)
        # instance.AR_BenDesc_CoverAmount4 = validated_data.get('AR_BenDesc_CoverAmount4', instance.AR_BenDesc_CoverAmount4)
        # instance.AR_BenDesc_5 = validated_data.get('AR_BenDesc_5', instance.AR_BenDesc_5)
        # instance.AR_BenDesc_CoverAmount5 = validated_data.get('AR_BenDesc_CoverAmount5', instance.AR_BenDesc_CoverAmount5)
        # instance.AR_BenDesc_6 = validated_data.get('AR_BenDesc_6', instance.AR_BenDesc_6)
        # instance.AR_BenDesc_CoverAmount6 = validated_data.get('AR_BenDesc_CoverAmount6', instance.AR_BenDesc_CoverAmount6)
        # instance.AR_BenDesc_7 = validated_data.get('AR_BenDesc_7', instance.AR_BenDesc_7)
        # instance.AR_BenDesc_CoverAmount7 = validated_data.get('AR_BenDesc_CoverAmount7', instance.AR_BenDesc_CoverAmount7)
            
        instance.AR_ProductReasons = validated_data.get('AR_ProductReasons', instance.AR_ProductReasons)
        instance.AR_ProductMaterialAspects = validated_data.get('AR_ProductMaterialAspects', instance.AR_ProductMaterialAspects)
        instance.AR_ProductDetails = validated_data.get('AR_ProductDetails', instance.AR_ProductDetails)
        instance.AR_ProductBriefSummary = validated_data.get('AR_ProductBriefSummary', instance.AR_ProductBriefSummary)
        instance.AR_Cessionaries = validated_data.get('AR_Cessionaries', instance.AR_Cessionaries)
        instance.AR_InformationExplained = validated_data.get('AR_InformationExplained', instance.AR_InformationExplained)

        
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
        instance.EB_BusinessItP_Percentage = validated_data.get('EB_BusinessItPPercentage', instance.EB_BusinessItP_Percentage)
        
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
        instance.EB_BusRecom_Porfolio = validated_data.get('EB_BusRecom_Porfolio', instance.EB_BusRecom_Porfolio)
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