import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    FaPaw,
    FaHome, 
    FaUser, 
    FaUserPlus, 
    FaSignOutAlt, 
    FaBars, 
    FaTimes 
} from 'react-icons/fa';
import placeholderLogo from '../assets/image.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = "flex items-center gap-2 px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500 transition-all duration-300 text-white font-medium";

    return (
        <nav className="bg-gray-800 text-white px-4 lg:px-8 py-4 flex flex-wrap justify-between items-center shadow-lg">
            
            {/* Logo y título */}
            <Link to="/" className="flex items-center gap-3">
                <img src={placeholderLogo} alt="Logo" className="w-10 h-10 rounded-md bg-gray-300" />
                <h1 className="text-xl lg:text-2xl font-bold text-white">
                    Huellitas en Casa
                </h1>
            </Link>

            {/* Botón de Hamburguesa (menu desplegable) para la pantalla móvil */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                aria-label="Abrir menú"
            >
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>

            {/* Contenedor del Menú (para la pantalla móvil) */}
            <div className={`w-full lg:w-auto lg:flex items-center mt-4 lg:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col lg:flex-row lg:items-center gap-3">
                    
                    {/* Botón de Inicio */}
                    <li>
                        <Link to="/" className={linkStyle} onClick={() => setIsOpen(false)}>
                            <FaHome className="text-lg" />
                            <span className="font-medium">Inicio</span>
                        </Link>
                    </li>

                    {/* 2. Botón de Galería */}
                    <li>
                        <Link to="/mascotas" className={linkStyle} onClick={() => setIsOpen(false)}>
                            <FaPaw className="text-lg" /> 
                            <span className="font-medium">Galería</span>
                        </Link>
                    </li>

                    {/* Botón de Registrarse */}
                    <li>
                        <Link to="/register" className={linkStyle} onClick={() => setIsOpen(false)}>
                            <FaUserPlus className="text-lg" />
                            <span className="font-medium">Registrarse</span>
                        </Link>
                    </li>

                    {/* Botón de Iniciar Sesión */}
                    <li>
                        <Link to="/login" className={linkStyle} onClick={() => setIsOpen(false)}>
                            <FaUser className="text-lg" />
                            <span className="font-medium">Iniciar Sesión</span>
                        </Link>
                    </li>

                    {/* Botón de Cerrar Sesión */}
                    <li>
                        <Link to="/" className={linkStyle} onClick={() => setIsOpen(false)}>
                            <FaSignOutAlt className="text-lg" />
                            <span className="font-medium">Cerrar Sesión</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}