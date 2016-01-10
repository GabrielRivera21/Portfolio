from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):

    images = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = ('id', 'title', 'description',
                  'featured_image', 'skills', 'work_experience',
                  'url', 'github_url', 'images',)
