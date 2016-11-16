from django.db import models

from ..works.models import WorkExperience
from ..utils.models import BaseModel


class Project(BaseModel):
    title = models.CharField(max_length=100)
    description = models.TextField()
    featured_image = models.ImageField(upload_to='projects-featured', blank=True, null=True)
    work_experience = models.ForeignKey(WorkExperience, blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return "id: %d title: %s" % (self.id, self.title)


class ProjectImage(BaseModel):
    project = models.ForeignKey(Project, related_name="images")
    image = models.ImageField(upload_to='projects')

    def __str__(self):
        return self.image.url
