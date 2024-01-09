from datetime import datetime, timedelta
from data.models import Form, Disclosures
from data.serializers import FormSerializers
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class FormAPIs(APIView):

    def get_object(self, formId):
        try:
            return Form.objects.get(formId=formId)
        except Form.DoesNotExist:
            formData = Disclosures.objects.filter(id=formId)
            if formData.exists():
                formData = formData.first()
                rp_data = {
                    "advisorId" : formData.advisorId,
                    "formId" : formId,
                }
                roa_serializer = FormSerializers(data=rp_data)
                if roa_serializer.is_valid():
                    roa_serializer.create(roa_serializer.validated_data)
                    return Form.objects.get(formId=formId)
                else:
                    print(roa_serializer.errors)
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = FormSerializers(snippet)
        return Response({"roa_data":serializer.data})

    def post(self, request, format=None):
        requestData = request.data
        if Form.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = FormSerializers(data=data)
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
            roaData = request.data['roa_data']      
            serializer = FormSerializers(snippets, data=roaData)
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