import { FaRegCopyright, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import placeholderLogo from '../assets/image.png'; // Imagen placeholder
import facebookImg from '../assets/facebook.png'; // Imagen facebook
import instaImg from '../assets/instagram.png'; // Imagen instagram
import xImg from '../assets/x.png'; // Imagen X
import huellitasEnCasa from '../assets/huellitasEnCasa.jpg';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#127369] to-[#10403B] text-white text-center py-8 mt-0 border-t border-[#127369]">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                
                {/* Logo y título a la izquierda */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                    <img 
                        src={huellitasEnCasa} 
                        alt="Logo" 
                        className="w-12 h-12 rounded-md bg-[#FFFFFF] hover:scale-105 transition-transform duration-300 cursor-pointer" 
                    />
                    <h3 className="text-2xl font-bold text-white font-aclonica">
                        Huellitas en Casa
                    </h3>
                </div>
                
                {/* Info de contacto */}
                <div className="flex flex-col items-center gap-2 text-sm">
                    <h4 className="font-semibold text-white mb-2">Medios de Contacto</h4>
                    <span className="flex items-center gap-2"><FaEnvelope /> contacto@huellitas.org</span>
                    <span className="flex items-center gap-2"><FaPhone /> +1 (555) 134-4857</span>
                    <span className="flex items-center gap-2"><FaMapMarkerAlt /> Fraccionamiento Vida Sana, CP 57210</span>
                </div>

                {/* Redes sociales */}
                <div className="flex flex-col items-center md:items-end">
                    <h4 className="font-semibold text-white mb-2">Redes sociales</h4>
                    <div className="flex gap-4">
                        {/* Imágen de Facebook */}
                        <a href="https://www.facebook.com/p/AdoptaMx-100071067540611/" target="_blank"><img src={facebookImg} alt="Icono" className="w-8 h-8 rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer" /></a>
                        {/* Imágen de Instagram */}
                        <a href="https://www.instagram.com/adopta.mx/?hl=es" target="_blank"><img src={instaImg} alt="Icono" className="w-8 h-8 rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer" /></a>
                        {/* Imágen de twitter (o X pues) */}
                        <a href="https://x.com/mx_adopta?lang=es" target="_blank"><img src={xImg} alt="Icono" className="w-8 h-8 rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer" /></a>
                    </div>
                </div>

            </div>
            
            {/* Derechos de autor */}
            <div className="border-t border-[#C1D9C1] pt-4 mt-8">
                <p className="text-xs text-white flex items-center justify-center gap-1">
                    <FaRegCopyright /> {new Date().getFullYear()} Huellitas en Casa. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}