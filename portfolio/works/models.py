from django.db import models
from ..utils.models import BaseModel


class WorkExperience(BaseModel):
    employer = models.CharField(max_length=100)
    position = models.CharField(max_length=50)
    from_date = models.DateField()
    to_date = models.DateField(null=True)
    currently_working = models.BooleanField(default=False)
    description = models.TextField()
    location = models.CharField(max_length=150)

    def __str__(self):
        return "id: %d employer: %s" % (self.id, self.employer)
