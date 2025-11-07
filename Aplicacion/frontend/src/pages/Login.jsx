import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login, getSession } from "../services/auth";

export default function Login() {
  const nav = useNavigate();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    setErr(""); setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 350)); // micro delay visual
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
        <section>
          <h2 className="text-4xl font-extrabold mb-2">MatchPaw</h2>
          <p className="text-gray-600">Encuentra a tu Amigo<br/>Para Toda la Vida</p>
          <div className="mt-6 h-64 bg-gray-200 rounded-xl border grid place-items-center">Imagen</div>
        </section>
        <section>
          <AuthForm mode="login" onSubmit={handleLogin} loading={loading} error={err} />
          <div className="text-center mt-4">
            <Link to="/registro" className="inline-block border rounded-lg px-4 py-2 hover:bg-gray-100">
              Crear Cuenta
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
