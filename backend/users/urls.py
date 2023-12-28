from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    # path('alert/' , views.sendEmail,name='Alert Email'),
    path('load/' , views.getUserInfo,name='Validate UID'),
    path('load/profile/' , views.getUserProfileInfo,name='Validate UID'),
    path('bulk/update/' , views.BulkUserUpload.as_view(),name='Bulk Update'),
]