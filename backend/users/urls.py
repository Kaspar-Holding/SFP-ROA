from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    # path('alert/' , views.sendEmail,name='Alert Email'),
    path('create/' , views.CreateUserAPI.as_view(),name='User List and KPIs'),
    path('list/' , views.UsersList.as_view(),name='User List and KPIs'),
    path('regions/' , views.RegionsAPI.as_view(),name='Regions'),
    path('region/details/<str:pk>/' , views.RegionsDetailsAPI.as_view(),name='Regions'),
    path('load/' , views.getUserInfo,name='Validate UID'),
    path('details/<str:pk>/' , views.UserDetail.as_view(),name='Get User Details'),
    path('update/role/<str:pk>/' , views.UserRole.as_view(),name='Get User Details'),
    path('load/profile/' , views.getUserProfileInfo,name='Validate UID'),
    path('load/profile/details/' , views.LoadUserDetails.as_view(),name='Get User Details'),
    path('bulk/update/' , views.BulkUserUpload.as_view(),name='Bulk Update'),
    path('bulk/upload/' , views.BulkUserUpdate.as_view(),name='Bulk Update'),
]