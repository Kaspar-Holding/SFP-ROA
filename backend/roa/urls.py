

from django.urls import path
from . import views

urlpatterns = [
    path('form/', views.FormAPIs.as_view()),
    path('form/<int:pk>/', views.FormAPIs.as_view()),
]
