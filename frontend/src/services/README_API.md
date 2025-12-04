# API Service Layer - Documentación

## Descripción

Capa de servicios completa para comunicación entre el frontend React y el backend Django REST API. Incluye manejo automático de CSRF tokens, interceptores de errores, y logging en modo desarrollo.

## Características

✅ **Manejo automático de CSRF tokens**
✅ **Interceptor de errores con redirección 401**
✅ **Logging detallado en desarrollo**
✅ **Soporte para FormData (subida de archivos)**
✅ **Manejo consistente de errores**
✅ **Documentación JSDoc completa**
✅ **Tipado con comentarios para mejor autocompletado**

## Configuración

### URL Base

```javascript
const API_URL = 'http://127.0.0.1:8005/api';
```

Para cambiar la URL, edita la variable `API_URL` en `src/services/api.js`.

### Modo Desarrollo

El logging automático se activa en modo desarrollo:

```javascript
const isDevelopment = import.meta.env.MODE === 'development';
```

## Servicios Disponibles

### 1. Authentication Service (`authService`)

#### `authService.register(userData)`

Registra un nuevo usuario en el sistema.

```javascript
import { authService } from '@/services/api';

const userData = {
  username: 'juan',
  email: 'juan@example.com',
  password: 'password123',
  rol: 'adoptante' // 'adoptante' o 'publicador'
};

try {
  const response = await authService.register(userData);
  console.log('Usuario registrado:', response.usuario);
} catch (error) {
  console.error('Error al registrar:', error.message);
}
```

**Respuesta exitosa:**
```json
{
  "message": "Usuario creado correctamente",
  "usuario": {
    "id": 1,
    "username": "juan",
    "email": "juan@example.com",
    "rol": "adoptante"
  },
  "roles_disponibles": ["publicador", "adoptante"]
}
```

---

#### `authService.login(credentials)`

Inicia sesión en el sistema.

```javascript
const credentials = {
  username: 'juan',
  password: 'password123'
};

try {
  const response = await authService.login(credentials);
  console.log('Login exitoso:', response.user);
  // Redirigir al dashboard
  navigate('/dashboard');
} catch (error) {
  console.error('Credenciales inválidas:', error.message);
}
```

**Respuesta exitosa:**
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

---

#### `authService.logout()`

Cierra la sesión del usuario actual.

```javascript
try {
  await authService.logout();
  console.log('Sesión cerrada');
  // Redirigir al login
  navigate('/login');
} catch (error) {
  console.error('Error al cerrar sesión:', error.message);
}
```

---

#### `authService.getCurrentUser()`

Obtiene información del usuario actualmente autenticado.

```javascript
try {
  const user = await authService.getCurrentUser();
  console.log('Usuario actual:', user);
  // { id: 1, username: "juan", email: "juan@example.com", rol: "adoptante" }
} catch (error) {
  // Error 401 - No hay sesión activa
  console.log('No hay usuario autenticado');
  navigate('/login');
}
```

---

### 2. Mascotas Service (`mascotasService`)

#### `mascotasService.getAll(params)`

Obtiene la lista de todas las mascotas.

```javascript
import { mascotasService } from '@/services/api';

// Todas las mascotas
const todasLasMascotas = await mascotasService.getAll();

// Solo mascotas disponibles (no adoptadas)
const disponibles = await mascotasService.getAll({ adoptada: false });

// Solo mascotas adoptadas
const adoptadas = await mascotasService.getAll({ adoptada: true });
```

**Respuesta:**
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
      "email": "maria@example.com",
      "rol": "publicador"
    },
    "adoptada": false,
    "adoptante": null
  }
]
```

---

#### `mascotasService.getById(id)`

Obtiene una mascota específica por ID.

```javascript
try {
  const mascota = await mascotasService.getById(1);
  console.log('Mascota:', mascota);
} catch (error) {
  // Error 404 si no existe
  console.error('Mascota no encontrada');
}
```

---

#### `mascotasService.create(mascotaData)`

Crea una nueva mascota (requiere rol `publicador` o `admin`).

```javascript
// Desde un formulario
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    nombre: nombreInput.value,
    descripcion: descripcionInput.value,
    edad: parseInt(edadInput.value),
    especie_id: parseInt(especieSelect.value),
    vacunado: vacunadoCheckbox.checked,
    imagen: imagenInput.files[0] // File object
  };

  try {
    const mascota = await mascotasService.create(formData);
    console.log('Mascota creada:', mascota);
    alert('¡Mascota publicada exitosamente!');
    navigate('/mis-mascotas');
  } catch (error) {
    console.error('Error al crear mascota:', error.message);
    alert(`Error: ${error.message}`);
  }
};
```

**Nota:** El servicio maneja automáticamente la conversión a FormData para subir la imagen.

---

#### `mascotasService.update(id, mascotaData)`

Actualiza una mascota existente (solo el dueño o admin).

```javascript
// Actualización parcial (sin imagen)
try {
  const updated = await mascotasService.update(1, {
    descripcion: 'Nueva descripción actualizada'
  });
  console.log('Mascota actualizada:', updated);
} catch (error) {
  // Error 403 si no eres el dueño
  console.error('Sin permisos:', error.message);
}

