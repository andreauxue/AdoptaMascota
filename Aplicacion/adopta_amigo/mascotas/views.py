from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import MascotaSerializer
from .models import Mascota
from django.contrib.auth.models import User
from django.views.decorators.csrf import ensure_csrf_cookie


class MascotaViewSet(viewsets.ModelViewSet):
    queryset = Mascota.objects.all()
    serializer_class = MascotaSerializer
        
# --- VISTA PARA REGISTRO ---
@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if not username or not password or not email:
        return Response({'error': 'Todos los campos son requeridos'}, status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(username=username).exists():
        return Response({'error': 'El nombre de usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create_user(username=username, email=email, password=password)
    user.save()
    return Response({'success': 'Usuario creado exitosamente'}, status=status.HTTP_201_CREATED)

# --- VISTA PARA ENVIAR EL TOKEN CSRF ---
@api_view(['GET'])
@ensure_csrf_cookie 
def get_csrf_token(request):
    return Response({'success': 'CSRF cookie set'}, status=status.HTTP_200_OK)