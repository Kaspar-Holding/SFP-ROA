from datetime import datetime, timedelta
from data.models import Disclosures, AssuranceInvestment, AI_ProductTaken, AI_Others
from data.serializers import AssuranceInvestmentSerializers, AI_ProductTakenSerializer, AI_Others_Serializer
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class AssuranceInvestmentAPIs(APIView):

    def get_object(self, pk):
        try:
            return AssuranceInvestment.objects.get(formId=pk)
        except AssuranceInvestment.DoesNotExist:
            formData = Disclosures.objects.filter(id=pk)
            if formData.exists():
                formData = formData.first()
                ai_data = {
                    "advisorId" : formData.advisorId,
                    "formId" : pk,
                }
                ai_serializer = AssuranceInvestmentSerializers(data=ai_data)
                if ai_serializer.is_valid():
                    ai_serializer.create(ai_serializer.validated_data)
                    return AssuranceInvestment.objects.get(formId=pk)
                else:
                    print(ai_serializer.errors)
            raise Http404


    def get(self, request, pk, format=None):
        snippets = self.get_object(pk)
        serializer = AssuranceInvestmentSerializers(snippets)
        productTakenData = []
        productTaken = AI_ProductTaken.objects.filter(formId=pk, advisorId=request.user.pk)
        if productTaken.exists():
            productTakenData = AI_ProductTakenSerializer(productTaken, many=True).data
        ai_otherData = []
        ai_other = AI_Others.objects.filter(formId=pk, advisorId=request.user.pk)
        if ai_other.exists():
            ai_otherData = AI_Others_Serializer(ai_other, many=True).data
        return Response({
            "assuranceInvestment": serializer.data,
            "productTaken": productTakenData,
            "ai_other": ai_otherData
        }, 200)
        
    def post(self, request, format=None):
        requestData = request.data
        if AssuranceInvestment.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = AssuranceInvestmentSerializers(data=data)
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
            aiData = request.data['assuranceInvestment']
            aiData['advisorId'] = formData.advisorId            
            serializer = AssuranceInvestmentSerializers(snippets, data=aiData, partial=True)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            productTakenData = request.data['productTaken']
            AI_ProductTaken.objects.filter(formId=pk).delete()
            pt_searializer = AI_ProductTakenSerializer(data=productTakenData, many=True)
            if pt_searializer.is_valid():
                pt_searializer.save()
            else:
                print(pt_searializer.errors)
                return Response(pt_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            ai_otherData = request.data['ai_other']
            AI_Others.objects.filter(formId=pk).delete()
            ai_other_searializer = AI_Others_Serializer(data=ai_otherData, many=True)
            if ai_other_searializer.is_valid():
                ai_other_searializer.save()
            else:
                print(ai_other_searializer.errors)
                return Response(ai_other_searializer.errors, status=status.HTTP_400_BAD_REQUEST)       
            return Response(serializer.data, 200)

    def delete(self, request, pk, format=None):
        snippets = self.get_object(pk)
        snippets.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 