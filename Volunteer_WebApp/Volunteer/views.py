from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from django.http import Http404

from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group,User
from django.contrib import messages

from rest_framework import viewsets,permissions
from .serializers import VolunteerSerializer, OrganizationSerializer, EventsSerializer

from .models import Organization_Official, Volunteer, Events

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .decorators import allowed_users, unauthenticated_user

# Create your views here.

class VolunteerView(viewsets.ModelViewSet):
    """
    List all volunteers, or Create, Delete, Update volunteer.
    """
    serializer_class = VolunteerSerializer
    queryset = Volunteer.objects.all()
    permission_classes = [permissions.IsAuthenticated]

class OrganizationList(viewsets.ModelViewSet):
    """
    List all Organizations, or Create, Delete, Update Organization.
    """
    serializer_class = OrganizationSerializer
    queryset = Organization_Official.objects.all()
    permission_classes = [permissions.IsAuthenticated]



class EventsList(viewsets.ModelViewSet):
    """
    List all Events, or Create, Delete, Update Event.
    """
    serializer_class = EventsSerializer
    queryset = Events.objects.all()
    permission_classes = [permissions.IsAuthenticated]
