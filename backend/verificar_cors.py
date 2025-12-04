#!/usr/bin/env python
"""
Script para verificar la configuración de CORS en el proyecto
"""

import sys
import os

# Agregar el directorio del proyecto al path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

print("=" * 60)
print("VERIFICACIÓN DE CONFIGURACIÓN CORS")
print("=" * 60)
print()

# Verificar si django-cors-headers está instalado
print("1. Verificando instalación de django-cors-headers...")
try:
    import corsheaders
    print(f"   ✓ django-cors-headers está instalado (versión: {corsheaders.__version__})")
except ImportError:
    print("   ✗ django-cors-headers NO está instalado")
    print("   Ejecuta: pip install django-cors-headers==4.9.0")
    sys.exit(1)

print()

# Verificar configuración en settings
print("2. Verificando configuración en settings.py...")
try:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'adopta_amigo.settings')
    import django
    django.setup()
    from django.conf import settings

    # Verificar INSTALLED_APPS
    if 'corsheaders' in settings.INSTALLED_APPS:
        print("   ✓ 'corsheaders' está en INSTALLED_APPS")
    else:
        print("   ✗ 'corsheaders' NO está en INSTALLED_APPS")

    # Verificar MIDDLEWARE
    middleware_list = [m for m in settings.MIDDLEWARE]
    if 'corsheaders.middleware.CorsMiddleware' in middleware_list:
        print("   ✓ 'CorsMiddleware' está en MIDDLEWARE")
        cors_index = middleware_list.index('corsheaders.middleware.CorsMiddleware')
        common_index = middleware_list.index('django.middleware.common.CommonMiddleware')
        if cors_index < common_index:
            print("   ✓ CorsMiddleware está antes de CommonMiddleware")
        else:
            print("   ✗ CorsMiddleware debe estar ANTES de CommonMiddleware")
    else:
        print("   ✗ 'CorsMiddleware' NO está en MIDDLEWARE")

    # Verificar CORS_ALLOWED_ORIGINS
    if hasattr(settings, 'CORS_ALLOWED_ORIGINS'):
        print(f"   ✓ CORS_ALLOWED_ORIGINS configurado: {settings.CORS_ALLOWED_ORIGINS}")
    else:
        print("   ✗ CORS_ALLOWED_ORIGINS no está configurado")

    # Verificar CORS_ALLOW_CREDENTIALS
    if hasattr(settings, 'CORS_ALLOW_CREDENTIALS'):
        print(f"   ✓ CORS_ALLOW_CREDENTIALS: {settings.CORS_ALLOW_CREDENTIALS}")
    else:
        print("   ! CORS_ALLOW_CREDENTIALS no está configurado")

except Exception as e:
    print(f"   ✗ Error al cargar settings: {e}")
    sys.exit(1)

print()
print("=" * 60)
print("DIAGNÓSTICO COMPLETO")
print("=" * 60)
print()
print("Si todo está marcado con ✓, reinicia el servidor:")
print("  python manage.py runserver 8005")
print()
print("Si hay algún ✗, corrige los problemas indicados.")
