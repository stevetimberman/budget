from django.conf.urls import url, include
from rest_framework import routers
from authentication.api import views

router = routers.DefaultRouter()

router.register(r'user', views.UserList)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^register', views.RegisterView.as_view()),
]
