from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from .serializers import MascotaSerializer
from .models import Mascota


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
