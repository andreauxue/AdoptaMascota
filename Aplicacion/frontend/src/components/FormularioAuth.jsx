import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserTag
} from "react-icons/fa";

export default function FormularioAuth({ tipo, onSubmit }) {
  // Estado del formulario
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    rol: "adoptante",   
  });

  // Control de visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Estado de carga mientras se envían los datos
  const [isLoading, setIsLoading] = useState(false);

  // Maneja cambios en los campos del formulario
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Envía los datos al componente padre
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSubmit(formData);

      // Limpieza del formulario según tipo
      setFormData({
        username: "",
        password: "",
        email: "",
        rol: "adoptante",
      });
    } catch (error) {
      console.error("Error en envío del formulario:", error);
      alert("Ocurrió un error, por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  // Alternar visibilidad de la contraseña
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-pink-200"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUser className="text-2xl text-white" />
          </div>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            {tipo === "login" ? "Bienvenido" : "Crear Cuenta"}
          </h2>

          <p className="text-gray-600 mt-2">
            {tipo === "login"
              ? "Ingresa a tu cuenta"
              : "Únete a nuestra comunidad"}
          </p>
        </div>

        {/* Campos */}
        <div className="space-y-4">

          {/* Usuario */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              name="username"
              placeholder="Nombre de usuario"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
                         focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
            />
          </div>

          {/* Email solo en registro */}
          {tipo === "register" && (
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
                           focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>
          )}

          {/* Select de rol solo en registro */}
          {tipo === "register" && (
            <div className="relative">
              <FaUserTag className="absolute left-3 top-3 text-gray-400" />
              <select
                name="rol"
                value={formData.rol}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
                           bg-white focus:ring-2 focus:ring-pink-500 transition"
              >
                <option value="adoptante">Adoptante</option>
                <option value="publicador">Publicador</option>
              </select>
            </div>
          )}

          {/* Contraseña */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl 
                         focus:ring-2 focus:ring-pink-500 transition"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 
                         hover:text-pink-500 transition"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Botón - CORREGIDO */}
        <button
          type="submit"
          disabled={isLoading}
          className={`
            w-full mt-6 py-3 rounded-xl font-semibold text-white transition-all duration-200
            ${isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-lg hover:shadow-pink-200"
            }
          `}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Procesando...
            </span>
          ) : tipo === "login" ? (
            "Iniciar Sesión"
          ) : (
            "Crear Cuenta"
          )}
        </button>

        {/* Enlace inferior */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            {tipo === "login"
              ? "¿No tienes cuenta? "
              : "¿Ya tienes cuenta? "}
            <button
              type="button"
              className="text-pink-500 hover:text-pink-600 font-semibold"
              onClick={() => console.log("Cambiar vista manualmente")}
            >
              {tipo === "login" ? "Regístrate" : "Inicia Sesión"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}