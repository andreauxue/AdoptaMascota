import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../apiService";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

// Proveedor de contexto de autenticación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [isLoading, setIsLoading] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);

    // Al cargar la app, verifica la sesión con el backend
    useEffect(() => {
        const verifySession = async () => {
            try {
                const data = await api.get("/api/check-session/");
                if (data.isAuthenticated) {
                    setUser(data.user);
                    localStorage.setItem('user', JSON.stringify(data.user));
                } else {
                    setUser(null);
                    localStorage.removeItem('user');
                }
            } catch (error) {
                console.error("No hay sesión activa", error);
                setUser(null);
                localStorage.removeItem('user');
            } finally {
                setAuthLoading(false);
            }
        };
        verifySession();
    }, []);

    // Función para registrar un nuevo usuario
    const register = async (username, email, password) => {
        setIsLoading(true);
        try {
            const data = await api.post("/api/register/", { username, email, password });
            return data;
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    // Función para iniciar sesión
    const login = async (username, password) => {
        setIsLoading(true);
        try {
            const data = await api.post("/api/login/", { username, password });
            
            if (data.success) {
                setUser(data.user);
                localStorage.setItem('user', JSON.stringify(data.user));
                return { success: true, user: data.user };
            } else {
                throw new Error(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    // Función para cerrar sesión
    const logout = async () => {
        setIsLoading(true);
        try {
            await api.post("/api/logout/");
            setUser(null);
            localStorage.removeItem('user');
            return { success: true };
        } catch (error) {
            console.error("Error al cerrar sesión", error);
            // Aunque falle, limpiamos localmente
            setUser(null);
            localStorage.removeItem('user');
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        user,
        isLoading,
        authLoading,
        register,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!authLoading && children}
        </AuthContext.Provider>
    );
};