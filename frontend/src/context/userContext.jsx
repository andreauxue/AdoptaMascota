import { createContext, useState, useEffect } from "react";
import { authService, checkSession } from "../services/api";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rol, setRol] = useState(null);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Verificar sesión al cargar la app
  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        setError(null);

        // Intentar obtener el usuario actual desde el backend
        const currentUser = await checkSession();

        if (currentUser) {
          // Si hay sesión activa, actualizar el estado
          setUser(currentUser);
          setIsAuthenticated(true);
          setRol(currentUser.rol);
          setUsername(currentUser.username);
        } else {
          // No hay sesión activa
          setUser(null);
          setIsAuthenticated(false);
          setRol(null);
          setUsername(null);
        }
      } catch (err) {
        // Error al verificar sesión (probablemente no hay sesión)
        console.log("No hay sesión activa:", err.message);
        setUser(null);
        setIsAuthenticated(false);
        setRol(null);
        setUsername(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  /**
   * Login de usuario usando el backend
   * @param {Object} userData - Datos del usuario desde el backend
   */
  const loginUser = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setRol(userData.rol);
    setUsername(userData.username);
    setError(null);
  };

  /**
   * Logout de usuario usando el backend
   */
  const logoutUser = async () => {
    try {
      // Llamar al endpoint de logout del backend
      await authService.logout();
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
    } finally {
      // Limpiar estado local independientemente del resultado
      setUser(null);
      setIsAuthenticated(false);
      setRol(null);
      setUsername(null);
      setError(null);
    }
  };

  /**
   * Actualizar información del usuario
   * Útil después de operaciones que cambian datos del usuario
   */
  const refreshUser = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        setIsAuthenticated(true);
        setRol(currentUser.rol);
        setUsername(currentUser.username);
      }
    } catch (err) {
      console.error("Error al refrescar usuario:", err);
      // Si falla, probablemente la sesión expiró
      logoutUser();
    }
  };

  return (
    <UserContext.Provider
      value={{
        // Estado
        user,
        isAuthenticated,
        rol,
        username,
        loading,
        error,
        // Funciones
        loginUser,
        logoutUser,
        refreshUser,
        setError
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
