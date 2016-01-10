from django.conf.urls import url

from . import views

urlpatterns = [
    url(
        r'work/(?P<pk>\d+)/$',
        views.SpecificWorkExperienceView.as_view()
    ),
    url(
        r'work/$',
        views.WorkExperienceView.as_view()
    ),
]
