from datetime import datetime, timedelta
from data.models import Disclosures, RiskPlanning, RP_ProductTaken, Risk_DC_Others, Risk_DiC_Others, Risk_DrC_Others
from data.serializers import RiskPlanningSerializers, RP_ProductTakenSerializer, Risk_DC_Others_Serializer, Risk_DiC_Others_Serializer, Risk_DrC_Others_Serializer
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class RiskPlanningAPIs(APIView):

    def get_object(self, pk):
        try:
            return RiskPlanning.objects.get(formId=pk)
        except RiskPlanning.DoesNotExist:
            formData = Disclosures.objects.filter(id=pk)
            if formData.exists():
                formData = formData.first()
                rp_data = {
                    "advisorId" : formData.advisorId.pk,
                    "formId" : pk,
                }
                rp_serializer = RiskPlanningSerializers(data=rp_data)
                if rp_serializer.is_valid():
                    rp_serializer.create(rp_serializer.validated_data)
                    return RiskPlanning.objects.get(formId=pk)
                else:
                    print(rp_serializer.errors)
            raise Http404


    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = RiskPlanningSerializers(snippet)
        productTakenData = []
        productTaken = RP_ProductTaken.objects.filter(formId=pk, advisorId=request.user.pk)
        if productTaken.exists():
            productTakenData = RP_ProductTakenSerializer(productTaken, many=True).data
        dc_otherData = []
        dc_other = Risk_DC_Others.objects.filter(formId=pk, advisorId=request.user.pk)
        if dc_other.exists():
            dc_otherData = Risk_DC_Others_Serializer(dc_other, many=True).data
        diC_otherData = []
        diC_other = Risk_DiC_Others.objects.filter(formId=pk, advisorId=request.user.pk)
        if diC_other.exists():
            diC_otherData = Risk_DiC_Others_Serializer(diC_other, many=True).data
        drC_otherData = []
        drC_other = Risk_DrC_Others.objects.filter(formId=pk, advisorId=request.user.pk)
        if drC_other.exists():
            drC_otherData = Risk_DrC_Others_Serializer(drC_other, many=True).data
        return Response({
            "riskPlanning": serializer.data,
            "productTaken": productTakenData,
            "dc_other": dc_otherData,
            "diC_other": diC_otherData,
            "drC_other": drC_otherData,
            "form_status": Disclosures.objects.get(id=pk).status,
        })
        
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
        formData = Disclosures.objects.filter(id=pk)
        if formData.exists():
            formData = formData.first()
            if request.user.pk != formData.advisorId.pk:
                return Response(status=status.HTTP_400_BAD_REQUEST)
            snippet = self.get_object(pk)
            rpData = request.data['riskPlanning']
            rpData['advisorId'] = formData.advisorId.pk            
            serializer = RiskPlanningSerializers(snippet, data=rpData)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            productTakenData = request.data['productTaken']
            RP_ProductTaken.objects.filter(formId=pk).delete()
            pt_searializer = RP_ProductTakenSerializer(data=productTakenData, many=True)
            if pt_searializer.is_valid():
                pt_searializer.save()
            else:
                print(pt_searializer.errors)
                return Response(pt_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            dc_otherData = request.data['dc_other']
            Risk_DC_Others.objects.filter(formId=pk).delete()
            dco_searializer = Risk_DC_Others_Serializer(data=dc_otherData, many=True)
            if dco_searializer.is_valid():
                dco_searializer.save()
            else:
                print(dco_searializer.errors)
                return Response(dco_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            diC_otherData = request.data['diC_other']
            Risk_DiC_Others.objects.filter(formId=pk).delete()
            dic_searializer = Risk_DiC_Others_Serializer(data=diC_otherData, many=True)
            if dic_searializer.is_valid():
                dic_searializer.save()
            else:
                print(dic_searializer.errors)
                return Response(dic_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            drC_otherData = request.data['drC_other']
            Risk_DrC_Others.objects.filter(formId=pk).delete()
            drc_searializer = Risk_DrC_Others_Serializer(data=drC_otherData, many=True)
            if drc_searializer.is_valid():
                drc_searializer.save()
            else:
                print(drc_searializer.errors)
                return Response(drc_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.data, 200)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 