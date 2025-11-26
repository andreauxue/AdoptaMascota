import FormularioAuth from "../components/FormularioAuth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { login, isLoading, user } = useAuth();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleLogin = async (data) => {
        setError(null);
        setSuccess(false);

        // --- VALIDACIÓN DE CAMPOS OBLIGATORIOS ---
        if (!data.username.trim() || !data.password.trim()) {
            setError("⚠️ Todos los campos son obligatorios. Por favor, llena usuario y contraseña.");
            return; // Detiene la ejecución aquí
        }

        try {
            const result = await login(data.username, data.password);
            
            if (result.success) {
                setSuccess(true);
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        } catch (err) {
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
            
            {success && (
                <div className="max-w-md mx-auto mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                    Inicio de sesión exitoso. Redirigiendo...
                </div>
            )}
            
            {error && (
                <div className="max-w-md mx-auto mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-medium">
                    {error}
                </div>
            )}
        </div>
    );
}