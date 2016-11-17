from django.db import models
from ..utils.models import BaseModel


class WorkExperience(BaseModel):
    employer = models.CharField(max_length=100)
    employer_logo = models.ImageField(upload_to='employers', blank=True, null=True)
    position = models.CharField(max_length=50)
    from_date = models.DateField()
    to_date = models.DateField(null=True, blank=True)
    currently_working = models.BooleanField(default=False)
    description = models.TextField()
    address = models.CharField(max_length=150, blank=True, null=True)
    latitude = models.DecimalField(max_digits=18, decimal_places=6, default=0)
    longitude = models.DecimalField(max_digits=18, decimal_places=6, default=0)

    def __str__(self):
        return self.employer
