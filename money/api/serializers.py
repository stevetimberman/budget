from rest_framework import serializers
from money.models import Budget, Expense, Income

class BudgetSerializer(serializers.ModelSerializer):
	"""Serializer for Budget Model"""
	class Meta:
		model = Budget
		fields = ('id','balance', 'save_percentage', 'user')
		

class ExpenseSerializer(serializers.ModelSerializer):
	"""Serializer for Expense model"""
	class Meta:
		model = Expense
		fields = ('id', 'name', 'description', 'cost', 'budget', 'user')

class IncomeSerializer(serializers.ModelSerializer):
	"""Serializer for Income model"""
	class Meta:
		model = Income
		fields = ('id','name', 'salary', 'hours', 'pay', 'budget', 'user')

		