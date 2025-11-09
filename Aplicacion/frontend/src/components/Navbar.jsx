/**
 * @fileoverview Componente Navbar.
 * @version 1.0.2
 * @author Equipo Slytherin
 */
import React, { useState } from 'react';
import logo from "../assets/img/LOGO.png";
import { Link, useNavigate } from 'react-router-dom';

/**
 * Componente funcional Navbar.
 * 
 */
export default function Navbar() {
    const navigate = useNavigate();
    
    // Estado para controlar la visibilidad del modal
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    
    const handleLoginClick = () => navigate('/login');
    const handleLogoClick = () => navigate('/'); 

    // Función para manejar el cierre de sesión confirmado
    const handleConfirmLogout = () => {
        console.log('Sesión cerrada exitosamente.'); 
        setShowLogoutModal(false); 
        navigate('/'); // Redirige al Home
    }

    // Estilo de la barra de búsqueda
    const searchBarClass = "w-full py-2 pl-6 pr-12 text-blanco bg-azul-fondo rounded-full focus:outline-none focus:ring-2 focus:ring-durazno hover:bg-blanco hover:text-azul-fondo transition-all duration-200 border border-azul-fondo";
    const searchIconClass = "absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-blanco hover:text-azul-fondo";

    // Función para crear el elemento subrayado animado
    const UnderlineEffect = () => (
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-verde-menta scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-out" />
    );

    return (
        <nav className="bg-azul-fondo text-white font-serif px-8 py-4 flex justify-between items-center shadow-lg h-20">
            
            {/* 1. Logo y Título (Redirige a Inicio) */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
                <h1 className="text-xl font-serif text-white">
                    Adopta un Amigo
                </h1>
            </div>

            {/* 2. Barra de búsqueda Central */}
            <div className="flex-grow flex justify-center mx-10">
                <div className="relative w-full max-w-lg group"> 
                    <input
                        type="text"
                        placeholder="¿Qué tipo de amigo estás buscando?"
                        className={searchBarClass}
                    />
                    <button className={searchIconClass}>
                        {/* Ícono SVG de búsqueda */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* 3. Menú de navegación */}
            <ul className="flex gap-8 items-center">
                
                {/* Enlace 1: Añadir Anuncio */}
                <li className="group">
                    <Link to="/publicar" className="relative inline-block px-4 py-2 font-serif text-white">
                        Añadir Anuncio
                        <UnderlineEffect />
                    </Link>
                </li>
                
                {/* Enlace 2: Adoptar */}
                <li className="group">
                    <Link to="/muro" className="relative inline-block px-4 py-2 font-serif text-white">
                        Adoptar
                        <UnderlineEffect />
                    </Link>
                </li>
                
                {/* Enlace 3: Editar Perfil */}
                <li className="group">
                    <Link to="/perfil" className="relative inline-block px-4 py-2 font-serif text-white">
                        Editar Perfil
                        <UnderlineEffect />
                    </Link>
                </li>
                
                {/* Botón de Cerrar Sesión*/}
                <li className="group">
                     <button 
                        onClick={() => setShowLogoutModal(true)} 
                        className="relative inline-block px-4 py-2 font-serif text-white border border-durazno rounded-lg hover:bg-durazno hover:text-azul-fondo transition"
                    >
                        Cerrar Sesión
                    </button>
                </li>
            </ul>

            {/* Modal de confirmacion */}
            {showLogoutModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-blanco p-6 rounded-lg shadow-xl w-full max-w-sm">
                        <h3 className="text-xl font-bold text-azul-fondo mb-4">Confirmar Cierre de Sesión</h3>
                        <p className="text-azul-fondo/80 mb-6">
                            ¿Estás seguro que deseas cerrar la sesión? Serás redirigido a la página de inicio.
                        </p>
                        
                        <div className="flex justify-end gap-4">
                            {/* Botón Cancelar */}
                            <button 
                                onClick={() => setShowLogoutModal(false)}
                                className="px-4 py-2 border border-verde-grisaseo text-azul-fondo rounded-lg hover:bg-verde-grisaseo/50 transition"
                            >
                                Cancelar
                            </button>
                            {/* Botón Confirmar (Cerrar Sesión) */}
                            <button 
                                onClick={handleConfirmLogout} 
                                className="px-4 py-2 bg-durazno text-azul-fondo rounded-lg font-semibold hover:bg-durazno/80 transition"
                            >
                                Sí, Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}