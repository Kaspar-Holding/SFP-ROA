from turtle import update
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from .models import UserAccount, Form
from django.contrib.auth import get_user_model

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = {'id', 'email', 'name', 'password', 'is_staff', 'is_superuser'}

class UserAccountsSerializers(serializers.ModelSerializer):
    class Meta():
        model = UserAccount
        fields = {'id', 'email', 'name', 'password', 'is_staff', 'is_superuser'}

class FormSerializers(serializers.ModelSerializer):
    class Meta():
        model = Form
        fields = '__all__'
    

    def create(self, validated_data):
        return Form.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.advisor_id = validated_data.get('advisor_id', instance.advisor_id)
        instance.form_type = validated_data.get('form_type', instance.form_type)
        instance.client_name = validated_data.get('client_name', instance.client_name)
        instance.client_id = validated_data.get('client_id', instance.client_id)
        instance.client_address = validated_data.get('client_address', instance.client_address)
        instance.client_email = validated_data.get('client_email', instance.client_email)
        # client_financial_advisor = advisor_id
        instance.client_date_of_birth = validated_data.get('client_date_of_birth', instance.client_date_of_birth)
        instance.client_letter_of_introduction = validated_data.get('client_letter_of_introduction', instance.client_letter_of_introduction)
        instance.client_letter_of_introduction_reason = validated_data.get('client_letter_of_introduction_reason', instance.client_letter_of_introduction_reason)
        instance.client_fica = validated_data.get('client_fica', instance.client_fica)
        instance.client_fica_reason = validated_data.get('client_fica_reason', instance.client_fica_reason)
        instance.client_background_info = validated_data.get('client_background_info', instance.client_background_info)
        

        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance