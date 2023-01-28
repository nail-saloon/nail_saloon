from django.contrib import admin
from .models import ServiceType, ManiPadiType, NailType, Appointment

@admin.register(ServiceType)
class ServiceTypeAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(ManiPadiType)
class ManiPadiTypeAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(NailType)
class NailTypeAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    ordering = ('-preferred_date_time', 'full_name')
    date_hierarchy = 'preferred_date_time'
    list_display = ('id', 'full_name', 'email', 'phone', 'status', 'preferred_date_time', 'preferred_location', 'service_type', 'mani_padi_type', 'nail_type')
    list_filter = ('status', 'preferred_location', 'service_type', 'mani_padi_type', 'nail_type')
    search_fields = ('full_name', 'email', 'phone')


