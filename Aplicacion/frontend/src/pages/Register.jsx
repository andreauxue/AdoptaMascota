import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../services/auth";
import logoRosa from "../assets/logoRosa.png";

export default function Register() {
  const nav = useNavigate();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      if (!formData.name.trim()) throw new Error("El nombre es obligatorio.");
      if (!/^\S+@\S+\.\S+$/.test(formData.email))
        throw new Error("Correo inválido.");
      if (formData.password.length < 6)
        throw new Error("La contraseña debe tener al menos 6 caracteres.");
      if (formData.password !== formData.confirmPassword)
        throw new Error("Las contraseñas no coinciden.");

      await new Promise((r) => setTimeout(r, 350));
      register(formData);
      nav("/galeria", { replace: true });
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[#FFE6EC] flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-pink-200">

        <div className="flex flex-col items-center mb-8">
          <img src={logoRosa} alt="MatchPaw Logo" className="w-32 mb-3 drop-shadow-md" />

          <h1 className="text-4xl font-bold text-[#000000] text-center">
            Crear Cuenta
          </h1>
          <p className="mt-3 max-w-md text-center text-gray-700 text-base leading-relaxed">
            Regístrate para comenzar a explorar y encontrar tu mascota ideal.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleRegister} className="space-y-6">
          
          {/* Nombre */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              placeholder="Ejemplo: Carlos"
              required
            />
          </div>

          {/* Correo */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">Correo</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              placeholder="tucorreo@email.com"
              required
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              placeholder="Mínimo 6 caracteres"
              required
            />
          </div>

          {/* Confirmación de contraseña */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              placeholder="Repite tu contraseña"
              required
            />
          </div>

          {/* Error */}
          {err && (
            <p className="text-red-600 font-medium text-center">{err}</p>
          )}

          {/* Botón de crear cuenta */}
          <button
            type="submit"
            disabled={loading}
            className="
              mt-4 w-full py-3 rounded-full
              bg-[#ff85a2] hover:bg-[#ff6c8f]
              text-white font-bold text-lg
              shadow-md active:scale-95 transition
              disabled:opacity-70
            "
          >
            {loading ? "Creando cuenta..." : "Registrarse"}
          </button>
        </form>

        {/* Link al login por si ya tiene cuenta el usuario */}
        <p className="text-center mt-6 text-sm">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="underline text-pink-700 font-semibold">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
