import { FaPaw, FaHome, FaUser, FaUserPlus } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-pink-400 to-pink-300 text-white px-8 py-4 flex justify-between items-center shadow-lg rounded-b-2xl border-b-4 border-pink-200">
            {/* Logo y título */}
            <div className="flex items-center gap-3">
                <FaPaw className="text-2xl text-pink-100 animate-bounce" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                    Adopta una Mascota
                </h1>
            </div>

            {/* Menú de navegación */}
            <ul className="flex gap-8">
                <li>
                    <a 
                        href="/" 
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/30 hover:bg-pink-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-pink-200/50"
                    >
                        <FaHome className="text-lg" />
                        <span className="font-medium">Inicio</span>
                    </a>
                </li>
                <li>
                    <a 
                        href="/login" 
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/30 hover:bg-pink-500/50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-pink-200/50"
                    >
                        <FaUser className="text-lg" />
                        <span className="font-medium">Login</span>
                    </a>
                </li>
                <li>
                    <a 
                        href="/register" 
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600/40 hover:bg-pink-600/60 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-pink-200/50"
                    >
                        <FaUserPlus className="text-lg" />
                        <span className="font-medium">Registro</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}