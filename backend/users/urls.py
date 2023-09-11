from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    # path('alert/' , views.sendEmail,name='Alert Email'),
    path('load/' , views.getUserInfo,name='Validate UID'),
]