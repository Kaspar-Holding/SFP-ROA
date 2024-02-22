from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.files.base import ContentFile
from .serializers import AssuranceInvestmentSerializers, AssuranceRiskSerializers, EmployeeBenefitsSerializers, FiduciarySerializers, GapCoverSerializers, InvestmentPlanningSerializers, RiskFactorsSerializers, RiskPlanningSerializers, ShortTermInsuranceCommericalSerializers, ShortTermInsurancePersonalSerializers, UserAccountsSerializers, FormSerializers
from .models import AssuranceInvestment, AssuranceRisk, EmployeeBenefits, Fiduciary, GapCover, InvestmentPlanning, RiskFactors, RiskPlanning, ShortTermInsuranceCommerical, ShortTermInsurancePersonal, UserAccount, Form

from django.http import HttpResponse
from django.core.paginator import Paginator
from django.db.models import Q
import pandas as pd
import uuid
import numpy as np
import base64
from functools import reduce
@api_view(['GET'])
def excel(request):
    forms = RiskFactors.objects.all().values()
    RF_BU_Risk = ['Low','Medium','High']
    RF_ClientType = ['Individual','Legal']
    RF_Occupation = ['Minor/Scholar','Retired','Salaried Employee','Self Employed','Student','Unemployed']
    RF_Industry = ['Administrative and support services','Adult Entertainment','Agriculture,forestry and fishing','Arts,Entertainment and Recreation','Broadcasting and Entertainment','Chemical engineering/manufacturing',
    'Community and social activities','Construction and civil engineering','Consumer goods:wholesale and retail','Education','Electricity,solar,water,gas','Entrepreneurship','Estate living and family trusts','Extractive services,mining and quarrying','Financial and insurance','Gambling','Government services,armed and state owned enterprise','Health care and medical','Information technology,communication and telecom','Legal practitioner','Manufacturing','Motor wholesale,retail trade and repair','Non profit organization','Non government organization(NGO)','other','PFMA schedule 1','PFMA schedule 2','PFMA schedule 3A','Professional sport','Real estate and property services','Shell Banking','Transport storage,courier and freight','Travel,tourism and accomodation','Virtual currencies']
    RF_CountryOfBirth =['Afghanistan','Albania','Algeria','American Samoa','Andora','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armania','Aruba','Auckland Islands','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia','Botswana','Bouvet Islands','Brazil','British Indian Ocean Teritory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos','Colombia','Comoros','Congo Democratic','Congo Republic','Cook Islands','Costa Rica','Ivory Cost','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','EI Salvador','Equatorial Guinea','Eritrea','Estonia','eSwaitini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibralter','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Herd Island','Holy See','Honduras','Hongkong','Hungary','Iceland','India','Indonessia','Iran','Iraq','Ireland','Isle of man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Korea North','Korea South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronessia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Mynamar','Namabia','Nauru','Nepal','Netherlands','New Celedonia','Newzealand','Niger','Nigeria','Norfolk Island','Nothern Mariana Islands','Norway','Nuie','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcaim','Poland','Portugal','Puerto Rico','Qatar','Reunion','Roman','Russia','Rwanda','Saint Barthelemy','Saint Helena','Saint Kitts','Saint Lucia','Saint Martin','Saint Pierre','Saint Vincent','Samoa','Saint Marino','Sao Tome','Saudia Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Martin','Slovekia','Slovenia','Solomon Islands','Somalia','South Africa','South Georgia','South Sudan','SPain','Srilanka','Sudan','Suriname','Svalbard','Sweden','Switxerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tokelau','Tonga','Trinidad','Tunisia','Turkey','Turkmenistan','Turks','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States Minor','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Virgin Islands(British)','Virgin Islands(US)','Wallis and Fatuna','West Bank','Western Sahara','Yemen','Zambia','Zimbabwe']
    RF_SourceOfFunds = ['Allowance','Bonus','Bursary','Company profits','Company sale','Cryptocurrency','Debt capital','Disability/social grant','Dividends from investment','Divorce settlement','Equity capital','Gambling winnings','Gift','Income from previous employment','Inherritance','Loan','Lottery winnings','Maintainance(Formal agreement)','Maintainance(Informal agreement)','Maturing Investments','Other','Pension','Provident fund','Rental Propert','Retirement Funds','Salary','Salary asset/property','Sale of shares','Sanlam payout','Savings','Settlement','Transfer to/from approved funds','Trust Income']
    RF_RelationshipToClient =['Annuitant','Applicant','Authorised Representative','Cessionary','Curator','Executor','Fund Annuitant','Gurantor','Legal Guardian','Legal owner','Multi data client','Nominee of ownership','Policy owner','Power of Attorney','Premium Payer','Surety']
    # RF_CountryOfRegistration =
    # RF_CountryOfOperation =
    RF_Type_Legal_Entity = ['Body corporate','Charitable organization','Church/religious organization','Closed corporation','Club','Deceased Estate','Foreign government','Foreign listed company','Foreign state owned entity','Foreign trust','Foreign Unlisted company','Foundation','Fund','Insolvent Estate','Listed company','Non government organization','Non profit organization','Other corporate arrangement','Retirement fund','School/university','State owned Enterprise','Stokvel','Trade Union','Trust','Unlisted company']
    RF_Client_Relationship = ['Beneficial owner','Beneficiary','Co-policy owner','Dependent','EFT third party','Individual acting on behalf of an entity','Individual exercising control other than owner','Individual linked to a partnership','Individual linked to a trust','Legal entity acting on behalf of individual','Legal entity acting on behalf of other legal entity','Legal Entity exercising control over another Legal Entity','Legal Entity has legal relationship with other Legal Entity','Legal Entity linked to a Trust','Legal guardian','Life assured','Natural guardian','Nominee for ownership','Principal owner','Security cession','Signatory','Trust has control over another trust','Trustee','Unit transfer investment owner']
    RF_Product_Name = ['Access to funds or benefits restricted to specific contractual events (specified termination, uncertain insured event)','Access to primary benefits only at claim stage','Access to primary benefits only at claim stage, but have access to cash during the lifetime of the product','Access to the values may be limited by legislation','Accumulation of cash values','AAdministrative service provided','Advisory or intermediary services only with commission based inflow','Allows for restricted number of withdrawals','Benefits governed by specific regulatory- and tax regimes','Can be accessed without any restrictions by law or product provider','Can be offered as security and be transferred to another person (ceded)','Cannot be offered as security or ceded','Contributions are limited by legislation or regulation','Contributions from Third Parties are allowed','Funds can be accumulated and easily accessed','Funds linked to a specific source (Estate, Order of Court, Retirement Fund Benefits, Employer)','Investments are made with discretionary money','Lump sum payments, including ad-hoc lump sum payments allowed','No or little accumulation of cash values during the lifetime of the product','Not available to retail investors','Online transactability and automated access','Payments to foreign bank accounts are allowed','Product allows for investment in or via a foreign jurisdiction(s)','Product only provides a structured flow of transactions','Significant fund flows are involved','Third Party EFT services provided','Third Party non-financial services provided','Transparency is limited in respect of source of funds','Unlimited contributions and withdrawals']
    RF_Transaction_Flow = ['Inflow','Outflow','Not Applicable']
    RF_Transaction_Method = ['Bank Transfer','Cash','Debit order','Debit/credit card','EFT','File/API Transfer','Mobile payment','Retailer/Merchant payment','Script Transfer','Stop order','Straight through processing','Unit Transfer']
    RF_Transaction_Reason = ['Additional Premium','Cession','Client/Policy change','Combined alteration','Commission/Service fee','Continuation','Conversion','New business','Premium arrears','Re-issue','Renewal','Review underwriting','Switch in','Transfer of value']
    RF_High_Transaction_Reason = ['Yes','No']
    RF_Transaction_Frequency = ['Ad hoc','Lump sum and recurring combination','Once off/Lump sum','Recurring']
    # RF_Transaction_Value = []
    # RF_Currency_Value = []
    RF_Transaction_Geography = ['Cross Border','In-country','Not Applicable']
    # RF_Funds_Jurisdiction = []
    RF_Delivery_Channel = ['Intermediaries(Advisors,tied agents)','Intermediaries(Brokers,consultants)</']
    RF_Linked_Party_Acting = ['Not Applicable','No','Yes']
    RF_Linked_Party_Paying = ['Not applicable','Paying funds','Received funds']
    RF_Client_Match = ['Adverse Media','Enforcement,SIP,SIE','False Positive','False Positive-Unsure','False Positive-Unsure:Sanctions','No Alert','PEP-Domestic','PEP-Foreign','Sanction','Sanlam Do not Trnsact List','SOE']
    RF_Client_Beneficiaries = ['Yes','No']
    RF_Adjust_Risk1 = ['Low','Medium','High','Intolerable']
    # RF_Name = []
    # RF_ID = []
    RF_Linked_Party = ['Adverse Media','Enforcement,SIP,SIE','False Positive','False Positive-Unsure','False Positive-Unsure:Sanctions','No Alert','PEP-Domestic','PEP-Foreign','Sanction','Sanlam Do not Trnsact List','SOE']
    RF_RCA = ['Yes','No']
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

        RF_Occupation_id = int(form['RF_Occupation'])
        RF_BU_Risk_id = int(form['RF_BU_Risk'])
        RF_ClientType_id = int(form['RF_ClientType'])
        RF_Industry_id = int(form['RF_Industry'])
        RF_CountryOfBirth_id = int(form['RF_CountryOfBirth'])
        RF_CountryOfResidence_id = int(form['RF_CountryOfResidence'])
        RF_Nationality_id = int(form['RF_Nationality'])
        RF_Different_Nationality_id = int(form['RF_Different_Nationality'])
        RF_CountryOfTax_id = int(form['RF_CountryOfTax'])
        RF_SourceOfFunds_id = int(form['RF_SourceOfFunds'])
        RF_CountryOfRegistration_id = int(form['RF_CountryOfRegistration'])
        RF_CountryOfOperation_id = int(form['RF_CountryOfOperation'])
        RF_RelationshipToClient_id = int(form['RF_RelationshipToClient'])
        RF_Type_Legal_Entity_id = int(form['RF_Type_Legal_Entity'])
        RF_Client_Relationship_id = int(form['RF_Client_Relationship'])
        RF_Product_Name_id = int(form['RF_Product_Name'])
        RF_Transaction_Flow_id = int(form['RF_Transaction_Flow'])
        RF_Transaction_Method_id = int(form['RF_Transaction_Method'])
        RF_Transaction_Reason_id = int(form['RF_Transaction_Reason'])
        RF_High_Transaction_Reason_id = int(form['RF_High_Transaction_Reason'])
        RF_Transaction_Frequency_id = int(form['RF_Transaction_Frequency'])
        # RF_Transaction_Value_id = int(form['RF_Transaction_Value'])
        # RF_Currency_Value_id = int(form['RF_Currency_Value'])
        RF_Transaction_Geography_id = int(form['RF_Transaction_Geography'])
        RF_Funds_Jurisdiction_id = int(form['RF_Funds_Jurisdiction'])
        RF_Delivery_Channel_id = int(form['RF_Delivery_Channel'])
        RF_Linked_Party_Acting_id = int(form['RF_Linked_Party_Acting'])
        RF_Linked_Party_Paying_id = int(form['RF_Linked_Party_Paying'])
        RF_Client_Match_id = int(form['RF_Client_Match'])
        RF_Client_Beneficiaries_id = int(form['RF_Client_Beneficiaries'])
        RF_Adjust_Risk1_id = int(form['RF_Adjust_Risk1'])
        # RF_Name_id = int(form['RF_Name'])
        # RF_ID_id = int(form['RF_ID'])
        RF_Linked_Party_id = int(form['RF_Linked_Party'])
        RF_RCA_id = int(form['RF_RCA'])
        RF_Birth_Country_id = int(form['RF_Birth_Country'])
        RF_Residence_Country_id = int(form['RF_Residence_Country'])
        RF_Nationality1_id = int(form['RF_Nationality1'])
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
        form['RF_Transaction_Flow'] = RF_Transaction_Flow[RF_Transaction_Flow_id]
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


        RecordOfAdvice = Form.objects.filter(formId=form['id']).values().first()
        form['clientName'] = RecordOfAdvice['clientName']
        form['clientIdNumber'] = RecordOfAdvice['clientIdNumber']
        form['clientAddress'] = RecordOfAdvice['clientAddress']
        form['clientPhoneNumber'] = RecordOfAdvice['clientPhoneNumber']
        form['clientEmail'] = RecordOfAdvice['clientEmail']
        form['clientDateOfBirth'] = RecordOfAdvice['clientDateOfBirth']
        if int(RecordOfAdvice['clientLetterOfIntroduction']) == 0:
            form['clientLetterOfIntroduction'] = "No"
        if int(RecordOfAdvice['clientLetterOfIntroduction']) == 1:
            form['clientLetterOfIntroduction'] = "Yes"
        form['clientLetterOfIntroductionReason'] = RecordOfAdvice['clientLetterOfIntroductionReason']
        if int(RecordOfAdvice['clientLetterOfIntroductionAccess']) == 0:
            form['clientLetterOfIntroductionAccess'] = "No"
        if int(RecordOfAdvice['clientLetterOfIntroductionAccess']) == 1:
            form['clientLetterOfIntroductionAccess'] = "Yes"
        form['clientLetterOfIntroductionAccessReason'] = RecordOfAdvice['clientLetterOfIntroductionAccessReason']
        if int(RecordOfAdvice['clientFica']) == 0:
            form['clientFica'] = "No"
        if int(RecordOfAdvice['clientFica']) == 1:
            form['clientFica'] = "Yes"
        form['clientFicaReason'] = RecordOfAdvice['clientFicaReason']
        form['clientBackgroundInfo'] = RecordOfAdvice['clientBackgroundInfo']


   
    forms2 = AssuranceInvestment.objects.all().values()
    forms3 = AssuranceRisk.objects.all().values()
    forms4 = EmployeeBenefits.objects.all().values()
    forms5 = Fiduciary.objects.all().values()
    forms6 = GapCover.objects.all().values()
    forms7 = InvestmentPlanning.objects.all().values()
    forms8 = RiskPlanning.objects.all().values()
    forms9 = ShortTermInsuranceCommerical.objects.all().values()
    forms10 = ShortTermInsurancePersonal.objects.all().values()
  
    df1 = pd.DataFrame(data=forms)
   
    df2 = pd.DataFrame(data=forms2)

    df3 = pd.DataFrame(data=forms3)
    df4 = pd.DataFrame(data=forms4)
    df5 = pd.DataFrame(data=forms5)
    df6 = pd.DataFrame(data=forms6)
    df7 = pd.DataFrame(data=forms7)
    df8 = pd.DataFrame(data=forms8)
    df9 = pd.DataFrame(data=forms9)
    df10 = pd.DataFrame(data=forms10)
    # df = pd.DataFrame(data=pd.concat([df1,df2], axis=0, ignore_index=True))
    # df = pd.DataFrame(data=)
    # df = pd.merge(df1, df2, df3, df4, df5, df6, df7, df8, df9, df10, on = "id")
    dfl=[df1, df2, df3,df4,df5,df6,df7,df8,df9,df10]
    df = reduce(lambda  left,right: pd.merge(left,right,on=['id'],
                                            how='outer'), dfl)
    print(df)
    filename =  "Export Data - %s.csv" %(uuid.uuid4())
    df.to_csv("data/static/csv/%s" %(filename))
    return Response({"file":"static/csv/%s" %(filename)})

