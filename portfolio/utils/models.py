from django.db import models


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    modified_at = models.DateTimeField(auto_now_add=False, auto_now=True)

    class Meta:
        get_latest_by = 'modified_at'
        ordering = ('-modified_at', '-created_at')
        abstract = True
