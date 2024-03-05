from datetime import datetime, timedelta
from data.models import Disclosures, ShortTermInsurancePersonal, STIP_Loss, STIP_Sec_AddProp, STIP_Sec_Build, STIP_Sec_HC, STIP_Sec_LegalA, STIP_Sec_MotorC, STIP_Sec_PersonalLL, STIP_Sec_Trailer, STIP_Sec_Vehicle, STIP_Sec_WaterC
from data.serializers import ShortTermInsurancePersonalSerializers, STIP_Loss_Serializer, STIP_Sec_AddProp_Serializer, STIP_Sec_Build_Serializer, STIP_Sec_HC_Serializer, STIP_Sec_LegalA_Serializer, STIP_Sec_MotorC_Serializer, STIP_Sec_PersonalLL_Serializer, STIP_Sec_Trailer_Serializer, STIP_Sec_Vehicle_Serializer, STIP_Sec_WaterC_Serializer
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class ShortTermInsurancePersonalAPIs(APIView):

    def get_object(self, pk):
        try:
            return ShortTermInsurancePersonal.objects.get(formId=pk)
        except ShortTermInsurancePersonal.DoesNotExist:
            formData = Disclosures.objects.filter(id=pk)
            if formData.exists():
                formData = formData.first()
                ai_data = {
                    "advisorId" : formData.advisorId.pk,
                    "formId" : pk,
                }
                ai_serializer = ShortTermInsurancePersonalSerializers(data=ai_data)
                if ai_serializer.is_valid():
                    ai_serializer.create(ai_serializer.is_validated_data)
                    return ShortTermInsurancePersonal.objects.get(formId=pk)
                else:
                    print(ai_serializer.errors)
            raise Http404


    def get(self, request, pk, format=None):
        snippets = self.get_object(pk)
        serializer = ShortTermInsurancePersonalSerializers(snippets)
        stip_loss_data = []      
        stip_loss = STIP_Loss.objects.filter(formId=pk)
        if stip_loss.exists():
            stip_loss_serializer = STIP_Loss_Serializer(stip_loss, many=True)
            stip_loss_data = stip_loss_serializer.data
        stip_sec_addprop_data = []
        stip_sec_addprop = STIP_Sec_AddProp.objects.filter(formId=pk)
        if stip_sec_addprop.exists():
            stip_sec_addprop_serializer = STIP_Sec_AddProp_Serializer(stip_sec_addprop, many=True)
            stip_sec_addprop_data = stip_sec_addprop_serializer.data
        stip_sec_build_data = []
        stip_sec_build = STIP_Sec_Build.objects.filter(formId=pk)
        if stip_sec_build.exists():
            stip_sec_build_serializer = STIP_Sec_Build_Serializer(stip_sec_build, many=True)
            stip_sec_build_data = stip_sec_build_serializer.data
        stip_sec_hc_data = []
        stip_sec_hc = STIP_Sec_HC.objects.filter(formId=pk)
        if stip_sec_hc.exists():
            stip_sec_hc_serializer = STIP_Sec_HC_Serializer(stip_sec_hc, many=True)
            stip_sec_hc_data = stip_sec_hc_serializer.data
        stip_sec_legala_data = []
        stip_sec_legala = STIP_Sec_LegalA.objects.filter(formId=pk)
        if stip_sec_legala.exists():
            stip_sec_legala_serializer = STIP_Sec_LegalA_Serializer(stip_sec_legala, many=True)
            stip_sec_legala_data = stip_sec_legala_serializer.data
        stip_sec_motorc_data = []
        stip_sec_motorc = STIP_Sec_MotorC.objects.filter(formId=pk)
        if stip_sec_motorc.exists():
            stip_sec_motorc_serializer = STIP_Sec_MotorC_Serializer(stip_sec_motorc, many=True)
            stip_sec_motorc_data = stip_sec_motorc_serializer.data
        stip_sec_personalll_data = []
        stip_sec_personalll = STIP_Sec_PersonalLL.objects.filter(formId=pk)
        if stip_sec_personalll.exists():
            stip_sec_personalll_serializer = STIP_Sec_PersonalLL_Serializer(stip_sec_personalll, many=True)
            stip_sec_personalll_data = stip_sec_personalll_serializer.data
        stip_sec_trailer_data = []
        stip_sec_trailer = STIP_Sec_Trailer.objects.filter(formId=pk)
        if stip_sec_trailer.exists():
            stip_sec_trailer_serializer = STIP_Sec_Trailer_Serializer(stip_sec_trailer, many=True)
            stip_sec_trailer_data = stip_sec_trailer_serializer.data
        stip_sec_vehicle_data = []
        stip_sec_vehicle = STIP_Sec_Vehicle.objects.filter(formId=pk)
        if stip_sec_vehicle.exists():
            stip_sec_vehicle_serializer = STIP_Sec_Vehicle_Serializer(stip_sec_vehicle, many=True)
            stip_sec_vehicle_data = stip_sec_vehicle_serializer.data
        stip_sec_waterc_data = []
        stip_sec_waterc = STIP_Sec_WaterC.objects.filter(formId=pk)
        if stip_sec_waterc.exists():
            stip_sec_waterc_serializer = STIP_Sec_WaterC_Serializer(stip_sec_waterc, many=True)
            stip_sec_waterc_data = stip_sec_waterc_serializer.data
        return Response({
            "st_personal": serializer.data,
            "stip_loss": stip_loss_data,
            "stip_sec_addprop": stip_sec_addprop_data,
            "stip_sec_build": stip_sec_build_data,
            "stip_sec_hc": stip_sec_hc_data,
            "stip_sec_legala": stip_sec_legala_data,
            "stip_sec_motorc": stip_sec_motorc_data,
            "stip_sec_personalll": stip_sec_personalll_data,
            "stip_sec_trailer": stip_sec_trailer_data,
            "stip_sec_vehicle": stip_sec_vehicle_data,
            "stip_sec_waterc": stip_sec_waterc_data,
            "form_status": Disclosures.objects.get(id=pk).status,

        }, 200)
        
    def post(self, request, format=None):
        requestData = request.data
        if ShortTermInsurancePersonal.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = ShortTermInsurancePersonalSerializers(data=data)
        if serializer.is_valid():
            s = serializer.create(serializer.is_validated_data)
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
            STP_Data = request.data['st_personal']
            STP_Data['advisorId'] = formData.advisorId.pk            
            serializer = ShortTermInsurancePersonalSerializers(snippets, data=STP_Data)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stip_loss_Data = request.data['stip_loss']
            STIP_Loss.objects.filter(formId=pk).delete()
            stip_loss_serializer = STIP_Loss_Serializer(data=stip_loss_Data, many=True)
            if stip_loss_serializer.is_valid():
                stip_loss_serializer.save()
            else:
                print(stip_loss_serializer.errors)
                return Response(stip_loss_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            # 
            stip_sec_addprop_Data = request.data['stip_sec_addprop']
            STIP_Sec_AddProp.objects.filter(formId=pk).delete()
            stip_sec_addprop_serializer = STIP_Sec_AddProp_Serializer(data=stip_sec_addprop_Data, many=True)    
            if stip_sec_addprop_serializer.is_valid():
                stip_sec_addprop_serializer.save()
            else:
                print(stip_sec_addprop_serializer.errors)
                return Response(stip_sec_addprop_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            #
            stip_sec_build_Data = request.data['stip_sec_build']
            STIP_Sec_Build.objects.filter(formId=pk).delete()
            stip_sec_build_serializer = STIP_Sec_Build_Serializer(data=stip_sec_build_Data, many=True)
            if stip_sec_build_serializer.is_valid():
                stip_sec_build_serializer.save()
            else:
                print(stip_sec_build_serializer.errors)
                return Response(stip_sec_build_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            #
            stip_sec_hc_Data = request.data['stip_sec_hc']
            STIP_Sec_HC.objects.filter(formId=pk).delete()
            stip_sec_hc_serializer = STIP_Sec_HC_Serializer(data=stip_sec_hc_Data, many=True)
            if stip_sec_hc_serializer.is_valid():
                stip_sec_hc_serializer.save()
            else:
                print(stip_sec_hc_serializer.errors)
                return Response(stip_sec_hc_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            #
            stip_sec_legala_Data = request.data['stip_sec_legala'] 
            STIP_Sec_LegalA.objects.filter(formId=pk).delete()
            stip_sec_legala_serializer = STIP_Sec_LegalA_Serializer(data=stip_sec_legala_Data, many=True)
            if stip_sec_legala_serializer.is_valid():
                stip_sec_legala_serializer.save()
            else:
                print(stip_sec_legala_serializer.errors)
                return Response(stip_sec_hc_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            #
            stip_sec_motorc_Data = request.data['stip_sec_motorc'] 
            STIP_Sec_MotorC.objects.filter(formId=pk).delete()
            stip_sec_motorc_serializer = STIP_Sec_MotorC_Serializer(data=stip_sec_motorc_Data, many=True)
            if stip_sec_motorc_serializer.is_valid():
                stip_sec_motorc_serializer.save()
            else:
                print(stip_sec_motorc_serializer.errors)
                return Response(stip_sec_hc_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            #
            stip_sec_personalll_Data = request.data['stip_sec_personalll']
            STIP_Sec_PersonalLL.objects.filter(formId=pk).delete()
            stip_sec_personalll_serializer = STIP_Sec_PersonalLL_Serializer(data=stip_sec_personalll_Data, many=True)
            if stip_sec_personalll_serializer.is_valid():
                stip_sec_personalll_serializer.save()
            else:
                print(stip_sec_personalll_serializer.errors)
                return Response(stip_sec_hc_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            #
            stip_sec_trailer_Data = request.data['stip_sec_trailer']
            STIP_Sec_Trailer.objects.filter(formId=pk).delete()
            stip_sec_trailer_serializer = STIP_Sec_Trailer_Serializer(data=stip_sec_trailer_Data, many=True)
            if stip_sec_trailer_serializer.is_valid():
                stip_sec_trailer_serializer.save()
            else:
                print(stip_sec_trailer_serializer.errors)
                return Response(stip_sec_hc_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            #
            stip_sec_vehicle_Data = request.data['stip_sec_vehicle']
            STIP_Sec_Vehicle.objects.filter(formId=pk).delete()
            stip_sec_vehicle_serializer = STIP_Sec_Vehicle_Serializer(data=stip_sec_vehicle_Data, many=True)
            if stip_sec_vehicle_serializer.is_valid():
                stip_sec_vehicle_serializer.save()
            else:
                print(stip_sec_vehicle_serializer.errors)
                return Response(stip_sec_hc_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            #
            stip_sec_waterc_Data = request.data['stip_sec_waterc']
            STIP_Sec_WaterC.objects.filter(formId=pk).delete()
            stip_sec_waterc_serializer = STIP_Sec_WaterC_Serializer(data=stip_sec_waterc_Data, many=True)
            if stip_sec_waterc_serializer.is_valid():
                stip_sec_waterc_serializer.save()
            else:
                print(stip_sec_waterc_serializer.errors)
                return Response(stip_sec_hc_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
            return Response(serializer.data, 200)

    def delete(self, request, pk, format=None):
        snippets = self.get_object(pk)
        snippets.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 