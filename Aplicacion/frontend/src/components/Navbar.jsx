import { FaPaw, FaHome, FaUser, FaUserPlus, FaImages, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-brand-400 to-brand-300 text-white px-8 py-4 flex justify-between items-center shadow-lg rounded-b-2xl border-b-4 border-brand-200">
            {/* Logo y título */}
            <div className="flex items-center gap-3">
                <FaPaw className="text-2xl text-brand-100 animate-bounce" aria-hidden="true" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-brand-100 bg-clip-text text-transparent">
                    Pawly
                </h1>
            </div>

            {/* Menú de navegación */}
            <ul className="flex gap-8">
                <li>
                    <Link aria-label="Ir a Inicio"
                        to="/" 
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/30 hover:bg-brand-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-brand-200/50"
                    >
                        <FaHome className="text-lg" />
                        <span className="font-medium">Inicio</span>
                    </Link>
                </li>
                <li>
                    <Link aria-label="Ir a Galería"
                        to="/galeria" 
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/30 hover:bg-brand-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-brand-200/50"
                    >
                        <FaImages className="text-lg" />
                        <span className="font-medium">Galería</span>
                    </Link>
                </li>
                <li>
                    <Link aria-label="Ir a Login"
                        to="/login" 
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/30 hover:bg-brand-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-brand-200/50"
                    >
                        <FaUser className="text-lg" />
                        <span className="font-medium">Login</span>
                    </Link>
                </li>
                <li>
                    <Link aria-label="Ir a Registro"
                        to="/register" 
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/40 hover:bg-brand-600/60 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-brand-200/50"
                    >
                        <FaUserPlus className="text-lg" />
                        <span className="font-medium">Registro</span>
                    </Link>
                </li>
                <li>
                    <Link aria-label="Ir a Logout"
                        to="/logout" 
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/30 hover:bg-brand-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-brand-200/50"
                    >
                        <FaSignOutAlt className="text-lg" />
                        <span className="font-medium">Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}