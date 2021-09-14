from rest_framework import serializers
from .models import Volunteer, Organization_Official, Events

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('id', 'user', 'name', 'age', 'profession', 'email', 'Profile_photo', 'address')

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('id', 'user', 'name', 'profession', 'Organization', 'email', 'Profile_photo')

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('id', 'title', 'photo', 'description', 'slots', 'roster', 'contact', 'location')
