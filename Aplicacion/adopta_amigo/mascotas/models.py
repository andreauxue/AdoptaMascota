from django.db import models
from django.contrib.auth.models import User 

class Especie(models.Model):
    # VARCHAR(50)
    nombre = models.CharField(max_length=50) 
    
    def __str__(self):
        return self.nombre

class Genero(models.Model):
    # VARCHAR(50)
    nombre = models.CharField(max_length=50) 
    
    def __str__(self):
        return self.nombre
    
class Energia(models.Model):
    # VARCHAR(50)
    nombre = models.CharField(max_length=50) 
    
    def __str__(self):
        return self.nombre
    
class Tamanio(models.Model):
    # VARCHAR(50)
    nombre = models.CharField(max_length=50) 
    
    def __str__(self):
        return self.nombre
class Mascota(models.Model):
    nombre = models.CharField(max_length=100) 
    edad = models.PositiveIntegerField()
    especie = models.ForeignKey(Especie, on_delete=models.CASCADE)
    genero = models.ForeignKey(Genero, on_delete=models.CASCADE, null=True, blank=True)
    tamanio = models.ForeignKey(Tamanio, on_delete=models.CASCADE, null=True, blank=True)
    vacunado = models.BooleanField(default=False)
    esterilizado = models.BooleanField(default=False)
    energia = models.ForeignKey(Energia, on_delete=models.CASCADE, null=True, blank=True)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='mascotas/')
    publicador = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha_reporte = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.nombre
    
class PerfilUsuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='perfiles/', null=True, blank=True)
        
    def __str__(self):
        return self.nombre.username
    
