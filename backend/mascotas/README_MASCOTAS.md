# Endpoints de Mascotas - CRUD Completo

## Descripción

Sistema completo de gestión de mascotas para adopción. Implementado con Django REST Framework usando ViewSets.

## URL Base

`http://127.0.0.1:8005/api/mascotas/`

## Modelo Mascota

```python
class Mascota(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    edad = models.PositiveIntegerField()
    vacunado = models.BooleanField(default=False)
    fecha_reporte = models.DateField(auto_now_add=True)
    imagen = models.ImageField(upload_to='mascotas/')
    especie = models.ForeignKey(Especie, on_delete=models.CASCADE)
    publicador = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    adoptada = models.BooleanField(default=False)
    adoptante = models.ForeignKey(Usuario, on_delete=models.SET_NULL, null=True, blank=True)
```

## Permisos

### Sistema de Permisos por Rol

- **Lectura (GET)**: Público - Cualquiera puede ver mascotas
- **Creación (POST)**: Requiere autenticación y rol `publicador` o `admin`
- **Actualización (PUT/PATCH)**: Solo el publicador de la mascota o `admin`
- **Eliminación (DELETE)**: Solo el publicador de la mascota o `admin`
- **Adopción**: Requiere autenticación y rol `adoptante`

### Permisos Implementados

1. **IsAuthenticatedOrReadOnly**: Lectura pública, escritura autenticada
2. **EsPublicadorOAdmin**: Solo publicadores y admins
3. **IsOwnerOrReadOnly**: Solo el dueño puede modificar

## Endpoints

### 1. Listar Mascotas

**GET** `/api/mascotas/`

Lista todas las mascotas en el sistema.

**Permisos**: Público

**Query Parameters** (opcional):
- `adoptada=true/false`: Filtrar por estado de adopción

**Response Success (200 OK)**:
```json
[
  {
    "id": 1,
    "nombre": "Max",
    "descripcion": "Perro amigable y juguetón",
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
      "email": "maria@email.com",
      "telefono": null,
      "rol": "publicador"
    },
    "adoptada": false,
    "adoptante": null
  },
  {
    "id": 2,
    "nombre": "Luna",
    "descripcion": "Gata cariñosa",
    "edad": 2,
    "vacunado": true,
    "fecha_reporte": "2025-12-02",
    "imagen": "http://127.0.0.1:8005/media/mascotas/luna.jpg",
    "especie": {
      "id": 2,
      "nombre": "Gato"
    },
    "publicador": {
      "id": 2,
      "username": "maria",
      "email": "maria@email.com",
      "telefono": null,
      "rol": "publicador"
    },
    "adoptada": true,
    "adoptante": {
      "id": 3,
      "username": "juan",
      "email": "juan@email.com",
      "telefono": null,
      "rol": "adoptante"
    }
  }
]
```

**Ejemplo cURL**:
```bash
curl http://127.0.0.1:8005/api/mascotas/
```

**Ejemplo JavaScript**:
```javascript
const response = await fetch('http://127.0.0.1:8005/api/mascotas/');
const mascotas = await response.json();
console.log(mascotas);
```

---

### 2. Obtener Mascota Específica

**GET** `/api/mascotas/{id}/`

Obtiene los detalles de una mascota por ID.

**Permisos**: Público

**Response Success (200 OK)**:
```json
{
  "id": 1,
  "nombre": "Max",
  "descripcion": "Perro amigable y juguetón",
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
    "email": "maria@email.com",
    "telefono": null,
    "rol": "publicador"
  },
  "adoptada": false,
  "adoptante": null
}
```

**Errores**:
- **404 Not Found**: Mascota no existe

**Ejemplo cURL**:
```bash
curl http://127.0.0.1:8005/api/mascotas/1/
```

---

### 3. Crear Mascota

**POST** `/api/mascotas/`

Crea una nueva mascota para adopción.

**Permisos**: Requiere autenticación y rol `publicador` o `admin`

**Headers Requeridos**:
```
Cookie: sessionid=<session_id>
X-CSRFToken: <csrf_token>
Content-Type: multipart/form-data
```

**Form Data**:
- `nombre`: string (requerido)
- `descripcion`: string (requerido)
- `edad`: integer (requerido)
- `especie_id`: integer (ID de especie, requerido)
- `vacunado`: boolean (opcional, default: false)
- `imagen`: file (requerido)

**Response Success (201 Created)**:
```json
{
  "id": 5,
  "nombre": "Rocky",
  "descripcion": "Bulldog francés juguetón",
  "edad": 4,
  "vacunado": false,
  "fecha_reporte": "2025-12-03",
  "imagen": "http://127.0.0.1:8005/media/mascotas/rocky.jpg",
  "especie": {
    "id": 1,
    "nombre": "Perro"
  },
  "publicador": {
    "id": 2,
    "username": "maria",
    "email": "maria@email.com",
    "telefono": null,
    "rol": "publicador"
  },
  "adoptada": false,
  "adoptante": null
}
```

