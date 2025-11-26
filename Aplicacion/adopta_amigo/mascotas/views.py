from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import MascotaSerializer
from .models import Mascota, Genero, Tamanio, Energia, Especie


class MascotaViewSet(viewsets.ModelViewSet):
    queryset = Mascota.objects.all()
    serializer_class = MascotaSerializer


@csrf_exempt
@api_view(["POST"])
@permission_classes([AllowAny])
def register_user(request):
    name = (request.data.get("name") or "").strip()
    email = (request.data.get("email") or "").strip().lower()
    password = request.data.get("password") or ""

    if not name:
        return Response({"error": "El nombre es obligatorio."},
                        status=status.HTTP_400_BAD_REQUEST)
    if not email:
        return Response({"error": "El correo es obligatorio."},
                        status=status.HTTP_400_BAD_REQUEST)
    if not password or len(password) < 6:
        return Response({"error": "La contraseña debe tener al menos 6 caracteres."},
                        status=status.HTTP_400_BAD_REQUEST)

    # ¿ya existe ese correo?
    if (User.objects.filter(username=email).exists()
            or User.objects.filter(email=email).exists()):
        return Response({"error": "Ese correo ya está registrado."},
                        status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(
        username=email,
        email=email,
        password=password,
        first_name=name,
    )

    data = {
        "id": user.id,
        "name": user.first_name or user.username,
        "email": user.email,
    }
    return Response(data, status=status.HTTP_201_CREATED)


@csrf_exempt
@api_view(["POST"])
@permission_classes([AllowAny])
def login_user(request):
    email = (request.data.get("email") or "").strip().lower()
    password = request.data.get("password") or ""

    if not email or not password:
        return Response({"error": "Correo y contraseña son obligatorios."},
                        status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(username=email, password=password)
    if user is None:
        return Response({"error": "Usuario o contraseña inválidos."},
                        status=status.HTTP_400_BAD_REQUEST)

    data = {
        "id": user.id,
        "name": user.first_name or user.username,
        "email": user.email,
    }
    return Response(data, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(["POST"])
@permission_classes([AllowAny])
@parser_classes([MultiPartParser, FormParser])
def registrar_mascota(request):
    """
    Endpoint para registrar una nueva mascota.
    Acepta multipart/form-data para manejar la imagen.
    """
    
    # Obtener datos del request
    nombre = (request.data.get("nombre") or "").strip()
    edad = request.data.get("edad")
    especie_nombre = (request.data.get("especie") or "").strip()
    genero_nombre = (request.data.get("genero") or "").strip()
    tamanio_nombre = (request.data.get("tamano") or "").strip()
    vacunado = request.data.get("vacunado")
    esterilizado = request.data.get("esterilizado")
    energia_nombre = (request.data.get("energia") or "").strip()
    descripcion = (request.data.get("descripcion") or "").strip()
    imagen = request.FILES.get("foto")
    
    # Validaciones básicas
    if not nombre:
        return Response({"error": "El nombre es obligatorio."}, status=status.HTTP_400_BAD_REQUEST)
    
    if not edad:
        return Response({"error": "La edad es obligatoria."}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        edad = int(edad)
        if edad < 0 or edad > 30:
            return Response({"error": "La edad debe estar entre 0 y 30 años."}, status=status.HTTP_400_BAD_REQUEST)
    except ValueError:
        return Response({"error": "La edad debe ser un número válido."}, status=status.HTTP_400_BAD_REQUEST)
    
    if not especie_nombre:
        return Response({"error": "La especie es obligatoria."}, status=status.HTTP_400_BAD_REQUEST)
    
    if not descripcion:
        return Response({"error": "La descripción es obligatoria."}, status=status.HTTP_400_BAD_REQUEST)
    
    if not imagen:
        return Response({"error": "La foto es obligatoria."}, status=status.HTTP_400_BAD_REQUEST)
    
    # Buscar o crear las relaciones ForeignKey
    try:
        especie, _ = Especie.objects.get_or_create(nombre=especie_nombre)
        
        genero = None
        if genero_nombre:
            genero, _ = Genero.objects.get_or_create(nombre=genero_nombre)
        
        tamanio = None
        if tamanio_nombre:
            tamanio, _ = Tamanio.objects.get_or_create(nombre=tamanio_nombre)
        
        energia = None
        if energia_nombre:
            energia, _ = Energia.objects.get_or_create(nombre=energia_nombre)
        
    except Exception as e:
        return Response({"error": f"Error al procesar los datos: {str(e)}"}, status=status.HTTP_400_BAD_REQUEST)
    
    # Convertir valores de Sí/No a booleanos
    vacunado_bool = vacunado == "Sí" if vacunado else False
    esterilizado_bool = esterilizado == "Sí" if esterilizado else False
    
    # Obtener usuario (si está autenticado) o usar un usuario por defecto
    # Para desarrollo, puedes usar el primer usuario o crear uno de prueba
    if request.user.is_authenticated:
        publicador = request.user
    else:
        # Usuario por defecto para pruebas (deberías crearlo previamente)
        publicador = User.objects.first()
        if not publicador:
            return Response({"error": "No hay usuarios registrados en el sistema."}, status=status.HTTP_400_BAD_REQUEST)
    
    # Crear la mascota
    try:
        mascota = Mascota.objects.create(
            nombre=nombre,
            edad=edad,
            especie=especie,
            genero=genero,
            tamanio=tamanio,
            vacunado=vacunado_bool,
            esterilizado=esterilizado_bool,
            energia=energia,
            descripcion=descripcion,
            imagen=imagen,
            publicador=publicador
        )
        
        # Serializar y devolver la respuesta
        serializer = MascotaSerializer(mascota)
        
        return Response({
            "message": "Mascota registrada exitosamente.",
            "mascota": serializer.data
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        return Response({"error": f"Error al crear la mascota: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)