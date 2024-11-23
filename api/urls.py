from django.urls import path
from rest_framework import routers
from django.urls import include, path
from . import views

router = routers.DefaultRouter()
router.register('characters', views.CharacterViewSet)

urlpatterns = [
    path('', include(router.urls))
]