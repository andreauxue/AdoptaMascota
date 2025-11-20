/**
 * @fileoverview Componente TarjetaMascota.
 * @version 1.0.0
 * @author Equipo Slytherin
 */

import React from 'react';
import { FaMars, FaVenus } from 'react-icons/fa';
import { MapPin, Cake } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom'; 
import Boton from "../components/Boton";

/**
 * Componente funcional TarjetaMascota.
 *
 * Muestra los detalles de una mascota en un formato de tarjeta.
 *
 */
export default function TarjetaMascota({ id, nombre, vacunado, especie, edad, ubicacion, imagen, genero }) {
    
    const navigate = useNavigate();

    // Define el ícono y color basado en el género
    const generoIcono = genero === 'macho' 
        ? <FaMars className="text-blue-500"  size={24}/>
        : <FaVenus className="text-pink-500" size={24} />;

    /**
     * Redirige al usuario a la página de detalle de la mascota usando su ID.
     */
    const handleVerPerfil = () => {
        navigate(`/mascota/${id}`); 
    };

    return (
        <div>
            {/* Imagen de la mascota */}
            <figure className="w-72 rounded-lg overflow-hidden shadow-md h-120">
                <img 
                    src={imagen} 
                    alt="Imagen"
                    className="w-full h-80 object-cover"
                />
                
            </figure>
            {/* Informacion de la mascota */}
            <section className="flex flex-col">
                <div className="flex flex-row items-center justify-between">
                    {/* Nombre e icono */}
                    <div className="flex flex-row items-center gap-2">
                        <h1 className="text-azul-fondo text-2xl font-bold m-0 p-0">{nombre}</h1>
                        {generoIcono}
                    </div>
                    <Boton 
                        texto="Ver detalles"
                        onClick={(e) => {
                                e.stopPropagation();
                                handleVerPerfil();
                            }}
                        customClasses="text-sm mt-1 px-4 shadow-lg"
                    />
                </div>
                <div className="text-azul-fondo text-sm font-normal flex flex-row mt-2 text-center justify-between">
                    <h2>{especie}</h2>
                    <h2>{ubicacion}</h2>
                    <h2>{edad}</h2>
                </div>
            </section>
        </div>
    );
}