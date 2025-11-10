import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function FormularioAuth({ tipo, onSubmit }) {
    const [formData, setFormData] = useState({ 
        username: "", 
        password: "", 
        email: "" 
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => 
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulación de envío de datos
        setTimeout(() => {
            console.log("Datos del formulario enviados:", {
                tipo: tipo,
                datos: formData,
                timestamp: new Date().toISOString()
            });
            
            // Simular respuesta exitosa
            const respuestaSimulada = {
                success: true,
                message: tipo === "login" 
                    ? "Inicio de sesión exitoso" 
                    : "Registro completado correctamente",
                user: {
                    id: Math.random().toString(36).substr(2, 9),
                    username: formData.username,
                    email: formData.email
                }
            };
            
            console.log("Respuesta simulada:", respuestaSimulada);
            setIsLoading(false);
            
            // Llamar al callback onSubmit con los datos simulados
            if (onSubmit) {
                onSubmit(respuestaSimulada);
            }
            
            // Mostrar alerta de éxito
            alert(respuestaSimulada.message);
            
        }, 1500);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-pink-200">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaUser className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                        {tipo === "login" ? "Bienvenido" : "Crear Cuenta"}
                    </h2>
                    <p className="text-gray-600 mt-2">
                        {tipo === "login" 
                            ? "Ingresa a tu cuenta" 
                            : "Únete a nuestra comunidad"
                        }
                    </p>
                </div>

                {/* Campos del formulario */}
                <div className="space-y-4">
                    {/* Campo Usuario */}
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

                    {/* Campo Email (solo registro) */}
                    {tipo === "register" && (
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

                    {/* Campo Contraseña */}
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
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-pink-500 transition-colors"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>

                {/* Botón de envío */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full mt-6 py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                        isLoading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-lg hover:shadow-pink-200'
                    }`}
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Procesando...
                        </span>
                    ) : (
                        tipo === "login" ? "Iniciar Sesión" : "Crear Cuenta"
                    )}
                </button>

                {/* Enlace adicional */}
                <div className="text-center mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-600">
                        {tipo === "login" 
                            ? "¿No tienes cuenta? " 
                            : "¿Ya tienes cuenta? "
                        }
                        <button 
                            type="button"
                            className="text-pink-500 hover:text-pink-600 font-semibold transition-colors"
                            onClick={() => console.log("Cambiar a:", tipo === "login" ? "register" : "login")}
                        >
                            {tipo === "login" ? "Regístrate" : "Inicia Sesión"}
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
}