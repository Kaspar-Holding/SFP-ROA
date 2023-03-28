from django.urls import path
from . import views
urlpatterns = [
    path('alert/' , views.sendEmail,name='Alert Email'),
]