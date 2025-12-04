from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from usuarios.permissions import EsPublicador, EsAdmin, EsPublicadorOAdmin
from .models import Mascota, Especie
from .serializers import MascotaSerializer, EspecieSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

class MascotaViewSet(viewsets.ModelViewSet):
    """
    ViewSet para manejar todas las operaciones CRUD de Mascotas
    Incluye funcionalidades especiales como adopción y control granular de permisos
    """
    
    # Consulta inicial que obtiene todas las mascotas de la base de datos
    queryset = Mascota.objects.all()
    
    # Serializador que convierte entre objetos Mascota y JSON
    serializer_class = MascotaSerializer
    
    # Permisos por defecto: lectura libre, escritura requiere autenticación
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_permissions(self):
        """
        Define permisos específicos según el tipo de acción o método HTTP
        
        Este método permite tener un control granular sobre quién puede
        realizar cada tipo de operación en las mascotas
        """
        
        # Para la acción personalizada 'adoptar': solo usuarios autenticados
        # No importa el rol, pero deben estar logueados
        if self.action == "adoptar":
            return [IsAuthenticated()]

        # Para métodos de escritura (crear, actualizar, eliminar):
        # Requiere que el usuario esté autenticado Y sea publicador o admin
        if self.request.method in ["POST", "PUT", "PATCH", "DELETE"]:
            return [IsAuthenticated(), EsPublicadorOAdmin()]

        # Para métodos de lectura (GET): permisos por defecto
        # Permite lectura libre incluso para usuarios no autenticados
        return [IsAuthenticatedOrReadOnly()]

    def perform_create(self, serializer):
        """
        Se ejecuta automáticamente al crear una nueva mascota
        Asigna el usuario actual como publicador de la mascota
        """
        serializer.save(publicador=self.request.user)

    # Acción personalizada para adoptar mascotas
    @action(detail=True, methods=["POST"], permission_classes=[IsAuthenticated])
    def adoptar(self, request, pk=None):
        """
        Endpoint personalizado que permite a los adoptantes adoptar una mascota
        
        detail=True: esta acción opera sobre una mascota específica (no sobre la lista)
        methods=["POST"]: solo acepta peticiones POST
        permission_classes: requiere autenticación pero no verifica rol aquí
        """
        
        # Obtenemos la mascota específica basada en el ID en la URL
        mascota = self.get_object()
        
        # Obtenemos el usuario que hace la petición
        user = request.user
        
        # Debug: imprimimos información del usuario (solo en desarrollo)
        print("Usuario autenticado:", request.user, "rol:", request.user.rol)

        # Verificamos que el usuario tenga rol de adoptante
        if user.rol != "adoptante":
            return Response(
                {"error": "Solo los adoptantes pueden adoptar mascotas."}, 
                status=403  # HTTP 403 Forbidden
            )

        # Verificamos que la mascota no esté ya adoptada
        if mascota.adoptada:
            return Response(
                {"error": "Esta mascota ya fue adoptada."}, 
                status=400  # HTTP 400 Bad Request
            )

        # Marcamos la mascota como adoptada y asignamos el adoptante
        mascota.adoptada = True
        mascota.adoptante = user
        mascota.save()

        # Retornamos confirmación exitosa
        return Response({"message": "Mascota adoptada con éxito"})

    def destroy(self, request, *args, **kwargs):
        """
        Sobrescribe el método de eliminación para controlar quién puede eliminar mascotas
        
        Permite:
        - Admin: eliminar cualquier mascota
        - Publicador: eliminar solo sus propias mascotas
        - Adoptante: no puede eliminar mascotas
        """
        
        # Obtenemos la mascota que se intenta eliminar
        mascota = self.get_object()
        user = request.user

        # Los administradores pueden eliminar cualquier mascota
        if user.rol == "admin":
            return super().destroy(request, *args, **kwargs)

        # Los publicadores solo pueden eliminar sus propias mascotas
        if user.rol == "publicador" and mascota.publicador == user:
            return super().destroy(request, *args, **kwargs)

        # Si no cumple ninguna condición anterior, denegamos la eliminación
        return Response(
            {"error": "No tienes permiso para eliminar esta mascota."},
            status=403  # HTTP 403 Forbidden
        )

        
class EspecieViewSet(viewsets.ModelViewSet):
    """
    ViewSet para manejar operaciones CRUD de Especies
    Las especies son categorías como "Perro", "Gato", etc.
    """
    
    # Consulta que obtiene todas las especies
    queryset = Especie.objects.all()
    
    # Serializador para convertir objetos Especie
    serializer_class = EspecieSerializer

    def get_permissions(self):
        """
        Define permisos diferenciados para especies:
        - Lectura: acceso libre para todos
        - Escritura: solo administradores
        """
        
        # Para métodos de lectura (GET, HEAD, OPTIONS): acceso público
        # Cualquier persona puede ver la lista de especies
        if self.request.method in ["GET", "HEAD", "OPTIONS"]:
            return [AllowAny()]

        # Para métodos de escritura (POST, PUT, PATCH, DELETE):
        # Requiere que el usuario esté autenticado Y sea administrador
        return [IsAuthenticated(), EsAdmin()]