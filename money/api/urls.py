from django.conf.urls import url, include
from rest_framework import routers
from money.api import views

router = routers.DefaultRouter()

router.register(r'budget', views.BudgetList, 'budget')
router.register(r'expense', views.ExpenseList, 'expense')
router.register(r'income', views.IncomeList, 'income')

urlpatterns = [
    url(r'^', include(router.urls)),
]

