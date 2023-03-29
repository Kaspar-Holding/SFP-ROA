from rest_framework.response import Response
from rest_framework.decorators import api_view
from django_pdfkit import PDFView
from django.core.files.base import ContentFile
import uuid
from data.models import RiskFactors, Form, UserAccount, AssuranceRisk, RiskPlanning, GapCover, Medical, Fiduciary, InvestmentPlanning, EmployeeBenefits, ShortTermInsuranceCommerical, ShortTermInsurancePersonal, AssuranceInvestment
from django.shortcuts import render, redirect, get_object_or_404
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

@api_view(['GET'])
def wkhtmltopdfapi(request):
    data = RiskFactors.objects.filter(id=26).values().first()
    data['RF_Date'] = data['RF_Date'].strftime("%d %B %Y")
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
        or data['RF_CountryOfBirth'] == "226" or data['RF_CountryOfBirth'] == "230" or data['RF_CountryOfBirth'] == "232" or data['RF_CountryOfBirth'] == "233" or data['RF_CountryOfBirth'] == "236" or data['RF_CountryOfBirth'] == "237" or data['RF_CountryOfBirth'] == "238" or data['RF_CountryOfBirth'] == "239"
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
        or data['RF_CountryOfBirth'] == "144" or data['RF_CountryOfBirth'] == "147" or data['RF_CountryOfBirth'] == "156" or data['RF_CountryOfBirth'] == "157" or data['RF_CountryOfBirth'] == "169" or data['RF_CountryOfBirth'] == "171" or data['RF_CountryOfBirth'] == "178" or data['RF_CountryOfBirth'] == "179" or data['RF_CountryOfBirth'] == "180" or data['RF_CountryOfBirth'] == "181" or data['RF_CountryOfBirth'] == "182" or data['RF_CountryOfBirth'] == "183"
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

    CountryList =['','Afghanistan','Albania','Algeria','American Samoa','Andora','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armania','Aruba','Auckland Islands','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia','Botswana','Bouvet Islands','Brazil','British Indian Ocean Teritory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos','Colombia','Comoros','Congo Democratic','Congo Republic','Cook Islands','Costa Rica','Ivory Cost','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','EI Salvador','Equatorial Guinea','Eritrea','Estonia','eSwaitini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibralter','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Herd Island','Holy See','Honduras','Hongkong','Hungary','Iceland','India','Indonessia','Iran','Iraq','Ireland','Isle of man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Korea North','Korea South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronessia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Mynamar','Namabia','Nauru','Nepal','Netherlands','New Celedonia','Newzealand','Niger','Nigeria','Norfolk Island','Nothern Mariana Islands','Norway','Nuie','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcaim','Poland','Portugal','Puerto Rico','Qatar','Reunion','Roman','Russia','Rwanda','Saint Barthelemy','Saint Helena','Saint Kitts','Saint Lucia','Saint Martin','Saint Pierre','Saint Vincent','Samoa','Saint Marino','Sao Tome','Saudia Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Martin','Slovekia','Slovenia','Solomon Islands','Somalia','South Africa','South Georgia','South Sudan','Spain','Srilanka','Sudan','Suriname','Svalbard','Sweden','Switxerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tokelau','Tonga','Trinidad','Tunisia','Turkey','Turkmenistan','Turks','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States Minor','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Virgin Islands(British)','Virgin Islands(US)','Wallis and Fatuna','West Bank','Western Sahara','Yemen','Zambia','Zimbabwe']
    Industry = ['','Administrative and support services','Adult Entertainment','Agriculture,forestry and fishing','Arts,Entertainment and Recreation','Broadcasting and Entertainment','Chemical engineering/manufacturing',
    'Community and social activities','Construction and civil engineering','Consumer goods:wholesale and retail','Education','Electricity,solar,water,gas','Entrepreneurship','Estate living and family trusts','Extractive services,mining and quarrying','Financial and insurance','Gambling','Government services,armed and state owned enterprise','Health care and medical','Information technology,communication and telecom','Legal practitioner','Manufacturing','Motor wholesale,retail trade and repair','Non profit organization','Non government organization(NGO)','other','PFMA schedule 1','PFMA schedule 2','PFMA schedule 3A','Professional sport','Real estate and property services','Shell Banking','Transport storage,courier and freight','Travel,tourism and accomodation','Virtual currencies']
    NationalityList =['','Afghanistan','Albania','Algeria','American Samoa','Andora','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armania','Aruba','Auckland Islands','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia','Botswana','Bouvet Islands','Brazil','British Indian Ocean Teritory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos','Colombia','Comoros','Congo Democratic','Congo Republic','Cook Islands','Costa Rica','Ivory Cost','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','EI Salvador','Equatorial Guinea','Eritrea','Estonia','eSwaitini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibralter','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Herd Island','Holy See','Honduras','Hongkong','Hungary','Iceland','India','Indonessia','Iran','Iraq','Ireland','Isle of man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Korea North','Korea South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronessia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Mynamar','Namabia','Nauru','Nepal','Netherlands','New Celedonia','Newzealand','Niger','Nigeria','Norfolk Island','Nothern Mariana Islands','Norway','Nuie','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcaim','Poland','Portugal','Puerto Rico','Qatar','Reunion','Roman','Russia','Rwanda','Saint Barthelemy','Saint Helena','Saint Kitts','Saint Lucia','Saint Martin','Saint Pierre','Saint Vincent','Samoa','Saint Marino','Sao Tome','Saudia Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Martin','Slovekia','Slovenia','Solomon Islands','Somalia','South Africam','South Georgia','South Sudan','Spain','Srilanka','Sudan','Suriname','Svalbard','Sweden','Switxerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor Leste','Togo','Tokelau','Tonga','Trinidad','Tunisia','Turkey','Turkmenistan','Turks','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States Minor','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Virgin Islands(British)','Virgin Islands(US)','Wallis and Fatuna','West Bank','Western Sahara','Yemen','Zambia','Zimbabwe']
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
    data['RF_Nationality'] = CountryList[data['RF_Nationality_id']]
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

    if(int(data['RF_Transaction_Method']) == 1 or int(data['RF_Transaction_Method']) == 4 or int(data['RF_Transaction_Method']) == 5 or int(data['RF_Transaction_Method']) == 7 or int(data['RF_Transaction_Method']) == 8):
        val13=4
    if(int(data['RF_Transaction_Method']) == 2 or int(data['RF_Transaction_Method']) == 11):
        val13=6
    if(int(data['RF_Transaction_Method']) == 3 or int(data['RF_Transaction_Method']) == 6 or int(data['RF_Transaction_Method']) == 9 or int(data['RF_Transaction_Method']) == 10 or int(data['RF_Transaction_Method']) == 12):
        val13=2
    if(data['RF_Transaction_Reason'] == 1):
        val14=2  
    if(data['RF_Transaction_Reason']!=0):
        val14=1
    if(int(data['RF_High_Transaction_Reason']) == 1):
        val15=6
    if(int(data['RF_High_Transaction_Reason']) == 2):
        val15=2
    if(int(data['RF_Transaction_Frequency']) == 1 or int(data['RF_Transaction_Frequency']) == 2 or int(data['RF_Transaction_Frequency']) == 3):
        val16=3
    if(int(data['RF_Transaction_Frequency']) == 4):
        val16=1
    if(int(data['RF_Transaction_Geography']) == 1):
        val17=2
    if(int(data['RF_Transaction_Geography']) == 2 or int(data['RF_Transaction_Geography']) == 3):
        val17=1
    if(int(data['RF_Transaction_Geography']) == 1):
        val18=3
    if(int(data['RF_Transaction_Geography']) == 2 or int(data['RF_Transaction_Geography']) == 5 or int(data['RF_Transaction_Geography']) == 6):
        val18=2
    if(int(data['RF_Transaction_Geography']) == 3 or int(data['RF_Transaction_Geography']) == 4):
        val18=1
    if(int(data['RF_Linked_Party_Acting']) == 1 or int(data['RF_Linked_Party_Acting']) == 2):
        val19=1
    if(int(data['RF_Linked_Party_Acting']) == 3):
        val19=3
    if(int(data['RF_Linked_Party_Paying']) == 1 ):
        val20=0
    if(int(data['RF_Linked_Party_Paying']) == 2 or int(data['RF_Linked_Party_Paying']) == 3):
        val20=3
    val4n = 0
    
    data['RF_Transaction_Flow_id'] = int(data['RF_Transaction_Flow'])
    data['RF_Transaction_Flow'] = RF_Transaction_Flow[int(data['RF_Transaction_Flow_id'])]
    data['RF_Transaction_Method_id'] = int(data['RF_Transaction_Method'])
    data['RF_Transaction_Method'] = Transaction_Method[data['RF_Transaction_Method_id']]
    data['RF_Transaction_Reason_id'] = int(data['RF_Transaction_Reason'])
    data['RF_Transaction_Reason'] = RF_Transaction_Reason[data['RF_Transaction_Reason_id']]
    data['RF_High_Transaction_Reason_id'] = int(data['RF_High_Transaction_Reason']) if data['RF_High_Transaction_Reason'] != '' else 0
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
    data['RF_Adjust_Risk1_id'] = int(data['RF_Adjust_Risk1']) if data['RF_Adjust_Risk1'] != '' else 0
    data['RF_Adjust_Risk1'] = RF_Adjust_Risk1[data['RF_Adjust_Risk1_id']]
    data['RF_Client_Relationship'] = RF_Client_Relationship[int(data['RF_Client_Relationship'])]
    data['RF_Linked_Party_id'] = int(data['RF_Linked_Party']) if data['RF_Linked_Party'] != '' else 0
    data['RF_Linked_Party'] = RF_Client_Match[data['RF_Linked_Party_id']]
    data['RF_RCA_id'] = int(data['RF_RCA']) if data['RF_RCA'] != '' else 0
    data['RF_RCA'] = RF_RCA[data['RF_RCA_id']]
    data['RF_Birth_Country_id'] = int(data['RF_Birth_Country']) if data['RF_Birth_Country'] != '' else 0
    data['RF_Birth_Country'] = CountryList[data['RF_Birth_Country_id']]
    data['RF_Residence_Country_id'] = int(data['RF_Residence_Country']) if data['RF_Residence_Country'] != '' else 0
    data['RF_Residence_Country'] = CountryList[data['RF_Residence_Country_id']]
    data['RF_Nationality1_id'] = int(data['RF_Nationality1']) if data['RF_Nationality1'] != '' else 0
    data['RF_Nationality1'] = CountryList[data['RF_Nationality1_id']]
    data['RF_CountryOfRegistration_id'] = int(data['RF_CountryOfRegistration']) if data['RF_CountryOfRegistration'] != '' else 0
    data['RF_CountryOfRegistration'] = CountryList[data['RF_CountryOfRegistration_id']]
    data['RF_CountryOfOperation_id'] = int(data['RF_CountryOfOperation']) if data['RF_CountryOfOperation'] != '' else 0
    data['RF_CountryOfOperation'] = CountryList[data['RF_CountryOfOperation_id']]
    data['RF_Type_Legal_Entity_id'] = int(data['RF_Type_Legal_Entity']) if data['RF_Type_Legal_Entity'] != '' else 0
    data['RF_Type_Legal_Entity'] = RF_Type_Legal_Entity[data['RF_Type_Legal_Entity_id']]
    data['RF_ClientType'] = int(data['RF_ClientType'])
    
    if(int(data['RF_Transaction_Flow_id']) == 1 or int(data['RF_Transaction_Flow_id']) == 2):
        val4n=val13+val14+val15+val16+val17+val18+val19+val20
    data['val4n'] = val4n

    data['RoA'] = Form.objects.filter(formId = data['id']).values().first()
    if (
        data['RoA']['clientEmail'] != "" and 
        data['RoA']['clientAddress'] != "" and 
        data['RoA']['clientPhoneNumber'] != "" and 
        data['RoA']['clientDateOfBirth'] != datetime.today().strftime('%Y-%m-%d') and 
        data['RoA']['clientLetterOfIntroduction'] != "1" and 
        data['RoA']['clientLetterOfIntroductionReason'] != "" and 
        data['RoA']['clientLetterOfIntroductionAccess'] != "1" and 
        data['RoA']['clientLetterOfIntroductionAccessReason'] != "" and 
        data['RoA']['clientFica'] != "1" and 
        data['RoA']['clientFicaReason'] != "" and 
        data['RoA']['clientBackgroundInfo'] != ""
    ):
        data['roa_status'] = True
    else:
        data['roa_status'] = False
    data['RoA']['clientAdvisor'] = UserAccount.objects.filter(id=data['RoA']['advisorId']).values('name').first()['name']
    data['RoA']['clientDateOfBirth'] = (data['RoA']['clientDateOfBirth']).strftime('%d %b %Y')
    data['RP'] = RiskPlanning.objects.filter(formId = data['id']).values().first()
    # print(data['RP']['RP_DC_LumpSumExistingProvisions'] != "")
    if (
        data['RP']['RP_DC_LumpSumTotalNeed'] != "" and 
        data['RP']['RP_DC_LumpSumExistingProvisions'] != "" and 
        data['RP']['RP_DC_LumpSumExistingShortfallSurplus'] != "" and 
        data['RP']['RP_DC_LumpSumInvestments'] != "" and         
        data['RP']['RP_DC_IncomeTotalNeed'] != "" and 
        data['RP']['RP_DC_IncomeExistingProvisions'] != "" and 
        data['RP']['RP_DC_IncomeExistingShortfallSurplus'] != "" and 
        data['RP']['RP_DC_IncomeInvestments'] != "" and         
        data['RP']['RP_DC_FB_TotalNeed'] != "" and 
        data['RP']['RP_DC_FB_ExistingProvisions'] != "" and 
        data['RP']['RP_DC_FB_ExistingShortfallSurplus'] != "" and 
        data['RP']['RP_DC_FB_Investments'] != "" and     
        data['RP']['RP_DC_Other'] != "" and 
        data['RP']['RP_DC_OtherTotalNeed'] != "" and 
        data['RP']['RP_DC_OtherExistingProvisions'] != "" and 
        data['RP']['RP_DC_OtherExistingShortfallSurplus'] != "" and 
        data['RP']['RP_DC_OtherInvestments'] != "" and         
        data['RP']['RP_DC_Comments'] != "" and     
        data['RP']['RP_DiC_LumpSumTotalNeed'] != "" and 
        data['RP']['RP_DiC_LumpSumExistingProvisions'] != "" and 
        data['RP']['RP_DiC_LumpSumExistingShortfallSurplus'] != "" and 
        data['RP']['RP_DiC_LumpSumInvestments'] != "" and         
        data['RP']['RP_DiC_PI_TotalNeed'] != "" and 
        data['RP']['RP_DiC_PI_ExistingProvisions'] != "" and 
        data['RP']['RP_DiC_PI_ExistingShortfallSurplus'] != "" and 
        data['RP']['RP_DiC_PI_Investments'] != "" and         
        data['RP']['RP_DiC_TI_TotalNeed'] != "" and 
        data['RP']['RP_DiC_TI_ExistingProvisions'] != "" and 
        data['RP']['RP_DiC_TI_ExistingShortfallSurplus'] != "" and 
        data['RP']['RP_DiC_TI_Investments'] != "" and             
        data['RP']['RP_DiC_SiB_TotalNeed'] != "" and 
        data['RP']['RP_DiC_SiB_ExistingProvisions'] != "" and 
        data['RP']['RP_DiC_SiB_ExistingShortfallSurplus'] != "" and 
        data['RP']['RP_DiC_SiB_Investments'] != "" and       
        data['RP']['RP_DiC_Other1'] != "" and 
        data['RP']['RP_DiC_OtherTotalNeed1'] != "" and 
        data['RP']['RP_DiC_OtherExistingProvisions1'] != "" and 
        data['RP']['RP_DiC_OtherExistingShortfallSurplus1'] != "" and 
        data['RP']['RP_DiC_OtherInvestments1'] != "" and          
        data['RP']['RP_DiC_Other2'] != "" and 
        data['RP']['RP_DiC_OtherTotalNeed2'] != "" and 
        data['RP']['RP_DiC_OtherExistingProvisions2'] != "" and 
        data['RP']['RP_DiC_OtherExistingShortfallSurplus2'] != "" and 
        data['RP']['RP_DiC_OtherInvestments2'] != "" and      
        data['RP']['RP_DiC_Comments'] != "" and         
        data['RP']['RP_DrC_LumpSumTotalNeed'] != "" and 
        data['RP']['RP_DrC_LumpSumExistingProvisions'] != "" and 
        data['RP']['RP_DrC_LumpSumExistingShortfallSurplus'] != "" and 
        data['RP']['RP_DrC_LumpSumInvestments'] != "" and         
        data['RP']['RP_DrC_IncomeTotalNeed'] != "" and 
        data['RP']['RP_DrC_IncomeExistingProvisions'] != "" and 
        data['RP']['RP_DrC_IncomeExistingShortfallSurplus'] != "" and 
        data['RP']['RP_DrC_IncomeInvestments'] != "" and         
        data['RP']['RP_DrC_Other1'] != "" and 
        data['RP']['RP_DrC_OtherTotalNeed1'] != "" and 
        data['RP']['RP_DrC_OtherExistingProvisions1'] != "" and 
        data['RP']['RP_DrC_OtherExistingShortfallSurplus1'] != "" and 
        data['RP']['RP_DrC_OtherInvestments1'] != "" and          
        data['RP']['RP_DrC_Other2'] != "" and 
        data['RP']['RP_DrC_OtherTotalNeed2'] != "" and 
        data['RP']['RP_DrC_OtherExistingProvisions2'] != "" and 
        data['RP']['RP_DrC_OtherExistingShortfallSurplus2'] != "" and     
        data['RP']['RP_DrC_Comments'] != "" and       
        data['RP']['RP_LC_FinancialSolutions'] != "" and 
        data['RP']['RP_DiC_FinancialSolutions'] != "" and 
        data['RP']['RP_DrC_FinancialSolutions'] != "" and     
        data['RP']['RP_AltS_1'] != "" and 
        data['RP']['RP_AltS_2'] != "" and 
        data['RP']['RP_AltS_3'] != "" and     
        data['RP']['RP_Product_Taken'] != "" and   
        data['RP']['RP_Product_Provider'] != "" and 
        data['RP']['RP_Policy_Number'] != "" and 
        data['RP']['RP_Product_Name'] != "" and 
        data['RP']['RP_Product_Premium'] != "" and 
        data['RP']['RP_Product_PremiumFrequency'] != 0 and  
        data['RP']['RP_Product_Pattern'] != "" and 
        data['RP']['RP_Product_Escalation'] != "" and 
        data['RP']['RP_Product_ContractingParty'] != "" and 
        data['RP']['RP_Product_LivesAssured'] != "" and 
        data['RP']['RP_Product_Beneficiary'] != "" and 
        data['RP']['RP_Product_PremiumPayer'] != "" and 
        data['RP']['RP_Product_1stYearCommission'] != "" and 
        data['RP']['RP_Product_2ndYearCommission'] != "" and 
        data['RP']['RP_Product_OngoingFees'] != "" and 
        data['RP']['RP_Product_OngoingFeesFrequency'] != "" and 
        data['RP']['RP_Product_OngoingFeesFrequency1'] != 0 and     
        data['RP']['RP_TotalFees_n_Commissions'] != "" and         
        data['RP']['RP_BenDesc_1'] != "" and 
        data['RP']['RP_BenDesc_CoverAmount1'] != "" and 
        data['RP']['RP_BenDesc_2'] != "" and 
        data['RP']['RP_BenDesc_CoverAmount2'] != "" and 
        data['RP']['RP_BenDesc_3'] != "" and 
        data['RP']['RP_BenDesc_CoverAmount3'] != "" and 
        data['RP']['RP_BenDesc_4'] != "" and 
        data['RP']['RP_BenDesc_CoverAmount4'] != "" and 
        data['RP']['RP_BenDesc_5'] != "" and 
        data['RP']['RP_BenDesc_CoverAmount5'] != "" and 
        data['RP']['RP_BenDesc_6'] != "" and 
        data['RP']['RP_BenDesc_CoverAmount6'] != "" and 
        data['RP']['RP_BenDesc_7'] != "" and 
        data['RP']['RP_BenDesc_CoverAmount7'] != "" and         
        data['RP']['RP_ProductReasons'] != "" and 
        data['RP']['RP_ProductMaterialAspects'] != "" and 
        data['RP']['RP_ProductDetails'] != "" and 
        data['RP']['RP_ExecutorFee'] != "" and 
        data['RP']['RP_NominationOfBeneficiaries'] != "" and 
        data['RP']['RP_InformationExplained'] != ""
    ):
        data['rp_status'] = True
    else:
        data['rp_status'] = False
    PremiumFrequency = [ "" ,"Monthly", "Quarterly", "Annually", "Once Off"]
    SourceOfFunds = ["", "Salary", "Savings", "Inheritence", "Resignation", "Retirement", "Other", ]
    IP_InvestmentStrategy = ["", "Capital Reservation", "Income", "Goal Specification Investment"]
    IP_ReturnRequired = ["","Market Linked Return","Targeted Return","Benchmark"]
    IP_RiskProfile = ["","Conservative","Cautious","Moderate","Moderately Aggressive","Aggressive"]
    IP_ProductTaken = ["","Endowment","RA","TSFA","Unit Trust","Life Annuity","Living Annuity","Other"]
                
    data['RP']['RP_Product_PremiumFrequency'] = PremiumFrequency[int(data['RP']['RP_Product_PremiumFrequency'])]
    data['RP']['RP_Product_OngoingFeesFrequency1'] = PremiumFrequency[int(data['RP']['RP_Product_OngoingFeesFrequency1'])]

    data['IP'] = InvestmentPlanning.objects.filter(formId=data['id']).values().first()
    data['IP']['IP_SourceOfIncome'] = SourceOfFunds[int(data['IP']['IP_SourceOfIncome'])]
    data['IP']['IP_InvestmentStrategy'] = IP_InvestmentStrategy[int(data['IP']['IP_InvestmentStrategy'])]
    data['IP']['IP_ReturnRequired'] = IP_ReturnRequired[int(data['IP']['IP_ReturnRequired'])]
    data['IP']['IP_RiskProfile'] = IP_RiskProfile[int(data['IP']['IP_RiskProfile'])]
    data['IP']['IP_ProductTaken'] = IP_ProductTaken[int(data['IP']['IP_ProductTaken'])]
    data['IP']['IP_ProductPremiumFrequency'] = PremiumFrequency[int(data['IP']['IP_ProductPremiumFrequency'])]
    
    data['BA_Risk'] = AssuranceRisk.objects.filter(formId=data['id']).values().first()
    data['BA_Risk']['AR_BusinessDate'] = datetimeparser.parse(data['BA_Risk']['AR_BusinessDate']).strftime('%d %b %Y') if data['BA_Risk']['AR_BusinessDate'] != "" else "N.A."
    data['BA_Risk']['AR_ProductPremiumFrequency'] = PremiumFrequency[int(data['BA_Risk']['AR_ProductPremiumFrequency'])]

    InvestmentStrategy = ["" ,"Capital Growth" , "Capital Preservtion", "Income", "Specified Goal Investment"]    
    ReturnRequired = ["" ,"Guaranteed Return", "Marketed Linked Return", "Targeted Return", "Benchmark"]      
    RiskProfile = ["" , "Ultra Conservative", "Conservative", "Cautious", "Moderate"] 
    SourceOfFunds = ["", "Salary", "Savings", "Inheritence", "Resignation", "Retirement", "Other", ]
        
    data['BA_Investment'] = AssuranceInvestment.objects.filter(formId=data['id']).values().first()
    data['BA_Investment']['AI_Strategy'] = InvestmentStrategy[int(data['BA_Investment']['AI_Strategy'])]
    data['BA_Investment']['AI_ReturnRequired'] = ReturnRequired[int(data['BA_Investment']['AI_ReturnRequired'])]
    data['BA_Investment']['AI_RiskProfile'] = RiskProfile[int(data['BA_Investment']['AI_RiskProfile'])]
    data['BA_Investment']['AI_SourceOfFunds'] = SourceOfFunds[int(data['BA_Investment']['AI_SourceOfFunds'])]
    data['BA_Investment']['AI_Pr_PremiumFrequency'] = PremiumFrequency[int(data['BA_Investment']['AI_Pr_PremiumFrequency'])]
    
    data['EB'] = EmployeeBenefits.objects.filter(formId=data['id']).values().first()
    data['EB']['EB_ClientDate'] = datetimeparser.parse(data['EB']['EB_ClientDate']).strftime('%d %b %Y') if data['EB']['EB_ClientDate'] != "" else "N.A."
    eb_cnr = ["", "Retirement Benefits", "Type of fund/scheme", "Truama Benefits", "Funeral Benefits", "Accidental Benefits", "Group Life Cover", "Lump Sum Disability Cover", "Spouse Life Cover", "Disability Income Cover", ]     
    data['EB']['EB_BusB_CoverType'] = eb_cnr[int(data['EB']['EB_BusB_CoverType'])]
    waitingPeriod = ['', '1', '3', '6', '12', '24']
    benefit = ['', '% of group life cover', 'x annual salary']
    data['EB']['EB_BusRB_DiIBenWaitPer_Category1'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category1'])]
    data['EB']['EB_BusRB_DiIBenWaitPer_Category2'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category2'])]
    data['EB']['EB_BusRB_DiIBenWaitPer_Category3'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category3'])]
    data['EB']['EB_BusRB_DiIBenWaitPer_Category4'] = waitingPeriod[int(data['EB']['EB_BusRB_DiIBenWaitPer_Category4'])]
    data['EB']['EB_BusRB_AccidentBenefit'] = benefit[int(data['EB']['EB_BusRB_AccidentBenefit'])]

    data['Fiduciary'] = Fiduciary.objects.filter(formId=data['id']).values().first()
    data['Fiduciary']['fiduciaryWillUpdationDate'] = datetimeparser.parse(data['Fiduciary']['fiduciaryWillUpdationDate']).strftime('%d %b %Y')  if data['Fiduciary']['fiduciaryWillUpdationDate'] != "" else "N.A."
    
    data['MD'] = Medical.objects.filter(formId=data['id']).values().first()
    data['MD']['MSA_ClientDate'] = datetimeparser.parse(data['MD']['MSA_ClientDate']).strftime('%d %b %Y') if data['MD']['MSA_ClientDate'] != "" else "N.A."
    data['MD']['MSA_PFromDate'] = datetimeparser.parse(data['MD']['MSA_PFromDate']).strftime('%d %b %Y') if data['MD']['MSA_PFromDate'] != "" else "N.A."
    data['MD']['MSA_PTODate'] = datetimeparser.parse(data['MD']['MSA_PTODate']).strftime('%d %b %Y') if data['MD']['MSA_PTODate'] != "" else "N.A."
    data['MD']['SectionF_Date'] = datetimeparser.parse(data['MD']['SectionF_Date']).strftime('%d %b %Y') if data['MD']['SectionF_Date'] != "" else "N.A."
    
    data['GP'] = GapCover.objects.filter(formId=data['id']).values().first()
    data['GP']['GP_ClientInceptionDate'] = datetimeparser.parse(data['GP']['GP_ClientInceptionDate']).strftime('%d %b %Y') if data['GP']['GP_ClientInceptionDate'] != "" else "N.A."
    data['GP']['GP_Date'] = datetimeparser.parse(data['GP']['GP_Date']).strftime('%d %b %Y') if data['GP']['GP_Date'] != "" else "N.A."
    data['GP']['GP_FinanAdvisor_Date'] = datetimeparser.parse(data['GP']['GP_FinanAdvisor_Date']).strftime('%d %b %Y') if data['GP']['GP_FinanAdvisor_Date'] != "" else "N.A."
    
    data['STIC'] = ShortTermInsuranceCommerical.objects.filter(formId=data['id']).values().first()
    data['STIC']['STIC_Inception_Date'] = datetimeparser.parse(data['STIC']['STIC_Inception_Date']).strftime('%d %b %Y') if data['STIC']['STIC_Inception_Date'] != "" else "N.A."
    data['STIC']['STIC_Renewal_Date'] = datetimeparser.parse(data['STIC']['STIC_Renewal_Date']).strftime('%d %b %Y') if data['STIC']['STIC_Renewal_Date'] != "" else "N.A."
    data['STIC']['STIC_SecG_3'] = datetimeparser.parse(data['STIC']['STIC_SecG_3']).strftime('%d/%m/%Y') if data['STIC']['STIC_SecG_3'] != "" else "N.A."
    data['STIC']['STIC_SecD_11'] = datetimeparser.parse(data['STIC']['STIC_SecD_11']).strftime('%d %b %Y') if data['STIC']['STIC_SecD_11'] != "" else "N.A."
    data['STIC']['STIC_SecD_13'] = datetimeparser.parse(data['STIC']['STIC_SecD_13']).strftime('%d/%m/%Y') if data['STIC']['STIC_SecD_13'] != "" else "N.A."
    data['STIC']['STIC_Sec15_2_1'] = datetimeparser.parse(data['STIC']['STIC_Sec15_2_1']).strftime('%d/%m/%Y') if data['STIC']['STIC_Sec15_2_1'] != "" else "N.A."
    
    data['STIP'] = ShortTermInsurancePersonal.objects.filter(formId=data['id']).values().first()
    data['STIP']['STIP_Inception_Date'] = datetimeparser.parse(data['STIP']['STIP_Inception_Date']).strftime('%d %b %Y') if data['STIP']['STIP_Inception_Date'] != "" else "N.A."
    data['STIP']['STIP_Applicant_DateofBirth'] = datetimeparser.parse(data['STIP']['STIP_Applicant_DateofBirth']).strftime('%d %b %Y') if data['STIP']['STIP_Applicant_DateofBirth'] != "" else "N.A."
    data['STIP']['STIP_Applicant_DateofBirth'] = datetimeparser.parse(data['STIP']['STIP_Applicant_DateofBirth']).strftime('%d %b %Y') if data['STIP']['STIP_General_LastDate'] != "" else "N.A."
    # print(data['STIP']['STIP_Applicant_Gender'])
    template = get_template('risk.html')
    cmd_options = {
      'page-size': 'Letter',
      'viewport-size' : '1920x1080',
      'footer-center' : '[page]/[topage]',
      'no-outline' : True,
   }
    response =  PDFTemplateResponse(request=request, template=template,context=data, cmd_options=cmd_options)
    fileName = "Sample"
    with open("static/pdf/%s.pdf"%(fileName), "wb") as f:
        f.write(response.rendered_content)
    return Response({"file":"static/pdf/%s.pdf"%(fileName)})