// Actualización con nueva imagen
const updateWithImage = async () => {
  const data = {
    nombre: 'Max (actualizado)',
    imagen: newImageFile // File object
  };

  const updated = await mascotasService.update(1, data);
  console.log('Mascota e imagen actualizadas:', updated);
};
```

**Nota:** El servicio detecta automáticamente si hay un archivo y usa FormData o JSON según corresponda.

---

#### `mascotasService.delete(id)`

Elimina una mascota (solo el dueño o admin).

```javascript
const handleDelete = async (mascotaId) => {
  if (!confirm('¿Estás seguro de eliminar esta mascota?')) {
    return;
  }

  try {
    await mascotasService.delete(mascotaId);
    console.log('Mascota eliminada');
    // Actualizar lista
    fetchMascotas();
  } catch (error) {
    console.error('Error al eliminar:', error.message);
  }
};
```

---

#### `mascotasService.adoptar(id)`

Adopta una mascota (solo rol `adoptante`).

```javascript
const handleAdoptar = async (mascotaId) => {
  if (!confirm('¿Deseas adoptar esta mascota?')) {
    return;
  }

  try {
    const response = await mascotasService.adoptar(mascotaId);
    console.log(response.message); // "Mascota adoptada con éxito"
    alert('¡Felicidades! Has adoptado la mascota.');
  } catch (error) {
    // Errores posibles:
    // - 403: No tienes rol de adoptante
    // - 400: Mascota ya adoptada
    console.error('Error:', error.message);
    alert(error.message);
  }
};
```

---

### 3. Especies Service (`especiesService`)

#### `especiesService.getAll()`

Obtiene todas las especies disponibles.

```javascript
import { especiesService } from '@/services/api';

const especies = await especiesService.getAll();
console.log(especies);
// [{ id: 1, nombre: 'Perro' }, { id: 2, nombre: 'Gato' }, ...]
```

---

#### `especiesService.getById(id)`

Obtiene una especie específica.

```javascript
const especie = await especiesService.getById(1);
console.log(especie); // { id: 1, nombre: 'Perro' }
```

---

#### `especiesService.create(especieData)`

Crea una nueva especie (solo `admin`).

```javascript
try {
  const especie = await especiesService.create({ nombre: 'Loro' });
  console.log('Especie creada:', especie);
} catch (error) {
  // Error 403 si no eres admin
  console.error('Solo administradores pueden crear especies');
}
```

---

#### `especiesService.update(id, especieData)`

Actualiza una especie (solo `admin`).

```javascript
const updated = await especiesService.update(1, { nombre: 'Perro Pastor' });
```

---

#### `especiesService.delete(id)`

Elimina una especie (solo `admin`).

```javascript
await especiesService.delete(5);
```

---

## Utilidades Adicionales

### `checkSession()`

Verifica si hay una sesión activa sin lanzar error.

```javascript
import { checkSession } from '@/services/api';

const user = await checkSession();

if (user) {
  console.log('Usuario autenticado:', user);
} else {
  console.log('No hay sesión activa');
}
```

**Uso en un useEffect:**

```javascript
import { useEffect, useState } from 'react';
import { checkSession } from '@/services/api';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initSession = async () => {
      const currentUser = await checkSession();
      setUser(currentUser);
      setLoading(false);
    };

    initSession();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      {user ? (
        <Dashboard user={user} />
      ) : (
        <Login />
      )}
    </div>
  );
}
```

---

### `apiConfig`

Configuración de la API.

```javascript
import { apiConfig } from '@/services/api';

