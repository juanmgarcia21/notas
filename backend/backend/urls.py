from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from notas import views

router = routers.DefaultRouter()
router.register(r'notas', views.NotasView, 'notas')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]