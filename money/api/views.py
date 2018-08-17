from django.db.models import Q #for querying

from money.models import Budget, Expense, Income
from .serializers import BudgetSerializer, ExpenseSerializer, IncomeSerializer

from rest_framework import generics, viewsets

class BudgetList(viewsets.ModelViewSet):
	serializer_class = BudgetSerializer
	queryset = Budget.objects.all()

	def perform_create(self, serializer):
		serializer.save()

class ExpenseList(viewsets.ModelViewSet):
	lookup_field = 'id'
	serializer_class = ExpenseSerializer

	def get_queryset(self):
		qs = Expense.objects.all()
		user = self.request.query_params.get('user', None)
		if user is not None:
			qs = qs.filter(user=user)
		return qs

	def perform_create(self, serializer):
		serializer.save()

class IncomeList(viewsets.ModelViewSet):
	lookup_field = 'id'
	serializer_class = IncomeSerializer

	
	def get_queryset(self):
		qs = Income.objects.all()
		user = self.request.query_params.get('user', None)
		if user is not None:
			qs = qs.filter(user=user)
		return qs

	def perform_create(self, serializer):
		serializer.save()





