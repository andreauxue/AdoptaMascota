# Endpoints de Autenticación - Class-Based Views

## Descripción

Nuevos endpoints de autenticación implementados con Class-Based Views de Django REST Framework, ubicados en `/api/auth/`.

## Configuración

- **Autenticación**: SessionAuthentication (sesiones de Django)
- **CSRF Protection**: Habilitado
- **Permisos**: AllowAny para register/login, IsAuthenticated para logout/user

## Endpoints

### 1. Registro de Usuario

**POST** `/api/auth/register/`

Crea un nuevo usuario en el sistema.

**Permisos**: Público

**Request Body**:
```json
{
  "username": "string (requerido)",
  "email": "string (requerido)",
  "password": "string (requerido, mínimo 6 caracteres)",
  "rol": "string (opcional, default: 'adoptante')"
}
```

**Roles Permitidos**:
- `adoptante` (default)
- `publicador`
- `admin`

**Validaciones**:
- Username debe ser único
- Email debe ser único
- Password mínimo 6 caracteres
- Rol debe estar en la lista de roles permitidos

**Response Success (201 Created)**:
```json
{
  "message": "Usuario creado exitosamente",
  "user": {
    "id": 1,
    "username": "juan",
    "email": "juan@email.com",
    "rol": "adoptante",
    "telefono": null
  }
}
```

**Errores Posibles**:

- **400 Bad Request**: Campos faltantes
```json
{
  "error": "Todos los campos son requeridos"
}
```

- **400 Bad Request**: Password muy corto
```json
{
  "error": "La contraseña debe tener al menos 6 caracteres"
}
```

- **400 Bad Request**: Username en uso
```json
{
  "error": "El nombre de usuario ya está en uso"
}
```

- **400 Bad Request**: Email en uso
```json
{
  "error": "El email ya está registrado"
}
```

- **400 Bad Request**: Rol inválido
```json
{
  "error": "Rol inválido. Debe ser uno de: admin, publicador, adoptante"
}
```

**Ejemplo cURL**:
```bash
curl -X POST http://127.0.0.1:8005/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "juan",
    "email": "juan@email.com",
    "password": "password123",
    "rol": "adoptante"
  }'
```

**Ejemplo JavaScript**:
```javascript
const response = await fetch('http://127.0.0.1:8005/api/auth/register/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'juan',
    email: 'juan@email.com',
    password: 'password123',
    rol: 'adoptante'
  })
});

const data = await response.json();
console.log(data);
```

---

### 2. Iniciar Sesión

**POST** `/api/auth/login/`

Autentica al usuario y crea una sesión.

**Permisos**: Público

**Request Body**:
```json
{
  "username": "string (requerido)",
  "password": "string (requerido)"
}
```

**Response Success (200 OK)**:
```json
{
  "message": "Login exitoso",
  "user": {
    "id": 1,
    "username": "juan",
    "email": "juan@email.com",
    "rol": "adoptante",
    "telefono": null
  }
}
```

**Set-Cookie Headers**:
El servidor establecerá las siguientes cookies:
- `sessionid`: ID de la sesión de Django
- `csrftoken`: Token CSRF para protección

**Errores Posibles**:

- **400 Bad Request**: Campos faltantes
```json
{
  "error": "Usuario y contraseña son requeridos"
}
```

- **401 Unauthorized**: Credenciales incorrectas
```json
{
  "error": "Credenciales inválidas"
}
```

**Ejemplo cURL**:
```bash
curl -X POST http://127.0.0.1:8005/api/auth/login/ \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{
    "username": "juan",
    "password": "password123"
  }'
```

**Ejemplo JavaScript**:
```javascript
const response = await fetch('http://127.0.0.1:8005/api/auth/login/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include', // Importante para recibir cookies
  body: JSON.stringify({
    username: 'juan',
    password: 'password123'
  })
});

const data = await response.json();
console.log(data);
```

---

### 3. Cerrar Sesión

**POST** `/api/auth/logout/`

Cierra la sesión del usuario actual.

**Permisos**: Requiere autenticación

**Headers Requeridos**:
```
Cookie: sessionid=<session_id>
X-CSRFToken: <csrf_token>
```

**Response Success (200 OK)**:
```json
{
  "message": "Sesión cerrada exitosamente"
}
```

**Errores Posibles**:

- **401 Unauthorized**: No autenticado
```json
{
  "detail": "Authentication credentials were not provided."
}
```

**Ejemplo cURL**:
```bash
curl -X POST http://127.0.0.1:8005/api/auth/logout/ \
  -H "X-CSRFToken: <csrf_token>" \
  -b cookies.txt
```

**Ejemplo JavaScript**:
```javascript
// Obtener CSRF token de las cookies
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const csrfToken = getCookie('csrftoken');

const response = await fetch('http://127.0.0.1:8005/api/auth/logout/', {
  method: 'POST',
  headers: {
    'X-CSRFToken': csrfToken,
  },
  credentials: 'include',
});

const data = await response.json();
console.log(data);
```

---

### 4. Obtener Usuario Actual

**GET** `/api/auth/user/`

Retorna los datos del usuario autenticado actualmente.

**Permisos**: Requiere autenticación

**Headers Requeridos**:
```
Cookie: sessionid=<session_id>
```

