import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import adopcionMascotitas from '../assets/adopcion3.jpg';

export default function FormularioAuth({ tipo, onSubmit, isLoading }) {
    const [formData, setFormData] = useState({ 
        username: "", 
        password: "", 
        email: "" 
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => 
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const titulo = tipo === "login" ? "Iniciar sesión" : "Registrarse";
    const subTitulo = tipo === "login" ? "Ingresas tus datos" : "Crea tu cuenta";

    return (
        <div className="min-h-[70vh] bg-[#C1D9C1] flex items-center justify-center p-4">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">

                {/* Columna de Formulario a la izquierda */}
                <div className="w-full max-w-md">
                    {/* Fuente del títullo */}
                    <h2 className="text-4xl font-bold text-[#243B55] mb-6 text-center lg:text-left font-aclonica">
                        {titulo}
                    </h2>
                    
                    {/* Tarjeta del formulario */}
                    <form onSubmit={handleSubmit} className="bg-[#FFFFFF] rounded-lg shadow-xl p-8 w-full">
                        {/* Fuente de subtítulo */}
                        <h3 className="text-2xl font-semibold text-[#243B55] text-center mb-6 font-aclonica">
                            {subTitulo}
                        </h3>

                        {/* Campos del formulario */}
                        <div className="space-y-4">
                            {/* Campo de usuario */}
                            <div className="relative">
                                <input
                                    name="username"
                                    placeholder="Nombre de usuario"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required   
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#127369] focus:border-[#127369] focus:outline-none"
                                />
                            </div>

                            {/* Campo de correo */}
                            {tipo === "register" && (
                                <div className="relative">
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Correo electrónico"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#127369] focus:border-[#127369] focus:outline-none"
                                    />
                                </div>
                            )}

                            {/* Campo de contraseña */}
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Contraseña"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#127369] focus:border-[#127369] focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#127369] hover:opacity-70"
                                >
                                    {showPassword ? <FaEyeSlash/> : <FaEye/>}
                                </button>
                            </div>
                        </div>

                        {/* Botón de envío*/}
                        <button
                            type="submit"
                            disabled={isLoading}
                            // Fuente de botón
                            className={`w-full mt-6 py-3 px-4 rounded-md font-semibold text-white transition-all duration-300 font-belleza ${
                                isLoading
                                    ? 'bg-gray-400 cursor-not-allowed shadow-md'
                                    : 'bg-[#127369] hover:bg-[#243B55] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#243B55]/40 hover:ring-2 hover:ring-white active:translate-y-0 active:shadow-md cursor-pointer shadow-md'
                            }`}
                        >
                            {isLoading ? "Procesando..." : (tipo === "login" ? "Iniciar Sesión" : "Crear Cuenta")}
                        </button>
                    </form>
                </div>

                {/* Columna de Imagen a la derecha */}
                <div className="hidden lg:block lg:w-1/2">
                    <img
                        src={adopcionMascotitas}
                        alt="Decoración"
                        className="rounded-lg shadow-2xl w-full h-auto max-w-lg mx-auto bg-[#FFFFFF] aspect-square object-cover border-4 border-white hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
}