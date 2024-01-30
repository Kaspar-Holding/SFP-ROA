from . import views
from django.urls import path

urlpatterns = [
    path('db/backups/', views.DataBase_Backups.as_view(), name="DB Backups"),
]
