from django.db import models
from django.contrib.auth.models import User 

class Especie(models.Model):
    nombre = models.CharField(max_length=50) 
    
    def __str__(self):
        return self.nombre
    
class Ubicacion(models.Model):
    estado = models.CharField(max_length=30)
    abreviatura = models.CharField(max_length=10)

    class Meta:
        verbose_name = "Ubicación"
        verbose_name_plural = "Ubicaciones"
    
    def __str__(self):
        return self.estado
    
class Mascota(models.Model):
    nombre = models.CharField(max_length=100) 
    descripcion = models.TextField()

    # Para poder mostrar los meses de las mascotas
    # almacenamos la edad total en meses
    edad_meses = models.PositiveSmallIntegerField(default=0)

    @property
    def edad_formateada(self):
        """Calcula y devuelve la edad en formato 'X años, Y meses'."""
        
        # Obtenemos los años dividiendo por 12
        años = self.edad_meses // 12 
        
        # Obtenemos los meses restantes
        meses = self.edad_meses % 12

        # Para guardar las cadenas de años y meses respectivamente
        partes_edad = []

        if años > 0:
            partes_edad.append(f"{años} año" + ("s" if años != 1 else ""))
        if meses > 0:
            partes_edad.append(f"{meses} mes" + ("es" if meses != 1 else ""))

        return ", ".join(partes_edad) if partes_edad else "0 meses"

    vacunado = models.BooleanField(default=False)
    fecha_reporte = models.DateField(auto_now_add=True)
    imagen = models.ImageField(upload_to='mascotas/')
    
    especie = models.ForeignKey(Especie, on_delete=models.CASCADE)
    publicador = models.ForeignKey(User, on_delete=models.CASCADE)

    # Relacion con el nuevo atributo de ubicacion, evitamos eliminar ubicaciones en uso
    ubicacion = models.ForeignKey(Ubicacion, on_delete=models.PROTECT)
    
    def __str__(self):
        return self.nombre
    
class PerfilUsuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='perfiles/', null=True, blank=True)
        
    def __str__(self):
        return self.user.username
    
