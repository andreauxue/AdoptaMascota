// Importamos hooks de React Router y el componente de formulario
import { useNavigate } from "react-router-dom";
import FormularioEspecie from "../components/FormularioEspecie";

// Función auxiliar para obtener el token CSRF de las cookies
export function getCSRFCookie() {
  // Obtenemos todas las cookies del documento
  const value = `; ${document.cookie}`;
  // Dividimos las cookies para encontrar la que nos interesa
  const parts = value.split(`; csrftoken=`);
  // Si encontramos el token, lo extraemos y retornamos
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Componente principal para registrar nuevas especies
export default function RegistrarEspecie() {
  // Hook de React Router para navegar entre páginas
  const navigate = useNavigate();

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = async ({ nombre }) => {
    // Obtenemos el rol del usuario desde el localStorage
    // El localStorage mantiene la información de sesión del usuario
    const rol = localStorage.getItem("rol");

    // Validación de seguridad: solo los administradores pueden crear especies
    // Esta es una validación en el frontend, pero el backend también debe validar
    if (rol !== "admin") {
      alert("Solo un administrador puede registrar nuevas especies.");
      return; // Detenemos la ejecución si no es admin
    }

    // Obtenemos el token CSRF para protección contra ataques
    const csrfToken = getCSRFCookie();

    // Verificamos que el token esté presente
    if (!csrfToken) {
      alert("No se encontró el token CSRF.");
      return; // Sin token CSRF, no podemos proceder
    }

    // Hacemos la petición HTTP POST al endpoint de especies
    const res = await fetch("http://127.0.0.1:8000/api/especies/", {
      method: "POST", // Método HTTP para crear nuevo recurso
      credentials: "include", // Incluye cookies de sesión en la petición
      headers: {
        "Content-Type": "application/json", // Indicamos que enviamos JSON
        "X-CSRFToken": csrfToken, // Token CSRF para protección
      },
      body: JSON.stringify({ nombre }), // Convertimos el objeto a JSON
    });

    // Procesamos la respuesta del servidor
    const data = await res.json();
    console.log(data); // Para debugging en desarrollo

    // Verificamos si la petición fue exitosa (código 200-299)
    if (res.ok) {
      // Si fue exitosa, mostramos confirmación y redirigimos
      alert("Especie registrada correctamente");
      navigate("/registrar-especie"); // Redirigimos a la lista de especies
    } else {
      // Si hubo error, mostramos el mensaje de error del servidor
      alert("Error: " + JSON.stringify(data));
    }
  };

  // Renderizado del componente
  return (
    <div className="p-4">
      {/* 
        Componente FormularioEspecie que se encarga de la UI del formulario
        Le pasamos la función handleSubmit como prop para manejar el envío
      */}
      <FormularioEspecie onSubmit={handleSubmit} />
    </div>
  );
}