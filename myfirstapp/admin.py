from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Estudiante, Carrera

admin.site.register(Estudiante)
admin.site.register(Carrera)