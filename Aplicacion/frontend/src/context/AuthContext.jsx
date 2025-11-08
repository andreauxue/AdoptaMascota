/**
 * @fileoverview AuthContext: Provee el estado de autenticación de la aplicación
 * y funciones para iniciar/cerrar sesión a todos los componentes hijos.
 * @version 1.0.0
 * @author Equipo Slytherin
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Crear el contexto
const AuthContext = createContext();

/**
 * Hook personalizado para facilitar el acceso al AuthContext.
 * @returns {object} El objeto de contexto que contiene { isLoggedIn, user, login, logout, setUser }.
 */
export const useAuth = () => useContext(AuthContext);

/**
 * Proveedor del contexto de autenticación.
 * * Gestiona el estado de login, los datos del usuario y la persistencia
 * de la sesión usando localStorage.
 *
 * @param {object} props Las propiedades del componente.
 * @param {React.ReactNode} props.children Los componentes hijos que tendrán acceso al contexto.
 * @returns {JSX.Element} El proveedor del contexto.
 */
export const AuthProvider = ({ children }) => {
    
    // Inicializar estado del login: buscar en localStorage para persistencia
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Inicializa el estado leyendo 'isLoggedIn' de localStorage.
        return localStorage.getItem('isLoggedIn') === 'true';
    });
    
    // Simulación de los datos del usuario (datos por defecto si no hay sesión activa)
    const [user, setUser] = useState({
        username: 'UsuarioEjemplo',
        email: 'usuario@amigo.com',
        phone: '55 1234 5678',
        profilePic: 'URL_A_TU_FOTO_DE_PERFIL_O_LOGO'
    });

    /**
     * Efecto secundario que se ejecuta cada vez que 'isLoggedIn' cambia.
     * Mantiene el estado de la sesión persistente en localStorage.
     */
    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    /**
     * Función para simular inicio de sesión exitoso.
     * @param {object} userData Los datos del usuario (username, email, etc.) obtenidos del backend.
     */
    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData); // Guardar los datos del usuario
        // NOTA: En producción, aquí también se guardaría el token de autenticación (JWT).
    };

    /**
     * Función para simular cierre de sesión.
     */
    const logout = () => {
        setIsLoggedIn(false);
        setUser({}); // Limpiar los datos del usuario
        // Limpiar la clave de persistencia en localStorage
        localStorage.removeItem('isLoggedIn');
    };

    // Objeto de valor del contexto que se proporciona a los componentes
    const value = {
        isLoggedIn, // Estado: ¿Está autenticado? (boolean)
        user,       // Datos del usuario (object)
        login,      // Función para iniciar sesión
        logout,     // Función para cerrar sesión
        setUser     // Función para que otros componentes actualicen los datos del perfil
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};