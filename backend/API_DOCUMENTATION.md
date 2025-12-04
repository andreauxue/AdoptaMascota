# Documentación de la API - Adopta un Amigo

## Información General

- **URL Base**: `http://127.0.0.1:8005/api/`
- **Framework**: Django 5.2.6 con Django REST Framework 3.16.1
- **Autenticación**: Sesiones de Django
- **Base de Datos**: SQLite3 (desarrollo)
- **CORS**: Configurado para `http://localhost:5173`

## Estructura del Backend

```
backend/
├── adopta_amigo/          # Proyecto Django principal
│   ├── settings.py        # Configuración
│   ├── urls.py            # URLs principales
│   └── wsgi.py
├── usuarios/              # App de usuarios
│   ├── models.py          # Modelo Usuarios
│   ├── serializers.py     # Serializers
│   ├── views.py           # Vistas de autenticación
│   └── permissions.py     # Permisos personalizados
├── mascotas/              # App de mascotas
│   ├── models.py          # Modelos Mascota, Especie
│   ├── serializers.py     # Serializers
│   └── views.py           # ViewSets
├── media/                 # Archivos subidos
├── db.sqlite3             # Base de datos
└── manage.py
```

## Modelos

### Usuarios

Modelo personalizado basado en AbstractUser con roles.

```python
class Usuarios(AbstractUser):
    ROLES = [
        ('admin', 'Administrador'),
        ('publicador', 'Publicador'),
        ('adoptante', 'Adoptante'),
    ]
    rol = models.CharField(max_length=20, choices=ROLES, default='adoptante')
    telefono = models.CharField(max_length=20, blank=True, null=True)
```

**Roles:**
- `admin`: Acceso completo, puede gestionar especies y todas las mascotas
- `publicador`: Puede registrar y gestionar mascotas
- `adoptante`: Puede adoptar mascotas

### Mascota

```python
class Mascota(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    edad = models.PositiveIntegerField()
    vacunado = models.BooleanField(default=False)
    fecha_reporte = models.DateField(auto_now_add=True)
    imagen = models.ImageField(upload_to='mascotas/')
    especie = models.ForeignKey(Especie, on_delete=models.CASCADE)
    publicador = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    adoptada = models.BooleanField(default=False)
    adoptante = models.ForeignKey(Usuario, on_delete=models.SET_NULL, null=True, blank=True)
```

### Especie

```python
class Especie(models.Model):
    nombre = models.CharField(max_length=50)
```

## Endpoints

### Autenticación

#### Registro de Usuario

**POST** `/api/register/`

Crea un nuevo usuario en el sistema.

**Permisos**: Público

**Body**:
```json
{
  "username": "string",
  "password": "string",
  "email": "string",
  "rol": "adoptante" | "publicador"
}
```

**Respuesta Exitosa (201)**:
```json
{
  "message": "Usuario creado correctamente",
  "usuario": {
    "id": 1,
    "username": "juan",
    "email": "juan@email.com",
    "rol": "adoptante"
  },
  "roles_disponibles": ["publicador", "adoptante"]
}
```

**Errores**:
- `400`: Datos inválidos o rol no permitido

---

#### Iniciar Sesión

**POST** `/api/login/`

Autentica al usuario y crea una sesión.

**Permisos**: Público

**Body**:
```json
{
  "username": "string",
  "password": "string"
}
```

**Respuesta Exitosa (200)**:
```json
{
  "message": "Login exitoso",
  "user": {
    "id": 1,
    "username": "juan",
    "rol": "adoptante"
  }
}
```

**Errores**:
- `401`: Credenciales inválidas

---

#### Cerrar Sesión

**POST** `/api/logout/`

Cierra la sesión del usuario actual.

**Permisos**: Requiere autenticación

**Headers**:
```
X-CSRFToken: <csrf_token>
```

**Respuesta Exitosa (200)**:
```json
{
  "message": "Sesión cerrada correctamente"
}
```