@api_view(['GET'])
def sample(request):
    forms = RiskFactors.objects.all().values()

    df = pd.DataFrame(data=forms)
    print(df)
    filename =  "Export Data - %s.csv" %(uuid.uuid4())
    df.to_csv("data/static/csv/%s" %(filename))
    return Response({"file":"static/csv/%s" %(filename)})

@api_view(['POST'])
def importCSV(request):
    # decrypted = base64.b64decode(request.data['costCsv']).decode('utf-8')
    csv_data = request.data['exportCSV']
    format, csvstr = csv_data.split(';base64,')
    ext = format.split('/')[-1]
    file_name = "'file." + ext
    csvData = ContentFile(base64.b64decode(csvstr), name=file_name) 
    df = pd.read_csv(csvData)
    csvData = []
    RF_BU_Risk = ['low','medium','high']
    RF_ClientType = ['Individual','Legal']
    RF_Occupation = ['Minor/Scholar','Retired','Salaried Employee','Self Employed','Student','Unemployed']
    RF_Industry = ['Administrative and support services','Adult Entertainment','Agriculture,forestry and fishing','Arts,Entertainment and Recreation','Broadcasting and Entertainment','Chemical engineering/manufacturing',
    'Community and social activities','Construction and civil engineering','Consumer goods:wholesale and retail','Education','Electricity,solar,water,gas','Entrepreneurship','Estate living and family trusts','Extractive services,mining and quarrying','Financial and insurance','Gambling','Government services,armed and state owned enterprise','Health care and medical','Information technology,communication and telecom','Legal practitioner','Manufacturing','Motor wholesale,retail trade and repair','Non profit organization','Non government organization(NGO)','other','PFMA schedule 1','PFMA schedule 2','PFMA schedule 3A','Professional sport','Real estate and property services','Shell Banking','Transport storage,courier and freight','Travel,tourism and accomodation','Virtual currencies']
    RF_CountryOfBirth =['Afghanistan','Albania','Algeria','American Samoa','Andora','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armania','Aruba','Auckland Islands','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia','Botswana','Bouvet Islands','Brazil','British Indian Ocean Teritory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos','Colombia','Comoros','Congo Democratic','Congo Republic','Cook Islands','Costa Rica','Ivory Cost','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','EI Salvador','Equatorial Guinea','Eritrea','Estonia','eSwaitini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibralter','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Herd Island','Holy See','Honduras','Hongkong','Hungary','Iceland','India','Indonessia','Iran','Iraq','Ireland','Isle of man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Korea North','Korea South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronessia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Mynamar','Namabia','Nauru','Nepal','Netherlands','New Celedonia','Newzealand','Niger','Nigeria','Norfolk Island','Nothern Mariana Islands','Norway','Nuie','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcaim','Poland','Portugal','Puerto Rico','Qatar','Reunion','Roman','Russia','Rwanda','Saint Barthelemy','Saint Helena','Saint Kitts','Saint Lucia','Saint Martin','Saint Pierre','Saint Vincent','Samoa','Saint Marino','Sao Tome','Saudia Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Martin','Slovekia','Slovenia','Solomon Islands','Somalia','South Africa','South Georgia','South Sudan','SPain','Srilanka','Sudan','Suriname','Svalbard','Sweden','Switxerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tokelau','Tonga','Trinidad','Tunisia','Turkey','Turkmenistan','Turks','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States Minor','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Virgin Islands(British)','Virgin Islands(US)','Wallis and Fatuna','West Bank','Western Sahara','Yemen','Zambia','Zimbabwe']
    RF_SourceOfFunds = ['Allowance','Bonus','Bursary','Company profits','Company sale','Cryptocurrency','Debt capital','Disability/social grant','Dividends from investment','Divorce settlement','Equity capital','Gambling winnings','Gift','Income from previous employment','Inherritance','Loan','Lottery winnings','Maintainance(Formal agreement)','Maintainance(Informal agreement)','Maturing Investments','Other','Pension','Provident fund','Rental Propert','Retirement Funds','Salary','Salary asset/property','Sale of shares','Sanlam payout','Savings','Settlement','Transfer to/from approved funds','Trust Income']
    RF_RelationshipToClient =['Annuitant','Applicant','Authorised Representative','Cessionary','Curator','Executor','Fund Annuitant','Gurantor','Legal Guardian','Legal owner','Multi data client','Nominee of ownership','Policy owner','Power of Attorney','Premium Payer','Surety']
    # RF_CountryOfRegistration =
    # RF_CountryOfOperation =
    RF_Type_Legal_Entity = ['Body corporate','Charitable organization','Church/religious organization','Closed corporation','Club','Deceased Estate','Foreign government','Foreign listed company','Foreign state owned entity','Foreign trust','Foreign Unlisted company','Foundation','Fund','Insolvent Estate','Listed company','Non government organization','Non profit organization','Other corporate arrangement','Retirement fund','School/university','State owned Enterprise','Stokvel','Trade Union','Trust','Unlisted company']
    RF_Client_Relationship = ['Beneficial owner','Beneficiary','Co-policy owner','Dependent','EFT third party','Individual acting on behalf of an entity','Individual exercising control other than owner','Individual linked to a partnership','Individual linked to a trust','Legal entity acting on behalf of individual','Legal entity acting on behalf of other legal entity','Legal Entity exercising control over another Legal Entity','Legal Entity has legal relationship with other Legal Entity','Legal Entity linked to a Trust','Legal guardian','Life assured','Natural guardian','Nominee for ownership','Principal owner','Security cession','Signatory','Trust has control over another trust','Trustee','Unit transfer investment owner']
    RF_Product_Name = ['Access to funds or benefits restricted to specific contractual events (specified termination, uncertain insured event)','Access to primary benefits only at claim stage','Access to primary benefits only at claim stage, but have access to cash during the lifetime of the product','Access to the values may be limited by legislation','Accumulation of cash values','AAdministrative service provided','Advisory or intermediary services only with commission based inflow','Allows for restricted number of withdrawals','Benefits governed by specific regulatory- and tax regimes','Can be accessed without any restrictions by law or product provider','Can be offered as security and be transferred to another person (ceded)','Cannot be offered as security or ceded','Contributions are limited by legislation or regulation','Contributions from Third Parties are allowed','Funds can be accumulated and easily accessed','Funds linked to a specific source (Estate, Order of Court, Retirement Fund Benefits, Employer)','Investments are made with discretionary money','Lump sum payments, including ad-hoc lump sum payments allowed','No or little accumulation of cash values during the lifetime of the product','Not available to retail investors','Online transactability and automated access','Payments to foreign bank accounts are allowed','Product allows for investment in or via a foreign jurisdiction(s)','Product only provides a structured flow of transactions','Significant fund flows are involved','Third Party EFT services provided','Third Party non-financial services provided','Transparency is limited in respect of source of funds','Unlimited contributions and withdrawals']
    RF_Transaction_Flow = ['Inflow','Outflow','Not Applicable']
    RF_Transaction_Method = ['Bank Transfer','Cash','Debit order','Debit/credit card','EFT','File/API Transfer','Mobile payment','Retailer/Merchant payment','Script Transfer','Stop order','Straight through processing','Unit Transfer']
    RF_Transaction_Reason = ['Additional Premium','Cession','Client/Policy change','Combined alteration','Commission/Service fee','Continuation','Conversion','New business','Premium arrears','Re-issue','Renewal','Review underwriting','Switch in','Transfer of value']
    RF_High_Transaction_Reason = ['Yes','No']
    RF_Transaction_Frequency = ['Ad hoc','Lump sum and recurring combination','Once off/Lump sum','Recurring']
    # RF_Transaction_Value = []
    # RF_Currency_Value = []
    RF_Transaction_Geography = ['Cross Border','In-country','Not Applicable']
    # RF_Funds_Jurisdiction = []
    RF_Delivery_Channel = ['Intermediaries(Advisors,tied agents)','Intermediaries(Brokers,consultants)</']
    RF_Linked_Party_Acting = ['Not Applicable','No','Yes']
    RF_Linked_Party_Paying = ['Not applicable','Paying funds','Received funds']
    RF_Client_Match = ['Adverse Media','Enforcement,SIP,SIE','False Positive','False Positive-Unsure','False Positive-Unsure:Sanctions','No Alert','PEP-Domestic','PEP-Foreign','Sanction','Sanlam Do not Trnsact List','SOE']
    RF_Client_Beneficiaries = ['Yes','No']
    RF_Adjust_Risk1 = ['Low','Medium','High','Intolerable']
    # RF_Name = []
    # RF_ID = []
    RF_Linked_Party = ['Adverse Media','Enforcement,SIP,SIE','False Positive','False Positive-Unsure','False Positive-Unsure:Sanctions','No Alert','PEP-Domestic','PEP-Foreign','Sanction','Sanlam Do not Trnsact List','SOE']
    RF_RCA = ['Yes','No']
    for i in range(len(df)):
        csvData.append({
            "advisorId" : request.data['advisorId'],
            "RF_Overall_Risk" : str(df['RF_Overall_Risk'][i]) if df['RF_Overall_Risk'][i] is not None else "",
            "RF_BU_Risk" : RF_BU_Risk.index(str(df['RF_BU_Risk'][i]))+1 if df['RF_BU_Risk'][i] is not None else 1,
            "RF_Date" : str(df['RF_Date'][i]) if df['RF_Date'][i] is not None else "",
            "RF_ClientName" : str(df['RF_ClientName'][i]) if df['RF_ClientName'][i] is not None else "",
            "RF_ClientId" : str(df['RF_ClientId'][i]) if df['RF_ClientId'][i] is not None else "",
            "RF_CompleteByName" : str(df['RF_CompleteByName'][i]) if df['RF_CompleteByName'][i] is not None else "",
            "RF_CompleteByRole" : str(df['RF_CompleteByRole'][i]) if df['RF_CompleteByRole'][i] is not None else "",
            "RF_ClientType" : RF_ClientType.index(str(df['RF_ClientType'][i]))+1 if df['RF_ClientType'][i] is not None else "1",
            "RF_Occupation" : RF_Occupation.index(str(df['RF_Occupation'][i]))+1 if df['RF_Occupation'][i] is not None else "1",
            "RF_CountryOfBirth" : RF_CountryOfBirth.index(str(df['RF_CountryOfBirth'][i]))+1 if df['RF_CountryOfBirth'][i] is not None else "1",
            "RF_CountryOfResidence" : RF_CountryOfBirth.index(str(df['RF_CountryOfResidence'][i]))+1 if df['RF_CountryOfResidence'][i] is not None else "1",
            "RF_Nationality" : RF_CountryOfBirth.index(str(df['RF_Nationality'][i]))+1 if df['RF_Nationality'][i] is not None else "1",
            "RF_Different_Nationality" : RF_CountryOfBirth.index(str(df['RF_Different_Nationality'][i]))+1 if df['RF_Different_Nationality'][i] is not None else "1",
            "RF_CountryOfTax" : RF_CountryOfBirth.index(str(df['RF_CountryOfTax'][i]))+1 if df['RF_CountryOfTax'][i] is not None else "1",
            "RF_Industry" : RF_Industry.index(str(df['RF_Industry'][i]))+1 if df['RF_Industry'][i] is not None else "1",
            "RF_SourceOfFunds" : RF_SourceOfFunds.index(str(df['RF_SourceOfFunds'][i]))+1 if df['RF_SourceOfFunds'][i] is not None else "",
            "RF_RelationshipToClient" : RF_RelationshipToClient.index(str(df['RF_RelationshipToClient'][i]))+1 if df['RF_RelationshipToClient'][i] is not None else "1",
            "RF_CountryOfRegistration" : RF_CountryOfBirth.index(str(df['RF_CountryOfRegistration'][i]))+1 if df['RF_CountryOfRegistration'][i] is not None else "206",
            "RF_CountryOfOperation" : RF_CountryOfBirth.index(str(df['RF_CountryOfOperation'][i]))+1 if df['RF_CountryOfOperation'][i] is not None else "206",
            "RF_Type_Legal_Entity" : RF_Type_Legal_Entity.index(str(df['RF_Type_Legal_Entity'][i]))+1 if df['RF_Type_Legal_Entity'][i] is not None else "",
            "RF_Client_Relationship" : RF_Client_Relationship.index(str(df['RF_Client_Relationship'][i]))+1 if df['RF_Client_Relationship'][i] is not None else "1",
            "RF_Product_Name" : RF_Product_Name.index(str(df['RF_Product_Name'][i]))+1 if df['RF_Product_Name'][i] is not None else "1",
             "RF_Transaction_Flow" : RF_Transaction_Flow.index(str(df['RF_Transaction_Flow'][i]))+1 if df['RF_Transaction_Flow'][i] is not None else "1",
            "RF_Transaction_Method" : RF_Transaction_Method.index(str(df['RF_Transaction_Method'][i]))+1 if df['RF_Transaction_Method'][i] is not None else "",
            "RF_Transaction_Reason" : RF_Transaction_Reason.index(str(df['RF_Transaction_Reason'][i]))+1 if df['RF_Transaction_Reason'][i] is not None else "",
            "RF_High_Transaction_Reason" : RF_High_Transaction_Reason.index(str(df['RF_High_Transaction_Reason'][i]))+1 if df['RF_High_Transaction_Reason'][i] is not None else "",
            "RF_Transaction_Frequency" : RF_Transaction_Frequency.index(str(df['RF_Transaction_Frequency'][i]))+1 if df['RF_Transaction_Frequency'][i] is not None else "",
            "RF_Transaction_Value" : str(df['RF_Transaction_Value'][i]) if df['RF_Transaction_Value'][i] is not None else "",
            "RF_Currency_Value" : str(df['RF_Currency_Value'][i]) if df['RF_Currency_Value'][i] is not None else "",
            "RF_Transaction_Geography" : RF_Transaction_Geography.index(str(df['RF_Transaction_Geography'][i]))+1 if df['RF_Transaction_Geography'][i] is not None else "",
            "RF_Funds_Jurisdiction" : RF_CountryOfBirth.index(str(df['RF_Funds_Jurisdiction'][i]))+1 if df['RF_Funds_Jurisdiction'][i] is not None else "",
            "RF_Delivery_Channel" : RF_Delivery_Channel.index(str(df['RF_Delivery_Channel'][i]))+1 if df['RF_Delivery_Channel'][i] is not None else "",
            "RF_Linked_Party_Acting" : RF_Linked_Party_Acting.index(str(df['RF_Linked_Party_Acting'][i]))+1 if df['RF_Linked_Party_Acting'][i] is not None else "1",
            "RF_Linked_Party_Paying" : RF_Linked_Party_Paying.index(str(df['RF_Linked_Party_Paying'][i]))+1 if df['RF_Linked_Party_Paying'][i] is not None else "",
            "RF_Client_Match" : RF_Client_Match.index(str(df['RF_Client_Match'][i]))+1 if df['RF_Client_Match'][i] is not None else "",
            "RF_Client_Beneficiaries" : RF_Client_Beneficiaries.index(str(df['RF_Client_Beneficiaries'][i]))+1 if df['RF_Client_Beneficiaries'][i] is not None else "",
            "RF_Adjust_Risk1" : RF_Adjust_Risk1.index(str(df['RF_Adjust_Risk1'][i]))+1 if df['RF_Adjust_Risk1'][i] is not None else "",
            "RF_Name" : str(df['RF_Name'][i]) if df['RF_Name'][i] is not None else "",
            "RF_ID" : str(df['RF_ID'][i]) if df['RF_ID'][i] is not None else "",
            "RF_Linked_Party" : str(df['RF_Linked_Party'][i]) if df['RF_Linked_Party'][i] is not None else "",
            "RF_RCA" : RF_RCA.index(str(df['RF_RCA'][i]))+1 if df['RF_RCA'][i] is not None else "",
            "RF_Birth_Country" : str(df['RF_Birth_Country'][i]) if df['RF_Birth_Country'][i] is not None else "",
            "RF_Residence_Country" : str(df['RF_Residence_Country'][i]) if df['RF_Residence_Country'][i] is not None else "",
            "RF_Nationality1" : str(df['RF_Nationality1'][i]) if df['RF_Nationality1'][i] is not None else "",
            "RF_Control1" : str(df['RF_Control1'][i]) if df['RF_Control1'][i] is not None else "",
            "RF_Control2" : str(df['RF_Control2'][i]) if df['RF_Control2'][i] is not None else "",
            "RF_Control3" : str(df['RF_Control3'][i]) if df['RF_Control3'][i] is not None else "",
            "RF_Another_Control1" : str(df['RF_Another_Control1'][i]) if df['RF_Another_Control1'][i] is not None else "",
            "RF_Another_Control2" : str(df['RF_Another_Control2'][i]) if df['RF_Another_Control2'][i] is not None else "" ,
        })
    # print(csvData)
    data = {"advisorId":1,"RF_Overall_Risk":"","RF_BU_Risk":"2","RF_Date":"2023-02-22","RF_ClientName":"","RF_ClientId":"","RF_CompleteByName":"Armughan","RF_EventID":"","RF_CompleteByRole":"","RF_AdjustedRisk":"","RF_GCO_Risk":"","RF_Approvals":"","RF_ClientType":"1","RF_Occupation":"1","RF_CountryOfBirth":"0","RF_CountryOfResidence":"0","RF_Nationality":"0","RF_Different_Nationality":"0","RF_CountryOfTax":"0","RF_Industry":"0","RF_SourceOfFunds":"0","RF_RelationshipToClient":"0","RF_CountryOfRegistration":"0","RF_CountryOfOperation":"0","RF_Type_Legal_Entity":"0","RF_Client_Relationship":"0","RF_Product_Name":"7","RF_Transaction_Flow":"0","RF_Transaction_Method":"0","RF_Transaction_Reason":"0","RF_High_Transaction_Reason":"0","RF_Transaction_Frequency":"0","RF_Transaction_Value":"0","RF_Currency_Value":"0","RF_Transaction_Geography":"0","RF_Funds_Jurisdiction":"0","RF_Delivery_Channel":"0","RF_Linked_Party_Acting":"0","RF_Linked_Party_Paying":"0","RF_Client_Match":"0","RF_Client_Beneficiaries":"0","RF_Adjust_Risk1":"2","RF_Name":"","RF_ID":"","RF_Linked_Party":"0","RF_RCA":"0","RF_Birth_Country":"0","RF_Residence_Country":"0","RF_Nationality1":"0","RF_Control1":"","RF_Control2":"","RF_Control3":"","RF_Another_Control1":"0","RF_Another_Control2":"0"}
    for row in csvData:
        print(row)
        # importCSV = RiskFactors.objects.filter(RF_ClientId=csvData[i]['RF_ClientId']).values()
        # importCSV = RiskFactors.objects.filter(RF_ClientId=csvData[i]['RF_ClientId'])
        serializer = RiskFactorsSerializers(data=row, many=False)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)
    # serializer = importCSVSerializer(data=csvData,many=True, partial=True)
    # if serializer.is_valid():
    #     serializer.update()
    # print(df.head())
    return Response({"message": "Updated","code":200},200)
    # return Response({"data":csvData})
