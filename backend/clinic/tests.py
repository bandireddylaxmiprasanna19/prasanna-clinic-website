from django.test import TestCase
# clinic/models.py

from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    experience = models.IntegerField()
    qualification = models.CharField(max_length=200)

    def __str__(self):
        return self.name

# Create your tests here.
