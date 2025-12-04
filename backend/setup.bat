@echo off

echo =========================================
echo Configurando el backend...
echo =========================================

REM Verificar si existe un entorno virtual
if not exist "venv" (
    echo Creando entorno virtual...
    python -m venv venv
)

REM Activar entorno virtual
echo Activando entorno virtual...
call venv\Scripts\activate.bat

REM Instalar dependencias
echo Instalando dependencias...
python -m pip install --upgrade pip
pip install django==5.2.6
pip install djangorestframework==3.16.1
pip install django-cors-headers==4.9.0
pip install pillow==11.3.0

REM Aplicar migraciones
echo Aplicando migraciones...
python manage.py makemigrations
python manage.py migrate

echo =========================================
echo Configuracion completada!
echo =========================================
echo.
echo Para iniciar el servidor ejecuta:
echo   venv\Scripts\activate.bat
echo   python manage.py runserver 8005

pause
