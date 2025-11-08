import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { register } from "../services/auth";

export default function Register() {
  const nav = useNavigate();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (data) => {
    setErr(""); setLoading(true);
    try {
      // Validaciones rápidas
      if (!data.name.trim()) throw new Error("El nombre es obligatorio.");
      if (!/^\S+@\S+\.\S+$/.test(data.email)) throw new Error("Correo inválido.");
      if (data.password.length < 6) throw new Error("La contraseña debe tener al menos 6 caracteres.");
      if (data.password !== data.confirmPassword) throw new Error("Las contraseñas no coinciden.");

      await new Promise(r => setTimeout(r, 350));
      register(data);
      nav("/galeria", { replace: true });
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] grid place-items-center bg-gray-100">
      <div className="w-full max-w-3xl p-6">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-extrabold">MatchPaw</h2>
        </div>
        <AuthForm mode="register" onSubmit={handleRegister} loading={loading} error={err} />
        <p className="text-center mt-4 text-sm">
          ¿Ya tienes cuenta? <Link to="/login" className="underline">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}
