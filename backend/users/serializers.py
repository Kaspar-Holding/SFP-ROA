from rest_framework import serializers
from .models import flag_colors, flagged_users

class flag_colors_Serializer(serializers.ModelSerializer):
    class Meta():
        model = flag_colors
        fields = '__all__'

    def create(self, validated_data):
        return flag_colors.objects.create(**validated_data)
    
class flagged_users_Serializer(serializers.ModelSerializer):
    class Meta():
        model = flagged_users
        fields = '__all__'

    def create(self, validated_data):
        return flagged_users.objects.create(**validated_data)