---

### Mascotas

#### Listar Mascotas

**GET** `/api/mascotas/`

Obtiene la lista de todas las mascotas.

**Permisos**: Público

**Respuesta Exitosa (200)**:
```json
[
  {
    "id": 1,
    "nombre": "Max",
    "descripcion": "Perro amigable",
    "edad": 3,
    "vacunado": true,
    "fecha_reporte": "2025-12-03",
    "imagen": "http://127.0.0.1:8005/media/mascotas/max.jpg",
    "especie": {
      "id": 1,
      "nombre": "Perro"
    },
    "publicador": {
      "id": 2,
      "username": "maria",
      "rol": "publicador"
    },
    "adoptada": false,
    "adoptante": null
  }
]
```

---

#### Crear Mascota

**POST** `/api/mascotas/`

Crea una nueva mascota para adopción.

**Permisos**: Requiere autenticación y rol `publicador` o `admin`

**Headers**:
```
X-CSRFToken: <csrf_token>
Content-Type: multipart/form-data
```

**Body (Form Data)**:
- `nombre`: string (requerido)
- `descripcion`: string (requerido)
- `edad`: integer (requerido)
- `especie`: integer (ID de especie, requerido)
- `vacunado`: boolean
- `imagen`: file (requerido)

**Respuesta Exitosa (201)**:
```json
{
  "id": 5,
  "nombre": "Luna",
  "descripcion": "Gata cariñosa",
  "edad": 2,
  "vacunado": true,
  "fecha_reporte": "2025-12-03",
  "imagen": "http://127.0.0.1:8005/media/mascotas/luna.jpg",
  "especie": {...},
  "publicador": {...},
  "adoptada": false,
  "adoptante": null
}
```

**Errores**:
- `401`: No autenticado
- `403`: Sin permisos (no es publicador ni admin)
- `400`: Datos inválidos

---

#### Obtener Mascota

**GET** `/api/mascotas/{id}/`

Obtiene los detalles de una mascota específica.

**Permisos**: Público

---

#### Actualizar Mascota

**PUT/PATCH** `/api/mascotas/{id}/`

Actualiza una mascota existente.

**Permisos**: Requiere autenticación y rol `publicador` o `admin`

**Restricciones**:
- Publicadores solo pueden actualizar sus propias mascotas
- Admins pueden actualizar cualquier mascota

---

#### Eliminar Mascota

**DELETE** `/api/mascotas/{id}/`

Elimina una mascota.

**Permisos**: Requiere autenticación y rol `publicador` o `admin`

**Restricciones**:
- Publicadores solo pueden eliminar sus propias mascotas
- Admins pueden eliminar cualquier mascota

**Respuesta Exitosa (204)**: Sin contenido

**Errores**:
- `403`: No tienes permiso para eliminar esta mascota

---

#### Adoptar Mascota

**POST** `/api/mascotas/{id}/adoptar/`

Permite a un adoptante adoptar una mascota.

**Permisos**: Requiere autenticación y rol `adoptante`

**Headers**:
```
X-CSRFToken: <csrf_token>
```

**Respuesta Exitosa (200)**:
```json
{
  "message": "Mascota adoptada con éxito"
}
```

**Errores**:
- `401`: No autenticado
- `403`: Solo los adoptantes pueden adoptar mascotas
- `400`: Esta mascota ya fue adoptada

---

### Especies

#### Listar Especies

**GET** `/api/especies/`

Obtiene la lista de todas las especies disponibles.

**Permisos**: Público

**Respuesta Exitosa (200)**:
```json
[
  {
    "id": 1,
    "nombre": "Perro"
  },
  {
    "id": 2,
    "nombre": "Gato"
  }
]
```

---

#### Crear Especie

**POST** `/api/especies/`

Crea una nueva especie.

**Permisos**: Requiere autenticación y rol `admin`

**Headers**:
```
X-CSRFToken: <csrf_token>
```

