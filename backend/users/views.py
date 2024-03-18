import secrets
import string
import uuid
from dateutil.parser import parser
from djoser import utils
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank
from django.core.paginator import Paginator
import json
from django.shortcuts import render
from rest_framework.response import Response
from django.http import StreamingHttpResponse
from rest_framework.decorators import api_view, APIView
from data.models import UserAccount, user_profile, regions, region_manager
from data.serializers import UserAccountsSerializers, regions_Serializer, user_profile_Serializer, region_manager_Serializer, UserCreateSerializer
from django.core.files.base import ContentFile
import re
import base64
import pandas as pd
from django.db.models import Q
from datetime import datetime
import pytz
from dateutil.relativedelta import relativedelta
from logs.models import Log, LogContent, LogKPIs
from logs.serializers import LogSerializer, LogContentSerializer, LogKPIsSerializer
# Create your views here.

@api_view(['GET'])
def getUserInfo(request):

    user = request.user
    userData = UserAccount.objects.filter(id=user.pk).values('id','email', 'first_name', 'last_name', 'is_superuser', 'userType').first()
    user_profile_data = user_profile.objects.filter(user=user.pk)
    userData['full_name'] = userData['first_name'] + " " + userData['last_name'] if userData['last_name'] != "nan" else userData['first_name']
    userData.pop('first_name')
    userData.pop('last_name')
    if user_profile_data.exists():
        user_profile_data = user_profile_data.values().first()
        userData['full_name'] = user_profile_data['Full_Name']
    return Response({"user" : userData}, 200)

@api_view(['GET'])
def getUserProfileInfo(request):

    user = request.user

    userData = UserAccount.objects.filter(id=user.pk).values('email', 'first_name', 'last_name').first()

    user_profile_data = user_profile.objects.filter(user=user.pk)
    if user_profile_data.exists():
        user_profile_data = user_profile_data.values().first()
        userData['full_name'] = user_profile_data['Full_Name']
        userData['contact_cell'] = user_profile_data['Contact_Cell']
        userData['qualification'] = ""
        if user_profile_data['Qualification_Name'] != "nan" or user_profile_data['Qualification_Name'] != "" :
            userData['qualification'] = user_profile_data['Qualification_Name']
        userData['address'] = ""
        if user_profile_data['Address_Postal_1'] != "nan" :
            userData['address'] += user_profile_data['Address_Postal_1'] + ", "
        else:
            userData['address'] += user_profile_data['Address_Physical_1'] + ", "
        if user_profile_data['Address_Postal_2'] != "nan" :
            userData['address'] += user_profile_data['Address_Postal_2'] + ", "
        else:
            userData['address'] += user_profile_data['Address_Physical_2'] + ", "
        if user_profile_data['Address_Postal_3'] != "nan" :
            userData['address'] += user_profile_data['Address_Postal_3'] + ", "
        else:
            userData['address'] += user_profile_data['Address_Physical_3'] + ", "
        if user_profile_data['Address_Postal_Postal_Code'] != "nan" :
            userData['address'] += f"{int(float(user_profile_data['Address_Postal_Postal_Code'])):04}" if user_profile_data['Address_Postal_Postal_Code'] != "" else ""
        else:
            userData['address'] += f"{int(float(user_profile_data['Address_Physical_Postal_Code'])):04}" if user_profile_data['Address_Physical_Postal_Code'] != "" else ""

        userData['LTI_SC_A'] = True if user_profile_data['Category1_1_Registration_Status'] == "Accredited" or user_profile_data['Category1_1_Registration_Status'] == "Under Supervision" else False
        userData['LTI_SC_A_Supervisor'] = True if user_profile_data['Category1_1_Supervisor'] != "nan" else False
        
        userData['Pension_funds'] = True if user_profile_data['Category1_7_Registration_Status'] == "Accredited" or user_profile_data['Category1_7_Registration_Status'] == "Under Supervision" else False
        userData['Pension_funds_Supervisor'] = True if user_profile_data['Category1_7_Supervisor'] != "nan" else False
        
        userData['RPension_funds'] = True if user_profile_data['Category1_5_Registration_Status'] == "Accredited" or user_profile_data['Category1_5_Registration_Status'] == "Under Supervision" else False
        userData['RPension_funds_Supervisor'] = True if user_profile_data['Category1_5_Supervisor'] != "nan" else False
        
        userData['LTI_SC_B1'] = True if user_profile_data['Category1_3_Registration_Status'] == "Accredited" or user_profile_data['Category1_3_Registration_Status'] == "Under Supervision" else False
        userData['LTI_SC_B1_Supervisor'] = True if user_profile_data['Category1_3_Supervisor'] != "nan" else False
        
        userData['LTI_SC_B1A'] = True if user_profile_data['Category1_22_Registration_Status'] == "Accredited" or user_profile_data['Category1_22_Registration_Status'] == "Under Supervision" else False
        userData['LTI_SC_B1A_Supervisor'] = True if user_profile_data['Category1_22_Supervisor'] != "nan" else False
        
        userData['LTI_SC_B2'] = True if user_profile_data['Category1_20_Registration_Status'] == "Accredited" or user_profile_data['Category1_20_Registration_Status'] == "Under Supervision" else False
        userData['LTI_SC_B2_Supervisor'] = True if user_profile_data['Category1_20_Supervisor'] != "nan" else False
        
        userData['LTI_SC_B2A'] = True if user_profile_data['Category1_21_Registration_Status'] == "Accredited" or user_profile_data['Category1_21_Registration_Status'] == "Under Supervision" else False
        userData['LTI_SC_B2A_Supervisor'] = True if user_profile_data['Category1_21_Supervisor'] != "nan" else False
        
        userData['LTI_SC_C'] = True if user_profile_data['Category1_4_Registration_Status'] == "Accredited" or user_profile_data['Category1_4_Registration_Status'] == "Under Supervision" else False
        userData['LTI_SC_C_Supervisor'] = True if user_profile_data['Category1_4_Supervisor'] != "nan" else False
        
        userData['LTI_Deposits'] = True if user_profile_data['Category1_17_Registration_Status'] == "Accredited" or user_profile_data['Category1_17_Registration_Status'] == "Under Supervision" else False
        userData['LTI_Deposits_Supervisor'] = True if user_profile_data['Category1_17_Supervisor'] != "nan" else False
        
        userData['STI_Deposits'] = True if user_profile_data['Category1_18_Registration_Status'] == "Accredited" or user_profile_data['Category1_18_Registration_Status'] == "Under Supervision" else False
        userData['STI_Deposits_Supervisor'] = True if user_profile_data['Category1_18_Supervisor'] != "nan" else False
        
        userData['STI_PL'] = True if user_profile_data['Category1_2_Registration_Status'] == "Accredited" or user_profile_data['Category1_2_Registration_Status'] == "Under Supervision" else False
        userData['STI_PL_Supervisor'] = True if user_profile_data['Category1_2_Supervisor'] != "nan" else False
        
        userData['STI_PL_A'] = True if user_profile_data['Category1_23_Registration_Status'] == "Accredited" or user_profile_data['Category1_23_Registration_Status'] == "Under Supervision" else False
        userData['STI_PL_A_Supervisor'] = True if user_profile_data['Category1_23_Supervisor'] != "nan" else False
        
        userData['STI_CL'] = True if user_profile_data['Category1_6_Registration_Status'] == "Accredited" or user_profile_data['Category1_6_Registration_Status'] == "Under Supervision" else False
        userData['STI_CL_Supervisor'] = True if user_profile_data['Category1_6_Supervisor'] != "nan" else False
        
        userData['CIC'] = True if user_profile_data['Category1_14_Registration_Status'] == "Accredited" or user_profile_data['Category1_14_Registration_Status'] == "Under Supervision" else False
        userData['CIC_Supervisor'] = True if user_profile_data['Category1_14_Supervisor'] != "nan" else False
        
        userData['HSB'] = True if user_profile_data['Category1_16_Registration_Status'] == "Accredited" or user_profile_data['Category1_16_Registration_Status'] == "Under Supervision" else False
        userData['HSB_Supervisor'] = True if user_profile_data['Category1_16_Supervisor'] != "nan" else False
        
        userData['Shares'] = True if user_profile_data['Category1_8_Registration_Status'] == "Accredited" or user_profile_data['Category1_8_Registration_Status'] == "Under Supervision" else False
        userData['Shares_Supervisor'] = True if user_profile_data['Category1_8_Supervisor'] != "nan" else False
        
        userData['Bonds'] = True if user_profile_data['Category1_12_Registration_Status'] == "Accredited" or user_profile_data['Category1_12_Registration_Status'] == "Under Supervision" else False
        userData['Bonds_Supervisor'] = True if user_profile_data['Category1_12_Supervisor'] != "nan" else False
        
        userData['Money_market'] = True if user_profile_data['Category1_9_Registration_Status'] == "Accredited" or user_profile_data['Category1_9_Registration_Status'] == "Under Supervision" else False
        userData['Money_market_Supervisor'] = True if user_profile_data['Category1_9_Supervisor'] != "nan" else False
        
        userData['Debentures'] = True if user_profile_data['Category1_10_Registration_Status'] == "Accredited" or user_profile_data['Category1_10_Registration_Status'] == "Under Supervision" else False
        userData['Debentures_Supervisor'] = True if user_profile_data['Category1_10_Supervisor'] != "nan" else False
        
        userData['Warrants'] = True if user_profile_data['Category1_11_Registration_Status'] == "Accredited" or user_profile_data['Category1_11_Registration_Status'] == "Under Supervision" else False
        userData['Warrants_Supervisor'] = True if user_profile_data['Category1_11_Supervisor'] != "nan" else False
        # Get the current date and time in the 'Africa/Johannesburg' timezone
        now = datetime.now(pytz.timezone('Africa/Johannesburg'))
        # Get the appointment date from the user_profile_data dictionary
        userData['inservice'] = (user_profile_data['Appointment_Date'])
        appointment_date = (user_profile_data['Appointment_Date'])
        experience = now.year - appointment_date.year
        experience = experience if experience != 0 else 1
        dofa = user_profile_data['DOFA']
        industry_experience = now.year - dofa.year
        industry_experience = industry_experience if industry_experience != 0 else 1

        # Calculate the difference in years
        userData['experience'] = experience
        userData['industry_experience'] = industry_experience
        
    return Response({"profile" : userData}, 200)

