import django_filters

from .constants import SKILL_TYPE
from .models import Skill


class SkillFilter(django_filters.FilterSet):
    skill_type = django_filters.ChoiceFilter(name="skill_type", choices=SKILL_TYPE)

    class Meta:
        model = Skill
        fields = ['skill_type',]
