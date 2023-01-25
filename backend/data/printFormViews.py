from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import AssuranceInvestmentSerializers, AssuranceRiskSerializers, EmployeeBenefitsSerializers, FiduciarySerializers, GapCoverSerializers, InvestmentPlanningSerializers, RiskPlanningSerializers, ShortTermInsuranceCommericalSerializers, ShortTermInsurancePersonalSerializers, UserAccountsSerializers, FormSerializers
from .models import AssuranceInvestment, AssuranceRisk, EmployeeBenefits, Fiduciary, GapCover, InvestmentPlanning, RiskPlanning, ShortTermInsuranceCommerical, ShortTermInsurancePersonal, UserAccount, Form
from django.http import HttpResponse
from django.core.paginator import Paginator
from django.db.models import Q
from wkhtmltopdf.views import PDFTemplateView, PDFTemplateResponse
from django.template import loader
import uuid

@api_view(['GET'])
def pdfForm(request):
    template = loader.get_template('printedForm.html')
    context = {
        "logo":'logo.png',
    }
    
    # response =  PDFTemplateResponse(request=request, template=template,context=context)
    # filename = "PDF of %s.pdf" %(str(uuid.uuid4()))
    # with open("data/static/printedForm/%s"%(filename), "wb") as f:
    #     f.write(response.rendered_content)
    # return Response({"file":"static/printedForm/%s"%(filename)})
    return  PDFTemplateResponse(request=request, template=template,context=context,cmd_options={'page-size':'A4','enable-javascript':True,'header-spacing':10})

    