@api_view(['POST'])

def getData(request):
    limit = 10
    orderBy = request.data['order_by']
    searchQuery = request.data['search_query']
    if searchQuery != "":
        users = UserAccount.objects.filter(Q(name__icontains=searchQuery) | Q(email__icontains=searchQuery)).order_by('id').values('id','email','name','is_superuser','is_active')
    else:
        users = UserAccount.objects.values('id','email','name','is_superuser','is_active').order_by('id')

    if orderBy[0] == "-":
        users = sorted(users, key=lambda d: d[orderBy[1:]], reverse=True) 
    else:
        users = sorted(users, key=lambda d: d[orderBy]) 
        
    p = Paginator(users, limit)
    # print(p.num_pages)
    if request.data['page_number'] <= p.num_pages:
            
        return Response(
            {
                "total_pages" : p.num_pages,
                "has_pages" : p.num_pages,
                "total_records" : len(users),
                "pagelimit" : limit,
                "next" : p.page(request.data['page_number']).has_next(),
                "results" : p.page(request.data['page_number']).object_list
            }
        )
    else:
        return Response(
            {
                "total_pages" : p.num_pages,
                "next" : None,
                "has_pages" : p.num_pages,
                "total_records" : len(users),
                "pagelimit" : limit,
                "results" : None
            }
        )

