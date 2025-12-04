from rest_framework.permissions import BasePermission, SAFE_METHODS

class EsAdmin(BasePermission):
    """
    Permite acceso solo a usuarios con rol 'admin'.
    """
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.rol == 'admin')


class EsPublicador(BasePermission):
    """
    Permite acceso a usuarios con rol 'publicador' o 'admin'.
    """
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.rol in ['publicador', 'admin'])


class EsPublicadorOAdmin(BasePermission):
    """
    Permite acceso a usuarios con rol 'publicador' o 'admin'.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.rol in ["publicador", "admin"]


class IsOwnerOrReadOnly(BasePermission):
    """
    Permiso personalizado que permite:
    - Lectura (GET, HEAD, OPTIONS) a cualquiera
    - Escritura (POST, PUT, PATCH, DELETE) solo al dueño del objeto

    Uso típico: permitir que solo el publicador de una mascota pueda editarla o eliminarla
    """

    def has_object_permission(self, request, view, obj):
        # Métodos seguros (GET, HEAD, OPTIONS) permitidos para todos
        if request.method in SAFE_METHODS:
            return True

        # Métodos de escritura solo para el dueño
        # Verifica si el objeto tiene un campo 'publicador' y si coincide con el usuario
        if hasattr(obj, 'publicador'):
            return obj.publicador == request.user

        # Si el objeto tiene un campo 'user' (para otros modelos)
        if hasattr(obj, 'user'):
            return obj.user == request.user

        # Por defecto, denegar acceso
        return False