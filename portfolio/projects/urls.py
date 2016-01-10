from django.conf.urls import url

from . import views

urlpatterns = [
    url(
        r'projects/(?P<pk>\d+)/$',
        views.SpecificProjectView.as_view()
    ),
    url(
        r'projects/$',
        views.ProjectView.as_view()
    ),
]
