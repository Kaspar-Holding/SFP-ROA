from django.urls import include, path
from . import views
urlpatterns = [
    path('create/', views.NotificationAPI.as_view()),
    path('create/events/', views.BulkEventUpload.as_view()),
    path('events/get/', views.Events.as_view()),
    path('get/', views.getAllNotifications),
    path('get/annoucements/', views.getAnnoucementNotifications),
    path('get/unread/', views.getUnreadNotifications),
    path('update/', views.readNotification),
    path('read/all/', views.readAllNotifications),
    path('read/<int:pk>/', views.readSpecificNotifications.as_view()),
]
