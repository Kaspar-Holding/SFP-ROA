from rest_framework.response import Response
from rest_framework.decorators import api_view
from django_pdfkit import PDFView
from django.core.files.base import ContentFile
import uuid
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.template.loader import get_template
import pdfkit
from xhtml2pdf import pisa
from django.template.loader import render_to_string

@api_view(['GET'])
def pdf(request):
    data = {
        'RF_Overall_Risk': "Undetermined",
        'RF_BU_Risk' : "2",
        'RF_Date' : "",
        'RF_ClientName' : "",
        'RF_CompleteByName' : "",
        'RF_CompleteByName' : "",
        'RF_EventID' : "",
        'RF_CompleteByRole' : "",
        'RF_AdjustedRisk' : "",
        'RF_GCO_Risk' : "",
        'RF_Approvals' : "",
        'RF_ClientType' : "1",
        'RF_Occupation' : "1",
        'RF_CountryOfBirth' : "0",
        'RF_CountryOfResidence' : "0",
        'RF_Nationality' : "0",
        'RF_Different_Nationality' : "0",
        'RF_CountryOfTax' : "0",
        'RF_Industry' : "0",
        'RF_SourceOfFunds' : "0",
        'RF_RelationshipToClient' : "0",
        'RF_CountryOfRegistration' : "0",
        'RF_CountryOfOperation' : "0",
        'RF_Type_Legal_Entity' : "0",
        'RF_Industry' : "0",
        'RF_SourceOfFunds' : "0",
        'RF_Client_Relationship' : "0",
        'RF_Product_Name' : "0",
        'RF_Transaction_Flow' : "0",
        'RF_Transaction_Method' : "0",
        'RF_Transaction_Reason' : "0",
        'RF_High_Transaction_Reason' : "0",
        'RF_Transaction_Frequency' : "0",
        'RF_Transaction_Value' : "0",
        'RF_Currency_Value' : "0",
        'RF_Transaction_Geography' : "0",
        'RF_Funds_Jurisdiction' : "0",
        'RF_Delivery_Channel' : "0",
        'RF_Linked_Party_Acting' : "0",
        'RF_Linked_Party_Paying' : "0",
        'RF_Client_Match' : "0",
        'RF_Client_Beneficiaries' : "0",
        'RF_Adjust_Risk1' : "2",
        'RF_Name' : "",
        'RF_ID' : "",
        'RF_Linked_Party' : "0",
        'RF_RCA' : "0",
        'RF_Birth_Country' : "0",
        'RF_Residence_Country' : "0",
        'RF_Nationality1' : "0",
        'RF_Control1' : "",
        'RF_Control2' : "",
        'RF_Control3' : "",
        'RF_Another_Control1' : "0",
        'RF_Another_Control2' : "0",

    
      
    }
    template_path = 'risk.html'
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="Report.pdf"'
    html = render_to_string(template_path, data)
    pisaStatus = pisa.CreatePDF(html, dest=response)


    return response 


@api_view(['GET'])
def pdfkitapi(request):
    data = {
        'RF_Overall_Risk': "Undetermined",
        'RF_BU_Risk' : "2",
        'RF_Date' : "",
        'RF_ClientName' : "",
        'RF_CompleteByName' : "",
        'RF_CompleteByName' : "",
        'RF_EventID' : "",
        'RF_CompleteByRole' : "",
        'RF_AdjustedRisk' : "",
        'RF_GCO_Risk' : "",
        'RF_Approvals' : "",
        'RF_ClientType' : "1",
        'RF_Occupation' : "1",
        'RF_CountryOfBirth' : "0",
        'RF_CountryOfResidence' : "0",
        'RF_Nationality' : "0",
        'RF_Different_Nationality' : "0",
        'RF_CountryOfTax' : "0",
        'RF_Industry' : "0",
        'RF_SourceOfFunds' : "0",
        'RF_RelationshipToClient' : "0",
        'RF_CountryOfRegistration' : "0",
        'RF_CountryOfOperation' : "0",
        'RF_Type_Legal_Entity' : "0",
        'RF_Industry' : "0",
        'RF_SourceOfFunds' : "0",
        'RF_Client_Relationship' : "0",
        'RF_Product_Name' : "0",
        'RF_Transaction_Flow' : "0",
        'RF_Transaction_Method' : "0",
        'RF_Transaction_Reason' : "0",
        'RF_High_Transaction_Reason' : "0",
        'RF_Transaction_Frequency' : "0",
        'RF_Transaction_Value' : "0",
        'RF_Currency_Value' : "0",
        'RF_Transaction_Geography' : "0",
        'RF_Funds_Jurisdiction' : "0",
        'RF_Delivery_Channel' : "0",
        'RF_Linked_Party_Acting' : "0",
        'RF_Linked_Party_Paying' : "0",
        'RF_Client_Match' : "0",
        'RF_Client_Beneficiaries' : "0",
        'RF_Adjust_Risk1' : "2",
        'RF_Name' : "",
        'RF_ID' : "",
        'RF_Linked_Party' : "0",
        'RF_RCA' : "0",
        'RF_Birth_Country' : "0",
        'RF_Residence_Country' : "0",
        'RF_Nationality1' : "0",
        'RF_Control1' : "",
        'RF_Control2' : "",
        'RF_Control3' : "",
        'RF_Another_Control1' : "0",
        'RF_Another_Control2' : "0",

    
      
    }
    template = get_template('risk.html')
    html = template.render(data)
    options = {
        'page-size': 'Letter',
        'encoding': "UTF-8",
        "enable-local-file-access": True

    }
    pdf = pdfkit.from_string(html, False, options)
    response = HttpResponse(pdf, content_type='application/pdf')
    response['Content-Disposition'] = 'attachment;'
    filename="pperson_list_pdf.pdf"
    return response 
