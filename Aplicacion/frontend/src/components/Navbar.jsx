import React from 'react'; // Importar React es buena práctica
import logo from "../assets/img/LOGO.png";

export default function Navbar() {
    return (
        // Asegúrate de que 'bg-azul-fondo' esté definido en tu configuración de Tailwind
        <nav className="bg-azul-fondo text-white font-serif px-8 py-4 flex justify-between items-center shadow-lg h-20">
            
            {/* Logo y título */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain cursor-pointer" />
                <h1 className="text-xl font-serif bg-gradient-to-r text-white cursor-pointer">
                    Adopta un Amigo
                </h1>
            </div>

            {/* Contenedor central para la barra de búsqueda (flex-grow para ocupar el espacio) */}
            <div className="flex-grow flex justify-center mx-10">
                <div className="relative w-full max-w-lg"> 
                    {/* El div 'max-w-lg' centra y limita el ancho del input */}
                    <input
                        type="text"
                        placeholder="¿Qué tipo de amigo estás buscando?"
                        className="w-full py-2 pl-6 pr-12 text-gray-800 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                    
                    {/* Icono de búsqueda (lupa) */}
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-800">
                        {/* Puedes usar un ícono SVG como este: */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menú de navegación (manteniendo el margen derecho) */}
            <ul className="flex gap-8">
                <li className="group">
                   <a href="/" className="relative inline-block px-4 py-2 font-serif text-white">
                    Publicar Mascota
      
                    {/* Línea animada */}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white
                        scale-x-0 group-hover:scale-x-100 
                        origin-right group-hover:origin-left 
                        transition-transform duration-300 ease-out" />
                    </a>
                </li>
                <li className="group">
                    <a 
                        href="/login" 
                        className="relative inline-block px-4 py-2 font-serif text-white ">
                            Adopta
                        
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100
                        origin-right group-hover:origin-left transition-transform duration-300 ease-out" />
                    </a>
                </li>
                <li className="group">
                    <a 
                        href="/register" 
                        className="relative inline-block px-4 py-2 font-serif text-white ">
                            Editar Perfil
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100
                        origin-right group-hover:origin-left transition-transform duration-300 ease-out"/ >
                    </a>
                </li>
            </ul>
        </nav>
    )
}