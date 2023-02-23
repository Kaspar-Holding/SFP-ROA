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
    # RF_BU_Risk = ['low','medium','high']
    # for form in forms:
    #     RF_BU_Risk_id = int(form['RF_BU_Risk'])
    #     form['RF_BU_Risk'] = RF_BU_Risk[RF_BU_Risk_id]
    forms = RiskFactors.objects.all().values()
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
    for i in range(len(df)):
        csvData.append({
            "advisorId" : request.data['advisorId'],
            "RF_Overall_Risk" : str(df['RF_Overall_Risk'][i]) if df['RF_Overall_Risk'][i] is not None else "",
            "RF_BU_Risk" : str(df['RF_BU_Risk'][i]) if df['RF_BU_Risk'][i] is not None else "",
            "RF_Date" : str(df['RF_Date'][i]) if df['RF_Date'][i] is not None else "",
            "RF_ClientName" : str(df['RF_ClientName'][i]) if df['RF_ClientName'][i] is not None else "",
            "RF_ClientId" : str(df['RF_ClientId'][i]) if df['RF_ClientId'][i] is not None else "",
            "RF_CompleteByName" : str(df['RF_CompleteByName'][i]) if df['RF_CompleteByName'][i] is not None else "",
            "RF_CompleteByRole" : str(df['RF_CompleteByRole'][i]) if df['RF_CompleteByRole'][i] is not None else "",
            "RF_ClientType" : str(df['RF_ClientType'][i]) if df['RF_ClientType'][i] is not None else "",
            "RF_Occupation" : str(df['RF_Occupation'][i]) if df['RF_Occupation'][i] is not None else "",
            "RF_CountryOfBirth" : str(df['RF_CountryOfBirth'][i]) if df['RF_CountryOfBirth'][i] is not None else "",
            "RF_CountryOfResidence" : str(df['RF_CountryOfResidence'][i]) if df['RF_CountryOfResidence'][i] is not None else "",
            "RF_Nationality" : str(df['RF_Nationality'][i]) if df['RF_Nationality'][i] is not None else "",
            "RF_Different_Nationality" : str(df['RF_Different_Nationality'][i]) if df['RF_Different_Nationality'][i] is not None else "",
            "RF_CountryOfTax" : str(df['RF_CountryOfTax'][i]) if df['RF_CountryOfTax'][i] is not None else "",
            "RF_Industry" : str(df['RF_Industry'][i]) if df['RF_Industry'][i] is not None else "",
            "RF_SourceOfFunds" : str(df['RF_SourceOfFunds'][i]) if df['RF_SourceOfFunds'][i] is not None else "",
            "RF_RelationshipToClient" : str(df['RF_RelationshipToClient'][i]) if df['RF_RelationshipToClient'][i] is not None else "",
            "RF_CountryOfRegistration" : str(df['RF_CountryOfRegistration'][i]) if df['RF_CountryOfRegistration'][i] is not None else "",
            "RF_CountryOfOperation" : str(df['RF_CountryOfOperation'][i]) if df['RF_CountryOfOperation'][i] is not None else "",
            "RF_Type_Legal_Entity" : str(df['RF_Type_Legal_Entity'][i]) if df['RF_Type_Legal_Entity'][i] is not None else "",
            "RF_Client_Relationship" : str(df['RF_Client_Relationship'][i]) if df['RF_Client_Relationship'][i] is not None else "",
            "RF_Product_Name" : str(df['RF_Product_Name'][i]) if df['RF_Product_Name'][i] is not None else "",
            "RF_Transaction_Flow" : str(df['RF_Transaction_Flow'][i]) if df['RF_Transaction_Flow'][i] is not None else "",
            "RF_Transaction_Method" : str(df['RF_Transaction_Method'][i]) if df['RF_Transaction_Method'][i] is not None else "",
            "RF_Transaction_Reason" : str(df['RF_Transaction_Reason'][i]) if df['RF_Transaction_Reason'][i] is not None else "",
            "RF_High_Transaction_Reason" : str(df['RF_High_Transaction_Reason'][i]) if df['RF_High_Transaction_Reason'][i] is not None else "",
            "RF_Transaction_Frequency" : str(df['RF_Transaction_Frequency'][i]) if df['RF_Transaction_Frequency'][i] is not None else "",
            "RF_Transaction_Value" : str(df['RF_Transaction_Value'][i]) if df['RF_Transaction_Value'][i] is not None else "",
            "RF_Currency_Value" : str(df['RF_Currency_Value'][i]) if df['RF_Currency_Value'][i] is not None else "",
            "RF_Transaction_Geography" : str(df['RF_Transaction_Geography'][i]) if df['RF_Transaction_Geography'][i] is not None else "",
            "RF_Funds_Jurisdiction" : str(df['RF_Funds_Jurisdiction'][i]) if df['RF_Funds_Jurisdiction'][i] is not None else "",
            "RF_Delivery_Channel" : str(df['RF_Delivery_Channel'][i]) if df['RF_Delivery_Channel'][i] is not None else "",
            "RF_Linked_Party_Acting" : str(df['RF_Linked_Party_Acting'][i]) if df['RF_Linked_Party_Acting'][i] is not None else "",
            "RF_Linked_Party_Paying" : str(df['RF_Linked_Party_Paying'][i]) if df['RF_Linked_Party_Paying'][i] is not None else "",
            "RF_Client_Match" : str(df['RF_Client_Match'][i]) if df['RF_Client_Match'][i] is not None else "",
            "RF_Client_Beneficiaries" : str(df['RF_Client_Beneficiaries'][i]) if df['RF_Client_Beneficiaries'][i] is not None else "",
            "RF_Adjust_Risk1" : str(df['RF_Adjust_Risk1'][i]) if df['RF_Adjust_Risk1'][i] is not None else "",
            "RF_Name" : str(df['RF_Name'][i]) if df['RF_Name'][i] is not None else "",
            "RF_ID" : str(df['RF_ID'][i]) if df['RF_ID'][i] is not None else "",
            "RF_Linked_Party" : str(df['RF_Linked_Party'][i]) if df['RF_Linked_Party'][i] is not None else "",
            "RF_RCA" : str(df['RF_RCA'][i]) if df['RF_RCA'][i] is not None else "",
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

        formData['advisorName'] = advisorNameSerializer.data['name']
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
    complete_forms = RiskFactors.objects.filter(advisorId = request.data['advisorId'],status = 1)
    complete_serializer = RiskFactorsSerializers(complete_forms, many=True)
    incomplete_forms = RiskFactors.objects.filter(advisorId = request.data['advisorId'],status = 0)
    incomplete_serializer = RiskFactorsSerializers(incomplete_forms, many=True)
    searchQuery = request.data['search_query']
    riskFactors = RiskFactors.objects.filter(advisorId = request.data['advisorId'])
    forms_data = []
    if searchQuery != "":
        forms_data = riskFactors.filter(Q(RF_ClientName__icontains=searchQuery) | Q(RF_ClientId__icontains=searchQuery)).order_by('RF_ClientName').values("id","advisorId","RF_ClientName","RF_ClientId")
    else:
        forms_data = riskFactors.order_by('RF_ClientName').values("id","advisorId","RF_ClientName","RF_ClientId")
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

    formData['advisorName'] = advisorNameSerializer.data['name']
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
            return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewInvestmentPlanningData(request):
    form = Form.objects.get(id=request.data['formId'])
    formSerializer = FormSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = UserAccount.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = FormSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['name']
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
            return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewRiskPlanningData(request):
    form = RiskPlanning.objects.get(id=request.data['formId'])
    formSerializer = RiskPlanningSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = RiskPlanning.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = RiskPlanningSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateRiskPlanningData(request):
    form = RiskPlanning.objects.get(id=request.data['formId'])
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
            return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewAssuranceInvestmentData(request):
    form = AssuranceInvestment.objects.get(id=request.data['formId'])
    formSerializer = AssuranceInvestmentSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = AssuranceInvestment.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = AssuranceInvestmentSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['name']
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
            return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewAssuranceRiskData(request):
    form = AssuranceRisk.objects.get(id=request.data['formId'])
    formSerializer = AssuranceRiskSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = AssuranceRisk.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = AssuranceRiskSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['name']
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
            return Response({'message': "Form Already Exists","code": "200", "formData" : data},200)
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

    

@api_view(['POST'])
def viewEmployeeBenefitsData(request):
    form = EmployeeBenefits.objects.get(id=request.data['formId'])
    formSerializer = EmployeeBenefitsSerializers(form, many=False)
    
    formData = formSerializer.data
    
    advisorName = EmployeeBenefits.objects.get(id=formData.data['advisorId'])
    advisorNameSerializer = EmployeeBenefitsSerializers(advisorName, many=False)

    formData['advisorName'] = advisorNameSerializer.data['name']
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

    formData['advisorName'] = advisorNameSerializer.data['name']
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

    formData['advisorName'] = advisorNameSerializer.data['name']
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

    formData['advisorName'] = advisorNameSerializer.data['name']
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
    serializer = RiskFactorsSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = RiskFactors.objects.filter(advisorId = request.data['advisorId'],RF_ClientId = request.data['RF_ClientId']).first()
        serializer1 = RiskFactorsSerializers(old_form, many=False)
        # return Response({"data":serializer1.data, "length": len(serializer1.data['client_id'])})
        if len(serializer1.data['RF_ClientId']) == 0:
            serializer.create(serializer.validated_data)
            latest = RiskFactors.objects.latest('id')
            serializer2 = RiskFactorsSerializers(latest, many=False)
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
    form = RiskFactors.objects.get(id=request.data['formId'], advisorId=request.data['advisorId'])
    formSerializer = RiskFactorsSerializers(form, many=False)
    
    formData = formSerializer.data
    
    # advisorName = RiskFactors.objects.get(id=formData.data['advisorId'])
    # advisorNameSerializer = RiskFactorsSerializers(advisorName, many=False)

    # formData['advisorName'] = advisorNameSerializer.data['name']
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"formData": formData},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateRiskFactorsData(request):
    form = RiskFactors.objects.get(id=request.data['id'])
    serializer = RiskFactorsSerializers(instance=form, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Updated","code":200,"formData": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)


