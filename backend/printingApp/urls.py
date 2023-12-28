from django.urls import path
from . import views
from django_pdfkit import PDFView


urlpatterns = [
    # path('pdf/' , PDFView.as_view(template_name='test.html'),name='excel'),
    # path('pdf/' , views.pdf,name='excel'),
    # path('pdf1/' , views.pdfkitapi,name='excel'),
    # path('pdf2/' , views.wkhtmltopdfapi,name='excel'),
    path('downloadPDF/' , views.wkhtmltopdfapi,name='download pdf'),
    path('disclosure/pdf/' , views.disclosuresPDF.as_view(),name='download pdf'),
    # path('test/' , views.test,name='excel'),
]