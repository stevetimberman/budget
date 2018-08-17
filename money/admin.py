from django.contrib import admin
from money.models import Budget, Expense, Income

class BudgetAdmin(admin.ModelAdmin):
    list_display = ('user',)

class ExpenseAdmin(admin.ModelAdmin):
    list_display = ('name',)

class IncomeAdmin(admin.ModelAdmin):
    list_display = ('name',)
    

admin.site.register(Budget, BudgetAdmin)

admin.site.register(Expense, ExpenseAdmin)

admin.site.register(Income, IncomeAdmin)