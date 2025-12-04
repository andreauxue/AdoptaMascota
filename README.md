# AdoptaMascota

###Equipo 

###Regina del Razo Castillo - 319071128 usuario github : regis1flarrow
###Jose Manuel Evangelista Tiburcio - 422007939 usuario github : M24Manuel

Desarrollo de aplicación web para Diseño de Interfaces de Usuario 2026-1

Plataforma de adopción de mascotas desarrollada con Django REST Framework y React.

## Estructura del Proyecto

```
AdoptaMascota/
├── backend/          # Django REST Framework
│   ├── adopta_amigo/ # Proyecto Django principal
│   ├── mascotas/     # App de mascotas
│   ├── usuarios/     # App de usuarios
│   ├── media/        # Archivos subidos
│   ├── manage.py
│   └── requirements.txt
├── frontend/         # React + Vite
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Configuración Inicial

### Requisitos Previos

- Python 3.8 o superior
- Node.js 16 o superior
- Git

### Clonar el Repositorio

```bash
git clone https://github.com/andreauxue/AdoptaMascota.git
cd AdoptaMascota
git checkout equipo-[2 integrante]
```

### Configuración del Backend

1. Navegar a la carpeta del backend:
```bash
cd backend
```

2. Crear y activar entorno virtual:
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

4. Ejecutar migraciones:
```bash
python manage.py migrate
```

5. Crear superusuario (opcional):
```bash
python manage.py createsuperuser
```

6. Iniciar servidor de desarrollo:
```bash
python manage.py runserver 8005
```

El backend estará disponible en `http://127.0.0.1:8005`

### Configuración del Frontend

1. Navegar a la carpeta del frontend (desde la raíz del proyecto):
```bash
cd frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

### Scripts de Configuración Automática

Para facilitar la configuración del backend, puedes usar los scripts automatizados:

Linux/Mac:
```bash
cd backend
./setup.sh
```

Windows:
```bash
cd backend
setup.bat
```

Estos scripts crearán el entorno virtual, instalarán todas las dependencias y aplicarán las migraciones automáticamente.

## Solución de Problemas

### Error CORS: "falta la cabecera CORS 'Access-Control-Allow-Origin'"

Si recibes este error al intentar hacer peticiones desde el frontend al backend:

1. Asegúrate de que django-cors-headers esté instalado:
```bash
cd backend
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install django-cors-headers==4.9.0
```

2. Reinicia el servidor del backend:
```bash
# Detén el servidor con Ctrl+C
python manage.py runserver 8005
```

3. Verifica que el frontend esté corriendo en el puerto correcto (5173) y el backend en el puerto 8005.

### Error de Puerto en Uso

Si obtienes "That port is already in use":

1. Encuentra el proceso que está usando el puerto:
```bash
# Linux/Mac
lsof -i :8005

# Windows
netstat -ano | findstr :8005
```

2. Detén el proceso o usa un puerto diferente:
```bash
python manage.py runserver 8006
```

## Tecnologías Utilizadas

### Backend
- Django 5.2.6
- Django REST Framework 3.16.1
- django-cors-headers 4.9.0
- Pillow 11.3.0
- SQLite3

### Frontend
- React 19.1.1
- Vite 7.1.2
- React Router DOM 7.9.5
- TailwindCSS 3.4.17
- React Icons 5.5.0

## Endpoints de la API

- `POST /api/register/` - Registro de usuarios
- `POST /api/login/` - Inicio de sesión
- `POST /api/logout/` - Cierre de sesión
- `GET/POST /api/mascotas/` - Listar y crear mascotas
- `GET/PUT/DELETE /api/mascotas/{id}/` - Detalle de mascota
- `POST /api/mascotas/{id}/adoptar/` - Adoptar una mascota
- `GET/POST /api/especies/` - Listar y crear especies

## Tipos principales de commits

| Tipo         | Significado                                                                                  | Ejemplo                                               |
| ------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **feat**     | Nueva funcionalidad (feature) que se agrega al proyecto.                                     | `feat(api): agregar endpoint de registro de usuario`  |
| **fix**      | Corrección de un error existente.                                                            | `fix(login): corregir validación de contraseña vacía` |
| **docs**     | Cambios en la documentación (README, comentarios, etc.).                                     | `docs: actualizar instrucciones de despliegue`        |
| **style**    | Cambios de formato o estilo del código (indentación, comas, espacios) sin alterar la lógica. | `style: aplicar formato con prettier`                 |
| **refactor** | Reestructuración del código sin cambiar su comportamiento.                                   | `refactor(user): simplificar lógica de validación`    |
| **perf**     | Mejoras de rendimiento.                                                                      | `perf(query): optimizar consulta SQL`                 |
| **test**     | Agregar o modificar pruebas unitarias/integración.                                           | `test(api): añadir casos para endpoints de usuarios`  |
| **build**    | Cambios que afectan el sistema de compilación o dependencias (npm, pip, Docker, etc.).       | `build(docker): actualizar imagen base a python:3.12` |
| **ci**       | Cambios en integración continua (GitHub Actions, Jenkins, etc.).                             | `ci: ajustar pipeline para test en staging`           |
| **chore**    | Tareas menores o de mantenimiento (sin afectar código fuente ni lógica).                     | `chore: actualizar dependencias del proyecto`         |
| **revert**   | Deshacer un commit previo.                                                                   | `revert: revertir feat(api): agregar autenticación`   |
