

from django.urls import path
from . import views
from .riskplanning import rp_views
from .record import roa_views

urlpatterns = [
    path('formList/', views.FormListAPIs.as_view()),
    path('form/kpis-and-trends/', views.roaKPISnTrends.as_view()),
    path('form/', views.FormAPIs.as_view()),
    path('form/<int:pk>/', views.FormAPIs.as_view()),
    path('form/record_of_advice/', roa_views.FormAPIs.as_view()),
    path('form/record_of_advice/<int:pk>/', roa_views.FormAPIs.as_view()),
    path('form/riskplanning/', rp_views.RiskPlanningAPIs.as_view()),
    path('form/riskplanning/<int:pk>/', rp_views.RiskPlanningAPIs.as_view()),
]
