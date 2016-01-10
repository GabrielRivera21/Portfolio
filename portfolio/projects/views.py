from rest_framework import generics

from django.shortcuts import get_object_or_404

from .models import Project
from .serializers import ProjectSerializer


class ProjectView(generics.ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

    def get(self, request, *args, **kwargs):
        """
        Returns all of the Projects
        """
        return super(ProjectView, self).get(request, *args, **kwargs)


class SpecificProjectView(generics.RetrieveAPIView):
    serializer_class = ProjectSerializer

    def get_object(self):
        return get_object_or_404(Project, pk=self.kwargs['pk'])

    def get(self, request, *args, **kwargs):
        """
        Returns the project of the specified id
        """
        return super(SpecificProjectView, self).get(request, *args, **kwargs)
