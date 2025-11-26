from rest_framework import serializers 
from django.contrib.auth.models import User
from .models import Mascota

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
        read_only_fields = ['id']

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6, style={'input_type': 'password'})
    password_confirm = serializers.CharField(write_only=True, style={'input_type': 'password'})
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password_confirm']
        
    def validate(self, data):
        if data.get('password') != data.get('password_confirm'):
            raise serializers.ValidationError({"password": "Las contraseñas no coinciden"})
        return data
    
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este correo electrónico ya está registrado")
        return value
    
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Este nombre de usuario ya está en uso")
        return value
    
    def create(self, validated_data):
        validated_data.pop('password_confirm')
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class MascotaSerializer(serializers.ModelSerializer):
    publicador_username = serializers.CharField(source='publicador.username', read_only=True)
    especie_nombre = serializers.CharField(source='especie.nombre', read_only=True)
    ubicacion_estado = serializers.CharField(source='ubicacion.estado', read_only=True)
    ubicacion_abreviatura = serializers.CharField(source='ubicacion.abreviatura', read_only=True)
    edad_formateada = serializers.ReadOnlyField()
    
    class Meta:
        model = Mascota
        fields = '__all__'
        read_only_fields = ['publicador', 'fecha_reporte']