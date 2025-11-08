// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav
      className="w-full bg-[#38657E] text-white px-8 py-5 
                 flex justify-between items-center shadow-md"
    >
      {/* Logo + Nombre */}
      <div className="flex items-center gap-3">
        <img 
          src={logo} 
          alt="MatchPaw logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-2xl font-bold tracking-wide">MatchPaw</h1>
      </div>

      {/* Opciones del menú */}
      <ul className="flex gap-8 text-lg font-medium">
        <li>
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
        </li>

        <li>
          <Link to="/galeria" className="hover:underline">
            Ver Galería
          </Link>
        </li>

        <li>
          <Link to="/registrar-mascota" className="hover:underline">
            Registrar Mascota
          </Link>
        </li>

        <li>
          <a href="/login" className="hover:underline">
            Login
          </a>
        </li>

        <li>
          <a href="/logout" className="hover:underline">
            Cerrar Sesión
          </a>
        </li>

        <li>
          <a href="/register" className="hover:underline">
            Regístrate
          </a>
        </li>
      </ul>
    </nav>
  );
}
