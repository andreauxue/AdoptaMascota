import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FaPaw, FaHome, FaUser, FaUserPlus, FaDog, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const { isAuthenticated, logoutUser } = useContext(UserContext);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const handleLogout = async () => {
    try {
      const csrfToken = getCookie("csrftoken");

      await fetch("http://127.0.0.1:8000/api/logout/", {
        method: "POST",
        headers: { "X-CSRFToken": csrfToken },
        credentials: "include",
      });

      logoutUser(); // actualiza el contexto global
      alert("Sesión cerrada correctamente");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert("No se pudo cerrar sesión.");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-pink-400 to-pink-300 text-white px-8 py-4 flex justify-between items-center shadow-lg rounded-b-2xl border-b-4 border-pink-200">
      {/* Logo y título */}
      <div className="flex items-center gap-3">
        <FaPaw className="text-2xl text-pink-100 animate-bounce" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
          Adopta una Mascota
        </h1>
      </div>

      {/* Menú de navegación */}
      <ul className="flex gap-6">
        <li>
          <a
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/30 hover:bg-pink-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-pink-200/50"
          >
            <FaHome className="text-lg" />
            <span className="font-medium">Inicio</span>
          </a>
        </li>

        {isAuthenticated ? (
          <>
            <li>
              <a
                href="/mascotas"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/30 hover:bg-pink-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-pink-200/50"
              >
                <FaDog className="text-lg" />
                <span className="font-medium">Mascotas</span>
              </a>
            </li>

            <li>
              <a
                href="/registrar-mascota"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/30 hover:bg-pink-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-pink-200/50"
              >
                <FaUserPlus className="text-lg" />
                <span className="font-medium">Registrar Mascota</span>
              </a>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600/40 hover:bg-pink-600/60 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-pink-200/50"
              >
                <FaSignOutAlt className="text-lg" />
                <span className="font-medium">Logout</span>
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <a
                href="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/30 hover:bg-pink-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-pink-200/50"
              >
                <FaUser className="text-lg" />
                <span className="font-medium">Login</span>
              </a>
            </li>

            <li>
              <a
                href="/register"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600/40 hover:bg-pink-600/60 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-pink-200/50"
              >
                <FaUserPlus className="text-lg" />
                <span className="font-medium">Registro</span>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
