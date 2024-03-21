from rest_framework import serializers
from .models import backup, roa_backup, rp_backup, ip_backup, ar_backup, ai_backup, emp_backup, fiduciary_backup, stc_backup, stp_backup, medical_backup, gap_cover_backup

class backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = backup
        fields = '__all__'

    def create(self, validated_data):
        return backup.objects.create(**validated_data)

class roa_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = roa_backup
        fields = '__all__'

    def create(self, validated_data):
        return roa_backup.objects.create(**validated_data)

class rp_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = rp_backup
        fields = '__all__'

    def create(self, validated_data):
        return rp_backup.objects.create(**validated_data)

class ip_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = ip_backup
        fields = '__all__'

    def create(self, validated_data):
        return ip_backup.objects.create(**validated_data)

class ar_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = ar_backup
        fields = '__all__'

    def create(self, validated_data):
        return ar_backup.objects.create(**validated_data)

class ai_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = ai_backup
        fields = '__all__'

    def create(self, validated_data):
        return ai_backup.objects.create(**validated_data)

class emp_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = emp_backup
        fields = '__all__'

    def create(self, validated_data):
        return emp_backup.objects.create(**validated_data)

class fiduciary_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = fiduciary_backup
        fields = '__all__'

    def create(self, validated_data):
        return fiduciary_backup.objects.create(**validated_data)

class stc_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = stc_backup
        fields = '__all__'

    def create(self, validated_data):
        return stc_backup.objects.create(**validated_data)

class stc_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = stc_backup
        fields = '__all__'

    def create(self, validated_data):
        return stc_backup.objects.create(**validated_data)

class medical_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = medical_backup
        fields = '__all__'

    def create(self, validated_data):
        return medical_backup.objects.create(**validated_data)

class gap_cover_backup_Serializer(serializers.ModelSerializer):
    class Meta():
        model = gap_cover_backup
        fields = '__all__'

    def create(self, validated_data):
        return gap_cover_backup.objects.create(**validated_data)