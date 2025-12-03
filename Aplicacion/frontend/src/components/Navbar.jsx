import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { getSession, logout } from "../services/auth";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/";
  const user = getSession();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className="w-full bg-[#38657E] text-white px-8 py-5 
                 flex justify-between items-center shadow-md"
    >
      {/* Logo + Nombre */}
      {isLoginPage ? (
        <div className="flex items-center gap-3 select-none opacity-70">
          <img
            src={logo}
            alt="MatchPaw logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold tracking-wide">
            MatchPaw
          </h1>
        </div>
      ) : (
        // Si le damos clic al logo o nombre nos lleva al Home (o Galería si está logueado)
        <Link
          to={user ? "/home" : "/"}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img
            src={logo}
            alt="MatchPaw logo"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <h1
            className="text-2xl font-bold tracking-wide transition-transform duration-300 group-hover:scale-110"
          >
            MatchPaw
          </h1>
        </Link>
      )}

      {/* Opciones del menú - Solo mostrar si hay usuario y no estamos en login */}
      {!isLoginPage && user && (
        <ul className="flex gap-8 text-sm font-medium">
          {[
            { to: "/home", label: "Inicio" },
            { to: "/galeria", label: "Ver Galería de Mascotas" },
            { to: "/registrar-mascota", label: "Registrar Mascota" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="text-white transition-colors duration-300 hover:text-[#FFB6C1]"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Botón de Cerrar Sesión */}
          <li>
            <button
              onClick={handleLogout}
              className="text-white transition-colors duration-300 hover:text-[#FFB6C1]"
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
