from datetime import datetime, timezone
from rest_framework import serializers
from .models import Notifications, CalendarEvents

class NotificationsSerializer(serializers.ModelSerializer):
    class Meta():
        model = Notifications
        fields = '__all__'

    def create(self, validated_data):
        return Notifications.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        return super().update(instance, validated_data)

class CalendarEventsSerializer(serializers.ModelSerializer):
    class Meta():
        model = CalendarEvents
        fields = '__all__'

    def create(self, validated_data):
        return CalendarEvents.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        return super().update(instance, validated_data)