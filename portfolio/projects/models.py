from django.db import models

from ..works.models import WorkExperience
from ..utils.models import BaseModel


class Project(BaseModel):
    title = models.CharField(max_length=100)
    description = models.TextField()
    skills = models.ManyToManyField(to='skills.Skill', blank=True)
    work_experience = models.ForeignKey(WorkExperience, blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return "id: %d title: %s" % (self.id, self.title)
