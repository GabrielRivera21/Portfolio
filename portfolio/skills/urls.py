from django.conf.urls import url

from . import views

urlpatterns = [
    url(
        r'skills/(?P<pk>\d+)/$',
        views.SpecificSkillView.as_view()
    ),
    url(
        r'skills/$',
        views.SkillView.as_view()
    ),
]
