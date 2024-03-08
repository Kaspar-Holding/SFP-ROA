from . import views
from .advisor import advisorViews
from django.urls import path

urlpatterns = [
    path('commission/', views.commissionInsights.as_view()),
    path('investment/', views.investmentInsights.as_view()),
    path('monitoring/', views.monitoringInsights.as_view()),
    path('gatekeeping/', views.gatekeeperInsights.as_view()),
    path('sanlam/', views.sanlamInsights.as_view()),
    path('advisors/load/', views.loadAdvisors.as_view()),
    path('advisors/', views.advisorInsights.as_view()),
    path('advisor/', advisorViews.businessTypeInsights.as_view()),
    path('advisor/reason_of_rejection/', advisorViews.reasonOfRejectionInsights.as_view()),
    path('advisor/first_approval/', advisorViews.firstApprovalInsights.as_view()),
    path('advisor/monitoring/', advisorViews.monitoringInsights.as_view()),
    path('advisor/investment/', advisorViews.investmentInsights.as_view()),
    path('advisor/business_type/', advisorViews.businessType2Insights.as_view()),
]
