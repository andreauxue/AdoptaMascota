/**
 * @fileoverview Componente de Página Home (Página de Inicio para usuarios no logueados).
 * @version 1.0.0
 * @author Equipo Slytherin
 */

import Boton from "../components/Boton";
import { useNavigate } from "react-router-dom";
import imgHome from "../assets/img/img1.png"; // Imagen principal de la cabecera
import logo from "../assets/img/LOGO.png"; 
// NOTA: Las importaciones de Navbar y Footer se manejan en App.jsx.

/**
 * Componente funcional Home.
 *
 * Página de aterrizaje que saluda al usuario, destaca la misión de la aplicación
 * y proporciona botones para iniciar el proceso de autenticación.
 *
 * @returns {JSX.Element} La página de inicio renderizada.
 */
export default function Home() {
    const navigate = useNavigate();

    return (
        // Fondo de la página: verde grisáceo
        <div className="min-h-screen bg-verde-grisaseo w-full h-full ">
            <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between">
                
                {/* Columna Izquierda: Texto y CTA (Llamado a la Acción) */}
                <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                    
                    {/* Título Principal */}
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                        <h1 className="text-5xl lg:text-6xl font-bold text-black font-serif ">
                            Un nuevo 
                            <br />comienzo
                            <br />lleno de amor
                        </h1>
                    </div>
                    
                    {/* Subtítulo Descriptivo */}
                    <h2 className="text-lg lg:text-3xl font-serif leading-relaxed text-white mb-6 mt-15">
                        Cientos de animales esperan una segunda oportunidad, y a quí puedes encontrar al que cambiara tu vida
                    </h2>
                

                    {/* Botones de Autenticación */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-serif mt-20 px-20">
                        <Boton 
                            texto="Iniciar Sesión" 
                            onClick={() => navigate("/register")} // Redirige al FormularioAuth
                            color="bg-azul-fondo hover:bg-azul-fondo/80 text-white"
                        />
                        <Boton 
                            texto="Registrate" 
                            onClick={() => navigate("/register")} // Redirige al FormularioAuth
                            color="bg-durazno hover:bg-durazno/80 text-black"
                        />
                    </div>
                    
                    {/* Enlace de Navegación Rápida al Muro */}
                    <div 
                        className=" flex flex-col mt-15 cursor-pointer translate-x-[130px] mt-5 font-medium font-serif text-sm underline hover:text-black/60"
                        onClick={() => navigate("/adopta")} // Redirige al Muro/Lista de Mascotas
                    >
                       <p>Muro de las mascotas</p>
                    </div>
                    
                </div>

                {/* Columna Derecha: Imagen Destacada */}
                <div className="lg:w-1/2 relative">
                    <div className="relative z-10">
                        <img 
                            src={imgHome}
                            alt="Perros"
                            className=" w-full  max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300 bg-transparent"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}