import { FaRegCopyright, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import placeholderLogo from '../assets/image.png'; // Imagen placeholder

export default function Footer() {
    return (
        // Fondo de color gris oscuro y texto claro
        <footer className="bg-gray-800 text-gray-300 text-center py-8 mt-16 border-t border-gray-700">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                
                {/* Logo y título a la izquierda */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                    <img src={placeholderLogo} alt="Logo" className="w-12 h-12 rounded-md bg-gray-300" />
                    <h3 className="text-2xl font-bold text-white">
                        Huellitas en Casa
                    </h3>
                </div>
                
                {/* Información de contacto al centro */}
                <div className="flex flex-col items-center gap-2 text-sm">
                    <h4 className="font-semibold text-white mb-2">Medios de Contacto</h4>
                    <span className="flex items-center gap-2"><FaEnvelope /> hola@huellitas.org</span>
                    <span className="flex items-center gap-2"><FaPhone /> +1 (555) 123-4567</span>
                    <span className="flex items-center gap-2"><FaMapMarkerAlt /> Ciudad Animal, CA 90210</span>
                </div>

                {/* Redes sociales a la derecha */}
                <div className="flex flex-col items-center md:items-end">
                     <h4 className="font-semibold text-white mb-2">Redes sociales</h4>
                     <div className="flex gap-4">
                        <img src={placeholderLogo} alt="Icono" className="w-8 h-8 rounded-md bg-gray-300" />
                        <img src={placeholderLogo} alt="Icono" className="w-8 h-8 rounded-md bg-gray-300" />
                        <img src={placeholderLogo} alt="Icono" className="w-8 h-8 rounded-md bg-gray-300" />
                     </div>
                </div>

            </div>
            
            {/* Derechos de autor */}
            <div className="border-t border-gray-700 pt-4 mt-8">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <FaRegCopyright /> {new Date().getFullYear()} Huellitas en Casa. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}