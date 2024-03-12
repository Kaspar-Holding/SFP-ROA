import os
from rest_framework.response import Response
from rest_framework.decorators import api_view, APIView
import tempfile
from django_pdfkit import PDFView
from django.core.files.base import ContentFile
import uuid
from data.models import Disclosures, RF_Scores, user_profile, DisclosuresProducts, DisclosuresAdvisorSubCodes
from data.models import STIC_Sec_Fire, STIC_Sec_2, STIC_Sec_3, STIC_Sec_4, STIC_Sec_5, STIC_Sec_6, STIC_Sec_7, STIC_Sec_8, STIC_Sec_9, STIC_Sec_10, STIC_Sec_11, STIC_Sec_12, STIC_Sec_13, STIC_Sec_14, STIC_Sec_15, STIC_Sec_16, STIC_Sec_17, STIC_Sec_18, STIC_Sec_19, STIC_Sec_20, STIC_Sec_21 
from data.models import STIP_Loss, STIC_Loss, EB_Cover, IP_ProductTaken, AR_ProductTaken, AI_ProductTaken, RP_ProductTaken, RF_LinkedParty, RiskFactors, Form, UserAccount, AssuranceRisk, RiskPlanning, GapCover, Medical, Fiduciary, InvestmentPlanning, EmployeeBenefits, ShortTermInsuranceCommerical, ShortTermInsurancePersonal, AssuranceInvestment
from data.models import STIP_Sec_HC, STIP_Sec_Build, STIP_Sec_AddProp, STIP_Sec_PersonalLL, STIP_Sec_LegalA, STIP_Sec_MotorC, STIP_Sec_Trailer, STIP_Sec_Vehicle, STIP_Sec_WaterC
from django.shortcuts import render, redirect, get_object_or_404
from data.models import Risk_DC_Others, Risk_DiC_Others, Risk_DrC_Others, AR_BnS_Others, AR_KeyP_Others, AR_SureNLia_Others, AR_BusOvProt_Others, AR_CLARedm_Others, AR_DLARedm_Others, AI_Others

from dateutil.relativedelta import relativedelta
import pytz
from django.http import HttpResponse
from django.template.loader import get_template
import pdfkit
from xhtml2pdf import pisa
from wkhtmltopdf.views import PDFTemplateView, PDFTemplateResponse
from django.template.loader import render_to_string
from datetime import datetime
from dateutil import parser as datetimeparser
@api_view(['GET'])
def pdf(request):
    data = RiskFactors.objects.filter(id=26).values().first()
    data['RF_Date'] = data['RF_Date'].strftime("%d %B %Y")
    template_path = 'risk.html'
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="Report.pdf"'
    html = render_to_string(template_path, data)
    pisaStatus = pisa.CreatePDF(html, dest=response)


    return response 



@api_view(['GET'])
def pdfkitapi(request):
    data = RiskFactors.objects.filter(id=26).values().first()
    template = get_template('risk.html')
    html = template.render(data)
    options = {
        'page-size': 'Letter',
        'encoding': "UTF-8",
        "enable-local-file-access": True

    }
    pdf = pdfkit.from_url("https://www.godaddy.com/", False, options)
    response = HttpResponse(pdf, content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="pperson_list_pdf.pdf"'
    return HttpResponse("Generated") 

@api_view(['POST'])
def wkhtmltopdfapi(request):
    data = RiskFactors.objects.filter(id=request.data['formId'])
    if data.exists():
        data = data.values().first()
        data['RF_Date'] = data['RF_Date'].strftime("%d %B %Y")
        data['dra_status'] = request.data['dra_status']
        data['roa_status'] = False
        data['rp_status'] = False
        data['ip_status'] = False
        data['BA_Risk_status'] = False
        data['BA_Investment_status'] = False
        data['EB_status'] = False
        data['STIC_status'] = False
        data['STIP_status'] = False
        data['Fiduciary_status'] = False
        data['MD_status'] = False
        data['GP_status'] = False
        if data['dra_status']:
            val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11 = 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0
            if data['RF_Occupation'] == "1" or data['RF_Occupation'] == "2" or data['RF_Occupation'] == "3" or data['RF_Occupation'] == "5":
                val1 = 1
            if data['RF_Occupation'] == "4" or data['RF_Occupation'] == "6":
                val1 = 3
            if (
                data['RF_CountryOfBirth'] == "1" or data['RF_CountryOfBirth'] == "2" or data['RF_CountryOfBirth'] == "3" or data['RF_CountryOfBirth'] == "4" or data['RF_CountryOfBirth'] == "6" or data['RF_CountryOfBirth'] == "8" or data['RF_CountryOfBirth'] == "10" or data['RF_CountryOfBirth'] == "13" or data['RF_CountryOfBirth'] == "16" or data['RF_CountryOfBirth'] == "17" or data['RF_CountryOfBirth'] == "19" or data['RF_CountryOfBirth'] == "20" or data['RF_CountryOfBirth'] == "24"
                or data['RF_CountryOfBirth'] == "27" or data['RF_CountryOfBirth'] == "28" or data['RF_CountryOfBirth'] == "29" or data['RF_CountryOfBirth'] == "30" or data['RF_CountryOfBirth'] == "31" or data['RF_CountryOfBirth'] == "32" or data['RF_CountryOfBirth'] == "33" or data['RF_CountryOfBirth'] == "36" or data['RF_CountryOfBirth'] == "37" or data['RF_CountryOfBirth'] == "39" or data['RF_CountryOfBirth'] == "41" or data['RF_CountryOfBirth'] == "42" or data['RF_CountryOfBirth'] == "43"
                or data['RF_CountryOfBirth'] == "46" or data['RF_CountryOfBirth'] == "47" or data['RF_CountryOfBirth'] == "48" or data['RF_CountryOfBirth'] == "49" or data['RF_CountryOfBirth'] == "50" or data['RF_CountryOfBirth'] == "51" or data['RF_CountryOfBirth'] == "52" or data['RF_CountryOfBirth'] == "53" or data['RF_CountryOfBirth'] == "55" or data['RF_CountryOfBirth'] == "58" or data['RF_CountryOfBirth'] == "62" or data['RF_CountryOfBirth'] == "64" or data['RF_CountryOfBirth'] == "65" or data['RF_CountryOfBirth'] == "66" 
                or data['RF_CountryOfBirth'] == "67" or data['RF_CountryOfBirth'] == "68" or data['RF_CountryOfBirth'] == "69" or data['RF_CountryOfBirth'] == "70" or data['RF_CountryOfBirth'] == "71" or data['RF_CountryOfBirth'] == "72" or data['RF_CountryOfBirth'] == "73" or data['RF_CountryOfBirth'] == "74" or data['RF_CountryOfBirth'] == "82" or data['RF_CountryOfBirth'] == "85" or data['RF_CountryOfBirth'] == "86" or data['RF_CountryOfBirth'] == "90" or data['RF_CountryOfBirth'] == "91" or data['RF_CountryOfBirth'] == "92" or data['RF_CountryOfBirth'] == "93"
                or data['RF_CountryOfBirth'] == "94" or data['RF_CountryOfBirth'] == "95" or data['RF_CountryOfBirth'] == "96" or data['RF_CountryOfBirth'] == "97" or data['RF_CountryOfBirth'] == "98" or data['RF_CountryOfBirth'] == "99" or data['RF_CountryOfBirth'] == "100" or data['RF_CountryOfBirth'] == "102" or data['RF_CountryOfBirth'] == "103"

                or data['RF_CountryOfBirth'] == "109"  or data['RF_CountryOfBirth'] == "112"  or data['RF_CountryOfBirth'] == "115"  or data['RF_CountryOfBirth'] == "116"  or data['RF_CountryOfBirth'] == "117"  or data['RF_CountryOfBirth'] == "121"  or data['RF_CountryOfBirth'] == "123"  or data['RF_CountryOfBirth'] == "124"
                or data['RF_CountryOfBirth'] == "126"  or data['RF_CountryOfBirth'] == "127"  or data['RF_CountryOfBirth'] == "128"  or data['RF_CountryOfBirth'] == "129"  or data['RF_CountryOfBirth'] == "134"  or data['RF_CountryOfBirth'] == "135"  or data['RF_CountryOfBirth'] == "136"
                or data['RF_CountryOfBirth'] == "139"  or data['RF_CountryOfBirth'] == "143"  or data['RF_CountryOfBirth'] == "145"  or data['RF_CountryOfBirth'] == "146"  or data['RF_CountryOfBirth'] == "148"  or data['RF_CountryOfBirth'] == "150" or data['RF_CountryOfBirth'] == "151"
                or data['RF_CountryOfBirth'] == "152" or data['RF_CountryOfBirth'] == "153" or data['RF_CountryOfBirth'] == "154" or data['RF_CountryOfBirth'] == "155" or data['RF_CountryOfBirth'] == "158" or data['RF_CountryOfBirth'] == "160" or data['RF_CountryOfBirth'] == "162" 
                or data['RF_CountryOfBirth'] == "163" or data['RF_CountryOfBirth'] == "164" or data['RF_CountryOfBirth'] == "165" or data['RF_CountryOfBirth'] == "166" or data['RF_CountryOfBirth'] == "168" or data['RF_CountryOfBirth'] == "170" or data['RF_CountryOfBirth'] == "172" or data['RF_CountryOfBirth'] == "173" or data['RF_CountryOfBirth'] == "174" or data['RF_CountryOfBirth'] == "175" or data['RF_CountryOfBirth'] == "176" or data['RF_CountryOfBirth'] == "177"
                or data['RF_CountryOfBirth'] == "186" or data['RF_CountryOfBirth'] == "187" or data['RF_CountryOfBirth'] == "188" or data['RF_CountryOfBirth'] == "190" or data['RF_CountryOfBirth'] == "191" or data['RF_CountryOfBirth'] == "193" or data['RF_CountryOfBirth'] == "195"
                or data['RF_CountryOfBirth'] == "197" or data['RF_CountryOfBirth'] == "198" or data['RF_CountryOfBirth'] == "200" or data['RF_CountryOfBirth'] == "202" or data['RF_CountryOfBirth'] == "203" or data['RF_CountryOfBirth'] == "206" or data['RF_CountryOfBirth'] == "208" or data['RF_CountryOfBirth'] == "209"
                or data['RF_CountryOfBirth'] == "211" or data['RF_CountryOfBirth'] == "212" or data['RF_CountryOfBirth'] == "213" or data['RF_CountryOfBirth'] == "214" or data['RF_CountryOfBirth'] == "219" or data['RF_CountryOfBirth'] == "220" or data['RF_CountryOfBirth'] == "221" or data['RF_CountryOfBirth'] == "222" or data['RF_CountryOfBirth'] == "223" or data['RF_CountryOfBirth'] == "224"
                or data['RF_CountryOfBirth'] == "226"  or data['RF_CountryOfBirth'] == "169" or data['RF_CountryOfBirth'] == "230" or data['RF_CountryOfBirth'] == "232" or data['RF_CountryOfBirth'] == "233" or data['RF_CountryOfBirth'] == "236" or data['RF_CountryOfBirth'] == "237" or data['RF_CountryOfBirth'] == "238" or data['RF_CountryOfBirth'] == "239"
            ):
                val2 = 9
            if(
                data['RF_CountryOfBirth'] == "5" or data['RF_CountryOfBirth'] == "7" or data['RF_CountryOfBirth'] == "9" or data['RF_CountryOfBirth'] == "12" or data['RF_CountryOfBirth'] == "25" or data['RF_CountryOfBirth'] == "34" or data['RF_CountryOfBirth'] == "35" or data['RF_CountryOfBirth'] == "61" or data['RF_CountryOfBirth'] == "76" or data['RF_CountryOfBirth'] == "84" or data['RF_CountryOfBirth'] == "88"
                or data['RF_CountryOfBirth'] == "114" or data['RF_CountryOfBirth'] == "130" or data['RF_CountryOfBirth'] == "132" or data['RF_CountryOfBirth'] == "142" or data['RF_CountryOfBirth'] == "149" or data['RF_CountryOfBirth'] == "159" or data['RF_CountryOfBirth'] == "161" 
                or data['RF_CountryOfBirth'] == "167" or data['RF_CountryOfBirth'] == "194" or data['RF_CountryOfBirth'] == "215" or data['RF_CountryOfBirth'] == "216"
            ):
                val2=3
            if(data['RF_CountryOfBirth'] == "11" or data['RF_CountryOfBirth'] == "14" or data['RF_CountryOfBirth'] == "15" or data['RF_CountryOfBirth'] == "18" or data['RF_CountryOfBirth'] == "22" or data['RF_CountryOfBirth'] == "23" or data['RF_CountryOfBirth'] == "26" or data['RF_CountryOfBirth'] == "30" or data['RF_CountryOfBirth'] == "38" or data['RF_CountryOfBirth'] == "40"
                or data['RF_CountryOfBirth'] == "44" or data['RF_CountryOfBirth'] == "45" or data['RF_CountryOfBirth'] == "54" or data['RF_CountryOfBirth'] == "56" or data['RF_CountryOfBirth'] == "59" or data['RF_CountryOfBirth'] == "60" or data['RF_CountryOfBirth'] == "63" or data['RF_CountryOfBirth'] == "70" or data['RF_CountryOfBirth'] == "75" or data['RF_CountryOfBirth'] == "77" 
                or data['RF_CountryOfBirth'] == "78" or data['RF_CountryOfBirth'] == "79" or data['RF_CountryOfBirth'] == "80" or data['RF_CountryOfBirth'] == "81" or data['RF_CountryOfBirth'] == "83" or data['RF_CountryOfBirth'] == "87" or data['RF_CountryOfBirth'] == "89" or data['RF_CountryOfBirth'] == "96" or data['RF_CountryOfBirth'] == "97" or data['RF_CountryOfBirth'] == "98" 
                or data['RF_CountryOfBirth'] == "99" or data['RF_CountryOfBirth'] == "100" or data['RF_CountryOfBirth'] == "101" or data['RF_CountryOfBirth'] == "102" or data['RF_CountryOfBirth'] == "104" or data['RF_CountryOfBirth'] == "105"
                or data['RF_CountryOfBirth'] == "108" or data['RF_CountryOfBirth'] == "110" or data['RF_CountryOfBirth'] == "111" or data['RF_CountryOfBirth'] == "113" or data['RF_CountryOfBirth'] == "118" or data['RF_CountryOfBirth'] == "120" or data['RF_CountryOfBirth'] == "125"
                or data['RF_CountryOfBirth'] == "131" or data['RF_CountryOfBirth'] == "133" or  data['RF_CountryOfBirth'] == "137" or data['RF_CountryOfBirth'] == "138" or data['RF_CountryOfBirth'] == "140" or data['RF_CountryOfBirth'] == "141"
                or data['RF_CountryOfBirth'] == "144" or data['RF_CountryOfBirth'] == "147" or data['RF_CountryOfBirth'] == "156" or data['RF_CountryOfBirth'] == "157" or data['RF_CountryOfBirth'] == "171" or data['RF_CountryOfBirth'] == "178" or data['RF_CountryOfBirth'] == "179" or data['RF_CountryOfBirth'] == "180" or data['RF_CountryOfBirth'] == "181" or data['RF_CountryOfBirth'] == "182" or data['RF_CountryOfBirth'] == "183"
                or data['RF_CountryOfBirth'] == "185" or data['RF_CountryOfBirth'] == "189" or data['RF_CountryOfBirth'] == "192" or data['RF_CountryOfBirth'] == "196" or data['RF_CountryOfBirth'] == "199" or data['RF_CountryOfBirth'] == "201" or data['RF_CountryOfBirth'] == "204" or data['RF_CountryOfBirth'] == "205"
                or data['RF_CountryOfBirth'] == "207" or data['RF_CountryOfBirth'] == "210" or data['RF_CountryOfBirth'] == "218" or data['RF_CountryOfBirth'] == "225" or data['RF_CountryOfBirth'] == "231" or data['RF_CountryOfBirth'] == "234" or data['RF_CountryOfBirth'] == "235" or data['RF_CountryOfBirth'] == "237" or data['RF_CountryOfBirth'] == "238"
            ):
                val2=6
            if(data['RF_CountryOfBirth'] == "21" or data['RF_CountryOfBirth'] == "57" or data['RF_CountryOfBirth'] == "106" or data['RF_CountryOfBirth'] == "107" or data['RF_CountryOfBirth'] == "119" or data['RF_CountryOfBirth'] == "187" or data['RF_CountryOfBirth'] == "217"):
                val2=12
            if(
                int(data['RF_CountryOfResidence']) == 1 or int(data['RF_CountryOfResidence']) == 2 or int(data['RF_CountryOfResidence']) == 3 or int(data['RF_CountryOfResidence']) == 4 or int(data['RF_CountryOfResidence']) == 6 or int(data['RF_CountryOfResidence']) == 8 or int(data['RF_CountryOfResidence']) == 10 or int(data['RF_CountryOfResidence']) == 13 or int(data['RF_CountryOfResidence']) == 16 or int(data['RF_CountryOfResidence']) == 17 or int(data['RF_CountryOfResidence']) == 19 or int(data['RF_CountryOfResidence']) == 20 or int(data['RF_CountryOfResidence']) == 24
                or int(data['RF_CountryOfResidence']) == 27 or int(data['RF_CountryOfResidence']) == 28 or int(data['RF_CountryOfResidence']) == 29 or int(data['RF_CountryOfResidence']) == 30 or int(data['RF_CountryOfResidence']) == 31 or int(data['RF_CountryOfResidence']) == 32 or int(data['RF_CountryOfResidence']) == 33 or int(data['RF_CountryOfResidence']) == 36 or int(data['RF_CountryOfResidence']) == 37 or int(data['RF_CountryOfResidence']) == 39 or int(data['RF_CountryOfResidence']) == 41 or int(data['RF_CountryOfResidence']) == 42 or int(data['RF_CountryOfResidence']) == 43
                or int(data['RF_CountryOfResidence']) == 46 or int(data['RF_CountryOfResidence']) == 47 or int(data['RF_CountryOfResidence']) == 48 or int(data['RF_CountryOfResidence']) == 49 or int(data['RF_CountryOfResidence']) == 50 or int(data['RF_CountryOfResidence']) == 51 or int(data['RF_CountryOfResidence']) == 52 or int(data['RF_CountryOfResidence']) == 53 or int(data['RF_CountryOfResidence']) == 55 or int(data['RF_CountryOfResidence']) == 58 or int(data['RF_CountryOfResidence']) == 62 or int(data['RF_CountryOfResidence']) == 64 or int(data['RF_CountryOfResidence']) == 65 or int(data['RF_CountryOfResidence']) == 66 
                or int(data['RF_CountryOfResidence']) == 67 or int(data['RF_CountryOfResidence']) == 68 or int(data['RF_CountryOfResidence']) == 69 or int(data['RF_CountryOfResidence']) == 70 or int(data['RF_CountryOfResidence']) == 71 or int(data['RF_CountryOfResidence']) == 72 or int(data['RF_CountryOfResidence']) == 73 or int(data['RF_CountryOfResidence']) == 74 or int(data['RF_CountryOfResidence']) == 82 or int(data['RF_CountryOfResidence']) == 85 or int(data['RF_CountryOfResidence']) == 86 or int(data['RF_CountryOfResidence']) == 90 or int(data['RF_CountryOfResidence']) == 91 or int(data['RF_CountryOfResidence']) == 92 or int(data['RF_CountryOfResidence']) == 93
                or int(data['RF_CountryOfResidence']) == 94 or int(data['RF_CountryOfResidence']) == 95 or int(data['RF_CountryOfResidence']) == 96 or int(data['RF_CountryOfResidence']) == 97 or int(data['RF_CountryOfResidence']) == 98 or int(data['RF_CountryOfResidence']) == 99 or int(data['RF_CountryOfResidence']) == 100 or int(data['RF_CountryOfResidence']) == 102 or int(data['RF_CountryOfResidence']) == 103
                
                or int(data['RF_CountryOfResidence']) == 109  or int(data['RF_CountryOfResidence']) == 112  or int(data['RF_CountryOfResidence']) == 115  or int(data['RF_CountryOfResidence']) == 116  or int(data['RF_CountryOfResidence']) == 117  or int(data['RF_CountryOfResidence']) == 121  or int(data['RF_CountryOfResidence']) == 123  or int(data['RF_CountryOfResidence']) == 124
                or int(data['RF_CountryOfResidence']) == 126  or int(data['RF_CountryOfResidence']) == 127  or int(data['RF_CountryOfResidence']) == 128  or int(data['RF_CountryOfResidence']) == 129  or int(data['RF_CountryOfResidence']) == 134  or int(data['RF_CountryOfResidence']) == 135  or int(data['RF_CountryOfResidence']) == 136
                or int(data['RF_CountryOfResidence']) == 139  or int(data['RF_CountryOfResidence']) == 143  or int(data['RF_CountryOfResidence']) == 145  or int(data['RF_CountryOfResidence']) == 146  or int(data['RF_CountryOfResidence']) == 148  or int(data['RF_CountryOfResidence']) == 150 or int(data['RF_CountryOfResidence']) == 151
                or int(data['RF_CountryOfResidence']) == 152 or int(data['RF_CountryOfResidence']) == 153 or int(data['RF_CountryOfResidence']) == 154 or int(data['RF_CountryOfResidence']) == 155 or int(data['RF_CountryOfResidence']) == 158 or int(data['RF_CountryOfResidence']) == 160 or int(data['RF_CountryOfResidence']) == 162 
                or int(data['RF_CountryOfResidence']) == 163 or int(data['RF_CountryOfResidence']) == 164 or int(data['RF_CountryOfResidence']) == 165 or int(data['RF_CountryOfResidence']) == 166 or int(data['RF_CountryOfResidence']) == 168 or int(data['RF_CountryOfResidence']) == 170 or int(data['RF_CountryOfResidence']) == 172 or int(data['RF_CountryOfResidence']) == 173 or int(data['RF_CountryOfResidence']) == 174 or int(data['RF_CountryOfResidence']) == 175 or int(data['RF_CountryOfResidence']) == 176 or int(data['RF_CountryOfResidence']) == 177
                or int(data['RF_CountryOfResidence']) == 186 or int(data['RF_CountryOfResidence']) == 187 or int(data['RF_CountryOfResidence']) == 188 or int(data['RF_CountryOfResidence']) == 190 or int(data['RF_CountryOfResidence']) == 191 or int(data['RF_CountryOfResidence']) == 193 or int(data['RF_CountryOfResidence']) == 195
                or int(data['RF_CountryOfResidence']) == 197 or int(data['RF_CountryOfResidence']) == 198 or int(data['RF_CountryOfResidence']) == 200 or int(data['RF_CountryOfResidence']) == 202 or int(data['RF_CountryOfResidence']) == 203 or int(data['RF_CountryOfResidence']) == 206 or int(data['RF_CountryOfResidence']) == 208 or int(data['RF_CountryOfResidence']) == 209
                or int(data['RF_CountryOfResidence']) == 211 or int(data['RF_CountryOfResidence']) == 212 or int(data['RF_CountryOfResidence']) == 213 or int(data['RF_CountryOfResidence']) == 214 or int(data['RF_CountryOfResidence']) == 219 or int(data['RF_CountryOfResidence']) == 220 or int(data['RF_CountryOfResidence']) == 221 or int(data['RF_CountryOfResidence']) == 222 or int(data['RF_CountryOfResidence']) == 223 or int(data['RF_CountryOfResidence']) == 224
                or int(data['RF_CountryOfResidence']) == 226 or int(data['RF_CountryOfResidence']) == 230 or int(data['RF_CountryOfResidence']) == 232 or int(data['RF_CountryOfResidence']) == 233 or int(data['RF_CountryOfResidence']) == 236 or int(data['RF_CountryOfResidence']) == 237 or int(data['RF_CountryOfResidence']) == 238 or int(data['RF_CountryOfResidence']) == 239
            ):
                val3=9
            if(
                int(data['RF_CountryOfResidence']) == 5 or int(data['RF_CountryOfResidence']) == 7 or int(data['RF_CountryOfResidence']) == 9 or int(data['RF_CountryOfResidence']) == 12 or int(data['RF_CountryOfResidence']) == 25 or int(data['RF_CountryOfResidence']) == 34 or int(data['RF_CountryOfResidence']) == 35 or int(data['RF_CountryOfResidence']) == 61 or int(data['RF_CountryOfResidence']) == 76 or int(data['RF_CountryOfResidence']) == 84or int(data['RF_CountryOfResidence']) == 88
                or int(data['RF_CountryOfResidence']) == 114 or int(data['RF_CountryOfResidence']) == 130 or int(data['RF_CountryOfResidence']) == 132 or int(data['RF_CountryOfResidence']) == 142 or int(data['RF_CountryOfResidence']) == 149 or int(data['RF_CountryOfResidence']) == 159 or int(data['RF_CountryOfResidence']) == 161 
                or int(data['RF_CountryOfResidence']) == 167 or int(data['RF_CountryOfResidence']) == 194 or int(data['RF_CountryOfResidence']) == 215 or int(data['RF_CountryOfResidence']) == 216
            ):
                val3=3
            if(
                int(data['RF_CountryOfResidence']) == 11 or int(data['RF_CountryOfResidence']) == 14 or int(data['RF_CountryOfResidence']) == 15 or int(data['RF_CountryOfResidence']) == 18 or int(data['RF_CountryOfResidence']) == 22 or int(data['RF_CountryOfResidence']) == 23 or int(data['RF_CountryOfResidence']) == 26 or int(data['RF_CountryOfResidence']) == 30 or int(data['RF_CountryOfResidence']) == 38 or int(data['RF_CountryOfResidence']) == 40
                or int(data['RF_CountryOfResidence']) == 44 or int(data['RF_CountryOfResidence']) == 45 or int(data['RF_CountryOfResidence']) == 54 or int(data['RF_CountryOfResidence']) == 56 or int(data['RF_CountryOfResidence']) == 59 or int(data['RF_CountryOfResidence']) == 60 or int(data['RF_CountryOfResidence']) == 63 or int(data['RF_CountryOfResidence']) == 70 or int(data['RF_CountryOfResidence']) == 75 or int(data['RF_CountryOfResidence']) == 77 
                or int(data['RF_CountryOfResidence']) == 78 or int(data['RF_CountryOfResidence']) == 79 or int(data['RF_CountryOfResidence']) == 80 or int(data['RF_CountryOfResidence']) == 81 or int(data['RF_CountryOfResidence']) == 83 or int(data['RF_CountryOfResidence']) == 87 or int(data['RF_CountryOfResidence']) == 89 or int(data['RF_CountryOfResidence']) == 96 or int(data['RF_CountryOfResidence']) == 97 or int(data['RF_CountryOfResidence']) == 98 
                or int(data['RF_CountryOfResidence']) == 99 or int(data['RF_CountryOfResidence']) == 100 or int(data['RF_CountryOfResidence']) == 101 or int(data['RF_CountryOfResidence']) == 102 or int(data['RF_CountryOfResidence']) == 104 or int(data['RF_CountryOfResidence']) == 105
                
                or int(data['RF_CountryOfResidence']) == 108 or int(data['RF_CountryOfResidence']) == 110 or int(data['RF_CountryOfResidence']) == 111 or int(data['RF_CountryOfResidence']) == 113 or int(data['RF_CountryOfResidence']) == 118 or int(data['RF_CountryOfResidence']) == 120 or int(data['RF_CountryOfResidence']) == 125
                or int(data['RF_CountryOfResidence']) == 131 or int(data['RF_CountryOfResidence']) == 133 or  int(data['RF_CountryOfResidence']) == 137 or int(data['RF_CountryOfResidence']) == 138 or int(data['RF_CountryOfResidence']) == 140 or int(data['RF_CountryOfResidence']) == 141
                or int(data['RF_CountryOfResidence']) == 144 or int(data['RF_CountryOfResidence']) == 147 or int(data['RF_CountryOfResidence']) == 156 or int(data['RF_CountryOfResidence']) == 157 or int(data['RF_CountryOfResidence']) == 169 or int(data['RF_CountryOfResidence']) == 171 or int(data['RF_CountryOfResidence']) == 178 or int(data['RF_CountryOfResidence']) == 179 or int(data['RF_CountryOfResidence']) == 180 or int(data['RF_CountryOfResidence']) == 181 or int(data['RF_CountryOfResidence']) == 182 or int(data['RF_CountryOfResidence']) == 183
                or int(data['RF_CountryOfResidence']) == 185 or int(data['RF_CountryOfResidence']) == 189 or int(data['RF_CountryOfResidence']) == 192 or int(data['RF_CountryOfResidence']) == 196 or int(data['RF_CountryOfResidence']) == 199 or int(data['RF_CountryOfResidence']) == 201 or int(data['RF_CountryOfResidence']) == 204 or int(data['RF_CountryOfResidence']) == 205
                or int(data['RF_CountryOfResidence']) == 207 or int(data['RF_CountryOfResidence']) == 210 or int(data['RF_CountryOfResidence']) == 218 or int(data['RF_CountryOfResidence']) == 225 or int(data['RF_CountryOfResidence']) == 231 or int(data['RF_CountryOfResidence']) == 234 or int(data['RF_CountryOfResidence']) == 235 or int(data['RF_CountryOfResidence']) == 237 or int(data['RF_CountryOfResidence']) == 238
            ):
                val3=6
            if(int(data['RF_CountryOfResidence']) == 21 or int(data['RF_CountryOfResidence']) == 57 or int(data['RF_CountryOfResidence']) == 106 or int(data['RF_CountryOfResidence']) == 107 or int(data['RF_CountryOfResidence']) == 119 or int(data['RF_CountryOfResidence']) == 187 or int(data['RF_CountryOfResidence']) == 217):
                val3=12
            if(
                int(data['RF_Nationality']) == 1 or int(data['RF_Nationality']) == 2 or int(data['RF_Nationality']) == 3 or int(data['RF_Nationality']) == 4 or int(data['RF_Nationality']) == 6 or int(data['RF_Nationality']) == 8 or int(data['RF_Nationality']) == 10 or int(data['RF_Nationality']) == 13 or int(data['RF_Nationality']) == 16 or int(data['RF_Nationality']) == 17 or int(data['RF_Nationality']) == 19 or int(data['RF_Nationality']) == 20 or int(data['RF_Nationality']) == 24
                or int(data['RF_Nationality']) == 27 or int(data['RF_Nationality']) == 28 or int(data['RF_Nationality']) == 29 or int(data['RF_Nationality']) == 30 or int(data['RF_Nationality']) == 31 or int(data['RF_Nationality']) == 32 or int(data['RF_Nationality']) == 33 or int(data['RF_Nationality']) == 36 or int(data['RF_Nationality']) == 37 or int(data['RF_Nationality']) == 39 or int(data['RF_Nationality']) == 41 or int(data['RF_Nationality']) == 42 or int(data['RF_Nationality']) == 43
                or int(data['RF_Nationality']) == 46 or int(data['RF_Nationality']) == 47 or int(data['RF_Nationality']) == 48 or int(data['RF_Nationality']) == 49 or int(data['RF_Nationality']) == 50 or int(data['RF_Nationality']) == 51 or int(data['RF_Nationality']) == 52 or int(data['RF_Nationality']) == 53 or int(data['RF_Nationality']) == 55 or int(data['RF_Nationality']) == 58 or int(data['RF_Nationality']) == 62 or int(data['RF_Nationality']) == 64 or int(data['RF_Nationality']) == 65 or int(data['RF_Nationality']) == 66 
                or int(data['RF_Nationality']) == 67 or int(data['RF_Nationality']) == 68 or int(data['RF_Nationality']) == 69 or int(data['RF_Nationality']) == 70 or int(data['RF_Nationality']) == 71 or int(data['RF_Nationality']) == 72 or int(data['RF_Nationality']) == 73 or int(data['RF_Nationality']) == 74 or int(data['RF_Nationality']) == 82 or int(data['RF_Nationality']) == 85 or int(data['RF_Nationality']) == 86 or int(data['RF_Nationality']) == 90 or int(data['RF_Nationality']) == 91 or int(data['RF_Nationality']) == 92 or int(data['RF_Nationality']) == 93
                or int(data['RF_Nationality']) == 94 or int(data['RF_Nationality']) == 95 or int(data['RF_Nationality']) == 96 or int(data['RF_Nationality']) == 97 or int(data['RF_Nationality']) == 98 or int(data['RF_Nationality']) == 99 or int(data['RF_Nationality']) == 100 or int(data['RF_Nationality']) == 102 or int(data['RF_Nationality']) == 103

                or int(data['RF_Nationality']) == 109  or int(data['RF_Nationality']) == 112  or int(data['RF_Nationality']) == 115  or int(data['RF_Nationality']) == 116  or int(data['RF_Nationality']) == 117  or int(data['RF_Nationality']) == 121  or int(data['RF_Nationality']) == 123  or int(data['RF_Nationality']) == 124
                or int(data['RF_Nationality']) == 126  or int(data['RF_Nationality']) == 127  or int(data['RF_Nationality']) == 128  or int(data['RF_Nationality']) == 129  or int(data['RF_Nationality']) == 134  or int(data['RF_Nationality']) == 135  or int(data['RF_Nationality']) == 136
                or int(data['RF_Nationality']) == 139  or int(data['RF_Nationality']) == 143  or int(data['RF_Nationality']) == 145  or int(data['RF_Nationality']) == 146  or int(data['RF_Nationality']) == 148  or int(data['RF_Nationality']) == 150 or int(data['RF_Nationality']) == 151
                or int(data['RF_Nationality']) == 152 or int(data['RF_Nationality']) == 153 or int(data['RF_Nationality']) == 154 or int(data['RF_Nationality']) == 155 or int(data['RF_Nationality']) == 158 or int(data['RF_Nationality']) == 160 or int(data['RF_Nationality']) == 162 
                or int(data['RF_Nationality']) == 163 or int(data['RF_Nationality']) == 164 or int(data['RF_Nationality']) == 165 or int(data['RF_Nationality']) == 166 or int(data['RF_Nationality']) == 168 or int(data['RF_Nationality']) == 170 or int(data['RF_Nationality']) == 172 or int(data['RF_Nationality']) == 173 or int(data['RF_Nationality']) == 174 or int(data['RF_Nationality']) == 175 or int(data['RF_Nationality']) == 176 or int(data['RF_Nationality']) == 177
                or int(data['RF_Nationality']) == 186 or int(data['RF_Nationality']) == 187 or int(data['RF_Nationality']) == 188 or int(data['RF_Nationality']) == 190 or int(data['RF_Nationality']) == 191 or int(data['RF_Nationality']) == 193 or int(data['RF_Nationality']) == 195
                or int(data['RF_Nationality']) == 197 or int(data['RF_Nationality']) == 198 or int(data['RF_Nationality']) == 200 or int(data['RF_Nationality']) == 202 or int(data['RF_Nationality']) == 203 or int(data['RF_Nationality']) == 206 or int(data['RF_Nationality']) == 208 or int(data['RF_Nationality']) == 209
                or int(data['RF_Nationality']) == 211 or int(data['RF_Nationality']) == 212 or int(data['RF_Nationality']) == 213 or int(data['RF_Nationality']) == 214 or int(data['RF_Nationality']) == 219 or int(data['RF_Nationality']) == 220 or int(data['RF_Nationality']) == 221 or int(data['RF_Nationality']) == 222 or int(data['RF_Nationality']) == 223 or int(data['RF_Nationality']) == 224
                or int(data['RF_Nationality']) == 226 or int(data['RF_Nationality']) == 230 or int(data['RF_Nationality']) == 232 or int(data['RF_Nationality']) == 233 or int(data['RF_Nationality']) == 236 or int(data['RF_Nationality']) == 237 or int(data['RF_Nationality']) == 238 or int(data['RF_Nationality']) == 239
            ):
                val4=9
            if(
                int(data['RF_Nationality']) == 5 or int(data['RF_Nationality']) == 7 or int(data['RF_Nationality']) == 9 or int(data['RF_Nationality']) == 12 or int(data['RF_Nationality']) == 25 or int(data['RF_Nationality']) == 34 or int(data['RF_Nationality']) == 35 or int(data['RF_Nationality']) == 61 or int(data['RF_Nationality']) == 76 or int(data['RF_Nationality']) == 84or int(data['RF_Nationality']) == 88
                or int(data['RF_Nationality']) == 114 or int(data['RF_Nationality']) == 130 or int(data['RF_Nationality']) == 132 or int(data['RF_Nationality']) == 142 or int(data['RF_Nationality']) == 149 or int(data['RF_Nationality']) == 159 or int(data['RF_Nationality']) == 161 
                or int(data['RF_Nationality']) == 167 or int(data['RF_Nationality']) == 194 or int(data['RF_Nationality']) == 215 or int(data['RF_Nationality']) == 216
            ):
                val4=3
            if(int(data['RF_Nationality']) == 11 or int(data['RF_Nationality']) == 14 or int(data['RF_Nationality']) == 15 or int(data['RF_Nationality']) == 18 or int(data['RF_Nationality']) == 22 or int(data['RF_Nationality']) == 23 or int(data['RF_Nationality']) == 26 or int(data['RF_Nationality']) == 30 or int(data['RF_Nationality']) == 38 or int(data['RF_Nationality']) == 40
                or int(data['RF_Nationality']) == 44 or int(data['RF_Nationality']) == 45 or int(data['RF_Nationality']) == 54 or int(data['RF_Nationality']) == 56 or int(data['RF_Nationality']) == 59 or int(data['RF_Nationality']) == 60 or int(data['RF_Nationality']) == 63 or int(data['RF_Nationality']) == 70 or int(data['RF_Nationality']) == 75 or int(data['RF_Nationality']) == 77 
                or int(data['RF_Nationality']) == 78 or int(data['RF_Nationality']) == 79 or int(data['RF_Nationality']) == 80 or int(data['RF_Nationality']) == 81 or int(data['RF_Nationality']) == 83 or int(data['RF_Nationality']) == 87 or int(data['RF_Nationality']) == 89 or int(data['RF_Nationality']) == 96 or int(data['RF_Nationality']) == 97 or int(data['RF_Nationality']) == 98 
                or int(data['RF_Nationality']) == 99 or int(data['RF_Nationality']) == 100 or int(data['RF_Nationality']) == 101 or int(data['RF_Nationality']) == 102 or int(data['RF_Nationality']) == 104 or int(data['RF_Nationality']) == 105
                
                or int(data['RF_Nationality']) == 108 or int(data['RF_Nationality']) == 110 or int(data['RF_Nationality']) == 111 or int(data['RF_Nationality']) == 113 or int(data['RF_Nationality']) == 118 or int(data['RF_Nationality']) == 120 or int(data['RF_Nationality']) == 125
                or int(data['RF_Nationality']) == 131 or int(data['RF_Nationality']) == 133 or  int(data['RF_Nationality']) == 137 or int(data['RF_Nationality']) == 138 or int(data['RF_Nationality']) == 140 or int(data['RF_Nationality']) == 141
                or int(data['RF_Nationality']) == 144 or int(data['RF_Nationality']) == 147 or int(data['RF_Nationality']) == 156 or int(data['RF_Nationality']) == 157 or int(data['RF_Nationality']) == 169 or int(data['RF_Nationality']) == 171 or int(data['RF_Nationality']) == 178 or int(data['RF_Nationality']) == 179 or int(data['RF_Nationality']) == 180 or int(data['RF_Nationality']) == 181 or int(data['RF_Nationality']) == 182 or int(data['RF_Nationality']) == 183
                or int(data['RF_Nationality']) == 185 or int(data['RF_Nationality']) == 189 or int(data['RF_Nationality']) == 192 or int(data['RF_Nationality']) == 196 or int(data['RF_Nationality']) == 199 or int(data['RF_Nationality']) == 201 or int(data['RF_Nationality']) == 204 or int(data['RF_Nationality']) == 205
                or int(data['RF_Nationality']) == 207 or int(data['RF_Nationality']) == 210 or int(data['RF_Nationality']) == 218 or int(data['RF_Nationality']) == 225 or int(data['RF_Nationality']) == 231 or int(data['RF_Nationality']) == 234 or int(data['RF_Nationality']) == 235 or int(data['RF_Nationality']) == 237 or int(data['RF_Nationality']) == 238
            ):
                val4=6
            if(
                int(data['RF_CountryOfTax']) == 1 or int(data['RF_CountryOfTax']) == 2 or int(data['RF_CountryOfTax']) == 3 or int(data['RF_CountryOfTax']) == 4 or int(data['RF_CountryOfTax']) == 6 or int(data['RF_CountryOfTax']) == 8 or int(data['RF_CountryOfTax']) == 10 or int(data['RF_CountryOfTax']) == 13 or int(data['RF_CountryOfTax']) == 16 or int(data['RF_CountryOfTax']) == 17 or int(data['RF_CountryOfTax']) == 19 or int(data['RF_CountryOfTax']) == 20 or int(data['RF_CountryOfTax']) == 24
                or int(data['RF_CountryOfTax']) == 27 or int(data['RF_CountryOfTax']) == 28 or int(data['RF_CountryOfTax']) == 29 or int(data['RF_CountryOfTax']) == 30 or int(data['RF_CountryOfTax']) == 31 or int(data['RF_CountryOfTax']) == 32 or int(data['RF_CountryOfTax']) == 33 or int(data['RF_CountryOfTax']) == 36 or int(data['RF_CountryOfTax']) == 37 or int(data['RF_CountryOfTax']) == 39 or int(data['RF_CountryOfTax']) == 41 or int(data['RF_CountryOfTax']) == 42 or int(data['RF_CountryOfTax']) == 43
                or int(data['RF_CountryOfTax']) == 46 or int(data['RF_CountryOfTax']) == 47 or int(data['RF_CountryOfTax']) == 48 or int(data['RF_CountryOfTax']) == 49 or int(data['RF_CountryOfTax']) == 50 or int(data['RF_CountryOfTax']) == 51 or int(data['RF_CountryOfTax']) == 52 or int(data['RF_CountryOfTax']) == 53 or int(data['RF_CountryOfTax']) == 55 or int(data['RF_CountryOfTax']) == 58 or int(data['RF_CountryOfTax']) == 62 or int(data['RF_CountryOfTax']) == 64 or int(data['RF_CountryOfTax']) == 65 or int(data['RF_CountryOfTax']) == 66 
                or int(data['RF_CountryOfTax']) == 67 or int(data['RF_CountryOfTax']) == 68 or int(data['RF_CountryOfTax']) == 69 or int(data['RF_CountryOfTax']) == 70 or int(data['RF_CountryOfTax']) == 71 or int(data['RF_CountryOfTax']) == 72 or int(data['RF_CountryOfTax']) == 73 or int(data['RF_CountryOfTax']) == 74 or int(data['RF_CountryOfTax']) == 82 or int(data['RF_CountryOfTax']) == 85 or int(data['RF_CountryOfTax']) == 86 or int(data['RF_CountryOfTax']) == 90 or int(data['RF_CountryOfTax']) == 91 or int(data['RF_CountryOfTax']) == 92 or int(data['RF_CountryOfTax']) == 93
                or int(data['RF_CountryOfTax']) == 94 or int(data['RF_CountryOfTax']) == 95 or int(data['RF_CountryOfTax']) == 96 or int(data['RF_CountryOfTax']) == 97 or int(data['RF_CountryOfTax']) == 98 or int(data['RF_CountryOfTax']) == 99 or int(data['RF_CountryOfTax']) == 100 or int(data['RF_CountryOfTax']) == 102 or int(data['RF_CountryOfTax']) == 103

                or int(data['RF_CountryOfTax']) == 109  or int(data['RF_CountryOfTax']) == 112  or int(data['RF_CountryOfTax']) == 115  or int(data['RF_CountryOfTax']) == 116  or int(data['RF_CountryOfTax']) == 117  or int(data['RF_CountryOfTax']) == 121  or int(data['RF_CountryOfTax']) == 123  or int(data['RF_CountryOfTax']) == 124
                or int(data['RF_CountryOfTax']) == 126  or int(data['RF_CountryOfTax']) == 127  or int(data['RF_CountryOfTax']) == 128  or int(data['RF_CountryOfTax']) == 129  or int(data['RF_CountryOfTax']) == 134  or int(data['RF_CountryOfTax']) == 135  or int(data['RF_CountryOfTax']) == 136
                or int(data['RF_CountryOfTax']) == 139  or int(data['RF_CountryOfTax']) == 143  or int(data['RF_CountryOfTax']) == 145  or int(data['RF_CountryOfTax']) == 146  or int(data['RF_CountryOfTax']) == 148  or int(data['RF_CountryOfTax']) == 150 or int(data['RF_CountryOfTax']) == 151
                or int(data['RF_CountryOfTax']) == 152 or int(data['RF_CountryOfTax']) == 153 or int(data['RF_CountryOfTax']) == 154 or int(data['RF_CountryOfTax']) == 155 or int(data['RF_CountryOfTax']) == 158 or int(data['RF_CountryOfTax']) == 160 or int(data['RF_CountryOfTax']) == 162 
                or int(data['RF_CountryOfTax']) == 163 or int(data['RF_CountryOfTax']) == 164 or int(data['RF_CountryOfTax']) == 165 or int(data['RF_CountryOfTax']) == 166 or int(data['RF_CountryOfTax']) == 168 or int(data['RF_CountryOfTax']) == 170 or int(data['RF_CountryOfTax']) == 172 or int(data['RF_CountryOfTax']) == 173 or int(data['RF_CountryOfTax']) == 174 or int(data['RF_CountryOfTax']) == 175 or int(data['RF_CountryOfTax']) == 176 or int(data['RF_CountryOfTax']) == 177
                or int(data['RF_CountryOfTax']) == 186 or int(data['RF_CountryOfTax']) == 187 or int(data['RF_CountryOfTax']) == 188 or int(data['RF_CountryOfTax']) == 190 or int(data['RF_CountryOfTax']) == 191 or int(data['RF_CountryOfTax']) == 193 or int(data['RF_CountryOfTax']) == 195
                or int(data['RF_CountryOfTax']) == 197 or int(data['RF_CountryOfTax']) == 198 or int(data['RF_CountryOfTax']) == 200 or int(data['RF_CountryOfTax']) == 202 or int(data['RF_CountryOfTax']) == 203 or int(data['RF_CountryOfTax']) == 206 or int(data['RF_CountryOfTax']) == 208 or int(data['RF_CountryOfTax']) == 209
                or int(data['RF_CountryOfTax']) == 211 or int(data['RF_CountryOfTax']) == 212 or int(data['RF_CountryOfTax']) == 213 or int(data['RF_CountryOfTax']) == 214 or int(data['RF_CountryOfTax']) == 219 or int(data['RF_CountryOfTax']) == 220 or int(data['RF_CountryOfTax']) == 221 or int(data['RF_CountryOfTax']) == 222 or int(data['RF_CountryOfTax']) == 223 or int(data['RF_CountryOfTax']) == 224
                or int(data['RF_CountryOfTax']) == 226 or int(data['RF_CountryOfTax']) == 230 or int(data['RF_CountryOfTax']) == 232 or int(data['RF_CountryOfTax']) == 233 or int(data['RF_CountryOfTax']) == 236 or int(data['RF_CountryOfTax']) == 237 or int(data['RF_CountryOfTax']) == 238 or int(data['RF_CountryOfTax']) == 239
            ):
                val5=9
                                    

            if(int(data['RF_CountryOfTax']) == 5 or int(data['RF_CountryOfTax']) == 7 or int(data['RF_CountryOfTax']) == 9 or int(data['RF_CountryOfTax']) == 12 or int(data['RF_CountryOfTax']) == 25 or int(data['RF_CountryOfTax']) == 34 or int(data['RF_CountryOfTax']) == 35 or int(data['RF_CountryOfTax']) == 61 or int(data['RF_CountryOfTax']) == 76 or int(data['RF_CountryOfTax']) == 84or int(data['RF_CountryOfTax']) == 88
                
                or int(data['RF_CountryOfTax']) == 114 or int(data['RF_CountryOfTax']) == 130 or int(data['RF_CountryOfTax']) == 132 or int(data['RF_CountryOfTax']) == 142 or int(data['RF_CountryOfTax']) == 149 or int(data['RF_CountryOfTax']) == 159 or int(data['RF_CountryOfTax']) == 161 
                or int(data['RF_CountryOfTax']) == 167 or int(data['RF_CountryOfTax']) == 194 or int(data['RF_CountryOfTax']) == 215 or int(data['RF_CountryOfTax']) == 216):
                val5=3


            if(int(data['RF_CountryOfTax']) == 11 or int(data['RF_CountryOfTax']) == 14 or int(data['RF_CountryOfTax']) == 15 or int(data['RF_CountryOfTax']) == 18 or int(data['RF_CountryOfTax']) == 22 or int(data['RF_CountryOfTax']) == 23 or int(data['RF_CountryOfTax']) == 26 or int(data['RF_CountryOfTax']) == 30 or int(data['RF_CountryOfTax']) == 38 or int(data['RF_CountryOfTax']) == 40
                or int(data['RF_CountryOfTax']) == 44 or int(data['RF_CountryOfTax']) == 45 or int(data['RF_CountryOfTax']) == 54 or int(data['RF_CountryOfTax']) == 56 or int(data['RF_CountryOfTax']) == 59 or int(data['RF_CountryOfTax']) == 60 or int(data['RF_CountryOfTax']) == 63 or int(data['RF_CountryOfTax']) == 70 or int(data['RF_CountryOfTax']) == 75 or int(data['RF_CountryOfTax']) == 77 
                or int(data['RF_CountryOfTax']) == 78 or int(data['RF_CountryOfTax']) == 79 or int(data['RF_CountryOfTax']) == 80 or int(data['RF_CountryOfTax']) == 81 or int(data['RF_CountryOfTax']) == 83 or int(data['RF_CountryOfTax']) == 87 or int(data['RF_CountryOfTax']) == 89 or int(data['RF_CountryOfTax']) == 96 or int(data['RF_CountryOfTax']) == 97 or int(data['RF_CountryOfTax']) == 98 
                or int(data['RF_CountryOfTax']) == 99 or int(data['RF_CountryOfTax']) == 100 or int(data['RF_CountryOfTax']) == 101 or int(data['RF_CountryOfTax']) == 102 or int(data['RF_CountryOfTax']) == 104 or int(data['RF_CountryOfTax']) == 105
                
                or int(data['RF_CountryOfTax']) == 108 or int(data['RF_CountryOfTax']) == 110 or int(data['RF_CountryOfTax']) == 111 or int(data['RF_CountryOfTax']) == 113 or int(data['RF_CountryOfTax']) == 118 or int(data['RF_CountryOfTax']) == 120 or int(data['RF_CountryOfTax']) == 125
                or int(data['RF_CountryOfTax']) == 131 or int(data['RF_CountryOfTax']) == 133 or  int(data['RF_CountryOfTax']) == 137 or int(data['RF_CountryOfTax']) == 138 or int(data['RF_CountryOfTax']) == 140 or int(data['RF_CountryOfTax']) == 141
                or int(data['RF_CountryOfTax']) == 144 or int(data['RF_CountryOfTax']) == 147 or int(data['RF_CountryOfTax']) == 156 or int(data['RF_CountryOfTax']) == 157 or int(data['RF_CountryOfTax']) == 169 or int(data['RF_CountryOfTax']) == 171 or int(data['RF_CountryOfTax']) == 178 or int(data['RF_CountryOfTax']) == 179 or int(data['RF_CountryOfTax']) == 180 or int(data['RF_CountryOfTax']) == 181 or int(data['RF_CountryOfTax']) == 182 or int(data['RF_CountryOfTax']) == 183
                or int(data['RF_CountryOfTax']) == 185 or int(data['RF_CountryOfTax']) == 189 or int(data['RF_CountryOfTax']) == 192 or int(data['RF_CountryOfTax']) == 196 or int(data['RF_CountryOfTax']) == 199 or int(data['RF_CountryOfTax']) == 201 or int(data['RF_CountryOfTax']) == 204 or int(data['RF_CountryOfTax']) == 205
                or int(data['RF_CountryOfTax']) == 207 or int(data['RF_CountryOfTax']) == 210 or int(data['RF_CountryOfTax']) == 218 or int(data['RF_CountryOfTax']) == 225 or int(data['RF_CountryOfTax']) == 231 or int(data['RF_CountryOfTax']) == 234 or int(data['RF_CountryOfTax']) == 235 or int(data['RF_CountryOfTax']) == 237 or int(data['RF_CountryOfTax']) == 238):
                val5=6


            if(int(data['RF_CountryOfTax']) == 21 or int(data['RF_CountryOfTax']) == 57 or int(data['RF_CountryOfTax']) == 106 or int(data['RF_CountryOfTax']) == 107 or int(data['RF_CountryOfTax']) == 119 or int(data['RF_CountryOfTax']) == 187 or int(data['RF_CountryOfTax']) == 217):
                val5=12


                
            if(int(data['RF_Industry']) == 1 or int(data['RF_Industry']) == 3 or int(data['RF_Industry']) == 15 or int(data['RF_Industry']) == 19):
                val6=1


            if(int(data['RF_Industry']) == 25):
                val6=0



            if(int(data['RF_Industry']) == 2 or int(data['RF_Industry']) == 12 or int(data['RF_Industry']) == 14 or int(data['RF_Industry']) == 16 or int(data['RF_Industry']) == 17 or int(data['RF_Industry']) == 20 or int(data['RF_Industry']) == 23 or int(data['RF_Industry']) == 24
                or int(data['RF_Industry']) == 26 or int(data['RF_Industry']) == 27 or int(data['RF_Industry']) == 28 or int(data['RF_Industry']) == 30 or int(data['RF_Industry']) == 34):
                val6=3


            if(int(data['RF_Industry']) == 4 or int(data['RF_Industry']) == 5 or int(data['RF_Industry']) == 6 or int(data['RF_Industry']) == 7 or int(data['RF_Industry']) == 8 or int(data['RF_Industry']) == 9 or int(data['RF_Industry']) == 10 or int(data['RF_Industry']) == 11 or int(data['RF_Industry']) == 13
                or int(data['RF_Industry']) == 18 or int(data['RF_Industry']) == 21 or int(data['RF_Industry']) == 22 or int(data['RF_Industry']) == 29 or int(data['RF_Industry']) == 32 or int(data['RF_Industry']) == 33):
                val6=2


            if(int(data['RF_Industry']) == 31):
                val6=4


            if(int(data['RF_SourceOfFunds']) == 1 or int(data['RF_SourceOfFunds']) == 6 or int(data['RF_SourceOfFunds']) == 12 or int(data['RF_SourceOfFunds']) == 13 or int(data['RF_SourceOfFunds']) == 16):
                val7=3


            if(int(data['RF_SourceOfFunds']) == 2 or int(data['RF_SourceOfFunds']) == 3 or int(data['RF_SourceOfFunds']) == 8 or int(data['RF_SourceOfFunds']) == 9 or int(data['RF_SourceOfFunds']) == 14 or int(data['RF_SourceOfFunds']) == 17 or int(data['RF_SourceOfFunds']) == 18 or int(data['RF_SourceOfFunds']) == 20
                or int(data['RF_SourceOfFunds']) == 22 or int(data['RF_SourceOfFunds']) == 23 or int(data['RF_SourceOfFunds']) == 25 or int(data['RF_SourceOfFunds']) == 26 or int(data['RF_SourceOfFunds']) == 29 or int(data['RF_SourceOfFunds']) == 31 or int(data['RF_SourceOfFunds']) == 32 or int(data['RF_SourceOfFunds']) == 33):
                val7=1


            if(int(data['RF_SourceOfFunds']) == 4 or int(data['RF_SourceOfFunds']) == 5 or int(data['RF_SourceOfFunds']) == 7 or int(data['RF_SourceOfFunds']) == 10 or int(data['RF_SourceOfFunds']) == 11 or int(data['RF_SourceOfFunds']) == 15 or int(data['RF_SourceOfFunds']) == 19 or int(data['RF_SourceOfFunds']) == 24
                or int(data['RF_SourceOfFunds']) == 27 or int(data['RF_SourceOfFunds']) == 28 or int(data['RF_SourceOfFunds']) == 30):
                val7=2


            if(int(data['RF_SourceOfFunds']) == 21):
                val7=0


            if(int(data['RF_RelationshipToClient']) == 1 or int(data['RF_RelationshipToClient']) == 2 or int(data['RF_RelationshipToClient']) == 4 or int(data['RF_RelationshipToClient']) == 6 or int(data['RF_RelationshipToClient']) == 7 or int(data['RF_RelationshipToClient']) == 9 or int(data['RF_RelationshipToClient']) == 11 or int(data['RF_RelationshipToClient']) == 13 or int(data['RF_RelationshipToClient']) == 15):
                val8=1


            if(int(data['RF_RelationshipToClient']) == 3 or int(data['RF_RelationshipToClient']) == 5 or int(data['RF_RelationshipToClient']) == 8 or int(data['RF_RelationshipToClient']) == 10 or int(data['RF_RelationshipToClient']) == 12 or int(data['RF_RelationshipToClient']) == 14 or int(data['RF_RelationshipToClient']) == 16):
                val8=2



            if(int(data['RF_CountryOfRegistration']) == "1" or int(data['RF_CountryOfRegistration']) == "2" or int(data['RF_CountryOfRegistration']) == "3" or int(data['RF_CountryOfRegistration']) == "4" or int(data['RF_CountryOfRegistration']) == "6" or int(data['RF_CountryOfRegistration']) == "8" or int(data['RF_CountryOfRegistration']) == "10" or int(data['RF_CountryOfRegistration']) == "13" or int(data['RF_CountryOfRegistration']) == "16" or int(data['RF_CountryOfRegistration']) == "17" or int(data['RF_CountryOfRegistration']) == "19" or int(data['RF_CountryOfRegistration']) == "20" or int(data['RF_CountryOfRegistration']) == "24"
                or int(data['RF_CountryOfRegistration']) == "27" or int(data['RF_CountryOfRegistration']) == "28" or int(data['RF_CountryOfRegistration']) == "29" or int(data['RF_CountryOfRegistration']) == "30" or int(data['RF_CountryOfRegistration']) == "31" or int(data['RF_CountryOfRegistration']) == "32" or int(data['RF_CountryOfRegistration']) == "33" or int(data['RF_CountryOfRegistration']) == "36" or int(data['RF_CountryOfRegistration']) == "37" or int(data['RF_CountryOfRegistration']) == "39" or int(data['RF_CountryOfRegistration']) == "41" or int(data['RF_CountryOfRegistration']) == "42" or int(data['RF_CountryOfRegistration']) == "43"
                or int(data['RF_CountryOfRegistration']) == "46" or int(data['RF_CountryOfRegistration']) == "47" or int(data['RF_CountryOfRegistration']) == "48" or int(data['RF_CountryOfRegistration']) == "49" or int(data['RF_CountryOfRegistration']) == "50" or int(data['RF_CountryOfRegistration']) == "51" or int(data['RF_CountryOfRegistration']) == "52" or int(data['RF_CountryOfRegistration']) == "53" or int(data['RF_CountryOfRegistration']) == "55" or int(data['RF_CountryOfRegistration']) == "58" or int(data['RF_CountryOfRegistration']) == "62" or int(data['RF_CountryOfRegistration']) == "64" or int(data['RF_CountryOfRegistration']) == "65" or int(data['RF_CountryOfRegistration']) == "66" 
                or int(data['RF_CountryOfRegistration']) == "67" or int(data['RF_CountryOfRegistration']) == "68" or int(data['RF_CountryOfRegistration']) == "69" or int(data['RF_CountryOfRegistration']) == "70" or int(data['RF_CountryOfRegistration']) == "71" or int(data['RF_CountryOfRegistration']) == "72" or int(data['RF_CountryOfRegistration']) == "73" or int(data['RF_CountryOfRegistration']) == "74" or int(data['RF_CountryOfRegistration']) == "82" or int(data['RF_CountryOfRegistration']) == "85" or int(data['RF_CountryOfRegistration']) == "86" or int(data['RF_CountryOfRegistration']) == "90" or int(data['RF_CountryOfRegistration']) == "91" or int(data['RF_CountryOfRegistration']) == "92" or int(data['RF_CountryOfRegistration']) == "93"
                or int(data['RF_CountryOfRegistration']) == "94" or int(data['RF_CountryOfRegistration']) == "95" or int(data['RF_CountryOfRegistration']) == "96" or int(data['RF_CountryOfRegistration']) == "97" or int(data['RF_CountryOfRegistration']) == "98" or int(data['RF_CountryOfRegistration']) == "99" or int(data['RF_CountryOfRegistration']) == "100" or int(data['RF_CountryOfRegistration']) == "102" or int(data['RF_CountryOfRegistration']) == "103"

                or int(data['RF_CountryOfRegistration']) == "109" or int(data['RF_CountryOfRegistration']) == "112" or int(data['RF_CountryOfRegistration']) == "115" or  int(data['RF_CountryOfRegistration']) == "116" or  int(data['RF_CountryOfRegistration']) == "117" or  int(data['RF_CountryOfRegistration']) == "121" or  int(data['RF_CountryOfRegistration']) == "123" or  int(data['RF_CountryOfRegistration']) == "124"
                or int(data['RF_CountryOfRegistration']) == "126" or int(data['RF_CountryOfRegistration']) == "127" or int(data['RF_CountryOfRegistration']) == "128" or  int(data['RF_CountryOfRegistration']) == "129" or  int(data['RF_CountryOfRegistration']) == "134" or  int(data['RF_CountryOfRegistration']) == "135" or  int(data['RF_CountryOfRegistration']) == "136"
                or int(data['RF_CountryOfRegistration']) == "139" or int(data['RF_CountryOfRegistration']) == "143" or int(data['RF_CountryOfRegistration']) == "145" or  int(data['RF_CountryOfRegistration']) == "146" or  int(data['RF_CountryOfRegistration']) == "148" or  int(data['RF_CountryOfRegistration']) == "150" or int(data['RF_CountryOfRegistration']) == "151"
                or int(data['RF_CountryOfRegistration']) == "152" or int(data['RF_CountryOfRegistration']) == "153" or int(data['RF_CountryOfRegistration']) == "154" or int(data['RF_CountryOfRegistration']) == "155" or int(data['RF_CountryOfRegistration']) == "158" or int(data['RF_CountryOfRegistration']) == "160" or int(data['RF_CountryOfRegistration']) == "162" 
                or int(data['RF_CountryOfRegistration']) == "163" or int(data['RF_CountryOfRegistration']) == "164" or int(data['RF_CountryOfRegistration']) == "165" or int(data['RF_CountryOfRegistration']) == "166" or int(data['RF_CountryOfRegistration']) == "168" or int(data['RF_CountryOfRegistration']) == "170" or int(data['RF_CountryOfRegistration']) == "172" or int(data['RF_CountryOfRegistration']) == "173" or int(data['RF_CountryOfRegistration']) == "174" or int(data['RF_CountryOfRegistration']) == "175" or int(data['RF_CountryOfRegistration']) == "176" or int(data['RF_CountryOfRegistration']) == "177"
                or int(data['RF_CountryOfRegistration']) == "186" or int(data['RF_CountryOfRegistration']) == "187" or int(data['RF_CountryOfRegistration']) == "188" or int(data['RF_CountryOfRegistration']) == "190" or int(data['RF_CountryOfRegistration']) == "191" or int(data['RF_CountryOfRegistration']) == "193" or int(data['RF_CountryOfRegistration']) == "195"
                or int(data['RF_CountryOfRegistration']) == "197" or int(data['RF_CountryOfRegistration']) == "198" or int(data['RF_CountryOfRegistration']) == "200" or int(data['RF_CountryOfRegistration']) == "202" or int(data['RF_CountryOfRegistration']) == "203" or int(data['RF_CountryOfRegistration']) == "206" or int(data['RF_CountryOfRegistration']) == "208" or int(data['RF_CountryOfRegistration']) == "209"
                or int(data['RF_CountryOfRegistration']) == "211" or int(data['RF_CountryOfRegistration']) == "212" or int(data['RF_CountryOfRegistration']) == "213" or int(data['RF_CountryOfRegistration']) == "214" or int(data['RF_CountryOfRegistration']) == "219" or int(data['RF_CountryOfRegistration']) == "220" or int(data['RF_CountryOfRegistration']) == "221" or int(data['RF_CountryOfRegistration']) == "222" or int(data['RF_CountryOfRegistration']) == "223" or int(data['RF_CountryOfRegistration']) == "224"
                or int(data['RF_CountryOfRegistration']) == "226" or int(data['RF_CountryOfRegistration']) == "230" or int(data['RF_CountryOfRegistration']) == "232" or int(data['RF_CountryOfRegistration']) == "233" or int(data['RF_CountryOfRegistration']) == "236" or int(data['RF_CountryOfRegistration']) == "237" or int(data['RF_CountryOfRegistration']) == "238" or int(data['RF_CountryOfRegistration']) == "239"
            ):
                val9=9


            if(int(data['RF_CountryOfRegistration']) == "5" or int(data['RF_CountryOfRegistration']) == "7" or int(data['RF_CountryOfRegistration']) == "9" or int(data['RF_CountryOfRegistration']) == "12" or int(data['RF_CountryOfRegistration']) == "25" or int(data['RF_CountryOfRegistration']) == "34" or int(data['RF_CountryOfRegistration']) == "35" or int(data['RF_CountryOfRegistration']) == "61" or int(data['RF_CountryOfRegistration']) == "76" or int(data['RF_CountryOfRegistration']) == "84" or int(data['RF_CountryOfRegistration']) == "88" 
                or int(data['RF_CountryOfRegistration']) == "114" or int(data['RF_CountryOfRegistration']) == "130" or int(data['RF_CountryOfRegistration']) == "132" or int(data['RF_CountryOfRegistration']) == "142" or int(data['RF_CountryOfRegistration']) == "149" or int(data['RF_CountryOfRegistration']) == "159" or int(data['RF_CountryOfRegistration']) == "161"
                or int(data['RF_CountryOfRegistration']) == "167" or int(data['RF_CountryOfRegistration']) == "194" or int(data['RF_CountryOfRegistration']) == "215" or int(data['RF_CountryOfRegistration']) == "216"
            ):
                val9=3


            if(
                int(data['RF_CountryOfRegistration']) == "11" or int(data['RF_CountryOfRegistration']) == "14" or int(data['RF_CountryOfRegistration']) == "15" or int(data['RF_CountryOfRegistration']) == "18" or int(data['RF_CountryOfRegistration']) == "22" or int(data['RF_CountryOfRegistration']) == "23" or int(data['RF_CountryOfRegistration']) == "26" or int(data['RF_CountryOfRegistration']) == "30" or int(data['RF_CountryOfRegistration']) == "38" or int(data['RF_CountryOfRegistration']) == "40"
                or int(data['RF_CountryOfRegistration']) == "44" or int(data['RF_CountryOfRegistration']) == "45" or int(data['RF_CountryOfRegistration']) == "54" or int(data['RF_CountryOfRegistration']) == "56" or int(data['RF_CountryOfRegistration']) == "59" or int(data['RF_CountryOfRegistration']) == "60" or int(data['RF_CountryOfRegistration']) == "63" or int(data['RF_CountryOfRegistration']) == "70" or int(data['RF_CountryOfRegistration']) == "75" or int(data['RF_CountryOfRegistration']) == "77" 
                or int(data['RF_CountryOfRegistration']) == "78" or int(data['RF_CountryOfRegistration']) == "79" or int(data['RF_CountryOfRegistration']) == "80" or int(data['RF_CountryOfRegistration']) == "81" or int(data['RF_CountryOfRegistration']) == "83" or int(data['RF_CountryOfRegistration']) == "87" or int(data['RF_CountryOfRegistration']) == "89" or int(data['RF_CountryOfRegistration']) == "96" or int(data['RF_CountryOfRegistration']) == "97" or int(data['RF_CountryOfRegistration']) == "98" 
                or int(data['RF_CountryOfRegistration']) == "99" or int(data['RF_CountryOfRegistration']) == "100" or int(data['RF_CountryOfRegistration']) == "101" or int(data['RF_CountryOfRegistration']) == "102" or int(data['RF_CountryOfRegistration']) == "104" or int(data['RF_CountryOfRegistration']) == "105"
                or int(data['RF_CountryOfRegistration']) == "108" or int(data['RF_CountryOfRegistration']) == "110" or int(data['RF_CountryOfRegistration']) == "111" or int(data['RF_CountryOfRegistration']) == "113" or int(data['RF_CountryOfRegistration']) == "118" or int(data['RF_CountryOfRegistration']) == "120" or int(data['RF_CountryOfRegistration']) == "125"
                or int(data['RF_CountryOfRegistration']) == "131" or int(data['RF_CountryOfRegistration']) == "133" or  int(data['RF_CountryOfRegistration']) == "137" or int(data['RF_CountryOfRegistration']) == "138" or int(data['RF_CountryOfRegistration']) == "140" or int(data['RF_CountryOfRegistration']) == "141"
                or int(data['RF_CountryOfRegistration']) == "144" or int(data['RF_CountryOfRegistration']) == "147" or int(data['RF_CountryOfRegistration']) == "156" or int(data['RF_CountryOfRegistration']) == "157" or int(data['RF_CountryOfRegistration']) == "169" or int(data['RF_CountryOfRegistration']) == "171" or int(data['RF_CountryOfRegistration']) == "178" or int(data['RF_CountryOfRegistration']) == "179" or int(data['RF_CountryOfRegistration']) == "180" or int(data['RF_CountryOfRegistration']) == "181" or int(data['RF_CountryOfRegistration']) == "182" or int(data['RF_CountryOfRegistration']) == "183"
                or int(data['RF_CountryOfRegistration']) == "185" or int(data['RF_CountryOfRegistration']) == "189" or int(data['RF_CountryOfRegistration']) == "192" or int(data['RF_CountryOfRegistration']) == "196" or int(data['RF_CountryOfRegistration']) == "199" or int(data['RF_CountryOfRegistration']) == "201" or int(data['RF_CountryOfRegistration']) == "204" or int(data['RF_CountryOfRegistration']) == "205"
                or int(data['RF_CountryOfRegistration']) == "207" or int(data['RF_CountryOfRegistration']) == "210" or int(data['RF_CountryOfRegistration']) == "218" or int(data['RF_CountryOfRegistration']) == "225" or int(data['RF_CountryOfRegistration']) == "231" or int(data['RF_CountryOfRegistration']) == "234" or int(data['RF_CountryOfRegistration']) == "235" or int(data['RF_CountryOfRegistration']) == "237" or int(data['RF_CountryOfRegistration']) == "238"
            ):
                val9=6


            if(int(data['RF_CountryOfRegistration']) == "21" or int(data['RF_CountryOfRegistration']) == "57" or int(data['RF_CountryOfRegistration']) == "106" or int(data['RF_CountryOfRegistration']) == "107" or int(data['RF_CountryOfRegistration']) == "119" or int(data['RF_CountryOfRegistration']) == "187" or int(data['RF_CountryOfRegistration']) == "217"):
                val9=12


            if(int(data['RF_CountryOfResidence']) == 1 or int(data['RF_CountryOfResidence']) == 2 or int(data['RF_CountryOfResidence']) == 3 or int(data['RF_CountryOfResidence']) == 4 or int(data['RF_CountryOfResidence']) == 6 or int(data['RF_CountryOfResidence']) == 8 or int(data['RF_CountryOfResidence']) == 10 or int(data['RF_CountryOfResidence']) == 13 or int(data['RF_CountryOfResidence']) == 16 or int(data['RF_CountryOfResidence']) == 17 or int(data['RF_CountryOfResidence']) == 19 or int(data['RF_CountryOfResidence']) == 20 or int(data['RF_CountryOfResidence']) == 24
                or int(data['RF_CountryOfResidence']) == 27 or int(data['RF_CountryOfResidence']) == 28 or int(data['RF_CountryOfResidence']) == 29 or int(data['RF_CountryOfResidence']) == 30 or int(data['RF_CountryOfResidence']) == 31 or int(data['RF_CountryOfResidence']) == 32 or int(data['RF_CountryOfResidence']) == 33 or int(data['RF_CountryOfResidence']) == 36 or int(data['RF_CountryOfResidence']) == 37 or int(data['RF_CountryOfResidence']) == 39 or int(data['RF_CountryOfResidence']) == 41 or int(data['RF_CountryOfResidence']) == 42 or int(data['RF_CountryOfResidence']) == 43
                or int(data['RF_CountryOfResidence']) == 46 or int(data['RF_CountryOfResidence']) == 47 or int(data['RF_CountryOfResidence']) == 48 or int(data['RF_CountryOfResidence']) == 49 or int(data['RF_CountryOfResidence']) == 50 or int(data['RF_CountryOfResidence']) == 51 or int(data['RF_CountryOfResidence']) == 52 or int(data['RF_CountryOfResidence']) == 53 or int(data['RF_CountryOfResidence']) == 55 or int(data['RF_CountryOfResidence']) == 58 or int(data['RF_CountryOfResidence']) == 62 or int(data['RF_CountryOfResidence']) == 64 or int(data['RF_CountryOfResidence']) == 65 or int(data['RF_CountryOfResidence']) == 66 
                or int(data['RF_CountryOfResidence']) == 67 or int(data['RF_CountryOfResidence']) == 68 or int(data['RF_CountryOfResidence']) == 69 or int(data['RF_CountryOfResidence']) == 70 or int(data['RF_CountryOfResidence']) == 71 or int(data['RF_CountryOfResidence']) == 72 or int(data['RF_CountryOfResidence']) == 73 or int(data['RF_CountryOfResidence']) == 74 or int(data['RF_CountryOfResidence']) == 82 or int(data['RF_CountryOfResidence']) == 85 or int(data['RF_CountryOfResidence']) == 86 or int(data['RF_CountryOfResidence']) == 90 or int(data['RF_CountryOfResidence']) == 91 or int(data['RF_CountryOfResidence']) == 92 or int(data['RF_CountryOfResidence']) == 93
                or int(data['RF_CountryOfResidence']) == 94 or int(data['RF_CountryOfResidence']) == 95 or int(data['RF_CountryOfResidence']) == 96 or int(data['RF_CountryOfResidence']) == 97 or int(data['RF_CountryOfResidence']) == 98 or int(data['RF_CountryOfResidence']) == 99 or int(data['RF_CountryOfResidence']) == 100 or int(data['RF_CountryOfResidence']) == 102 or int(data['RF_CountryOfResidence']) == 103
                
                or int(data['RF_CountryOfResidence']) == 109  or int(data['RF_CountryOfResidence']) == 112  or int(data['RF_CountryOfResidence']) == 115  or int(data['RF_CountryOfResidence']) == 116  or int(data['RF_CountryOfResidence']) == 117  or int(data['RF_CountryOfResidence']) == 121  or int(data['RF_CountryOfResidence']) == 123  or int(data['RF_CountryOfResidence']) == 124
                or int(data['RF_CountryOfResidence']) == 126  or int(data['RF_CountryOfResidence']) == 127  or int(data['RF_CountryOfResidence']) == 128  or int(data['RF_CountryOfResidence']) == 129  or int(data['RF_CountryOfResidence']) == 134  or int(data['RF_CountryOfResidence']) == 135  or int(data['RF_CountryOfResidence']) == 136
                or int(data['RF_CountryOfResidence']) == 139  or int(data['RF_CountryOfResidence']) == 143  or int(data['RF_CountryOfResidence']) == 145  or int(data['RF_CountryOfResidence']) == 146  or int(data['RF_CountryOfResidence']) == 148  or int(data['RF_CountryOfResidence']) == 150 or int(data['RF_CountryOfResidence']) == 151
                or int(data['RF_CountryOfResidence']) == 152 or int(data['RF_CountryOfResidence']) == 153 or int(data['RF_CountryOfResidence']) == 154 or int(data['RF_CountryOfResidence']) == 155 or int(data['RF_CountryOfResidence']) == 158 or int(data['RF_CountryOfResidence']) == 160 or int(data['RF_CountryOfResidence']) == 162 
                or int(data['RF_CountryOfResidence']) == 163 or int(data['RF_CountryOfResidence']) == 164 or int(data['RF_CountryOfResidence']) == 165 or int(data['RF_CountryOfResidence']) == 166 or int(data['RF_CountryOfResidence']) == 168 or int(data['RF_CountryOfResidence']) == 170 or int(data['RF_CountryOfResidence']) == 172 or int(data['RF_CountryOfResidence']) == 173 or int(data['RF_CountryOfResidence']) == 174 or int(data['RF_CountryOfResidence']) == 175 or int(data['RF_CountryOfResidence']) == 176 or int(data['RF_CountryOfResidence']) == 177
                or int(data['RF_CountryOfResidence']) == 186 or int(data['RF_CountryOfResidence']) == 187 or int(data['RF_CountryOfResidence']) == 188 or int(data['RF_CountryOfResidence']) == 190 or int(data['RF_CountryOfResidence']) == 191 or int(data['RF_CountryOfResidence']) == 193 or int(data['RF_CountryOfResidence']) == 195
                or int(data['RF_CountryOfResidence']) == 197 or int(data['RF_CountryOfResidence']) == 198 or int(data['RF_CountryOfResidence']) == 200 or int(data['RF_CountryOfResidence']) == 202 or int(data['RF_CountryOfResidence']) == 203 or int(data['RF_CountryOfResidence']) == 206 or int(data['RF_CountryOfResidence']) == 208 or int(data['RF_CountryOfResidence']) == 209
                or int(data['RF_CountryOfResidence']) == 211 or int(data['RF_CountryOfResidence']) == 212 or int(data['RF_CountryOfResidence']) == 213 or int(data['RF_CountryOfResidence']) == 214 or int(data['RF_CountryOfResidence']) == 219 or int(data['RF_CountryOfResidence']) == 220 or int(data['RF_CountryOfResidence']) == 221 or int(data['RF_CountryOfResidence']) == 222 or int(data['RF_CountryOfResidence']) == 223 or int(data['RF_CountryOfResidence']) == 224
                or int(data['RF_CountryOfResidence']) == 226 or int(data['RF_CountryOfResidence']) == 230 or int(data['RF_CountryOfResidence']) == 232 or int(data['RF_CountryOfResidence']) == 233 or int(data['RF_CountryOfResidence']) == 236 or int(data['RF_CountryOfResidence']) == 237 or int(data['RF_CountryOfResidence']) == 238 or int(data['RF_CountryOfResidence']) == 239):
                val10=9


            if(int(data['RF_CountryOfResidence']) == 5 or int(data['RF_CountryOfResidence']) == 7 or int(data['RF_CountryOfResidence']) == 9 or int(data['RF_CountryOfResidence']) == 12 or int(data['RF_CountryOfResidence']) == 25 or int(data['RF_CountryOfResidence']) == 34 or int(data['RF_CountryOfResidence']) == 35 or int(data['RF_CountryOfResidence']) == 61 or int(data['RF_CountryOfResidence']) == 76 or int(data['RF_CountryOfResidence']) == 84or int(data['RF_CountryOfResidence']) == 88
                
                or int(data['RF_CountryOfResidence']) == 114 or int(data['RF_CountryOfResidence']) == 130 or int(data['RF_CountryOfResidence']) == 132 or int(data['RF_CountryOfResidence']) == 142 or int(data['RF_CountryOfResidence']) == 149 or int(data['RF_CountryOfResidence']) == 159 or int(data['RF_CountryOfResidence']) == 161 
                or int(data['RF_CountryOfResidence']) == 167 or int(data['RF_CountryOfResidence']) == 194 or int(data['RF_CountryOfResidence']) == 215 or int(data['RF_CountryOfResidence']) == 216):
                val10=3


            if(int(data['RF_CountryOfResidence']) == 11 or int(data['RF_CountryOfResidence']) == 14 or int(data['RF_CountryOfResidence']) == 15 or int(data['RF_CountryOfResidence']) == 18 or int(data['RF_CountryOfResidence']) == 22 or int(data['RF_CountryOfResidence']) == 23 or int(data['RF_CountryOfResidence']) == 26 or int(data['RF_CountryOfResidence']) == 30 or int(data['RF_CountryOfResidence']) == 38 or int(data['RF_CountryOfResidence']) == 40
                or int(data['RF_CountryOfResidence']) == 44 or int(data['RF_CountryOfResidence']) == 45 or int(data['RF_CountryOfResidence']) == 54 or int(data['RF_CountryOfResidence']) == 56 or int(data['RF_CountryOfResidence']) == 59 or int(data['RF_CountryOfResidence']) == 60 or int(data['RF_CountryOfResidence']) == 63 or int(data['RF_CountryOfResidence']) == 70 or int(data['RF_CountryOfResidence']) == 75 or int(data['RF_CountryOfResidence']) == 77 
                or int(data['RF_CountryOfResidence']) == 78 or int(data['RF_CountryOfResidence']) == 79 or int(data['RF_CountryOfResidence']) == 80 or int(data['RF_CountryOfResidence']) == 81 or int(data['RF_CountryOfResidence']) == 83 or int(data['RF_CountryOfResidence']) == 87 or int(data['RF_CountryOfResidence']) == 89 or int(data['RF_CountryOfResidence']) == 96 or int(data['RF_CountryOfResidence']) == 97 or int(data['RF_CountryOfResidence']) == 98 
                or int(data['RF_CountryOfResidence']) == 99 or int(data['RF_CountryOfResidence']) == 100 or int(data['RF_CountryOfResidence']) == 101 or int(data['RF_CountryOfResidence']) == 102 or int(data['RF_CountryOfResidence']) == 104 or int(data['RF_CountryOfResidence']) == 105
                
                or int(data['RF_CountryOfResidence']) == 108 or int(data['RF_CountryOfResidence']) == 110 or int(data['RF_CountryOfResidence']) == 111 or int(data['RF_CountryOfResidence']) == 113 or int(data['RF_CountryOfResidence']) == 118 or int(data['RF_CountryOfResidence']) == 120 or int(data['RF_CountryOfResidence']) == 125
                or int(data['RF_CountryOfResidence']) == 131 or int(data['RF_CountryOfResidence']) == 133 or  int(data['RF_CountryOfResidence']) == 137 or int(data['RF_CountryOfResidence']) == 138 or int(data['RF_CountryOfResidence']) == 140 or int(data['RF_CountryOfResidence']) == 141
                or int(data['RF_CountryOfResidence']) == 144 or int(data['RF_CountryOfResidence']) == 147 or int(data['RF_CountryOfResidence']) == 156 or int(data['RF_CountryOfResidence']) == 157 or int(data['RF_CountryOfResidence']) == 169 or int(data['RF_CountryOfResidence']) == 171 or int(data['RF_CountryOfResidence']) == 178 or int(data['RF_CountryOfResidence']) == 179 or int(data['RF_CountryOfResidence']) == 180 or int(data['RF_CountryOfResidence']) == 181 or int(data['RF_CountryOfResidence']) == 182 or int(data['RF_CountryOfResidence']) == 183
                or int(data['RF_CountryOfResidence']) == 185 or int(data['RF_CountryOfResidence']) == 189 or int(data['RF_CountryOfResidence']) == 192 or int(data['RF_CountryOfResidence']) == 196 or int(data['RF_CountryOfResidence']) == 199 or int(data['RF_CountryOfResidence']) == 201 or int(data['RF_CountryOfResidence']) == 204 or int(data['RF_CountryOfResidence']) == 205
                or int(data['RF_CountryOfResidence']) == 207 or int(data['RF_CountryOfResidence']) == 210 or int(data['RF_CountryOfResidence']) == 218 or int(data['RF_CountryOfResidence']) == 225 or int(data['RF_CountryOfResidence']) == 231 or int(data['RF_CountryOfResidence']) == 234 or int(data['RF_CountryOfResidence']) == 235 or int(data['RF_CountryOfResidence']) == 237 or int(data['RF_CountryOfResidence']) == 238):
                val10=6


            if(int(data['RF_CountryOfResidence']) == 21 or int(data['RF_CountryOfResidence']) == 57 or int(data['RF_CountryOfResidence']) == 106 or int(data['RF_CountryOfResidence']) == 107 or int(data['RF_CountryOfResidence']) == 119 or int(data['RF_CountryOfResidence']) == 187 or int(data['RF_CountryOfResidence']) == 217):
                val10=12


            if(int(data['RF_RelationshipToClient']) == 1 or int(data['RF_RelationshipToClient']) == 4 or int(data['RF_RelationshipToClient']) == 6 or int(data['RF_RelationshipToClient']) == 8 or int(data['RF_RelationshipToClient']) == 13 or int(data['RF_RelationshipToClient']) == 15 or int(data['RF_RelationshipToClient']) == 16
                or int(data['RF_RelationshipToClient']) == 20 or int(data['RF_RelationshipToClient']) == 21 or int(data['RF_RelationshipToClient']) == 25):
                val11=1


            if(int(data['RF_RelationshipToClient']) == 2 or int(data['RF_RelationshipToClient']) == 3 or int(data['RF_RelationshipToClient']) == 7 or int(data['RF_RelationshipToClient']) == 9 or int(data['RF_RelationshipToClient']) == 10 or int(data['RF_RelationshipToClient']) == 11 or int(data['RF_RelationshipToClient']) == 12
                or int(data['RF_RelationshipToClient']) == 17 or int(data['RF_RelationshipToClient']) == 18 or int(data['RF_RelationshipToClient']) == 22 or int(data['RF_RelationshipToClient']) == 23):
                val11=3      
                


            if(int(data['RF_RelationshipToClient']) == 5 or int(data['RF_RelationshipToClient']) == 14 or int(data['RF_RelationshipToClient']) == 19 or int(data['RF_RelationshipToClient']) == 24):
                val11=2

            if(int(data['RF_Nationality']) == 21 or int(data['RF_Nationality']) == 57 or int(data['RF_Nationality']) == 106 or int(data['RF_Nationality']) == 107 or int(data['RF_Nationality']) == 119 or int(data['RF_Nationality']) == 187 or int(data['RF_Nationality']) == 217):
                val4=12

            data['val2n']=val1+val2+val3+val4+val5+val6+val7+val8
            data['val3n']=val6+val7+val8+val9+val10+val11
            data['RF_Scores'] = RF_Scores.objects.filter(form=data['id']).values().first()
            CountryList =["", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Aukland Islands", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Sint Eustatius aand Saba)", "Bosnia and Herzegovina", "Botswana", "Bouvet Islands", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (Democratic Republic)", "Congo (Republic)", "Cook Islands", "Costa Rica", "Côte D'Ivoire (Ivory Coast)", "Croatia", "Cuba", "Curacao", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "eSwatini (Previously Swaziland)", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea ((North) Democratic People's Republic)", "Korea ((South) Republic)", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia (Former Yugoslavia)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federal States)", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norfolk Island", "Northern Mariana Islands", "Norway", "Nuie", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Barthelemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch Part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States Minor Outlying Islands", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (US)", "Wallis and Futuna", "West Bank and Gaza (Palestine)", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]
            Industry = ['','Administrative and support services','Adult Entertainment','Agriculture,forestry and fishing','Arts,Entertainment and Recreation','Broadcasting and Entertainment','Chemical engineering/manufacturing',
            'Community and social activities','Construction and civil engineering','Consumer goods:wholesale and retail','Education','Electricity,solar,water,gas','Entrepreneurship','Estate living and family trusts','Extractive services,mining and quarrying','Financial and insurance','Gambling','Government services,armed and state owned enterprise','Health care and medical','Information technology,communication and telecom','Legal practitioner','Manufacturing','Motor wholesale,retail trade and repair','Non profit organization','Non government organization(NGO)','other','PFMA schedule 1','PFMA schedule 2','PFMA schedule 3A','Professional sport','Real estate and property services','Shell Banking','Transport storage,courier and freight','Travel,tourism and accomodation','Virtual currencies']
            NationalityList =["", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Aukland Islands", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Sint Eustatius aand Saba)", "Bosnia and Herzegovina", "Botswana", "Bouvet Islands", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (Democratic Republic)", "Congo (Republic)", "Cook Islands", "Costa Rica", "Côte D'Ivoire (Ivory Coast)", "Croatia", "Cuba", "Curacao", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "eSwatini (Previously Swaziland)", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea ((North) Democratic People's Republic)", "Korea ((South) Republic)", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia (Former Yugoslavia)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federal States)", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norfolk Island", "Northern Mariana Islands", "Norway", "Nuie", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Barthelemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch Part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South African", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States Minor Outlying Islands", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (US)", "Wallis and Futuna", "West Bank and Gaza (Palestine)", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]
            SourceOfFunds = ['','Allowance','Bonus','Bursary','Company profits','Company sale','Cryptocurrency','Debt capital','Disability/social grant','Dividends from investment','Divorce settlement','Equity capital','Gambling winnings','Gift','Income from previous employment','Inherritance','Loan','Lottery winnings','Maintainance(Formal agreement)','Maintainance(Informal agreement)','Maturing Investments','Other','Pension','Provident fund','Rental Propert','Retirement Funds','Salary','Salary asset/property','Sale of shares','Sanlam payout','Savings','Settlement','Transfer to/from approved funds','Trust Income']
            RelationshipToClient =['','Annuitant','Applicant','Authorised Representative','Cessionary','Curator','Executor','Fund Annuitant','Gurantor','Legal Guardian','Legal owner','Multi data client','Nominee of ownership','Policy owner','Power of Attorney','Premium Payer','Surety']
            Product_Name = ['','Access to funds or benefits restricted to specific contractual events (specified termination, uncertain insured event)','Access to primary benefits only at claim stage','Access to primary benefits only at claim stage, but have access to cash during the lifetime of the product','Access to the values may be limited by legislation','Accumulation of cash values','AAdministrative service provided','Advisory or intermediary services only with commission based inflow','Allows for restricted number of withdrawals','Benefits governed by specific regulatory- and tax regimes','Can be accessed without any restrictions by law or product provider','Can be offered as security and be transferred to another person (ceded)','Cannot be offered as security or ceded','Contributions are limited by legislation or regulation','Contributions from Third Parties are allowed','Funds can be accumulated and easily accessed','Funds linked to a specific source (Estate, Order of Court, Retirement Fund Benefits, Employer)','Investments are made with discretionary money','Lump sum payments, including ad-hoc lump sum payments allowed','No or little accumulation of cash values during the lifetime of the product','Not available to retail investors','Online transactability and automated access','Payments to foreign bank accounts are allowed','Product allows for investment in or via a foreign jurisdiction(s)','Product only provides a structured flow of transactions','Significant fund flows are involved','Third Party EFT services provided','Third Party non-financial services provided','Transparency is limited in respect of source of funds','Unlimited contributions and withdrawals']
            Transaction_Flow = ['','Inflow','Outflow','Not Applicable']
            Transaction_Method = ['','Bank Transfer','Cash','Debit order','Debit/credit card','EFT','File/API Transfer','Mobile payment','Retailer/Merchant payment','Script Transfer','Stop order','Straight through processing','Unit Transfer']
            RF_Transaction_Reason = ['','Additional Premium','Cession','Client/Policy change','Combined alteration','Commission/Service fee','Continuation','Conversion','New business','Premium arrears','Re-issue','Renewal','Review underwriting','Switch in','Transfer of value']
            RF_High_Transaction_Reason = ['','Yes','No']
            RF_Transaction_Flow = ['','Inflow','Outflow','Not Applicable']
            RF_Transaction_Frequency = ['','Ad hoc','Lump sum and recurring combination','Once off/Lump sum','Recurring']
            RF_Transaction_Geography = ['','Cross Border','In-country','Not Applicable']
            RF_Delivery_Channel = ['','Intermediaries(Advisors)','Intermediaries(consultants)']
            RF_Linked_Party_Acting = ['','Not Applicable','No','Yes']
            RF_Linked_Party_Paying = ['','Not applicable','Paying funds','Received funds']
            RF_Client_Match = ['','Adverse Media','Enforcement,SIP,SIE','False Positive','False Positive-Unsure','False Positive-Unsure:Sanctions','No Alert','PEP-Domestic','PEP-Foreign','Sanction','Sanlam Do not Trnsact List','SOE']
            RF_Client_Beneficiaries = ['','Yes','No']
            RF_Adjust_Risk1 = ['','Low','Medium','High','Intolerable']
            RF_BU_Risk = ['','Low','Medium','High']
            RF_RCA = ['','Yes','No']
            RF_Client_Relationship = ['','Beneficial owner','Beneficiary','Co-policy owner','Dependent','EFT third party','Individual acting on behalf of an entity','Individual exercising control other than owner','Individual linked to a partnership','Individual linked to a trust','Legal entity acting on behalf of individual','Legal entity acting on behalf of other legal entity','Legal Entity exercising control over another Legal Entity','Legal Entity has legal relationship with other Legal Entity','Legal Entity linked to a Trust','Legal guardian','Life assured','Natural guardian','Nominee for ownership','Principal owner','Security cession','Signatory','Trust has control over another trust','Trustee','Unit transfer investment owner']
            RF_Type_Legal_Entity = ['','Body corporate','Charitable organization','Church/religious organization','Closed corporation','Club','Deceased Estate','Foreign government','Foreign listed company','Foreign state owned entity','Foreign trust','Foreign Unlisted company','Foundation','Fund','Insolvent Estate','Listed company','Non government organization','Non profit organization','Other corporate arrangement','Retirement fund','School/university','State owned Enterprise','Stokvel','Trade Union','Trust','Unlisted company']
            

            data['RF_CountryOfBirth_id'] = int(data['RF_CountryOfBirth'])
            data['RF_CountryOfBirth'] = CountryList[data['RF_CountryOfBirth_id']]
            data['RF_CountryOfResidence_id'] = int(data['RF_CountryOfResidence'])
            data['RF_CountryOfResidence'] = CountryList[data['RF_CountryOfResidence_id']]
            data['RF_Nationality_id'] = int(data['RF_Nationality'])
            data['RF_Nationality'] = NationalityList[data['RF_Nationality_id']]
            data['RF_CountryOfTax_id'] = int(data['RF_CountryOfTax'])
            data['RF_CountryOfTax'] = CountryList[data['RF_CountryOfTax_id']]
            data['RF_Industry_id'] = int(data['RF_Industry'])
            data['RF_Industry'] = Industry[data['RF_Industry_id']]
            data['RF_SourceOfFunds_id'] = int(data['RF_SourceOfFunds'])
            data['RF_SourceOfFunds'] = SourceOfFunds[data['RF_SourceOfFunds_id']]
            data['RF_RelationshipToClient_id'] = int(data['RF_RelationshipToClient'])
            data['RF_RelationshipToClient'] = RelationshipToClient[data['RF_RelationshipToClient_id']]
            data['RF_Product_Name_id'] = int(data['RF_Product_Name'])
            data['RF_Product_Name'] = Product_Name[data['RF_Product_Name_id']]
            
            val13, val14, val15, val16, val17, val18, val19, val20 = 0, 0, 0, 0, 0, 0, 0, 0 

            if(data['RF_Transaction_Method'] and (int(data['RF_Transaction_Method']) == 1 or int(data['RF_Transaction_Method']) == 4 or int(data['RF_Transaction_Method']) == 5 or int(data['RF_Transaction_Method']) == 7 or int(data['RF_Transaction_Method']) == 8)):
                val13=4
            if(data['RF_Transaction_Method'] and (int(data['RF_Transaction_Method']) == 2 or int(data['RF_Transaction_Method']) == 11)):
                val13=6
            if(data['RF_Transaction_Method'] and (int(data['RF_Transaction_Method']) == 3 or int(data['RF_Transaction_Method']) == 6 or int(data['RF_Transaction_Method']) == 9 or int(data['RF_Transaction_Method']) == 10 or int(data['RF_Transaction_Method']) == 12)):
                val13=2
            if(data['RF_Transaction_Reason'] and data['RF_Transaction_Reason'] == 1):
                val14=2  
            if(data['RF_Transaction_Reason'] and data['RF_Transaction_Reason'] !=0):
                val14=1
            if(data['RF_High_Transaction_Reason'] and int(data['RF_High_Transaction_Reason']) == 1):
                val15=6
            if(data['RF_High_Transaction_Reason'] and int(data['RF_High_Transaction_Reason']) == 2):
                val15=2
            if(data['RF_Transaction_Frequency'] and (int(data['RF_Transaction_Frequency']) == 1 or int(data['RF_Transaction_Frequency']) == 2 or int(data['RF_Transaction_Frequency']) == 3)):
                val16=3
            if(data['RF_Transaction_Frequency'] and (int(data['RF_Transaction_Frequency']) == 4)):
                val16=1
            if(data['RF_Transaction_Geography'] and (int(data['RF_Transaction_Geography']) == 1)):
                val17=2
            if(data['RF_Transaction_Geography'] and (int(data['RF_Transaction_Geography']) == 2 or int(data['RF_Transaction_Geography']) == 3)):
                val17=1
            if(data['RF_Transaction_Geography'] and (int(data['RF_Transaction_Geography']) == 1)):
                val18=3
            if(data['RF_Transaction_Geography'] and (int(data['RF_Transaction_Geography']) == 2 or int(data['RF_Transaction_Geography']) == 5 or int(data['RF_Transaction_Geography']) == 6)):
                val18=2
            if(data['RF_Transaction_Geography'] and (int(data['RF_Transaction_Geography']) == 3 or int(data['RF_Transaction_Geography']) == 4)):
                val18=1
            if(data['RF_Linked_Party_Acting'] and (int(data['RF_Linked_Party_Acting']) == 1 or int(data['RF_Linked_Party_Acting']) == 2)):
                val19=1
            if(data['RF_Linked_Party_Acting'] and (int(data['RF_Linked_Party_Acting']) == 3)):
                val19=3
            if(data['RF_Linked_Party_Paying'] and (int(data['RF_Linked_Party_Paying']) == 1 )):
                val20=0
            if(data['RF_Linked_Party_Paying'] and (int(data['RF_Linked_Party_Paying']) == 2 or int(data['RF_Linked_Party_Paying']) == 3)):
                val20=3
            val4n = 0
            RF_Inception_Timeframe = ["",">3 months",">6 months","0-3 months","0-6 months"]
            data['RF_Transaction_Flow_id'] = int(data['RF_Transaction_Flow']) if data['RF_Transaction_Flow'] else 0
            data['RF_Inception_Timeframe_id'] = int(data['RF_Inception_Timeframe']) if data['RF_Inception_Timeframe'] else 0
            data['RF_Inception_Timeframe'] = RF_Inception_Timeframe[int(data['RF_Inception_Timeframe_id'])]
            data['RF_Transaction_Flow'] = RF_Transaction_Flow[int(data['RF_Transaction_Flow_id'])]
            data['RF_Transaction_Method_id'] = int(data['RF_Transaction_Method']) if data['RF_Transaction_Method'] else 0
            data['RF_Transaction_Method'] = Transaction_Method[data['RF_Transaction_Method_id']]
            data['RF_Transaction_Reason_id'] = int(data['RF_Transaction_Reason']) if data['RF_Transaction_Reason'] else 0
            data['RF_Transaction_Reason'] = RF_Transaction_Reason[data['RF_Transaction_Reason_id']]
            data['RF_High_Transaction_Reason_id'] = data['RF_High_Transaction_Reason'] and int(data['RF_High_Transaction_Reason']) if data['RF_High_Transaction_Reason'] != '' else 0
            data['RF_High_Transaction_Reason'] = RF_High_Transaction_Reason[data['RF_High_Transaction_Reason_id']]
            data['RF_Transaction_Frequency_id'] = int(data['RF_Transaction_Frequency']) if data['RF_Transaction_Frequency'] != '' else 0
            data['RF_Transaction_Frequency'] = RF_Transaction_Frequency[data['RF_Transaction_Frequency_id']]
            data['RF_Transaction_Geography_id'] = int(data['RF_Transaction_Geography']) if data['RF_Transaction_Geography'] != '' else 0
            data['RF_Transaction_Geography'] = RF_Transaction_Geography[data['RF_Transaction_Geography_id']]
            data['RF_Funds_Jurisdiction_id'] = int(data['RF_Funds_Jurisdiction']) if data['RF_Funds_Jurisdiction'] != '' else 0
            data['RF_Funds_Jurisdiction'] = CountryList[data['RF_Funds_Jurisdiction_id']]
            data['RF_Delivery_Channel_id'] = int(data['RF_Delivery_Channel']) if data['RF_Delivery_Channel'] != '' else 0
            data['RF_Delivery_Channel'] = RF_Delivery_Channel[data['RF_Delivery_Channel_id']]
            data['RF_Linked_Party_Acting_id'] = int(data['RF_Linked_Party_Acting']) if data['RF_Linked_Party_Acting'] != '' else 0
            data['RF_Linked_Party_Acting'] = RF_Linked_Party_Acting[data['RF_Linked_Party_Acting_id']]
            data['RF_Linked_Party_Paying_id'] = int(data['RF_Linked_Party_Paying']) if data['RF_Linked_Party_Paying'] != '' else 0
            data['RF_Linked_Party_Paying'] = RF_Linked_Party_Paying[data['RF_Linked_Party_Paying_id']]
            data['RF_Client_Match_id'] = int(data['RF_Client_Match']) if data['RF_Client_Match'] != '' else 0
            data['RF_Client_Match'] = RF_Client_Match[data['RF_Client_Match_id']]
            data['RF_Client_Beneficiaries_id'] = int(data['RF_Client_Beneficiaries']) if data['RF_Client_Beneficiaries'] != '' else 0
            data['RF_Client_Beneficiaries'] = RF_Client_Beneficiaries[data['RF_Client_Beneficiaries_id']]
            
            if int(data['RF_Client_Beneficiaries_id']) == 1:
                if RF_LinkedParty.objects.filter(formId = data['id']).exists():
                    data['RF_LinkedParty'] = RF_LinkedParty.objects.filter(formId = data['id']).values()
                    for row in data['RF_LinkedParty']:
                        row['RF_LP_Adjust_Risk_id'] = int(row['RF_LP_Adjust_Risk']) if row['RF_LP_Adjust_Risk'] != '' else 0
                        row['RF_LP_Adjust_Risk'] = RF_Adjust_Risk1[row['RF_LP_Adjust_Risk_id']]
                        row['RF_LP_RCA_id'] = int(row['RF_LP_RCA']) if row['RF_LP_RCA'] != '' else 0
                        row['RF_LP_RCA'] = RF_RCA[row['RF_LP_RCA_id']]
                        row['RF_LP_Client_Relationship'] = RF_Client_Relationship[int(row['RF_LP_Client_Relationship'])]
                        row['RF_LP_Linked_Party_id'] = int(row['RF_LP_Linked_Party']) if row['RF_LP_Linked_Party'] else 0
                        row['RF_LP_Linked_Party'] = RF_Client_Match[row['RF_LP_Linked_Party_id']]
                        row['RF_LP_Birth_Country_id'] = int(row['RF_LP_Birth_Country']) if row['RF_LP_Birth_Country'] != '' else 0
                        row['RF_LP_Birth_Country'] = CountryList[row['RF_LP_Birth_Country_id']]
                        row['RF_LP_Residence_Country_id'] = int(row['RF_LP_Residence_Country']) if row['RF_LP_Residence_Country'] != '' else 0
                        row['RF_LP_Residence_Country'] = CountryList[row['RF_LP_Residence_Country_id']]
                        row['RF_LP_Nationality_id'] = int(row['RF_LP_Nationality']) if row['RF_LP_Nationality'] != '' else 0
                        row['RF_LP_Nationality'] = NationalityList[row['RF_LP_Nationality_id']]
            data['RF_CountryOfRegistration_id'] = int(data['RF_CountryOfRegistration']) if data['RF_CountryOfRegistration'] != '' else 0
            data['RF_CountryOfRegistration'] = CountryList[data['RF_CountryOfRegistration_id']]
            data['RF_CountryOfOperation_id'] = int(data['RF_CountryOfOperation']) if data['RF_CountryOfOperation'] != '' else 0
            data['RF_CountryOfOperation'] = CountryList[data['RF_CountryOfOperation_id']]
            data['RF_Type_Legal_Entity_id'] = int(data['RF_Type_Legal_Entity']) if data['RF_Type_Legal_Entity'] != '' else 0
            data['RF_Type_Legal_Entity'] = RF_Type_Legal_Entity[data['RF_Type_Legal_Entity_id']]
            data['RF_ClientType_id'] = int(data['RF_ClientType'])
            data['RF_ClientType'] = int(data['RF_ClientType'])
            
            if(data['RF_Transaction_Flow_id'] and (int(data['RF_Transaction_Flow_id']) == 1 or int(data['RF_Transaction_Flow_id']) == 2)):
                val4n=val13+val14+val15+val16+val17+val18+val19+val20
            data['val4n'] = val4n 
        else:
            if Form.objects.filter(formId = data['id']).exists():            
                data['RoA'] = Form.objects.filter(formId = data['id']).values().first()
                if (
                    data['RoA']['clientEmail'] == "" and 
                    data['RoA']['clientAddress'] == "" and 
                    data['RoA']['clientPhoneNumber'] == "" and 
                    data['RoA']['clientLetterOfIntroduction'] == 2 and 
                    data['RoA']['clientLetterOfIntroductionReason'] == "" and 
                    data['RoA']['clientLetterOfIntroductionAccess'] == 2 and 
                    data['RoA']['clientLetterOfIntroductionAccessReason'] == "" and 
                    data['RoA']['clientFica'] == 2 and 
                    data['RoA']['clientFicaReason'] == "" and 
                    data['RoA']['clientBackgroundInfo'] == ""
                ):
                    data['roa_status'] = False
                else:
                    data['roa_status'] = True
                    advisor = UserAccount.objects.filter(id=data['RoA']['advisorId_id']).values('first_name','last_name').first()
                    data['RoA']['clientAdvisor'] = advisor['first_name'] + ' ' + advisor['last_name']
                    data['RoA']['clientDateOfBirth'] = (data['RoA']['clientDateOfBirth']).strftime('%d %b %Y')
            else:
                data['roa_status'] = False

            PremiumFrequency = [ "" ,"Monthly", "Quarterly", "Annually", "Once Off"]
            SourceOfFunds = ["", "Salary", "Savings", "Inheritence", "Resignation", "Retirement", "Other", ]
            IP_InvestmentStrategy = ["", "Capital Reservation", "Income", "Goal Specification Investment"]
            IP_ReturnRequired = ["","Market Linked Return","Targeted Return","Benchmark"]
            IP_RiskProfile = ["","Conservative","Cautious","Moderate","Moderately Aggressive","Aggressive"]
            # IP_ProductTaken = ["","Endowment","RA","TSFA","Unit Trust","Life Annuity","Living Annuity","Other"]
            Product_Taken = ["","Endowment","RA","TSFA","Unit Trust","Life Annuity","Living Annuity","Other"]

            if RiskPlanning.objects.filter(formId = data['id']).exists():
                data['RP'] = RiskPlanning.objects.filter(formId = data['id']).values().first()
                if (
                    data['RP']['RP_DC_LumpSumExistingProvisions'] == "" and
                    data['RP']['RP_DC_LumpSumExistingShortfallSurplus'] == "" and
                    data['RP']['RP_DC_LumpSumInvestments'] == "" and
                    data['RP']['RP_DC_LumpSumTotalNeed'] == "" and
                    data['RP']['RP_DC_IncomeTotalNeed'] == "" and
                    data['RP']['RP_DC_IncomeExistingProvisions'] == "" and
                    data['RP']['RP_DC_IncomeExistingShortfallSurplus'] == "" and
                    data['RP']['RP_DC_IncomeInvestments'] == "" and
                    data['RP']['RP_DC_FB_TotalNeed'] == "" and
                    data['RP']['RP_DC_FB_ExistingProvisions'] == "" and
                    data['RP']['RP_DC_FB_ExistingShortfallSurplus'] == "" and
                    data['RP']['RP_DC_FB_Investments'] == "" and
                    data['RP']['RP_DC_Other'] == "" and
                    data['RP']['RP_DC_OtherTotalNeed'] == "" and
                    data['RP']['RP_DC_OtherExistingProvisions'] == "" and
                    data['RP']['RP_DC_OtherExistingShortfallSurplus'] == "" and
                    data['RP']['RP_DC_OtherInvestments'] == "" and
                    data['RP']['RP_DC_Comments'] == "" and
                    data['RP']['RP_DiC_LumpSumTotalNeed'] == "" and
                    data['RP']['RP_DiC_LumpSumExistingProvisions'] == "" and
                    data['RP']['RP_DiC_LumpSumExistingShortfallSurplus'] == "" and
                    data['RP']['RP_DiC_LumpSumInvestments'] == "" and
                    data['RP']['RP_DiC_PI_TotalNeed'] == "" and
                    data['RP']['RP_DiC_PI_ExistingProvisions'] == "" and
                    data['RP']['RP_DiC_PI_ExistingShortfallSurplus'] == "" and
                    data['RP']['RP_DiC_PI_Investments'] == "" and
                    data['RP']['RP_DiC_TI_TotalNeed'] == "" and
                    data['RP']['RP_DiC_TI_ExistingProvisions'] == "" and
                    data['RP']['RP_DiC_TI_ExistingShortfallSurplus'] == "" and
                    data['RP']['RP_DiC_TI_Investments'] == "" and
                    data['RP']['RP_DiC_SiB_TotalNeed'] == "" and
                    data['RP']['RP_DiC_SiB_ExistingProvisions'] == "" and
                    data['RP']['RP_DiC_SiB_ExistingShortfallSurplus'] == "" and
                    data['RP']['RP_DiC_SiB_Investments'] == "" and
                    data['RP']['RP_DiC_Other1'] == "" and
                    data['RP']['RP_DiC_OtherTotalNeed1'] == "" and
                    data['RP']['RP_DiC_OtherExistingProvisions1'] == "" and
                    data['RP']['RP_DiC_OtherExistingShortfallSurplus1'] == "" and
                    data['RP']['RP_DiC_OtherInvestments1'] == "" and
                    data['RP']['RP_DiC_Other2'] == "" and
                    data['RP']['RP_DiC_OtherTotalNeed2'] == "" and
                    data['RP']['RP_DiC_OtherExistingProvisions2'] == "" and
                    data['RP']['RP_DiC_OtherExistingShortfallSurplus2'] == "" and
                    data['RP']['RP_DiC_OtherInvestments2'] == "" and
                    data['RP']['RP_DiC_Comments'] == "" and
                    data['RP']['RP_DrC_LumpSumTotalNeed'] == "" and
                    data['RP']['RP_DrC_LumpSumExistingProvisions'] == "" and
                    data['RP']['RP_DrC_LumpSumExistingShortfallSurplus'] == "" and
                    data['RP']['RP_DrC_LumpSumInvestments'] == "" and
                    data['RP']['RP_DrC_IncomeTotalNeed'] == "" and
                    data['RP']['RP_DrC_IncomeExistingProvisions'] == "" and
                    data['RP']['RP_DrC_IncomeExistingShortfallSurplus'] == "" and
                    data['RP']['RP_DrC_IncomeInvestments'] == "" and
                    data['RP']['RP_DrC_Other1'] == "" and
                    data['RP']['RP_DrC_OtherTotalNeed1'] == "" and
                    data['RP']['RP_DrC_OtherExistingProvisions1'] == "" and
                    data['RP']['RP_DrC_OtherExistingShortfallSurplus1'] == "" and
                    data['RP']['RP_DrC_OtherInvestments1'] == "" and
                    data['RP']['RP_DrC_Other2'] == "" and
                    data['RP']['RP_DrC_OtherTotalNeed2'] == "" and
                    data['RP']['RP_DrC_OtherExistingProvisions2'] == "" and
                    data['RP']['RP_DrC_OtherExistingShortfallSurplus2'] == "" and
                    data['RP']['RP_DrC_Comments'] == "" and
                    data['RP']['RP_LC_FinancialSolutions'] == "" and
                    data['RP']['RP_DiC_FinancialSolutions'] == "" and
                    data['RP']['RP_DrC_FinancialSolutions'] == "" and
                    data['RP']['RP_AltS_1'] == "" and
                    data['RP']['RP_AltS_2'] == "" and
                    data['RP']['RP_AltS_3'] == "" 
                ):
                    data['rp_status'] = False
                else:
                    data['rp_status'] = True
                    if Risk_DC_Others.objects.filter(formId = data['id']).exists():
                        data['RP']['DC_Other_Data'] = Risk_DC_Others.objects.filter(formId = data['id']).values()
                    if Risk_DiC_Others.objects.filter(formId = data['id']).exists():
                        data['RP']['DiC_Other_Data'] = Risk_DiC_Others.objects.filter(formId = data['id']).values()
                    if Risk_DrC_Others.objects.filter(formId = data['id']).exists():
                        data['RP']['DrC_Other_Data'] = Risk_DrC_Others.objects.filter(formId = data['id']).values()
                    if RP_ProductTaken.objects.filter(formId = data['id']).exists():
                        data['RP']['RP_ProductTaken_Data'] = RP_ProductTaken.objects.filter(formId = data['id']).values()
                        for row in data['RP']['RP_ProductTaken_Data']:
                            # Product_Taken_id = int(row['Product_Taken'])
                            row['Product_Taken'] = row['Product_Taken']
                            row['Product_PremiumFrequency'] = PremiumFrequency[int(row['Product_PremiumFrequency'])]
                            row['Product_OngoingFeesFrequency1'] = PremiumFrequency[int(row['Product_OngoingFeesFrequency1'])]
            else:
                data['rp_status'] = False
            if InvestmentPlanning.objects.filter(formId=data['id']).exists():
                data['IP'] = InvestmentPlanning.objects.filter(formId=data['id']).values().first()
                if (
                    data['IP']['IP_SourceOfIncome'] == 0 and
                    data['IP']['IP_OtherSourceOfIncome'] == "" and
                    data['IP']['IP_InvestmentTerm'] == "" and
                    data['IP']['IP_InvestmentTermDetails'] == "" and
                    data['IP']['IP_Liquidity'] == 2 and
                    data['IP']['IP_LiquidityDetails'] == "" and
                    data['IP']['IP_Type'] == 2 and
                    data['IP']['IP_TypeDetails'] == "" and
                    data['IP']['IP_PremiumType'] == 2 and
                    data['IP']['IP_PremiumTypeDetails'] == "" and
                    data['IP']['IP_IncomeRequired'] == 2 and
                    data['IP']['IP_IncomeRequiredDetails'] == "" and
                    data['IP']['IP_InvestmentStrategy'] == 2 and
                    data['IP']['IP_InvestmentStrategyDetails'] == "" and
                    data['IP']['IP_ReturnRequired'] == 2 and
                    data['IP']['IP_ReturnRequiredDetails'] == "" and
                    data['IP']['IP_RiskProfile'] == 2 and
                    data['IP']['IP_RiskProfileDetails'] == "" and
                    data['IP']['IP_RecommendationSummary'] == "" and
                    data['IP']['IP_AltS_1'] == "" and
                    data['IP']['IP_AltS_2'] == "" and
                    data['IP']['IP_AltS_3'] == ""
                ):
                    data['ip_status'] = False
                else:
                    data['ip_status'] = True
                    data['IP']['IP_SourceOfIncome'] = SourceOfFunds[int(data['IP']['IP_SourceOfIncome'])]
                    data['IP']['IP_InvestmentStrategy'] = IP_InvestmentStrategy[int(data['IP']['IP_InvestmentStrategy'])]
                    data['IP']['IP_ReturnRequired'] = IP_ReturnRequired[int(data['IP']['IP_ReturnRequired'])]
                    data['IP']['IP_RiskProfile'] = IP_RiskProfile[int(data['IP']['IP_RiskProfile'])]
                    if IP_ProductTaken.objects.filter(formId = data['id']).exists():
                        data['IP']['IP_ProductTaken_Data'] = IP_ProductTaken.objects.filter(formId = data['id']).values()
                        for row in data['IP']['IP_ProductTaken_Data']:
                            row['ProductTaken_id'] = row['ProductTaken']
                            row['ProductTaken'] = Product_Taken[int(row['ProductTaken'])]
                            row['ProductPremiumFrequency'] = PremiumFrequency[int(row['ProductPremiumFrequency'])]
            else:
                data['ip_status'] = False
            
            if AssuranceRisk.objects.filter(formId=data['id']).exists():
                data['BA_Risk'] = AssuranceRisk.objects.filter(formId=data['id']).values().first()
                if (
                    data['BA_Risk']['AR_BusinessTradeName'] == "" and   
                    data['BA_Risk']['AR_BusinessRegisteredName'] == "" and   
                    data['BA_Risk']['AR_BusinessAuthorisedPersons'] == "" and   
                    # data['BA_Risk']['AR_BusinessFinancialAdvisor'] == "" and   
                    data['BA_Risk']['AR_BusinessAddress'] == "" and   
                    data['BA_Risk']['AR_BusinessEmail'] == "" and   
                    data['BA_Risk']['AR_BusinessPhoneNumber'] == "" and   
                    data['BA_Risk']['AR_BusinessDate'] == "" and   
                    data['BA_Risk']['AR_ComDisc_AuthorizedPerson'] == 2 and 
                    data['BA_Risk']['AR_ComDisc_AuthorizedPersonDetail'] == "" and   
                    data['BA_Risk']['AR_ComDisc_Authority'] == 2 and 
                    data['BA_Risk']['AR_ComDisc_AuthorityDetail'] == "" and   
                    data['BA_Risk']['AR_FICA'] == 2 and 
                    data['BA_Risk']['AR_FICADetail'] == "" and   
                    data['BA_Risk']['AR_RepPrs_Taken'] == 2 and 
                    data['BA_Risk']['AR_RepPrs_TakenDetail'] == "" and   
                    data['BA_Risk']['AR_RepPrs_Explained'] == 2 and 
                    data['BA_Risk']['AR_RepPrs_ExplainedDetail'] == "" and   
                    data['BA_Risk']['AR_RepPrs_Cancelled'] == 2 and 
                    data['BA_Risk']['AR_RepPrs_CancelledDetail'] == "" and  
                    data['BA_Risk']['AR_SourceOfFunds'] == 2 and 
                    data['BA_Risk']['AR_SourceOfFundsDetail'] == "" and           
                    data['BA_Risk']['AR_ReplacementBackInfo'] == "" and   
                    data['BA_Risk']['AR_BusA_BnS'] == False and  
                    data['BA_Risk']['AR_BusA_KeyP_Insurance'] == False and  
                    data['BA_Risk']['AR_BusA_ContingentLiability'] == False and  
                    data['BA_Risk']['AR_BusA_BusOvProt'] == False and  
                    data['BA_Risk']['AR_BusA_CLARedm'] == False and  
                    data['BA_Risk']['AR_BusA_DebitLoanRedemption'] == False and  
                    data['BA_Risk']['AR_BusA_FundingOfFutureExpenses'] == False and  
                    data['BA_Risk']['AR_BusA_FundingOfDeferredGratuities'] == False and  
                    data['BA_Risk']['AR_BusA_Details'] == "" and    
                    # data['BA_Risk']['AR_BnS_DeathTotalNeed'] == "" and   
                    # data['BA_Risk']['AR_BnS_DeathProvisions'] == "" and   
                    # data['BA_Risk']['AR_BnS_DeathShortfallSurplus'] == "" and   
                    # data['BA_Risk']['AR_BnS_DeathAssuranceInvestments'] == "" and   
                    data['BA_Risk']['AR_BnS_DiC_TotalNeed'] == "" and   
                    data['BA_Risk']['AR_BnS_DiC_ExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_BnS_DiC_ExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_BnS_DiC_Investments'] == "" and      
                    data['BA_Risk']['AR_BnS_Other'] == "" and   
                    data['BA_Risk']['AR_BnS_OtherTotalNeed'] == "" and   
                    data['BA_Risk']['AR_BnS_OtherExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_BnS_OtherExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_BnS_OtherInvestments'] == "" and               
                    data['BA_Risk']['AR_BnS_Comments'] == "" and   
                    data['BA_Risk']['AR_KeyP_DC_TotalNeed'] == "" and   
                    data['BA_Risk']['AR_KeyP_DC_ExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_KeyP_DC_ExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_KeyP_DC_Investments'] == "" and               
                    data['BA_Risk']['AR_KeyP_DiC_TotalNeed'] == "" and   
                    data['BA_Risk']['AR_KeyP_DiC_ExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_KeyP_DiC_ExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_KeyP_DiC_Investments'] == "" and               
                    data['BA_Risk']['AR_KeyP_TI_CoverTotalNeed'] == "" and   
                    data['BA_Risk']['AR_KeyP_TI_CoverExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_KeyP_TI_CoverExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_KeyP_TI_CoverInvestments'] == "" and                   
                    data['BA_Risk']['AR_KeyP_PI_CoverTotalNeed'] == "" and   
                    data['BA_Risk']['AR_KeyP_PI_CoverExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_KeyP_PI_CoverExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_KeyP_PI_CoverInvestments'] == "" and    
                    data['BA_Risk']['AR_KeyP_Other'] == "" and   
                    data['BA_Risk']['AR_KeyP_OtherTotalNeed'] == "" and   
                    data['BA_Risk']['AR_KeyP_OtherExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_KeyP_OtherExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_KeyP_OtherInvestments'] == "" and                
                    data['BA_Risk']['AR_KeyP_Comments'] == "" and       
                    # data['BA_Risk']['AR_SureNLia_DeathTotalNeed'] == "" and   
                    # data['BA_Risk']['AR_SureNLia_DeathProvisions'] == "" and   
                    # data['BA_Risk']['AR_SureNLia_DeathShortfallSurplus'] == "" and   
                    # data['BA_Risk']['AR_SureNLia_DeathAssuranceInvestments'] == "" and               
                    data['BA_Risk']['AR_SureNLia_DiC_TotalNeed'] == "" and   
                    data['BA_Risk']['AR_SureNLia_DiC_Provisions'] == "" and   
                    data['BA_Risk']['AR_SureNLia_DiC_ShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_SureNLia_DiC_Investments'] == "" and      
                    data['BA_Risk']['AR_SureNLia_Other'] == "" and   
                    data['BA_Risk']['AR_SureNLia_OtherTotalNeed'] == "" and   
                    data['BA_Risk']['AR_SureNLia_OtherProvisions'] == "" and   
                    data['BA_Risk']['AR_SureNLia_OtherShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_SureNLia_OtherInvestments'] == "" and               
                    data['BA_Risk']['AR_SureNLia_Comments'] == "" and               
                    data['BA_Risk']['AR_BusOvProt_TI_CoverTotalNeed'] == "" and   
                    data['BA_Risk']['AR_BusOvProt_TI_CoverExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_BusOvProt_TI_CoverExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_BusOvProt_TI_CoverInvestments'] == "" and      
                    data['BA_Risk']['AR_BusOvProt_PI_CoverTotalNeed'] == "" and   
                    data['BA_Risk']['AR_BusOvProt_PI_CoverExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_BusOvProt_PI_CoverExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_BusOvProt_PI_CoverInvestments'] == "" and      
                    data['BA_Risk']['AR_BusOvProt_Other'] == "" and   
                    data['BA_Risk']['AR_BusOvProt_OtherTotalNeed'] == "" and   
                    data['BA_Risk']['AR_BusOvProt_OtherExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_BusOvProt_OtherExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_BusOvProt_OtherInvestments'] == "" and                
                    data['BA_Risk']['AR_BusOvProt_Comments'] == "" and 
                    data['BA_Risk']['AR_CLARedm_DC_TotalNeed'] == "" and   
                    data['BA_Risk']['AR_CLARedm_DC_ExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_CLARedm_DC_ExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_CLARedm_DC_Investments'] == "" and               
                    data['BA_Risk']['AR_CLARedm_DiC_TotalNeed'] == "" and   
                    data['BA_Risk']['AR_CLARedm_DiC_ExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_CLARedm_DiC_ExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_CLARedm_DiC_Investments'] == "" and               
                    data['BA_Risk']['AR_CLARedm_Other'] == "" and   
                    data['BA_Risk']['AR_CLARedm_OtherTotalNeed'] == "" and   
                    data['BA_Risk']['AR_CLARedm_OtherExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_CLARedm_OtherExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_CLARedm_OtherInvestments'] == "" and 
                    data['BA_Risk']['AR_DLARedm_DC_TotalNeed'] == "" and   
                    data['BA_Risk']['AR_DLARedm_DC_ExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_DLARedm_DC_ExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_DLARedm_DC_Investments'] == "" and               
                    data['BA_Risk']['AR_DLARedm_DiC_TotalNeed'] == "" and   
                    data['BA_Risk']['AR_DLARedm_DiC_ExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_DLARedm_DiC_ExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_DLARedm_DiC_Investments'] == "" and               
                    data['BA_Risk']['AR_DLARedm_Other'] == "" and   
                    data['BA_Risk']['AR_DLARedm_OtherTotalNeed'] == "" and   
                    data['BA_Risk']['AR_DLARedm_OtherExistingProvisions'] == "" and   
                    data['BA_Risk']['AR_DLARedm_OtherExistingShortfallSurplus'] == "" and   
                    data['BA_Risk']['AR_DLARedm_OtherInvestments'] == "" and          
                    data['BA_Risk']['AR_LifeCoverFinancialSolutions'] == "" and   
                    data['BA_Risk']['AR_DiC_FinancialSolutions'] == "" and  
                    data['BA_Risk']['AR_AltS_1'] == "" and   
                    data['BA_Risk']['AR_AltS_2'] == "" and   
                    data['BA_Risk']['AR_AltS_3'] == "" 
                ) :
                    data['BA_Risk_status'] = False
                else:
                    data['BA_Risk_status'] = True
                    if AR_BnS_Others.objects.filter(formId = data['id']).exists():
                        data['BA_Risk']['BnS_Other_Data'] = AR_BnS_Others.objects.filter(formId = data['id']).values()
                    if AR_KeyP_Others.objects.filter(formId = data['id']).exists():
                        data['BA_Risk']['KeyP_Other_Data'] = AR_KeyP_Others.objects.filter(formId = data['id']).values()
                    if AR_SureNLia_Others.objects.filter(formId = data['id']).exists():
                        data['BA_Risk']['SureNLia_Other_Data'] = AR_SureNLia_Others.objects.filter(formId = data['id']).values()
                    if AR_BusOvProt_Others.objects.filter(formId = data['id']).exists():
                        data['BA_Risk']['BusOvProt_Other_Data'] = AR_BusOvProt_Others.objects.filter(formId = data['id']).values()
                    if AR_CLARedm_Others.objects.filter(formId = data['id']).exists():
                        data['BA_Risk']['CLARedm_Other_Data'] = AR_CLARedm_Others.objects.filter(formId = data['id']).values()
                    if AR_DLARedm_Others.objects.filter(formId = data['id']).exists():
                        data['BA_Risk']['DLARedm_Other_Data'] = AR_DLARedm_Others.objects.filter(formId = data['id']).values()
                    
                    if AR_ProductTaken.objects.filter(formId = data['id']).exists():
                        data['BA_Risk']['AR_ProductTaken_Data'] = AR_ProductTaken.objects.filter(formId = data['id']).values()
                        for row in data['BA_Risk']['AR_ProductTaken_Data']:
                            # row['ProductTaken_id'] = row['ProductTaken']
                            row['ProductTaken'] = row['ProductTaken']
                            row['ProductPremiumFrequency'] = PremiumFrequency[int(row['ProductPremiumFrequency'])]
                data['BA_Risk']['AR_BusinessDate'] = datetimeparser.parse(data['BA_Risk']['AR_BusinessDate']).strftime('%d %b %Y') if data['BA_Risk']['AR_BusinessDate'] != "" else "N.A."
                # data['BA_Risk']['AR_ProductPremiumFrequency'] = PremiumFrequency[int(data['BA_Risk']['AR_ProductPremiumFrequency'])]
            else:
                data['BA_Risk_status'] = False
            InvestmentStrategy = ["" ,"Capital Growth" , "Capital Preservtion", "Income", "Specified Goal Investment"]    
            ReturnRequired = ["" ,"Guaranteed Return", "Marketed Linked Return", "Targeted Return", "Benchmark"]      
            RiskProfile = ["" , "Ultra Conservative", "Conservative", "Cautious", "Moderate"] 
            SourceOfFunds = ["", "Salary", "Savings", "Inheritence", "Resignation", "Retirement", "Other", ]
            if AssuranceInvestment.objects.filter(formId=data['id']).exists():
                data['BA_Investment'] = AssuranceInvestment.objects.filter(formId=data['id']).values().first()
                if (
                    data['BA_Investment']['AI_Term'] == "" and    
                    data['BA_Investment']['AI_TermDetails'] == "" and    
                    data['BA_Investment']['AI_PremiumType'] == 2 and    
                    data['BA_Investment']['AI_PremiumTypeDetails'] == "" and       
                    data['BA_Investment']['AI_Strategy'] == 1 and    
                    data['BA_Investment']['AI_StrategyDetails'] == "" and    
                    data['BA_Investment']['AI_ReturnRequired'] == 1 and    
                    data['BA_Investment']['AI_ReturnRequiredDetails'] == "" and    
                    data['BA_Investment']['AI_RiskProfile'] == 1 and      
                    data['BA_Investment']['AI_RiskProfileDetails'] == "" and      
                    data['BA_Investment']['AI_TRP_TotalNeed'] == "" and    
                    data['BA_Investment']['AI_TRP_ExistingProvisions'] == "" and    
                    data['BA_Investment']['AI_TRP_ExistingShortfallSurplus'] == "" and    
                    data['BA_Investment']['AI_TRP_ExistingInvestments'] == "" and    
                    data['BA_Investment']['AI_RA_TotalNeed'] == "" and    
                    data['BA_Investment']['AI_RA_ExistingProvisions'] == "" and    
                    data['BA_Investment']['AI_RA_ExistingShortfallSurplus'] == "" and    
                    data['BA_Investment']['AI_RA_ExistingInvestments'] == "" and    
                    data['BA_Investment']['AI_CR_TotalNeed'] == "" and    
                    data['BA_Investment']['AI_CR_ExistingProvisions'] == "" and    
                    data['BA_Investment']['AI_CR_ExistingShortfallSurplus'] == "" and    
                    # data['BA_Investment']['AI_CR_Investments'] == "" and    
                    data['BA_Investment']['AI_Other'] == "" and    
                    data['BA_Investment']['AI_Other_TotalNeed'] == "" and    
                    data['BA_Investment']['AI_Other_ExistingProvisions'] == "" and    
                    data['BA_Investment']['AI_Other_ExistingShortfallSurplus'] == "" and    
                    # data['BA_Investment']['AI_Other_Investments'] == "" and    
                    data['BA_Investment']['AI_FinancialSolutions'] == "" and    
                    data['BA_Investment']['AI_AltS_1'] == "" and    
                    data['BA_Investment']['AI_AltS_2'] == "" and    
                    data['BA_Investment']['AI_AltS_3'] == ""
                ):
                    data['BA_Investment_status'] = False
                else: 
                    data['BA_Investment_status'] = True
                    if AI_Others.objects.filter(formId = data['id']).exists():
                        data['BA_Investment']['AI_Others_Data'] = AI_Others.objects.filter(formId = data['id']).values()
                    if AI_ProductTaken.objects.filter(formId = data['id']).exists():
                        data['BA_Investment']['AI_ProductTaken_Data'] = AI_ProductTaken.objects.filter(formId = data['id']).values()
                        for row in data['BA_Investment']['AI_ProductTaken_Data']:
                            row['Pr_Taken_id'] = row['Pr_Taken']
                            row['Pr_Taken'] = Product_Taken[int(row['Pr_Taken'])]
                            row['Pr_PremiumFrequency'] = PremiumFrequency[int(row['Pr_PremiumFrequency'])]
                            row['SourceOfFunds'] = SourceOfFunds[int(row['SourceOfFunds'])] if row['SourceOfFunds'] !='' else SourceOfFunds[0]
                    data['BA_Investment']['AI_Strategy'] = InvestmentStrategy[int(data['BA_Investment']['AI_Strategy'])] if data['BA_Investment']['AI_Strategy'] !='' else InvestmentStrategy[0]
                    data['BA_Investment']['AI_ReturnRequired'] = ReturnRequired[int(data['BA_Investment']['AI_ReturnRequired'])] if data['BA_Investment']['AI_ReturnRequired'] !='' else ReturnRequired[0]
                    data['BA_Investment']['AI_RiskProfile'] = RiskProfile[int(data['BA_Investment']['AI_RiskProfile'])] if data['BA_Investment']['AI_RiskProfile'] !='' else RiskProfile[0]
                    
            else:
                data['BA_Investment_status'] = False
            if EmployeeBenefits.objects.filter(formId=data['id']).exists():
                data['EB'] = EmployeeBenefits.objects.filter(formId=data['id']).values().first()
                if (
                    data['EB']['EB_ClientAddress'] == "" and
                    data['EB']['EB_ClientPhoneNumber'] == "" and
                    data['EB']['EB_ClientCellNumber'] == "" and
                    data['EB']['EB_ClientEmail'] == "" and
                    data['EB']['EB_ClientDate'] == "" and
                    # data['EB']['EB_ClientFinancialAdvisor'] == "" and
                    data['EB']['EB_ClientFeeDetails'] == "" and
                    data['EB']['EB_BusinessName'] == "" and
                    data['EB']['EB_BusinessAddress'] == "" and
                    data['EB']['EB_BusinessContactPerson'] == "" and
                    data['EB']['EB_BusinessPhoneNumber'] == "" and
                    data['EB']['EB_BusinessCellNumber'] == "" and
                    data['EB']['EB_BusinessEmail'] == "" and
                    data['EB']['EB_BusinessNature'] == "" and
                    data['EB']['EB_BusinessUnion'] == 2 and
                    data['EB']['EB_BusinessDetails'] == "" and
                    data['EB']['EB_BusinessNumberOfEmployees'] == "" and
                    data['EB']['EB_BusinessNumberOfEligibleEmployees'] == "" and
                    data['EB']['EB_BusinessNumberOfExcludedCategories'] == "" and
                    data['EB']['EB_BusEx_FundsName'] == "" and
                    data['EB']['EB_BusEx_FundsAdmin'] == "" and
                    data['EB']['EB_BusEx_FundsCurrentValue'] == "" and
                    data['EB']['EB_BusEx_FundsActiveMembers'] == "" and
                    data['EB']['EB_BusEx_FundsFullyPaidMembers'] == "" and
                    data['EB']['EB_BusEx_FundsFullyReasonForChange'] == "" and
                    data['EB']['EB_BusB_CoverDetails'] == "" and
                    data['EB']['EB_BusEmp_Retire_In5Years'] == 2 and
                    data['EB']['EB_BusEmp_Retire_In5YearsPercentage'] == "" and
                    data['EB']['EB_BusEmp_Fin_Illiterate'] == 2 and
                    data['EB']['EB_BusEmp_Fin_IlliteratePercentage'] == "" and
                    data['EB']['EB_BusEmp_Fin_Sophisticated'] == 2 and
                    data['EB']['EB_BusEmp_Fin_SophisticatedPercentage'] == "" and
                    data['EB']['EB_BusHS_TurnOver'] == 2 and
                    data['EB']['EB_BusHS_TurnOverPercentage'] == "" and
                    data['EB']['EB_BusI_Choice'] == 2 and
                    data['EB']['EB_BusI_ChoicePercentage'] == "" and
                    data['EB']['EB_BusinessItP'] == 2 and
                    data['EB']['EB_BusinessItP_Percentage'] == "" and
                    data['EB']['EB_BusEmp_AdditionalComments'] == "" and
                    data['EB']['EB_BusRB_Category1'] == "" and
                    data['EB']['EB_BusRB_Category2'] == "" and
                    data['EB']['EB_BusRB_Category3'] == "" and
                    data['EB']['EB_BusRB_Category4'] == "" and
                    data['EB']['EB_BusRB_MemContrib_Category1'] == "" and
                    data['EB']['EB_BusRB_MemContrib_Category2'] == "" and
                    data['EB']['EB_BusRB_MemContrib_Category3'] == "" and
                    data['EB']['EB_BusRB_MemContrib_Category4'] == "" and
                    data['EB']['EB_BusRB_EmpContrib_Category1'] == "" and
                    data['EB']['EB_BusRB_EmpContrib_Category2'] == "" and
                    data['EB']['EB_BusRB_EmpContrib_Category3'] == "" and
                    data['EB']['EB_BusRB_EmpContrib_Category4'] == "" and
                    data['EB']['EB_BusRB_NormRetire_AgeCategory1'] == "" and
                    data['EB']['EB_BusRB_NormRetire_AgeCategory2'] == "" and
                    data['EB']['EB_BusRB_NormRetire_AgeCategory3'] == "" and
                    data['EB']['EB_BusRB_NormRetire_AgeCategory4'] == "" and
                    data['EB']['EB_BusRB_FlexibleGroupLife'] == "" and
                    data['EB']['EB_BusRB_Approved'] == 2 and
                    data['EB']['EB_BusRB_ApprovedCategory1'] == "" and
                    data['EB']['EB_BusRB_ApprovedCategory2'] == "" and
                    data['EB']['EB_BusRB_ApprovedCategory3'] == "" and
                    data['EB']['EB_BusRB_ApprovedCategory4'] == "" and
                    data['EB']['EB_BusRB_UnApproved'] == 2 and
                    data['EB']['EB_BusRB_UnApprovedCategory1'] == "" and
                    data['EB']['EB_BusRB_UnApprovedCategory2'] == "" and
                    data['EB']['EB_BusRB_UnApprovedCategory3'] == "" and
                    data['EB']['EB_BusRB_UnApprovedCategory4'] == "" and
                    data['EB']['EB_BusinessRiskFundTakeOver'] == 2 and
                    data['EB']['EB_BusRB_SpouseLC_Category1'] == "" and
                    data['EB']['EB_BusRB_SpouseLC_Category2'] == "" and
                    data['EB']['EB_BusRB_SpouseLC_Category3'] == "" and
                    data['EB']['EB_BusRB_SpouseLC_Category4'] == "" and
                    data['EB']['EB_BusRB_SpouseLC_Notes'] == "" and
                    data['EB']['EB_BusRB_TrauBenSa_Category1'] == "" and
                    data['EB']['EB_BusRB_TrauBenSa_Category2'] == "" and
                    data['EB']['EB_BusRB_TrauBenSa_Category3'] == "" and
                    data['EB']['EB_BusRB_TrauBenSa_Category4'] == "" and
                    data['EB']['EB_BusRB_FB_CoverCategory1'] == "" and
                    data['EB']['EB_BusRB_FB_CoverCategory2'] == "" and
                    data['EB']['EB_BusRB_FB_CoverCategory3'] == "" and
                    data['EB']['EB_BusRB_FB_CoverCategory4'] == "" and
                    data['EB']['EB_BusRB_CapDisBen_Approved'] == 2 and
                    data['EB']['EB_BusRB_CapDisBen_ApprovedCategory1'] == "" and
                    data['EB']['EB_BusRB_CapDisBen_ApprovedCategory2'] == "" and
                    data['EB']['EB_BusRB_CapDisBen_ApprovedCategory3'] == "" and
                    data['EB']['EB_BusRB_CapDisBen_ApprovedCategory4'] == "" and
                    data['EB']['EB_BusRB_CapDisBen_UnApproved'] == 2 and
                    data['EB']['EB_BusRB_CapDisBen_UnApprovedCategory1'] == "" and
                    data['EB']['EB_BusRB_CapDisBen_UnApprovedCategory2'] == "" and
                    data['EB']['EB_BusRB_CapDisBen_UnApprovedCategory3'] == "" and
                    data['EB']['EB_BusRB_CapDisBen_UnApprovedCategory4'] == "" and
                    data['EB']['EB_BusRB_DiIBenWaitPer_Category1'] == "0" and
                    data['EB']['EB_BusRB_DiIBenWaitPer_Category2'] == "0" and
                    data['EB']['EB_BusRB_DiIBenWaitPer_Category3'] == "0" and
                    data['EB']['EB_BusRB_DiIBenWaitPer_Category4'] == "0" and
                    data['EB']['EB_BusRB_ConvOp'] == "" and
                    data['EB']['EB_BusRB_GrowthRates'] == "" and
                    data['EB']['EB_BusRB_DisabilityBenefitsNotes'] == "" and
                    data['EB']['EB_BusRB_AccidentBenefit'] == 0 and
                    data['EB']['EB_BusRB_AccidentBenefitCategory1'] == "" and
                    data['EB']['EB_BusRB_AccidentBenefitCategory2'] == "" and
                    data['EB']['EB_BusRB_AccidentBenefitCategory3'] == "" and
                    data['EB']['EB_BusRB_AccidentBenefitCategory4'] == "" and
                    data['EB']['EB_BusRB_AccidentBenefitReason'] == "" and
                    data['EB']['EB_BusRB_DiC_Reason'] == "" and
                    data['EB']['EB_BusRB_DrC_Reason'] == "" and
                    data['EB']['EB_BusRB_DrC_Summary'] == "" and
                    data['EB']['EB_BusRecom_ProductAdmin'] == "" and
                    data['EB']['EB_BusRecom_ProductName'] == "" and
                    data['EB']['EB_BusRecom_FundType'] == "" and
                    data['EB']['EB_BusRecom_RecommendationFundType'] == "" and
                    data['EB']['EB_BusRecom_Portfolio'] == 2 and
                    data['EB']['EB_BusRecom_ClientAccepted'] == 2 and
                    data['EB']['EB_BusRecom_ClientRisks'] == "" and
                    data['EB']['EB_BusFReplace_Name'] == "" and
                    data['EB']['EB_BusFReplace_RegNo'] == "" and
                    data['EB']['EB_BusFReplace_Type'] == "" and
                    data['EB']['EB_BusFReplace_Detail'] == 2 and
                    data['EB']['EB_BusFReplace_FeeChargesReplaced'] == "" and
                    data['EB']['EB_BusFReplace_FeeChargesExisting'] == "" and
                    data['EB']['EB_BusFReplace_TnC_Replaced'] == "" and
                    data['EB']['EB_BusFReplace_TnC_Existing'] == "" and
                    data['EB']['EB_BusFReplace_HealthChangesReplaced'] == "" and
                    data['EB']['EB_BusFReplace_HealthChangesExisting'] == "" and
                    data['EB']['EB_BusFReplace_TaxImplicationsReplaced'] == "" and
                    data['EB']['EB_BusFReplace_TaxImplicationsExisting'] == "" and
                    data['EB']['EB_BusFReplace_MaterialDifferencesReplaced'] == "" and
                    data['EB']['EB_BusFReplace_MaterialDifferencesExisting'] == "" and
                    data['EB']['EB_BusFReplace_PenaltiesReplaced'] == "" and
                    data['EB']['EB_BusFReplace_PenaltiesExisting'] == "" and
                    data['EB']['EB_BusFReplace_RealisedReplaced'] == "" and
                    data['EB']['EB_BusFReplace_RealisedExisting'] == "" and
                    data['EB']['EB_BusFReplace_EligGr_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_EligGr_Existing'] == "" and
                    data['EB']['EB_BusFReplace_MemContrib_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_MemContrib_Existing'] == "" and
                    data['EB']['EB_BusFReplace_EmpContrib_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_EmpContrib_Existing'] == "" and
                    data['EB']['EB_BusFReplace_EmpContrib_PercentageProposed'] == "" and
                    data['EB']['EB_BusFReplace_EmpContrib_PercentageExisting'] == "" and
                    data['EB']['EB_BusFReplace_BenPayDis_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_BenPayDis_Existing'] == "" and
                    data['EB']['EB_BusFReplace_BenPayD_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_BenPayD_Existing'] == "" and
                    data['EB']['EB_BusFReplace_BenPayW_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_BenPayW_Existing'] == "" and
                    data['EB']['EB_BusFReplace_BenPayRe_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_BenPayRe_Existing'] == "" and
                    data['EB']['EB_BusFReplace_NormRetire_AgeProposed'] == "" and
                    data['EB']['EB_BusFReplace_NormRetire_AgeExisting'] == "" and
                    data['EB']['EB_BusFReplace_ConvOp_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_ConvOp_Existing'] == "" and
                    data['EB']['EB_BusFReplace_HouseL_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_HouseL_Existing'] == "" and
                    data['EB']['EB_BusFReplace_AdminC_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_AdminC_Existing'] == "" and
                    data['EB']['EB_BusFReplace_InvestFee_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_InvestFee_Existing'] == "" and
                    data['EB']['EB_BusFReplace_CoR_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_CoR_Existing'] == "" and
                    data['EB']['EB_BusFReplace_BenA_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_BenA_Existing'] == "" and
                    data['EB']['EB_BusFReplace_InvestCh_Proposed'] == "" and
                    data['EB']['EB_BusFReplace_InvestCh_Existing'] == "" 
                ):
                    data['EB_status'] = False
                else:
                    data['EB_status'] = True
                    data['EB']['EB_ClientDate'] = datetimeparser.parse(data['EB']['EB_ClientDate']).strftime('%d %b %Y') if data['EB']['EB_ClientDate'] != "" else "N.A."
                    eb_cnr = ["", "Retirement Benefits", "Type of fund/scheme", "Truama Benefits", "Funeral Benefits", "Accidental Benefits", "Group Life Cover", "Lump Sum Disability Cover", "Spouse Life Cover", "Disability Income Cover", ]     
                    if EB_Cover.objects.filter(formId = data['id']).exists():
                        data['EB']['Cover_Data'] = EB_Cover.objects.filter(formId = data['id']).values()
                        for row in data['EB']['Cover_Data']:
                            row['BusB_CoverType'] = eb_cnr[int(row['BusB_CoverType'])]
                    waitingPeriod = ['', '1', '3', '6', '12', '24']
                    benefit = ['', '% of group life cover', 'x annual salary']
                    data['EB']['EB_BusRB_DiIBenWaitPer_Category1'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category1'])]
                    data['EB']['EB_BusRB_DiIBenWaitPer_Category2'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category2'])]
                    data['EB']['EB_BusRB_DiIBenWaitPer_Category3'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category3'])]
                    data['EB']['EB_BusRB_DiIBenWaitPer_Category4'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category4'])]
                    data['EB']['EB_BusRB_AccidentBenefit'] = benefit[int(data['EB']['EB_BusRB_AccidentBenefit'])]
            else:
                data['EB_status'] = False
            if Fiduciary.objects.filter(formId=data['id']).exists():
                data['Fiduciary'] = Fiduciary.objects.filter(formId=data['id']).values().first()
                if (
                    data['Fiduciary']['fiduciaryWillInPlace'] == 2 and
                    data['Fiduciary']['fiduciaryWillUpdationDate'] == "" and
                    data['Fiduciary']['fiduciaryWillKeepingPlace'] == "" and
                    data['Fiduciary']['fiduciaryExecutorDetails'] == "" and
                    data['Fiduciary']['fiduciaryClientInstructions'] == "" and
                    data['Fiduciary']['fiduciaryConsequencesExplained'] == ""
                ):
                    data['Fiduciary_status'] = False
                else:
                    data['Fiduciary_status'] = True
                data['Fiduciary']['fiduciaryWillUpdationDate'] = datetimeparser.parse(data['Fiduciary']['fiduciaryWillUpdationDate']).strftime('%d %b %Y')  if data['Fiduciary']['fiduciaryWillUpdationDate'] != "" else "N.A."
            else:
                data['Fiduciary_status'] = False
            if Medical.objects.filter(formId=data['id']).exists():
                data['MD'] = Medical.objects.filter(formId=data['id']).values().first()
                if (
                    data['MD']['MSA_ClientAddress'] == "" and
                    data['MD']['MSA_ClientEmail'] == "" and
                    data['MD']['MSA_ClientPhone'] == "" and
                    data['MD']['MSA_ClientDate'] == "" and
                    data['MD']['MSA_Name'] == "" and
                    data['MD']['MSA_MaritalStatus'] == "" and
                    data['MD']['MSA_Gender'] == "" and
                    data['MD']['MSA_Occupation'] == "" and
                    data['MD']['MSA_Income'] == "" and
                    data['MD']['MSA_Subsidy'] == "" and
                    data['MD']['MSA_Dependant'] == "" and
                    data['MD']['MSA_Spouse'] == "" and
                    data['MD']['MSA_AdultDependant'] == "" and
                    data['MD']['MSA_ChronicM'] == "" and
                    data['MD']['MSA_ChronicS'] == "" and
                    data['MD']['MSA_ChronicAD'] == "" and
                    data['MD']['MSA_ChronicC'] == "" and
                    data['MD']['MSA_ChronicOC'] == "" and
                    data['MD']['MSA_PFromDate'] == "" and
                    data['MD']['MSA_PTODate'] == "" and
                    data['MD']['BackInfo'] == "" and        
                    data['MD']['SNA_Needs1'] == 2 and
                    data['MD']['SNA_Comments1'] == "" and
                    data['MD']['SNA_Needs2'] == 2 and
                    data['MD']['SNA_Comments2'] == "" and
                    data['MD']['SNA_Needs3'] == 2 and
                    data['MD']['SNA_Comments3'] == "" and
                    data['MD']['SNA_Needs4'] == 2 and
                    data['MD']['SNA_Comments4'] == "" and
                    data['MD']['SNA_Needs5'] == 2 and
                    data['MD']['SNA_Comments5'] == "" and
                    data['MD']['SNA_Needs6'] == 2 and
                    data['MD']['SNA_Comments6'] == "" and
                    data['MD']['SNA_Needs7'] == 2 and
                    data['MD']['SNA_Comments7'] == "" and
                    data['MD']['SNA_Needs8'] == 2 and
                    data['MD']['SNA_Comments8'] == "" and
                    data['MD']['SNA_Needs9'] == 2 and
                    data['MD']['SNA_Comments9'] == "" and
                    data['MD']['SNA_Other'] == "" and
                    data['MD']['SNA_Needs10'] == 2 and
                    data['MD']['SNA_Comments10'] == "" and        
                    data['MD']['CoMAB_Current1'] == "" and
                    data['MD']['CoMAB_Replaced1'] == "" and
                    data['MD']['CoMAB_Current2'] == "" and
                    data['MD']['CoMAB_Replaced2'] == "" and
                    data['MD']['CoMAB_Current3'] == "" and
                    data['MD']['CoMAB_Replaced3'] == "" and
                    data['MD']['CoMAB_Current4'] == "" and
                    data['MD']['CoMAB_Replaced4'] == "" and
                    data['MD']['CoMAB_Current5'] == "" and
                    data['MD']['CoMAB_Replaced5'] == "" and
                    data['MD']['CoMAB_Current6'] == "" and
                    data['MD']['CoMAB_Replaced6'] == "" and
                    data['MD']['CoMAB_Current7'] == "" and
                    data['MD']['CoMAB_Replaced7'] == "" and
                    data['MD']['CoMAB_Current8'] == "" and
                    data['MD']['CoMAB_Replaced8'] == "" and
                    data['MD']['CoMAB_Current9'] == "" and
                    data['MD']['CoMAB_Replaced9'] == "" and
                    data['MD']['CoMAB_Current10'] == "" and
                    data['MD']['CoMAB_Replaced10'] == "" and
                    data['MD']['CoMAB_Current11'] == "" and
                    data['MD']['CoMAB_Replaced11'] == "" and
                    data['MD']['CoMAB_Current12'] == "" and
                    data['MD']['CoMAB_Replaced12'] == "" and
                    data['MD']['SectionD_SnF'] == "" and
                    data['MD']['SectionE_PMB'] == "" and
                    data['MD']['SectionF_NotAccepted'] == "" and
                    data['MD']['SectionF_Reasons'] == "" and
                    data['MD']['SectionF_Consequences'] == 2 and
                    data['MD']['SectionF_Fee'] == "" and
                    data['MD']['SectionF_Comments'] == "" and
                    data['MD']['SectionF_Date'] == "" and
                    data['MD']['SectionF_ClientName'] == "" 
                ):
                    data['MD_status'] = False
                else:
                    data['MD_status'] = True
                data['MD']['MSA_ClientDate'] = datetimeparser.parse(data['MD']['MSA_ClientDate']).strftime('%d %b %Y') if data['MD']['MSA_ClientDate'] != "" else "N.A."
                data['MD']['MSA_PFromDate'] = datetimeparser.parse(data['MD']['MSA_PFromDate']).strftime('%d %b %Y') if data['MD']['MSA_PFromDate'] != "" else "N.A."
                data['MD']['MSA_PTODate'] = datetimeparser.parse(data['MD']['MSA_PTODate']).strftime('%d %b %Y') if data['MD']['MSA_PTODate'] != "" else "N.A."
                data['MD']['SectionF_Date'] = datetimeparser.parse(data['MD']['SectionF_Date']).strftime('%d %b %Y') if data['MD']['SectionF_Date'] != "" else "N.A."
            else:
                data['MD_status'] = False
            if GapCover.objects.filter(formId=data['id']).exists():
                data['GP'] = GapCover.objects.filter(formId=data['id']).values().first()
                if (
                    data['GP']['GP_ClientAddress'] == "" and
                    data['GP']['GP_ClientEmail'] == "" and
                    data['GP']['GP_ClientPhoneNumber'] == "" and
                    data['GP']['GP_ClientMedicalAidName'] == "" and
                    data['GP']['GP_ClientInceptionDate'] == "" and
                    data['GP']['GP_Date'] == "" and        
                    data['GP']['GP_Benefits'] == "" and
                    data['GP']['GP_MedicalDependent'] == 2 and
                    data['GP']['GP_MemberName1'] == "" and
                    data['GP']['GP_MemberRelationship1'] == "" and
                    data['GP']['GP_MemberAidPlan1'] == "" and
                    data['GP']['GP_MemberName2'] == "" and
                    data['GP']['GP_MemberRelationship2'] == "" and
                    data['GP']['GP_MemberAidPlan2'] == "" and
                    data['GP']['GP_MemberName3'] == "" and
                    data['GP']['GP_MemberRelationship3'] == "" and
                    data['GP']['GP_MemberAidPlan3'] == "" and
                    data['GP']['GP_MemberName4'] == "" and
                    data['GP']['GP_MemberRelationship4'] == "" and
                    data['GP']['GP_MemberAidPlan4'] == "" and
                    data['GP']['GP_Provider'] == "" and
                    data['GP']['GP_Option'] == "" and
                    data['GP']['GP_Motivation'] == "" and
                    data['GP']['GP_TotalPremium'] == "" and
                    data['GP']['GP_BrokerFee'] == "" and
                    data['GP']['GP_Commission'] == "" and
                    data['GP']['GP_CP_Rate'] == "" and
                    data['GP']['GP_NP_Rate'] == "" and
                    data['GP']['GP_CP_Overall'] == "" and
                    data['GP']['GP_NP_Overall'] == "" and
                    data['GP']['GP_CP_CoPayment_B'] == "" and
                    data['GP']['GP_NP_CoPayment_B'] == "" and
                    data['GP']['GP_CP_SubLimit_B'] == "" and
                    data['GP']['GP_NP_SubLimit_B'] == "" and
                    data['GP']['GP_CP_Cancer_B'] == "" and
                    data['GP']['GP_NP_Cancer_B'] == "" and
                    data['GP']['GP_CP_CancerD_B'] == "" and
                    data['GP']['GP_NP_CancerD_B'] == "" and
                    data['GP']['GP_CP_Other_B'] == "" and
                    data['GP']['GP_NP_Other_B'] == "" and
                    data['GP']['GP_CP_CasualB'] == "" and
                    data['GP']['GP_NP_CasualB'] == "" and
                    data['GP']['GP_CP_TraumaB'] == "" and
                    data['GP']['GP_NP_TraumaB'] == "" and
                    data['GP']['GP_CP_PreW_B'] == "" and
                    data['GP']['GP_NP_PreW_B'] == "" and
                    data['GP']['GP_CP_Med_SW_B'] == "" and
                    data['GP']['GP_NP_Med_SW_B'] == "" and
                    data['GP']['GP_CP_Accidental_DC_B'] == "" and
                    data['GP']['GP_NP_Accidental_DC_B'] == "" and
                    data['GP']['GP_CP_GenWait_P'] == "" and
                    data['GP']['GP_NP_GenWait_P'] == "" and
                    data['GP']['GP_CP_PreExist_P'] == "" and
                    data['GP']['GP_NP_PreExist_P'] == "" and
                    data['GP']['GP_CP_Specific_P'] == "" and
                    data['GP']['GP_NP_Specific_P'] == "" and
                    data['GP']['GP_Exclusions'] == 2 and
                    data['GP']['GP_Other_Exclusions'] == "" and
                    data['GP']['GP_GeneralComments'] == "" and        
                    data['GP']['GP_FinanAdvisor_ProdRecomm'] == "" and
                    data['GP']['GP_FinanAdvisor_Reasons'] == "" and
                    data['GP']['GP_FinanAdvisor_Consequences'] == 2 and
                    data['GP']['GP_FinanAdvisor_FeeCommission'] == "" and
                    data['GP']['GP_FinanAdvisor_OtherComments'] == "" and
                    data['GP']['GP_FinanAdvisor_Date'] == ""
                ):
                    data['GP_status'] = False
                else:
                    data['GP_status'] = True
                    data['GP']['GP_ClientInceptionDate'] = datetimeparser.parse(data['GP']['GP_ClientInceptionDate']).strftime('%d %b %Y') if data['GP']['GP_ClientInceptionDate'] != "" else "N.A."
                    data['GP']['GP_Date'] = datetimeparser.parse(data['GP']['GP_Date']).strftime('%d %b %Y') if data['GP']['GP_Date'] != "" else "N.A."
                    data['GP']['GP_FinanAdvisor_Date'] = datetimeparser.parse(data['GP']['GP_FinanAdvisor_Date']).strftime('%d %b %Y') if data['GP']['GP_FinanAdvisor_Date'] != "" else "N.A."
            else:
                data['GP_status'] = False
            
            if ShortTermInsuranceCommerical.objects.filter(formId=data['id']).exists():
                data['STIC'] = ShortTermInsuranceCommerical.objects.filter(formId=data['id']).values().first()
                stic_status1 = False
                stic_status2 = False
                stic_status3 = False
                stic_status4 = False
                stic_status5 = False
                stic_status6 = False
                stic_status7 = False
                stic_status8 = False
                if (
                    data['STIC']['STIC_Quotation_Number'] == "" and
                    data['STIC']['STIC_Underwritten_By'] == "" and
                    data['STIC']['STIC_Branch_Name'] == "" and
                    data['STIC']['STIC_Branch_Number'] == "" and
                    data['STIC']['STIC_Inception_Date'] == "" and
                    data['STIC']['STIC_Renewal_Date'] == "" and
                    data['STIC']['STIC_Payment_Method_Annual'] == 0 and
                    data['STIC']['STIC_Payment_Method_Monthly'] == 0 and 
                    data['STIC']['STIC_Sasria_Annual'] == 0 and
                    data['STIC']['STIC_Sasria_Monthly'] == 0 and
                    data['STIC']['STIC_Business_Owner'] == "" and
                    data['STIC']['STIC_Company_Reg_Number'] == "" and
                    data['STIC']['STIC_Company_VAT_Number'] == "" and
                    data['STIC']['STIC_Postal_Address'] == "" and
                    data['STIC']['STIC_Risk_Address'] == "" and
                    data['STIC']['STIC_Contact_Person'] == "" and
                    data['STIC']['STIC_TelePhone_Number'] == "" and
                    data['STIC']['STIC_Fax_Number'] == "" and
                    data['STIC']['STIC_CellPhone_Number'] == "" and 
                    data['STIC']['STIC_Email'] == "" and
                    data['STIC']['STIC_Business_Description'] == "" and
                    data['STIC']['STIC_Lower_Premium'] == 0 and
                    data['STIC']['STIC_Higher_Premium'] == 0 and
                    data['STIC']['STIC_Applicable_Option'] == "" and
                    data['STIC']['STIC_General_Cancelled'] == 2 and
                    data['STIC']['STIC_General_Cancelled_Detail'] == "" and
                    # data['STIC']['STIC_General_LossType'] == "" and
                    # data['STIC']['STIC_General_Year'] == "" and
                    # data['STIC']['STIC_General_Amount'] == "" and
                    # data['STIC']['STIC_General_History'] == "" and
                    # data['STIC']['STIC_General_Insurer'] == "" and
                    data['STIC']['STIC_Replacement_Advise'] == 2 and
                    data['STIC']['STIC_Replacement_Purpose'] == "" and
                    data['STIC']['STIC_Replacement_Reason'] == "" and
                    data['STIC']['STIC_Replacement_Suppliers'] == "" and
                    data['STIC']['STIC_Fin_FnC_Existing'] == "" and
                    data['STIC']['STIC_Fin_FnC_Replacement'] == "" and
                    data['STIC']['STIC_Fin_STnC_Existing'] == "" and
                    data['STIC']['STIC_Fin_STnC_Replacement'] == "" and
                    data['STIC']['STIC_Fin_ImpOnPre_Existing'] == "" and
                    data['STIC']['STIC_Fin_ImpOnPre_Replacement'] == "" and
                    data['STIC']['STIC_Fin_Excesses_Existing'] == "" and
                    data['STIC']['STIC_Fin_Excesses_Replacement'] == "" and
                    data['STIC']['STIC_Fin_VABen_Existing'] == "" and
                    data['STIC']['STIC_Fin_VABen_Replacement'] == "" and
                    data['STIC']['STIC_Fin_AdvisorComm_Existing'] == "" and
                    data['STIC']['STIC_Fin_AdvisorComm_Replacement'] == "" and
                    data['STIC']['STIC_ProdComp_Existing_Company'] == "" and
                    data['STIC']['STIC_ProdComp_Replacement_Company'] == "" and
                    data['STIC']['STIC_ProdComp_Existing_Provider'] == "" and
                    data['STIC']['STIC_ProdComp_Replacement_Provider'] == "" and
                    data['STIC']['STIC_ProdComp_Existing_Product'] == "" and
                    data['STIC']['STIC_ProdComp_Replacement_Product'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended1'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted1'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount1'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium1'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess1'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium1'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess1'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended2'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted2'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount2'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium2'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess2'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium2'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess2'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended3'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted3'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount3'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium3'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess3'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium3'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess3'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended5'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted5'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount5'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium5'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess5'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium5'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess5'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended6'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted6'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount6'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium6'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess6'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium6'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess6'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended7'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted7'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount7'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium7'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess7'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium7'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess7'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended8'] == 0 
                ) :
                    stic_status1 = True
                else:
                    stic_status1 = False
                if (
                    data['STIC']['STIC_ProdComp_Accepted8'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount8'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium8'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess8'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium8'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess8'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended9'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted9'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount9'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium9'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess9'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium9'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess9'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended10'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted10'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount10'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium10'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess10'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium10'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess10'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended11'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted11'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount11'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium11'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess11'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium11'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess11'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended12'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted12'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount12'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium12'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess12'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium12'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess12'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended13'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted13'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount13'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium13'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess13'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium13'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess13'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended14'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted14'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount14'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium14'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess14'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium14'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess14'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended15'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted15'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount15'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium15'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess15'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium15'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess15'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended16'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted16'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount16'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium16'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess16'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium16'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess16'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended17'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted17'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount17'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium17'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess17'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium17'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess17'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended18'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted18'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount18'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium18'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess18'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium18'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess18'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended19'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted19'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount19'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium19'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess19'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium19'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess19'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended20'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted20'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount20'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium20'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess20'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium20'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess20'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended21'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted21'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount21'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium21'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess21'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium21'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess21'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended22'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted22'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount22'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium22'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess22'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium22'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess22'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended23'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted23'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount23'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium23'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess23'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium23'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess23'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended24'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted24'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount24'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium24'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess24'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium24'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess24'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended25'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted25'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount25'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium25'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess25'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium25'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess25'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended26'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted26'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount26'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium26'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess26'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium26'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess26'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended27'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted27'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount27'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium27'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess27'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium27'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess27'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended28'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted28'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount28'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium28'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess28'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium28'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess28'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended29'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted29'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount29'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium29'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess29'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium29'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess29'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended30'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted30'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount30'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium30'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess30'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium30'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess30'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended31'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted31'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount31'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium31'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess31'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium31'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess31'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended32'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted32'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount32'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium32'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess32'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium32'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess32'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended33'] == 0 
                ) :
                    stic_status2 = True
                else:
                    stic_status2 = False
                if (
                    data['STIC']['STIC_ProdComp_Accepted33'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount33'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium33'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess33'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium33'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess33'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended34'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted34'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount34'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium34'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess34'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium34'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess34'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended35'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted35'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount35'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium35'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess35'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium35'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess35'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended36'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted36'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount36'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium36'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess36'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium36'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess36'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended37'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted37'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount37'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium37'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess37'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium37'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess37'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended38'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted38'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount38'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium38'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess38'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium38'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess38'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended39'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted39'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount39'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium39'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess39'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium39'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess39'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended40'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted40'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount40'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium40'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess40'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium40'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess40'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended41'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted41'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount41'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium41'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess41'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium41'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess41'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended42'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted42'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount42'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium42'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess42'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium42'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess42'] == "" and
                    data['STIC']['STIC_ProdComp_Recommended43'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted43'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount43'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium43'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess43'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium43'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess43'] == "" and        
                    data['STIC']['STIC_ProdComp_Recommended44'] == 0 and
                    data['STIC']['STIC_ProdComp_Accepted44'] == 0 and
                    data['STIC']['STIC_ProdComp_CoverAmount44'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Premium44'] == "" and
                    data['STIC']['STIC_ProdComp_ExistP_Excess44'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Premium44'] == "" and
                    data['STIC']['STIC_ProdComp_RecommP_Excess44'] == "" and
                    data['STIC']['STIC_ProdComp_FeeNCharges'] == "" and
                    data['STIC']['STIC_ProdComp_Commission'] == "" and
                    data['STIC']['STIC_ProdComp_TotalPremium'] == "" # and        
                    # data['STIC']['STIC_Fire_Limit'] == "" and
                    # data['STIC']['STIC_Fire_ItemNumber'] == "" and
                    # data['STIC']['STIC_Fire_Premium'] == "" and
                    # data['STIC']['STIC_Fire_PremNumber'] == "" and
                    # data['STIC']['STIC_Buildings_Insured'] == "" and
                    # data['STIC']['STIC_Rental_Insured'] == "" and
                    # data['STIC']['STIC_Others_Insured'] == "" and
                    # data['STIC']['STIC_Stocks_Insured'] == "" and
                    # data['STIC']['STIC_Miscellaneous1_Insured'] == "" and
                    # data['STIC']['STIC_Miscellaneous2_Insured'] == "" and
                    # data['STIC']['STIC_Earthquake_Insured'] == 2 and
                    # data['STIC']['STIC_Malicious_Damage_Insured'] == 2 and
                    # data['STIC']['STIC_Special_Insured'] == 2 and
                    # data['STIC']['STIC_LeakFull_Insured'] == 2 and
                    # data['STIC']['STIC_LeakFirst_Insured'] == 2 and
                    # data['STIC']['STIC_SnLLimited_Insured'] == 2 and
                    # data['STIC']['STIC_SnLComprehensive_Insured'] == 2 and
                    # data['STIC']['STIC_RnS_Insured'] == 2 and
                    # data['STIC']['STIC_SDC_Insured'] == 2 and
                    # data['STIC']['STIC_BuildCombined_Limit'] == "" and
                    # data['STIC']['STIC_BuildCombined_ItemNumber'] == "" and
                    # data['STIC']['STIC_BuildCombined_Premium'] == "" and
                    # data['STIC']['STIC_BuildCombined_PremNumber'] == "" and
                    # data['STIC']['STIC_BuildCombined_ColumnRef'] == "" and
                    # data['STIC']['STIC_BuildCombined_Sum'] == "" and
                    # data['STIC']['STIC_BuildCombined_Construct'] == 2 and
                    # data['STIC']['STIC_BuildCombined_Desc'] == "" and
                    # int(data['STIC']['STIC_Extensions_RnS']) == 2 and
                    # int(data['STIC']['STIC_Extensions_Geysers']) == 2 and
                    # int(data['STIC']['STIC_Extensions_SnL']) == 2 and
                    # int(data['STIC']['STIC_Extensions_PoA']) == 2 and
                    # int(data['STIC']['STIC_Extensions_IorE']) == 2 and
                    # data['STIC']['STIC_OC_Limit'] == "" and
                    # data['STIC']['STIC_OC_ItemNumber'] == "" and
                    # data['STIC']['STIC_OC_Premium'] == "" and
                    # data['STIC']['STIC_OC_PremNumber'] == "" and
                    # data['STIC']['STIC_OC_PremisesNum'] == "" and
                    # data['STIC']['STIC_OC_Sum'] == "" and
                    # data['STIC']['STIC_OC_Construct'] == 2 and
                    # data['STIC']['STIC_OC_Desc'] == "" and
                    # data['STIC']['STIC_OC_Doc_Sum'] == "" and
                    # data['STIC']['STIC_OC_Doc_Premium'] == "" and
                    # data['STIC']['STIC_OC_LLDoc_Sum'] == "" and
                    # data['STIC']['STIC_OC_LLDoc_Premium'] == "" and
                    # data['STIC']['STIC_OC_RnS_Sum'] == "" and
                    # data['STIC']['STIC_OC_RnS_Premium'] == "" and
                    # data['STIC']['STIC_OC_TheftF_Sum'] == "" and
                    # data['STIC']['STIC_OC_TheftF_Premium'] == "" and
                    # data['STIC']['STIC_OC_Theft_Sum'] == "" and
                    # data['STIC']['STIC_OC_Theft_Premium'] == "" and
                    # data['STIC']['STIC_OC_Total_Premium'] == "" and
                    # data['STIC']['STIC_BusInt_Limit'] == "" and
                    # data['STIC']['STIC_BusInt_Premium'] == "" 
                ) :
                    stic_status3 = True
                else:
                    stic_status3 = False
                if (
                    
                    # data['STIC']['STIC_Sec19_Limit'] == "" and
                    # data['STIC']['STIC_Sec19_Premium'] == "" and
                    # data['STIC']['STIC_Sec19_ItemNumber'] == "" and
                    # data['STIC']['STIC_Sec19_PremNumber'] == "" and
                    # data['STIC']['STIC_Sec19_Part1_1'] == "" and
                    # data['STIC']['STIC_Sec19_Part1_2'] == "" and
                    # data['STIC']['STIC_Sec19_Part1_3'] == "" and
                    # data['STIC']['STIC_Sec19_Part1_4'] == "" and
                    # data['STIC']['STIC_Sec19_Part1_5'] == "" and
                    # data['STIC']['STIC_Sec19_Part1_6'] == "" and
                    # data['STIC']['STIC_Sec19_Part1_7'] == "" and
                    # data['STIC']['STIC_Sec19_Part1_8'] == "" and
                    # data['STIC']['STIC_Sec19_Part1_9'] == "" and
                    # data['STIC']['STIC_Sec19_Part2_1'] == "" and
                    # data['STIC']['STIC_Sec19_Part2_2'] == "" and
                    # data['STIC']['STIC_Sec19_Part2_3'] == "" and
                    # data['STIC']['STIC_Sec19_Part2_4'] == "" and
                    # data['STIC']['STIC_Sec19_Part2_5'] == "" and
                    # data['STIC']['STIC_Sec19_Extension1'] == 2 and
                    # data['STIC']['STIC_Sec19_Extension_Premium1'] == "" and
                    # data['STIC']['STIC_Sec19_Extension2'] == 2 and
                    # data['STIC']['STIC_Sec19_Extension_Premium2'] == "" and
                    # data['STIC']['STIC_Sec19_RoD_1'] == "" and
                    # data['STIC']['STIC_Sec19_RoD_2'] == "" and
                    # data['STIC']['STIC_Sec19_RoD_3'] == "" and
                    # data['STIC']['STIC_Sec19_RoD_4'] == "" and
                    # data['STIC']['STIC_Sec19_RoD_5'] == "" and
                    # data['STIC']['STIC_Sec19_AnnualPremium'] == "" and
                    # data['STIC']['STIC_Sec19_Comments'] == "" and
                    # data['STIC']['STIC_Sec20_Limit'] == "" and
                    # data['STIC']['STIC_Sec20_Premium'] == "" and
                    # data['STIC']['STIC_Sec20_ItemNumber'] == "" and
                    # data['STIC']['STIC_Sec20_PremNumber'] == "" and
                    # data['STIC']['STIC_Sec20_1'] == "" and
                    # data['STIC']['STIC_Sec20_2'] == "" and
                    # data['STIC']['STIC_Sec20_3'] == "" and
                    # data['STIC']['STIC_Sec20_4'] == "" and
                    # data['STIC']['STIC_Sec20_5'] == "" and
                    # data['STIC']['STIC_Sec20_6'] == "" and
                    # data['STIC']['STIC_Sec20_Extension1'] == 2 and
                    # data['STIC']['STIC_Sec20_Extension_Premium1'] == "" and
                    # data['STIC']['STIC_Sec20_Extension2'] == 2 and
                    # data['STIC']['STIC_Sec20_Extension_Premium2'] == "" and
                    # data['STIC']['STIC_Sec20_AnnualPremium'] == "" and
                    # data['STIC']['STIC_Sec20_Comments'] == "" and
                    # data['STIC']['STIC_Sec21_Limit'] == "" and
                    # data['STIC']['STIC_Sec21_Premium'] == "" and
                    # data['STIC']['STIC_Sec21_ItemNumber'] == "" and
                    # data['STIC']['STIC_Sec21_PremNumber'] == "" and
                    # data['STIC']['STIC_Sec21_1'] == "" and
                    # data['STIC']['STIC_Sec21_2'] == "" and
                    # data['STIC']['STIC_Sec21_3'] == "" and
                    # data['STIC']['STIC_Sec21_4'] == "" and
                    # data['STIC']['STIC_Sec21_5'] == "" and
                    # data['STIC']['STIC_Sec21_6'] == "" and
                    # data['STIC']['STIC_Sec21_Extension1'] == 2 and
                    # data['STIC']['STIC_Sec21_Extension_Premium1'] == "" and
                    # data['STIC']['STIC_Sec21_Extension2'] == 2 and
                    # data['STIC']['STIC_Sec21_Extension_Premium2'] == "" and
                    # data['STIC']['STIC_Sec21_AnnualPremium'] == "" and
                    # data['STIC']['STIC_Sec21_Comments'] == "" and        
                    data['STIC']['STIC_SecD_1'] == "" and
                    data['STIC']['STIC_SecD_2'] == "" and
                    data['STIC']['STIC_SecD_3'] == "" and
                    data['STIC']['STIC_SecD_4'] == 2 and
                    data['STIC']['STIC_SecD_5'] == "" and
                    data['STIC']['STIC_SecD_6'] == "" and
                    data['STIC']['STIC_SecD_7'] == "" and
                    data['STIC']['STIC_SecD_8'] == "" and
                    data['STIC']['STIC_SecD_9'] == "" and
                    data['STIC']['STIC_SecD_10'] == "" and
                    data['STIC']['STIC_SecD_11'] == "" and
                    data['STIC']['STIC_SecD_12'] == "" and
                    data['STIC']['STIC_SecD_13'] == "" and
                    data['STIC']['STIC_SecE_1'] == "" and
                    data['STIC']['STIC_SecE_2'] == "" and
                    data['STIC']['STIC_SecE_3'] == "" and
                    data['STIC']['STIC_SecG_1'] == "" and
                    data['STIC']['STIC_SecG_2'] == "" and
                    data['STIC']['STIC_SecG_3'] == "" 
                ) :
                    stic_status4 = True
                else:
                    stic_status4 = False
                if stic_status1 == True and stic_status2 == True and stic_status3 == True and stic_status4 == True:
                    data['STIC_status'] = False
                else:
                    data['STIC_status'] = True
                    data['STIC']['STIC_Inception_Date'] = datetimeparser.parse(data['STIC']['STIC_Inception_Date']).strftime('%d %b %Y') if data['STIC']['STIC_Inception_Date'] != "" else "N.A."
                    data['STIC']['STIC_Renewal_Date'] = datetimeparser.parse(data['STIC']['STIC_Renewal_Date']).strftime('%d %b %Y') if data['STIC']['STIC_Renewal_Date'] != "" else "N.A."
                    data['STIC']['STIC_SecG_3'] = datetimeparser.parse(data['STIC']['STIC_SecG_3']).strftime('%d/%m/%Y') if data['STIC']['STIC_SecG_3'] != "" else "N.A."
                    data['STIC']['STIC_SecD_11'] = datetimeparser.parse(data['STIC']['STIC_SecD_11']).strftime('%d %b %Y') if data['STIC']['STIC_SecD_11'] != "" else "N.A."
                    data['STIC']['STIC_SecD_13'] = datetimeparser.parse(data['STIC']['STIC_SecD_13']).strftime('%d/%m/%Y') if data['STIC']['STIC_SecD_13'] != "" else "N.A."
                    data['STIC']['STIC_Sec15_2_1'] = datetimeparser.parse(data['STIC']['STIC_Sec15_2_1']).strftime('%d/%m/%Y') if data['STIC']['STIC_Sec15_2_1'] != "" else "N.A."
                    if STIC_Loss.objects.filter(formId = data['id']).exists():
                        data['STIC']['Loss_Data'] = STIC_Loss.objects.filter(formId = data['id']).values()
                    if STIC_Sec_Fire.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_1_Data'] = STIC_Sec_Fire.objects.filter(formId=data['id']).values()
                    if STIC_Sec_2.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_2_Data'] = STIC_Sec_2.objects.filter(formId=data['id']).values()
                    if STIC_Sec_3.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_3_Data'] = STIC_Sec_3.objects.filter(formId=data['id']).values()
                    if STIC_Sec_4.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_4_Data'] = STIC_Sec_4.objects.filter(formId=data['id']).values()
                    if STIC_Sec_5.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_5_Data'] = STIC_Sec_5.objects.filter(formId=data['id']).values()
                    if STIC_Sec_6.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_6_Data'] = STIC_Sec_6.objects.filter(formId=data['id']).values()
                    if STIC_Sec_7.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_7_Data'] = STIC_Sec_7.objects.filter(formId=data['id']).values()
                    if STIC_Sec_8.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_8_Data'] = STIC_Sec_8.objects.filter(formId=data['id']).values()
                    if STIC_Sec_9.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_9_Data'] = STIC_Sec_9.objects.filter(formId=data['id']).values()
                    if STIC_Sec_10.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_10_Data'] = STIC_Sec_10.objects.filter(formId=data['id']).values()
                    if STIC_Sec_11.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_11_Data'] = STIC_Sec_11.objects.filter(formId=data['id']).values()
                    if STIC_Sec_12.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_12_Data'] = STIC_Sec_12.objects.filter(formId=data['id']).values()
                    if STIC_Sec_13.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_13_Data'] = STIC_Sec_13.objects.filter(formId=data['id']).values()
                    if STIC_Sec_14.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_14_Data'] = STIC_Sec_14.objects.filter(formId=data['id']).values()
                    if STIC_Sec_15.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_15_Data'] = STIC_Sec_15.objects.filter(formId=data['id']).values()
                    if STIC_Sec_16.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_16_Data'] = STIC_Sec_16.objects.filter(formId=data['id']).values()
                    if STIC_Sec_17.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_17_Data'] = STIC_Sec_17.objects.filter(formId=data['id']).values()
                    if STIC_Sec_18.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_18_Data'] = STIC_Sec_18.objects.filter(formId=data['id']).values()
                    if STIC_Sec_19.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_19_Data'] = STIC_Sec_19.objects.filter(formId=data['id']).values()
                    if STIC_Sec_20.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_20_Data'] = STIC_Sec_20.objects.filter(formId=data['id']).values()
                    if STIC_Sec_21.objects.filter(formId = data['id']).exists():
                        data['STIC']['STIC_Sec_21_Data'] = STIC_Sec_21.objects.filter(formId=data['id']).values()
            else:
                data['STIC_status'] = False
            if ShortTermInsurancePersonal.objects.filter(formId=data['id']).exists():
                data['STIP'] = ShortTermInsurancePersonal.objects.filter(formId=data['id']).values().first()
                stip_status1 = False
                stip_status2 = False
                stip_status3 = False
                stip_status4 = False
                if (
                    data["STIP"]['STIP_Underwritten_By'] == "" and
                    data["STIP"]['STIP_Branch_Name'] == "" and
                    data["STIP"]['STIP_Branch_Number'] == "" and
                    data["STIP"]['STIP_Quotation_Number'] == "" and
                    data["STIP"]['STIP_Policy_Number'] == "" and
                    data["STIP"]['STIP_Inception_Date'] == "" and
                    data["STIP"]['STIP_Applicant_Surname'] == "" and
                    data["STIP"]['STIP_Applicant_Gender'] == 2 and
                    data["STIP"]['STIP_Applicant_Initials'] == "" and
                    data["STIP"]['STIP_Applicant_Title'] == "" and
                    data["STIP"]['STIP_Applicant_DateofBirth'] == "" and
                    data["STIP"]['STIP_Applicant_Email'] == "" and
                    data["STIP"]['STIP_Applicant_ContactNumber'] == "" and
                    data["STIP"]['STIP_General_Refused'] == 2 and
                    data["STIP"]['STIP_General_Risks'] == 2 and
                    data["STIP"]['STIP_General_LastDate'] == "" and
                    data["STIP"]['STIP_General_InsurerName'] == "" and
                    # data["STIP"]['STIP_General_TypeOfLoss'] == "" and
                    # data["STIP"]['STIP_General_LossYear'] == "" and
                    # data["STIP"]['STIP_General_LossAmount'] == "" and
                    # data["STIP"]['STIP_General_LossInsurer'] == "" and        
                    data["STIP"]['STIP_CnRI_Existing_Company'] == "" and
                    data["STIP"]['STIP_CnRI_Replacement_Company'] == "" and
                    data["STIP"]['STIP_CnRI_Existing_Provider'] == "" and
                    data["STIP"]['STIP_CnRI_Replacement_Provider'] == "" and
                    data["STIP"]['STIP_CnRI_Existing_Product'] == "" and
                    data["STIP"]['STIP_CnRI_Replacement_Product'] == "" and            
                    data["STIP"]['STIP_CnRI_1_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_1_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_1_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_1_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_1_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_1_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_1_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_2_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_2_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_2_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_2_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_2_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_2_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_2_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_3_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_3_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_3_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_3_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_3_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_3_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_3_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_4_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_4_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_4_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_4_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_4_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_4_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_4_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_4_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_4_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_4_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_4_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_4_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_4_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_4_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_5_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_5_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_5_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_5_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_5_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_5_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_5_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_6_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_6_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_6_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_6_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_6_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_6_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_6_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_7_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_7_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_7_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_7_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_7_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_7_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_7_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_8_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_8_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_8_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_8_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_8_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_8_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_8_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_9_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_9_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_9_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_9_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_9_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_9_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_9_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_10_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_10_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_10_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_10_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_10_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_10_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_10_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_11_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_11_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_11_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_11_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_11_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_11_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_11_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_12_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_12_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_12_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_12_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_12_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_12_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_12_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_13_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_13_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_13_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_13_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_13_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_13_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_13_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_14_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_14_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_14_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_14_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_14_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_14_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_14_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_15_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_15_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_15_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_15_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_15_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_15_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_15_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_16_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_16_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_16_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_16_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_16_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_16_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_16_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_17_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_17_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_17_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_17_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_17_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_17_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_17_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_18_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_18_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_18_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_18_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_18_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_18_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_18_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_19_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_19_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_19_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_19_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_19_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_19_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_19_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_20_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_20_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_20_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_20_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_20_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_20_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_20_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_21_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_21_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_21_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_21_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_21_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_21_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_21_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_22_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_22_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_22_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_22_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_22_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_22_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_22_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_23_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_23_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_23_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_23_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_23_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_23_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_23_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_24_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_24_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_24_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_24_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_24_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_24_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_24_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_25_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_25_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_25_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_25_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_25_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_25_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_25_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_26_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRI_26_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRI_26_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRI_26_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRI_26_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRI_26_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRI_26_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRI_27_Recomm'] == 2 and
                    data["STIP"]['STIP_CnRI_27_Accepted'] == 2 and
                    data["STIP"]['STIP_CnRI_27_CoverAmount'] == "" and
                    data["STIP"]['STIP_CnRI_27_Premium1'] == "" and
                    data["STIP"]['STIP_CnRI_27_Premium2'] == "" and
                    data["STIP"]['STIP_CnRI_27_Excess1'] == "" and
                    data["STIP"]['STIP_CnRI_27_Excess2'] == "" and
                    data["STIP"]['STIP_CnRI_FeeCharges'] == "" and
                    data["STIP"]['STIP_CnRI_Commission'] == "" and
                    data["STIP"]['STIP_CnRI_TotalPremium'] == "" 
                ):
                    stip_status1 = True
                else:
                    stip_status1 = False
                if (
                    data["STIP"]['STIP_CnRen_Existing_Company'] == "" and
                    data["STIP"]['STIP_CnRen_Replacement_Company'] == "" and
                    data["STIP"]['STIP_CnRen_Existing_Provider'] == "" and
                    data["STIP"]['STIP_CnRen_Replacement_Provider'] == "" and
                    data["STIP"]['STIP_CnRen_Existing_Product'] == "" and
                    data["STIP"]['STIP_CnRen_Replacement_Product'] == "" and        
                    data["STIP"]['STIP_CnRen_1_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_1_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_1_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_1_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_1_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_1_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_1_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_2_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_2_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_2_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_2_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_2_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_2_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_2_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_3_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_3_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_3_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_3_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_3_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_3_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_3_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_4_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_4_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_4_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_4_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_4_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_4_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_4_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_4_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_4_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_4_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_4_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_4_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_4_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_4_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_5_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_5_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_5_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_5_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_5_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_5_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_5_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_6_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_6_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_6_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_6_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_6_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_6_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_6_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_7_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_7_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_7_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_7_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_7_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_7_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_7_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_8_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_8_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_8_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_8_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_8_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_8_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_8_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_9_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_9_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_9_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_9_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_9_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_9_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_9_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_10_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_10_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_10_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_10_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_10_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_10_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_10_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_11_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_11_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_11_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_11_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_11_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_11_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_11_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_12_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_12_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_12_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_12_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_12_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_12_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_12_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_13_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_13_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_13_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_13_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_13_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_13_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_13_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_14_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_14_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_14_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_14_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_14_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_14_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_14_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_15_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_15_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_15_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_15_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_15_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_15_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_15_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_16_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_16_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_16_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_16_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_16_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_16_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_16_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_17_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_17_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_17_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_17_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_17_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_17_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_17_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_18_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_18_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_18_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_18_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_18_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_18_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_18_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_19_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_19_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_19_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_19_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_19_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_19_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_19_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_20_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_20_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_20_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_20_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_20_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_20_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_20_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_21_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_21_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_21_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_21_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_21_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_21_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_21_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_22_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_22_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_22_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_22_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_22_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_22_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_22_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_23_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_23_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_23_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_23_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_23_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_23_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_23_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_24_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_24_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_24_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_24_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_24_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_24_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_24_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_25_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_25_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_25_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_25_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_25_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_25_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_25_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_26_Recomm'] == 2 and 
                    data["STIP"]['STIP_CnRen_26_Accepted'] == 2 and 
                    data["STIP"]['STIP_CnRen_26_CoverAmount'] == "" and 
                    data["STIP"]['STIP_CnRen_26_Premium1'] == "" and 
                    data["STIP"]['STIP_CnRen_26_Premium2'] == "" and 
                    data["STIP"]['STIP_CnRen_26_Excess1'] == "" and 
                    data["STIP"]['STIP_CnRen_26_Excess2'] == "" and         
                    data["STIP"]['STIP_CnRen_27_Recomm'] == 2 and
                    data["STIP"]['STIP_CnRen_27_Accepted'] == 2 and
                    data["STIP"]['STIP_CnRen_27_CoverAmount'] == "" and
                    data["STIP"]['STIP_CnRen_27_Premium1'] == "" and
                    data["STIP"]['STIP_CnRen_27_Premium2'] == "" and
                    data["STIP"]['STIP_CnRen_27_Excess1'] == "" and
                    data["STIP"]['STIP_CnRen_27_Excess2'] == "" and
                    data["STIP"]['STIP_CnRen_FeeCharges'] == "" and
                    data["STIP"]['STIP_CnRen_Commission'] == "" and
                    data["STIP"]['STIP_CnRen_TotalPremium'] == ""
                ):
                    stip_status2 = True
                else:
                    stip_status2 = False
                if (
                    data["STIP"]['STIP_CnRI_AdviseGiven'] == 2 and
                    data["STIP"]['STIP_CnRI_ReplacePurpose'] == "" and
                    data["STIP"]['STIP_CnRI_ReplaceReason'] == "" and
                    data["STIP"]['STIP_CnRI_ReplaceSupplier'] == "" #and
                    # data["STIP"]['STIP_HC_ResidentialArea'] == "" and
                    # data["STIP"]['STIP_HC_StreetNumber'] == "" and
                    # data["STIP"]['STIP_HC_PostalCode'] == "" and
                    # data["STIP"]['STIP_HC_ResidenceType'] == "" and
                    # data["STIP"]['STIP_HC_Flat_GroundLevel'] == 2 and
                    # data["STIP"]['STIP_HC_WallConstruction'] == 2 and
                    # data["STIP"]['STIP_HC_RoofConstruction'] == 2 and
                    # data["STIP"]['STIP_HC_SM_BurglarBar'] == 2 and
                    # data["STIP"]['STIP_HC_SM_SecurityGate'] == 2 and
                    # data["STIP"]['STIP_HC_SM_AlarmSystem'] == 2 and
                    # data["STIP"]['STIP_HC_SM_SecurityArea'] == 2 and
                    # data["STIP"]['STIP_HC_NoClaimBonus'] == "" and
                    # data["STIP"]['STIP_HC_SumInsured'] == "" and
                    # data["STIP"]['STIP_HCEx_BusinessType'] == "" and
                    # data["STIP"]['STIP_HCEx_InsuredAmount'] == "" and
                    # int(data["STIP"]['STIP_HC_ADI_General1']) == 2 and
                    # int(data["STIP"]['STIP_HC_ADI_General2']) == 2 and
                    # int(data["STIP"]['STIP_HC_ADI_MechElecBreakdown']) == 2 and
                    # int(data["STIP"]['STIP_HC_ADI_ElectronicalBreakdown']) == 2 and
                    # int(data["STIP"]['STIP_HC_ADI_PowerSurgeCover1']) == 2 and
                    # int(data["STIP"]['STIP_HC_ADI_PowerSurgeCover2']) == 2 and
                    # int(data["STIP"]['STIP_HC_ADI_PowerSurgeCover3']) == 2 and
                    # data["STIP"]['STIP_HC_Fee'] == "" and
                    # data["STIP"]['STIP_HC_Commission'] == "" and
                    # data["STIP"]['STIP_HC_TotalPremium'] == "" and
                    # data["STIP"]['STIP_Build_ResidentialArea'] == "" and
                    # data["STIP"]['STIP_Build_StreetNumber'] == "" and
                    # data["STIP"]['STIP_Build_PostalCode'] == "" and
                    # data["STIP"]['STIP_Build_ResidenceType'] == "" and
                    # data["STIP"]['STIP_Build_Type'] == "" and
                    # data["STIP"]['STIP_Build_Voluntary'] == 2 and
                    # data["STIP"]['STIP_Build_SnL'] == 2 and
                    # data["STIP"]['STIP_Build_ADI'] == 2 and
                    # data["STIP"]['STIP_Build_WallConstruction'] == 2 and
                    # data["STIP"]['STIP_Build_RoofConstruction'] == 2 and
                    # data["STIP"]['STIP_Build_Fee'] == "" and
                    # data["STIP"]['STIP_Build_Commission'] == "" and
                    # data["STIP"]['STIP_Build_TotalPremium'] == "" and
                    # data["STIP"]['STIP_Build_AdditionalAdvise'] == "" and
                    # data["STIP"]['STIP_AddProp_ResidentialArea'] == "" and
                    # data["STIP"]['STIP_AddProp_StreetNumber'] == "" and
                    # data["STIP"]['STIP_AddProp_PostalCode'] == "" and
                    # data["STIP"]['STIP_AddProp_ResidenceType'] == "" and
                    # data["STIP"]['STIP_AddProp_Type'] == "" and
                    # data["STIP"]['STIP_AddProp_Voluntary'] == 2 and
                    # data["STIP"]['STIP_AddProp_SnL'] == 2 and
                    # data["STIP"]['STIP_AddProp_ADI'] == 2 and
                    # data["STIP"]['STIP_AddProp_WallConstruction'] == 2 and
                    # data["STIP"]['STIP_AddProp_RoofConstruction'] == 2 and
                    # data["STIP"]['STIP_AddProp_Fee'] == "" and
                    # data["STIP"]['STIP_AddProp_Commission'] == "" and
                    # data["STIP"]['STIP_AddProp_TotalPremium'] == "" and
                    # data["STIP"]['STIP_AddProp_AdditionalAdvise'] == "" and
                    # data["STIP"]['STIP_Vehicle_Owner'] == "" and
                    # data["STIP"]['STIP_Vehicle_RegOwner'] == "" and
                    # data["STIP"]['STIP_Vehicle_Usage'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_ONParkingOptions']) == 0 and
                    # data["STIP"]['STIP_Vehicle_ONParking'] == "" and
                    # data["STIP"]['STIP_Vehicle_ONOtherParking'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_CoverType']) == 0 and
                    # int(data["STIP"]['STIP_Vehicle_SM1']) == 2 and
                    # int(data["STIP"]['STIP_Vehicle_SM2']) == 2 and
                    # int(data["STIP"]['STIP_Vehicle_SM3']) == 2 and
                    # int(data["STIP"]['STIP_Vehicle_SM4']) == 2 and
                    # data["STIP"]['STIP_Vehicle_Driver'] == "" and
                    # data["STIP"]['STIP_Vehicle_DriverLicIssDate'] == "" and
                    # data["STIP"]['STIP_Vehicle_LicCode'] == "" and
                    # data["STIP"]['STIP_Vehicle_SumInsured'] == "" and
                    # data["STIP"]['STIP_Vehicle_ClaimBonus'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_VoluntaryExcess']) == 2 and
                    # int(data["STIP"]['STIP_Vehicle_Extras1']) == 2 and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount1'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras2'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount2'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras3'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount3'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras4'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount4'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras5'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount5'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras6'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount6'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras7'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount7'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras8'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount8'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras9'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount9'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras10'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount10'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras11'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount11'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras12'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount12'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_Extras13'] == 2) and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount13'] == "" and
                    # data["STIP"]['STIP_Vehicle_Extras14'] == "" and
                    # data["STIP"]['STIP_Vehicle_ExtrasAmount14'] == "" and
                    # int(data["STIP"]['STIP_Vehicle_AC1']) == 2 and
                    # int(data["STIP"]['STIP_Vehicle_AC2']) == 2 and
                    # int(data["STIP"]['STIP_Vehicle_AC3']) == 2 and
                    # int(data["STIP"]['STIP_Vehicle_AC4']) == 2 and
                    # int(data["STIP"]['STIP_Vehicle_AC5']) == 2 and
                    # data["STIP"]['STIP_Vehicle_Fees'] == "" and
                    # data["STIP"]['STIP_Vehicle_Commission'] == "" and
                    # data["STIP"]['STIP_Vehicle_TotalPremium'] == "" and
                    # data["STIP"]['STIP_Vehicle_Comments'] == "" and        
                    # data["STIP"]['STIP_MotorC_RegOwner'] == "" and
                    # data["STIP"]['STIP_MotorC_Usage'] == "" and
                    # int(data["STIP"]['STIP_MotorC_ONParkingOptions']) == 0 and
                    # data["STIP"]['STIP_MotorC_ONParking'] == "" and
                    # data["STIP"]['STIP_MotorC_ONOtherParking'] == "" and
                    # int(data["STIP"]['STIP_MotorC_CoverType']) == 0 and
                    # int(data["STIP"]['STIP_MotorC_Driver']) == 0 and
                    # data["STIP"]['STIP_MotorC_Driver1'] == "" and
                    # data["STIP"]['STIP_MotorC_DriverLicIssDate'] == "" and
                    # data["STIP"]['STIP_MotorC_LicCode'] == "" and
                    # data["STIP"]['STIP_MotorC_SumInsured'] == "" and
                    # data["STIP"]['STIP_MotorC_ClaimBonus'] == "" and
                    # data["STIP"]['STIP_MotorC_Fees'] == "" and
                    # data["STIP"]['STIP_MotorC_Commission'] == "" and
                    # data["STIP"]['STIP_MotorC_TotalPremium'] == "" and
                    # data["STIP"]['STIP_MotorC_Comments'] == ""
                ):
                    stip_status3 = True
                else:
                    stip_status3 = False
                if (
                    # data["STIP"]['STIP_Trailer_RegOwner'] == "" and
                    # data["STIP"]['STIP_Trailer_Type'] == "" and
                    # data["STIP"]['STIP_Trailer_ONParkingOptions'] == 0 and
                    # data["STIP"]['STIP_Trailer_ONOtherParking'] == "" and
                    # data["STIP"]['STIP_Trailer_SumInsured'] == "" and
                    # data["STIP"]['STIP_Trailer_ClaimBonus'] == "" and
                    # data["STIP"]['STIP_Trailer_Fees'] == "" and
                    # data["STIP"]['STIP_Trailer_Commission'] == "" and
                    # data["STIP"]['STIP_Trailer_TotalPremium'] == "" and
                    # data["STIP"]['STIP_Trailer_Comments'] == "" and
                    # data["STIP"]['STIP_WaterC_RegOwner'] == "" and
                    # data["STIP"]['STIP_WaterC_Type'] == "" and
                    # data["STIP"]['STIP_WaterC_Hull'] == "" and
                    # data["STIP"]['STIP_WaterC_SumInsured'] == "" and
                    # data["STIP"]['STIP_WaterC_VIN'] == "" and
                    # data["STIP"]['STIP_WaterC_EngineNumber'] == "" and
                    # data["STIP"]['STIP_WaterC_OC_Glitter'] == "" and
                    # data["STIP"]['STIP_WaterC_OC_SpecifiedAccessories'] == "" and
                    # data["STIP"]['STIP_WaterC_OC_MotorType'] == "" and
                    # data["STIP"]['STIP_WaterC_OC_Output'] == "" and
                    # data["STIP"]['STIP_WaterC_Fees'] == "" and
                    # data["STIP"]['STIP_WaterC_Commission'] == "" and
                    # data["STIP"]['STIP_WaterC_TotalPremium'] == "" and
                    # data["STIP"]['STIP_WaterC_Comments'] == "" and
                    # data["STIP"]['STIP_PersonalLL_IndemnityLimit'] == 2 and
                    # data["STIP"]['STIP_PersonalLL_IndemnityLimitDetail'] == "" and
                    # data["STIP"]['STIP_PersonalLL_Fees'] == "" and
                    # data["STIP"]['STIP_PersonalLL_Commission'] == "" and
                    # data["STIP"]['STIP_PersonalLL_TotalPremium'] == "" and
                    # data["STIP"]['STIP_PersonalLL_Comments'] == "" and
                    # data["STIP"]['STIP_LegalA_IndemnityLimit'] == 2 and
                    # data["STIP"]['STIP_LegalA_IndemnityLimitDetail'] == "" and
                    # data["STIP"]['STIP_LegalA_Fees'] == "" and
                    # data["STIP"]['STIP_LegalA_Commission'] == "" and
                    # data["STIP"]['STIP_LegalA_TotalPremium'] == "" and
                    # data["STIP"]['STIP_LegalA_Comments'] == "" and
                    data["STIP"]['STIP_ProductConsidered'] == "" and
                    data["STIP"]['STIP_ProductRecommended'] == "" and
                    data["STIP"]['STIP_ProductReasons'] == "" and
                    data["STIP"]['STIP_DbyI_IName'] == "" and
                    data["STIP"]['STIP_DbyI_Code'] == "" and
                    data["STIP"]['STIP_DbyI_Signature'] == "" and
                    data["STIP"]['STIP_DbyI_Date'] == ""
                ):
                    stip_status4 = True
                else:
                    stip_status4 = False
                if stip_status1 == True and stip_status2 == True and stip_status3 == True and stip_status4 == True:
                    data['STIP_status'] = False
                else:
                    data['STIP_status'] = True
                    data['STIP']['STIP_Inception_Date'] = datetimeparser.parse(data['STIP']['STIP_Inception_Date']).strftime('%d %b %Y') if data['STIP']['STIP_Inception_Date'] != "" else "N.A."
                    data['STIP']['STIP_Applicant_DateofBirth'] = datetimeparser.parse(data['STIP']['STIP_Applicant_DateofBirth']).strftime('%d %b %Y') if data['STIP']['STIP_Applicant_DateofBirth'] != "" else "N.A."
                    data['STIP']['STIP_Applicant_DateofBirth'] = datetimeparser.parse(data['STIP']['STIP_Applicant_DateofBirth']).strftime('%d %b %Y') if data['STIP']['STIP_General_LastDate'] != "" else "N.A."
                    parkOptions = ["", "Overnight Parking", "Locked Garage", "Carport", "Security Complex", "Behind Gates", "Others"]
                    coverTypes = ["", "Comprehensive (cover for comprehensive risks)", "Limited (Fire and Theft)", "Third Party (cover for claims of 3rd parties)", "Third Party - Theft excluded (cover for loss or damage except by theft)"] 
                    data['STIP']['STIP_Vehicle_ONParkingOptions'] = parkOptions[int(data['STIP']['STIP_Vehicle_ONParkingOptions'])]
                    data['STIP']['STIP_Vehicle_CoverType'] = coverTypes[int(data['STIP']['STIP_Vehicle_CoverType'])]
                    data['STIP']['STIP_Vehicle_DriverLicIssDate'] = datetimeparser.parse(data['STIP']['STIP_Vehicle_DriverLicIssDate']).strftime('%d %b %Y') if data['STIP']['STIP_Vehicle_DriverLicIssDate'] != "" else "N.A."
                    data['STIP']['STIP_MotorC_ONParkingOptions'] = parkOptions[int(data['STIP']['STIP_MotorC_ONParkingOptions'])]
                    data['STIP']['STIP_MotorC_CoverType'] = coverTypes[int(data['STIP']['STIP_MotorC_CoverType'])]
                    data['STIP']['STIP_MotorC_DriverLicIssDate'] = datetimeparser.parse(data['STIP']['STIP_MotorC_DriverLicIssDate']).strftime('%d %b %Y') if data['STIP']['STIP_MotorC_DriverLicIssDate'] != "" else "N.A."
                    data['STIP']['STIP_Trailer_ONParkingOptions'] = parkOptions[int(data['STIP']['STIP_Trailer_ONParkingOptions'])]
                    data['STIP']['STIP_DbyI_Date'] = datetimeparser.parse(data['STIP']['STIP_DbyI_Date']).strftime('%d/%m/%Y') if data['STIP']['STIP_DbyI_Date'] != "" else "N.A."
                    if STIP_Loss.objects.filter(formId = data['id']).exists():
                        data['STIP']['Loss_Data'] = STIP_Loss.objects.filter(formId = data['id']).values()
                    if STIP_Sec_HC.objects.filter(formId = data['id']).exists():
                        data['STIP']['STIP_Sec_HC_Data'] = STIP_Sec_HC.objects.filter(formId=data['id']).values()
                    if STIP_Sec_Build.objects.filter(formId = data['id']).exists():
                        data['STIP']['STIP_Sec_Build_Data'] = STIP_Sec_Build.objects.filter(formId=data['id']).values()
                    if STIP_Sec_AddProp.objects.filter(formId = data['id']).exists():
                        data['STIP']['STIP_Sec_AddProp_Data'] = STIP_Sec_AddProp.objects.filter(formId=data['id']).values()
                    if STIP_Sec_Vehicle.objects.filter(formId = data['id']).exists():
                        data['STIP']['STIP_Sec_Vehicle_Data'] = STIP_Sec_Vehicle.objects.filter(formId=data['id']).values()
                    if STIP_Sec_Trailer.objects.filter(formId = data['id']).exists():
                        data['STIP']['STIP_Sec_Trailer_Data'] = STIP_Sec_Trailer.objects.filter(formId=data['id']).values()
                    if STIP_Sec_PersonalLL.objects.filter(formId = data['id']).exists():
                        data['STIP']['STIP_Sec_PersonalLL_Data'] = STIP_Sec_PersonalLL.objects.filter(formId=data['id']).values()
                    if STIP_Sec_LegalA.objects.filter(formId = data['id']).exists():
                        data['STIP']['STIP_Sec_LegalA_Data'] = STIP_Sec_LegalA.objects.filter(formId=data['id']).values()
            else:
                data['STIP_status'] = False
        data['advisor'] = UserAccount.objects.filter(id=request.data['advisorId_id']).values('first_name', 'last_name', 'email', 'is_superuser').first()
        data['company'] = ""
        if 'sfp' in data['advisor']['email'] or 'succession' in data['advisor']['email']:
            data['company'] = "SFP"
        if 'fs4p' in data['advisor']['email']:
            data['company'] = "FS4P"
        if 'sanlam' in data['advisor']['email']:
            data['company'] = "AFP"
        # print(data['STIP']['STIP_Applicant_Gender'])
        template = get_template('pdfForm.html')
        cmd_options = {
        'page-size': 'A4',
        'zoom': '0.8',
        'viewport-size' : '1920x1080',
        'footer-center' : '[page]/[topage]',
        'dpi' : '600'
        }
        if (
            not data['dra_status'] and 
            not data['roa_status'] and 
            not data['rp_status'] and 
            not data['ip_status'] and 
            not data['BA_Risk_status'] and 
            not data['BA_Investment_status'] and 
            not data['EB_status'] and 
            not data['STIC_status'] and 
            not data['STIP_status'] and 
            not data['Fiduciary_status'] and 
            not data['MD_status'] and 
            not data['GP_status']
        ):
            return Response({"message": "No Data found, please fill the one of the component before printing", "status": 404}, 404)
        data['logo'] = 'static/images/logo.png'
        response =  PDFTemplateResponse(request=request, template=template,context=data, cmd_options=cmd_options)
        if request.data['dra_status']:
            # fileName = "Sample.pdf"
            fileName = "Dynamic Risk Assessment for %s Filled by %s %s" %(data['RF_ClientName'], data['advisor']['first_name'] + " " + data['advisor']['last_name'] ,uuid.uuid4())
        else:
            # fileName = "Sample.pdf"
            fileName = "Client Record of Advice for %s Filled by %s %s" %(data['RF_ClientName'], data['advisor']['first_name'] + " " + data['advisor']['last_name'] ,uuid.uuid4())
        with open("static/pdf/%s.pdf"%(fileName), "wb") as f:
            f.write(response.rendered_content)
        return Response({"file":"static/pdf/%s.pdf"%(fileName)})
    else:
        return Response({'message': "Does not exist"}, 404)

class disclosuresPDF(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, pk):
        disclosureData = Disclosures.objects.filter(id=pk)
        if not disclosureData.exists():
            return Response({'message': "Does not exist"}, 404)
        disclosureData = disclosureData.values().first()
        data = disclosureData
        data['client_date'] = data['client_date'].strftime('%d %b %Y')
        data['client_authorization_date'] = data['client_authorization_date'].strftime('%d %b %Y')
        data['appointment_date'] = data['appointment_date'].strftime('%d %b %Y')
        data['products'] = []
        productsData = DisclosuresProducts.objects.filter(formId=disclosureData['id'], status=True)
        disclosureProducts = []
        for product in productsData:
            disclosureProducts.append({
                "product" : product.product_provider.product.product,
                "subcode" : product.product_provider.subcode,
            })
        data['products'] = disclosureProducts
        data['user'] = UserAccount.objects.filter(id=data['advisorId_id']).values('first_name', 'last_name', 'email').first()
        user_profile_data = user_profile.objects.filter(user=data['advisorId_id'])
        if user_profile_data.exists():
            user_profile_data = user_profile_data.values().first()
            data['user']['full_name'] = user_profile_data['Full_Name']
            data['user']['contact_cell'] = user_profile_data['Contact_Cell']
            data['user']['qualification'] = "N/A"
            if user_profile_data['Qualification_Name'] != "nan" or user_profile_data['Qualification_Name'] != "" :
                data['user']['qualification'] = user_profile_data['Qualification_Name']
            data['user']['address'] = ""
            if user_profile_data['Address_Postal_1'] != "nan" :
                data['user']['address'] += user_profile_data['Address_Postal_1'] + ", "
            else:
                data['user']['address'] += user_profile_data['Address_Physical_1'] + ", "
            if user_profile_data['Address_Postal_2'] != "nan" :
                data['user']['address'] += user_profile_data['Address_Postal_2'] + ", "
            else:
                data['user']['address'] += user_profile_data['Address_Physical_2'] + ", "
            if user_profile_data['Address_Postal_3'] != "nan" :
                data['user']['address'] += user_profile_data['Address_Postal_3'] + ", "
            else:
                data['user']['address'] += user_profile_data['Address_Physical_3'] + ", "
            if user_profile_data['Address_Postal_Postal_Code'] != "nan" :
                data['user']['address'] += f"{int(float(user_profile_data['Address_Postal_Postal_Code'])):04}" if user_profile_data['Address_Postal_Postal_Code'] != "" else ""
            else:
                data['user']['address'] += f"{int(float(user_profile_data['Address_Physical_Postal_Code'])):04}" if user_profile_data['Address_Physical_Postal_Code'] != "" else ""

            data['user']['LTI_SC_A'] = True if user_profile_data['Category1_1_Registration_Status'] == "Accredited" or user_profile_data['Category1_1_Registration_Status'] == "Under Supervision" else False
            data['user']['LTI_SC_A_Supervisor'] = True if user_profile_data['Category1_1_Supervisor'] != "nan" else False
            
            data['user']['Pension_funds'] = True if user_profile_data['Category1_7_Registration_Status'] == "Accredited" or user_profile_data['Category1_7_Registration_Status'] == "Under Supervision" else False
            data['user']['Pension_funds_Supervisor'] = True if user_profile_data['Category1_7_Supervisor'] != "nan" else False
            
            data['user']['RPension_funds'] = True if user_profile_data['Category1_5_Registration_Status'] == "Accredited" or user_profile_data['Category1_5_Registration_Status'] == "Under Supervision" else False
            data['user']['RPension_funds_Supervisor'] = True if user_profile_data['Category1_5_Supervisor'] != "nan" else False
            
            data['user']['LTI_SC_B1'] = True if user_profile_data['Category1_3_Registration_Status'] == "Accredited" or user_profile_data['Category1_3_Registration_Status'] == "Under Supervision" else False
            data['user']['LTI_SC_B1_Supervisor'] = True if user_profile_data['Category1_3_Supervisor'] != "nan" else False
            
            data['user']['LTI_SC_B1A'] = True if user_profile_data['Category1_22_Registration_Status'] == "Accredited" or user_profile_data['Category1_22_Registration_Status'] == "Under Supervision" else False
            data['user']['LTI_SC_B1A_Supervisor'] = True if user_profile_data['Category1_22_Supervisor'] != "nan" else False
            
            data['user']['LTI_SC_B2'] = True if user_profile_data['Category1_20_Registration_Status'] == "Accredited" or user_profile_data['Category1_20_Registration_Status'] == "Under Supervision" else False
            data['user']['LTI_SC_B2_Supervisor'] = True if user_profile_data['Category1_20_Supervisor'] != "nan" else False
            
            data['user']['LTI_SC_B2A'] = True if user_profile_data['Category1_21_Registration_Status'] == "Accredited" or user_profile_data['Category1_21_Registration_Status'] == "Under Supervision" else False
            data['user']['LTI_SC_B2A_Supervisor'] = True if user_profile_data['Category1_21_Supervisor'] != "nan" else False
            
            data['user']['LTI_SC_C'] = True if user_profile_data['Category1_4_Registration_Status'] == "Accredited" or user_profile_data['Category1_4_Registration_Status'] == "Under Supervision" else False
            data['user']['LTI_SC_C_Supervisor'] = True if user_profile_data['Category1_4_Supervisor'] != "nan" else False
            
            data['user']['LTI_Deposits'] = True if user_profile_data['Category1_17_Registration_Status'] == "Accredited" or user_profile_data['Category1_17_Registration_Status'] == "Under Supervision" else False
            data['user']['LTI_Deposits_Supervisor'] = True if user_profile_data['Category1_17_Supervisor'] != "nan" else False
            
            data['user']['STI_Deposits'] = True if user_profile_data['Category1_18_Registration_Status'] == "Accredited" or user_profile_data['Category1_18_Registration_Status'] == "Under Supervision" else False
            data['user']['STI_Deposits_Supervisor'] = True if user_profile_data['Category1_18_Supervisor'] != "nan" else False
            
            data['user']['STI_PL'] = True if user_profile_data['Category1_2_Registration_Status'] == "Accredited" or user_profile_data['Category1_2_Registration_Status'] == "Under Supervision" else False
            data['user']['STI_PL_Supervisor'] = True if user_profile_data['Category1_2_Supervisor'] != "nan" else False
            
            data['user']['STI_PL_A'] = True if user_profile_data['Category1_23_Registration_Status'] == "Accredited" or user_profile_data['Category1_23_Registration_Status'] == "Under Supervision" else False
            data['user']['STI_PL_A_Supervisor'] = True if user_profile_data['Category1_23_Supervisor'] != "nan" else False
            
            data['user']['STI_CL'] = True if user_profile_data['Category1_6_Registration_Status'] == "Accredited" or user_profile_data['Category1_6_Registration_Status'] == "Under Supervision" else False
            data['user']['STI_CL_Supervisor'] = True if user_profile_data['Category1_6_Supervisor'] != "nan" else False
            
            data['user']['CIC'] = True if user_profile_data['Category1_14_Registration_Status'] == "Accredited" or user_profile_data['Category1_14_Registration_Status'] == "Under Supervision" else False
            data['user']['CIC_Supervisor'] = True if user_profile_data['Category1_14_Supervisor'] != "nan" else False
            
            data['user']['HSB'] = True if user_profile_data['Category1_16_Registration_Status'] == "Accredited" or user_profile_data['Category1_16_Registration_Status'] == "Under Supervision" else False
            data['user']['HSB_Supervisor'] = True if user_profile_data['Category1_16_Supervisor'] != "nan" else False
            
            data['user']['Shares'] = True if user_profile_data['Category1_8_Registration_Status'] == "Accredited" or user_profile_data['Category1_8_Registration_Status'] == "Under Supervision" else False
            data['user']['Shares_Supervisor'] = True if user_profile_data['Category1_8_Supervisor'] != "nan" else False
            
            data['user']['Bonds'] = True if user_profile_data['Category1_12_Registration_Status'] == "Accredited" or user_profile_data['Category1_12_Registration_Status'] == "Under Supervision" else False
            data['user']['Bonds_Supervisor'] = True if user_profile_data['Category1_12_Supervisor'] != "nan" else False
            
            data['user']['Money_market'] = True if user_profile_data['Category1_9_Registration_Status'] == "Accredited" or user_profile_data['Category1_9_Registration_Status'] == "Under Supervision" else False
            data['user']['Money_market_Supervisor'] = True if user_profile_data['Category1_9_Supervisor'] != "nan" else False
            
            data['user']['Debentures'] = True if user_profile_data['Category1_10_Registration_Status'] == "Accredited" or user_profile_data['Category1_10_Registration_Status'] == "Under Supervision" else False
            data['user']['Debentures_Supervisor'] = True if user_profile_data['Category1_10_Supervisor'] != "nan" else False
            
            data['user']['Warrants'] = True if user_profile_data['Category1_11_Registration_Status'] == "Accredited" or user_profile_data['Category1_11_Registration_Status'] == "Under Supervision" else False
            data['user']['Warrants_Supervisor'] = True if user_profile_data['Category1_11_Supervisor'] != "nan" else False
            # Get the current date and time in the 'Africa/Johannesburg' timezone
            now = datetime.now(pytz.timezone('Africa/Johannesburg'))
            # Get the appointment date from the user_profile_data dictionary
            data['user']['inservice'] = user_profile_data['Appointment_Date'].strftime("%d %B %Y")
            appointment_date = user_profile_data['Appointment_Date']
            dofa = user_profile_data['DOFA']
            appointment_date = (user_profile_data['Appointment_Date'])
            experience = now.year - appointment_date.year
            experience = experience if experience != 0 else 1
            dofa = user_profile_data['DOFA']
            industry_experience = now.year - dofa.year
            industry_experience = industry_experience if industry_experience != 0 else 1

            # Calculate the difference in years
            data['user']['experience'] = experience
            data['user']['industry_experience'] = industry_experience
        
        data['company'] = ""
        if 'sfp' in data['user']['email'] or 'succession' in data['user']['email']:
            data['company'] = "SFP"
        if 'fs4p' in data['user']['email']:
            data['company'] = "FS4P"
        if 'sanlam' in data['user']['email']:
            data['company'] = "AFP"
        data['disclosures_status'] = True
        data['logo'] = 'static/images/logo.png'
        template = get_template('pdfForm.html')
        # Render the footer template to a string
        footer_html = render_to_string('footer.html', context=data)

        # Create a temporary file
        temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.html')

        # Write the footer HTML to the file
        temp_file.write(footer_html.encode('utf-8'))
        temp_file.close()

        # Load the template
        header_template = get_template('header.html')

        # Render the template with context data
        header_html = header_template.render(context=data)

        # Create a temporary file
        header_temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.html')

        # Write the header HTML to the file
        header_temp_file.write(header_html.encode('utf-8'))
        header_temp_file.close()

        cmd_options = {
            'page-size': 'A4',
            'zoom': '0.9',
            'viewport-size' : '1920x1080',
            'footer-html' : temp_file.name,
            # 'header-html' : header_temp_file.name,
            'dpi' : '600',
            'margin-top': '20mm',
            'margin-bottom': '20mm'
        }
        response =  PDFTemplateResponse(request=request, template=template,context=data, cmd_options=cmd_options)
        fileName = "Disclosure and Consent Document for %s - %s" %(disclosureData['client_id_number'],uuid.uuid4())
        # fileName = "DISCLOSURE AND CONSENT DOCUMENT" 
        with open("static/pdf/%s.pdf"%(fileName), "wb") as f:
            f.write(response.rendered_content)
        os.unlink(temp_file.name)
        # os.unlink(header_temp_file.name)
        return Response({"file":"static/pdf/%s.pdf"%(fileName)})
    
def test(request):
      
    # render function takes argument  - request
    # and return HTML as response
    return render(request, "test.html")

class printROA(APIView):
    def post(self, request, pk):
        data = Disclosures.objects.filter(id=pk)
        if data.exists():
            data = data.values().first()
            data['dra_status'] = False
            # data['RF_Date'] = data['RF_Date'].strftime("%d %B %Y")
            # data['dra_status'] = request.data['dra_status']
            # data['roa_status'] = False
            # data['rp_status'] = False
            # data['ip_status'] = False
            # data['BA_Risk_status'] = False
            # data['BA_Investment_status'] = False
            # data['EB_status'] = False
            # data['STIC_status'] = False
            # data['STIP_status'] = False
            # data['Fiduciary_status'] = False
            # data['MD_status'] = False
            # data['GP_status'] = False
            if False:
                val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11 = 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0
                if data['RF_Occupation'] == "1" or data['RF_Occupation'] == "2" or data['RF_Occupation'] == "3" or data['RF_Occupation'] == "5":
                    val1 = 1
                if data['RF_Occupation'] == "4" or data['RF_Occupation'] == "6":
                    val1 = 3
                if (
                    data['RF_CountryOfBirth'] == "1" or data['RF_CountryOfBirth'] == "2" or data['RF_CountryOfBirth'] == "3" or data['RF_CountryOfBirth'] == "4" or data['RF_CountryOfBirth'] == "6" or data['RF_CountryOfBirth'] == "8" or data['RF_CountryOfBirth'] == "10" or data['RF_CountryOfBirth'] == "13" or data['RF_CountryOfBirth'] == "16" or data['RF_CountryOfBirth'] == "17" or data['RF_CountryOfBirth'] == "19" or data['RF_CountryOfBirth'] == "20" or data['RF_CountryOfBirth'] == "24"
                    or data['RF_CountryOfBirth'] == "27" or data['RF_CountryOfBirth'] == "28" or data['RF_CountryOfBirth'] == "29" or data['RF_CountryOfBirth'] == "30" or data['RF_CountryOfBirth'] == "31" or data['RF_CountryOfBirth'] == "32" or data['RF_CountryOfBirth'] == "33" or data['RF_CountryOfBirth'] == "36" or data['RF_CountryOfBirth'] == "37" or data['RF_CountryOfBirth'] == "39" or data['RF_CountryOfBirth'] == "41" or data['RF_CountryOfBirth'] == "42" or data['RF_CountryOfBirth'] == "43"
                    or data['RF_CountryOfBirth'] == "46" or data['RF_CountryOfBirth'] == "47" or data['RF_CountryOfBirth'] == "48" or data['RF_CountryOfBirth'] == "49" or data['RF_CountryOfBirth'] == "50" or data['RF_CountryOfBirth'] == "51" or data['RF_CountryOfBirth'] == "52" or data['RF_CountryOfBirth'] == "53" or data['RF_CountryOfBirth'] == "55" or data['RF_CountryOfBirth'] == "58" or data['RF_CountryOfBirth'] == "62" or data['RF_CountryOfBirth'] == "64" or data['RF_CountryOfBirth'] == "65" or data['RF_CountryOfBirth'] == "66" 
                    or data['RF_CountryOfBirth'] == "67" or data['RF_CountryOfBirth'] == "68" or data['RF_CountryOfBirth'] == "69" or data['RF_CountryOfBirth'] == "70" or data['RF_CountryOfBirth'] == "71" or data['RF_CountryOfBirth'] == "72" or data['RF_CountryOfBirth'] == "73" or data['RF_CountryOfBirth'] == "74" or data['RF_CountryOfBirth'] == "82" or data['RF_CountryOfBirth'] == "85" or data['RF_CountryOfBirth'] == "86" or data['RF_CountryOfBirth'] == "90" or data['RF_CountryOfBirth'] == "91" or data['RF_CountryOfBirth'] == "92" or data['RF_CountryOfBirth'] == "93"
                    or data['RF_CountryOfBirth'] == "94" or data['RF_CountryOfBirth'] == "95" or data['RF_CountryOfBirth'] == "96" or data['RF_CountryOfBirth'] == "97" or data['RF_CountryOfBirth'] == "98" or data['RF_CountryOfBirth'] == "99" or data['RF_CountryOfBirth'] == "100" or data['RF_CountryOfBirth'] == "102" or data['RF_CountryOfBirth'] == "103"

                    or data['RF_CountryOfBirth'] == "109"  or data['RF_CountryOfBirth'] == "112"  or data['RF_CountryOfBirth'] == "115"  or data['RF_CountryOfBirth'] == "116"  or data['RF_CountryOfBirth'] == "117"  or data['RF_CountryOfBirth'] == "121"  or data['RF_CountryOfBirth'] == "123"  or data['RF_CountryOfBirth'] == "124"
                    or data['RF_CountryOfBirth'] == "126"  or data['RF_CountryOfBirth'] == "127"  or data['RF_CountryOfBirth'] == "128"  or data['RF_CountryOfBirth'] == "129"  or data['RF_CountryOfBirth'] == "134"  or data['RF_CountryOfBirth'] == "135"  or data['RF_CountryOfBirth'] == "136"
                    or data['RF_CountryOfBirth'] == "139"  or data['RF_CountryOfBirth'] == "143"  or data['RF_CountryOfBirth'] == "145"  or data['RF_CountryOfBirth'] == "146"  or data['RF_CountryOfBirth'] == "148"  or data['RF_CountryOfBirth'] == "150" or data['RF_CountryOfBirth'] == "151"
                    or data['RF_CountryOfBirth'] == "152" or data['RF_CountryOfBirth'] == "153" or data['RF_CountryOfBirth'] == "154" or data['RF_CountryOfBirth'] == "155" or data['RF_CountryOfBirth'] == "158" or data['RF_CountryOfBirth'] == "160" or data['RF_CountryOfBirth'] == "162" 
                    or data['RF_CountryOfBirth'] == "163" or data['RF_CountryOfBirth'] == "164" or data['RF_CountryOfBirth'] == "165" or data['RF_CountryOfBirth'] == "166" or data['RF_CountryOfBirth'] == "168" or data['RF_CountryOfBirth'] == "170" or data['RF_CountryOfBirth'] == "172" or data['RF_CountryOfBirth'] == "173" or data['RF_CountryOfBirth'] == "174" or data['RF_CountryOfBirth'] == "175" or data['RF_CountryOfBirth'] == "176" or data['RF_CountryOfBirth'] == "177"
                    or data['RF_CountryOfBirth'] == "186" or data['RF_CountryOfBirth'] == "187" or data['RF_CountryOfBirth'] == "188" or data['RF_CountryOfBirth'] == "190" or data['RF_CountryOfBirth'] == "191" or data['RF_CountryOfBirth'] == "193" or data['RF_CountryOfBirth'] == "195"
                    or data['RF_CountryOfBirth'] == "197" or data['RF_CountryOfBirth'] == "198" or data['RF_CountryOfBirth'] == "200" or data['RF_CountryOfBirth'] == "202" or data['RF_CountryOfBirth'] == "203" or data['RF_CountryOfBirth'] == "206" or data['RF_CountryOfBirth'] == "208" or data['RF_CountryOfBirth'] == "209"
                    or data['RF_CountryOfBirth'] == "211" or data['RF_CountryOfBirth'] == "212" or data['RF_CountryOfBirth'] == "213" or data['RF_CountryOfBirth'] == "214" or data['RF_CountryOfBirth'] == "219" or data['RF_CountryOfBirth'] == "220" or data['RF_CountryOfBirth'] == "221" or data['RF_CountryOfBirth'] == "222" or data['RF_CountryOfBirth'] == "223" or data['RF_CountryOfBirth'] == "224"
                    or data['RF_CountryOfBirth'] == "226"  or data['RF_CountryOfBirth'] == "169" or data['RF_CountryOfBirth'] == "230" or data['RF_CountryOfBirth'] == "232" or data['RF_CountryOfBirth'] == "233" or data['RF_CountryOfBirth'] == "236" or data['RF_CountryOfBirth'] == "237" or data['RF_CountryOfBirth'] == "238" or data['RF_CountryOfBirth'] == "239"
                ):
                    val2 = 9
                if(
                    data['RF_CountryOfBirth'] == "5" or data['RF_CountryOfBirth'] == "7" or data['RF_CountryOfBirth'] == "9" or data['RF_CountryOfBirth'] == "12" or data['RF_CountryOfBirth'] == "25" or data['RF_CountryOfBirth'] == "34" or data['RF_CountryOfBirth'] == "35" or data['RF_CountryOfBirth'] == "61" or data['RF_CountryOfBirth'] == "76" or data['RF_CountryOfBirth'] == "84" or data['RF_CountryOfBirth'] == "88"
                    or data['RF_CountryOfBirth'] == "114" or data['RF_CountryOfBirth'] == "130" or data['RF_CountryOfBirth'] == "132" or data['RF_CountryOfBirth'] == "142" or data['RF_CountryOfBirth'] == "149" or data['RF_CountryOfBirth'] == "159" or data['RF_CountryOfBirth'] == "161" 
                    or data['RF_CountryOfBirth'] == "167" or data['RF_CountryOfBirth'] == "194" or data['RF_CountryOfBirth'] == "215" or data['RF_CountryOfBirth'] == "216"
                ):
                    val2=3
                if(data['RF_CountryOfBirth'] == "11" or data['RF_CountryOfBirth'] == "14" or data['RF_CountryOfBirth'] == "15" or data['RF_CountryOfBirth'] == "18" or data['RF_CountryOfBirth'] == "22" or data['RF_CountryOfBirth'] == "23" or data['RF_CountryOfBirth'] == "26" or data['RF_CountryOfBirth'] == "30" or data['RF_CountryOfBirth'] == "38" or data['RF_CountryOfBirth'] == "40"
                    or data['RF_CountryOfBirth'] == "44" or data['RF_CountryOfBirth'] == "45" or data['RF_CountryOfBirth'] == "54" or data['RF_CountryOfBirth'] == "56" or data['RF_CountryOfBirth'] == "59" or data['RF_CountryOfBirth'] == "60" or data['RF_CountryOfBirth'] == "63" or data['RF_CountryOfBirth'] == "70" or data['RF_CountryOfBirth'] == "75" or data['RF_CountryOfBirth'] == "77" 
                    or data['RF_CountryOfBirth'] == "78" or data['RF_CountryOfBirth'] == "79" or data['RF_CountryOfBirth'] == "80" or data['RF_CountryOfBirth'] == "81" or data['RF_CountryOfBirth'] == "83" or data['RF_CountryOfBirth'] == "87" or data['RF_CountryOfBirth'] == "89" or data['RF_CountryOfBirth'] == "96" or data['RF_CountryOfBirth'] == "97" or data['RF_CountryOfBirth'] == "98" 
                    or data['RF_CountryOfBirth'] == "99" or data['RF_CountryOfBirth'] == "100" or data['RF_CountryOfBirth'] == "101" or data['RF_CountryOfBirth'] == "102" or data['RF_CountryOfBirth'] == "104" or data['RF_CountryOfBirth'] == "105"
                    or data['RF_CountryOfBirth'] == "108" or data['RF_CountryOfBirth'] == "110" or data['RF_CountryOfBirth'] == "111" or data['RF_CountryOfBirth'] == "113" or data['RF_CountryOfBirth'] == "118" or data['RF_CountryOfBirth'] == "120" or data['RF_CountryOfBirth'] == "125"
                    or data['RF_CountryOfBirth'] == "131" or data['RF_CountryOfBirth'] == "133" or  data['RF_CountryOfBirth'] == "137" or data['RF_CountryOfBirth'] == "138" or data['RF_CountryOfBirth'] == "140" or data['RF_CountryOfBirth'] == "141"
                    or data['RF_CountryOfBirth'] == "144" or data['RF_CountryOfBirth'] == "147" or data['RF_CountryOfBirth'] == "156" or data['RF_CountryOfBirth'] == "157" or data['RF_CountryOfBirth'] == "171" or data['RF_CountryOfBirth'] == "178" or data['RF_CountryOfBirth'] == "179" or data['RF_CountryOfBirth'] == "180" or data['RF_CountryOfBirth'] == "181" or data['RF_CountryOfBirth'] == "182" or data['RF_CountryOfBirth'] == "183"
                    or data['RF_CountryOfBirth'] == "185" or data['RF_CountryOfBirth'] == "189" or data['RF_CountryOfBirth'] == "192" or data['RF_CountryOfBirth'] == "196" or data['RF_CountryOfBirth'] == "199" or data['RF_CountryOfBirth'] == "201" or data['RF_CountryOfBirth'] == "204" or data['RF_CountryOfBirth'] == "205"
                    or data['RF_CountryOfBirth'] == "207" or data['RF_CountryOfBirth'] == "210" or data['RF_CountryOfBirth'] == "218" or data['RF_CountryOfBirth'] == "225" or data['RF_CountryOfBirth'] == "231" or data['RF_CountryOfBirth'] == "234" or data['RF_CountryOfBirth'] == "235" or data['RF_CountryOfBirth'] == "237" or data['RF_CountryOfBirth'] == "238"
                ):
                    val2=6
                if(data['RF_CountryOfBirth'] == "21" or data['RF_CountryOfBirth'] == "57" or data['RF_CountryOfBirth'] == "106" or data['RF_CountryOfBirth'] == "107" or data['RF_CountryOfBirth'] == "119" or data['RF_CountryOfBirth'] == "187" or data['RF_CountryOfBirth'] == "217"):
                    val2=12
                if(
                    int(data['RF_CountryOfResidence']) == 1 or int(data['RF_CountryOfResidence']) == 2 or int(data['RF_CountryOfResidence']) == 3 or int(data['RF_CountryOfResidence']) == 4 or int(data['RF_CountryOfResidence']) == 6 or int(data['RF_CountryOfResidence']) == 8 or int(data['RF_CountryOfResidence']) == 10 or int(data['RF_CountryOfResidence']) == 13 or int(data['RF_CountryOfResidence']) == 16 or int(data['RF_CountryOfResidence']) == 17 or int(data['RF_CountryOfResidence']) == 19 or int(data['RF_CountryOfResidence']) == 20 or int(data['RF_CountryOfResidence']) == 24
                    or int(data['RF_CountryOfResidence']) == 27 or int(data['RF_CountryOfResidence']) == 28 or int(data['RF_CountryOfResidence']) == 29 or int(data['RF_CountryOfResidence']) == 30 or int(data['RF_CountryOfResidence']) == 31 or int(data['RF_CountryOfResidence']) == 32 or int(data['RF_CountryOfResidence']) == 33 or int(data['RF_CountryOfResidence']) == 36 or int(data['RF_CountryOfResidence']) == 37 or int(data['RF_CountryOfResidence']) == 39 or int(data['RF_CountryOfResidence']) == 41 or int(data['RF_CountryOfResidence']) == 42 or int(data['RF_CountryOfResidence']) == 43
                    or int(data['RF_CountryOfResidence']) == 46 or int(data['RF_CountryOfResidence']) == 47 or int(data['RF_CountryOfResidence']) == 48 or int(data['RF_CountryOfResidence']) == 49 or int(data['RF_CountryOfResidence']) == 50 or int(data['RF_CountryOfResidence']) == 51 or int(data['RF_CountryOfResidence']) == 52 or int(data['RF_CountryOfResidence']) == 53 or int(data['RF_CountryOfResidence']) == 55 or int(data['RF_CountryOfResidence']) == 58 or int(data['RF_CountryOfResidence']) == 62 or int(data['RF_CountryOfResidence']) == 64 or int(data['RF_CountryOfResidence']) == 65 or int(data['RF_CountryOfResidence']) == 66 
                    or int(data['RF_CountryOfResidence']) == 67 or int(data['RF_CountryOfResidence']) == 68 or int(data['RF_CountryOfResidence']) == 69 or int(data['RF_CountryOfResidence']) == 70 or int(data['RF_CountryOfResidence']) == 71 or int(data['RF_CountryOfResidence']) == 72 or int(data['RF_CountryOfResidence']) == 73 or int(data['RF_CountryOfResidence']) == 74 or int(data['RF_CountryOfResidence']) == 82 or int(data['RF_CountryOfResidence']) == 85 or int(data['RF_CountryOfResidence']) == 86 or int(data['RF_CountryOfResidence']) == 90 or int(data['RF_CountryOfResidence']) == 91 or int(data['RF_CountryOfResidence']) == 92 or int(data['RF_CountryOfResidence']) == 93
                    or int(data['RF_CountryOfResidence']) == 94 or int(data['RF_CountryOfResidence']) == 95 or int(data['RF_CountryOfResidence']) == 96 or int(data['RF_CountryOfResidence']) == 97 or int(data['RF_CountryOfResidence']) == 98 or int(data['RF_CountryOfResidence']) == 99 or int(data['RF_CountryOfResidence']) == 100 or int(data['RF_CountryOfResidence']) == 102 or int(data['RF_CountryOfResidence']) == 103
                    
                    or int(data['RF_CountryOfResidence']) == 109  or int(data['RF_CountryOfResidence']) == 112  or int(data['RF_CountryOfResidence']) == 115  or int(data['RF_CountryOfResidence']) == 116  or int(data['RF_CountryOfResidence']) == 117  or int(data['RF_CountryOfResidence']) == 121  or int(data['RF_CountryOfResidence']) == 123  or int(data['RF_CountryOfResidence']) == 124
                    or int(data['RF_CountryOfResidence']) == 126  or int(data['RF_CountryOfResidence']) == 127  or int(data['RF_CountryOfResidence']) == 128  or int(data['RF_CountryOfResidence']) == 129  or int(data['RF_CountryOfResidence']) == 134  or int(data['RF_CountryOfResidence']) == 135  or int(data['RF_CountryOfResidence']) == 136
                    or int(data['RF_CountryOfResidence']) == 139  or int(data['RF_CountryOfResidence']) == 143  or int(data['RF_CountryOfResidence']) == 145  or int(data['RF_CountryOfResidence']) == 146  or int(data['RF_CountryOfResidence']) == 148  or int(data['RF_CountryOfResidence']) == 150 or int(data['RF_CountryOfResidence']) == 151
                    or int(data['RF_CountryOfResidence']) == 152 or int(data['RF_CountryOfResidence']) == 153 or int(data['RF_CountryOfResidence']) == 154 or int(data['RF_CountryOfResidence']) == 155 or int(data['RF_CountryOfResidence']) == 158 or int(data['RF_CountryOfResidence']) == 160 or int(data['RF_CountryOfResidence']) == 162 
                    or int(data['RF_CountryOfResidence']) == 163 or int(data['RF_CountryOfResidence']) == 164 or int(data['RF_CountryOfResidence']) == 165 or int(data['RF_CountryOfResidence']) == 166 or int(data['RF_CountryOfResidence']) == 168 or int(data['RF_CountryOfResidence']) == 170 or int(data['RF_CountryOfResidence']) == 172 or int(data['RF_CountryOfResidence']) == 173 or int(data['RF_CountryOfResidence']) == 174 or int(data['RF_CountryOfResidence']) == 175 or int(data['RF_CountryOfResidence']) == 176 or int(data['RF_CountryOfResidence']) == 177
                    or int(data['RF_CountryOfResidence']) == 186 or int(data['RF_CountryOfResidence']) == 187 or int(data['RF_CountryOfResidence']) == 188 or int(data['RF_CountryOfResidence']) == 190 or int(data['RF_CountryOfResidence']) == 191 or int(data['RF_CountryOfResidence']) == 193 or int(data['RF_CountryOfResidence']) == 195
                    or int(data['RF_CountryOfResidence']) == 197 or int(data['RF_CountryOfResidence']) == 198 or int(data['RF_CountryOfResidence']) == 200 or int(data['RF_CountryOfResidence']) == 202 or int(data['RF_CountryOfResidence']) == 203 or int(data['RF_CountryOfResidence']) == 206 or int(data['RF_CountryOfResidence']) == 208 or int(data['RF_CountryOfResidence']) == 209
                    or int(data['RF_CountryOfResidence']) == 211 or int(data['RF_CountryOfResidence']) == 212 or int(data['RF_CountryOfResidence']) == 213 or int(data['RF_CountryOfResidence']) == 214 or int(data['RF_CountryOfResidence']) == 219 or int(data['RF_CountryOfResidence']) == 220 or int(data['RF_CountryOfResidence']) == 221 or int(data['RF_CountryOfResidence']) == 222 or int(data['RF_CountryOfResidence']) == 223 or int(data['RF_CountryOfResidence']) == 224
                    or int(data['RF_CountryOfResidence']) == 226 or int(data['RF_CountryOfResidence']) == 230 or int(data['RF_CountryOfResidence']) == 232 or int(data['RF_CountryOfResidence']) == 233 or int(data['RF_CountryOfResidence']) == 236 or int(data['RF_CountryOfResidence']) == 237 or int(data['RF_CountryOfResidence']) == 238 or int(data['RF_CountryOfResidence']) == 239
                ):
                    val3=9
                if(
                    int(data['RF_CountryOfResidence']) == 5 or int(data['RF_CountryOfResidence']) == 7 or int(data['RF_CountryOfResidence']) == 9 or int(data['RF_CountryOfResidence']) == 12 or int(data['RF_CountryOfResidence']) == 25 or int(data['RF_CountryOfResidence']) == 34 or int(data['RF_CountryOfResidence']) == 35 or int(data['RF_CountryOfResidence']) == 61 or int(data['RF_CountryOfResidence']) == 76 or int(data['RF_CountryOfResidence']) == 84or int(data['RF_CountryOfResidence']) == 88
                    or int(data['RF_CountryOfResidence']) == 114 or int(data['RF_CountryOfResidence']) == 130 or int(data['RF_CountryOfResidence']) == 132 or int(data['RF_CountryOfResidence']) == 142 or int(data['RF_CountryOfResidence']) == 149 or int(data['RF_CountryOfResidence']) == 159 or int(data['RF_CountryOfResidence']) == 161 
                    or int(data['RF_CountryOfResidence']) == 167 or int(data['RF_CountryOfResidence']) == 194 or int(data['RF_CountryOfResidence']) == 215 or int(data['RF_CountryOfResidence']) == 216
                ):
                    val3=3
                if(
                    int(data['RF_CountryOfResidence']) == 11 or int(data['RF_CountryOfResidence']) == 14 or int(data['RF_CountryOfResidence']) == 15 or int(data['RF_CountryOfResidence']) == 18 or int(data['RF_CountryOfResidence']) == 22 or int(data['RF_CountryOfResidence']) == 23 or int(data['RF_CountryOfResidence']) == 26 or int(data['RF_CountryOfResidence']) == 30 or int(data['RF_CountryOfResidence']) == 38 or int(data['RF_CountryOfResidence']) == 40
                    or int(data['RF_CountryOfResidence']) == 44 or int(data['RF_CountryOfResidence']) == 45 or int(data['RF_CountryOfResidence']) == 54 or int(data['RF_CountryOfResidence']) == 56 or int(data['RF_CountryOfResidence']) == 59 or int(data['RF_CountryOfResidence']) == 60 or int(data['RF_CountryOfResidence']) == 63 or int(data['RF_CountryOfResidence']) == 70 or int(data['RF_CountryOfResidence']) == 75 or int(data['RF_CountryOfResidence']) == 77 
                    or int(data['RF_CountryOfResidence']) == 78 or int(data['RF_CountryOfResidence']) == 79 or int(data['RF_CountryOfResidence']) == 80 or int(data['RF_CountryOfResidence']) == 81 or int(data['RF_CountryOfResidence']) == 83 or int(data['RF_CountryOfResidence']) == 87 or int(data['RF_CountryOfResidence']) == 89 or int(data['RF_CountryOfResidence']) == 96 or int(data['RF_CountryOfResidence']) == 97 or int(data['RF_CountryOfResidence']) == 98 
                    or int(data['RF_CountryOfResidence']) == 99 or int(data['RF_CountryOfResidence']) == 100 or int(data['RF_CountryOfResidence']) == 101 or int(data['RF_CountryOfResidence']) == 102 or int(data['RF_CountryOfResidence']) == 104 or int(data['RF_CountryOfResidence']) == 105
                    
                    or int(data['RF_CountryOfResidence']) == 108 or int(data['RF_CountryOfResidence']) == 110 or int(data['RF_CountryOfResidence']) == 111 or int(data['RF_CountryOfResidence']) == 113 or int(data['RF_CountryOfResidence']) == 118 or int(data['RF_CountryOfResidence']) == 120 or int(data['RF_CountryOfResidence']) == 125
                    or int(data['RF_CountryOfResidence']) == 131 or int(data['RF_CountryOfResidence']) == 133 or  int(data['RF_CountryOfResidence']) == 137 or int(data['RF_CountryOfResidence']) == 138 or int(data['RF_CountryOfResidence']) == 140 or int(data['RF_CountryOfResidence']) == 141
                    or int(data['RF_CountryOfResidence']) == 144 or int(data['RF_CountryOfResidence']) == 147 or int(data['RF_CountryOfResidence']) == 156 or int(data['RF_CountryOfResidence']) == 157 or int(data['RF_CountryOfResidence']) == 169 or int(data['RF_CountryOfResidence']) == 171 or int(data['RF_CountryOfResidence']) == 178 or int(data['RF_CountryOfResidence']) == 179 or int(data['RF_CountryOfResidence']) == 180 or int(data['RF_CountryOfResidence']) == 181 or int(data['RF_CountryOfResidence']) == 182 or int(data['RF_CountryOfResidence']) == 183
                    or int(data['RF_CountryOfResidence']) == 185 or int(data['RF_CountryOfResidence']) == 189 or int(data['RF_CountryOfResidence']) == 192 or int(data['RF_CountryOfResidence']) == 196 or int(data['RF_CountryOfResidence']) == 199 or int(data['RF_CountryOfResidence']) == 201 or int(data['RF_CountryOfResidence']) == 204 or int(data['RF_CountryOfResidence']) == 205
                    or int(data['RF_CountryOfResidence']) == 207 or int(data['RF_CountryOfResidence']) == 210 or int(data['RF_CountryOfResidence']) == 218 or int(data['RF_CountryOfResidence']) == 225 or int(data['RF_CountryOfResidence']) == 231 or int(data['RF_CountryOfResidence']) == 234 or int(data['RF_CountryOfResidence']) == 235 or int(data['RF_CountryOfResidence']) == 237 or int(data['RF_CountryOfResidence']) == 238
                ):
                    val3=6
                if(int(data['RF_CountryOfResidence']) == 21 or int(data['RF_CountryOfResidence']) == 57 or int(data['RF_CountryOfResidence']) == 106 or int(data['RF_CountryOfResidence']) == 107 or int(data['RF_CountryOfResidence']) == 119 or int(data['RF_CountryOfResidence']) == 187 or int(data['RF_CountryOfResidence']) == 217):
                    val3=12
                if(
                    int(data['RF_Nationality']) == 1 or int(data['RF_Nationality']) == 2 or int(data['RF_Nationality']) == 3 or int(data['RF_Nationality']) == 4 or int(data['RF_Nationality']) == 6 or int(data['RF_Nationality']) == 8 or int(data['RF_Nationality']) == 10 or int(data['RF_Nationality']) == 13 or int(data['RF_Nationality']) == 16 or int(data['RF_Nationality']) == 17 or int(data['RF_Nationality']) == 19 or int(data['RF_Nationality']) == 20 or int(data['RF_Nationality']) == 24
                    or int(data['RF_Nationality']) == 27 or int(data['RF_Nationality']) == 28 or int(data['RF_Nationality']) == 29 or int(data['RF_Nationality']) == 30 or int(data['RF_Nationality']) == 31 or int(data['RF_Nationality']) == 32 or int(data['RF_Nationality']) == 33 or int(data['RF_Nationality']) == 36 or int(data['RF_Nationality']) == 37 or int(data['RF_Nationality']) == 39 or int(data['RF_Nationality']) == 41 or int(data['RF_Nationality']) == 42 or int(data['RF_Nationality']) == 43
                    or int(data['RF_Nationality']) == 46 or int(data['RF_Nationality']) == 47 or int(data['RF_Nationality']) == 48 or int(data['RF_Nationality']) == 49 or int(data['RF_Nationality']) == 50 or int(data['RF_Nationality']) == 51 or int(data['RF_Nationality']) == 52 or int(data['RF_Nationality']) == 53 or int(data['RF_Nationality']) == 55 or int(data['RF_Nationality']) == 58 or int(data['RF_Nationality']) == 62 or int(data['RF_Nationality']) == 64 or int(data['RF_Nationality']) == 65 or int(data['RF_Nationality']) == 66 
                    or int(data['RF_Nationality']) == 67 or int(data['RF_Nationality']) == 68 or int(data['RF_Nationality']) == 69 or int(data['RF_Nationality']) == 70 or int(data['RF_Nationality']) == 71 or int(data['RF_Nationality']) == 72 or int(data['RF_Nationality']) == 73 or int(data['RF_Nationality']) == 74 or int(data['RF_Nationality']) == 82 or int(data['RF_Nationality']) == 85 or int(data['RF_Nationality']) == 86 or int(data['RF_Nationality']) == 90 or int(data['RF_Nationality']) == 91 or int(data['RF_Nationality']) == 92 or int(data['RF_Nationality']) == 93
                    or int(data['RF_Nationality']) == 94 or int(data['RF_Nationality']) == 95 or int(data['RF_Nationality']) == 96 or int(data['RF_Nationality']) == 97 or int(data['RF_Nationality']) == 98 or int(data['RF_Nationality']) == 99 or int(data['RF_Nationality']) == 100 or int(data['RF_Nationality']) == 102 or int(data['RF_Nationality']) == 103

                    or int(data['RF_Nationality']) == 109  or int(data['RF_Nationality']) == 112  or int(data['RF_Nationality']) == 115  or int(data['RF_Nationality']) == 116  or int(data['RF_Nationality']) == 117  or int(data['RF_Nationality']) == 121  or int(data['RF_Nationality']) == 123  or int(data['RF_Nationality']) == 124
                    or int(data['RF_Nationality']) == 126  or int(data['RF_Nationality']) == 127  or int(data['RF_Nationality']) == 128  or int(data['RF_Nationality']) == 129  or int(data['RF_Nationality']) == 134  or int(data['RF_Nationality']) == 135  or int(data['RF_Nationality']) == 136
                    or int(data['RF_Nationality']) == 139  or int(data['RF_Nationality']) == 143  or int(data['RF_Nationality']) == 145  or int(data['RF_Nationality']) == 146  or int(data['RF_Nationality']) == 148  or int(data['RF_Nationality']) == 150 or int(data['RF_Nationality']) == 151
                    or int(data['RF_Nationality']) == 152 or int(data['RF_Nationality']) == 153 or int(data['RF_Nationality']) == 154 or int(data['RF_Nationality']) == 155 or int(data['RF_Nationality']) == 158 or int(data['RF_Nationality']) == 160 or int(data['RF_Nationality']) == 162 
                    or int(data['RF_Nationality']) == 163 or int(data['RF_Nationality']) == 164 or int(data['RF_Nationality']) == 165 or int(data['RF_Nationality']) == 166 or int(data['RF_Nationality']) == 168 or int(data['RF_Nationality']) == 170 or int(data['RF_Nationality']) == 172 or int(data['RF_Nationality']) == 173 or int(data['RF_Nationality']) == 174 or int(data['RF_Nationality']) == 175 or int(data['RF_Nationality']) == 176 or int(data['RF_Nationality']) == 177
                    or int(data['RF_Nationality']) == 186 or int(data['RF_Nationality']) == 187 or int(data['RF_Nationality']) == 188 or int(data['RF_Nationality']) == 190 or int(data['RF_Nationality']) == 191 or int(data['RF_Nationality']) == 193 or int(data['RF_Nationality']) == 195
                    or int(data['RF_Nationality']) == 197 or int(data['RF_Nationality']) == 198 or int(data['RF_Nationality']) == 200 or int(data['RF_Nationality']) == 202 or int(data['RF_Nationality']) == 203 or int(data['RF_Nationality']) == 206 or int(data['RF_Nationality']) == 208 or int(data['RF_Nationality']) == 209
                    or int(data['RF_Nationality']) == 211 or int(data['RF_Nationality']) == 212 or int(data['RF_Nationality']) == 213 or int(data['RF_Nationality']) == 214 or int(data['RF_Nationality']) == 219 or int(data['RF_Nationality']) == 220 or int(data['RF_Nationality']) == 221 or int(data['RF_Nationality']) == 222 or int(data['RF_Nationality']) == 223 or int(data['RF_Nationality']) == 224
                    or int(data['RF_Nationality']) == 226 or int(data['RF_Nationality']) == 230 or int(data['RF_Nationality']) == 232 or int(data['RF_Nationality']) == 233 or int(data['RF_Nationality']) == 236 or int(data['RF_Nationality']) == 237 or int(data['RF_Nationality']) == 238 or int(data['RF_Nationality']) == 239
                ):
                    val4=9
                if(
                    int(data['RF_Nationality']) == 5 or int(data['RF_Nationality']) == 7 or int(data['RF_Nationality']) == 9 or int(data['RF_Nationality']) == 12 or int(data['RF_Nationality']) == 25 or int(data['RF_Nationality']) == 34 or int(data['RF_Nationality']) == 35 or int(data['RF_Nationality']) == 61 or int(data['RF_Nationality']) == 76 or int(data['RF_Nationality']) == 84or int(data['RF_Nationality']) == 88
                    or int(data['RF_Nationality']) == 114 or int(data['RF_Nationality']) == 130 or int(data['RF_Nationality']) == 132 or int(data['RF_Nationality']) == 142 or int(data['RF_Nationality']) == 149 or int(data['RF_Nationality']) == 159 or int(data['RF_Nationality']) == 161 
                    or int(data['RF_Nationality']) == 167 or int(data['RF_Nationality']) == 194 or int(data['RF_Nationality']) == 215 or int(data['RF_Nationality']) == 216
                ):
                    val4=3
                if(int(data['RF_Nationality']) == 11 or int(data['RF_Nationality']) == 14 or int(data['RF_Nationality']) == 15 or int(data['RF_Nationality']) == 18 or int(data['RF_Nationality']) == 22 or int(data['RF_Nationality']) == 23 or int(data['RF_Nationality']) == 26 or int(data['RF_Nationality']) == 30 or int(data['RF_Nationality']) == 38 or int(data['RF_Nationality']) == 40
                    or int(data['RF_Nationality']) == 44 or int(data['RF_Nationality']) == 45 or int(data['RF_Nationality']) == 54 or int(data['RF_Nationality']) == 56 or int(data['RF_Nationality']) == 59 or int(data['RF_Nationality']) == 60 or int(data['RF_Nationality']) == 63 or int(data['RF_Nationality']) == 70 or int(data['RF_Nationality']) == 75 or int(data['RF_Nationality']) == 77 
                    or int(data['RF_Nationality']) == 78 or int(data['RF_Nationality']) == 79 or int(data['RF_Nationality']) == 80 or int(data['RF_Nationality']) == 81 or int(data['RF_Nationality']) == 83 or int(data['RF_Nationality']) == 87 or int(data['RF_Nationality']) == 89 or int(data['RF_Nationality']) == 96 or int(data['RF_Nationality']) == 97 or int(data['RF_Nationality']) == 98 
                    or int(data['RF_Nationality']) == 99 or int(data['RF_Nationality']) == 100 or int(data['RF_Nationality']) == 101 or int(data['RF_Nationality']) == 102 or int(data['RF_Nationality']) == 104 or int(data['RF_Nationality']) == 105
                    
                    or int(data['RF_Nationality']) == 108 or int(data['RF_Nationality']) == 110 or int(data['RF_Nationality']) == 111 or int(data['RF_Nationality']) == 113 or int(data['RF_Nationality']) == 118 or int(data['RF_Nationality']) == 120 or int(data['RF_Nationality']) == 125
                    or int(data['RF_Nationality']) == 131 or int(data['RF_Nationality']) == 133 or  int(data['RF_Nationality']) == 137 or int(data['RF_Nationality']) == 138 or int(data['RF_Nationality']) == 140 or int(data['RF_Nationality']) == 141
                    or int(data['RF_Nationality']) == 144 or int(data['RF_Nationality']) == 147 or int(data['RF_Nationality']) == 156 or int(data['RF_Nationality']) == 157 or int(data['RF_Nationality']) == 169 or int(data['RF_Nationality']) == 171 or int(data['RF_Nationality']) == 178 or int(data['RF_Nationality']) == 179 or int(data['RF_Nationality']) == 180 or int(data['RF_Nationality']) == 181 or int(data['RF_Nationality']) == 182 or int(data['RF_Nationality']) == 183
                    or int(data['RF_Nationality']) == 185 or int(data['RF_Nationality']) == 189 or int(data['RF_Nationality']) == 192 or int(data['RF_Nationality']) == 196 or int(data['RF_Nationality']) == 199 or int(data['RF_Nationality']) == 201 or int(data['RF_Nationality']) == 204 or int(data['RF_Nationality']) == 205
                    or int(data['RF_Nationality']) == 207 or int(data['RF_Nationality']) == 210 or int(data['RF_Nationality']) == 218 or int(data['RF_Nationality']) == 225 or int(data['RF_Nationality']) == 231 or int(data['RF_Nationality']) == 234 or int(data['RF_Nationality']) == 235 or int(data['RF_Nationality']) == 237 or int(data['RF_Nationality']) == 238
                ):
                    val4=6
                if(
                    int(data['RF_CountryOfTax']) == 1 or int(data['RF_CountryOfTax']) == 2 or int(data['RF_CountryOfTax']) == 3 or int(data['RF_CountryOfTax']) == 4 or int(data['RF_CountryOfTax']) == 6 or int(data['RF_CountryOfTax']) == 8 or int(data['RF_CountryOfTax']) == 10 or int(data['RF_CountryOfTax']) == 13 or int(data['RF_CountryOfTax']) == 16 or int(data['RF_CountryOfTax']) == 17 or int(data['RF_CountryOfTax']) == 19 or int(data['RF_CountryOfTax']) == 20 or int(data['RF_CountryOfTax']) == 24
                    or int(data['RF_CountryOfTax']) == 27 or int(data['RF_CountryOfTax']) == 28 or int(data['RF_CountryOfTax']) == 29 or int(data['RF_CountryOfTax']) == 30 or int(data['RF_CountryOfTax']) == 31 or int(data['RF_CountryOfTax']) == 32 or int(data['RF_CountryOfTax']) == 33 or int(data['RF_CountryOfTax']) == 36 or int(data['RF_CountryOfTax']) == 37 or int(data['RF_CountryOfTax']) == 39 or int(data['RF_CountryOfTax']) == 41 or int(data['RF_CountryOfTax']) == 42 or int(data['RF_CountryOfTax']) == 43
                    or int(data['RF_CountryOfTax']) == 46 or int(data['RF_CountryOfTax']) == 47 or int(data['RF_CountryOfTax']) == 48 or int(data['RF_CountryOfTax']) == 49 or int(data['RF_CountryOfTax']) == 50 or int(data['RF_CountryOfTax']) == 51 or int(data['RF_CountryOfTax']) == 52 or int(data['RF_CountryOfTax']) == 53 or int(data['RF_CountryOfTax']) == 55 or int(data['RF_CountryOfTax']) == 58 or int(data['RF_CountryOfTax']) == 62 or int(data['RF_CountryOfTax']) == 64 or int(data['RF_CountryOfTax']) == 65 or int(data['RF_CountryOfTax']) == 66 
                    or int(data['RF_CountryOfTax']) == 67 or int(data['RF_CountryOfTax']) == 68 or int(data['RF_CountryOfTax']) == 69 or int(data['RF_CountryOfTax']) == 70 or int(data['RF_CountryOfTax']) == 71 or int(data['RF_CountryOfTax']) == 72 or int(data['RF_CountryOfTax']) == 73 or int(data['RF_CountryOfTax']) == 74 or int(data['RF_CountryOfTax']) == 82 or int(data['RF_CountryOfTax']) == 85 or int(data['RF_CountryOfTax']) == 86 or int(data['RF_CountryOfTax']) == 90 or int(data['RF_CountryOfTax']) == 91 or int(data['RF_CountryOfTax']) == 92 or int(data['RF_CountryOfTax']) == 93
                    or int(data['RF_CountryOfTax']) == 94 or int(data['RF_CountryOfTax']) == 95 or int(data['RF_CountryOfTax']) == 96 or int(data['RF_CountryOfTax']) == 97 or int(data['RF_CountryOfTax']) == 98 or int(data['RF_CountryOfTax']) == 99 or int(data['RF_CountryOfTax']) == 100 or int(data['RF_CountryOfTax']) == 102 or int(data['RF_CountryOfTax']) == 103

                    or int(data['RF_CountryOfTax']) == 109  or int(data['RF_CountryOfTax']) == 112  or int(data['RF_CountryOfTax']) == 115  or int(data['RF_CountryOfTax']) == 116  or int(data['RF_CountryOfTax']) == 117  or int(data['RF_CountryOfTax']) == 121  or int(data['RF_CountryOfTax']) == 123  or int(data['RF_CountryOfTax']) == 124
                    or int(data['RF_CountryOfTax']) == 126  or int(data['RF_CountryOfTax']) == 127  or int(data['RF_CountryOfTax']) == 128  or int(data['RF_CountryOfTax']) == 129  or int(data['RF_CountryOfTax']) == 134  or int(data['RF_CountryOfTax']) == 135  or int(data['RF_CountryOfTax']) == 136
                    or int(data['RF_CountryOfTax']) == 139  or int(data['RF_CountryOfTax']) == 143  or int(data['RF_CountryOfTax']) == 145  or int(data['RF_CountryOfTax']) == 146  or int(data['RF_CountryOfTax']) == 148  or int(data['RF_CountryOfTax']) == 150 or int(data['RF_CountryOfTax']) == 151
                    or int(data['RF_CountryOfTax']) == 152 or int(data['RF_CountryOfTax']) == 153 or int(data['RF_CountryOfTax']) == 154 or int(data['RF_CountryOfTax']) == 155 or int(data['RF_CountryOfTax']) == 158 or int(data['RF_CountryOfTax']) == 160 or int(data['RF_CountryOfTax']) == 162 
                    or int(data['RF_CountryOfTax']) == 163 or int(data['RF_CountryOfTax']) == 164 or int(data['RF_CountryOfTax']) == 165 or int(data['RF_CountryOfTax']) == 166 or int(data['RF_CountryOfTax']) == 168 or int(data['RF_CountryOfTax']) == 170 or int(data['RF_CountryOfTax']) == 172 or int(data['RF_CountryOfTax']) == 173 or int(data['RF_CountryOfTax']) == 174 or int(data['RF_CountryOfTax']) == 175 or int(data['RF_CountryOfTax']) == 176 or int(data['RF_CountryOfTax']) == 177
                    or int(data['RF_CountryOfTax']) == 186 or int(data['RF_CountryOfTax']) == 187 or int(data['RF_CountryOfTax']) == 188 or int(data['RF_CountryOfTax']) == 190 or int(data['RF_CountryOfTax']) == 191 or int(data['RF_CountryOfTax']) == 193 or int(data['RF_CountryOfTax']) == 195
                    or int(data['RF_CountryOfTax']) == 197 or int(data['RF_CountryOfTax']) == 198 or int(data['RF_CountryOfTax']) == 200 or int(data['RF_CountryOfTax']) == 202 or int(data['RF_CountryOfTax']) == 203 or int(data['RF_CountryOfTax']) == 206 or int(data['RF_CountryOfTax']) == 208 or int(data['RF_CountryOfTax']) == 209
                    or int(data['RF_CountryOfTax']) == 211 or int(data['RF_CountryOfTax']) == 212 or int(data['RF_CountryOfTax']) == 213 or int(data['RF_CountryOfTax']) == 214 or int(data['RF_CountryOfTax']) == 219 or int(data['RF_CountryOfTax']) == 220 or int(data['RF_CountryOfTax']) == 221 or int(data['RF_CountryOfTax']) == 222 or int(data['RF_CountryOfTax']) == 223 or int(data['RF_CountryOfTax']) == 224
                    or int(data['RF_CountryOfTax']) == 226 or int(data['RF_CountryOfTax']) == 230 or int(data['RF_CountryOfTax']) == 232 or int(data['RF_CountryOfTax']) == 233 or int(data['RF_CountryOfTax']) == 236 or int(data['RF_CountryOfTax']) == 237 or int(data['RF_CountryOfTax']) == 238 or int(data['RF_CountryOfTax']) == 239
                ):
                    val5=9
                                        

                if(int(data['RF_CountryOfTax']) == 5 or int(data['RF_CountryOfTax']) == 7 or int(data['RF_CountryOfTax']) == 9 or int(data['RF_CountryOfTax']) == 12 or int(data['RF_CountryOfTax']) == 25 or int(data['RF_CountryOfTax']) == 34 or int(data['RF_CountryOfTax']) == 35 or int(data['RF_CountryOfTax']) == 61 or int(data['RF_CountryOfTax']) == 76 or int(data['RF_CountryOfTax']) == 84or int(data['RF_CountryOfTax']) == 88
                    
                    or int(data['RF_CountryOfTax']) == 114 or int(data['RF_CountryOfTax']) == 130 or int(data['RF_CountryOfTax']) == 132 or int(data['RF_CountryOfTax']) == 142 or int(data['RF_CountryOfTax']) == 149 or int(data['RF_CountryOfTax']) == 159 or int(data['RF_CountryOfTax']) == 161 
                    or int(data['RF_CountryOfTax']) == 167 or int(data['RF_CountryOfTax']) == 194 or int(data['RF_CountryOfTax']) == 215 or int(data['RF_CountryOfTax']) == 216):
                    val5=3


                if(int(data['RF_CountryOfTax']) == 11 or int(data['RF_CountryOfTax']) == 14 or int(data['RF_CountryOfTax']) == 15 or int(data['RF_CountryOfTax']) == 18 or int(data['RF_CountryOfTax']) == 22 or int(data['RF_CountryOfTax']) == 23 or int(data['RF_CountryOfTax']) == 26 or int(data['RF_CountryOfTax']) == 30 or int(data['RF_CountryOfTax']) == 38 or int(data['RF_CountryOfTax']) == 40
                    or int(data['RF_CountryOfTax']) == 44 or int(data['RF_CountryOfTax']) == 45 or int(data['RF_CountryOfTax']) == 54 or int(data['RF_CountryOfTax']) == 56 or int(data['RF_CountryOfTax']) == 59 or int(data['RF_CountryOfTax']) == 60 or int(data['RF_CountryOfTax']) == 63 or int(data['RF_CountryOfTax']) == 70 or int(data['RF_CountryOfTax']) == 75 or int(data['RF_CountryOfTax']) == 77 
                    or int(data['RF_CountryOfTax']) == 78 or int(data['RF_CountryOfTax']) == 79 or int(data['RF_CountryOfTax']) == 80 or int(data['RF_CountryOfTax']) == 81 or int(data['RF_CountryOfTax']) == 83 or int(data['RF_CountryOfTax']) == 87 or int(data['RF_CountryOfTax']) == 89 or int(data['RF_CountryOfTax']) == 96 or int(data['RF_CountryOfTax']) == 97 or int(data['RF_CountryOfTax']) == 98 
                    or int(data['RF_CountryOfTax']) == 99 or int(data['RF_CountryOfTax']) == 100 or int(data['RF_CountryOfTax']) == 101 or int(data['RF_CountryOfTax']) == 102 or int(data['RF_CountryOfTax']) == 104 or int(data['RF_CountryOfTax']) == 105
                    
                    or int(data['RF_CountryOfTax']) == 108 or int(data['RF_CountryOfTax']) == 110 or int(data['RF_CountryOfTax']) == 111 or int(data['RF_CountryOfTax']) == 113 or int(data['RF_CountryOfTax']) == 118 or int(data['RF_CountryOfTax']) == 120 or int(data['RF_CountryOfTax']) == 125
                    or int(data['RF_CountryOfTax']) == 131 or int(data['RF_CountryOfTax']) == 133 or  int(data['RF_CountryOfTax']) == 137 or int(data['RF_CountryOfTax']) == 138 or int(data['RF_CountryOfTax']) == 140 or int(data['RF_CountryOfTax']) == 141
                    or int(data['RF_CountryOfTax']) == 144 or int(data['RF_CountryOfTax']) == 147 or int(data['RF_CountryOfTax']) == 156 or int(data['RF_CountryOfTax']) == 157 or int(data['RF_CountryOfTax']) == 169 or int(data['RF_CountryOfTax']) == 171 or int(data['RF_CountryOfTax']) == 178 or int(data['RF_CountryOfTax']) == 179 or int(data['RF_CountryOfTax']) == 180 or int(data['RF_CountryOfTax']) == 181 or int(data['RF_CountryOfTax']) == 182 or int(data['RF_CountryOfTax']) == 183
                    or int(data['RF_CountryOfTax']) == 185 or int(data['RF_CountryOfTax']) == 189 or int(data['RF_CountryOfTax']) == 192 or int(data['RF_CountryOfTax']) == 196 or int(data['RF_CountryOfTax']) == 199 or int(data['RF_CountryOfTax']) == 201 or int(data['RF_CountryOfTax']) == 204 or int(data['RF_CountryOfTax']) == 205
                    or int(data['RF_CountryOfTax']) == 207 or int(data['RF_CountryOfTax']) == 210 or int(data['RF_CountryOfTax']) == 218 or int(data['RF_CountryOfTax']) == 225 or int(data['RF_CountryOfTax']) == 231 or int(data['RF_CountryOfTax']) == 234 or int(data['RF_CountryOfTax']) == 235 or int(data['RF_CountryOfTax']) == 237 or int(data['RF_CountryOfTax']) == 238):
                    val5=6


                if(int(data['RF_CountryOfTax']) == 21 or int(data['RF_CountryOfTax']) == 57 or int(data['RF_CountryOfTax']) == 106 or int(data['RF_CountryOfTax']) == 107 or int(data['RF_CountryOfTax']) == 119 or int(data['RF_CountryOfTax']) == 187 or int(data['RF_CountryOfTax']) == 217):
                    val5=12


                    
                if(int(data['RF_Industry']) == 1 or int(data['RF_Industry']) == 3 or int(data['RF_Industry']) == 15 or int(data['RF_Industry']) == 19):
                    val6=1


                if(int(data['RF_Industry']) == 25):
                    val6=0



                if(int(data['RF_Industry']) == 2 or int(data['RF_Industry']) == 12 or int(data['RF_Industry']) == 14 or int(data['RF_Industry']) == 16 or int(data['RF_Industry']) == 17 or int(data['RF_Industry']) == 20 or int(data['RF_Industry']) == 23 or int(data['RF_Industry']) == 24
                    or int(data['RF_Industry']) == 26 or int(data['RF_Industry']) == 27 or int(data['RF_Industry']) == 28 or int(data['RF_Industry']) == 30 or int(data['RF_Industry']) == 34):
                    val6=3


                if(int(data['RF_Industry']) == 4 or int(data['RF_Industry']) == 5 or int(data['RF_Industry']) == 6 or int(data['RF_Industry']) == 7 or int(data['RF_Industry']) == 8 or int(data['RF_Industry']) == 9 or int(data['RF_Industry']) == 10 or int(data['RF_Industry']) == 11 or int(data['RF_Industry']) == 13
                    or int(data['RF_Industry']) == 18 or int(data['RF_Industry']) == 21 or int(data['RF_Industry']) == 22 or int(data['RF_Industry']) == 29 or int(data['RF_Industry']) == 32 or int(data['RF_Industry']) == 33):
                    val6=2


                if(int(data['RF_Industry']) == 31):
                    val6=4


                if(int(data['RF_SourceOfFunds']) == 1 or int(data['RF_SourceOfFunds']) == 6 or int(data['RF_SourceOfFunds']) == 12 or int(data['RF_SourceOfFunds']) == 13 or int(data['RF_SourceOfFunds']) == 16):
                    val7=3


                if(int(data['RF_SourceOfFunds']) == 2 or int(data['RF_SourceOfFunds']) == 3 or int(data['RF_SourceOfFunds']) == 8 or int(data['RF_SourceOfFunds']) == 9 or int(data['RF_SourceOfFunds']) == 14 or int(data['RF_SourceOfFunds']) == 17 or int(data['RF_SourceOfFunds']) == 18 or int(data['RF_SourceOfFunds']) == 20
                    or int(data['RF_SourceOfFunds']) == 22 or int(data['RF_SourceOfFunds']) == 23 or int(data['RF_SourceOfFunds']) == 25 or int(data['RF_SourceOfFunds']) == 26 or int(data['RF_SourceOfFunds']) == 29 or int(data['RF_SourceOfFunds']) == 31 or int(data['RF_SourceOfFunds']) == 32 or int(data['RF_SourceOfFunds']) == 33):
                    val7=1


                if(int(data['RF_SourceOfFunds']) == 4 or int(data['RF_SourceOfFunds']) == 5 or int(data['RF_SourceOfFunds']) == 7 or int(data['RF_SourceOfFunds']) == 10 or int(data['RF_SourceOfFunds']) == 11 or int(data['RF_SourceOfFunds']) == 15 or int(data['RF_SourceOfFunds']) == 19 or int(data['RF_SourceOfFunds']) == 24
                    or int(data['RF_SourceOfFunds']) == 27 or int(data['RF_SourceOfFunds']) == 28 or int(data['RF_SourceOfFunds']) == 30):
                    val7=2


                if(int(data['RF_SourceOfFunds']) == 21):
                    val7=0


                if(int(data['RF_RelationshipToClient']) == 1 or int(data['RF_RelationshipToClient']) == 2 or int(data['RF_RelationshipToClient']) == 4 or int(data['RF_RelationshipToClient']) == 6 or int(data['RF_RelationshipToClient']) == 7 or int(data['RF_RelationshipToClient']) == 9 or int(data['RF_RelationshipToClient']) == 11 or int(data['RF_RelationshipToClient']) == 13 or int(data['RF_RelationshipToClient']) == 15):
                    val8=1


                if(int(data['RF_RelationshipToClient']) == 3 or int(data['RF_RelationshipToClient']) == 5 or int(data['RF_RelationshipToClient']) == 8 or int(data['RF_RelationshipToClient']) == 10 or int(data['RF_RelationshipToClient']) == 12 or int(data['RF_RelationshipToClient']) == 14 or int(data['RF_RelationshipToClient']) == 16):
                    val8=2



                if(int(data['RF_CountryOfRegistration']) == "1" or int(data['RF_CountryOfRegistration']) == "2" or int(data['RF_CountryOfRegistration']) == "3" or int(data['RF_CountryOfRegistration']) == "4" or int(data['RF_CountryOfRegistration']) == "6" or int(data['RF_CountryOfRegistration']) == "8" or int(data['RF_CountryOfRegistration']) == "10" or int(data['RF_CountryOfRegistration']) == "13" or int(data['RF_CountryOfRegistration']) == "16" or int(data['RF_CountryOfRegistration']) == "17" or int(data['RF_CountryOfRegistration']) == "19" or int(data['RF_CountryOfRegistration']) == "20" or int(data['RF_CountryOfRegistration']) == "24"
                    or int(data['RF_CountryOfRegistration']) == "27" or int(data['RF_CountryOfRegistration']) == "28" or int(data['RF_CountryOfRegistration']) == "29" or int(data['RF_CountryOfRegistration']) == "30" or int(data['RF_CountryOfRegistration']) == "31" or int(data['RF_CountryOfRegistration']) == "32" or int(data['RF_CountryOfRegistration']) == "33" or int(data['RF_CountryOfRegistration']) == "36" or int(data['RF_CountryOfRegistration']) == "37" or int(data['RF_CountryOfRegistration']) == "39" or int(data['RF_CountryOfRegistration']) == "41" or int(data['RF_CountryOfRegistration']) == "42" or int(data['RF_CountryOfRegistration']) == "43"
                    or int(data['RF_CountryOfRegistration']) == "46" or int(data['RF_CountryOfRegistration']) == "47" or int(data['RF_CountryOfRegistration']) == "48" or int(data['RF_CountryOfRegistration']) == "49" or int(data['RF_CountryOfRegistration']) == "50" or int(data['RF_CountryOfRegistration']) == "51" or int(data['RF_CountryOfRegistration']) == "52" or int(data['RF_CountryOfRegistration']) == "53" or int(data['RF_CountryOfRegistration']) == "55" or int(data['RF_CountryOfRegistration']) == "58" or int(data['RF_CountryOfRegistration']) == "62" or int(data['RF_CountryOfRegistration']) == "64" or int(data['RF_CountryOfRegistration']) == "65" or int(data['RF_CountryOfRegistration']) == "66" 
                    or int(data['RF_CountryOfRegistration']) == "67" or int(data['RF_CountryOfRegistration']) == "68" or int(data['RF_CountryOfRegistration']) == "69" or int(data['RF_CountryOfRegistration']) == "70" or int(data['RF_CountryOfRegistration']) == "71" or int(data['RF_CountryOfRegistration']) == "72" or int(data['RF_CountryOfRegistration']) == "73" or int(data['RF_CountryOfRegistration']) == "74" or int(data['RF_CountryOfRegistration']) == "82" or int(data['RF_CountryOfRegistration']) == "85" or int(data['RF_CountryOfRegistration']) == "86" or int(data['RF_CountryOfRegistration']) == "90" or int(data['RF_CountryOfRegistration']) == "91" or int(data['RF_CountryOfRegistration']) == "92" or int(data['RF_CountryOfRegistration']) == "93"
                    or int(data['RF_CountryOfRegistration']) == "94" or int(data['RF_CountryOfRegistration']) == "95" or int(data['RF_CountryOfRegistration']) == "96" or int(data['RF_CountryOfRegistration']) == "97" or int(data['RF_CountryOfRegistration']) == "98" or int(data['RF_CountryOfRegistration']) == "99" or int(data['RF_CountryOfRegistration']) == "100" or int(data['RF_CountryOfRegistration']) == "102" or int(data['RF_CountryOfRegistration']) == "103"

                    or int(data['RF_CountryOfRegistration']) == "109" or int(data['RF_CountryOfRegistration']) == "112" or int(data['RF_CountryOfRegistration']) == "115" or  int(data['RF_CountryOfRegistration']) == "116" or  int(data['RF_CountryOfRegistration']) == "117" or  int(data['RF_CountryOfRegistration']) == "121" or  int(data['RF_CountryOfRegistration']) == "123" or  int(data['RF_CountryOfRegistration']) == "124"
                    or int(data['RF_CountryOfRegistration']) == "126" or int(data['RF_CountryOfRegistration']) == "127" or int(data['RF_CountryOfRegistration']) == "128" or  int(data['RF_CountryOfRegistration']) == "129" or  int(data['RF_CountryOfRegistration']) == "134" or  int(data['RF_CountryOfRegistration']) == "135" or  int(data['RF_CountryOfRegistration']) == "136"
                    or int(data['RF_CountryOfRegistration']) == "139" or int(data['RF_CountryOfRegistration']) == "143" or int(data['RF_CountryOfRegistration']) == "145" or  int(data['RF_CountryOfRegistration']) == "146" or  int(data['RF_CountryOfRegistration']) == "148" or  int(data['RF_CountryOfRegistration']) == "150" or int(data['RF_CountryOfRegistration']) == "151"
                    or int(data['RF_CountryOfRegistration']) == "152" or int(data['RF_CountryOfRegistration']) == "153" or int(data['RF_CountryOfRegistration']) == "154" or int(data['RF_CountryOfRegistration']) == "155" or int(data['RF_CountryOfRegistration']) == "158" or int(data['RF_CountryOfRegistration']) == "160" or int(data['RF_CountryOfRegistration']) == "162" 
                    or int(data['RF_CountryOfRegistration']) == "163" or int(data['RF_CountryOfRegistration']) == "164" or int(data['RF_CountryOfRegistration']) == "165" or int(data['RF_CountryOfRegistration']) == "166" or int(data['RF_CountryOfRegistration']) == "168" or int(data['RF_CountryOfRegistration']) == "170" or int(data['RF_CountryOfRegistration']) == "172" or int(data['RF_CountryOfRegistration']) == "173" or int(data['RF_CountryOfRegistration']) == "174" or int(data['RF_CountryOfRegistration']) == "175" or int(data['RF_CountryOfRegistration']) == "176" or int(data['RF_CountryOfRegistration']) == "177"
                    or int(data['RF_CountryOfRegistration']) == "186" or int(data['RF_CountryOfRegistration']) == "187" or int(data['RF_CountryOfRegistration']) == "188" or int(data['RF_CountryOfRegistration']) == "190" or int(data['RF_CountryOfRegistration']) == "191" or int(data['RF_CountryOfRegistration']) == "193" or int(data['RF_CountryOfRegistration']) == "195"
                    or int(data['RF_CountryOfRegistration']) == "197" or int(data['RF_CountryOfRegistration']) == "198" or int(data['RF_CountryOfRegistration']) == "200" or int(data['RF_CountryOfRegistration']) == "202" or int(data['RF_CountryOfRegistration']) == "203" or int(data['RF_CountryOfRegistration']) == "206" or int(data['RF_CountryOfRegistration']) == "208" or int(data['RF_CountryOfRegistration']) == "209"
                    or int(data['RF_CountryOfRegistration']) == "211" or int(data['RF_CountryOfRegistration']) == "212" or int(data['RF_CountryOfRegistration']) == "213" or int(data['RF_CountryOfRegistration']) == "214" or int(data['RF_CountryOfRegistration']) == "219" or int(data['RF_CountryOfRegistration']) == "220" or int(data['RF_CountryOfRegistration']) == "221" or int(data['RF_CountryOfRegistration']) == "222" or int(data['RF_CountryOfRegistration']) == "223" or int(data['RF_CountryOfRegistration']) == "224"
                    or int(data['RF_CountryOfRegistration']) == "226" or int(data['RF_CountryOfRegistration']) == "230" or int(data['RF_CountryOfRegistration']) == "232" or int(data['RF_CountryOfRegistration']) == "233" or int(data['RF_CountryOfRegistration']) == "236" or int(data['RF_CountryOfRegistration']) == "237" or int(data['RF_CountryOfRegistration']) == "238" or int(data['RF_CountryOfRegistration']) == "239"
                ):
                    val9=9


                if(int(data['RF_CountryOfRegistration']) == "5" or int(data['RF_CountryOfRegistration']) == "7" or int(data['RF_CountryOfRegistration']) == "9" or int(data['RF_CountryOfRegistration']) == "12" or int(data['RF_CountryOfRegistration']) == "25" or int(data['RF_CountryOfRegistration']) == "34" or int(data['RF_CountryOfRegistration']) == "35" or int(data['RF_CountryOfRegistration']) == "61" or int(data['RF_CountryOfRegistration']) == "76" or int(data['RF_CountryOfRegistration']) == "84" or int(data['RF_CountryOfRegistration']) == "88" 
                    or int(data['RF_CountryOfRegistration']) == "114" or int(data['RF_CountryOfRegistration']) == "130" or int(data['RF_CountryOfRegistration']) == "132" or int(data['RF_CountryOfRegistration']) == "142" or int(data['RF_CountryOfRegistration']) == "149" or int(data['RF_CountryOfRegistration']) == "159" or int(data['RF_CountryOfRegistration']) == "161"
                    or int(data['RF_CountryOfRegistration']) == "167" or int(data['RF_CountryOfRegistration']) == "194" or int(data['RF_CountryOfRegistration']) == "215" or int(data['RF_CountryOfRegistration']) == "216"
                ):
                    val9=3


                if(
                    int(data['RF_CountryOfRegistration']) == "11" or int(data['RF_CountryOfRegistration']) == "14" or int(data['RF_CountryOfRegistration']) == "15" or int(data['RF_CountryOfRegistration']) == "18" or int(data['RF_CountryOfRegistration']) == "22" or int(data['RF_CountryOfRegistration']) == "23" or int(data['RF_CountryOfRegistration']) == "26" or int(data['RF_CountryOfRegistration']) == "30" or int(data['RF_CountryOfRegistration']) == "38" or int(data['RF_CountryOfRegistration']) == "40"
                    or int(data['RF_CountryOfRegistration']) == "44" or int(data['RF_CountryOfRegistration']) == "45" or int(data['RF_CountryOfRegistration']) == "54" or int(data['RF_CountryOfRegistration']) == "56" or int(data['RF_CountryOfRegistration']) == "59" or int(data['RF_CountryOfRegistration']) == "60" or int(data['RF_CountryOfRegistration']) == "63" or int(data['RF_CountryOfRegistration']) == "70" or int(data['RF_CountryOfRegistration']) == "75" or int(data['RF_CountryOfRegistration']) == "77" 
                    or int(data['RF_CountryOfRegistration']) == "78" or int(data['RF_CountryOfRegistration']) == "79" or int(data['RF_CountryOfRegistration']) == "80" or int(data['RF_CountryOfRegistration']) == "81" or int(data['RF_CountryOfRegistration']) == "83" or int(data['RF_CountryOfRegistration']) == "87" or int(data['RF_CountryOfRegistration']) == "89" or int(data['RF_CountryOfRegistration']) == "96" or int(data['RF_CountryOfRegistration']) == "97" or int(data['RF_CountryOfRegistration']) == "98" 
                    or int(data['RF_CountryOfRegistration']) == "99" or int(data['RF_CountryOfRegistration']) == "100" or int(data['RF_CountryOfRegistration']) == "101" or int(data['RF_CountryOfRegistration']) == "102" or int(data['RF_CountryOfRegistration']) == "104" or int(data['RF_CountryOfRegistration']) == "105"
                    or int(data['RF_CountryOfRegistration']) == "108" or int(data['RF_CountryOfRegistration']) == "110" or int(data['RF_CountryOfRegistration']) == "111" or int(data['RF_CountryOfRegistration']) == "113" or int(data['RF_CountryOfRegistration']) == "118" or int(data['RF_CountryOfRegistration']) == "120" or int(data['RF_CountryOfRegistration']) == "125"
                    or int(data['RF_CountryOfRegistration']) == "131" or int(data['RF_CountryOfRegistration']) == "133" or  int(data['RF_CountryOfRegistration']) == "137" or int(data['RF_CountryOfRegistration']) == "138" or int(data['RF_CountryOfRegistration']) == "140" or int(data['RF_CountryOfRegistration']) == "141"
                    or int(data['RF_CountryOfRegistration']) == "144" or int(data['RF_CountryOfRegistration']) == "147" or int(data['RF_CountryOfRegistration']) == "156" or int(data['RF_CountryOfRegistration']) == "157" or int(data['RF_CountryOfRegistration']) == "169" or int(data['RF_CountryOfRegistration']) == "171" or int(data['RF_CountryOfRegistration']) == "178" or int(data['RF_CountryOfRegistration']) == "179" or int(data['RF_CountryOfRegistration']) == "180" or int(data['RF_CountryOfRegistration']) == "181" or int(data['RF_CountryOfRegistration']) == "182" or int(data['RF_CountryOfRegistration']) == "183"
                    or int(data['RF_CountryOfRegistration']) == "185" or int(data['RF_CountryOfRegistration']) == "189" or int(data['RF_CountryOfRegistration']) == "192" or int(data['RF_CountryOfRegistration']) == "196" or int(data['RF_CountryOfRegistration']) == "199" or int(data['RF_CountryOfRegistration']) == "201" or int(data['RF_CountryOfRegistration']) == "204" or int(data['RF_CountryOfRegistration']) == "205"
                    or int(data['RF_CountryOfRegistration']) == "207" or int(data['RF_CountryOfRegistration']) == "210" or int(data['RF_CountryOfRegistration']) == "218" or int(data['RF_CountryOfRegistration']) == "225" or int(data['RF_CountryOfRegistration']) == "231" or int(data['RF_CountryOfRegistration']) == "234" or int(data['RF_CountryOfRegistration']) == "235" or int(data['RF_CountryOfRegistration']) == "237" or int(data['RF_CountryOfRegistration']) == "238"
                ):
                    val9=6


                if(int(data['RF_CountryOfRegistration']) == "21" or int(data['RF_CountryOfRegistration']) == "57" or int(data['RF_CountryOfRegistration']) == "106" or int(data['RF_CountryOfRegistration']) == "107" or int(data['RF_CountryOfRegistration']) == "119" or int(data['RF_CountryOfRegistration']) == "187" or int(data['RF_CountryOfRegistration']) == "217"):
                    val9=12


                if(int(data['RF_CountryOfResidence']) == 1 or int(data['RF_CountryOfResidence']) == 2 or int(data['RF_CountryOfResidence']) == 3 or int(data['RF_CountryOfResidence']) == 4 or int(data['RF_CountryOfResidence']) == 6 or int(data['RF_CountryOfResidence']) == 8 or int(data['RF_CountryOfResidence']) == 10 or int(data['RF_CountryOfResidence']) == 13 or int(data['RF_CountryOfResidence']) == 16 or int(data['RF_CountryOfResidence']) == 17 or int(data['RF_CountryOfResidence']) == 19 or int(data['RF_CountryOfResidence']) == 20 or int(data['RF_CountryOfResidence']) == 24
                    or int(data['RF_CountryOfResidence']) == 27 or int(data['RF_CountryOfResidence']) == 28 or int(data['RF_CountryOfResidence']) == 29 or int(data['RF_CountryOfResidence']) == 30 or int(data['RF_CountryOfResidence']) == 31 or int(data['RF_CountryOfResidence']) == 32 or int(data['RF_CountryOfResidence']) == 33 or int(data['RF_CountryOfResidence']) == 36 or int(data['RF_CountryOfResidence']) == 37 or int(data['RF_CountryOfResidence']) == 39 or int(data['RF_CountryOfResidence']) == 41 or int(data['RF_CountryOfResidence']) == 42 or int(data['RF_CountryOfResidence']) == 43
                    or int(data['RF_CountryOfResidence']) == 46 or int(data['RF_CountryOfResidence']) == 47 or int(data['RF_CountryOfResidence']) == 48 or int(data['RF_CountryOfResidence']) == 49 or int(data['RF_CountryOfResidence']) == 50 or int(data['RF_CountryOfResidence']) == 51 or int(data['RF_CountryOfResidence']) == 52 or int(data['RF_CountryOfResidence']) == 53 or int(data['RF_CountryOfResidence']) == 55 or int(data['RF_CountryOfResidence']) == 58 or int(data['RF_CountryOfResidence']) == 62 or int(data['RF_CountryOfResidence']) == 64 or int(data['RF_CountryOfResidence']) == 65 or int(data['RF_CountryOfResidence']) == 66 
                    or int(data['RF_CountryOfResidence']) == 67 or int(data['RF_CountryOfResidence']) == 68 or int(data['RF_CountryOfResidence']) == 69 or int(data['RF_CountryOfResidence']) == 70 or int(data['RF_CountryOfResidence']) == 71 or int(data['RF_CountryOfResidence']) == 72 or int(data['RF_CountryOfResidence']) == 73 or int(data['RF_CountryOfResidence']) == 74 or int(data['RF_CountryOfResidence']) == 82 or int(data['RF_CountryOfResidence']) == 85 or int(data['RF_CountryOfResidence']) == 86 or int(data['RF_CountryOfResidence']) == 90 or int(data['RF_CountryOfResidence']) == 91 or int(data['RF_CountryOfResidence']) == 92 or int(data['RF_CountryOfResidence']) == 93
                    or int(data['RF_CountryOfResidence']) == 94 or int(data['RF_CountryOfResidence']) == 95 or int(data['RF_CountryOfResidence']) == 96 or int(data['RF_CountryOfResidence']) == 97 or int(data['RF_CountryOfResidence']) == 98 or int(data['RF_CountryOfResidence']) == 99 or int(data['RF_CountryOfResidence']) == 100 or int(data['RF_CountryOfResidence']) == 102 or int(data['RF_CountryOfResidence']) == 103
                    
                    or int(data['RF_CountryOfResidence']) == 109  or int(data['RF_CountryOfResidence']) == 112  or int(data['RF_CountryOfResidence']) == 115  or int(data['RF_CountryOfResidence']) == 116  or int(data['RF_CountryOfResidence']) == 117  or int(data['RF_CountryOfResidence']) == 121  or int(data['RF_CountryOfResidence']) == 123  or int(data['RF_CountryOfResidence']) == 124
                    or int(data['RF_CountryOfResidence']) == 126  or int(data['RF_CountryOfResidence']) == 127  or int(data['RF_CountryOfResidence']) == 128  or int(data['RF_CountryOfResidence']) == 129  or int(data['RF_CountryOfResidence']) == 134  or int(data['RF_CountryOfResidence']) == 135  or int(data['RF_CountryOfResidence']) == 136
                    or int(data['RF_CountryOfResidence']) == 139  or int(data['RF_CountryOfResidence']) == 143  or int(data['RF_CountryOfResidence']) == 145  or int(data['RF_CountryOfResidence']) == 146  or int(data['RF_CountryOfResidence']) == 148  or int(data['RF_CountryOfResidence']) == 150 or int(data['RF_CountryOfResidence']) == 151
                    or int(data['RF_CountryOfResidence']) == 152 or int(data['RF_CountryOfResidence']) == 153 or int(data['RF_CountryOfResidence']) == 154 or int(data['RF_CountryOfResidence']) == 155 or int(data['RF_CountryOfResidence']) == 158 or int(data['RF_CountryOfResidence']) == 160 or int(data['RF_CountryOfResidence']) == 162 
                    or int(data['RF_CountryOfResidence']) == 163 or int(data['RF_CountryOfResidence']) == 164 or int(data['RF_CountryOfResidence']) == 165 or int(data['RF_CountryOfResidence']) == 166 or int(data['RF_CountryOfResidence']) == 168 or int(data['RF_CountryOfResidence']) == 170 or int(data['RF_CountryOfResidence']) == 172 or int(data['RF_CountryOfResidence']) == 173 or int(data['RF_CountryOfResidence']) == 174 or int(data['RF_CountryOfResidence']) == 175 or int(data['RF_CountryOfResidence']) == 176 or int(data['RF_CountryOfResidence']) == 177
                    or int(data['RF_CountryOfResidence']) == 186 or int(data['RF_CountryOfResidence']) == 187 or int(data['RF_CountryOfResidence']) == 188 or int(data['RF_CountryOfResidence']) == 190 or int(data['RF_CountryOfResidence']) == 191 or int(data['RF_CountryOfResidence']) == 193 or int(data['RF_CountryOfResidence']) == 195
                    or int(data['RF_CountryOfResidence']) == 197 or int(data['RF_CountryOfResidence']) == 198 or int(data['RF_CountryOfResidence']) == 200 or int(data['RF_CountryOfResidence']) == 202 or int(data['RF_CountryOfResidence']) == 203 or int(data['RF_CountryOfResidence']) == 206 or int(data['RF_CountryOfResidence']) == 208 or int(data['RF_CountryOfResidence']) == 209
                    or int(data['RF_CountryOfResidence']) == 211 or int(data['RF_CountryOfResidence']) == 212 or int(data['RF_CountryOfResidence']) == 213 or int(data['RF_CountryOfResidence']) == 214 or int(data['RF_CountryOfResidence']) == 219 or int(data['RF_CountryOfResidence']) == 220 or int(data['RF_CountryOfResidence']) == 221 or int(data['RF_CountryOfResidence']) == 222 or int(data['RF_CountryOfResidence']) == 223 or int(data['RF_CountryOfResidence']) == 224
                    or int(data['RF_CountryOfResidence']) == 226 or int(data['RF_CountryOfResidence']) == 230 or int(data['RF_CountryOfResidence']) == 232 or int(data['RF_CountryOfResidence']) == 233 or int(data['RF_CountryOfResidence']) == 236 or int(data['RF_CountryOfResidence']) == 237 or int(data['RF_CountryOfResidence']) == 238 or int(data['RF_CountryOfResidence']) == 239):
                    val10=9


                if(int(data['RF_CountryOfResidence']) == 5 or int(data['RF_CountryOfResidence']) == 7 or int(data['RF_CountryOfResidence']) == 9 or int(data['RF_CountryOfResidence']) == 12 or int(data['RF_CountryOfResidence']) == 25 or int(data['RF_CountryOfResidence']) == 34 or int(data['RF_CountryOfResidence']) == 35 or int(data['RF_CountryOfResidence']) == 61 or int(data['RF_CountryOfResidence']) == 76 or int(data['RF_CountryOfResidence']) == 84or int(data['RF_CountryOfResidence']) == 88
                    
                    or int(data['RF_CountryOfResidence']) == 114 or int(data['RF_CountryOfResidence']) == 130 or int(data['RF_CountryOfResidence']) == 132 or int(data['RF_CountryOfResidence']) == 142 or int(data['RF_CountryOfResidence']) == 149 or int(data['RF_CountryOfResidence']) == 159 or int(data['RF_CountryOfResidence']) == 161 
                    or int(data['RF_CountryOfResidence']) == 167 or int(data['RF_CountryOfResidence']) == 194 or int(data['RF_CountryOfResidence']) == 215 or int(data['RF_CountryOfResidence']) == 216):
                    val10=3


                if(int(data['RF_CountryOfResidence']) == 11 or int(data['RF_CountryOfResidence']) == 14 or int(data['RF_CountryOfResidence']) == 15 or int(data['RF_CountryOfResidence']) == 18 or int(data['RF_CountryOfResidence']) == 22 or int(data['RF_CountryOfResidence']) == 23 or int(data['RF_CountryOfResidence']) == 26 or int(data['RF_CountryOfResidence']) == 30 or int(data['RF_CountryOfResidence']) == 38 or int(data['RF_CountryOfResidence']) == 40
                    or int(data['RF_CountryOfResidence']) == 44 or int(data['RF_CountryOfResidence']) == 45 or int(data['RF_CountryOfResidence']) == 54 or int(data['RF_CountryOfResidence']) == 56 or int(data['RF_CountryOfResidence']) == 59 or int(data['RF_CountryOfResidence']) == 60 or int(data['RF_CountryOfResidence']) == 63 or int(data['RF_CountryOfResidence']) == 70 or int(data['RF_CountryOfResidence']) == 75 or int(data['RF_CountryOfResidence']) == 77 
                    or int(data['RF_CountryOfResidence']) == 78 or int(data['RF_CountryOfResidence']) == 79 or int(data['RF_CountryOfResidence']) == 80 or int(data['RF_CountryOfResidence']) == 81 or int(data['RF_CountryOfResidence']) == 83 or int(data['RF_CountryOfResidence']) == 87 or int(data['RF_CountryOfResidence']) == 89 or int(data['RF_CountryOfResidence']) == 96 or int(data['RF_CountryOfResidence']) == 97 or int(data['RF_CountryOfResidence']) == 98 
                    or int(data['RF_CountryOfResidence']) == 99 or int(data['RF_CountryOfResidence']) == 100 or int(data['RF_CountryOfResidence']) == 101 or int(data['RF_CountryOfResidence']) == 102 or int(data['RF_CountryOfResidence']) == 104 or int(data['RF_CountryOfResidence']) == 105
                    
                    or int(data['RF_CountryOfResidence']) == 108 or int(data['RF_CountryOfResidence']) == 110 or int(data['RF_CountryOfResidence']) == 111 or int(data['RF_CountryOfResidence']) == 113 or int(data['RF_CountryOfResidence']) == 118 or int(data['RF_CountryOfResidence']) == 120 or int(data['RF_CountryOfResidence']) == 125
                    or int(data['RF_CountryOfResidence']) == 131 or int(data['RF_CountryOfResidence']) == 133 or  int(data['RF_CountryOfResidence']) == 137 or int(data['RF_CountryOfResidence']) == 138 or int(data['RF_CountryOfResidence']) == 140 or int(data['RF_CountryOfResidence']) == 141
                    or int(data['RF_CountryOfResidence']) == 144 or int(data['RF_CountryOfResidence']) == 147 or int(data['RF_CountryOfResidence']) == 156 or int(data['RF_CountryOfResidence']) == 157 or int(data['RF_CountryOfResidence']) == 169 or int(data['RF_CountryOfResidence']) == 171 or int(data['RF_CountryOfResidence']) == 178 or int(data['RF_CountryOfResidence']) == 179 or int(data['RF_CountryOfResidence']) == 180 or int(data['RF_CountryOfResidence']) == 181 or int(data['RF_CountryOfResidence']) == 182 or int(data['RF_CountryOfResidence']) == 183
                    or int(data['RF_CountryOfResidence']) == 185 or int(data['RF_CountryOfResidence']) == 189 or int(data['RF_CountryOfResidence']) == 192 or int(data['RF_CountryOfResidence']) == 196 or int(data['RF_CountryOfResidence']) == 199 or int(data['RF_CountryOfResidence']) == 201 or int(data['RF_CountryOfResidence']) == 204 or int(data['RF_CountryOfResidence']) == 205
                    or int(data['RF_CountryOfResidence']) == 207 or int(data['RF_CountryOfResidence']) == 210 or int(data['RF_CountryOfResidence']) == 218 or int(data['RF_CountryOfResidence']) == 225 or int(data['RF_CountryOfResidence']) == 231 or int(data['RF_CountryOfResidence']) == 234 or int(data['RF_CountryOfResidence']) == 235 or int(data['RF_CountryOfResidence']) == 237 or int(data['RF_CountryOfResidence']) == 238):
                    val10=6


                if(int(data['RF_CountryOfResidence']) == 21 or int(data['RF_CountryOfResidence']) == 57 or int(data['RF_CountryOfResidence']) == 106 or int(data['RF_CountryOfResidence']) == 107 or int(data['RF_CountryOfResidence']) == 119 or int(data['RF_CountryOfResidence']) == 187 or int(data['RF_CountryOfResidence']) == 217):
                    val10=12


                if(int(data['RF_RelationshipToClient']) == 1 or int(data['RF_RelationshipToClient']) == 4 or int(data['RF_RelationshipToClient']) == 6 or int(data['RF_RelationshipToClient']) == 8 or int(data['RF_RelationshipToClient']) == 13 or int(data['RF_RelationshipToClient']) == 15 or int(data['RF_RelationshipToClient']) == 16
                    or int(data['RF_RelationshipToClient']) == 20 or int(data['RF_RelationshipToClient']) == 21 or int(data['RF_RelationshipToClient']) == 25):
                    val11=1


                if(int(data['RF_RelationshipToClient']) == 2 or int(data['RF_RelationshipToClient']) == 3 or int(data['RF_RelationshipToClient']) == 7 or int(data['RF_RelationshipToClient']) == 9 or int(data['RF_RelationshipToClient']) == 10 or int(data['RF_RelationshipToClient']) == 11 or int(data['RF_RelationshipToClient']) == 12
                    or int(data['RF_RelationshipToClient']) == 17 or int(data['RF_RelationshipToClient']) == 18 or int(data['RF_RelationshipToClient']) == 22 or int(data['RF_RelationshipToClient']) == 23):
                    val11=3      
                    


                if(int(data['RF_RelationshipToClient']) == 5 or int(data['RF_RelationshipToClient']) == 14 or int(data['RF_RelationshipToClient']) == 19 or int(data['RF_RelationshipToClient']) == 24):
                    val11=2

                if(int(data['RF_Nationality']) == 21 or int(data['RF_Nationality']) == 57 or int(data['RF_Nationality']) == 106 or int(data['RF_Nationality']) == 107 or int(data['RF_Nationality']) == 119 or int(data['RF_Nationality']) == 187 or int(data['RF_Nationality']) == 217):
                    val4=12

                data['val2n']=val1+val2+val3+val4+val5+val6+val7+val8
                data['val3n']=val6+val7+val8+val9+val10+val11
                data['RF_Scores'] = RF_Scores.objects.filter(form=data['id'], advisorId=data['advisorId_id']).values().first()
                CountryList =["", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Aukland Islands", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Sint Eustatius aand Saba)", "Bosnia and Herzegovina", "Botswana", "Bouvet Islands", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (Democratic Republic)", "Congo (Republic)", "Cook Islands", "Costa Rica", "Côte D'Ivoire (Ivory Coast)", "Croatia", "Cuba", "Curacao", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "eSwatini (Previously Swaziland)", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea ((North) Democratic People's Republic)", "Korea ((South) Republic)", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia (Former Yugoslavia)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federal States)", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norfolk Island", "Northern Mariana Islands", "Norway", "Nuie", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Barthelemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch Part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States Minor Outlying Islands", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (US)", "Wallis and Futuna", "West Bank and Gaza (Palestine)", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]
                Industry = ['','Administrative and support services','Adult Entertainment','Agriculture,forestry and fishing','Arts,Entertainment and Recreation','Broadcasting and Entertainment','Chemical engineering/manufacturing',
                'Community and social activities','Construction and civil engineering','Consumer goods:wholesale and retail','Education','Electricity,solar,water,gas','Entrepreneurship','Estate living and family trusts','Extractive services,mining and quarrying','Financial and insurance','Gambling','Government services,armed and state owned enterprise','Health care and medical','Information technology,communication and telecom','Legal practitioner','Manufacturing','Motor wholesale,retail trade and repair','Non profit organization','Non government organization(NGO)','other','PFMA schedule 1','PFMA schedule 2','PFMA schedule 3A','Professional sport','Real estate and property services','Shell Banking','Transport storage,courier and freight','Travel,tourism and accomodation','Virtual currencies']
                NationalityList =["", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Aukland Islands", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Sint Eustatius aand Saba)", "Bosnia and Herzegovina", "Botswana", "Bouvet Islands", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (Democratic Republic)", "Congo (Republic)", "Cook Islands", "Costa Rica", "Côte D'Ivoire (Ivory Coast)", "Croatia", "Cuba", "Curacao", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "eSwatini (Previously Swaziland)", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea ((North) Democratic People's Republic)", "Korea ((South) Republic)", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia (Former Yugoslavia)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federal States)", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norfolk Island", "Northern Mariana Islands", "Norway", "Nuie", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Barthelemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch Part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South African", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States Minor Outlying Islands", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (US)", "Wallis and Futuna", "West Bank and Gaza (Palestine)", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]
                SourceOfFunds = ['','Allowance','Bonus','Bursary','Company profits','Company sale','Cryptocurrency','Debt capital','Disability/social grant','Dividends from investment','Divorce settlement','Equity capital','Gambling winnings','Gift','Income from previous employment','Inherritance','Loan','Lottery winnings','Maintainance(Formal agreement)','Maintainance(Informal agreement)','Maturing Investments','Other','Pension','Provident fund','Rental Propert','Retirement Funds','Salary','Salary asset/property','Sale of shares','Sanlam payout','Savings','Settlement','Transfer to/from approved funds','Trust Income']
                RelationshipToClient =['','Annuitant','Applicant','Authorised Representative','Cessionary','Curator','Executor','Fund Annuitant','Gurantor','Legal Guardian','Legal owner','Multi data client','Nominee of ownership','Policy owner','Power of Attorney','Premium Payer','Surety']
                Product_Name = ['','Access to funds or benefits restricted to specific contractual events (specified termination, uncertain insured event)','Access to primary benefits only at claim stage','Access to primary benefits only at claim stage, but have access to cash during the lifetime of the product','Access to the values may be limited by legislation','Accumulation of cash values','AAdministrative service provided','Advisory or intermediary services only with commission based inflow','Allows for restricted number of withdrawals','Benefits governed by specific regulatory- and tax regimes','Can be accessed without any restrictions by law or product provider','Can be offered as security and be transferred to another person (ceded)','Cannot be offered as security or ceded','Contributions are limited by legislation or regulation','Contributions from Third Parties are allowed','Funds can be accumulated and easily accessed','Funds linked to a specific source (Estate, Order of Court, Retirement Fund Benefits, Employer)','Investments are made with discretionary money','Lump sum payments, including ad-hoc lump sum payments allowed','No or little accumulation of cash values during the lifetime of the product','Not available to retail investors','Online transactability and automated access','Payments to foreign bank accounts are allowed','Product allows for investment in or via a foreign jurisdiction(s)','Product only provides a structured flow of transactions','Significant fund flows are involved','Third Party EFT services provided','Third Party non-financial services provided','Transparency is limited in respect of source of funds','Unlimited contributions and withdrawals']
                Transaction_Flow = ['','Inflow','Outflow','Not Applicable']
                Transaction_Method = ['','Bank Transfer','Cash','Debit order','Debit/credit card','EFT','File/API Transfer','Mobile payment','Retailer/Merchant payment','Script Transfer','Stop order','Straight through processing','Unit Transfer']
                RF_Transaction_Reason = ['','Additional Premium','Cession','Client/Policy change','Combined alteration','Commission/Service fee','Continuation','Conversion','New business','Premium arrears','Re-issue','Renewal','Review underwriting','Switch in','Transfer of value']
                RF_High_Transaction_Reason = ['','Yes','No']
                RF_Transaction_Flow = ['','Inflow','Outflow','Not Applicable']
                RF_Transaction_Frequency = ['','Ad hoc','Lump sum and recurring combination','Once off/Lump sum','Recurring']
                RF_Transaction_Geography = ['','Cross Border','In-country','Not Applicable']
                RF_Delivery_Channel = ['','Intermediaries(Advisors)','Intermediaries(consultants)']
                RF_Linked_Party_Acting = ['','Not Applicable','No','Yes']
                RF_Linked_Party_Paying = ['','Not applicable','Paying funds','Received funds']
                RF_Client_Match = ['','Adverse Media','Enforcement,SIP,SIE','False Positive','False Positive-Unsure','False Positive-Unsure:Sanctions','No Alert','PEP-Domestic','PEP-Foreign','Sanction','Sanlam Do not Trnsact List','SOE']
                RF_Client_Beneficiaries = ['','Yes','No']
                RF_Adjust_Risk1 = ['','Low','Medium','High','Intolerable']
                RF_BU_Risk = ['','Low','Medium','High']
                RF_RCA = ['','Yes','No']
                RF_Client_Relationship = ['','Beneficial owner','Beneficiary','Co-policy owner','Dependent','EFT third party','Individual acting on behalf of an entity','Individual exercising control other than owner','Individual linked to a partnership','Individual linked to a trust','Legal entity acting on behalf of individual','Legal entity acting on behalf of other legal entity','Legal Entity exercising control over another Legal Entity','Legal Entity has legal relationship with other Legal Entity','Legal Entity linked to a Trust','Legal guardian','Life assured','Natural guardian','Nominee for ownership','Principal owner','Security cession','Signatory','Trust has control over another trust','Trustee','Unit transfer investment owner']
                RF_Type_Legal_Entity = ['','Body corporate','Charitable organization','Church/religious organization','Closed corporation','Club','Deceased Estate','Foreign government','Foreign listed company','Foreign state owned entity','Foreign trust','Foreign Unlisted company','Foundation','Fund','Insolvent Estate','Listed company','Non government organization','Non profit organization','Other corporate arrangement','Retirement fund','School/university','State owned Enterprise','Stokvel','Trade Union','Trust','Unlisted company']
                

                data['RF_CountryOfBirth_id'] = int(data['RF_CountryOfBirth'])
                data['RF_CountryOfBirth'] = CountryList[data['RF_CountryOfBirth_id']]
                data['RF_CountryOfResidence_id'] = int(data['RF_CountryOfResidence'])
                data['RF_CountryOfResidence'] = CountryList[data['RF_CountryOfResidence_id']]
                data['RF_Nationality_id'] = int(data['RF_Nationality'])
                data['RF_Nationality'] = NationalityList[data['RF_Nationality_id']]
                data['RF_CountryOfTax_id'] = int(data['RF_CountryOfTax'])
                data['RF_CountryOfTax'] = CountryList[data['RF_CountryOfTax_id']]
                data['RF_Industry_id'] = int(data['RF_Industry'])
                data['RF_Industry'] = Industry[data['RF_Industry_id']]
                data['RF_SourceOfFunds_id'] = int(data['RF_SourceOfFunds'])
                data['RF_SourceOfFunds'] = SourceOfFunds[data['RF_SourceOfFunds_id']]
                data['RF_RelationshipToClient_id'] = int(data['RF_RelationshipToClient'])
                data['RF_RelationshipToClient'] = RelationshipToClient[data['RF_RelationshipToClient_id']]
                data['RF_Product_Name_id'] = int(data['RF_Product_Name'])
                data['RF_Product_Name'] = Product_Name[data['RF_Product_Name_id']]
                
                val13, val14, val15, val16, val17, val18, val19, val20 = 0, 0, 0, 0, 0, 0, 0, 0 

                if(data['RF_Transaction_Method'] and (int(data['RF_Transaction_Method']) == 1 or int(data['RF_Transaction_Method']) == 4 or int(data['RF_Transaction_Method']) == 5 or int(data['RF_Transaction_Method']) == 7 or int(data['RF_Transaction_Method']) == 8)):
                    val13=4
                if(data['RF_Transaction_Method'] and (int(data['RF_Transaction_Method']) == 2 or int(data['RF_Transaction_Method']) == 11)):
                    val13=6
                if(data['RF_Transaction_Method'] and (int(data['RF_Transaction_Method']) == 3 or int(data['RF_Transaction_Method']) == 6 or int(data['RF_Transaction_Method']) == 9 or int(data['RF_Transaction_Method']) == 10 or int(data['RF_Transaction_Method']) == 12)):
                    val13=2
                if(data['RF_Transaction_Reason'] and data['RF_Transaction_Reason'] == 1):
                    val14=2  
                if(data['RF_Transaction_Reason'] and data['RF_Transaction_Reason'] !=0):
                    val14=1
                if(data['RF_High_Transaction_Reason'] and int(data['RF_High_Transaction_Reason']) == 1):
                    val15=6
                if(data['RF_High_Transaction_Reason'] and int(data['RF_High_Transaction_Reason']) == 2):
                    val15=2
                if(data['RF_Transaction_Frequency'] and (int(data['RF_Transaction_Frequency']) == 1 or int(data['RF_Transaction_Frequency']) == 2 or int(data['RF_Transaction_Frequency']) == 3)):
                    val16=3
                if(data['RF_Transaction_Frequency'] and (int(data['RF_Transaction_Frequency']) == 4)):
                    val16=1
                if(data['RF_Transaction_Geography'] and (int(data['RF_Transaction_Geography']) == 1)):
                    val17=2
                if(data['RF_Transaction_Geography'] and (int(data['RF_Transaction_Geography']) == 2 or int(data['RF_Transaction_Geography']) == 3)):
                    val17=1
                if(data['RF_Transaction_Geography'] and (int(data['RF_Transaction_Geography']) == 1)):
                    val18=3
                if(data['RF_Transaction_Geography'] and (int(data['RF_Transaction_Geography']) == 2 or int(data['RF_Transaction_Geography']) == 5 or int(data['RF_Transaction_Geography']) == 6)):
                    val18=2
                if(data['RF_Transaction_Geography'] and (int(data['RF_Transaction_Geography']) == 3 or int(data['RF_Transaction_Geography']) == 4)):
                    val18=1
                if(data['RF_Linked_Party_Acting'] and (int(data['RF_Linked_Party_Acting']) == 1 or int(data['RF_Linked_Party_Acting']) == 2)):
                    val19=1
                if(data['RF_Linked_Party_Acting'] and (int(data['RF_Linked_Party_Acting']) == 3)):
                    val19=3
                if(data['RF_Linked_Party_Paying'] and (int(data['RF_Linked_Party_Paying']) == 1 )):
                    val20=0
                if(data['RF_Linked_Party_Paying'] and (int(data['RF_Linked_Party_Paying']) == 2 or int(data['RF_Linked_Party_Paying']) == 3)):
                    val20=3
                val4n = 0
                RF_Inception_Timeframe = ["",">3 months",">6 months","0-3 months","0-6 months"]
                data['RF_Transaction_Flow_id'] = int(data['RF_Transaction_Flow']) if data['RF_Transaction_Flow'] else 0
                data['RF_Inception_Timeframe_id'] = int(data['RF_Inception_Timeframe']) if data['RF_Inception_Timeframe'] else 0
                data['RF_Inception_Timeframe'] = RF_Inception_Timeframe[int(data['RF_Inception_Timeframe_id'])]
                data['RF_Transaction_Flow'] = RF_Transaction_Flow[int(data['RF_Transaction_Flow_id'])]
                data['RF_Transaction_Method_id'] = int(data['RF_Transaction_Method']) if data['RF_Transaction_Method'] else 0
                data['RF_Transaction_Method'] = Transaction_Method[data['RF_Transaction_Method_id']]
                data['RF_Transaction_Reason_id'] = int(data['RF_Transaction_Reason']) if data['RF_Transaction_Reason'] else 0
                data['RF_Transaction_Reason'] = RF_Transaction_Reason[data['RF_Transaction_Reason_id']]
                data['RF_High_Transaction_Reason_id'] = data['RF_High_Transaction_Reason'] and int(data['RF_High_Transaction_Reason']) if data['RF_High_Transaction_Reason'] != '' else 0
                data['RF_High_Transaction_Reason'] = RF_High_Transaction_Reason[data['RF_High_Transaction_Reason_id']]
                data['RF_Transaction_Frequency_id'] = int(data['RF_Transaction_Frequency']) if data['RF_Transaction_Frequency'] != '' else 0
                data['RF_Transaction_Frequency'] = RF_Transaction_Frequency[data['RF_Transaction_Frequency_id']]
                data['RF_Transaction_Geography_id'] = int(data['RF_Transaction_Geography']) if data['RF_Transaction_Geography'] != '' else 0
                data['RF_Transaction_Geography'] = RF_Transaction_Geography[data['RF_Transaction_Geography_id']]
                data['RF_Funds_Jurisdiction_id'] = int(data['RF_Funds_Jurisdiction']) if data['RF_Funds_Jurisdiction'] != '' else 0
                data['RF_Funds_Jurisdiction'] = CountryList[data['RF_Funds_Jurisdiction_id']]
                data['RF_Delivery_Channel_id'] = int(data['RF_Delivery_Channel']) if data['RF_Delivery_Channel'] != '' else 0
                data['RF_Delivery_Channel'] = RF_Delivery_Channel[data['RF_Delivery_Channel_id']]
                data['RF_Linked_Party_Acting_id'] = int(data['RF_Linked_Party_Acting']) if data['RF_Linked_Party_Acting'] != '' else 0
                data['RF_Linked_Party_Acting'] = RF_Linked_Party_Acting[data['RF_Linked_Party_Acting_id']]
                data['RF_Linked_Party_Paying_id'] = int(data['RF_Linked_Party_Paying']) if data['RF_Linked_Party_Paying'] != '' else 0
                data['RF_Linked_Party_Paying'] = RF_Linked_Party_Paying[data['RF_Linked_Party_Paying_id']]
                data['RF_Client_Match_id'] = int(data['RF_Client_Match']) if data['RF_Client_Match'] != '' else 0
                data['RF_Client_Match'] = RF_Client_Match[data['RF_Client_Match_id']]
                data['RF_Client_Beneficiaries_id'] = int(data['RF_Client_Beneficiaries']) if data['RF_Client_Beneficiaries'] != '' else 0
                data['RF_Client_Beneficiaries'] = RF_Client_Beneficiaries[data['RF_Client_Beneficiaries_id']]
                
                if int(data['RF_Client_Beneficiaries_id']) == 1:
                    if RF_LinkedParty.objects.filter(formId = data['id']).exists():
                        data['RF_LinkedParty'] = RF_LinkedParty.objects.filter(formId = data['id']).values()
                        for row in data['RF_LinkedParty']:
                            row['RF_LP_Adjust_Risk_id'] = int(row['RF_LP_Adjust_Risk']) if row['RF_LP_Adjust_Risk'] != '' else 0
                            row['RF_LP_Adjust_Risk'] = RF_Adjust_Risk1[row['RF_LP_Adjust_Risk_id']]
                            row['RF_LP_RCA_id'] = int(row['RF_LP_RCA']) if row['RF_LP_RCA'] != '' else 0
                            row['RF_LP_RCA'] = RF_RCA[row['RF_LP_RCA_id']]
                            row['RF_LP_Client_Relationship'] = RF_Client_Relationship[int(row['RF_LP_Client_Relationship'])]
                            row['RF_LP_Linked_Party_id'] = int(row['RF_LP_Linked_Party']) if row['RF_LP_Linked_Party'] else 0
                            row['RF_LP_Linked_Party'] = RF_Client_Match[row['RF_LP_Linked_Party_id']]
                            row['RF_LP_Birth_Country_id'] = int(row['RF_LP_Birth_Country']) if row['RF_LP_Birth_Country'] != '' else 0
                            row['RF_LP_Birth_Country'] = CountryList[row['RF_LP_Birth_Country_id']]
                            row['RF_LP_Residence_Country_id'] = int(row['RF_LP_Residence_Country']) if row['RF_LP_Residence_Country'] != '' else 0
                            row['RF_LP_Residence_Country'] = CountryList[row['RF_LP_Residence_Country_id']]
                            row['RF_LP_Nationality_id'] = int(row['RF_LP_Nationality']) if row['RF_LP_Nationality'] != '' else 0
                            row['RF_LP_Nationality'] = NationalityList[row['RF_LP_Nationality_id']]
                data['RF_CountryOfRegistration_id'] = int(data['RF_CountryOfRegistration']) if data['RF_CountryOfRegistration'] != '' else 0
                data['RF_CountryOfRegistration'] = CountryList[data['RF_CountryOfRegistration_id']]
                data['RF_CountryOfOperation_id'] = int(data['RF_CountryOfOperation']) if data['RF_CountryOfOperation'] != '' else 0
                data['RF_CountryOfOperation'] = CountryList[data['RF_CountryOfOperation_id']]
                data['RF_Type_Legal_Entity_id'] = int(data['RF_Type_Legal_Entity']) if data['RF_Type_Legal_Entity'] != '' else 0
                data['RF_Type_Legal_Entity'] = RF_Type_Legal_Entity[data['RF_Type_Legal_Entity_id']]
                data['RF_ClientType_id'] = int(data['RF_ClientType'])
                data['RF_ClientType'] = int(data['RF_ClientType'])
                
                if(data['RF_Transaction_Flow_id'] and (int(data['RF_Transaction_Flow_id']) == 1 or int(data['RF_Transaction_Flow_id']) == 2)):
                    val4n=val13+val14+val15+val16+val17+val18+val19+val20
                data['val4n'] = val4n 
            else:
                if Form.objects.filter(formId = pk).exists():            
                    data['RoA'] = Form.objects.filter(formId = pk, advisorId=data['advisorId_id']).values().first()
                    if (
                        # data['RoA']['clientEmail'] == "" and 
                        data['RoA']['clientAddress'] == "" and 
                        # data['RoA']['clientPhoneNumber'] == "" and 
                        data['RoA']['clientLetterOfIntroduction'] == 0 and 
                        data['RoA']['clientLetterOfIntroductionReason'] == "" and 
                        data['RoA']['clientLetterOfIntroductionAccess'] == 0 and 
                        data['RoA']['clientLetterOfIntroductionAccessReason'] == "" and 
                        data['RoA']['clientFica'] == 0 and 
                        data['RoA']['clientFicaReason'] == "" and 
                        data['RoA']['clientBackgroundInfo'] == ""
                    ):
                        data['roa_status'] = False
                    else:
                        data['roa_status'] = True
                        advisor = UserAccount.objects.filter(id=data['RoA']['advisorId_id']).values('first_name','last_name').first()
                        data['RoA']['clientAdvisor'] = advisor['first_name'] + ' ' + advisor['last_name']
                        data['RoA']['clientDateOfBirth'] = (data['RoA']['clientDateOfBirth']).strftime('%d %b %Y')
                else:
                    data['roa_status'] = False

                PremiumFrequency = [ "" ,"Monthly", "Quarterly", "Annually", "Once Off"]
                SourceOfFunds = ["", "Salary", "Savings", "Inheritence", "Resignation", "Retirement", "Other", ]
                IP_InvestmentStrategy = ["", "Capital Reservation", "Income", "Goal Specification Investment"]
                IP_ReturnRequired = ["","Market Linked Return","Targeted Return","Benchmark"]
                IP_RiskProfile = ["","Conservative","Cautious","Moderate","Moderately Aggressive","Aggressive"]
                # IP_ProductTaken = ["","Endowment","RA","TSFA","Unit Trust","Life Annuity","Living Annuity","Other"]
                Product_Taken = ["","Endowment","RA","TSFA","Unit Trust","Life Annuity","Living Annuity","Other"]

                if RiskPlanning.objects.filter(formId = pk).exists():
                    data['RP'] = RiskPlanning.objects.filter(formId = pk, advisorId=data['advisorId_id']).values().first()
                    if (
                        data['RP']['RP_DC_LumpSumExistingProvisions'] == "" and
                        data['RP']['RP_DC_LumpSumExistingShortfallSurplus'] == "" and
                        data['RP']['RP_DC_LumpSumInvestments'] == "" and
                        data['RP']['RP_DC_LumpSumTotalNeed'] == "" and
                        data['RP']['RP_DC_IncomeTotalNeed'] == "" and
                        data['RP']['RP_DC_IncomeExistingProvisions'] == "" and
                        data['RP']['RP_DC_IncomeExistingShortfallSurplus'] == "" and
                        data['RP']['RP_DC_IncomeInvestments'] == "" and
                        data['RP']['RP_DC_FB_TotalNeed'] == "" and
                        data['RP']['RP_DC_FB_ExistingProvisions'] == "" and
                        data['RP']['RP_DC_FB_ExistingShortfallSurplus'] == "" and
                        data['RP']['RP_DC_FB_Investments'] == "" and
                        data['RP']['RP_DC_Other'] == "" and
                        data['RP']['RP_DC_OtherTotalNeed'] == "" and
                        data['RP']['RP_DC_OtherExistingProvisions'] == "" and
                        data['RP']['RP_DC_OtherExistingShortfallSurplus'] == "" and
                        data['RP']['RP_DC_OtherInvestments'] == "" and
                        data['RP']['RP_DC_Comments'] == "" and
                        data['RP']['RP_DiC_LumpSumTotalNeed'] == "" and
                        data['RP']['RP_DiC_LumpSumExistingProvisions'] == "" and
                        data['RP']['RP_DiC_LumpSumExistingShortfallSurplus'] == "" and
                        data['RP']['RP_DiC_LumpSumInvestments'] == "" and
                        data['RP']['RP_DiC_PI_TotalNeed'] == "" and
                        data['RP']['RP_DiC_PI_ExistingProvisions'] == "" and
                        data['RP']['RP_DiC_PI_ExistingShortfallSurplus'] == "" and
                        data['RP']['RP_DiC_PI_Investments'] == "" and
                        data['RP']['RP_DiC_TI_TotalNeed'] == "" and
                        data['RP']['RP_DiC_TI_ExistingProvisions'] == "" and
                        data['RP']['RP_DiC_TI_ExistingShortfallSurplus'] == "" and
                        data['RP']['RP_DiC_TI_Investments'] == "" and
                        data['RP']['RP_DiC_SiB_TotalNeed'] == "" and
                        data['RP']['RP_DiC_SiB_ExistingProvisions'] == "" and
                        data['RP']['RP_DiC_SiB_ExistingShortfallSurplus'] == "" and
                        data['RP']['RP_DiC_SiB_Investments'] == "" and
                        data['RP']['RP_DiC_Other1'] == "" and
                        data['RP']['RP_DiC_OtherTotalNeed1'] == "" and
                        data['RP']['RP_DiC_OtherExistingProvisions1'] == "" and
                        data['RP']['RP_DiC_OtherExistingShortfallSurplus1'] == "" and
                        data['RP']['RP_DiC_OtherInvestments1'] == "" and
                        data['RP']['RP_DiC_Other2'] == "" and
                        data['RP']['RP_DiC_OtherTotalNeed2'] == "" and
                        data['RP']['RP_DiC_OtherExistingProvisions2'] == "" and
                        data['RP']['RP_DiC_OtherExistingShortfallSurplus2'] == "" and
                        data['RP']['RP_DiC_OtherInvestments2'] == "" and
                        data['RP']['RP_DiC_Comments'] == "" and
                        data['RP']['RP_DrC_LumpSumTotalNeed'] == "" and
                        data['RP']['RP_DrC_LumpSumExistingProvisions'] == "" and
                        data['RP']['RP_DrC_LumpSumExistingShortfallSurplus'] == "" and
                        data['RP']['RP_DrC_LumpSumInvestments'] == "" and
                        data['RP']['RP_DrC_IncomeTotalNeed'] == "" and
                        data['RP']['RP_DrC_IncomeExistingProvisions'] == "" and
                        data['RP']['RP_DrC_IncomeExistingShortfallSurplus'] == "" and
                        data['RP']['RP_DrC_IncomeInvestments'] == "" and
                        data['RP']['RP_DrC_Other1'] == "" and
                        data['RP']['RP_DrC_OtherTotalNeed1'] == "" and
                        data['RP']['RP_DrC_OtherExistingProvisions1'] == "" and
                        data['RP']['RP_DrC_OtherExistingShortfallSurplus1'] == "" and
                        data['RP']['RP_DrC_OtherInvestments1'] == "" and
                        data['RP']['RP_DrC_Other2'] == "" and
                        data['RP']['RP_DrC_OtherTotalNeed2'] == "" and
                        data['RP']['RP_DrC_OtherExistingProvisions2'] == "" and
                        data['RP']['RP_DrC_OtherExistingShortfallSurplus2'] == "" and
                        data['RP']['RP_DrC_Comments'] == "" and
                        data['RP']['RP_LC_FinancialSolutions'] == "" and
                        data['RP']['RP_DiC_FinancialSolutions'] == "" and
                        data['RP']['RP_DrC_FinancialSolutions'] == "" and
                        data['RP']['RP_AltS_1'] == "" and
                        data['RP']['RP_AltS_2'] == "" and
                        data['RP']['RP_AltS_3'] == "" 
                    ):
                        data['rp_status'] = False
                    else:
                        data['rp_status'] = True
                        if Risk_DC_Others.objects.filter(formId = pk).exists():
                            data['RP']['DC_Other_Data'] = Risk_DC_Others.objects.filter(formId = pk).values()
                        if Risk_DiC_Others.objects.filter(formId = pk).exists():
                            data['RP']['DiC_Other_Data'] = Risk_DiC_Others.objects.filter(formId = pk).values()
                        if Risk_DrC_Others.objects.filter(formId = pk).exists():
                            data['RP']['DrC_Other_Data'] = Risk_DrC_Others.objects.filter(formId = pk).values()
                        if RP_ProductTaken.objects.filter(formId = pk).exists():
                            data['RP']['RP_ProductTaken_Data'] = RP_ProductTaken.objects.filter(formId = pk).values()
                            for row in data['RP']['RP_ProductTaken_Data']:
                                # Product_Taken_id = int(row['Product_Taken'])
                                row['Product_Taken'] = row['Product_Taken']
                                row['Product_PremiumFrequency'] = PremiumFrequency[int(row['Product_PremiumFrequency'])]
                                row['Product_OngoingFeesFrequency1'] = PremiumFrequency[int(row['Product_OngoingFeesFrequency1'])]
                else:
                    data['rp_status'] = False
                if InvestmentPlanning.objects.filter(formId=pk).exists():
                    data['IP'] = InvestmentPlanning.objects.filter(formId=pk, advisorId=data['advisorId_id']).values().first()
                    if (
                        data['IP']['IP_SourceOfIncome'] == 1 and
                        data['IP']['IP_OtherSourceOfIncome'] == "" and
                        data['IP']['IP_InvestmentTerm'] == "" and
                        data['IP']['IP_InvestmentTermDetails'] == "" and
                        data['IP']['IP_Liquidity'] == 0 and
                        data['IP']['IP_LiquidityDetails'] == "" and
                        data['IP']['IP_Type'] == 0 and
                        data['IP']['IP_TypeDetails'] == "" and
                        data['IP']['IP_PremiumType'] == 0 and
                        data['IP']['IP_PremiumTypeDetails'] == "" and
                        data['IP']['IP_IncomeRequired'] == 0 and
                        data['IP']['IP_IncomeRequiredDetails'] == "" and
                        data['IP']['IP_InvestmentStrategy'] == 1 and
                        data['IP']['IP_InvestmentStrategyDetails'] == "" and
                        data['IP']['IP_ReturnRequired'] == 1 and
                        data['IP']['IP_ReturnRequiredDetails'] == "" and
                        data['IP']['IP_RiskProfile'] == 1 and
                        data['IP']['IP_RiskProfileDetails'] == "" and
                        data['IP']['IP_RecommendationSummary'] == "" and
                        data['IP']['IP_AltS_1'] == "" and
                        data['IP']['IP_AltS_2'] == "" and
                        data['IP']['IP_AltS_3'] == ""
                    ):
                        data['ip_status'] = False
                    else:
                        data['ip_status'] = True
                        data['IP']['IP_SourceOfIncome'] = SourceOfFunds[int(data['IP']['IP_SourceOfIncome'])]
                        data['IP']['IP_InvestmentStrategy'] = IP_InvestmentStrategy[int(data['IP']['IP_InvestmentStrategy'])]
                        data['IP']['IP_ReturnRequired'] = IP_ReturnRequired[int(data['IP']['IP_ReturnRequired'])]
                        data['IP']['IP_RiskProfile'] = IP_RiskProfile[int(data['IP']['IP_RiskProfile'])]
                        if IP_ProductTaken.objects.filter(formId = pk).exists():
                            data['IP']['IP_ProductTaken_Data'] = IP_ProductTaken.objects.filter(formId = pk).values()
                            for row in data['IP']['IP_ProductTaken_Data']:
                                row['ProductTaken_id'] = row['ProductTaken']
                                row['ProductTaken'] = Product_Taken[int(row['ProductTaken'])]
                                row['ProductPremiumFrequency'] = PremiumFrequency[int(row['ProductPremiumFrequency'])]
                else:
                    data['ip_status'] = False
                
                if AssuranceRisk.objects.filter(formId=pk).exists():
                    data['BA_Risk'] = AssuranceRisk.objects.filter(formId=pk, advisorId=data['advisorId_id']).values().first()
                    if (
                        data['BA_Risk']['AR_BusinessTradeName'] == "" and   
                        data['BA_Risk']['AR_BusinessRegisteredName'] == "" and   
                        data['BA_Risk']['AR_BusinessAuthorisedPersons'] == "" and   
                        data['BA_Risk']['AR_BusinessAddress'] == "" and   
                        data['BA_Risk']['AR_BusinessEmail'] == "" and   
                        data['BA_Risk']['AR_BusinessPhoneNumber'] == "" and   
                        data['BA_Risk']['AR_BusinessDate'] == "" and   
                        data['BA_Risk']['AR_ComDisc_AuthorizedPerson'] == 0 and 
                        data['BA_Risk']['AR_ComDisc_AuthorizedPersonDetail'] == "" and   
                        data['BA_Risk']['AR_ComDisc_Authority'] == 0 and 
                        data['BA_Risk']['AR_ComDisc_AuthorityDetail'] == "" and   
                        data['BA_Risk']['AR_FICA'] == 0 and 
                        data['BA_Risk']['AR_FICADetail'] == "" and   
                        data['BA_Risk']['AR_RepPrs_Taken'] == 0 and 
                        data['BA_Risk']['AR_RepPrs_TakenDetail'] == "" and   
                        data['BA_Risk']['AR_RepPrs_Explained'] == 0 and 
                        data['BA_Risk']['AR_RepPrs_ExplainedDetail'] == "" and   
                        data['BA_Risk']['AR_RepPrs_Cancelled'] == 0 and 
                        data['BA_Risk']['AR_RepPrs_CancelledDetail'] == "" and  
                        data['BA_Risk']['AR_SourceOfFunds'] == 0 and 
                        data['BA_Risk']['AR_SourceOfFundsDetail'] == "" and           
                        data['BA_Risk']['AR_ReplacementBackInfo'] == "" and   
                        data['BA_Risk']['AR_BusA_BnS'] == False and  
                        data['BA_Risk']['AR_BusA_KeyP_Insurance'] == False and  
                        data['BA_Risk']['AR_BusA_ContingentLiability'] == False and  
                        data['BA_Risk']['AR_BusA_BusOvProt'] == False and  
                        data['BA_Risk']['AR_BusA_CLARedm'] == False and  
                        data['BA_Risk']['AR_BusA_DebitLoanRedemption'] == False and  
                        data['BA_Risk']['AR_BusA_FundingOfFutureExpenses'] == False and  
                        data['BA_Risk']['AR_BusA_FundingOfDeferredGratuities'] == False and  
                        data['BA_Risk']['AR_BusA_Details'] == "" and    
                        data['BA_Risk']['AR_BnS_DiC_TotalNeed'] == "" and   
                        data['BA_Risk']['AR_BnS_DiC_ExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_BnS_DiC_ExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_BnS_DiC_Investments'] == "" and      
                        data['BA_Risk']['AR_BnS_Other'] == "" and   
                        data['BA_Risk']['AR_BnS_OtherTotalNeed'] == "" and   
                        data['BA_Risk']['AR_BnS_OtherExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_BnS_OtherExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_BnS_OtherInvestments'] == "" and               
                        data['BA_Risk']['AR_BnS_Comments'] == "" and   
                        data['BA_Risk']['AR_KeyP_DC_TotalNeed'] == "" and   
                        data['BA_Risk']['AR_KeyP_DC_ExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_KeyP_DC_ExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_KeyP_DC_Investments'] == "" and               
                        data['BA_Risk']['AR_KeyP_DiC_TotalNeed'] == "" and   
                        data['BA_Risk']['AR_KeyP_DiC_ExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_KeyP_DiC_ExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_KeyP_DiC_Investments'] == "" and               
                        data['BA_Risk']['AR_KeyP_TI_CoverTotalNeed'] == "" and   
                        data['BA_Risk']['AR_KeyP_TI_CoverExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_KeyP_TI_CoverExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_KeyP_TI_CoverInvestments'] == "" and                   
                        data['BA_Risk']['AR_KeyP_PI_CoverTotalNeed'] == "" and   
                        data['BA_Risk']['AR_KeyP_PI_CoverExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_KeyP_PI_CoverExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_KeyP_PI_CoverInvestments'] == "" and    
                        data['BA_Risk']['AR_KeyP_Other'] == "" and   
                        data['BA_Risk']['AR_KeyP_OtherTotalNeed'] == "" and   
                        data['BA_Risk']['AR_KeyP_OtherExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_KeyP_OtherExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_KeyP_OtherInvestments'] == "" and                
                        data['BA_Risk']['AR_KeyP_Comments'] == "" and          
                        data['BA_Risk']['AR_SureNLia_DiC_TotalNeed'] == "" and   
                        data['BA_Risk']['AR_SureNLia_DiC_Provisions'] == "" and   
                        data['BA_Risk']['AR_SureNLia_DiC_ShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_SureNLia_DiC_Investments'] == "" and      
                        data['BA_Risk']['AR_SureNLia_Other'] == "" and   
                        data['BA_Risk']['AR_SureNLia_OtherTotalNeed'] == "" and   
                        data['BA_Risk']['AR_SureNLia_OtherProvisions'] == "" and   
                        data['BA_Risk']['AR_SureNLia_OtherShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_SureNLia_OtherInvestments'] == "" and               
                        data['BA_Risk']['AR_SureNLia_Comments'] == "" and               
                        data['BA_Risk']['AR_BusOvProt_TI_CoverTotalNeed'] == "" and   
                        data['BA_Risk']['AR_BusOvProt_TI_CoverExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_BusOvProt_TI_CoverExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_BusOvProt_TI_CoverInvestments'] == "" and      
                        data['BA_Risk']['AR_BusOvProt_PI_CoverTotalNeed'] == "" and   
                        data['BA_Risk']['AR_BusOvProt_PI_CoverExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_BusOvProt_PI_CoverExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_BusOvProt_PI_CoverInvestments'] == "" and      
                        data['BA_Risk']['AR_BusOvProt_Other'] == "" and   
                        data['BA_Risk']['AR_BusOvProt_OtherTotalNeed'] == "" and   
                        data['BA_Risk']['AR_BusOvProt_OtherExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_BusOvProt_OtherExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_BusOvProt_OtherInvestments'] == "" and                
                        data['BA_Risk']['AR_BusOvProt_Comments'] == "" and 
                        data['BA_Risk']['AR_CLARedm_DC_TotalNeed'] == "" and   
                        data['BA_Risk']['AR_CLARedm_DC_ExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_CLARedm_DC_ExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_CLARedm_DC_Investments'] == "" and               
                        data['BA_Risk']['AR_CLARedm_DiC_TotalNeed'] == "" and   
                        data['BA_Risk']['AR_CLARedm_DiC_ExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_CLARedm_DiC_ExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_CLARedm_DiC_Investments'] == "" and               
                        data['BA_Risk']['AR_CLARedm_Other'] == "" and   
                        data['BA_Risk']['AR_CLARedm_OtherTotalNeed'] == "" and   
                        data['BA_Risk']['AR_CLARedm_OtherExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_CLARedm_OtherExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_CLARedm_OtherInvestments'] == "" and 
                        data['BA_Risk']['AR_DLARedm_DC_TotalNeed'] == "" and   
                        data['BA_Risk']['AR_DLARedm_DC_ExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_DLARedm_DC_ExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_DLARedm_DC_Investments'] == "" and               
                        data['BA_Risk']['AR_DLARedm_DiC_TotalNeed'] == "" and   
                        data['BA_Risk']['AR_DLARedm_DiC_ExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_DLARedm_DiC_ExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_DLARedm_DiC_Investments'] == "" and               
                        data['BA_Risk']['AR_DLARedm_Other'] == "" and   
                        data['BA_Risk']['AR_DLARedm_OtherTotalNeed'] == "" and   
                        data['BA_Risk']['AR_DLARedm_OtherExistingProvisions'] == "" and   
                        data['BA_Risk']['AR_DLARedm_OtherExistingShortfallSurplus'] == "" and   
                        data['BA_Risk']['AR_DLARedm_OtherInvestments'] == "" and          
                        data['BA_Risk']['AR_LifeCoverFinancialSolutions'] == "" and   
                        data['BA_Risk']['AR_DiC_FinancialSolutions'] == "" and  
                        data['BA_Risk']['AR_AltS_1'] == "" and   
                        data['BA_Risk']['AR_AltS_2'] == "" and   
                        data['BA_Risk']['AR_AltS_3'] == "" 
                    ) :
                        data['BA_Risk_status'] = False
                    else:
                        data['BA_Risk_status'] = True
                        if AR_BnS_Others.objects.filter(formId = pk).exists():
                            data['BA_Risk']['BnS_Other_Data'] = AR_BnS_Others.objects.filter(formId = pk).values()
                        if AR_KeyP_Others.objects.filter(formId = pk).exists():
                            data['BA_Risk']['KeyP_Other_Data'] = AR_KeyP_Others.objects.filter(formId = pk).values()
                        if AR_SureNLia_Others.objects.filter(formId = pk).exists():
                            data['BA_Risk']['SureNLia_Other_Data'] = AR_SureNLia_Others.objects.filter(formId = pk).values()
                        if AR_BusOvProt_Others.objects.filter(formId = pk).exists():
                            data['BA_Risk']['BusOvProt_Other_Data'] = AR_BusOvProt_Others.objects.filter(formId = pk).values()
                        if AR_CLARedm_Others.objects.filter(formId = pk).exists():
                            data['BA_Risk']['CLARedm_Other_Data'] = AR_CLARedm_Others.objects.filter(formId = pk).values()
                        if AR_DLARedm_Others.objects.filter(formId = pk).exists():
                            data['BA_Risk']['DLARedm_Other_Data'] = AR_DLARedm_Others.objects.filter(formId = pk).values()
                        
                        if AR_ProductTaken.objects.filter(formId = pk).exists():
                            data['BA_Risk']['AR_ProductTaken_Data'] = AR_ProductTaken.objects.filter(formId = pk).values()
                            for row in data['BA_Risk']['AR_ProductTaken_Data']:
                                # row['ProductTaken_id'] = row['ProductTaken']
                                row['ProductTaken'] = row['ProductTaken']
                                row['ProductPremiumFrequency'] = PremiumFrequency[int(row['ProductPremiumFrequency'])]
                    data['BA_Risk']['AR_BusinessDate'] = datetimeparser.parse(data['BA_Risk']['AR_BusinessDate']).strftime('%d %b %Y') if data['BA_Risk']['AR_BusinessDate'] != "" else "N.A."
                    # data['BA_Risk']['AR_ProductPremiumFrequency'] = PremiumFrequency[int(data['BA_Risk']['AR_ProductPremiumFrequency'])]
                else:
                    data['BA_Risk_status'] = False
                InvestmentStrategy = ["" ,"Capital Growth" , "Capital Preservtion", "Income", "Specified Goal Investment"]    
                ReturnRequired = ["" ,"Guaranteed Return", "Marketed Linked Return", "Targeted Return", "Benchmark"]      
                RiskProfile = ["" , "Ultra Conservative", "Conservative", "Cautious", "Moderate"] 
                SourceOfFunds = ["", "Salary", "Savings", "Inheritence", "Resignation", "Retirement", "Other", ]
                if AssuranceInvestment.objects.filter(formId=pk).exists():
                    data['BA_Investment'] = AssuranceInvestment.objects.filter(formId=pk, advisorId=data['advisorId_id']).values().first()
                    if (
                        data['BA_Investment']['AI_Term'] == "" and    
                        data['BA_Investment']['AI_TermDetails'] == "" and    
                        data['BA_Investment']['AI_PremiumType'] == 0 and    
                        data['BA_Investment']['AI_PremiumTypeDetails'] == "" and       
                        data['BA_Investment']['AI_Strategy'] == 1 and    
                        data['BA_Investment']['AI_StrategyDetails'] == "" and    
                        data['BA_Investment']['AI_ReturnRequired'] == 1 and    
                        data['BA_Investment']['AI_ReturnRequiredDetails'] == "" and    
                        data['BA_Investment']['AI_RiskProfile'] == 1 and      
                        data['BA_Investment']['AI_RiskProfileDetails'] == "" and      
                        data['BA_Investment']['AI_TRP_TotalNeed'] == "" and    
                        data['BA_Investment']['AI_TRP_ExistingProvisions'] == "" and    
                        data['BA_Investment']['AI_TRP_ExistingShortfallSurplus'] == "" and    
                        data['BA_Investment']['AI_TRP_ExistingInvestments'] == "" and    
                        data['BA_Investment']['AI_RA_TotalNeed'] == "" and    
                        data['BA_Investment']['AI_RA_ExistingProvisions'] == "" and    
                        data['BA_Investment']['AI_RA_ExistingShortfallSurplus'] == "" and    
                        data['BA_Investment']['AI_RA_ExistingInvestments'] == "" and    
                        data['BA_Investment']['AI_CR_TotalNeed'] == "" and    
                        data['BA_Investment']['AI_CR_ExistingProvisions'] == "" and    
                        data['BA_Investment']['AI_CR_ExistingShortfallSurplus'] == "" and   
                        data['BA_Investment']['AI_Other'] == "" and    
                        data['BA_Investment']['AI_Other_TotalNeed'] == "" and    
                        data['BA_Investment']['AI_Other_ExistingProvisions'] == "" and    
                        data['BA_Investment']['AI_Other_ExistingShortfallSurplus'] == "" and    
                        data['BA_Investment']['AI_FinancialSolutions'] == "" and    
                        data['BA_Investment']['AI_AltS_1'] == "" and    
                        data['BA_Investment']['AI_AltS_2'] == "" and    
                        data['BA_Investment']['AI_AltS_3'] == ""
                    ):
                        data['BA_Investment_status'] = False
                    else: 
                        data['BA_Investment_status'] = True
                        if AI_Others.objects.filter(formId = pk).exists():
                            data['BA_Investment']['AI_Others_Data'] = AI_Others.objects.filter(formId = pk).values()
                        if AI_ProductTaken.objects.filter(formId = pk).exists():
                            data['BA_Investment']['AI_ProductTaken_Data'] = AI_ProductTaken.objects.filter(formId = pk).values()
                            for row in data['BA_Investment']['AI_ProductTaken_Data']:
                                row['Pr_Taken_id'] = row['Pr_Taken']
                                row['Pr_Taken'] = Product_Taken[int(row['Pr_Taken'])]
                                row['Pr_PremiumFrequency'] = PremiumFrequency[int(row['Pr_PremiumFrequency'])]
                                row['SourceOfFunds'] = SourceOfFunds[int(row['SourceOfFunds'])] if row['SourceOfFunds'] !='' else SourceOfFunds[0]
                        data['BA_Investment']['AI_Strategy'] = InvestmentStrategy[int(data['BA_Investment']['AI_Strategy'])] if data['BA_Investment']['AI_Strategy'] !='' else InvestmentStrategy[0]
                        data['BA_Investment']['AI_ReturnRequired'] = ReturnRequired[int(data['BA_Investment']['AI_ReturnRequired'])] if data['BA_Investment']['AI_ReturnRequired'] !='' else ReturnRequired[0]
                        data['BA_Investment']['AI_RiskProfile'] = RiskProfile[int(data['BA_Investment']['AI_RiskProfile'])] if data['BA_Investment']['AI_RiskProfile'] !='' else RiskProfile[0]
                        
                else:
                    data['BA_Investment_status'] = False
                if EmployeeBenefits.objects.filter(formId=pk).exists():
                    data['EB'] = EmployeeBenefits.objects.filter(formId=pk, advisorId=data['advisorId_id']).values().first()
                    if (
                        # data['EB']['EB_ClientAddress'] == "" and
                        # data['EB']['EB_ClientPhoneNumber'] == "" and
                        data['EB']['EB_ClientCellNumber'] == "" and
                        # data['EB']['EB_ClientEmail'] == "" and
                        data['EB']['EB_ClientDate'] == "" and
                        # data['EB']['EB_ClientFinancialAdvisor'] == "" and
                        data['EB']['EB_ClientFeeDetails'] == "" and
                        data['EB']['EB_BusinessName'] == "" and
                        data['EB']['EB_BusinessAddress'] == "" and
                        data['EB']['EB_BusinessContactPerson'] == "" and
                        data['EB']['EB_BusinessPhoneNumber'] == "" and
                        data['EB']['EB_BusinessCellNumber'] == "" and
                        data['EB']['EB_BusinessEmail'] == "" and
                        data['EB']['EB_BusinessNature'] == "" and
                        data['EB']['EB_BusinessUnion'] == 0 and
                        data['EB']['EB_BusinessDetails'] == "" and
                        data['EB']['EB_BusinessNumberOfEmployees'] == "" and
                        data['EB']['EB_BusinessNumberOfEligibleEmployees'] == "" and
                        data['EB']['EB_BusinessNumberOfExcludedCategories'] == "" and
                        data['EB']['EB_BusEx_FundsName'] == "" and
                        data['EB']['EB_BusEx_FundsAdmin'] == "" and
                        data['EB']['EB_BusEx_FundsCurrentValue'] == "" and
                        data['EB']['EB_BusEx_FundsActiveMembers'] == "" and
                        data['EB']['EB_BusEx_FundsFullyPaidMembers'] == "" and
                        data['EB']['EB_BusEx_FundsFullyReasonForChange'] == "" and
                        data['EB']['EB_BusB_CoverDetails'] == "" and
                        data['EB']['EB_BusEmp_Retire_In5Years'] == 0 and
                        data['EB']['EB_BusEmp_Retire_In5YearsPercentage'] == "" and
                        data['EB']['EB_BusEmp_Fin_Illiterate'] == 0 and
                        data['EB']['EB_BusEmp_Fin_IlliteratePercentage'] == "" and
                        data['EB']['EB_BusEmp_Fin_Sophisticated'] == 0 and
                        data['EB']['EB_BusEmp_Fin_SophisticatedPercentage'] == "" and
                        data['EB']['EB_BusHS_TurnOver'] == 0 and
                        data['EB']['EB_BusHS_TurnOverPercentage'] == "" and
                        data['EB']['EB_BusI_Choice'] == 0 and
                        data['EB']['EB_BusI_ChoicePercentage'] == "" and
                        data['EB']['EB_BusinessItP'] == 0 and
                        data['EB']['EB_BusinessItP_Percentage'] == "" and
                        data['EB']['EB_BusEmp_AdditionalComments'] == "" and
                        data['EB']['EB_BusRB_Category1'] == "" and
                        data['EB']['EB_BusRB_Category2'] == "" and
                        data['EB']['EB_BusRB_Category3'] == "" and
                        data['EB']['EB_BusRB_Category4'] == "" and
                        data['EB']['EB_BusRB_MemContrib_Category1'] == "" and
                        data['EB']['EB_BusRB_MemContrib_Category2'] == "" and
                        data['EB']['EB_BusRB_MemContrib_Category3'] == "" and
                        data['EB']['EB_BusRB_MemContrib_Category4'] == "" and
                        data['EB']['EB_BusRB_EmpContrib_Category1'] == "" and
                        data['EB']['EB_BusRB_EmpContrib_Category2'] == "" and
                        data['EB']['EB_BusRB_EmpContrib_Category3'] == "" and
                        data['EB']['EB_BusRB_EmpContrib_Category4'] == "" and
                        data['EB']['EB_BusRB_NormRetire_AgeCategory1'] == "" and
                        data['EB']['EB_BusRB_NormRetire_AgeCategory2'] == "" and
                        data['EB']['EB_BusRB_NormRetire_AgeCategory3'] == "" and
                        data['EB']['EB_BusRB_NormRetire_AgeCategory4'] == "" and
                        data['EB']['EB_BusRB_FlexibleGroupLife'] == "" and
                        data['EB']['EB_BusRB_Approved'] == 0 and
                        data['EB']['EB_BusRB_ApprovedCategory1'] == "" and
                        data['EB']['EB_BusRB_ApprovedCategory2'] == "" and
                        data['EB']['EB_BusRB_ApprovedCategory3'] == "" and
                        data['EB']['EB_BusRB_ApprovedCategory4'] == "" and
                        data['EB']['EB_BusRB_UnApproved'] == 0 and
                        data['EB']['EB_BusRB_UnApprovedCategory1'] == "" and
                        data['EB']['EB_BusRB_UnApprovedCategory2'] == "" and
                        data['EB']['EB_BusRB_UnApprovedCategory3'] == "" and
                        data['EB']['EB_BusRB_UnApprovedCategory4'] == "" and
                        data['EB']['EB_BusinessRiskFundTakeOver'] == 0 and
                        data['EB']['EB_BusRB_SpouseLC_Category1'] == "" and
                        data['EB']['EB_BusRB_SpouseLC_Category2'] == "" and
                        data['EB']['EB_BusRB_SpouseLC_Category3'] == "" and
                        data['EB']['EB_BusRB_SpouseLC_Category4'] == "" and
                        data['EB']['EB_BusRB_SpouseLC_Notes'] == "" and
                        data['EB']['EB_BusRB_TrauBenSa_Category1'] == "" and
                        data['EB']['EB_BusRB_TrauBenSa_Category2'] == "" and
                        data['EB']['EB_BusRB_TrauBenSa_Category3'] == "" and
                        data['EB']['EB_BusRB_TrauBenSa_Category4'] == "" and
                        data['EB']['EB_BusRB_FB_CoverCategory1'] == "" and
                        data['EB']['EB_BusRB_FB_CoverCategory2'] == "" and
                        data['EB']['EB_BusRB_FB_CoverCategory3'] == "" and
                        data['EB']['EB_BusRB_FB_CoverCategory4'] == "" and
                        data['EB']['EB_BusRB_CapDisBen_Approved'] == 0 and
                        data['EB']['EB_BusRB_CapDisBen_ApprovedCategory1'] == "" and
                        data['EB']['EB_BusRB_CapDisBen_ApprovedCategory2'] == "" and
                        data['EB']['EB_BusRB_CapDisBen_ApprovedCategory3'] == "" and
                        data['EB']['EB_BusRB_CapDisBen_ApprovedCategory4'] == "" and
                        data['EB']['EB_BusRB_CapDisBen_UnApproved'] == 0 and
                        data['EB']['EB_BusRB_CapDisBen_UnApprovedCategory1'] == "" and
                        data['EB']['EB_BusRB_CapDisBen_UnApprovedCategory2'] == "" and
                        data['EB']['EB_BusRB_CapDisBen_UnApprovedCategory3'] == "" and
                        data['EB']['EB_BusRB_CapDisBen_UnApprovedCategory4'] == "" and
                        data['EB']['EB_BusRB_DiIBenWaitPer_Category1'] == 0 and
                        data['EB']['EB_BusRB_DiIBenWaitPer_Category2'] == 0 and
                        data['EB']['EB_BusRB_DiIBenWaitPer_Category3'] == 0 and
                        data['EB']['EB_BusRB_DiIBenWaitPer_Category4'] == 0 and
                        data['EB']['EB_BusRB_ConvOp'] == "" and
                        data['EB']['EB_BusRB_GrowthRates'] == "" and
                        data['EB']['EB_BusRB_DisabilityBenefitsNotes'] == "" and
                        data['EB']['EB_BusRB_AccidentBenefit'] == 0 and
                        data['EB']['EB_BusRB_AccidentBenefitCategory1'] == "" and
                        data['EB']['EB_BusRB_AccidentBenefitCategory2'] == "" and
                        data['EB']['EB_BusRB_AccidentBenefitCategory3'] == "" and
                        data['EB']['EB_BusRB_AccidentBenefitCategory4'] == "" and
                        data['EB']['EB_BusRB_AccidentBenefitReason'] == "" and
                        data['EB']['EB_BusRB_DiC_Reason'] == "" and
                        data['EB']['EB_BusRB_DrC_Reason'] == "" and
                        data['EB']['EB_BusRB_DrC_Summary'] == "" and
                        data['EB']['EB_BusRecom_ProductAdmin'] == "" and
                        data['EB']['EB_BusRecom_ProductName'] == "" and
                        data['EB']['EB_BusRecom_FundType'] == "" and
                        data['EB']['EB_BusRecom_RecommendationFundType'] == "" and
                        data['EB']['EB_BusRecom_Portfolio'] == 0 and
                        data['EB']['EB_BusRecom_ClientAccepted'] == 0 and
                        data['EB']['EB_BusRecom_ClientRisks'] == "" and
                        data['EB']['EB_BusFReplace_Name'] == "" and
                        data['EB']['EB_BusFReplace_RegNo'] == "" and
                        data['EB']['EB_BusFReplace_Type'] == "" and
                        data['EB']['EB_BusFReplace_Detail'] == 0 and
                        data['EB']['EB_BusFReplace_FeeChargesReplaced'] == "" and
                        data['EB']['EB_BusFReplace_FeeChargesExisting'] == "" and
                        data['EB']['EB_BusFReplace_TnC_Replaced'] == "" and
                        data['EB']['EB_BusFReplace_TnC_Existing'] == "" and
                        data['EB']['EB_BusFReplace_HealthChangesReplaced'] == "" and
                        data['EB']['EB_BusFReplace_HealthChangesExisting'] == "" and
                        data['EB']['EB_BusFReplace_TaxImplicationsReplaced'] == "" and
                        data['EB']['EB_BusFReplace_TaxImplicationsExisting'] == "" and
                        data['EB']['EB_BusFReplace_MaterialDifferencesReplaced'] == "" and
                        data['EB']['EB_BusFReplace_MaterialDifferencesExisting'] == "" and
                        data['EB']['EB_BusFReplace_PenaltiesReplaced'] == "" and
                        data['EB']['EB_BusFReplace_PenaltiesExisting'] == "" and
                        data['EB']['EB_BusFReplace_RealisedReplaced'] == "" and
                        data['EB']['EB_BusFReplace_RealisedExisting'] == "" and
                        data['EB']['EB_BusFReplace_EligGr_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_EligGr_Existing'] == "" and
                        data['EB']['EB_BusFReplace_MemContrib_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_MemContrib_Existing'] == "" and
                        data['EB']['EB_BusFReplace_EmpContrib_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_EmpContrib_Existing'] == "" and
                        data['EB']['EB_BusFReplace_EmpContrib_PercentageProposed'] == "" and
                        data['EB']['EB_BusFReplace_EmpContrib_PercentageExisting'] == "" and
                        data['EB']['EB_BusFReplace_BenPayDis_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_BenPayDis_Existing'] == "" and
                        data['EB']['EB_BusFReplace_BenPayD_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_BenPayD_Existing'] == "" and
                        data['EB']['EB_BusFReplace_BenPayW_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_BenPayW_Existing'] == "" and
                        data['EB']['EB_BusFReplace_BenPayRe_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_BenPayRe_Existing'] == "" and
                        data['EB']['EB_BusFReplace_NormRetire_AgeProposed'] == "" and
                        data['EB']['EB_BusFReplace_NormRetire_AgeExisting'] == "" and
                        data['EB']['EB_BusFReplace_ConvOp_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_ConvOp_Existing'] == "" and
                        data['EB']['EB_BusFReplace_HouseL_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_HouseL_Existing'] == "" and
                        data['EB']['EB_BusFReplace_AdminC_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_AdminC_Existing'] == "" and
                        data['EB']['EB_BusFReplace_InvestFee_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_InvestFee_Existing'] == "" and
                        data['EB']['EB_BusFReplace_CoR_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_CoR_Existing'] == "" and
                        data['EB']['EB_BusFReplace_BenA_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_BenA_Existing'] == "" and
                        data['EB']['EB_BusFReplace_InvestCh_Proposed'] == "" and
                        data['EB']['EB_BusFReplace_InvestCh_Existing'] == "" 
                    ):
                        data['EB_status'] = False
                    else:
                        data['EB_status'] = True
                        data['EB']['EB_ClientDate'] = datetimeparser.parse(data['EB']['EB_ClientDate']).strftime('%d %b %Y') if data['EB']['EB_ClientDate'] != "" else "N.A."
                        eb_cnr = ["", "Retirement Benefits", "Type of fund/scheme", "Truama Benefits", "Funeral Benefits", "Accidental Benefits", "Group Life Cover", "Lump Sum Disability Cover", "Spouse Life Cover", "Disability Income Cover", ]     
                        if EB_Cover.objects.filter(formId = pk).exists():
                            data['EB']['Cover_Data'] = EB_Cover.objects.filter(formId = pk).values()
                            for row in data['EB']['Cover_Data']:
                                row['BusB_CoverType'] = eb_cnr[int(row['BusB_CoverType'])]
                        waitingPeriod = ['', '1', '3', '6', '12', '24']
                        benefit = ['', '% of group life cover', 'x annual salary']
                        data['EB']['EB_BusRB_DiIBenWaitPer_Category1'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category1'])] if data['EB']['EB_BusRB_DiIBenWaitPer_Category1'] != "" else waitingPeriod[0] 
                        data['EB']['EB_BusRB_DiIBenWaitPer_Category2'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category2'])] if data['EB']['EB_BusRB_DiIBenWaitPer_Category2'] != "" else waitingPeriod[0] 
                        data['EB']['EB_BusRB_DiIBenWaitPer_Category3'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category3'])] if data['EB']['EB_BusRB_DiIBenWaitPer_Category3'] != "" else waitingPeriod[0] 
                        data['EB']['EB_BusRB_DiIBenWaitPer_Category4'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category4'])] if data['EB']['EB_BusRB_DiIBenWaitPer_Category4'] != "" else waitingPeriod[0] 
                        data['EB']['EB_BusRB_AccidentBenefit'] = benefit[int(data['EB']['EB_BusRB_AccidentBenefit'])]
                else:
                    data['EB_status'] = False
                if Fiduciary.objects.filter(formId=pk).exists():
                    data['Fiduciary'] = Fiduciary.objects.filter(formId=pk, advisorId=data['advisorId_id']).values().first()
                    if (
                        data['Fiduciary']['fiduciaryWillInPlace'] == 0 and
                        data['Fiduciary']['fiduciaryWillUpdationDate'] == "" and
                        data['Fiduciary']['fiduciaryWillKeepingPlace'] == "" and
                        data['Fiduciary']['fiduciaryExecutorDetails'] == "" and
                        data['Fiduciary']['fiduciaryClientInstructions'] == "" and
                        data['Fiduciary']['fiduciaryConsequencesExplained'] == ""
                    ):
                        data['Fiduciary_status'] = False
                    else:
                        data['Fiduciary_status'] = True
                    data['Fiduciary']['fiduciaryWillUpdationDate'] = datetimeparser.parse(data['Fiduciary']['fiduciaryWillUpdationDate']).strftime('%d %b %Y')  if data['Fiduciary']['fiduciaryWillUpdationDate'] != "" else "N.A."
                else:
                    data['Fiduciary_status'] = False
                if Medical.objects.filter(formId=pk).exists():
                    data['MD'] = Medical.objects.filter(formId=pk, advisorId=data['advisorId_id']).values().first()
                    if (
                        data['MD']['MSA_ClientDate'] == "" and
                        data['MD']['MSA_Name'] == "" and
                        data['MD']['MSA_MaritalStatus'] == "" and
                        data['MD']['MSA_Gender'] == "" and
                        data['MD']['MSA_Occupation'] == "" and
                        data['MD']['MSA_Income'] == "" and
                        data['MD']['MSA_Subsidy'] == "" and
                        data['MD']['MSA_Dependant'] == "" and
                        data['MD']['MSA_Spouse'] == "" and
                        data['MD']['MSA_AdultDependant'] == "" and
                        data['MD']['MSA_ChronicM'] == "" and
                        data['MD']['MSA_ChronicS'] == "" and
                        data['MD']['MSA_ChronicAD'] == "" and
                        data['MD']['MSA_ChronicC'] == "" and
                        data['MD']['MSA_ChronicOC'] == "" and
                        data['MD']['MSA_PFromDate'] == "" and
                        data['MD']['MSA_PTODate'] == "" and
                        data['MD']['BackInfo'] == "" and        
                        data['MD']['SNA_Needs1'] == 1 and
                        data['MD']['SNA_Comments1'] == "" and
                        data['MD']['SNA_Needs2'] == 1 and
                        data['MD']['SNA_Comments2'] == "" and
                        data['MD']['SNA_Needs3'] == 1 and
                        data['MD']['SNA_Comments3'] == "" and
                        data['MD']['SNA_Needs4'] == 1 and
                        data['MD']['SNA_Comments4'] == "" and
                        data['MD']['SNA_Needs5'] == 1 and
                        data['MD']['SNA_Comments5'] == "" and
                        data['MD']['SNA_Needs6'] == 1 and
                        data['MD']['SNA_Comments6'] == "" and
                        data['MD']['SNA_Needs7'] == 1 and
                        data['MD']['SNA_Comments7'] == "" and
                        data['MD']['SNA_Needs8'] == 1 and
                        data['MD']['SNA_Comments8'] == "" and
                        data['MD']['SNA_Needs9'] == 1 and
                        data['MD']['SNA_Comments9'] == "" and
                        data['MD']['SNA_Other'] == "" and
                        data['MD']['SNA_Needs10'] == 1 and
                        data['MD']['SNA_Comments10'] == "" and        
                        data['MD']['CoMAB_Current1'] == "" and
                        data['MD']['CoMAB_Replaced1'] == "" and
                        data['MD']['CoMAB_Current2'] == "" and
                        data['MD']['CoMAB_Replaced2'] == "" and
                        data['MD']['CoMAB_Current3'] == "" and
                        data['MD']['CoMAB_Replaced3'] == "" and
                        data['MD']['CoMAB_Current4'] == "" and
                        data['MD']['CoMAB_Replaced4'] == "" and
                        data['MD']['CoMAB_Current5'] == "" and
                        data['MD']['CoMAB_Replaced5'] == "" and
                        data['MD']['CoMAB_Current6'] == "" and
                        data['MD']['CoMAB_Replaced6'] == "" and
                        data['MD']['CoMAB_Current7'] == "" and
                        data['MD']['CoMAB_Replaced7'] == "" and
                        data['MD']['CoMAB_Current8'] == "" and
                        data['MD']['CoMAB_Replaced8'] == "" and
                        data['MD']['CoMAB_Current9'] == "" and
                        data['MD']['CoMAB_Replaced9'] == "" and
                        data['MD']['CoMAB_Current10'] == "" and
                        data['MD']['CoMAB_Replaced10'] == "" and
                        data['MD']['CoMAB_Current11'] == "" and
                        data['MD']['CoMAB_Replaced11'] == "" and
                        data['MD']['CoMAB_Current12'] == "" and
                        data['MD']['CoMAB_Replaced12'] == "" and
                        data['MD']['SectionD_SnF'] == "" and
                        data['MD']['SectionE_PMB'] == "" and
                        data['MD']['SectionF_NotAccepted'] == "" and
                        data['MD']['SectionF_Reasons'] == "" and
                        data['MD']['SectionF_Consequences'] == 1 and
                        data['MD']['SectionF_Fee'] == "" and
                        data['MD']['SectionF_Comments'] == "" and
                        data['MD']['SectionF_Date'] == ""
                    ):
                        data['MD_status'] = False
                    else:
                        data['MD_status'] = True
                    data['MD']['MSA_ClientDate'] = datetimeparser.parse(data['MD']['MSA_ClientDate']).strftime('%d %b %Y') if data['MD']['MSA_ClientDate'] != "" else "N.A."
                    data['MD']['MSA_PFromDate'] = datetimeparser.parse(data['MD']['MSA_PFromDate']).strftime('%d %b %Y') if data['MD']['MSA_PFromDate'] != "" else "N.A."
                    data['MD']['MSA_PTODate'] = datetimeparser.parse(data['MD']['MSA_PTODate']).strftime('%d %b %Y') if data['MD']['MSA_PTODate'] != "" else "N.A."
                    data['MD']['SectionF_Date'] = datetimeparser.parse(data['MD']['SectionF_Date']).strftime('%d %b %Y') if data['MD']['SectionF_Date'] != "" else "N.A."
                else:
                    data['MD_status'] = False
                if GapCover.objects.filter(formId=pk).exists():
                    data['GP'] = GapCover.objects.filter(formId=pk, advisorId=data['advisorId_id']).values().first()
                    if (
                        data['GP']['GP_ClientMedicalAidName'] == "" and
                        data['GP']['GP_ClientInceptionDate'] == "" and
                        data['GP']['GP_Date'] == "" and        
                        data['GP']['GP_Benefits'] == "" and
                        data['GP']['GP_MedicalDependent'] == 1 and
                        data['GP']['GP_MemberName1'] == "" and
                        data['GP']['GP_MemberRelationship1'] == "" and
                        data['GP']['GP_MemberAidPlan1'] == "" and
                        data['GP']['GP_MemberName2'] == "" and
                        data['GP']['GP_MemberRelationship2'] == "" and
                        data['GP']['GP_MemberAidPlan2'] == "" and
                        data['GP']['GP_MemberName3'] == "" and
                        data['GP']['GP_MemberRelationship3'] == "" and
                        data['GP']['GP_MemberAidPlan3'] == "" and
                        data['GP']['GP_MemberName4'] == "" and
                        data['GP']['GP_MemberRelationship4'] == "" and
                        data['GP']['GP_MemberAidPlan4'] == "" and
                        data['GP']['GP_Provider'] == "" and
                        data['GP']['GP_Option'] == "" and
                        data['GP']['GP_Motivation'] == "" and
                        data['GP']['GP_TotalPremium'] == "" and
                        data['GP']['GP_BrokerFee'] == "" and
                        data['GP']['GP_Commission'] == "" and
                        data['GP']['GP_CP_Rate'] == "" and
                        data['GP']['GP_NP_Rate'] == "" and
                        data['GP']['GP_CP_Overall'] == "" and
                        data['GP']['GP_NP_Overall'] == "" and
                        data['GP']['GP_CP_CoPayment_B'] == "" and
                        data['GP']['GP_NP_CoPayment_B'] == "" and
                        data['GP']['GP_CP_SubLimit_B'] == "" and
                        data['GP']['GP_NP_SubLimit_B'] == "" and
                        data['GP']['GP_CP_Cancer_B'] == "" and
                        data['GP']['GP_NP_Cancer_B'] == "" and
                        data['GP']['GP_CP_CancerD_B'] == "" and
                        data['GP']['GP_NP_CancerD_B'] == "" and
                        data['GP']['GP_CP_Other_B'] == "" and
                        data['GP']['GP_NP_Other_B'] == "" and
                        data['GP']['GP_CP_CasualB'] == "" and
                        data['GP']['GP_NP_CasualB'] == "" and
                        data['GP']['GP_CP_TraumaB'] == "" and
                        data['GP']['GP_NP_TraumaB'] == "" and
                        data['GP']['GP_CP_PreW_B'] == "" and
                        data['GP']['GP_NP_PreW_B'] == "" and
                        data['GP']['GP_CP_Med_SW_B'] == "" and
                        data['GP']['GP_NP_Med_SW_B'] == "" and
                        data['GP']['GP_CP_Accidental_DC_B'] == "" and
                        data['GP']['GP_NP_Accidental_DC_B'] == "" and
                        data['GP']['GP_CP_GenWait_P'] == "" and
                        data['GP']['GP_NP_GenWait_P'] == "" and
                        data['GP']['GP_CP_PreExist_P'] == "" and
                        data['GP']['GP_NP_PreExist_P'] == "" and
                        data['GP']['GP_CP_Specific_P'] == "" and
                        data['GP']['GP_NP_Specific_P'] == "" and
                        data['GP']['GP_Exclusions'] == 1 and
                        data['GP']['GP_Other_Exclusions'] == "" and
                        data['GP']['GP_GeneralComments'] == "" and        
                        data['GP']['GP_FinanAdvisor_ProdRecomm'] == "" and
                        data['GP']['GP_FinanAdvisor_Reasons'] == "" and
                        data['GP']['GP_FinanAdvisor_Consequences'] == 1 and
                        data['GP']['GP_FinanAdvisor_FeeCommission'] == "" and
                        data['GP']['GP_FinanAdvisor_OtherComments'] == "" and
                        data['GP']['GP_FinanAdvisor_Date'] == ""
                    ):
                        data['GP_status'] = False
                    else:
                        data['GP_status'] = True
                        data['GP']['GP_ClientInceptionDate'] = datetimeparser.parse(data['GP']['GP_ClientInceptionDate']).strftime('%d %b %Y') if data['GP']['GP_ClientInceptionDate'] != "" else "N.A."
                        data['GP']['GP_Date'] = datetimeparser.parse(data['GP']['GP_Date']).strftime('%d %b %Y') if data['GP']['GP_Date'] != "" else "N.A."
                        data['GP']['GP_FinanAdvisor_Date'] = datetimeparser.parse(data['GP']['GP_FinanAdvisor_Date']).strftime('%d %b %Y') if data['GP']['GP_FinanAdvisor_Date'] != "" else "N.A."
                else:
                    data['GP_status'] = False
                
                if ShortTermInsuranceCommerical.objects.filter(formId=pk).exists():
                    data['STIC'] = ShortTermInsuranceCommerical.objects.filter(formId=pk, advisorId=data['advisorId_id']).values().first()
                    stic_status1 = False
                    stic_status2 = False
                    stic_status3 = False
                    stic_status4 = False
                    stic_status5 = False
                    stic_status6 = False
                    stic_status7 = False
                    stic_status8 = False
                    if (
                        data['STIC']['STIC_Quotation_Number'] == "" and
                        data['STIC']['STIC_Underwritten_By'] == "" and
                        data['STIC']['STIC_Branch_Name'] == "" and
                        data['STIC']['STIC_Branch_Number'] == "" and
                        data['STIC']['STIC_Inception_Date'] == "" and
                        data['STIC']['STIC_Renewal_Date'] == "" and
                        data['STIC']['STIC_Payment_Method_Annual'] == 0 and
                        data['STIC']['STIC_Payment_Method_Monthly'] == 0 and 
                        data['STIC']['STIC_Sasria_Annual'] == 0 and
                        data['STIC']['STIC_Sasria_Monthly'] == 0 and
                        data['STIC']['STIC_Business_Owner'] == "" and
                        data['STIC']['STIC_Company_Reg_Number'] == "" and
                        data['STIC']['STIC_Company_VAT_Number'] == "" and
                        data['STIC']['STIC_Postal_Address'] == "" and
                        data['STIC']['STIC_Risk_Address'] == "" and
                        data['STIC']['STIC_Contact_Person'] == "" and
                        data['STIC']['STIC_TelePhone_Number'] == "" and
                        data['STIC']['STIC_Fax_Number'] == "" and
                        data['STIC']['STIC_CellPhone_Number'] == "" and 
                        data['STIC']['STIC_Email'] == "" and
                        data['STIC']['STIC_Business_Description'] == "" and
                        data['STIC']['STIC_Lower_Premium'] == 0 and
                        data['STIC']['STIC_Higher_Premium'] == 0 and
                        data['STIC']['STIC_Applicable_Option'] == "" and
                        data['STIC']['STIC_General_Cancelled'] == 0 and
                        data['STIC']['STIC_General_Cancelled_Detail'] == "" and
                        data['STIC']['STIC_Replacement_Advise'] == 0 and
                        data['STIC']['STIC_Replacement_Purpose'] == "" and
                        data['STIC']['STIC_Replacement_Reason'] == "" and
                        data['STIC']['STIC_Replacement_Suppliers'] == "" and
                        data['STIC']['STIC_Fin_FnC_Existing'] == "" and
                        data['STIC']['STIC_Fin_FnC_Replacement'] == "" and
                        data['STIC']['STIC_Fin_STnC_Existing'] == "" and
                        data['STIC']['STIC_Fin_STnC_Replacement'] == "" and
                        data['STIC']['STIC_Fin_ImpOnPre_Existing'] == "" and
                        data['STIC']['STIC_Fin_ImpOnPre_Replacement'] == "" and
                        data['STIC']['STIC_Fin_Excesses_Existing'] == "" and
                        data['STIC']['STIC_Fin_Excesses_Replacement'] == "" and
                        data['STIC']['STIC_Fin_VABen_Existing'] == "" and
                        data['STIC']['STIC_Fin_VABen_Replacement'] == "" and
                        data['STIC']['STIC_Fin_AdvisorComm_Existing'] == "" and
                        data['STIC']['STIC_Fin_AdvisorComm_Replacement'] == "" and
                        data['STIC']['STIC_ProdComp_Existing_Company'] == "" and
                        data['STIC']['STIC_ProdComp_Replacement_Company'] == "" and
                        data['STIC']['STIC_ProdComp_Existing_Provider'] == "" and
                        data['STIC']['STIC_ProdComp_Replacement_Provider'] == "" and
                        data['STIC']['STIC_ProdComp_Existing_Product'] == "" and
                        data['STIC']['STIC_ProdComp_Replacement_Product'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended1'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted1'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount1'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium1'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess1'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium1'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess1'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended2'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted2'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount2'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium2'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess2'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium2'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess2'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended3'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted3'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount3'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium3'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess3'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium3'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess3'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended5'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted5'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount5'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium5'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess5'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium5'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess5'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended6'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted6'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount6'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium6'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess6'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium6'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess6'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended7'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted7'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount7'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium7'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess7'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium7'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess7'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended8'] == 0 
                    ) :
                        stic_status1 = True
                    else:
                        stic_status1 = False
                    if (
                        data['STIC']['STIC_ProdComp_Accepted8'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount8'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium8'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess8'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium8'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess8'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended9'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted9'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount9'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium9'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess9'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium9'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess9'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended10'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted10'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount10'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium10'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess10'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium10'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess10'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended11'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted11'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount11'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium11'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess11'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium11'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess11'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended12'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted12'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount12'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium12'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess12'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium12'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess12'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended13'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted13'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount13'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium13'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess13'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium13'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess13'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended14'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted14'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount14'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium14'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess14'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium14'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess14'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended15'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted15'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount15'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium15'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess15'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium15'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess15'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended16'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted16'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount16'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium16'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess16'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium16'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess16'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended17'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted17'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount17'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium17'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess17'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium17'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess17'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended18'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted18'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount18'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium18'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess18'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium18'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess18'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended19'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted19'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount19'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium19'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess19'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium19'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess19'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended20'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted20'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount20'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium20'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess20'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium20'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess20'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended21'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted21'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount21'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium21'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess21'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium21'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess21'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended22'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted22'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount22'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium22'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess22'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium22'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess22'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended23'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted23'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount23'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium23'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess23'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium23'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess23'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended24'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted24'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount24'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium24'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess24'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium24'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess24'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended25'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted25'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount25'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium25'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess25'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium25'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess25'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended26'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted26'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount26'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium26'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess26'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium26'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess26'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended27'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted27'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount27'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium27'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess27'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium27'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess27'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended28'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted28'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount28'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium28'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess28'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium28'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess28'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended29'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted29'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount29'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium29'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess29'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium29'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess29'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended30'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted30'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount30'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium30'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess30'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium30'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess30'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended31'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted31'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount31'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium31'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess31'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium31'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess31'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended32'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted32'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount32'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium32'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess32'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium32'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess32'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended33'] == 0 
                    ) :
                        stic_status2 = True
                    else:
                        stic_status2 = False
                    if (
                        data['STIC']['STIC_ProdComp_Accepted33'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount33'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium33'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess33'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium33'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess33'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended34'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted34'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount34'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium34'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess34'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium34'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess34'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended35'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted35'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount35'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium35'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess35'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium35'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess35'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended36'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted36'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount36'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium36'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess36'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium36'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess36'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended37'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted37'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount37'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium37'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess37'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium37'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess37'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended38'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted38'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount38'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium38'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess38'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium38'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess38'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended39'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted39'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount39'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium39'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess39'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium39'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess39'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended40'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted40'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount40'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium40'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess40'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium40'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess40'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended41'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted41'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount41'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium41'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess41'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium41'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess41'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended42'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted42'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount42'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium42'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess42'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium42'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess42'] == "" and
                        data['STIC']['STIC_ProdComp_Recommended43'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted43'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount43'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium43'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess43'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium43'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess43'] == "" and        
                        data['STIC']['STIC_ProdComp_Recommended44'] == 0 and
                        data['STIC']['STIC_ProdComp_Accepted44'] == 0 and
                        data['STIC']['STIC_ProdComp_CoverAmount44'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Premium44'] == "" and
                        data['STIC']['STIC_ProdComp_ExistP_Excess44'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Premium44'] == "" and
                        data['STIC']['STIC_ProdComp_RecommP_Excess44'] == "" and
                        data['STIC']['STIC_ProdComp_FeeNCharges'] == "" and
                        data['STIC']['STIC_ProdComp_Commission'] == "" and
                        data['STIC']['STIC_ProdComp_TotalPremium'] == "" 
                    ) :
                        stic_status3 = True
                    else:
                        stic_status3 = False
                    if (
                        data['STIC']['STIC_SecD_1'] == "" and
                        data['STIC']['STIC_SecD_2'] == "" and
                        data['STIC']['STIC_SecD_3'] == "" and
                        data['STIC']['STIC_SecD_4'] == 1 and
                        data['STIC']['STIC_SecD_5'] == "" and
                        data['STIC']['STIC_SecD_6'] == "" and
                        data['STIC']['STIC_SecD_7'] == "" and
                        data['STIC']['STIC_SecD_8'] == "" and
                        data['STIC']['STIC_SecD_9'] == "" and
                        data['STIC']['STIC_SecD_10'] == "" and
                        data['STIC']['STIC_SecD_11'] == "" and
                        data['STIC']['STIC_SecD_12'] == "" and
                        data['STIC']['STIC_SecD_13'] == "" and
                        data['STIC']['STIC_SecE_1'] == "" and
                        data['STIC']['STIC_SecE_2'] == "" and
                        data['STIC']['STIC_SecE_3'] == "" and
                        data['STIC']['STIC_SecG_1'] == "" and
                        data['STIC']['STIC_SecG_2'] == "" and
                        data['STIC']['STIC_SecG_3'] == "" 
                    ) :
                        stic_status4 = True
                    else:
                        stic_status4 = False
                    if stic_status1 == True and stic_status2 == True and stic_status3 == True and stic_status4 == True:
                        data['STIC_status'] = False
                    else:
                        data['STIC_status'] = True
                        data['STIC']['STIC_Inception_Date'] = datetimeparser.parse(data['STIC']['STIC_Inception_Date']).strftime('%d %b %Y') if data['STIC']['STIC_Inception_Date'] != "" else "N.A."
                        data['STIC']['STIC_Renewal_Date'] = datetimeparser.parse(data['STIC']['STIC_Renewal_Date']).strftime('%d %b %Y') if data['STIC']['STIC_Renewal_Date'] != "" else "N.A."
                        data['STIC']['STIC_SecG_3'] = datetimeparser.parse(data['STIC']['STIC_SecG_3']).strftime('%d/%m/%Y') if data['STIC']['STIC_SecG_3'] != "" else "N.A."
                        data['STIC']['STIC_SecD_11'] = datetimeparser.parse(data['STIC']['STIC_SecD_11']).strftime('%d %b %Y') if data['STIC']['STIC_SecD_11'] != "" else "N.A."
                        data['STIC']['STIC_SecD_13'] = datetimeparser.parse(data['STIC']['STIC_SecD_13']).strftime('%d/%m/%Y') if data['STIC']['STIC_SecD_13'] != "" else "N.A."
                        data['STIC']['STIC_Sec15_2_1'] = datetimeparser.parse(data['STIC']['STIC_Sec15_2_1']).strftime('%d/%m/%Y') if data['STIC']['STIC_Sec15_2_1'] != "" else "N.A."
                        if STIC_Loss.objects.filter(formId = pk).exists():
                            data['STIC']['Loss_Data'] = STIC_Loss.objects.filter(formId = pk).values()
                        if STIC_Sec_Fire.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_1_Data'] = STIC_Sec_Fire.objects.filter(formId=pk).values()
                        if STIC_Sec_2.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_2_Data'] = STIC_Sec_2.objects.filter(formId=pk).values()
                        if STIC_Sec_3.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_3_Data'] = STIC_Sec_3.objects.filter(formId=pk).values()
                        if STIC_Sec_4.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_4_Data'] = STIC_Sec_4.objects.filter(formId=pk).values()
                        if STIC_Sec_5.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_5_Data'] = STIC_Sec_5.objects.filter(formId=pk).values()
                        if STIC_Sec_6.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_6_Data'] = STIC_Sec_6.objects.filter(formId=pk).values()
                        if STIC_Sec_7.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_7_Data'] = STIC_Sec_7.objects.filter(formId=pk).values()
                        if STIC_Sec_8.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_8_Data'] = STIC_Sec_8.objects.filter(formId=pk).values()
                        if STIC_Sec_9.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_9_Data'] = STIC_Sec_9.objects.filter(formId=pk).values()
                        if STIC_Sec_10.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_10_Data'] = STIC_Sec_10.objects.filter(formId=pk).values()
                        if STIC_Sec_11.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_11_Data'] = STIC_Sec_11.objects.filter(formId=pk).values()
                        if STIC_Sec_12.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_12_Data'] = STIC_Sec_12.objects.filter(formId=pk).values()
                        if STIC_Sec_13.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_13_Data'] = STIC_Sec_13.objects.filter(formId=pk).values()
                        if STIC_Sec_14.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_14_Data'] = STIC_Sec_14.objects.filter(formId=pk).values()
                        if STIC_Sec_15.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_15_Data'] = STIC_Sec_15.objects.filter(formId=pk).values()
                        if STIC_Sec_16.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_16_Data'] = STIC_Sec_16.objects.filter(formId=pk).values()
                        if STIC_Sec_17.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_17_Data'] = STIC_Sec_17.objects.filter(formId=pk).values()
                        if STIC_Sec_18.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_18_Data'] = STIC_Sec_18.objects.filter(formId=pk).values()
                        if STIC_Sec_19.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_19_Data'] = STIC_Sec_19.objects.filter(formId=pk).values()
                        if STIC_Sec_20.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_20_Data'] = STIC_Sec_20.objects.filter(formId=pk).values()
                        if STIC_Sec_21.objects.filter(formId = pk).exists():
                            data['STIC']['STIC_Sec_21_Data'] = STIC_Sec_21.objects.filter(formId=pk).values()
                else:
                    data['STIC_status'] = False
                if ShortTermInsurancePersonal.objects.filter(formId=pk).exists():
                    data['STIP'] = ShortTermInsurancePersonal.objects.filter(formId=pk).values().first()
                    stip_status1 = False
                    stip_status2 = False
                    stip_status3 = False
                    stip_status4 = False
                    if (
                        data["STIP"]['STIP_Underwritten_By'] == "" and
                        data["STIP"]['STIP_Branch_Name'] == "" and
                        data["STIP"]['STIP_Branch_Number'] == "" and
                        data["STIP"]['STIP_Quotation_Number'] == "" and
                        data["STIP"]['STIP_Policy_Number'] == "" and
                        data["STIP"]['STIP_Inception_Date'] == "" and
                        data["STIP"]['STIP_Applicant_Surname'] == "" and
                        data["STIP"]['STIP_Applicant_Gender'] == 0 and
                        data["STIP"]['STIP_Applicant_Initials'] == "" and
                        data["STIP"]['STIP_Applicant_Title'] == "" and
                        data["STIP"]['STIP_Applicant_DateofBirth'] == "" and
                        data["STIP"]['STIP_Applicant_Email'] == "" and
                        data["STIP"]['STIP_Applicant_ContactNumber'] == "" and
                        data["STIP"]['STIP_General_Refused'] == 0 and
                        data["STIP"]['STIP_General_Risks'] == 0 and
                        data["STIP"]['STIP_General_LastDate'] == "" and
                        data["STIP"]['STIP_General_InsurerName'] == "" and
                        data["STIP"]['STIP_CnRI_Existing_Company'] == "" and
                        data["STIP"]['STIP_CnRI_Replacement_Company'] == "" and
                        data["STIP"]['STIP_CnRI_Existing_Provider'] == "" and
                        data["STIP"]['STIP_CnRI_Replacement_Provider'] == "" and
                        data["STIP"]['STIP_CnRI_Existing_Product'] == "" and
                        data["STIP"]['STIP_CnRI_Replacement_Product'] == "" and            
                        data["STIP"]['STIP_CnRI_1_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_1_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_1_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_1_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_1_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_1_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_1_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_2_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_2_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_2_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_2_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_2_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_2_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_2_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_3_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_3_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_3_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_3_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_3_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_3_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_3_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_4_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_4_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_4_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_4_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_4_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_4_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_4_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_4_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_4_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_4_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_4_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_4_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_4_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_4_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_5_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_5_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_5_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_5_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_5_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_5_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_5_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_6_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_6_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_6_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_6_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_6_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_6_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_6_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_7_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_7_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_7_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_7_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_7_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_7_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_7_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_8_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_8_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_8_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_8_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_8_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_8_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_8_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_9_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_9_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_9_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_9_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_9_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_9_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_9_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_10_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_10_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_10_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_10_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_10_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_10_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_10_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_11_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_11_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_11_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_11_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_11_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_11_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_11_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_12_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_12_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_12_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_12_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_12_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_12_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_12_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_13_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_13_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_13_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_13_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_13_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_13_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_13_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_14_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_14_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_14_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_14_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_14_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_14_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_14_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_15_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_15_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_15_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_15_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_15_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_15_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_15_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_16_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_16_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_16_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_16_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_16_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_16_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_16_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_17_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_17_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_17_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_17_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_17_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_17_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_17_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_18_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_18_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_18_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_18_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_18_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_18_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_18_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_19_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_19_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_19_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_19_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_19_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_19_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_19_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_20_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_20_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_20_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_20_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_20_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_20_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_20_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_21_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_21_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_21_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_21_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_21_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_21_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_21_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_22_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_22_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_22_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_22_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_22_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_22_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_22_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_23_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_23_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_23_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_23_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_23_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_23_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_23_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_24_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_24_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_24_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_24_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_24_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_24_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_24_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_25_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_25_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_25_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_25_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_25_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_25_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_25_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_26_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRI_26_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRI_26_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRI_26_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRI_26_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRI_26_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRI_26_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRI_27_Recomm'] == 1 and
                        data["STIP"]['STIP_CnRI_27_Accepted'] == 1 and
                        data["STIP"]['STIP_CnRI_27_CoverAmount'] == "" and
                        data["STIP"]['STIP_CnRI_27_Premium1'] == "" and
                        data["STIP"]['STIP_CnRI_27_Premium2'] == "" and
                        data["STIP"]['STIP_CnRI_27_Excess1'] == "" and
                        data["STIP"]['STIP_CnRI_27_Excess2'] == "" and
                        data["STIP"]['STIP_CnRI_FeeCharges'] == "" and
                        data["STIP"]['STIP_CnRI_Commission'] == "" and
                        data["STIP"]['STIP_CnRI_TotalPremium'] == "" 
                    ):
                        stip_status1 = True
                    else:
                        stip_status1 = False
                    if (
                        data["STIP"]['STIP_CnRen_Existing_Company'] == "" and
                        data["STIP"]['STIP_CnRen_Replacement_Company'] == "" and
                        data["STIP"]['STIP_CnRen_Existing_Provider'] == "" and
                        data["STIP"]['STIP_CnRen_Replacement_Provider'] == "" and
                        data["STIP"]['STIP_CnRen_Existing_Product'] == "" and
                        data["STIP"]['STIP_CnRen_Replacement_Product'] == "" and        
                        data["STIP"]['STIP_CnRen_1_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_1_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_1_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_1_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_1_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_1_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_1_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_2_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_2_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_2_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_2_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_2_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_2_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_2_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_3_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_3_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_3_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_3_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_3_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_3_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_3_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_4_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_4_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_4_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_4_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_4_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_4_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_4_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_4_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_4_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_4_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_4_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_4_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_4_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_4_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_5_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_5_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_5_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_5_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_5_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_5_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_5_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_6_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_6_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_6_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_6_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_6_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_6_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_6_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_7_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_7_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_7_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_7_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_7_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_7_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_7_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_8_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_8_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_8_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_8_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_8_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_8_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_8_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_9_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_9_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_9_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_9_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_9_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_9_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_9_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_10_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_10_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_10_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_10_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_10_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_10_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_10_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_11_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_11_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_11_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_11_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_11_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_11_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_11_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_12_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_12_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_12_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_12_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_12_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_12_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_12_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_13_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_13_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_13_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_13_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_13_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_13_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_13_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_14_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_14_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_14_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_14_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_14_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_14_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_14_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_15_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_15_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_15_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_15_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_15_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_15_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_15_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_16_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_16_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_16_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_16_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_16_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_16_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_16_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_17_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_17_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_17_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_17_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_17_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_17_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_17_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_18_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_18_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_18_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_18_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_18_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_18_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_18_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_19_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_19_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_19_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_19_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_19_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_19_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_19_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_20_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_20_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_20_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_20_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_20_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_20_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_20_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_21_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_21_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_21_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_21_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_21_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_21_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_21_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_22_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_22_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_22_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_22_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_22_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_22_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_22_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_23_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_23_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_23_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_23_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_23_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_23_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_23_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_24_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_24_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_24_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_24_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_24_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_24_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_24_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_25_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_25_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_25_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_25_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_25_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_25_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_25_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_26_Recomm'] == 1 and 
                        data["STIP"]['STIP_CnRen_26_Accepted'] == 1 and 
                        data["STIP"]['STIP_CnRen_26_CoverAmount'] == "" and 
                        data["STIP"]['STIP_CnRen_26_Premium1'] == "" and 
                        data["STIP"]['STIP_CnRen_26_Premium2'] == "" and 
                        data["STIP"]['STIP_CnRen_26_Excess1'] == "" and 
                        data["STIP"]['STIP_CnRen_26_Excess2'] == "" and         
                        data["STIP"]['STIP_CnRen_27_Recomm'] == 1 and
                        data["STIP"]['STIP_CnRen_27_Accepted'] == 1 and
                        data["STIP"]['STIP_CnRen_27_CoverAmount'] == "" and
                        data["STIP"]['STIP_CnRen_27_Premium1'] == "" and
                        data["STIP"]['STIP_CnRen_27_Premium2'] == "" and
                        data["STIP"]['STIP_CnRen_27_Excess1'] == "" and
                        data["STIP"]['STIP_CnRen_27_Excess2'] == "" and
                        data["STIP"]['STIP_CnRen_FeeCharges'] == "" and
                        data["STIP"]['STIP_CnRen_Commission'] == "" and
                        data["STIP"]['STIP_CnRen_TotalPremium'] == ""
                    ):
                        stip_status2 = True
                    else:
                        stip_status2 = False
                    if (
                        data["STIP"]['STIP_CnRI_AdviseGiven'] == 1 and
                        data["STIP"]['STIP_CnRI_ReplacePurpose'] == "" and
                        data["STIP"]['STIP_CnRI_ReplaceReason'] == "" and
                        data["STIP"]['STIP_CnRI_ReplaceSupplier'] == "" 
                    ):
                        stip_status3 = True
                    else:
                        stip_status3 = False
                    if (
                        data["STIP"]['STIP_ProductConsidered'] == "" and
                        data["STIP"]['STIP_ProductRecommended'] == "" and
                        data["STIP"]['STIP_ProductReasons'] == "" and
                        data["STIP"]['STIP_DbyI_IName'] == "" and
                        data["STIP"]['STIP_DbyI_Code'] == "" and
                        data["STIP"]['STIP_DbyI_Signature'] == "" and
                        data["STIP"]['STIP_DbyI_Date'] == ""
                    ):
                        stip_status4 = True
                    else:
                        stip_status4 = False
                    print("stip_status1",stip_status1,"stip_status2",stip_status2,"stip_status3",stip_status3,"stip_status4",stip_status4)
                    if stip_status1 == True and stip_status2 == True and stip_status3 == True and stip_status4 == True:
                        data['STIP_status'] = False
                    else:
                        data['STIP_status'] = True
                        data['STIP']['STIP_Inception_Date'] = datetimeparser.parse(data['STIP']['STIP_Inception_Date']).strftime('%d %b %Y') if data['STIP']['STIP_Inception_Date'] != "" else "N.A."
                        data['STIP']['STIP_Applicant_DateofBirth'] = datetimeparser.parse(data['STIP']['STIP_Applicant_DateofBirth']).strftime('%d %b %Y') if data['STIP']['STIP_Applicant_DateofBirth'] != "" else "N.A."
                        data['STIP']['STIP_Applicant_DateofBirth'] = datetimeparser.parse(data['STIP']['STIP_Applicant_DateofBirth']).strftime('%d %b %Y') if data['STIP']['STIP_General_LastDate'] != "" else "N.A."
                        parkOptions = ["", "Overnight Parking", "Locked Garage", "Carport", "Security Complex", "Behind Gates", "Others"]
                        coverTypes = ["", "Comprehensive (cover for comprehensive risks)", "Limited (Fire and Theft)", "Third Party (cover for claims of 3rd parties)", "Third Party - Theft excluded (cover for loss or damage except by theft)"] 
                        data['STIP']['STIP_Vehicle_ONParkingOptions'] = parkOptions[int(data['STIP']['STIP_Vehicle_ONParkingOptions'])]
                        data['STIP']['STIP_Vehicle_CoverType'] = coverTypes[int(data['STIP']['STIP_Vehicle_CoverType'])]
                        data['STIP']['STIP_Vehicle_DriverLicIssDate'] = datetimeparser.parse(data['STIP']['STIP_Vehicle_DriverLicIssDate']).strftime('%d %b %Y') if data['STIP']['STIP_Vehicle_DriverLicIssDate'] != "" else "N.A."
                        data['STIP']['STIP_MotorC_ONParkingOptions'] = parkOptions[int(data['STIP']['STIP_MotorC_ONParkingOptions'])]
                        data['STIP']['STIP_MotorC_CoverType'] = coverTypes[int(data['STIP']['STIP_MotorC_CoverType'])]
                        data['STIP']['STIP_MotorC_DriverLicIssDate'] = datetimeparser.parse(data['STIP']['STIP_MotorC_DriverLicIssDate']).strftime('%d %b %Y') if data['STIP']['STIP_MotorC_DriverLicIssDate'] != "" else "N.A."
                        data['STIP']['STIP_Trailer_ONParkingOptions'] = parkOptions[int(data['STIP']['STIP_Trailer_ONParkingOptions'])]
                        data['STIP']['STIP_DbyI_Date'] = datetimeparser.parse(data['STIP']['STIP_DbyI_Date']).strftime('%d/%m/%Y') if data['STIP']['STIP_DbyI_Date'] != "" else "N.A."
                        if STIP_Loss.objects.filter(formId = pk).exists():
                            data['STIP']['Loss_Data'] = STIP_Loss.objects.filter(formId = pk).values()
                        if STIP_Sec_HC.objects.filter(formId = pk).exists():
                            data['STIP']['STIP_Sec_HC_Data'] = STIP_Sec_HC.objects.filter(formId=pk).values()
                        if STIP_Sec_Build.objects.filter(formId = pk).exists():
                            data['STIP']['STIP_Sec_Build_Data'] = STIP_Sec_Build.objects.filter(formId=pk).values()
                        if STIP_Sec_AddProp.objects.filter(formId = pk).exists():
                            data['STIP']['STIP_Sec_AddProp_Data'] = STIP_Sec_AddProp.objects.filter(formId=pk).values()
                        if STIP_Sec_Vehicle.objects.filter(formId = pk).exists():
                            data['STIP']['STIP_Sec_Vehicle_Data'] = STIP_Sec_Vehicle.objects.filter(formId=pk).values()
                        if STIP_Sec_Trailer.objects.filter(formId = pk).exists():
                            data['STIP']['STIP_Sec_Trailer_Data'] = STIP_Sec_Trailer.objects.filter(formId=pk).values()
                        if STIP_Sec_PersonalLL.objects.filter(formId = pk).exists():
                            data['STIP']['STIP_Sec_PersonalLL_Data'] = STIP_Sec_PersonalLL.objects.filter(formId=pk).values()
                        if STIP_Sec_LegalA.objects.filter(formId = pk).exists():
                            data['STIP']['STIP_Sec_LegalA_Data'] = STIP_Sec_LegalA.objects.filter(formId=pk).values()
                else:
                    data['STIP_status'] = False
            data['advisor'] = UserAccount.objects.filter(id=data['advisorId_id']).values('first_name', 'last_name', 'email', 'is_superuser').first()
            data['company'] = ""
            if 'sfp' in data['advisor']['email'] or 'succession' in data['advisor']['email']:
                data['company'] = "SFP"
            if 'fs4p' in data['advisor']['email']:
                data['company'] = "FS4P"
            if 'sanlam' in data['advisor']['email']:
                data['company'] = "AFP"
            # print(data['STIP']['STIP_Applicant_Gender'])
            template = get_template('pdfForm.html')
            cmd_options = {
            'page-size': 'A4',
            'zoom': '0.8',
            'viewport-size' : '1920x1080',
            'footer-center' : '[page]/[topage]',
            'dpi' : '600'
            }
            if (
                not data['dra_status'] and 
                not data['roa_status'] and 
                not data['rp_status'] and 
                not data['ip_status'] and 
                not data['BA_Risk_status'] and 
                not data['BA_Investment_status'] and 
                not data['EB_status'] and 
                not data['STIC_status'] and 
                not data['STIP_status'] and 
                not data['Fiduciary_status'] and 
                not data['MD_status'] and 
                not data['GP_status']
            ):
                return Response({"message": "No Data found, please fill the one of the component before printing", "status": 404}, 404)
            data['logo'] = 'static/images/logo.png'
            response =  PDFTemplateResponse(request=request, template=template,context=data, cmd_options=cmd_options)
            if request.data['dra_status']:
                # fileName = "Sample.pdf"
                fileName = "Dynamic Risk Assessment for %s Filled by %s %s" %(data['client_name'], data['advisor']['first_name'] + " " + data['advisor']['last_name'] ,uuid.uuid4())
            else:
                # fileName = "Sample.pdf"
                fileName = "Client Record of Advice for %s Filled by %s %s" %(data['client_name'], data['advisor']['first_name'] + " " + data['advisor']['last_name'] ,uuid.uuid4())
            with open("static/pdf/%s.pdf"%(fileName), "wb") as f:
                f.write(response.rendered_content)
            return Response({"file":"static/pdf/%s.pdf"%(fileName)})
        else:
            return Response({'message': "Does not exist"}, 200)