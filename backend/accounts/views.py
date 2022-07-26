from http.client import HTTPResponse
from wsgiref.util import FileWrapper
from docxtpl import DocxTemplate
from multiprocessing import managers
from tkinter.messagebox import NO
from urllib import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserAccountsSerializers, FormSerializers
from .models import UserAccount, Form
from django.http import FileResponse, HttpResponse

@api_view(['GET'])
def getData(request):
    persons = {'name':'Armughan Ahmad','email':"armughan@gmail.com"}
    users = UserAccount.objects.all()
    serializer = UserAccountsSerializers(users, many=True)

    return Response(serializer.data,200)

@api_view(['POST'])
def insertData(request):
    return Response(request.data)

@api_view(['POST'])
def insertFormData(request):
    serializer = FormSerializers(data=request.data, many=False)
    if serializer.is_valid():
        old_form = Form.objects.filter(form_type = request.data['form_type'],client_id = request.data['client_id']).first()
        serializer1 = FormSerializers(old_form, many=False)
        # return Response({"data":serializer1.data, "length": len(serializer1.data['client_id'])})
        if len(serializer1.data['client_id']) == 0:
            serializer.create(serializer.validated_data)
            latest = Form.objects.latest('id')
            serializer2 = FormSerializers(latest, many=False)
            return Response({"message": "Data is inserted","id":serializer2.data['id'],"code":200,},200)
        # else :
        #     serializer.update(instance=serializer1.data['id'] , validated_data=serializer.validated_data)
        #     return Response({'message': "Form Already Exists","code": "201", "form_id" : serializer1.data['id']},201)
    return Response({"message": "Error 404","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def viewFormData(request):
    form = Form.objects.get(id=request.data['form_id'])
    serializer = FormSerializers(form, many=False)
    # if serializer.is_valid():
    return Response({"message": "Found","code":200,"Data": serializer.data},200)
    # else:
    #     return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['POST'])
def updateFormData(request):
    form = Form.objects.get(id=request.data['form_id'])
    serializer = FormSerializers(instance=form, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Found","code":200,"Data": serializer.data},200)
    else:
        return Response({"message": "Error 404, Not found","code":404,"Errors": serializer.errors},404)

@api_view(['DELETE'])
def deleteFormData(request):
    form = Form.objects.get(id=request.data['form_id'])
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




# Create your views here.
