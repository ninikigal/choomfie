from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets
from .models import Character
from .serializers import CharacterSerializer

# Create your views here.
def index(request):
    return HttpResponse("Hello, world")

class CharacterViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows characters to be viewed or edited.
    """
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
