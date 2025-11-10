import { useNavigate } from "react-router-dom";
import FormularioAuth from "../components/FormularioAuth";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    try {
      // Simular guardar sesión
      window.localStorage.setItem("sessionUser", JSON.stringify(data.user));
    } catch (_) {
      // noop
    }
    navigate("/galeria");
  };

  return (
    <div>
      <FormularioAuth tipo="login" onSubmit={handleLogin} />
    </div>
  );
}


