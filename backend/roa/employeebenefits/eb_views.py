from datetime import datetime, timedelta
from data.models import Disclosures, EmployeeBenefits, EB_Cover
from data.serializers import EmployeeBenefitsSerializers, EB_CoverSerializer
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class EmployeeBenefitsAPIs(APIView):

    def get_object(self, pk):
        try:
            return EmployeeBenefits.objects.get(formId=pk)
        except EmployeeBenefits.DoesNotExist:
            formData = Disclosures.objects.filter(id=pk)
            if formData.exists():
                formData = formData.first()
                ai_data = {
                    "advisorId" : formData.advisorId.pk,
                    "formId" : pk,
                }
                ai_serializer = EmployeeBenefitsSerializers(data=ai_data)
                if ai_serializer.is_valid():
                    ai_serializer.create(ai_serializer.validated_data)
                    return EmployeeBenefits.objects.get(formId=pk)
                else:
                    print(ai_serializer.errors)
            raise Http404


    def get(self, request, pk, format=None):
        snippets = self.get_object(pk)
        serializer = EmployeeBenefitsSerializers(snippets)
        coverData = []
        cover = EB_Cover.objects.filter(formId=pk, advisorId=request.user.pk)
        if cover.exists():
            coverData = EB_CoverSerializer(cover, many=True).data
        
        return Response({
            "employeeBenefits": serializer.data,
            "form_status": Disclosures.objects.get(id=pk).status,
            "cover": coverData
        }, 200)
        
    def post(self, request, format=None):
        requestData = request.data
        if EmployeeBenefits.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = EmployeeBenefitsSerializers(data=data)
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
            snippets = self.get_object(pk)
            aiData = request.data['employeeBenefits']
            aiData['advisorId'] = formData.advisorId.pk            
            serializer = EmployeeBenefitsSerializers(snippets, data=aiData)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            coverData = request.data['cover']
            EB_Cover.objects.filter(formId=pk).delete()
            pt_searializer = EB_CoverSerializer(data=coverData, many=True)
            if pt_searializer.is_valid():
                pt_searializer.save()
            else:
                print(pt_searializer.errors)
                return Response(pt_searializer.errors, status=status.HTTP_400_BAD_REQUEST)    
            return Response(serializer.data, 200)

    def delete(self, request, pk, format=None):
        snippets = self.get_object(pk)
        snippets.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 