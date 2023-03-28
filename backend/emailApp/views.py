from django.shortcuts import render
from django.template.loader import get_template, render_to_string
from rest_framework.decorators import api_view
from django.core.mail import send_mail, EmailMultiAlternatives
from rest_framework.response import Response
from data.models import UserAccount, RiskFactors
from datetime import datetime
# Create your views here.

@api_view(['GET'])
def sendBBAlertEmail(request):
    context = {
        "user" : UserAccount.objects.filter(id="1").first(),
        "agent" : UserAccount.objects.filter(id="19").first(),
        "data" : RiskFactors.objects.filter(id="1").first(),
    }
    
    template = get_template('alertEmail.html').render(context)
    # print("Hi "+user[0]['email'])
    msg = EmailMultiAlternatives(
        'HIGH DRA recorded on of %s' %(datetime.today().strftime('%d %b %Y')),
        None, # This is the text context, just send None or Send a string message
        'sfpkcstesting@gmail.com',
        ['armughan.ahmad@kasparholdings.com'],
    )
    msg.attach_alternative(template, "text/html")
    msg.send(fail_silently=False)

    return Response({'message': "Email Sent"}, 200)