from datetime import datetime, timedelta
from data.models import Disclosures, InvestmentPlanning, IP_ProductTaken
from data.serializers import InvestmentPlanningSerializers, IP_ProductTakenSerializer
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class InvestmentPlanningAPIs(APIView):

    def get_object(self, pk):
        try:
            return InvestmentPlanning.objects.get(formId=pk)
        except InvestmentPlanning.DoesNotExist:
            formData = Disclosures.objects.filter(id=pk)
            if formData.exists():
                formData = formData.first()
                ip_data = {
                    "advisorId" : formData.advisorId.pk,
                    "formId" : pk,
                }
                ip_serializer = InvestmentPlanningSerializers(data=ip_data)
                if ip_serializer.is_valid():
                    ip_serializer.create(ip_serializer.validated_data)
                    return InvestmentPlanning.objects.get(formId=pk)
                else:
                    print(ip_serializer.errors)
            raise Http404


    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = InvestmentPlanningSerializers(snippet)
        productTakenData = []
        productTaken = IP_ProductTaken.objects.filter(formId=pk, advisorId=request.user.pk)
        if productTaken.exists():
            productTakenData = IP_ProductTakenSerializer(productTaken, many=True).data
        
        return Response({
            "investmentPlanning": serializer.data,
            "productTaken": productTakenData,
            "form_status": Disclosures.objects.get(id=pk).status,
        }, 200)
        
    def post(self, request, format=None):
        requestData = request.data
        if InvestmentPlanning.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = InvestmentPlanningSerializers(data=data)
        if serializer.is_valid():
            s = serializer.create(serializer.validated_data)
            data['id'] = s.pk
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        formData = Disclosures.objects.filter(id=pk)
        if formData.exists():
            formData = formData.first()
            if request.user.pk != formData.advisorId.pk:
                return Response(status=status.HTTP_400_BAD_REQUEST)
            snippet = self.get_object(pk)
            ipData = request.data['investmentPlanning']
            ipData['advisorId'] = formData.advisorId.pk            
            serializer = InvestmentPlanningSerializers(snippet, data=ipData)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            productTakenData = request.data['productTaken']
            IP_ProductTaken.objects.filter(formId=pk).delete()
            pt_searializer = IP_ProductTakenSerializer(data=productTakenData, many=True)
            if pt_searializer.is_valid():
                pt_searializer.save()
            else:
                print(pt_searializer.errors)
                return Response(pt_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
            return Response(serializer.data, 200)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 