class BulkUserUpdate(APIView):
    def post(self, request, format=None):
        if 'usersCsvFile' not in request.data:
            return Response({"message" : "No file found"}, 400)
        else:
            csv_data = request.data['usersCsvFile']
            format, csvstr = csv_data.split(';base64,')
            ext = format.split('/')[-1]
            file_name = "'usersCsvFile." + ext
            csvData = ContentFile(base64.b64decode(csvstr), name=file_name) 
            users_profile_df = pd.read_csv(csvData)
            
            # Remove columns starting with "Do not modify"
            columns = [col for col in users_profile_df.columns if not col.startswith("(Do Not Modify)")]
            field_names = []
            non_added = ["id", "user", "bac", "supervision", "categorisation", "region", "id_number", "initials", "full_name", "nick_name", "contact_number", "address_physical_1", "address_physical_2", "address_physical_3", "address_postal_code", ]
            for field in user_profile._meta.get_fields():
                if field.name not in non_added:
                    field_names.append(str(field.name))
            return Response({
                "usersCsvFile" : request.data['usersCsvFile'],
                "uploaded_file_columns" : columns,
                "field_names" : field_names
            })
            
ALPHABET = string.ascii_letters + string.digits
class BulkUserUpload(APIView):
    def post(self, request, format=None):
        def error401():
            res = {"message":"You can't perform this action"}
            yield f"data: {json.dumps(res)}\n\n" 
        
        def response(requestedData):
            yield "data: [START]\n\n" 
            if 'usersCsvFile' not in requestedData:
                yield "data: [ERROR] No file found\n\n"
            else:
                yield "data: [SUCCESS] File found\n\n"
                logData = {
                    "account" : request.user.pk,
                    "log_name" : f"Bulk User Upload {uuid.uuid4()}",
                    "log_type" : 1,
                    "status" : 0,
                }
                log_serializer = LogSerializer(data=logData)
                if log_serializer.is_valid():
                    log_serializer.save()
                    log_id = log_serializer.data['id']
                else:
                    print(log_serializer.errors)
                logKPIs = {
                    "account" : request.user.pk,
                    "log" : log_id,
                    "kpis" : {
                        "total": 0,"updated":0, "created": 0, "not_existing" : 0,
                    }
                }
                log_kpis_serializer = LogKPIsSerializer(data=logKPIs)
                if log_kpis_serializer.is_valid():
                    log_kpis_serializer.create(log_kpis_serializer.validated_data)
                else:
                    print(log_kpis_serializer.errors)
                csv_data = request.data['usersCsvFile']
                format, csvstr = csv_data.split(';base64,')
                ext = format.split('/')[-1]
                file_name = "'usersCsvFile." + ext
                csvData = ContentFile(base64.b64decode(csvstr), name=file_name) 
                users_profile_df = pd.read_csv(csvData)
                users_profile_df.fillna('', inplace=True)
                users_profile_df.columns = users_profile_df.columns.str.replace(' ', '_').str.replace('__', '_').str.replace('.', '_')
                total = 0
                updated = 0
                updated_users = []
                created = 0
                created_users = []
                not_existing = 0
                not_existing_users = []
                new_users = []
                for i in range(len(users_profile_df)):
                    user_profile_data = users_profile_df.iloc[i].to_dict()
                    full_name = user_profile_data['Full_Name']
                    # email = user_profile_data['Email'] if "/" not in user_profile_data['Email'] else str(user_profile_data['Email']).split("/")[0].strip()
                    # email = str(email).replace(',','.')
                    email = ""
                    logContent = {
                        "account" : request.user.pk,
                        "log" : log_id,
                        "log_type" : 1,
                        "log_description" : f"Updating User {full_name}.",
                    } 
                    log_content_serializer = LogContentSerializer(data=logContent)
                    if log_content_serializer.is_valid():
                        log_content_serializer.create(log_content_serializer.validated_data)
                    else:
                        print(log_content_serializer.errors)
                    user_profile_data = {k: v for k, v in user_profile_data.items() if v != ""}
                    # for k, v in user_profile_data.items():
                    #     if ('Date' in k or 'DOFA' in k) or ('Modified_On' in k or 'Created_On' in k):
                    #         try:
                    #             {k: parser(v)}
                    #         except ValueError:
                    #             {k: None}
                    user_profile_data = {k: parser(v) if ('Date' in k or 'DOFA' in k) else v for k, v in user_profile_data.items()}
                    user_profile_data = {k: parser(v) if ('Modified_On' in k or 'Created_On' in k) else v for k, v in user_profile_data.items()}
                    user = user_profile.objects.filter(Full_Name=full_name)
                    user = UserAccount.objects.filter(id=user.first().pk)
                    # if "Email" not in user_profile_data:
                    #     continue
                    if "BAC_email" in user_profile_data:
                        bac_email = str(user_profile_data['BAC_email']).strip()
                        bac = UserAccount.objects.filter(email__iexact=bac_email)
                        if bac.exists():
                            if bac_email == "Elrike.Neels@succession.co.za":
                                print(bac.first().pk)
                            user_profile_data['bac'] = bac.first().pk
                            logContent = {
                                "account" : request.user.pk,
                                "log" : log_id,
                                "log_type" : 6,
                                "log_description" : f"BAC Added.",
                            } 
                            log_content_serializer = LogContentSerializer(data=logContent)
                            if log_content_serializer.is_valid():
                                log_content_serializer.create(log_content_serializer.validated_data)
                            else:
                                print(log_content_serializer.errors)
                            bac.update(userType=5)
                        else:
                            password = ''.join(secrets.choice(ALPHABET) for i in range(10))
                            new_user_data = {
                                "email" : email,
                                "first_name" : user_profile_data['BAC'],
                                "last_name" : "",
                                "password" : password,
                                "is_active" : 1,
                                "userType" : 5,
                            }
                            new_user_serializer = UserAccountsSerializers(data=new_user_data)
                            if new_user_serializer.is_valid():
                                new_user = new_user_serializer.create(new_user_serializer.validated_data)
                                new_user = UserAccount.objects.get(id=new_user.pk)
                                new_user.set_password(new_user_data['password'])
                                user_profile_data['bac'] = new_user.pk
                                new_users.append(new_user_data)
                                logContent = {
                                    "account" : request.user.pk,
                                    "log" : log_id,
                                    "log_type" : 6,
                                    "log_description" : f"BAC didn't exist, record was created.",
                                } 
                                log_content_serializer = LogContentSerializer(data=logContent)
                                if log_content_serializer.is_valid():
                                    log_content_serializer.create(log_content_serializer.validated_data)
                                else:
                                    print(log_content_serializer.errors)

                    if "Region" in user_profile_data:
                        manager_email = str(user_profile_data['Manager_email']).lower().strip()
                        manager = UserAccount.objects.filter(email__iexact=manager_email)
                        region = user_profile_data['Region']
                        if region == "#N/A":
                            region = "Staff"
                        region = re.sub(r'[^A-Za-z0-9 ]+', '', region)
                        region_data = regions.objects.filter(region=region)
                        if region_data.exists():
                            region_data = region_data.first()
                            user_profile_data['region'] = region_data.pk
                            if manager.exists():
                                manager.update(userType=3)
                                regional_manager_data = {
                                    "region" : region_data.pk,
                                    "manager": manager.first().pk,
                                    "status" : 1
                                }
                                old_region_manager = region_manager.objects.filter(region=region_data.pk)
                                if old_region_manager.exists():
                                    serializer = region_manager_Serializer(instance=old_region_manager.first(), data=regional_manager_data)
                                    if serializer.is_valid():
                                        serializer.save()
                                        logContent = {
                                            "account" : request.user.pk,
                                            "log" : log_id,
                                            "log_type" : 6,
                                            "log_description" : f"Region {region} manager updated.",
                                        } 
                                        log_content_serializer = LogContentSerializer(data=logContent)
                                        if log_content_serializer.is_valid():
                                            log_content_serializer.create(log_content_serializer.validated_data)
                                        else:
                                            print(log_content_serializer.errors)
                                    else:
                                        print(serializer.errors)
                                else:
                                    serializer = region_manager_Serializer(data=regional_manager_data)
                                    if serializer.is_valid():
                                        serializer.create(serializer.validated_data)
                                        logContent = {
                                            "account" : request.user.pk,
                                            "log" : log_id,
                                            "log_type" : 6,
                                            "log_description" : f"Region {region} manager didn't exist and added into database.",
                                        } 
                                        log_content_serializer = LogContentSerializer(data=logContent)
                                        if log_content_serializer.is_valid():
                                            log_content_serializer.create(log_content_serializer.validated_data)
                                        else:
                                            print(log_content_serializer.errors)
                                    else:
                                        print(serializer.errors)
                            # else:
                            #     password = ''.join(secrets.choice(ALPHABET) for i in range(10))
                            #     new_user_data = {
                            #         "email" : email,
                            #         "first_name" : user_profile_data['Manager'],
                            #         "last_name" : "",
                            #         "password" : password,
                            #         "is_active" : 1,
                            #         "userType" : 3,
                            #     }
                            #     new_user_serializer = UserAccountsSerializers(data=new_user_data)
                            #     if new_user_serializer.is_valid():
                            #         new_user = new_user_serializer.create(new_user_serializer.validated_data)
                            #         new_user = UserAccount.objects.get(id=new_user.pk)
                            #         new_user.set_password(new_user_data['password'])
                            #         new_users.append(new_user_data)
                            #         logContent = {
                            #             "account" : request.user.pk,
                            #             "log" : log_id,
                            #             "log_type" : 6,
                            #             "log_description" : f"Manager didn't exist, record was created.",
                            #         } 
                            #         log_content_serializer = LogContentSerializer(data=logContent)
                            #         if log_content_serializer.is_valid():
                            #             log_content_serializer.create(log_content_serializer.validated_data)
                            #         else:
                            #             print(log_content_serializer.errors)
                            #         regional_manager_data = {
                            #             "region" : region_data.pk,
                            #             "manager": new_user.pk,
                            #             "status" : 1
                            #         }
                            #         serializer = region_manager_Serializer(data=regional_manager_data)
                            #         if serializer.is_valid():
                            #             serializer.create(serializer.validated_data)
                            #             logContent = {
                            #                 "account" : request.user.pk,
                            #                 "log" : log_id,
                            #                 "log_type" : 6,
                            #                 "log_description" : f"Region {region} manager didn't exist and added into database.",
                            #             } 
                            #             log_content_serializer = LogContentSerializer(data=logContent)
                            #             if log_content_serializer.is_valid():
                            #                 log_content_serializer.create(log_content_serializer.validated_data)
                            #             else:
                            #                 print(log_content_serializer.errors)
                            #         else:
                            #             print(serializer.errors)
                        else:
                            data = {
                                "region" : region
                            }
                            region_serializer = regions_Serializer(data=data)
                            if region_serializer.is_valid():
                                region_data = region_serializer.create(region_serializer.validated_data)
                                user_profile_data['region'] = region_data.pk
                                logContent = {
                                    "account" : request.user.pk,
                                    "log" : log_id,
                                    "log_type" : 6,
                                    "log_description" : f"Region {region} didn't exist and added into database.",
                                } 
                                log_content_serializer = LogContentSerializer(data=logContent)
                                if log_content_serializer.is_valid():
                                    log_content_serializer.create(log_content_serializer.validated_data)
                                else:
                                    print(log_content_serializer.errors)
                                if manager.exists():
                                    manager.update(userType=3)
                                    regional_manager_data = {
                                        "region" : region_data.pk,
                                        "manager": manager.first().pk,
                                        "status" : 1
                                    }
                                    serializer = region_manager_Serializer(data=regional_manager_data)
                                    if serializer.is_valid():
                                        serializer.create(serializer.validated_data)
                                        logContent = {
                                            "account" : request.user.pk,
                                            "log" : log_id,
                                            "log_type" : 6,
                                            "log_description" : f"Region {region} manager didn't exist and added to database.",
                                        } 
                                        log_content_serializer = LogContentSerializer(data=logContent)
                                        if log_content_serializer.is_valid():
                                            log_content_serializer.create(log_content_serializer.validated_data)
                                        else:
                                            print(log_content_serializer.errors)
                                    else:
                                        print(serializer.errors)
                                else:
                                    password = ''.join(secrets.choice(ALPHABET) for i in range(10))
                                    new_user_data = {
                                        "email" : email,
                                        "first_name" : user_profile_data['Manager'],
                                        "last_name" : "",
                                        "password" : password,
                                        "is_active" : 1,
                                        "userType" : 3,
                                    }
                                    new_user_serializer = UserAccountsSerializers(data=new_user_data)
                                    if new_user_serializer.is_valid():
                                        new_user = new_user_serializer.create(new_user_serializer.validated_data)
                                        new_user = UserAccount.objects.get(id=new_user.pk)
                                        new_user.set_password(new_user_data['password'])
                                        new_users.append(new_user_data)
                                        logContent = {
                                            "account" : request.user.pk,
                                            "log" : log_id,
                                            "log_type" : 6,
                                            "log_description" : f"Manager didn't exist, record was created.",
                                        } 
                                        log_content_serializer = LogContentSerializer(data=logContent)
                                        if log_content_serializer.is_valid():
                                            log_content_serializer.create(log_content_serializer.validated_data)
                                        else:
                                            print(log_content_serializer.errors)
                                        regional_manager_data = {
                                            "region" : region_data.pk,
                                            "manager": new_user.pk,
                                            "status" : 1
                                        }
                                        serializer = region_manager_Serializer(data=regional_manager_data)
                                        if serializer.is_valid():
                                            serializer.create(serializer.validated_data)
                                            logContent = {
                                                "account" : request.user.pk,
                                                "log" : log_id,
                                                "log_type" : 6,
                                                "log_description" : f"Region {region} manager didn't exist and added into database.",
                                            } 
                                            log_content_serializer = LogContentSerializer(data=logContent)
                                            if log_content_serializer.is_valid():
                                                log_content_serializer.create(log_content_serializer.validated_data)
                                            else:
                                                print(log_content_serializer.errors)
                                        else:
                                            print(serializer.errors)
                    update_log = ""
                    create_log = ""
                    not_existing_log = ""
                    if user.exists():
                        logContent = {
                            "account" : request.user.pk,
                            "log" : log_id,
                            "log_type" : 2,
                            "log_description" : f"User {full_name} found in database.",
                        } 
                        log_content_serializer = LogContentSerializer(data=logContent)
                        if log_content_serializer.is_valid():
                            log_content_serializer.create(log_content_serializer.validated_data)
                        else:
                            print(log_content_serializer.errors)
                        user = user.values().first()
                        user_profile_data['user'] = user['id']
                        old_user_profile = user_profile.objects.filter(user=user['id'])
                        if old_user_profile.exists():
                            old_user_profile = user_profile.objects.get(user=user['id'])                    
                            user_profile_serializer = user_profile_Serializer(old_user_profile, data=user_profile_data, partial=True)
                            if user_profile_serializer.is_valid():
                                user_profile_serializer.save()
                                print(f"Updated {user['email']}")
                                update_log = f"<p>User {full_name} ({email}) updated</p>"
                                updated += 1
                                updated_users.append(user['email'])
                                logContent = {
                                    "account" : request.user.pk,
                                    "log" : log_id,
                                    "log_type" : 3,
                                    "log_description" : f"User {full_name} ({email}) updated.",
                                } 
                                log_content_serializer = LogContentSerializer(data=logContent)
                                if log_content_serializer.is_valid():
                                    log_content_serializer.create(log_content_serializer.validated_data)
                                else:
                                    print(log_content_serializer.errors)
                                
                            else:
                                print(user_profile_serializer.errors)
                        else:
                            user_profile_serializer = user_profile_Serializer(data=user_profile_data)
                            if user_profile_serializer.is_valid():
                                user_profile_serializer.create(user_profile_serializer.validated_data)
                                print(f"Created {user['email']}")
                                create_log = f"<p>User {full_name} ({email}) created</p>"
                                created += 1
                                created_users.append(user['email'])
                                logContent = {
                                    "account" : request.user.pk,
                                    "log" : log_id,
                                    "log_type" : 4,
                                    "log_description" : f"User {full_name} ({email}) created.",
                                } 
                                log_content_serializer = LogContentSerializer(data=logContent)
                                if log_content_serializer.is_valid():
                                    log_content_serializer.create(log_content_serializer.validated_data)
                                else:
                                    print(log_content_serializer.errors)
                            else:
                                print(user_profile_serializer.errors)
                    else:
                        not_existing_log = f"<p>User {full_name} ({email}) does not exist</p>"
                        print(f"User {email} does not exist")
                        logContent = {
                            "account" : request.user.pk,
                            "log" : log_id,
                            "log_type" : 5,
                            "log_description" : f"User {full_name} ({email}) does not exist.",
                        } 
                        log_content_serializer = LogContentSerializer(data=logContent)
                        if log_content_serializer.is_valid():
                            log_content_serializer.create(log_content_serializer.validated_data)
                        else:
                            print(log_content_serializer.errors)
                        password = ''.join(secrets.choice(ALPHABET) for i in range(10))
                        new_user_data = {
                            "email" : email,
                            "first_name" : user_profile_data['Nick_Name'] if "Nick_Name" in user_profile_data else user_profile_data['Full_Name'],
                            "last_name" : user_profile_data['Surname'] if "Surname" in user_profile_data else "",
                            "password" : password,
                            "is_active" : 1,
                            "userType" : user_profile_data['UserRole'] if "UserRole" in user_profile_data else 6,
                        }
                        if "ROLE" in user_profile_data:
                            if user_profile_data["ROLE"] == "National":
                                new_user_data['is_superuser'] = True
                                new_user_data['userType'] = 0
                            elif user_profile_data["ROLE"] == "ARC":
                                new_user_data['userType'] = 1
                            elif user_profile_data["ROLE"] == "GK":
                                new_user_data['userType'] = 2
                            else:
                                new_user_data['userType'] = 3
                                new_user_data['region'] = user_profile_data["ROLE"]


                        new_user_serializer = UserAccountsSerializers(data=new_user_data)
                        if new_user_serializer.is_valid():
                            new_user = new_user_serializer.create(new_user_serializer.validated_data)
                            new_user = UserAccount.objects.get(id=new_user.pk)
                            new_user.set_password(new_user_data['password'])
                            new_users.append(new_user_data)
                            print(f"User {email} does not exist")
                            logContent = {
                                "account" : request.user.pk,
                                "log" : log_id,
                                "log_type" : 6,
                                "log_description" : f"User {full_name} ({email}) created with Advisor.",
                            } 
                            log_content_serializer = LogContentSerializer(data=logContent)
                            if log_content_serializer.is_valid():
                                new_user = log_content_serializer.create(log_content_serializer.validated_data)
                                if new_user_data['userType'] == 3:
                                    region = regions.objects.filter(region__icontains=str(new_user_data['region']).lower())
                                    if region.exists():
                                        region_data = {
                                            "region" : region.first().pk,
                                            "manager" : new_user.pk
                                        }
                                        region_manager_serializer = region_manager_Serializer(region_data)
                                        if region_manager_serializer.is_valid():
                                            region_manager_serializer.save()
                                        else:
                                            print(region_manager_serializer.errors)
                                    else:
                                        region_data = {
                                            "region" : new_user_data['region']
                                        }
                                        region_serializer = regions_Serializer(data=region_data)
                                        if region_serializer.is_valid():
                                            new_region = region_serializer.create(region_serializer.validated_data)
                                            region_data = {
                                                "region" : new_region.pk,
                                                "manager" : new_user.pk
                                            }
                                            region_manager_serializer = region_manager_Serializer(region_data)
                                            if region_manager_serializer.is_valid():
                                                region_manager_serializer.save()
                                            else:
                                                print(region_manager_serializer.errors)
                                        else:
                                            print(region_manager_serializer.errors)
                            else:
                                print(log_content_serializer.errors)
                            new_user = UserAccount.objects.filter(email__icontains=email).first()
                            user_profile_data['user'] = new_user.pk
                            user_profile_serializer = user_profile_Serializer(data=user_profile_data)
                            if user_profile_serializer.is_valid():
                                user_profile_serializer.create(user_profile_serializer.validated_data)
                                print(f"Created {email}")
                                create_log = f"<p>User {full_name} ({email}) created</p>"
                                created += 1
                                created_users.append(email)
                                logContent = {
                                    "account" : request.user.pk,
                                    "log" : log_id,
                                    "log_type" : 4,
                                    "log_description" : f"User {full_name} ({email}) created.",
                                } 
                                log_content_serializer = LogContentSerializer(data=logContent)
                                if log_content_serializer.is_valid():
                                    log_content_serializer.create(log_content_serializer.validated_data)
                                else:
                                    print(log_content_serializer.errors)
                            else:
                                print(user_profile_serializer.errors)
                        not_existing += 1
                        # not_existing_users.append(user_profile_data['Email'])
                    total += 1
                    kpis = {"total": total,"updated":updated, "created": created, "not_existing" : not_existing, "logs": {
                        "create_log": create_log,
                        "update_log": update_log,
                        "not_existing_log": not_existing_log,
                        "downloading_link" : ""
                    }}
                    logKPIs = {
                        "account" : request.user.pk,
                        "log" : log_id,
                        "kpis" : {
                            "total": total,"updated":updated, "created": created, "not_existing" : not_existing,
                        }
                    }
                    kpisID = LogKPIs.objects.get(account=request.user.pk, log=log_id)
                    log_kpis_serializer = LogKPIsSerializer(instance=kpisID, data=logKPIs)
                    if log_kpis_serializer.is_valid():
                        log_kpis_serializer.save()
                    else:
                        print(log_kpis_serializer.errors)
                    yield f"data: {json.dumps(kpis)}\n\n"
                if len(new_users) > 0:
                    new_users_df = pd.DataFrame(new_users)
                    csv_name = f"static/{str(logData['log_name']).replace(' ','_')}_new_users.csv"
                    new_users_df.to_csv(csv_name)
                    logContent = {
                        "account" : request.user.pk,
                        "log" : log_id,
                        "log_type" : 7,
                        "downloading_link" : csv_name,
                        "log_description" : f"New Added Users Downloading Link.",
                    } 
                    log_content_serializer = LogContentSerializer(data=logContent)
                    if log_content_serializer.is_valid():
                        log_content_serializer.create(log_content_serializer.validated_data)
                    else:
                        print(log_content_serializer.errors)
                    kpis['downloading_link'] = csv_name
                    yield f"data: {json.dumps(kpis)}\n\n"
                yield f"data: [DONE]\n\n"
                logData = {
                    "status" : 1,
                    "closed_at" : datetime.now(),
                }
                log = Log.objects.get(id=log_id)
                log_serializer = LogSerializer(log, data=logData, partial=True)
                if log_serializer.is_valid():
                    log_serializer.save()
                    print("Log updated")
                else:
                    print(log_serializer.errors)
        if request.user.is_superuser == False:
            return StreamingHttpResponse(error401(), content_type='text/event-stream')
        return StreamingHttpResponse(response(request.data), content_type='text/event-stream')
    
