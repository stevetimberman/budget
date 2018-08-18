from rest_framework import serializers
from django.contrib.auth.models import User
from money.models import Expense, Income


class UserSerializer(serializers.ModelSerializer):
    # expenses = serializers.PrimaryKeyRelatedField(many=True, queryset=Expense.objects.all())
    # incomes = serializers.PrimaryKeyRelatedField(many=True, queryset=Income.objects.all())
    class Meta:
        model = User
        fields = ('id','username', 'email', 'password')

