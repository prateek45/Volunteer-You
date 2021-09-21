from django.db.models import manager, query_utils
from rest_framework import serializers
from .models import Volunteer, Organization_Official, Events
from django.contrib.auth.models import User, Group
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    volunteer = serializers.PrimaryKeyRelatedField(many=True, queryset= Volunteer.objects.all())
    organization = serializers.PrimaryKeyRelatedField(many = True, queryset = Organization_Official.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'volunteer' , 'organization']

class VolunteerSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Volunteer
        fields = ('id', 'user', 'name', 'age', 'profession', 'email', 'Profile_photo', 'address')
    
class OrganizationSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Organization_Official
        fields = ('id', 'user', 'name', 'profession', 'Organization', 'email', 'Profile_photo')
    

class EventsSerializer(serializers.ModelSerializer):
    organization = serializers.ReadOnlyField(source = 'organization.name')
    class Meta:
        model = Events
        fields = ('id','organization', 'title', 'photo', 'description', 'slots', 'roster', 'contact', 'location')
