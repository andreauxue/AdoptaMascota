import { FaHeart, FaPaw } from 'react-icons/fa';

export default function Footer({ color = "bg-pink-50", texto = "Adopta una Mascota" }) {
    return (
        <footer className={`${color} text-center py-8 mt-16 border-t border-pink-200`}>
            <div className="container mx-auto px-6">
                {/* Logo y título */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaPaw className="text-2xl text-pink-500" />
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                        {texto}
                    </h3>
                </div>
                
                {/* Texto principal */}
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                    Dando hogar y amor a mascotas necesitadas. Juntos podemos hacer 
                    del mundo un lugar mejor para nuestros amigos peludos.
                </p>
                
                {/* Icono decorativo */}
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <FaHeart className="text-white text-lg" />
                    </div>
                </div>
                
                {/* Información de contacto */}
                <div className="flex flex-wrap justify-center gap-8 mb-6 text-sm">
                    <div className="text-center">
                        <p className="font-semibold text-pink-600">Email</p>
                        <p className="text-gray-600">hola@adoptaunamascota.org</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-pink-600">Teléfono</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-pink-600">Ubicación</p>
                        <p className="text-gray-600">Ciudad Animal, CA 90210</p>
                    </div>
                </div>
                
                {/* Derechos de autor */}
                <div className="border-t border-pink-200 pt-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} {texto}. Todos los derechos reservados. 
                        Hecho con amor para las mascotas.
                    </p>
                </div>
            </div>
        </footer>
    );
}