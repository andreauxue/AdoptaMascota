from django.contrib import admin
from .models import Genero, Energia, Tamanio, Especie, Mascota, PerfilUsuario

admin.site.register(Especie)
admin.site.register(Mascota)
admin.site.register(Genero)
admin.site.register(Energia)
admin.site.register(Tamanio)
admin.site.register(PerfilUsuario)
