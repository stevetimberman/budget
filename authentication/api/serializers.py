from rest_framework import serializers
from django.contrib.auth.models import User
from money.models import Expense, Income
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes


class UserSerializer(serializers.ModelSerializer):
    # expenses = serializers.PrimaryKeyRelatedField(many=True, queryset=Expense.objects.all())
    # incomes = serializers.PrimaryKeyRelatedField(many=True, queryset=Income.objects.all())
    class Meta:
        model = User
        fields = ('id','username', 'email', 'password')

    @permission_classes([AllowAny])
    def create(self, valitdated_data):
    	password = valitdated_data.pop('password', None)
    	instance = self.Meta.model(**valitdated_data)
    	if password is not None:
    		instance.set_password(password)
    	instance.save()
    	return instance

