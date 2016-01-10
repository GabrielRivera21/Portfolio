from django.contrib import admin

from .models import Skill


class SkillAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'description',
        'skill_type'
    )

    list_filter = ('skill_type',)
    search_fields = ('name',)


admin.site.register(Skill, SkillAdmin)
