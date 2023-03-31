from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.files.base import ContentFile
from data.serializers import AssuranceInvestmentSerializers, AssuranceRiskSerializers, EmployeeBenefitsSerializers, FiduciarySerializers, GapCoverSerializers, InvestmentPlanningSerializers, RiskFactorsSerializers, RiskPlanningSerializers, ShortTermInsuranceCommericalSerializers, ShortTermInsurancePersonalSerializers, UserAccountsSerializers, FormSerializers
from data.models import Medical, AssuranceInvestment, AssuranceRisk, EmployeeBenefits, Fiduciary, GapCover, InvestmentPlanning, RiskFactors, RiskPlanning, ShortTermInsuranceCommerical, ShortTermInsurancePersonal, UserAccount, Form
from django.http import HttpResponse
from django.core.paginator import Paginator
from django.db.models import Q
import pandas as pd
import uuid
import numpy as np
import base64
from functools import reduce
from datetime import datetime

Frequency = [ "" ,"Monthly", "Quarterly", "Annually", "Once Off"]

@api_view(['GET'])
def exportData(request):
    forms = RiskFactors.objects.all().values()
    RF_BU_Risk = ['','Low','Medium','High']
    RF_ClientType = ['','Individual','Legal']
    RF_Occupation = ['','Minor/Scholar','Retired','Salaried Employee','Self Employed','Student','Unemployed']
    RF_Industry = ['','Administrative and support services','Adult Entertainment','Agriculture,forestry and fishing','Arts,Entertainment and Recreation','Broadcasting and Entertainment','Chemical engineering/manufacturing',
    'Community and social activities','Construction and civil engineering','Consumer goods:wholesale and retail','Education','Electricity,solar,water,gas','Entrepreneurship','Estate living and family trusts','Extractive services,mining and quarrying','Financial and insurance','Gambling','Government services,armed and state owned enterprise','Health care and medical','Information technology,communication and telecom','Legal practitioner','Manufacturing','Motor wholesale,retail trade and repair','Non profit organization','Non government organization(NGO)','other','PFMA schedule 1','PFMA schedule 2','PFMA schedule 3A','Professional sport','Real estate and property services','Shell Banking','Transport storage,courier and freight','Travel,tourism and accomodation','Virtual currencies']
    RF_CountryOfBirth =['','Afghanistan','Albania','Algeria','American Samoa','Andora','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armania','Aruba','Auckland Islands','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia','Botswana','Bouvet Islands','Brazil','British Indian Ocean Teritory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos','Colombia','Comoros','Congo Democratic','Congo Republic','Cook Islands','Costa Rica','Ivory Cost','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','EI Salvador','Equatorial Guinea','Eritrea','Estonia','eSwaitini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibralter','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Herd Island','Holy See','Honduras','Hongkong','Hungary','Iceland','India','Indonessia','Iran','Iraq','Ireland','Isle of man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Korea North','Korea South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronessia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Mynamar','Namabia','Nauru','Nepal','Netherlands','New Celedonia','Newzealand','Niger','Nigeria','Norfolk Island','Nothern Mariana Islands','Norway','Nuie','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcaim','Poland','Portugal','Puerto Rico','Qatar','Reunion','Roman','Russia','Rwanda','Saint Barthelemy','Saint Helena','Saint Kitts','Saint Lucia','Saint Martin','Saint Pierre','Saint Vincent','Samoa','Saint Marino','Sao Tome','Saudia Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Martin','Slovekia','Slovenia','Solomon Islands','Somalia','South Africa','South Georgia','South Sudan','SPain','Srilanka','Sudan','Suriname','Svalbard','Sweden','Switxerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tokelau','Tonga','Trinidad','Tunisia','Turkey','Turkmenistan','Turks','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States Minor','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Virgin Islands(British)','Virgin Islands(US)','Wallis and Fatuna','West Bank','Western Sahara','Yemen','Zambia','Zimbabwe']
    RF_SourceOfFunds = ['','Allowance','Bonus','Bursary','Company profits','Company sale','Cryptocurrency','Debt capital','Disability/social grant','Dividends from investment','Divorce settlement','Equity capital','Gambling winnings','Gift','Income from previous employment','Inherritance','Loan','Lottery winnings','Maintainance(Formal agreement)','Maintainance(Informal agreement)','Maturing Investments','Other','Pension','Provident fund','Rental Propert','Retirement Funds','Salary','Salary asset/property','Sale of shares','Sanlam payout','Savings','Settlement','Transfer to/from approved funds','Trust Income']
    RF_RelationshipToClient =['','Annuitant','Applicant','Authorised Representative','Cessionary','Curator','Executor','Fund Annuitant','Gurantor','Legal Guardian','Legal owner','Multi data client','Nominee of ownership','Policy owner','Power of Attorney','Premium Payer','Surety']
    # RF_CountryOfRegistration =
    # RF_CountryOfOperation =
    RF_Type_Legal_Entity = ['','Body corporate','Charitable organization','Church/religious organization','Closed corporation','Club','Deceased Estate','Foreign government','Foreign listed company','Foreign state owned entity','Foreign trust','Foreign Unlisted company','Foundation','Fund','Insolvent Estate','Listed company','Non government organization','Non profit organization','Other corporate arrangement','Retirement fund','School/university','State owned Enterprise','Stokvel','Trade Union','Trust','Unlisted company']
    RF_Client_Relationship = ['','Beneficial owner','Beneficiary','Co-policy owner','Dependent','EFT third party','Individual acting on behalf of an entity','Individual exercising control other than owner','Individual linked to a partnership','Individual linked to a trust','Legal entity acting on behalf of individual','Legal entity acting on behalf of other legal entity','Legal Entity exercising control over another Legal Entity','Legal Entity has legal relationship with other Legal Entity','Legal Entity linked to a Trust','Legal guardian','Life assured','Natural guardian','Nominee for ownership','Principal owner','Security cession','Signatory','Trust has control over another trust','Trustee','Unit transfer investment owner']
    RF_Product_Name = ['','Access to funds or benefits restricted to specific contractual events (specified termination, uncertain insured event)','Access to primary benefits only at claim stage','Access to primary benefits only at claim stage, but have access to cash during the lifetime of the product','Access to the values may be limited by legislation','Accumulation of cash values','AAdministrative service provided','Advisory or intermediary services only with commission based inflow','Allows for restricted number of withdrawals','Benefits governed by specific regulatory- and tax regimes','Can be accessed without any restrictions by law or product provider','Can be offered as security and be transferred to another person (ceded)','Cannot be offered as security or ceded','Contributions are limited by legislation or regulation','Contributions from Third Parties are allowed','Funds can be accumulated and easily accessed','Funds linked to a specific source (Estate, Order of Court, Retirement Fund Benefits, Employer)','Investments are made with discretionary money','Lump sum payments, including ad-hoc lump sum payments allowed','No or little accumulation of cash values during the lifetime of the product','Not available to retail investors','Online transactability and automated access','Payments to foreign bank accounts are allowed','Product allows for investment in or via a foreign jurisdiction(s)','Product only provides a structured flow of transactions','Significant fund flows are involved','Third Party EFT services provided','Third Party non-financial services provided','Transparency is limited in respect of source of funds','Unlimited contributions and withdrawals']
    RF_Transaction_Flow = ['','Inflow','Outflow','Not Applicable']
    RF_Transaction_Method = ['','Bank Transfer','Cash','Debit order','Debit/credit card','EFT','File/API Transfer','Mobile payment','Retailer/Merchant payment','Script Transfer','Stop order','Straight through processing','Unit Transfer']
    RF_Transaction_Reason = ['','Additional Premium','Cession','Client/Policy change','Combined alteration','Commission/Service fee','Continuation','Conversion','New business','Premium arrears','Re-issue','Renewal','Review underwriting','Switch in','Transfer of value']
    RF_High_Transaction_Reason = ['','Yes','No']
    RF_Transaction_Frequency = ['','Ad hoc','Lump sum and recurring combination','Once off/Lump sum','Recurring']
    # RF_Transaction_Value = []
    # RF_Currency_Value = []
    RF_Transaction_Geography = ['','Cross Border','In-country','Not Applicable']
    # RF_Funds_Jurisdiction = []
    RF_Delivery_Channel = ['','AFP','SFP']
    RF_Linked_Party_Acting = ['','Not Applicable','No','Yes']
    RF_Linked_Party_Paying = ['','Not applicable','Paying funds','Received funds']
    RF_Client_Match = ['','Adverse Media','Enforcement,SIP,SIE','False Positive','False Positive-Unsure','False Positive-Unsure:Sanctions','No Alert','PEP-Domestic','PEP-Foreign','Sanction','Sanlam Do not Trnsact List','SOE']
    RF_Client_Beneficiaries = ['','Yes','No']
    RF_Adjust_Risk1 = ['','Low','Medium','High','Intolerable']
    # RF_Name = []
    # RF_ID = []
    RF_Linked_Party = ['Adverse Media','Enforcement,SIP,SIE','False Positive','False Positive-Unsure','False Positive-Unsure:Sanctions','No Alert','PEP-Domestic','PEP-Foreign','Sanction','Sanlam Do not Trnsact List','SOE']
    RF_RCA = ['','Yes','No']
    # RF_Birth_Country = []
    # RF_Residence_Country = []
    # RF_Nationality1 = []
    for form in forms:
        form['RF_Overall_Risk'] = "Undetermined"
        if int(form['RF_Client_Match']) == 1 or int(form['RF_Client_Match']) == 4 or int(form['RF_Client_Match']) == 7 :
            form['RF_Overall_Risk'] = "Medium"
        elif int(form['RF_Client_Match']) == 2 or int(form['RF_Client_Match']) == 5 or int(form['RF_Client_Match']) == 8 or int(form['RF_Client_Match']) == 11:
            form['RF_Overall_Risk'] = "High"
        elif int(form['RF_Client_Match']) == 3 or int(form['RF_Client_Match']) == 6:
            form['RF_Overall_Risk'] = "Low"
        elif int(form['RF_Client_Match']) == 9 or int(form['RF_Client_Match']) == 10:
            form['RF_Overall_Risk'] = "Intolerable"
        else:
            form['RF_Overall_Risk'] = "Undetermined"

        RF_Occupation_id = int(form['RF_Occupation']) if form['RF_Occupation'] != "" else 0
        RF_BU_Risk_id = int(form['RF_BU_Risk']) if form['RF_BU_Risk'] != "" else 0
        RF_ClientType_id = int(form['RF_ClientType']) if form['RF_ClientType'] != "" else 0
        RF_Industry_id = int(form['RF_Industry']) if form['RF_Industry'] != "" else 0
        RF_CountryOfBirth_id = int(form['RF_CountryOfBirth']) if form['RF_CountryOfBirth'] != "" else 0
        RF_CountryOfResidence_id = int(form['RF_CountryOfResidence']) if form['RF_CountryOfResidence'] != "" else 0
        RF_Nationality_id = int(form['RF_Nationality']) if form['RF_Nationality'] != "" else 0
        RF_Different_Nationality_id = int(form['RF_Different_Nationality']) if form['RF_Different_Nationality'] != "" else 0
        RF_CountryOfTax_id = int(form['RF_CountryOfTax']) if form['RF_CountryOfTax'] != "" else 0
        RF_SourceOfFunds_id = int(form['RF_SourceOfFunds']) if form['RF_SourceOfFunds'] != "" else 0
        RF_CountryOfRegistration_id = int(form['RF_CountryOfRegistration']) if form['RF_CountryOfRegistration'] != "" else 0
        RF_CountryOfOperation_id = int(form['RF_CountryOfOperation']) if form['RF_CountryOfOperation'] != "" else 0
        RF_RelationshipToClient_id = int(form['RF_RelationshipToClient']) if form['RF_RelationshipToClient'] != "" else 0
        RF_Type_Legal_Entity_id = int(form['RF_Type_Legal_Entity']) if form['RF_Type_Legal_Entity'] != "" else 0
        RF_Client_Relationship_id = int(form['RF_Client_Relationship']) if form['RF_Client_Relationship'] != "" else 0
        RF_Product_Name_id = int(form['RF_Product_Name']) if form['RF_Product_Name'] != "" else 0
        RF_Transaction_Flow_id = int(form['RF_Transaction_Flow']) if form['RF_Transaction_Flow'] != "" else 0
        RF_Transaction_Method_id = int(form['RF_Transaction_Method']) if form['RF_Transaction_Method'] != "" else 0
        RF_Transaction_Reason_id = int(form['RF_Transaction_Reason']) if form['RF_Transaction_Reason'] != "" else 0
        RF_High_Transaction_Reason_id = int(form['RF_High_Transaction_Reason']) if form['RF_High_Transaction_Reason'] != "" else 0
        RF_Transaction_Frequency_id = int(form['RF_Transaction_Frequency']) if form['RF_Transaction_Frequency'] != "" else 0
        # RF_Transaction_Value_id = int(form['RF_Transaction_Value'])
        # RF_Currency_Value_id = int(form['RF_Currency_Value'])
        RF_Transaction_Geography_id = int(form['RF_Transaction_Geography']) if form['RF_Transaction_Geography'] != "" else 0
        RF_Funds_Jurisdiction_id = int(form['RF_Funds_Jurisdiction']) if form['RF_Funds_Jurisdiction'] != "" else 0
        RF_Delivery_Channel_id = int(form['RF_Delivery_Channel']) if form['RF_Delivery_Channel'] != "" else 0
        RF_Linked_Party_Acting_id = int(form['RF_Linked_Party_Acting']) if form['RF_Linked_Party_Acting'] != "" else 0
        RF_Linked_Party_Paying_id = int(form['RF_Linked_Party_Paying']) if form['RF_Linked_Party_Paying'] != "" else 0
        RF_Client_Match_id = int(form['RF_Client_Match']) if form['RF_Client_Match'] != "" else 0
        RF_Client_Beneficiaries_id = int(form['RF_Client_Beneficiaries']) if form['RF_Client_Beneficiaries'] != "" else 0
        RF_Adjust_Risk1_id = int(form['RF_Adjust_Risk1']) if form['RF_Adjust_Risk1'] != "" else 0
        # RF_Name_id = int(form['RF_Name'])
        # RF_ID_id = int(form['RF_ID'])
        RF_Linked_Party_id = int(form['RF_Linked_Party']) if form['RF_Linked_Party'] != "" else 0
        RF_RCA_id = int(form['RF_RCA']) if form['RF_RCA'] != "" else 0
        RF_Birth_Country_id = int(form['RF_Birth_Country']) if form['RF_Birth_Country'] != "" else 0
        RF_Residence_Country_id = int(form['RF_Residence_Country']) if form['RF_Residence_Country'] != "" else 0
        RF_Nationality1_id = int(form['RF_Nationality1']) if form['RF_Nationality1'] != "" else 0
        advisor = UserAccount.objects.filter(id=form['advisorId']).values().first()
        form['advisorName'] = advisor['name']
        form['RF_Occupation'] = RF_Occupation[RF_Occupation_id]
        form['RF_BU_Risk'] = RF_BU_Risk[RF_BU_Risk_id]
        form['RF_ClientType'] = RF_ClientType[RF_ClientType_id]
        form['RF_Industry'] = RF_Industry[RF_Industry_id]
        form['RF_CountryOfBirth'] = RF_CountryOfBirth[RF_CountryOfBirth_id]
        form['RF_Different_Nationality'] = RF_CountryOfBirth[RF_Different_Nationality_id]
        form['RF_CountryOfResidence'] = RF_CountryOfBirth[RF_CountryOfResidence_id]
        form['RF_Nationality'] = RF_CountryOfBirth[RF_Nationality_id]
        form['RF_CountryOfTax'] = RF_CountryOfBirth[RF_CountryOfTax_id]
        form['RF_SourceOfFunds'] =  RF_SourceOfFunds[ RF_SourceOfFunds_id]
        form['RF_CountryOfRegistration'] = RF_CountryOfBirth[RF_CountryOfRegistration_id]
        form['RF_CountryOfOperation'] = RF_CountryOfBirth[RF_CountryOfOperation_id]
        form['RF_RelationshipToClient'] = RF_RelationshipToClient[RF_RelationshipToClient_id]
        form['RF_Type_Legal_Entity'] = RF_Type_Legal_Entity[RF_Type_Legal_Entity_id]
        form['RF_Client_Relationship'] = RF_Client_Relationship[RF_Client_Relationship_id]
        form['RF_Product_Name'] = RF_Product_Name[RF_Product_Name_id]
        form['RF_Transaction_Flow'] = RF_Transaction_Flow[RF_Transaction_Flow_id-1]
        form['RF_Transaction_Method'] = RF_Transaction_Method[RF_Transaction_Method_id]
        form['RF_Transaction_Reason'] = RF_Transaction_Reason[RF_Transaction_Reason_id]
        form['RF_High_Transaction_Reason'] = RF_High_Transaction_Reason[RF_High_Transaction_Reason_id]
        form['RF_Transaction_Frequency'] = RF_Transaction_Frequency[RF_Transaction_Frequency_id]
        # form['RF_Transaction_Value'] = RF_Transaction_Value[RF_Transaction_Value_id]
        # form['RF_Currency_Value'] = RF_Currency_Value[RF_Currency_Value_id]
        form['RF_Transaction_Geography'] = RF_Transaction_Geography[RF_Transaction_Geography_id]
        form['RF_Funds_Jurisdiction'] = RF_CountryOfBirth[RF_Funds_Jurisdiction_id]
        form['RF_Delivery_Channel'] = RF_Delivery_Channel[RF_Delivery_Channel_id]
        form['RF_Linked_Party_Acting'] = RF_Linked_Party_Acting[RF_Linked_Party_Acting_id]
        form['RF_Linked_Party_Paying'] = RF_Linked_Party_Paying[RF_Linked_Party_Paying_id]
        form['RF_Client_Match'] = RF_Client_Match[RF_Client_Match_id]
        form['RF_Client_Beneficiaries'] = RF_Client_Beneficiaries[RF_Client_Beneficiaries_id]
        form['RF_Adjust_Risk1'] = RF_Adjust_Risk1[RF_Adjust_Risk1_id]
        # form['RF_Name'] = RF_Name[RF_Name_id]
        # form['RF_ID'] = RF_ID[RF_ID_id]
        form['RF_Linked_Party'] = RF_Linked_Party[RF_Linked_Party_id]
        form['RF_RCA'] = RF_RCA[RF_RCA_id]
        form['RF_Birth_Country'] = RF_CountryOfBirth[RF_Birth_Country_id]
        form['RF_Residence_Country'] = RF_CountryOfBirth[RF_Residence_Country_id]
        form['RF_Nationality1'] = RF_CountryOfBirth[RF_Nationality1_id]

        form.pop('status')
        form.pop('created_at')
        form.pop('updated_at')

        RecordOfAdvice = Form.objects.filter(formId=form['id']).values()
        if len(RecordOfAdvice) != 0:                
            RecordOfAdvice = Form.objects.filter(formId=form['id']).values().first()
            if (
                (
                    RecordOfAdvice['clientName'] == form['RF_ClientName'] and RecordOfAdvice['clientIdNumber'] == form['RF_ClientId'] and
                    RecordOfAdvice['clientIdNumber'] == Form._meta.get_field('clientIdNumber').default and
                    RecordOfAdvice['clientAddress'] == Form._meta.get_field('clientAddress').default and
                    RecordOfAdvice['clientPhoneNumber'] == Form._meta.get_field('clientPhoneNumber').default and
                    RecordOfAdvice['clientEmail'] == Form._meta.get_field('clientEmail').default and
                    RecordOfAdvice['clientDateOfBirth'] == Form._meta.get_field('clientDateOfBirth').default and
                    RecordOfAdvice['clientLetterOfIntroduction'] == Form._meta.get_field('clientLetterOfIntroduction').default and
                    RecordOfAdvice['clientLetterOfIntroductionReason'] == Form._meta.get_field('clientLetterOfIntroductionReason').default and
                    RecordOfAdvice['clientLetterOfIntroductionAccess'] == Form._meta.get_field('clientLetterOfIntroductionAccess').default and
                    RecordOfAdvice['clientLetterOfIntroductionAccessReason'] == Form._meta.get_field('clientLetterOfIntroductionAccessReason').default and
                    RecordOfAdvice['clientFica'] == Form._meta.get_field('clientFica').default and
                    RecordOfAdvice['clientFicaReason'] == Form._meta.get_field('clientFicaReason').default and
                    RecordOfAdvice['clientBackgroundInfo'] == Form._meta.get_field('clientBackgroundInfo').default
                )):
                form['RA_clientName'] = "N.A."
                form['RA_clientIdNumber'] = "N.A."
                form['RA_clientAddress'] = "N.A."
                form['RA_clientPhoneNumber'] = "N.A."
                form['RA_clientEmail'] = "N.A."
                form['RA_clientDateOfBirth'] = "N.A."
                form['RA_clientLetterOfIntroduction'] = "N.A."
                form['RA_clientLetterOfIntroductionReason'] = "N.A."
                form['RA_clientLetterOfIntroductionAccess'] = "N.A."
                form['RA_clientLetterOfIntroductionAccessReason'] = "N.A."
                form['RA_clientFica'] = "N.A."
                form['RA_clientFicaReason'] = "N.A."
                form['RA_clientBackgroundInfo'] = "N.A."
            elif ((
                    RecordOfAdvice['clientName'] == Form._meta.get_field('clientName').default and 
                    RecordOfAdvice['clientIdNumber'] == Form._meta.get_field('clientIdNumber').default and
                    RecordOfAdvice['clientAddress'] == Form._meta.get_field('clientAddress').default and
                    RecordOfAdvice['clientPhoneNumber'] == Form._meta.get_field('clientPhoneNumber').default and
                    RecordOfAdvice['clientEmail'] == Form._meta.get_field('clientEmail').default and
                    RecordOfAdvice['clientDateOfBirth'] == Form._meta.get_field('clientDateOfBirth').default and
                    RecordOfAdvice['clientLetterOfIntroduction'] == Form._meta.get_field('clientLetterOfIntroduction').default and
                    RecordOfAdvice['clientLetterOfIntroductionReason'] == Form._meta.get_field('clientLetterOfIntroductionReason').default and
                    RecordOfAdvice['clientLetterOfIntroductionAccess'] == Form._meta.get_field('clientLetterOfIntroductionAccess').default and
                    RecordOfAdvice['clientLetterOfIntroductionAccessReason'] == Form._meta.get_field('clientLetterOfIntroductionAccessReason').default and
                    RecordOfAdvice['clientFica'] == Form._meta.get_field('clientFica').default and
                    RecordOfAdvice['clientFicaReason'] == Form._meta.get_field('clientFicaReason').default and
                    RecordOfAdvice['clientBackgroundInfo'] == Form._meta.get_field('clientBackgroundInfo').default
                )):
                form['RA_clientName'] = "N.A."
                form['RA_clientIdNumber'] = "N.A."
                form['RA_clientAddress'] = "N.A."
                form['RA_clientPhoneNumber'] = "N.A."
                form['RA_clientEmail'] = "N.A."
                form['RA_clientDateOfBirth'] = "N.A."
                form['RA_clientLetterOfIntroduction'] = "N.A."
                form['RA_clientLetterOfIntroductionReason'] = "N.A."
                form['RA_clientLetterOfIntroductionAccess'] = "N.A."
                form['RA_clientLetterOfIntroductionAccessReason'] = "N.A."
                form['RA_clientFica'] = "N.A."
                form['RA_clientFicaReason'] = "N.A."
                form['RA_clientBackgroundInfo'] = "N.A."
            else:                    
                form['RA_clientName'] = RecordOfAdvice['clientName']
                form['RA_clientIdNumber'] = RecordOfAdvice['clientIdNumber']
                form['RA_clientAddress'] = RecordOfAdvice['clientAddress']
                form['RA_clientPhoneNumber'] = RecordOfAdvice['clientPhoneNumber']
                form['RA_clientEmail'] = RecordOfAdvice['clientEmail']
                form['RA_clientDateOfBirth'] = RecordOfAdvice['clientDateOfBirth']
                if int(RecordOfAdvice['clientLetterOfIntroduction']) == 0:
                    form['RA_clientLetterOfIntroduction'] = "No"
                if int(RecordOfAdvice['clientLetterOfIntroduction']) == 1:
                    form['RA_clientLetterOfIntroduction'] = "Yes"
                form['RA_clientLetterOfIntroductionReason'] = RecordOfAdvice['clientLetterOfIntroductionReason']
                if int(RecordOfAdvice['clientLetterOfIntroductionAccess']) == 0:
                    form['RA_clientLetterOfIntroductionAccess'] = "No"
                if int(RecordOfAdvice['clientLetterOfIntroductionAccess']) == 1:
                    form['RA_clientLetterOfIntroductionAccess'] = "Yes"
                form['RA_clientLetterOfIntroductionAccessReason'] = RecordOfAdvice['clientLetterOfIntroductionAccessReason']
                if int(RecordOfAdvice['clientFica']) == 0:
                    form['RA_clientFica'] = "No"
                if int(RecordOfAdvice['clientFica']) == 1:
                    form['RA_clientFica'] = "Yes"
                form['RA_clientFicaReason'] = RecordOfAdvice['clientFicaReason']
                form['RA_clientBackgroundInfo'] = RecordOfAdvice['clientBackgroundInfo']
        else:
            form['RA_clientName'] = "N.A."
            form['RA_clientIdNumber'] = "N.A."
            form['RA_clientAddress'] = "N.A."
            form['RA_clientPhoneNumber'] = "N.A."
            form['RA_clientEmail'] = "N.A."
            form['RA_clientDateOfBirth'] = "N.A."
            form['RA_clientLetterOfIntroduction'] = "N.A."
            form['RA_clientLetterOfIntroductionReason'] = "N.A."
            form['RA_clientLetterOfIntroductionAccess'] = "N.A."
            form['RA_clientLetterOfIntroductionAccessReason'] = "N.A."
            form['RA_clientFica'] = "N.A."
            form['RA_clientFicaReason'] = "N.A."
            form['RA_clientBackgroundInfo'] = "N.A."

        RiskPlanningData = RiskPlanning.objects.filter(formId=form['id']).values()
        if len(RiskPlanningData) != 0:                
            RiskPlanningData = RiskPlanning.objects.filter(formId=form['id']).values().first()
            if (
                (
                    RiskPlanningData['RP_DC_LumpSumTotalNeed'] == RiskPlanning._meta.get_field('RP_DC_LumpSumTotalNeed').default and     
                    RiskPlanningData['RP_DC_LumpSumExistingProvisions'] == RiskPlanning._meta.get_field('RP_DC_LumpSumExistingProvisions').default and     
                    RiskPlanningData['RP_DC_LumpSumExistingShortfallSurplus'] == RiskPlanning._meta.get_field('RP_DC_LumpSumExistingShortfallSurplus').default and     
                    RiskPlanningData['RP_DC_LumpSumInvestments'] == RiskPlanning._meta.get_field('RP_DC_LumpSumInvestments').default and     
                    RiskPlanningData['RP_DC_IncomeTotalNeed'] == RiskPlanning._meta.get_field('RP_DC_IncomeTotalNeed').default and     
                    RiskPlanningData['RP_DC_IncomeExistingProvisions'] == RiskPlanning._meta.get_field('RP_DC_IncomeExistingProvisions').default and     
                    RiskPlanningData['RP_DC_IncomeExistingShortfallSurplus'] == RiskPlanning._meta.get_field('RP_DC_IncomeExistingShortfallSurplus').default and     
                    RiskPlanningData['RP_DC_IncomeInvestments'] == RiskPlanning._meta.get_field('RP_DC_IncomeInvestments').default and     
                    RiskPlanningData['RP_DC_FB_TotalNeed'] == RiskPlanning._meta.get_field('RP_DC_FB_TotalNeed').default and     
                    RiskPlanningData['RP_DC_FB_ExistingProvisions'] == RiskPlanning._meta.get_field('RP_DC_FB_ExistingProvisions').default and     
                    RiskPlanningData['RP_DC_FB_ExistingShortfallSurplus'] == RiskPlanning._meta.get_field('RP_DC_FB_ExistingShortfallSurplus').default and     
                    RiskPlanningData['RP_DC_FB_Investments'] == RiskPlanning._meta.get_field('RP_DC_FB_Investments').default and     
                    RiskPlanningData['RP_DC_Other'] == RiskPlanning._meta.get_field('RP_DC_Other').default and     
                    RiskPlanningData['RP_DC_OtherTotalNeed'] == RiskPlanning._meta.get_field('RP_DC_OtherTotalNeed').default and     
                    RiskPlanningData['RP_DC_OtherExistingProvisions'] == RiskPlanning._meta.get_field('RP_DC_OtherExistingProvisions').default and     
                    RiskPlanningData['RP_DC_OtherExistingShortfallSurplus'] == RiskPlanning._meta.get_field('RP_DC_OtherExistingShortfallSurplus').default and     
                    RiskPlanningData['RP_DC_OtherInvestments'] == RiskPlanning._meta.get_field('RP_DC_OtherInvestments').default and    
                    RiskPlanningData['RP_DC_Comments'] == RiskPlanning._meta.get_field('RP_DC_Comments').default and     
                    RiskPlanningData['RP_DiC_LumpSumTotalNeed'] == RiskPlanning._meta.get_field('RP_DiC_LumpSumTotalNeed').default and     
                    RiskPlanningData['RP_DiC_LumpSumExistingProvisions'] == RiskPlanning._meta.get_field('RP_DiC_LumpSumExistingProvisions').default and     
                    RiskPlanningData['RP_DiC_LumpSumExistingShortfallSurplus'] == RiskPlanning._meta.get_field('RP_DiC_LumpSumExistingShortfallSurplus').default and     
                    RiskPlanningData['RP_DiC_LumpSumInvestments'] == RiskPlanning._meta.get_field('RP_DiC_LumpSumInvestments').default and     
                    RiskPlanningData['RP_DiC_PI_TotalNeed'] == RiskPlanning._meta.get_field('RP_DiC_PI_TotalNeed').default and     
                    RiskPlanningData['RP_DiC_PI_ExistingProvisions'] == RiskPlanning._meta.get_field('RP_DiC_PI_ExistingProvisions').default and     
                    RiskPlanningData['RP_DiC_PI_ExistingShortfallSurplus'] == RiskPlanning._meta.get_field('RP_DiC_PI_ExistingShortfallSurplus').default and     
                    RiskPlanningData['RP_DiC_PI_Investments'] == RiskPlanning._meta.get_field('RP_DiC_PI_Investments').default and     
                    RiskPlanningData['RP_DiC_TI_TotalNeed'] == RiskPlanning._meta.get_field('RP_DiC_TI_TotalNeed').default and     
                    RiskPlanningData['RP_DiC_TI_ExistingProvisions'] == RiskPlanning._meta.get_field('RP_DiC_TI_ExistingProvisions').default and     
                    RiskPlanningData['RP_DiC_TI_ExistingShortfallSurplus'] == RiskPlanning._meta.get_field('RP_DiC_TI_ExistingShortfallSurplus').default and     
                    RiskPlanningData['RP_DiC_TI_Investments'] == RiskPlanning._meta.get_field('RP_DiC_TI_Investments').default and         
                    RiskPlanningData['RP_DiC_SiB_TotalNeed'] == RiskPlanning._meta.get_field('RP_DiC_SiB_TotalNeed').default and     
                    RiskPlanningData['RP_DiC_SiB_ExistingProvisions'] == RiskPlanning._meta.get_field('RP_DiC_SiB_ExistingProvisions').default and     
                    RiskPlanningData['RP_DiC_SiB_ExistingShortfallSurplus'] == RiskPlanning._meta.get_field('RP_DiC_SiB_ExistingShortfallSurplus').default and     
                    RiskPlanningData['RP_DiC_SiB_Investments'] == RiskPlanning._meta.get_field('RP_DiC_SiB_Investments').default and   
                    RiskPlanningData['RP_DiC_Other1'] == RiskPlanning._meta.get_field('RP_DiC_Other1').default and     
                    RiskPlanningData['RP_DiC_OtherTotalNeed1'] == RiskPlanning._meta.get_field('RP_DiC_OtherTotalNeed1').default and     
                    RiskPlanningData['RP_DiC_OtherExistingProvisions1'] == RiskPlanning._meta.get_field('RP_DiC_OtherExistingProvisions1').default and     
                    RiskPlanningData['RP_DiC_OtherExistingShortfallSurplus1'] == RiskPlanning._meta.get_field('RP_DiC_OtherExistingShortfallSurplus1').default and     
                    RiskPlanningData['RP_DiC_OtherInvestments1'] == RiskPlanning._meta.get_field('RP_DiC_OtherInvestments1').default and      
                    RiskPlanningData['RP_DiC_Other2'] == RiskPlanning._meta.get_field('RP_DiC_Other2').default and     
                    RiskPlanningData['RP_DiC_OtherTotalNeed2'] == RiskPlanning._meta.get_field('RP_DiC_OtherTotalNeed2').default and     
                    RiskPlanningData['RP_DiC_OtherExistingProvisions2'] == RiskPlanning._meta.get_field('RP_DiC_OtherExistingProvisions2').default and     
                    RiskPlanningData['RP_DiC_OtherExistingShortfallSurplus2'] == RiskPlanning._meta.get_field('RP_DiC_OtherExistingShortfallSurplus2').default and     
                    RiskPlanningData['RP_DiC_OtherInvestments2'] == RiskPlanning._meta.get_field('RP_DiC_OtherInvestments2').default and      
                    RiskPlanningData['RP_DiC_Comments'] == RiskPlanning._meta.get_field('RP_DiC_Comments').default and     
                    RiskPlanningData['RP_DrC_LumpSumTotalNeed'] == RiskPlanning._meta.get_field('RP_DrC_LumpSumTotalNeed').default and     
                    RiskPlanningData['RP_DrC_LumpSumExistingProvisions'] == RiskPlanning._meta.get_field('RP_DrC_LumpSumExistingProvisions').default and     
                    RiskPlanningData['RP_DrC_LumpSumExistingShortfallSurplus'] == RiskPlanning._meta.get_field('RP_DrC_LumpSumExistingShortfallSurplus').default and     
                    RiskPlanningData['RP_DrC_LumpSumInvestments'] == RiskPlanning._meta.get_field('RP_DrC_LumpSumInvestments').default and     
                    RiskPlanningData['RP_DrC_IncomeTotalNeed'] == RiskPlanning._meta.get_field('RP_DrC_IncomeTotalNeed').default and     
                    RiskPlanningData['RP_DrC_IncomeExistingProvisions'] == RiskPlanning._meta.get_field('RP_DrC_IncomeExistingProvisions').default and     
                    RiskPlanningData['RP_DrC_IncomeExistingShortfallSurplus'] == RiskPlanning._meta.get_field('RP_DrC_IncomeExistingShortfallSurplus').default and     
                    RiskPlanningData['RP_DrC_IncomeInvestments'] == RiskPlanning._meta.get_field('RP_DrC_IncomeInvestments').default and     
                    RiskPlanningData['RP_DrC_Other1'] == RiskPlanning._meta.get_field('RP_DrC_Other1').default and     
                    RiskPlanningData['RP_DrC_OtherTotalNeed1'] == RiskPlanning._meta.get_field('RP_DrC_OtherTotalNeed1').default and     
                    RiskPlanningData['RP_DrC_OtherExistingProvisions1'] == RiskPlanning._meta.get_field('RP_DrC_OtherExistingProvisions1').default and     
                    RiskPlanningData['RP_DrC_OtherExistingShortfallSurplus1'] == RiskPlanning._meta.get_field('RP_DrC_OtherExistingShortfallSurplus1').default and     
                    RiskPlanningData['RP_DrC_OtherInvestments1'] == RiskPlanning._meta.get_field('RP_DrC_OtherInvestments1').default and      
                    RiskPlanningData['RP_DrC_Other2'] == RiskPlanning._meta.get_field('RP_DrC_Other2').default and     
                    RiskPlanningData['RP_DrC_OtherTotalNeed2'] == RiskPlanning._meta.get_field('RP_DrC_OtherTotalNeed2').default and     
                    RiskPlanningData['RP_DrC_OtherExistingProvisions2'] == RiskPlanning._meta.get_field('RP_DrC_OtherExistingProvisions2').default and     
                    RiskPlanningData['RP_DrC_OtherExistingShortfallSurplus2'] == RiskPlanning._meta.get_field('RP_DrC_OtherExistingShortfallSurplus2').default and     
                    RiskPlanningData['RP_DrC_OtherInvestments2'] == RiskPlanning._meta.get_field('RP_DrC_OtherInvestments2').default and      
                    RiskPlanningData['RP_DrC_Comments'] == RiskPlanning._meta.get_field('RP_DrC_Comments').default and     
                    RiskPlanningData['RP_LC_FinancialSolutions'] == RiskPlanning._meta.get_field('RP_LC_FinancialSolutions').default and     
                    RiskPlanningData['RP_DiC_FinancialSolutions'] == RiskPlanning._meta.get_field('RP_DiC_FinancialSolutions').default and     
                    RiskPlanningData['RP_DrC_FinancialSolutions'] == RiskPlanning._meta.get_field('RP_DrC_FinancialSolutions').default and     
                    RiskPlanningData['RP_AltS_1'] == RiskPlanning._meta.get_field('RP_AltS_1').default and     
                    RiskPlanningData['RP_AltS_2'] == RiskPlanning._meta.get_field('RP_AltS_2').default and     
                    RiskPlanningData['RP_AltS_3'] == RiskPlanning._meta.get_field('RP_AltS_3').default and     
                    RiskPlanningData['RP_Product_Taken'] == RiskPlanning._meta.get_field('RP_Product_Taken').default and    
                    RiskPlanningData['RP_Product_Provider'] == RiskPlanning._meta.get_field('RP_Product_Provider').default and     
                    RiskPlanningData['RP_Policy_Number'] == RiskPlanning._meta.get_field('RP_Policy_Number').default and     
                    RiskPlanningData['RP_Product_Name'] == RiskPlanning._meta.get_field('RP_Product_Name').default and     
                    RiskPlanningData['RP_Product_Premium'] == RiskPlanning._meta.get_field('RP_Product_Premium').default and     
                    RiskPlanningData['RP_Product_PremiumFrequency'] == RiskPlanning._meta.get_field('RP_Product_PremiumFrequency').default and    
                    RiskPlanningData['RP_Product_Pattern'] == RiskPlanning._meta.get_field('RP_Product_Pattern').default and     
                    RiskPlanningData['RP_Product_Escalation'] == RiskPlanning._meta.get_field('RP_Product_Escalation').default and     
                    RiskPlanningData['RP_Product_ContractingParty'] == RiskPlanning._meta.get_field('RP_Product_ContractingParty').default and     
                    RiskPlanningData['RP_Product_LivesAssured'] == RiskPlanning._meta.get_field('RP_Product_LivesAssured').default and     
                    RiskPlanningData['RP_Product_Beneficiary'] == RiskPlanning._meta.get_field('RP_Product_Beneficiary').default and     
                    RiskPlanningData['RP_Product_PremiumPayer'] == RiskPlanning._meta.get_field('RP_Product_PremiumPayer').default and     
                    RiskPlanningData['RP_Product_1stYearCommission'] == RiskPlanning._meta.get_field('RP_Product_1stYearCommission').default and     
                    RiskPlanningData['RP_Product_2ndYearCommission'] == RiskPlanning._meta.get_field('RP_Product_2ndYearCommission').default and     
                    RiskPlanningData['RP_Product_OngoingFees'] == RiskPlanning._meta.get_field('RP_Product_OngoingFees').default and     
                    RiskPlanningData['RP_Product_OngoingFeesFrequency'] == RiskPlanning._meta.get_field('RP_Product_OngoingFeesFrequency').default and     
                    RiskPlanningData['RP_Product_OngoingFeesFrequency1'] == RiskPlanning._meta.get_field('RP_Product_OngoingFeesFrequency1').default and 
                    RiskPlanningData['RP_TotalFees_n_Commissions'] == RiskPlanning._meta.get_field('RP_TotalFees_n_Commissions').default and  
                    RiskPlanningData['RP_BenDesc_1'] == RiskPlanning._meta.get_field('RP_BenDesc_1').default and 
                    RiskPlanningData['RP_BenDesc_CoverAmount1'] == RiskPlanning._meta.get_field('RP_BenDesc_CoverAmount1').default and 
                    RiskPlanningData['RP_BenDesc_2'] == RiskPlanning._meta.get_field('RP_BenDesc_2').default and 
                    RiskPlanningData['RP_BenDesc_CoverAmount2'] == RiskPlanning._meta.get_field('RP_BenDesc_CoverAmount2').default and 
                    RiskPlanningData['RP_BenDesc_3'] == RiskPlanning._meta.get_field('RP_BenDesc_3').default and 
                    RiskPlanningData['RP_BenDesc_CoverAmount3'] == RiskPlanning._meta.get_field('RP_BenDesc_CoverAmount3').default and 
                    RiskPlanningData['RP_BenDesc_4'] == RiskPlanning._meta.get_field('RP_BenDesc_4').default and 
                    RiskPlanningData['RP_BenDesc_CoverAmount4'] == RiskPlanning._meta.get_field('RP_BenDesc_CoverAmount4').default and 
                    RiskPlanningData['RP_BenDesc_5'] == RiskPlanning._meta.get_field('RP_BenDesc_5').default and 
                    RiskPlanningData['RP_BenDesc_CoverAmount5'] == RiskPlanning._meta.get_field('RP_BenDesc_CoverAmount5').default and 
                    RiskPlanningData['RP_BenDesc_6'] == RiskPlanning._meta.get_field('RP_BenDesc_6').default and 
                    RiskPlanningData['RP_BenDesc_CoverAmount6'] == RiskPlanning._meta.get_field('RP_BenDesc_CoverAmount6').default and 
                    RiskPlanningData['RP_BenDesc_7'] == RiskPlanning._meta.get_field('RP_BenDesc_7').default and 
                    RiskPlanningData['RP_BenDesc_CoverAmount7'] == RiskPlanning._meta.get_field('RP_BenDesc_CoverAmount7').default and 
                    RiskPlanningData['RP_ProductReasons'] == RiskPlanning._meta.get_field('RP_ProductReasons').default and 
                    RiskPlanningData['RP_ProductMaterialAspects'] == RiskPlanning._meta.get_field('RP_ProductMaterialAspects').default and 
                    RiskPlanningData['RP_ProductDetails'] == RiskPlanning._meta.get_field('RP_ProductDetails').default and 
                    RiskPlanningData['RP_ExecutorFee'] == RiskPlanning._meta.get_field('RP_ExecutorFee').default and 
                    RiskPlanningData['RP_NominationOfBeneficiaries'] == RiskPlanning._meta.get_field('RP_NominationOfBeneficiaries').default and 
                    RiskPlanningData['RP_InformationExplained'] == RiskPlanning._meta.get_field('RP_InformationExplained').default  
                )):
                    form['RP_DC_LumpSumTotalNeed'] = "N.A."     
                    form['RP_DC_LumpSumExistingProvisions'] = "N.A."     
                    form['RP_DC_LumpSumExistingShortfallSurplus'] = "N.A."     
                    form['RP_DC_LumpSumInvestments'] = "N.A."     
                    form['RP_DC_IncomeExistingProvisions'] = "N.A."     
                    form['RP_DC_IncomeExistingShortfallSurplus'] = "N.A."     
                    form['RP_DC_IncomeInvestments'] = "N.A."     
                    form['RP_DC_IncomeTotalNeed'] = "N.A."     
                    form['RP_DC_FB_TotalNeed'] = "N.A."     
                    form['RP_DC_FB_ExistingProvisions'] = "N.A."     
                    form['RP_DC_FB_ExistingShortfallSurplus'] = "N.A."     
                    form['RP_DC_FB_Investments'] = "N.A."     
                    form['RP_DC_Other'] = "N.A."     
                    form['RP_DC_OtherTotalNeed'] = "N.A."     
                    form['RP_DC_OtherExistingProvisions'] = "N.A."     
                    form['RP_DC_OtherExistingShortfallSurplus'] = "N.A."     
                    form['RP_DC_OtherInvestments'] = "N.A."    
                    form['RP_DC_Comments'] = "N.A."     
                    form['RP_DiC_LumpSumTotalNeed'] = "N.A."     
                    form['RP_DiC_LumpSumExistingProvisions'] = "N.A."     
                    form['RP_DiC_LumpSumExistingShortfallSurplus'] = "N.A."     
                    form['RP_DiC_LumpSumInvestments'] = "N.A."     
                    form['RP_DiC_PI_TotalNeed'] = "N.A."     
                    form['RP_DiC_PI_ExistingProvisions'] = "N.A."     
                    form['RP_DiC_PI_ExistingShortfallSurplus'] = "N.A."     
                    form['RP_DiC_PI_Investments'] = "N.A."     
                    form['RP_DiC_TI_TotalNeed'] = "N.A."     
                    form['RP_DiC_TI_ExistingProvisions'] = "N.A."     
                    form['RP_DiC_TI_ExistingShortfallSurplus'] = "N.A."     
                    form['RP_DiC_TI_Investments'] = "N.A."         
                    form['RP_DiC_SiB_TotalNeed'] = "N.A."     
                    form['RP_DiC_SiB_ExistingProvisions'] = "N.A."     
                    form['RP_DiC_SiB_ExistingShortfallSurplus'] = "N.A."     
                    form['RP_DiC_SiB_Investments'] = "N.A."   
                    form['RP_DiC_Other1'] = "N.A."     
                    form['RP_DiC_OtherTotalNeed1'] = "N.A."     
                    form['RP_DiC_OtherExistingProvisions1'] = "N.A."     
                    form['RP_DiC_OtherExistingShortfallSurplus1'] = "N.A."     
                    form['RP_DiC_OtherInvestments1'] = "N.A."      
                    form['RP_DiC_Other2'] = "N.A."     
                    form['RP_DiC_OtherTotalNeed2'] = "N.A."     
                    form['RP_DiC_OtherExistingProvisions2'] = "N.A."     
                    form['RP_DiC_OtherExistingShortfallSurplus2'] = "N.A."     
                    form['RP_DiC_OtherInvestments2'] = "N.A."      
                    form['RP_DiC_Comments'] = "N.A."     
                    form['RP_DrC_LumpSumTotalNeed'] = "N.A."     
                    form['RP_DrC_LumpSumExistingProvisions'] = "N.A."     
                    form['RP_DrC_LumpSumExistingShortfallSurplus'] = "N.A."     
                    form['RP_DrC_LumpSumInvestments'] = "N.A."     
                    form['RP_DrC_IncomeTotalNeed'] = "N.A."     
                    form['RP_DrC_IncomeExistingProvisions'] = "N.A."     
                    form['RP_DrC_IncomeExistingShortfallSurplus'] = "N.A."     
                    form['RP_DrC_IncomeInvestments'] = "N.A."     
                    form['RP_DrC_Other1'] = "N.A."     
                    form['RP_DrC_OtherTotalNeed1'] = "N.A."     
                    form['RP_DrC_OtherExistingProvisions1'] = "N.A."     
                    form['RP_DrC_OtherExistingShortfallSurplus1'] = "N.A."     
                    form['RP_DrC_OtherInvestments1'] = "N.A."      
                    form['RP_DrC_Other2'] = "N.A."     
                    form['RP_DrC_OtherTotalNeed2'] = "N.A."     
                    form['RP_DrC_OtherExistingProvisions2'] = "N.A."     
                    form['RP_DrC_OtherExistingShortfallSurplus2'] = "N.A."     
                    form['RP_DrC_OtherInvestments2'] = "N.A."      
                    form['RP_DrC_Comments'] = "N.A."     
                    form['RP_LC_FinancialSolutions'] = "N.A."     
                    form['RP_DiC_FinancialSolutions'] = "N.A."     
                    form['RP_DrC_FinancialSolutions'] = "N.A."     
                    form['RP_AltS_1'] = "N.A."     
                    form['RP_AltS_2'] = "N.A."     
                    form['RP_AltS_3'] = "N.A."     
                    form['RP_Product_Taken'] = "N.A."    
                    form['RP_Product_Provider'] = "N.A."     
                    form['RP_Policy_Number'] = "N.A."     
                    form['RP_Product_Name'] = "N.A."     
                    form['RP_Product_Premium'] = "N.A."     
                    form['RP_Product_PremiumFrequency'] = "N.A."    
                    form['RP_Product_Pattern'] = "N.A."     
                    form['RP_Product_Escalation'] = "N.A."     
                    form['RP_Product_ContractingParty'] = "N.A."     
                    form['RP_Product_LivesAssured'] = "N.A."     
                    form['RP_Product_Beneficiary'] = "N.A."     
                    form['RP_Product_PremiumPayer'] = "N.A."     
                    form['RP_Product_1stYearCommission'] = "N.A."     
                    form['RP_Product_2ndYearCommission'] = "N.A."     
                    form['RP_Product_OngoingFees'] = "N.A."     
                    form['RP_Product_OngoingFeesFrequency'] = "N.A."     
                    form['RP_Product_OngoingFeesFrequency1'] = "N.A." 
                    form['RP_TotalFees_n_Commissions'] = "N.A."  
                    form['RP_BenDesc_1'] = "N.A." 
                    form['RP_BenDesc_CoverAmount1'] = "N.A." 
                    form['RP_BenDesc_2'] = "N.A." 
                    form['RP_BenDesc_CoverAmount2'] = "N.A." 
                    form['RP_BenDesc_3'] = "N.A." 
                    form['RP_BenDesc_CoverAmount3'] = "N.A." 
                    form['RP_BenDesc_4'] = "N.A." 
                    form['RP_BenDesc_CoverAmount4'] = "N.A." 
                    form['RP_BenDesc_5'] = "N.A." 
                    form['RP_BenDesc_CoverAmount5'] = "N.A." 
                    form['RP_BenDesc_6'] = "N.A." 
                    form['RP_BenDesc_CoverAmount6'] = "N.A." 
                    form['RP_BenDesc_7'] = "N.A." 
                    form['RP_BenDesc_CoverAmount7'] = "N.A." 
                    form['RP_ProductReasons'] = "N.A." 
                    form['RP_ProductMaterialAspects'] = "N.A." 
                    form['RP_ProductDetails'] = "N.A." 
                    form['RP_ExecutorFee'] = "N.A." 
                    form['RP_NominationOfBeneficiaries'] = "N.A." 
                    form['RP_InformationExplained'] = "N.A." 
            else:  
                RP_Product_PremiumFrequency = [ "" ,"Monthly", "Quarterly", "Annually", "Once Off"]             
                form['RP_DC_LumpSumTotalNeed'] = RiskPlanningData['RP_DC_LumpSumTotalNeed']     
                form['RP_DC_LumpSumExistingProvisions'] = RiskPlanningData['RP_DC_LumpSumExistingProvisions']     
                form['RP_DC_LumpSumExistingShortfallSurplus'] = RiskPlanningData['RP_DC_LumpSumExistingShortfallSurplus']     
                form['RP_DC_LumpSumInvestments'] = RiskPlanningData['RP_DC_LumpSumInvestments']     
                form['RP_DC_IncomeTotalNeed'] = RiskPlanningData['RP_DC_IncomeTotalNeed']     
                form['RP_DC_IncomeExistingProvisions'] = RiskPlanningData['RP_DC_IncomeExistingProvisions']     
                form['RP_DC_IncomeExistingShortfallSurplus'] = RiskPlanningData['RP_DC_IncomeExistingShortfallSurplus']     
                form['RP_DC_IncomeInvestments'] = RiskPlanningData['RP_DC_IncomeInvestments']     
                form['RP_DC_FB_TotalNeed'] = RiskPlanningData['RP_DC_FB_TotalNeed']     
                form['RP_DC_FB_ExistingProvisions'] = RiskPlanningData['RP_DC_FB_ExistingProvisions']     
                form['RP_DC_FB_ExistingShortfallSurplus'] = RiskPlanningData['RP_DC_FB_ExistingShortfallSurplus']     
                form['RP_DC_FB_Investments'] = RiskPlanningData['RP_DC_FB_Investments']     
                form['RP_DC_Other'] = RiskPlanningData['RP_DC_Other']     
                form['RP_DC_OtherTotalNeed'] = RiskPlanningData['RP_DC_OtherTotalNeed']     
                form['RP_DC_OtherExistingProvisions'] = RiskPlanningData['RP_DC_OtherExistingProvisions']     
                form['RP_DC_OtherExistingShortfallSurplus'] = RiskPlanningData['RP_DC_OtherExistingShortfallSurplus']     
                form['RP_DC_OtherInvestments'] = RiskPlanningData['RP_DC_OtherInvestments']    
                form['RP_DC_Comments'] = RiskPlanningData['RP_DC_Comments']     
                form['RP_DiC_LumpSumTotalNeed'] = RiskPlanningData['RP_DiC_LumpSumTotalNeed']     
                form['RP_DiC_LumpSumExistingProvisions'] = RiskPlanningData['RP_DiC_LumpSumExistingProvisions']     
                form['RP_DiC_LumpSumExistingShortfallSurplus'] = RiskPlanningData['RP_DiC_LumpSumExistingShortfallSurplus']     
                form['RP_DiC_LumpSumInvestments'] = RiskPlanningData['RP_DiC_LumpSumInvestments']     
                form['RP_DiC_PI_TotalNeed'] = RiskPlanningData['RP_DiC_PI_TotalNeed']     
                form['RP_DiC_PI_ExistingProvisions'] = RiskPlanningData['RP_DiC_PI_ExistingProvisions']     
                form['RP_DiC_PI_ExistingShortfallSurplus'] = RiskPlanningData['RP_DiC_PI_ExistingShortfallSurplus']     
                form['RP_DiC_PI_Investments'] = RiskPlanningData['RP_DiC_PI_Investments']     
                form['RP_DiC_TI_TotalNeed'] = RiskPlanningData['RP_DiC_TI_TotalNeed']     
                form['RP_DiC_TI_ExistingProvisions'] = RiskPlanningData['RP_DiC_TI_ExistingProvisions']     
                form['RP_DiC_TI_ExistingShortfallSurplus'] = RiskPlanningData['RP_DiC_TI_ExistingShortfallSurplus']     
                form['RP_DiC_TI_Investments'] = RiskPlanningData['RP_DiC_TI_Investments']         
                form['RP_DiC_SiB_TotalNeed'] = RiskPlanningData['RP_DiC_SiB_TotalNeed']     
                form['RP_DiC_SiB_ExistingProvisions'] = RiskPlanningData['RP_DiC_SiB_ExistingProvisions']     
                form['RP_DiC_SiB_ExistingShortfallSurplus'] = RiskPlanningData['RP_DiC_SiB_ExistingShortfallSurplus']     
                form['RP_DiC_SiB_Investments'] = RiskPlanningData['RP_DiC_SiB_Investments']   
                form['RP_DiC_Other1'] = RiskPlanningData['RP_DiC_Other1']     
                form['RP_DiC_OtherTotalNeed1'] = RiskPlanningData['RP_DiC_OtherTotalNeed1']     
                form['RP_DiC_OtherExistingProvisions1'] = RiskPlanningData['RP_DiC_OtherExistingProvisions1']     
                form['RP_DiC_OtherExistingShortfallSurplus1'] = RiskPlanningData['RP_DiC_OtherExistingShortfallSurplus1']     
                form['RP_DiC_OtherInvestments1'] = RiskPlanningData['RP_DiC_OtherInvestments1']      
                form['RP_DiC_Other2'] = RiskPlanningData['RP_DiC_Other2']     
                form['RP_DiC_OtherTotalNeed2'] = RiskPlanningData['RP_DiC_OtherTotalNeed2']     
                form['RP_DiC_OtherExistingProvisions2'] = RiskPlanningData['RP_DiC_OtherExistingProvisions2']     
                form['RP_DiC_OtherExistingShortfallSurplus2'] = RiskPlanningData['RP_DiC_OtherExistingShortfallSurplus2']     
                form['RP_DiC_OtherInvestments2'] = RiskPlanningData['RP_DiC_OtherInvestments2']      
                form['RP_DiC_Comments'] = RiskPlanningData['RP_DiC_Comments']     
                form['RP_DrC_LumpSumTotalNeed'] = RiskPlanningData['RP_DrC_LumpSumTotalNeed']     
                form['RP_DrC_LumpSumExistingProvisions'] = RiskPlanningData['RP_DrC_LumpSumExistingProvisions']     
                form['RP_DrC_LumpSumExistingShortfallSurplus'] = RiskPlanningData['RP_DrC_LumpSumExistingShortfallSurplus']     
                form['RP_DrC_LumpSumInvestments'] = RiskPlanningData['RP_DrC_LumpSumInvestments']     
                form['RP_DrC_IncomeTotalNeed'] = RiskPlanningData['RP_DrC_IncomeTotalNeed']     
                form['RP_DrC_IncomeExistingProvisions'] = RiskPlanningData['RP_DrC_IncomeExistingProvisions']     
                form['RP_DrC_IncomeExistingShortfallSurplus'] = RiskPlanningData['RP_DrC_IncomeExistingShortfallSurplus']     
                form['RP_DrC_IncomeInvestments'] = RiskPlanningData['RP_DrC_IncomeInvestments']     
                form['RP_DrC_Other1'] = RiskPlanningData['RP_DrC_Other1']     
                form['RP_DrC_OtherTotalNeed1'] = RiskPlanningData['RP_DrC_OtherTotalNeed1']     
                form['RP_DrC_OtherExistingProvisions1'] = RiskPlanningData['RP_DrC_OtherExistingProvisions1']     
                form['RP_DrC_OtherExistingShortfallSurplus1'] = RiskPlanningData['RP_DrC_OtherExistingShortfallSurplus1']     
                form['RP_DrC_OtherInvestments1'] = RiskPlanningData['RP_DrC_OtherInvestments1']      
                form['RP_DrC_Other2'] = RiskPlanningData['RP_DrC_Other2']     
                form['RP_DrC_OtherTotalNeed2'] = RiskPlanningData['RP_DrC_OtherTotalNeed2']     
                form['RP_DrC_OtherExistingProvisions2'] = RiskPlanningData['RP_DrC_OtherExistingProvisions2']     
                form['RP_DrC_OtherExistingShortfallSurplus2'] = RiskPlanningData['RP_DrC_OtherExistingShortfallSurplus2']     
                form['RP_DrC_OtherInvestments2'] = RiskPlanningData['RP_DrC_OtherInvestments2']      
                form['RP_DrC_Comments'] = RiskPlanningData['RP_DrC_Comments']     
                form['RP_LC_FinancialSolutions'] = RiskPlanningData['RP_LC_FinancialSolutions']     
                form['RP_DiC_FinancialSolutions'] = RiskPlanningData['RP_DiC_FinancialSolutions']     
                form['RP_DrC_FinancialSolutions'] = RiskPlanningData['RP_DrC_FinancialSolutions']     
                form['RP_AltS_1'] = RiskPlanningData['RP_AltS_1']     
                form['RP_AltS_2'] = RiskPlanningData['RP_AltS_2']     
                form['RP_AltS_3'] = RiskPlanningData['RP_AltS_3']     
                form['RP_Product_Taken'] = RiskPlanningData['RP_Product_Taken']    
                form['RP_Product_Provider'] = RiskPlanningData['RP_Product_Provider']     
                form['RP_Policy_Number'] = RiskPlanningData['RP_Policy_Number']     
                form['RP_Product_Name'] = RiskPlanningData['RP_Product_Name']     
                form['RP_Product_Premium'] = RiskPlanningData['RP_Product_Premium']     
                form['RP_Product_PremiumFrequency'] = RP_Product_PremiumFrequency[int(RiskPlanningData['RP_Product_PremiumFrequency'])] if RiskPlanningData['RP_Product_PremiumFrequency'] is not None else RP_Product_PremiumFrequency[0]
                form['RP_Product_Pattern'] = RiskPlanningData['RP_Product_Pattern']     
                form['RP_Product_Escalation'] = RiskPlanningData['RP_Product_Escalation']     
                form['RP_Product_ContractingParty'] = RiskPlanningData['RP_Product_ContractingParty']     
                form['RP_Product_LivesAssured'] = RiskPlanningData['RP_Product_LivesAssured']     
                form['RP_Product_Beneficiary'] = RiskPlanningData['RP_Product_Beneficiary']     
                form['RP_Product_PremiumPayer'] = RiskPlanningData['RP_Product_PremiumPayer']     
                form['RP_Product_1stYearCommission'] = RiskPlanningData['RP_Product_1stYearCommission']     
                form['RP_Product_2ndYearCommission'] = RiskPlanningData['RP_Product_2ndYearCommission']     
                form['RP_Product_OngoingFees'] = RiskPlanningData['RP_Product_OngoingFees']     
                form['RP_Product_OngoingFeesFrequency'] = RP_Product_PremiumFrequency[int(RiskPlanningData['RP_Product_OngoingFeesFrequency'])]  if RiskPlanningData['RP_Product_OngoingFeesFrequency'] != "" else RP_Product_PremiumFrequency[0]   
                form['RP_Product_OngoingFeesFrequency1'] = RP_Product_PremiumFrequency[int(RiskPlanningData['RP_Product_OngoingFeesFrequency1'])] if RiskPlanningData['RP_Product_OngoingFeesFrequency1'] is not None else RP_Product_PremiumFrequency[0]
                form['RP_TotalFees_n_Commissions'] = RiskPlanningData['RP_TotalFees_n_Commissions']  
                form['RP_BenDesc_1'] = RiskPlanningData['RP_BenDesc_1'] 
                form['RP_BenDesc_CoverAmount1'] = RiskPlanningData['RP_BenDesc_CoverAmount1'] 
                form['RP_BenDesc_2'] = RiskPlanningData['RP_BenDesc_2'] 
                form['RP_BenDesc_CoverAmount2'] = RiskPlanningData['RP_BenDesc_CoverAmount2'] 
                form['RP_BenDesc_3'] = RiskPlanningData['RP_BenDesc_3'] 
                form['RP_BenDesc_CoverAmount3'] = RiskPlanningData['RP_BenDesc_CoverAmount3'] 
                form['RP_BenDesc_4'] = RiskPlanningData['RP_BenDesc_4'] 
                form['RP_BenDesc_CoverAmount4'] = RiskPlanningData['RP_BenDesc_CoverAmount4'] 
                form['RP_BenDesc_5'] = RiskPlanningData['RP_BenDesc_5'] 
                form['RP_BenDesc_CoverAmount5'] = RiskPlanningData['RP_BenDesc_CoverAmount5'] 
                form['RP_BenDesc_6'] = RiskPlanningData['RP_BenDesc_6'] 
                form['RP_BenDesc_CoverAmount6'] = RiskPlanningData['RP_BenDesc_CoverAmount6'] 
                form['RP_BenDesc_7'] = RiskPlanningData['RP_BenDesc_7'] 
                form['RP_BenDesc_CoverAmount7'] = RiskPlanningData['RP_BenDesc_CoverAmount7'] 
                form['RP_ProductReasons'] = RiskPlanningData['RP_ProductReasons'] 
                form['RP_ProductMaterialAspects'] = RiskPlanningData['RP_ProductMaterialAspects'] 
                form['RP_ProductDetails'] = RiskPlanningData['RP_ProductDetails'] 
                form['RP_ExecutorFee'] = RiskPlanningData['RP_ExecutorFee'] 
                form['RP_NominationOfBeneficiaries'] = RiskPlanningData['RP_NominationOfBeneficiaries'] 
                form['RP_InformationExplained'] = RiskPlanningData['RP_InformationExplained'] 
        else:
            form['RP_DC_LumpSumTotalNeed'] = "N.A."     
            form['RP_DC_LumpSumExistingProvisions'] = "N.A."     
            form['RP_DC_LumpSumExistingShortfallSurplus'] = "N.A."     
            form['RP_DC_LumpSumInvestments'] = "N.A."     
            form['RP_DC_IncomeTotalNeed'] = "N.A."     
            form['RP_DC_IncomeExistingProvisions'] = "N.A."     
            form['RP_DC_IncomeExistingShortfallSurplus'] = "N.A."     
            form['RP_DC_IncomeInvestments'] = "N.A."     
            form['RP_DC_FB_TotalNeed'] = "N.A."     
            form['RP_DC_FB_ExistingProvisions'] = "N.A."     
            form['RP_DC_FB_ExistingShortfallSurplus'] = "N.A."     
            form['RP_DC_FB_Investments'] = "N.A."     
            form['RP_DC_Other'] = "N.A."     
            form['RP_DC_OtherTotalNeed'] = "N.A."     
            form['RP_DC_OtherExistingProvisions'] = "N.A."     
            form['RP_DC_OtherExistingShortfallSurplus'] = "N.A."     
            form['RP_DC_OtherInvestments'] = "N.A."    
            form['RP_DC_Comments'] = "N.A."     
            form['RP_DiC_LumpSumTotalNeed'] = "N.A."     
            form['RP_DiC_LumpSumExistingProvisions'] = "N.A."     
            form['RP_DiC_LumpSumExistingShortfallSurplus'] = "N.A."     
            form['RP_DiC_LumpSumInvestments'] = "N.A."     
            form['RP_DiC_PI_TotalNeed'] = "N.A."     
            form['RP_DiC_PI_ExistingProvisions'] = "N.A."     
            form['RP_DiC_PI_ExistingShortfallSurplus'] = "N.A."     
            form['RP_DiC_PI_Investments'] = "N.A."     
            form['RP_DiC_TI_TotalNeed'] = "N.A."     
            form['RP_DiC_TI_ExistingProvisions'] = "N.A."     
            form['RP_DiC_TI_ExistingShortfallSurplus'] = "N.A."     
            form['RP_DiC_TI_Investments'] = "N.A."         
            form['RP_DiC_SiB_TotalNeed'] = "N.A."     
            form['RP_DiC_SiB_ExistingProvisions'] = "N.A."     
            form['RP_DiC_SiB_ExistingShortfallSurplus'] = "N.A."     
            form['RP_DiC_SiB_Investments'] = "N.A."   
            form['RP_DiC_Other1'] = "N.A."     
            form['RP_DiC_OtherTotalNeed1'] = "N.A."     
            form['RP_DiC_OtherExistingProvisions1'] = "N.A."     
            form['RP_DiC_OtherExistingShortfallSurplus1'] = "N.A."     
            form['RP_DiC_OtherInvestments1'] = "N.A."      
            form['RP_DiC_Other2'] = "N.A."     
            form['RP_DiC_OtherTotalNeed2'] = "N.A."     
            form['RP_DiC_OtherExistingProvisions2'] = "N.A."     
            form['RP_DiC_OtherExistingShortfallSurplus2'] = "N.A."     
            form['RP_DiC_OtherInvestments2'] = "N.A."      
            form['RP_DiC_Comments'] = "N.A."     
            form['RP_DrC_LumpSumTotalNeed'] = "N.A."     
            form['RP_DrC_LumpSumExistingProvisions'] = "N.A."     
            form['RP_DrC_LumpSumExistingShortfallSurplus'] = "N.A."     
            form['RP_DrC_LumpSumInvestments'] = "N.A."     
            form['RP_DrC_IncomeTotalNeed'] = "N.A."     
            form['RP_DrC_IncomeExistingProvisions'] = "N.A."     
            form['RP_DrC_IncomeExistingShortfallSurplus'] = "N.A."     
            form['RP_DrC_IncomeInvestments'] = "N.A."     
            form['RP_DrC_Other1'] = "N.A."     
            form['RP_DrC_OtherTotalNeed1'] = "N.A."     
            form['RP_DrC_OtherExistingProvisions1'] = "N.A."     
            form['RP_DrC_OtherExistingShortfallSurplus1'] = "N.A."     
            form['RP_DrC_OtherInvestments1'] = "N.A."      
            form['RP_DrC_Other2'] = "N.A."     
            form['RP_DrC_OtherTotalNeed2'] = "N.A."     
            form['RP_DrC_OtherExistingProvisions2'] = "N.A."     
            form['RP_DrC_OtherExistingShortfallSurplus2'] = "N.A."     
            form['RP_DrC_OtherInvestments2'] = "N.A."      
            form['RP_DrC_Comments'] = "N.A."     
            form['RP_LC_FinancialSolutions'] = "N.A."     
            form['RP_DiC_FinancialSolutions'] = "N.A."     
            form['RP_DrC_FinancialSolutions'] = "N.A."     
            form['RP_AltS_1'] = "N.A."     
            form['RP_AltS_2'] = "N.A."     
            form['RP_AltS_3'] = "N.A."     
            form['RP_Product_Taken'] = "N.A."    
            form['RP_Product_Provider'] = "N.A."     
            form['RP_Policy_Number'] = "N.A."     
            form['RP_Product_Name'] = "N.A."     
            form['RP_Product_Premium'] = "N.A."     
            form['RP_Product_PremiumFrequency'] = "N.A."    
            form['RP_Product_Pattern'] = "N.A."     
            form['RP_Product_Escalation'] = "N.A."     
            form['RP_Product_ContractingParty'] = "N.A."     
            form['RP_Product_LivesAssured'] = "N.A."     
            form['RP_Product_Beneficiary'] = "N.A."     
            form['RP_Product_PremiumPayer'] = "N.A."     
            form['RP_Product_1stYearCommission'] = "N.A."     
            form['RP_Product_2ndYearCommission'] = "N.A."     
            form['RP_Product_OngoingFees'] = "N.A."     
            form['RP_Product_OngoingFeesFrequency'] = "N.A."     
            form['RP_Product_OngoingFeesFrequency1'] = "N.A." 
            form['RP_TotalFees_n_Commissions'] = "N.A."  
            form['RP_BenDesc_1'] = "N.A." 
            form['RP_BenDesc_CoverAmount1'] = "N.A." 
            form['RP_BenDesc_2'] = "N.A." 
            form['RP_BenDesc_CoverAmount2'] = "N.A." 
            form['RP_BenDesc_3'] = "N.A." 
            form['RP_BenDesc_CoverAmount3'] = "N.A." 
            form['RP_BenDesc_4'] = "N.A." 
            form['RP_BenDesc_CoverAmount4'] = "N.A." 
            form['RP_BenDesc_5'] = "N.A." 
            form['RP_BenDesc_CoverAmount5'] = "N.A." 
            form['RP_BenDesc_6'] = "N.A." 
            form['RP_BenDesc_CoverAmount6'] = "N.A." 
            form['RP_BenDesc_7'] = "N.A." 
            form['RP_BenDesc_CoverAmount7'] = "N.A." 
            form['RP_ProductReasons'] = "N.A." 
            form['RP_ProductMaterialAspects'] = "N.A." 
            form['RP_ProductDetails'] = "N.A." 
            form['RP_ExecutorFee'] = "N.A." 
            form['RP_NominationOfBeneficiaries'] = "N.A." 
            form['RP_InformationExplained'] = "N.A." 

        
        IP_Data = InvestmentPlanning.objects.filter(formId=form['id']).values()
        if len(IP_Data) != 0:                
            IP_Data = InvestmentPlanning.objects.filter(formId=form['id']).values().first()
            if ((
                    IP_Data['IP_SourceOfIncome'] == InvestmentPlanning._meta.get_field('IP_SourceOfIncome').default and
                    IP_Data['IP_OtherSourceOfIncome'] == InvestmentPlanning._meta.get_field('IP_OtherSourceOfIncome').default and    
                    IP_Data['IP_InvestmentTerm'] == InvestmentPlanning._meta.get_field('IP_InvestmentTerm').default and    
                    IP_Data['IP_InvestmentTermDetails'] == InvestmentPlanning._meta.get_field('IP_InvestmentTermDetails').default and    
                    IP_Data['IP_Liquidity'] == InvestmentPlanning._meta.get_field('IP_Liquidity').default and    
                    IP_Data['IP_LiquidityDetails'] == InvestmentPlanning._meta.get_field('IP_LiquidityDetails').default and      
                    IP_Data['IP_Type'] == InvestmentPlanning._meta.get_field('IP_Type').default and    
                    IP_Data['IP_TypeDetails'] == InvestmentPlanning._meta.get_field('IP_TypeDetails').default and      
                    IP_Data['IP_PremiumType'] == InvestmentPlanning._meta.get_field('IP_PremiumType').default and    
                    IP_Data['IP_PremiumTypeDetails'] == InvestmentPlanning._meta.get_field('IP_PremiumTypeDetails').default and      
                    IP_Data['IP_IncomeRequired'] == InvestmentPlanning._meta.get_field('IP_IncomeRequired').default and    
                    IP_Data['IP_IncomeRequiredDetails'] == InvestmentPlanning._meta.get_field('IP_IncomeRequiredDetails').default and      
                    IP_Data['IP_InvestmentStrategy'] == InvestmentPlanning._meta.get_field('IP_InvestmentStrategy').default and    
                    IP_Data['IP_InvestmentStrategyDetails'] == InvestmentPlanning._meta.get_field('IP_InvestmentStrategyDetails').default and    
                    IP_Data['IP_ReturnRequired'] == InvestmentPlanning._meta.get_field('IP_ReturnRequired').default and    
                    IP_Data['IP_ReturnRequiredDetails'] == InvestmentPlanning._meta.get_field('IP_ReturnRequiredDetails').default and    
                    IP_Data['IP_RiskProfile'] == InvestmentPlanning._meta.get_field('IP_RiskProfile').default and      
                    IP_Data['IP_RiskProfileDetails'] == InvestmentPlanning._meta.get_field('IP_RiskProfileDetails').default and      
                    IP_Data['IP_RecommendationSummary'] == InvestmentPlanning._meta.get_field('IP_RecommendationSummary').default and 
                    IP_Data['IP_AltS_1'] == InvestmentPlanning._meta.get_field('IP_AltS_1').default and    
                    IP_Data['IP_AltS_2'] == InvestmentPlanning._meta.get_field('IP_AltS_2').default and    
                    IP_Data['IP_AltS_3'] == InvestmentPlanning._meta.get_field('IP_AltS_3').default and    
                    IP_Data['IP_ProductTaken'] == InvestmentPlanning._meta.get_field('IP_ProductTaken').default and    
                    IP_Data['IP_ProductProvider'] == InvestmentPlanning._meta.get_field('IP_ProductProvider').default and    
                    IP_Data['IP_PolicyNumber'] == InvestmentPlanning._meta.get_field('IP_PolicyNumber').default and    
                    IP_Data['IP_ProductName'] == InvestmentPlanning._meta.get_field('IP_ProductName').default and    
                    IP_Data['IP_ProductPremium'] == InvestmentPlanning._meta.get_field('IP_ProductPremium').default and    
                    IP_Data['IP_ProductPremiumFrequency'] == InvestmentPlanning._meta.get_field('IP_ProductPremiumFrequency').default and   
                    IP_Data['IP_ProductEscalation'] == InvestmentPlanning._meta.get_field('IP_ProductEscalation').default and    
                    IP_Data['IP_ProductEAC'] == InvestmentPlanning._meta.get_field('IP_ProductEAC').default and    
                    IP_Data['IP_ProductContractingParty'] == InvestmentPlanning._meta.get_field('IP_ProductContractingParty').default and    
                    IP_Data['IP_ProductLivesAssured'] == InvestmentPlanning._meta.get_field('IP_ProductLivesAssured').default and    
                    IP_Data['IP_ProductPremiumLayer'] == InvestmentPlanning._meta.get_field('IP_ProductPremiumLayer').default and    
                    IP_Data['IP_ProductBeneficiary'] == InvestmentPlanning._meta.get_field('IP_ProductBeneficiary').default and    
                    IP_Data['IP_Product_IniC'] == InvestmentPlanning._meta.get_field('IP_Product_IniC').default and    
                    IP_Data['IP_Product_IniC_Percentage'] == InvestmentPlanning._meta.get_field('IP_Product_IniC_Percentage').default and    
                    IP_Data['IP_Product_OnC'] == InvestmentPlanning._meta.get_field('IP_Product_OnC').default and    
                    IP_Data['IP_Product_OnC_Percentage'] == InvestmentPlanning._meta.get_field('IP_Product_OnC_Percentage').default and  
                    IP_Data['IP_SFPSolutionFunds'] == InvestmentPlanning._meta.get_field('IP_SFPSolutionFunds').default and
                    IP_Data['IP_SFPSolutionFundsDetails'] == InvestmentPlanning._meta.get_field('IP_SFPSolutionFundsDetails').default and
                    IP_Data['IP_ItP'] == InvestmentPlanning._meta.get_field('IP_ItP').default and
                    IP_Data['IP_ItP_Fund'] == InvestmentPlanning._meta.get_field('IP_ItP_Fund').default and
                    IP_Data['IP_ItP_FundPercentage'] == InvestmentPlanning._meta.get_field('IP_ItP_FundPercentage').default and
                    IP_Data['IP_ItP_FundProvided'] == InvestmentPlanning._meta.get_field('IP_ItP_FundProvided').default and
                    IP_Data['IP_ItP_FundDiscussed'] == InvestmentPlanning._meta.get_field('IP_ItP_FundDiscussed').default and    
                    IP_Data['IP_ItP_Fund1'] == InvestmentPlanning._meta.get_field('IP_ItP_Fund1').default and
                    IP_Data['IP_ItP_FundPercentage1'] == InvestmentPlanning._meta.get_field('IP_ItP_FundPercentage1').default and
                    IP_Data['IP_ItP_FundProvided1'] == InvestmentPlanning._meta.get_field('IP_ItP_FundProvided1').default and
                    IP_Data['IP_ItP_FundDiscussed1'] == InvestmentPlanning._meta.get_field('IP_ItP_FundDiscussed1').default and
                    IP_Data['IP_ItP_Fund2'] == InvestmentPlanning._meta.get_field('IP_ItP_Fund2').default and
                    IP_Data['IP_ItP_FundPercentage2'] == InvestmentPlanning._meta.get_field('IP_ItP_FundPercentage2').default and
                    IP_Data['IP_ItP_FundProvided2'] == InvestmentPlanning._meta.get_field('IP_ItP_FundProvided2').default and
                    IP_Data['IP_ItP_FundDiscussed2'] == InvestmentPlanning._meta.get_field('IP_ItP_FundDiscussed2').default and
                    IP_Data['IP_ItP_Fund3'] == InvestmentPlanning._meta.get_field('IP_ItP_Fund3').default and
                    IP_Data['IP_ItP_FundPercentage3'] == InvestmentPlanning._meta.get_field('IP_ItP_FundPercentage3').default and
                    IP_Data['IP_ItP_FundProvided3'] == InvestmentPlanning._meta.get_field('IP_ItP_FundProvided3').default and
                    IP_Data['IP_ItP_FundDiscussed3'] == InvestmentPlanning._meta.get_field('IP_ItP_FundDiscussed3').default and
                    IP_Data['IP_ItP_Fund4'] == InvestmentPlanning._meta.get_field('IP_ItP_Fund4').default and
                    IP_Data['IP_ItP_FundPercentage4'] == InvestmentPlanning._meta.get_field('IP_ItP_FundPercentage4').default and
                    IP_Data['IP_ItP_FundProvided4'] == InvestmentPlanning._meta.get_field('IP_ItP_FundProvided4').default and
                    IP_Data['IP_ItP_FundDiscussed4'] == InvestmentPlanning._meta.get_field('IP_ItP_FundDiscussed4').default and
                    IP_Data['IP_ItP_Fund5'] == InvestmentPlanning._meta.get_field('IP_ItP_Fund5').default and
                    IP_Data['IP_ItP_FundPercentage5'] == InvestmentPlanning._meta.get_field('IP_ItP_FundPercentage5').default and
                    IP_Data['IP_ItP_FundProvided5'] == InvestmentPlanning._meta.get_field('IP_ItP_FundProvided5').default and
                    IP_Data['IP_ItP_FundDiscussed5'] == InvestmentPlanning._meta.get_field('IP_ItP_FundDiscussed5').default and
                    IP_Data['IP_ItP_Fund6'] == InvestmentPlanning._meta.get_field('IP_ItP_Fund6').default and
                    IP_Data['IP_ItP_FundPercentage6'] == InvestmentPlanning._meta.get_field('IP_ItP_FundPercentage6').default and
                    IP_Data['IP_ItP_FundProvided6'] == InvestmentPlanning._meta.get_field('IP_ItP_FundProvided6').default and
                    IP_Data['IP_ItP_FundDiscussed6'] == InvestmentPlanning._meta.get_field('IP_ItP_FundDiscussed6').default and
                    IP_Data['IP_ItP_Fund7'] == InvestmentPlanning._meta.get_field('IP_ItP_Fund7').default and
                    IP_Data['IP_ItP_FundPercentage7'] == InvestmentPlanning._meta.get_field('IP_ItP_FundPercentage7').default and
                    IP_Data['IP_ItP_FundProvided7'] == InvestmentPlanning._meta.get_field('IP_ItP_FundProvided7').default and
                    IP_Data['IP_ItP_FundDiscussed7'] == InvestmentPlanning._meta.get_field('IP_ItP_FundDiscussed7').default and
                    IP_Data['IP_ItP_FundsReasons'] == InvestmentPlanning._meta.get_field('IP_ItP_FundsReasons').default and
                    IP_Data['IP_ItP_FundsMaterialAspects'] == InvestmentPlanning._meta.get_field('IP_ItP_FundsMaterialAspects').default 
                )):
                form['IP_SourceOfIncome'] = "N.A."    
                form['IP_OtherSourceOfIncome'] = "N.A."    
                form['IP_InvestmentTerm'] = "N.A."    
                form['IP_InvestmentTermDetails'] = "N.A."    
                form['IP_Liquidity'] = "N.A."    
                form['IP_LiquidityDetails'] = "N.A."      
                form['IP_Type'] = "N.A."    
                form['IP_TypeDetails'] = "N.A."      
                form['IP_PremiumType'] = "N.A."    
                form['IP_PremiumTypeDetails'] = "N.A."      
                form['IP_IncomeRequired'] = "N.A."    
                form['IP_IncomeRequiredDetails'] = "N.A."      
                form['IP_InvestmentStrategy'] = "N.A."    
                form['IP_InvestmentStrategyDetails'] = "N.A."    
                form['IP_ReturnRequired'] = "N.A."    
                form['IP_ReturnRequiredDetails'] = "N.A."    
                form['IP_RiskProfile'] = "N.A."      
                form['IP_RiskProfileDetails'] = "N.A."      
                form['IP_RecommendationSummary'] = "N.A." 
                form['IP_AltS_1'] = "N.A."    
                form['IP_AltS_2'] = "N.A."    
                form['IP_AltS_3'] = "N.A."    
                form['IP_ProductTaken'] = "N.A."    
                form['IP_ProductProvider'] = "N.A."    
                form['IP_PolicyNumber'] = "N.A."    
                form['IP_ProductName'] = "N.A."    
                form['IP_ProductPremium'] = "N.A."    
                form['IP_ProductPremiumFrequency'] = "N.A."   
                form['IP_ProductEscalation'] = "N.A."    
                form['IP_ProductEAC'] = "N.A."    
                form['IP_ProductContractingParty'] = "N.A."    
                form['IP_ProductLivesAssured'] = "N.A."    
                form['IP_ProductPremiumLayer'] = "N.A."    
                form['IP_ProductBeneficiary'] = "N.A."    
                form['IP_Product_IniC'] = "N.A."    
                form['IP_Product_IniC_Percentage'] = "N.A."    
                form['IP_Product_OnC'] = "N.A."    
                form['IP_Product_OnC_Percentage'] = "N.A."  
                form['IP_SFPSolutionFunds'] = "N.A."
                form['IP_SFPSolutionFundsDetails'] = "N.A."
                form['IP_ItP'] = "N.A."
                form['IP_ItP_Fund'] = "N.A."
                form['IP_ItP_FundPercentage'] = "N.A."
                form['IP_ItP_FundProvided'] = "N.A."
                form['IP_ItP_FundDiscussed'] = "N.A."    
                form['IP_ItP_Fund1'] = "N.A."
                form['IP_ItP_FundPercentage1'] = "N.A."
                form['IP_ItP_FundProvided1'] = "N.A."
                form['IP_ItP_FundDiscussed1'] = "N.A."
                form['IP_ItP_Fund2'] = "N.A."
                form['IP_ItP_FundPercentage2'] = "N.A."
                form['IP_ItP_FundProvided2'] = "N.A."
                form['IP_ItP_FundDiscussed2'] = "N.A."
                form['IP_ItP_Fund3'] = "N.A."
                form['IP_ItP_FundPercentage3'] = "N.A."
                form['IP_ItP_FundProvided3'] = "N.A."
                form['IP_ItP_FundDiscussed3'] = "N.A."
                form['IP_ItP_Fund4'] = "N.A."
                form['IP_ItP_FundPercentage4'] = "N.A."
                form['IP_ItP_FundProvided4'] = "N.A."
                form['IP_ItP_FundDiscussed4'] = "N.A."
                form['IP_ItP_Fund5'] = "N.A."
                form['IP_ItP_FundPercentage5'] = "N.A."
                form['IP_ItP_FundProvided5'] = "N.A."
                form['IP_ItP_FundDiscussed5'] = "N.A."
                form['IP_ItP_Fund6'] = "N.A."
                form['IP_ItP_FundPercentage6'] = "N.A."
                form['IP_ItP_FundProvided6'] = "N.A."
                form['IP_ItP_FundDiscussed6'] = "N.A."
                form['IP_ItP_Fund7'] = "N.A."
                form['IP_ItP_FundPercentage7'] = "N.A."
                form['IP_ItP_FundProvided7'] = "N.A."
                form['IP_ItP_FundDiscussed7'] = "N.A."
                form['IP_ItP_FundsReasons'] = "N.A."
                form['IP_ItP_FundsMaterialAspects'] = "N.A."
            else:                   
                IP_SourceOfIncome = ["","Salary","Savings","Inheritence","Resignation","Retirement","Other"]
                IP_InvestmentStrategy = ["", "Capital Reservation", "Income", "Goal Specification Investment"]
                IP_ReturnRequired = ["","Market Linked Return","Targeted Return","Benchmark"]
                IP_RiskProfile = ["","Conservative","Cautious","Moderate","Moderately Aggressive","Aggressive"]
                form['IP_SourceOfIncome'] = IP_SourceOfIncome[int(IP_Data['IP_SourceOfIncome'])]  
                IP_ProductTaken = ["","Endowment","RA","TSFA","Unit Trust","Life Annuity","Living Annuity","Other"]
                form['IP_OtherSourceOfIncome'] = IP_Data['IP_OtherSourceOfIncome']    
                form['IP_InvestmentTerm'] = IP_Data['IP_InvestmentTerm']    
                form['IP_InvestmentTermDetails'] = IP_Data['IP_InvestmentTermDetails']    
                form['IP_Liquidity'] = "Yes" if IP_Data['IP_Liquidity'] == 1 else "No"    
                form['IP_LiquidityDetails'] = IP_Data['IP_LiquidityDetails']      
                form['IP_Type'] = "Voluntary" if IP_Data['IP_Type'] == 1 else "Compulsary"    
                form['IP_TypeDetails'] = IP_Data['IP_TypeDetails']      
                form['IP_PremiumType'] = "Lump Sum" if IP_Data['IP_PremiumType'] == 1 else "Recurring"
                form['IP_PremiumTypeDetails'] = IP_Data['IP_PremiumTypeDetails']      
                form['IP_IncomeRequired'] = "Yes" if IP_Data['IP_IncomeRequired'] == 1 else "No"    
                form['IP_IncomeRequiredDetails'] = IP_Data['IP_IncomeRequiredDetails']      
                form['IP_InvestmentStrategy'] = IP_InvestmentStrategy[int(IP_Data['IP_InvestmentStrategy'])]    
                form['IP_InvestmentStrategyDetails'] = IP_Data['IP_InvestmentStrategyDetails']    
                form['IP_ReturnRequired'] = IP_ReturnRequired[int(IP_Data['IP_ReturnRequired'])]    
                form['IP_ReturnRequiredDetails'] = IP_Data['IP_ReturnRequiredDetails']    
                form['IP_RiskProfile'] = IP_RiskProfile[int(IP_Data['IP_RiskProfile'])]      
                form['IP_RiskProfileDetails'] = IP_Data['IP_RiskProfileDetails']      
                form['IP_RecommendationSummary'] = IP_Data['IP_RecommendationSummary'] 
                form['IP_AltS_1'] = IP_Data['IP_AltS_1']    
                form['IP_AltS_2'] = IP_Data['IP_AltS_2']    
                form['IP_AltS_3'] = IP_Data['IP_AltS_3']    
                form['IP_ProductTaken'] = IP_ProductTaken[int(IP_Data['IP_ProductTaken'])]    
                form['IP_ProductProvider'] = IP_Data['IP_ProductProvider']    
                form['IP_PolicyNumber'] = IP_Data['IP_PolicyNumber']    
                form['IP_ProductName'] = IP_Data['IP_ProductName']    
                form['IP_ProductPremium'] = IP_Data['IP_ProductPremium']    
                form['IP_ProductPremiumFrequency'] = Frequency[int(IP_Data['IP_ProductPremiumFrequency'])]   
                form['IP_ProductEscalation'] = IP_Data['IP_ProductEscalation']    
                form['IP_ProductEAC'] = IP_Data['IP_ProductEAC']    
                form['IP_ProductContractingParty'] = IP_Data['IP_ProductContractingParty']    
                form['IP_ProductLivesAssured'] = IP_Data['IP_ProductLivesAssured']    
                form['IP_ProductPremiumLayer'] = IP_Data['IP_ProductPremiumLayer']    
                form['IP_ProductBeneficiary'] = IP_Data['IP_ProductBeneficiary']    
                form['IP_Product_IniC'] = IP_Data['IP_Product_IniC']    
                form['IP_Product_IniC_Percentage'] = IP_Data['IP_Product_IniC_Percentage']    
                form['IP_Product_OnC'] = IP_Data['IP_Product_OnC']    
                form['IP_Product_OnC_Percentage'] = IP_Data['IP_Product_OnC_Percentage']  
                form['IP_SFPSolutionFunds'] = IP_Data['IP_SFPSolutionFunds']
                form['IP_SFPSolutionFundsDetails'] = "Yes" if IP_Data['IP_SFPSolutionFundsDetails'] == 1 else "No"
                form['IP_ItP'] = IP_Data['IP_ItP']
                form['IP_ItP_Fund'] = IP_Data['IP_ItP_Fund']
                form['IP_ItP_FundPercentage'] = IP_Data['IP_ItP_FundPercentage']
                form['IP_ItP_FundProvided'] = "Yes" if IP_Data['IP_ItP_FundProvided'] == True else "No"
                form['IP_ItP_FundDiscussed'] = "Yes" if IP_Data['IP_ItP_FundDiscussed'] == True else "No"    
                form['IP_ItP_Fund1'] = IP_Data['IP_ItP_Fund1']
                form['IP_ItP_FundPercentage1'] = IP_Data['IP_ItP_FundPercentage1']
                form['IP_ItP_FundProvided1'] = "Yes" if IP_Data['IP_ItP_FundProvided1'] == True else "No"
                form['IP_ItP_FundDiscussed1'] = "Yes" if IP_Data['IP_ItP_FundDiscussed1'] == True else "No"
                form['IP_ItP_Fund2'] = IP_Data['IP_ItP_Fund2']
                form['IP_ItP_FundPercentage2'] = IP_Data['IP_ItP_FundPercentage2']
                form['IP_ItP_FundProvided2'] = "Yes" if IP_Data['IP_ItP_FundProvided2'] == True else "No"
                form['IP_ItP_FundDiscussed2'] = "Yes" if IP_Data['IP_ItP_FundDiscussed2'] == True else "No"
                form['IP_ItP_Fund3'] = IP_Data['IP_ItP_Fund3']
                form['IP_ItP_FundPercentage3'] = IP_Data['IP_ItP_FundPercentage3']
                form['IP_ItP_FundProvided3'] = "Yes" if IP_Data['IP_ItP_FundProvided3'] == True else "No"
                form['IP_ItP_FundDiscussed3'] = "Yes" if IP_Data['IP_ItP_FundDiscussed3'] == True else "No"
                form['IP_ItP_Fund4'] = IP_Data['IP_ItP_Fund4']
                form['IP_ItP_FundPercentage4'] = IP_Data['IP_ItP_FundPercentage4']
                form['IP_ItP_FundProvided4'] = "Yes" if IP_Data['IP_ItP_FundProvided4'] == True else "No"
                form['IP_ItP_FundDiscussed4'] = "Yes" if IP_Data['IP_ItP_FundDiscussed4'] == True else "No"
                form['IP_ItP_Fund5'] = IP_Data['IP_ItP_Fund5']
                form['IP_ItP_FundPercentage5'] = IP_Data['IP_ItP_FundPercentage5']
                form['IP_ItP_FundProvided5'] = "Yes" if IP_Data['IP_ItP_FundProvided5'] == True else "No"
                form['IP_ItP_FundDiscussed5'] = "Yes" if IP_Data['IP_ItP_FundDiscussed5'] == True else "No"
                form['IP_ItP_Fund6'] = IP_Data['IP_ItP_Fund6']
                form['IP_ItP_FundPercentage6'] = IP_Data['IP_ItP_FundPercentage6']
                form['IP_ItP_FundProvided6'] = "Yes" if IP_Data['IP_ItP_FundProvided6'] == True else "No"
                form['IP_ItP_FundDiscussed6'] = "Yes" if IP_Data['IP_ItP_FundDiscussed6'] == True else "No"
                form['IP_ItP_Fund7'] = IP_Data['IP_ItP_Fund7']
                form['IP_ItP_FundPercentage7'] = IP_Data['IP_ItP_FundPercentage7']
                form['IP_ItP_FundProvided7'] = "Yes" if IP_Data['IP_ItP_FundProvided7'] == True else "No"
                form['IP_ItP_FundDiscussed7'] = "Yes" if IP_Data['IP_ItP_FundDiscussed7'] == True else "No"
                form['IP_ItP_FundsReasons'] = IP_Data['IP_ItP_FundsReasons']
                form['IP_ItP_FundsMaterialAspects'] = IP_Data['IP_ItP_FundsMaterialAspects']
        else:
            form['IP_SourceOfIncome'] = "N.A."    
            form['IP_OtherSourceOfIncome'] = "N.A."    
            form['IP_InvestmentTerm'] = "N.A."    
            form['IP_InvestmentTermDetails'] = "N.A."    
            form['IP_Liquidity'] = "N.A."    
            form['IP_LiquidityDetails'] = "N.A."      
            form['IP_Type'] = "N.A."    
            form['IP_TypeDetails'] = "N.A."      
            form['IP_PremiumType'] = "N.A."    
            form['IP_PremiumTypeDetails'] = "N.A."      
            form['IP_IncomeRequired'] = "N.A."    
            form['IP_IncomeRequiredDetails'] = "N.A."      
            form['IP_InvestmentStrategy'] = "N.A."    
            form['IP_InvestmentStrategyDetails'] = "N.A."    
            form['IP_ReturnRequired'] = "N.A."    
            form['IP_ReturnRequiredDetails'] = "N.A."    
            form['IP_RiskProfile'] = "N.A."      
            form['IP_RiskProfileDetails'] = "N.A."      
            form['IP_RecommendationSummary'] = "N.A." 
            form['IP_AltS_1'] = "N.A."    
            form['IP_AltS_2'] = "N.A."    
            form['IP_AltS_3'] = "N.A."    
            form['IP_ProductTaken'] = "N.A."    
            form['IP_ProductProvider'] = "N.A."    
            form['IP_PolicyNumber'] = "N.A."    
            form['IP_ProductName'] = "N.A."    
            form['IP_ProductPremium'] = "N.A."    
            form['IP_ProductPremiumFrequency'] = "N.A."   
            form['IP_ProductEscalation'] = "N.A."    
            form['IP_ProductEAC'] = "N.A."    
            form['IP_ProductContractingParty'] = "N.A."    
            form['IP_ProductLivesAssured'] = "N.A."    
            form['IP_ProductPremiumLayer'] = "N.A."    
            form['IP_ProductBeneficiary'] = "N.A."    
            form['IP_Product_IniC'] = "N.A."    
            form['IP_Product_IniC_Percentage'] = "N.A."    
            form['IP_Product_OnC'] = "N.A."    
            form['IP_Product_OnC_Percentage'] = "N.A."  
            form['IP_SFPSolutionFunds'] = "N.A."
            form['IP_SFPSolutionFundsDetails'] = "N.A."
            form['IP_ItP'] = "N.A."
            form['IP_ItP_Fund'] = "N.A."
            form['IP_ItP_FundPercentage'] = "N.A."
            form['IP_ItP_FundProvided'] = "N.A."
            form['IP_ItP_FundDiscussed'] = "N.A."    
            form['IP_ItP_Fund1'] = "N.A."
            form['IP_ItP_FundPercentage1'] = "N.A."
            form['IP_ItP_FundProvided1'] = "N.A."
            form['IP_ItP_FundDiscussed1'] = "N.A."
            form['IP_ItP_Fund2'] = "N.A."
            form['IP_ItP_FundPercentage2'] = "N.A."
            form['IP_ItP_FundProvided2'] = "N.A."
            form['IP_ItP_FundDiscussed2'] = "N.A."
            form['IP_ItP_Fund3'] = "N.A."
            form['IP_ItP_FundPercentage3'] = "N.A."
            form['IP_ItP_FundProvided3'] = "N.A."
            form['IP_ItP_FundDiscussed3'] = "N.A."
            form['IP_ItP_Fund4'] = "N.A."
            form['IP_ItP_FundPercentage4'] = "N.A."
            form['IP_ItP_FundProvided4'] = "N.A."
            form['IP_ItP_FundDiscussed4'] = "N.A."
            form['IP_ItP_Fund5'] = "N.A."
            form['IP_ItP_FundPercentage5'] = "N.A."
            form['IP_ItP_FundProvided5'] = "N.A."
            form['IP_ItP_FundDiscussed5'] = "N.A."
            form['IP_ItP_Fund6'] = "N.A."
            form['IP_ItP_FundPercentage6'] = "N.A."
            form['IP_ItP_FundProvided6'] = "N.A."
            form['IP_ItP_FundDiscussed6'] = "N.A."
            form['IP_ItP_Fund7'] = "N.A."
            form['IP_ItP_FundPercentage7'] = "N.A."
            form['IP_ItP_FundProvided7'] = "N.A."
            form['IP_ItP_FundDiscussed7'] = "N.A."
            form['IP_ItP_FundsReasons'] = "N.A."
            form['IP_ItP_FundsMaterialAspects'] = "N.A."
        
        BA_RISK_Data = AssuranceRisk.objects.filter(formId=form['id']).values()
        if len(BA_RISK_Data) != 0:                
            BA_RISK_Data = AssuranceRisk.objects.filter(formId=form['id']).values().first()
            if ((
                    BA_RISK_Data['AR_BusinessTradeName'] == AssuranceRisk._meta.get_field('AR_BusinessTradeName').default and     
                    BA_RISK_Data['AR_BusinessRegisteredName'] == AssuranceRisk._meta.get_field('AR_BusinessRegisteredName').default and     
                    BA_RISK_Data['AR_BusinessAuthorisedPersons'] == AssuranceRisk._meta.get_field('AR_BusinessAuthorisedPersons').default and     
                    BA_RISK_Data['AR_BusinessFinancialAdvisor'] == AssuranceRisk._meta.get_field('AR_BusinessFinancialAdvisor').default and     
                    BA_RISK_Data['AR_BusinessAddress'] == AssuranceRisk._meta.get_field('AR_BusinessAddress').default and     
                    BA_RISK_Data['AR_BusinessEmail'] == AssuranceRisk._meta.get_field('AR_BusinessEmail').default and     
                    BA_RISK_Data['AR_BusinessPhoneNumber'] == AssuranceRisk._meta.get_field('AR_BusinessPhoneNumber').default and     
                    BA_RISK_Data['AR_BusinessDate'] == AssuranceRisk._meta.get_field('AR_BusinessDate').default and     
                    BA_RISK_Data['AR_ComDisc_AuthorizedPerson'] == AssuranceRisk._meta.get_field('AR_ComDisc_AuthorizedPerson').default and     
                    BA_RISK_Data['AR_ComDisc_AuthorizedPersonDetail'] == AssuranceRisk._meta.get_field('AR_ComDisc_AuthorizedPersonDetail').default and     
                    BA_RISK_Data['AR_ComDisc_Authority'] == AssuranceRisk._meta.get_field('AR_ComDisc_Authority').default and     
                    BA_RISK_Data['AR_ComDisc_AuthorityDetail'] == AssuranceRisk._meta.get_field('AR_ComDisc_AuthorityDetail').default and     
                    BA_RISK_Data['AR_FICA'] == AssuranceRisk._meta.get_field('AR_FICA').default and     
                    BA_RISK_Data['AR_FICADetail'] == AssuranceRisk._meta.get_field('AR_FICADetail').default and     
                    BA_RISK_Data['AR_RepPrs_Taken'] == AssuranceRisk._meta.get_field('AR_RepPrs_Taken').default and     
                    BA_RISK_Data['AR_RepPrs_TakenDetail'] == AssuranceRisk._meta.get_field('AR_RepPrs_TakenDetail').default and     
                    BA_RISK_Data['AR_RepPrs_Explained'] == AssuranceRisk._meta.get_field('AR_RepPrs_Explained').default and     
                    BA_RISK_Data['AR_RepPrs_ExplainedDetail'] == AssuranceRisk._meta.get_field('AR_RepPrs_ExplainedDetail').default and     
                    BA_RISK_Data['AR_RepPrs_Cancelled'] == AssuranceRisk._meta.get_field('AR_RepPrs_Cancelled').default and     
                    BA_RISK_Data['AR_RepPrs_CancelledDetail'] == AssuranceRisk._meta.get_field('AR_RepPrs_CancelledDetail').default and    
                    BA_RISK_Data['AR_SourceOfFunds'] == AssuranceRisk._meta.get_field('AR_SourceOfFunds').default and     
                    BA_RISK_Data['AR_SourceOfFundsDetail'] == AssuranceRisk._meta.get_field('AR_SourceOfFundsDetail').default and      
                    BA_RISK_Data['AR_ReplacementBackInfo'] == AssuranceRisk._meta.get_field('AR_ReplacementBackInfo').default and     
                    BA_RISK_Data['AR_BusA_BnS'] == AssuranceRisk._meta.get_field('AR_BusA_BnS').default and     
                    BA_RISK_Data['AR_BusA_KeyP_Insurance'] == AssuranceRisk._meta.get_field('AR_BusA_KeyP_Insurance').default and     
                    BA_RISK_Data['AR_BusA_ContingentLiability'] == AssuranceRisk._meta.get_field('AR_BusA_ContingentLiability').default and     
                    BA_RISK_Data['AR_BusA_BusOvProt'] == AssuranceRisk._meta.get_field('AR_BusA_BusOvProt').default and     
                    BA_RISK_Data['AR_BusA_CLARedm'] == AssuranceRisk._meta.get_field('AR_BusA_CLARedm').default and     
                    BA_RISK_Data['AR_BusA_DebitLoanRedemption'] == AssuranceRisk._meta.get_field('AR_BusA_DebitLoanRedemption').default and     
                    BA_RISK_Data['AR_BusA_FundingOfFutureExpenses'] == AssuranceRisk._meta.get_field('AR_BusA_FundingOfFutureExpenses').default and     
                    BA_RISK_Data['AR_BusA_FundingOfDeferredGratuities'] == AssuranceRisk._meta.get_field('AR_BusA_FundingOfDeferredGratuities').default and     
                    BA_RISK_Data['AR_BusA_Details'] == AssuranceRisk._meta.get_field('AR_BusA_Details').default and      
                    BA_RISK_Data['AR_BnS_DC_TotalNeed'] == AssuranceRisk._meta.get_field('AR_BnS_DC_TotalNeed').default and     
                    BA_RISK_Data['AR_BnS_DC_Provisions'] == AssuranceRisk._meta.get_field('AR_BnS_DC_Provisions').default and     
                    BA_RISK_Data['AR_BnS_DC_ShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_BnS_DC_ShortfallSurplus').default and     
                    BA_RISK_Data['AR_BnS_DC_Investments'] == AssuranceRisk._meta.get_field('AR_BnS_DC_Investments').default and     
                    BA_RISK_Data['AR_BnS_DiC_TotalNeed'] == AssuranceRisk._meta.get_field('AR_BnS_DiC_TotalNeed').default and     
                    BA_RISK_Data['AR_BnS_DiC_ExistingProvisions'] == AssuranceRisk._meta.get_field('AR_BnS_DiC_ExistingProvisions').default and     
                    BA_RISK_Data['AR_BnS_DiC_ExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_BnS_DiC_ExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_BnS_DiC_Investments'] == AssuranceRisk._meta.get_field('AR_BnS_DiC_Investments').default and        
                    BA_RISK_Data['AR_BnS_Other'] == AssuranceRisk._meta.get_field('AR_BnS_Other').default and     
                    BA_RISK_Data['AR_BnS_OtherTotalNeed'] == AssuranceRisk._meta.get_field('AR_BnS_OtherTotalNeed').default and     
                    BA_RISK_Data['AR_BnS_OtherExistingProvisions'] == AssuranceRisk._meta.get_field('AR_BnS_OtherExistingProvisions').default and     
                    BA_RISK_Data['AR_BnS_OtherExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_BnS_OtherExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_BnS_OtherInvestments'] == AssuranceRisk._meta.get_field('AR_BnS_OtherInvestments').default and     
                    BA_RISK_Data['AR_BnS_Comments'] == AssuranceRisk._meta.get_field('AR_BnS_Comments').default and     
                    BA_RISK_Data['AR_KeyP_DC_TotalNeed'] == AssuranceRisk._meta.get_field('AR_KeyP_DC_TotalNeed').default and     
                    BA_RISK_Data['AR_KeyP_DC_ExistingProvisions'] == AssuranceRisk._meta.get_field('AR_KeyP_DC_ExistingProvisions').default and     
                    BA_RISK_Data['AR_KeyP_DC_ExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_KeyP_DC_ExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_KeyP_DC_Investments'] == AssuranceRisk._meta.get_field('AR_KeyP_DC_Investments').default and       
                    BA_RISK_Data['AR_KeyP_DiC_TotalNeed'] == AssuranceRisk._meta.get_field('AR_KeyP_DiC_TotalNeed').default and     
                    BA_RISK_Data['AR_KeyP_DiC_ExistingProvisions'] == AssuranceRisk._meta.get_field('AR_KeyP_DiC_ExistingProvisions').default and     
                    BA_RISK_Data['AR_KeyP_DiC_ExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_KeyP_DiC_ExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_KeyP_DiC_Investments'] == AssuranceRisk._meta.get_field('AR_KeyP_DiC_Investments').default and     
                    BA_RISK_Data['AR_KeyP_TI_CoverTotalNeed'] == AssuranceRisk._meta.get_field('AR_KeyP_TI_CoverTotalNeed').default and     
                    BA_RISK_Data['AR_KeyP_TI_CoverExistingProvisions'] == AssuranceRisk._meta.get_field('AR_KeyP_TI_CoverExistingProvisions').default and     
                    BA_RISK_Data['AR_KeyP_TI_CoverExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_KeyP_TI_CoverExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_KeyP_TI_CoverInvestments'] == AssuranceRisk._meta.get_field('AR_KeyP_TI_CoverInvestments').default and         
                    BA_RISK_Data['AR_KeyP_PI_CoverTotalNeed'] == AssuranceRisk._meta.get_field('AR_KeyP_PI_CoverTotalNeed').default and     
                    BA_RISK_Data['AR_KeyP_PI_CoverExistingProvisions'] == AssuranceRisk._meta.get_field('AR_KeyP_PI_CoverExistingProvisions').default and     
                    BA_RISK_Data['AR_KeyP_PI_CoverExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_KeyP_PI_CoverExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_KeyP_PI_CoverInvestments'] == AssuranceRisk._meta.get_field('AR_KeyP_PI_CoverInvestments').default and         
                    BA_RISK_Data['AR_KeyP_Other'] == AssuranceRisk._meta.get_field('AR_KeyP_Other').default and     
                    BA_RISK_Data['AR_KeyP_OtherTotalNeed'] == AssuranceRisk._meta.get_field('AR_KeyP_OtherTotalNeed').default and     
                    BA_RISK_Data['AR_KeyP_OtherExistingProvisions'] == AssuranceRisk._meta.get_field('AR_KeyP_OtherExistingProvisions').default and     
                    BA_RISK_Data['AR_KeyP_OtherExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_KeyP_OtherExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_KeyP_OtherInvestments'] == AssuranceRisk._meta.get_field('AR_KeyP_OtherInvestments').default and      
                    BA_RISK_Data['AR_KeyP_Comments'] == AssuranceRisk._meta.get_field('AR_KeyP_Comments').default and         
                    BA_RISK_Data['AR_SureNLia_DC_TotalNeed'] == AssuranceRisk._meta.get_field('AR_SureNLia_DC_TotalNeed').default and     
                    BA_RISK_Data['AR_SureNLia_DC_Provisions'] == AssuranceRisk._meta.get_field('AR_SureNLia_DC_Provisions').default and     
                    BA_RISK_Data['AR_SureNLia_DC_ShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_SureNLia_DC_ShortfallSurplus').default and     
                    BA_RISK_Data['AR_SureNLia_DC_Investments'] == AssuranceRisk._meta.get_field('AR_SureNLia_DC_Investments').default and     
                    BA_RISK_Data['AR_SureNLia_DiC_TotalNeed'] == AssuranceRisk._meta.get_field('AR_SureNLia_DiC_TotalNeed').default and     
                    BA_RISK_Data['AR_SureNLia_DiC_Provisions'] == AssuranceRisk._meta.get_field('AR_SureNLia_DiC_Provisions').default and     
                    BA_RISK_Data['AR_SureNLia_DiC_ShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_SureNLia_DiC_ShortfallSurplus').default and     
                    BA_RISK_Data['AR_SureNLia_DiC_Investments'] == AssuranceRisk._meta.get_field('AR_SureNLia_DiC_Investments').default and        
                    BA_RISK_Data['AR_SureNLia_Other'] == AssuranceRisk._meta.get_field('AR_SureNLia_Other').default and     
                    BA_RISK_Data['AR_SureNLia_OtherTotalNeed'] == AssuranceRisk._meta.get_field('AR_SureNLia_OtherTotalNeed').default and     
                    BA_RISK_Data['AR_SureNLia_OtherProvisions'] == AssuranceRisk._meta.get_field('AR_SureNLia_OtherProvisions').default and     
                    BA_RISK_Data['AR_SureNLia_OtherShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_SureNLia_OtherShortfallSurplus').default and     
                    BA_RISK_Data['AR_SureNLia_OtherInvestments'] == AssuranceRisk._meta.get_field('AR_SureNLia_OtherInvestments').default and     
                    BA_RISK_Data['AR_SureNLia_Comments'] == AssuranceRisk._meta.get_field('AR_SureNLia_Comments').default and     
                    BA_RISK_Data['AR_BusOvProt_TI_CoverTotalNeed'] == AssuranceRisk._meta.get_field('AR_BusOvProt_TI_CoverTotalNeed').default and     
                    BA_RISK_Data['AR_BusOvProt_TI_CoverExistingProvisions'] == AssuranceRisk._meta.get_field('AR_BusOvProt_TI_CoverExistingProvisions').default and     
                    BA_RISK_Data['AR_BusOvProt_TI_CoverExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_BusOvProt_TI_CoverExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_BusOvProt_TI_CoverInvestments'] == AssuranceRisk._meta.get_field('AR_BusOvProt_TI_CoverInvestments').default and         
                    BA_RISK_Data['AR_BusOvProt_PI_CoverTotalNeed'] == AssuranceRisk._meta.get_field('AR_BusOvProt_PI_CoverTotalNeed').default and     
                    BA_RISK_Data['AR_BusOvProt_PI_CoverExistingProvisions'] == AssuranceRisk._meta.get_field('AR_BusOvProt_PI_CoverExistingProvisions').default and     
                    BA_RISK_Data['AR_BusOvProt_PI_CoverExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_BusOvProt_PI_CoverExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_BusOvProt_PI_CoverInvestments'] == AssuranceRisk._meta.get_field('AR_BusOvProt_PI_CoverInvestments').default and         
                    BA_RISK_Data['AR_BusOvProt_Other'] == AssuranceRisk._meta.get_field('AR_BusOvProt_Other').default and     
                    BA_RISK_Data['AR_BusOvProt_OtherTotalNeed'] == AssuranceRisk._meta.get_field('AR_BusOvProt_OtherTotalNeed').default and     
                    BA_RISK_Data['AR_BusOvProt_OtherExistingProvisions'] == AssuranceRisk._meta.get_field('AR_BusOvProt_OtherExistingProvisions').default and     
                    BA_RISK_Data['AR_BusOvProt_OtherExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_BusOvProt_OtherExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_BusOvProt_OtherInvestments'] == AssuranceRisk._meta.get_field('AR_BusOvProt_OtherInvestments').default and      
                    BA_RISK_Data['AR_BusOvProt_Comments'] == AssuranceRisk._meta.get_field('AR_BusOvProt_Comments').default and   
                    BA_RISK_Data['AR_CLARedm_DC_TotalNeed'] == AssuranceRisk._meta.get_field('AR_CLARedm_DC_TotalNeed').default and     
                    BA_RISK_Data['AR_CLARedm_DC_ExistingProvisions'] == AssuranceRisk._meta.get_field('AR_CLARedm_DC_ExistingProvisions').default and     
                    BA_RISK_Data['AR_CLARedm_DC_ExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_CLARedm_DC_ExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_CLARedm_DC_Investments'] == AssuranceRisk._meta.get_field('AR_CLARedm_DC_Investments').default and     
                    BA_RISK_Data['AR_CLARedm_DiC_TotalNeed'] == AssuranceRisk._meta.get_field('AR_CLARedm_DiC_TotalNeed').default and     
                    BA_RISK_Data['AR_CLARedm_DiC_ExistingProvisions'] == AssuranceRisk._meta.get_field('AR_CLARedm_DiC_ExistingProvisions').default and     
                    BA_RISK_Data['AR_CLARedm_DiC_ExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_CLARedm_DiC_ExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_CLARedm_DiC_Investments'] == AssuranceRisk._meta.get_field('AR_CLARedm_DiC_Investments').default and     
                    BA_RISK_Data['AR_CLARedm_Other'] == AssuranceRisk._meta.get_field('AR_CLARedm_Other').default and     
                    BA_RISK_Data['AR_CLARedm_OtherTotalNeed'] == AssuranceRisk._meta.get_field('AR_CLARedm_OtherTotalNeed').default and     
                    BA_RISK_Data['AR_CLARedm_OtherExistingProvisions'] == AssuranceRisk._meta.get_field('AR_CLARedm_OtherExistingProvisions').default and     
                    BA_RISK_Data['AR_CLARedm_OtherExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_CLARedm_OtherExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_CLARedm_OtherInvestments'] == AssuranceRisk._meta.get_field('AR_CLARedm_OtherInvestments').default and      
                    BA_RISK_Data['AR_DLARedm_DC_TotalNeed'] == AssuranceRisk._meta.get_field('AR_DLARedm_DC_TotalNeed').default and     
                    BA_RISK_Data['AR_DLARedm_DC_ExistingProvisions'] == AssuranceRisk._meta.get_field('AR_DLARedm_DC_ExistingProvisions').default and     
                    BA_RISK_Data['AR_DLARedm_DC_ExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_DLARedm_DC_ExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_DLARedm_DC_Investments'] == AssuranceRisk._meta.get_field('AR_DLARedm_DC_Investments').default and     
                    BA_RISK_Data['AR_DLARedm_DiC_TotalNeed'] == AssuranceRisk._meta.get_field('AR_DLARedm_DiC_TotalNeed').default and     
                    BA_RISK_Data['AR_DLARedm_DiC_ExistingProvisions'] == AssuranceRisk._meta.get_field('AR_DLARedm_DiC_ExistingProvisions').default and     
                    BA_RISK_Data['AR_DLARedm_DiC_ExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_DLARedm_DiC_ExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_DLARedm_DiC_Investments'] == AssuranceRisk._meta.get_field('AR_DLARedm_DiC_Investments').default and     
                    BA_RISK_Data['AR_DLARedm_Other'] == AssuranceRisk._meta.get_field('AR_DLARedm_Other').default and     
                    BA_RISK_Data['AR_DLARedm_OtherTotalNeed'] == AssuranceRisk._meta.get_field('AR_DLARedm_OtherTotalNeed').default and     
                    BA_RISK_Data['AR_DLARedm_OtherExistingProvisions'] == AssuranceRisk._meta.get_field('AR_DLARedm_OtherExistingProvisions').default and     
                    BA_RISK_Data['AR_DLARedm_OtherExistingShortfallSurplus'] == AssuranceRisk._meta.get_field('AR_DLARedm_OtherExistingShortfallSurplus').default and     
                    BA_RISK_Data['AR_DLARedm_OtherInvestments'] == AssuranceRisk._meta.get_field('AR_DLARedm_OtherInvestments').default and      
                    BA_RISK_Data['AR_LifeCoverFinancialSolutions'] == AssuranceRisk._meta.get_field('AR_LifeCoverFinancialSolutions').default and     
                    BA_RISK_Data['AR_DiC_FinancialSolutions'] == AssuranceRisk._meta.get_field('AR_DiC_FinancialSolutions').default and    
                    BA_RISK_Data['AR_AltS_1'] == AssuranceRisk._meta.get_field('AR_AltS_1').default and     
                    BA_RISK_Data['AR_AltS_2'] == AssuranceRisk._meta.get_field('AR_AltS_2').default and     
                    BA_RISK_Data['AR_AltS_3'] == AssuranceRisk._meta.get_field('AR_AltS_3').default and     
                    BA_RISK_Data['AR_ProductProvider'] == AssuranceRisk._meta.get_field('AR_ProductProvider').default and     
                    BA_RISK_Data['AR_PolicyNumber'] == AssuranceRisk._meta.get_field('AR_PolicyNumber').default and     
                    BA_RISK_Data['AR_ProductName'] == AssuranceRisk._meta.get_field('AR_ProductName').default and     
                    BA_RISK_Data['AR_ProductPremium'] == AssuranceRisk._meta.get_field('AR_ProductPremium').default and     
                    BA_RISK_Data['AR_ProductPremiumFrequency'] == AssuranceRisk._meta.get_field('AR_ProductPremiumFrequency').default and    
                    BA_RISK_Data['AR_ProductPattern'] == AssuranceRisk._meta.get_field('AR_ProductPattern').default and     
                    BA_RISK_Data['AR_ProductEscalation'] == AssuranceRisk._meta.get_field('AR_ProductEscalation').default and     
                    BA_RISK_Data['AR_ProductContractingParty'] == AssuranceRisk._meta.get_field('AR_ProductContractingParty').default and     
                    BA_RISK_Data['AR_ProductLivesAssured'] == AssuranceRisk._meta.get_field('AR_ProductLivesAssured').default and     
                    BA_RISK_Data['AR_ProductPremiumPayer'] == AssuranceRisk._meta.get_field('AR_ProductPremiumPayer').default and     
                    BA_RISK_Data['AR_Product1stYearCommission'] == AssuranceRisk._meta.get_field('AR_Product1stYearCommission').default and     
                    BA_RISK_Data['AR_Product2ndYearCommission'] == AssuranceRisk._meta.get_field('AR_Product2ndYearCommission').default and     
                    BA_RISK_Data['AR_BenDesc_1'] == AssuranceRisk._meta.get_field('AR_BenDesc_1').default and 
                    BA_RISK_Data['AR_BenDesc_CoverAmount1'] == AssuranceRisk._meta.get_field('AR_BenDesc_CoverAmount1').default and 
                    BA_RISK_Data['AR_BenDesc_2'] == AssuranceRisk._meta.get_field('AR_BenDesc_2').default and 
                    BA_RISK_Data['AR_BenDesc_CoverAmount2'] == AssuranceRisk._meta.get_field('AR_BenDesc_CoverAmount2').default and 
                    BA_RISK_Data['AR_BenDesc_3'] == AssuranceRisk._meta.get_field('AR_BenDesc_3').default and 
                    BA_RISK_Data['AR_BenDesc_CoverAmount3'] == AssuranceRisk._meta.get_field('AR_BenDesc_CoverAmount3').default and 
                    BA_RISK_Data['AR_BenDesc_4'] == AssuranceRisk._meta.get_field('AR_BenDesc_4').default and 
                    BA_RISK_Data['AR_BenDesc_CoverAmount4'] == AssuranceRisk._meta.get_field('AR_BenDesc_CoverAmount4').default and 
                    BA_RISK_Data['AR_BenDesc_5'] == AssuranceRisk._meta.get_field('AR_BenDesc_5').default and 
                    BA_RISK_Data['AR_BenDesc_CoverAmount5'] == AssuranceRisk._meta.get_field('AR_BenDesc_CoverAmount5').default and 
                    BA_RISK_Data['AR_BenDesc_6'] == AssuranceRisk._meta.get_field('AR_BenDesc_6').default and 
                    BA_RISK_Data['AR_BenDesc_CoverAmount6'] == AssuranceRisk._meta.get_field('AR_BenDesc_CoverAmount6').default and 
                    BA_RISK_Data['AR_BenDesc_7'] == AssuranceRisk._meta.get_field('AR_BenDesc_7').default and 
                    BA_RISK_Data['AR_BenDesc_CoverAmount7'] == AssuranceRisk._meta.get_field('AR_BenDesc_CoverAmount7').default and 
                    BA_RISK_Data['AR_ProductReasons'] == AssuranceRisk._meta.get_field('AR_ProductReasons').default and 
                    BA_RISK_Data['AR_ProductMaterialAspects'] == AssuranceRisk._meta.get_field('AR_ProductMaterialAspects').default and 
                    BA_RISK_Data['AR_ProductDetails'] == AssuranceRisk._meta.get_field('AR_ProductDetails').default and 
                    BA_RISK_Data['AR_ProductBriefSummary'] == AssuranceRisk._meta.get_field('AR_ProductBriefSummary').default and 
                    BA_RISK_Data['AR_Cessionaries'] == AssuranceRisk._meta.get_field('AR_Cessionaries').default and 
                    BA_RISK_Data['AR_InformationExplained'] == AssuranceRisk._meta.get_field('AR_InformationExplained').default  
                )):
                    form['BA_Risk_BusinessTradeName'] = "N.A."     
                    form['BA_Risk_BusinessRegisteredName'] = "N.A."     
                    form['BA_Risk_BusinessAuthorisedPersons'] = "N.A."     
                    form['BA_Risk_BusinessFinancialAdvisor'] = "N.A."     
                    form['BA_Risk_BusinessAddress'] = "N.A."     
                    form['BA_Risk_BusinessEmail'] = "N.A."     
                    form['BA_Risk_BusinessPhoneNumber'] = "N.A."     
                    form['BA_Risk_BusinessDate'] = "N.A."     
                    form['BA_Risk_ComDisc_AuthorizedPerson'] = "N.A."     
                    form['BA_Risk_ComDisc_AuthorizedPersonDetail'] = "N.A."     
                    form['BA_Risk_ComDisc_Authority'] = "N.A."     
                    form['BA_Risk_ComDisc_AuthorityDetail'] = "N.A."     
                    form['BA_Risk_FICA'] = "N.A."     
                    form['BA_Risk_FICADetail'] = "N.A."     
                    form['BA_Risk_RepPrs_Taken'] = "N.A."     
                    form['BA_Risk_RepPrs_TakenDetail'] = "N.A."     
                    form['BA_Risk_RepPrs_Explained'] = "N.A."     
                    form['BA_Risk_RepPrs_ExplainedDetail'] = "N.A."     
                    form['BA_Risk_RepPrs_Cancelled'] = "N.A."     
                    form['BA_Risk_RepPrs_CancelledDetail'] = "N.A."    
                    form['BA_Risk_SourceOfFunds'] = "N.A."     
                    form['BA_Risk_SourceOfFundsDetail'] = "N.A."      
                    form['BA_Risk_ReplacementBackInfo'] = "N.A."     
                    form['BA_Risk_Funding of Buy-and-Sell Agreement'] = "N.A."     
                    form['BA_Risk_BusA_Key Person Insurance'] = "N.A."     
                    form['BA_Risk_BusA_Business Overheads Protection'] = "N.A."     
                    form['BA_Risk_BusA_Credit Loan Account Redemption'] = "N.A."     
                    form['BA_Risk_BusA_Credit Loan Account Redemption'] = "N.A."     
                    form['BA_Risk_BusA_Debit Loan Redemption'] = "N.A."     
                    form['BA_Risk_BusA_FundingOfFutureExpenses'] = "N.A."     
                    form['BA_Risk_BusA_FundingOfDeferredGratuities'] = "N.A."     
                    form['BA_Risk_BusA_Details'] = "N.A."      
                    form['BA_Risk_BnS_DC_TotalNeed'] = "N.A."     
                    form['BA_Risk_BnS_DC_Provisions'] = "N.A."     
                    form['BA_Risk_BnS_DC_ShortfallSurplus'] = "N.A."     
                    form['BA_Risk_BnS_DC_Investments'] = "N.A."     
                    form['BA_Risk_BnS_DiC_TotalNeed'] = "N.A."     
                    form['BA_Risk_BnS_DiC_ExistingProvisions'] = "N.A."     
                    form['BA_Risk_BnS_DiC_ExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_BnS_DiC_Investments'] = "N.A."        
                    form['BA_Risk_BnS_Other'] = "N.A."     
                    form['BA_Risk_BnS_OtherTotalNeed'] = "N.A."     
                    form['BA_Risk_BnS_OtherExistingProvisions'] = "N.A."     
                    form['BA_Risk_BnS_OtherExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_BnS_OtherInvestments'] = "N.A."     
                    form['BA_Risk_BnS_Comments'] = "N.A."     
                    form['BA_Risk_KeyP_DC_TotalNeed'] = "N.A."     
                    form['BA_Risk_KeyP_DC_ExistingProvisions'] = "N.A."     
                    form['BA_Risk_KeyP_DC_ExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_KeyP_DC_Investments'] = "N.A."       
                    form['BA_Risk_KeyP_DiC_TotalNeed'] = "N.A."     
                    form['BA_Risk_KeyP_DiC_ExistingProvisions'] = "N.A."     
                    form['BA_Risk_KeyP_DiC_ExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_KeyP_DiC_Investments'] = "N.A."     
                    form['BA_Risk_KeyP_TI_CoverTotalNeed'] = "N.A."     
                    form['BA_Risk_KeyP_TI_CoverExistingProvisions'] = "N.A."     
                    form['BA_Risk_KeyP_TI_CoverExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_KeyP_TI_CoverInvestments'] = "N.A."         
                    form['BA_Risk_KeyP_PI_CoverTotalNeed'] = "N.A."     
                    form['BA_Risk_KeyP_PI_CoverExistingProvisions'] = "N.A."     
                    form['BA_Risk_KeyP_PI_CoverExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_KeyP_PI_CoverInvestments'] = "N.A."         
                    form['BA_Risk_KeyP_Other'] = "N.A."     
                    form['BA_Risk_KeyP_OtherTotalNeed'] = "N.A."     
                    form['BA_Risk_KeyP_OtherExistingProvisions'] = "N.A."     
                    form['BA_Risk_KeyP_OtherExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_KeyP_OtherInvestments'] = "N.A."      
                    form['BA_Risk_KeyP_Comments'] = "N.A."         
                    form['BA_Risk_SureNLia_DC_TotalNeed'] = "N.A."     
                    form['BA_Risk_SureNLia_DC_Provisions'] = "N.A."     
                    form['BA_Risk_SureNLia_DC_ShortfallSurplus'] = "N.A."     
                    form['BA_Risk_SureNLia_DC_Investments'] = "N.A."     
                    form['BA_Risk_SureNLia_DiC_TotalNeed'] = "N.A."     
                    form['BA_Risk_SureNLia_DiC_Provisions'] = "N.A."     
                    form['BA_Risk_SureNLia_DiC_ShortfallSurplus'] = "N.A."     
                    form['BA_Risk_SureNLia_DiC_Investments'] = "N.A."        
                    form['BA_Risk_SureNLia_Other'] = "N.A."     
                    form['BA_Risk_SureNLia_OtherTotalNeed'] = "N.A."     
                    form['BA_Risk_SureNLia_OtherProvisions'] = "N.A."     
                    form['BA_Risk_SureNLia_OtherShortfallSurplus'] = "N.A."     
                    form['BA_Risk_SureNLia_OtherInvestments'] = "N.A."     
                    form['BA_Risk_SureNLia_Comments'] = "N.A."     
                    form['BA_Risk_BusOvProt_TI_CoverTotalNeed'] = "N.A."     
                    form['BA_Risk_BusOvProt_TI_CoverExistingProvisions'] = "N.A."     
                    form['BA_Risk_BusOvProt_TI_CoverExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_BusOvProt_TI_CoverInvestments'] = "N.A."         
                    form['BA_Risk_BusOvProt_PI_CoverTotalNeed'] = "N.A."     
                    form['BA_Risk_BusOvProt_PI_CoverExistingProvisions'] = "N.A."     
                    form['BA_Risk_BusOvProt_PI_CoverExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_BusOvProt_PI_CoverInvestments'] = "N.A."         
                    form['BA_Risk_BusOvProt_Other'] = "N.A."     
                    form['BA_Risk_BusOvProt_OtherTotalNeed'] = "N.A."     
                    form['BA_Risk_BusOvProt_OtherExistingProvisions'] = "N.A."     
                    form['BA_Risk_BusOvProt_OtherExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_BusOvProt_OtherInvestments'] = "N.A."      
                    form['BA_Risk_BusOvProt_Comments'] = "N.A."   
                    form['BA_Risk_CLARedm_DC_TotalNeed'] = "N.A."     
                    form['BA_Risk_CLARedm_DC_ExistingProvisions'] = "N.A."     
                    form['BA_Risk_CLARedm_DC_ExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_CLARedm_DC_Investments'] = "N.A."     
                    form['BA_Risk_CLARedm_DiC_TotalNeed'] = "N.A."     
                    form['BA_Risk_CLARedm_DiC_ExistingProvisions'] = "N.A."     
                    form['BA_Risk_CLARedm_DiC_ExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_CLARedm_DiC_Investments'] = "N.A."     
                    form['BA_Risk_CLARedm_Other'] = "N.A."     
                    form['BA_Risk_CLARedm_OtherTotalNeed'] = "N.A."     
                    form['BA_Risk_CLARedm_OtherExistingProvisions'] = "N.A."     
                    form['BA_Risk_CLARedm_OtherExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_CLARedm_OtherInvestments'] = "N.A."      
                    form['BA_Risk_DLARedm_DC_TotalNeed'] = "N.A."     
                    form['BA_Risk_DLARedm_DC_ExistingProvisions'] = "N.A."     
                    form['BA_Risk_DLARedm_DC_ExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_DLARedm_DC_Investments'] = "N.A."     
                    form['BA_Risk_DLARedm_DiC_TotalNeed'] = "N.A."     
                    form['BA_Risk_DLARedm_DiC_ExistingProvisions'] = "N.A."     
                    form['BA_Risk_DLARedm_DiC_ExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_DLARedm_DiC_Investments'] = "N.A."     
                    form['BA_Risk_DLARedm_Other'] = "N.A."     
                    form['BA_Risk_DLARedm_OtherTotalNeed'] = "N.A."     
                    form['BA_Risk_DLARedm_OtherExistingProvisions'] = "N.A."     
                    form['BA_Risk_DLARedm_OtherExistingShortfallSurplus'] = "N.A."     
                    form['BA_Risk_DLARedm_OtherInvestments'] = "N.A."      
                    form['BA_Risk_LifeCoverFinancialSolutions'] = "N.A."     
                    form['BA_Risk_DiC_FinancialSolutions'] = "N.A."    
                    form['BA_Risk_AltS_1'] = "N.A."     
                    form['BA_Risk_AltS_2'] = "N.A."     
                    form['BA_Risk_AltS_3'] = "N.A."     
                    form['BA_Risk_ProductProvider'] = "N.A."     
                    form['BA_Risk_PolicyNumber'] = "N.A."     
                    form['BA_Risk_ProductName'] = "N.A."     
                    form['BA_Risk_ProductPremium'] = "N.A."     
                    form['BA_Risk_ProductPremiumFrequency'] = "N.A."    
                    form['BA_Risk_ProductPattern'] = "N.A."     
                    form['BA_Risk_ProductEscalation'] = "N.A."     
                    form['BA_Risk_ProductContractingParty'] = "N.A."     
                    form['BA_Risk_ProductLivesAssured'] = "N.A."     
                    form['BA_Risk_ProductPremiumPayer'] = "N.A."     
                    form['BA_Risk_Product1stYearCommission'] = "N.A."     
                    form['BA_Risk_Product2ndYearCommission'] = "N.A."     
                    form['BA_Risk_BenDesc_1'] = "N.A." 
                    form['BA_Risk_BenDesc_CoverAmount1'] = "N.A." 
                    form['BA_Risk_BenDesc_2'] = "N.A." 
                    form['BA_Risk_BenDesc_CoverAmount2'] = "N.A." 
                    form['BA_Risk_BenDesc_3'] = "N.A." 
                    form['BA_Risk_BenDesc_CoverAmount3'] = "N.A." 
                    form['BA_Risk_BenDesc_4'] = "N.A." 
                    form['BA_Risk_BenDesc_CoverAmount4'] = "N.A." 
                    form['BA_Risk_BenDesc_5'] = "N.A." 
                    form['BA_Risk_BenDesc_CoverAmount5'] = "N.A." 
                    form['BA_Risk_BenDesc_6'] = "N.A." 
                    form['BA_Risk_BenDesc_CoverAmount6'] = "N.A." 
                    form['BA_Risk_BenDesc_7'] = "N.A." 
                    form['BA_Risk_BenDesc_CoverAmount7'] = "N.A." 
                    form['BA_Risk_ProductReasons'] = "N.A." 
                    form['BA_Risk_ProductMaterialAspects'] = "N.A." 
                    form['BA_Risk_ProductDetails'] = "N.A." 
                    form['BA_Risk_ProductBriefSummary'] = "N.A." 
                    form['BA_Risk_Cessionaries'] = "N.A." 
                    form['BA_Risk_InformationExplained'] = "N.A." 
            else:                   
                form['BA_Risk_BusinessTradeName'] = BA_RISK_Data['AR_BusinessTradeName']     
                form['BA_Risk_BusinessRegisteredName'] = BA_RISK_Data['AR_BusinessRegisteredName']     
                form['BA_Risk_BusinessAuthorisedPersons'] = BA_RISK_Data['AR_BusinessAuthorisedPersons']     
                form['BA_Risk_BusinessFinancialAdvisor'] = BA_RISK_Data['AR_BusinessFinancialAdvisor']     
                form['BA_Risk_BusinessAddress'] = BA_RISK_Data['AR_BusinessAddress']     
                form['BA_Risk_BusinessEmail'] = BA_RISK_Data['AR_BusinessEmail']     
                form['BA_Risk_BusinessPhoneNumber'] = BA_RISK_Data['AR_BusinessPhoneNumber']     
                form['BA_Risk_BusinessDate'] = BA_RISK_Data['AR_BusinessDate']     
                form['BA_Risk_ComDisc_AuthorizedPerson'] = "Yes" if int(BA_RISK_Data['AR_ComDisc_AuthorizedPerson']) == 0 else "No" 
                form['BA_Risk_ComDisc_AuthorizedPersonDetail'] = BA_RISK_Data['AR_ComDisc_AuthorizedPersonDetail']     
                form['BA_Risk_ComDisc_Authority'] = "Yes" if int(BA_RISK_Data['AR_ComDisc_Authority']) == 0 else "No"  
                form['BA_Risk_ComDisc_AuthorityDetail'] = BA_RISK_Data['AR_ComDisc_AuthorityDetail']     
                form['BA_Risk_FICA'] = "Yes" if int(BA_RISK_Data['AR_FICA']) == 0 else "No"
                form['BA_Risk_FICADetail'] = BA_RISK_Data['AR_FICADetail']     
                form['BA_Risk_RepPrs_Taken'] = "Yes" if int(BA_RISK_Data['AR_RepPrs_Taken']) == 0 else "No"     
                form['BA_Risk_RepPrs_TakenDetail'] = BA_RISK_Data['AR_RepPrs_TakenDetail']     
                form['BA_Risk_RepPrs_Explained'] = "Yes" if int(BA_RISK_Data['AR_RepPrs_Explained']) == 0 else "No"  
                form['BA_Risk_RepPrs_ExplainedDetail'] = BA_RISK_Data['AR_RepPrs_ExplainedDetail']     
                form['BA_Risk_RepPrs_Cancelled'] = "Yes" if int(BA_RISK_Data['AR_RepPrs_Cancelled']) == 0 else "No"     
                form['BA_Risk_RepPrs_CancelledDetail'] = BA_RISK_Data['AR_RepPrs_CancelledDetail']    
                form['BA_Risk_SourceOfFunds'] = BA_RISK_Data['AR_SourceOfFunds']     
                form['BA_Risk_SourceOfFundsDetail'] = BA_RISK_Data['AR_SourceOfFundsDetail']      
                form['BA_Risk_ReplacementBackInfo'] = BA_RISK_Data['AR_ReplacementBackInfo']     
                form['BA_Risk_Funding of Buy-and-Sell Agreement'] = "Yes" if (BA_RISK_Data['AR_BusA_BnS']) else "No" 
                form['BA_Risk_BusA_Key Person Insurance'] = "Yes" if BA_RISK_Data['AR_BusA_KeyP_Insurance'] else "No"  
                form['BA_Risk_BusA_Contingent Liability'] = "Yes" if BA_RISK_Data['AR_BusA_ContingentLiability'] else "No"     
                form['BA_Risk_BusA_Business Overheads Protection'] = "Yes" if BA_RISK_Data['AR_BusA_BusOvProt'] else "No"     
                form['BA_Risk_BusA_Credit Loan Account Redemption'] = "Yes" if BA_RISK_Data['AR_BusA_CLARedm'] else "No"     
                form['BA_Risk_BusA_Debit Loan Redemption'] = "Yes" if BA_RISK_Data['AR_BusA_DebitLoanRedemption'] else "No"
                form['BA_Risk_BusA_Funding of Future Expenses'] = "Yes" if BA_RISK_Data['AR_BusA_FundingOfFutureExpenses'] else "No"     
                form['BA_Risk_BusA_Funding of Deferred Gratuities'] = "Yes" if BA_RISK_Data['AR_BusA_FundingOfDeferredGratuities'] else "No"     
                form['BA_Risk_BusA_Details'] = BA_RISK_Data['AR_BusA_Details']      
                form['BA_Risk_BnS_DC_TotalNeed'] = BA_RISK_Data['AR_BnS_DC_TotalNeed']     
                form['BA_Risk_BnS_DC_Provisions'] = BA_RISK_Data['AR_BnS_DC_Provisions']     
                form['BA_Risk_BnS_DC_ShortfallSurplus'] = BA_RISK_Data['AR_BnS_DC_ShortfallSurplus']     
                form['BA_Risk_BnS_DC_Investments'] = BA_RISK_Data['AR_BnS_DC_Investments']     
                form['BA_Risk_BnS_DiC_TotalNeed'] = BA_RISK_Data['AR_BnS_DiC_TotalNeed']     
                form['BA_Risk_BnS_DiC_ExistingProvisions'] = BA_RISK_Data['AR_BnS_DiC_ExistingProvisions']     
                form['BA_Risk_BnS_DiC_ExistingShortfallSurplus'] = BA_RISK_Data['AR_BnS_DiC_ExistingShortfallSurplus']     
                form['BA_Risk_BnS_DiC_Investments'] = BA_RISK_Data['AR_BnS_DiC_Investments']        
                form['BA_Risk_BnS_Other'] = BA_RISK_Data['AR_BnS_Other']     
                form['BA_Risk_BnS_OtherTotalNeed'] = BA_RISK_Data['AR_BnS_OtherTotalNeed']     
                form['BA_Risk_BnS_OtherExistingProvisions'] = BA_RISK_Data['AR_BnS_OtherExistingProvisions']     
                form['BA_Risk_BnS_OtherExistingShortfallSurplus'] = BA_RISK_Data['AR_BnS_OtherExistingShortfallSurplus']     
                form['BA_Risk_BnS_OtherInvestments'] = BA_RISK_Data['AR_BnS_OtherInvestments']     
                form['BA_Risk_BnS_Comments'] = BA_RISK_Data['AR_BnS_Comments']     
                form['BA_Risk_KeyP_DC_TotalNeed'] = BA_RISK_Data['AR_KeyP_DC_TotalNeed']     
                form['BA_Risk_KeyP_DC_ExistingProvisions'] = BA_RISK_Data['AR_KeyP_DC_ExistingProvisions']     
                form['BA_Risk_KeyP_DC_ExistingShortfallSurplus'] = BA_RISK_Data['AR_KeyP_DC_ExistingShortfallSurplus']     
                form['BA_Risk_KeyP_DC_Investments'] = BA_RISK_Data['AR_KeyP_DC_Investments']       
                form['BA_Risk_KeyP_DiC_TotalNeed'] = BA_RISK_Data['AR_KeyP_DiC_TotalNeed']     
                form['BA_Risk_KeyP_DiC_ExistingProvisions'] = BA_RISK_Data['AR_KeyP_DiC_ExistingProvisions']     
                form['BA_Risk_KeyP_DiC_ExistingShortfallSurplus'] = BA_RISK_Data['AR_KeyP_DiC_ExistingShortfallSurplus']     
                form['BA_Risk_KeyP_DiC_Investments'] = BA_RISK_Data['AR_KeyP_DiC_Investments']     
                form['BA_Risk_KeyP_TI_CoverTotalNeed'] = BA_RISK_Data['AR_KeyP_TI_CoverTotalNeed']     
                form['BA_Risk_KeyP_TI_CoverExistingProvisions'] = BA_RISK_Data['AR_KeyP_TI_CoverExistingProvisions']     
                form['BA_Risk_KeyP_TI_CoverExistingShortfallSurplus'] = BA_RISK_Data['AR_KeyP_TI_CoverExistingShortfallSurplus']     
                form['BA_Risk_KeyP_TI_CoverInvestments'] = BA_RISK_Data['AR_KeyP_TI_CoverInvestments']         
                form['BA_Risk_KeyP_PI_CoverTotalNeed'] = BA_RISK_Data['AR_KeyP_PI_CoverTotalNeed']     
                form['BA_Risk_KeyP_PI_CoverExistingProvisions'] = BA_RISK_Data['AR_KeyP_PI_CoverExistingProvisions']     
                form['BA_Risk_KeyP_PI_CoverExistingShortfallSurplus'] = BA_RISK_Data['AR_KeyP_PI_CoverExistingShortfallSurplus']     
                form['BA_Risk_KeyP_PI_CoverInvestments'] = BA_RISK_Data['AR_KeyP_PI_CoverInvestments']         
                form['BA_Risk_KeyP_Other'] = BA_RISK_Data['AR_KeyP_Other']     
                form['BA_Risk_KeyP_OtherTotalNeed'] = BA_RISK_Data['AR_KeyP_OtherTotalNeed']     
                form['BA_Risk_KeyP_OtherExistingProvisions'] = BA_RISK_Data['AR_KeyP_OtherExistingProvisions']     
                form['BA_Risk_KeyP_OtherExistingShortfallSurplus'] = BA_RISK_Data['AR_KeyP_OtherExistingShortfallSurplus']     
                form['BA_Risk_KeyP_OtherInvestments'] = BA_RISK_Data['AR_KeyP_OtherInvestments']      
                form['BA_Risk_KeyP_Comments'] = BA_RISK_Data['AR_KeyP_Comments']         
                form['BA_Risk_SureNLia_DC_TotalNeed'] = BA_RISK_Data['AR_SureNLia_DC_TotalNeed']     
                form['BA_Risk_SureNLia_DC_Provisions'] = BA_RISK_Data['AR_SureNLia_DC_Provisions']     
                form['BA_Risk_SureNLia_DC_ShortfallSurplus'] = BA_RISK_Data['AR_SureNLia_DC_ShortfallSurplus']     
                form['BA_Risk_SureNLia_DC_Investments'] = BA_RISK_Data['AR_SureNLia_DC_Investments']     
                form['BA_Risk_SureNLia_DiC_TotalNeed'] = BA_RISK_Data['AR_SureNLia_DiC_TotalNeed']     
                form['BA_Risk_SureNLia_DiC_Provisions'] = BA_RISK_Data['AR_SureNLia_DiC_Provisions']     
                form['BA_Risk_SureNLia_DiC_ShortfallSurplus'] = BA_RISK_Data['AR_SureNLia_DiC_ShortfallSurplus']     
                form['BA_Risk_SureNLia_DiC_Investments'] = BA_RISK_Data['AR_SureNLia_DiC_Investments']        
                form['BA_Risk_SureNLia_Other'] = BA_RISK_Data['AR_SureNLia_Other']     
                form['BA_Risk_SureNLia_OtherTotalNeed'] = BA_RISK_Data['AR_SureNLia_OtherTotalNeed']     
                form['BA_Risk_SureNLia_OtherProvisions'] = BA_RISK_Data['AR_SureNLia_OtherProvisions']     
                form['BA_Risk_SureNLia_OtherShortfallSurplus'] = BA_RISK_Data['AR_SureNLia_OtherShortfallSurplus']     
                form['BA_Risk_SureNLia_OtherInvestments'] = BA_RISK_Data['AR_SureNLia_OtherInvestments']     
                form['BA_Risk_SureNLia_Comments'] = BA_RISK_Data['AR_SureNLia_Comments']     
                form['BA_Risk_BusOvProt_TI_CoverTotalNeed'] = BA_RISK_Data['AR_BusOvProt_TI_CoverTotalNeed']     
                form['BA_Risk_BusOvProt_TI_CoverExistingProvisions'] = BA_RISK_Data['AR_BusOvProt_TI_CoverExistingProvisions']     
                form['BA_Risk_BusOvProt_TI_CoverExistingShortfallSurplus'] = BA_RISK_Data['AR_BusOvProt_TI_CoverExistingShortfallSurplus']     
                form['BA_Risk_BusOvProt_TI_CoverInvestments'] = BA_RISK_Data['AR_BusOvProt_TI_CoverInvestments']         
                form['BA_Risk_BusOvProt_PI_CoverTotalNeed'] = BA_RISK_Data['AR_BusOvProt_PI_CoverTotalNeed']     
                form['BA_Risk_BusOvProt_PI_CoverExistingProvisions'] = BA_RISK_Data['AR_BusOvProt_PI_CoverExistingProvisions']     
                form['BA_Risk_BusOvProt_PI_CoverExistingShortfallSurplus'] = BA_RISK_Data['AR_BusOvProt_PI_CoverExistingShortfallSurplus']     
                form['BA_Risk_BusOvProt_PI_CoverInvestments'] = BA_RISK_Data['AR_BusOvProt_PI_CoverInvestments']         
                form['BA_Risk_BusOvProt_Other'] = BA_RISK_Data['AR_BusOvProt_Other']     
                form['BA_Risk_BusOvProt_OtherTotalNeed'] = BA_RISK_Data['AR_BusOvProt_OtherTotalNeed']     
                form['BA_Risk_BusOvProt_OtherExistingProvisions'] = BA_RISK_Data['AR_BusOvProt_OtherExistingProvisions']     
                form['BA_Risk_BusOvProt_OtherExistingShortfallSurplus'] = BA_RISK_Data['AR_BusOvProt_OtherExistingShortfallSurplus']     
                form['BA_Risk_BusOvProt_OtherInvestments'] = BA_RISK_Data['AR_BusOvProt_OtherInvestments']      
                form['BA_Risk_BusOvProt_Comments'] = BA_RISK_Data['AR_BusOvProt_Comments']   
                form['BA_Risk_CLARedm_DC_TotalNeed'] = BA_RISK_Data['AR_CLARedm_DC_TotalNeed']     
                form['BA_Risk_CLARedm_DC_ExistingProvisions'] = BA_RISK_Data['AR_CLARedm_DC_ExistingProvisions']     
                form['BA_Risk_CLARedm_DC_ExistingShortfallSurplus'] = BA_RISK_Data['AR_CLARedm_DC_ExistingShortfallSurplus']     
                form['BA_Risk_CLARedm_DC_Investments'] = BA_RISK_Data['AR_CLARedm_DC_Investments']     
                form['BA_Risk_CLARedm_DiC_TotalNeed'] = BA_RISK_Data['AR_CLARedm_DiC_TotalNeed']     
                form['BA_Risk_CLARedm_DiC_ExistingProvisions'] = BA_RISK_Data['AR_CLARedm_DiC_ExistingProvisions']     
                form['BA_Risk_CLARedm_DiC_ExistingShortfallSurplus'] = BA_RISK_Data['AR_CLARedm_DiC_ExistingShortfallSurplus']     
                form['BA_Risk_CLARedm_DiC_Investments'] = BA_RISK_Data['AR_CLARedm_DiC_Investments']     
                form['BA_Risk_CLARedm_Other'] = BA_RISK_Data['AR_CLARedm_Other']     
                form['BA_Risk_CLARedm_OtherTotalNeed'] = BA_RISK_Data['AR_CLARedm_OtherTotalNeed']     
                form['BA_Risk_CLARedm_OtherExistingProvisions'] = BA_RISK_Data['AR_CLARedm_OtherExistingProvisions']     
                form['BA_Risk_CLARedm_OtherExistingShortfallSurplus'] = BA_RISK_Data['AR_CLARedm_OtherExistingShortfallSurplus']     
                form['BA_Risk_CLARedm_OtherInvestments'] = BA_RISK_Data['AR_CLARedm_OtherInvestments']      
                form['BA_Risk_DLARedm_DC_TotalNeed'] = BA_RISK_Data['AR_DLARedm_DC_TotalNeed']     
                form['BA_Risk_DLARedm_DC_ExistingProvisions'] = BA_RISK_Data['AR_DLARedm_DC_ExistingProvisions']     
                form['BA_Risk_DLARedm_DC_ExistingShortfallSurplus'] = BA_RISK_Data['AR_DLARedm_DC_ExistingShortfallSurplus']     
                form['BA_Risk_DLARedm_DC_Investments'] = BA_RISK_Data['AR_DLARedm_DC_Investments']     
                form['BA_Risk_DLARedm_DiC_TotalNeed'] = BA_RISK_Data['AR_DLARedm_DiC_TotalNeed']     
                form['BA_Risk_DLARedm_DiC_ExistingProvisions'] = BA_RISK_Data['AR_DLARedm_DiC_ExistingProvisions']     
                form['BA_Risk_DLARedm_DiC_ExistingShortfallSurplus'] = BA_RISK_Data['AR_DLARedm_DiC_ExistingShortfallSurplus']     
                form['BA_Risk_DLARedm_DiC_Investments'] = BA_RISK_Data['AR_DLARedm_DiC_Investments']     
                form['BA_Risk_DLARedm_Other'] = BA_RISK_Data['AR_DLARedm_Other']     
                form['BA_Risk_DLARedm_OtherTotalNeed'] = BA_RISK_Data['AR_DLARedm_OtherTotalNeed']     
                form['BA_Risk_DLARedm_OtherExistingProvisions'] = BA_RISK_Data['AR_DLARedm_OtherExistingProvisions']     
                form['BA_Risk_DLARedm_OtherExistingShortfallSurplus'] = BA_RISK_Data['AR_DLARedm_OtherExistingShortfallSurplus']     
                form['BA_Risk_DLARedm_OtherInvestments'] = BA_RISK_Data['AR_DLARedm_OtherInvestments']      
                form['BA_Risk_LifeCoverFinancialSolutions'] = BA_RISK_Data['AR_LifeCoverFinancialSolutions']     
                form['BA_Risk_DiC_FinancialSolutions'] = BA_RISK_Data['AR_DiC_FinancialSolutions']    
                form['BA_Risk_AltS_1'] = BA_RISK_Data['AR_AltS_1']     
                form['BA_Risk_AltS_2'] = BA_RISK_Data['AR_AltS_2']     
                form['BA_Risk_AltS_3'] = BA_RISK_Data['AR_AltS_3']     
                form['BA_Risk_ProductProvider'] = BA_RISK_Data['AR_ProductProvider']     
                form['BA_Risk_PolicyNumber'] = BA_RISK_Data['AR_PolicyNumber']     
                form['BA_Risk_ProductName'] = BA_RISK_Data['AR_ProductName']     
                form['BA_Risk_ProductPremium'] = BA_RISK_Data['AR_ProductPremium']     
                form['BA_Risk_ProductPremiumFrequency'] = Frequency[int(BA_RISK_Data['AR_ProductPremiumFrequency'])]    
                form['BA_Risk_ProductPattern'] = BA_RISK_Data['AR_ProductPattern']     
                form['BA_Risk_ProductEscalation'] = BA_RISK_Data['AR_ProductEscalation']     
                form['BA_Risk_ProductContractingParty'] = BA_RISK_Data['AR_ProductContractingParty']     
                form['BA_Risk_ProductLivesAssured'] = BA_RISK_Data['AR_ProductLivesAssured']     
                form['BA_Risk_ProductPremiumPayer'] = BA_RISK_Data['AR_ProductPremiumPayer']     
                form['BA_Risk_Product1stYearCommission'] = BA_RISK_Data['AR_Product1stYearCommission']     
                form['BA_Risk_Product2ndYearCommission'] = BA_RISK_Data['AR_Product2ndYearCommission']     
                form['BA_Risk_BenDesc_1'] = BA_RISK_Data['AR_BenDesc_1'] 
                form['BA_Risk_BenDesc_CoverAmount1'] = BA_RISK_Data['AR_BenDesc_CoverAmount1'] 
                form['BA_Risk_BenDesc_2'] = BA_RISK_Data['AR_BenDesc_2'] 
                form['BA_Risk_BenDesc_CoverAmount2'] = BA_RISK_Data['AR_BenDesc_CoverAmount2'] 
                form['BA_Risk_BenDesc_3'] = BA_RISK_Data['AR_BenDesc_3'] 
                form['BA_Risk_BenDesc_CoverAmount3'] = BA_RISK_Data['AR_BenDesc_CoverAmount3'] 
                form['BA_Risk_BenDesc_4'] = BA_RISK_Data['AR_BenDesc_4'] 
                form['BA_Risk_BenDesc_CoverAmount4'] = BA_RISK_Data['AR_BenDesc_CoverAmount4'] 
                form['BA_Risk_BenDesc_5'] = BA_RISK_Data['AR_BenDesc_5'] 
                form['BA_Risk_BenDesc_CoverAmount5'] = BA_RISK_Data['AR_BenDesc_CoverAmount5'] 
                form['BA_Risk_BenDesc_6'] = BA_RISK_Data['AR_BenDesc_6'] 
                form['BA_Risk_BenDesc_CoverAmount6'] = BA_RISK_Data['AR_BenDesc_CoverAmount6'] 
                form['BA_Risk_BenDesc_7'] = BA_RISK_Data['AR_BenDesc_7'] 
                form['BA_Risk_BenDesc_CoverAmount7'] = BA_RISK_Data['AR_BenDesc_CoverAmount7'] 
                form['BA_Risk_ProductReasons'] = BA_RISK_Data['AR_ProductReasons'] 
                form['BA_Risk_ProductMaterialAspects'] = BA_RISK_Data['AR_ProductMaterialAspects'] 
                form['BA_Risk_ProductDetails'] = BA_RISK_Data['AR_ProductDetails'] 
                form['BA_Risk_ProductBriefSummary'] = BA_RISK_Data['AR_ProductBriefSummary'] 
                form['BA_Risk_Cessionaries'] = BA_RISK_Data['AR_Cessionaries'] 
                form['BA_Risk_InformationExplained'] = BA_RISK_Data['AR_InformationExplained'] 
        else:
            form['BA_Risk_BusinessTradeName'] = "N.A."     
            form['BA_Risk_BusinessRegisteredName'] = "N.A."     
            form['BA_Risk_BusinessAuthorisedPersons'] = "N.A."     
            form['BA_Risk_BusinessFinancialAdvisor'] = "N.A."     
            form['BA_Risk_BusinessAddress'] = "N.A."     
            form['BA_Risk_BusinessEmail'] = "N.A."     
            form['BA_Risk_BusinessPhoneNumber'] = "N.A."     
            form['BA_Risk_BusinessDate'] = "N.A."     
            form['BA_Risk_ComDisc_AuthorizedPerson'] = "N.A."     
            form['BA_Risk_ComDisc_AuthorizedPersonDetail'] = "N.A."     
            form['BA_Risk_ComDisc_Authority'] = "N.A."     
            form['BA_Risk_ComDisc_AuthorityDetail'] = "N.A."     
            form['BA_Risk_FICA'] = "N.A."     
            form['BA_Risk_FICADetail'] = "N.A."     
            form['BA_Risk_RepPrs_Taken'] = "N.A."     
            form['BA_Risk_RepPrs_TakenDetail'] = "N.A."     
            form['BA_Risk_RepPrs_Explained'] = "N.A."     
            form['BA_Risk_RepPrs_ExplainedDetail'] = "N.A."     
            form['BA_Risk_RepPrs_Cancelled'] = "N.A."     
            form['BA_Risk_RepPrs_CancelledDetail'] = "N.A."    
            form['BA_Risk_SourceOfFunds'] = "N.A."     
            form['BA_Risk_SourceOfFundsDetail'] = "N.A."      
            form['BA_Risk_ReplacementBackInfo'] = "N.A."     
            form['BA_Risk_Funding of Buy-and-Sell Agreement'] = "N.A."     
            form['BA_Risk_BusA_Key Person Insurance'] = "N.A."     
            form['BA_Risk_BusA_Business Overheads Protection'] = "N.A."     
            form['BA_Risk_BusA_Credit Loan Account Redemption'] = "N.A."     
            form['BA_Risk_BusA_Credit Loan Account Redemption'] = "N.A."     
            form['BA_Risk_BusA_Debit Loan Redemption'] = "N.A."     
            form['BA_Risk_BusA_FundingOfFutureExpenses'] = "N.A."     
            form['BA_Risk_BusA_FundingOfDeferredGratuities'] = "N.A."     
            form['BA_Risk_BusA_Details'] = "N.A."      
            form['BA_Risk_BnS_DC_TotalNeed'] = "N.A."     
            form['BA_Risk_BnS_DC_Provisions'] = "N.A."     
            form['BA_Risk_BnS_DC_ShortfallSurplus'] = "N.A."     
            form['BA_Risk_BnS_DC_Investments'] = "N.A."     
            form['BA_Risk_BnS_DiC_TotalNeed'] = "N.A."     
            form['BA_Risk_BnS_DiC_ExistingProvisions'] = "N.A."     
            form['BA_Risk_BnS_DiC_ExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_BnS_DiC_Investments'] = "N.A."        
            form['BA_Risk_BnS_Other'] = "N.A."     
            form['BA_Risk_BnS_OtherTotalNeed'] = "N.A."     
            form['BA_Risk_BnS_OtherExistingProvisions'] = "N.A."     
            form['BA_Risk_BnS_OtherExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_BnS_OtherInvestments'] = "N.A."     
            form['BA_Risk_BnS_Comments'] = "N.A."     
            form['BA_Risk_KeyP_DC_TotalNeed'] = "N.A."     
            form['BA_Risk_KeyP_DC_ExistingProvisions'] = "N.A."     
            form['BA_Risk_KeyP_DC_ExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_KeyP_DC_Investments'] = "N.A."       
            form['BA_Risk_KeyP_DiC_TotalNeed'] = "N.A."     
            form['BA_Risk_KeyP_DiC_ExistingProvisions'] = "N.A."     
            form['BA_Risk_KeyP_DiC_ExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_KeyP_DiC_Investments'] = "N.A."     
            form['BA_Risk_KeyP_TI_CoverTotalNeed'] = "N.A."     
            form['BA_Risk_KeyP_TI_CoverExistingProvisions'] = "N.A."     
            form['BA_Risk_KeyP_TI_CoverExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_KeyP_TI_CoverInvestments'] = "N.A."         
            form['BA_Risk_KeyP_PI_CoverTotalNeed'] = "N.A."     
            form['BA_Risk_KeyP_PI_CoverExistingProvisions'] = "N.A."     
            form['BA_Risk_KeyP_PI_CoverExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_KeyP_PI_CoverInvestments'] = "N.A."         
            form['BA_Risk_KeyP_Other'] = "N.A."     
            form['BA_Risk_KeyP_OtherTotalNeed'] = "N.A."     
            form['BA_Risk_KeyP_OtherExistingProvisions'] = "N.A."     
            form['BA_Risk_KeyP_OtherExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_KeyP_OtherInvestments'] = "N.A."      
            form['BA_Risk_KeyP_Comments'] = "N.A."         
            form['BA_Risk_SureNLia_DC_TotalNeed'] = "N.A."     
            form['BA_Risk_SureNLia_DC_Provisions'] = "N.A."     
            form['BA_Risk_SureNLia_DC_ShortfallSurplus'] = "N.A."     
            form['BA_Risk_SureNLia_DC_Investments'] = "N.A."     
            form['BA_Risk_SureNLia_DiC_TotalNeed'] = "N.A."     
            form['BA_Risk_SureNLia_DiC_Provisions'] = "N.A."     
            form['BA_Risk_SureNLia_DiC_ShortfallSurplus'] = "N.A."     
            form['BA_Risk_SureNLia_DiC_Investments'] = "N.A."        
            form['BA_Risk_SureNLia_Other'] = "N.A."     
            form['BA_Risk_SureNLia_OtherTotalNeed'] = "N.A."     
            form['BA_Risk_SureNLia_OtherProvisions'] = "N.A."     
            form['BA_Risk_SureNLia_OtherShortfallSurplus'] = "N.A."     
            form['BA_Risk_SureNLia_OtherInvestments'] = "N.A."     
            form['BA_Risk_SureNLia_Comments'] = "N.A."     
            form['BA_Risk_BusOvProt_TI_CoverTotalNeed'] = "N.A."     
            form['BA_Risk_BusOvProt_TI_CoverExistingProvisions'] = "N.A."     
            form['BA_Risk_BusOvProt_TI_CoverExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_BusOvProt_TI_CoverInvestments'] = "N.A."         
            form['BA_Risk_BusOvProt_PI_CoverTotalNeed'] = "N.A."     
            form['BA_Risk_BusOvProt_PI_CoverExistingProvisions'] = "N.A."     
            form['BA_Risk_BusOvProt_PI_CoverExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_BusOvProt_PI_CoverInvestments'] = "N.A."         
            form['BA_Risk_BusOvProt_Other'] = "N.A."     
            form['BA_Risk_BusOvProt_OtherTotalNeed'] = "N.A."     
            form['BA_Risk_BusOvProt_OtherExistingProvisions'] = "N.A."     
            form['BA_Risk_BusOvProt_OtherExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_BusOvProt_OtherInvestments'] = "N.A."      
            form['BA_Risk_BusOvProt_Comments'] = "N.A."   
            form['BA_Risk_CLARedm_DC_TotalNeed'] = "N.A."     
            form['BA_Risk_CLARedm_DC_ExistingProvisions'] = "N.A."     
            form['BA_Risk_CLARedm_DC_ExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_CLARedm_DC_Investments'] = "N.A."     
            form['BA_Risk_CLARedm_DiC_TotalNeed'] = "N.A."     
            form['BA_Risk_CLARedm_DiC_ExistingProvisions'] = "N.A."     
            form['BA_Risk_CLARedm_DiC_ExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_CLARedm_DiC_Investments'] = "N.A."     
            form['BA_Risk_CLARedm_Other'] = "N.A."     
            form['BA_Risk_CLARedm_OtherTotalNeed'] = "N.A."     
            form['BA_Risk_CLARedm_OtherExistingProvisions'] = "N.A."     
            form['BA_Risk_CLARedm_OtherExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_CLARedm_OtherInvestments'] = "N.A."      
            form['BA_Risk_DLARedm_DC_TotalNeed'] = "N.A."     
            form['BA_Risk_DLARedm_DC_ExistingProvisions'] = "N.A."     
            form['BA_Risk_DLARedm_DC_ExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_DLARedm_DC_Investments'] = "N.A."     
            form['BA_Risk_DLARedm_DiC_TotalNeed'] = "N.A."     
            form['BA_Risk_DLARedm_DiC_ExistingProvisions'] = "N.A."     
            form['BA_Risk_DLARedm_DiC_ExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_DLARedm_DiC_Investments'] = "N.A."     
            form['BA_Risk_DLARedm_Other'] = "N.A."     
            form['BA_Risk_DLARedm_OtherTotalNeed'] = "N.A."     
            form['BA_Risk_DLARedm_OtherExistingProvisions'] = "N.A."     
            form['BA_Risk_DLARedm_OtherExistingShortfallSurplus'] = "N.A."     
            form['BA_Risk_DLARedm_OtherInvestments'] = "N.A."      
            form['BA_Risk_LifeCoverFinancialSolutions'] = "N.A."     
            form['BA_Risk_DiC_FinancialSolutions'] = "N.A."    
            form['BA_Risk_AltS_1'] = "N.A."     
            form['BA_Risk_AltS_2'] = "N.A."     
            form['BA_Risk_AltS_3'] = "N.A."     
            form['BA_Risk_ProductProvider'] = "N.A."     
            form['BA_Risk_PolicyNumber'] = "N.A."     
            form['BA_Risk_ProductName'] = "N.A."     
            form['BA_Risk_ProductPremium'] = "N.A."     
            form['BA_Risk_ProductPremiumFrequency'] = "N.A."    
            form['BA_Risk_ProductPattern'] = "N.A."     
            form['BA_Risk_ProductEscalation'] = "N.A."     
            form['BA_Risk_ProductContractingParty'] = "N.A."     
            form['BA_Risk_ProductLivesAssured'] = "N.A."     
            form['BA_Risk_ProductPremiumPayer'] = "N.A."     
            form['BA_Risk_Product1stYearCommission'] = "N.A."     
            form['BA_Risk_Product2ndYearCommission'] = "N.A."     
            form['BA_Risk_BenDesc_1'] = "N.A." 
            form['BA_Risk_BenDesc_CoverAmount1'] = "N.A." 
            form['BA_Risk_BenDesc_2'] = "N.A." 
            form['BA_Risk_BenDesc_CoverAmount2'] = "N.A." 
            form['BA_Risk_BenDesc_3'] = "N.A." 
            form['BA_Risk_BenDesc_CoverAmount3'] = "N.A." 
            form['BA_Risk_BenDesc_4'] = "N.A." 
            form['BA_Risk_BenDesc_CoverAmount4'] = "N.A." 
            form['BA_Risk_BenDesc_5'] = "N.A." 
            form['BA_Risk_BenDesc_CoverAmount5'] = "N.A." 
            form['BA_Risk_BenDesc_6'] = "N.A." 
            form['BA_Risk_BenDesc_CoverAmount6'] = "N.A." 
            form['BA_Risk_BenDesc_7'] = "N.A." 
            form['BA_Risk_BenDesc_CoverAmount7'] = "N.A." 
            form['BA_Risk_ProductReasons'] = "N.A." 
            form['BA_Risk_ProductMaterialAspects'] = "N.A." 
            form['BA_Risk_ProductDetails'] = "N.A." 
            form['BA_Risk_ProductBriefSummary'] = "N.A." 
            form['BA_Risk_Cessionaries'] = "N.A." 
            form['BA_Risk_InformationExplained'] = "N.A." 
        
        BA_Investment_Data = AssuranceInvestment.objects.filter(formId=form['id']).values()
        if len(BA_Investment_Data) != 0:                
            BA_Investment_Data = AssuranceInvestment.objects.filter(formId=form['id']).values().first()
            if ((
                BA_Investment_Data['AI_Term'] == AssuranceInvestment._meta.get_field('AI_Term').default and      
                BA_Investment_Data['AI_TermDetails'] == AssuranceInvestment._meta.get_field('AI_TermDetails').default and     
                BA_Investment_Data['AI_PremiumType'] == AssuranceInvestment._meta.get_field('AI_PremiumType').default and   
                BA_Investment_Data['AI_PremiumTypeDetails'] == AssuranceInvestment._meta.get_field('AI_PremiumTypeDetails').default and         
                BA_Investment_Data['AI_Strategy'] == AssuranceInvestment._meta.get_field('AI_Strategy').default and    
                BA_Investment_Data['AI_StrategyDetails'] == AssuranceInvestment._meta.get_field('AI_StrategyDetails').default and      
                BA_Investment_Data['AI_ReturnRequired'] == AssuranceInvestment._meta.get_field('AI_ReturnRequired').default and    
                BA_Investment_Data['AI_ReturnRequiredDetails'] == AssuranceInvestment._meta.get_field('AI_ReturnRequiredDetails').default and      
                BA_Investment_Data['AI_RiskProfile'] == AssuranceInvestment._meta.get_field('AI_RiskProfile').default and      
                BA_Investment_Data['AI_RiskProfileDetails'] == AssuranceInvestment._meta.get_field('AI_RiskProfileDetails').default and        
                BA_Investment_Data['AI_TRP_TotalNeed'] == AssuranceInvestment._meta.get_field('AI_TRP_TotalNeed').default and      
                BA_Investment_Data['AI_TRP_ExistingProvisions'] == AssuranceInvestment._meta.get_field('AI_TRP_ExistingProvisions').default and      
                BA_Investment_Data['AI_TRP_ExistingShortfallSurplus'] == AssuranceInvestment._meta.get_field('AI_TRP_ExistingShortfallSurplus').default and      
                BA_Investment_Data['AI_TRP_ExistingInvestments'] == AssuranceInvestment._meta.get_field('AI_TRP_ExistingInvestments').default and      
                BA_Investment_Data['AI_RA_TotalNeed'] == AssuranceInvestment._meta.get_field('AI_RA_TotalNeed').default and      
                BA_Investment_Data['AI_RA_ExistingProvisions'] == AssuranceInvestment._meta.get_field('AI_RA_ExistingProvisions').default and      
                BA_Investment_Data['AI_RA_ExistingShortfallSurplus'] == AssuranceInvestment._meta.get_field('AI_RA_ExistingShortfallSurplus').default and      
                BA_Investment_Data['AI_RA_ExistingInvestments'] == AssuranceInvestment._meta.get_field('AI_RA_ExistingInvestments').default and      
                BA_Investment_Data['AI_CR_TotalNeed'] == AssuranceInvestment._meta.get_field('AI_CR_TotalNeed').default and      
                BA_Investment_Data['AI_CR_ExistingProvisions'] == AssuranceInvestment._meta.get_field('AI_CR_ExistingProvisions').default and      
                BA_Investment_Data['AI_CR_ExistingShortfallSurplus'] == AssuranceInvestment._meta.get_field('AI_CR_ExistingShortfallSurplus').default and      
                BA_Investment_Data['AI_CR_ExistingInvestments'] == AssuranceInvestment._meta.get_field('AI_CR_ExistingInvestments').default and      
                BA_Investment_Data['AI_Other'] == AssuranceInvestment._meta.get_field('AI_Other').default and      
                BA_Investment_Data['AI_Other_TotalNeed'] == AssuranceInvestment._meta.get_field('AI_Other_TotalNeed').default and      
                BA_Investment_Data['AI_Other_ExistingProvisions'] == AssuranceInvestment._meta.get_field('AI_Other_ExistingProvisions').default and      
                BA_Investment_Data['AI_Other_ExistingShortfallSurplus'] == AssuranceInvestment._meta.get_field('AI_Other_ExistingShortfallSurplus').default and      
                BA_Investment_Data['AI_Other_ExistingInvestments'] == AssuranceInvestment._meta.get_field('AI_Other_ExistingInvestments').default and      
                BA_Investment_Data['AI_FinancialSolutions'] == AssuranceInvestment._meta.get_field('AI_FinancialSolutions').default and      
                BA_Investment_Data['AI_AltS_1'] == AssuranceInvestment._meta.get_field('AI_AltS_1').default and      
                BA_Investment_Data['AI_AltS_2'] == AssuranceInvestment._meta.get_field('AI_AltS_2').default and      
                BA_Investment_Data['AI_AltS_3'] == AssuranceInvestment._meta.get_field('AI_AltS_3').default and      
                BA_Investment_Data['AI_Pr_Provider'] == AssuranceInvestment._meta.get_field('AI_Pr_Provider').default and      
                BA_Investment_Data['AI_Pr_PolicyNumber'] == AssuranceInvestment._meta.get_field('AI_Pr_PolicyNumber').default and      
                BA_Investment_Data['AI_Pr_Name'] == AssuranceInvestment._meta.get_field('AI_Pr_Name').default and      
                BA_Investment_Data['AI_Pr_Premium'] == AssuranceInvestment._meta.get_field('AI_Pr_Premium').default and      
                BA_Investment_Data['AI_Pr_PremiumFrequency'] == AssuranceInvestment._meta.get_field('AI_Pr_PremiumFrequency').default and   
                BA_Investment_Data['AI_Pr_Escalation'] == AssuranceInvestment._meta.get_field('AI_Pr_Escalation').default and      
                BA_Investment_Data['AI_Pr_EAC'] == AssuranceInvestment._meta.get_field('AI_Pr_EAC').default and      
                BA_Investment_Data['AI_Pr_ContractingParty'] == AssuranceInvestment._meta.get_field('AI_Pr_ContractingParty').default and      
                BA_Investment_Data['AI_Pr_LivesAssured'] == AssuranceInvestment._meta.get_field('AI_Pr_LivesAssured').default and      
                BA_Investment_Data['AI_Pr_PremiumPayer'] == AssuranceInvestment._meta.get_field('AI_Pr_PremiumPayer').default and      
                BA_Investment_Data['AI_Pr_Beneficiary'] == AssuranceInvestment._meta.get_field('AI_Pr_Beneficiary').default and      
                BA_Investment_Data['AI_Pr_IniC'] == AssuranceInvestment._meta.get_field('AI_Pr_IniC').default and      
                BA_Investment_Data['AI_Pr_IniC_Percentage'] == AssuranceInvestment._meta.get_field('AI_Pr_IniC_Percentage').default and      
                BA_Investment_Data['AI_Pr_OnC'] == AssuranceInvestment._meta.get_field('AI_Pr_OnC').default and      
                BA_Investment_Data['AI_Pr_OnC_Percentage'] == AssuranceInvestment._meta.get_field('AI_Pr_OnC_Percentage').default and  
                BA_Investment_Data['AI_Portfolio'] == AssuranceInvestment._meta.get_field('AI_Portfolio').default and   
                BA_Investment_Data['AI_PF_1'] == AssuranceInvestment._meta.get_field('AI_PF_1').default and  
                BA_Investment_Data['AI_PF_Percentage1'] == AssuranceInvestment._meta.get_field('AI_PF_Percentage1').default and  
                BA_Investment_Data['AI_PF_Provided1'] == AssuranceInvestment._meta.get_field('AI_PF_Provided1').default and  
                BA_Investment_Data['AI_PF_Discussed1'] == AssuranceInvestment._meta.get_field('AI_PF_Discussed1').default and  
                BA_Investment_Data['AI_PF_2'] == AssuranceInvestment._meta.get_field('AI_PF_2').default and  
                BA_Investment_Data['AI_PF_Percentage2'] == AssuranceInvestment._meta.get_field('AI_PF_Percentage2').default and  
                BA_Investment_Data['AI_PF_Provided2'] == AssuranceInvestment._meta.get_field('AI_PF_Provided2').default and  
                BA_Investment_Data['AI_PF_Discussed2'] == AssuranceInvestment._meta.get_field('AI_PF_Discussed2').default and  
                BA_Investment_Data['AI_PF_3'] == AssuranceInvestment._meta.get_field('AI_PF_3').default and  
                BA_Investment_Data['AI_PF_Percentage3'] == AssuranceInvestment._meta.get_field('AI_PF_Percentage3').default and  
                BA_Investment_Data['AI_PF_Provided3'] == AssuranceInvestment._meta.get_field('AI_PF_Provided3').default and  
                BA_Investment_Data['AI_PF_Discussed3'] == AssuranceInvestment._meta.get_field('AI_PF_Discussed3').default and  
                BA_Investment_Data['AI_PF_4'] == AssuranceInvestment._meta.get_field('AI_PF_4').default and  
                BA_Investment_Data['AI_PF_Percentage4'] == AssuranceInvestment._meta.get_field('AI_PF_Percentage4').default and  
                BA_Investment_Data['AI_PF_Provided4'] == AssuranceInvestment._meta.get_field('AI_PF_Provided4').default and  
                BA_Investment_Data['AI_PF_Discussed4'] == AssuranceInvestment._meta.get_field('AI_PF_Discussed4').default and  
                BA_Investment_Data['AI_PF_5'] == AssuranceInvestment._meta.get_field('AI_PF_5').default and  
                BA_Investment_Data['AI_PF_Percentage5'] == AssuranceInvestment._meta.get_field('AI_PF_Percentage5').default and  
                BA_Investment_Data['AI_PF_Provided5'] == AssuranceInvestment._meta.get_field('AI_PF_Provided5').default and  
                BA_Investment_Data['AI_PF_Discussed5'] == AssuranceInvestment._meta.get_field('AI_PF_Discussed5').default and  
                BA_Investment_Data['AI_PF_6'] == AssuranceInvestment._meta.get_field('AI_PF_6').default and  
                BA_Investment_Data['AI_PF_Percentage6'] == AssuranceInvestment._meta.get_field('AI_PF_Percentage6').default and  
                BA_Investment_Data['AI_PF_Provided6'] == AssuranceInvestment._meta.get_field('AI_PF_Provided6').default and  
                BA_Investment_Data['AI_PF_Discussed6'] == AssuranceInvestment._meta.get_field('AI_PF_Discussed6').default and  
                BA_Investment_Data['AI_PF_7'] == AssuranceInvestment._meta.get_field('AI_PF_7').default and  
                BA_Investment_Data['AI_PF_Percentage7'] == AssuranceInvestment._meta.get_field('AI_PF_Percentage7').default and  
                BA_Investment_Data['AI_PF_Provided7'] == AssuranceInvestment._meta.get_field('AI_PF_Provided7').default and  
                BA_Investment_Data['AI_PF_Discussed7'] == AssuranceInvestment._meta.get_field('AI_PF_Discussed7').default and  
                BA_Investment_Data['AI_PF_Reasons'] == AssuranceInvestment._meta.get_field('AI_PF_Reasons').default and  
                BA_Investment_Data['AI_PF_MaterialAspects'] == AssuranceInvestment._meta.get_field('AI_PF_MaterialAspects').default and  
                BA_Investment_Data['AI_PF_Pr_Details'] == AssuranceInvestment._meta.get_field('AI_PF_Pr_Details').default and  
                BA_Investment_Data['AI_PF_NominationOfBeneficiaries'] == AssuranceInvestment._meta.get_field('AI_PF_NominationOfBeneficiaries').default and  
                BA_Investment_Data['AI_SourceOfFunds'] == AssuranceInvestment._meta.get_field('AI_SourceOfFunds').default and  
                BA_Investment_Data['AI_SourceOfFundsDetail'] == AssuranceInvestment._meta.get_field('AI_SourceOfFundsDetail').default 
                )):
                    form['BA_Investment_Term'] = "N.A."      
                    form['BA_Investment_TermDetails'] = "N.A."     
                    form['BA_Investment_PremiumType'] = "N.A."   
                    form['BA_Investment_PremiumTypeDetails'] = "N.A."         
                    form['BA_Investment_Strategy'] = "N.A."    
                    form['BA_Investment_StrategyDetails'] = "N.A."      
                    form['BA_Investment_ReturnRequired'] = "N.A."    
                    form['BA_Investment_ReturnRequiredDetails'] = "N.A."      
                    form['BA_Investment_RiskProfile'] = "N.A."      
                    form['BA_Investment_RiskProfileDetails'] = "N.A."        
                    form['BA_Investment_TRP_TotalNeed'] = "N.A."      
                    form['BA_Investment_TRP_ExistingProvisions'] = "N.A."      
                    form['BA_Investment_TRP_ExistingShortfallSurplus'] = "N.A."      
                    form['BA_Investment_TRP_ExistingInvestments'] = "N.A."      
                    form['BA_Investment_RA_TotalNeed'] = "N.A."      
                    form['BA_Investment_RA_ExistingProvisions'] = "N.A."      
                    form['BA_Investment_RA_ExistingShortfallSurplus'] = "N.A."      
                    form['BA_Investment_RA_ExistingInvestments'] = "N.A."      
                    form['BA_Investment_CR_TotalNeed'] = "N.A."      
                    form['BA_Investment_CR_ExistingProvisions'] = "N.A."      
                    form['BA_Investment_CR_ExistingShortfallSurplus'] = "N.A."      
                    form['BA_Investment_CR_ExistingInvestments'] = "N.A."      
                    form['BA_Investment_Other'] = "N.A."      
                    form['BA_Investment_Other_TotalNeed'] = "N.A."      
                    form['BA_Investment_Other_ExistingProvisions'] = "N.A."      
                    form['BA_Investment_Other_ExistingShortfallSurplus'] = "N.A."      
                    form['BA_Investment_Other_ExistingInvestments'] = "N.A."      
                    form['BA_Investment_FinancialSolutions'] = "N.A."      
                    form['BA_Investment_AltS_1'] = "N.A."      
                    form['BA_Investment_AltS_2'] = "N.A."      
                    form['BA_Investment_AltS_3'] = "N.A."      
                    form['BA_Investment_Pr_Provider'] = "N.A."      
                    form['BA_Investment_Pr_PolicyNumber'] = "N.A."      
                    form['BA_Investment_Pr_Name'] = "N.A."      
                    form['BA_Investment_Pr_Premium'] = "N.A."      
                    form['BA_Investment_Pr_PremiumFrequency'] = "N.A."   
                    form['BA_Investment_Pr_Escalation'] = "N.A."      
                    form['BA_Investment_Pr_EAC'] = "N.A."      
                    form['BA_Investment_Pr_ContractingParty'] = "N.A."      
                    form['BA_Investment_Pr_LivesAssured'] = "N.A."      
                    form['BA_Investment_Pr_PremiumPayer'] = "N.A."      
                    form['BA_Investment_Pr_Beneficiary'] = "N.A."      
                    form['BA_Investment_Pr_IniC'] = "N.A."      
                    form['BA_Investment_Pr_IniC_Percentage'] = "N.A."      
                    form['BA_Investment_Pr_OnC'] = "N.A."      
                    form['BA_Investment_Pr_OnC_Percentage'] = "N.A."  
                    form['BA_Investment_Portfolio'] = "N.A."   
                    form['BA_Investment_PF_1'] = "N.A."  
                    form['BA_Investment_PF_Percentage1'] = "N.A."  
                    form['BA_Investment_PF_Provided1'] = "N.A."  
                    form['BA_Investment_PF_Discussed1'] = "N.A."  
                    form['BA_Investment_PF_2'] = "N.A."  
                    form['BA_Investment_PF_Percentage2'] = "N.A."  
                    form['BA_Investment_PF_Provided2'] = "N.A."  
                    form['BA_Investment_PF_Discussed2'] = "N.A."  
                    form['BA_Investment_PF_3'] = "N.A."  
                    form['BA_Investment_PF_Percentage3'] = "N.A."  
                    form['BA_Investment_PF_Provided3'] = "N.A."  
                    form['BA_Investment_PF_Discussed3'] = "N.A."  
                    form['BA_Investment_PF_4'] = "N.A."  
                    form['BA_Investment_PF_Percentage4'] = "N.A."  
                    form['BA_Investment_PF_Provided4'] = "N.A."  
                    form['BA_Investment_PF_Discussed4'] = "N.A."  
                    form['BA_Investment_PF_5'] = "N.A."  
                    form['BA_Investment_PF_Percentage5'] = "N.A."  
                    form['BA_Investment_PF_Provided5'] = "N.A."  
                    form['BA_Investment_PF_Discussed5'] = "N.A."  
                    form['BA_Investment_PF_6'] = "N.A."  
                    form['BA_Investment_PF_Percentage6'] = "N.A."  
                    form['BA_Investment_PF_Provided6'] = "N.A."  
                    form['BA_Investment_PF_Discussed6'] = "N.A."  
                    form['BA_Investment_PF_7'] = "N.A."  
                    form['BA_Investment_PF_Percentage7'] = "N.A."  
                    form['BA_Investment_PF_Provided7'] = "N.A."  
                    form['BA_Investment_PF_Discussed7'] = "N.A."  
                    form['BA_Investment_PF_Reasons'] = "N.A."  
                    form['BA_Investment_PF_MaterialAspects'] = "N.A."  
                    form['BA_Investment_PF_Pr_Details'] = "N.A."  
                    form['BA_Investment_PF_NominationOfBeneficiaries'] = "N.A."  
                    form['BA_Investment_SourceOfFunds'] = "N.A."  
                    form['BA_Investment_SourceOfFundsDetail'] = "N.A."    
            else:      
                InvestmentStrategy = ["" ,"Capital Growth" , "Capital Preservtion", "Income", "Specified Goal Investment"]    
                ReturnRequired = ["" ,"Guaranteed Return", "Marketed Linked Return", "Targeted Return", "Benchmark"]      
                RiskProfile = ["" , "Ultra Conservative", "Conservative", "Cautious", "Moderate"] 
                SourceOfFunds = ["", "Salary", "Savings", "Inheritence", "Resignation", "Retirement", "Other", ]
                form['BA_Investment_Term'] = BA_Investment_Data['AI_Term']      
                form['BA_Investment_TermDetails'] = BA_Investment_Data['AI_TermDetails']     
                form['BA_Investment_PremiumType'] = "Lump Sum" if int(BA_Investment_Data['AI_PremiumType']) == 1 else "Recurring"
                form['BA_Investment_PremiumTypeDetails'] = BA_Investment_Data['AI_PremiumTypeDetails']         
                form['BA_Investment_Strategy'] = InvestmentStrategy[int(BA_Investment_Data['AI_Strategy'])]   
                form['BA_Investment_StrategyDetails'] = BA_Investment_Data['AI_StrategyDetails']      
                form['BA_Investment_ReturnRequired'] = ReturnRequired[int(BA_Investment_Data['AI_ReturnRequired'])]   
                form['BA_Investment_ReturnRequiredDetails'] = BA_Investment_Data['AI_ReturnRequiredDetails']      
                form['BA_Investment_RiskProfile'] = RiskProfile[int(BA_Investment_Data['AI_RiskProfile'])]      
                form['BA_Investment_RiskProfileDetails'] = BA_Investment_Data['AI_RiskProfileDetails']        
                form['BA_Investment_TRP_TotalNeed'] = BA_Investment_Data['AI_TRP_TotalNeed']      
                form['BA_Investment_TRP_ExistingProvisions'] = BA_Investment_Data['AI_TRP_ExistingProvisions']      
                form['BA_Investment_TRP_ExistingShortfallSurplus'] = BA_Investment_Data['AI_TRP_ExistingShortfallSurplus']      
                form['BA_Investment_TRP_ExistingInvestments'] = BA_Investment_Data['AI_TRP_ExistingInvestments']      
                form['BA_Investment_RA_TotalNeed'] = BA_Investment_Data['AI_RA_TotalNeed']      
                form['BA_Investment_RA_ExistingProvisions'] = BA_Investment_Data['AI_RA_ExistingProvisions']      
                form['BA_Investment_RA_ExistingShortfallSurplus'] = BA_Investment_Data['AI_RA_ExistingShortfallSurplus']      
                form['BA_Investment_RA_ExistingInvestments'] = BA_Investment_Data['AI_RA_ExistingInvestments']      
                form['BA_Investment_CR_TotalNeed'] = BA_Investment_Data['AI_CR_TotalNeed']      
                form['BA_Investment_CR_ExistingProvisions'] = BA_Investment_Data['AI_CR_ExistingProvisions']      
                form['BA_Investment_CR_ExistingShortfallSurplus'] = BA_Investment_Data['AI_CR_ExistingShortfallSurplus']      
                form['BA_Investment_CR_ExistingInvestments'] = BA_Investment_Data['AI_CR_ExistingInvestments']      
                form['BA_Investment_Other'] = BA_Investment_Data['AI_Other']      
                form['BA_Investment_Other_TotalNeed'] = BA_Investment_Data['AI_Other_TotalNeed']      
                form['BA_Investment_Other_ExistingProvisions'] = BA_Investment_Data['AI_Other_ExistingProvisions']      
                form['BA_Investment_Other_ExistingShortfallSurplus'] = BA_Investment_Data['AI_Other_ExistingShortfallSurplus']      
                form['BA_Investment_Other_ExistingInvestments'] = BA_Investment_Data['AI_Other_ExistingInvestments']      
                form['BA_Investment_FinancialSolutions'] = BA_Investment_Data['AI_FinancialSolutions']      
                form['BA_Investment_AltS_1'] = BA_Investment_Data['AI_AltS_1']      
                form['BA_Investment_AltS_2'] = BA_Investment_Data['AI_AltS_2']      
                form['BA_Investment_AltS_3'] = BA_Investment_Data['AI_AltS_3']      
                form['BA_Investment_Pr_Provider'] = BA_Investment_Data['AI_Pr_Provider']      
                form['BA_Investment_Pr_PolicyNumber'] = BA_Investment_Data['AI_Pr_PolicyNumber']      
                form['BA_Investment_Pr_Name'] = BA_Investment_Data['AI_Pr_Name']      
                form['BA_Investment_Pr_Premium'] = BA_Investment_Data['AI_Pr_Premium']      
                form['BA_Investment_Pr_PremiumFrequency'] = Frequency[int(BA_Investment_Data['AI_Pr_PremiumFrequency'])]   
                form['BA_Investment_Pr_Escalation'] = BA_Investment_Data['AI_Pr_Escalation']      
                form['BA_Investment_Pr_EAC'] = BA_Investment_Data['AI_Pr_EAC']      
                form['BA_Investment_Pr_ContractingParty'] = BA_Investment_Data['AI_Pr_ContractingParty']      
                form['BA_Investment_Pr_LivesAssured'] = BA_Investment_Data['AI_Pr_LivesAssured']      
                form['BA_Investment_Pr_PremiumPayer'] = BA_Investment_Data['AI_Pr_PremiumPayer']      
                form['BA_Investment_Pr_Beneficiary'] = BA_Investment_Data['AI_Pr_Beneficiary']      
                form['BA_Investment_Pr_IniC'] = BA_Investment_Data['AI_Pr_IniC']      
                form['BA_Investment_Pr_IniC_Percentage'] = BA_Investment_Data['AI_Pr_IniC_Percentage']      
                form['BA_Investment_Pr_OnC'] = BA_Investment_Data['AI_Pr_OnC']      
                form['BA_Investment_Pr_OnC_Percentage'] = BA_Investment_Data['AI_Pr_OnC_Percentage']  
                form['BA_Investment_Portfolio'] = BA_Investment_Data['AI_Portfolio']   
                form['BA_Investment_PF_1'] = BA_Investment_Data['AI_PF_1']  
                form['BA_Investment_PF_Percentage1'] = BA_Investment_Data['AI_PF_Percentage1']  
                form['BA_Investment_PF_Provided1'] = "Yes" if BA_Investment_Data['AI_PF_Provided1'] else "No"  
                form['BA_Investment_PF_Discussed1'] = "Yes" if BA_Investment_Data['AI_PF_Discussed1'] else "No"  
                form['BA_Investment_PF_2'] = BA_Investment_Data['AI_PF_2']  
                form['BA_Investment_PF_Percentage2'] = BA_Investment_Data['AI_PF_Percentage2']  
                form['BA_Investment_PF_Provided2'] = "Yes" if BA_Investment_Data['AI_PF_Provided2'] else "No"  
                form['BA_Investment_PF_Discussed2'] = "Yes" if BA_Investment_Data['AI_PF_Discussed2'] else "No"
                form['BA_Investment_PF_3'] = BA_Investment_Data['AI_PF_3']  
                form['BA_Investment_PF_Percentage3'] = BA_Investment_Data['AI_PF_Percentage3']  
                form['BA_Investment_PF_Provided3'] = "Yes" if BA_Investment_Data['AI_PF_Provided3'] else "No"  
                form['BA_Investment_PF_Discussed3'] = "Yes" if BA_Investment_Data['AI_PF_Discussed3'] else "No"
                form['BA_Investment_PF_4'] = BA_Investment_Data['AI_PF_4']  
                form['BA_Investment_PF_Percentage4'] = BA_Investment_Data['AI_PF_Percentage4']  
                form['BA_Investment_PF_Provided4'] = "Yes" if BA_Investment_Data['AI_PF_Provided1'] else "No"  
                form['BA_Investment_PF_Discussed4'] = "Yes" if BA_Investment_Data['AI_PF_Discussed4'] else "No"
                form['BA_Investment_PF_5'] = BA_Investment_Data['AI_PF_5']  
                form['BA_Investment_PF_Percentage5'] = BA_Investment_Data['AI_PF_Percentage5']  
                form['BA_Investment_PF_Provided5'] = "Yes" if BA_Investment_Data['AI_PF_Provided5'] else "No"  
                form['BA_Investment_PF_Discussed5'] = "Yes" if BA_Investment_Data['AI_PF_Discussed5'] else "No"
                form['BA_Investment_PF_6'] = BA_Investment_Data['AI_PF_6']  
                form['BA_Investment_PF_Percentage6'] = BA_Investment_Data['AI_PF_Percentage6']  
                form['BA_Investment_PF_Provided6'] = "Yes" if BA_Investment_Data['AI_PF_Provided6'] else "No"  
                form['BA_Investment_PF_Discussed6'] = "Yes" if BA_Investment_Data['AI_PF_Discussed6'] else "No"
                form['BA_Investment_PF_7'] = BA_Investment_Data['AI_PF_7']  
                form['BA_Investment_PF_Percentage7'] = BA_Investment_Data['AI_PF_Percentage7']  
                form['BA_Investment_PF_Provided7'] = "Yes" if BA_Investment_Data['AI_PF_Provided7'] else "No"  
                form['BA_Investment_PF_Discussed7'] = "Yes" if BA_Investment_Data['AI_PF_Discussed7'] else "No"
                form['BA_Investment_PF_Reasons'] = BA_Investment_Data['AI_PF_Reasons']  
                form['BA_Investment_PF_MaterialAspects'] = BA_Investment_Data['AI_PF_MaterialAspects']  
                form['BA_Investment_PF_Pr_Details'] = BA_Investment_Data['AI_PF_Pr_Details']  
                form['BA_Investment_PF_NominationOfBeneficiaries'] = BA_Investment_Data['AI_PF_NominationOfBeneficiaries']  
                form['BA_Investment_SourceOfFunds'] = SourceOfFunds[int(BA_Investment_Data['AI_SourceOfFunds'])] if BA_Investment_Data['AI_SourceOfFunds'] != "" else ""
                form['BA_Investment_SourceOfFundsDetail'] = BA_Investment_Data['AI_SourceOfFundsDetail']   
        else:
            form['BA_Investment_Term'] = "N.A."      
            form['BA_Investment_TermDetails'] = "N.A."     
            form['BA_Investment_PremiumType'] = "N.A."   
            form['BA_Investment_PremiumTypeDetails'] = "N.A."         
            form['BA_Investment_Strategy'] = "N.A."    
            form['BA_Investment_StrategyDetails'] = "N.A."      
            form['BA_Investment_ReturnRequired'] = "N.A."    
            form['BA_Investment_ReturnRequiredDetails'] = "N.A."      
            form['BA_Investment_RiskProfile'] = "N.A."      
            form['BA_Investment_RiskProfileDetails'] = "N.A."        
            form['BA_Investment_TRP_TotalNeed'] = "N.A."      
            form['BA_Investment_TRP_ExistingProvisions'] = "N.A."      
            form['BA_Investment_TRP_ExistingShortfallSurplus'] = "N.A."      
            form['BA_Investment_TRP_ExistingInvestments'] = "N.A."      
            form['BA_Investment_RA_TotalNeed'] = "N.A."      
            form['BA_Investment_RA_ExistingProvisions'] = "N.A."      
            form['BA_Investment_RA_ExistingShortfallSurplus'] = "N.A."      
            form['BA_Investment_RA_ExistingInvestments'] = "N.A."      
            form['BA_Investment_CR_TotalNeed'] = "N.A."      
            form['BA_Investment_CR_ExistingProvisions'] = "N.A."      
            form['BA_Investment_CR_ExistingShortfallSurplus'] = "N.A."      
            form['BA_Investment_CR_ExistingInvestments'] = "N.A."      
            form['BA_Investment_Other'] = "N.A."      
            form['BA_Investment_Other_TotalNeed'] = "N.A."      
            form['BA_Investment_Other_ExistingProvisions'] = "N.A."      
            form['BA_Investment_Other_ExistingShortfallSurplus'] = "N.A."      
            form['BA_Investment_Other_ExistingInvestments'] = "N.A."      
            form['BA_Investment_FinancialSolutions'] = "N.A."      
            form['BA_Investment_AltS_1'] = "N.A."      
            form['BA_Investment_AltS_2'] = "N.A."      
            form['BA_Investment_AltS_3'] = "N.A."      
            form['BA_Investment_Pr_Provider'] = "N.A."      
            form['BA_Investment_Pr_PolicyNumber'] = "N.A."      
            form['BA_Investment_Pr_Name'] = "N.A."      
            form['BA_Investment_Pr_Premium'] = "N.A."      
            form['BA_Investment_Pr_PremiumFrequency'] = "N.A."   
            form['BA_Investment_Pr_Escalation'] = "N.A."      
            form['BA_Investment_Pr_EAC'] = "N.A."      
            form['BA_Investment_Pr_ContractingParty'] = "N.A."      
            form['BA_Investment_Pr_LivesAssured'] = "N.A."      
            form['BA_Investment_Pr_PremiumPayer'] = "N.A."      
            form['BA_Investment_Pr_Beneficiary'] = "N.A."      
            form['BA_Investment_Pr_IniC'] = "N.A."      
            form['BA_Investment_Pr_IniC_Percentage'] = "N.A."      
            form['BA_Investment_Pr_OnC'] = "N.A."      
            form['BA_Investment_Pr_OnC_Percentage'] = "N.A."  
            form['BA_Investment_Portfolio'] = "N.A."   
            form['BA_Investment_PF_1'] = "N.A."  
            form['BA_Investment_PF_Percentage1'] = "N.A."  
            form['BA_Investment_PF_Provided1'] = "N.A."  
            form['BA_Investment_PF_Discussed1'] = "N.A."  
            form['BA_Investment_PF_2'] = "N.A."  
            form['BA_Investment_PF_Percentage2'] = "N.A."  
            form['BA_Investment_PF_Provided2'] = "N.A."  
            form['BA_Investment_PF_Discussed2'] = "N.A."  
            form['BA_Investment_PF_3'] = "N.A."  
            form['BA_Investment_PF_Percentage3'] = "N.A."  
            form['BA_Investment_PF_Provided3'] = "N.A."  
            form['BA_Investment_PF_Discussed3'] = "N.A."  
            form['BA_Investment_PF_4'] = "N.A."  
            form['BA_Investment_PF_Percentage4'] = "N.A."  
            form['BA_Investment_PF_Provided4'] = "N.A."  
            form['BA_Investment_PF_Discussed4'] = "N.A."  
            form['BA_Investment_PF_5'] = "N.A."  
            form['BA_Investment_PF_Percentage5'] = "N.A."  
            form['BA_Investment_PF_Provided5'] = "N.A."  
            form['BA_Investment_PF_Discussed5'] = "N.A."  
            form['BA_Investment_PF_6'] = "N.A."  
            form['BA_Investment_PF_Percentage6'] = "N.A."  
            form['BA_Investment_PF_Provided6'] = "N.A."  
            form['BA_Investment_PF_Discussed6'] = "N.A."  
            form['BA_Investment_PF_7'] = "N.A."  
            form['BA_Investment_PF_Percentage7'] = "N.A."  
            form['BA_Investment_PF_Provided7'] = "N.A."  
            form['BA_Investment_PF_Discussed7'] = "N.A."  
            form['BA_Investment_PF_Reasons'] = "N.A."  
            form['BA_Investment_PF_MaterialAspects'] = "N.A."  
            form['BA_Investment_PF_Pr_Details'] = "N.A."  
            form['BA_Investment_PF_NominationOfBeneficiaries'] = "N.A."  
            form['BA_Investment_SourceOfFunds'] = "N.A."  
            form['BA_Investment_SourceOfFundsDetail'] = "N.A."  
        
        Employee_Benefit_Data = EmployeeBenefits.objects.filter(formId=form['id']).values()
        if len(Employee_Benefit_Data) != 0:                
            Employee_Benefit_Data = EmployeeBenefits.objects.filter(formId=form['id']).values().first()
            if ((
                    Employee_Benefit_Data['EB_ClientName'] == EmployeeBenefits._meta.get_field('EB_ClientName').default and 
                    Employee_Benefit_Data['EB_ClientIdNumber'] == EmployeeBenefits._meta.get_field('EB_ClientIdNumber').default and 
                    Employee_Benefit_Data['EB_ClientAddress'] == EmployeeBenefits._meta.get_field('EB_ClientAddress').default and 
                    Employee_Benefit_Data['EB_ClientPhoneNumber'] == EmployeeBenefits._meta.get_field('EB_ClientPhoneNumber').default and 
                    Employee_Benefit_Data['EB_ClientCellNumber'] == EmployeeBenefits._meta.get_field('EB_ClientCellNumber').default and 
                    Employee_Benefit_Data['EB_ClientEmail'] == EmployeeBenefits._meta.get_field('EB_ClientEmail').default and 
                    Employee_Benefit_Data['EB_ClientDate'] == EmployeeBenefits._meta.get_field('EB_ClientDate').default and 
                    Employee_Benefit_Data['EB_ClientFinancialAdvisor'] == EmployeeBenefits._meta.get_field('EB_ClientFinancialAdvisor').default and 
                    Employee_Benefit_Data['EB_ClientFeeDetails'] == EmployeeBenefits._meta.get_field('EB_ClientFeeDetails').default and 
                    Employee_Benefit_Data['EB_BusinessName'] == EmployeeBenefits._meta.get_field('EB_BusinessName').default and 
                    Employee_Benefit_Data['EB_BusinessAddress'] == EmployeeBenefits._meta.get_field('EB_BusinessAddress').default and 
                    Employee_Benefit_Data['EB_BusinessContactPerson'] == EmployeeBenefits._meta.get_field('EB_BusinessContactPerson').default and 
                    Employee_Benefit_Data['EB_BusinessPhoneNumber'] == EmployeeBenefits._meta.get_field('EB_BusinessPhoneNumber').default and 
                    Employee_Benefit_Data['EB_BusinessCellNumber'] == EmployeeBenefits._meta.get_field('EB_BusinessCellNumber').default and 
                    Employee_Benefit_Data['EB_BusinessEmail'] == EmployeeBenefits._meta.get_field('EB_BusinessEmail').default and 
                    Employee_Benefit_Data['EB_BusinessNature'] == EmployeeBenefits._meta.get_field('EB_BusinessNature').default and 
                    Employee_Benefit_Data['EB_BusinessUnion'] == EmployeeBenefits._meta.get_field('EB_BusinessUnion').default and 
                    Employee_Benefit_Data['EB_BusinessDetails'] == EmployeeBenefits._meta.get_field('EB_BusinessDetails').default and 
                    Employee_Benefit_Data['EB_BusinessNumberOfEmployees'] == EmployeeBenefits._meta.get_field('EB_BusinessNumberOfEmployees').default and 
                    Employee_Benefit_Data['EB_BusinessNumberOfEligibleEmployees'] == EmployeeBenefits._meta.get_field('EB_BusinessNumberOfEligibleEmployees').default and 
                    Employee_Benefit_Data['EB_BusinessNumberOfExcludedCategories'] == EmployeeBenefits._meta.get_field('EB_BusinessNumberOfExcludedCategories').default and 
                    Employee_Benefit_Data['EB_BusEx_FundsName'] == EmployeeBenefits._meta.get_field('EB_BusEx_FundsName').default and 
                    Employee_Benefit_Data['EB_BusEx_FundsAdmin'] == EmployeeBenefits._meta.get_field('EB_BusEx_FundsAdmin').default and 
                    Employee_Benefit_Data['EB_BusEx_FundsCurrentValue'] == EmployeeBenefits._meta.get_field('EB_BusEx_FundsCurrentValue').default and 
                    Employee_Benefit_Data['EB_BusEx_FundsActiveMembers'] == EmployeeBenefits._meta.get_field('EB_BusEx_FundsActiveMembers').default and 
                    Employee_Benefit_Data['EB_BusEx_FundsFullyPaidMembers'] == EmployeeBenefits._meta.get_field('EB_BusEx_FundsFullyPaidMembers').default and 
                    Employee_Benefit_Data['EB_BusEx_FundsFullyReasonForChange'] == EmployeeBenefits._meta.get_field('EB_BusEx_FundsFullyReasonForChange').default and 
                    Employee_Benefit_Data['EB_BusB_CoverType'] == EmployeeBenefits._meta.get_field('EB_BusB_CoverType').default and 
                    Employee_Benefit_Data['EB_BusB_Cover'] == EmployeeBenefits._meta.get_field('EB_BusB_Cover').default and 
                    Employee_Benefit_Data['EB_BusB_CoverDetails'] == EmployeeBenefits._meta.get_field('EB_BusB_CoverDetails').default and 
                    Employee_Benefit_Data['EB_BusEmp_Retire_In5Years'] == EmployeeBenefits._meta.get_field('EB_BusEmp_Retire_In5Years').default and 
                    Employee_Benefit_Data['EB_BusEmp_Retire_In5YearsPercentage'] == EmployeeBenefits._meta.get_field('EB_BusEmp_Retire_In5YearsPercentage').default and 
                    Employee_Benefit_Data['EB_BusEmp_Fin_Illiterate'] == EmployeeBenefits._meta.get_field('EB_BusEmp_Fin_Illiterate').default and 
                    Employee_Benefit_Data['EB_BusEmp_Fin_IlliteratePercentage'] == EmployeeBenefits._meta.get_field('EB_BusEmp_Fin_IlliteratePercentage').default and 
                    Employee_Benefit_Data['EB_BusEmp_Fin_Sophisticated'] == EmployeeBenefits._meta.get_field('EB_BusEmp_Fin_Sophisticated').default and 
                    Employee_Benefit_Data['EB_BusEmp_Fin_SophisticatedPercentage'] == EmployeeBenefits._meta.get_field('EB_BusEmp_Fin_SophisticatedPercentage').default and 
                    Employee_Benefit_Data['EB_BusHS_TurnOver'] == EmployeeBenefits._meta.get_field('EB_BusHS_TurnOver').default and 
                    Employee_Benefit_Data['EB_BusHS_TurnOverPercentage'] == EmployeeBenefits._meta.get_field('EB_BusHS_TurnOverPercentage').default and 
                    Employee_Benefit_Data['EB_BusI_Choice'] == EmployeeBenefits._meta.get_field('EB_BusI_Choice').default and 
                    Employee_Benefit_Data['EB_BusI_ChoicePercentage'] == EmployeeBenefits._meta.get_field('EB_BusI_ChoicePercentage').default and 
                    Employee_Benefit_Data['EB_BusinessItP'] == EmployeeBenefits._meta.get_field('EB_BusinessItP').default and 
                    Employee_Benefit_Data['EB_BusinessItP_Percentage'] == EmployeeBenefits._meta.get_field('EB_BusinessItP_Percentage').default and     
                    Employee_Benefit_Data['EB_BusEmp_AdditionalComments'] == EmployeeBenefits._meta.get_field('EB_BusEmp_AdditionalComments').default and 
                    Employee_Benefit_Data['EB_BusRB_Category1'] == EmployeeBenefits._meta.get_field('EB_BusRB_Category1').default and 
                    Employee_Benefit_Data['EB_BusRB_Category2'] == EmployeeBenefits._meta.get_field('EB_BusRB_Category2').default and 
                    Employee_Benefit_Data['EB_BusRB_Category3'] == EmployeeBenefits._meta.get_field('EB_BusRB_Category3').default and 
                    Employee_Benefit_Data['EB_BusRB_Category4'] == EmployeeBenefits._meta.get_field('EB_BusRB_Category4').default and 
                    Employee_Benefit_Data['EB_BusRB_MemContrib_Category1'] == EmployeeBenefits._meta.get_field('EB_BusRB_MemContrib_Category1').default and 
                    Employee_Benefit_Data['EB_BusRB_MemContrib_Category2'] == EmployeeBenefits._meta.get_field('EB_BusRB_MemContrib_Category2').default and 
                    Employee_Benefit_Data['EB_BusRB_MemContrib_Category3'] == EmployeeBenefits._meta.get_field('EB_BusRB_MemContrib_Category3').default and 
                    Employee_Benefit_Data['EB_BusRB_MemContrib_Category4'] == EmployeeBenefits._meta.get_field('EB_BusRB_MemContrib_Category4').default and 
                    Employee_Benefit_Data['EB_BusRB_EmpContrib_Category1'] == EmployeeBenefits._meta.get_field('EB_BusRB_EmpContrib_Category1').default and 
                    Employee_Benefit_Data['EB_BusRB_EmpContrib_Category2'] == EmployeeBenefits._meta.get_field('EB_BusRB_EmpContrib_Category2').default and 
                    Employee_Benefit_Data['EB_BusRB_EmpContrib_Category3'] == EmployeeBenefits._meta.get_field('EB_BusRB_EmpContrib_Category3').default and 
                    Employee_Benefit_Data['EB_BusRB_EmpContrib_Category4'] == EmployeeBenefits._meta.get_field('EB_BusRB_EmpContrib_Category4').default and 
                    Employee_Benefit_Data['EB_BusRB_NormRetire_AgeCategory1'] == EmployeeBenefits._meta.get_field('EB_BusRB_NormRetire_AgeCategory1').default and 
                    Employee_Benefit_Data['EB_BusRB_NormRetire_AgeCategory2'] == EmployeeBenefits._meta.get_field('EB_BusRB_NormRetire_AgeCategory2').default and 
                    Employee_Benefit_Data['EB_BusRB_NormRetire_AgeCategory3'] == EmployeeBenefits._meta.get_field('EB_BusRB_NormRetire_AgeCategory3').default and 
                    Employee_Benefit_Data['EB_BusRB_NormRetire_AgeCategory4'] == EmployeeBenefits._meta.get_field('EB_BusRB_NormRetire_AgeCategory4').default and 
                    Employee_Benefit_Data['EB_BusRB_FlexibleGroupLife'] == EmployeeBenefits._meta.get_field('EB_BusRB_FlexibleGroupLife').default and 
                    Employee_Benefit_Data['EB_BusRB_Approved'] == EmployeeBenefits._meta.get_field('EB_BusRB_Approved').default and 
                    Employee_Benefit_Data['EB_BusRB_ApprovedCategory1'] == EmployeeBenefits._meta.get_field('EB_BusRB_ApprovedCategory1').default and 
                    Employee_Benefit_Data['EB_BusRB_ApprovedCategory2'] == EmployeeBenefits._meta.get_field('EB_BusRB_ApprovedCategory2').default and 
                    Employee_Benefit_Data['EB_BusRB_ApprovedCategory3'] == EmployeeBenefits._meta.get_field('EB_BusRB_ApprovedCategory3').default and 
                    Employee_Benefit_Data['EB_BusRB_ApprovedCategory4'] == EmployeeBenefits._meta.get_field('EB_BusRB_ApprovedCategory4').default and 
                    Employee_Benefit_Data['EB_BusRB_UnApproved'] == EmployeeBenefits._meta.get_field('EB_BusRB_UnApproved').default and 
                    Employee_Benefit_Data['EB_BusRB_UnApprovedCategory1'] == EmployeeBenefits._meta.get_field('EB_BusRB_UnApprovedCategory1').default and 
                    Employee_Benefit_Data['EB_BusRB_UnApprovedCategory2'] == EmployeeBenefits._meta.get_field('EB_BusRB_UnApprovedCategory2').default and 
                    Employee_Benefit_Data['EB_BusRB_UnApprovedCategory3'] == EmployeeBenefits._meta.get_field('EB_BusRB_UnApprovedCategory3').default and 
                    Employee_Benefit_Data['EB_BusRB_UnApprovedCategory4'] == EmployeeBenefits._meta.get_field('EB_BusRB_UnApprovedCategory4').default and 
                    Employee_Benefit_Data['EB_BusinessRiskFundTakeOver'] == EmployeeBenefits._meta.get_field('EB_BusinessRiskFundTakeOver').default and 
                    Employee_Benefit_Data['EB_BusRB_SpouseLC_Category1'] == EmployeeBenefits._meta.get_field('EB_BusRB_SpouseLC_Category1').default and 
                    Employee_Benefit_Data['EB_BusRB_SpouseLC_Category2'] == EmployeeBenefits._meta.get_field('EB_BusRB_SpouseLC_Category2').default and 
                    Employee_Benefit_Data['EB_BusRB_SpouseLC_Category3'] == EmployeeBenefits._meta.get_field('EB_BusRB_SpouseLC_Category3').default and 
                    Employee_Benefit_Data['EB_BusRB_SpouseLC_Category4'] == EmployeeBenefits._meta.get_field('EB_BusRB_SpouseLC_Category4').default and 
                    Employee_Benefit_Data['EB_BusRB_SpouseLC_Notes'] == EmployeeBenefits._meta.get_field('EB_BusRB_SpouseLC_Notes').default and 
                    Employee_Benefit_Data['EB_BusRB_TrauBenSa_Category1'] == EmployeeBenefits._meta.get_field('EB_BusRB_TrauBenSa_Category1').default and 
                    Employee_Benefit_Data['EB_BusRB_TrauBenSa_Category2'] == EmployeeBenefits._meta.get_field('EB_BusRB_TrauBenSa_Category2').default and 
                    Employee_Benefit_Data['EB_BusRB_TrauBenSa_Category3'] == EmployeeBenefits._meta.get_field('EB_BusRB_TrauBenSa_Category3').default and 
                    Employee_Benefit_Data['EB_BusRB_TrauBenSa_Category4'] == EmployeeBenefits._meta.get_field('EB_BusRB_TrauBenSa_Category4').default and 
                    Employee_Benefit_Data['EB_BusRB_FB_CoverCategory1'] == EmployeeBenefits._meta.get_field('EB_BusRB_FB_CoverCategory1').default and 
                    Employee_Benefit_Data['EB_BusRB_FB_CoverCategory2'] == EmployeeBenefits._meta.get_field('EB_BusRB_FB_CoverCategory2').default and 
                    Employee_Benefit_Data['EB_BusRB_FB_CoverCategory3'] == EmployeeBenefits._meta.get_field('EB_BusRB_FB_CoverCategory3').default and 
                    Employee_Benefit_Data['EB_BusRB_FB_CoverCategory4'] == EmployeeBenefits._meta.get_field('EB_BusRB_FB_CoverCategory4').default and     
                    Employee_Benefit_Data['EB_BusRB_CapDisBen_Approved'] == EmployeeBenefits._meta.get_field('EB_BusRB_CapDisBen_Approved').default and 
                    Employee_Benefit_Data['EB_BusRB_CapDisBen_ApprovedCategory1'] == EmployeeBenefits._meta.get_field('EB_BusRB_CapDisBen_ApprovedCategory1').default and 
                    Employee_Benefit_Data['EB_BusRB_CapDisBen_ApprovedCategory2'] == EmployeeBenefits._meta.get_field('EB_BusRB_CapDisBen_ApprovedCategory2').default and 
                    Employee_Benefit_Data['EB_BusRB_CapDisBen_ApprovedCategory3'] == EmployeeBenefits._meta.get_field('EB_BusRB_CapDisBen_ApprovedCategory3').default and 
                    Employee_Benefit_Data['EB_BusRB_CapDisBen_ApprovedCategory4'] == EmployeeBenefits._meta.get_field('EB_BusRB_CapDisBen_ApprovedCategory4').default and 
                    Employee_Benefit_Data['EB_BusRB_CapDisBen_UnApproved'] == EmployeeBenefits._meta.get_field('EB_BusRB_CapDisBen_UnApproved').default and 
                    Employee_Benefit_Data['EB_BusRB_CapDisBen_UnApprovedCategory1'] == EmployeeBenefits._meta.get_field('EB_BusRB_CapDisBen_UnApprovedCategory1').default and 
                    Employee_Benefit_Data['EB_BusRB_CapDisBen_UnApprovedCategory2'] == EmployeeBenefits._meta.get_field('EB_BusRB_CapDisBen_UnApprovedCategory2').default and 
                    Employee_Benefit_Data['EB_BusRB_CapDisBen_UnApprovedCategory3'] == EmployeeBenefits._meta.get_field('EB_BusRB_CapDisBen_UnApprovedCategory3').default and 
                    Employee_Benefit_Data['EB_BusRB_CapDisBen_UnApprovedCategory4'] == EmployeeBenefits._meta.get_field('EB_BusRB_CapDisBen_UnApprovedCategory4').default and     
                    Employee_Benefit_Data['EB_BusRB_DiIBenWaitPer_Category1'] == EmployeeBenefits._meta.get_field('EB_BusRB_DiIBenWaitPer_Category1').default and 
                    Employee_Benefit_Data['EB_BusRB_DiIBenWaitPer_Category2'] == EmployeeBenefits._meta.get_field('EB_BusRB_DiIBenWaitPer_Category2').default and 
                    Employee_Benefit_Data['EB_BusRB_DiIBenWaitPer_Category3'] == EmployeeBenefits._meta.get_field('EB_BusRB_DiIBenWaitPer_Category3').default and 
                    Employee_Benefit_Data['EB_BusRB_DiIBenWaitPer_Category4'] == EmployeeBenefits._meta.get_field('EB_BusRB_DiIBenWaitPer_Category4').default and 
                    Employee_Benefit_Data['EB_BusRB_ConvOp'] == EmployeeBenefits._meta.get_field('EB_BusRB_ConvOp').default and 
                    Employee_Benefit_Data['EB_BusRB_GrowthRates'] == EmployeeBenefits._meta.get_field('EB_BusRB_GrowthRates').default and 
                    Employee_Benefit_Data['EB_BusRB_DisabilityBenefitsNotes'] == EmployeeBenefits._meta.get_field('EB_BusRB_DisabilityBenefitsNotes').default and     
                    Employee_Benefit_Data['EB_BusRB_AccidentBenefit'] == EmployeeBenefits._meta.get_field('EB_BusRB_AccidentBenefit').default and 
                    Employee_Benefit_Data['EB_BusRB_AccidentBenefitCategory1'] == EmployeeBenefits._meta.get_field('EB_BusRB_AccidentBenefitCategory1').default and 
                    Employee_Benefit_Data['EB_BusRB_AccidentBenefitCategory2'] == EmployeeBenefits._meta.get_field('EB_BusRB_AccidentBenefitCategory2').default and 
                    Employee_Benefit_Data['EB_BusRB_AccidentBenefitCategory3'] == EmployeeBenefits._meta.get_field('EB_BusRB_AccidentBenefitCategory3').default and 
                    Employee_Benefit_Data['EB_BusRB_AccidentBenefitCategory4'] == EmployeeBenefits._meta.get_field('EB_BusRB_AccidentBenefitCategory4').default and 
                    Employee_Benefit_Data['EB_BusRB_AccidentBenefitReason'] == EmployeeBenefits._meta.get_field('EB_BusRB_AccidentBenefitReason').default and     
                    Employee_Benefit_Data['EB_BusRB_DiC_Reason'] == EmployeeBenefits._meta.get_field('EB_BusRB_DiC_Reason').default and 
                    Employee_Benefit_Data['EB_BusRB_DrC_Reason'] == EmployeeBenefits._meta.get_field('EB_BusRB_DrC_Reason').default and 
                    Employee_Benefit_Data['EB_BusRB_DrC_Summary'] == EmployeeBenefits._meta.get_field('EB_BusRB_DrC_Summary').default and 
                    Employee_Benefit_Data['EB_BusRecom_ProductAdmin'] == EmployeeBenefits._meta.get_field('EB_BusRecom_ProductAdmin').default and 
                    Employee_Benefit_Data['EB_BusRecom_ProductName'] == EmployeeBenefits._meta.get_field('EB_BusRecom_ProductName').default and 
                    Employee_Benefit_Data['EB_BusRecom_FundType'] == EmployeeBenefits._meta.get_field('EB_BusRecom_FundType').default and 
                    Employee_Benefit_Data['EB_BusRecom_RecommendationFundType'] == EmployeeBenefits._meta.get_field('EB_BusRecom_RecommendationFundType').default and 
                    Employee_Benefit_Data['EB_BusRecom_Porfolio'] == EmployeeBenefits._meta.get_field('EB_BusRecom_Porfolio').default and 
                    Employee_Benefit_Data['EB_BusRecom_ClientAccepted'] == EmployeeBenefits._meta.get_field('EB_BusRecom_ClientAccepted').default and 
                    Employee_Benefit_Data['EB_BusRecom_ClientRisks'] == EmployeeBenefits._meta.get_field('EB_BusRecom_ClientRisks').default and 
                    Employee_Benefit_Data['EB_BusFReplace_Name'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_Name').default and 
                    Employee_Benefit_Data['EB_BusFReplace_RegNo'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_RegNo').default and 
                    Employee_Benefit_Data['EB_BusFReplace_Type'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_Type').default and 
                    Employee_Benefit_Data['EB_BusFReplace_Detail'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_Detail').default and 
                    Employee_Benefit_Data['EB_BusFReplace_FeeChargesReplaced'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_FeeChargesReplaced').default and 
                    Employee_Benefit_Data['EB_BusFReplace_FeeChargesExisting'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_FeeChargesExisting').default and 
                    Employee_Benefit_Data['EB_BusFReplace_TnC_Replaced'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_TnC_Replaced').default and 
                    Employee_Benefit_Data['EB_BusFReplace_TnC_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_TnC_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_HealthChangesReplaced'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_HealthChangesReplaced').default and 
                    Employee_Benefit_Data['EB_BusFReplace_HealthChangesExisting'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_HealthChangesExisting').default and 
                    Employee_Benefit_Data['EB_BusFReplace_TaxImplicationsReplaced'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_TaxImplicationsReplaced').default and 
                    Employee_Benefit_Data['EB_BusFReplace_TaxImplicationsExisting'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_TaxImplicationsExisting').default and 
                    Employee_Benefit_Data['EB_BusFReplace_MaterialDifferencesReplaced'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_MaterialDifferencesReplaced').default and 
                    Employee_Benefit_Data['EB_BusFReplace_MaterialDifferencesExisting'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_MaterialDifferencesExisting').default and 
                    Employee_Benefit_Data['EB_BusFReplace_PenaltiesReplaced'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_PenaltiesReplaced').default and 
                    Employee_Benefit_Data['EB_BusFReplace_PenaltiesExisting'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_PenaltiesExisting').default and 
                    Employee_Benefit_Data['EB_BusFReplace_RealisedReplaced'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_RealisedReplaced').default and 
                    Employee_Benefit_Data['EB_BusFReplace_RealisedExisting'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_RealisedExisting').default and 
                    Employee_Benefit_Data['EB_BusFReplace_EligGr_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_EligGr_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_EligGr_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_EligGr_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_MemContrib_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_MemContrib_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_MemContrib_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_MemContrib_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_EmpContrib_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_EmpContrib_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_EmpContrib_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_EmpContrib_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_EmpContrib_PercentageProposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_EmpContrib_PercentageProposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_EmpContrib_PercentageExisting'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_EmpContrib_PercentageExisting').default and 
                    Employee_Benefit_Data['EB_BusFReplace_AdminFee_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_AdminFee_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_AdminFee_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_AdminFee_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_BenPayDis_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_BenPayDis_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_BenPayDis_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_BenPayDis_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_BenPayD_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_BenPayD_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_BenPayD_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_BenPayD_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_BenPayW_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_BenPayW_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_BenPayW_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_BenPayW_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_BenPayRe_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_BenPayRe_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_BenPayRe_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_BenPayRe_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_NormRetire_AgeProposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_NormRetire_AgeProposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_NormRetire_AgeExisting'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_NormRetire_AgeExisting').default and 
                    Employee_Benefit_Data['EB_BusFReplace_ConvOp_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_ConvOp_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_ConvOp_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_ConvOp_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_HouseL_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_HouseL_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_HouseL_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_HouseL_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_AdminC_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_AdminC_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_AdminC_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_AdminC_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_InvestFee_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_InvestFee_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_InvestFee_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_InvestFee_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_CoR_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_CoR_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_CoR_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_CoR_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_BenA_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_BenA_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_BenA_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_BenA_Existing').default and 
                    Employee_Benefit_Data['EB_BusFReplace_InvestCh_Proposed'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_InvestCh_Proposed').default and 
                    Employee_Benefit_Data['EB_BusFReplace_InvestCh_Existing'] == EmployeeBenefits._meta.get_field('EB_BusFReplace_InvestCh_Existing').default  
                )):
                    form['EB_ClientName'] = "N.A." 
                    form['EB_ClientIdNumber'] = "N.A." 
                    form['EB_ClientAddress'] = "N.A." 
                    form['EB_ClientPhoneNumber'] = "N.A." 
                    form['EB_ClientCellNumber'] = "N.A." 
                    form['EB_ClientEmail'] = "N.A." 
                    form['EB_ClientDate'] = "N.A." 
                    form['EB_ClientFinancialAdvisor'] = "N.A." 
                    form['EB_ClientFeeDetails'] = "N.A." 
                    form['EB_BusinessName'] = "N.A." 
                    form['EB_BusinessAddress'] = "N.A." 
                    form['EB_BusinessContactPerson'] = "N.A." 
                    form['EB_BusinessPhoneNumber'] = "N.A." 
                    form['EB_BusinessCellNumber'] = "N.A." 
                    form['EB_BusinessEmail'] = "N.A." 
                    form['EB_BusinessNature'] = "N.A." 
                    form['EB_BusinessUnion'] = "N.A." 
                    form['EB_BusinessDetails'] = "N.A." 
                    form['EB_BusinessNumberOfEmployees'] = "N.A." 
                    form['EB_BusinessNumberOfEligibleEmployees'] = "N.A." 
                    form['EB_BusinessNumberOfExcludedCategories'] = "N.A." 
                    form['EB_BusEx_FundsName'] = "N.A." 
                    form['EB_BusEx_FundsAdmin'] = "N.A." 
                    form['EB_BusEx_FundsCurrentValue'] = "N.A." 
                    form['EB_BusEx_FundsActiveMembers'] = "N.A." 
                    form['EB_BusEx_FundsFullyPaidMembers'] = "N.A." 
                    form['EB_BusEx_FundsFullyReasonForChange'] = "N.A." 
                    form['EB_BusB_CoverType'] = "N.A." 
                    form['EB_BusB_Cover'] = "N.A." 
                    form['EB_BusB_CoverDetails'] = "N.A." 
                    form['EB_BusEmp_Retire_In5Years'] = "N.A." 
                    form['EB_BusEmp_Retire_In5YearsPercentage'] = "N.A." 
                    form['EB_BusEmp_Fin_Illiterate'] = "N.A." 
                    form['EB_BusEmp_Fin_IlliteratePercentage'] = "N.A." 
                    form['EB_BusEmp_Fin_Sophisticated'] = "N.A." 
                    form['EB_BusEmp_Fin_SophisticatedPercentage'] = "N.A." 
                    form['EB_BusHS_TurnOver'] = "N.A." 
                    form['EB_BusHS_TurnOverPercentage'] = "N.A." 
                    form['EB_BusI_Choice'] = "N.A." 
                    form['EB_BusI_ChoicePercentage'] = "N.A." 
                    form['EB_Default Investment Portfolio required'] = "N.A." 
                    form['EB_BusinessItP_Percentage'] = "N.A."     
                    form['EB_BusEmp_AdditionalComments'] = "N.A." 
                    form['EB_BusRB_Category1'] = "N.A." 
                    form['EB_BusRB_Category2'] = "N.A." 
                    form['EB_BusRB_Category3'] = "N.A." 
                    form['EB_BusRB_Category4'] = "N.A." 
                    form['EB_BusRB_MemContrib_Category1'] = "N.A." 
                    form['EB_BusRB_MemContrib_Category2'] = "N.A." 
                    form['EB_BusRB_MemContrib_Category3'] = "N.A." 
                    form['EB_BusRB_MemContrib_Category4'] = "N.A." 
                    form['EB_BusRB_EmpContrib_Category1'] = "N.A." 
                    form['EB_BusRB_EmpContrib_Category2'] = "N.A." 
                    form['EB_BusRB_EmpContrib_Category3'] = "N.A." 
                    form['EB_BusRB_EmpContrib_Category4'] = "N.A." 
                    form['EB_BusRB_NormRetire_AgeCategory1'] = "N.A." 
                    form['EB_BusRB_NormRetire_AgeCategory2'] = "N.A." 
                    form['EB_BusRB_NormRetire_AgeCategory3'] = "N.A." 
                    form['EB_BusRB_NormRetire_AgeCategory4'] = "N.A." 
                    form['EB_BusRB_FlexibleGroupLife'] = "N.A." 
                    form['EB_BusRB_Approved'] = "N.A." 
                    form['EB_BusRB_ApprovedCategory1'] = "N.A." 
                    form['EB_BusRB_ApprovedCategory2'] = "N.A." 
                    form['EB_BusRB_ApprovedCategory3'] = "N.A." 
                    form['EB_BusRB_ApprovedCategory4'] = "N.A." 
                    form['EB_BusRB_UnApproved'] = "N.A." 
                    form['EB_BusRB_UnApprovedCategory1'] = "N.A." 
                    form['EB_BusRB_UnApprovedCategory2'] = "N.A." 
                    form['EB_BusRB_UnApprovedCategory3'] = "N.A." 
                    form['EB_BusRB_UnApprovedCategory4'] = "N.A." 
                    form['EB_BusinessRiskFundTakeOver'] = "N.A." 
                    form['EB_BusRB_SpouseLC_Category1'] = "N.A." 
                    form['EB_BusRB_SpouseLC_Category2'] = "N.A." 
                    form['EB_BusRB_SpouseLC_Category3'] = "N.A." 
                    form['EB_BusRB_SpouseLC_Category4'] = "N.A." 
                    form['EB_BusRB_SpouseLC_Notes'] = "N.A." 
                    form['EB_BusRB_TrauBenSa_Category1'] = "N.A." 
                    form['EB_BusRB_TrauBenSa_Category2'] = "N.A." 
                    form['EB_BusRB_TrauBenSa_Category3'] = "N.A." 
                    form['EB_BusRB_TrauBenSa_Category4'] = "N.A." 
                    form['EB_BusRB_FB_CoverCategory1'] = "N.A." 
                    form['EB_BusRB_FB_CoverCategory2'] = "N.A." 
                    form['EB_BusRB_FB_CoverCategory3'] = "N.A." 
                    form['EB_BusRB_FB_CoverCategory4'] = "N.A."     
                    form['EB_BusRB_CapDisBen_Approved'] = "N.A." 
                    form['EB_BusRB_CapDisBen_ApprovedCategory1'] = "N.A." 
                    form['EB_BusRB_CapDisBen_ApprovedCategory2'] = "N.A." 
                    form['EB_BusRB_CapDisBen_ApprovedCategory3'] = "N.A." 
                    form['EB_BusRB_CapDisBen_ApprovedCategory4'] = "N.A." 
                    form['EB_BusRB_CapDisBen_UnApproved'] = "N.A." 
                    form['EB_BusRB_CapDisBen_UnApprovedCategory1'] = "N.A." 
                    form['EB_BusRB_CapDisBen_UnApprovedCategory2'] = "N.A." 
                    form['EB_BusRB_CapDisBen_UnApprovedCategory3'] = "N.A." 
                    form['EB_BusRB_CapDisBen_UnApprovedCategory4'] = "N.A."     
                    form['EB_BusRB_DiIBenWaitPer_Category1'] = "N.A." 
                    form['EB_BusRB_DiIBenWaitPer_Category2'] = "N.A." 
                    form['EB_BusRB_DiIBenWaitPer_Category3'] = "N.A." 
                    form['EB_BusRB_DiIBenWaitPer_Category4'] = "N.A." 
                    form['EB_BusRB_ConvOp'] = "N.A." 
                    form['EB_BusRB_GrowthRates'] = "N.A." 
                    form['EB_BusRB_DisabilityBenefitsNotes'] = "N.A."     
                    form['EB_BusRB_AccidentBenefit'] = "N.A." 
                    form['EB_BusRB_AccidentBenefitCategory1'] = "N.A." 
                    form['EB_BusRB_AccidentBenefitCategory2'] = "N.A." 
                    form['EB_BusRB_AccidentBenefitCategory3'] = "N.A." 
                    form['EB_BusRB_AccidentBenefitCategory4'] = "N.A." 
                    form['EB_BusRB_AccidentBenefitReason'] = "N.A."     
                    form['EB_BusRB_DiC_Reason'] = "N.A." 
                    form['EB_BusRB_DrC_Reason'] = "N.A." 
                    form['EB_BusRB_DrC_Summary'] = "N.A." 
                    form['EB_BusRecom_ProductAdmin'] = "N.A." 
                    form['EB_BusRecom_ProductName'] = "N.A." 
                    form['EB_BusRecom_FundType'] = "N.A." 
                    form['EB_BusRecom_RecommendationFundType'] = "N.A." 
                    form['EB_BusRecom_Porfolio'] = "N.A." 
                    form['EB_BusRecom_ClientAccepted'] = "N.A." 
                    form['EB_BusRecom_ClientRisks'] = "N.A." 
                    form['EB_BusFReplace_Name'] = "N.A." 
                    form['EB_BusFReplace_RegNo'] = "N.A." 
                    form['EB_BusFReplace_Type'] = "N.A." 
                    form['EB_BusFReplace_Detail'] = "N.A." 
                    form['EB_BusFReplace_FeeChargesReplaced'] = "N.A." 
                    form['EB_BusFReplace_FeeChargesExisting'] = "N.A." 
                    form['EB_BusFReplace_TnC_Replaced'] = "N.A." 
                    form['EB_BusFReplace_TnC_Existing'] = "N.A." 
                    form['EB_BusFReplace_HealthChangesReplaced'] = "N.A." 
                    form['EB_BusFReplace_HealthChangesExisting'] = "N.A." 
                    form['EB_BusFReplace_TaxImplicationsReplaced'] = "N.A." 
                    form['EB_BusFReplace_TaxImplicationsExisting'] = "N.A." 
                    form['EB_BusFReplace_MaterialDifferencesReplaced'] = "N.A." 
                    form['EB_BusFReplace_MaterialDifferencesExisting'] = "N.A." 
                    form['EB_BusFReplace_PenaltiesReplaced'] = "N.A." 
                    form['EB_BusFReplace_PenaltiesExisting'] = "N.A." 
                    form['EB_BusFReplace_RealisedReplaced'] = "N.A." 
                    form['EB_BusFReplace_RealisedExisting'] = "N.A." 
                    form['EB_BusFReplace_EligGr_Proposed'] = "N.A." 
                    form['EB_BusFReplace_EligGr_Existing'] = "N.A." 
                    form['EB_BusFReplace_MemContrib_Proposed'] = "N.A." 
                    form['EB_BusFReplace_MemContrib_Existing'] = "N.A." 
                    form['EB_BusFReplace_EmpContrib_Proposed'] = "N.A." 
                    form['EB_BusFReplace_EmpContrib_Existing'] = "N.A." 
                    form['EB_BusFReplace_EmpContrib_PercentageProposed'] = "N.A." 
                    form['EB_BusFReplace_EmpContrib_PercentageExisting'] = "N.A." 
                    form['EB_BusFReplace_AdminFee_Proposed'] = "N.A." 
                    form['EB_BusFReplace_AdminFee_Existing'] = "N.A." 
                    form['EB_BusFReplace_BenPayDis_Proposed'] = "N.A." 
                    form['EB_BusFReplace_BenPayDis_Existing'] = "N.A." 
                    form['EB_BusFReplace_BenPayD_Proposed'] = "N.A." 
                    form['EB_BusFReplace_BenPayD_Existing'] = "N.A." 
                    form['EB_BusFReplace_BenPayW_Proposed'] = "N.A." 
                    form['EB_BusFReplace_BenPayW_Existing'] = "N.A." 
                    form['EB_BusFReplace_BenPayRe_Proposed'] = "N.A." 
                    form['EB_BusFReplace_BenPayRe_Existing'] = "N.A." 
                    form['EB_BusFReplace_NormRetire_AgeProposed'] = "N.A." 
                    form['EB_BusFReplace_NormRetire_AgeExisting'] = "N.A." 
                    form['EB_BusFReplace_ConvOp_Proposed'] = "N.A." 
                    form['EB_BusFReplace_ConvOp_Existing'] = "N.A." 
                    form['EB_BusFReplace_HouseL_Proposed'] = "N.A." 
                    form['EB_BusFReplace_HouseL_Existing'] = "N.A." 
                    form['EB_BusFReplace_AdminC_Proposed'] = "N.A." 
                    form['EB_BusFReplace_AdminC_Existing'] = "N.A." 
                    form['EB_BusFReplace_InvestFee_Proposed'] = "N.A." 
                    form['EB_BusFReplace_InvestFee_Existing'] = "N.A." 
                    form['EB_BusFReplace_CoR_Proposed'] = "N.A." 
                    form['EB_BusFReplace_CoR_Existing'] = "N.A." 
                    form['EB_BusFReplace_BenA_Proposed'] = "N.A." 
                    form['EB_BusFReplace_BenA_Existing'] = "N.A." 
                    form['EB_BusFReplace_InvestCh_Proposed'] = "N.A." 
                    form['EB_BusFReplace_InvestCh_Existing'] = "N.A."     
            else: 
                eb_cnr = ["", "Retirement Benefits", "Type of fund/scheme", "Truama Benefits", "Funeral Benefits", "Accidental Benefits", "Group Life Cover", "Lump Sum Disability Cover", "Spouse Life Cover", "Disability Income Cover", ]     
                waitingPeriod = ["", "1", "3", "6", "12", "24"]
                form['EB_ClientName'] = Employee_Benefit_Data['EB_ClientName'] 
                form['EB_ClientIdNumber'] = Employee_Benefit_Data['EB_ClientIdNumber'] 
                form['EB_ClientAddress'] = Employee_Benefit_Data['EB_ClientAddress'] 
                form['EB_ClientPhoneNumber'] = Employee_Benefit_Data['EB_ClientPhoneNumber'] 
                form['EB_ClientCellNumber'] = Employee_Benefit_Data['EB_ClientCellNumber'] 
                form['EB_ClientEmail'] = Employee_Benefit_Data['EB_ClientEmail'] 
                form['EB_ClientDate'] = Employee_Benefit_Data['EB_ClientDate'] 
                form['EB_ClientFinancialAdvisor'] = Employee_Benefit_Data['EB_ClientFinancialAdvisor'] 
                form['EB_ClientFeeDetails'] = Employee_Benefit_Data['EB_ClientFeeDetails'] 
                form['EB_BusinessName'] = Employee_Benefit_Data['EB_BusinessName'] 
                form['EB_BusinessAddress'] = Employee_Benefit_Data['EB_BusinessAddress'] 
                form['EB_BusinessContactPerson'] = Employee_Benefit_Data['EB_BusinessContactPerson'] 
                form['EB_BusinessPhoneNumber'] = Employee_Benefit_Data['EB_BusinessPhoneNumber'] 
                form['EB_BusinessCellNumber'] = Employee_Benefit_Data['EB_BusinessCellNumber'] 
                form['EB_BusinessEmail'] = Employee_Benefit_Data['EB_BusinessEmail'] 
                form['EB_BusinessNature'] = Employee_Benefit_Data['EB_BusinessNature'] 
                form['EB_BusinessUnion'] = "Yes" if int(Employee_Benefit_Data['EB_BusinessUnion']) == 1 else "No" 
                form['EB_BusinessDetails'] = Employee_Benefit_Data['EB_BusinessDetails'] 
                form['EB_BusinessNumberOfEmployees'] = Employee_Benefit_Data['EB_BusinessNumberOfEmployees'] 
                form['EB_BusinessNumberOfEligibleEmployees'] = Employee_Benefit_Data['EB_BusinessNumberOfEligibleEmployees'] 
                form['EB_BusinessNumberOfExcludedCategories'] = Employee_Benefit_Data['EB_BusinessNumberOfExcludedCategories'] 
                form['EB_BusEx_FundsName'] = Employee_Benefit_Data['EB_BusEx_FundsName'] 
                form['EB_BusEx_FundsAdmin'] = Employee_Benefit_Data['EB_BusEx_FundsAdmin'] 
                form['EB_BusEx_FundsCurrentValue'] = Employee_Benefit_Data['EB_BusEx_FundsCurrentValue'] 
                form['EB_BusEx_FundsActiveMembers'] = Employee_Benefit_Data['EB_BusEx_FundsActiveMembers'] 
                form['EB_BusEx_FundsFullyPaidMembers'] = Employee_Benefit_Data['EB_BusEx_FundsFullyPaidMembers'] 
                form['EB_BusEx_FundsFullyReasonForChange'] = Employee_Benefit_Data['EB_BusEx_FundsFullyReasonForChange'] 
                form['EB_BusB_CoverType'] = eb_cnr[int(Employee_Benefit_Data['EB_BusB_CoverType'])] 
                if int(Employee_Benefit_Data['EB_BusB_Cover']) == 1:
                    form['EB_BusB_Cover'] = "Yes"
                elif int(Employee_Benefit_Data['EB_BusB_Cover']) == 2:
                    form['EB_BusB_Cover'] = "Undecided"
                else:
                    form['EB_BusB_Cover'] = "No"
                form['EB_BusB_CoverDetails'] = Employee_Benefit_Data['EB_BusB_CoverDetails'] 
                form['EB_BusEmp_Retire_In5Years'] = "Yes" if int(Employee_Benefit_Data['EB_BusEmp_Retire_In5Years']) == 1 else "No"
                form['EB_BusEmp_Retire_In5YearsPercentage'] = Employee_Benefit_Data['EB_BusEmp_Retire_In5YearsPercentage'] 
                form['EB_BusEmp_Fin_Illiterate'] = "Yes" if int(Employee_Benefit_Data['EB_BusEmp_Fin_Illiterate']) == 1 else "No" 
                form['EB_BusEmp_Fin_IlliteratePercentage'] = Employee_Benefit_Data['EB_BusEmp_Fin_IlliteratePercentage'] 
                form['EB_BusEmp_Fin_Sophisticated'] = "Yes" if int(Employee_Benefit_Data['EB_BusEmp_Fin_Sophisticated']) == 1 else "No" 
                form['EB_BusEmp_Fin_SophisticatedPercentage'] = Employee_Benefit_Data['EB_BusEmp_Fin_SophisticatedPercentage'] 
                form['EB_BusHS_TurnOver'] = "Yes" if int(Employee_Benefit_Data['EB_BusHS_TurnOver']) == 1 else "No" 
                form['EB_BusHS_TurnOverPercentage'] = Employee_Benefit_Data['EB_BusHS_TurnOverPercentage'] 
                form['EB_BusI_Choice'] = "Yes" if int(Employee_Benefit_Data['EB_BusI_Choice']) == 1 else "No"  
                form['EB_BusI_ChoicePercentage'] = Employee_Benefit_Data['EB_BusI_ChoicePercentage'] 
                form['EB_Default Investment Portfolio required'] = "Yes" if int(Employee_Benefit_Data['EB_BusinessItP']) == 1 else "No" 
                form['EB_BusinessItP_Percentage'] = Employee_Benefit_Data['EB_BusinessItP_Percentage']     
                form['EB_BusEmp_AdditionalComments'] = Employee_Benefit_Data['EB_BusEmp_AdditionalComments'] 
                form['EB_BusRB_Category1'] = Employee_Benefit_Data['EB_BusRB_Category1'] 
                form['EB_BusRB_Category2'] = Employee_Benefit_Data['EB_BusRB_Category2'] 
                form['EB_BusRB_Category3'] = Employee_Benefit_Data['EB_BusRB_Category3'] 
                form['EB_BusRB_Category4'] = Employee_Benefit_Data['EB_BusRB_Category4'] 
                form['EB_BusRB_MemContrib_Category1'] = Employee_Benefit_Data['EB_BusRB_MemContrib_Category1'] 
                form['EB_BusRB_MemContrib_Category2'] = Employee_Benefit_Data['EB_BusRB_MemContrib_Category2'] 
                form['EB_BusRB_MemContrib_Category3'] = Employee_Benefit_Data['EB_BusRB_MemContrib_Category3'] 
                form['EB_BusRB_MemContrib_Category4'] = Employee_Benefit_Data['EB_BusRB_MemContrib_Category4'] 
                form['EB_BusRB_EmpContrib_Category1'] = Employee_Benefit_Data['EB_BusRB_EmpContrib_Category1'] 
                form['EB_BusRB_EmpContrib_Category2'] = Employee_Benefit_Data['EB_BusRB_EmpContrib_Category2'] 
                form['EB_BusRB_EmpContrib_Category3'] = Employee_Benefit_Data['EB_BusRB_EmpContrib_Category3'] 
                form['EB_BusRB_EmpContrib_Category4'] = Employee_Benefit_Data['EB_BusRB_EmpContrib_Category4'] 
                form['EB_BusRB_NormRetire_AgeCategory1'] = Employee_Benefit_Data['EB_BusRB_NormRetire_AgeCategory1'] 
                form['EB_BusRB_NormRetire_AgeCategory2'] = Employee_Benefit_Data['EB_BusRB_NormRetire_AgeCategory2'] 
                form['EB_BusRB_NormRetire_AgeCategory3'] = Employee_Benefit_Data['EB_BusRB_NormRetire_AgeCategory3'] 
                form['EB_BusRB_NormRetire_AgeCategory4'] = Employee_Benefit_Data['EB_BusRB_NormRetire_AgeCategory4'] 
                form['EB_BusRB_FlexibleGroupLife'] = Employee_Benefit_Data['EB_BusRB_FlexibleGroupLife'] 
                form['EB_BusRB_Approved'] = "Yes" if int(Employee_Benefit_Data['EB_BusRB_Approved']) == 1 else "No"
                form['EB_BusRB_ApprovedCategory1'] = Employee_Benefit_Data['EB_BusRB_ApprovedCategory1'] 
                form['EB_BusRB_ApprovedCategory2'] = Employee_Benefit_Data['EB_BusRB_ApprovedCategory2'] 
                form['EB_BusRB_ApprovedCategory3'] = Employee_Benefit_Data['EB_BusRB_ApprovedCategory3'] 
                form['EB_BusRB_ApprovedCategory4'] = Employee_Benefit_Data['EB_BusRB_ApprovedCategory4'] 
                form['EB_BusRB_UnApproved'] = "Yes" if int(Employee_Benefit_Data['EB_BusRB_UnApproved']) == 1 else "No"
                form['EB_BusRB_UnApprovedCategory1'] = Employee_Benefit_Data['EB_BusRB_UnApprovedCategory1'] 
                form['EB_BusRB_UnApprovedCategory2'] = Employee_Benefit_Data['EB_BusRB_UnApprovedCategory2'] 
                form['EB_BusRB_UnApprovedCategory3'] = Employee_Benefit_Data['EB_BusRB_UnApprovedCategory3'] 
                form['EB_BusRB_UnApprovedCategory4'] = Employee_Benefit_Data['EB_BusRB_UnApprovedCategory4'] 
                form['EB_BusinessRiskFundTakeOver'] = "Yes" if int(Employee_Benefit_Data['EB_BusinessRiskFundTakeOver']) == 1 else 0
                form['EB_BusRB_SpouseLC_Category1'] = Employee_Benefit_Data['EB_BusRB_SpouseLC_Category1'] 
                form['EB_BusRB_SpouseLC_Category2'] = Employee_Benefit_Data['EB_BusRB_SpouseLC_Category2'] 
                form['EB_BusRB_SpouseLC_Category3'] = Employee_Benefit_Data['EB_BusRB_SpouseLC_Category3'] 
                form['EB_BusRB_SpouseLC_Category4'] = Employee_Benefit_Data['EB_BusRB_SpouseLC_Category4'] 
                form['EB_BusRB_SpouseLC_Notes'] = Employee_Benefit_Data['EB_BusRB_SpouseLC_Notes'] 
                form['EB_BusRB_TrauBenSa_Category1'] = Employee_Benefit_Data['EB_BusRB_TrauBenSa_Category1'] 
                form['EB_BusRB_TrauBenSa_Category2'] = Employee_Benefit_Data['EB_BusRB_TrauBenSa_Category2'] 
                form['EB_BusRB_TrauBenSa_Category3'] = Employee_Benefit_Data['EB_BusRB_TrauBenSa_Category3'] 
                form['EB_BusRB_TrauBenSa_Category4'] = Employee_Benefit_Data['EB_BusRB_TrauBenSa_Category4'] 
                form['EB_BusRB_FB_CoverCategory1'] = Employee_Benefit_Data['EB_BusRB_FB_CoverCategory1'] 
                form['EB_BusRB_FB_CoverCategory2'] = Employee_Benefit_Data['EB_BusRB_FB_CoverCategory2'] 
                form['EB_BusRB_FB_CoverCategory3'] = Employee_Benefit_Data['EB_BusRB_FB_CoverCategory3'] 
                form['EB_BusRB_FB_CoverCategory4'] = Employee_Benefit_Data['EB_BusRB_FB_CoverCategory4']     
                form['EB_BusRB_CapDisBen_Approved'] = "Yes" if int(Employee_Benefit_Data['EB_BusRB_CapDisBen_Approved']) == 1 else "No" 
                form['EB_BusRB_CapDisBen_ApprovedCategory1'] = Employee_Benefit_Data['EB_BusRB_CapDisBen_ApprovedCategory1'] 
                form['EB_BusRB_CapDisBen_ApprovedCategory2'] = Employee_Benefit_Data['EB_BusRB_CapDisBen_ApprovedCategory2'] 
                form['EB_BusRB_CapDisBen_ApprovedCategory3'] = Employee_Benefit_Data['EB_BusRB_CapDisBen_ApprovedCategory3'] 
                form['EB_BusRB_CapDisBen_ApprovedCategory4'] = Employee_Benefit_Data['EB_BusRB_CapDisBen_ApprovedCategory4'] 
                form['EB_BusRB_CapDisBen_UnApproved'] = "Yes" if int(Employee_Benefit_Data['EB_BusRB_CapDisBen_UnApproved']) == 1 else "No" 
                form['EB_BusRB_CapDisBen_UnApprovedCategory1'] = Employee_Benefit_Data['EB_BusRB_CapDisBen_UnApprovedCategory1'] 
                form['EB_BusRB_CapDisBen_UnApprovedCategory2'] = Employee_Benefit_Data['EB_BusRB_CapDisBen_UnApprovedCategory2'] 
                form['EB_BusRB_CapDisBen_UnApprovedCategory3'] = Employee_Benefit_Data['EB_BusRB_CapDisBen_UnApprovedCategory3'] 
                form['EB_BusRB_CapDisBen_UnApprovedCategory4'] = Employee_Benefit_Data['EB_BusRB_CapDisBen_UnApprovedCategory4']     
                form['EB_BusRB_DiIBenWaitPer_Category1'] = waitingPeriod[int(Employee_Benefit_Data['EB_BusRB_DiIBenWaitPer_Category1'])] 
                form['EB_BusRB_DiIBenWaitPer_Category2'] = waitingPeriod[int(Employee_Benefit_Data['EB_BusRB_DiIBenWaitPer_Category2'])] 
                form['EB_BusRB_DiIBenWaitPer_Category3'] = waitingPeriod[int(Employee_Benefit_Data['EB_BusRB_DiIBenWaitPer_Category3'])] 
                form['EB_BusRB_DiIBenWaitPer_Category4'] = waitingPeriod[int(Employee_Benefit_Data['EB_BusRB_DiIBenWaitPer_Category4'])] 
                form['EB_BusRB_ConvOp'] = Employee_Benefit_Data['EB_BusRB_ConvOp'] 
                form['EB_BusRB_GrowthRates'] = Employee_Benefit_Data['EB_BusRB_GrowthRates'] 
                form['EB_BusRB_DisabilityBenefitsNotes'] = Employee_Benefit_Data['EB_BusRB_DisabilityBenefitsNotes']     
                benefit = ["", "% of group life cover", "x annual salary"]
                form['EB_BusRB_AccidentBenefit'] = benefit[int(Employee_Benefit_Data['EB_BusRB_AccidentBenefit'])] 
                form['EB_BusRB_AccidentBenefitCategory1'] = Employee_Benefit_Data['EB_BusRB_AccidentBenefitCategory1'] 
                form['EB_BusRB_AccidentBenefitCategory2'] = Employee_Benefit_Data['EB_BusRB_AccidentBenefitCategory2'] 
                form['EB_BusRB_AccidentBenefitCategory3'] = Employee_Benefit_Data['EB_BusRB_AccidentBenefitCategory3'] 
                form['EB_BusRB_AccidentBenefitCategory4'] = Employee_Benefit_Data['EB_BusRB_AccidentBenefitCategory4'] 
                form['EB_BusRB_AccidentBenefitReason'] = Employee_Benefit_Data['EB_BusRB_AccidentBenefitReason']     
                form['EB_BusRB_DiC_Reason'] = Employee_Benefit_Data['EB_BusRB_DiC_Reason'] 
                form['EB_BusRB_DrC_Reason'] = Employee_Benefit_Data['EB_BusRB_DrC_Reason'] 
                form['EB_BusRB_DrC_Summary'] = Employee_Benefit_Data['EB_BusRB_DrC_Summary'] 
                form['EB_BusRecom_ProductAdmin'] = Employee_Benefit_Data['EB_BusRecom_ProductAdmin'] 
                form['EB_BusRecom_ProductName'] = Employee_Benefit_Data['EB_BusRecom_ProductName'] 
                form['EB_BusRecom_FundType'] = Employee_Benefit_Data['EB_BusRecom_FundType'] 
                form['EB_BusRecom_RecommendationFundType'] = Employee_Benefit_Data['EB_BusRecom_RecommendationFundType'] 
                form['EB_BusRecom_Portfolio'] = "Yes" if int(Employee_Benefit_Data['EB_BusRecom_Portfolio']) == 1 else "No"
                form['EB_BusRecom_ClientAccepted'] = "Yes" if (Employee_Benefit_Data['EB_BusRecom_ClientAccepted']) == 1 else "No"
                form['EB_BusRecom_ClientRisks'] = Employee_Benefit_Data['EB_BusRecom_ClientRisks'] 
                form['EB_BusFReplace_Name'] = Employee_Benefit_Data['EB_BusFReplace_Name'] 
                form['EB_BusFReplace_RegNo'] = Employee_Benefit_Data['EB_BusFReplace_RegNo'] 
                form['EB_BusFReplace_Type'] = Employee_Benefit_Data['EB_BusFReplace_Type'] 
                form['EB_BusFReplace_Detail'] = "Yes" if int(Employee_Benefit_Data['EB_BusFReplace_Detail']) == 1 else "No"
                form['EB_BusFReplace_FeeChargesReplaced'] = Employee_Benefit_Data['EB_BusFReplace_FeeChargesReplaced'] 
                form['EB_BusFReplace_FeeChargesExisting'] = Employee_Benefit_Data['EB_BusFReplace_FeeChargesExisting'] 
                form['EB_BusFReplace_TnC_Replaced'] = Employee_Benefit_Data['EB_BusFReplace_TnC_Replaced'] 
                form['EB_BusFReplace_TnC_Existing'] = Employee_Benefit_Data['EB_BusFReplace_TnC_Existing'] 
                form['EB_BusFReplace_HealthChangesReplaced'] = Employee_Benefit_Data['EB_BusFReplace_HealthChangesReplaced'] 
                form['EB_BusFReplace_HealthChangesExisting'] = Employee_Benefit_Data['EB_BusFReplace_HealthChangesExisting'] 
                form['EB_BusFReplace_TaxImplicationsReplaced'] = Employee_Benefit_Data['EB_BusFReplace_TaxImplicationsReplaced'] 
                form['EB_BusFReplace_TaxImplicationsExisting'] = Employee_Benefit_Data['EB_BusFReplace_TaxImplicationsExisting'] 
                form['EB_BusFReplace_MaterialDifferencesReplaced'] = Employee_Benefit_Data['EB_BusFReplace_MaterialDifferencesReplaced'] 
                form['EB_BusFReplace_MaterialDifferencesExisting'] = Employee_Benefit_Data['EB_BusFReplace_MaterialDifferencesExisting'] 
                form['EB_BusFReplace_PenaltiesReplaced'] = Employee_Benefit_Data['EB_BusFReplace_PenaltiesReplaced'] 
                form['EB_BusFReplace_PenaltiesExisting'] = Employee_Benefit_Data['EB_BusFReplace_PenaltiesExisting'] 
                form['EB_BusFReplace_RealisedReplaced'] = Employee_Benefit_Data['EB_BusFReplace_RealisedReplaced'] 
                form['EB_BusFReplace_RealisedExisting'] = Employee_Benefit_Data['EB_BusFReplace_RealisedExisting'] 
                form['EB_BusFReplace_EligGr_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_EligGr_Proposed'] 
                form['EB_BusFReplace_EligGr_Existing'] = Employee_Benefit_Data['EB_BusFReplace_EligGr_Existing'] 
                form['EB_BusFReplace_MemContrib_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_MemContrib_Proposed'] 
                form['EB_BusFReplace_MemContrib_Existing'] = Employee_Benefit_Data['EB_BusFReplace_MemContrib_Existing'] 
                form['EB_BusFReplace_EmpContrib_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_EmpContrib_Proposed'] 
                form['EB_BusFReplace_EmpContrib_Existing'] = Employee_Benefit_Data['EB_BusFReplace_EmpContrib_Existing'] 
                form['EB_BusFReplace_EmpContrib_PercentageProposed'] = Employee_Benefit_Data['EB_BusFReplace_EmpContrib_PercentageProposed'] 
                form['EB_BusFReplace_EmpContrib_PercentageExisting'] = Employee_Benefit_Data['EB_BusFReplace_EmpContrib_PercentageExisting'] 
                form['EB_BusFReplace_AdminFee_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_AdminFee_Proposed'] 
                form['EB_BusFReplace_AdminFee_Existing'] = Employee_Benefit_Data['EB_BusFReplace_AdminFee_Existing'] 
                form['EB_BusFReplace_BenPayDis_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_BenPayDis_Proposed'] 
                form['EB_BusFReplace_BenPayDis_Existing'] = Employee_Benefit_Data['EB_BusFReplace_BenPayDis_Existing'] 
                form['EB_BusFReplace_BenPayD_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_BenPayD_Proposed'] 
                form['EB_BusFReplace_BenPayD_Existing'] = Employee_Benefit_Data['EB_BusFReplace_BenPayD_Existing'] 
                form['EB_BusFReplace_BenPayW_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_BenPayW_Proposed'] 
                form['EB_BusFReplace_BenPayW_Existing'] = Employee_Benefit_Data['EB_BusFReplace_BenPayW_Existing'] 
                form['EB_BusFReplace_BenPayRe_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_BenPayRe_Proposed'] 
                form['EB_BusFReplace_BenPayRe_Existing'] = Employee_Benefit_Data['EB_BusFReplace_BenPayRe_Existing'] 
                form['EB_BusFReplace_NormRetire_AgeProposed'] = Employee_Benefit_Data['EB_BusFReplace_NormRetire_AgeProposed'] 
                form['EB_BusFReplace_NormRetire_AgeExisting'] = Employee_Benefit_Data['EB_BusFReplace_NormRetire_AgeExisting'] 
                form['EB_BusFReplace_ConvOp_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_ConvOp_Proposed'] 
                form['EB_BusFReplace_ConvOp_Existing'] = Employee_Benefit_Data['EB_BusFReplace_ConvOp_Existing'] 
                form['EB_BusFReplace_HouseL_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_HouseL_Proposed'] 
                form['EB_BusFReplace_HouseL_Existing'] = Employee_Benefit_Data['EB_BusFReplace_HouseL_Existing'] 
                form['EB_BusFReplace_AdminC_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_AdminC_Proposed'] 
                form['EB_BusFReplace_AdminC_Existing'] = Employee_Benefit_Data['EB_BusFReplace_AdminC_Existing'] 
                form['EB_BusFReplace_InvestFee_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_InvestFee_Proposed'] 
                form['EB_BusFReplace_InvestFee_Existing'] = Employee_Benefit_Data['EB_BusFReplace_InvestFee_Existing'] 
                form['EB_BusFReplace_CoR_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_CoR_Proposed'] 
                form['EB_BusFReplace_CoR_Existing'] = Employee_Benefit_Data['EB_BusFReplace_CoR_Existing'] 
                form['EB_BusFReplace_BenA_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_BenA_Proposed'] 
                form['EB_BusFReplace_BenA_Existing'] = Employee_Benefit_Data['EB_BusFReplace_BenA_Existing'] 
                form['EB_BusFReplace_InvestCh_Proposed'] = Employee_Benefit_Data['EB_BusFReplace_InvestCh_Proposed'] 
                form['EB_BusFReplace_InvestCh_Existing'] = Employee_Benefit_Data['EB_BusFReplace_InvestCh_Existing'] 
        else:
            form['EB_ClientName']= "N.A" 
            form['EB_ClientIdNumber'] = "N.A." 
            form['EB_ClientAddress'] = "N.A." 
            form['EB_ClientPhoneNumber'] = "N.A." 
            form['EB_ClientCellNumber'] = "N.A." 
            form['EB_ClientEmail'] = "N.A." 
            form['EB_ClientDate'] = "N.A." 
            form['EB_ClientFinancialAdvisor'] = "N.A." 
            form['EB_ClientFeeDetails'] = "N.A." 
            form['EB_BusinessName'] = "N.A." 
            form['EB_BusinessAddress'] = "N.A." 
            form['EB_BusinessContactPerson'] = "N.A." 
            form['EB_BusinessPhoneNumber'] = "N.A." 
            form['EB_BusinessCellNumber'] = "N.A." 
            form['EB_BusinessEmail'] = "N.A." 
            form['EB_BusinessNature'] = "N.A." 
            form['EB_BusinessUnion'] = "N.A." 
            form['EB_BusinessDetails'] = "N.A." 
            form['EB_BusinessNumberOfEmployees'] = "N.A." 
            form['EB_BusinessNumberOfEligibleEmployees'] = "N.A." 
            form['EB_BusinessNumberOfExcludedCategories'] = "N.A." 
            form['EB_BusEx_FundsName'] = "N.A." 
            form['EB_BusEx_FundsAdmin'] = "N.A." 
            form['EB_BusEx_FundsCurrentValue'] = "N.A." 
            form['EB_BusEx_FundsActiveMembers'] = "N.A." 
            form['EB_BusEx_FundsFullyPaidMembers'] = "N.A." 
            form['EB_BusEx_FundsFullyReasonForChange'] = "N.A." 
            form['EB_BusB_CoverType'] = "N.A." 
            form['EB_BusB_Cover'] = "N.A." 
            form['EB_BusB_CoverDetails'] = "N.A." 
            form['EB_BusEmp_Retire_In5Years'] = "N.A." 
            form['EB_BusEmp_Retire_In5YearsPercentage'] = "N.A." 
            form['EB_BusEmp_Fin_Illiterate'] = "N.A." 
            form['EB_BusEmp_Fin_IlliteratePercentage'] = "N.A." 
            form['EB_BusEmp_Fin_Sophisticated'] = "N.A." 
            form['EB_BusEmp_Fin_SophisticatedPercentage'] = "N.A." 
            form['EB_BusHS_TurnOver'] = "N.A." 
            form['EB_BusHS_TurnOverPercentage'] = "N.A." 
            form['EB_BusI_Choice'] = "N.A." 
            form['EB_BusI_ChoicePercentage'] = "N.A." 
            form['EB_Default Investment Portfolio required'] = "N.A." 
            form['EB_BusinessItP_Percentage'] = "N.A."     
            form['EB_BusEmp_AdditionalComments'] = "N.A." 
            form['EB_BusRB_Category1'] = "N.A." 
            form['EB_BusRB_Category2'] = "N.A." 
            form['EB_BusRB_Category3'] = "N.A." 
            form['EB_BusRB_Category4'] = "N.A." 
            form['EB_BusRB_MemContrib_Category1'] = "N.A." 
            form['EB_BusRB_MemContrib_Category2'] = "N.A." 
            form['EB_BusRB_MemContrib_Category3'] = "N.A." 
            form['EB_BusRB_MemContrib_Category4'] = "N.A." 
            form['EB_BusRB_EmpContrib_Category1'] = "N.A." 
            form['EB_BusRB_EmpContrib_Category2'] = "N.A." 
            form['EB_BusRB_EmpContrib_Category3'] = "N.A." 
            form['EB_BusRB_EmpContrib_Category4'] = "N.A." 
            form['EB_BusRB_NormRetire_AgeCategory1'] = "N.A." 
            form['EB_BusRB_NormRetire_AgeCategory2'] = "N.A." 
            form['EB_BusRB_NormRetire_AgeCategory3'] = "N.A." 
            form['EB_BusRB_NormRetire_AgeCategory4'] = "N.A." 
            form['EB_BusRB_FlexibleGroupLife'] = "N.A." 
            form['EB_BusRB_Approved'] = "N.A." 
            form['EB_BusRB_ApprovedCategory1'] = "N.A." 
            form['EB_BusRB_ApprovedCategory2'] = "N.A." 
            form['EB_BusRB_ApprovedCategory3'] = "N.A." 
            form['EB_BusRB_ApprovedCategory4'] = "N.A." 
            form['EB_BusRB_UnApproved'] = "N.A." 
            form['EB_BusRB_UnApprovedCategory1'] = "N.A." 
            form['EB_BusRB_UnApprovedCategory2'] = "N.A." 
            form['EB_BusRB_UnApprovedCategory3'] = "N.A." 
            form['EB_BusRB_UnApprovedCategory4'] = "N.A." 
            form['EB_BusinessRiskFundTakeOver'] = "N.A." 
            form['EB_BusRB_SpouseLC_Category1'] = "N.A." 
            form['EB_BusRB_SpouseLC_Category2'] = "N.A." 
            form['EB_BusRB_SpouseLC_Category3'] = "N.A." 
            form['EB_BusRB_SpouseLC_Category4'] = "N.A." 
            form['EB_BusRB_SpouseLC_Notes'] = "N.A." 
            form['EB_BusRB_TrauBenSa_Category1'] = "N.A." 
            form['EB_BusRB_TrauBenSa_Category2'] = "N.A." 
            form['EB_BusRB_TrauBenSa_Category3'] = "N.A." 
            form['EB_BusRB_TrauBenSa_Category4'] = "N.A." 
            form['EB_BusRB_FB_CoverCategory1'] = "N.A." 
            form['EB_BusRB_FB_CoverCategory2'] = "N.A." 
            form['EB_BusRB_FB_CoverCategory3'] = "N.A." 
            form['EB_BusRB_FB_CoverCategory4'] = "N.A."     
            form['EB_BusRB_CapDisBen_Approved'] = "N.A." 
            form['EB_BusRB_CapDisBen_ApprovedCategory1'] = "N.A." 
            form['EB_BusRB_CapDisBen_ApprovedCategory2'] = "N.A." 
            form['EB_BusRB_CapDisBen_ApprovedCategory3'] = "N.A." 
            form['EB_BusRB_CapDisBen_ApprovedCategory4'] = "N.A." 
            form['EB_BusRB_CapDisBen_UnApproved'] = "N.A." 
            form['EB_BusRB_CapDisBen_UnApprovedCategory1'] = "N.A." 
            form['EB_BusRB_CapDisBen_UnApprovedCategory2'] = "N.A." 
            form['EB_BusRB_CapDisBen_UnApprovedCategory3'] = "N.A." 
            form['EB_BusRB_CapDisBen_UnApprovedCategory4'] = "N.A."     
            form['EB_BusRB_DiIBenWaitPer_Category1'] = "N.A." 
            form['EB_BusRB_DiIBenWaitPer_Category2'] = "N.A." 
            form['EB_BusRB_DiIBenWaitPer_Category3'] = "N.A." 
            form['EB_BusRB_DiIBenWaitPer_Category4'] = "N.A." 
            form['EB_BusRB_ConvOp'] = "N.A." 
            form['EB_BusRB_GrowthRates'] = "N.A." 
            form['EB_BusRB_DisabilityBenefitsNotes'] = "N.A."     
            form['EB_BusRB_AccidentBenefit'] = "N.A." 
            form['EB_BusRB_AccidentBenefitCategory1'] = "N.A." 
            form['EB_BusRB_AccidentBenefitCategory2'] = "N.A." 
            form['EB_BusRB_AccidentBenefitCategory3'] = "N.A." 
            form['EB_BusRB_AccidentBenefitCategory4'] = "N.A." 
            form['EB_BusRB_AccidentBenefitReason'] = "N.A."     
            form['EB_BusRB_DiC_Reason'] = "N.A." 
            form['EB_BusRB_DrC_Reason'] = "N.A." 
            form['EB_BusRB_DrC_Summary'] = "N.A." 
            form['EB_BusRecom_ProductAdmin'] = "N.A." 
            form['EB_BusRecom_ProductName'] = "N.A." 
            form['EB_BusRecom_FundType'] = "N.A." 
            form['EB_BusRecom_RecommendationFundType'] = "N.A." 
            form['EB_BusRecom_Porfolio'] = "N.A." 
            form['EB_BusRecom_ClientAccepted'] = "N.A." 
            form['EB_BusRecom_ClientRisks'] = "N.A." 
            form['EB_BusFReplace_Name'] = "N.A." 
            form['EB_BusFReplace_RegNo'] = "N.A." 
            form['EB_BusFReplace_Type'] = "N.A." 
            form['EB_BusFReplace_Detail'] = "N.A." 
            form['EB_BusFReplace_FeeChargesReplaced'] = "N.A." 
            form['EB_BusFReplace_FeeChargesExisting'] = "N.A." 
            form['EB_BusFReplace_TnC_Replaced'] = "N.A." 
            form['EB_BusFReplace_TnC_Existing'] = "N.A." 
            form['EB_BusFReplace_HealthChangesReplaced'] = "N.A." 
            form['EB_BusFReplace_HealthChangesExisting'] = "N.A." 
            form['EB_BusFReplace_TaxImplicationsReplaced'] = "N.A." 
            form['EB_BusFReplace_TaxImplicationsExisting'] = "N.A." 
            form['EB_BusFReplace_MaterialDifferencesReplaced'] = "N.A." 
            form['EB_BusFReplace_MaterialDifferencesExisting'] = "N.A." 
            form['EB_BusFReplace_PenaltiesReplaced'] = "N.A." 
            form['EB_BusFReplace_PenaltiesExisting'] = "N.A." 
            form['EB_BusFReplace_RealisedReplaced'] = "N.A." 
            form['EB_BusFReplace_RealisedExisting'] = "N.A." 
            form['EB_BusFReplace_EligGr_Proposed'] = "N.A." 
            form['EB_BusFReplace_EligGr_Existing'] = "N.A." 
            form['EB_BusFReplace_MemContrib_Proposed'] = "N.A." 
            form['EB_BusFReplace_MemContrib_Existing'] = "N.A." 
            form['EB_BusFReplace_EmpContrib_Proposed'] = "N.A." 
            form['EB_BusFReplace_EmpContrib_Existing'] = "N.A." 
            form['EB_BusFReplace_EmpContrib_PercentageProposed'] = "N.A." 
            form['EB_BusFReplace_EmpContrib_PercentageExisting'] = "N.A." 
            form['EB_BusFReplace_AdminFee_Proposed'] = "N.A." 
            form['EB_BusFReplace_AdminFee_Existing'] = "N.A." 
            form['EB_BusFReplace_BenPayDis_Proposed'] = "N.A." 
            form['EB_BusFReplace_BenPayDis_Existing'] = "N.A." 
            form['EB_BusFReplace_BenPayD_Proposed'] = "N.A." 
            form['EB_BusFReplace_BenPayD_Existing'] = "N.A." 
            form['EB_BusFReplace_BenPayW_Proposed'] = "N.A." 
            form['EB_BusFReplace_BenPayW_Existing'] = "N.A." 
            form['EB_BusFReplace_BenPayRe_Proposed'] = "N.A." 
            form['EB_BusFReplace_BenPayRe_Existing'] = "N.A." 
            form['EB_BusFReplace_NormRetire_AgeProposed'] = "N.A." 
            form['EB_BusFReplace_NormRetire_AgeExisting'] = "N.A." 
            form['EB_BusFReplace_ConvOp_Proposed'] = "N.A." 
            form['EB_BusFReplace_ConvOp_Existing'] = "N.A." 
            form['EB_BusFReplace_HouseL_Proposed'] = "N.A." 
            form['EB_BusFReplace_HouseL_Existing'] = "N.A." 
            form['EB_BusFReplace_AdminC_Proposed'] = "N.A." 
            form['EB_BusFReplace_AdminC_Existing'] = "N.A." 
            form['EB_BusFReplace_InvestFee_Proposed'] = "N.A." 
            form['EB_BusFReplace_InvestFee_Existing'] = "N.A." 
            form['EB_BusFReplace_CoR_Proposed'] = "N.A." 
            form['EB_BusFReplace_CoR_Existing'] = "N.A." 
            form['EB_BusFReplace_BenA_Proposed'] = "N.A." 
            form['EB_BusFReplace_BenA_Existing'] = "N.A." 
            form['EB_BusFReplace_InvestCh_Proposed'] = "N.A." 
            form['EB_BusFReplace_InvestCh_Existing'] = "N.A."   

        Fid_Data = Fiduciary.objects.filter(formId=form['id']).values()
        if len(Fid_Data) != 0:                
            Fid_Data = Fiduciary.objects.filter(formId=form['id']).values().first()
            if ((
                    Fid_Data['fiduciaryWillInPlace'] == Fiduciary._meta.get_field('fiduciaryWillInPlace').default and
                    Fid_Data['fiduciaryWillUpdationDate'] == Fiduciary._meta.get_field('fiduciaryWillUpdationDate').default and
                    Fid_Data['fiduciaryWillKeepingPlace'] == Fiduciary._meta.get_field('fiduciaryWillKeepingPlace').default and
                    Fid_Data['fiduciaryExecutorDetails'] == Fiduciary._meta.get_field('fiduciaryExecutorDetails').default and
                    Fid_Data['fiduciaryClientInstructions'] == Fiduciary._meta.get_field('fiduciaryClientInstructions').default and
                    Fid_Data['fiduciaryConsequencesExplained'] == Fiduciary._meta.get_field('fiduciaryConsequencesExplained').default 
                )):
                form['fiduciaryWillInPlace'] = "N.A."
                form['fiduciaryWillUpdationDate'] = "N.A."
                form['fiduciaryWillKeepingPlace'] = "N.A."
                form['fiduciaryExecutorDetails'] = "N.A."
                form['fiduciaryClientInstructions'] = "N.A."
                form['fiduciaryConsequencesExplained'] = "N.A."
            else:                    
                form['fiduciaryWillInPlace'] = "Yes" if int(Fid_Data['fiduciaryWillInPlace']) == 1 else "No"
                form['fiduciaryWillUpdationDate'] = Fid_Data['fiduciaryWillUpdationDate']
                form['fiduciaryWillKeepingPlace'] = Fid_Data['fiduciaryWillKeepingPlace']
                form['fiduciaryExecutorDetails'] = Fid_Data['fiduciaryExecutorDetails']
                form['fiduciaryClientInstructions'] = Fid_Data['fiduciaryClientInstructions']
                form['fiduciaryConsequencesExplained'] = Fid_Data['fiduciaryConsequencesExplained']
        else:
            form['fiduciaryWillInPlace'] = "N.A."
            form['fiduciaryWillUpdationDate'] = "N.A."
            form['fiduciaryWillKeepingPlace'] = "N.A."
            form['fiduciaryExecutorDetails'] = "N.A."
            form['fiduciaryClientInstructions'] = "N.A."
            form['fiduciaryConsequencesExplained'] = "N.A."

        STC_Data = ShortTermInsuranceCommerical.objects.filter(formId=form['id']).values()
        if len(STC_Data) != 0:                
            STC_Data = ShortTermInsuranceCommerical.objects.filter(formId=form['id']).values().first()
            form['Short_Term_Insurance_Commerical_Quotation_Number'] = STC_Data['STIC_Quotation_Number']  
            form['Short_Term_Insurance_Commerical_Underwritten_By'] = STC_Data['STIC_Underwritten_By']  
            form['Short_Term_Insurance_Commerical_Branch_Name'] = STC_Data['STIC_Branch_Name']  
            form['Short_Term_Insurance_Commerical_Branch_Number'] = STC_Data['STIC_Branch_Number']  
            form['Short_Term_Insurance_Commerical_Inception_Date'] = STC_Data['STIC_Inception_Date']  
            form['Short_Term_Insurance_Commerical_Renewal_Date'] = STC_Data['STIC_Renewal_Date']  
            form['Short_Term_Insurance_Commerical_Payment_Method_Annual'] = "Yes" if int(STC_Data['STIC_Payment_Method_Annual']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Payment_Method_Monthly'] = "Yes" if int(STC_Data['STIC_Payment_Method_Monthly']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sasria_Annual'] = "Yes" if int(STC_Data['STIC_Sasria_Annual']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sasria_Monthly'] = "Yes" if int(STC_Data['STIC_Sasria_Monthly']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Business_Owner'] = STC_Data['STIC_Business_Owner']  
            form['Short_Term_Insurance_Commerical_Client_Id_Number'] = STC_Data['STIC_Client_Id_Number']  
            form['Short_Term_Insurance_Commerical_Company_Reg_Number'] = STC_Data['STIC_Company_Reg_Number']  
            form['Short_Term_Insurance_Commerical_Company_VAT_Number'] = STC_Data['STIC_Company_VAT_Number']  
            form['Short_Term_Insurance_Commerical_Postal_Address'] = STC_Data['STIC_Postal_Address']  
            form['Short_Term_Insurance_Commerical_Risk_Address'] = STC_Data['STIC_Risk_Address']  
            form['Short_Term_Insurance_Commerical_Contact_Person'] = STC_Data['STIC_Contact_Person']  
            form['Short_Term_Insurance_Commerical_TelePhone_Number'] = STC_Data['STIC_TelePhone_Number']  
            form['Short_Term_Insurance_Commerical_Fax_Number'] = STC_Data['STIC_Fax_Number']  
            form['Short_Term_Insurance_Commerical_CellPhone_Number'] = STC_Data['STIC_CellPhone_Number']  
            form['Short_Term_Insurance_Commerical_Email'] = STC_Data['STIC_Email']  
            form['Short_Term_Insurance_Commerical_Business_Description'] = STC_Data['STIC_Business_Description']  
            form['Short_Term_Insurance_Commerical_Lower_Premium'] = "Yes" if int(STC_Data['STIC_Lower_Premium']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Higher_Premium'] = "Yes" if int(STC_Data['STIC_Higher_Premium']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Applicable_Option'] = STC_Data['STIC_Applicable_Option']  
            form['Short_Term_Insurance_Commerical_General_Cancelled'] = "Yes" if int(STC_Data['STIC_General_Cancelled']) == 1 else "No"
            form['Short_Term_Insurance_Commerical_General_Cancelled_Detail'] = STC_Data['STIC_General_Cancelled_Detail']  
            form['Short_Term_Insurance_Commerical_General_LossType'] = STC_Data['STIC_General_LossType']  
            form['Short_Term_Insurance_Commerical_General_Year'] = STC_Data['STIC_General_Year']  
            form['Short_Term_Insurance_Commerical_General_Amount'] = STC_Data['STIC_General_Amount']  
            form['Short_Term_Insurance_Commerical_General_History'] = STC_Data['STIC_General_History']  
            form['Short_Term_Insurance_Commerical_General_Insurer'] = STC_Data['STIC_General_Insurer']  
            form['Short_Term_Insurance_Commerical_Replacement_Advise'] = "Yes" if int(STC_Data['STIC_Replacement_Advise']) == 1 else 'No' 
            form['Short_Term_Insurance_Commerical_Replacement_Purpose'] = STC_Data['STIC_Replacement_Purpose']  
            form['Short_Term_Insurance_Commerical_Replacement_Reason'] = STC_Data['STIC_Replacement_Reason']  
            form['Short_Term_Insurance_Commerical_Replacement_Suppliers'] = STC_Data['STIC_Replacement_Suppliers']  
            form['Short_Term_Insurance_Commerical_Fin_FnC_Existing'] = STC_Data['STIC_Fin_FnC_Existing']  
            form['Short_Term_Insurance_Commerical_Fin_FnC_Replacement'] = STC_Data['STIC_Fin_FnC_Replacement']  
            form['Short_Term_Insurance_Commerical_Fin_STnC_Existing'] = STC_Data['STIC_Fin_STnC_Existing']  
            form['Short_Term_Insurance_Commerical_Fin_STnC_Replacement'] = STC_Data['STIC_Fin_STnC_Replacement']  
            form['Short_Term_Insurance_Commerical_Fin_ImpOnPre_Existing'] = STC_Data['STIC_Fin_ImpOnPre_Existing']  
            form['Short_Term_Insurance_Commerical_Fin_ImpOnPre_Replacement'] = STC_Data['STIC_Fin_ImpOnPre_Replacement']  
            form['Short_Term_Insurance_Commerical_Fin_Excesses_Existing'] = STC_Data['STIC_Fin_Excesses_Existing']  
            form['Short_Term_Insurance_Commerical_Fin_Excesses_Replacement'] = STC_Data['STIC_Fin_Excesses_Replacement']  
            form['Short_Term_Insurance_Commerical_Fin_VABen_Existing'] = STC_Data['STIC_Fin_VABen_Existing']  
            form['Short_Term_Insurance_Commerical_Fin_VABen_Replacement'] = STC_Data['STIC_Fin_VABen_Replacement']  
            form['Short_Term_Insurance_Commerical_Fin_AdvisorComm_Existing'] = STC_Data['STIC_Fin_AdvisorComm_Existing']  
            form['Short_Term_Insurance_Commerical_Fin_AdvisorComm_Replacement'] = STC_Data['STIC_Fin_AdvisorComm_Replacement']  
            form['Short_Term_Insurance_Commerical_ProdComp_Existing_Company'] = STC_Data['STIC_ProdComp_Existing_Company']  
            form['Short_Term_Insurance_Commerical_ProdComp_Replacement_Company'] = STC_Data['STIC_ProdComp_Replacement_Company']  
            form['Short_Term_Insurance_Commerical_ProdComp_Existing_Provider'] = STC_Data['STIC_ProdComp_Existing_Provider']  
            form['Short_Term_Insurance_Commerical_ProdComp_Replacement_Provider'] = STC_Data['STIC_ProdComp_Replacement_Provider']  
            form['Short_Term_Insurance_Commerical_ProdComp_Existing_Product'] = STC_Data['STIC_ProdComp_Existing_Product']  
            form['Short_Term_Insurance_Commerical_ProdComp_Replacement_Product'] = STC_Data['STIC_ProdComp_Replacement_Product']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended1'] = STC_Data['STIC_ProdComp_Recommended1']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted1'] = STC_Data['STIC_ProdComp_Accepted1']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount1'] = STC_Data['STIC_ProdComp_CoverAmount1']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium1'] = STC_Data['STIC_ProdComp_ExistP_Premium1']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess1'] = STC_Data['STIC_ProdComp_ExistP_Excess1']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium1'] = STC_Data['STIC_ProdComp_RecommP_Premium1']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess1'] = STC_Data['STIC_ProdComp_RecommP_Excess1']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended2'] = STC_Data['STIC_ProdComp_Recommended2']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted2'] = STC_Data['STIC_ProdComp_Accepted2']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount2'] = STC_Data['STIC_ProdComp_CoverAmount2']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium2'] = STC_Data['STIC_ProdComp_ExistP_Premium2']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess2'] = STC_Data['STIC_ProdComp_ExistP_Excess2']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium2'] = STC_Data['STIC_ProdComp_RecommP_Premium2']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess2'] = STC_Data['STIC_ProdComp_RecommP_Excess2']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended3'] = STC_Data['STIC_ProdComp_Recommended3']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted3'] = STC_Data['STIC_ProdComp_Accepted3']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount3'] = STC_Data['STIC_ProdComp_CoverAmount3']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium3'] = STC_Data['STIC_ProdComp_ExistP_Premium3']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess3'] = STC_Data['STIC_ProdComp_ExistP_Excess3']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium3'] = STC_Data['STIC_ProdComp_RecommP_Premium3']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess3'] = STC_Data['STIC_ProdComp_RecommP_Excess3']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended4'] = STC_Data['STIC_ProdComp_Recommended4']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted4'] = STC_Data['STIC_ProdComp_Accepted4']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount4'] = STC_Data['STIC_ProdComp_CoverAmount4']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium4'] = STC_Data['STIC_ProdComp_ExistP_Premium4']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess4'] = STC_Data['STIC_ProdComp_ExistP_Excess4']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium4'] = STC_Data['STIC_ProdComp_RecommP_Premium4']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess4'] = STC_Data['STIC_ProdComp_RecommP_Excess4']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended5'] = STC_Data['STIC_ProdComp_Recommended5']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted5'] = STC_Data['STIC_ProdComp_Accepted5']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount5'] = STC_Data['STIC_ProdComp_CoverAmount5']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium5'] = STC_Data['STIC_ProdComp_ExistP_Premium5']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess5'] = STC_Data['STIC_ProdComp_ExistP_Excess5']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium5'] = STC_Data['STIC_ProdComp_RecommP_Premium5']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess5'] = STC_Data['STIC_ProdComp_RecommP_Excess5']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended6'] = STC_Data['STIC_ProdComp_Recommended6']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted6'] = STC_Data['STIC_ProdComp_Accepted6']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount6'] = STC_Data['STIC_ProdComp_CoverAmount6']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium6'] = STC_Data['STIC_ProdComp_ExistP_Premium6']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess6'] = STC_Data['STIC_ProdComp_ExistP_Excess6']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium6'] = STC_Data['STIC_ProdComp_RecommP_Premium6']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess6'] = STC_Data['STIC_ProdComp_RecommP_Excess6']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended7'] = STC_Data['STIC_ProdComp_Recommended7']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted7'] = STC_Data['STIC_ProdComp_Accepted7']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount7'] = STC_Data['STIC_ProdComp_CoverAmount7']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium7'] = STC_Data['STIC_ProdComp_ExistP_Premium7']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess7'] = STC_Data['STIC_ProdComp_ExistP_Excess7']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium7'] = STC_Data['STIC_ProdComp_RecommP_Premium7']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess7'] = STC_Data['STIC_ProdComp_RecommP_Excess7']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended8'] = STC_Data['STIC_ProdComp_Recommended8']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted8'] = STC_Data['STIC_ProdComp_Accepted8']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount8'] = STC_Data['STIC_ProdComp_CoverAmount8']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium8'] = STC_Data['STIC_ProdComp_ExistP_Premium8']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess8'] = STC_Data['STIC_ProdComp_ExistP_Excess8']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium8'] = STC_Data['STIC_ProdComp_RecommP_Premium8']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess8'] = STC_Data['STIC_ProdComp_RecommP_Excess8']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended9'] = STC_Data['STIC_ProdComp_Recommended9']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted9'] = STC_Data['STIC_ProdComp_Accepted9']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount9'] = STC_Data['STIC_ProdComp_CoverAmount9']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium9'] = STC_Data['STIC_ProdComp_ExistP_Premium9']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess9'] = STC_Data['STIC_ProdComp_ExistP_Excess9']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium9'] = STC_Data['STIC_ProdComp_RecommP_Premium9']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess9'] = STC_Data['STIC_ProdComp_RecommP_Excess9']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended10'] = STC_Data['STIC_ProdComp_Recommended10']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted10'] = STC_Data['STIC_ProdComp_Accepted10']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount10'] = STC_Data['STIC_ProdComp_CoverAmount10']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium10'] = STC_Data['STIC_ProdComp_ExistP_Premium10']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess10'] = STC_Data['STIC_ProdComp_ExistP_Excess10']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium10'] = STC_Data['STIC_ProdComp_RecommP_Premium10']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess10'] = STC_Data['STIC_ProdComp_RecommP_Excess10']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended11'] = STC_Data['STIC_ProdComp_Recommended11']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted11'] = STC_Data['STIC_ProdComp_Accepted11']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount11'] = STC_Data['STIC_ProdComp_CoverAmount11']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium11'] = STC_Data['STIC_ProdComp_ExistP_Premium11']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess11'] = STC_Data['STIC_ProdComp_ExistP_Excess11']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium11'] = STC_Data['STIC_ProdComp_RecommP_Premium11']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess11'] = STC_Data['STIC_ProdComp_RecommP_Excess11']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended12'] = STC_Data['STIC_ProdComp_Recommended12']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted12'] = STC_Data['STIC_ProdComp_Accepted12']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount12'] = STC_Data['STIC_ProdComp_CoverAmount12']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium12'] = STC_Data['STIC_ProdComp_ExistP_Premium12']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess12'] = STC_Data['STIC_ProdComp_ExistP_Excess12']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium12'] = STC_Data['STIC_ProdComp_RecommP_Premium12']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess12'] = STC_Data['STIC_ProdComp_RecommP_Excess12']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended13'] = STC_Data['STIC_ProdComp_Recommended13']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted13'] = STC_Data['STIC_ProdComp_Accepted13']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount13'] = STC_Data['STIC_ProdComp_CoverAmount13']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium13'] = STC_Data['STIC_ProdComp_ExistP_Premium13']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess13'] = STC_Data['STIC_ProdComp_ExistP_Excess13']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium13'] = STC_Data['STIC_ProdComp_RecommP_Premium13']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess13'] = STC_Data['STIC_ProdComp_RecommP_Excess13']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended14'] = STC_Data['STIC_ProdComp_Recommended14']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted14'] = STC_Data['STIC_ProdComp_Accepted14']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount14'] = STC_Data['STIC_ProdComp_CoverAmount14']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium14'] = STC_Data['STIC_ProdComp_ExistP_Premium14']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess14'] = STC_Data['STIC_ProdComp_ExistP_Excess14']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium14'] = STC_Data['STIC_ProdComp_RecommP_Premium14']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess14'] = STC_Data['STIC_ProdComp_RecommP_Excess14']   
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended15'] = STC_Data['STIC_ProdComp_Recommended15']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted15'] = STC_Data['STIC_ProdComp_Accepted15']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount15'] = STC_Data['STIC_ProdComp_CoverAmount15']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium15'] = STC_Data['STIC_ProdComp_ExistP_Premium15']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess15'] = STC_Data['STIC_ProdComp_ExistP_Excess15']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium15'] = STC_Data['STIC_ProdComp_RecommP_Premium15']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess15'] = STC_Data['STIC_ProdComp_RecommP_Excess15']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended16'] = STC_Data['STIC_ProdComp_Recommended16']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted16'] = STC_Data['STIC_ProdComp_Accepted16']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount16'] = STC_Data['STIC_ProdComp_CoverAmount16']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium16'] = STC_Data['STIC_ProdComp_ExistP_Premium16']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess16'] = STC_Data['STIC_ProdComp_ExistP_Excess16']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium16'] = STC_Data['STIC_ProdComp_RecommP_Premium16']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess16'] = STC_Data['STIC_ProdComp_RecommP_Excess16']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended17'] = STC_Data['STIC_ProdComp_Recommended17']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted17'] = STC_Data['STIC_ProdComp_Accepted17']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount17'] = STC_Data['STIC_ProdComp_CoverAmount17']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium17'] = STC_Data['STIC_ProdComp_ExistP_Premium17']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess17'] = STC_Data['STIC_ProdComp_ExistP_Excess17']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium17'] = STC_Data['STIC_ProdComp_RecommP_Premium17']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess17'] = STC_Data['STIC_ProdComp_RecommP_Excess17']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended18'] = STC_Data['STIC_ProdComp_Recommended18']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted18'] = STC_Data['STIC_ProdComp_Accepted18']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount18'] = STC_Data['STIC_ProdComp_CoverAmount18']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium18'] = STC_Data['STIC_ProdComp_ExistP_Premium18']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess18'] = STC_Data['STIC_ProdComp_ExistP_Excess18']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium18'] = STC_Data['STIC_ProdComp_RecommP_Premium18']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess18'] = STC_Data['STIC_ProdComp_RecommP_Excess18']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended19'] = STC_Data['STIC_ProdComp_Recommended19']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted19'] = STC_Data['STIC_ProdComp_Accepted19']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount19'] = STC_Data['STIC_ProdComp_CoverAmount19']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium19'] = STC_Data['STIC_ProdComp_ExistP_Premium19']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess19'] = STC_Data['STIC_ProdComp_ExistP_Excess19']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium19'] = STC_Data['STIC_ProdComp_RecommP_Premium19']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess19'] = STC_Data['STIC_ProdComp_RecommP_Excess19']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended20'] = STC_Data['STIC_ProdComp_Recommended20']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted20'] = STC_Data['STIC_ProdComp_Accepted20']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount20'] = STC_Data['STIC_ProdComp_CoverAmount20']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium20'] = STC_Data['STIC_ProdComp_ExistP_Premium20']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess20'] = STC_Data['STIC_ProdComp_ExistP_Excess20']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium20'] = STC_Data['STIC_ProdComp_RecommP_Premium20']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess20'] = STC_Data['STIC_ProdComp_RecommP_Excess20']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended21'] = STC_Data['STIC_ProdComp_Recommended21']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted21'] = STC_Data['STIC_ProdComp_Accepted21']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount21'] = STC_Data['STIC_ProdComp_CoverAmount21']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium21'] = STC_Data['STIC_ProdComp_ExistP_Premium21']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess21'] = STC_Data['STIC_ProdComp_ExistP_Excess21']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium21'] = STC_Data['STIC_ProdComp_RecommP_Premium21']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess21'] = STC_Data['STIC_ProdComp_RecommP_Excess21']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended22'] = STC_Data['STIC_ProdComp_Recommended22']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted22'] = STC_Data['STIC_ProdComp_Accepted22']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount22'] = STC_Data['STIC_ProdComp_CoverAmount22']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium22'] = STC_Data['STIC_ProdComp_ExistP_Premium22']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess22'] = STC_Data['STIC_ProdComp_ExistP_Excess22']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium22'] = STC_Data['STIC_ProdComp_RecommP_Premium22']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess22'] = STC_Data['STIC_ProdComp_RecommP_Excess22']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended23'] = STC_Data['STIC_ProdComp_Recommended23']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted23'] = STC_Data['STIC_ProdComp_Accepted23']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount23'] = STC_Data['STIC_ProdComp_CoverAmount23']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium23'] = STC_Data['STIC_ProdComp_ExistP_Premium23']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess23'] = STC_Data['STIC_ProdComp_ExistP_Excess23']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium23'] = STC_Data['STIC_ProdComp_RecommP_Premium23']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess23'] = STC_Data['STIC_ProdComp_RecommP_Excess23']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended24'] = STC_Data['STIC_ProdComp_Recommended24']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted24'] = STC_Data['STIC_ProdComp_Accepted24']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount24'] = STC_Data['STIC_ProdComp_CoverAmount24']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium24'] = STC_Data['STIC_ProdComp_ExistP_Premium24']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess24'] = STC_Data['STIC_ProdComp_ExistP_Excess24']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium24'] = STC_Data['STIC_ProdComp_RecommP_Premium24']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess24'] = STC_Data['STIC_ProdComp_RecommP_Excess24']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended25'] = STC_Data['STIC_ProdComp_Recommended25']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted25'] = STC_Data['STIC_ProdComp_Accepted25']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount25'] = STC_Data['STIC_ProdComp_CoverAmount25']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium25'] = STC_Data['STIC_ProdComp_ExistP_Premium25']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess25'] = STC_Data['STIC_ProdComp_ExistP_Excess25']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium25'] = STC_Data['STIC_ProdComp_RecommP_Premium25']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess25'] = STC_Data['STIC_ProdComp_RecommP_Excess25']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended26'] = STC_Data['STIC_ProdComp_Recommended26']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted26'] = STC_Data['STIC_ProdComp_Accepted26']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount26'] = STC_Data['STIC_ProdComp_CoverAmount26']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium26'] = STC_Data['STIC_ProdComp_ExistP_Premium26']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess26'] = STC_Data['STIC_ProdComp_ExistP_Excess26']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium26'] = STC_Data['STIC_ProdComp_RecommP_Premium26']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess26'] = STC_Data['STIC_ProdComp_RecommP_Excess26']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended26'] = STC_Data['STIC_ProdComp_Recommended26']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted26'] = STC_Data['STIC_ProdComp_Accepted26']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount26'] = STC_Data['STIC_ProdComp_CoverAmount26']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium26'] = STC_Data['STIC_ProdComp_ExistP_Premium26']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess26'] = STC_Data['STIC_ProdComp_ExistP_Excess26']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium26'] = STC_Data['STIC_ProdComp_RecommP_Premium26']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess26'] = STC_Data['STIC_ProdComp_RecommP_Excess26']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended27'] = STC_Data['STIC_ProdComp_Recommended27']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted27'] = STC_Data['STIC_ProdComp_Accepted27']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount27'] = STC_Data['STIC_ProdComp_CoverAmount27']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium27'] = STC_Data['STIC_ProdComp_ExistP_Premium27']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess27'] = STC_Data['STIC_ProdComp_ExistP_Excess27']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium27'] = STC_Data['STIC_ProdComp_RecommP_Premium27']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess27'] = STC_Data['STIC_ProdComp_RecommP_Excess27']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended28'] = STC_Data['STIC_ProdComp_Recommended28']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted28'] = STC_Data['STIC_ProdComp_Accepted28']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount28'] = STC_Data['STIC_ProdComp_CoverAmount28']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium28'] = STC_Data['STIC_ProdComp_ExistP_Premium28']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess28'] = STC_Data['STIC_ProdComp_ExistP_Excess28']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium28'] = STC_Data['STIC_ProdComp_RecommP_Premium28']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess28'] = STC_Data['STIC_ProdComp_RecommP_Excess28']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended29'] = STC_Data['STIC_ProdComp_Recommended29']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted29'] = STC_Data['STIC_ProdComp_Accepted29']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount29'] = STC_Data['STIC_ProdComp_CoverAmount29']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium29'] = STC_Data['STIC_ProdComp_ExistP_Premium29']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess29'] = STC_Data['STIC_ProdComp_ExistP_Excess29']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium29'] = STC_Data['STIC_ProdComp_RecommP_Premium29']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess29'] = STC_Data['STIC_ProdComp_RecommP_Excess29']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended30'] = STC_Data['STIC_ProdComp_Recommended30']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted30'] = STC_Data['STIC_ProdComp_Accepted30']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount30'] = STC_Data['STIC_ProdComp_CoverAmount30']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium30'] = STC_Data['STIC_ProdComp_ExistP_Premium30']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess30'] = STC_Data['STIC_ProdComp_ExistP_Excess30']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium30'] = STC_Data['STIC_ProdComp_RecommP_Premium30']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess30'] = STC_Data['STIC_ProdComp_RecommP_Excess30']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended31'] = STC_Data['STIC_ProdComp_Recommended31']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted31'] = STC_Data['STIC_ProdComp_Accepted31']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount31'] = STC_Data['STIC_ProdComp_CoverAmount31']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium31'] = STC_Data['STIC_ProdComp_ExistP_Premium31']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess31'] = STC_Data['STIC_ProdComp_ExistP_Excess31']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium31'] = STC_Data['STIC_ProdComp_RecommP_Premium31']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess31'] = STC_Data['STIC_ProdComp_RecommP_Excess31']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended32'] = STC_Data['STIC_ProdComp_Recommended32']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted32'] = STC_Data['STIC_ProdComp_Accepted32']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount32'] = STC_Data['STIC_ProdComp_CoverAmount32']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium32'] = STC_Data['STIC_ProdComp_ExistP_Premium32']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess32'] = STC_Data['STIC_ProdComp_ExistP_Excess32']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium32'] = STC_Data['STIC_ProdComp_RecommP_Premium32']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess32'] = STC_Data['STIC_ProdComp_RecommP_Excess32']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended33'] = STC_Data['STIC_ProdComp_Recommended33']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted33'] = STC_Data['STIC_ProdComp_Accepted33']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount33'] = STC_Data['STIC_ProdComp_CoverAmount33']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium33'] = STC_Data['STIC_ProdComp_ExistP_Premium33']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess33'] = STC_Data['STIC_ProdComp_ExistP_Excess33']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium33'] = STC_Data['STIC_ProdComp_RecommP_Premium33']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess33'] = STC_Data['STIC_ProdComp_RecommP_Excess33']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended34'] = STC_Data['STIC_ProdComp_Recommended34']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted34'] = STC_Data['STIC_ProdComp_Accepted34']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount34'] = STC_Data['STIC_ProdComp_CoverAmount34']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium34'] = STC_Data['STIC_ProdComp_ExistP_Premium34']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess34'] = STC_Data['STIC_ProdComp_ExistP_Excess34']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium34'] = STC_Data['STIC_ProdComp_RecommP_Premium34']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess34'] = STC_Data['STIC_ProdComp_RecommP_Excess34']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended35'] = STC_Data['STIC_ProdComp_Recommended35']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted35'] = STC_Data['STIC_ProdComp_Accepted35']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount35'] = STC_Data['STIC_ProdComp_CoverAmount35']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium35'] = STC_Data['STIC_ProdComp_ExistP_Premium35']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess35'] = STC_Data['STIC_ProdComp_ExistP_Excess35']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium35'] = STC_Data['STIC_ProdComp_RecommP_Premium35']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess35'] = STC_Data['STIC_ProdComp_RecommP_Excess35']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended36'] = STC_Data['STIC_ProdComp_Recommended36']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted36'] = STC_Data['STIC_ProdComp_Accepted36']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount36'] = STC_Data['STIC_ProdComp_CoverAmount36']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium36'] = STC_Data['STIC_ProdComp_ExistP_Premium36']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess36'] = STC_Data['STIC_ProdComp_ExistP_Excess36']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium36'] = STC_Data['STIC_ProdComp_RecommP_Premium36']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess36'] = STC_Data['STIC_ProdComp_RecommP_Excess36']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended37'] = STC_Data['STIC_ProdComp_Recommended37']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted37'] = STC_Data['STIC_ProdComp_Accepted37']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount37'] = STC_Data['STIC_ProdComp_CoverAmount37']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium37'] = STC_Data['STIC_ProdComp_ExistP_Premium37']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess37'] = STC_Data['STIC_ProdComp_ExistP_Excess37']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium37'] = STC_Data['STIC_ProdComp_RecommP_Premium37']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess37'] = STC_Data['STIC_ProdComp_RecommP_Excess37']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended38'] = STC_Data['STIC_ProdComp_Recommended38']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted38'] = STC_Data['STIC_ProdComp_Accepted38']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount38'] = STC_Data['STIC_ProdComp_CoverAmount38']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium38'] = STC_Data['STIC_ProdComp_ExistP_Premium38']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess38'] = STC_Data['STIC_ProdComp_ExistP_Excess38']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium38'] = STC_Data['STIC_ProdComp_RecommP_Premium38']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess38'] = STC_Data['STIC_ProdComp_RecommP_Excess38']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended39'] = STC_Data['STIC_ProdComp_Recommended39']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted39'] = STC_Data['STIC_ProdComp_Accepted39']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount39'] = STC_Data['STIC_ProdComp_CoverAmount39']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium39'] = STC_Data['STIC_ProdComp_ExistP_Premium39']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess39'] = STC_Data['STIC_ProdComp_ExistP_Excess39']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium39'] = STC_Data['STIC_ProdComp_RecommP_Premium39']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess39'] = STC_Data['STIC_ProdComp_RecommP_Excess39']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended40'] = STC_Data['STIC_ProdComp_Recommended40']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted40'] = STC_Data['STIC_ProdComp_Accepted40']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount40'] = STC_Data['STIC_ProdComp_CoverAmount40']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium40'] = STC_Data['STIC_ProdComp_ExistP_Premium40']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess40'] = STC_Data['STIC_ProdComp_ExistP_Excess40']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium40'] = STC_Data['STIC_ProdComp_RecommP_Premium40']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess40'] = STC_Data['STIC_ProdComp_RecommP_Excess40']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended41'] = STC_Data['STIC_ProdComp_Recommended41']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted41'] = STC_Data['STIC_ProdComp_Accepted41']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount41'] = STC_Data['STIC_ProdComp_CoverAmount41']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium41'] = STC_Data['STIC_ProdComp_ExistP_Premium41']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess41'] = STC_Data['STIC_ProdComp_ExistP_Excess41']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium41'] = STC_Data['STIC_ProdComp_RecommP_Premium41']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess41'] = STC_Data['STIC_ProdComp_RecommP_Excess41']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended42'] = STC_Data['STIC_ProdComp_Recommended42']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted42'] = STC_Data['STIC_ProdComp_Accepted42']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount42'] = STC_Data['STIC_ProdComp_CoverAmount42']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium42'] = STC_Data['STIC_ProdComp_ExistP_Premium42']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess42'] = STC_Data['STIC_ProdComp_ExistP_Excess42']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium42'] = STC_Data['STIC_ProdComp_RecommP_Premium42']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess42'] = STC_Data['STIC_ProdComp_RecommP_Excess42']  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended43'] = STC_Data['STIC_ProdComp_Recommended43']  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted43'] = STC_Data['STIC_ProdComp_Accepted43']  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount43'] = STC_Data['STIC_ProdComp_CoverAmount43']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium43'] = STC_Data['STIC_ProdComp_ExistP_Premium43']  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess43'] = STC_Data['STIC_ProdComp_ExistP_Excess43']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium43'] = STC_Data['STIC_ProdComp_RecommP_Premium43']  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess43'] = STC_Data['STIC_ProdComp_RecommP_Excess43']  
            form['Short_Term_Insurance_Commerical_ProdComp_FeeNCharges'] = STC_Data['STIC_ProdComp_FeeNCharges']  
            form['Short_Term_Insurance_Commerical_ProdComp_Commission'] = STC_Data['STIC_ProdComp_Commission']  
            form['Short_Term_Insurance_Commerical_ProdComp_TotalPremium'] = STC_Data['STIC_ProdComp_TotalPremium']  
            form['Short_Term_Insurance_Commerical_Fire_Limit'] = STC_Data['STIC_Fire_Limit']  
            form['Short_Term_Insurance_Commerical_Fire_ItemNumber'] = STC_Data['STIC_Fire_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Fire_Premium'] = STC_Data['STIC_Fire_Premium']  
            form['Short_Term_Insurance_Commerical_Fire_PremNumber'] = STC_Data['STIC_Fire_PremNumber']  
            form['Short_Term_Insurance_Commerical_Buildings_Insured'] = STC_Data['STIC_Buildings_Insured']  
            form['Short_Term_Insurance_Commerical_Rental_Insured'] = STC_Data['STIC_Rental_Insured']  
            form['Short_Term_Insurance_Commerical_Others_Insured'] = STC_Data['STIC_Others_Insured']  
            form['Short_Term_Insurance_Commerical_Stocks_Insured'] = STC_Data['STIC_Stocks_Insured']  
            form['Short_Term_Insurance_Commerical_Miscellaneous1_Insured'] = STC_Data['STIC_Miscellaneous1_Insured']  
            form['Short_Term_Insurance_Commerical_Miscellaneous2_Insured'] = STC_Data['STIC_Miscellaneous2_Insured']  
            form['Short_Term_Insurance_Commerical_Earthquake_Insured'] = "Yes" if int(STC_Data['STIC_Earthquake_Insured']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Malicious_Damage_Insured'] = "Yes" if int(STC_Data['STIC_Malicious_Damage_Insured']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Special_Insured'] = "Yes" if int(STC_Data['STIC_Special_Insured']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_LeakFull_Insured'] = "Yes" if int(STC_Data['STIC_LeakFull_Insured']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_LeakFirst_Insured'] = "Yes" if int(STC_Data['STIC_LeakFirst_Insured']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_SnLLimited_Insured'] = "Yes" if int(STC_Data['STIC_SnLLimited_Insured']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_SnLComprehensive_Insured'] = "Yes" if int(STC_Data['STIC_SnLComprehensive_Insured']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_RnS_Insured'] = "Yes" if int(STC_Data['STIC_RnS_Insured']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_SDC_Insured'] = "Monthly" if int(STC_Data['STIC_SDC_Insured']) == 1 else "Quarterly"  
            form['Short_Term_Insurance_Commerical_BuildCombined_Limit'] = STC_Data['STIC_BuildCombined_Limit']  
            form['Short_Term_Insurance_Commerical_BuildCombined_ItemNumber'] = STC_Data['STIC_BuildCombined_ItemNumber']  
            form['Short_Term_Insurance_Commerical_BuildCombined_Premium'] = STC_Data['STIC_BuildCombined_Premium']  
            form['Short_Term_Insurance_Commerical_BuildCombined_PremNumber'] = STC_Data['STIC_BuildCombined_PremNumber']  
            form['Short_Term_Insurance_Commerical_BuildCombined_ColumnRef'] = STC_Data['STIC_BuildCombined_ColumnRef']  
            form['Short_Term_Insurance_Commerical_BuildCombined_Sum'] = STC_Data['STIC_BuildCombined_Sum']  
            form['Short_Term_Insurance_Commerical_BuildCombined_Construct'] = STC_Data['STIC_BuildCombined_Construct']  
            form['Short_Term_Insurance_Commerical_BuildCombined_Desc'] = STC_Data['STIC_BuildCombined_Desc']  
            form['Short_Term_Insurance_Commerical_Extensions_RnS'] = "Yes" if int(STC_Data['STIC_Extensions_RnS']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_Extensions_Geysers'] = "Yes" if int(STC_Data['STIC_Extensions_Geysers']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_Extensions_SnL'] = "Yes" if int(STC_Data['STIC_Extensions_SnL']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_Extensions_PoA'] = "Yes" if int(STC_Data['STIC_Extensions_PoA']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_Extensions_IorE'] = "Yes" if int(STC_Data['STIC_Extensions_IorE']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_OC_Limit'] = STC_Data['STIC_OC_Limit']  
            form['Short_Term_Insurance_Commerical_OC_ItemNumber'] = STC_Data['STIC_OC_ItemNumber']  
            form['Short_Term_Insurance_Commerical_OC_Premium'] = STC_Data['STIC_OC_Premium']  
            form['Short_Term_Insurance_Commerical_OC_PremNumber'] = STC_Data['STIC_OC_PremNumber']  
            form['Short_Term_Insurance_Commerical_OC_PremisesNum'] = STC_Data['STIC_OC_PremisesNum']  
            form['Short_Term_Insurance_Commerical_OC_Sum'] = STC_Data['STIC_OC_Sum']  
            form['Short_Term_Insurance_Commerical_OC_Construct'] = "Yes" if int(STC_Data['STIC_OC_Construct']) else "No"  
            form['Short_Term_Insurance_Commerical_OC_Desc'] = STC_Data['STIC_OC_Desc']  
            form['Short_Term_Insurance_Commerical_OC_Doc_Sum'] = STC_Data['STIC_OC_Doc_Sum']  
            form['Short_Term_Insurance_Commerical_OC_Doc_Premium'] = STC_Data['STIC_OC_Doc_Premium']  
            form['Short_Term_Insurance_Commerical_OC_LLDoc_Sum'] = STC_Data['STIC_OC_LLDoc_Sum']  
            form['Short_Term_Insurance_Commerical_OC_LLDoc_Premium'] = STC_Data['STIC_OC_LLDoc_Premium']  
            form['Short_Term_Insurance_Commerical_OC_RnS_Sum'] = STC_Data['STIC_OC_RnS_Sum']  
            form['Short_Term_Insurance_Commerical_OC_RnS_Premium'] = STC_Data['STIC_OC_RnS_Premium']  
            form['Short_Term_Insurance_Commerical_OC_TheftF_Sum'] = STC_Data['STIC_OC_TheftF_Sum']  
            form['Short_Term_Insurance_Commerical_OC_TheftF_Premium'] = STC_Data['STIC_OC_TheftF_Premium']  
            form['Short_Term_Insurance_Commerical_OC_Theft_Sum'] = STC_Data['STIC_OC_Theft_Sum']  
            form['Short_Term_Insurance_Commerical_OC_Theft_Premium'] = STC_Data['STIC_OC_Theft_Premium']  
            form['Short_Term_Insurance_Commerical_OC_Total_Premium'] = STC_Data['STIC_OC_Total_Premium']  
            form['Short_Term_Insurance_Commerical_BusInt_Limit'] = STC_Data['STIC_BusInt_Limit']  
            form['Short_Term_Insurance_Commerical_BusInt_Premium'] = STC_Data['STIC_BusInt_Premium']  
            form['Short_Term_Insurance_Commerical_BusInt_ItemNumber'] = STC_Data['STIC_BusInt_ItemNumber']  
            form['Short_Term_Insurance_Commerical_BusInt_PremNumber'] = STC_Data['STIC_BusInt_PremNumber']  
            form['Short_Term_Insurance_Commerical_BusInt_Basis'] = STC_Data['STIC_BusInt_Basis']  
            form['Short_Term_Insurance_Commerical_BusInt_Indemnity'] = STC_Data['STIC_BusInt_Indemnity']  
            form['Short_Term_Insurance_Commerical_BusInt_Gross_Profit'] = "Yes" if int(STC_Data['STIC_BusInt_Type1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Gross_rentals'] = "Yes" if int(STC_Data['STIC_BusInt_Type2']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Revenue'] = "Yes" if int(STC_Data['STIC_BusInt_Type3']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Additional_increase_in_cost_of_working'] = "Yes" if int(STC_Data['STIC_BusInt_Type4']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Wages'] = "Yes" if int(STC_Data['STIC_BusInt_Type5']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Fines and penalties'] = "Yes" if int(STC_Data['STIC_BusInt_Type6']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Standing charges'] = "Yes" if int(STC_Data['STIC_BusInt_Type7']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Extensions'] = "Yes" if int(STC_Data['STIC_BusInt_Type8']) == 1 else "No"      
            form['Short_Term_Insurance_Commerical_BusInt_Sum Insured'] = STC_Data['STIC_BusInt_Type9']  
            form['Short_Term_Insurance_Commerical_BusInt_Sum Insured Value'] = STC_Data['STIC_BusInt_Type9_1']  
            form['Short_Term_Insurance_Commerical_BusInt_Wages Value'] = STC_Data['STIC_BusInt_Type10']  
            form['Short_Term_Insurance_Commerical_BusInt_Specified suppliers'] = "Yes" if int(STC_Data['STIC_BusInt_Type11']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Specified suppliers value'] = STC_Data['STIC_BusInt_Type11_1']  
            form['Short_Term_Insurance_Commerical_BusInt_Supplier'] = STC_Data['STIC_BusInt_Type12']  
            form['Short_Term_Insurance_Commerical_BusInt_Premises'] = STC_Data['STIC_BusInt_Type13']  
            form['Short_Term_Insurance_Commerical_BusInt_Unspecified suppliers'] = "Yes" if int(STC_Data['STIC_BusInt_Type14']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Unspecified suppliers value'] = STC_Data['STIC_BusInt_Type14_1']  
            form['Short_Term_Insurance_Commerical_BusInt_Prevention of access'] = "Yes" if int(STC_Data['STIC_BusInt_Type15']) == 1 else "No" 
            form['Short_Term_Insurance_Commerical_BusInt_Prevention of access value'] = STC_Data['STIC_BusInt_Type15_1']  
            form['Short_Term_Insurance_Commerical_BusInt_clients'] = "Yes" if int(STC_Data['STIC_BusInt_Type16']) == 1 else 0
            form['Short_Term_Insurance_Commerical_BusInt_clients value'] = STC_Data['STIC_BusInt_Type16_1']  
            form['Short_Term_Insurance_Commerical_BusInt_clients client'] = STC_Data['STIC_BusInt_Type17']  
            form['Short_Term_Insurance_Commerical_BusInt_clients Premises'] = STC_Data['STIC_BusInt_Type18']  
            form['Short_Term_Insurance_Commerical_BusInt_Public utilities Insured perils'] = "Yes" if (STC_Data['STIC_BusInt_Type19']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Public utilities Insured perils value'] = STC_Data['STIC_BusInt_Type19_1']  
            form['Short_Term_Insurance_Commerical_BusInt_Public utilities Extended cover'] = "Yes" if (STC_Data['STIC_BusInt_Type20']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Public utilities Extended cover value'] = STC_Data['STIC_BusInt_Type20_1']  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Insured perils'] ="Yes" if (STC_Data['STIC_BusInt_Type21']) == 1 else "No" 
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Insured perils value'] = STC_Data['STIC_BusInt_Type21_1']  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Extended cover'] = "Yes" if (STC_Data['STIC_BusInt_Type22']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Extended cover value'] = STC_Data['STIC_BusInt_Type22_1']  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Accidental cover'] = "Yes" if (STC_Data['STIC_BusInt_Type23']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Accidental cover value'] = STC_Data['STIC_BusInt_Type23_1']  
            form['Short_Term_Insurance_Commerical_BusInt_TotalPremium'] = STC_Data['STIC_BusInt_TotalPremium']  
            form['Short_Term_Insurance_Commerical_BusInt_Comments'] = STC_Data['STIC_BusInt_Comments']  
            form['Short_Term_Insurance_Commerical_BusInt_PremisesNumber'] = STC_Data['STIC_BusInt_PremisesNumber']  
            form['Short_Term_Insurance_Commerical_BusInt_Basis'] = STC_Data['STIC_BusInt_Basis']  
            form['Short_Term_Insurance_Commerical_BusInt_IndemPer'] = STC_Data['STIC_BusInt_IndemPer']  
            form['Short_Term_Insurance_Commerical_BusInt_Suppliers'] = STC_Data['STIC_BusInt_Suppliers']  
            form['Short_Term_Insurance_Commerical_BusInt2_Gross_Profit'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Gross_rentals'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_2']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Revenue'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_3']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Additional_increase_in_cost_of_working'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_4']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Wages'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_5']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Fines and penalties'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_6']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Standing charges'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_7']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Extensions'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_8']) == 1 else "No"      
            form['Short_Term_Insurance_Commerical_BusInt2_Sum Insured'] = STC_Data['STIC_BusInt_Type2_9']  
            form['Short_Term_Insurance_Commerical_BusInt2_Sum Insured Value'] = STC_Data['STIC_BusInt_Type2_9_1']  
            form['Short_Term_Insurance_Commerical_BusInt2_Wages Value'] = STC_Data['STIC_BusInt_Type2_10']  
            form['Short_Term_Insurance_Commerical_BusInt2_Specified suppliers'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_11']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Specified suppliers value'] = STC_Data['STIC_BusInt_Type2_11_1']  
            form['Short_Term_Insurance_Commerical_BusInt2_Supplier'] = STC_Data['STIC_BusInt_Type2_12']  
            form['Short_Term_Insurance_Commerical_BusInt2_Premises'] = STC_Data['STIC_BusInt_Type2_13']  
            form['Short_Term_Insurance_Commerical_BusInt2_Unspecified suppliers'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_14']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Unspecified suppliers value'] = STC_Data['STIC_BusInt_Type2_14_1']  
            form['Short_Term_Insurance_Commerical_BusInt2_Prevention of access'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_15']) == 1 else "No" 
            form['Short_Term_Insurance_Commerical_BusInt2_Prevention of access value'] = STC_Data['STIC_BusInt_Type2_15_1']  
            form['Short_Term_Insurance_Commerical_BusInt2_clients'] = "Yes" if int(STC_Data['STIC_BusInt_Type2_16']) == 1 else 0
            form['Short_Term_Insurance_Commerical_BusInt2_clients value'] = STC_Data['STIC_BusInt_Type2_16_1']  
            form['Short_Term_Insurance_Commerical_BusInt2_clients client'] = STC_Data['STIC_BusInt_Type2_17']  
            form['Short_Term_Insurance_Commerical_BusInt2_clients Premises'] = STC_Data['STIC_BusInt_Type2_18']  
            form['Short_Term_Insurance_Commerical_BusInt2_Public utilities Insured perils'] = "Yes" if (STC_Data['STIC_BusInt_Type2_19']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Public utilities Insured perils value'] = STC_Data['STIC_BusInt_Type2_19_1']  
            form['Short_Term_Insurance_Commerical_BusInt2_Public utilities Extended cover'] = "Yes" if (STC_Data['STIC_BusInt_Type2_20']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Public utilities Extended cover value'] = STC_Data['STIC_BusInt_Type2_20_1']  
            form['Short_Term_Insurance_Commerical_BusInt2_Public telecommunications Insured perils'] ="Yes" if (STC_Data['STIC_BusInt_Type2_21']) == 1 else "No" 
            form['Short_Term_Insurance_Commerical_BusInt2_Public telecommunications Insured perils value'] = STC_Data['STIC_BusInt_Type2_21_1']  
            form['Short_Term_Insurance_Commerical_BusInt2_Public telecommunications Extended cover'] = "Yes" if (STC_Data['STIC_BusInt_Type2_22']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Public telecommunications Extended cover value'] = STC_Data['STIC_BusInt_Type2_22_1']  
            form['Short_Term_Insurance_Commerical_BusInt2_Public telecommunications Accidental cover'] = "Yes" if (STC_Data['STIC_BusInt_Type2_23']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_BusInt2_Public telecommunications Accidental cover value'] = STC_Data['STIC_BusInt_Type2_23_1']  
            form['Short_Term_Insurance_Commerical_BusInt2_TotalPremium'] = STC_Data['STIC_BusInt_TotalPremium']  
            form['Short_Term_Insurance_Commerical_BusInt2_Comments'] = STC_Data['STIC_BusInt_Comments']  
            form['Short_Term_Insurance_Commerical_Sec5_Limit'] = STC_Data['STIC_Sec5_Limit']  
            form['Short_Term_Insurance_Commerical_Sec5_Premium'] = STC_Data['STIC_Sec5_Premium']  
            form['Short_Term_Insurance_Commerical_Sec5_ItemNumber'] = STC_Data['STIC_Sec5_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec5_PremNumber'] = STC_Data['STIC_Sec5_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec5_1'] = STC_Data['STIC_Sec5_1']  
            form['Short_Term_Insurance_Commerical_Sec5_2'] = STC_Data['STIC_Sec5_2']  
            form['Short_Term_Insurance_Commerical_Sec5_riot and strike'] = "Yes" if int(STC_Data['STIC_Sec5_Extension_1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec5_Duplicate records'] = "Yes" if int(STC_Data['STIC_Sec5_Extension_2']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec5_Protection'] = "Yes" if int(STC_Data['STIC_Sec5_Extension_3']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Transit'] = "Yes" if int(STC_Data['STIC_Sec5_Extension_4']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec5_Declaration'] = "Yes" if int(STC_Data['STIC_Sec5_Extension_5']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec5_AnnualPremium'] = STC_Data['STIC_Sec5_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec5_Comments'] = STC_Data['STIC_Sec5_Comments']  
            form['Short_Term_Insurance_Commerical_Sec6_Limit'] = STC_Data['STIC_Sec6_Limit']  
            form['Short_Term_Insurance_Commerical_Sec6_Premium'] = STC_Data['STIC_Sec6_Premium']  
            form['Short_Term_Insurance_Commerical_Sec6_ItemNumber'] = STC_Data['STIC_Sec6_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec6_PremNumber'] = STC_Data['STIC_Sec6_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec6_1'] = STC_Data['STIC_Sec6_1']  
            form['Short_Term_Insurance_Commerical_Sec6_2'] = STC_Data['STIC_Sec6_2']  
            form['Short_Term_Insurance_Commerical_Sec6_3'] = STC_Data['STIC_Sec6_3']  
            form['Short_Term_Insurance_Commerical_Sec6_4'] = STC_Data['STIC_Sec6_4']  
            form['Short_Term_Insurance_Commerical_Sec6_5'] = STC_Data['STIC_Sec6_5']  
            form['Short_Term_Insurance_Commerical_Sec6_6'] = STC_Data['STIC_Sec6_6']  
            form['Short_Term_Insurance_Commerical_Sec6_Comments'] = STC_Data['STIC_Sec6_Comments']  
            form['Short_Term_Insurance_Commerical_Sec7_Limit'] = STC_Data['STIC_Sec7_Limit']  
            form['Short_Term_Insurance_Commerical_Sec7_Premium'] = STC_Data['STIC_Sec7_Premium']  
            form['Short_Term_Insurance_Commerical_Sec7_ItemNumber'] = STC_Data['STIC_Sec7_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec7_PremNumber'] = STC_Data['STIC_Sec7_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec7_1'] = STC_Data['STIC_Sec7_1']  
            form['Short_Term_Insurance_Commerical_Sec7_2'] = STC_Data['STIC_Sec7_2']  
            form['Short_Term_Insurance_Commerical_Sec7_3'] = STC_Data['STIC_Sec7_3']  
            form['Short_Term_Insurance_Commerical_Sec7_4'] = STC_Data['STIC_Sec7_4']  
            form['Short_Term_Insurance_Commerical_Sec7_5'] = STC_Data['STIC_Sec7_5']  
            form['Short_Term_Insurance_Commerical_Sec7_6'] = STC_Data['STIC_Sec7_6']  
            form['Short_Term_Insurance_Commerical_Sec7_7'] = STC_Data['STIC_Sec7_7']  
            form['Short_Term_Insurance_Commerical_Sec7_8'] = STC_Data['STIC_Sec7_8']  
            form['Short_Term_Insurance_Commerical_Sec7_9'] = STC_Data['STIC_Sec7_9']  
            form['Short_Term_Insurance_Commerical_Sec7_Petrol_Attendants_Included1'] = "Yes" if int(STC_Data['STIC_Sec7_Extension_Included1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec7_Petrol_Attendants_Limit1'] = STC_Data['STIC_Sec7_Extension_Limit1']  
            form['Short_Term_Insurance_Commerical_Sec7_Petrol_Attendants_Premium1'] = STC_Data['STIC_Sec7_Extension_Premium1']  
            form['Short_Term_Insurance_Commerical_Sec7_Collectors_Included2'] = "Yes" if int(STC_Data['STIC_Sec7_Extension_Included2']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec7_Collectors_Limit2'] = STC_Data['STIC_Sec7_Extension_Limit2']  
            form['Short_Term_Insurance_Commerical_Sec7_Collectors_Premium2'] = STC_Data['STIC_Sec7_Extension_Premium2']  
            form['Short_Term_Insurance_Commerical_Sec7_Petrol_Attendants1_Included3'] = "Yes" if int(STC_Data['STIC_Sec7_Extension_Included3']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec7_Petrol_Attendants1_Limit3'] = STC_Data['STIC_Sec7_Extension_Limit3']  
            form['Short_Term_Insurance_Commerical_Sec7_Petrol_Attendants1_Premium3'] = STC_Data['STIC_Sec7_Extension_Premium3']  
            form['Short_Term_Insurance_Commerical_Sec7_AnnualPremium'] = STC_Data['STIC_Sec7_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec7_Comments'] = STC_Data['STIC_Sec7_Comments']  
            form['Short_Term_Insurance_Commerical_Sec8_Limit'] = STC_Data['STIC_Sec8_Limit']  
            form['Short_Term_Insurance_Commerical_Sec8_Premium'] = STC_Data['STIC_Sec8_Premium']  
            form['Short_Term_Insurance_Commerical_Sec8_ItemNumber'] = STC_Data['STIC_Sec8_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec8_PremNumber'] = STC_Data['STIC_Sec8_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec8_1'] = STC_Data['STIC_Sec8_1']  
            form['Short_Term_Insurance_Commerical_Sec8_2'] = STC_Data['STIC_Sec8_2']  
            form['Short_Term_Insurance_Commerical_Sec8_Special_replacement_Included1'] = "Yes" if int(STC_Data['STIC_Sec8_Extension_Included1']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_Sec8_Riot_and_strike_Included2'] = "Yes" if int(STC_Data['STIC_Sec8_Extension_Included2']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_Sec8_AnnualPremium'] = STC_Data['STIC_Sec8_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec8_Comments'] = STC_Data['STIC_Sec8_Comments']  
            form['Short_Term_Insurance_Commerical_Sec9_Limit'] = STC_Data['STIC_Sec9_Limit']  
            form['Short_Term_Insurance_Commerical_Sec9_Premium'] = STC_Data['STIC_Sec9_Premium']  
            form['Short_Term_Insurance_Commerical_Sec9_ItemNumber'] = STC_Data['STIC_Sec9_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec9_PremNumber'] = STC_Data['STIC_Sec9_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec9_1'] = STC_Data['STIC_Sec9_1']  
            form['Short_Term_Insurance_Commerical_Sec9_2'] = STC_Data['STIC_Sec9_2']  
            form['Short_Term_Insurance_Commerical_Sec9_3'] = STC_Data['STIC_Sec9_3']  
            form['Short_Term_Insurance_Commerical_Sec9_4'] = STC_Data['STIC_Sec9_4']  
            form['Short_Term_Insurance_Commerical_Sec9_5'] = STC_Data['STIC_Sec9_5']  
            form['Short_Term_Insurance_Commerical_Sec9_6'] = STC_Data['STIC_Sec9_6']  
            form['Short_Term_Insurance_Commerical_Sec9_Reinstatement_of_sum_insured_Included1'] = "Yes" if int(STC_Data['STIC_Sec9_Extension_Included1']) == 1 else 0   
            form['Short_Term_Insurance_Commerical_Sec9_Reinstatement_of_sum_insured_Limit1'] = STC_Data['STIC_Sec9_Extension_Limit1']  
            form['Short_Term_Insurance_Commerical_Sec9_Reinstatement_of_sum_insured_Premium1'] = STC_Data['STIC_Sec9_Extension_Premium1']  
            form['Short_Term_Insurance_Commerical_Sec9_Computer_losses_Included2'] = "Yes" if int(STC_Data['STIC_Sec9_Extension_Included2']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_Sec9_Computer_losses_Limit2'] = STC_Data['STIC_Sec9_Extension_Limit2']  
            form['Short_Term_Insurance_Commerical_Sec9_Computer_losses_Premium2'] = STC_Data['STIC_Sec9_Extension_Premium2']  
            form['Short_Term_Insurance_Commerical_Sec9_Supersedded_insurance_Included3'] = "Yes" if int(STC_Data['STIC_Sec9_Extension_Included3']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_Sec9_Supersedded_insurance_Limit3'] = STC_Data['STIC_Sec9_Extension_Limit3']  
            form['Short_Term_Insurance_Commerical_Sec9_Supersedded_insurance_Premium3'] = STC_Data['STIC_Sec9_Extension_Premium3']  
            form['Short_Term_Insurance_Commerical_Sec9_Retroactive_cover_Included4'] = "Yes" if int(STC_Data['STIC_Sec9_Extension_Included4']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_Sec9_Retroactive_cover_Limit4'] = STC_Data['STIC_Sec9_Extension_Limit4']  
            form['Short_Term_Insurance_Commerical_Sec9_Retroactive_cover_Premium4'] = STC_Data['STIC_Sec9_Extension_Premium4']  
            form['Short_Term_Insurance_Commerical_Sec9_Losses_24_36_months_Included5'] = "Yes" if int(STC_Data['STIC_Sec9_Extension_Included5']) == 1 else 0   
            form['Short_Term_Insurance_Commerical_Sec9_Losses_24_36_months_Limit5'] = STC_Data['STIC_Sec9_Extension_Limit5']  
            form['Short_Term_Insurance_Commerical_Sec9_Losses_24_36_months_Premium5'] = STC_Data['STIC_Sec9_Extension_Premium5']  
            form['Short_Term_Insurance_Commerical_Sec9_Losses_24_months_audit_Included6'] = "Yes" if int(STC_Data['STIC_Sec9_Extension_Included6']) == 1 else 0  
            form['Short_Term_Insurance_Commerical_Sec9_Losses_24_months_audit_Limit6'] = STC_Data['STIC_Sec9_Extension_Limit6']  
            form['Short_Term_Insurance_Commerical_Sec9_Losses_24_months_audit_Premium6'] = STC_Data['STIC_Sec9_Extension_Premium6']  
            form['Short_Term_Insurance_Commerical_Sec9_AnnualPremium'] = STC_Data['STIC_Sec9_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec9_Comments'] = STC_Data['STIC_Sec9_Comments']  
            form['Short_Term_Insurance_Commerical_Sec10_Limit'] = STC_Data['STIC_Sec10_Limit']  
            form['Short_Term_Insurance_Commerical_Sec10_Premium'] = STC_Data['STIC_Sec10_Premium']  
            form['Short_Term_Insurance_Commerical_Sec10_ItemNumber'] = STC_Data['STIC_Sec10_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec10_PremNumber'] = STC_Data['STIC_Sec10_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec10_1'] = STC_Data['STIC_Sec10_1']  
            form['Short_Term_Insurance_Commerical_Sec10_2'] = STC_Data['STIC_Sec10_2']  
            form['Short_Term_Insurance_Commerical_Sec10_3'] = STC_Data['STIC_Sec10_3']  
            form['Short_Term_Insurance_Commerical_Sec10_4'] = STC_Data['STIC_Sec10_4']  
            form['Short_Term_Insurance_Commerical_Sec10_5'] = STC_Data['STIC_Sec10_5']  
            form['Short_Term_Insurance_Commerical_Sec10_6'] = STC_Data['STIC_Sec10_6']  
            form['Short_Term_Insurance_Commerical_Sec10_7'] = STC_Data['STIC_Sec10_7']  
            form['Short_Term_Insurance_Commerical_Sec10_Riot_and_Strike_Included1'] = "Yes" if int(STC_Data['STIC_Sec10_Extension_Included1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec10_Riot_and_Strike_Limit1'] = STC_Data['STIC_Sec10_Extension_Limit1']  
            form['Short_Term_Insurance_Commerical_Sec10_Riot_and_Strike_Premium1'] = STC_Data['STIC_Sec10_Extension_Premium1']  
            form['Short_Term_Insurance_Commerical_Sec10_Debris_removal_Included2'] = "Yes" if int(STC_Data['STIC_Sec10_Extension_Included2']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec10_Debris_removal_Limit2'] = STC_Data['STIC_Sec10_Extension_Limit2']  
            form['Short_Term_Insurance_Commerical_Sec10_Debris_removal_Premium2'] = STC_Data['STIC_Sec10_Extension_Premium2']  
            form['Short_Term_Insurance_Commerical_Sec10_Fire_extinguishing_charges_Included3'] = "Yes" if int(STC_Data['STIC_Sec10_Extension_Included3']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec10_Fire_extinguishing_charges_Limit3'] = STC_Data['STIC_Sec10_Extension_Limit3']  
            form['Short_Term_Insurance_Commerical_Sec10_Fire_extinguishing_charges_Premium3'] = STC_Data['STIC_Sec10_Extension_Premium3']  
            form['Short_Term_Insurance_Commerical_Sec10_Declaration_conditions_frequency_Included4'] = "Yes" if int(STC_Data['STIC_Sec10_Extension_Included4']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec10_Declaration_conditions_frequency_Limit4'] = STC_Data['STIC_Sec10_Extension_Limit4']  
            form['Short_Term_Insurance_Commerical_Sec10_Declaration_conditions_frequency_Premium4'] = STC_Data['STIC_Sec10_Extension_Premium4']  
            form['Short_Term_Insurance_Commerical_Sec10_AnnualPremium'] = STC_Data['STIC_Sec10_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec10_Comments'] = STC_Data['STIC_Sec10_Comments']  
            form['Short_Term_Insurance_Commerical_Sec11_Limit'] = STC_Data['STIC_Sec11_Limit']  
            form['Short_Term_Insurance_Commerical_Sec11_Premium'] = STC_Data['STIC_Sec11_Premium']  
            form['Short_Term_Insurance_Commerical_Sec11_ItemNumber'] = STC_Data['STIC_Sec11_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec11_PremNumber'] = STC_Data['STIC_Sec11_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec11_Riot_and_strike_1'] = "Yes" if int(STC_Data['STIC_Sec11_1']) == 1 else "No" 
            form['Short_Term_Insurance_Commerical_Sec11_2'] = STC_Data['STIC_Sec11_2']  
            form['Short_Term_Insurance_Commerical_Sec11_3'] = STC_Data['STIC_Sec11_3']  
            form['Short_Term_Insurance_Commerical_Sec11_4'] = STC_Data['STIC_Sec11_4']  
            form['Short_Term_Insurance_Commerical_Sec11_5'] = STC_Data['STIC_Sec11_5']  
            form['Short_Term_Insurance_Commerical_Sec11_6'] = STC_Data['STIC_Sec11_6']  
            form['Short_Term_Insurance_Commerical_Sec11_7'] = STC_Data['STIC_Sec11_7']  
            form['Short_Term_Insurance_Commerical_Sec11_8'] = STC_Data['STIC_Sec11_8']  
            form['Short_Term_Insurance_Commerical_Sec11_9'] = STC_Data['STIC_Sec11_9']  
            form['Short_Term_Insurance_Commerical_Sec11_10'] = STC_Data['STIC_Sec11_10']  
            form['Short_Term_Insurance_Commerical_Sec11_AnnualPremium'] = STC_Data['STIC_Sec11_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec11_Comments'] = STC_Data['STIC_Sec11_Comments']  
            form['Short_Term_Insurance_Commerical_Sec12_Limit'] = STC_Data['STIC_Sec12_Limit']  
            form['Short_Term_Insurance_Commerical_Sec12_Premium'] = STC_Data['STIC_Sec12_Premium']  
            form['Short_Term_Insurance_Commerical_Sec12_ItemNumber'] = STC_Data['STIC_Sec12_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec12_PremNumber'] = STC_Data['STIC_Sec12_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec12_1'] = STC_Data['STIC_Sec12_1']  
            form['Short_Term_Insurance_Commerical_Sec12_2'] = STC_Data['STIC_Sec12_2']  
            form['Short_Term_Insurance_Commerical_Sec12_3'] = STC_Data['STIC_Sec12_3']  
            form['Short_Term_Insurance_Commerical_Sec12_4'] = STC_Data['STIC_Sec12_4']  
            form['Short_Term_Insurance_Commerical_Sec12_5'] = STC_Data['STIC_Sec12_5']  
            form['Short_Term_Insurance_Commerical_Sec12_6'] = STC_Data['STIC_Sec12_6']  
            form['Short_Term_Insurance_Commerical_Sec12_Leakage_of_oil_Included1'] = "Yes" if int(STC_Data['STIC_Sec12_Extension_Included1']) == 1 else "No"   
            form['Short_Term_Insurance_Commerical_Sec12_Average_Included2'] = "Yes" if int(STC_Data['STIC_Sec12_Extension_Included2']) == 1 else "No"   
            form['Short_Term_Insurance_Commerical_Sec12_Excluded_Property_Included3'] = "Yes" if int(STC_Data['STIC_Sec12_Extension_Included3']) == 1 else "No"   
            form['Short_Term_Insurance_Commerical_Sec12_Reinstatement_Included4'] = "Yes" if int(STC_Data['STIC_Sec12_Extension_Included4']) == 1 else "No"   
            form['Short_Term_Insurance_Commerical_Sec12_First_loss_average_Included5'] = "Yes" if int(STC_Data['STIC_Sec12_Extension_Included5']) == 1 else "No"   
            form['Short_Term_Insurance_Commerical_Sec12_AnnualPremium'] = STC_Data['STIC_Sec12_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec12_Comments'] = STC_Data['STIC_Sec12_Comments']  
            form['Short_Term_Insurance_Commerical_Sec13_Limit'] = STC_Data['STIC_Sec13_Limit']  
            form['Short_Term_Insurance_Commerical_Sec13_Premium'] = STC_Data['STIC_Sec13_Premium']  
            form['Short_Term_Insurance_Commerical_Sec13_ItemNumber'] = STC_Data['STIC_Sec13_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec13_PremNumber'] = STC_Data['STIC_Sec13_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec13_1'] = STC_Data['STIC_Sec13_1']  
            form['Short_Term_Insurance_Commerical_Sec13_2'] = STC_Data['STIC_Sec13_2']  
            form['Short_Term_Insurance_Commerical_Sec13_3'] = STC_Data['STIC_Sec13_3']  
            form['Short_Term_Insurance_Commerical_Sec13_4'] = STC_Data['STIC_Sec13_4']  
            form['Short_Term_Insurance_Commerical_Sec13_5'] = STC_Data['STIC_Sec13_5']  
            form['Short_Term_Insurance_Commerical_Sec13_6'] = STC_Data['STIC_Sec13_6']  
            form['Short_Term_Insurance_Commerical_Sec13_7'] = "Yes" if int(STC_Data['STIC_Sec13_7']) == 1 else "No"   
            form['Short_Term_Insurance_Commerical_Sec13_8'] = STC_Data['STIC_Sec13_8']  
            form['Short_Term_Insurance_Commerical_Sec13_9'] = STC_Data['STIC_Sec13_9']  
            form['Short_Term_Insurance_Commerical_Sec13_10'] = STC_Data['STIC_Sec13_10']  
            form['Short_Term_Insurance_Commerical_Sec13_11'] = STC_Data['STIC_Sec13_11']  
            form['Short_Term_Insurance_Commerical_Sec13_12'] = "Yes" if int(STC_Data['STIC_Sec13_12']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec13_13'] = STC_Data['STIC_Sec13_13']  
            form['Short_Term_Insurance_Commerical_Sec13_14'] = STC_Data['STIC_Sec13_14']  
            form['Short_Term_Insurance_Commerical_Sec13_15'] = STC_Data['STIC_Sec13_15']  
            form['Short_Term_Insurance_Commerical_Sec13_16'] = "Yes" if int(STC_Data['STIC_Sec13_16']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec13_17'] = STC_Data['STIC_Sec13_17']  
            form['Short_Term_Insurance_Commerical_Sec13_18'] = STC_Data['STIC_Sec13_18']  
            form['Short_Term_Insurance_Commerical_Sec13_19'] = STC_Data['STIC_Sec13_19']  
            form['Short_Term_Insurance_Commerical_Sec13_20'] = STC_Data['STIC_Sec13_20']  
            form['Short_Term_Insurance_Commerical_Sec13_21'] = STC_Data['STIC_Sec13_21']  
            form['Short_Term_Insurance_Commerical_Sec13_22'] = STC_Data['STIC_Sec13_22']  
            form['Short_Term_Insurance_Commerical_Sec13_23'] = STC_Data['STIC_Sec13_23']  
            form['Short_Term_Insurance_Commerical_Sec13_24'] = "Yes" if int(STC_Data['STIC_Sec13_24']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec13_25'] = STC_Data['STIC_Sec13_25']  
            form['Short_Term_Insurance_Commerical_Sec13_26'] = STC_Data['STIC_Sec13_26']  
            form['Short_Term_Insurance_Commerical_Sec13_27'] = STC_Data['STIC_Sec13_27']  
            form['Short_Term_Insurance_Commerical_Sec13_28'] = "Yes" if int(STC_Data['STIC_Sec13_28']) == 1 else "No" 
            form['Short_Term_Insurance_Commerical_Sec13_29'] = STC_Data['STIC_Sec13_29']  
            form['Short_Term_Insurance_Commerical_Sec13_30'] = "Yes" if int(STC_Data['STIC_Sec13_30']) == 1 else "No" 
            form['Short_Term_Insurance_Commerical_Sec13_31'] = "Yes" if int(STC_Data['STIC_Sec13_31']) == 1 else "No"   
            form['Short_Term_Insurance_Commerical_Sec13_32'] = "Yes" if int(STC_Data['STIC_Sec13_32']) == 1 else "No" 
            form['Short_Term_Insurance_Commerical_Sec13_AnnualPremium'] = STC_Data['STIC_Sec13_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec13_Comments'] = STC_Data['STIC_Sec13_Comments']  
            form['Short_Term_Insurance_Commerical_Sec14_Limit'] = STC_Data['STIC_Sec14_Limit']  
            form['Short_Term_Insurance_Commerical_Sec14_Premium'] = STC_Data['STIC_Sec14_Premium']  
            form['Short_Term_Insurance_Commerical_Sec14_ItemNumber'] = STC_Data['STIC_Sec14_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec14_PremNumber'] = STC_Data['STIC_Sec14_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec14_1'] = STC_Data['STIC_Sec14_1']  
            form['Short_Term_Insurance_Commerical_Sec14_2'] = STC_Data['STIC_Sec14_2']  
            form['Short_Term_Insurance_Commerical_Sec14_3'] = STC_Data['STIC_Sec14_3']  
            form['Short_Term_Insurance_Commerical_Sec14_4'] = STC_Data['STIC_Sec14_4']  
            form['Short_Term_Insurance_Commerical_Sec14_5'] = STC_Data['STIC_Sec14_5']  
            form['Short_Term_Insurance_Commerical_Sec14_6'] = STC_Data['STIC_Sec14_6']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended1'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted1'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount1'] = STC_Data['STIC_Sec14_CoverAmount1']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended12'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended12']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted2'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted2']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount2'] = STC_Data['STIC_Sec14_CoverAmount2']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended3'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended3']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted3'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted3']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount3'] = STC_Data['STIC_Sec14_CoverAmount3']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended4'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended4']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted4'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted4']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount4'] = STC_Data['STIC_Sec14_CoverAmount4']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended5'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended5']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted5'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted5']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount5'] = STC_Data['STIC_Sec14_CoverAmount5']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended6'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended6']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted6'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted6']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount6'] = STC_Data['STIC_Sec14_CoverAmount6']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended7'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended7']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted7'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted7']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount7'] = STC_Data['STIC_Sec14_CoverAmount7']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended8'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended8']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted8'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted8']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount8'] = STC_Data['STIC_Sec14_CoverAmount8']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended9'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended9']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted9'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted9']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount9'] = STC_Data['STIC_Sec14_CoverAmount9']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended10'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended10']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted10'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted10']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount10'] = STC_Data['STIC_Sec14_CoverAmount10']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended11'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended11']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted11'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted11']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount11'] = STC_Data['STIC_Sec14_CoverAmount11']  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended12'] = "Yes" if int(STC_Data['STIC_Sec14_Recommended12']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted12'] = "Yes" if int(STC_Data['STIC_Sec14_Accepted12']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount12'] = STC_Data['STIC_Sec14_CoverAmount12']  
            form['Short_Term_Insurance_Commerical_Sec15_Limit'] = STC_Data['STIC_Sec15_Limit']  
            form['Short_Term_Insurance_Commerical_Sec15_Premium'] = STC_Data['STIC_Sec15_Premium']  
            form['Short_Term_Insurance_Commerical_Sec15_ItemNumber'] = STC_Data['STIC_Sec15_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec15_PremNumber'] = STC_Data['STIC_Sec15_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec15_1'] = STC_Data['STIC_Sec15_1']  
            form['Short_Term_Insurance_Commerical_Sec15_1_1'] = STC_Data['STIC_Sec15_1_1']  
            form['Short_Term_Insurance_Commerical_Sec15_2'] = STC_Data['STIC_Sec15_2']  
            form['Short_Term_Insurance_Commerical_Sec15_2_1'] = STC_Data['STIC_Sec15_2_1']  
            form['Short_Term_Insurance_Commerical_Sec15_3'] = STC_Data['STIC_Sec15_3']  
            form['Short_Term_Insurance_Commerical_Sec15_3_1'] = STC_Data['STIC_Sec15_3_1']  
            form['Short_Term_Insurance_Commerical_Sec15_AnnualPremium'] = STC_Data['STIC_Sec15_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec15_Comments'] = STC_Data['STIC_Sec15_Comments']  
            form['Short_Term_Insurance_Commerical_Sec16_Limit'] = STC_Data['STIC_Sec16_Limit']  
            form['Short_Term_Insurance_Commerical_Sec16_Premium'] = STC_Data['STIC_Sec16_Premium']  
            form['Short_Term_Insurance_Commerical_Sec16_ItemNumber'] = STC_Data['STIC_Sec16_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec16_PremNumber'] = STC_Data['STIC_Sec16_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec16_1'] = STC_Data['STIC_Sec16_1']  
            form['Short_Term_Insurance_Commerical_Sec16_2'] = STC_Data['STIC_Sec16_2']  
            form['Short_Term_Insurance_Commerical_Sec16_3'] = STC_Data['STIC_Sec16_3']  
            form['Short_Term_Insurance_Commerical_Sec16_4'] = STC_Data['STIC_Sec16_4']  
            form['Short_Term_Insurance_Commerical_Sec16_5'] = STC_Data['STIC_Sec16_5']  
            form['Short_Term_Insurance_Commerical_Sec16_6'] = STC_Data['STIC_Sec16_6']  
            form['Short_Term_Insurance_Commerical_Sec16_7'] = STC_Data['STIC_Sec16_7']  
            form['Short_Term_Insurance_Commerical_Sec16_8'] = STC_Data['STIC_Sec16_8']  
            form['Short_Term_Insurance_Commerical_Sec16_9'] = STC_Data['STIC_Sec16_9']  
            form['Short_Term_Insurance_Commerical_Sec16_10'] = "Yes" if int(STC_Data['STIC_Sec16_10']) == 1 else "No"   
            form['Short_Term_Insurance_Commerical_Sec16_Extension1'] = "Yes" if int(STC_Data['STIC_Sec16_Extension1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec16_Extension2'] = "Yes" if int(STC_Data['STIC_Sec16_Extension2']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec16_Extension3'] = "Yes" if int(STC_Data['STIC_Sec16_Extension3']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec16_Extension4'] = "Yes" if int(STC_Data['STIC_Sec16_Extension4']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec16_Extension5'] = "Yes" if int(STC_Data['STIC_Sec16_Extension5']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec16_Extension6'] = "Yes" if int(STC_Data['STIC_Sec16_Extension6']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec16_Extension7'] = "Yes" if int(STC_Data['STIC_Sec16_Extension7']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec16_Extension8'] = "Yes" if int(STC_Data['STIC_Sec16_Extension8']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec16_Extension9'] = "Yes" if int(STC_Data['STIC_Sec16_Extension9']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec16_AnnualPremium'] = STC_Data['STIC_Sec16_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec16_Comments'] = STC_Data['STIC_Sec16_Comments']  
            form['Short_Term_Insurance_Commerical_Sec17_Limit'] = STC_Data['STIC_Sec17_Limit']  
            form['Short_Term_Insurance_Commerical_Sec17_Premium'] = STC_Data['STIC_Sec17_Premium']  
            form['Short_Term_Insurance_Commerical_Sec17_ItemNumber'] = STC_Data['STIC_Sec17_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec17_PremNumber'] = STC_Data['STIC_Sec17_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec17_1'] = STC_Data['STIC_Sec17_1']  
            form['Short_Term_Insurance_Commerical_Sec17_2'] = STC_Data['STIC_Sec17_2']  
            form['Short_Term_Insurance_Commerical_Sec17_3'] = STC_Data['STIC_Sec17_3']  
            form['Short_Term_Insurance_Commerical_Sec17_4'] = STC_Data['STIC_Sec17_4']  
            form['Short_Term_Insurance_Commerical_Sec17_5'] = STC_Data['STIC_Sec17_5']  
            form['Short_Term_Insurance_Commerical_Sec17_6'] = "Yes" if int(STC_Data['STIC_Sec17_6']) == 1 else "No"    
            form['Short_Term_Insurance_Commerical_Sec17_7'] = STC_Data['STIC_Sec17_7']  
            form['Short_Term_Insurance_Commerical_Sec17_8'] = STC_Data['STIC_Sec17_8']  
            form['Short_Term_Insurance_Commerical_Sec17_9'] = "Yes" if STC_Data['STIC_Sec17_9'] else "No"  
            form['Short_Term_Insurance_Commerical_Sec17_10'] = "Yes" if int(STC_Data['STIC_Sec17_10']) == 1 else "No"   
            form['Short_Term_Insurance_Commerical_Sec17_Extension1'] = "Yes" if int(STC_Data['STIC_Sec17_Extension1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit1'] = STC_Data['STIC_Sec17_ExtensionLimit1']  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium1'] = STC_Data['STIC_Sec17_ExtensionPremium1']  
            form['Short_Term_Insurance_Commerical_Sec17_Extension2'] = "Yes" if int(STC_Data['STIC_Sec17_Extension2']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit2'] = STC_Data['STIC_Sec17_ExtensionLimit2']  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium2'] = STC_Data['STIC_Sec17_ExtensionPremium2']  
            form['Short_Term_Insurance_Commerical_Sec17_Extension3'] = "Yes" if int(STC_Data['STIC_Sec17_Extension3']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit3'] = STC_Data['STIC_Sec17_ExtensionLimit3']  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium3'] = STC_Data['STIC_Sec17_ExtensionPremium3']  
            form['Short_Term_Insurance_Commerical_Sec17_Extension4'] = "Yes" if int(STC_Data['STIC_Sec17_Extension4']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit4'] = STC_Data['STIC_Sec17_ExtensionLimit4']  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium4'] = STC_Data['STIC_Sec17_ExtensionPremium4']  
            form['Short_Term_Insurance_Commerical_Sec17_Extension5'] = "Yes" if int(STC_Data['STIC_Sec17_Extension5']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit5'] = STC_Data['STIC_Sec17_ExtensionLimit5']  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium5'] = STC_Data['STIC_Sec17_ExtensionPremium5']  
            form['Short_Term_Insurance_Commerical_Sec17_Extension6'] = "Yes" if int(STC_Data['STIC_Sec17_Extension6']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit6'] = STC_Data['STIC_Sec17_ExtensionLimit6']  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium6'] = STC_Data['STIC_Sec17_ExtensionPremium6']  
            form['Short_Term_Insurance_Commerical_Sec17_Extension7'] = "Yes" if int(STC_Data['STIC_Sec17_Extension7']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit7'] = STC_Data['STIC_Sec17_ExtensionLimit7']  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium7'] = STC_Data['STIC_Sec17_ExtensionPremium7']  
            form['Short_Term_Insurance_Commerical_Sec17_Extension8'] = "Yes" if int(STC_Data['STIC_Sec17_Extension8']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit8'] = STC_Data['STIC_Sec17_ExtensionLimit8']  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium8'] = STC_Data['STIC_Sec17_ExtensionPremium8']  
            form['Short_Term_Insurance_Commerical_Sec17_Extension9'] = "Yes" if int(STC_Data['STIC_Sec17_Extension9']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit9'] = STC_Data['STIC_Sec17_ExtensionLimit9']  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium9'] = STC_Data['STIC_Sec17_ExtensionPremium9']  
            form['Short_Term_Insurance_Commerical_Sec17_AnnualPremium'] = STC_Data['STIC_Sec17_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec17_Comments'] = STC_Data['STIC_Sec17_Comments']  
            form['Short_Term_Insurance_Commerical_Sec18_Limit'] = STC_Data['STIC_Sec18_Limit']  
            form['Short_Term_Insurance_Commerical_Sec18_Premium'] = STC_Data['STIC_Sec18_Premium']  
            form['Short_Term_Insurance_Commerical_Sec18_ItemNumber'] = STC_Data['STIC_Sec18_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec18_PremNumber'] = STC_Data['STIC_Sec18_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec18_1'] = STC_Data['STIC_Sec18_1']  
            form['Short_Term_Insurance_Commerical_Sec18_2'] = STC_Data['STIC_Sec18_2']  
            form['Short_Term_Insurance_Commerical_Sec18_3'] = STC_Data['STIC_Sec18_3']  
            form['Short_Term_Insurance_Commerical_Sec18_4'] = STC_Data['STIC_Sec18_4']  
            form['Short_Term_Insurance_Commerical_Sec18_5'] = STC_Data['STIC_Sec18_5']  
            form['Short_Term_Insurance_Commerical_Sec18_6'] = STC_Data['STIC_Sec18_6']  
            form['Short_Term_Insurance_Commerical_Sec18_7'] = STC_Data['STIC_Sec18_7']  
            form['Short_Term_Insurance_Commerical_Sec18_8'] = STC_Data['STIC_Sec18_8']  
            form['Short_Term_Insurance_Commerical_Sec18_9'] = STC_Data['STIC_Sec18_9']  
            form['Short_Term_Insurance_Commerical_Sec18_10'] = STC_Data['STIC_Sec18_10']  
            form['Short_Term_Insurance_Commerical_Sec18_11'] = STC_Data['STIC_Sec18_11']  
            form['Short_Term_Insurance_Commerical_Sec18_12'] = STC_Data['STIC_Sec18_12']  
            form['Short_Term_Insurance_Commerical_Sec18_13'] = STC_Data['STIC_Sec18_13']  
            form['Short_Term_Insurance_Commerical_Sec18_14'] = STC_Data['STIC_Sec18_14']  
            form['Short_Term_Insurance_Commerical_Sec18_15'] = STC_Data['STIC_Sec18_15']  
            form['Short_Term_Insurance_Commerical_Sec18_16'] = STC_Data['STIC_Sec18_16']  
            form['Short_Term_Insurance_Commerical_Sec18_17'] = STC_Data['STIC_Sec18_17']  
            form['Short_Term_Insurance_Commerical_Sec18_18'] = STC_Data['STIC_Sec18_18']  
            form['Short_Term_Insurance_Commerical_Sec18_19'] = STC_Data['STIC_Sec18_19']  
            form['Short_Term_Insurance_Commerical_Sec18_20'] = "Yes" if int(STC_Data['STIC_Sec18_20']) == 1 else "No"    
            form['Short_Term_Insurance_Commerical_Sec18_21'] = STC_Data['STIC_Sec18_21']  
            form['Short_Term_Insurance_Commerical_Sec18_22'] = STC_Data['STIC_Sec18_22']  
            form['Short_Term_Insurance_Commerical_Sec18_23'] = STC_Data['STIC_Sec18_23']  
            form['Short_Term_Insurance_Commerical_Sec18_24'] = STC_Data['STIC_Sec18_24']  
            form['Short_Term_Insurance_Commerical_Sec18_25'] = STC_Data['STIC_Sec18_25']  
            form['Short_Term_Insurance_Commerical_Sec18_26'] = STC_Data['STIC_Sec18_26']  
            form['Short_Term_Insurance_Commerical_Sec18_27'] = STC_Data['STIC_Sec18_27']  
            form['Short_Term_Insurance_Commerical_Sec18_27'] = STC_Data['STIC_Sec18_27']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP1'] = "Yes" if int(STC_Data['STIC_Sec18_FaP1']) else "No"   
            form['Short_Term_Insurance_Commerical_Sec18_FaP1_1'] = STC_Data['STIC_Sec18_FaP1_1']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP1_2'] = STC_Data['STIC_Sec18_FaP1_2']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP2'] = "Yes" if int(STC_Data['STIC_Sec18_FaP2']) else "No"   
            form['Short_Term_Insurance_Commerical_Sec18_FaP2_1'] = STC_Data['STIC_Sec18_FaP2_1']
            form['Short_Term_Insurance_Commerical_Sec18_FaP2_2'] = STC_Data['STIC_Sec18_FaP2_2']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP3'] = "Yes" if int(STC_Data['STIC_Sec18_FaP3']) else "No"   
            form['Short_Term_Insurance_Commerical_Sec18_FaP3_1'] = STC_Data['STIC_Sec18_FaP3_1']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP3_2'] = STC_Data['STIC_Sec18_FaP3_2']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP4'] = "Yes" if int(STC_Data['STIC_Sec18_FaP4']) else "No"   
            form['Short_Term_Insurance_Commerical_Sec18_FaP4_1'] = STC_Data['STIC_Sec18_FaP4_1']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP4_2'] = STC_Data['STIC_Sec18_FaP4_2']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP5'] = "Yes" if int(STC_Data['STIC_Sec18_FaP5']) else "No"   
            form['Short_Term_Insurance_Commerical_Sec18_FaP5_1'] = STC_Data['STIC_Sec18_FaP5_1']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP5_2'] = STC_Data['STIC_Sec18_FaP5_2']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP6'] = "Yes" if int(STC_Data['STIC_Sec18_FaP6']) else "No"   
            form['Short_Term_Insurance_Commerical_Sec18_FaP6_1'] = STC_Data['STIC_Sec18_FaP6_1']  
            form['Short_Term_Insurance_Commerical_Sec18_FaP6_2'] = STC_Data['STIC_Sec18_FaP6_2']  
            form['Short_Term_Insurance_Commerical_Sec18_Extension1'] = "Yes" if int(STC_Data['STIC_Sec18_Extension1']) else "No"  
            form['Short_Term_Insurance_Commerical_Sec18_Extension1_1'] = STC_Data['STIC_Sec18_Extension1_1']  
            form['Short_Term_Insurance_Commerical_Sec18_Extension1_2'] = STC_Data['STIC_Sec18_Extension1_2']  
            form['Short_Term_Insurance_Commerical_Sec18_Extension2'] = "Yes" if int(STC_Data['STIC_Sec18_Extension2']) else "No"  
            form['Short_Term_Insurance_Commerical_Sec18_Extension2_1'] = STC_Data['STIC_Sec18_Extension2_1']  
            form['Short_Term_Insurance_Commerical_Sec18_Extension3'] = "Yes" if int(STC_Data['STIC_Sec18_Extension3']) else "No"  
            form['Short_Term_Insurance_Commerical_Sec18_Extension3_1'] = STC_Data['STIC_Sec18_Extension3_1']  
            form['Short_Term_Insurance_Commerical_Sec18_Extension4'] = "Yes" if int(STC_Data['STIC_Sec18_Extension4']) else "No"  
            form['Short_Term_Insurance_Commerical_Sec18_Extension4_1'] = STC_Data['STIC_Sec18_Extension4_1']  
            form['Short_Term_Insurance_Commerical_Sec18_Extension5'] = "Yes" if int(STC_Data['STIC_Sec18_Extension5']) else "No"  
            form['Short_Term_Insurance_Commerical_Sec18_Extension5_1'] = STC_Data['STIC_Sec18_Extension5_1']  
            form['Short_Term_Insurance_Commerical_Sec18_Extension6'] = "Yes" if int(STC_Data['STIC_Sec18_Extension6']) else "No"  
            form['Short_Term_Insurance_Commerical_Sec18_Extension6_1'] = STC_Data['STIC_Sec18_Extension6_1']  
            form['Short_Term_Insurance_Commerical_Sec18_Comments'] = STC_Data['STIC_Sec18_Comments']  
            form['Short_Term_Insurance_Commerical_Sec19_Limit'] = STC_Data['STIC_Sec19_Limit']  
            form['Short_Term_Insurance_Commerical_Sec19_Premium'] = STC_Data['STIC_Sec19_Premium']  
            form['Short_Term_Insurance_Commerical_Sec19_ItemNumber'] = STC_Data['STIC_Sec19_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec19_PremNumber'] = STC_Data['STIC_Sec19_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_1'] = STC_Data['STIC_Sec19_Part1_1']  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_2'] = STC_Data['STIC_Sec19_Part1_2']  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_3'] = STC_Data['STIC_Sec19_Part1_3']  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_4'] = STC_Data['STIC_Sec19_Part1_4']  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_5'] = STC_Data['STIC_Sec19_Part1_5']  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_6'] = STC_Data['STIC_Sec19_Part1_6']  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_7'] = STC_Data['STIC_Sec19_Part1_7']  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_8'] = STC_Data['STIC_Sec19_Part1_8']  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_9'] = STC_Data['STIC_Sec19_Part1_9']  
            form['Short_Term_Insurance_Commerical_Sec19_Part2_1'] = STC_Data['STIC_Sec19_Part2_1']  
            form['Short_Term_Insurance_Commerical_Sec19_Part2_2'] = STC_Data['STIC_Sec19_Part2_2']  
            form['Short_Term_Insurance_Commerical_Sec19_Part2_3'] = STC_Data['STIC_Sec19_Part2_3']  
            form['Short_Term_Insurance_Commerical_Sec19_Part2_4'] = STC_Data['STIC_Sec19_Part2_4']  
            form['Short_Term_Insurance_Commerical_Sec19_Part2_5'] = STC_Data['STIC_Sec19_Part2_5']  
            form['Short_Term_Insurance_Commerical_Sec19_Extension1'] = "Yes" if int(STC_Data['STIC_Sec19_Extension1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec19_Extension_Premium1'] = STC_Data['STIC_Sec19_Extension_Premium1']  
            form['Short_Term_Insurance_Commerical_Sec19_Extension2'] = "Yes" if int(STC_Data['STIC_Sec19_Extension2']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec19_Extension_Premium2'] = STC_Data['STIC_Sec19_Extension_Premium2']  
            form['Short_Term_Insurance_Commerical_Sec19_RoD_1'] = STC_Data['STIC_Sec19_RoD_1']  
            form['Short_Term_Insurance_Commerical_Sec19_RoD_2'] = STC_Data['STIC_Sec19_RoD_2']  
            form['Short_Term_Insurance_Commerical_Sec19_RoD_3'] = STC_Data['STIC_Sec19_RoD_3']  
            form['Short_Term_Insurance_Commerical_Sec19_RoD_4'] = STC_Data['STIC_Sec19_RoD_4']  
            form['Short_Term_Insurance_Commerical_Sec19_RoD_5'] = STC_Data['STIC_Sec19_RoD_5']  
            form['Short_Term_Insurance_Commerical_Sec19_AnnualPremium'] = STC_Data['STIC_Sec19_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec19_Comments'] = STC_Data['STIC_Sec19_Comments']  
            form['Short_Term_Insurance_Commerical_Sec20_Limit'] = STC_Data['STIC_Sec20_Limit']  
            form['Short_Term_Insurance_Commerical_Sec20_Premium'] = STC_Data['STIC_Sec20_Premium']  
            form['Short_Term_Insurance_Commerical_Sec20_ItemNumber'] = STC_Data['STIC_Sec20_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec20_PremNumber'] = STC_Data['STIC_Sec20_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec20_1'] = STC_Data['STIC_Sec20_1']  
            form['Short_Term_Insurance_Commerical_Sec20_2'] = STC_Data['STIC_Sec20_2']  
            form['Short_Term_Insurance_Commerical_Sec20_3'] = STC_Data['STIC_Sec20_3']  
            form['Short_Term_Insurance_Commerical_Sec20_4'] = STC_Data['STIC_Sec20_4']  
            form['Short_Term_Insurance_Commerical_Sec20_5'] = STC_Data['STIC_Sec20_5']  
            form['Short_Term_Insurance_Commerical_Sec20_6'] = STC_Data['STIC_Sec20_6']  
            form['Short_Term_Insurance_Commerical_Sec20_Extension1'] = "Yes" if int(STC_Data['STIC_Sec20_Extension1']) == 1 else "No"    
            form['Short_Term_Insurance_Commerical_Sec20_Extension_Premium1'] = STC_Data['STIC_Sec20_Extension_Premium1']  
            form['Short_Term_Insurance_Commerical_Sec20_Extension2'] = "Yes" if int(STC_Data['STIC_Sec20_Extension2']) == 1 else "No" 
            form['Short_Term_Insurance_Commerical_Sec20_Extension_Premium2'] = STC_Data['STIC_Sec20_Extension_Premium2']  
            form['Short_Term_Insurance_Commerical_Sec20_AnnualPremium'] = STC_Data['STIC_Sec20_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec20_Comments'] = STC_Data['STIC_Sec20_Comments']  
            form['Short_Term_Insurance_Commerical_Sec21_Limit'] = STC_Data['STIC_Sec21_Limit']  
            form['Short_Term_Insurance_Commerical_Sec21_Premium'] = STC_Data['STIC_Sec21_Premium']  
            form['Short_Term_Insurance_Commerical_Sec21_ItemNumber'] = STC_Data['STIC_Sec21_ItemNumber']  
            form['Short_Term_Insurance_Commerical_Sec21_PremNumber'] = STC_Data['STIC_Sec21_PremNumber']  
            form['Short_Term_Insurance_Commerical_Sec21_1'] = STC_Data['STIC_Sec21_1']  
            form['Short_Term_Insurance_Commerical_Sec21_2'] = STC_Data['STIC_Sec21_2']  
            form['Short_Term_Insurance_Commerical_Sec21_3'] = STC_Data['STIC_Sec21_3']  
            form['Short_Term_Insurance_Commerical_Sec21_4'] = STC_Data['STIC_Sec21_4']  
            form['Short_Term_Insurance_Commerical_Sec21_5'] = STC_Data['STIC_Sec21_5']  
            form['Short_Term_Insurance_Commerical_Sec21_6'] = STC_Data['STIC_Sec21_6']  
            form['Short_Term_Insurance_Commerical_Sec21_Extension1'] = "Yes" if int(STC_Data['STIC_Sec21_Extension1']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec21_Extension_Premium1'] = STC_Data['STIC_Sec21_Extension_Premium1']  
            form['Short_Term_Insurance_Commerical_Sec21_Extension2'] = "Yes" if int(STC_Data['STIC_Sec21_Extension2']) == 1 else "No"  
            form['Short_Term_Insurance_Commerical_Sec21_Extension_Premium2'] = STC_Data['STIC_Sec21_Extension_Premium2']  
            form['Short_Term_Insurance_Commerical_Sec21_AnnualPremium'] = STC_Data['STIC_Sec21_AnnualPremium']  
            form['Short_Term_Insurance_Commerical_Sec21_Comments'] = STC_Data['STIC_Sec21_Comments']      
            form['Short_Term_Insurance_Commerical_SecD_1'] = STC_Data['STIC_SecD_1']  
            form['Short_Term_Insurance_Commerical_SecD_2'] = STC_Data['STIC_SecD_2']  
            form['Short_Term_Insurance_Commerical_SecD_3'] = STC_Data['STIC_SecD_3']  
            form['Short_Term_Insurance_Commerical_SecD_4'] = "Yes" if int(STC_Data['STIC_SecD_4']) == 1 else "No"   
            form['Short_Term_Insurance_Commerical_SecD_5'] = STC_Data['STIC_SecD_5']  
            form['Short_Term_Insurance_Commerical_SecD_6'] = STC_Data['STIC_SecD_6']  
            form['Short_Term_Insurance_Commerical_SecD_7'] = STC_Data['STIC_SecD_7']  
            form['Short_Term_Insurance_Commerical_SecD_8'] = STC_Data['STIC_SecD_8']  
            form['Short_Term_Insurance_Commerical_SecD_9'] = STC_Data['STIC_SecD_9']  
            form['Short_Term_Insurance_Commerical_SecD_10'] = STC_Data['STIC_SecD_10']  
            form['Short_Term_Insurance_Commerical_SecD_11'] = STC_Data['STIC_SecD_11']  
            form['Short_Term_Insurance_Commerical_SecD_12'] = STC_Data['STIC_SecD_12']  
            form['Short_Term_Insurance_Commerical_SecD_13'] = STC_Data['STIC_SecD_13']  
            form['Short_Term_Insurance_Commerical_SecE_1'] = STC_Data['STIC_SecE_1']  
            form['Short_Term_Insurance_Commerical_SecE_2'] = STC_Data['STIC_SecE_2']  
            form['Short_Term_Insurance_Commerical_SecE_3'] = STC_Data['STIC_SecE_3']  
            form['Short_Term_Insurance_Commerical_SecG_1'] = STC_Data['STIC_SecG_1']  
            form['Short_Term_Insurance_Commerical_SecG_2'] = STC_Data['STIC_SecG_2']  
            form['Short_Term_Insurance_Commerical_SecG_3'] = STC_Data['STIC_SecG_3']  
        else:
            form['Short_Term_Insurance_Commerical_Quotation_Number'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Underwritten_By'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Branch_Name'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Branch_Number'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Inception_Date'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Renewal_Date'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Payment_Method_Annual'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Payment_Method_Monthly'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sasria_Annual'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sasria_Monthly'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Business_Owner'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Client_Id_Number'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Company_Reg_Number'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Company_VAT_Number'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Postal_Address'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Risk_Address'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Contact_Person'] = "N.A."  
            form['Short_Term_Insurance_Commerical_TelePhone_Number'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fax_Number'] = "N.A."  
            form['Short_Term_Insurance_Commerical_CellPhone_Number'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Email'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Business_Description'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Lower_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Higher_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Applicable_Option'] = "N.A."  
            form['Short_Term_Insurance_Commerical_General_Cancelled'] = "N.A."  
            form['Short_Term_Insurance_Commerical_General_Cancelled_Detail'] = "N.A."  
            form['Short_Term_Insurance_Commerical_General_LossType'] = "N.A."  
            form['Short_Term_Insurance_Commerical_General_Year'] = "N.A."  
            form['Short_Term_Insurance_Commerical_General_Amount'] = "N.A."  
            form['Short_Term_Insurance_Commerical_General_History'] = "N.A."  
            form['Short_Term_Insurance_Commerical_General_Insurer'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Replacement_Advise'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Replacement_Purpose'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Replacement_Reason'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Replacement_Suppliers'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_FnC_Existing'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_FnC_Replacement'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_STnC_Existing'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_STnC_Replacement'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_ImpOnPre_Existing'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_ImpOnPre_Replacement'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_Excesses_Existing'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_Excesses_Replacement'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_VABen_Existing'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_VABen_Replacement'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_AdvisorComm_Existing'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fin_AdvisorComm_Replacement'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Existing_Company'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Replacement_Company'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Existing_Provider'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Replacement_Provider'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Existing_Product'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Replacement_Product'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended14'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted14'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount14'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium14'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess14'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium14'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess14'] = "N.A."   
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended15'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted15'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount15'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium15'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess15'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium15'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess15'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended16'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted16'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount16'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium16'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess16'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium16'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess16'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended17'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted17'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount17'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium17'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess17'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium17'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess17'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended18'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted18'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount18'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium18'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess18'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium18'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess18'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended19'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted19'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount19'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium19'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess19'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium19'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess19'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended20'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted20'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount20'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium20'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess20'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium20'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess20'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended21'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted21'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount21'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium21'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess21'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium21'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess21'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended22'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted22'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount22'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium22'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess22'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium22'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess22'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended23'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted23'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount23'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium23'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess23'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium23'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess23'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended24'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted24'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount24'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium24'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess24'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium24'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess24'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended25'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted25'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount25'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium25'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess25'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium25'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess25'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended27'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted27'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount27'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium27'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess27'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium27'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess27'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended28'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted28'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount28'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium28'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess28'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium28'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess28'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended29'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted29'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount29'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium29'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess29'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium29'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess29'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended30'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted30'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount30'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium30'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess30'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium30'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess30'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended31'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted31'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount31'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium31'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess31'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium31'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess31'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended32'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted32'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount32'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium32'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess32'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium32'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess32'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended33'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted33'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount33'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium33'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess33'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium33'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess33'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended34'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted34'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount34'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium34'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess34'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium34'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess34'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended35'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted35'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount35'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium35'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess35'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium35'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess35'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended36'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted36'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount36'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium36'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess36'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium36'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess36'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended37'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted37'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount37'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium37'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess37'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium37'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess37'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended38'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted38'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount38'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium38'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess38'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium38'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess38'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended39'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted39'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount39'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium39'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess39'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium39'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess39'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended40'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted40'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount40'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium40'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess40'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium40'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess40'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended41'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted41'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount41'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium41'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess41'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium41'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess41'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended42'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted42'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount42'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium42'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess42'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium42'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess42'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Recommended43'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Accepted43'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_CoverAmount43'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Premium43'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_ExistP_Excess43'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Premium43'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_RecommP_Excess43'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_FeeNCharges'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_Commission'] = "N.A."  
            form['Short_Term_Insurance_Commerical_ProdComp_TotalPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fire_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fire_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fire_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Fire_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Buildings_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Rental_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Others_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Stocks_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Miscellaneous1_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Miscellaneous2_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Earthquake_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Malicious_Damage_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Special_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_LeakFull_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_LeakFirst_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SnLLimited_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SnLComprehensive_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_RnS_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SDC_Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BuildCombined_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BuildCombined_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BuildCombined_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BuildCombined_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BuildCombined_ColumnRef'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BuildCombined_Sum'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BuildCombined_Construct'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BuildCombined_Desc'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Extensions_RnS'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Extensions_Geysers'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Extensions_SnL'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Extensions_PoA'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Extensions_IorE'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_PremisesNum'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_Sum'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_Construct'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_Desc'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_Doc_Sum'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_Doc_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_LLDoc_Sum'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_LLDoc_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_RnS_Sum'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_RnS_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_TheftF_Sum'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_TheftF_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_Theft_Sum'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_Theft_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_OC_Total_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Basis'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Indemnity'] = "N.A."  

            form['Short_Term_Insurance_Commerical_BusInt_Gross_Profit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Gross_rentals'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Revenue'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Additional_increase_in_cost_of_working'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Wages'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Fines and penalties'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Standing charges'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Extensions'] = "N.A."      
            form['Short_Term_Insurance_Commerical_BusInt_Sum Insured'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Sum Insured Value'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Wages Value'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Specified suppliers'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Specified suppliers value'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Supplier'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Premises'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Unspecified suppliers'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Unspecified suppliers_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Prevention of access'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Prevention of access value'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_clients'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_clients value'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_clients client'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_clients Premises'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Public utilities Insured perils'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Public utilities Insured perils_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Public utilities Extended cover'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Public utilities Extended cover_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Insured perils'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Insured perils_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Extended cover'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Extended cover_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Accidental cover'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Public telecommunications Accidental cover_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_TotalPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_PremisesNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Basis'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_IndemPer'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Suppliers'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_8'] = "N.A."      
            form['Short_Term_Insurance_Commerical_BusInt_Type2_9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_9_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_11_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_14'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_14_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_15'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_15_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_16'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_16_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_17'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_18'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_19'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_19_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_20'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_20_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_21'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_21_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_22'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_22_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_23'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt_Type2_23_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt2_TotalPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_BusInt2_Comments'] = "N.A."      
            form['Short_Term_Insurance_Commerical_Sec5_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_Extension_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_Extension_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_Extension_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_Extension_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_Extension_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec5_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec6_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Extension_Included1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Extension_Limit1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Extension_Premium1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Extension_Included2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Extension_Limit2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Extension_Premium2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Extension_Included3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Extension_Limit3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Extension_Premium3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec7_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec8_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec8_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec8_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec8_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec8_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec8_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec8_Extension_Included1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec8_Extension_Included2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec8_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec8_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Included1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Limit1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Premium1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Included2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Limit2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Premium2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Included3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Limit3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Premium3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Included4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Limit4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Premium4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Included5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Limit5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Premium5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Included6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Limit6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Extension_Premium6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec9_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Included1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Limit1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Premium1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Included2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Limit2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Premium2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Included3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Limit3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Premium3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Included4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Limit4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Extension_Premium4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec10_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec11_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_Extension_Included1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_Extension_Included2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_Extension_Included3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_Extension_Included4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_Extension_Included5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec12_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_14'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_15'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_16'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_17'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_18'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_19'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_20'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_21'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_22'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_23'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_24'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_25'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_27'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_28'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_29'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_30'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_31'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_32'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec13_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Recommended12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_Accepted12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec14_CoverAmount12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_1_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_2_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_3_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec15_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Extension1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Extension2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Extension3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Extension4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Extension5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Extension6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Extension7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Extension8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Extension9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec16_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Extension1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Extension2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Extension3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Extension4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Extension5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Extension6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Extension7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Extension8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Extension9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionLimit9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_ExtensionPremium9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec17_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_14'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_15'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_16'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_17'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_18'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_19'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_20'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_21'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_22'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_23'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_24'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_25'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_26'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_27'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_27'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP1_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP1_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP2_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP2_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP3_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP3_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP4_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP4_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP5_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP5_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP6_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_FaP6_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension1_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension1_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension2_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension3_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension4_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension5_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Extension6_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec18_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part1_9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part2_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part2_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part2_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part2_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Part2_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Extension1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Extension_Premium1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Extension2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Extension_Premium2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_RoD_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_RoD_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_RoD_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_RoD_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_RoD_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec19_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_Extension1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_Extension_Premium1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_Extension2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_Extension_Premium2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec20_Comments'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_Limit'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_Premium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_ItemNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_PremNumber'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_Extension1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_Extension_Premium1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_Extension2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_Extension_Premium2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_AnnualPremium'] = "N.A."  
            form['Short_Term_Insurance_Commerical_Sec21_Comments'] = "N.A."      
            form['Short_Term_Insurance_Commerical_SecD_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_4'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_5'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_6'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_7'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_8'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_9'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_10'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_11'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_12'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecD_13'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecE_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecE_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecE_3'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecG_1'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecG_2'] = "N.A."  
            form['Short_Term_Insurance_Commerical_SecG_3'] = "N.A."  

        
        STP_Data = ShortTermInsurancePersonal.objects.filter(formId=form['id']).values()
        if len(STP_Data) != 0:                
            STP_Data = ShortTermInsurancePersonal.objects.filter(formId=form['id']).values().first()
            form['Short_term_personal_Underwritten_By'] = STP_Data['STIP_Underwritten_By'] 
            form['Short_term_personal_Branch_Name'] = STP_Data['STIP_Branch_Name'] 
            form['Short_term_personal_Branch_Number'] = STP_Data['STIP_Branch_Number'] 
            form['Short_term_personal_Quotation_Number'] = STP_Data['STIP_Quotation_Number'] 
            form['Short_term_personal_Policy_Number'] = STP_Data['STIP_Policy_Number'] 
            form['Short_term_personal_Inception_Date'] = STP_Data['STIP_Inception_Date'] 
            form['Short_term_personal_Applicant_Surname'] = STP_Data['STIP_Applicant_Surname'] 
            form['Short_term_personal_Applicant_Gender'] = "Male" if int(STP_Data['STIP_Applicant_Gender']) == 1 else "Female" 
            form['Short_term_personal_Applicant_Initials'] = STP_Data['STIP_Applicant_Initials'] 
            form['Short_term_personal_Applicant_Title'] = STP_Data['STIP_Applicant_Title'] 
            form['Short_term_personal_Applicant_DateofBirth'] = STP_Data['STIP_Applicant_DateofBirth'] 
            form['Short_term_personal_Applicant_IdNumber'] = STP_Data['STIP_Applicant_IdNumber'] 
            form['Short_term_personal_Applicant_Email'] = STP_Data['STIP_Applicant_Email'] 
            form['Short_term_personal_Applicant_ContactNumber'] = STP_Data['STIP_Applicant_ContactNumber'] 
            form['Short_term_personal_General_Refused'] = "Yes" if int(STP_Data['STIP_General_Refused']) == 1 else "No"
            form['Short_term_personal_General_RefusedDetails'] = STP_Data['STIP_General_RefusedDetails'] 
            form['Short_term_personal_General_Risks'] = "Yes" if int(STP_Data['STIP_General_Risks']) == 1 else "No"
            form['Short_term_personal_General_RisksDetails'] = STP_Data['STIP_General_RisksDetails'] 
            form['Short_term_personal_General_LastDate'] = STP_Data['STIP_General_LastDate'] 
            form['Short_term_personal_General_InsurerName'] = STP_Data['STIP_General_InsurerName'] 
            form['Short_term_personal_General_TypeOfLoss'] = STP_Data['STIP_General_TypeOfLoss'] 
            form['Short_term_personal_General_LossYear'] = STP_Data['STIP_General_LossYear'] 
            form['Short_term_personal_General_LossAmount'] = STP_Data['STIP_General_LossAmount'] 
            form['Short_term_personal_General_LossInsurer'] = STP_Data['STIP_General_LossInsurer'] 
            form['Short_term_personal_CnRI_Existing_Company'] = STP_Data['STIP_CnRI_Existing_Company'] 
            form['Short_term_personal_CnRI_Replacement_Company'] = STP_Data['STIP_CnRI_Replacement_Company'] 
            form['Short_term_personal_CnRI_Existing_Provider'] = STP_Data['STIP_CnRI_Existing_Provider'] 
            form['Short_term_personal_CnRI_Replacement_Provider'] = STP_Data['STIP_CnRI_Replacement_Provider'] 
            form['Short_term_personal_CnRI_Existing_Product'] = STP_Data['STIP_CnRI_Existing_Product'] 
            form['Short_term_personal_CnRI_Replacement_Product'] = STP_Data['STIP_CnRI_Replacement_Product'] 
            form['Short_term_personal_CnRI_1_Recomm'] = STP_Data['STIP_CnRI_1_Recomm'] 
            form['Short_term_personal_CnRI_1_Accepted'] = STP_Data['STIP_CnRI_1_Accepted'] 
            form['Short_term_personal_CnRI_1_CoverAmount'] = STP_Data['STIP_CnRI_1_CoverAmount'] 
            form['Short_term_personal_CnRI_1_Premium1'] = STP_Data['STIP_CnRI_1_Premium1'] 
            form['Short_term_personal_CnRI_1_Premium2'] = STP_Data['STIP_CnRI_1_Premium2'] 
            form['Short_term_personal_CnRI_1_Excess1'] = STP_Data['STIP_CnRI_1_Excess1'] 
            form['Short_term_personal_CnRI_1_Excess2'] = STP_Data['STIP_CnRI_1_Excess2'] 
            form['Short_term_personal_CnRI_2_Recomm'] = STP_Data['STIP_CnRI_2_Recomm'] 
            form['Short_term_personal_CnRI_2_Accepted'] = STP_Data['STIP_CnRI_2_Accepted'] 
            form['Short_term_personal_CnRI_2_CoverAmount'] = STP_Data['STIP_CnRI_2_CoverAmount'] 
            form['Short_term_personal_CnRI_2_Premium1'] = STP_Data['STIP_CnRI_2_Premium1'] 
            form['Short_term_personal_CnRI_2_Premium2'] = STP_Data['STIP_CnRI_2_Premium2'] 
            form['Short_term_personal_CnRI_2_Excess1'] = STP_Data['STIP_CnRI_2_Excess1'] 
            form['Short_term_personal_CnRI_2_Excess2'] = STP_Data['STIP_CnRI_2_Excess2'] 
            form['Short_term_personal_CnRI_3_Recomm'] = STP_Data['STIP_CnRI_3_Recomm'] 
            form['Short_term_personal_CnRI_3_Accepted'] = STP_Data['STIP_CnRI_3_Accepted'] 
            form['Short_term_personal_CnRI_3_CoverAmount'] = STP_Data['STIP_CnRI_3_CoverAmount'] 
            form['Short_term_personal_CnRI_3_Premium1'] = STP_Data['STIP_CnRI_3_Premium1'] 
            form['Short_term_personal_CnRI_3_Premium2'] = STP_Data['STIP_CnRI_3_Premium2'] 
            form['Short_term_personal_CnRI_3_Excess1'] = STP_Data['STIP_CnRI_3_Excess1'] 
            form['Short_term_personal_CnRI_3_Excess2'] = STP_Data['STIP_CnRI_3_Excess2'] 
            form['Short_term_personal_CnRI_4_Recomm'] = STP_Data['STIP_CnRI_4_Recomm'] 
            form['Short_term_personal_CnRI_4_Accepted'] = STP_Data['STIP_CnRI_4_Accepted'] 
            form['Short_term_personal_CnRI_4_CoverAmount'] = STP_Data['STIP_CnRI_4_CoverAmount'] 
            form['Short_term_personal_CnRI_4_Premium1'] = STP_Data['STIP_CnRI_4_Premium1'] 
            form['Short_term_personal_CnRI_4_Premium2'] = STP_Data['STIP_CnRI_4_Premium2'] 
            form['Short_term_personal_CnRI_4_Excess1'] = STP_Data['STIP_CnRI_4_Excess1'] 
            form['Short_term_personal_CnRI_4_Excess2'] = STP_Data['STIP_CnRI_4_Excess2'] 
            form['Short_term_personal_CnRI_5_Recomm'] = STP_Data['STIP_CnRI_5_Recomm'] 
            form['Short_term_personal_CnRI_5_Accepted'] = STP_Data['STIP_CnRI_5_Accepted'] 
            form['Short_term_personal_CnRI_5_CoverAmount'] = STP_Data['STIP_CnRI_5_CoverAmount'] 
            form['Short_term_personal_CnRI_5_Premium1'] = STP_Data['STIP_CnRI_5_Premium1'] 
            form['Short_term_personal_CnRI_5_Premium2'] = STP_Data['STIP_CnRI_5_Premium2'] 
            form['Short_term_personal_CnRI_5_Excess1'] = STP_Data['STIP_CnRI_5_Excess1'] 
            form['Short_term_personal_CnRI_5_Excess2'] = STP_Data['STIP_CnRI_5_Excess2'] 
            form['Short_term_personal_CnRI_6_Recomm'] = STP_Data['STIP_CnRI_6_Recomm'] 
            form['Short_term_personal_CnRI_6_Accepted'] = STP_Data['STIP_CnRI_6_Accepted'] 
            form['Short_term_personal_CnRI_6_CoverAmount'] = STP_Data['STIP_CnRI_6_CoverAmount'] 
            form['Short_term_personal_CnRI_6_Premium1'] = STP_Data['STIP_CnRI_6_Premium1'] 
            form['Short_term_personal_CnRI_6_Premium2'] = STP_Data['STIP_CnRI_6_Premium2'] 
            form['Short_term_personal_CnRI_6_Excess1'] = STP_Data['STIP_CnRI_6_Excess1'] 
            form['Short_term_personal_CnRI_6_Excess2'] = STP_Data['STIP_CnRI_6_Excess2'] 
            form['Short_term_personal_CnRI_7_Recomm'] = STP_Data['STIP_CnRI_7_Recomm'] 
            form['Short_term_personal_CnRI_7_Accepted'] = STP_Data['STIP_CnRI_7_Accepted'] 
            form['Short_term_personal_CnRI_7_CoverAmount'] = STP_Data['STIP_CnRI_7_CoverAmount'] 
            form['Short_term_personal_CnRI_7_Premium1'] = STP_Data['STIP_CnRI_7_Premium1'] 
            form['Short_term_personal_CnRI_7_Premium2'] = STP_Data['STIP_CnRI_7_Premium2'] 
            form['Short_term_personal_CnRI_7_Excess1'] = STP_Data['STIP_CnRI_7_Excess1'] 
            form['Short_term_personal_CnRI_7_Excess2'] = STP_Data['STIP_CnRI_7_Excess2'] 
            form['Short_term_personal_CnRI_8_Recomm'] = STP_Data['STIP_CnRI_8_Recomm'] 
            form['Short_term_personal_CnRI_8_Accepted'] = STP_Data['STIP_CnRI_8_Accepted'] 
            form['Short_term_personal_CnRI_8_CoverAmount'] = STP_Data['STIP_CnRI_8_CoverAmount'] 
            form['Short_term_personal_CnRI_8_Premium1'] = STP_Data['STIP_CnRI_8_Premium1'] 
            form['Short_term_personal_CnRI_8_Premium2'] = STP_Data['STIP_CnRI_8_Premium2'] 
            form['Short_term_personal_CnRI_8_Excess1'] = STP_Data['STIP_CnRI_8_Excess1'] 
            form['Short_term_personal_CnRI_8_Excess2'] = STP_Data['STIP_CnRI_8_Excess2'] 
            form['Short_term_personal_CnRI_9_Recomm'] = STP_Data['STIP_CnRI_9_Recomm'] 
            form['Short_term_personal_CnRI_9_Accepted'] = STP_Data['STIP_CnRI_9_Accepted'] 
            form['Short_term_personal_CnRI_9_CoverAmount'] = STP_Data['STIP_CnRI_9_CoverAmount'] 
            form['Short_term_personal_CnRI_9_Premium1'] = STP_Data['STIP_CnRI_9_Premium1'] 
            form['Short_term_personal_CnRI_9_Premium2'] = STP_Data['STIP_CnRI_9_Premium2'] 
            form['Short_term_personal_CnRI_9_Excess1'] = STP_Data['STIP_CnRI_9_Excess1'] 
            form['Short_term_personal_CnRI_9_Excess2'] = STP_Data['STIP_CnRI_9_Excess2'] 
            form['Short_term_personal_CnRI_10_Recomm'] = STP_Data['STIP_CnRI_10_Recomm'] 
            form['Short_term_personal_CnRI_10_Accepted'] = STP_Data['STIP_CnRI_10_Accepted'] 
            form['Short_term_personal_CnRI_10_CoverAmount'] = STP_Data['STIP_CnRI_10_CoverAmount'] 
            form['Short_term_personal_CnRI_10_Premium1'] = STP_Data['STIP_CnRI_10_Premium1'] 
            form['Short_term_personal_CnRI_10_Premium2'] = STP_Data['STIP_CnRI_10_Premium2'] 
            form['Short_term_personal_CnRI_10_Excess1'] = STP_Data['STIP_CnRI_10_Excess1'] 
            form['Short_term_personal_CnRI_10_Excess2'] = STP_Data['STIP_CnRI_10_Excess2'] 
            form['Short_term_personal_CnRI_11_Recomm'] = STP_Data['STIP_CnRI_11_Recomm'] 
            form['Short_term_personal_CnRI_11_Accepted'] = STP_Data['STIP_CnRI_11_Accepted'] 
            form['Short_term_personal_CnRI_11_CoverAmount'] = STP_Data['STIP_CnRI_11_CoverAmount'] 
            form['Short_term_personal_CnRI_11_Premium1'] = STP_Data['STIP_CnRI_11_Premium1'] 
            form['Short_term_personal_CnRI_11_Premium2'] = STP_Data['STIP_CnRI_11_Premium2'] 
            form['Short_term_personal_CnRI_11_Excess1'] = STP_Data['STIP_CnRI_11_Excess1'] 
            form['Short_term_personal_CnRI_11_Excess2'] = STP_Data['STIP_CnRI_11_Excess2'] 
            form['Short_term_personal_CnRI_12_Recomm'] = STP_Data['STIP_CnRI_12_Recomm'] 
            form['Short_term_personal_CnRI_12_Accepted'] = STP_Data['STIP_CnRI_12_Accepted'] 
            form['Short_term_personal_CnRI_12_CoverAmount'] = STP_Data['STIP_CnRI_12_CoverAmount'] 
            form['Short_term_personal_CnRI_12_Premium1'] = STP_Data['STIP_CnRI_12_Premium1'] 
            form['Short_term_personal_CnRI_12_Premium2'] = STP_Data['STIP_CnRI_12_Premium2'] 
            form['Short_term_personal_CnRI_12_Excess1'] = STP_Data['STIP_CnRI_12_Excess1'] 
            form['Short_term_personal_CnRI_12_Excess2'] = STP_Data['STIP_CnRI_12_Excess2'] 
            form['Short_term_personal_CnRI_13_Recomm'] = STP_Data['STIP_CnRI_13_Recomm'] 
            form['Short_term_personal_CnRI_13_Accepted'] = STP_Data['STIP_CnRI_13_Accepted'] 
            form['Short_term_personal_CnRI_13_CoverAmount'] = STP_Data['STIP_CnRI_13_CoverAmount'] 
            form['Short_term_personal_CnRI_13_Premium1'] = STP_Data['STIP_CnRI_13_Premium1'] 
            form['Short_term_personal_CnRI_13_Premium2'] = STP_Data['STIP_CnRI_13_Premium2'] 
            form['Short_term_personal_CnRI_13_Excess1'] = STP_Data['STIP_CnRI_13_Excess1'] 
            form['Short_term_personal_CnRI_13_Excess2'] = STP_Data['STIP_CnRI_13_Excess2'] 
            form['Short_term_personal_CnRI_14_Recomm'] = STP_Data['STIP_CnRI_14_Recomm'] 
            form['Short_term_personal_CnRI_14_Accepted'] = STP_Data['STIP_CnRI_14_Accepted'] 
            form['Short_term_personal_CnRI_14_CoverAmount'] = STP_Data['STIP_CnRI_14_CoverAmount'] 
            form['Short_term_personal_CnRI_14_Premium1'] = STP_Data['STIP_CnRI_14_Premium1'] 
            form['Short_term_personal_CnRI_14_Premium2'] = STP_Data['STIP_CnRI_14_Premium2'] 
            form['Short_term_personal_CnRI_14_Excess1'] = STP_Data['STIP_CnRI_14_Excess1'] 
            form['Short_term_personal_CnRI_14_Excess2'] = STP_Data['STIP_CnRI_14_Excess2'] 
            form['Short_term_personal_CnRI_15_Recomm'] = STP_Data['STIP_CnRI_15_Recomm'] 
            form['Short_term_personal_CnRI_15_Accepted'] = STP_Data['STIP_CnRI_15_Accepted'] 
            form['Short_term_personal_CnRI_15_CoverAmount'] = STP_Data['STIP_CnRI_15_CoverAmount'] 
            form['Short_term_personal_CnRI_15_Premium1'] = STP_Data['STIP_CnRI_15_Premium1'] 
            form['Short_term_personal_CnRI_15_Premium2'] = STP_Data['STIP_CnRI_15_Premium2'] 
            form['Short_term_personal_CnRI_15_Excess1'] = STP_Data['STIP_CnRI_15_Excess1'] 
            form['Short_term_personal_CnRI_15_Excess2'] = STP_Data['STIP_CnRI_15_Excess2'] 
            form['Short_term_personal_CnRI_16_Recomm'] = STP_Data['STIP_CnRI_16_Recomm'] 
            form['Short_term_personal_CnRI_16_Accepted'] = STP_Data['STIP_CnRI_16_Accepted'] 
            form['Short_term_personal_CnRI_16_CoverAmount'] = STP_Data['STIP_CnRI_16_CoverAmount'] 
            form['Short_term_personal_CnRI_16_Premium1'] = STP_Data['STIP_CnRI_16_Premium1'] 
            form['Short_term_personal_CnRI_16_Premium2'] = STP_Data['STIP_CnRI_16_Premium2'] 
            form['Short_term_personal_CnRI_16_Excess1'] = STP_Data['STIP_CnRI_16_Excess1'] 
            form['Short_term_personal_CnRI_16_Excess2'] = STP_Data['STIP_CnRI_16_Excess2'] 
            form['Short_term_personal_CnRI_17_Recomm'] = STP_Data['STIP_CnRI_17_Recomm'] 
            form['Short_term_personal_CnRI_17_Accepted'] = STP_Data['STIP_CnRI_17_Accepted'] 
            form['Short_term_personal_CnRI_17_CoverAmount'] = STP_Data['STIP_CnRI_17_CoverAmount'] 
            form['Short_term_personal_CnRI_17_Premium1'] = STP_Data['STIP_CnRI_17_Premium1'] 
            form['Short_term_personal_CnRI_17_Premium2'] = STP_Data['STIP_CnRI_17_Premium2'] 
            form['Short_term_personal_CnRI_17_Excess1'] = STP_Data['STIP_CnRI_17_Excess1'] 
            form['Short_term_personal_CnRI_17_Excess2'] = STP_Data['STIP_CnRI_17_Excess2'] 
            form['Short_term_personal_CnRI_18_Recomm'] = STP_Data['STIP_CnRI_18_Recomm'] 
            form['Short_term_personal_CnRI_18_Accepted'] = STP_Data['STIP_CnRI_18_Accepted'] 
            form['Short_term_personal_CnRI_18_CoverAmount'] = STP_Data['STIP_CnRI_18_CoverAmount'] 
            form['Short_term_personal_CnRI_18_Premium1'] = STP_Data['STIP_CnRI_18_Premium1'] 
            form['Short_term_personal_CnRI_18_Premium2'] = STP_Data['STIP_CnRI_18_Premium2'] 
            form['Short_term_personal_CnRI_18_Excess1'] = STP_Data['STIP_CnRI_18_Excess1'] 
            form['Short_term_personal_CnRI_18_Excess2'] = STP_Data['STIP_CnRI_18_Excess2'] 
            form['Short_term_personal_CnRI_19_Recomm'] = STP_Data['STIP_CnRI_19_Recomm'] 
            form['Short_term_personal_CnRI_19_Accepted'] = STP_Data['STIP_CnRI_19_Accepted'] 
            form['Short_term_personal_CnRI_19_CoverAmount'] = STP_Data['STIP_CnRI_19_CoverAmount'] 
            form['Short_term_personal_CnRI_19_Premium1'] = STP_Data['STIP_CnRI_19_Premium1'] 
            form['Short_term_personal_CnRI_19_Premium2'] = STP_Data['STIP_CnRI_19_Premium2'] 
            form['Short_term_personal_CnRI_19_Excess1'] = STP_Data['STIP_CnRI_19_Excess1'] 
            form['Short_term_personal_CnRI_19_Excess2'] = STP_Data['STIP_CnRI_19_Excess2'] 
            form['Short_term_personal_CnRI_20_Recomm'] = STP_Data['STIP_CnRI_20_Recomm'] 
            form['Short_term_personal_CnRI_20_Accepted'] = STP_Data['STIP_CnRI_20_Accepted'] 
            form['Short_term_personal_CnRI_20_CoverAmount'] = STP_Data['STIP_CnRI_20_CoverAmount'] 
            form['Short_term_personal_CnRI_20_Premium1'] = STP_Data['STIP_CnRI_20_Premium1'] 
            form['Short_term_personal_CnRI_20_Premium2'] = STP_Data['STIP_CnRI_20_Premium2'] 
            form['Short_term_personal_CnRI_20_Excess1'] = STP_Data['STIP_CnRI_20_Excess1'] 
            form['Short_term_personal_CnRI_20_Excess2'] = STP_Data['STIP_CnRI_20_Excess2'] 
            form['Short_term_personal_CnRI_21_Recomm'] = STP_Data['STIP_CnRI_21_Recomm'] 
            form['Short_term_personal_CnRI_21_Accepted'] = STP_Data['STIP_CnRI_21_Accepted'] 
            form['Short_term_personal_CnRI_21_CoverAmount'] = STP_Data['STIP_CnRI_21_CoverAmount'] 
            form['Short_term_personal_CnRI_21_Premium1'] = STP_Data['STIP_CnRI_21_Premium1'] 
            form['Short_term_personal_CnRI_21_Premium2'] = STP_Data['STIP_CnRI_21_Premium2'] 
            form['Short_term_personal_CnRI_21_Excess1'] = STP_Data['STIP_CnRI_21_Excess1'] 
            form['Short_term_personal_CnRI_21_Excess2'] = STP_Data['STIP_CnRI_21_Excess2'] 
            form['Short_term_personal_CnRI_22_Recomm'] = STP_Data['STIP_CnRI_22_Recomm'] 
            form['Short_term_personal_CnRI_22_Accepted'] = STP_Data['STIP_CnRI_22_Accepted'] 
            form['Short_term_personal_CnRI_22_CoverAmount'] = STP_Data['STIP_CnRI_22_CoverAmount'] 
            form['Short_term_personal_CnRI_22_Premium1'] = STP_Data['STIP_CnRI_22_Premium1'] 
            form['Short_term_personal_CnRI_22_Premium2'] = STP_Data['STIP_CnRI_22_Premium2'] 
            form['Short_term_personal_CnRI_22_Excess1'] = STP_Data['STIP_CnRI_22_Excess1'] 
            form['Short_term_personal_CnRI_22_Excess2'] = STP_Data['STIP_CnRI_22_Excess2'] 
            form['Short_term_personal_CnRI_23_Recomm'] = STP_Data['STIP_CnRI_23_Recomm'] 
            form['Short_term_personal_CnRI_23_Accepted'] = STP_Data['STIP_CnRI_23_Accepted'] 
            form['Short_term_personal_CnRI_23_CoverAmount'] = STP_Data['STIP_CnRI_23_CoverAmount'] 
            form['Short_term_personal_CnRI_23_Premium1'] = STP_Data['STIP_CnRI_23_Premium1'] 
            form['Short_term_personal_CnRI_23_Premium2'] = STP_Data['STIP_CnRI_23_Premium2'] 
            form['Short_term_personal_CnRI_23_Excess1'] = STP_Data['STIP_CnRI_23_Excess1'] 
            form['Short_term_personal_CnRI_23_Excess2'] = STP_Data['STIP_CnRI_23_Excess2'] 
            form['Short_term_personal_CnRI_24_Recomm'] = STP_Data['STIP_CnRI_24_Recomm'] 
            form['Short_term_personal_CnRI_24_Accepted'] = STP_Data['STIP_CnRI_24_Accepted'] 
            form['Short_term_personal_CnRI_24_CoverAmount'] = STP_Data['STIP_CnRI_24_CoverAmount'] 
            form['Short_term_personal_CnRI_24_Premium1'] = STP_Data['STIP_CnRI_24_Premium1'] 
            form['Short_term_personal_CnRI_24_Premium2'] = STP_Data['STIP_CnRI_24_Premium2'] 
            form['Short_term_personal_CnRI_24_Excess1'] = STP_Data['STIP_CnRI_24_Excess1'] 
            form['Short_term_personal_CnRI_24_Excess2'] = STP_Data['STIP_CnRI_24_Excess2'] 
            form['Short_term_personal_CnRI_25_Recomm'] = STP_Data['STIP_CnRI_25_Recomm'] 
            form['Short_term_personal_CnRI_25_Accepted'] = STP_Data['STIP_CnRI_25_Accepted'] 
            form['Short_term_personal_CnRI_25_CoverAmount'] = STP_Data['STIP_CnRI_25_CoverAmount'] 
            form['Short_term_personal_CnRI_25_Premium1'] = STP_Data['STIP_CnRI_25_Premium1'] 
            form['Short_term_personal_CnRI_25_Premium2'] = STP_Data['STIP_CnRI_25_Premium2'] 
            form['Short_term_personal_CnRI_25_Excess1'] = STP_Data['STIP_CnRI_25_Excess1'] 
            form['Short_term_personal_CnRI_25_Excess2'] = STP_Data['STIP_CnRI_25_Excess2'] 
            form['Short_term_personal_CnRI_26_Recomm'] = STP_Data['STIP_CnRI_26_Recomm'] 
            form['Short_term_personal_CnRI_26_Accepted'] = STP_Data['STIP_CnRI_26_Accepted'] 
            form['Short_term_personal_CnRI_26_CoverAmount'] = STP_Data['STIP_CnRI_26_CoverAmount'] 
            form['Short_term_personal_CnRI_26_Premium1'] = STP_Data['STIP_CnRI_26_Premium1'] 
            form['Short_term_personal_CnRI_26_Premium2'] = STP_Data['STIP_CnRI_26_Premium2'] 
            form['Short_term_personal_CnRI_26_Excess1'] = STP_Data['STIP_CnRI_26_Excess1'] 
            form['Short_term_personal_CnRI_26_Excess2'] = STP_Data['STIP_CnRI_26_Excess2'] 
            form['Short_term_personal_CnRI_27_Recomm'] = STP_Data['STIP_CnRI_27_Recomm'] 
            form['Short_term_personal_CnRI_27_Accepted'] = STP_Data['STIP_CnRI_27_Accepted'] 
            form['Short_term_personal_CnRI_27_CoverAmount'] = STP_Data['STIP_CnRI_27_CoverAmount'] 
            form['Short_term_personal_CnRI_27_Premium1'] = STP_Data['STIP_CnRI_27_Premium1'] 
            form['Short_term_personal_CnRI_27_Premium2'] = STP_Data['STIP_CnRI_27_Premium2'] 
            form['Short_term_personal_CnRI_27_Excess1'] = STP_Data['STIP_CnRI_27_Excess1'] 
            form['Short_term_personal_CnRI_27_Excess2'] = STP_Data['STIP_CnRI_27_Excess2'] 
            form['Short_term_personal_CnRI_FeeCharges'] = STP_Data['STIP_CnRI_FeeCharges'] 
            form['Short_term_personal_CnRI_Commission'] = STP_Data['STIP_CnRI_Commission'] 
            form['Short_term_personal_CnRI_TotalPremium'] = STP_Data['STIP_CnRI_TotalPremium'] 
            form['Short_term_personal_CnRen_Existing_Company'] = STP_Data['STIP_CnRen_Existing_Company'] 
            form['Short_term_personal_CnRen_Replacement_Company'] = STP_Data['STIP_CnRen_Replacement_Company'] 
            form['Short_term_personal_CnRen_Existing_Provider'] = STP_Data['STIP_CnRen_Existing_Provider'] 
            form['Short_term_personal_CnRen_Replacement_Provider'] = STP_Data['STIP_CnRen_Replacement_Provider'] 
            form['Short_term_personal_CnRen_Existing_Product'] = STP_Data['STIP_CnRen_Existing_Product'] 
            form['Short_term_personal_CnRen_Replacement_Product'] = STP_Data['STIP_CnRen_Replacement_Product'] 
            form['Short_term_personal_CnRen_1_Recomm'] = STP_Data['STIP_CnRen_1_Recomm'] 
            form['Short_term_personal_CnRen_1_Accepted'] = STP_Data['STIP_CnRen_1_Accepted'] 
            form['Short_term_personal_CnRen_1_CoverAmount'] = STP_Data['STIP_CnRen_1_CoverAmount'] 
            form['Short_term_personal_CnRen_1_Premium1'] = STP_Data['STIP_CnRen_1_Premium1'] 
            form['Short_term_personal_CnRen_1_Premium2'] = STP_Data['STIP_CnRen_1_Premium2'] 
            form['Short_term_personal_CnRen_1_Excess1'] = STP_Data['STIP_CnRen_1_Excess1'] 
            form['Short_term_personal_CnRen_1_Excess2'] = STP_Data['STIP_CnRen_1_Excess2'] 
            form['Short_term_personal_CnRen_2_Recomm'] = STP_Data['STIP_CnRen_2_Recomm'] 
            form['Short_term_personal_CnRen_2_Accepted'] = STP_Data['STIP_CnRen_2_Accepted'] 
            form['Short_term_personal_CnRen_2_CoverAmount'] = STP_Data['STIP_CnRen_2_CoverAmount'] 
            form['Short_term_personal_CnRen_2_Premium1'] = STP_Data['STIP_CnRen_2_Premium1'] 
            form['Short_term_personal_CnRen_2_Premium2'] = STP_Data['STIP_CnRen_2_Premium2'] 
            form['Short_term_personal_CnRen_2_Excess1'] = STP_Data['STIP_CnRen_2_Excess1'] 
            form['Short_term_personal_CnRen_2_Excess2'] = STP_Data['STIP_CnRen_2_Excess2'] 
            form['Short_term_personal_CnRen_3_Recomm'] = STP_Data['STIP_CnRen_3_Recomm'] 
            form['Short_term_personal_CnRen_3_Accepted'] = STP_Data['STIP_CnRen_3_Accepted'] 
            form['Short_term_personal_CnRen_3_CoverAmount'] = STP_Data['STIP_CnRen_3_CoverAmount'] 
            form['Short_term_personal_CnRen_3_Premium1'] = STP_Data['STIP_CnRen_3_Premium1'] 
            form['Short_term_personal_CnRen_3_Premium2'] = STP_Data['STIP_CnRen_3_Premium2'] 
            form['Short_term_personal_CnRen_3_Excess1'] = STP_Data['STIP_CnRen_3_Excess1'] 
            form['Short_term_personal_CnRen_3_Excess2'] = STP_Data['STIP_CnRen_3_Excess2'] 
            form['Short_term_personal_CnRen_4_Recomm'] = STP_Data['STIP_CnRen_4_Recomm'] 
            form['Short_term_personal_CnRen_4_Accepted'] = STP_Data['STIP_CnRen_4_Accepted'] 
            form['Short_term_personal_CnRen_4_CoverAmount'] = STP_Data['STIP_CnRen_4_CoverAmount'] 
            form['Short_term_personal_CnRen_4_Premium1'] = STP_Data['STIP_CnRen_4_Premium1'] 
            form['Short_term_personal_CnRen_4_Premium2'] = STP_Data['STIP_CnRen_4_Premium2'] 
            form['Short_term_personal_CnRen_4_Excess1'] = STP_Data['STIP_CnRen_4_Excess1'] 
            form['Short_term_personal_CnRen_4_Excess2'] = STP_Data['STIP_CnRen_4_Excess2'] 
            form['Short_term_personal_CnRen_5_Recomm'] = STP_Data['STIP_CnRen_5_Recomm'] 
            form['Short_term_personal_CnRen_5_Accepted'] = STP_Data['STIP_CnRen_5_Accepted'] 
            form['Short_term_personal_CnRen_5_CoverAmount'] = STP_Data['STIP_CnRen_5_CoverAmount'] 
            form['Short_term_personal_CnRen_5_Premium1'] = STP_Data['STIP_CnRen_5_Premium1'] 
            form['Short_term_personal_CnRen_5_Premium2'] = STP_Data['STIP_CnRen_5_Premium2'] 
            form['Short_term_personal_CnRen_5_Excess1'] = STP_Data['STIP_CnRen_5_Excess1'] 
            form['Short_term_personal_CnRen_5_Excess2'] = STP_Data['STIP_CnRen_5_Excess2'] 
            form['Short_term_personal_CnRen_6_Recomm'] = STP_Data['STIP_CnRen_6_Recomm'] 
            form['Short_term_personal_CnRen_6_Accepted'] = STP_Data['STIP_CnRen_6_Accepted'] 
            form['Short_term_personal_CnRen_6_CoverAmount'] = STP_Data['STIP_CnRen_6_CoverAmount'] 
            form['Short_term_personal_CnRen_6_Premium1'] = STP_Data['STIP_CnRen_6_Premium1'] 
            form['Short_term_personal_CnRen_6_Premium2'] = STP_Data['STIP_CnRen_6_Premium2'] 
            form['Short_term_personal_CnRen_6_Excess1'] = STP_Data['STIP_CnRen_6_Excess1'] 
            form['Short_term_personal_CnRen_6_Excess2'] = STP_Data['STIP_CnRen_6_Excess2'] 
            form['Short_term_personal_CnRen_7_Recomm'] = STP_Data['STIP_CnRen_7_Recomm'] 
            form['Short_term_personal_CnRen_7_Accepted'] = STP_Data['STIP_CnRen_7_Accepted'] 
            form['Short_term_personal_CnRen_7_CoverAmount'] = STP_Data['STIP_CnRen_7_CoverAmount'] 
            form['Short_term_personal_CnRen_7_Premium1'] = STP_Data['STIP_CnRen_7_Premium1'] 
            form['Short_term_personal_CnRen_7_Premium2'] = STP_Data['STIP_CnRen_7_Premium2'] 
            form['Short_term_personal_CnRen_7_Excess1'] = STP_Data['STIP_CnRen_7_Excess1'] 
            form['Short_term_personal_CnRen_7_Excess2'] = STP_Data['STIP_CnRen_7_Excess2'] 
            form['Short_term_personal_CnRen_8_Recomm'] = STP_Data['STIP_CnRen_8_Recomm'] 
            form['Short_term_personal_CnRen_8_Accepted'] = STP_Data['STIP_CnRen_8_Accepted'] 
            form['Short_term_personal_CnRen_8_CoverAmount'] = STP_Data['STIP_CnRen_8_CoverAmount'] 
            form['Short_term_personal_CnRen_8_Premium1'] = STP_Data['STIP_CnRen_8_Premium1'] 
            form['Short_term_personal_CnRen_8_Premium2'] = STP_Data['STIP_CnRen_8_Premium2'] 
            form['Short_term_personal_CnRen_8_Excess1'] = STP_Data['STIP_CnRen_8_Excess1'] 
            form['Short_term_personal_CnRen_8_Excess2'] = STP_Data['STIP_CnRen_8_Excess2'] 
            form['Short_term_personal_CnRen_9_Recomm'] = STP_Data['STIP_CnRen_9_Recomm'] 
            form['Short_term_personal_CnRen_9_Accepted'] = STP_Data['STIP_CnRen_9_Accepted'] 
            form['Short_term_personal_CnRen_9_CoverAmount'] = STP_Data['STIP_CnRen_9_CoverAmount'] 
            form['Short_term_personal_CnRen_9_Premium1'] = STP_Data['STIP_CnRen_9_Premium1'] 
            form['Short_term_personal_CnRen_9_Premium2'] = STP_Data['STIP_CnRen_9_Premium2'] 
            form['Short_term_personal_CnRen_9_Excess1'] = STP_Data['STIP_CnRen_9_Excess1'] 
            form['Short_term_personal_CnRen_9_Excess2'] = STP_Data['STIP_CnRen_9_Excess2'] 
            form['Short_term_personal_CnRen_10_Recomm'] = STP_Data['STIP_CnRen_10_Recomm'] 
            form['Short_term_personal_CnRen_10_Accepted'] = STP_Data['STIP_CnRen_10_Accepted'] 
            form['Short_term_personal_CnRen_10_CoverAmount'] = STP_Data['STIP_CnRen_10_CoverAmount'] 
            form['Short_term_personal_CnRen_10_Premium1'] = STP_Data['STIP_CnRen_10_Premium1'] 
            form['Short_term_personal_CnRen_10_Premium2'] = STP_Data['STIP_CnRen_10_Premium2'] 
            form['Short_term_personal_CnRen_10_Excess1'] = STP_Data['STIP_CnRen_10_Excess1'] 
            form['Short_term_personal_CnRen_10_Excess2'] = STP_Data['STIP_CnRen_10_Excess2'] 
            form['Short_term_personal_CnRen_11_Recomm'] = STP_Data['STIP_CnRen_11_Recomm'] 
            form['Short_term_personal_CnRen_11_Accepted'] = STP_Data['STIP_CnRen_11_Accepted'] 
            form['Short_term_personal_CnRen_11_CoverAmount'] = STP_Data['STIP_CnRen_11_CoverAmount'] 
            form['Short_term_personal_CnRen_11_Premium1'] = STP_Data['STIP_CnRen_11_Premium1'] 
            form['Short_term_personal_CnRen_11_Premium2'] = STP_Data['STIP_CnRen_11_Premium2'] 
            form['Short_term_personal_CnRen_11_Excess1'] = STP_Data['STIP_CnRen_11_Excess1'] 
            form['Short_term_personal_CnRen_11_Excess2'] = STP_Data['STIP_CnRen_11_Excess2'] 
            form['Short_term_personal_CnRen_12_Recomm'] = STP_Data['STIP_CnRen_12_Recomm'] 
            form['Short_term_personal_CnRen_12_Accepted'] = STP_Data['STIP_CnRen_12_Accepted'] 
            form['Short_term_personal_CnRen_12_CoverAmount'] = STP_Data['STIP_CnRen_12_CoverAmount'] 
            form['Short_term_personal_CnRen_12_Premium1'] = STP_Data['STIP_CnRen_12_Premium1'] 
            form['Short_term_personal_CnRen_12_Premium2'] = STP_Data['STIP_CnRen_12_Premium2'] 
            form['Short_term_personal_CnRen_12_Excess1'] = STP_Data['STIP_CnRen_12_Excess1'] 
            form['Short_term_personal_CnRen_12_Excess2'] = STP_Data['STIP_CnRen_12_Excess2'] 
            form['Short_term_personal_CnRen_13_Recomm'] = STP_Data['STIP_CnRen_13_Recomm'] 
            form['Short_term_personal_CnRen_13_Accepted'] = STP_Data['STIP_CnRen_13_Accepted'] 
            form['Short_term_personal_CnRen_13_CoverAmount'] = STP_Data['STIP_CnRen_13_CoverAmount'] 
            form['Short_term_personal_CnRen_13_Premium1'] = STP_Data['STIP_CnRen_13_Premium1'] 
            form['Short_term_personal_CnRen_13_Premium2'] = STP_Data['STIP_CnRen_13_Premium2'] 
            form['Short_term_personal_CnRen_13_Excess1'] = STP_Data['STIP_CnRen_13_Excess1'] 
            form['Short_term_personal_CnRen_13_Excess2'] = STP_Data['STIP_CnRen_13_Excess2'] 
            form['Short_term_personal_CnRen_14_Recomm'] = STP_Data['STIP_CnRen_14_Recomm'] 
            form['Short_term_personal_CnRen_14_Accepted'] = STP_Data['STIP_CnRen_14_Accepted'] 
            form['Short_term_personal_CnRen_14_CoverAmount'] = STP_Data['STIP_CnRen_14_CoverAmount'] 
            form['Short_term_personal_CnRen_14_Premium1'] = STP_Data['STIP_CnRen_14_Premium1'] 
            form['Short_term_personal_CnRen_14_Premium2'] = STP_Data['STIP_CnRen_14_Premium2'] 
            form['Short_term_personal_CnRen_14_Excess1'] = STP_Data['STIP_CnRen_14_Excess1'] 
            form['Short_term_personal_CnRen_14_Excess2'] = STP_Data['STIP_CnRen_14_Excess2'] 
            form['Short_term_personal_CnRen_15_Recomm'] = STP_Data['STIP_CnRen_15_Recomm'] 
            form['Short_term_personal_CnRen_15_Accepted'] = STP_Data['STIP_CnRen_15_Accepted'] 
            form['Short_term_personal_CnRen_15_CoverAmount'] = STP_Data['STIP_CnRen_15_CoverAmount'] 
            form['Short_term_personal_CnRen_15_Premium1'] = STP_Data['STIP_CnRen_15_Premium1'] 
            form['Short_term_personal_CnRen_15_Premium2'] = STP_Data['STIP_CnRen_15_Premium2'] 
            form['Short_term_personal_CnRen_15_Excess1'] = STP_Data['STIP_CnRen_15_Excess1'] 
            form['Short_term_personal_CnRen_15_Excess2'] = STP_Data['STIP_CnRen_15_Excess2'] 
            form['Short_term_personal_CnRen_16_Recomm'] = STP_Data['STIP_CnRen_16_Recomm'] 
            form['Short_term_personal_CnRen_16_Accepted'] = STP_Data['STIP_CnRen_16_Accepted'] 
            form['Short_term_personal_CnRen_16_CoverAmount'] = STP_Data['STIP_CnRen_16_CoverAmount'] 
            form['Short_term_personal_CnRen_16_Premium1'] = STP_Data['STIP_CnRen_16_Premium1'] 
            form['Short_term_personal_CnRen_16_Premium2'] = STP_Data['STIP_CnRen_16_Premium2'] 
            form['Short_term_personal_CnRen_16_Excess1'] = STP_Data['STIP_CnRen_16_Excess1'] 
            form['Short_term_personal_CnRen_16_Excess2'] = STP_Data['STIP_CnRen_16_Excess2'] 
            form['Short_term_personal_CnRen_17_Recomm'] = STP_Data['STIP_CnRen_17_Recomm'] 
            form['Short_term_personal_CnRen_17_Accepted'] = STP_Data['STIP_CnRen_17_Accepted'] 
            form['Short_term_personal_CnRen_17_CoverAmount'] = STP_Data['STIP_CnRen_17_CoverAmount'] 
            form['Short_term_personal_CnRen_17_Premium1'] = STP_Data['STIP_CnRen_17_Premium1'] 
            form['Short_term_personal_CnRen_17_Premium2'] = STP_Data['STIP_CnRen_17_Premium2'] 
            form['Short_term_personal_CnRen_17_Excess1'] = STP_Data['STIP_CnRen_17_Excess1'] 
            form['Short_term_personal_CnRen_17_Excess2'] = STP_Data['STIP_CnRen_17_Excess2'] 
            form['Short_term_personal_CnRen_18_Recomm'] = STP_Data['STIP_CnRen_18_Recomm'] 
            form['Short_term_personal_CnRen_18_Accepted'] = STP_Data['STIP_CnRen_18_Accepted'] 
            form['Short_term_personal_CnRen_18_CoverAmount'] = STP_Data['STIP_CnRen_18_CoverAmount'] 
            form['Short_term_personal_CnRen_18_Premium1'] = STP_Data['STIP_CnRen_18_Premium1'] 
            form['Short_term_personal_CnRen_18_Premium2'] = STP_Data['STIP_CnRen_18_Premium2'] 
            form['Short_term_personal_CnRen_18_Excess1'] = STP_Data['STIP_CnRen_18_Excess1'] 
            form['Short_term_personal_CnRen_18_Excess2'] = STP_Data['STIP_CnRen_18_Excess2'] 
            form['Short_term_personal_CnRen_19_Recomm'] = STP_Data['STIP_CnRen_19_Recomm'] 
            form['Short_term_personal_CnRen_19_Accepted'] = STP_Data['STIP_CnRen_19_Accepted'] 
            form['Short_term_personal_CnRen_19_CoverAmount'] = STP_Data['STIP_CnRen_19_CoverAmount'] 
            form['Short_term_personal_CnRen_19_Premium1'] = STP_Data['STIP_CnRen_19_Premium1'] 
            form['Short_term_personal_CnRen_19_Premium2'] = STP_Data['STIP_CnRen_19_Premium2'] 
            form['Short_term_personal_CnRen_19_Excess1'] = STP_Data['STIP_CnRen_19_Excess1'] 
            form['Short_term_personal_CnRen_19_Excess2'] = STP_Data['STIP_CnRen_19_Excess2'] 
            form['Short_term_personal_CnRen_20_Recomm'] = STP_Data['STIP_CnRen_20_Recomm'] 
            form['Short_term_personal_CnRen_20_Accepted'] = STP_Data['STIP_CnRen_20_Accepted'] 
            form['Short_term_personal_CnRen_20_CoverAmount'] = STP_Data['STIP_CnRen_20_CoverAmount'] 
            form['Short_term_personal_CnRen_20_Premium1'] = STP_Data['STIP_CnRen_20_Premium1'] 
            form['Short_term_personal_CnRen_20_Premium2'] = STP_Data['STIP_CnRen_20_Premium2'] 
            form['Short_term_personal_CnRen_20_Excess1'] = STP_Data['STIP_CnRen_20_Excess1'] 
            form['Short_term_personal_CnRen_20_Excess2'] = STP_Data['STIP_CnRen_20_Excess2'] 
            form['Short_term_personal_CnRen_21_Recomm'] = STP_Data['STIP_CnRen_21_Recomm'] 
            form['Short_term_personal_CnRen_21_Accepted'] = STP_Data['STIP_CnRen_21_Accepted'] 
            form['Short_term_personal_CnRen_21_CoverAmount'] = STP_Data['STIP_CnRen_21_CoverAmount'] 
            form['Short_term_personal_CnRen_21_Premium1'] = STP_Data['STIP_CnRen_21_Premium1'] 
            form['Short_term_personal_CnRen_21_Premium2'] = STP_Data['STIP_CnRen_21_Premium2'] 
            form['Short_term_personal_CnRen_21_Excess1'] = STP_Data['STIP_CnRen_21_Excess1'] 
            form['Short_term_personal_CnRen_21_Excess2'] = STP_Data['STIP_CnRen_21_Excess2'] 
            form['Short_term_personal_CnRen_22_Recomm'] = STP_Data['STIP_CnRen_22_Recomm'] 
            form['Short_term_personal_CnRen_22_Accepted'] = STP_Data['STIP_CnRen_22_Accepted'] 
            form['Short_term_personal_CnRen_22_CoverAmount'] = STP_Data['STIP_CnRen_22_CoverAmount'] 
            form['Short_term_personal_CnRen_22_Premium1'] = STP_Data['STIP_CnRen_22_Premium1'] 
            form['Short_term_personal_CnRen_22_Premium2'] = STP_Data['STIP_CnRen_22_Premium2'] 
            form['Short_term_personal_CnRen_22_Excess1'] = STP_Data['STIP_CnRen_22_Excess1'] 
            form['Short_term_personal_CnRen_22_Excess2'] = STP_Data['STIP_CnRen_22_Excess2'] 
            form['Short_term_personal_CnRen_23_Recomm'] = STP_Data['STIP_CnRen_23_Recomm'] 
            form['Short_term_personal_CnRen_23_Accepted'] = STP_Data['STIP_CnRen_23_Accepted'] 
            form['Short_term_personal_CnRen_23_CoverAmount'] = STP_Data['STIP_CnRen_23_CoverAmount'] 
            form['Short_term_personal_CnRen_23_Premium1'] = STP_Data['STIP_CnRen_23_Premium1'] 
            form['Short_term_personal_CnRen_23_Premium2'] = STP_Data['STIP_CnRen_23_Premium2'] 
            form['Short_term_personal_CnRen_23_Excess1'] = STP_Data['STIP_CnRen_23_Excess1'] 
            form['Short_term_personal_CnRen_23_Excess2'] = STP_Data['STIP_CnRen_23_Excess2'] 
            form['Short_term_personal_CnRen_24_Recomm'] = STP_Data['STIP_CnRen_24_Recomm'] 
            form['Short_term_personal_CnRen_24_Accepted'] = STP_Data['STIP_CnRen_24_Accepted'] 
            form['Short_term_personal_CnRen_24_CoverAmount'] = STP_Data['STIP_CnRen_24_CoverAmount'] 
            form['Short_term_personal_CnRen_24_Premium1'] = STP_Data['STIP_CnRen_24_Premium1'] 
            form['Short_term_personal_CnRen_24_Premium2'] = STP_Data['STIP_CnRen_24_Premium2'] 
            form['Short_term_personal_CnRen_24_Excess1'] = STP_Data['STIP_CnRen_24_Excess1'] 
            form['Short_term_personal_CnRen_24_Excess2'] = STP_Data['STIP_CnRen_24_Excess2'] 
            form['Short_term_personal_CnRen_25_Recomm'] = STP_Data['STIP_CnRen_25_Recomm'] 
            form['Short_term_personal_CnRen_25_Accepted'] = STP_Data['STIP_CnRen_25_Accepted'] 
            form['Short_term_personal_CnRen_25_CoverAmount'] = STP_Data['STIP_CnRen_25_CoverAmount'] 
            form['Short_term_personal_CnRen_25_Premium1'] = STP_Data['STIP_CnRen_25_Premium1'] 
            form['Short_term_personal_CnRen_25_Premium2'] = STP_Data['STIP_CnRen_25_Premium2'] 
            form['Short_term_personal_CnRen_25_Excess1'] = STP_Data['STIP_CnRen_25_Excess1'] 
            form['Short_term_personal_CnRen_25_Excess2'] = STP_Data['STIP_CnRen_25_Excess2'] 
            form['Short_term_personal_CnRen_26_Recomm'] = STP_Data['STIP_CnRen_26_Recomm'] 
            form['Short_term_personal_CnRen_26_Accepted'] = STP_Data['STIP_CnRen_26_Accepted'] 
            form['Short_term_personal_CnRen_26_CoverAmount'] = STP_Data['STIP_CnRen_26_CoverAmount'] 
            form['Short_term_personal_CnRen_26_Premium1'] = STP_Data['STIP_CnRen_26_Premium1'] 
            form['Short_term_personal_CnRen_26_Premium2'] = STP_Data['STIP_CnRen_26_Premium2'] 
            form['Short_term_personal_CnRen_26_Excess1'] = STP_Data['STIP_CnRen_26_Excess1'] 
            form['Short_term_personal_CnRen_26_Excess2'] = STP_Data['STIP_CnRen_26_Excess2'] 
            form['Short_term_personal_CnRen_27_Recomm'] = STP_Data['STIP_CnRen_27_Recomm'] 
            form['Short_term_personal_CnRen_27_Accepted'] = STP_Data['STIP_CnRen_27_Accepted'] 
            form['Short_term_personal_CnRen_27_CoverAmount'] = STP_Data['STIP_CnRen_27_CoverAmount'] 
            form['Short_term_personal_CnRen_27_Premium1'] = STP_Data['STIP_CnRen_27_Premium1'] 
            form['Short_term_personal_CnRen_27_Premium2'] = STP_Data['STIP_CnRen_27_Premium2'] 
            form['Short_term_personal_CnRen_27_Excess1'] = STP_Data['STIP_CnRen_27_Excess1'] 
            form['Short_term_personal_CnRen_27_Excess2'] = STP_Data['STIP_CnRen_27_Excess2'] 
            form['Short_term_personal_CnRen_FeeCharges'] = STP_Data['STIP_CnRen_FeeCharges'] 
            form['Short_term_personal_CnRen_Commission'] = STP_Data['STIP_CnRen_Commission'] 
            form['Short_term_personal_CnRen_TotalPremium'] = STP_Data['STIP_CnRen_TotalPremium'] 
            form['Short_term_personal_CnRI_AdviseGiven'] = "Yes" if int(STP_Data['STIP_CnRI_AdviseGiven']) == 1 else "No" 
            form['Short_term_personal_CnRI_ReplacePurpose'] = STP_Data['STIP_CnRI_ReplacePurpose'] 
            form['Short_term_personal_CnRI_ReplaceReason'] = STP_Data['STIP_CnRI_ReplaceReason'] 
            form['Short_term_personal_CnRI_ReplaceSupplier'] = STP_Data['STIP_CnRI_ReplaceSupplier'] 
            form['Short_term_personal_HC_ResidentialArea'] = STP_Data['STIP_HC_ResidentialArea'] 
            form['Short_term_personal_HC_StreetNumber'] = STP_Data['STIP_HC_StreetNumber'] 
            form['Short_term_personal_HC_PostalCode'] = STP_Data['STIP_HC_PostalCode'] 
            form['Short_term_personal_HC_ResidenceType'] = STP_Data['STIP_HC_ResidenceType'] 
            form['Short_term_personal_HC_Flat_GroundLevel'] = STP_Data['STIP_HC_Flat_GroundLevel'] 
            form['Short_term_personal_HC_WallConstruction'] = STP_Data['STIP_HC_WallConstruction'] 
            form['Short_term_personal_HC_RoofConstruction'] = STP_Data['STIP_HC_RoofConstruction'] 
            form['Short_term_personal_HC_SM_BurglarBar'] = STP_Data['STIP_HC_SM_BurglarBar'] 
            form['Short_term_personal_HC_SM_SecurityGate'] = STP_Data['STIP_HC_SM_SecurityGate'] 
            form['Short_term_personal_HC_SM_AlarmSystem'] = STP_Data['STIP_HC_SM_AlarmSystem'] 
            form['Short_term_personal_HC_SM_SecurityArea'] = STP_Data['STIP_HC_SM_SecurityArea'] 
            form['Short_term_personal_HC_NoClaimBonus'] = STP_Data['STIP_HC_NoClaimBonus'] 
            form['Short_term_personal_HC_SumInsured'] = STP_Data['STIP_HC_SumInsured'] 
            form['Short_term_personal_HCEx_BusinessType'] = STP_Data['STIP_HCEx_BusinessType'] 
            form['Short_term_personal_HCEx_InsuredAmount'] = STP_Data['STIP_HCEx_InsuredAmount'] 
            form['Short_term_personal_HC_ADI_General1'] = STP_Data['STIP_HC_ADI_General1'] 
            form['Short_term_personal_HC_ADI_General2'] = STP_Data['STIP_HC_ADI_General2'] 
            form['Short_term_personal_HC_ADI_MechElecBreakdown'] = STP_Data['STIP_HC_ADI_MechElecBreakdown'] 
            form['Short_term_personal_HC_ADI_ElectronicalBreakdown'] = STP_Data['STIP_HC_ADI_ElectronicalBreakdown'] 
            form['Short_term_personal_HC_ADI_PowerSurgeCover1'] = STP_Data['STIP_HC_ADI_PowerSurgeCover1'] 
            form['Short_term_personal_HC_ADI_PowerSurgeCover2'] = STP_Data['STIP_HC_ADI_PowerSurgeCover2'] 
            form['Short_term_personal_HC_ADI_PowerSurgeCover3'] = STP_Data['STIP_HC_ADI_PowerSurgeCover3'] 
            form['Short_term_personal_HC_Fee'] = STP_Data['STIP_HC_Fee'] 
            form['Short_term_personal_HC_Commission'] = STP_Data['STIP_HC_Commission'] 
            form['Short_term_personal_HC_TotalPremium'] = STP_Data['STIP_HC_TotalPremium'] 
            form['Short_term_personal_Build_ResidentialArea'] = STP_Data['STIP_Build_ResidentialArea'] 
            form['Short_term_personal_Build_StreetNumber'] = STP_Data['STIP_Build_StreetNumber'] 
            form['Short_term_personal_Build_PostalCode'] = STP_Data['STIP_Build_PostalCode'] 
            form['Short_term_personal_Build_ResidenceType'] = STP_Data['STIP_Build_ResidenceType'] 
            form['Short_term_personal_Build_Type'] = STP_Data['STIP_Build_Type'] 
            form['Short_term_personal_Build_Voluntary'] = STP_Data['STIP_Build_Voluntary'] 
            form['Short_term_personal_Build_SnL'] = STP_Data['STIP_Build_SnL'] 
            form['Short_term_personal_Build_ADI'] = STP_Data['STIP_Build_ADI'] 
            form['Short_term_personal_Build_WallConstruction'] = STP_Data['STIP_Build_WallConstruction'] 
            form['Short_term_personal_Build_RoofConstruction'] = STP_Data['STIP_Build_RoofConstruction'] 
            form['Short_term_personal_Build_Fee'] = STP_Data['STIP_Build_Fee'] 
            form['Short_term_personal_Build_Commission'] = STP_Data['STIP_Build_Commission'] 
            form['Short_term_personal_Build_TotalPremium'] = STP_Data['STIP_Build_TotalPremium'] 
            form['Short_term_personal_Build_AdditionalAdvise'] = STP_Data['STIP_Build_AdditionalAdvise'] 
            form['Short_term_personal_AddProp_ResidentialArea'] = STP_Data['STIP_AddProp_ResidentialArea'] 
            form['Short_term_personal_AddProp_StreetNumber'] = STP_Data['STIP_AddProp_StreetNumber'] 
            form['Short_term_personal_AddProp_PostalCode'] = STP_Data['STIP_AddProp_PostalCode'] 
            form['Short_term_personal_AddProp_ResidenceType'] = STP_Data['STIP_AddProp_ResidenceType'] 
            form['Short_term_personal_AddProp_Type'] = STP_Data['STIP_AddProp_Type'] 
            form['Short_term_personal_AddProp_Voluntary'] = STP_Data['STIP_AddProp_Voluntary'] 
            form['Short_term_personal_AddProp_SnL'] = STP_Data['STIP_AddProp_SnL'] 
            form['Short_term_personal_AddProp_ADI'] = STP_Data['STIP_AddProp_ADI'] 
            form['Short_term_personal_AddProp_WallConstruction'] = STP_Data['STIP_AddProp_WallConstruction'] 
            form['Short_term_personal_AddProp_RoofConstruction'] = STP_Data['STIP_AddProp_RoofConstruction'] 
            form['Short_term_personal_AddProp_Fee'] = STP_Data['STIP_AddProp_Fee'] 
            form['Short_term_personal_AddProp_Commission'] = STP_Data['STIP_AddProp_Commission'] 
            form['Short_term_personal_AddProp_TotalPremium'] = STP_Data['STIP_AddProp_TotalPremium'] 
            form['Short_term_personal_AddProp_AdditionalAdvise'] = STP_Data['STIP_AddProp_AdditionalAdvise'] 
            form['Short_term_personal_Vehicle_Owner'] = STP_Data['STIP_Vehicle_Owner'] 
            form['Short_term_personal_Vehicle_RegOwner'] = STP_Data['STIP_Vehicle_RegOwner'] 
            form['Short_term_personal_Vehicle_Usage'] = STP_Data['STIP_Vehicle_Usage'] 
            parkOptions = ["", "Overnight Parking", "Locked Garage", "Carport", "Security Complex", "Behind Gates", "Others"]
            form['Short_term_personal_Vehicle_ONParkingOptions'] = parkOptions[int(STP_Data['STIP_Vehicle_ONParkingOptions'])] 
            form['Short_term_personal_Vehicle_ONParking'] = STP_Data['STIP_Vehicle_ONParking'] 
            form['Short_term_personal_Vehicle_ONOtherParking'] = STP_Data['STIP_Vehicle_ONOtherParking']
            coverTypes = ["", "Comprehensive (cover for comprehensive risks)", "Limited (Fire and Theft)", "Third Party (cover for claims of 3rd parties)", "Third Party - Theft excluded (cover for loss or damage except by theft)"] 
            form['Short_term_personal_Vehicle_CoverType'] = coverTypes[int(STP_Data['STIP_Vehicle_CoverType'] )]
            form['Short_term_personal_Vehicle_SM1'] = STP_Data['STIP_Vehicle_SM1'] 
            form['Short_term_personal_Vehicle_SM2'] = STP_Data['STIP_Vehicle_SM2'] 
            form['Short_term_personal_Vehicle_SM3'] = STP_Data['STIP_Vehicle_SM3'] 
            form['Short_term_personal_Vehicle_SM4'] = STP_Data['STIP_Vehicle_SM4'] 
            form['Short_term_personal_Vehicle_Driver'] = STP_Data['STIP_Vehicle_Driver'] 
            form['Short_term_personal_Vehicle_DriverLicIssDate'] = STP_Data['STIP_Vehicle_DriverLicIssDate'] 
            form['Short_term_personal_Vehicle_LicCode'] = STP_Data['STIP_Vehicle_LicCode'] 
            form['Short_term_personal_Vehicle_SumInsured'] = STP_Data['STIP_Vehicle_SumInsured'] 
            form['Short_term_personal_Vehicle_ClaimBonus'] = STP_Data['STIP_Vehicle_ClaimBonus'] 
            form['Short_term_personal_Vehicle_VoluntaryExcess'] = STP_Data['STIP_Vehicle_VoluntaryExcess'] 
            form['Short_term_personal_Vehicle_Extras1'] = STP_Data['STIP_Vehicle_Extras1'] 
            form['Short_term_personal_Vehicle_ExtrasAmount1'] = STP_Data['STIP_Vehicle_ExtrasAmount1'] 
            form['Short_term_personal_Vehicle_Extras2'] = STP_Data['STIP_Vehicle_Extras2'] 
            form['Short_term_personal_Vehicle_ExtrasAmount2'] = STP_Data['STIP_Vehicle_ExtrasAmount2'] 
            form['Short_term_personal_Vehicle_Extras3'] = STP_Data['STIP_Vehicle_Extras3'] 
            form['Short_term_personal_Vehicle_ExtrasAmount3'] = STP_Data['STIP_Vehicle_ExtrasAmount3'] 
            form['Short_term_personal_Vehicle_Extras4'] = STP_Data['STIP_Vehicle_Extras4'] 
            form['Short_term_personal_Vehicle_ExtrasAmount4'] = STP_Data['STIP_Vehicle_ExtrasAmount4'] 
            form['Short_term_personal_Vehicle_Extras5'] = STP_Data['STIP_Vehicle_Extras5'] 
            form['Short_term_personal_Vehicle_ExtrasAmount5'] = STP_Data['STIP_Vehicle_ExtrasAmount5'] 
            form['Short_term_personal_Vehicle_Extras6'] = STP_Data['STIP_Vehicle_Extras6'] 
            form['Short_term_personal_Vehicle_ExtrasAmount6'] = STP_Data['STIP_Vehicle_ExtrasAmount6'] 
            form['Short_term_personal_Vehicle_Extras7'] = STP_Data['STIP_Vehicle_Extras7'] 
            form['Short_term_personal_Vehicle_ExtrasAmount7'] = STP_Data['STIP_Vehicle_ExtrasAmount7'] 
            form['Short_term_personal_Vehicle_Extras8'] = STP_Data['STIP_Vehicle_Extras8'] 
            form['Short_term_personal_Vehicle_ExtrasAmount8'] = STP_Data['STIP_Vehicle_ExtrasAmount8'] 
            form['Short_term_personal_Vehicle_Extras9'] = STP_Data['STIP_Vehicle_Extras9'] 
            form['Short_term_personal_Vehicle_ExtrasAmount9'] = STP_Data['STIP_Vehicle_ExtrasAmount9'] 
            form['Short_term_personal_Vehicle_Extras10'] = STP_Data['STIP_Vehicle_Extras10'] 
            form['Short_term_personal_Vehicle_ExtrasAmount10'] = STP_Data['STIP_Vehicle_ExtrasAmount10'] 
            form['Short_term_personal_Vehicle_Extras11'] = STP_Data['STIP_Vehicle_Extras11'] 
            form['Short_term_personal_Vehicle_ExtrasAmount11'] = STP_Data['STIP_Vehicle_ExtrasAmount11'] 
            form['Short_term_personal_Vehicle_Extras12'] = STP_Data['STIP_Vehicle_Extras12'] 
            form['Short_term_personal_Vehicle_ExtrasAmount12'] = STP_Data['STIP_Vehicle_ExtrasAmount12'] 
            form['Short_term_personal_Vehicle_Extras13'] = STP_Data['STIP_Vehicle_Extras13'] 
            form['Short_term_personal_Vehicle_ExtrasAmount13'] = STP_Data['STIP_Vehicle_ExtrasAmount13'] 
            form['Short_term_personal_Vehicle_Extras14'] = STP_Data['STIP_Vehicle_Extras14'] 
            form['Short_term_personal_Vehicle_ExtrasAmount14'] = STP_Data['STIP_Vehicle_ExtrasAmount14'] 
            form['Short_term_personal_Vehicle_AC1'] = STP_Data['STIP_Vehicle_AC1'] 
            form['Short_term_personal_Vehicle_AC2'] = STP_Data['STIP_Vehicle_AC2'] 
            form['Short_term_personal_Vehicle_AC3'] = STP_Data['STIP_Vehicle_AC3'] 
            form['Short_term_personal_Vehicle_AC4'] = STP_Data['STIP_Vehicle_AC4'] 
            form['Short_term_personal_Vehicle_AC5'] = STP_Data['STIP_Vehicle_AC5'] 
            form['Short_term_personal_Vehicle_Fees'] = STP_Data['STIP_Vehicle_Fees'] 
            form['Short_term_personal_Vehicle_Commission'] = STP_Data['STIP_Vehicle_Commission'] 
            form['Short_term_personal_Vehicle_TotalPremium'] = STP_Data['STIP_Vehicle_TotalPremium'] 
            form['Short_term_personal_Vehicle_Comments'] = STP_Data['STIP_Vehicle_Comments'] 
            form['Short_term_personal_MotorC_RegOwner'] = STP_Data['STIP_MotorC_RegOwner'] 
            form['Short_term_personal_MotorC_Usage'] = STP_Data['STIP_MotorC_Usage'] 
            form['Short_term_personal_MotorC_ONParkingOptions'] = parkOptions[int(STP_Data['STIP_MotorC_ONParkingOptions'])] 
            form['Short_term_personal_MotorC_ONParking'] = STP_Data['STIP_MotorC_ONParking'] 
            form['Short_term_personal_MotorC_ONOtherParking'] = STP_Data['STIP_MotorC_ONOtherParking'] 
            form['Short_term_personal_MotorC_CoverType'] = coverTypes[int(STP_Data['STIP_MotorC_CoverType'])] 
            driverType = ["", "Financial dependant child", "Policy Holder", "Spouse", "Third Party - Theft excluded (cover for loss or damage except by theft)"]
            form['Short_term_personal_MotorC_Driver'] = driverType[int(STP_Data['STIP_MotorC_Driver'])] 
            form['Short_term_personal_MotorC_Driver1'] = STP_Data['STIP_MotorC_Driver1'] 
            form['Short_term_personal_MotorC_DriverLicIssDate'] = STP_Data['STIP_MotorC_DriverLicIssDate'] 
            form['Short_term_personal_MotorC_LicCode'] = STP_Data['STIP_MotorC_LicCode'] 
            form['Short_term_personal_MotorC_SumInsured'] = STP_Data['STIP_MotorC_SumInsured'] 
            form['Short_term_personal_MotorC_ClaimBonus'] = STP_Data['STIP_MotorC_ClaimBonus'] 
            form['Short_term_personal_MotorC_Fees'] = STP_Data['STIP_MotorC_Fees'] 
            form['Short_term_personal_MotorC_Commission'] = STP_Data['STIP_MotorC_Commission'] 
            form['Short_term_personal_MotorC_TotalPremium'] = STP_Data['STIP_MotorC_TotalPremium'] 
            form['Short_term_personal_MotorC_Comments'] = STP_Data['STIP_MotorC_Comments'] 
            form['Short_term_personal_Trailer_RegOwner'] = STP_Data['STIP_Trailer_RegOwner'] 
            form['Short_term_personal_Trailer_Type'] = STP_Data['STIP_Trailer_Type'] 
            form['Short_term_personal_Trailer_ONParkingOptions'] = parkOptions[int(STP_Data['STIP_Trailer_ONParkingOptions'] )]
            form['Short_term_personal_Trailer_ONOtherParking'] = STP_Data['STIP_Trailer_ONOtherParking'] 
            form['Short_term_personal_Trailer_SumInsured'] = STP_Data['STIP_Trailer_SumInsured'] 
            form['Short_term_personal_Trailer_ClaimBonus'] = STP_Data['STIP_Trailer_ClaimBonus'] 
            form['Short_term_personal_Trailer_Fees'] = STP_Data['STIP_Trailer_Fees'] 
            form['Short_term_personal_Trailer_Commission'] = STP_Data['STIP_Trailer_Commission'] 
            form['Short_term_personal_Trailer_TotalPremium'] = STP_Data['STIP_Trailer_TotalPremium'] 
            form['Short_term_personal_Trailer_Comments'] = STP_Data['STIP_Trailer_Comments'] 
            form['Short_term_personal_WaterC_RegOwner'] = STP_Data['STIP_WaterC_RegOwner'] 
            form['Short_term_personal_WaterC_Type'] = STP_Data['STIP_WaterC_Type'] 
            form['Short_term_personal_WaterC_Hull'] = STP_Data['STIP_WaterC_Hull'] 
            form['Short_term_personal_WaterC_SumInsured'] = STP_Data['STIP_WaterC_SumInsured'] 
            form['Short_term_personal_WaterC_VIN'] = STP_Data['STIP_WaterC_VIN'] 
            form['Short_term_personal_WaterC_EngineNumber'] = STP_Data['STIP_WaterC_EngineNumber'] 
            form['Short_term_personal_WaterC_OC_Glitter'] = STP_Data['STIP_WaterC_OC_Glitter'] 
            form['Short_term_personal_WaterC_OC_SpecifiedAccessories'] = STP_Data['STIP_WaterC_OC_SpecifiedAccessories'] 
            form['Short_term_personal_WaterC_OC_MotorType'] = STP_Data['STIP_WaterC_OC_MotorType'] 
            form['Short_term_personal_WaterC_OC_Output'] = STP_Data['STIP_WaterC_OC_Output'] 
            form['Short_term_personal_WaterC_Fees'] = STP_Data['STIP_WaterC_Fees'] 
            form['Short_term_personal_WaterC_Commission'] = STP_Data['STIP_WaterC_Commission'] 
            form['Short_term_personal_WaterC_TotalPremium'] = STP_Data['STIP_WaterC_TotalPremium'] 
            form['Short_term_personal_WaterC_Comments'] = STP_Data['STIP_WaterC_Comments'] 
            form['Short_term_personal_PersonalLL_IndemnityLimit'] = STP_Data['STIP_PersonalLL_IndemnityLimit'] 
            form['Short_term_personal_PersonalLL_IndemnityLimitDetail'] = STP_Data['STIP_PersonalLL_IndemnityLimitDetail'] 
            form['Short_term_personal_PersonalLL_Fees'] = STP_Data['STIP_PersonalLL_Fees'] 
            form['Short_term_personal_PersonalLL_Commission'] = STP_Data['STIP_PersonalLL_Commission'] 
            form['Short_term_personal_PersonalLL_TotalPremium'] = STP_Data['STIP_PersonalLL_TotalPremium'] 
            form['Short_term_personal_PersonalLL_Comments'] = STP_Data['STIP_PersonalLL_Comments'] 
            form['Short_term_personal_LegalA_IndemnityLimit'] = STP_Data['STIP_LegalA_IndemnityLimit'] 
            form['Short_term_personal_LegalA_IndemnityLimitDetail'] = STP_Data['STIP_LegalA_IndemnityLimitDetail'] 
            form['Short_term_personal_LegalA_Fees'] = STP_Data['STIP_LegalA_Fees'] 
            form['Short_term_personal_LegalA_Commission'] = STP_Data['STIP_LegalA_Commission'] 
            form['Short_term_personal_LegalA_TotalPremium'] = STP_Data['STIP_LegalA_TotalPremium'] 
            form['Short_term_personal_LegalA_Comments'] = STP_Data['STIP_LegalA_Comments'] 
            form['Short_term_personal_ProductConsidered'] = STP_Data['STIP_ProductConsidered'] 
            form['Short_term_personal_ProductRecommended'] = STP_Data['STIP_ProductRecommended'] 
            form['Short_term_personal_ProductReasons'] = STP_Data['STIP_ProductReasons'] 
            form['Short_term_personal_DbyI_IName'] = STP_Data['STIP_DbyI_IName'] 
            form['Short_term_personal_DbyI_Code'] = STP_Data['STIP_DbyI_Code'] 
            form['Short_term_personal_DbyI_Signature'] = STP_Data['STIP_DbyI_Signature'] 
            form['Short_term_personal_DbyI_Date'] = STP_Data['STIP_DbyI_Date'] 
 
        else:
            form['Short_term_personal_Underwritten_By'] = "N.A." 
            form['Short_term_personal_Branch_Name'] = "N.A." 
            form['Short_term_personal_Branch_Number'] = "N.A." 
            form['Short_term_personal_Quotation_Number'] = "N.A." 
            form['Short_term_personal_Policy_Number'] = "N.A." 
            form['Short_term_personal_Inception_Date'] = "N.A." 
            form['Short_term_personal_Applicant_Surname'] = "N.A." 
            form['Short_term_personal_Applicant_Gender'] = "N.A." 
            form['Short_term_personal_Applicant_Initials'] = "N.A." 
            form['Short_term_personal_Applicant_Title'] = "N.A." 
            form['Short_term_personal_Applicant_DateofBirth'] = "N.A." 
            form['Short_term_personal_Applicant_IdNumber'] = "N.A." 
            form['Short_term_personal_Applicant_Email'] = "N.A." 
            form['Short_term_personal_Applicant_ContactNumber'] = "N.A." 
            form['Short_term_personal_General_Refused'] = "N.A." 
            form['Short_term_personal_General_RefusedDetails'] = "N.A." 
            form['Short_term_personal_General_Risks'] = "N.A." 
            form['Short_term_personal_General_RisksDetails'] = "N.A." 
            form['Short_term_personal_General_LastDate'] = "N.A." 
            form['Short_term_personal_General_InsurerName'] = "N.A." 
            form['Short_term_personal_General_TypeOfLoss'] = "N.A." 
            form['Short_term_personal_General_LossYear'] = "N.A." 
            form['Short_term_personal_General_LossAmount'] = "N.A." 
            form['Short_term_personal_General_LossInsurer'] = "N.A." 
            form['Short_term_personal_CnRI_Existing_Company'] = "N.A." 
            form['Short_term_personal_CnRI_Replacement_Company'] = "N.A." 
            form['Short_term_personal_CnRI_Existing_Provider'] = "N.A." 
            form['Short_term_personal_CnRI_Replacement_Provider'] = "N.A." 
            form['Short_term_personal_CnRI_Existing_Product'] = "N.A." 
            form['Short_term_personal_CnRI_Replacement_Product'] = "N.A." 
            form['Short_term_personal_CnRI_1_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_1_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_1_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_1_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_1_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_1_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_1_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_2_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_2_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_2_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_2_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_2_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_2_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_2_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_3_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_3_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_3_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_3_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_3_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_3_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_3_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_4_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_4_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_4_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_4_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_4_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_4_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_4_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_5_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_5_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_5_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_5_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_5_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_5_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_5_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_6_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_6_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_6_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_6_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_6_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_6_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_6_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_7_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_7_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_7_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_7_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_7_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_7_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_7_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_8_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_8_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_8_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_8_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_8_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_8_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_8_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_9_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_9_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_9_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_9_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_9_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_9_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_9_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_10_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_10_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_10_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_10_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_10_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_10_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_10_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_11_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_11_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_11_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_11_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_11_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_11_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_11_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_12_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_12_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_12_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_12_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_12_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_12_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_12_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_13_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_13_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_13_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_13_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_13_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_13_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_13_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_14_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_14_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_14_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_14_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_14_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_14_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_14_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_15_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_15_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_15_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_15_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_15_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_15_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_15_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_16_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_16_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_16_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_16_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_16_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_16_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_16_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_17_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_17_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_17_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_17_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_17_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_17_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_17_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_18_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_18_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_18_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_18_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_18_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_18_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_18_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_19_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_19_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_19_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_19_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_19_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_19_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_19_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_20_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_20_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_20_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_20_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_20_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_20_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_20_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_21_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_21_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_21_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_21_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_21_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_21_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_21_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_22_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_22_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_22_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_22_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_22_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_22_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_22_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_23_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_23_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_23_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_23_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_23_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_23_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_23_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_24_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_24_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_24_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_24_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_24_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_24_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_24_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_25_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_25_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_25_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_25_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_25_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_25_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_25_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_26_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_26_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_26_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_26_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_26_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_26_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_26_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_27_Recomm'] = "N.A." 
            form['Short_term_personal_CnRI_27_Accepted'] = "N.A." 
            form['Short_term_personal_CnRI_27_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRI_27_Premium1'] = "N.A." 
            form['Short_term_personal_CnRI_27_Premium2'] = "N.A." 
            form['Short_term_personal_CnRI_27_Excess1'] = "N.A." 
            form['Short_term_personal_CnRI_27_Excess2'] = "N.A." 
            form['Short_term_personal_CnRI_FeeCharges'] = "N.A." 
            form['Short_term_personal_CnRI_Commission'] = "N.A." 
            form['Short_term_personal_CnRI_TotalPremium'] = "N.A." 
            form['Short_term_personal_CnRen_Existing_Company'] = "N.A." 
            form['Short_term_personal_CnRen_Replacement_Company'] = "N.A." 
            form['Short_term_personal_CnRen_Existing_Provider'] = "N.A." 
            form['Short_term_personal_CnRen_Replacement_Provider'] = "N.A." 
            form['Short_term_personal_CnRen_Existing_Product'] = "N.A." 
            form['Short_term_personal_CnRen_Replacement_Product'] = "N.A." 
            form['Short_term_personal_CnRen_1_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_1_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_1_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_1_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_1_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_1_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_1_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_2_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_2_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_2_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_2_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_2_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_2_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_2_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_3_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_3_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_3_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_3_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_3_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_3_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_3_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_4_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_4_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_4_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_4_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_4_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_4_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_4_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_5_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_5_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_5_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_5_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_5_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_5_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_5_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_6_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_6_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_6_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_6_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_6_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_6_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_6_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_7_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_7_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_7_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_7_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_7_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_7_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_7_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_8_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_8_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_8_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_8_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_8_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_8_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_8_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_9_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_9_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_9_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_9_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_9_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_9_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_9_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_10_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_10_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_10_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_10_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_10_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_10_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_10_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_11_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_11_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_11_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_11_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_11_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_11_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_11_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_12_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_12_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_12_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_12_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_12_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_12_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_12_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_13_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_13_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_13_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_13_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_13_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_13_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_13_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_14_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_14_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_14_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_14_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_14_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_14_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_14_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_15_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_15_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_15_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_15_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_15_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_15_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_15_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_16_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_16_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_16_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_16_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_16_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_16_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_16_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_17_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_17_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_17_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_17_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_17_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_17_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_17_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_18_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_18_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_18_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_18_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_18_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_18_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_18_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_19_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_19_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_19_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_19_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_19_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_19_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_19_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_20_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_20_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_20_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_20_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_20_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_20_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_20_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_21_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_21_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_21_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_21_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_21_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_21_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_21_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_22_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_22_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_22_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_22_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_22_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_22_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_22_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_23_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_23_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_23_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_23_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_23_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_23_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_23_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_24_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_24_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_24_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_24_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_24_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_24_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_24_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_25_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_25_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_25_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_25_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_25_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_25_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_25_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_26_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_26_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_26_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_26_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_26_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_26_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_26_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_27_Recomm'] = "N.A." 
            form['Short_term_personal_CnRen_27_Accepted'] = "N.A." 
            form['Short_term_personal_CnRen_27_CoverAmount'] = "N.A." 
            form['Short_term_personal_CnRen_27_Premium1'] = "N.A." 
            form['Short_term_personal_CnRen_27_Premium2'] = "N.A." 
            form['Short_term_personal_CnRen_27_Excess1'] = "N.A." 
            form['Short_term_personal_CnRen_27_Excess2'] = "N.A." 
            form['Short_term_personal_CnRen_FeeCharges'] = "N.A." 
            form['Short_term_personal_CnRen_Commission'] = "N.A." 
            form['Short_term_personal_CnRen_TotalPremium'] = "N.A." 
            form['Short_term_personal_CnRI_AdviseGiven'] = "N.A." 
            form['Short_term_personal_CnRI_ReplacePurpose'] = "N.A." 
            form['Short_term_personal_CnRI_ReplaceReason'] = "N.A." 
            form['Short_term_personal_CnRI_ReplaceSupplier'] = "N.A." 
            form['Short_term_personal_HC_ResidentialArea'] = "N.A." 
            form['Short_term_personal_HC_StreetNumber'] = "N.A." 
            form['Short_term_personal_HC_PostalCode'] = "N.A." 
            form['Short_term_personal_HC_ResidenceType'] = "N.A." 
            form['Short_term_personal_HC_Flat_GroundLevel'] = "N.A." 
            form['Short_term_personal_HC_WallConstruction'] = "N.A." 
            form['Short_term_personal_HC_RoofConstruction'] = "N.A." 
            form['Short_term_personal_HC_SM_BurglarBar'] = "N.A." 
            form['Short_term_personal_HC_SM_SecurityGate'] = "N.A." 
            form['Short_term_personal_HC_SM_AlarmSystem'] = "N.A." 
            form['Short_term_personal_HC_SM_SecurityArea'] = "N.A." 
            form['Short_term_personal_HC_NoClaimBonus'] = "N.A." 
            form['Short_term_personal_HC_SumInsured'] = "N.A." 
            form['Short_term_personal_HCEx_BusinessType'] = "N.A." 
            form['Short_term_personal_HCEx_InsuredAmount'] = "N.A." 
            form['Short_term_personal_HC_ADI_General1'] = "N.A." 
            form['Short_term_personal_HC_ADI_General2'] = "N.A." 
            form['Short_term_personal_HC_ADI_MechElecBreakdown'] = "N.A." 
            form['Short_term_personal_HC_ADI_ElectronicalBreakdown'] = "N.A." 
            form['Short_term_personal_HC_ADI_PowerSurgeCover1'] = "N.A." 
            form['Short_term_personal_HC_ADI_PowerSurgeCover2'] = "N.A." 
            form['Short_term_personal_HC_ADI_PowerSurgeCover3'] = "N.A." 
            form['Short_term_personal_HC_Fee'] = "N.A." 
            form['Short_term_personal_HC_Commission'] = "N.A." 
            form['Short_term_personal_HC_TotalPremium'] = "N.A." 
            form['Short_term_personal_Build_ResidentialArea'] = "N.A." 
            form['Short_term_personal_Build_StreetNumber'] = "N.A." 
            form['Short_term_personal_Build_PostalCode'] = "N.A." 
            form['Short_term_personal_Build_ResidenceType'] = "N.A." 
            form['Short_term_personal_Build_Type'] = "N.A." 
            form['Short_term_personal_Build_Voluntary'] = "N.A." 
            form['Short_term_personal_Build_SnL'] = "N.A." 
            form['Short_term_personal_Build_ADI'] = "N.A." 
            form['Short_term_personal_Build_WallConstruction'] = "N.A." 
            form['Short_term_personal_Build_RoofConstruction'] = "N.A." 
            form['Short_term_personal_Build_Fee'] = "N.A." 
            form['Short_term_personal_Build_Commission'] = "N.A." 
            form['Short_term_personal_Build_TotalPremium'] = "N.A." 
            form['Short_term_personal_Build_AdditionalAdvise'] = "N.A." 
            form['Short_term_personal_AddProp_ResidentialArea'] = "N.A." 
            form['Short_term_personal_AddProp_StreetNumber'] = "N.A." 
            form['Short_term_personal_AddProp_PostalCode'] = "N.A." 
            form['Short_term_personal_AddProp_ResidenceType'] = "N.A." 
            form['Short_term_personal_AddProp_Type'] = "N.A." 
            form['Short_term_personal_AddProp_Voluntary'] = "N.A." 
            form['Short_term_personal_AddProp_SnL'] = "N.A." 
            form['Short_term_personal_AddProp_ADI'] = "N.A." 
            form['Short_term_personal_AddProp_WallConstruction'] = "N.A." 
            form['Short_term_personal_AddProp_RoofConstruction'] = "N.A." 
            form['Short_term_personal_AddProp_Fee'] = "N.A." 
            form['Short_term_personal_AddProp_Commission'] = "N.A." 
            form['Short_term_personal_AddProp_TotalPremium'] = "N.A." 
            form['Short_term_personal_AddProp_AdditionalAdvise'] = "N.A." 
            form['Short_term_personal_Vehicle_Owner'] = "N.A." 
            form['Short_term_personal_Vehicle_RegOwner'] = "N.A." 
            form['Short_term_personal_Vehicle_Usage'] = "N.A." 
            form['Short_term_personal_Vehicle_ONParkingOptions'] = "N.A." 
            form['Short_term_personal_Vehicle_ONParking'] = "N.A." 
            form['Short_term_personal_Vehicle_ONOtherParking'] = "N.A." 
            form['Short_term_personal_Vehicle_CoverType'] = "N.A." 
            form['Short_term_personal_Vehicle_SM1'] = "N.A." 
            form['Short_term_personal_Vehicle_SM2'] = "N.A." 
            form['Short_term_personal_Vehicle_SM3'] = "N.A." 
            form['Short_term_personal_Vehicle_SM4'] = "N.A." 
            form['Short_term_personal_Vehicle_Driver'] = "N.A." 
            form['Short_term_personal_Vehicle_DriverLicIssDate'] = "N.A." 
            form['Short_term_personal_Vehicle_LicCode'] = "N.A." 
            form['Short_term_personal_Vehicle_SumInsured'] = "N.A." 
            form['Short_term_personal_Vehicle_ClaimBonus'] = "N.A." 
            form['Short_term_personal_Vehicle_VoluntaryExcess'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras1'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount1'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras2'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount2'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras3'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount3'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras4'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount4'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras5'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount5'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras6'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount6'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras7'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount7'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras8'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount8'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras9'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount9'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras10'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount10'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras11'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount11'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras12'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount12'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras13'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount13'] = "N.A." 
            form['Short_term_personal_Vehicle_Extras14'] = "N.A." 
            form['Short_term_personal_Vehicle_ExtrasAmount14'] = "N.A." 
            form['Short_term_personal_Vehicle_AC1'] = "N.A." 
            form['Short_term_personal_Vehicle_AC2'] = "N.A." 
            form['Short_term_personal_Vehicle_AC3'] = "N.A." 
            form['Short_term_personal_Vehicle_AC4'] = "N.A." 
            form['Short_term_personal_Vehicle_AC5'] = "N.A." 
            form['Short_term_personal_Vehicle_Fees'] = "N.A." 
            form['Short_term_personal_Vehicle_Commission'] = "N.A." 
            form['Short_term_personal_Vehicle_TotalPremium'] = "N.A." 
            form['Short_term_personal_Vehicle_Comments'] = "N.A." 
            form['Short_term_personal_MotorC_RegOwner'] = "N.A." 
            form['Short_term_personal_MotorC_Usage'] = "N.A." 
            form['Short_term_personal_MotorC_ONParkingOptions'] = "N.A." 
            form['Short_term_personal_MotorC_ONParking'] = "N.A." 
            form['Short_term_personal_MotorC_ONOtherParking'] = "N.A." 
            form['Short_term_personal_MotorC_CoverType'] = "N.A." 
            form['Short_term_personal_MotorC_Driver'] = "N.A." 
            form['Short_term_personal_MotorC_Driver1'] = "N.A." 
            form['Short_term_personal_MotorC_DriverLicIssDate'] = "N.A." 
            form['Short_term_personal_MotorC_LicCode'] = "N.A." 
            form['Short_term_personal_MotorC_SumInsured'] = "N.A." 
            form['Short_term_personal_MotorC_ClaimBonus'] = "N.A." 
            form['Short_term_personal_MotorC_Fees'] = "N.A." 
            form['Short_term_personal_MotorC_Commission'] = "N.A." 
            form['Short_term_personal_MotorC_TotalPremium'] = "N.A." 
            form['Short_term_personal_MotorC_Comments'] = "N.A." 
            form['Short_term_personal_Trailer_RegOwner'] = "N.A." 
            form['Short_term_personal_Trailer_Type'] = "N.A." 
            form['Short_term_personal_Trailer_ONParkingOptions'] = "N.A." 
            form['Short_term_personal_Trailer_ONOtherParking'] = "N.A." 
            form['Short_term_personal_Trailer_SumInsured'] = "N.A." 
            form['Short_term_personal_Trailer_ClaimBonus'] = "N.A." 
            form['Short_term_personal_Trailer_Fees'] = "N.A." 
            form['Short_term_personal_Trailer_Commission'] = "N.A." 
            form['Short_term_personal_Trailer_TotalPremium'] = "N.A." 
            form['Short_term_personal_Trailer_Comments'] = "N.A." 
            form['Short_term_personal_WaterC_RegOwner'] = "N.A." 
            form['Short_term_personal_WaterC_Type'] = "N.A." 
            form['Short_term_personal_WaterC_Hull'] = "N.A." 
            form['Short_term_personal_WaterC_SumInsured'] = "N.A." 
            form['Short_term_personal_WaterC_VIN'] = "N.A." 
            form['Short_term_personal_WaterC_EngineNumber'] = "N.A." 
            form['Short_term_personal_WaterC_OC_Glitter'] = "N.A." 
            form['Short_term_personal_WaterC_OC_SpecifiedAccessories'] = "N.A." 
            form['Short_term_personal_WaterC_OC_MotorType'] = "N.A." 
            form['Short_term_personal_WaterC_OC_Output'] = "N.A." 
            form['Short_term_personal_WaterC_Fees'] = "N.A." 
            form['Short_term_personal_WaterC_Commission'] = "N.A." 
            form['Short_term_personal_WaterC_TotalPremium'] = "N.A." 
            form['Short_term_personal_WaterC_Comments'] = "N.A." 
            form['Short_term_personal_PersonalLL_IndemnityLimit'] = "N.A." 
            form['Short_term_personal_PersonalLL_IndemnityLimitDetail'] = "N.A." 
            form['Short_term_personal_PersonalLL_Fees'] = "N.A." 
            form['Short_term_personal_PersonalLL_Commission'] = "N.A." 
            form['Short_term_personal_PersonalLL_TotalPremium'] = "N.A." 
            form['Short_term_personal_PersonalLL_Comments'] = "N.A." 
            form['Short_term_personal_LegalA_IndemnityLimit'] = "N.A." 
            form['Short_term_personal_LegalA_IndemnityLimitDetail'] = "N.A." 
            form['Short_term_personal_LegalA_Fees'] = "N.A." 
            form['Short_term_personal_LegalA_Commission'] = "N.A." 
            form['Short_term_personal_LegalA_TotalPremium'] = "N.A." 
            form['Short_term_personal_LegalA_Comments'] = "N.A." 
            form['Short_term_personal_ProductConsidered'] = "N.A." 
            form['Short_term_personal_ProductRecommended'] = "N.A." 
            form['Short_term_personal_ProductReasons'] = "N.A." 
            form['Short_term_personal_DbyI_IName'] = "N.A." 
            form['Short_term_personal_DbyI_Code'] = "N.A." 
            form['Short_term_personal_DbyI_Signature'] = "N.A." 
            form['Short_term_personal_DbyI_Date'] = "N.A." 
            form['Short_term_personal_MSA_ClientName'] = "N.A." 
            form['Short_term_personal_MSA_ClientIdNumber'] = "N.A." 
            form['Short_term_personal_MSA_ClientAddress'] = "N.A." 
            form['Short_term_personal_MSA_ClientEmail'] = "N.A." 
            form['Short_term_personal_MSA_ClientPhone'] = "N.A." 
            form['Short_term_personal_MSA_ClientDate'] = "N.A." 
            form['Short_term_personal_MSA_Name'] = "N.A." 
            form['Short_term_personal_MSA_MaritalStatus'] = "N.A." 
            form['Short_term_personal_MSA_Gender'] = "N.A." 
            form['Short_term_personal_MSA_Occupation'] = "N.A." 
            form['Short_term_personal_MSA_Income'] = "N.A." 
            form['Short_term_personal_MSA_Subsidy'] = "N.A." 
            form['Short_term_personal_MSA_Dependant'] = "N.A." 
            form['Short_term_personal_MSA_Spouse'] = "N.A." 
            form['Short_term_personal_MSA_AdultDependant'] = "N.A." 
            form['Short_term_personal_MSA_ChronicM'] = "N.A." 
            form['Short_term_personal_MSA_ChronicS'] = "N.A." 
            form['Short_term_personal_MSA_ChronicAD'] = "N.A." 
            form['Short_term_personal_MSA_ChronicC'] = "N.A." 
            form['Short_term_personal_MSA_ChronicOC'] = "N.A." 
            form['Short_term_personal_MSA_PFromDate'] = "N.A." 
            form['Short_term_personal_MSA_PTODate'] = "N.A." 
            form['Short_term_personal_BackInfo'] = "N.A." 
            form['Short_term_personal_SNA_Needs1'] = "N.A." 
            form['Short_term_personal_SNA_Comments1'] = "N.A." 
            form['Short_term_personal_SNA_Needs2'] = "N.A." 
            form['Short_term_personal_SNA_Comments2'] = "N.A." 
            form['Short_term_personal_SNA_Needs3'] = "N.A." 
            form['Short_term_personal_SNA_Comments3'] = "N.A." 
            form['Short_term_personal_SNA_Needs4'] = "N.A." 
            form['Short_term_personal_SNA_Comments4'] = "N.A." 
            form['Short_term_personal_SNA_Needs5'] = "N.A." 
            form['Short_term_personal_SNA_Comments5'] = "N.A." 
            form['Short_term_personal_SNA_Needs6'] = "N.A." 
            form['Short_term_personal_SNA_Comments6'] = "N.A." 
            form['Short_term_personal_SNA_Needs7'] = "N.A." 
            form['Short_term_personal_SNA_Comments7'] = "N.A." 
            form['Short_term_personal_SNA_Needs8'] = "N.A." 
            form['Short_term_personal_SNA_Comments8'] = "N.A." 
            form['Short_term_personal_SNA_Needs9'] = "N.A." 
            form['Short_term_personal_SNA_Comments9'] = "N.A." 
            form['Short_term_personal_SNA_Needs10'] = "N.A." 
            form['Short_term_personal_SNA_Comments10'] = "N.A." 
            form['Short_term_personal_CoMAB_Current1'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced1'] = "N.A." 
            form['Short_term_personal_CoMAB_Current2'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced2'] = "N.A." 
            form['Short_term_personal_CoMAB_Current3'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced3'] = "N.A." 
            form['Short_term_personal_CoMAB_Current4'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced4'] = "N.A." 
            form['Short_term_personal_CoMAB_Current5'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced5'] = "N.A." 
            form['Short_term_personal_CoMAB_Current6'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced6'] = "N.A." 
            form['Short_term_personal_CoMAB_Current7'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced7'] = "N.A." 
            form['Short_term_personal_CoMAB_Current8'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced8'] = "N.A." 
            form['Short_term_personal_CoMAB_Current9'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced9'] = "N.A." 
            form['Short_term_personal_CoMAB_Current10'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced10'] = "N.A." 
            form['Short_term_personal_CoMAB_Current11'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced11'] = "N.A." 
            form['Short_term_personal_CoMAB_Current12'] = "N.A." 
            form['Short_term_personal_CoMAB_Replaced12'] = "N.A." 
            form['Short_term_personal_SectionD_SnF'] = "N.A." 
            form['Short_term_personal_SectionE_PMB'] = "N.A." 
            form['Short_term_personal_SectionF_NotAccepted'] = "N.A." 
            form['Short_term_personal_SectionF_Reasons'] = "N.A." 
            form['Short_term_personal_SectionF_Consequences'] = "N.A." 
            form['Short_term_personal_SectionF_Fee'] = "N.A." 
            form['Short_term_personal_SectionF_Comments'] = "N.A." 
            form['Short_term_personal_SectionF_Date'] = "N.A." 
            form['Short_term_personal_SectionF_ClientName'] = "N.A." 

        Medical_Data = Medical.objects.filter(formId=form['id']).values()
        if len(Medical_Data) != 0:
            Medical_Data = Medical.objects.filter(formId=form['id']).values().first()
            form['Medical_MSA_ClientName'] = Medical_Data['MSA_ClientName'] 
            form['Medical_MSA_ClientIdNumber'] = Medical_Data['MSA_ClientIdNumber'] 
            form['Medical_MSA_ClientAddress'] = Medical_Data['MSA_ClientAddress'] 
            form['Medical_MSA_ClientEmail'] = Medical_Data['MSA_ClientEmail'] 
            form['Medical_MSA_ClientPhone'] = Medical_Data['MSA_ClientPhone'] 
            form['Medical_MSA_ClientDate'] = Medical_Data['MSA_ClientDate'] 
            form['Medical_MSA_Name'] = Medical_Data['MSA_Name'] 
            form['Medical_MSA_MaritalStatus'] = Medical_Data['MSA_MaritalStatus'] 
            form['Medical_MSA_Gender'] = Medical_Data['MSA_Gender'] 
            form['Medical_MSA_Occupation'] = Medical_Data['MSA_Occupation'] 
            form['Medical_MSA_Income'] = Medical_Data['MSA_Income'] 
            form['Medical_MSA_Subsidy'] = Medical_Data['MSA_Subsidy'] 
            form['Medical_MSA_Dependant'] = Medical_Data['MSA_Dependant'] 
            form['Medical_MSA_Spouse'] = Medical_Data['MSA_Spouse'] 
            form['Medical_MSA_AdultDependant'] = Medical_Data['MSA_AdultDependant'] 
            form['Medical_MSA_ChronicM'] = Medical_Data['MSA_ChronicM'] 
            form['Medical_MSA_ChronicS'] = Medical_Data['MSA_ChronicS'] 
            form['Medical_MSA_ChronicAD'] = Medical_Data['MSA_ChronicAD'] 
            form['Medical_MSA_ChronicC'] = Medical_Data['MSA_ChronicC'] 
            form['Medical_MSA_ChronicOC'] = Medical_Data['MSA_ChronicOC'] 
            form['Medical_MSA_PFromDate'] = Medical_Data['MSA_PFromDate'] 
            form['Medical_MSA_PTODate'] = Medical_Data['MSA_PTODate'] 
            form['Medical_BackInfo'] = Medical_Data['BackInfo'] 
            form['Medical_SNA_Needs1'] = Medical_Data['SNA_Needs1'] 
            form['Medical_SNA_Comments1'] = Medical_Data['SNA_Comments1'] 
            form['Medical_SNA_Needs2'] = Medical_Data['SNA_Needs2'] 
            form['Medical_SNA_Comments2'] = Medical_Data['SNA_Comments2'] 
            form['Medical_SNA_Needs3'] = Medical_Data['SNA_Needs3'] 
            form['Medical_SNA_Comments3'] = Medical_Data['SNA_Comments3'] 
            form['Medical_SNA_Needs4'] = Medical_Data['SNA_Needs4'] 
            form['Medical_SNA_Comments4'] = Medical_Data['SNA_Comments4'] 
            form['Medical_SNA_Needs5'] = Medical_Data['SNA_Needs5'] 
            form['Medical_SNA_Comments5'] = Medical_Data['SNA_Comments5'] 
            form['Medical_SNA_Needs6'] = Medical_Data['SNA_Needs6'] 
            form['Medical_SNA_Comments6'] = Medical_Data['SNA_Comments6'] 
            form['Medical_SNA_Needs7'] = Medical_Data['SNA_Needs7'] 
            form['Medical_SNA_Comments7'] = Medical_Data['SNA_Comments7'] 
            form['Medical_SNA_Needs8'] = Medical_Data['SNA_Needs8'] 
            form['Medical_SNA_Comments8'] = Medical_Data['SNA_Comments8'] 
            form['Medical_SNA_Needs9'] = Medical_Data['SNA_Needs9'] 
            form['Medical_SNA_Comments9'] = Medical_Data['SNA_Comments9'] 
            form['Medical_SNA_Needs10'] = Medical_Data['SNA_Needs10'] 
            form['Medical_SNA_Comments10'] = Medical_Data['SNA_Comments10'] 
            form['Medical_CoMAB_Current1'] = Medical_Data['CoMAB_Current1'] 
            form['Medical_CoMAB_Replaced1'] = Medical_Data['CoMAB_Replaced1'] 
            form['Medical_CoMAB_Current2'] = Medical_Data['CoMAB_Current2'] 
            form['Medical_CoMAB_Replaced2'] = Medical_Data['CoMAB_Replaced2'] 
            form['Medical_CoMAB_Current3'] = Medical_Data['CoMAB_Current3'] 
            form['Medical_CoMAB_Replaced3'] = Medical_Data['CoMAB_Replaced3'] 
            form['Medical_CoMAB_Current4'] = Medical_Data['CoMAB_Current4'] 
            form['Medical_CoMAB_Replaced4'] = Medical_Data['CoMAB_Replaced4'] 
            form['Medical_CoMAB_Current5'] = Medical_Data['CoMAB_Current5'] 
            form['Medical_CoMAB_Replaced5'] = Medical_Data['CoMAB_Replaced5'] 
            form['Medical_CoMAB_Current6'] = Medical_Data['CoMAB_Current6'] 
            form['Medical_CoMAB_Replaced6'] = Medical_Data['CoMAB_Replaced6'] 
            form['Medical_CoMAB_Current7'] = Medical_Data['CoMAB_Current7'] 
            form['Medical_CoMAB_Replaced7'] = Medical_Data['CoMAB_Replaced7'] 
            form['Medical_CoMAB_Current8'] = Medical_Data['CoMAB_Current8'] 
            form['Medical_CoMAB_Replaced8'] = Medical_Data['CoMAB_Replaced8'] 
            form['Medical_CoMAB_Current9'] = Medical_Data['CoMAB_Current9'] 
            form['Medical_CoMAB_Replaced9'] = Medical_Data['CoMAB_Replaced9'] 
            form['Medical_CoMAB_Current10'] = Medical_Data['CoMAB_Current10'] 
            form['Medical_CoMAB_Replaced10'] = Medical_Data['CoMAB_Replaced10'] 
            form['Medical_CoMAB_Current11'] = Medical_Data['CoMAB_Current11'] 
            form['Medical_CoMAB_Replaced11'] = Medical_Data['CoMAB_Replaced11'] 
            form['Medical_CoMAB_Current12'] = Medical_Data['CoMAB_Current12'] 
            form['Medical_CoMAB_Replaced12'] = Medical_Data['CoMAB_Replaced12'] 
            form['Medical_SectionD_SnF'] = Medical_Data['SectionD_SnF'] 
            form['Medical_SectionE_PMB'] = Medical_Data['SectionE_PMB'] 
            form['Medical_SectionF_NotAccepted'] = Medical_Data['SectionF_NotAccepted'] 
            form['Medical_SectionF_Reasons'] = Medical_Data['SectionF_Reasons'] 
            form['Medical_SectionF_Consequences'] = Medical_Data['SectionF_Consequences'] 
            form['Medical_SectionF_Fee'] = Medical_Data['SectionF_Fee'] 
            form['Medical_SectionF_Comments'] = Medical_Data['SectionF_Comments'] 
            form['Medical_SectionF_Date'] = Medical_Data['SectionF_Date'] 
            form['Medical_SectionF_ClientName'] = Medical_Data['SectionF_ClientName']
        else:
            form['Medical_MSA_ClientName'] = "N.A." 
            form['Medical_MSA_ClientIdNumber'] = "N.A." 
            form['Medical_MSA_ClientAddress'] = "N.A." 
            form['Medical_MSA_ClientEmail'] = "N.A." 
            form['Medical_MSA_ClientPhone'] = "N.A." 
            form['Medical_MSA_ClientDate'] = "N.A." 
            form['Medical_MSA_Name'] = "N.A." 
            form['Medical_MSA_MaritalStatus'] = "N.A." 
            form['Medical_MSA_Gender'] = "N.A." 
            form['Medical_MSA_Occupation'] = "N.A." 
            form['Medical_MSA_Income'] = "N.A." 
            form['Medical_MSA_Subsidy'] = "N.A." 
            form['Medical_MSA_Dependant'] = "N.A." 
            form['Medical_MSA_Spouse'] = "N.A." 
            form['Medical_MSA_AdultDependant'] = "N.A." 
            form['Medical_MSA_ChronicM'] = "N.A." 
            form['Medical_MSA_ChronicS'] = "N.A." 
            form['Medical_MSA_ChronicAD'] = "N.A." 
            form['Medical_MSA_ChronicC'] = "N.A." 
            form['Medical_MSA_ChronicOC'] = "N.A." 
            form['Medical_MSA_PFromDate'] = "N.A." 
            form['Medical_MSA_PTODate'] = "N.A." 
            form['Medical_BackInfo'] = "N.A." 
            form['Medical_SNA_Needs1'] = "N.A." 
            form['Medical_SNA_Comments1'] = "N.A." 
            form['Medical_SNA_Needs2'] = "N.A." 
            form['Medical_SNA_Comments2'] = "N.A." 
            form['Medical_SNA_Needs3'] = "N.A." 
            form['Medical_SNA_Comments3'] = "N.A." 
            form['Medical_SNA_Needs4'] = "N.A." 
            form['Medical_SNA_Comments4'] = "N.A." 
            form['Medical_SNA_Needs5'] = "N.A." 
            form['Medical_SNA_Comments5'] = "N.A." 
            form['Medical_SNA_Needs6'] = "N.A." 
            form['Medical_SNA_Comments6'] = "N.A." 
            form['Medical_SNA_Needs7'] = "N.A." 
            form['Medical_SNA_Comments7'] = "N.A." 
            form['Medical_SNA_Needs8'] = "N.A." 
            form['Medical_SNA_Comments8'] = "N.A." 
            form['Medical_SNA_Needs9'] = "N.A." 
            form['Medical_SNA_Comments9'] = "N.A." 
            form['Medical_SNA_Needs10'] = "N.A." 
            form['Medical_SNA_Comments10'] = "N.A." 
            form['Medical_CoMAB_Current1'] = "N.A." 
            form['Medical_CoMAB_Replaced1'] = "N.A." 
            form['Medical_CoMAB_Current2'] = "N.A." 
            form['Medical_CoMAB_Replaced2'] = "N.A." 
            form['Medical_CoMAB_Current3'] = "N.A." 
            form['Medical_CoMAB_Replaced3'] = "N.A." 
            form['Medical_CoMAB_Current4'] = "N.A." 
            form['Medical_CoMAB_Replaced4'] = "N.A." 
            form['Medical_CoMAB_Current5'] = "N.A." 
            form['Medical_CoMAB_Replaced5'] = "N.A." 
            form['Medical_CoMAB_Current6'] = "N.A." 
            form['Medical_CoMAB_Replaced6'] = "N.A." 
            form['Medical_CoMAB_Current7'] = "N.A." 
            form['Medical_CoMAB_Replaced7'] = "N.A." 
            form['Medical_CoMAB_Current8'] = "N.A." 
            form['Medical_CoMAB_Replaced8'] = "N.A." 
            form['Medical_CoMAB_Current9'] = "N.A." 
            form['Medical_CoMAB_Replaced9'] = "N.A." 
            form['Medical_CoMAB_Current10'] = "N.A." 
            form['Medical_CoMAB_Replaced10'] = "N.A." 
            form['Medical_CoMAB_Current11'] = "N.A." 
            form['Medical_CoMAB_Replaced11'] = "N.A." 
            form['Medical_CoMAB_Current12'] = "N.A." 
            form['Medical_CoMAB_Replaced12'] = "N.A." 
            form['Medical_SectionD_SnF'] = "N.A." 
            form['Medical_SectionE_PMB'] = "N.A." 
            form['Medical_SectionF_NotAccepted'] = "N.A." 
            form['Medical_SectionF_Reasons'] = "N.A." 
            form['Medical_SectionF_Consequences'] = "N.A." 
            form['Medical_SectionF_Fee'] = "N.A." 
            form['Medical_SectionF_Comments'] = "N.A." 
            form['Medical_SectionF_Date'] = "N.A." 
            form['Medical_SectionF_ClientName'] = "N.A."

        GC_Data = GapCover.objects.filter(formId=form['id']).values()
        if len(GC_Data) != 0:                
            GC_Data = GapCover.objects.filter(formId=form['id']).values().first()
            form['Gap_Cover_ClientName'] = GC_Data['GP_ClientName'] 
            form['Gap_Cover_ClientIdNumber'] = GC_Data['GP_ClientIdNumber'] 
            form['Gap_Cover_ClientAddress'] = GC_Data['GP_ClientAddress'] 
            form['Gap_Cover_ClientEmail'] = GC_Data['GP_ClientEmail'] 
            form['Gap_Cover_ClientPhoneNumber'] = GC_Data['GP_ClientPhoneNumber'] 
            form['Gap_Cover_ClientMedicalAidName'] = GC_Data['GP_ClientMedicalAidName'] 
            form['Gap_Cover_ClientInceptionDate'] = GC_Data['GP_ClientInceptionDate'] 
            form['Gap_Cover_Date'] = GC_Data['GP_Date']     
            form['Gap_Cover_Benefits'] = GC_Data['GP_Benefits'] 
            form['Gap_Cover_MedicalDependent'] = "Yes" if int(GC_Data['GP_MedicalDependent']) == 1 else "No" 
            form['Gap_Cover_MemberName1'] = GC_Data['GP_MemberName1'] 
            form['Gap_Cover_MemberRelationship1'] = GC_Data['GP_MemberRelationship1'] 
            form['Gap_Cover_MemberAidPlan1'] = GC_Data['GP_MemberAidPlan1'] 
            form['Gap_Cover_MemberName2'] = GC_Data['GP_MemberName2'] 
            form['Gap_Cover_MemberRelationship2'] = GC_Data['GP_MemberRelationship2'] 
            form['Gap_Cover_MemberAidPlan2'] = GC_Data['GP_MemberAidPlan2'] 
            form['Gap_Cover_MemberName3'] = GC_Data['GP_MemberName3'] 
            form['Gap_Cover_MemberRelationship3'] = GC_Data['GP_MemberRelationship3'] 
            form['Gap_Cover_MemberAidPlan3'] = GC_Data['GP_MemberAidPlan3'] 
            form['Gap_Cover_MemberName4'] = GC_Data['GP_MemberName4'] 
            form['Gap_Cover_MemberRelationship4'] = GC_Data['GP_MemberRelationship4'] 
            form['Gap_Cover_MemberAidPlan4'] = GC_Data['GP_MemberAidPlan4'] 
            form['Gap_Cover_Provider'] = GC_Data['GP_Provider'] 
            form['Gap_Cover_Option'] = GC_Data['GP_Option'] 
            form['Gap_Cover_Motivation'] = GC_Data['GP_Motivation'] 
            form['Gap_Cover_TotalPremium'] = GC_Data['GP_TotalPremium'] 
            form['Gap_Cover_BrokerFee'] = GC_Data['GP_BrokerFee'] 
            form['Gap_Cover_Commission'] = GC_Data['GP_Commission'] 
            form['Gap_Cover_CP_Rate'] = GC_Data['GP_CP_Rate'] 
            form['Gap_Cover_NP_Rate'] = GC_Data['GP_NP_Rate'] 
            form['Gap_Cover_CP_Overall'] = GC_Data['GP_CP_Overall'] 
            form['Gap_Cover_NP_Overall'] = GC_Data['GP_NP_Overall'] 
            form['Gap_Cover_CP_CoPayment_B'] = GC_Data['GP_CP_CoPayment_B'] 
            form['Gap_Cover_NP_CoPayment_B'] = GC_Data['GP_NP_CoPayment_B'] 
            form['Gap_Cover_CP_SubLimit_B'] = GC_Data['GP_CP_SubLimit_B'] 
            form['Gap_Cover_NP_SubLimit_B'] = GC_Data['GP_NP_SubLimit_B'] 
            form['Gap_Cover_CP_Cancer_B'] = GC_Data['GP_CP_Cancer_B'] 
            form['Gap_Cover_NP_Cancer_B'] = GC_Data['GP_NP_Cancer_B'] 
            form['Gap_Cover_CP_CancerD_B'] = GC_Data['GP_CP_CancerD_B'] 
            form['Gap_Cover_NP_CancerD_B'] = GC_Data['GP_NP_CancerD_B'] 
            form['Gap_Cover_CP_Other_B'] = GC_Data['GP_CP_Other_B'] 
            form['Gap_Cover_NP_Other_B'] = GC_Data['GP_NP_Other_B'] 
            form['Gap_Cover_CP_CasualB'] = GC_Data['GP_CP_CasualB'] 
            form['Gap_Cover_NP_CasualB'] = GC_Data['GP_NP_CasualB'] 
            form['Gap_Cover_CP_TraumaB'] = GC_Data['GP_CP_TraumaB'] 
            form['Gap_Cover_NP_TraumaB'] = GC_Data['GP_NP_TraumaB'] 
            form['Gap_Cover_CP_PreW_B'] = GC_Data['GP_CP_PreW_B'] 
            form['Gap_Cover_NP_PreW_B'] = GC_Data['GP_NP_PreW_B'] 
            form['Gap_Cover_CP_Med_SW_B'] = GC_Data['GP_CP_Med_SW_B'] 
            form['Gap_Cover_NP_Med_SW_B'] = GC_Data['GP_NP_Med_SW_B'] 
            form['Gap_Cover_CP_Accidental_DC_B'] = GC_Data['GP_CP_Accidental_DC_B'] 
            form['Gap_Cover_NP_Accidental_DC_B'] = GC_Data['GP_NP_Accidental_DC_B'] 
            form['Gap_Cover_CP_GenWait_P'] = GC_Data['GP_CP_GenWait_P'] 
            form['Gap_Cover_NP_GenWait_P'] = GC_Data['GP_NP_GenWait_P'] 
            form['Gap_Cover_CP_PreExist_P'] = GC_Data['GP_CP_PreExist_P'] 
            form['Gap_Cover_NP_PreExist_P'] = GC_Data['GP_NP_PreExist_P'] 
            form['Gap_Cover_CP_Specific_P'] = GC_Data['GP_CP_Specific_P'] 
            form['Gap_Cover_NP_Specific_P'] = GC_Data['GP_NP_Specific_P'] 
            form['Gap_Cover_Exclusions'] = "Yes" if int(GC_Data['GP_Exclusions']) == 1 else "No"  
            form['Gap_Cover_Other_Exclusions'] = GC_Data['GP_Other_Exclusions'] 
            form['Gap_Cover_GeneralComments'] = GC_Data['GP_GeneralComments']     
            form['Gap_Cover_FinanAdvisor_ProdRecomm'] = GC_Data['GP_FinanAdvisor_ProdRecomm'] 
            form['Gap_Cover_FinanAdvisor_Reasons'] = GC_Data['GP_FinanAdvisor_Reasons'] 
            form['Gap_Cover_FinanAdvisor_Consequences'] = "Yes" if int(GC_Data['GP_FinanAdvisor_Consequences']) == 1 else "No"
            form['Gap_Cover_FinanAdvisor_FeeCommission'] = GC_Data['GP_FinanAdvisor_FeeCommission'] 
            form['Gap_Cover_FinanAdvisor_OtherComments'] = GC_Data['GP_FinanAdvisor_OtherComments'] 
            form['Gap_Cover_FinanAdvisor_Date'] = GC_Data['GP_FinanAdvisor_Date'] 
        else:        
            form['Gap_Cover_ClientName'] = "N.A." 
            form['Gap_Cover_ClientIdNumber'] = "N.A." 
            form['Gap_Cover_ClientAddress'] = "N.A." 
            form['Gap_Cover_ClientEmail'] = "N.A." 
            form['Gap_Cover_ClientPhoneNumber'] = "N.A." 
            form['Gap_Cover_ClientMedicalAidName'] = "N.A." 
            form['Gap_Cover_ClientInceptionDate'] = "N.A." 
            form['Gap_Cover_Date'] = "N.A."     
            form['Gap_Cover_Benefits'] = "N.A." 
            form['Gap_Cover_MedicalDependent'] = "N.A." 
            form['Gap_Cover_MemberName1'] = "N.A." 
            form['Gap_Cover_MemberRelationship1'] = "N.A." 
            form['Gap_Cover_MemberAidPlan1'] = "N.A." 
            form['Gap_Cover_MemberName2'] = "N.A." 
            form['Gap_Cover_MemberRelationship2'] = "N.A." 
            form['Gap_Cover_MemberAidPlan2'] = "N.A." 
            form['Gap_Cover_MemberName3'] = "N.A." 
            form['Gap_Cover_MemberRelationship3'] = "N.A." 
            form['Gap_Cover_MemberAidPlan3'] = "N.A." 
            form['Gap_Cover_MemberName4'] = "N.A." 
            form['Gap_Cover_MemberRelationship4'] = "N.A." 
            form['Gap_Cover_MemberAidPlan4'] = "N.A." 
            form['Gap_Cover_Provider'] = "N.A." 
            form['Gap_Cover_Option'] = "N.A." 
            form['Gap_Cover_Motivation'] = "N.A." 
            form['Gap_Cover_TotalPremium'] = "N.A." 
            form['Gap_Cover_BrokerFee'] = "N.A." 
            form['Gap_Cover_Commission'] = "N.A." 
            form['Gap_Cover_CP_Rate'] = "N.A." 
            form['Gap_Cover_NP_Rate'] = "N.A." 
            form['Gap_Cover_CP_Overall'] = "N.A." 
            form['Gap_Cover_NP_Overall'] = "N.A." 
            form['Gap_Cover_CP_CoPayment_B'] = "N.A." 
            form['Gap_Cover_NP_CoPayment_B'] = "N.A." 
            form['Gap_Cover_CP_SubLimit_B'] = "N.A." 
            form['Gap_Cover_NP_SubLimit_B'] = "N.A." 
            form['Gap_Cover_CP_Cancer_B'] = "N.A." 
            form['Gap_Cover_NP_Cancer_B'] = "N.A." 
            form['Gap_Cover_CP_CancerD_B'] = "N.A." 
            form['Gap_Cover_NP_CancerD_B'] = "N.A." 
            form['Gap_Cover_CP_Other_B'] = "N.A." 
            form['Gap_Cover_NP_Other_B'] = "N.A." 
            form['Gap_Cover_CP_CasualB'] = "N.A." 
            form['Gap_Cover_NP_CasualB'] = "N.A." 
            form['Gap_Cover_CP_TraumaB'] = "N.A." 
            form['Gap_Cover_NP_TraumaB'] = "N.A." 
            form['Gap_Cover_CP_PreW_B'] = "N.A." 
            form['Gap_Cover_NP_PreW_B'] = "N.A." 
            form['Gap_Cover_CP_Med_SW_B'] = "N.A." 
            form['Gap_Cover_NP_Med_SW_B'] = "N.A." 
            form['Gap_Cover_CP_Accidental_DC_B'] = "N.A." 
            form['Gap_Cover_NP_Accidental_DC_B'] = "N.A." 
            form['Gap_Cover_CP_GenWait_P'] = "N.A." 
            form['Gap_Cover_NP_GenWait_P'] = "N.A." 
            form['Gap_Cover_CP_PreExist_P'] = "N.A." 
            form['Gap_Cover_NP_PreExist_P'] = "N.A." 
            form['Gap_Cover_CP_Specific_P'] = "N.A." 
            form['Gap_Cover_NP_Specific_P'] = "N.A." 
            form['Gap_Cover_Exclusions'] = "N.A." 
            form['Gap_Cover_Other_Exclusions'] = "N.A." 
            form['Gap_Cover_GeneralComments'] = "N.A."     
            form['Gap_Cover_FinanAdvisor_ProdRecomm'] = "N.A." 
            form['Gap_Cover_FinanAdvisor_Reasons'] = "N.A." 
            form['Gap_Cover_FinanAdvisor_Consequences'] = "N.A." 
            form['Gap_Cover_FinanAdvisor_FeeCommission'] = "N.A." 
            form['Gap_Cover_FinanAdvisor_OtherComments'] = "N.A." 
            form['Gap_Cover_FinanAdvisor_Date'] = "N.A." 
   
    # forms2 = AssuranceInvestment.objects.all().values()
    # forms3 = AssuranceRisk.objects.all().values()
    # forms4 = EmployeeBenefits.objects.all().values()
    # forms5 = Fiduciary.objects.all().values()
    # forms6 = GapCover.objects.all().values()
    # forms7 = InvestmentPlanning.objects.all().values()
    # forms8 = RiskPlanning.objects.all().values()
    # forms9 = ShortTermInsuranceCommerical.objects.all().values()
    # forms10 = ShortTermInsurancePersonal.objects.all().values()
  
    df = pd.DataFrame(data=forms)
    df=df.replace(1,"Yes")
    df=df.replace(2,"No")

   
    # df2 = pd.DataFrame(data=forms2)

    # df3 = pd.DataFrame(data=forms3)
    # df4 = pd.DataFrame(data=forms4)
    # df5 = pd.DataFrame(data=forms5)
    # df6 = pd.DataFrame(data=forms6)
    # df7 = pd.DataFrame(data=forms7)
    # df8 = pd.DataFrame(data=forms8)
    # df9 = pd.DataFrame(data=forms9)
    # df10 = pd.DataFrame(data=forms10)
    # df = pd.DataFrame(data=pd.concat([df1,df2], axis=0, ignore_index=True))
    # df = pd.DataFrame(data=)
    # df = pd.merge(df1, df2, df3, df4, df5, df6, df7, df8, df9, df10, on = "id")
    # dfl=[df1, df2, df3,df4,df5,df6,df7,df8,df9,df10]
    # dfl=[df1]
    df = df[ ['advisorName'] + [ col for col in df.columns if col != 'advisorName' ] ]
    df.set_index('id')
    # df = reduce(lambda  left,right: pd.merge(left,right,on=['id'],
    #                                         how='outer'), dfl)
    # print(df)
    filename =  "Export Data - %s.csv" %(uuid.uuid4())
    df.to_csv("data/static/csv/%s" %(filename))
    return Response({"file":"static/csv/%s" %(filename)})
