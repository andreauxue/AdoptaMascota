# Sistema de Autenticación - Context API

## Estructura del Context

El sistema de autenticación usa React Context API para compartir el estado del usuario en toda la aplicación.

### UserContext (userContext.jsx)

Proporciona el estado global de autenticación y funciones para manejarlo.

#### Estado

- `isAuthenticated` (boolean): Indica si el usuario está autenticado
- `rol` (string | null): Rol del usuario (admin, publicador, adoptante)
- `username` (string | null): Nombre de usuario

#### Funciones

##### loginUser(rol, username)

Autentica al usuario y guarda la sesión.

```javascript
const { loginUser } = useContext(UserContext);

loginUser("adoptante", "Juan Pérez");
```

##### logoutUser()

Cierra la sesión y limpia todos los datos.

```javascript
const { logoutUser } = useContext(UserContext);

logoutUser();
```

### Persistencia

El estado se guarda automáticamente en localStorage:
- `isAuthenticated`: "true" o removido
- `rol`: rol del usuario
- `username`: nombre del usuario

Al recargar la página, el contexto restaura automáticamente la sesión desde localStorage.

## Uso en Componentes

### Ejemplo 1: Mostrar contenido según autenticación

```javascript
import { useContext } from "react";
import { UserContext } from "../context/userContext";

function MiComponente() {
  const { isAuthenticated, username } = useContext(UserContext);

  return (
    <div>
      {isAuthenticated ? (
        <p>Hola, {username}</p>
      ) : (
        <p>Por favor inicia sesión</p>
      )}
    </div>
  );
}
```

### Ejemplo 2: Proteger acciones según rol

```javascript
import { useContext } from "react";
import { UserContext } from "../context/userContext";

function AdminPanel() {
  const { rol } = useContext(UserContext);

  if (rol !== "admin") {
    return <p>No tienes permisos</p>;
  }

  return <div>Panel de administración</div>;
}
```

### Ejemplo 3: Manejar login

```javascript
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

function Login() {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(credentials)
    });

    const data = await response.json();

    if (data.user) {
      loginUser(data.user.rol, data.user.username);
      navigate("/galeria");
    }
  };

  return <form onSubmit={handleLogin}>...</form>;
}
```

## Rutas Protegidas

### ProtectedRoute Component

Componente que protege rutas requiriendo autenticación y opcionalmente un rol específico.

```javascript
<Route
  path="/publicar"
  element={
    <ProtectedRoute>
      <PublishPet />
    </ProtectedRoute>
  }
/>
```

Con rol requerido:

```javascript
<Route
  path="/admin"
  element={
    <ProtectedRoute requiredRole="admin">
      <AdminPanel />
    </ProtectedRoute>
  }
/>
```

### Comportamiento

- Si no está autenticado: redirige a `/login`
- Si está autenticado pero no tiene el rol: muestra mensaje de acceso denegado
- Si cumple los requisitos: muestra el componente

## Roles del Sistema

1. **admin**: Acceso completo al sistema
   - Puede gestionar especies
   - Puede gestionar mascotas
   - Acceso al panel de administración

2. **publicador**: Puede publicar mascotas
   - Puede registrar mascotas
   - Puede ver sus publicaciones

3. **adoptante**: Puede adoptar mascotas
   - Puede ver la galería
   - Puede adoptar mascotas disponibles

## Flujo de Autenticación

1. Usuario ingresa credenciales en `/login`
2. Se envía request al backend
3. Backend valida y devuelve datos del usuario
4. Frontend llama a `loginUser(rol, username)`
5. Context guarda datos en estado y localStorage
6. Usuario es redirigido según su rol
7. Navbar actualiza automáticamente mostrando nombre y botón de logout
8. Rutas protegidas permiten acceso

## Cierre de Sesión

1. Usuario hace clic en "Cerrar sesión"
2. Se envía request al backend (opcional)
3. Frontend llama a `logoutUser()`
4. Context limpia estado y localStorage
5. Usuario es redirigido a `/login`
6. Navbar vuelve a mostrar "Iniciar sesión"

## Datos Simulados para Testing

Para pruebas sin backend, puedes usar:

```javascript
const mockUser = {
  rol: "adoptante",
  username: "Juan Pérez",
  id: 1,
  email: "juan@email.com"
};

loginUser(mockUser.rol, mockUser.username);
```
