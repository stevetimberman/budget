from django.db.models import Q #for querying

from money.models import Budget, Expense, Income
from .serializers import BudgetSerializer, ExpenseSerializer, IncomeSerializer

from rest_framework import generics

class BudgetList(generics.ListCreateAPIView):
	lookup_field = 'id'
	serializer_class = BudgetSerializer

class ExpenseList(generics.ListCreateAPIView):
	lookup_field = 'id'
	serializer_class = ExpenseSerializer

class IncomeList(generics.ListCreateAPIView):
	lookup_field = 'id'
	serializer_class = IncomeSerializer