**Notas**:
- El campo `publicador` se asigna automáticamente al usuario autenticado
- El campo `adoptada` se crea como `false` por defecto
- El campo `fecha_reporte` se asigna automáticamente a la fecha actual

**Errores**:
- **401 Unauthorized**: No autenticado
- **403 Forbidden**: No tiene rol de publicador o admin
- **400 Bad Request**: Datos inválidos o campos faltantes

**Ejemplo JavaScript**:
```javascript
const formData = new FormData();
formData.append('nombre', 'Rocky');
formData.append('descripcion', 'Bulldog francés juguetón');
formData.append('edad', 4);
formData.append('especie_id', 1);
formData.append('vacunado', false);
formData.append('imagen', fileInput.files[0]);

const csrfToken = getCookie('csrftoken');

const response = await fetch('http://127.0.0.1:8005/api/mascotas/', {
  method: 'POST',
  headers: {
    'X-CSRFToken': csrfToken
  },
  credentials: 'include',
  body: formData
});

const mascota = await response.json();
console.log(mascota);
```

---

### 4. Actualizar Mascota

**PUT** `/api/mascotas/{id}/` - Actualización completa

**PATCH** `/api/mascotas/{id}/` - Actualización parcial

Actualiza una mascota existente.

**Permisos**:
- Requiere autenticación
- Solo el publicador de la mascota puede actualizarla
- Los admins pueden actualizar cualquier mascota

**Headers Requeridos**:
```
Cookie: sessionid=<session_id>
X-CSRFToken: <csrf_token>
Content-Type: multipart/form-data
```

**Form Data** (PATCH - campos opcionales):
- `nombre`: string
- `descripcion`: string
- `edad`: integer
- `especie_id`: integer
- `vacunado`: boolean
- `imagen`: file

**Response Success (200 OK)**:
```json
{
  "id": 1,
  "nombre": "Max (Actualizado)",
  "descripcion": "Descripción actualizada",
  "edad": 4,
  "vacunado": true,
  "fecha_reporte": "2025-12-03",
  "imagen": "http://127.0.0.1:8005/media/mascotas/max_updated.jpg",
  "especie": {...},
  "publicador": {...},
  "adoptada": false,
  "adoptante": null
}
```

**Errores**:
- **401 Unauthorized**: No autenticado
- **403 Forbidden**: No eres el publicador de esta mascota
- **404 Not Found**: Mascota no existe
- **400 Bad Request**: Datos inválidos

**Ejemplo JavaScript**:
```javascript
const formData = new FormData();
formData.append('descripcion', 'Nueva descripción');

const csrfToken = getCookie('csrftoken');

const response = await fetch('http://127.0.0.1:8005/api/mascotas/1/', {
  method: 'PATCH',
  headers: {
    'X-CSRFToken': csrfToken
  },
  credentials: 'include',
  body: formData
});

const mascota = await response.json();
```

---

### 5. Eliminar Mascota

**DELETE** `/api/mascotas/{id}/`

Elimina una mascota del sistema.

**Permisos**:
- Requiere autenticación
- Solo el publicador de la mascota puede eliminarla
- Los admins pueden eliminar cualquier mascota

**Headers Requeridos**:
```
Cookie: sessionid=<session_id>
X-CSRFToken: <csrf_token>
```

**Response Success (204 No Content)**:
Sin contenido en el body

**Errores**:
- **401 Unauthorized**: No autenticado
- **403 Forbidden**: No tienes permiso para eliminar esta mascota
- **404 Not Found**: Mascota no existe

**Ejemplo cURL**:
```bash
CSRF_TOKEN=$(grep csrftoken cookies.txt | awk '{print $7}')

curl -X DELETE http://127.0.0.1:8005/api/mascotas/1/ \
  -H "X-CSRFToken: $CSRF_TOKEN" \
  -b cookies.txt
```

**Ejemplo JavaScript**:
```javascript
const csrfToken = getCookie('csrftoken');

const response = await fetch('http://127.0.0.1:8005/api/mascotas/1/', {
  method: 'DELETE',
  headers: {
    'X-CSRFToken': csrfToken
  },
  credentials: 'include'
});

if (response.status === 204) {
  console.log('Mascota eliminada exitosamente');
}
```

---

### 6. Adoptar Mascota

**POST** `/api/mascotas/{id}/adoptar/`

Permite a un usuario adoptante adoptar una mascota.

**Permisos**: Requiere autenticación y rol `adoptante`

**Headers Requeridos**:
```
Cookie: sessionid=<session_id>
X-CSRFToken: <csrf_token>
```

**Response Success (200 OK)**:
```json
{
  "message": "Mascota adoptada con éxito"
}
```

**Errores**:
- **401 Unauthorized**: No autenticado
- **403 Forbidden**: Solo los adoptantes pueden adoptar mascotas
- **400 Bad Request**: Esta mascota ya fue adoptada
- **404 Not Found**: Mascota no existe

**Ejemplo JavaScript**:
```javascript
const csrfToken = getCookie('csrftoken');

const response = await fetch('http://127.0.0.1:8005/api/mascotas/1/adoptar/', {
  method: 'POST',
  headers: {
    'X-CSRFToken': csrfToken
  },
  credentials: 'include'
});

const data = await response.json();
console.log(data.message);
```

