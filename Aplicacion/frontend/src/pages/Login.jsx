import FormularioAuth from "../components/FormularioAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { login, isLoading } = useAuth();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleLogin = async (data) => {
        setError(null);
        setSuccess(false);

        // Validación básica
        if (!data.username || !data.password) {
            setError("Por favor completa todos los campos");
            return;
        }

        try {
            const result = await login(data.username, data.password);
            
            if (result.success) {
                setSuccess(true);
                
                // Mostrar mensaje de éxito brevemente antes de redirigir
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        } catch (err) {
            // Manejo de errores específicos
            if (err.message.includes("credenciales")) {
                setError("Usuario o contraseña incorrectos");
            } else if (err.message.includes("red") || err.message.includes("fetch")) {
                setError("Error de conexión. Por favor verifica tu conexión a internet");
            } else {
                setError(err.message || "Error al iniciar sesión. Inténtalo de nuevo");
            }
        }
    };

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
                    ¡Inicio de sesión exitoso! Redirigiendo...
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