import FormularioAuth from "../components/FormularioAuth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../apiService";

// Página de registro de nuevos usuarios
export default function Register() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtener el token CSRF al cargar la página
    useEffect(() => {
        api.get("/api/get-csrf/").catch(err => {
            console.warn("No se pudo obtener el token CSRF inicial", err);
        });
    }, []);

    // Maneja el envío del formulario de registro
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

    return (
        <div>
            <FormularioAuth 
                tipo="register" 
                onSubmit={handleRegister} 
                isLoading={isLoading} 
            />
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
    );
}