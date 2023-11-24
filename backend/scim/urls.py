
from django.urls import path
from . import views

urlpatterns = [
    path('users/<int:sanport_id>/', views.scimAPIView.as_view()),
    path('api_key/<str:api_key>/', views.APIKeyView.as_view()),
    path('api_key/', views.APIKeyView.as_view()),
]
