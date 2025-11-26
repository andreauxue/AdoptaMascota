import FormularioAuth from "../components/FormularioAuth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../apiService";
import { useAuth } from "../context/AuthContext"; 

export default function Register() {
    const navigate = useNavigate();
    const { user } = useAuth(); // Traemos 'user' para verificar sesión
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtenemos el token CSRF al cargar la página
    useEffect(() => {
        api.get("/api/get-csrf/").catch(err => {
            console.warn("No se pudo obtener el token CSRF inicial", err);
        });
    }, []);

    // Si el usuario ya está logeado, redirigimos al inicio
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    // Acá se maneja el envío del formulario de registro
    const handleRegister = async (data) => {
        setError(null);
        setIsLoading(true);

        if (!data.username || !data.password || !data.email) {
            setError("Todos los campos son obligatorios.");
            setIsLoading(false);
            return;
        }

        try {
            await api.post("/api/register/", {
                username: data.username,
                email: data.email,
                password: data.password
            });
            
            alert("¡Registro completado! Ahora puedes iniciar sesión.");
            navigate("/login");
        
        } catch (err) {
            setError(err.message); 
        
        } finally {
            setIsLoading(false);
        }
    };

    if (user) return null;

    return (
        <div>
            <FormularioAuth 
                tipo="register" 
                onSubmit={handleRegister} 
                isLoading={isLoading} 
            />
            
            {error && (
                <div className="max-w-md mx-auto mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                    {error}
                </div>
            )}
        </div>
    );
}