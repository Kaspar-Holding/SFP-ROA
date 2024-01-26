from datetime import datetime, timedelta
from data.models import Disclosures, Fiduciary
from data.serializers import FiduciarySerializers
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class FiduciaryAPIs(APIView):

    def get_object(self, pk):
        try:
            return Fiduciary.objects.get(formId=pk)
        except Fiduciary.DoesNotExist:
            formData = Disclosures.objects.filter(id=pk)
            if formData.exists():
                formData = formData.first()
                ai_data = {
                    "advisorId" : formData.advisorId,
                    "formId" : pk,
                }
                ai_serializer = FiduciarySerializers(data=ai_data)
                if ai_serializer.is_valid():
                    ai_serializer.create(ai_serializer.validated_data)
                    return Fiduciary.objects.get(formId=pk)
                else:
                    print(ai_serializer.errors)
            raise Http404


    def get(self, request, pk, format=None):
        snippets = self.get_object(pk)
        serializer = FiduciarySerializers(snippets)
        coverData = []
        
        return Response({
            "fiduciary": serializer.data,
            "form_status": Disclosures.objects.get(id=pk).status,
        }, 200)
        
    def post(self, request, format=None):
        requestData = request.data
        if Fiduciary.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = FiduciarySerializers(data=data)
        if serializer.is_valid():
            s = serializer.create(serializer.validated_data)
            data['id'] = s.pk
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        formData = Disclosures.objects.filter(id=pk)
        if formData.exists():
            formData = formData.first()
            if request.user.pk != formData.advisorId:
                return Response(status=status.HTTP_400_BAD_REQUEST)
            snippets = self.get_object(pk)
            aiData = request.data['fiduciary']
            aiData['advisorId'] = formData.advisorId            
            serializer = FiduciarySerializers(snippets, data=aiData)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.data, 200)

    def delete(self, request, pk, format=None):
        snippets = self.get_object(pk)
        snippets.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 