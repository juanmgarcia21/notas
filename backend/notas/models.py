from django.db import models

# Create your models here.

class Notas(models.Model):
    titulo = models.CharField(max_length=120)
    descripcion = models.TextField()
   

    def _str_(self):
        return self.title