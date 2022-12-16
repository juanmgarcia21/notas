from django.contrib import admin
from .models import Notas

class NotasAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'descripcion', 'completado')

# Register your models here.

admin.site.register(Notas, NotasAdmin)