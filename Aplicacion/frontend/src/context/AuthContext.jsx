import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Verificar sesión al cargar la app
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const data = await authAPI.checkAuth();
            if (data.isAuthenticated) {
                setUser(data.user);
                setIsAuthenticated(true);
                localStorage.setItem('user', JSON.stringify(data.user));
            } else {
                setUser(null);
                setIsAuthenticated(false);
                localStorage.removeItem('user');
            }
        } catch (error) {
            console.error('Error al verificar autenticación:', error);
            setUser(null);
            setIsAuthenticated(false);
            localStorage.removeItem('user');
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (username, password) => {
        try {
            const data = await authAPI.login(username, password);
            setUser(data.user);
            setIsAuthenticated(true);
            localStorage.setItem('user', JSON.stringify(data.user));
            return { success: true, user: data.user };
        } catch (error) {
            console.error('Error en login:', error);
            return { 
                success: false, 
                error: error.message || 'Error al iniciar sesión' 
            };
        }
    };

    const register = async (userData) => {
        try {
            const data = await authAPI.register(userData);
            setUser(data.user);
            setIsAuthenticated(true);
            localStorage.setItem('user', JSON.stringify(data.user));
            return { success: true, user: data.user };
        } catch (error) {
            console.error('Error en registro:', error);
            return { 
                success: false, 
                error: error.message || 'Error al registrar usuario' 
            };
        }
    };

    const value = {
        user,
        isAuthenticated,
        isLoading,
        login,
        register,
        checkAuthStatus
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