---

## Serializers

### MascotaSerializer

Maneja la conversión entre objetos Mascota y JSON.

**Campos de Solo Lectura**:
- `publicador`: Se asigna automáticamente al usuario autenticado
- `especie`: Muestra el objeto completo en respuestas

**Campos de Solo Escritura**:
- `especie_id`: Usado para asignar la especie al crear/actualizar

**Ejemplo de Response**:
```json
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
    "email": "maria@email.com",
    "telefono": null,
    "rol": "publicador"
  },
  "adoptada": false,
  "adoptante": null
}
```

---

## Flujo Completo

### 1. Login como Publicador

```javascript
const loginResponse = await fetch('http://127.0.0.1:8005/api/auth/login/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({
    username: 'maria',
    password: 'password123'
  })
});

const loginData = await loginResponse.json();
console.log('Logged in as:', loginData.user.username);
```

### 2. Obtener Lista de Especies

```javascript
const especiesResponse = await fetch('http://127.0.0.1:8005/api/especies/');
const especies = await especiesResponse.json();
console.log('Especies disponibles:', especies);
```

### 3. Crear Mascota

```javascript
const formData = new FormData();
formData.append('nombre', 'Max');
formData.append('descripcion', 'Perro amigable');
formData.append('edad', 3);
formData.append('especie_id', 1); // ID de "Perro"
formData.append('vacunado', true);
formData.append('imagen', imageFile);

const csrfToken = getCookie('csrftoken');

const createResponse = await fetch('http://127.0.0.1:8005/api/mascotas/', {
  method: 'POST',
  headers: { 'X-CSRFToken': csrfToken },
  credentials: 'include',
  body: formData
});

const mascota = await createResponse.json();
console.log('Mascota creada:', mascota);
```

### 4. Actualizar Mascota

```javascript
const updateFormData = new FormData();
updateFormData.append('descripcion', 'Descripción actualizada');

const updateResponse = await fetch(`http://127.0.0.1:8005/api/mascotas/${mascota.id}/`, {
  method: 'PATCH',
  headers: { 'X-CSRFToken': csrfToken },
  credentials: 'include',
  body: updateFormData
});

const updatedMascota = await updateResponse.json();
console.log('Mascota actualizada:', updatedMascota);
```

### 5. Login como Adoptante

```javascript
// Primero logout del publicador
await fetch('http://127.0.0.1:8005/api/auth/logout/', {
  method: 'POST',
  headers: { 'X-CSRFToken': csrfToken },
  credentials: 'include'
});

// Login como adoptante
const adoptanteLogin = await fetch('http://127.0.0.1:8005/api/auth/login/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({
    username: 'juan',
    password: 'password123'
  })
});
```

### 6. Adoptar Mascota

```javascript
const newCsrfToken = getCookie('csrftoken');

const adoptResponse = await fetch(`http://127.0.0.1:8005/api/mascotas/${mascota.id}/adoptar/`, {
  method: 'POST',
  headers: { 'X-CSRFToken': newCsrfToken },
  credentials: 'include'
});

const adoptData = await adoptResponse.json();
console.log(adoptData.message);
```

---

## Validaciones

### Campos Requeridos

- `nombre`: No puede estar vacío
- `descripcion`: No puede estar vacía
- `edad`: Debe ser un número positivo
- `especie_id`: Debe existir en la base de datos
- `imagen`: Archivo de imagen válido

### Reglas de Negocio

1. Solo usuarios autenticados con rol `publicador` o `admin` pueden crear mascotas
2. Solo el publicador de una mascota (o admin) puede editarla o eliminarla
3. Solo usuarios con rol `adoptante` pueden adoptar mascotas
4. No se puede adoptar una mascota ya adoptada
5. El publicador se asigna automáticamente al usuario que crea la mascota
6. Las mascotas se ordenan por fecha de reporte (más recientes primero)

---

## Testing

Ver archivo `test_mascotas_endpoints.sh` para script de testing automatizado.

Comandos básicos:

```bash
# Listar mascotas
curl http://127.0.0.1:8005/api/mascotas/

# Ver una mascota específica
curl http://127.0.0.1:8005/api/mascotas/1/

# Crear mascota (requiere login)
curl -X POST http://127.0.0.1:8005/api/mascotas/ \
  -H "X-CSRFToken: $CSRF_TOKEN" \
  -b cookies.txt \
  -F "nombre=Max" \
  -F "descripcion=Perro amigable" \
  -F "edad=3" \
  -F "especie_id=1" \
  -F "vacunado=true" \
  -F "imagen=@max.jpg"
```

---

## Estado del Sistema

✅ CRUD completo implementado
✅ Permisos por rol funcionando
✅ Serializers con relaciones anidadas
✅ ViewSet con acciones personalizadas
✅ Sistema de adopción implementado
✅ Validaciones de campos
✅ Filtros y ordenamiento
✅ Documentación completa
