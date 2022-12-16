
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import NotasSerializer
from .models import Notas

# Create your views here.

class NotasView(viewsets.ModelViewSet):
    serializer_class = NotasSerializer
    queryset = Notas.objects.all()