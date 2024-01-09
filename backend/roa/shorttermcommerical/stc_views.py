from datetime import datetime, timedelta
from data.models import Disclosures, ShortTermInsuranceCommerical, STIC_Loss, STIC_Sec_Fire, STIC_Sec_2, STIC_Sec_3, STIC_Sec_4, STIC_Sec_5, STIC_Sec_6, STIC_Sec_7, STIC_Sec_8, STIC_Sec_9, STIC_Sec_10, STIC_Sec_11, STIC_Sec_12, STIC_Sec_13, STIC_Sec_14, STIC_Sec_15, STIC_Sec_16, STIC_Sec_17, STIC_Sec_18, STIC_Sec_19, STIC_Sec_20, STIC_Sec_21
from data.serializers import ShortTermInsuranceCommericalSerializers, STIC_Loss_Serializer, STIC_Sec_Fire_Serializer, STIC_Sec_2_Serializer, STIC_Sec_3_Serializer, STIC_Sec_4_Serializer, STIC_Sec_5_Serializer, STIC_Sec_6_Serializer, STIC_Sec_7_Serializer, STIC_Sec_8_Serializer, STIC_Sec_9_Serializer, STIC_Sec_10_Serializer, STIC_Sec_11_Serializer, STIC_Sec_12_Serializer, STIC_Sec_13_Serializer, STIC_Sec_14_Serializer, STIC_Sec_15_Serializer, STIC_Sec_16_Serializer, STIC_Sec_17_Serializer, STIC_Sec_18_Serializer, STIC_Sec_19_Serializer, STIC_Sec_20_Serializer, STIC_Sec_21_Serializer
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class ShortTermInsuranceCommericalAPIs(APIView):

    def get_object(self, pk):
        try:
            return ShortTermInsuranceCommerical.objects.get(formId=pk)
        except ShortTermInsuranceCommerical.DoesNotExist:
            formData = Disclosures.objects.filter(id=pk)
            if formData.exists():
                formData = formData.first()
                ai_data = {
                    "advisorId" : formData.advisorId,
                    "formId" : pk,
                }
                ai_serializer = ShortTermInsuranceCommericalSerializers(data=ai_data)
                if ai_serializer.is_valid():
                    ai_serializer.create(ai_serializer.validated_data)
                    return ShortTermInsuranceCommerical.objects.get(formId=pk)
                else:
                    print(ai_serializer.errors)
            raise Http404


    def get(self, request, pk, format=None):
        snippets = self.get_object(pk)
        serializer = ShortTermInsuranceCommericalSerializers(snippets)
        loss_data = []
        loss = STIC_Loss.objects.filter(formId=pk)
        if loss.exists():
            loss_data = STIC_Loss_Serializer(loss,many=True).data
        stic_fire_data = []
        stic_fire = STIC_Sec_Fire.objects.filter(formId=pk)
        if stic_fire.exists():
            stic_fire_data = STIC_Sec_Fire_Serializer(stic_fire,many=True).data
        stic_2_data = []
        stic_2 = STIC_Sec_2.objects.filter(formId=pk)
        if stic_2.exists():
            stic_2_data = STIC_Sec_2_Serializer(stic_2,many=True).data
        stic_3_data = []
        stic_3 = STIC_Sec_3.objects.filter(formId=pk)
        if stic_3.exists():
            stic_3_data = STIC_Sec_3_Serializer(stic_3,many=True).data
        stic_4_data = []
        stic_4 = STIC_Sec_4.objects.filter(formId=pk)
        if stic_4.exists():
            stic_4_data = STIC_Sec_4_Serializer(stic_4,many=True).data
        stic_5_data = []    
        stic_5 = STIC_Sec_5.objects.filter(formId=pk)
        if stic_5.exists():
            stic_5_data = STIC_Sec_5_Serializer(stic_5,many=True).data
        stic_6_data = []
        stic_6 = STIC_Sec_6.objects.filter(formId=pk)
        if stic_6.exists():
            stic_6_data = STIC_Sec_6_Serializer(stic_6,many=True).data
        stic_7_data = []
        stic_7 = STIC_Sec_7.objects.filter(formId=pk)
        if stic_7.exists():
            stic_7_data = STIC_Sec_7_Serializer(stic_7,many=True).data
        stic_8_data = []
        stic_8 = STIC_Sec_8.objects.filter(formId=pk)
        if stic_8.exists():
            stic_8_data = STIC_Sec_8_Serializer(stic_8,many=True).data
        stic_9_data = []
        stic_9 = STIC_Sec_9.objects.filter(formId=pk)
        if stic_9.exists():
            stic_9_data = STIC_Sec_9_Serializer(stic_9,many=True).data
        stic_10_data = []
        stic_10 = STIC_Sec_10.objects.filter(formId=pk)
        if stic_10.exists():
            stic_10_data = STIC_Sec_10_Serializer(stic_10,many=True).data
        stic_11_data = []
        stic_11 = STIC_Sec_11.objects.filter(formId=pk)
        if stic_11.exists():
            stic_11_data = STIC_Sec_11_Serializer(stic_11,many=True).data
        stic_12_data = []
        stic_12 = STIC_Sec_12.objects.filter(formId=pk)
        if stic_12.exists():
            stic_12_data = STIC_Sec_12_Serializer(stic_12,many=True).data
        stic_13_data = []
        stic_13 = STIC_Sec_13.objects.filter(formId=pk)
        if stic_13.exists():
            stic_13_data = STIC_Sec_13_Serializer(stic_13,many=True).data
        stic_14_data = []
        stic_14 = STIC_Sec_14.objects.filter(formId=pk)
        if stic_14.exists():
            stic_14_data = STIC_Sec_14_Serializer(stic_14,many=True).data
        stic_15_data = []
        stic_15 = STIC_Sec_15.objects.filter(formId=pk)
        if stic_15.exists():
            stic_15_data = STIC_Sec_15_Serializer(stic_15,many=True).data
        stic_16_data = []
        stic_16 = STIC_Sec_16.objects.filter(formId=pk)
        if stic_16.exists():
            stic_16_data = STIC_Sec_16_Serializer(stic_16,many=True).data
        stic_17_data = []
        stic_17 = STIC_Sec_17.objects.filter(formId=pk)
        if stic_17.exists():
            stic_17_data = STIC_Sec_17_Serializer(stic_17,many=True).data
        stic_18_data = []
        stic_18 = STIC_Sec_18.objects.filter(formId=pk)
        if stic_18.exists():
            stic_18_data = STIC_Sec_18_Serializer(stic_18,many=True).data
        stic_19_data = []
        stic_19 = STIC_Sec_19.objects.filter(formId=pk)
        if stic_19.exists():
            stic_19_data = STIC_Sec_19_Serializer(stic_19,many=True).data
        stic_20_data = []
        stic_20 = STIC_Sec_20.objects.filter(formId=pk)
        if stic_20.exists():
            stic_20_data = STIC_Sec_20_Serializer(stic_20,many=True).data
        stic_21_data = []
        stic_21 = STIC_Sec_21.objects.filter(formId=pk)
        if stic_21.exists():
            stic_21_data = STIC_Sec_21_Serializer(stic_21,many=True).data

        
        return Response({
            "st_commerical": serializer.data,
            "stic_loss": loss_data,
            "stic_fire": stic_fire_data,
            "stic_2": stic_2_data,
            "stic_3": stic_3_data,
            "stic_4": stic_4_data,
            "stic_5": stic_5_data,
            "stic_6": stic_6_data,
            "stic_7": stic_7_data,
            "stic_8": stic_8_data,
            "stic_9": stic_9_data,
            "stic_10": stic_10_data,
            "stic_11": stic_11_data,
            "stic_12": stic_12_data,
            "stic_13": stic_13_data,
            "stic_14": stic_14_data,
            "stic_15": stic_15_data,
            "stic_16": stic_16_data,
            "stic_17": stic_17_data,
            "stic_18": stic_18_data,
            "stic_19": stic_19_data,
            "stic_20": stic_20_data,
            "stic_21": stic_21_data,
        }, 200)
        
    def post(self, request, format=None):
        requestData = request.data
        if ShortTermInsuranceCommerical.objects.filter(advisorId=request.user.pk, clientIdNumber=requestData['clientIdNumber']).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        data = requestData
        data['advisorId'] = request.user.pk   
        serializer = ShortTermInsuranceCommericalSerializers(data=data)
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
            stic_data = request.data['st_commerical']
            stic_data['advisorId'] = formData.advisorId
            serializer = ShortTermInsuranceCommericalSerializers(snippets, data=stic_data)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            loss_data = request.data['stic_loss']
            STIC_Loss.objects.filter(formId=pk).delete()
            loss_serializer = STIC_Loss_Serializer(data=loss_data, many=True)
            if loss_serializer.is_valid():
                loss_serializer.save()
            else:
                print(loss_serializer.errors)
                return Response(loss_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_fire_data = request.data['stic_fire']
            STIC_Sec_Fire.objects.filter(formId=pk).delete()
            stic_fire_serializer = STIC_Sec_Fire_Serializer(data=stic_fire_data, many=True)
            if stic_fire_serializer.is_valid():
                stic_fire_serializer.save()
            else:
                print(stic_fire_serializer.errors)
                return Response(stic_fire_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_2_data = request.data['stic_2']
            STIC_Sec_2.objects.filter(formId=pk).delete()
            stic_2_serializer = STIC_Sec_2_Serializer(data=stic_2_data, many=True)
            if stic_2_serializer.is_valid():
                stic_2_serializer.save()
            else:
                print(stic_2_serializer.errors)
                return Response(stic_2_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_3_data = request.data['stic_3']
            STIC_Sec_3.objects.filter(formId=pk).delete()
            stic_3_serializer = STIC_Sec_3_Serializer(data=stic_3_data, many=True)
            if stic_3_serializer.is_valid():
                stic_3_serializer.save()
            else:
                print(stic_3_serializer.errors)
                return Response(stic_3_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_4_data = request.data['stic_4']
            STIC_Sec_4.objects.filter(formId=pk).delete()
            stic_4_serializer = STIC_Sec_4_Serializer(data=stic_4_data, many=True)
            if stic_4_serializer.is_valid():
                stic_4_serializer.save()
            else:
                print(stic_4_serializer.errors)
                return Response(stic_4_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_5_data = request.data['stic_5']
            STIC_Sec_5.objects.filter(formId=pk).delete()
            stic_5_serializer = STIC_Sec_5_Serializer(data=stic_5_data, many=True)
            if stic_5_serializer.is_valid():
                stic_5_serializer.save()
            else:
                print(stic_5_serializer.errors)
                return Response(stic_5_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_6_data = request.data['stic_6']
            STIC_Sec_6.objects.filter(formId=pk).delete()
            stic_6_serializer = STIC_Sec_6_Serializer(data=stic_6_data, many=True)
            if stic_6_serializer.is_valid():
                stic_6_serializer.save()
            else:
                print(stic_6_serializer.errors)
                return Response(stic_6_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_7_data = request.data['stic_7']
            STIC_Sec_7.objects.filter(formId=pk).delete()
            stic_7_serializer = STIC_Sec_7_Serializer(data=stic_7_data, many=True)
            if stic_7_serializer.is_valid():
                stic_7_serializer.save()
            else:
                print(stic_7_serializer.errors)
                return Response(stic_7_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_8_data = request.data['stic_8']
            STIC_Sec_8.objects.filter(formId=pk).delete()
            stic_8_serializer = STIC_Sec_8_Serializer(data=stic_8_data, many=True)
            if stic_8_serializer.is_valid():
                stic_8_serializer.save()
            else:
                print(stic_8_serializer.errors)
                return Response(stic_8_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_9_data = request.data['stic_9']
            STIC_Sec_9.objects.filter(formId=pk).delete()
            stic_9_serializer = STIC_Sec_9_Serializer(data=stic_9_data, many=True)
            if stic_9_serializer.is_valid():
                stic_9_serializer.save()
            else:
                print(stic_9_serializer.errors)
                return Response(stic_9_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_10_data = request.data['stic_10']
            STIC_Sec_10.objects.filter(formId=pk).delete()
            stic_10_serializer = STIC_Sec_10_Serializer(data=stic_10_data, many=True)
            if stic_10_serializer.is_valid():
                stic_10_serializer.save()
            else:
                print(stic_10_serializer.errors)
                return Response(stic_10_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_11_data = request.data['stic_11']
            STIC_Sec_11.objects.filter(formId=pk).delete()
            stic_11_serializer = STIC_Sec_11_Serializer(data=stic_11_data, many=True)
            if stic_11_serializer.is_valid():
                stic_11_serializer.save()
            else:
                print(stic_11_serializer.errors)
                return Response(stic_11_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_12_data = request.data['stic_12']
            STIC_Sec_12.objects.filter(formId=pk).delete()
            stic_12_serializer = STIC_Sec_12_Serializer(data=stic_12_data, many=True)
            if stic_12_serializer.is_valid():
                stic_12_serializer.save()
            else:
                print(stic_12_serializer.errors)
                return Response(stic_12_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_13_data = request.data['stic_13']
            STIC_Sec_13.objects.filter(formId=pk).delete()
            stic_13_serializer = STIC_Sec_13_Serializer(data=stic_13_data, many=True)
            if stic_13_serializer.is_valid():
                stic_13_serializer.save()
            else:
                print(stic_13_serializer.errors)
                return Response(stic_13_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_14_data = request.data['stic_14']
            STIC_Sec_14.objects.filter(formId=pk).delete()
            stic_14_serializer = STIC_Sec_14_Serializer(data=stic_14_data, many=True)
            if stic_14_serializer.is_valid():
                stic_14_serializer.save()
            else:
                print(stic_14_serializer.errors)
                return Response(stic_14_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_15_data = request.data['stic_15']
            STIC_Sec_15.objects.filter(formId=pk).delete()
            stic_15_serializer = STIC_Sec_15_Serializer(data=stic_15_data, many=True)
            if stic_15_serializer.is_valid():
                stic_15_serializer.save()
            else:
                print(stic_15_serializer.errors)
                return Response(stic_15_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_16_data = request.data['stic_16']
            STIC_Sec_16.objects.filter(formId=pk).delete()
            stic_16_serializer = STIC_Sec_16_Serializer(data=stic_16_data, many=True)
            if stic_16_serializer.is_valid():
                stic_16_serializer.save()
            else:
                print(stic_16_serializer.errors)
                return Response(stic_16_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_17_data = request.data['stic_17']
            STIC_Sec_17.objects.filter(formId=pk).delete()
            stic_17_serializer = STIC_Sec_17_Serializer(data=stic_17_data, many=True)
            if stic_17_serializer.is_valid():
                stic_17_serializer.save()
            else:
                print(stic_17_serializer.errors)
                return Response(stic_17_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_18_data = request.data['stic_18']
            STIC_Sec_18.objects.filter(formId=pk).delete()
            stic_18_serializer = STIC_Sec_18_Serializer(data=stic_18_data, many=True)
            if stic_18_serializer.is_valid():
                stic_18_serializer.save()
            else:
                print(stic_18_serializer.errors)
                return Response(stic_18_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_19_data = request.data['stic_19']
            STIC_Sec_19.objects.filter(formId=pk).delete()
            stic_19_serializer = STIC_Sec_19_Serializer(data=stic_19_data, many=True)
            if stic_19_serializer.is_valid():
                stic_19_serializer.save()
            else:
                print(stic_19_serializer.errors)
                return Response(stic_19_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_20_data = request.data['stic_20']
            STIC_Sec_20.objects.filter(formId=pk).delete()
            stic_20_serializer = STIC_Sec_20_Serializer(data=stic_20_data, many=True)
            if stic_20_serializer.is_valid():
                stic_20_serializer.save()
            else:
                print(stic_20_serializer.errors)
                return Response(stic_20_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            stic_21_data = request.data['stic_21']
            STIC_Sec_21.objects.filter(formId=pk).delete()
            stic_21_serializer = STIC_Sec_21_Serializer(data=stic_21_data, many=True)
            if stic_21_serializer.is_valid():
                stic_21_serializer.save()
            else:
                print(stic_21_serializer.errors)
                return Response(stic_21_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            

            return Response(serializer.data, 200)

    def delete(self, request, pk, format=None):
        snippets = self.get_object(pk)
        snippets.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 