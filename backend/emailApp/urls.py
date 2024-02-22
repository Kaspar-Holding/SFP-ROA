from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    # path('alert/' , views.sendEmail,name='Alert Email'),
    path('validateUID/' , views.validateUid,name='Validate UID'),
    path('validateUidToken/' , csrf_exempt(views.validateUid),name='Validate UID'),
]