class UsersList(APIView):
    def get(self, request):
        if request.user.is_superuser == False:
            return Response({"message" : "You are not authorized to perform this action"}, 401)
        users = UserAccount.objects.all().order_by('email')
        all_users = users.count()
        admin_users = users.filter(is_superuser=True).count()
        arc_users = users.filter(userType=1).count()
        gk_users = users.filter(userType=2).count()
        manager_users = users.filter(userType=3).count()
        manager_users += users.filter(userType=4).count()
        bac_users = users.filter(userType=5).count()
        advisor_users = users.filter(userType=6).count()
        return Response(
            {
                "all_users" : all_users,
                "admin_users" : admin_users,
                "arc_users" : arc_users,
                "gk_users" : gk_users,
                "manager_users" : manager_users,
                "bac_users" : bac_users,
                "advisor_users" : advisor_users,
            }
        )

    def post(self, request):
        if request.user.is_superuser == False:
            return Response({"message" : "You are not authorized to perform this action"}, 401)
        userType = request.data['user_type']
        sortBy = request.data['sort_by']
        sortDirection = request.data['sort_direction']
        if sortDirection == "asc":
            sortBy = sortBy
        else:
            sortBy = f"-{sortBy}"
        users = user_profile.objects.filter(~Q(user=None)).order_by(sortBy)
        if userType != "all":
            if userType == "admins":
                users = user_profile.objects.all().filter(user__is_superuser=True).order_by(sortBy)
            else:
                users = user_profile.objects.all().filter(user__userType=userType).order_by(sortBy)
            
        search_query = request.data['search_query']
        if request.data['search_query'] != "":
            search_vector = SearchVector('Full_Name','user__email')
            # users = UserAccount.objects.filter(Q(first_name__icontains=searchQuery) | Q(last_name__icontains=searchQuery) | Q(email__icontains=searchQuery)).order_by('id').values('id','email','first_name', 'last_name','is_superuser','is_active')
            users = users.annotate(search=search_vector).filter(Q(search=search_query) | Q(search__icontains=search_query))
            # users = users.filter(Q(Full_Name=search_query)|Q(Full_Name__icontains=search_query)|Q(user__email=search_query)|Q(user__email__icontains=search_query))
        else:
            users = users
        users = users.select_related('user')
        total_users = users.count()
        p = Paginator(users, request.data['page_size'])
        users = p.page(request.data['page_number']).object_list
        users_list = []
        for user in users:
            users_list.append({
                "user_id" : utils.encode_uid(user.user.pk),
                "email" : user.user.email,
                "full_name" : user.Full_Name,
                "first_name" : user.user.first_name,
                "last_name" : user.user.last_name if user.user.last_name != "nan" else "",
                "id_number" : user.ID_Number,
                "user_type" : user.user.userType,
                "account_status" : user.user.is_active,
            })
        if request.data['page_number'] <= p.num_pages:
                
            return Response(
                {
                    "total_pages" : p.num_pages,
                    "has_pages" : p.num_pages,
                    "total_records" : total_users,
                    "results" :users_list
                }
            )
        else:
            return Response(
                {
                    "total_pages" : p.num_pages,
                    "has_pages" : p.num_pages,
                    "total_records" : total_users,
                    "results" : None
                }
            )
    
