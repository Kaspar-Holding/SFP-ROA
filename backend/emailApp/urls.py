from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    # path('alert/' , views.sendEmail,name='Alert Email'),
    path('validateUID/' , views.validateUid,name='Validate UID'),
    path('validateUidToken/' , csrf_exempt(views.validateUidTokenView.as_view()),name='Validate UID'),
    path('password/reset/' , csrf_exempt(views.PasswordResetRequest.as_view()),name='Validate UID'),
]