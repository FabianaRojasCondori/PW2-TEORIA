from django.db import models

# Create your models here.
class Persona(models.Model):
    nombres =models.CharField(max_length=100)
    apellidos =models.CharField(max_length=100)
    edad = models.IntegerField()
    donador = models.CharField(max_length=100, null=True, blank=True)

