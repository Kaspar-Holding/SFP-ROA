

from django.urls import path
from . import views
from .record import roa_views
from .riskplanning import rp_views
from .investmentplanning import ip_views
from .assuranceinvestment import ai_views
from .assurancerisk import ar_views
from .employeebenefits import eb_views
from .fiduciary import fb_views
from .shorttermcommerical import stc_views
from .shorttermpersonal import stp_views
from .medical import medical_views
from .gapcover import gc_views
urlpatterns = [
    path('bulk/products/update/', views.BulkProductUpdate.as_view()),
    path('bulk/products/update/v2/', views.BulkProductUpdate_v2.as_view()),
    path('formList/', views.FormListAPIs.as_view()),
    path('form/kpis-and-trends/', views.roaKPISnTrends.as_view()),
    path('form/', views.FormAPIs.as_view()),
    path('form/<int:pk>/', views.FormAPIs.as_view()),
    path('form/disclosure/products/', views.advisorDisclosureProducts.as_view()),
    path('form/status/<int:pk>/', views.updateFormAPI.as_view()),
    path('form/record_of_advice/', roa_views.FormAPIs.as_view()),
    path('form/record_of_advice/<int:pk>/', roa_views.FormAPIs.as_view()),
    path('form/riskplanning/', rp_views.RiskPlanningAPIs.as_view()),
    path('form/riskplanning/<int:pk>/', rp_views.RiskPlanningAPIs.as_view()),
    path('form/investmentplanning/', ip_views.InvestmentPlanningAPIs.as_view()),
    path('form/investmentplanning/<int:pk>/', ip_views.InvestmentPlanningAPIs.as_view()),
    path('form/assurancerisk/', ar_views.AssuranceRiskAPIs.as_view()),
    path('form/assurancerisk/<int:pk>/', ar_views.AssuranceRiskAPIs.as_view()),
    path('form/assuranceinvestment/', ai_views.AssuranceInvestmentAPIs.as_view()),
    path('form/assuranceinvestment/<int:pk>/', ai_views.AssuranceInvestmentAPIs.as_view()),
    path('form/employeebenefits/', eb_views.EmployeeBenefitsAPIs.as_view()),
    path('form/employeebenefits/<int:pk>/', eb_views.EmployeeBenefitsAPIs.as_view()),
    path('form/fiduciary/', fb_views.FiduciaryAPIs.as_view()),
    path('form/fiduciary/<int:pk>/', fb_views.FiduciaryAPIs.as_view()),
    path('form/shorttermcommerical/', stc_views.ShortTermInsuranceCommericalAPIs.as_view()),
    path('form/shorttermcommerical/<int:pk>/', stc_views.ShortTermInsuranceCommericalAPIs.as_view()),
    path('form/shorttermpersonal/', stp_views.ShortTermInsurancePersonalAPIs.as_view()),
    path('form/shorttermpersonal/<int:pk>/', stp_views.ShortTermInsurancePersonalAPIs.as_view()),
    path('form/medical/', medical_views.MedicalAPIs.as_view()),
    path('form/medical/<int:pk>/', medical_views.MedicalAPIs.as_view()),
    path('form/gapcover/', gc_views.GapCoverAPIs.as_view()),
    path('form/gapcover/<int:pk>/', gc_views.GapCoverAPIs.as_view()),
    path('form/profile/<int:pk>/', views.FormAdvisorProfile.as_view()),
]
