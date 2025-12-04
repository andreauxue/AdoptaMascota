# Guía para Ejecutar el Proyecto Completo

## Backend (Django) + Frontend (React)

---

## 0. Requisito Previo: Limpieza de Cookies del Navegador

Para asegurar que el sistema de autenticación funcione correctamente, es indispensable limpiar las cookies del navegador cuando:

* Se clona el proyecto en una nueva máquina.
* Se modifica la configuración de CORS o CSRF en Django.
* Se cambian puertos o dominios (por ejemplo, de `localhost` a `127.0.0.1`).
* El login deja de generar la cookie de sesión (`sessionid`).
* Se realizan ajustes en el frontend que interactúan con el backend.

**Instrucciones para limpiar cookies:**

1. Abrir las herramientas de desarrollador del navegador.
2. Ir a la sección **Application** (o Storage).
3. Seleccionar **Cookies**.
4. Eliminar todas las cookies asociadas a:

   * `http://127.0.0.1:8000`
   * `http://127.0.0.1:5173`

Una vez eliminadas, realizar nuevamente el proceso de inicio de sesión.

---

## 1. Configuración del Entorno Virtual

Crear y activar un entorno virtual de Python.

**Windows:**

```bash
python -m venv venv
venv\Scripts\activate
```

**Linux / macOS:**

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 2. Instalación de Dependencias del Backend

Instalar los paquetes necesarios:

```bash
pip install -r requirements.txt
```

---

## 3. Preparación del Proyecto Django

Ingresar a la carpeta principal del backend:

```bash
cd adopta_amigo
```

Si se desea iniciar completamente desde cero, eliminar base de datos y migraciones previas:

```bash
rm db.sqlite3
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
```

Crear migraciones y aplicarlas:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## 4. Creación de Usuario Administrador

```bash
python manage.py createsuperuser
```

---

## 5. Ejecución del Servidor Backend

```bash
python manage.py runserver
```

El backend estará disponible en:

* Aplicación: `http://127.0.0.1:8000/`
* Panel de administración: `http://127.0.0.1:8000/admin/`

---

## 6. Configuración y Ejecución del Frontend

Ingresar al directorio del frontend:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

El frontend estará disponible en:

```
http://127.0.0.1:5173/
```

---

## 7. Verificación de Conexión entre Frontend y Backend

Asegurarse de que todas las URL de consumo de API en el frontend tengan como base:

```
http://127.0.0.1:8000/api/
```

Esto garantiza que React se comunique correctamente con Django.

---

