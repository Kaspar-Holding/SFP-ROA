from rest_framework import serializers

from .models import ComplianceDocument, GateKeeping, DocumentComments, arc_question_header, arc_questions, arc, review_status


class ComplianceDocument_Serializer(serializers.ModelSerializer):
    class Meta():
        model = ComplianceDocument
        fields = '__all__'

    def create(self, validated_data):
        return ComplianceDocument.objects.create(**validated_data)

class GateKeeping_Serializer(serializers.ModelSerializer):
    class Meta():
        model = GateKeeping
        fields = '__all__'

    def create(self, validated_data):
        return GateKeeping.objects.create(**validated_data)

class DocumentComments_Serializer(serializers.ModelSerializer):
    class Meta():
        model = DocumentComments
        fields = '__all__'

    def create(self, validated_data):
        return DocumentComments.objects.create(**validated_data)

class arc_Serializer(serializers.ModelSerializer):
    class Meta():
        model = arc
        fields = '__all__'

    def create(self, validated_data):
        return arc.objects.create(**validated_data)

class arc_questions_Serializer(serializers.ModelSerializer):
    class Meta():
        model = arc_questions
        fields = '__all__'

    def create(self, validated_data):
        return arc_questions.objects.create(**validated_data)

class arc_question_header_Serializer(serializers.ModelSerializer):
    class Meta():
        model = arc_question_header
        fields = '__all__'

    def create(self, validated_data):
        return arc_question_header.objects.create(**validated_data)

class review_status_Serializer(serializers.ModelSerializer):
    class Meta():
        model = review_status
        fields = '__all__'

    def create(self, validated_data):
        return review_status.objects.create(**validated_data)