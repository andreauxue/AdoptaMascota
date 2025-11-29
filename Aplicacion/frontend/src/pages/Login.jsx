// Importamos los componentes y hooks necesarios
import FormularioAuth from "../components/FormularioAuth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/userContext";

export default function Login() {
  // Hook de React Router para navegar entre páginas
  const navigate = useNavigate();
  
  // Obtenemos la función loginUser del contexto de usuario
  // El contexto permite compartir estado entre componentes sin pasar props manualmente
  const { loginUser } = useContext(userContext);

  // Función que maneja el proceso de inicio de sesión
  const handleLogin = async (data) => {
    // Realizamos la petición HTTP al endpoint de login del backend
    const res = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST", // Método HTTP para enviar datos
      headers: { "Content-Type": "application/json" }, // Indicamos que enviamos JSON
      credentials: "include", // Crucial para manejar cookies de sesión
      body: JSON.stringify(data), // Convertimos los datos del formulario a JSON
    });

    // Procesamos la respuesta del servidor como JSON
    const result = await res.json();
    console.log("Respuesta del login:", result); // Para debugging

    // Verificamos si la respuesta contiene información del usuario (login exitoso)
    if (result.user) {
      // LOGIN EXITOSO - Proceso en tres pasos:

      // Paso 1: Guardar información en localStorage para persistencia
      // localStorage mantiene los datos incluso al recargar la página
      localStorage.setItem("rol", result.user.rol); // Guardamos el rol del usuario
      localStorage.setItem("user_id", result.user.id); // Guardamos el ID del usuario

      // Paso 2: Actualizar el contexto global de la aplicación
      // Esto actualiza el estado de React y notifica a todos los componentes suscritos
      loginUser(result.user.rol); // La función del contexto actualiza isAuthenticated y rol

      // Paso 3: Redirigir al usuario según su rol
      // Cada tipo de usuario va a una sección diferente de la aplicación
      if (result.user.rol === "admin") {
        navigate("/admin"); // Redirige al panel de administración
      } else if (result.user.rol === "publicador") {
        navigate("/publicador"); // Redirige al panel del publicador
      } else {
        navigate("/adoptante"); // Redirige al panel del adoptante
      }

    } else {
      // LOGIN FALLIDO - Mostrar mensaje de error
      alert("Credenciales inválidas");
    }
  };

  // Renderizamos el componente de formulario de autenticación
  // Le pasamos el tipo "login" y la función handleLogin como prop
  return <FormularioAuth tipo="login" onSubmit={handleLogin} />;
}