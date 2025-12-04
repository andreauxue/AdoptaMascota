# Importamos las librerías necesarias para los serializadores
from rest_framework import serializers
from django.contrib.auth import get_user_model
# Importamos los modelos de nuestra aplicación
from mascotas.models import Mascota, Especie

# Obtenemos el modelo de usuario personalizado de Django
Usuario = get_user_model()

class UsuarioSerializer(serializers.ModelSerializer):
    """
    Serializador para el modelo Usuario
    
    Proporciona una representación segura de los datos de usuario
    excluyendo información sensible como contraseñas
    """
    class Meta:
        model = Usuario
        # Campos que se incluirán en la serialización
        # No incluye 'password' por seguridad
        fields = ["id", "username", "email", "telefono", "rol"]

class EspecieSerializer(serializers.ModelSerializer):
    """
    Serializador para el modelo Especie
    
    Maneja la conversión de objetos Especie a JSON y viceversa
    Las especies son categorías como "Perro", "Gato", "Conejo", etc.
    """
    class Meta:
        model = Especie
        # Incluye todos los campos del modelo Especie
        fields = "__all__"

class MascotaSerializer(serializers.ModelSerializer):
    """
    Serializador para el modelo Mascota con relaciones anidadas
    
    Maneja la serialización de mascotas incluyendo información relacionada
    del publicador y la especie, con estrategias diferentes para lectura y escritura
    """
    
    # Campo para la relación con el publicador - SOLO LECTURA
    # Cuando se serializa para enviar datos al cliente, incluye todos los datos del publicador
    publicador = UsuarioSerializer(read_only=True)
    
    # Campo para la relación con la especie - SOLO LECTURA
    # Cuando se lee una mascota, se incluyen todos los datos de la especie
    especie = EspecieSerializer(read_only=True)
    
    # Campo para escritura de la especie - SOLO ESCRITURA
    # Cuando se crea o actualiza una mascota, se espera solo el ID de la especie
    especie_id = serializers.PrimaryKeyRelatedField(
        queryset=Especie.objects.all(),  # Solo permite IDs de especies existentes
        source="especie",                # Asigna el valor al campo 'especie' del modelo
        write_only=True                  # No se incluye en las respuestas, solo en entradas
    )

    class Meta:
        model = Mascota
        # Incluye todos los campos del modelo Mascota más los campos personalizados
        fields = "__all__"
        # El publicador no puede ser modificado directamente por el cliente
        # Se asigna automáticamente basado en el usuario autenticado
        read_only_fields = ["publicador"]