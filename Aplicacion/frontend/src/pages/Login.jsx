import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import logoRosa from "../assets/logoRosa.png";
import { login, getSession } from "../services/auth";

export default function Login() {
  const nav = useNavigate();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    setErr(""); 
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 350)); 
      login({ email: data.email, password: data.password });
      const me = getSession();
      nav("/galeria", { replace: true, state: { welcome: `¡Hola, ${me?.name || "amigo"}!` } });
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] grid place-items-center bg-gray-100">
      <div className="grid md:grid-cols-2 w-full max-w-5xl gap-8 p-6">
        
        {/* SECCIÓN IZQUIERDA */}
        <section className="flex flex-col items-start">
          <h2 className="text-4xl font-extrabold mb-2 text-[#38657E]">MatchPaw</h2>


          <p className="text-gray-600">
            Encuentra a tu Amigo<br/>Para Toda la Vida
          </p>

          {/* Imagen del logo (sin fondo gris) */}
          <img 
            src={logoRosa} 
            alt="Logo MatchPaw" 
            className="mt-6 w-64 h-auto object-contain"
          />
        </section>

        {/* SECCIÓN DERECHA */}
        <section>
          <AuthForm 
            mode="login" 
            onSubmit={handleLogin} 
            loading={loading} 
            error={err} 
          />

          <div className="text-center mt-4">
            <Link 
              to="/register" 
              className="inline-block border border-black rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              Crear Cuenta
            </Link>
          </div>

        </section>

      </div>
    </div>
  );
}
