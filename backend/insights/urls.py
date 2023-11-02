from . import views
from django.urls import path

urlpatterns = [
    path('commission/', views.commissionInsights.as_view()),
    path('investment/', views.investmentInsights.as_view()),
    path('monitoring/', views.monitoringInsights.as_view()),
]
