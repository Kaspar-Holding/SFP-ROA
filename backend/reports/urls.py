from . import views
from django.urls import path

urlpatterns = [
    path('commission/', views.commissionReport.as_view()),
]
