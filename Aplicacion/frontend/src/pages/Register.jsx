import FormularioAuth from "../components/FormularioAuth";

export default function Register() {

  const handleRegister = async (data) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resultado = await res.json();
      console.log("Resultado del registro:", resultado);

      if (!res.ok) {
        alert("Error al registrar: " + (resultado.error || "Solicitud inválida"));
        return;
      }

      // Registro exitoso
      alert("Usuario registrado con éxito.");
      
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

  return (

        <FormularioAuth tipo="register" onSubmit={handleRegister} />

  );
}
