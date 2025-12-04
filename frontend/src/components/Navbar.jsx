import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, rol, username, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert("No se pudo cerrar sesión.");
    }
  };

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, children, onClick }) => (
    <Link
      to={to}
      onClick={onClick}
      className={
        "px-4 py-2 rounded-lg font-medium transition-all duration-200 " +
        (isActive(to)
          ? 'bg-blue-600 text-white shadow-md'
          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600')
      }
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl shadow-md group-hover:shadow-lg transition-all">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Adopta un Amigo
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/galeria">Galería</NavLink>
            {isAuthenticated && rol === "publicador" && (
              <NavLink to="/publicar">Publicar</NavLink>
            )}
            {isAuthenticated && rol === "admin" && (
              <>
                <NavLink to="/registrar-especie">Especies</NavLink>
                <NavLink to="/admin">Admin</NavLink>
              </>
            )}
            {!isAuthenticated ? (
              <>
                <NavLink to="/login">Login</NavLink>
                <Link to="/registro" className="ml-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200">
                  Registro
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3 ml-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {username ? username[0].toUpperCase() : 'U'}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{username}</span>
                </div>
                <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-all duration-200 shadow-md hover:shadow-lg">
                  Salir
                </button>
              </div>
            )}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</NavLink>
              <NavLink to="/galeria" onClick={() => setIsMobileMenuOpen(false)}>Galería</NavLink>
              {isAuthenticated && rol === "publicador" && (
                <NavLink to="/publicar" onClick={() => setIsMobileMenuOpen(false)}>Publicar</NavLink>
              )}
              {isAuthenticated && rol === "admin" && (
                <>
                  <NavLink to="/registrar-especie" onClick={() => setIsMobileMenuOpen(false)}>Especies</NavLink>
                  <NavLink to="/admin" onClick={() => setIsMobileMenuOpen(false)}>Admin</NavLink>
                </>
              )}
              {!isAuthenticated ? (
                <>
                  <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</NavLink>
                  <Link to="/registro" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-medium text-center shadow-md">
                    Registro
                  </Link>
                </>
              ) : (
                <div className="pt-2 border-t border-gray-200 mt-2">
                  <div className="flex items-center gap-2 px-4 py-2 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      {username ? username[0].toUpperCase() : 'U'}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{username}</p>
                      <p className="text-xs text-gray-500 capitalize">{rol}</p>
                    </div>
                  </div>
                  <button onClick={handleLogout} className="w-full px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-all">
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
