from rest_framework import serializers
from money.models import Budget, Expense, Income

class BudgetSerializer(serializers.ModelSerializer):
	"""Serializer for Budget Model"""
	class Meta:
		model = Budget
		fields = ('balance', 'save_percentage')
		

class ExpenseSerializer(serializers.ModelSerializer):
	"""Serializer for Expense model"""
	class Meta:
		model = Expense
		fields = ('name', 'description', 'cost', 'budget')

class IncomeSerializer(serializers.ModelSerializer):
	"""Serializer for Income model"""
	class Meta:
		model = Income
		fields = ('name', 'salary', 'hours', 'pay', 'budget')