from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import MascotaSerializer
from .models import Mascota
from django.contrib.auth.models import User
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import authenticate, login, logout

class MascotaViewSet(viewsets.ModelViewSet):
    queryset = Mascota.objects.all()
    serializer_class = MascotaSerializer
        
# Vista para el registro de usuarios
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

# Vista para el inicio de sesión
@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # Verificamos si el usuario existe
    if not User.objects.filter(username=username).exists():
        return Response({
            'success': False,
            'message': 'Este usuario no existe'
        }, status=status.HTTP_404_NOT_FOUND)

    # Intentamos autenticación
    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        return Response({
            'success': True,
            'user': {
                'username': user.username,
                'email': user.email
            }
        }, status=status.HTTP_200_OK)
    else:
        return Response({
            'success': False, 
            'message': 'Contraseña incorrecta'
        }, status=status.HTTP_401_UNAUTHORIZED)

# Vista para cerrar sesión
@api_view(['POST'])
@permission_classes([AllowAny])
def logout_view(request):
    logout(request)
    return Response({'success': True, 'message': 'Sesión cerrada exitosamente'}, status=status.HTTP_200_OK)

# Vista para verificar la sesión
@api_view(['GET'])
@permission_classes([AllowAny])
def check_session(request):
    if request.user.is_authenticated:
        return Response({
            'isAuthenticated': True,
            'user': {
                'username': request.user.username,
                'email': request.user.email
            }
        })
    else:
        return Response({'isAuthenticated': False})

# Vista para el token CSRF
@api_view(['GET'])
@ensure_csrf_cookie 
def get_csrf_token(request):
    return Response({'success': 'CSRF cookie set'}, status=status.HTTP_200_OK)

# Vista para registrar una mascota
@api_view(['POST'])
@permission_classes([IsAuthenticated]) 
def registrar_mascota(request):
    data = request.data

    print("Datos recibidos", data)

    # Validamos campos básicos
    required_fields=['nombre', 'descripcion', 'edad']
    for field in required_fields:
        if field not in data:
            return Response(
                {'error': f'El campo {field} es requerido.'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
    
    imagen = request.FILES.get('imagen')
    if not imagen:
        return Response(
            {'error': 'La imagen es requerida.'}, 
            status=status.HTTP_400_BAD_REQUEST
        )
    
    from .models import Especie
    especie_default = Especie.objects.first()

    if request.user.is_authenticated:
        publicador_usuario = request.user
    else:
        publicador_usuario = User.objects.first()
        if not publicador_usuario:
             return Response({'error': 'No hay usuarios en el sistema para asignar la mascota.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    mascota = Mascota.objects.create(
        nombre = data.get('nombre'),
        descripcion = data.get('descripcion'),
        edad = data.get('edad'),
        imagen= imagen,
        especie = especie_default,
        vacunado = False,
        publicador = publicador_usuario,
        genero = data.get('genero', 'Desconocido'),
        ubicacion = data.get('ubicacion', 'Desconocida') 
    )

    serializer = MascotaSerializer(mascota)
    return Response(serializer.data, status = status.HTTP_201_CREATED)

# Vista para listar todas las mascotas
@api_view(['GET'])
@permission_classes([AllowAny])
def listar_mascotas(request):
    mascotas = Mascota.objects.all()
    serializer = MascotaSerializer(mascotas, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)