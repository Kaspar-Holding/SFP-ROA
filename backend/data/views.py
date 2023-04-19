from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.files.base import ContentFile
from .serializers import AI_ProductTakenSerializer, AR_ProductTakenSerializer, AssuranceInvestmentSerializers, AssuranceRiskSerializers, EB_CoverSerializer, EmployeeBenefitsSerializers, FiduciarySerializers, GapCoverSerializers, IP_ProductTakenSerializer, InvestmentPlanningSerializers, RF_LinkedPartySerializers, RP_ProductTakenSerializer, RiskFactorsSerializers, RiskPlanningSerializers, ShortTermInsuranceCommericalSerializers, ShortTermInsurancePersonalSerializers, UserAccountsSerializers, FormSerializers, MedicalSerializers
from .models import AI_ProductTaken, AR_ProductTaken, AssuranceInvestment, AssuranceRisk, EB_Cover, EmployeeBenefits, Fiduciary, GapCover, IP_ProductTaken, InvestmentPlanning, RF_LinkedParty, RP_ProductTaken, RiskFactors, RiskPlanning, ShortTermInsuranceCommerical, ShortTermInsurancePersonal, UserAccount, Form, Medical
from django.http import HttpResponse
from django.core.paginator import Paginator
from django.db.models import Q
import pandas as pd
import uuid
import numpy as np
import base64
from datetime import datetime
from dateutil import parser as datetimeparser
import numpy as np
from emailApp.views import approveDenyEmail, sendAlertEmail
from django.utils.http import urlsafe_base64_encode

from djoser import utils
@api_view(['GET'])
def sample(request):
    # forms = RiskFactors.objects.all().values("advisorId","RF_Overall_Risk","RF_BU_Risk","RF_Date","RF_ClientName","RF_ClientId","RF_CompleteByName","RF_CompleteByRole","RF_ClientType","RF_Occupation","RF_CountryOfBirth","RF_CountryOfResidence","RF_Nationality","RF_Different_Nationality","RF_CountryOfTax","RF_Industry","RF_SourceOfFunds","RF_RelationshipToClient","RF_CountryOfRegistration","RF_CountryOfOperation","RF_Type_Legal_Entity","RF_Client_Relationship","RF_Product_Name","RF_Transaction_Flow","RF_Transaction_Method","RF_Transaction_Reason","RF_High_Transaction_Reason","RF_Transaction_Frequency","RF_Transaction_Value","RF_Currency_Value","RF_Transaction_Geography","RF_Funds_Jurisdiction","RF_Delivery_Channel","RF_Linked_Party_Acting","RF_Linked_Party_Paying","RF_Client_Match","RF_Client_Beneficiaries","RF_Adjust_Risk1","RF_Name","RF_ID","RF_Linked_Party	RF_RCA","RF_Birth_Country","RF_Residence_Country","RF_Nationality1","RF_Control1","RF_Control2","RF_Control3","RF_Another_Control1","RF_Another_Control2")
    data = [{
        "RF_Overall_Risk": "",
        "RF_BU_Risk": "",
        "RF_Date": datetime.today().strftime('%Y-%m-%d'),
        "RF_ClientName": "",
        "RF_ClientId": "",
        "RF_CompleteByName": "",
        "RF_CompleteByRole": "",
        "RF_ClientType": "",
        "RF_Occupation": "",
        "RF_CountryOfBirth": "",
        "RF_CountryOfResidence": "",
        "RF_Nationality": "",
        "RF_Different_Nationality": "",
        "RF_CountryOfTax": "",
        "RF_Industry": "",
        "RF_SourceOfFunds": "",
        "RF_RelationshipToClient": "",
        "RF_CountryOfRegistration": "",
        "RF_CountryOfOperation": "",
        "RF_Type_Legal_Entity": "",
        "RF_Client_Relationship": "",
        "RF_Product_Name": "",
        "RF_Transaction_Flow": "",
        "RF_Transaction_Method": "",
        "RF_Transaction_Reason": "",
        "RF_High_Transaction_Reason": "",
        "RF_Transaction_Frequency": "",
        "RF_Transaction_Value": "",
        "RF_Currency_Value": "",
        "RF_Transaction_Geography": "",
        "RF_Funds_Jurisdiction": "",
        "RF_Delivery_Channel": "",
        "RF_Linked_Party_Acting": "",
        "RF_Linked_Party_Paying": "",
        "RF_Client_Match": "",
        "RF_Client_Beneficiaries": "",
        "RF_Adjust_Risk1": "",
        "RF_Name": "",
        "RF_ID": "",
        "RF_Linked_Party": "",
        "RF_RCA": "",
        "RF_Birth_Country": "",
        "RF_Residence_Country": "",
        "RF_Nationality1": "",
        "RF_Control1": "",
        "RF_Control2": "",
        "RF_Control3": "",
        "RF_Another_Control1": "",
        "RF_Another_Control2": ""
    }]
    df = pd.DataFrame(data=data)
    print(df)
    filename =  "Export Data - %s.csv" %(uuid.uuid4())
    df.to_csv("static/csv/%s" %(filename))
    return Response({"file":"static/csv/%s" %(filename)})