class LoadUserDetails(APIView):
    def get(self, request):
        user = UserAccount.objects.filter(id=request.user.pk).values('id','email', 'first_name', 'last_name', 'is_superuser', 'is_active','userType').values().first()
        user_profile_data = user_profile.objects.filter(user=request.user.pk)
        if user_profile_data.exists():
            user['profile'] = user_profile_data.values().first()
            profile = user_profile_data.first()
            profile_list = user_profile._meta.get_fields()
            user['profile_columns'] = [column.name for column in profile_list if column.name not in ["id", "user", "supervision", "categorisation","id_number", "initials", "full_name", "nick_name", "contact_number", "address_physical_1", "address_physical_2", "address_physical_3", "address_postal_code", ]]
            user['full_name'] = user['profile']['Full_Name']
            user['profile']['region'] = profile.region.pk if profile.region else 0
            user['profile']['bac'] = user_profile_data.first().bac.pk if user_profile_data.first().bac else 0
            # print(user_profile_data.first().bac.pk)
        user['regions'] = regions.objects.all().values()
        bacs = user_profile.objects.filter(user__userType=5).select_related('user')
        bacs_data = []
        for bac in bacs:
            bacs_data.append({
                "id": bac.user.pk,
                "name": bac.Full_Name,
                "email": bac.user.email,
            })
        user['bacs'] = bacs_data
        return Response({"user" : user}, 200)
  
