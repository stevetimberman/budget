from django.conf.urls import url, include
from rest_framework import routers
from money.api import views

router = routers.DefaultRouter()

router.register(r'budget', views.BudgetList)
router.register(r'expense', views.ExpenseList)
router.register(r'income', views.IncomeList)

urlpatterns = [
    url(r'^', include(router.urls)),
]

