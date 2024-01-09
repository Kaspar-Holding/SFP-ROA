from datetime import datetime, timedelta
from data.models import Disclosures, Medical
from data.serializers import MedicalSerializers
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class MedicalAPIs(APIView):

    def get_object(self, pk):
        try:
            return Medical.objects.get(formId=pk)
        except Medical.DoesNotExist:
            formData = Disclosures.objects.filter(id=pk)
            if formData.exists():
                formData = formData.first()
                rp_data = {
                    "advisorId" : formData.advisorId,
                    "formId" : pk,
                }
                rp_serializer = MedicalSerializers(data=rp_data)
                if rp_serializer.is_valid():
                    rp_serializer.create(rp_serializer.validated_data)
                    return Medical.objects.get(formId=pk)
                else:
                    print(rp_serializer.errors)
            raise Http404


    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = MedicalSerializers(snippet)
       
        return Response({
            "medical": serializer.data
        })
        
    def post(self, request, format=None):
        requestData = request.data
        if Medical.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = MedicalSerializers(data=data)
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
            snippet = self.get_object(pk)
            medicalData = request.data['medical']
            medicalData['advisorId'] = formData.advisorId            
            serializer = MedicalSerializers(snippet, data=medicalData)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
            return Response(serializer.data, 200)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 