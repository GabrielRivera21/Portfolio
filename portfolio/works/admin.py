from django.contrib import admin

from .models import WorkExperience


class WorkAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'employer',
        'position',
        'from_date',
        'to_date',
    )

    search_fields = ('employer',)

admin.site.register(WorkExperience, WorkAdmin)
