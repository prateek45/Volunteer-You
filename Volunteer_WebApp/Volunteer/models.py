from django.db import models

# Create your models here.
from django.db import models
from django.core.validators import MinValueValidator
from django.contrib.auth.models import AbstractUser
from django.conf import settings

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
    Profile_photo = models.ImageField(default = "", null = True, blank = True)
    address = models.CharField(max_length=500,null = False, default="Test")
    password = models.CharField(max_length=500,null = False)
    
    def __str__(self):
	    return self.name

class Organization_Official(models.Model):
    Organization_user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name= 'Organization_Official', null= True, blank = True, on_delete= models.CASCADE)
    name = models.CharField(max_length=200,null = False)
    profession = models.CharField(max_length=500, default="Organization Official", null=False)
    Organization = models.CharField(max_length=200,null = False)
    email = models.EmailField(unique=True,null=False)
    Profile_photo = models.ImageField(default = "", null = True, blank = True)
    password = models.CharField(max_length=500,null = False)
    
    def __str__(self):
	    return self.name

class Events(models.Model):
    organization = models.ForeignKey(Organization_Official,related_name = 'event',null=True, blank= False, on_delete=models.CASCADE)
    title = models.CharField(max_length=200,null = False)
    photo = models.ImageField(default = "", null = True, blank = True)
    description = models.CharField(max_length=10000,null = False, blank= False)
    slots = models.PositiveIntegerField(default=10,validators=[MinValueValidator(1)], null=False)
    roster = models.CharField(max_length=10000,null = False, blank= False, default = '')
    contact = models.CharField(max_length=1000,null = False, blank= False)
    location = models.CharField(max_length=10000,null = False, blank= False)
    date_created = models.DateTimeField(auto_now_add=True,verbose_name="Date Created")
    
    def __str__(self):
        return self.title
    