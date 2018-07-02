from django.contrib import admin
from money.models import Budget, Expense, Income

admin.site.register(Budget)

admin.site.register(Expense)

admin.site.register(Income)