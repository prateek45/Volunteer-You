from django.db import models

# Create your models here.
from django.db import models
from django.core.validators import MinValueValidator
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.utils.translation import gettext_lazy

def upload_to(instance, filename):
  return 'profile/{filename}'.format(filename = filename)

class User(AbstractUser):
  #Boolean fields to select the type of account.
  is_volunteer = models.BooleanField(default=False)
  is_organization = models.BooleanField(default=False)

    
# Create your models here.

class Volunteer(models.Model):
    Volunteer_user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name= 'volunteer', null= True, blank = True, on_delete= models.CASCADE)
    name = models.CharField(max_length=500,null = False)
    age =  models.PositiveIntegerField(default=10,validators=[MinValueValidator(5)], null=False)
    profession = models.CharField(max_length=500, default="Volunteer", null=False)
    email = models.EmailField(unique=True,null=False)
    Profile_photo = models.ImageField(gettext_lazy("Image"), upload_to = upload_to, default = 'profile/avatar.jpg')
    address = models.CharField(max_length=500,null = False, default="Test")
    password = models.CharField(max_length=500,null = False)
    contact = models.CharField(max_length=1000,null = False, blank= False, default="0000000000")

    def __str__(self):
	    return self.name

class Organization_Official(models.Model):
    Organization_user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name= 'Organization_Official', null= True, blank = True, on_delete= models.CASCADE)
    name = models.CharField(max_length=200,null = False)
    age =  models.PositiveIntegerField(default=18,validators=[MinValueValidator(5)], null=False)
    profession = models.CharField(max_length=500, default="Organization Official", null=False)
    Organization = models.CharField(max_length=200,null = False)
    email = models.EmailField(unique=True,null=False)
    Profile_photo = models.ImageField(gettext_lazy("Image"),upload_to = upload_to, default = 'profile/avatar.jpg')
    password = models.CharField(max_length=500,null = False)
    contact = models.CharField(max_length=1000,null = False, blank= False,default="0000000000")

    def __str__(self):
	    return self.name

class Events(models.Model):
    organization = models.ForeignKey(Organization_Official,related_name = 'event',null=True, blank= False, on_delete=models.CASCADE)
    title = models.CharField(max_length=200,null = False)
    photo = models.ImageField(gettext_lazy("Image"),default = "",upload_to = upload_to, null = True, blank = True)
    description = models.CharField(max_length=10000,null = False, blank= False)
    slots = models.PositiveIntegerField(default=10,validators=[MinValueValidator(1)], null=False)
    contact = models.CharField(max_length=1000,null = False, blank= False, default= "0000000000")
    location = models.CharField(max_length=10000,null = False, blank= False)
    roster = models.ForeignKey(Volunteer, on_delete=models.SET_NULL, null= True)
    date_created = models.DateTimeField(auto_now_add=True, null=False, blank="False")
    
    def __str__(self):
        return self.title
