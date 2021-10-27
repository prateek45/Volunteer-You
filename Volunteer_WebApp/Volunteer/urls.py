from django.urls.conf import include
from django.urls import path
from rest_framework import routers
from Volunteer.rest_api import views

"""
The routers register endpoints for volunteers, organizations and events for All method calls : POST,PULL,GET and DELETE
"""
router = routers.DefaultRouter()
router.register(r'volunteers', views.VolunteerView, 'volunteer')
router.register(r'organizations', views.OrganizationView, 'organization')
router.register(r'events', views.EventsView, 'event')

urlpatterns = [
    path('api/', include(router.urls)),
]