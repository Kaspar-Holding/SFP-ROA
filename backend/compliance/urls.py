from django.urls import path
from . import views

urlpatterns = [
    # path('excel/' , exportViews.exportData,name='excel'),
    path('agents/', views.loadagents.as_view()),
    path('agent/info/', views.loadagentsDetail.as_view()),
    path('document/', views.ComplainceDocumentList.as_view()),
    path('document/<int:pk>/', views.ComplainceDocumentDetails.as_view()),
    path('document/status/', views.updateDocumentStatus.as_view()),
    path('document/summary/<int:pk>/', views.ComplianceDocumentSummary.as_view()),
    path('document/gatekeeping/', views.GateKeepingList.as_view()),
    path('document/gatekeeping/<int:pk>/', views.GateKeepingDetails.as_view()),
    path('document/gatekeeping/version/<int:pk>/', views.GateKeepingVersionDetail.as_view()),
    path('document/arc/', views.arcList.as_view()),
    path('document/arc/<int:pk>/', views.arcDetails.as_view()),
    path('document/arc/version/<int:pk>/', views.arcVersionDetail.as_view()),
    path('document/comments/', views.DocumentCommentsList.as_view()),
    path('document/comments/<int:pk>/', views.DocumentCommentsDetails.as_view()),
    path('arc/questions/', views.arc_questionsList.as_view()),
    path('arc/questions/<int:pk>/', views.arc_questionsDetails.as_view()),
    path('arc/questions/category/', views.arc_question_headerList.as_view()),
    path('arc/questions/category/<int:pk>/', views.arc_question_headerDetails.as_view()),
]