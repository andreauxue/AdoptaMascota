import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import logoRosa from "../assets/logoRosa.png";
import inicio from "../assets/inicio.png";
import { login, getSession } from "../services/auth";

export default function Login() {
  const nav = useNavigate();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    setErr("");
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 350));
      login({ email: data.email, password: data.password });
      const me = getSession();
      nav("/galeria", {
        replace: true,
        state: { welcome: `¡Hola, ${me?.name || "amigo"}!` },
      });
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-[#FFE6EC] relative">

      {/* Imagen con Animación */}
      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          50% { transform: scale(1.07); }
          100% { transform: scale(1); }
        }
        .animate-zoomSlow {
          animation: zoomSlow 6s ease-in-out infinite;
        }
      `}</style>

      {/* Tarjeta principal */}
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-4xl grid md:grid-cols-2 gap-8 border border-pink-200">

        {/* parte izquierda de la tarjeta */}
        <section className="flex flex-col justify-center text-center md:text-left">
          
          <h1 className="text-5xl font-extrabold text-[#38657E] drop-shadow-sm tracking-tight">
            MatchPaw
          </h1>

          <p className="mt-2 text-gray-600 text-lg">
            Encuentra a tu amigo<br />
            <span className="font-semibold text-[#E25374]">
              para toda la vida ♡
            </span>
          </p>

          <img
            src={inicio}
            alt="MatchPaw"
            className="mt-8 w-80 mx-auto md:mx-0 rounded-3xl shadow-lg border border-pink-200 animate-zoomSlow"
          />
        </section>

        {/* Parte derecha de la tarjeta */}
        <section className="flex flex-col justify-center">

          <div className="bg-white p-6 rounded-2xl shadow-md border border-pink-100">
            <AuthForm
              mode="login"
              onSubmit={handleLogin}
              loading={loading}
              error={err}
            />
          </div>

          {/* Botón de crear cuenta */}
          <div className="text-center mt-5">
            <Link
              to="/register"
              className="
                inline-block bg-[#FF85A2] text-white font-semibold
                px-5 py-2 rounded-full shadow-md 
                hover:bg-[#ff6c8f] transition-all duration-300 
                active:scale-95
              "
            >
              Crear Cuenta
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
