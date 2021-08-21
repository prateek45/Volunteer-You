from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms

from.models import *

profession = [
        ("Volunteer","Volunteer"),
        ("Organization","Organization"),
    ]

class VolunteerForm(ModelForm):
    class Meta:
        model = Volunteer
        fields = '__all__'
        exclude = ['user']

class OrganizationForm(ModelForm):
    class Meta:
        model = Organization_Official
        fields = '__all__'
        exclude = ['user']
        
class CreateUser(UserCreationForm):
    user_type = forms.ChoiceField(choices= profession)
    class Meta:
        model = User
        fields = ['first_name','last_name','username', 'email', 'password1','password2']
