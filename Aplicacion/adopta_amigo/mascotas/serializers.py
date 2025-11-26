from rest_framework import serializers 
from .models import Mascota, Especie, Tamanio, Genero, Energia

class MascotaSerializer(serializers.ModelSerializer):
    # Campos de solo lectura para mostrar nombres en lugar de IDs
    especie_nombre = serializers.CharField(source='especie.nombre', read_only=True)
    genero_nombre = serializers.CharField(source='genero.nombre', read_only=True)
    tamanio_nombre = serializers.CharField(source='tamanio.nombre', read_only=True)
    energia_nombre = serializers.CharField(source='energia.nombre', read_only=True)
    publicador_nombre = serializers.CharField(source='publicador.first_name', read_only=True)
    class Meta:
        model = Mascota
        fields = '__all__'
        read_only_fields = ('publicador', 'fecha_reporte')

    def validate_edad(self, value):
        if value < 0:
            raise serializers.ValidationError("La edad no puede ser negativa.")
        if value > 30:
            raise serializers.ValidationError("La edad parece incorrecta.")
        return value