@api_view(['POST'])
def deleteUser(request):
    if UserAccount.objects.filter(id=request.data['id']).exists():
        UserAccount.objects.filter(id=request.data['id']).delete()
        return Response({"message":"Delete"})
    else:
        return Response({"message":"User Not found"})


@api_view(['GET'])
def userStats(request):
    admin_users = UserAccount.objects.filter(is_superuser = True)
    admin_serializer = UserAccountsSerializers(admin_users, many=True)
    agent_users = UserAccount.objects.filter(is_superuser = False)
    agent_serializer = UserAccountsSerializers(agent_users, many=True)
    active_users = UserAccount.objects.filter(is_active = "1")
    active_serializer = UserAccountsSerializers(active_users, many=True)
    inactive_users = UserAccount.objects.filter(is_active = "0")
    inactive_serializer = UserAccountsSerializers(inactive_users, many=True)

    return Response({
            "admin_users": len(admin_serializer.data),
            "agent_users": len(agent_serializer.data),
            "active_users": len(active_serializer.data),
            "inactive_users": len(inactive_serializer.data),
        },200)

@api_view(['POST'])
def userDetails(request):
    user_details = UserAccount.objects.filter(id = request.data['userID'])
    user_details_serializer = UserAccountsSerializers(user_details, many=True)
    if len(user_details_serializer.data) != 0:
        return Response({"user_details": user_details_serializer.data},200)
    else:
        return Response({"error": "User Not Found"},404)

