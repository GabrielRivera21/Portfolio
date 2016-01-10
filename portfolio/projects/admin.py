from django.contrib import admin

from .models import Project, ProjectImage


class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'url',
        'github_url'
    )

    search_fields = ('title',)


class ProjectImageAdmin(admin.ModelAdmin):
    list_display = (
        'project',
        'image'
    )

    search_fields = ('project__title',)


admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage, ProjectImageAdmin)
