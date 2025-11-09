/**
 * @fileoverview Componente TarjetaMascota.
 * @version 1.0.0
 * @author Equipo Slytherin
 */

import React from 'react';
import { FaMars, FaVenus } from 'react-icons/fa';
import { MapPin, Cake } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom'; 

/**
 * Componente funcional TarjetaMascota.
 *
 * Muestra los detalles de una mascota en un formato de tarjeta.
 *
 */
export default function TarjetaMascota({ id, nombre,vacunado, especie, edad, ubicacion, imagen, genero }) {
    
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
        <div 
            className="bg-blanco rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-sm cursor-pointer"
            onClick={handleVerPerfil} 
        >
            <img 
                src={imagen} 
                alt={nombre} 
                className="w-full h-48 object-cover" 
            />
            <div className="p-5">
                
                {/* Bloque de Nombre y Especie */}
                <div className="flex justify-between items-center mb-2">
                    {/* Contenedor del nombre y la especie, alineados a la izquierda */}
                    <div className="flex items-center gap-3"> 
                        <h3 className="text-xl font-bold text-azul-fondo">{nombre}</h3>
                        
                        {/* Recuadro de la Especie*/}
                        <span className="bg-verde-menta text-azul-fondo text-xs font-semibold px-2 py-1 rounded-lg">
                            {especie}
                        </span>
                    </div>

                    {generoIcono}
                </div>
                
                {/* Bloque de Edad*/}
                <div className="flex items-center text-azul-fondo text-sm mb-1">
                    <Cake size={14} className="mr-1 text-verde-grisaseo" /> 
                    <span className="font-semibold">Edad: </span>
                    <span className="ml-1">{edad}</span>
                </div>
                
                {/* Bloque de Ubicación */}
                <div className="flex items-center text-azul-fondo text-sm mb-4">
                    <MapPin size={14} className="mr-1 text-verde-grisaseo" />
                    <span className="font-semibold">Ubicación: </span>
                    <span className="ml-1">{ubicacion}</span>
                </div>
                
                {/* Botón "Ver Más" */}
                <button 
                    onClick={(e) => {
                        e.stopPropagation(); 
                        handleVerPerfil();
                    }}
                    className="w-full bg-verde-menta text-azul-fondo py-2 rounded-lg font-semibold hover:bg-verde-grisaseo transition-colors"
                >
                    Ver Más
                </button>
            </div>
        </div>
    );
}