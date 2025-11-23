from rest_framework import serializers 
from .models import Mascota

class MascotaSerializer(serializers.ModelSerializer):
    imagen = serializers.ImageField(use_url=True)
    class Meta:
        model = Mascota
        exclude = ['publicador']  # ese lo asignamos desde backend