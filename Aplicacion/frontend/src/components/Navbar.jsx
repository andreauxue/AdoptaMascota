import { Link, useNavigate, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate(); // <-- Importar y usar useNavigate
  const location = useLocation();


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("mpaw_session");
    // Si hay token, pone true. Si no, pone false.
    setIsLoggedIn(!!token); 
  }, [location]);

  const handleLogout = () => {
    //Eliminar el token de autenticación del almacenamiento local
    localStorage.removeItem("mpaw_session"); 

    setIsLoggedIn(false);
    
    //Redireccionar al usuario a la página de Login
    navigate("/"); 
    
    //Recargar la página si el estado no se actualiza correctamente
    window.location.reload(); 
  };

  const menuItems = [
    // Opción visible SOLO cuando NO está logueado
    { to: "/login", label: "Login", action: null, protected: false },
    
    // Opciones visibles SOLO cuando SÍ está logueado
    { to: "/", label: "Inicio", action: null,protected: true},
    { to: "/galeria", label: "Ver Galería de Mascotas", action: null, protected: true },
    { to: "/registrar-mascota", label: "Registrar Mascota", action: null, protected: true },
    
    // Opción de Logout visible SOLO cuando SÍ está logueado
    { label: "Cerrar Sesión", action: handleLogout, protected: true } 
  ];

  //  Filtrar los enlaces que se deben mostrar
  const visibleMenuItems = menuItems.filter(item => {
      // Mostrar si está protegido Y el usuario está logueado
      if (item.protected) {
          return isLoggedIn;
      } 
      // Mostrar si NO está protegido Y el usuario NO está logueado
      if (!item.protected) {
          return !isLoggedIn;
      }
      return true; // Enlace default
  });

  return (
    <nav
      className="w-full bg-[#38657E] text-white px-8 py-5 
                 flex justify-between items-center shadow-md"
    >
      {/* Logo + Nombre */}
      <div className="flex items-center gap-3 group cursor-pointer">
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
      </div>

      {/* Opciones del menú de la navbar */}
      <ul className="flex gap-8 text-sm font-medium">
        {visibleMenuItems.map((item, index) => ( // <-- Usamos los elementos filtrados
          <li key={index}>
            {item.action ? (
              <span
                onClick={item.action} 
                className="text-white transition-colors duration-300 hover:text-[#FFB6C1] cursor-pointer"
              >
                {item.label}
              </span>
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