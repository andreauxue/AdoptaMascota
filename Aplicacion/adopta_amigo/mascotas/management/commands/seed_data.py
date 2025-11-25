from django.core.management.base import BaseCommand
from mascotas.models import Especie, Ubicacion

class Command(BaseCommand):
    help = "Crea datos iniciales para Especie y Ubicacion"

    def handle(self, *args, **kwargs):

        # Crear especies si no existen
        if not Especie.objects.exists():
            self.stdout.write("Creando especies por defecto...")
            Especie.objects.create(nombre="Hámster")   # id 1
            Especie.objects.create(nombre="Perro")     # id 2
            Especie.objects.create(nombre="Gato")      # id 3
        else:
            self.stdout.write("Especies ya existen, no se modifican.")

        # Crear ubicaciones si no existen
        if not Ubicacion.objects.exists():
            self.stdout.write("Creando ubicaciones por defecto...")
            Ubicacion.objects.create(estado="Ciudad de México", abreviatura="CDMX") # id 1
            Ubicacion.objects.create(estado="Estado de México", abreviatura="EDOMEX")
            Ubicacion.objects.create(estado="Jalisco", abreviatura="JAL")
            Ubicacion.objects.create(estado="Nuevo León", abreviatura="NL")
            Ubicacion.objects.create(estado="Puebla", abreviatura="PUE")
            Ubicacion.objects.create(estado="Querétaro", abreviatura="QRO")
            Ubicacion.objects.create(estado="Morelos", abreviatura="MOR")
            Ubicacion.objects.create(estado="Baja California", abreviatura="BC")
            Ubicacion.objects.create(estado="Guanajuato", abreviatura="GTO")
            Ubicacion.objects.create(estado="Yucatán", abreviatura="YUC")
        else:
            self.stdout.write("Ubicaciones ya existen, no se modifican.")

        self.stdout.write(self.style.SUCCESS("Datos iniciales cargados correctamente."))
