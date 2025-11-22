import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    FaPaw,
    FaHome,
    FaUser,
    FaUserPlus,
    FaSignOutAlt,
    FaBars,
    FaTimes
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import huellitasEnCasa from '../assets/huellitasEnCasa.jpg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const linkStyle = "flex items-center gap-2 px-4 py-2 rounded-md bg-[#10403B] hover:bg-[#243B55] transition-all duration-300 text-white font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:ring-2 hover:ring-white/50 hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-0 font-belleza";

    const handleLogout = async () => {
        try {
            await logout();
            setIsOpen(false);
            navigate("/");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <nav className="bg-[#127369] text-white px-4 lg:px-8 py-4 flex flex-wrap justify-between items-center shadow-lg">

            {/* Logo y título */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
                <img src={huellitasEnCasa} alt="Logo" className="w-10 h-10 rounded-md bg-[#FFFFFF] hover:rotate-12 transition-transform duration-300" />
                <h1 className="text-xl lg:text-2xl font-bold text-white font-aclonica">
                    Huellitas en Casa
                </h1>
            </Link>

            {/* Botón de Hamburguesa */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-md text-white hover:bg-[#243B55] hover:rotate-90 active:scale-95 transition-all duration-300 cursor-pointer ${isOpen ? 'bg-[#243B55] rotate-90' : ''}`}
                aria-label="Abrir menú"
            >
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>

            {/* Contenedor del Menú */}
            <div className={`w-full lg:w-auto lg:flex items-center mt-4 lg:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col lg:flex-row lg:items-center gap-3">

                    {/* Botón de Inicio */}
                    <li>
                        <Link to="/" className={linkStyle} onClick={() => setIsOpen(false)}>
                            <FaHome className="text-lg group-hover:scale-110 transition-transform" />
                            <span className="font-medium">Inicio</span>
                        </Link>
                    </li>

                    {/* Botón de Galería */}
                    <li>
                        <Link to="/mascotas" className={linkStyle} onClick={() => setIsOpen(false)}>
                            <FaPaw className="text-lg group-hover:rotate-12 transition-transform" />
                            <span className="font-medium">Galería</span>
                        </Link>
                    </li>

                    {/* Mostrar estos botones solo si NO está autenticado */}
                    {!user && (
                        <>
                            {/* Botón de Registrarse */}
                            <li>
                                <Link to="/register" className={linkStyle} onClick={() => setIsOpen(false)}>
                                    <FaUserPlus className="text-lg group-hover:scale-110 transition-transform" />
                                    <span className="font-medium">Registrarse</span>
                                </Link>
                            </li>

                            {/* Botón de Iniciar Sesión */}
                            <li>
                                <Link to="/login" className={linkStyle} onClick={() => setIsOpen(false)}>
                                    <FaUser className="text-lg group-hover:scale-110 transition-transform" />
                                    <span className="font-medium">Iniciar Sesión</span>
                                </Link>
                            </li>
                        </>
                    )}

                    {/* Mostrar estos elementos solo si está autenticado */}
                    {user && (
                        <>
                            {/* Mensaje de bienvenida */}
                            <li className="text-white px-4 py-2 font-medium">
                                Hola, {user.username}
                            </li>

                            {/* Botón de Cerrar Sesión */}
                            <li>
                                <button 
                                    onClick={handleLogout}
                                    className={linkStyle}
                                >
                                    <FaSignOutAlt className="text-lg group-hover:translate-x-1 transition-transform" />
                                    <span className="font-medium">Cerrar Sesión</span>
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}