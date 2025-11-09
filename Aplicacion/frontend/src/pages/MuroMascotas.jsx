/**
 * @fileoverview Componente de Página MuroMascotas (Muro Principal) - Estética mejorada y sintaxis corregida.
 * @version 1.3.2
 * @author Equipo Slytherin
 */

import React, { useRef } from 'react'; 
import ListaMascotas from "../components/ListaMascotas"; 
import Boton from "../components/Boton";
import { useNavigate } from 'react-router-dom'; 
import imgHome from "../assets/img/imagenHome.jpg"; 

/**
 * Componente funcional MuroMascotas.
 *
 * Página principal después del login, que sirve como muro de adopción.
 * Contiene una sección de bienvenida y la galería de mascotas.
 *
 */
export default function MuroMascotas() {
    const navigate = useNavigate();
    const mascotaListRef = useRef(null); 

    /**
     * Función para realizar un scroll suave hacia la sección de la lista de mascotas.
     */
    const scrollToMascotas = () => {
        if (mascotaListRef.current) {
            mascotaListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // Fondo principal
        <div className="min-h-screen bg-blanco text-azul-fondo">
            {/* Contenedor Principal*/}
            <div className="mx-auto max-w-7xl px-4 py-12"> 
                
                {/* Sección Superior: Bienvenida  */}
                <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-verde-menta rounded-3xl shadow-2xl mb-16 
                                    border-b-4 border-azul-fondo"> 
                    
                    {/* Texto y Botón */}
                    <div className="md:w-1/2 text-center md:text-left p-4">
                        <h2 className="text-5xl font-extrabold text-azul-fondo leading-tight mb-6 font-serif">
                            ADOPTA AQUÍ A TU NUEVO 
                            <br /><span className="text-verde-grisaseo">MEJOR AMIGO</span>
                        </h2>
                        <p className="text-lg text-azul-fondo/80 mb-8 max-w-md">
                            Explora nuestra galería de compañeros que esperan un nuevo hogar lleno de amor.
                        </p>
                        <Boton 
                            texto="ADOPTA AQUÍ" 
                            color="bg-azul-fondo hover:bg-azul-fondo/80 text-verde-menta"
                            onClick={scrollToMascotas} 
                            customClasses="text-xl py-3 px-8 shadow-lg"
                        />
                    </div>
                    
                    {/* Imagen */}
                    <div className="md:w-1/2 flex justify-center p-4 mt-8 md:mt-0">
                        <div className="h-64 w-64 md:h-96 md:w-96 flex items-center justify-center 
                                        bg-verde-grisaseo/30 rounded-3xl p-4 shadow-inner">
                            <img 
                                src={imgHome} 
                                alt="Grupo de perros listos para adopción" 
                                className="object-contain w-full h-full rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-500"
                            />
                        </div>
                    </div>
                </section>

                {/* Galería de Mascotas */}
                <section 
                    ref={mascotaListRef} 
                    className="py-8 px-4"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-extrabold text-azul-fondo mb-3 font-serif">
                            ADOPTA HOY, <span className="text-verde-grisaseo">CAMBIA UNA VIDA</span>
                        </h3>
                        <p className="text-xl text-azul-fondo/80">
                            CONOCE A TUS AMIGOS EN ADOPCIÓN
                        </p>
                    </div>

                    {/* Componente que renderiza la lista de TarjetasMascotas */}
                    <ListaMascotas />

                    {/* Botón "Ver todos " */}
                    <div className="text-center mt-12">
                        <Boton 
                            texto="Ver todos" 
                            color="bg-azul-fondo hover:bg-azul-fondo/80 text-blanco"
                            onClick={scrollToMascotas} 
                            customClasses="text-xl py-3 px-8 shadow-lg"
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}