**Body**:
```json
{
  "nombre": "Conejo"
}
```

**Respuesta Exitosa (201)**:
```json
{
  "id": 3,
  "nombre": "Conejo"
}
```

**Errores**:
- `401`: No autenticado
- `403`: Solo administradores pueden crear especies

---

#### Actualizar Especie

**PUT/PATCH** `/api/especies/{id}/`

Actualiza una especie existente.

**Permisos**: Requiere autenticación y rol `admin`

---

#### Eliminar Especie

**DELETE** `/api/especies/{id}/`

Elimina una especie.

**Permisos**: Requiere autenticación y rol `admin`

---

## Autenticación con Sesiones

El backend usa autenticación basada en sesiones de Django.

### Flujo de Autenticación

1. Cliente hace POST a `/api/login/` con credenciales
2. Servidor valida y crea sesión
3. Servidor envía cookie de sesión (`sessionid`) al cliente
4. Cliente incluye la cookie en requests subsecuentes
5. Servidor valida la sesión en cada request

### Cookies Requeridas

- `sessionid`: Cookie de sesión de Django
- `csrftoken`: Token CSRF para protección

### Headers Requeridos en Requests Mutantes

Para POST, PUT, PATCH, DELETE:

```
X-CSRFToken: <valor_del_csrftoken>
```

### Obtener CSRF Token

```javascript
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const csrfToken = getCookie('csrftoken');
```

## Permisos Personalizados

### EsPublicador

Verifica que el usuario tenga rol `publicador`.

### EsAdmin

Verifica que el usuario tenga rol `admin`.

### EsPublicadorOAdmin

Verifica que el usuario sea `publicador` O `admin`.

## Configuración CORS

El backend está configurado para aceptar requests desde:
- `http://127.0.0.1:5173`
- `http://localhost:5173`

Con credenciales habilitadas (`CORS_ALLOW_CREDENTIALS = True`).

## Ejemplos de Uso

### Registro

```javascript
const response = await fetch('http://127.0.0.1:8005/api/register/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'juan',
    password: 'password123',
    email: 'juan@email.com',
    rol: 'adoptante'
  })
});

const data = await response.json();
```

### Login

```javascript
const response = await fetch('http://127.0.0.1:8005/api/login/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include', // Importante para cookies
  body: JSON.stringify({
    username: 'juan',
    password: 'password123'
  })
});

const data = await response.json();
```

### Crear Mascota

```javascript
const formData = new FormData();
formData.append('nombre', 'Max');
formData.append('descripcion', 'Perro amigable');
formData.append('edad', 3);
formData.append('especie', 1);
formData.append('vacunado', true);
formData.append('imagen', fileInput.files[0]);

const csrfToken = getCookie('csrftoken');

const response = await fetch('http://127.0.0.1:8005/api/mascotas/', {
  method: 'POST',
  headers: { 'X-CSRFToken': csrfToken },
  credentials: 'include',
  body: formData
});
```

### Adoptar Mascota

```javascript
const csrfToken = getCookie('csrftoken');

const response = await fetch('http://127.0.0.1:8005/api/mascotas/1/adoptar/', {
  method: 'POST',
  headers: { 'X-CSRFToken': csrfToken },
  credentials: 'include'
});

const data = await response.json();
```

## Comandos Útiles

### Iniciar Servidor

```bash
cd backend
python manage.py runserver 8005
```

### Crear Migraciones

```bash
python manage.py makemigrations
python manage.py migrate
```

### Crear Superusuario

```bash
python manage.py createsuperuser
```

### Acceder al Admin

`http://127.0.0.1:8005/admin/`

## Estado del Backend

✅ Proyecto Django configurado
✅ Apps usuarios y mascotas creadas
✅ Modelos definidos y migrados
✅ Serializers implementados
✅ ViewSets con permisos granulares
✅ URLs configuradas
✅ CORS habilitado
✅ Autenticación por sesión
✅ Django REST Framework configurado
✅ Archivos media configurados
