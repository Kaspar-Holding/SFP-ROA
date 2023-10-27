from . import views
from django.urls import path

urlpatterns = [
    path('commission/', views.commissionInsights.as_view()),
]
