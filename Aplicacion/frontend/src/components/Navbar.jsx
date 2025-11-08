/**
 * @fileoverview Componente Navbar.
 * @version 1.0.0
 * @author Equipo Slytherin
 */
import React from 'react'; 
import logo from "../assets/img/LOGO.png";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // <-- Importar el Contexto

/**
 * Componente funcional Navbar.
 *
 * Barra de navegación superior con logo, barra de búsqueda y enlaces condicionales
 * basados en el estado de autenticación del usuario (Login/Logout).
 *
 * @returns {JSX.Element} El elemento de navegación renderizado.
 */
export default function Navbar() {
    const navigate = useNavigate();
    // Obtener estado de autenticación y funciones de control desde el contexto
    const { isLoggedIn, logout } = useAuth(); 

    /**
     * Cierra la sesión del usuario a través del contexto de autenticación y redirige a la página de inicio.
     */
    const handleLogout = () => {
        logout(); // Cierra la sesión
        navigate('/'); // Redirige a la página de inicio
    }
    
    /**
     * Maneja el clic en el logo. Redirige al Muro (/adopta) si está autenticado
     * o a la página de inicio (/) si no lo está.
     */
    const handleLogoClick = () => {
        if (isLoggedIn) {
             navigate('/adopta');
        } else {
             navigate('/');
        }
    }

    return (
        <nav className="bg-azul-fondo text-white font-serif px-8 py-4 flex justify-between items-center shadow-lg h-20">
            
            {/* 1. Logo y Título (Elemento de navegación) */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
                <h1 className="text-xl font-serif bg-gradient-to-r text-white">
                    Adopta un Amigo
                </h1>
            </div>

            {/* 2. Barra de búsqueda Central (Responsive: ocupa el espacio restante) */}
            <div className="flex-grow flex justify-center mx-10">
                <div className="relative w-full max-w-lg"> 
                    <input
                        type="text"
                        placeholder="¿Qué tipo de amigo estás buscando?"
                        className="w-full py-2 pl-6 pr-12 text-gray-800 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-durazno transition-all duration-200"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-azul-fondo">
                        {/* Ícono SVG de búsqueda */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* 3. Menú de navegación condicional */}
            <ul className="flex gap-8 items-center">
                
                {/* Opción de Inicio/Muro (Siempre visible, el texto cambia según el estado) */}
                <li className="group">
                    <Link to={isLoggedIn ? "/adopta" : "/"} className="relative inline-block px-4 py-2 font-serif text-white">
                        {isLoggedIn ? "Muro" : "Inicio"} 
                        {/* Efecto subrayado en hover */}
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-verde-menta scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-out" />
                    </Link>
                </li>

                {/* --- Bloque Condicional: Ítems SOLO para Usuarios Autenticados --- */}
                {isLoggedIn ? (
                    <>
                        <li className="group">
                            <Link to="/publicar" className="relative inline-block px-4 py-2 font-serif text-white">
                                Publicar Mascota
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-verde-menta scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-out" />
                            </Link>
                        </li>
                        <li className="group">
                            <Link to="/perfil" className="relative inline-block px-4 py-2 font-serif text-white">
                                Editar Perfil
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-verde-menta scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-out"/>
                            </Link>
                        </li>
                        {/* Botón de Cerrar Sesión (con estilo durazno) */}
                        <li className="group">
                             <button 
                                onClick={handleLogout}
                                className="relative inline-block px-4 py-2 font-serif text-white border border-durazno rounded-lg hover:bg-durazno hover:text-azul-fondo transition"
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </>
                ) : (
                    // --- Bloque Condicional: Ítem SOLO para Usuarios Invitados ---
                    <li className="group">
                         <button 
                            onClick={() => navigate('/register')}
                            className="relative inline-block px-4 py-2 font-serif text-white border border-verde-menta rounded-lg hover:bg-verde-menta hover:text-azul-fondo transition"
                        >
                            Iniciar Sesión
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    )
}