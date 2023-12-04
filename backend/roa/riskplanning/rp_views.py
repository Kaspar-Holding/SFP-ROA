from datetime import datetime, timedelta
from data.models import RiskPlanning
from data.serializers import RiskPlanningSerializers
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class RiskPlanningAPIs(APIView):

    def get_object(self, pk, advisorId):
        try:
            return RiskPlanning.objects.get(formId=pk, advisorId=advisorId)
        except RiskPlanning.DoesNotExist:
            # data = {
            #     "formId" : pk,
            #     "advisorId" : advisorId,
            # }
            # serializer = RiskPlanningSerializers(data=data)
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk, request.user.pk)
        serializer = RiskPlanningSerializers(snippet)
        return Response(serializer.data)

    def post(self, request, format=None):
        requestData = request.data
        if RiskPlanning.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = RiskPlanningSerializers(data=data)
        if serializer.is_valid():
            s = serializer.create(serializer.validated_data)
            data['id'] = s.pk
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = RiskPlanningSerializers(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 