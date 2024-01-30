from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import APIView
from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient
from django.conf import settings

# Create your views here.

class DataBase_Backups(APIView):

    name = "Database Backups"
    def get(self, request):
        
        blob_service_client = BlobServiceClient(account_url=f"https://{settings.AZURE_ACCOUNT_NAME}.blob.core.windows.net/", credential=settings.AZURE_ACCOUNT_KEY)
        container_client = blob_service_client.get_container_client(settings.AZURE_CONTAINER)
        
        blob_list = container_client.list_blobs('backups/')
        # Iterate over the objects and delete those older than the threshold
        backup_files = []
        for blob in blob_list:
            backup_files.append(blob.name)

        return Response({
            "files_list" : backup_files
        })
    