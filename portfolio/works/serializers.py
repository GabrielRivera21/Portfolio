from rest_framework import serializers

from .models import WorkExperience


class WorkExperienceSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkExperience
