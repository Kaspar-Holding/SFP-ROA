from datetime import datetime, timezone
from rest_framework import serializers
from .models import Log, LogKPIs, LogContent

class LogSerializer(serializers.ModelSerializer):
    class Meta():
        model = Log
        fields = '__all__'

    def create(self, validated_data):
        return Log.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        return super().update(instance, validated_data)

class LogKPIsSerializer(serializers.ModelSerializer):
    class Meta():
        model = LogKPIs
        fields = '__all__'

    def create(self, validated_data):
        return LogKPIs.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        return super().update(instance, validated_data)

class LogContentSerializer(serializers.ModelSerializer):
    class Meta():
        model = LogContent
        fields = '__all__'

    def create(self, validated_data):
        return LogContent.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        return super().update(instance, validated_data)