from django.urls import path
from . import views

urlpatterns = [
    path('' , views.getData,name='Get Data'),
    path('add/' , views.insertData, name="Insert into Database"),
    path('addformdata/' , views.insertFormData, name="Insert data into Form Collection"),
    path('viewformdata/' , views.viewFormData, name="Form data details"),
    path('updateformdata/' , views.viewFormData, name="Update form data details"),
    path('deleteformdata/' , views.deleteFormData, name="Delete form data details"),
    path('filedownload/' , views.sampleFile, name="Download file"),
]