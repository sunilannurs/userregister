from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumber, PhoneNumberField

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,primary_key=True)
    username = models.CharField(max_length=50)
    phone = models.CharField(max_length=10,blank=True, default="",unique=True)
    location = models.CharField(max_length=30, blank=True)
