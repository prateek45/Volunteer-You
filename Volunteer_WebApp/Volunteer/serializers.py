from django.db.models import manager, query_utils
from rest_framework import serializers
from .models import Volunteer, Organization_Official, Events
from django.contrib.auth.models import User, Group
from rest_framework import serializers

class VolunteerSerializer(serializers.ModelSerializer):
    Volunteer_user = serializers.PrimaryKeyRelatedField(read_only=True,)
    class Meta:
        model = Volunteer
        fields = ('id', 'Volunteer_user', 'name', 'age', 'profession', 'email', 'Profile_photo', 'address')
    
class OrganizationSerializer(serializers.ModelSerializer):
    Organization_user = serializers.PrimaryKeyRelatedField(read_only=True,)
    class Meta:
        model = Organization_Official
        fields = ('id', 'Organization_user', 'name', 'profession', 'Organization', 'email', 'Profile_photo')
    

class EventsSerializer(serializers.ModelSerializer):
    organization = serializers.ReadOnlyField(source = 'organization.name')
    class Meta:
        model = Events
        fields = ('id','organization', 'title', 'photo', 'description', 'slots', 'roster', 'contact', 'location')
