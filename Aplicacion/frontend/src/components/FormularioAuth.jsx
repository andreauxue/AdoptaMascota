/**
 * @fileoverview Componente FormularioAuth.
 * @version 1.0.0
 * @author Equipo Slytherin
 */

import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"; 
import { useAuth } from '../context/AuthContext'; // <-- Importar el Contexto

/**
 * Componente funcional FormularioAuth.
 *
 * Muestra un formulario dinámico que alterna entre las vistas de "Iniciar Sesión" (Login)
 * y "Crear Cuenta" (Registro). Maneja la lógica de estado, validación simulada
 * y la integración con el contexto de autenticación.
 *
 * @param {object} props Las propiedades del componente.
 * @param {string} props.tipo El tipo inicial del formulario ("login" o "register"). Nota: el componente ahora usa un estado interno para alternar.
 * @param {function} props.onSubmit Función (opcional) a ejecutar al enviar el formulario (actualmente usa su propia lógica de manejo).
 * @returns {JSX.Element} El formulario de autenticación renderizado.
 */
export default function FormularioAuth({ tipo, onSubmit }) {
    // Hooks de React Router y Contexto para navegación y autenticación
    const { login } = useAuth(); // Obtener la función de login del contexto
    const navigate = useNavigate(); 
    
    // Estado para capturar los datos del formulario
    const [formData, setFormData] = useState({ 
        username: "", 
        password: "", 
        email: "" 
    });
    // Estados de UI y control
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // Estado que determina si se muestra la vista de Login (true) o Registro (false)
    const [isLogin, setIsLogin] = useState(tipo === "login" || false); 

    /**
     * Manejador de cambio para actualizar el estado del formulario.
     * @param {Event} e Evento de cambio del input.
     */
    const handleChange = (e) => 
        setFormData({ ...formData, [e.target.name]: e.target.value });

    /**
     * Alterna la visibilidad del campo de contraseña.
     */
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    /**
     * Alterna entre la vista de Login y la vista de Registro, limpiando los datos del formulario.
     */
    const handleToggle = () => {
        setIsLogin(!isLogin);
        setFormData({ username: "", password: "", email: "" }); // Limpiar campos al cambiar
    };

    /**
     * Manejador de envío del formulario. Simula una llamada a la API y maneja
     * el estado de carga, la autenticación y la redirección.
     * @param {Event} e Evento de envío del formulario.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulación de envío de datos (retraso de 1.5s)
        setTimeout(() => {
            console.log("Datos del formulario enviados:", {
                tipo: isLogin ? "login" : "register",
                datos: formData,
                timestamp: new Date().toISOString()
            });
            
            // Reemplazar alert() con un modal o mensaje en producción
            alert(isLogin 
                ? "Inicio de sesión exitoso. Redirigiendo al Muro..." 
                : "Registro completado. Redirigiendo al Muro...");
            
            // Datos que se usarían para el Contexto de Autenticación
            const userData = { 
                username: formData.username,
                email: formData.email,
                phone: null, 
                profilePic: null
            };
            
            // 1. LLAMAR A LA FUNCIÓN DE LOGIN DEL CONTEXTO (simulación de autenticación)
            login(userData); 
            
            // 2. REDIRECCIÓN AL MURO
            navigate("/adopta"); 
            
            setIsLoading(false);
        }, 1500);
    };
    
    return (
        // El contenedor principal centra el formulario en la pantalla
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-pink-200"
            >
                {/* Header dinámico */}
                <div className="text-center mb-8">
                    {/* Ícono de usuario con fondo degradado 'durazno' */}
                    <div className="w-16 h-16 bg-gradient-to-r bg-durazno rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaUser className="text-2xl text-white" />
                    </div>
                    {/* Título dinámico */}
                    <h2 className="text-3xl font-bold bg-gradient-to-r bg-du bg-clip-text text-transparent">
                        {isLogin ? "Bienvenido" : "Crear Cuenta"}
                    </h2>
                    {/* Subtítulo dinámico */}
                    <p className="text-gray-600 mt-2">
                        {isLogin 
                            ? "Ingresa a tu cuenta" 
                            : "Únete a nuestra comunidad"
                        }
                    </p>
                </div>

                {/* Campos del formulario */}
                <div className="space-y-4">
                    {/* Campo Usuario (siempre visible) */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-gray-400" />
                        </div>
                        <input 
                            name="username"
                            placeholder="Nombre de usuario"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                        />
                    </div>

                    {/* Campo Email (solo visible en la vista de Registro) */}
                    {!isLogin && (
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaEnvelope className="text-gray-400" />
                            </div>
                            <input 
                                name="email"
                                type="email"
                                placeholder="Correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                            />
                        </div>
                    )}

                    {/* Campo Contraseña (con toggler de visibilidad) */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaLock className="text-gray-400" />
                        </div>
                        <input 
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                        />
                        <button 
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-black transition-colors"
                        >
                            {/* Ícono de ojo que cambia según el estado */}
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>

                {/* Botón de envío (dinámico y con estado de carga) */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full mt-6 py-3 px-4 rounded-xl font-semibold text-black transition-all duration-200 ${
                        isLoading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r bg-durazno hover:bg-durazno/40 hover:to-pink-700 shadow-lg hover:shadow-pink-200'
                    }`}
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center">
                            {/* Spinner de carga */}
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Procesando...
                        </span>
                    ) : (
                        isLogin ? "Iniciar Sesión" : "Crear Cuenta"
                    )}
                </button>

                {/* Enlace para alternar entre Login/Registro */}
                <div className="text-center mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-600">
                        {isLogin 
                            ? "¿No tienes cuenta? " 
                            : "¿Ya tienes cuenta? "
                        }
                        <button 
                            type="button"
                            className="text-azul-fondo hover:text-pink-600 font-semibold transition-colors"
                            onClick={handleToggle}
                        >
                            {isLogin ? "Regístrate" : "Inicia Sesión"}
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
}