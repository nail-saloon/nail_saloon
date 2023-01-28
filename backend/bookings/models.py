from django.db import models
from shortuuid.django_fields import ShortUUIDField
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Appointment(models.Model):
    id = ShortUUIDField(primary_key=True, length=6, max_length=6)
    full_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, blank=True, null=True)
    phone = PhoneNumberField(null=True, blank=True, unique=True)
    