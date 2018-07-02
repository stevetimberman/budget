from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User

class Budget(models.Model):
	"""Budget model"""
	balance = models.DecimalField(max_digits=10, decimal_places=2)
	save_percentage = models.DecimalField(max_digits=10,decimal_places=2)

class Expense(models.Model):
	"""Expense model"""
	name = models.CharField(max_length=60, null=True, blank=True)
	description = models.CharField(max_length=100, null=True, blank=True)
	cost = models.DecimalField(max_digits=10, decimal_places=2)
	budget = models.ForeignKey(Budget, on_delete=models.CASCADE)

class Income(models.Model):
	"""Income model"""
	name = models.CharField(max_length=60, null=True, blank=True)
	salary = models.BooleanField()
	hours = models.IntegerField(default=0)
	pay = models.DecimalField(max_digits=10, decimal_places=2)
	budget = models.ForeignKey(Budget, on_delete=models.CASCADE)

