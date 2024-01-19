from django.urls import path
from . import views
urlpatterns = [
    path('list/', views.LogListView.as_view(), name='log-details'),
    path('details/', views.LogView.as_view(), name='log-details'),
]
