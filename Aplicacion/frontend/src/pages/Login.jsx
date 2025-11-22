import FormularioAuth from "../components/FormularioAuth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { login, isLoading, user } = useAuth(); // Traemos 'user' para verificar sesión
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Si el usuario ya está logeado, redirigimos al inicio
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleLogin = async (data) => {
        setError(null);
        setSuccess(false);

        // Validación
        if (!data.username || !data.password) {
            setError("Por favor completa todos los campos");
            return;
        }

        try {
            const result = await login(data.username, data.password);
            
            if (result.success) {
                setSuccess(true);
                
                // Mostramos mensaje de éxito antes de redirigir
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        } catch (err) {
            //  Manejo de errores de conexión
            if (err.message.includes("fetch") || err.message.includes("network") || err.message.includes("Network")) {
                setError("Error de conexión. Verifica conexión a internet o al servidor de mascotas.");
            } else {
                setError(err.message || "Error al iniciar sesión.");
            }
        }
    };

    if (user) return null; 

    return (
        <div>
            <FormularioAuth 
                tipo="login" 
                onSubmit={handleLogin}
                isLoading={isLoading}
            />
            
            {/* Mensaje de éxito */}
            {success && (
                <div className="max-w-md mx-auto mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                    Inicio de sesión exitoso. Redirigiendo...
                </div>
            )}
            
            {/* Mensaje de error */}
            {error && (
                <div className="max-w-md mx-auto mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                    {error}
                </div>
            )}
        </div>
    );
}