@api_view(['POST'])
def updateUser(request):
    user = UserAccount.objects.get(id=request.data['id'])
    serializer = UserAccountsSerializers(instance=user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Found","code":200,"Data": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)


@api_view(['POST'])
def insertData(request):
    return Response(request.data)

@api_view(['POST'])
def insertFormData(request):
    serializer = FormSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = Form.objects.filter(advisorId = request.data['advisorId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = FormSerializers(old_form, many=False)
        # return Response({"data":serializer1.data, "length": len(serializer1.data['client_id'])})
        if len(serializer1.data['clientIdNumber']) == 0:
            serializer.create(serializer.validated_data)
            latest = Form.objects.latest('id')
            serializer2 = FormSerializers(latest, many=False)
            return Response({"message": "Data is inserted","formId":serializer2.data['id'],"code":201,},201)
        else :
            return Response({'message': "Form Already Exists","code": "200", "form" : serializer1.data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def viewFormData(request):
    message = {}
    code = 404
    try:
        form = Form.objects.get(id=request.data['formId'])
        formSerializer = FormSerializers(form, many=False)
        
        form = formSerializer.data
        advisorName = UserAccount.objects.get(id=formSerializer.data['advisorId'])
        advisorNameSerializer = UserAccountsSerializers(advisorName, many=False)

        form['advisorName'] = advisorNameSerializer.data['name']
        message = {"message": "Found","code":200,"form": form}
        code = 200
    except:
        message = {"message": "Error 404, Not found","code":404}
        code = 404
    return Response(message,code)

@api_view(['POST'])
def printStatus(request):
    message = {}
    code = 404
    # try:
    print(request.data['formId'])
    form = Form.objects.get(id=request.data['formId'])
    formSerializer = FormSerializers(form, many=False)
    form = formSerializer.data
    form.pop("id")
    form.pop("advisorId")
    form.pop("formId")
    form.pop("status")
    form.pop("created_at")
    form.pop("updated_at")
    res = next((k, v) for k, v in form.items() if v)
    print(res)
    form1 = AssuranceInvestment.objects.get(id=request.data['formId'])
    formSerializer1 = AssuranceInvestmentSerializers(form1, many=False)
    form1 = formSerializer1.data
    form1.pop("id")
    form1.pop("advisorId")
    form1.pop("formId")
    form1.pop("status")
    form1.pop("created_at")
    form1.pop("updated_at")
    res1 = next((k, v) for k, v in form1.items() if v)
    if(res1):
        print(res1)
    form2 = AssuranceRisk.objects.get(id=request.data['formId'])
    formSerializer2 = AssuranceRiskSerializers(form2, many=False)
    form2 = formSerializer2.data
    form2.pop("id")
    form2.pop("advisorId")
    form2.pop("formId")
    form2.pop("status")
    form2.pop("created_at")
    form2.pop("updated_at")
    res2 = next(((k, v) for k, v in form2.items() if v),None)
    print(res2)
    form3 = EmployeeBenefits.objects.get(id=request.data['formId'])
    formSerializer3 = EmployeeBenefitsSerializers(form3, many=False)
    form3 = formSerializer3.data
    form3.pop("id")
    form3.pop("advisorId")
    form3.pop("formId")
    form3.pop("status")
    form3.pop("created_at")
    form3.pop("updated_at")
    res3 = next(((k, v) for k, v in form3.items() if v),None)
    print(res3)
    form4 = Fiduciary.objects.get(id=request.data['formId'])
    formSerializer4 = FiduciarySerializers(form4, many=False)
    form4 = formSerializer4.data
    form4.pop("id")
    form4.pop("advisorId")
    form4.pop("formId")
    form4.pop("status")
    form4.pop("created_at")
    form4.pop("updated_at")
    res4 = next(((k, v) for k, v in form4.items() if v),None)
    print(res4)
    form5 = GapCover.objects.get(id=request.data['formId'])
    formSerializer5 = GapCoverSerializers(form5, many=False)
    form5 = formSerializer5.data
    form5.pop("id")
    form5.pop("advisorId")
    form5.pop("formId")
    form5.pop("status")
    form5.pop("created_at")
    form5.pop("updated_at")
    res5 = next(((k, v) for k, v in form5.items() if v),None)
    print(res5)
    form6 = InvestmentPlanning.objects.get(id=request.data['formId'])
    formSerializer6 = InvestmentPlanningSerializers(form6, many=False)
    form6 = formSerializer6.data
    form6.pop("id")
    form6.pop("advisorId")
    form6.pop("formId")
    form6.pop("status")
    form6.pop("created_at")
    form6.pop("updated_at")
    res6 = next(((k, v) for k, v in form6.items() if v),None)
    print(res6)
    form7 = RiskPlanning.objects.get(id=request.data['formId'])
    formSerializer7 = RiskPlanningSerializers(form7, many=False)
    form7 = formSerializer7.data
    form7.pop("id")
    form7.pop("advisorId")
    form7.pop("formId")
    form7.pop("status")
    form7.pop("created_at")
    form7.pop("updated_at")
    res7 = next(((k, v) for k, v in form7.items() if v),None)
    print(res7)
    form8 = ShortTermInsuranceCommerical.objects.get(id=request.data['formId'])
    formSerializer8 = ShortTermInsuranceCommericalSerializers(form8, many=False)
    form8 = formSerializer8.data
    form8.pop("id")
    form8.pop("advisorId")
    form8.pop("status")
    form8.pop("formId")
    form8.pop("created_at")
    form8.pop("updated_at")
    res8 = next(((k, v) for k, v in form8.items() if v),None)
    print(res8)
    form9 = ShortTermInsurancePersonal.objects.get(id=request.data['formId'])
    formSerializer9 = ShortTermInsurancePersonalSerializers(form9, many=False)
    form9 = formSerializer9.data
    form9.pop("id")
    form9.pop("advisorId")
    form9.pop("formId")
    form9.pop("status")
    form9.pop("created_at")
    form9.pop("updated_at")
    res9 = next(((k, v) for k, v in form9.items() if v),None)
    print(res9)
    if res != None:
        RecordOfAdvice1 = False
    else:
        RecordOfAdvice1 = False
    if res1 != None:
        AssuranceInvestment1 = True
    else:
        AssuranceInvestment1 = False
    if res2 != None:
        AssuranceRisk1 = True
    else:
        AssuranceRisk1 = False
    if res3 != None:
        EmployeeBenefits1 = True
    else:
        EmployeeBenefits1 = False
    if res4 != None:
        Fiduciary1 = True
    else:
        Fiduciary1 = False
    if res5 != None:
        GapCover1 = False
    else:
        GapCover1 = False
    if res6 != None:
        InvestmentPlanning1 = True
    else:
        InvestmentPlanning1 = False
    if res7 != None:
        RiskPlanning1 = True
    else:
        RiskPlanning1 = False
    if res8 != None:
        ShortTermInsuranceCommerical1 = True
    else:
        ShortTermInsuranceCommerical1 = False
    if res9 != None:
        ShortTermInsurancePersonal1 = True
    else:
        ShortTermInsurancePersonal1 = False
    message = {"message": "Found","code":200,"componentStatus": {"RecordOfAdvice":RecordOfAdvice1,"AssuranceInvestment":AssuranceInvestment1,"AssuranceRisk":AssuranceRisk1,"EmployeeBenefits":EmployeeBenefits1,"Fiduciary":Fiduciary1,"GapCover":GapCover1,"InvestmentPlanning":InvestmentPlanning1,"RiskPlanning":RiskPlanning1,"ShortTermInsuranceCommerical":ShortTermInsuranceCommerical1,"ShortTermInsurancePersonal":ShortTermInsurancePersonal1}}
    code = 200
    return Response(message,code)

@api_view(['POST'])
def updateFormData(request):
    form = Form.objects.get(id=request.data['id'])
    serializer = FormSerializers(instance=form, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Found","code":200,"Data": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def changeFormStatus(request):
    form = RiskFactors.objects.filter(id=request.data['formId']).first()
    serializer = RiskFactorsSerializers(instance=form, data={'status': request.data['formStatus']}, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"Data": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['DELETE'])
def deleteFormData(request):
    form = Form.objects.get(id=request.data['formId'])
    serializer = FormSerializers(instance=form, data=request.data)
    if serializer.is_valid():
        form.delete()
        return Response({"message": "Deleted","code":200,"Data": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def sampleFile(request):
    doc = DocxTemplate("Record of Advice V22.5 unlocked.docx")
    client_name = request.data['client_name']
    id_number = request.data['client_id']
    address = request.data['client_address']
    email = request.data['client_email']
    phone = ""
    advisor = request.data['advisor_id']
    date_of_birth = request.data['client_date_of_birth']
    data = {
        'name' : client_name , 
        'id_number' : id_number , 
        'address' : address , 
        'email' : email ,  
        'phone' : phone ,  
        'financial_advisor' : advisor ,  
        'date_of_birth' : date_of_birth , 
    }
    
        
    data['background_information'] = request.data['client_background_info']
    doc.render(data)
    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    response['Content-Disposition'] = 'attachment; filename=download.docx'
    doc.save(response)
    return response

@api_view(['POST'])
def formStats(request):
    # forms = RiskFactors.objects.filter(advisorId = request.data['advisorId'])
    # formSerializer = RiskFactorsSerializers(forms, many=True)
    complete_forms = RiskFactors.objects.filter(advisorId = request.data['advisorId'],status = 1)
    complete_serializer = RiskFactorsSerializers(complete_forms, many=True)
    incomplete_forms = RiskFactors.objects.filter(advisorId = request.data['advisorId'],status = 0)
    incomplete_serializer = RiskFactorsSerializers(incomplete_forms, many=True)
    searchQuery = request.data['search_query']
    riskFactors = RiskFactors.objects.filter(advisorId = request.data['advisorId'])
    forms_data = []
    if searchQuery != "":
        forms_data = riskFactors.filter(Q(RF_ClientName__icontains=searchQuery) | Q(RF_ClientId__icontains=searchQuery)).order_by('RF_ClientName').values("id","advisorId","RF_ClientName","RF_ClientId","RF_Client_Match")
    else:
        forms_data = riskFactors.order_by('RF_ClientName').values("id","advisorId","RF_ClientName","RF_ClientId","RF_Client_Match")
    orderBy = request.data['order_by']
    p = Paginator(forms_data, 10)
    if request.data['page_number'] <= p.num_pages:
            
        return Response(
            {
                "completed_forms": len(complete_serializer.data),
                "incompleted_forms": len(incomplete_serializer.data),
                "total_pages" : p.num_pages,
                "has_pages" : p.num_pages,
                "total_records" : len(forms_data),
                "pagelimit" : 10,
                "next" : p.page(request.data['page_number']).has_next(),
                "results" : p.page(request.data['page_number']).object_list
            }
        )
    else:
        return Response(
            {
                "completed_forms": len(complete_serializer.data),
                "incompleted_forms": len(incomplete_serializer.data),
                "total_pages" : p.num_pages,
                "next" : None,
                "has_pages" : p.num_pages,
                "total_records" : len(forms_data),
                "pagelimit" : 10,
                "results" : {}
            }
        )
    # return Response({
    #         "completed_forms": len(complete_serializer.data),
    #         "incompleted_forms": len(incomplete_serializer.data),
    #         "forms" : formSerializer.data
    #     },200)

# Fiduciary
@api_view(['POST'])
def insertFiduciaryData(request):
    serializer = FiduciarySerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = Fiduciary.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        # old_form = Fiduciary.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = FiduciarySerializers(old_form, many=False)
        data = serializer1.data
        # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
        if str(serializer1.data['advisorId']) == "None":
            serializer.create(serializer.validated_data)
            latest = Fiduciary.objects.latest('id')
            serializer2 = FiduciarySerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"form" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "form" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    # return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)


@api_view(['POST'])
def viewFiduciaryData(request):
    form = Form.objects.get(id=request.data['formId'])
    formSerializer = FormSerializers(form, many=False)
    
    form = formSerializer.data
    
    advisorName = UserAccount.objects.get(id=form.data['advisorId'])
    advisorNameSerializer = FormSerializers(advisorName, many=False)

    form['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"form": form},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateFiduciaryData(request):
    form = Fiduciary.objects.get(id=request.data['id'])
    serializer = FiduciarySerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"form": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)


# Create your views here.

# Investment Planning
@api_view(['POST'])
def insertInvestmentPlanningData(request):
    serializer = InvestmentPlanningSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = InvestmentPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        # old_form = InvestmentPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = InvestmentPlanningSerializers(old_form, many=False)
        data = serializer1.data
        # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
        if str(serializer1.data['advisorId']) == "None":
            serializer.create(serializer.validated_data)
            latest = InvestmentPlanning.objects.latest('id')
            serializer2 = InvestmentPlanningSerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"form" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "form" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewInvestmentPlanningData(request):
    form = Form.objects.get(id=request.data['formId'])
    formSerializer = FormSerializers(form, many=False)
    
    form = formSerializer.data
    
    advisorName = UserAccount.objects.get(id=form.data['advisorId'])
    advisorNameSerializer = FormSerializers(advisorName, many=False)

    form['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": form},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateInvestmentPlanningData(request):
    form = InvestmentPlanning.objects.get(id=request.data['id'])
    serializer = InvestmentPlanningSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"form": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

# Risk Planning
@api_view(['POST'])
def insertRiskPlanningData(request):
    serializer = RiskPlanningSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = RiskPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        # old_form = InvestmentPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = RiskPlanningSerializers(old_form, many=False)
        data = serializer1.data
        # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
        if str(serializer1.data['advisorId']) == "None":
            serializer.create(serializer.validated_data)
            latest = RiskPlanning.objects.latest('id')
            serializer2 = RiskPlanningSerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"form" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "form" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewRiskPlanningData(request):
    form = RiskPlanning.objects.get(id=request.data['formId'])
    formSerializer = RiskPlanningSerializers(form, many=False)
    
    form = formSerializer.data
    
    advisorName = RiskPlanning.objects.get(id=form.data['advisorId'])
    advisorNameSerializer = RiskPlanningSerializers(advisorName, many=False)

    form['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": form},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateRiskPlanningData(request):
    form = RiskPlanning.objects.get(id=request.data['formId'])
    serializer = RiskPlanningSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"form": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

# Assurance Investment
@api_view(['POST'])
def insertAssuranceInvestmentData(request):
    serializer = AssuranceInvestmentSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = AssuranceInvestment.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        # old_form = InvestmentPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = AssuranceInvestmentSerializers(old_form, many=False)
        data = serializer1.data
        # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
        if str(serializer1.data['advisorId']) == "None":
            serializer.create(serializer.validated_data)
            latest = AssuranceInvestment.objects.latest('id')
            serializer2 = AssuranceInvestmentSerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"form" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "form" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewAssuranceInvestmentData(request):
    form = AssuranceInvestment.objects.get(id=request.data['formId'])
    formSerializer = AssuranceInvestmentSerializers(form, many=False)
    
    form = formSerializer.data
    
    advisorName = AssuranceInvestment.objects.get(id=form.data['advisorId'])
    advisorNameSerializer = AssuranceInvestmentSerializers(advisorName, many=False)

    form['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": form},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateAssuranceInvestmentData(request):
    form = AssuranceInvestment.objects.get(id=request.data['id'])
    serializer = AssuranceInvestmentSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"form": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

# Assurance Risk
@api_view(['POST'])
def insertAssuranceRiskData(request):
    serializer = AssuranceRiskSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = AssuranceRisk.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        # old_form = RiskPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = AssuranceRiskSerializers(old_form, many=False)
        data = serializer1.data
        # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
        if str(serializer1.data['advisorId']) == "None":
            serializer.create(serializer.validated_data)
            latest = AssuranceRisk.objects.latest('id')
            serializer2 = AssuranceRiskSerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"form" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "form" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewAssuranceRiskData(request):
    form = AssuranceRisk.objects.get(id=request.data['formId'])
    formSerializer = AssuranceRiskSerializers(form, many=False)
    
    form = formSerializer.data
    
    advisorName = AssuranceRisk.objects.get(id=form.data['advisorId'])
    advisorNameSerializer = AssuranceRiskSerializers(advisorName, many=False)

    form['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": form},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateAssuranceRiskData(request):
    form = AssuranceRisk.objects.get(id=request.data['id'])
    serializer = AssuranceRiskSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"form": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)



# Employee Benefits
@api_view(['POST'])
def insertEmployeeBenefitsData(request):
    serializer = EmployeeBenefitsSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = EmployeeBenefits.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        # old_form = RiskPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = EmployeeBenefitsSerializers(old_form, many=False)
        data = serializer1.data
        # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
        if str(serializer1.data['advisorId']) == "None":
            serializer.create(serializer.validated_data)
            latest = EmployeeBenefits.objects.latest('id')
            serializer2 = EmployeeBenefitsSerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"form" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "form" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewEmployeeBenefitsData(request):
    form = EmployeeBenefits.objects.get(id=request.data['formId'])
    formSerializer = EmployeeBenefitsSerializers(form, many=False)
    
    form = formSerializer.data
    
    advisorName = EmployeeBenefits.objects.get(id=form.data['advisorId'])
    advisorNameSerializer = EmployeeBenefitsSerializers(advisorName, many=False)

    form['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": form},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateEmployeeBenefitsData(request):
    form = EmployeeBenefits.objects.get(id=request.data['id'])
    serializer = EmployeeBenefitsSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"form": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)



# Employee Benefits
@api_view(['POST'])
def insertGapCoverData(request):
    serializer = GapCoverSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = GapCover.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        # old_form = RiskPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = GapCoverSerializers(old_form, many=False)
        data = serializer1.data
        # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
        if str(serializer1.data['advisorId']) == "None":
            serializer.create(serializer.validated_data)
            latest = GapCover.objects.latest('id')
            serializer2 = GapCoverSerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"form" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "form" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewGapCoverData(request):
    form = GapCover.objects.get(id=request.data['formId'])
    formSerializer = GapCoverSerializers(form, many=False)
    
    form = formSerializer.data
    
    advisorName = GapCover.objects.get(id=form.data['advisorId'])
    advisorNameSerializer = GapCoverSerializers(advisorName, many=False)

    form['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": form},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateGapCoverData(request):
    form = GapCover.objects.get(id=request.data['id'])
    serializer = GapCoverSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"form": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)


# Short Term Insurance Personal
@api_view(['POST'])
def insertShortTermInsurancePersonalData(request):
    serializer = ShortTermInsurancePersonalSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = ShortTermInsurancePersonal.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        # old_form = RiskPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = ShortTermInsurancePersonalSerializers(old_form, many=False)
        data = serializer1.data
        # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
        if str(serializer1.data['advisorId']) == "None":
            serializer.create(serializer.validated_data)
            latest = ShortTermInsurancePersonal.objects.latest('id')
            serializer2 = ShortTermInsurancePersonalSerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"form" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "form" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewShortTermInsurancePersonalData(request):
    form = ShortTermInsurancePersonal.objects.get(id=request.data['formId'])
    formSerializer = ShortTermInsurancePersonalSerializers(form, many=False)
    
    form = formSerializer.data
    
    advisorName = ShortTermInsurancePersonal.objects.get(id=form.data['advisorId'])
    advisorNameSerializer = ShortTermInsurancePersonalSerializers(advisorName, many=False)

    form['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": form},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateShortTermInsurancePersonalData(request):
    form = ShortTermInsurancePersonal.objects.get(id=request.data['id'])
    serializer = ShortTermInsurancePersonalSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"form": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)



# Short Term Insurance Commerical
@api_view(['POST'])
def insertShortTermInsuranceCommericalData(request):
    serializer = ShortTermInsuranceCommericalSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = ShortTermInsuranceCommerical.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        # old_form = RiskPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = ShortTermInsuranceCommericalSerializers(old_form, many=False)
        data = serializer1.data
        # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
        if str(serializer1.data['advisorId']) == "None":
            serializer.create(serializer.validated_data)
            latest = ShortTermInsuranceCommerical.objects.latest('id')
            serializer2 = ShortTermInsuranceCommericalSerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"form" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "form" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewShortTermInsuranceCommericalData(request):
    form = ShortTermInsuranceCommerical.objects.get(id=request.data['formId'])
    formSerializer = ShortTermInsuranceCommericalSerializers(form, many=False)
    
    form = formSerializer.data
    
    advisorName = ShortTermInsuranceCommerical.objects.get(id=form.data['advisorId'])
    advisorNameSerializer = ShortTermInsuranceCommericalSerializers(advisorName, many=False)

    form['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": form},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateShortTermInsuranceCommericalData(request):
    form = ShortTermInsuranceCommerical.objects.get(id=request.data['id'])
    serializer = ShortTermInsuranceCommericalSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"form": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)



# Risk Factors
@api_view(['POST'])
def insertRiskFactorsData(request):
    serializer = RiskFactorsSerializers(data=request.data, many=False)
    advisorName = UserAccount.objects.get(id=serializer.data['advisorId'])
    advisorNameSerializer = UserAccountsSerializers(advisorName, many=False)
    serializer['advisorName'] = advisorNameSerializer.data['is_superuser']
    print("hi")
    if serializer.is_valid():
        old_form = RiskFactors.objects.filter(advisorId = request.data['advisorId'],RF_ClientId = request.data['RF_ClientId']).first()
        serializer1 = RiskFactorsSerializers(old_form, many=False)
        # return Response({"data":serializer1.data, "length": len(serializer1.data['client_id'])})
        if len(serializer1.data['RF_ClientId']) == 0:
            serializer.create(serializer.validated_data)
            latest = RiskFactors.objects.latest('id')
            serializer2 = RiskFactorsSerializers(latest, many=False)
            advisorName = UserAccount.objects.get(id=serializer2.data['advisorId'])
            advisorNameSerializer = UserAccountsSerializers(advisorName, many=False)
            serializer2['advisorName'] = advisorNameSerializer.data['is_superuser']
            print(serializer2['advisorName'])
            return Response({"message": "Data is inserted","formId":serializer2.data['id'],"code":201,},201)
        else :
            return Response({'message': "Form Already Exists","code": "200", "formId" : serializer1.data['id']},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

# @api_view(['POST'])
# def insertRiskFactorsData(request):
#     serializer = RiskFactorsSerializers(data=request.data, many=False)
#     if serializer.is_valid():
#         old_form = RiskFactors.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
#         # old_form = RiskPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
#         serializer1 = RiskFactorsSerializers(old_form, many=False)
#         data = serializer1.data
#         # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
#         if str(serializer1.data['advisorId']) == "None":
#             serializer.create(serializer.validated_data)
#             latest = RiskFactors.objects.latest('id')
#             serializer2 = RiskFactorsSerializers(latest, many=False)
#             return Response({"message": "Data is inserted","id":serializer2.data['id'],"form" : serializer2.data,"code":201,},201)
#         else :
#             del data['status']
#             del data['created_at']
#             del data['updated_at']
#             return Response({'message': "Form Already Exists","code": "200", "form" : data},200)
#         #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
#     return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)


    

@api_view(['POST'])
def viewRiskFactorsData(request):
    form = RiskFactors.objects.get(id=request.data['formId'], advisorId=request.data['advisorId'])
    formSerializer = RiskFactorsSerializers(form, many=False)
    
    form = formSerializer.data
    
    advisorName = UserAccount.objects.get(id=form.data['advisorId'])
    advisorNameSerializer = RiskFactorsSerializers(advisorName, many=False)

    form['advisorName'] = advisorNameSerializer.data['is_superuser']
    print(form['advisorName'])
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"form": form},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateRiskFactorsData(request):
    form = RiskFactors.objects.get(id=request.data['id'])
    serializer = RiskFactorsSerializers(instance=form, data=request.data, partial=True)
    advisorName = UserAccount.objects.get(id=serializer.data['advisorId'])
    advisorNameSerializer = UserAccountsSerializers(advisorName, many=False)

    serializer['advisorName'] = advisorNameSerializer.data['is_superuser']
    print(serializer['advisorName'])
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"form": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)


