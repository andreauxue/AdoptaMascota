/**
 * @fileoverview Navbar sincronizado con AuthContext.
 * @version 2.0.0
 * @autor Equipo Slytherin
 */

import React, { useState } from 'react';
import logo from "../assets/img/LOGO.png";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import FeedbackModal from "../components/FeedbackModal";

export default function Navbar() {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogoClick = () => navigate('/');

    const handleConfirmLogout = async () => {
        await logout();
        setShowLogoutModal(false);
        navigate('/');
    };

    const searchBarClass =
        "w-full py-2 pl-6 pr-12 text-blanco bg-azul-fondo rounded-full " +
        "focus:outline-none focus:ring-2 focus:ring-durazno hover:bg-blanco " +
        "hover:text-azul-fondo transition-all duration-200 border border-azul-fondo";

    const searchIconClass =
        "absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-blanco hover:text-azul-fondo";

    const UnderlineEffect = () => (
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-verde-menta scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-out" />
    );

    return (
        <nav className="bg-azul-fondo text-white font-serif px-8 py-4 flex justify-between items-center shadow-lg h-20">

            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
                <h1 className="text-xl font-serif text-white">Adopta un Amigo</h1>
            </div>

            {/* Barra de búsqueda */}
            <div className="flex-grow flex justify-center mx-10">
                <div className="relative w-full max-w-lg group">
                    <input
                        type="text"
                        placeholder="¿Qué tipo de amigo estás buscando?"
                        className={searchBarClass}
                    />
                    <button className={searchIconClass}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Navegación */}
            <ul className="flex gap-8 items-center">

                {/* ---- SI NO ESTÁ LOGUEADO ---- */}
                {!isAuthenticated && (
                    <>
                        <li className="group">
                            <button onClick={() => navigate("/muro")} className="relative inline-block px-4 py-2 font-serif text-white">
                                Muro
                                <UnderlineEffect />
                            </button>
                        </li>

                        <li className="group">
                            <button onClick={() => navigate("/register")} className="relative inline-block px-4 py-2 font-serif text-white">
                                Registrarse
                                <UnderlineEffect />
                            </button>
                        </li>

                        <li className="group">
                            <button onClick={() => navigate("/login")} className="relative inline-block px-4 py-2 font-serif text-white">
                                Iniciar Sesión
                                <UnderlineEffect />
                            </button>
                        </li>
                    </>
                )}

                {/* ---- SI ESTÁ LOGUEADO ---- */}
                {isAuthenticated && (
                    <>
                        <li className="group">
                            <button onClick={() => navigate("/publicar")} className="relative inline-block px-4 py-2 font-serif text-white">
                                Publicar Mascota
                                <UnderlineEffect />
                            </button>
                        </li>

                        <li className="group">
                            <button onClick={() => navigate("/muro")} className="relative inline-block px-4 py-2 font-serif text-white">
                                Adoptar
                                <UnderlineEffect />
                            </button>
                        </li>

                        <li className="group">
                            <button onClick={() => navigate("/perfil")} className="relative inline-block px-4 py-2 font-serif text-white">
                                Editar Perfil
                                <UnderlineEffect />
                            </button>
                        </li>

                        <li className="group">
                            <button
                                onClick={() => setShowLogoutModal(true)}
                                className="relative inline-block px-4 py-2 font-serif text-white border border-durazno rounded-lg hover:bg-durazno hover:text-azul-fondo transition"
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </>
                )}
            </ul>

            <FeedbackModal
                isOpen={showLogoutModal}
                title="Confirmar Cierre de Sesión"
                message="¿Estás seguro que deseas cerrar sesión? Serás redirigido a la página de inicio."
                showCancel={true}
                cancelText="Cancelar"
                confirmText="Sí, Cerrar Sesión"
                onCancel={() => setShowLogoutModal(false)}
                onConfirm={handleConfirmLogout}
            />
        </nav>
    );
}
