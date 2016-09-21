from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.actionkids, name='header'),
    url(r'^$', views.home, name='home'),
    url(r'^$', views.info, name='info'),
]