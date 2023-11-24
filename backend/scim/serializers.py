from rest_framework.serializers import ModelSerializer
from .models import APIKeys

class APIKeysSerializers(ModelSerializer):
    class Meta:
        model = APIKeys
        fields = '__all__'

    def create(self, validated_data):
        return APIKeys.objects.create(**validated_data)