@api_view(['POST'])
def importCSV(request):
    # decrypted = base64.b64decode(request.data['costCsv']).decode('utf-8')
    RF_BU_Risk = ['low','medium','high']
    RF_ClientType = ['','Individual','Legal']
    RF_Occupation = ['','Minor/Scholar','Retired','Salaried Employee','Self Employed','Student','Unemployed']
    RF_Industry = ['','Administrative and support services','Adult Entertainment','Agriculture,forestry and fishing','Arts,Entertainment and Recreation','Broadcasting and Entertainment','Chemical engineering/manufacturing',
    'Community and social activities','Construction and civil engineering','Consumer goods:wholesale and retail','Education','Electricity,solar,water,gas','Entrepreneurship','Estate living and family trusts','Extractive services,mining and quarrying','Financial and insurance','Gambling','Government services,armed and state owned enterprise','Health care and medical','Information technology,communication and telecom','Legal practitioner','Manufacturing','Motor wholesale,retail trade and repair','Non profit organization','Non government organization(NGO)','other','PFMA schedule 1','PFMA schedule 2','PFMA schedule 3A','Professional sport','Real estate and property services','Shell Banking','Transport storage,courier and freight','Travel,tourism and accomodation','Virtual currencies']
    RF_CountryOfBirth =['','Afghanistan','Albania','Algeria','American Samoa','Andora','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armania','Aruba','Auckland Islands','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia','Botswana','Bouvet Islands','Brazil','British Indian Ocean Teritory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos','Colombia','Comoros','Congo Democratic','Congo Republic','Cook Islands','Costa Rica','Ivory Cost','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','EI Salvador','Equatorial Guinea','Eritrea','Estonia','eSwaitini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibralter','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Herd Island','Holy See','Honduras','Hongkong','Hungary','Iceland','India','Indonessia','Iran','Iraq','Ireland','Isle of man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Korea North','Korea South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronessia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Mynamar','Namabia','Nauru','Nepal','Netherlands','New Celedonia','Newzealand','Niger','Nigeria','Norfolk Island','Nothern Mariana Islands','Norway','Nuie','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcaim','Poland','Portugal','Puerto Rico','Qatar','Reunion','Roman','Russia','Rwanda','Saint Barthelemy','Saint Helena','Saint Kitts','Saint Lucia','Saint Martin','Saint Pierre','Saint Vincent','Samoa','Saint Marino','Sao Tome','Saudia Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Martin','Slovekia','Slovenia','Solomon Islands','Somalia','South Africa','South Georgia','South Sudan','SPain','Srilanka','Sudan','Suriname','Svalbard','Sweden','Switxerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tokelau','Tonga','Trinidad','Tunisia','Turkey','Turkmenistan','Turks','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States Minor','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Virgin Islands(British)','Virgin Islands(US)','Wallis and Fatuna','West Bank','Western Sahara','Yemen','Zambia','Zimbabwe']
    RF_Nationality =['','Afghanistan','Albania','Algeria','American Samoa','Andora','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armania','Aruba','Auckland Islands','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia','Botswana','Bouvet Islands','Brazil','British Indian Ocean Teritory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos','Colombia','Comoros','Congo Democratic','Congo Republic','Cook Islands','Costa Rica','Ivory Cost','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','EI Salvador','Equatorial Guinea','Eritrea','Estonia','eSwaitini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibralter','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Herd Island','Holy See','Honduras','Hongkong','Hungary','Iceland','India','Indonessia','Iran','Iraq','Ireland','Isle of man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Korea North','Korea South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronessia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Mynamar','Namabia','Nauru','Nepal','Netherlands','New Celedonia','Newzealand','Niger','Nigeria','Norfolk Island','Nothern Mariana Islands','Norway','Nuie','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcaim','Poland','Portugal','Puerto Rico','Qatar','Reunion','Roman','Russia','Rwanda','Saint Barthelemy','Saint Helena','Saint Kitts','Saint Lucia','Saint Martin','Saint Pierre','Saint Vincent','Samoa','Saint Marino','Sao Tome','Saudia Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Martin','Slovekia','Slovenia','Solomon Islands','Somalia','South African','South Georgia','South Sudan','SPain','Srilanka','Sudan','Suriname','Svalbard','Sweden','Switxerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tokelau','Tonga','Trinidad','Tunisia','Turkey','Turkmenistan','Turks','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States Minor','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Virgin Islands(British)','Virgin Islands(US)','Wallis and Fatuna','West Bank','Western Sahara','Yemen','Zambia','Zimbabwe']
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
    RF_Delivery_Channel = ['','Intermediaries(Advisors,tied agents)','Intermediaries(Brokers,consultants)</']
    RF_Linked_Party_Acting = ['','Not Applicable','No','Yes']
    RF_Linked_Party_Paying = ['','Not applicable','Paying funds','Received funds']
    RF_Client_Match = ['','Adverse Media','Enforcement,SIP,SIE','False Positive','False Positive-Unsure','False Positive-Unsure:Sanctions','No Alert','PEP-Domestic','PEP-Foreign','Sanction','Sanlam Do not Trnsact List','SOE']
    RF_Client_Beneficiaries = ['','Yes','No']
    RF_Adjust_Risk1 = ['','Low','Medium','High','Intolerable']
    RF_BU_Risk = ['','Low','Medium','High']
    RF_RCA = ['','Yes','No']
    csv_data = request.data['exportCSV']
    format, csvstr = csv_data.split(';base64,')
    ext = format.split('/')[-1]
    file_name = "'file." + ext
    csvData = ContentFile(base64.b64decode(csvstr), name=file_name) 
    df = pd.read_csv(csvData)
    df.fillna('', inplace=True)
    csvData = []
    for i in range(len(df)):
        csvData.append({
            "advisorId" : request.data['advisorId'],
            "RF_Overall_Risk" : str(df['RF_Overall_Risk'][i]) if df['RF_Overall_Risk'][i] else "",
            "RF_BU_Risk" : RF_BU_Risk.index(str(df['RF_BU_Risk'][i])) if df['RF_BU_Risk'][i] else "1",
            "RF_Date" : datetimeparser.parse(str(df['RF_Date'][i])).strftime('%Y-%m-%d') if df['RF_Date'][i] else datetime.today().strftime('%Y-%m-%d'),
            "RF_ClientName" : str(df['RF_ClientName'][i]) if df['RF_ClientName'][i] else "",
            "RF_ClientId" : str(df['RF_ClientId'][i]) if df['RF_ClientId'][i] else "",
            "RF_CompleteByName" : UserAccount.objects.filter(id=request.data['advisorId']).values('name').first()['name'],
            "RF_CompleteByRole" : str(df['RF_CompleteByRole'][i]) if df['RF_CompleteByRole'][i] else "",
            "RF_ClientType" : RF_ClientType.index(str(df['RF_ClientType'][i])) if df['RF_ClientType'][i] != '' else "1",
            "RF_Occupation" : RF_Occupation.index(str(df['RF_Occupation'][i])) if df['RF_Occupation'][i] != '' else "1",
            "RF_CountryOfBirth" : RF_CountryOfBirth.index(str(df['RF_CountryOfBirth'][i])) if df['RF_CountryOfBirth'][i] != '' else "1",
            "RF_CountryOfResidence" : RF_CountryOfBirth.index(str(df['RF_CountryOfResidence'][i])) if df['RF_CountryOfResidence'][i] != '' else "1",
            "RF_Nationality" : RF_Nationality.index(str(df['RF_Nationality'][i])) if df['RF_Nationality'][i] != '' else "1",
            "RF_Different_Nationality" : RF_Nationality.index(str(df['RF_Different_Nationality'][i])) if df['RF_Different_Nationality'][i] != '' else "1",
            "RF_CountryOfTax" : RF_CountryOfBirth.index(str(df['RF_CountryOfTax'][i])) if df['RF_CountryOfTax'][i] != '' else "1",
            "RF_Industry" : RF_Industry.index(str(df['RF_Industry'][i])) if df['RF_Industry'][i] != '' else "1",
            "RF_SourceOfFunds" : RF_SourceOfFunds.index(str(df['RF_SourceOfFunds'][i])) if df['RF_SourceOfFunds'][i] != '' else "",
            "RF_RelationshipToClient" : RF_RelationshipToClient.index(str(df['RF_RelationshipToClient'][i])) if df['RF_RelationshipToClient'][i] != '' else "1",
            "RF_CountryOfRegistration" : RF_CountryOfBirth.index(str(df['RF_CountryOfRegistration'][i])) if df['RF_CountryOfRegistration'][i] != '' else "206",
            "RF_CountryOfOperation" : RF_CountryOfBirth.index(str(df['RF_CountryOfOperation'][i])) if df['RF_CountryOfOperation'][i] != '' else "206",
            "RF_Type_Legal_Entity" : RF_Type_Legal_Entity.index(str(df['RF_Type_Legal_Entity'][i])) if df['RF_Type_Legal_Entity'][i] != '' else "",
            "RF_Client_Relationship" : RF_Client_Relationship.index(str(df['RF_Client_Relationship'][i])) if df['RF_Client_Relationship'][i] != '' else "1",
            "RF_Product_Name" : RF_Product_Name.index(str(df['RF_Product_Name'][i])) if df['RF_Product_Name'][i] != '' else "1",
            "RF_Transaction_Flow" : RF_Transaction_Flow.index(str(df['RF_Transaction_Flow'][i])) if df['RF_Transaction_Flow'][i] != '' else "1",
            "RF_Transaction_Method" : RF_Transaction_Method.index(str(df['RF_Transaction_Method'][i])) if df['RF_Transaction_Method'][i] != '' else "",
            "RF_Transaction_Reason" : RF_Transaction_Reason.index(str(df['RF_Transaction_Reason'][i])) if df['RF_Transaction_Reason'][i] != '' else "",
            "RF_High_Transaction_Reason" : RF_High_Transaction_Reason.index(str(df['RF_High_Transaction_Reason'][i])) if df['RF_High_Transaction_Reason'][i] != '' else "",
            "RF_Transaction_Frequency" : RF_Transaction_Frequency.index(str(df['RF_Transaction_Frequency'][i])) if df['RF_Transaction_Frequency'][i] != '' else "",
            "RF_Transaction_Value" : str(df['RF_Transaction_Value'][i]) if df['RF_Transaction_Value'][i] != '' else "",
            "RF_Currency_Value" : str(df['RF_Currency_Value'][i]) if df['RF_Currency_Value'][i] != '' else "",
            "RF_Transaction_Geography" : RF_Transaction_Geography.index(str(df['RF_Transaction_Geography'][i])) if df['RF_Transaction_Geography'][i] != '' else "",
            "RF_Funds_Jurisdiction" : RF_CountryOfBirth.index(str(df['RF_Funds_Jurisdiction'][i])) if df['RF_Funds_Jurisdiction'][i] != '' else "",
            "RF_Delivery_Channel" : RF_Delivery_Channel.index(str(df['RF_Delivery_Channel'][i])) if df['RF_Delivery_Channel'][i] != '' else "",
            "RF_Linked_Party_Acting" : RF_Linked_Party_Acting.index(str(df['RF_Linked_Party_Acting'][i])) if df['RF_Linked_Party_Acting'][i] != '' else "1",
            "RF_Linked_Party_Paying" : RF_Linked_Party_Paying.index(str(df['RF_Linked_Party_Paying'][i])) if df['RF_Linked_Party_Paying'][i] != '' else "",
            "RF_Client_Match" : RF_Client_Match.index(str(df['RF_Client_Match'][i])) if df['RF_Client_Match'][i] != '' or df['RF_Client_Match'][i] != 'nan' else "",
            "RF_Client_Beneficiaries" : RF_Client_Beneficiaries.index(str(df['RF_Client_Beneficiaries'][i])) if df['RF_Client_Beneficiaries'][i] != '' else "",
            "RF_Adjust_Risk1" : RF_Adjust_Risk1.index(str(df['RF_Adjust_Risk1'][i])) if df['RF_Adjust_Risk1'][i] != '' else "",
            "RF_Name" : str(df['RF_Name'][i]) if df['RF_Name'][i] != '' else "",
            "RF_ID" : str(df['RF_ID'][i]) if df['RF_ID'][i] != '' else "",
            "RF_Linked_Party" : RF_Client_Match.index(str(df['RF_Linked_Party'][i])) if df['RF_Linked_Party'][i] != '' or df['RF_Linked_Party'][i] != 'nan' else "",
            "RF_RCA" : RF_RCA.index(str(df['RF_RCA'][i])) if df['RF_RCA'][i] != '' else "",
            "RF_Birth_Country" : str(df['RF_Birth_Country'][i]) if df['RF_Birth_Country'][i] != '' else "",
            "RF_Residence_Country" : str(df['RF_Residence_Country'][i]) if df['RF_Residence_Country'][i] != '' else "",
            "RF_Nationality1" : str(df['RF_Nationality1'][i]) if df['RF_Nationality1'][i] != '' else "",
            "RF_Control1" : str(df['RF_Control1'][i]) if df['RF_Control1'][i] != '' else "",
            "RF_Control2" : str(df['RF_Control2'][i]) if df['RF_Control2'][i] != '' else "",
            "RF_Control3" : str(df['RF_Control3'][i]) if df['RF_Control3'][i] != '' else "",
            "RF_Another_Control1" : str(df['RF_Another_Control1'][i]) if df['RF_Another_Control1'][i] != '' else "",
            "RF_Another_Control2" : str(df['RF_Another_Control2'][i]) if df['RF_Another_Control2'][i] != '' else "" ,
        })
    # print(csvData)
    data = {"advisorId":1,"RF_Overall_Risk":"","RF_BU_Risk":"2","RF_Date":"2023-02-22","RF_ClientName":"","RF_ClientId":"","RF_CompleteByName":"Armughan","RF_EventID":"","RF_CompleteByRole":"","RF_AdjustedRisk":"","RF_GCO_Risk":"","RF_Approvals":"","RF_ClientType":"1","RF_Occupation":"1","RF_CountryOfBirth":"0","RF_CountryOfResidence":"0","RF_Nationality":"0","RF_Different_Nationality":"0","RF_CountryOfTax":"0","RF_Industry":"0","RF_SourceOfFunds":"0","RF_RelationshipToClient":"0","RF_CountryOfRegistration":"0","RF_CountryOfOperation":"0","RF_Type_Legal_Entity":"0","RF_Client_Relationship":"0","RF_Product_Name":"7","RF_Transaction_Flow":"0","RF_Transaction_Method":"0","RF_Transaction_Reason":"0","RF_High_Transaction_Reason":"0","RF_Transaction_Frequency":"0","RF_Transaction_Value":"0","RF_Currency_Value":"0","RF_Transaction_Geography":"0","RF_Funds_Jurisdiction":"0","RF_Delivery_Channel":"0","RF_Linked_Party_Acting":"0","RF_Linked_Party_Paying":"0","RF_Client_Match":"0","RF_Client_Beneficiaries":"0","RF_Adjust_Risk1":"2","RF_Name":"","RF_ID":"","RF_Linked_Party":"0","RF_RCA":"0","RF_Birth_Country":"0","RF_Residence_Country":"0","RF_Nationality1":"0","RF_Control1":"","RF_Control2":"","RF_Control3":"","RF_Another_Control1":"0","RF_Another_Control2":"0"}
    low = 0
    medium = 0
    high = 0
    undertermined = 0
    intolerable = 0
    for row in csvData:
        if int(row['RF_Client_Match']) == 1 or int(row['RF_Client_Match']) == 4 or int(row['RF_Client_Match']) == 7:
            medium += 1
        elif int(row['RF_Client_Match']) == 2 or int(row['RF_Client_Match']) == 5 or int(row['RF_Client_Match']) == 8 or int(row['RF_Client_Match']) == 11:
            high += 1
        elif int(row['RF_Client_Match']) == 3 or int(row['RF_Client_Match']) == 6:
            low += 1
        elif int(row['RF_Client_Match']) == 9 or int(row['RF_Client_Match']) == 10:
            intolerable += 1
        else:
            undertermined += 1
        # print(row)
        # importCSV = RiskFactors.objects.filter(RF_ClientId=csvData[i]['RF_ClientId']).values()
        # importCSV = RiskFactors.objects.filter(RF_ClientId=csvData[i]['RF_ClientId'])
        old_form = RiskFactors.objects.filter(advisorId = row['advisorId'],RF_ClientId = row['RF_ClientId']).first()
        serializer = RiskFactorsSerializers(instance=old_form, data=row, partial=True)
        if serializer.is_valid():
            print(not RiskFactors.objects.filter(advisorId = row['advisorId'],RF_ClientId = row['RF_ClientId']).exists())
            if not RiskFactors.objects.filter(advisorId = row['advisorId'],RF_ClientId = row['RF_ClientId']).exists():                
                serializer = RiskFactorsSerializers(data=row, many=False)
                if serializer.is_valid():
                    serializer.create(serializer.validated_data)
            else:
                if serializer.is_valid():
                    serializer.save()
                else:
                    print({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)
        else:
            print({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)
    importResult = [
                        ['Undertermined',undertermined],
                        ['Low',low],['Medium', medium],
                        ['High', high],
                        ['Intolerable', intolerable]
                    ]
    importResultResponse = {
                        'Undertermined':undertermined,
                        'Low':low,
                        'Medium': medium,
                        'High': high,
                        'Intolerable': intolerable
                    }
    result_df = pd.DataFrame(columns=[['Risk Weight','Count']], data=importResult)
    filename =  "Import Result - %s.csv" %(uuid.uuid4())
    result_df.to_csv("static/csv/%s" %(filename))
    # serializer = importCSVSerializer(data=csvData,many=True, partial=True)
    # if serializer.is_valid():
    #     serializer.update()
    # print(df.head())
    return Response({"message": "Updated","code":200,"importResult": importResultResponse,"file":"static/csv/%s" %(filename)},200)
    # return Response({"data":csvData})
@api_view(['POST'])

def getData(request):
    limit = 10
    orderBy = request.data['order_by']
    searchQuery = request.data['search_query']
    if searchQuery != "":
        users = UserAccount.objects.filter(Q(name__icontains=searchQuery) | Q(email__icontains=searchQuery)).order_by('id').values('id','email','first_name', 'last_name','is_superuser','is_active')
    else:
        users = UserAccount.objects.values('id','email','first_name', 'last_name','is_superuser','is_active').order_by('id')

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
        old_form = Form.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        serializer1 = FormSerializers(old_form, many=False)
        # return Response({"data":serializer1.data, "length": len(serializer1.data['client_id'])})
        if len(serializer1.data['clientIdNumber']) == 0:
            serializer.create(serializer.validated_data)
            latest = Form.objects.latest('id')
            serializer2 = FormSerializers(latest, many=False)
            return Response({"message": "Data is inserted","formId":serializer2.data['id'],"formData":serializer2.data,"code":201,},201)
        else :
            return Response({'message': "Form Already Exists","code": "200", "formData" : serializer1.data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def viewFormData(request):
    message = {}
    code = 404
    try:
        form = Form.objects.get(id=request.data['formId'])
        formSerializer = FormSerializers(form, many=False)
        
        formData = formSerializer.data
        advisorName = UserAccount.objects.get(id=formSerializer.data['advisorId'])
        advisorNameSerializer = UserAccountsSerializers(advisorName, many=False)

        formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
        message = {"message": "Found","code":200,"formData": formData}
        code = 200
    except:
        message = {"message": "Error 404, Not found","code":404}
        code = 404
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
    advisor_admin = UserAccount.objects.filter(id=request.data['advisorId']).values('is_superuser').first()
    complete_forms = RiskFactors.objects.filter(advisorId = request.data['advisorId'],status = 1)
    complete_serializer = RiskFactorsSerializers(complete_forms, many=True)
    incomplete_forms = RiskFactors.objects.filter(advisorId = request.data['advisorId'],status = 0)
    incomplete_serializer = RiskFactorsSerializers(incomplete_forms, many=True)
    blocked_forms = RiskFactors.objects.filter(advisorId = request.data['advisorId'],status = 3)
    blocked_serializer = RiskFactorsSerializers(blocked_forms, many=True)
    yet_to_approved_forms = RiskFactors.objects.filter(advisorId = request.data['advisorId'],status = 2)
    yet_to_approved_serializer = RiskFactorsSerializers(yet_to_approved_forms, many=True)
    searchQuery = request.data['search_query']
    # if advisor_admin['is_superuser']:
    #     riskFactors = RiskFactors.objects.all()
    # else:
    riskFactors = RiskFactors.objects.filter(advisorId = request.data['advisorId'])
    forms_data = []
    if searchQuery != "":
        forms_data = riskFactors.filter(Q(RF_ClientName__icontains=searchQuery) | Q(RF_ClientId__icontains=searchQuery)).order_by('RF_ClientName').values("id","advisorId","RF_ClientName","RF_ClientId","RF_Client_Match","status")
    else:
        forms_data = riskFactors.order_by('RF_ClientName').values("id","advisorId","RF_ClientName","RF_ClientId","RF_Client_Match","status")
    orderBy = request.data['order_by']
    p = Paginator(forms_data, 10)
    data = p.page(request.data['page_number']).object_list
    for row in data:
        if row['status'] == 2:
            userId = urlsafe_base64_encode(str(request.data['advisorId']).encode('utf-8'))
            formIdEncoded = urlsafe_base64_encode(str(row['id']).encode('utf-8'))
            row['url'] = "/alertForm?userId=" + userId + "&formId=" + formIdEncoded
        else:
            row['url'] = ""
    if request.data['page_number'] <= p.num_pages:
            
        return Response(
            {
                "completed_forms": len(complete_serializer.data),
                "incompleted_forms": len(incomplete_serializer.data),
                "yet_to_approved_forms": len(yet_to_approved_serializer.data),
                "blocked_forms": len(blocked_serializer.data),
                "total_pages" : p.num_pages,
                "has_pages" : p.num_pages,
                "total_records" : len(forms_data),
                "pagelimit" : 10,
                "next" : p.page(request.data['page_number']).has_next(),
                "results" : data
            }
        )
    else:
        return Response(
            {
                "completed_forms": len(complete_serializer.data),
                "incompleted_forms": len(incomplete_serializer.data),
                "yet_to_approved_forms": len(yet_to_approved_serializer.data),
                "blocked_forms": len(blocked_serializer.data),
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

@api_view(['POST'])
def adminformStats(request):
    complete_forms = RiskFactors.objects.filter(status = 1)
    complete_serializer = RiskFactorsSerializers(complete_forms, many=True)
    incomplete_forms = RiskFactors.objects.filter(status = 0)
    incomplete_serializer = RiskFactorsSerializers(incomplete_forms, many=True)
    blocked_forms = RiskFactors.objects.filter(status = 3)
    blocked_serializer = RiskFactorsSerializers(blocked_forms, many=True)
    yet_to_approved_forms = RiskFactors.objects.filter(status = 2)
    yet_to_approved_serializer = RiskFactorsSerializers(yet_to_approved_forms, many=True)
    searchQuery = request.data['search_query']
    riskFactors = RiskFactors.objects.all()
    forms_data = []
    if searchQuery != "":
        forms_data = riskFactors.filter(Q(RF_ClientName__icontains=searchQuery) | Q(RF_ClientId__icontains=searchQuery)).order_by('RF_ClientName').values("id","advisorId","RF_ClientName","RF_ClientId","RF_Client_Match","status")
    else:
        forms_data = riskFactors.order_by('RF_ClientName').values("id","advisorId","RF_ClientName","RF_ClientId","RF_Client_Match","status")
    orderBy = request.data['order_by']
    p = Paginator(forms_data, 10)
    data = p.page(request.data['page_number']).object_list
    for row in data:
        advisorData = UserAccount.objects.filter(id=row['advisorId']).values('first_name', 'last_name').first()
        row['advisorName'] = advisorData['first_name'] + " " + advisorData['last_name']
        if row['status'] == 2:
            userId = urlsafe_base64_encode(str(request.data['advisorId']).encode('utf-8'))
            formIdEncoded = urlsafe_base64_encode(str(row['id']).encode('utf-8'))
            row['url'] = "/alertForm?userId=" + userId + "&formId=" + formIdEncoded
        else:
            row['url'] = ""
    if request.data['page_number'] <= p.num_pages:
            
        return Response(
            {
                "completed_forms": len(complete_serializer.data),
                "incompleted_forms": len(incomplete_serializer.data),
                "yet_to_approved_forms": len(yet_to_approved_serializer.data),
                "blocked_forms": len(blocked_serializer.data),
                "total_pages" : p.num_pages,
                "has_pages" : p.num_pages,
                "total_records" : len(forms_data),
                "pagelimit" : 10,
                "next" : p.page(request.data['page_number']).has_next(),
                "results" : data
            }
        )
    else:
        return Response(
            {
                "completed_forms": len(complete_serializer.data),
                "incompleted_forms": len(incomplete_serializer.data),
                "yet_to_approved_forms": len(yet_to_approved_serializer.data),
                "blocked_forms": len(blocked_serializer.data),
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
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    # return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)


@api_view(['POST'])
def viewFiduciaryData(request):
    form = Form.objects.get(id=request.data['formId'])
    formSerializer = FormSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = UserAccount.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = FormSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"formData": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateFiduciaryData(request):
    form = Fiduciary.objects.get(id=request.data['id'])
    serializer = FiduciarySerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
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
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            ProductsTaken = IP_ProductTaken.objects.filter(formId=request.data['formId']).values()

            return Response({'message': "Form Already Exists","code": "200", "formData" : data, "ProductTaken" : ProductsTaken},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewInvestmentPlanningData(request):
    form = Form.objects.get(id=request.data['formId'])
    formSerializer = FormSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = UserAccount.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = FormSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
    
    ProductsTaken = IP_ProductTaken.objects.filter(formId=request.data['formId']).values()
    if len(ProductsTaken) == 1:
        ProductsTaken = [ProductsTaken]
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateInvestmentPlanningData(request):
    form = InvestmentPlanning.objects.get(id=request.data['id'])
    serializer = InvestmentPlanningSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
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
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            ProductsTaken = RP_ProductTaken.objects.filter(formId=request.data['formId']).values()

            return Response({'message': "Form Already Exists","code": "200", "formData" : data, "ProductTaken" : ProductsTaken},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewRiskPlanningData(request):
    form = RiskPlanning.objects.get(id=request.data['formId'])
    formSerializer = RiskPlanningSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = RiskPlanning.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = RiskPlanningSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']

    ProductsTaken = RP_ProductTaken.objects.filter(formId=request.data['formId']).values()
    if len(ProductsTaken) == 1:
        ProductsTaken = [ProductsTaken]
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": formData, "ProductTaken" : ProductsTaken},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateRiskPlanningData(request):
    form = RiskPlanning.objects.get(id=request.data['id'])
    serializer = RiskPlanningSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
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
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            ProductsTaken = AI_ProductTaken.objects.filter(formId=request.data['formId']).values()

            return Response({'message': "Form Already Exists","code": "200", "formData" : data, "ProductTaken" : ProductsTaken},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewAssuranceInvestmentData(request):
    form = AssuranceInvestment.objects.get(id=request.data['formId'])
    formSerializer = AssuranceInvestmentSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = AssuranceInvestment.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = AssuranceInvestmentSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateAssuranceInvestmentData(request):
    form = AssuranceInvestment.objects.get(id=request.data['id'])
    serializer = AssuranceInvestmentSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
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
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            ProductsTaken = AR_ProductTaken.objects.filter(formId=request.data['formId']).values()
            
            return Response({'message': "Form Already Exists","code": "200", "formData" : data, "ProductTaken" : ProductsTaken},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewAssuranceRiskData(request):
    form = AssuranceRisk.objects.get(id=request.data['formId'])
    formSerializer = AssuranceRiskSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = AssuranceRisk.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = AssuranceRiskSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateAssuranceRiskData(request):
    form = AssuranceRisk.objects.get(id=request.data['id'])
    serializer = AssuranceRiskSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
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
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            CoverData = EB_Cover.objects.filter(formId=request.data['formId']).values()

            return Response({'message': "Form Already Exists","code": "200", "formData" : data, "CoverData" : CoverData},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewEmployeeBenefitsData(request):
    form = EmployeeBenefits.objects.get(id=request.data['formId'])
    formSerializer = EmployeeBenefitsSerializers(form, many=False)
    
    formData = formSerializer.data
    
    # advisorName = EmployeeBenefits.objects.get(id=formData.data['advisorId'])
    # advisorNameSerializer = EmployeeBenefitsSerializers(advisorName, many=False)

    # formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
    CoverData = EB_Cover.objects.filter(formId=request.data['formId']).values()

    return Response({'message': "Form Already Exists","code": "200", "formData" : formData, "CoverData" : CoverData},200)
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateEmployeeBenefitsData(request):
    form = EmployeeBenefits.objects.get(id=request.data['id'])
    serializer = EmployeeBenefitsSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
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
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewGapCoverData(request):
    form = GapCover.objects.get(id=request.data['formId'])
    formSerializer = GapCoverSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = GapCover.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = GapCoverSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateGapCoverData(request):
    form = GapCover.objects.get(id=request.data['id'])
    serializer = GapCoverSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
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
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewShortTermInsurancePersonalData(request):
    form = ShortTermInsurancePersonal.objects.get(id=request.data['formId'])
    formSerializer = ShortTermInsurancePersonalSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = ShortTermInsurancePersonal.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = ShortTermInsurancePersonalSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateShortTermInsurancePersonalData(request):
    form = ShortTermInsurancePersonal.objects.get(id=request.data['id'])
    serializer = ShortTermInsurancePersonalSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)


# Short Term Insurance Personal
@api_view(['POST'])
def insertMedicalData(request):
    serializer = MedicalSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = Medical.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId']).first()
        # old_form = RiskPlanning.objects.filter(advisorId = request.data['advisorId'],formId = request.data['formId'],clientIdNumber = request.data['clientIdNumber']).first()
        serializer1 = MedicalSerializers(old_form, many=False)
        data = serializer1.data
        # return Response({"data":serializer1.data, "length": str(serializer1.data['advisorId'])})
        if str(serializer1.data['advisorId']) == "None":
            serializer.create(serializer.validated_data)
            latest = Medical.objects.latest('id')
            serializer2 = MedicalSerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewMedicalData(request):
    form = Medical.objects.get(id=request.data['formId'])
    formSerializer = MedicalSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = Medical.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = MedicalSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateMedicalData(request):
    form = Medical.objects.get(id=request.data['id'])
    serializer = MedicalSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
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
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
        else :
            del data['status']
            del data['created_at']
            del data['updated_at']
            return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewShortTermInsuranceCommericalData(request):
    form = ShortTermInsuranceCommerical.objects.get(id=request.data['formId'])
    formSerializer = ShortTermInsuranceCommericalSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = ShortTermInsuranceCommerical.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = ShortTermInsuranceCommericalSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateShortTermInsuranceCommericalData(request):
    form = ShortTermInsuranceCommerical.objects.get(id=request.data['id'])
    serializer = ShortTermInsuranceCommericalSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)



# Risk Factors
@api_view(['POST'])
def insertRiskFactorsData(request):
    rf_data = request.data['RF_Data']
    status = 1
    advisor_admin = UserAccount.objects.filter(id=request.data['RF_Data']['advisorId']).values('is_superuser').first()['is_superuser']
    if not advisor_admin:
        if int(request.data['RF_Data']['RF_Client_Match']) == 2 or int(request.data['RF_Data']['RF_Client_Match']) == 5 or int(request.data['RF_Data']['RF_Client_Match']) == 8 or int(request.data['RF_Data']['RF_Client_Match']) == 11 :
            rf_data['status'] = 2
            status = 2
    serializer = RiskFactorsSerializers(data=rf_data, many=False)
    if serializer.is_valid():
        old_form = RiskFactors.objects.filter(advisorId = rf_data['advisorId'],RF_ClientId = rf_data['RF_ClientId']).first()
        serializer1 = RiskFactorsSerializers(old_form, many=False)
        # return Response({"data":serializer1.data, "length": len(serializer1.data['client_id'])})
        if len(serializer1.data['RF_ClientId']) == 0:
            saved_data = serializer.create(serializer.validated_data)
            formId = saved_data.pk
            lp_data = request.data['LP_Data']
            for row in lp_data:
                row['formId'] = formId
            lp_serializer = RF_LinkedPartySerializers(data=lp_data, many=True)
            if lp_serializer.is_valid():
                lp_serializer.create(lp_serializer.validated_data)
            if not advisor_admin and status == 2:
                sendAlertEmail(request=request, formId=formId, advisorId=request.data['RF_Data']['advisorId'])
                return Response({"message": "Data is inserted","formId":formId,"code":200,},200)
            return Response({"message": "Data is inserted","formId":formId,"code":201,},201)
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
#             return Response({"message": "Data is inserted","id":serializer2.data['id'],"formData" : serializer2.data,"code":201,},201)
#         else :
#             del data['status']
#             del data['created_at']
#             del data['updated_at']
#             return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
#         #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
#     return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)


    

@api_view(['POST'])
def viewRiskFactorsData(request):
    advisorAccessLevel = UserAccount.objects.filter(id=request.data['advisorId']).values('is_superuser').first()['is_superuser']
    if (advisorAccessLevel):
        form = RiskFactors.objects.get(id=request.data['formId'], advisorId=request.data['advisorId'])
    else:
        form = RiskFactors.objects.get(id=request.data['formId'])
    formSerializer = RiskFactorsSerializers(form, many=False)
    
    formData = formSerializer.data
    lp_data = RF_LinkedParty.objects.filter(formId=request.data['formId']).values()
    # lp_data_serializer = RF_LinkedPartySerializers(lp_data, many = True)
    # lp_data = lp_data_serializer.data
    # advisorName = RiskFactors.objects.get(id=formData.data['advisorId'])
    # advisorNameSerializer = RiskFactorsSerializers(advisorName, many=False)

    # formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"formData": formData, 'LP_Data': lp_data},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def viewHighRiskFactorsData(request):
    adminId = utils.decode_uid(request.data['userId'])
    formId = utils.decode_uid(request.data['formId'])
    if int(adminId) == int(request.data['advisorId']):
        if RiskFactors.objects.filter(id=formId, status=2).exists():
            form = RiskFactors.objects.get(id=formId, status=2)
            formSerializer = RiskFactorsSerializers(form, many=False)
            
            formData = formSerializer.data
            if len(formData) > 0:
                lp_data = RF_LinkedParty.objects.filter(formId=formId).values()
                # lp_data_serializer = RF_LinkedPartySerializers(lp_data, many = True)
                # lp_data = lp_data_serializer.data
                # advisorName = RiskFactors.objects.get(id=formData.data['advisorId'])
                # advisorNameSerializer = RiskFactorsSerializers(advisorName, many=False)

                # formData['advisorName'] = advisorNameSerializer.data['first_name'] + " " + advisorNameSerializer.data['last_name']
                # if serializer.is_valid():
                return Response({"message": "Found","code":200,"formData": formData, 'LP_Data': lp_data},200)
            else:
                return Response({"message": "Form does not exist","code":404},404)
        else:
            return Response({"message": "Form does not exist","code":404},404)
    else:
        return Response({"message": "You don't have the access to view this form","code":404},404)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def approveDenyFormData(request):
    formId = utils.decode_uid(request.data['formId'])
    form = RiskFactors.objects.filter(id=formId).first()
    serializer = RiskFactorsSerializers(instance=form, data={'status': request.data['formStatus']}, partial=True)
    if serializer.is_valid():
        serializer.save()
        formData = RiskFactors.objects.filter(id=formId).values().first()
        userId = RiskFactors.objects.filter(id=formId).values('advisorId').first()
        userData = UserAccount.objects.filter(id=userId['advisorId']).values().first()
        status = ""
        if request.data['formStatus'] == 0:
            status = "Approved"
        if request.data['formStatus'] == 2:
            status = "Denied"

        approveDenyEmail(request=request, adminId=utils.decode_uid(request.data['adminId']), user=userData, formData=formData, status=status)
        return Response({"message": "Found","code":200,"Data": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateRiskFactorsData(request):
    form = RiskFactors.objects.get(id=request.data['id'])
    serializer = RiskFactorsSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)


@api_view(['POST'])
def updateLinkedPartyData(request):
    lp_data = request.data['lp_data']
    RF_LinkedParty.objects.filter(formId=request.data['formId']).delete()
    lp_serializer = RF_LinkedPartySerializers(data=lp_data, many=True)
    if lp_serializer.is_valid():
        lp_serializer.create(lp_serializer.validated_data)
    # for row in lp_data:
    #     if RF_LinkedParty.objects.filter(formId=row['formId'], RF_LP_ID=row['RF_LP_ID']).exists():
    #         form = RF_LinkedParty.objects.get(formId=row['formId'], RF_LP_ID=row['RF_LP_ID'])
    #         serializer = RF_LinkedPartySerializers(instance=form, data=row, partial=True)
    #         if serializer.is_valid():
    #             serializer.save()
    #     else:
    return Response({"message": "Updated","code":200,"LP_Data": lp_data},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def update_rp_ProductTaken_Data(request):
    product_taken_data = request.data['rp_data']
    # print(product_taken_data)
    RP_ProductTaken.objects.filter(formId=request.data['formId']).delete()
    rp_product_taken_serializer = RP_ProductTakenSerializer(data=product_taken_data, many=True)
    if rp_product_taken_serializer.is_valid():
        rp_product_taken_serializer.create(rp_product_taken_serializer.validated_data)
    # for row in product_taken_data:
    #     if RP_ProductTaken.objects.filter(formId=row['formId'], Policy_Number=row['Policy_Number']).exists():
    #         # print(row)
    #         form = RP_ProductTaken.objects.get(formId=row['formId'], Policy_Number=row['Policy_Number'])
    #         serializer = RP_ProductTakenSerializer(instance=form, data=row, partial=True)
    #         if serializer.is_valid():
    #             serializer.save()
    #     else:
    return Response({"message": "Updated","code":200,"formData": product_taken_data},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)



@api_view(['POST'])
def update_ip_ProductTaken_Data(request):
    product_taken_data = request.data['ip_data']
    # print(product_taken_data)
    IP_ProductTaken.objects.filter(formId=request.data['formId']).delete()
    ip_product_taken_serializer = IP_ProductTakenSerializer(data=product_taken_data, many=True)
    if ip_product_taken_serializer.is_valid():
        ip_product_taken_serializer.create(ip_product_taken_serializer.validated_data)
    # for row in product_taken_data:
    #     if IP_ProductTaken.objects.filter(formId=row['formId'], PolicyNumber=row['PolicyNumber']).exists():
    #         # print(row)
    #         form = IP_ProductTaken.objects.get(formId=row['formId'], PolicyNumber=row['PolicyNumber'])
    #         serializer = IP_ProductTakenSerializer(instance=form, data=row, partial=True)
    #         if serializer.is_valid():
    #             serializer.save()
    #     else:
    return Response({"message": "Updated","code":200,"formData": product_taken_data},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def update_ar_ProductTaken_Data(request):
    product_taken_data = request.data['ar_data']
    # print(product_taken_data)
    AR_ProductTaken.objects.filter(formId=request.data['formId']).delete()
    AR_product_taken_serializer = AR_ProductTakenSerializer(data=product_taken_data, many=True)
    if AR_product_taken_serializer.is_valid():
        AR_product_taken_serializer.create(AR_product_taken_serializer.validated_data)
    # for row in product_taken_data:
    #     if AR_ProductTaken.objects.filter(formId=row['formId'], PolicyNumber=row['PolicyNumber']).exists():
    #         # print(row)
    #         form = AR_ProductTaken.objects.get(formId=row['formId'], PolicyNumber=row['PolicyNumber'])
    #         serializer = AR_ProductTakenSerializer(instance=form, data=row, partial=True)
    #         if serializer.is_valid():
    #             serializer.save()
    #     else:
    return Response({"message": "Updated","code":200,"formData": product_taken_data},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def update_ai_ProductTaken_Data(request):
    product_taken_data = request.data['ai_data']
    # print(product_taken_data)
    AI_ProductTaken.objects.filter(formId=request.data['formId']).delete()
    AI_product_taken_serializer = AI_ProductTakenSerializer(data=product_taken_data , many=True)
    if AI_product_taken_serializer.is_valid():
        AI_product_taken_serializer.create(AI_product_taken_serializer.validated_data)
    # for row in product_taken_data:
    #     if AI_ProductTaken.objects.filter(formId=row['formId'], Pr_PolicyNumber=row['Pr_PolicyNumber']).exists():
    #         # print(row)
    #         form = AI_ProductTaken.objects.get(formId=row['formId'], Pr_PolicyNumber=row['Pr_PolicyNumber'])
    #         serializer = AI_ProductTakenSerializer(instance=form, data=row, partial=True)
    #         if serializer.is_valid():
    #             serializer.save()
    #     else:
    return Response({"message": "Updated","code":200,"formData": product_taken_data},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def update_eb_cover_Data(request):
    eb_cover_data = request.data['eb_data']
    # print(eb_cover_data)
    EB_Cover.objects.filter(formId=request.data['formId']).delete()
    eb_cover_serializer = EB_CoverSerializer(data=eb_cover_data, many=True)
    if eb_cover_serializer.is_valid():
        eb_cover_serializer.create(eb_cover_serializer.validated_data)
    # for row in eb_cover_data:
    #     if EB_Cover.objects.filter(formId=row['formId'], BusB_CoverType=row['BusB_CoverType']).exists():
    #         # print(row)
    #         form = EB_Cover.objects.get(formId=row['formId'], BusB_CoverType=row['BusB_CoverType'])
    #         serializer = EB_CoverSerializer(instance=form, data=row, partial=True)
    #         if serializer.is_valid():
    #             serializer.save()
    #     else:
    return Response({"message": "Updated","code":200,"formData": eb_cover_data},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)


