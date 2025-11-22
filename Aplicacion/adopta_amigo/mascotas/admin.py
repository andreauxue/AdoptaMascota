from django.contrib import admin
from .models import Especie, Mascota, PerfilUsuario, Ubicacion

admin.site.register(Especie)
admin.site.register(Mascota)
admin.site.register(PerfilUsuario)
admin.site.register(Ubicacion)
