from rest_framework import serializers 
from .models import Mascota

class MascotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mascota
        exclude = ['publicador']  # ese lo asignamos desde backend