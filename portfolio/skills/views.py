from rest_framework import generics

from django.shortcuts import get_object_or_404

from .models import Skill
from .serializers import SkillSerializer
from .filters import SkillFilter


class SkillView(generics.ListAPIView):
    serializer_class = SkillSerializer
    queryset = Skill.objects.all().order_by('-proficiency_level', 'name')
    filter_class = SkillFilter
    ordering_fields = ('proficiency_level', 'name')

    def get(self, request, *args, **kwargs):
        """
        Returns all of the skills, and you can filter by skill type<br>
        pl = Programming Languages<br>
        st = Software Tools<br>
        fr = Frameworks<br>
        dp = Deployment Environments
        ---
        parameters:
            - name: skill_type
              description: ('pl', 'st', 'fr', 'dp') see above.
              required: false
              type: string
              paramType: query
        """
        return super(SkillView, self).get(request, *args, **kwargs)


class SpecificSkillView(generics.RetrieveAPIView):
    serializer_class = SkillSerializer

    def get_object(self):
        return get_object_or_404(Skill, pk=self.kwargs['pk'])

    def get(self, request, *args, **kwargs):
        """
        Returns the Skill of the specified ID
        """
        return super(SpecificSkillView, self).get(self, *args, **kwargs)