console.log(apiConfig.baseURL); // 'http://127.0.0.1:8005/api'
console.log(apiConfig.isDevelopment); // true/false
```

---

## Manejo de Errores

### Errores Automáticos

El servicio maneja automáticamente los siguientes errores:

| Código | Comportamiento |
|--------|----------------|
| **401** | Redirige a `/login` automáticamente |
| **403** | Lanza error: "No tienes permisos..." |
| **404** | Lanza error: "Recurso no encontrado" |
| **500** | Lanza error: "Error del servidor..." |

### Capturar Errores Personalizados

```javascript
try {
  const mascota = await mascotasService.create(data);
  // Éxito
} catch (error) {
  // El error.message contiene un mensaje legible
  console.error('Error:', error.message);

  // Mostrar al usuario
  setErrorMessage(error.message);
}
```

---

## Logging en Desarrollo

En modo desarrollo, todas las peticiones se logean en la consola:

```
[API POST] /auth/login/
  URL: http://127.0.0.1:8005/api/auth/login/
  Options: {...}
  Response: {message: "Login exitoso", user: {...}}
```

Para errores:

```
[API Error] /mascotas/999/:
  status: 404
  statusText: "Not Found"
  error: "Recurso no encontrado."
```

---

## Ejemplo Completo: Componente de Login

```javascript
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authService.login({ username, password });
      console.log('Login exitoso:', response.user);

      // Redirigir según el rol
      switch (response.user.rol) {
        case 'admin':
          navigate('/admin');
          break;
        case 'publicador':
          navigate('/publicador');
          break;
        case 'adoptante':
          navigate('/adoptante');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuario"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
      />
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
}

export default Login;
```

---

## Ejemplo Completo: Galería de Mascotas

```javascript
import { useState, useEffect } from 'react';
import { mascotasService } from '@/services/api';

function GaleriaMascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMascotas();
  }, []);

  const fetchMascotas = async () => {
    try {
      setLoading(true);
      // Solo mascotas no adoptadas
      const data = await mascotasService.getAll({ adoptada: false });
      setMascotas(data);
      setError('');
    } catch (error) {
      setError('Error al cargar mascotas');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdoptar = async (id) => {
    if (!confirm('¿Deseas adoptar esta mascota?')) return;

    try {
      await mascotasService.adoptar(id);
      alert('¡Mascota adoptada con éxito!');
      // Recargar lista
      fetchMascotas();
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return <div>Cargando mascotas...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="galeria">
      {mascotas.length === 0 ? (
        <p>No hay mascotas disponibles</p>
      ) : (
        mascotas.map(mascota => (
          <div key={mascota.id} className="mascota-card">
            <img src={mascota.imagen} alt={mascota.nombre} />
            <h3>{mascota.nombre}</h3>
            <p>{mascota.descripcion}</p>
            <p>Edad: {mascota.edad} años</p>
            <p>Especie: {mascota.especie.nombre}</p>
            <p>Vacunado: {mascota.vacunado ? 'Sí' : 'No'}</p>
            <button onClick={() => handleAdoptar(mascota.id)}>
              Adoptar
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default GaleriaMascotas;
```

---

## Testing

### Probar el API Service

```javascript
// En la consola del navegador (modo desarrollo)

// 1. Login
const loginResponse = await authService.login({
  username: 'editor1',
  password: 'password123'
});

// 2. Obtener usuario actual
const user = await authService.getCurrentUser();
console.log(user);

// 3. Listar mascotas
const mascotas = await mascotasService.getAll();
console.log(mascotas);

// 4. Obtener especies
const especies = await especiesService.getAll();
console.log(especies);
```

---

## Resolución de Problemas

### Error: "CSRF token not found"

**Causa:** El backend no está enviando el token CSRF en la cookie.

**Solución:**
1. Verifica que el backend Django esté corriendo
2. Realiza una petición GET primero (como `/especies/`) para obtener el token
3. El token se guarda automáticamente en las cookies

### Error: "Network request failed"

**Causa:** El backend no está corriendo o la URL es incorrecta.

**Solución:**
1. Verifica que Django esté corriendo en `http://127.0.0.1:8005`
2. Verifica CORS en el backend

### Redirección infinita al login

**Causa:** El endpoint `/login` también está protegido por el interceptor 401.

**Solución:**
El interceptor ya verifica si estás en `/login` antes de redirigir:

```javascript
if (!window.location.pathname.includes('/login')) {
  window.location.href = '/login';
}
```

---

## Notas de Seguridad

1. **CSRF Protection:** Todos los métodos POST/PUT/PATCH/DELETE incluyen automáticamente el token CSRF
2. **Credentials:** Todas las peticiones incluyen `credentials: 'include'` para cookies de sesión
3. **HTTPS:** En producción, asegúrate de usar HTTPS
4. **Validación:** El backend siempre valida los permisos, el frontend solo controla la UI

---

## Recursos

- [Django REST Framework](https://www.django-rest-framework.org/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [CSRF Protection](https://docs.djangoproject.com/en/stable/ref/csrf/)
