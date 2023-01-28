from django.db import models
from shortuuid.django_fields import ShortUUIDField
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class ServiceType(models.Model):
    name = models.CharField(max_length=20)

    class Meta:
        verbose_name = "Service Type"
        verbose_name_plural = "Service Types"

    def __str__(self) -> str:
        return self.name


class ManiPadiType(models.Model):
    name = models.CharField(max_length=20)

    class Meta:
        verbose_name = "Mani/Padi Tpye"
        verbose_name_plural = "Mani/Padi Types"

    def __str__(self) -> str:
        return self.name


class NailType(models.Model):
    name = models.CharField(max_length=20)

    class Meta:
        verbose_name = "Nail Type"
        verbose_name_plural = "Nail Types"

    def __str__(self) -> str:
        return self.name


class Appointment(models.Model):
    id = ShortUUIDField(primary_key=True, length=6, max_length=6)
    full_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, blank=True, null=True)
    phone = PhoneNumberField(null=True, blank=True, unique=True)
    special_request = models.TextField(max_length=300, null=True, blank=True)
    has_allergies = models.BooleanField(default=False)
    preferred_date_time = models.DateTimeField()
    preferred_location = models.CharField(max_length=20, choices=[("home_service", "Home Service"), ("walk_in", "Walk - In Service"),])
    service_type = models.ForeignKey(ServiceType, on_delete=models.CASCADE)
    mani_padi_type = models.ForeignKey(ManiPadiType, on_delete=models.CASCADE)
    nail_type = models.ForeignKey(NailType, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('confirmed', 'Confirmed'), ('cancelled', 'Cancelled')], default='pending')

    def __str__(self) -> str:
        return self.full_name

