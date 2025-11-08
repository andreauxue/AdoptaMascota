import FormularioAuth from "../components/FormularioAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (data) => {
        console.log("Inicio de sesión completado con datos:", data);
        navigate("/"); 
    };

    return (
        <div>
            {/* Reutilizamos el componente FormularioAuth y le indicamos que se comporte como un formulario de login */}
            <FormularioAuth tipo="login" onSubmit={handleLogin} />
        </div>
    );
}