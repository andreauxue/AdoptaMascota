import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

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
        // Si le damos clic al logo o nombre nos lleva al Home 
        <Link
          to="/"
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

      {/* Opciones del menú */}
      <ul className="flex gap-8 text-sm font-medium">
        {[
          { to: "/", label: "Inicio" },
          { to: "/galeria", label: "Ver Galería de Mascotas" },
          { to: "/registrar-mascota", label: "Registrar Mascota" },
          { to: "/login", label: "Cerrar Sesión", isLink: false }
        ].map((item, index) => (
          <li key={index}>
            {item.isLink === false ? (
              <a
                href={item.to}
                className="text-white transition-colors duration-300 hover:text-[#FFB6C1]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.to}
                className="text-white transition-colors duration-300 hover:text-[#FFB6C1]"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
