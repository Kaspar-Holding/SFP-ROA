from datetime import datetime, timedelta
from data.models import Disclosures, GapCover
from data.serializers import GapCoverSerializers
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class GapCoverAPIs(APIView):

    def get_object(self, pk):
        try:
            return GapCover.objects.get(formId=pk)
        except GapCover.DoesNotExist:
            formData = Disclosures.objects.filter(id=pk)
            if formData.exists():
                formData = formData.first()
                rp_data = {
                    "advisorId" : formData.advisorId,
                    "formId" : pk,
                }
                rp_serializer = GapCoverSerializers(data=rp_data)
                if rp_serializer.is_valid():
                    rp_serializer.create(rp_serializer.validated_data)
                    return GapCover.objects.get(formId=pk)
                else:
                    print(rp_serializer.errors)
            raise Http404


    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = GapCoverSerializers(snippet)
       
        return Response({
            "gapcover": serializer.data
        })
        
    def post(self, request, format=None):
        requestData = request.data
        if GapCover.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = GapCoverSerializers(data=data)
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
            gapcoverData = request.data['gapcover']
            gapcoverData['advisorId'] = formData.advisorId            
            serializer = GapCoverSerializers(snippet, data=gapcoverData)
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