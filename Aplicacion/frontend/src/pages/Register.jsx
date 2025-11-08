import FormularioAuth from "../components/FormularioAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const handleRegister = (data) => {
        console.log("Registro completado con datos:", data);
            navigate("/login");
    };

    return (
        <div>
            <FormularioAuth tipo="register" onSubmit={handleRegister} />
        </div>
    );
}