class UserDetail(APIView):
    def get(self, request, pk):
        if request.user.is_superuser == False:
            return Response({"message" : "You are not authorized to perform this action"}, 401)
        user = UserAccount.objects.filter(id=utils.decode_uid(pk)).values('id','email', 'first_name', 'last_name', 'is_superuser', 'is_active','userType').values().first()
        user_profile_data = user_profile.objects.filter(user=utils.decode_uid(pk))
        if user_profile_data.exists():
            user['profile'] = user_profile_data.values().first()
            profile = user_profile_data.first()
            profile_list = user_profile._meta.get_fields()
            user['profile_columns'] = [column.name for column in profile_list if column.name not in ["id", "user", "supervision", "categorisation","id_number", "initials", "full_name", "nick_name", "contact_number", "address_physical_1", "address_physical_2", "address_physical_3", "address_postal_code", ]]
            user['full_name'] = user['profile']['Full_Name']
            user['profile']['region'] = profile.region.pk if profile.region else 0
            user['profile']['bac'] = user_profile_data.first().bac.pk if user_profile_data.first().bac else 0
            # print(user_profile_data.first().bac.pk)
        user['regions'] = regions.objects.all().values()
        bacs = user_profile.objects.filter(user__userType=5).select_related('user')
        bacs_data = []
        for bac in bacs:
            bacs_data.append({
                "id": bac.user.pk,
                "name": bac.Full_Name,
                "email": bac.user.email,
            })
        user['bacs'] = bacs_data
        return Response({"user" : user}, 200)
    
    def put(self, request, pk):
        if request.user.is_superuser == False:
            return Response({"message" : "You are not authorized to perform this action"}, 401)
        user = UserAccount.objects.filter(id=utils.decode_uid(pk))
        data = request.data
        if user.exists():
            if "userType" in data:
                updatedData = {
                    "userType" : data['userType']
                }
                serializer = UserAccountsSerializers(instance=user.first(), data=updatedData, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    return Response({"message" : "User profile updated"}, 200)
                else:
                    print(serializer.errors)
                    return Response({"message" : serializer.errors}, 400) 
            old_user_profile = user_profile.objects.filter(user=utils.decode_uid(pk))
            if old_user_profile.exists():
                old_user_profile = old_user_profile.first()
                user_profile_serializer = user_profile_Serializer(instance=old_user_profile, data=data, partial=True)
                if user_profile_serializer.is_valid():
                    user_profile_serializer.save()
                    return Response({"message" : "User profile updated"}, 200)
                else:
                    print(user_profile_serializer.errors)
                    return Response({"message" : user_profile_serializer.errors}, 400)
        else:
            return Response({"message" : "User not found"}, 400)
    
class UserRole(APIView):
    
    def put(self, request, pk):
        if request.user.is_superuser == False:
            return Response({"message" : "You are not authorized to perform this action"}, 401)
        user = UserAccount.objects.filter(id=utils.decode_uid(pk))
        data = request.data
        if user.exists():
            old = user.first()
            user_type = "Admin"
            if int(data['userType']) == 0:
                data['is_superuser'] = True
                user.update(is_superuser=True, userType=0)
            if int(data['userType']) == 1:
                user_type = "ARC"
                data['is_superuser'] = False
                user.update(is_superuser=False, userType=data['userType'])
            if int(data['userType']) == 2:
                user_type = "Gatekeeper"
                data['is_superuser'] = False
                user.update(is_superuser=False, userType=data['userType'])
            if int(data['userType']) == 3:
                user_type = "Manager"
                data['is_superuser'] = False
                user.update(is_superuser=False, userType=data['userType'])
            if int(data['userType']) == 5:
                user_type = "BAC"
                data['is_superuser'] = False
                user.update(is_superuser=False, userType=data['userType'])
            if int(data['userType']) == 6:
                user_type = "Advisor"
                data['is_superuser'] = False
                user.update(is_superuser=False, userType=data['userType'])
            return Response({"message": f"{old.email} updated to {user_type}"})
            # serializer = UserAccountsSerializers(instance=old, data=data, partial=True)
            # if serializer.is_valid():
            #     serializer.save()
            # else:
            #     return Response({"errors" : serializer.errors}, 400)
        else:
            return Response({"message" : "User not found"}, 400)
    
class UserStatus(APIView):
    
    def put(self, request, pk):
        if request.user.is_superuser == False:
            return Response({"message" : "You are not authorized to perform this action"}, 401)
        user = UserAccount.objects.filter(id=utils.decode_uid(pk))
        data = request.data
        if user.exists():
            old = user.first()
            user.update(is_active=int(data['account_status']))
            status = "Active" if int(data['account_status']) == 1 else "Inactive"
            return Response({"message": f"{old.email} updated to {status}"})
        else:
            return Response({"message" : "User not found"}, 400)
        
class RegionsAPI(APIView):

    def get(self, request):

        region_data = regions.objects.all()
        regions_data = []
        for region in region_data:
            manager = region_manager.objects.filter(region=region.pk)
            manager_name = "N.A."
            if manager.exists():
                manager = manager.first()
                manager_name = manager.manager.first_name
                manager_name +=  " " + manager.manager.last_name if manager.manager.last_name != "" else ""
            regions_data.append({
                "id" : utils.encode_uid(region.pk),
                "region" : region.region,
                "manager" : manager_name
            })
        return Response({
            "regions" : regions_data
        })
        
class RegionsDetailsAPI(APIView):

    def get(self, request, pk):

        region_data = regions.objects.filter(id=utils.decode_uid(pk))
        managers = UserAccount.objects.filter(userType = 3)
        if region_data.exists():
            region_data = region_data.first()
            manager = region_manager.objects.filter(region=region_data.pk)
            managerId = 0
            if manager.exists():
                manager = manager.first()
                managerId = manager.manager.pk
            regions_data = {
                "id" : utils.encode_uid(region_data.pk),
                "region" : region_data.region,
                "manager" : managerId
            }
            return Response({
                "region" : regions_data,
                "managers" : managers.values('id','first_name','last_name','email')
            })
        return Response(404)
    def put(self, request, pk):

        region_data = regions.objects.filter(id=utils.decode_uid(pk))
        manager = UserAccount.objects.filter(id=request.data['manager'])
        if region_data.exists():
            old = region_data.first()
            if manager.exists():
                manager = manager.first()
            else:
                return Response({
                    "message": "Manager does not exist"
                }, 400)
            data = {
                "manager" : manager.pk
            }
            region_manager_data = region_manager.objects.filter(region=old.pk)
            if region_manager_data.exists():
                old_data = region_manager_data.first()  
                serializer = region_manager_Serializer(old_data, data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    return Response({
                        "message" : f"{old.region}'s Manager updated to {manager.first_name}"
                    })
                return Response({"errors" : serializer.errors}, 400)
            else:
                data['region'] = old.pk
                serializer = region_manager_Serializer(data=data)
                if serializer.is_valid():
                    serializer.create(serializer.validated_data)
                    return Response({
                        "message" : f"{old.region}'s Manager updated to {manager.first_name}"
                    })
                return Response({"errors" : serializer.errors}, 400)
        return Response(404)
        
    def delete(self, request, pk):

        region_data = regions.objects.filter(id=utils.decode_uid(pk))
        if region_data.exists():
            region_data.delete()
            return Response(200)
        return Response(404)
    
class CreateUserAPI(APIView):

    def post(self, request):
        if not request.user.is_superuser:
            return Response(401)
        data = request.data
        if data['userType'] == 0:
            data['is_superuser'] = True
        data['is_active'] = 1
        data['admin_id'] = request.user.pk
        serializer = UserCreateSerializer(data=data)
        if serializer.is_valid():
            user = serializer.create(serializer.validated_data)
            data = {
                "user":user.pk,
                "Full_Name":user.first_name + " " + user.last_name,
                "bac":None,
                "categorisation":None,
                "region":None,
            }
            serializer = user_profile_Serializer(data=data, partial=True)
            if serializer.is_valid():
                serializer.create(serializer.validated_data)
        else:
            print(serializer.errors)
            return Response({"errors":serializer.errors}, 401)
        return Response({"message": "User Created Successfully"}, 201)
    
class UpdateUserPasswordAPI(APIView):

    def post(self, request, pk):
        if not request.user.is_superuser:
            return Response(401)
        user = UserAccount.objects.filter(id=utils.decode_uid(pk))
        if user.exists():
            user = user.first()
            user.set_password(request.data['password'])
            user.save()
            return Response({"message": "Password Updated Successfully"}, 200)
        else:
            return Response(404)

from django.conf import settings
from djoser.compat import get_user_email

class reset_password(APIView):
    authorization_classes = []
    permission_classes = []
    def post(self, request, *args, **kwargs):
        user = UserAccount.objects.get(email=request.data['email'])

        if user:
            context = {"user": user}
            to = [get_user_email(user)]
            settings.DJOSER.EMAIL.password_reset(self.request, context).send(to)

        return Response(status=204)

class reset_password_confirm(APIView):
    authorization_classes = []
    permission_classes = []
    def post(self, request, *args, **kwargs):
        serializer = UserAccountsSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)

        serializer.user.set_password(serializer.data["new_password"])
        if hasattr(serializer.user, "last_login"):
            serializer.user.last_login = datetime.now()
        serializer.user.save()

        if settings.PASSWORD_CHANGED_EMAIL_CONFIRMATION:
            context = {"user": serializer.user}
            to = [get_user_email(serializer.user)]
            settings.EMAIL.password_changed_confirmation(self.request, context).send(to)
        return Response(status=204)