**Response Success (200 OK)**:
```json
{
  "id": 1,
  "username": "juan",
  "email": "juan@email.com",
  "rol": "adoptante",
  "telefono": null
}
```

**Errores Posibles**:

- **401 Unauthorized**: No autenticado
```json
{
  "detail": "Authentication credentials were not provided."
}
```

**Ejemplo cURL**:
```bash
curl -X GET http://127.0.0.1:8005/api/auth/user/ \
  -b cookies.txt
```

**Ejemplo JavaScript**:
```javascript
const response = await fetch('http://127.0.0.1:8005/api/auth/user/', {
  method: 'GET',
  credentials: 'include',
});

if (response.ok) {
  const user = await response.json();
  console.log('Usuario actual:', user);
} else {
  console.log('No autenticado');
}
```

---

## Flujo Completo de Autenticación

### 1. Registro

```javascript
// Paso 1: Registrar usuario
const registerResponse = await fetch('http://127.0.0.1:8005/api/auth/register/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'juan',
    email: 'juan@email.com',
    password: 'password123',
    rol: 'adoptante'
  })
});

const registerData = await registerResponse.json();
console.log('Usuario registrado:', registerData.user);
```

### 2. Login

```javascript
// Paso 2: Iniciar sesión
const loginResponse = await fetch('http://127.0.0.1:8005/api/auth/login/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include', // Guardar cookies
  body: JSON.stringify({
    username: 'juan',
    password: 'password123'
  })
});

const loginData = await loginResponse.json();
console.log('Sesión iniciada:', loginData.user);
```

### 3. Verificar Usuario

```javascript
// Paso 3: Obtener usuario actual
const userResponse = await fetch('http://127.0.0.1:8005/api/auth/user/', {
  credentials: 'include'
});

if (userResponse.ok) {
  const currentUser = await userResponse.json();
  console.log('Usuario autenticado:', currentUser);
}
```

### 4. Logout

```javascript
// Paso 4: Cerrar sesión
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const csrfToken = getCookie('csrftoken');

const logoutResponse = await fetch('http://127.0.0.1:8005/api/auth/logout/', {
  method: 'POST',
  headers: { 'X-CSRFToken': csrfToken },
  credentials: 'include'
});

const logoutData = await logoutResponse.json();
console.log(logoutData.message);
```

---

## Testing con cURL

### Script Completo de Testing

```bash
#!/bin/bash

# Archivo para guardar cookies
COOKIE_FILE="cookies.txt"

echo "=== Test 1: Registro de Usuario ==="
curl -X POST http://127.0.0.1:8005/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@email.com",
    "password": "password123",
    "rol": "adoptante"
  }'

echo -e "\n\n=== Test 2: Login ==="
curl -X POST http://127.0.0.1:8005/api/auth/login/ \
  -H "Content-Type: application/json" \
  -c $COOKIE_FILE \
  -d '{
    "username": "testuser",
    "password": "password123"
  }'

echo -e "\n\n=== Test 3: Obtener Usuario Actual ==="
curl -X GET http://127.0.0.1:8005/api/auth/user/ \
  -b $COOKIE_FILE

echo -e "\n\n=== Test 4: Logout ==="
# Extraer CSRF token de las cookies
CSRF_TOKEN=$(grep csrftoken $COOKIE_FILE | cut -f 7)
curl -X POST http://127.0.0.1:8005/api/auth/logout/ \
  -H "X-CSRFToken: $CSRF_TOKEN" \
  -b $COOKIE_FILE

echo -e "\n\n=== Test 5: Verificar que logout funcionó ==="
curl -X GET http://127.0.0.1:8005/api/auth/user/ \
  -b $COOKIE_FILE

# Limpiar
rm -f $COOKIE_FILE
```

---

## Diferencias con Endpoints Antiguos

### Endpoints Antiguos (Function-Based Views)
- `/api/register/`
- `/api/login/`
- `/api/logout/`

### Nuevos Endpoints (Class-Based Views)
- `/api/auth/register/`
- `/api/auth/login/`
- `/api/auth/logout/`
- `/api/auth/user/` (nuevo)

### Ventajas de los Nuevos Endpoints

1. **Mejor organización**: Agrupados bajo `/api/auth/`
2. **Más RESTful**: Usan Class-Based Views
3. **Endpoint adicional**: `/api/auth/user/` para obtener usuario actual
4. **Mejor manejo de errores**: Validaciones más detalladas
5. **Código más mantenible**: Separación clara de responsabilidades

---

## Notas de Seguridad

1. **CSRF Protection**: Todos los endpoints POST requieren token CSRF excepto los públicos
2. **Password Storage**: Las contraseñas se hashean automáticamente con PBKDF2
3. **Session Security**: Las sesiones se almacenan de forma segura en el servidor
4. **HTTPS**: En producción, usar siempre HTTPS
5. **CORS**: Configurado para permitir solo localhost:5173 en desarrollo

---

## Troubleshooting

### Error: CSRF token missing

**Solución**: Asegúrate de incluir el header `X-CSRFToken` y las cookies en requests POST:

```javascript
credentials: 'include',
headers: {
  'X-CSRFToken': getCookie('csrftoken')
}
```

### Error: No autenticado

**Solución**: Verifica que estás incluyendo las cookies en el request:

```javascript
credentials: 'include'
```

### Error: Credenciales inválidas

**Solución**: Verifica username y password. Los endpoints usan `username`, no `email`.
