from django.db import models

from .constants import SKILL_TYPE
from ..utils.models import BaseModel


class Skill(BaseModel):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True)
    skill_type = models.CharField(max_length=2, choices=SKILL_TYPE)
    projects = models.ManyToManyField(to='projects.Project', blank=True)

    def __str__(self):
        return "id: %d name: %s" % (self.id, self.name)