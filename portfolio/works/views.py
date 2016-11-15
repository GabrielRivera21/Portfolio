from rest_framework import generics

from django.shortcuts import get_object_or_404

from .models import WorkExperience
from .serializers import WorkExperienceSerializer


class WorkExperienceView(generics.ListAPIView):
    serializer_class = WorkExperienceSerializer
    queryset = WorkExperience.objects.all().order_by('-from_date')

    def get(self, request, *args, **kwargs):
        """
        Returns all of the Work Experiences
        """
        return super(WorkExperienceView, self).get(request, *args, **kwargs)


class SpecificWorkExperienceView(generics.RetrieveAPIView):
    serializer_class = WorkExperienceSerializer

    def get_object(self):
        return get_object_or_404(WorkExperience, pk=self.kwargs['pk'])

    def get(self, request, *args, **kwargs):
        """
        Returns the Skill of the specified ID
        """
        return super(SpecificWorkExperienceView, self).get(request, *args, **kwargs)
