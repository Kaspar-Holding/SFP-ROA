import json
from django.shortcuts import render
from rest_framework.response import Response
from django.http import StreamingHttpResponse
from rest_framework.decorators import api_view, APIView
from data.models import UserAccount, user_profile
from data.serializers import user_profile_Serializer
from django.core.files.base import ContentFile
import base64
import pandas as pd
from datetime import datetime
import pytz
from dateutil.relativedelta import relativedelta
# Create your views here.

@api_view(['GET'])
def getUserInfo(request):

    user = request.user

    userData = UserAccount.objects.filter(id=user.pk).values('id','email', 'first_name', 'last_name', 'is_superuser', 'userType').first()

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
        userData['inservice'] = user_profile_data['Appointment_Date']
        appointment_date = user_profile_data['Appointment_Date']
        dofa = user_profile_data['DOFA']

        # Calculate the difference in years
        userData['experience'] = relativedelta(now, appointment_date).years if relativedelta(now, appointment_date).years != 0 else 1 
        userData['industry_experience'] = relativedelta(now, dofa).years if relativedelta(now, dofa).years != 0 else 1 
        
    return Response({"profile" : userData}, 200)

class BulkUserUpload(APIView):
    def post(self, request, format=None):
        def response():
            yield "data: [START]\n\n" 
            # if request.user.is_superuser == False:
            #     return Response({"message" : "You are not authorized to perform this action"}, 401)
            if 'usersExcelFile' not in request.data:
                yield "data: [ERROR] No file found\n\n"
            else:
                yield "data: [SUCCESS] File found\n\n"
                csv_data = request.data['usersExcelFile']
                format, csvstr = csv_data.split(';base64,')
                ext = format.split('/')[-1]
                file_name = "'usersExcelFile." + ext
                csvData = ContentFile(base64.b64decode(csvstr), name=file_name) 
                users_profile_df = pd.read_excel(csvData)
                # users_profile_df = users_profile_df.fillna('')
                users_profile_df.columns = users_profile_df.columns.str.replace(' ', '_').str.replace('__', '_').str.replace('.', '_')
                total = 0
                updated = 0
                updated_users = []
                created = 0
                created_users = []
                not_existing = 0
                not_existing_users = []
                for i in range(len(users_profile_df)):
                    user_profile_data = users_profile_df.iloc[i].to_dict()
                    user_profile_data = {k: datetime.now(pytz.timezone("Africa/Johannesburg")).strftime('%Y-%m-%d') if ('Date' in k or 'Created_On' in k) and pd.isnull(v) else v for k, v in user_profile_data.items()}
                    user = UserAccount.objects.filter(email__iexact=user_profile_data['Email'])
                    if user.exists():
                        user = user.values().first()
                        user_profile_data['user'] = user['id']
                        old_user_profile = user_profile.objects.filter(user=user['id'])
                        if old_user_profile.exists():
                            old_user_profile = user_profile.objects.get(user=user['id'])                    
                            user_profile_serializer = user_profile_Serializer(old_user_profile, data=user_profile_data)
                            if user_profile_serializer.is_valid():
                                user_profile_serializer.save()
                                print(f"Updated {user['email']}")
                                updated += 1
                                updated_users.append(user['email'])
                            else:
                                print(user_profile_serializer.errors)
                        else:
                            user_profile_serializer = user_profile_Serializer(data=user_profile_data)
                            if user_profile_serializer.is_valid():
                                user_profile_serializer.create(user_profile_serializer.validated_data)
                                print(f"Created {user['email']}")
                                created += 1
                                created_users.append(user['email'])
                            else:
                                print(user_profile_serializer.errors)
                    else:
                        print(f"User {user_profile_data['Email']} does not exist")
                        not_existing += 1
                        not_existing_users.append(user_profile_data['Email'])
                    total += 1
                    kpis = {"total": total,"updated":updated, "created": created, "not_existing" : not_existing}
                    yield f"data: {json.dumps(kpis)}\n\n"
                yield f"data: [DONE]\n\n"
        
        return StreamingHttpResponse(response(), content_type='text/event-stream')