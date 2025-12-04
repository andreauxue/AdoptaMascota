#!/bin/bash

# Script de configuración del backend de Adopta un Amigo

echo "========================================="
echo "Configurando el backend..."
echo "========================================="

# Verificar si existe un entorno virtual
if [ ! -d "venv" ]; then
    echo "Creando entorno virtual..."
    python3 -m venv venv
fi

# Activar entorno virtual
echo "Activando entorno virtual..."
source venv/bin/activate

# Instalar dependencias
echo "Instalando dependencias..."
pip install --upgrade pip
pip install django==5.2.6
pip install djangorestframework==3.16.1
pip install django-cors-headers==4.9.0
pip install pillow==11.3.0

# Aplicar migraciones
echo "Aplicando migraciones..."
python manage.py makemigrations
python manage.py migrate

echo "========================================="
echo "Configuración completada!"
echo "========================================="
echo ""
echo "Para iniciar el servidor ejecuta:"
echo "  source venv/bin/activate"
echo "  python manage.py runserver 8005"
