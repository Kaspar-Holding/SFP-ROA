from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from data.models import UserAccount
# Create your views here.

@api_view(['GET'])
def getUserInfo(request):

    user = request.user

    userData = UserAccount.objects.filter(id=user.pk).values('id','email', 'first_name', 'last_name', 'is_superuser').first()

    return Response({"user" : userData}, 200)

