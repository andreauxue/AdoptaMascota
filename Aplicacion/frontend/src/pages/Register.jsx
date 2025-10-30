import FormularioAuth from "../components/FormularioAuth";

export default function Register() {
    const handleRegister = (data) => {
        console.log("Registro completado con datos:", data);
        // Aquí tienen que agregar más lógica como redirección
        // navigate("/login");
    };

    return (
        <div>
            <FormularioAuth tipo="register" onSubmit={handleRegister} />
        </div>
    );
}