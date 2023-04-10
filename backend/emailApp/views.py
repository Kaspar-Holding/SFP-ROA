from django.shortcuts import render
from django.template.loader import get_template
from rest_framework.decorators import api_view
from django.core.mail import send_mail, EmailMultiAlternatives
from rest_framework.response import Response
from data.models import UserAccount, RiskFactors
from datetime import datetime
# Create your views here.

@api_view(['GET'])
def sendEmail(request):
    context = {
        "user" : UserAccount.objects.filter(id=19).first(),
        "agent" : UserAccount.objects.filter(id=19).first(),
        "data" : RiskFactors.objects.filter(id=26).first(),
    }
    
    template = get_template('alertEmail.html').render(context)
    # print("Hi "+user[0]['email'])
    msg = EmailMultiAlternatives(
        'HIGH DRA recorded on of %s' %(datetime.today().strftime('%d %b %Y')),
        None, # This is the text context, just send None or Send a string message
        'SFP ROA',
        ['armughan.ahmad@kasparholdings.com'],
    )
    msg.attach_alternative(template, "text/html")
    msg.send(fail_silently=False)

    return Response({'message': "Email Sent"}, 200)

from django.contrib.auth.tokens import default_token_generator
from templated_mail.mail import BaseEmailMessage
from django.conf import settings as DjangoSettings
from djoser import utils
from djoser.conf import settings
import environ
import os
env = environ.Env(
    # set casting, default value
)
environ.Env.read_env(os.path.join(DjangoSettings.BASE_DIR, '.env'))

class PasswordResetEmail(BaseEmailMessage):
    template_name = "djoserEmails/password_reset.html"

    def get_context_data(self):
        # PasswordResetEmail can be deleted
        context = super().get_context_data()

        user = context.get("user")
        context["site"] = "SFP Web ROA"
        context["URL"] = context['site_name'] +"/reset-password-confirm"
        context["uid"] = utils.encode_uid(user.pk)
        context["token"] = default_token_generator.make_token(user)
        context["url"] = settings.PASSWORD_RESET_CONFIRM_URL.format(**context)
        return context


class PasswordChangedConfirmationEmail(BaseEmailMessage):
    template_name = "djoserEmails/password_changed_confirmation.html"
    def get_context_data(self):
        context = super().get_context_data()

        context["site"] = "SFP Web ROA"
        return context


from rest_framework.exceptions import ValidationError

from djoser import utils

@api_view(['POST'])
def validateUid(request):
    error_messages = {}
    uid = utils.decode_uid(request.data['uid'])
    user = UserAccount.objects.get(pk=uid)
    if UserAccount.objects.filter(pk=uid).exists():
        return Response(
            {"message": "Valid"}
        )
    else:
        return Response(
            {"message": "Invalid"}
        )
    
@api_view(['POST'])
def validateUidToken(request):
    uid = utils.decode_uid(request.data['uid'])
    user = UserAccount.objects.get(pk=uid)
    if UserAccount.objects.filter(pk=uid).exists():
        token_generator = default_token_generator
        is_token_valid = token_generator.check_token(user, request.data['token'])
        if is_token_valid:
            return Response(
                {"message": "Valid Uid and Token"}, 200
            )
        else:
            return Response(
                {"message": "Token has expired"}, 404
            )
    else:
        return Response(
            {"message": "Invalid Uid and Token"}, 400
        )

    # if is_token_valid:
    #     return validated_data
    # else:
    #     key_error = "invalid_token"
    #     raise ValidationError(
    #         {"token": [self.error_messages[key_error]]}, code=key_error
    #     )