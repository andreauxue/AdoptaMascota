/**
 * @fileoverview Componente TarjetaMascota.
 * @version 1.0.0
 * @author Equipo Slytherin
 */

import React from 'react';
import { FaMars, FaVenus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // <-- Importar para navegación

/**
 * Componente funcional TarjetaMascota.
 *
 * Muestra los detalles de una mascota en un formato de tarjeta, incluyendo
 * imagen, nombre, edad, descripción y género, y permite la navegación al perfil detallado.
 *
 * @param {object} props Las propiedades del componente.
 * @param {number|string} props.id Identificador único de la mascota (crucial para la navegación).
 * @param {string} props.nombre Nombre de la mascota.
 * @param {string} props.edad Edad de la mascota.
 * @param {string} props.descripcion Breve descripción o raza de la mascota.
 * @param {string} props.imagen URL o ruta de la imagen de la mascota.
 * @param {('macho'|'hembra')} props.genero Género de la mascota para el ícono y color.
 * @returns {JSX.Element} La tarjeta de la mascota renderizada.
 */
export default function TarjetaMascota({ id, nombre, edad, descripcion, imagen, genero }) {
    
    const navigate = useNavigate(); // Inicializa el hook para manejar la navegación programática

    // Define el ícono y color basado en el género
    const generoIcono = genero === 'macho' 
        ? <FaMars className="text-blue-500" /> // Azul para macho
        : <FaVenus className="text-pink-500" />; // Rosa para hembra

    /**
     * Redirige al usuario a la página de detalle de la mascota usando su ID.
     * La ruta de destino es `/mascota/:id`.
     */
    const handleVerPerfil = () => {
        navigate(`/mascota/${id}`); 
    };

    return (
        <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-sm cursor-pointer"
            // El clic en cualquier parte de la tarjeta activa la navegación
            onClick={handleVerPerfil} 
        >
            <img 
                src={imagen} 
                alt={nombre} 
                className="w-full h-48 object-cover" 
            />
            <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-azul-fondo">{nombre}</h3>
                    {generoIcono}
                </div>
                <p className="text-gray-600 text-sm mb-1">Edad: {edad}</p>
                {/* Truncate para limitar la longitud de la descripción en la tarjeta */}
                <p className="text-gray-600 text-sm truncate mb-4">{descripcion}</p>
                
                {/* Botón "Ver Perfil" */}
                <button 
                    onClick={(e) => {
                        // Importante: Detiene la propagación para evitar doble navegación 
                        // (una por el botón y otra por el div padre)
                        e.stopPropagation(); 
                        handleVerPerfil();
                    }}
                    className="w-full bg-verde-menta text-azul-fondo py-2 rounded-lg font-semibold hover:bg-verde-menta/80 transition-colors"
                >
                    Ver Perfil
                </button>
            </div>
        </div>
    );
}