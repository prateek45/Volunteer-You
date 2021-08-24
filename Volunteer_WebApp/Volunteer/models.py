from django.db import models

# Create your models here.
from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator
from django.contrib.auth.models import User


profession = [
        ("Volunteer","Volunteer"),
        ("Organization","Organization"),
    ]
    
# Create your models here.
class Volunteer(models.Model):
    user = models.OneToOneField(User, null= False, blank = False, on_delete= models.CASCADE)
    name = models.CharField(max_length=500,null = False)
    age =  models.PositiveIntegerField(default=10,validators=[MinValueValidator(5)], null=False)
    profession = models.CharField(max_length=500, choices=profession ,default="Volunteer", null=False)
    email = models.EmailField(unique=True,null=False)
    Profile_photo = models.ImageField(default = "", null = True, blank = True)
    address = models.CharField(max_length=500,null = False)
    
    def __str__(self):
	    return self.name

class Organization_Official(models.Model):
    user = models.OneToOneField(User, null= False, blank = False, on_delete= models.CASCADE)
    name = models.CharField(max_length=200,null = False)
    profession = models.CharField(max_length=500, choices=profession ,default="Organization Official", null=False)
    Organization = models.CharField(max_length=200,null = False)
    email = models.EmailField(unique=True,null=False)
    Profile_photo = models.ImageField(default = "", null = True, blank = True)
    
    def __str__(self):
	    return self.name

class Events(models.Model):
    organization = models.OneToOneField(Organization_Official,null=False, blank= False, on_delete=models.CASCADE)
    title = models.CharField(max_length=200,null = False)
    photo = models.ImageField(default = "", null = True, blank = True)
    description = models.CharField(max_length=10000,null = False, blank= False)
    slots = models.PositiveIntegerField(default=10,validators=[MinValueValidator(1)], null=False)
    roster = models.CharField(max_length=10000,null = False, blank= False)
    contact = models.CharField(max_length=1000,null = False, blank= False)
    location = models.CharField(max_length=10000,null = False, blank= False)
    