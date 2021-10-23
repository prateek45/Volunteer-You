from rest_framework import serializers
from Volunteer.models import Volunteer, Organization_Official, Events


class VolunteerSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(VolunteerSerializer, self).__init__(*args, **kwargs)
        if self.context['request'].method == "PUT":
            self.fields.pop('password')
    Volunteer_user = serializers.PrimaryKeyRelatedField(read_only=True,)
    class Meta:
        model = Volunteer
        fields = ('id', 'Volunteer_user', 'name', 'age', 'profession', 'email', 'Profile_photo', 'address', 'password', 'contact')
        
class OrganizationSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(OrganizationSerializer, self).__init__(*args, **kwargs)
        if self.context['request'].method == "PUT":
            self.fields.pop('password')
    Organization_user = serializers.PrimaryKeyRelatedField(read_only=True,)

    class Meta:
        model = Organization_Official
        fields = ('id', 'Organization_user', 'name', 'profession', 'Organization', 'email', 'Profile_photo', 'password', 'age', 'contact')
        
class RosterSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value
    class Meta:
        model = Volunteer
        fields = ('id',)

class EventsSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(EventsSerializer, self).__init__(*args, **kwargs)
        if self.context['request'].method == "PUT":
            self.fields.pop('description'),
            self.fields.pop('location'),
            self.fields.pop('title')

    roster = RosterSerializer(many=True)

    def update(self, instance, validated_data):
        validated_data.get('roster')
        instance.roster.add(validated_data.get('roster')[0])
        return instance

    class Meta:
        model = Events
        fields = ('id','organization', 'title', 'photo', 'description', 'slots', 'roster', 'contact', 'location','date_created')
 