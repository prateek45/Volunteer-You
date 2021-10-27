from rest_framework import viewsets
from .serializers import VolunteerSerializer, OrganizationSerializer, EventsSerializer
from Volunteer.models import Organization_Official, Volunteer, Events
from rest_framework.parsers import FormParser, MultiPartParser
# Create your views here.

class VolunteerView(viewsets.ModelViewSet):
    """
    List all volunteers, or Create, Delete, Update volunteer.
    """
    serializer_class = VolunteerSerializer
    queryset = Volunteer.objects.all()
    parser_classes = [MultiPartParser,FormParser]


class OrganizationView(viewsets.ModelViewSet):
    """
    List all Organizations, or Create, Delete, Update Organization.
    """
    serializer_class = OrganizationSerializer
    queryset = Organization_Official.objects.all()
    parser_classes = [MultiPartParser,FormParser]



class EventsView(viewsets.ModelViewSet):
    """
    List all Events, or Create, Delete, Update Event.
    """
    serializer_class = EventsSerializer
    queryset = Events.objects.all()
    search_fields = ['title','organization__name', 'description', 'slots', 'location']
    ordering_fields  = ['title','organization__name', 'description', 'slots', 'date_created']
    ordering = ['-date_created']
    parser_classes = [MultiPartParser,FormParser]

