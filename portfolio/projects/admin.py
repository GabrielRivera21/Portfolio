from django.contrib import admin

from .models import Project


class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'link',
        'github_link'
    )

    search_fields = ('title',)

admin.site.register(Project)
