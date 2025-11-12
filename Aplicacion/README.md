# Guía para ejecutar el proyecto completo (Backend + Frontend)

## 1. Configuración del entorno virtual

Crea y activa un entorno virtual de Python:

```bash
python -m venv venv
venv\Scripts\activate
```

En Linux o macOS:

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 2. Instalación de dependencias del backend

Instala los requerimientos necesarios:

```bash
pip install -r requirements.txt
```

---

## 3. Preparación del proyecto Django

Accede a la carpeta principal del proyecto:

```bash
cd adopta_amigo
```

Elimina la base de datos y migraciones anteriores (solo si es necesario iniciar limpio):

```bash
rm db.sqlite3
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
```

Crea las migraciones y aplica los cambios:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## 4. Creación de usuario administrador

```bash
python manage.py createsuperuser
```

---

## 5. Ejecución del servidor backend

```bash
python manage.py runserver
```

El backend estará disponible en:

```
http://127.0.0.1:8000/
```

Panel de administración:

```
http://127.0.0.1:8000/admin/
```

---

## 6. Configuración y ejecución del frontend

Accede al directorio del frontend (React):

```bash
cd frontend
```

Instala las dependencias del proyecto React:

```bash
npm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

El frontend se ejecutará por defecto en:

```
http://127.0.0.1:5173/
```

---

Asegúrate de que las rutas API (`/api/...`) en el frontend coincidan con la URL del backend (`http://127.0.0.1:8000`).
