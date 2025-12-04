from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import get_user_model
from .serializers import UsuarioSerializer

Usuario = get_user_model()

class RegisterView(APIView):
    """
    Endpoint para registrar nuevos usuarios
    POST /api/auth/register/
    """
    permission_classes = [AllowAny]

    def post(self, request):
        # Obtener datos del request
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        rol = request.data.get('rol', 'adoptante')

        # Validaciones
        if not username or not email or not password:
            return Response(
                {'error': 'Todos los campos son requeridos'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if len(password) < 6:
            return Response(
                {'error': 'La contraseña debe tener al menos 6 caracteres'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Verificar si el usuario ya existe
        if Usuario.objects.filter(username=username).exists():
            return Response(
                {'error': 'El nombre de usuario ya está en uso'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if Usuario.objects.filter(email=email).exists():
            return Response(
                {'error': 'El email ya está registrado'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Validar rol
        roles_permitidos = ['admin', 'publicador', 'adoptante']
        if rol not in roles_permitidos:
            return Response(
                {'error': f'Rol inválido. Debe ser uno de: {", ".join(roles_permitidos)}'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Crear usuario
        try:
            usuario = Usuario.objects.create_user(
                username=username,
                email=email,
                password=password,
                rol=rol
            )

            # Serializar y retornar
            serializer = UsuarioSerializer(usuario)
            return Response(
                {
                    'message': 'Usuario creado exitosamente',
                    'user': serializer.data
                },
                status=status.HTTP_201_CREATED
            )

        except Exception as e:
            return Response(
                {'error': f'Error al crear usuario: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class LoginView(APIView):
    """
    Endpoint para iniciar sesión
    POST /api/auth/login/
    """
    permission_classes = [AllowAny]

    def post(self, request):
        # Obtener credenciales
        username = request.data.get('username')
        password = request.data.get('password')

        # Validaciones
        if not username or not password:
            return Response(
                {'error': 'Usuario y contraseña son requeridos'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Autenticar usuario
        user = authenticate(request, username=username, password=password)

        if user is None:
            return Response(
                {'error': 'Credenciales inválidas'},
                status=status.HTTP_401_UNAUTHORIZED
            )

        # Crear sesión
        login(request, user)
        request.session.save()

        # Serializar y retornar
        serializer = UsuarioSerializer(user)
        return Response(
            {
                'message': 'Login exitoso',
                'user': serializer.data
            },
            status=status.HTTP_200_OK
        )


class LogoutView(APIView):
    """
    Endpoint para cerrar sesión
    POST /api/auth/logout/
    """
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Cerrar sesión
        logout(request)

        return Response(
            {'message': 'Sesión cerrada exitosamente'},
            status=status.HTTP_200_OK
        )


class CurrentUserView(APIView):
    """
    Endpoint para obtener el usuario actual
    GET /api/auth/user/
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Serializar usuario actual
        serializer = UsuarioSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
