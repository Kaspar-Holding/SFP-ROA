from datetime import datetime, timedelta
from data.models import Disclosures, AssuranceRisk, AR_BnS_Others, AR_BusOvProt_Others, AR_CLARedm_Others, AR_DLARedm_Others, AR_KeyP_Others, AR_ProductTaken, AR_SureNLia_Others
from data.serializers import AssuranceRiskSerializers, AR_BnS_Others_Serializer, AR_BusOvProt_Others_Serializer, AR_CLARedm_Others_Serializer, AR_DLARedm_Others_Serializer, AR_KeyP_Others_Serializer, AR_ProductTakenSerializer, AR_SureNLia_Others_Serializer
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class AssuranceRiskAPIs(APIView):

    def get_object(self, pk):
        try:
            return AssuranceRisk.objects.get(formId=pk)
        except AssuranceRisk.DoesNotExist:
            formData = Disclosures.objects.filter(id=pk)
            if formData.exists():
                formData = formData.first()
                ar_data = {
                    "advisorId" : formData.advisorId.pk,
                    "formId" : pk,
                }
                ar_serializer = AssuranceRiskSerializers(data=ar_data)
                if ar_serializer.is_valid():
                    ar_serializer.create(ar_serializer.validated_data)
                    return AssuranceRisk.objects.get(formId=pk)
                else:
                    print(ar_serializer.errors)
            raise Http404


    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = AssuranceRiskSerializers(snippet)
        productTakenData = []
        productTaken = AR_ProductTaken.objects.filter(formId=pk, advisorId=request.user.pk)
        if productTaken.exists():
            productTakenData = AR_ProductTakenSerializer(productTaken, many=True).data
        ar_bns_otherData = []
        ar_bns_other = AR_BnS_Others.objects.filter(formId=pk, advisorId=request.user.pk)
        if ar_bns_other.exists():
            ar_bns_otherData = AR_BnS_Others_Serializer(ar_bns_other, many=True).data
        AR_BusOvProt_otherData = []
        AR_BusOvProt_other = AR_BusOvProt_Others.objects.filter(formId=pk, advisorId=request.user.pk)
        if AR_BusOvProt_other.exists():
            AR_BusOvProt_otherData = AR_BusOvProt_Others_Serializer(AR_BusOvProt_other, many=True).data
        credit_otherData = []
        credit_other = AR_CLARedm_Others.objects.filter(formId=pk, advisorId=request.user.pk)
        if credit_other.exists():
            credit_otherData = AR_CLARedm_Others_Serializer(credit_other, many=True).data
        debit_otherData = []
        debit_other = AR_DLARedm_Others.objects.filter(formId=pk, advisorId=request.user.pk)
        if debit_other.exists():
            debit_otherData = AR_DLARedm_Others_Serializer(debit_other, many=True).data
        keyP_otherData = []
        keyP_other = AR_KeyP_Others.objects.filter(formId=pk, advisorId=request.user.pk)
        if keyP_other.exists():
            keyP_otherData = AR_KeyP_Others_Serializer(keyP_other, many=True).data
        sureNLia_otherData = []
        sureNLia_other = AR_SureNLia_Others.objects.filter(formId=pk, advisorId=request.user.pk)
        if sureNLia_other.exists():
            sureNLia_otherData = AR_SureNLia_Others_Serializer(keyP_other, many=True).data
        return Response({
            "assuranceRisk": serializer.data,
            "productTaken": productTakenData,
            "ar_bns_other": ar_bns_otherData,
            "ar_busovprot_other": AR_BusOvProt_otherData,
            "credit_otherData": credit_otherData,
            "debit_otherData": debit_otherData,
            "keyp_otherData": keyP_otherData,
            "sureNLia_otherData": sureNLia_otherData,
            "form_status": Disclosures.objects.get(id=pk).status,
        })
        
    def post(self, request, format=None):
        requestData = request.data
        if AssuranceRisk.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = AssuranceRiskSerializers(data=data)
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
            rpData = request.data['assuranceRisk']
            rpData['advisorId'] = formData.advisorId.pk            
            serializer = AssuranceRiskSerializers(snippet, data=rpData)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            productTakenData = request.data['productTaken']
            AR_ProductTaken.objects.filter(formId=pk).delete()
            pt_searializer = AR_ProductTakenSerializer(data=productTakenData, many=True)
            if pt_searializer.is_valid():
                pt_searializer.save()
            else:
                print(pt_searializer.errors)
                return Response(pt_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            ar_bns_otherData = request.data['ar_bns_other']
            AR_BnS_Others.objects.filter(formId=pk).delete()
            dco_searializer = AR_BnS_Others_Serializer(data=ar_bns_otherData, many=True)
            if dco_searializer.is_valid():
                dco_searializer.save()
            else:
                print(dco_searializer.errors)
                return Response(dco_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            ar_busovprot_otherData = request.data['ar_busovprot_other']
            AR_BusOvProt_Others.objects.filter(formId=pk).delete()
            dic_searializer = AR_BusOvProt_Others_Serializer(data=ar_busovprot_otherData, many=True)
            if dic_searializer.is_valid():
                dic_searializer.save()
            else:
                print(dic_searializer.errors)
                return Response(dic_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            credit_otherDataData = request.data['credit_otherData']
            AR_CLARedm_Others.objects.filter(formId=pk).delete()
            drc_searializer = AR_CLARedm_Others_Serializer(data=credit_otherDataData, many=True)
            if drc_searializer.is_valid():
                drc_searializer.save()
            else:
                print(drc_searializer.errors)
                return Response(drc_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            debit_otherDataData = request.data['debit_otherData']
            AR_DLARedm_Others.objects.filter(formId=pk).delete()
            dco_searializer = AR_DLARedm_Others_Serializer(data=debit_otherDataData, many=True)
            if dco_searializer.is_valid():
                dco_searializer.save()
            else:
                print(dco_searializer.errors)
                return Response(dco_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            keyp_otherDataData = request.data['keyp_otherData']
            AR_KeyP_Others.objects.filter(formId=pk).delete()
            dic_searializer = AR_KeyP_Others_Serializer(data=keyp_otherDataData, many=True)
            if dic_searializer.is_valid():
                dic_searializer.save()
            else:
                print(dic_searializer.errors)
                return Response(dic_searializer.errors, status=status.HTTP_400_BAD_REQUEST)
            sureNLia_otherDataData = request.data['sureNLia_otherData']
            AR_SureNLia_Others.objects.filter(formId=pk).delete()
            drc_searializer = AR_SureNLia_Others_Serializer(data=sureNLia_otherDataData, many=True)
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