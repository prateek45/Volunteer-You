from rest_framework import serializers
from Volunteer.models import Volunteer, Organization_Official, Events


class VolunteerSerializer(serializers.ModelSerializer):
    Volunteer_user = serializers.PrimaryKeyRelatedField(read_only=True,)
    class Meta:
        model = Volunteer
        fields = ('id', 'Volunteer_user', 'name', 'age', 'profession', 'email', 'Profile_photo', 'address', 'password')
        
class OrganizationSerializer(serializers.ModelSerializer):
    Organization_user = serializers.PrimaryKeyRelatedField(read_only=True,)
    class Meta:
        model = Organization_Official
        fields = ('id', 'Organization_user', 'name', 'profession', 'Organization', 'email', 'Profile_photo', 'password')
        

class EventsSerializer(serializers.ModelSerializer):
    organization = serializers.ReadOnlyField(source = 'organization.name')
    class Meta:
        model = Events
        fields = ('id','organization', 'title', 'photo', 'description', 'slots', 'roster', 'contact', 'location','date_created')
