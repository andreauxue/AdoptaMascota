/**
 * @fileoverview Componente de Página DetalleMascota.
 * Muestra el perfil completo de una mascota específica.
 * @version 1.0.0
 * @author Equipo Slytherin
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import { FaPaw, FaMapMarkerAlt, FaVenusMars, FaHeart, FaSyringe, FaInfoCircle } from 'react-icons/fa';
import { Cake } from 'lucide-react';
import luna from "../assets/img/gato1.jpg";

export default function DetalleMascota() {
    // Captura el ID de la mascota de la URL
    const { id } = useParams(); 
    
    // Simulación de datos (Solo para ver como seria ver los detalles de la mascota)
    const mascota = {
        nombre: "Luna",
        especie: "Gato",
        genero: "hembra", 
        edad: "2 Años",
        ubicacion: "Guadalajara, Jal.",
        vacunado: true, 
        descripcion: "Luna es una gata tranquila y muy independiente. Ideal para personas que trabajan desde casa o que necesitan un compañero silencioso. Le encantan las siestas al sol y las caricias suaves.",
        imagen: luna
    };

    const vacunadoStatus = mascota.vacunado 
        ? { text: "Sí", color: "text-azul-fondo" } 
        : { text: "Pendiente", color: "text-durazno" };

    // Estilo para el género
    const generoInfo = mascota.genero === 'macho' 
        ? { text: "Macho", icon: <FaVenusMars className="text-azul-fondo" /> } 
        : { text: "Hembra", icon: <FaVenusMars className="text-azul-fondo" /> };

    return (
        <div className="max-w-4xl mx-auto bg-blanco p-8 rounded-xl shadow-2xl mt-10">
            <h1 className="text-3xl font-bold text-azul-fondo mb-8 border-b pb-4">
                Conoce más a: <span className="text-durazno">{mascota.nombre}</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8">
                
                {/* Columna Izquierda: Imagen */}
                <div className="md:w-1/2">
                    <img
                        src={mascota.imagen} 
                        alt={`Imagen de ${mascota.nombre}`}
                        className="w-full h-80 object-cover rounded-xl shadow-lg mb-6"
                    />
                    
                    <div className="flex justify-center">
                        <button className="bg-durazno text-azul-fondo py-3 px-8 rounded-full font-semibold hover:bg-durazno/80 transition-colors flex items-center gap-2 shadow-md">
                            <FaHeart className="text-azul-fondo" /> ¡Quiero Adoptar!
                        </button>
                    </div>
                </div>

                {/* Columna Derecha: Detalles y Descripción */}
                <div className="md:w-1/2 space-y-6">
                    
                    {/* Fila de Datos Cortos */}
                    <div className="grid grid-cols-2 gap-4 text-azul-fondo text-lg">
                        
                        {/* 1. Especie */}
                        <p className="bg-verde-grisaseo/30 p-3 rounded-lg flex items-center gap-2">
                            <FaPaw className="text-azul-fondo" /> <span className="font-bold">Especie:</span> {mascota.especie}
                        </p>
                        
                        {/* 2. Edad */}
                        <p className="bg-verde-grisaseo/30 p-3 rounded-lg flex items-center gap-2">
                            <Cake size={18} className="text-azul-fondo" /> <span className="font-bold">Edad:</span> {mascota.edad}
                        </p>
                        
                        {/* 3. Género */}
                        <p className="bg-verde-grisaseo/30 p-3 rounded-lg flex items-center gap-2">
                            {generoInfo.icon} <span className="font-bold">Género:</span> {generoInfo.text}
                        </p>

                        {/* 4. Vacunado */}
                        <p className="bg-verde-grisaseo/30 p-3 rounded-lg flex items-center gap-2">
                            <FaSyringe className={vacunadoStatus.color} /> <span className="font-bold">Vacunado:</span> {vacunadoStatus.text}
                        </p>

                        {/* 5. Ubicación */}
                        <p className="bg-verde-grisaseo/30 p-3 rounded-lg col-span-2 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-azul-fondo" /> <span className="font-bold">Ubicación:</span> {mascota.ubicacion}
                        </p>
                    </div>

                    {/* Descripción */}
                    <div>
                        <h3 className="font-bold text-azul-fondo mb-2 flex items-center gap-2">
                             <FaInfoCircle className="text-azul-fondo" /> Detalles de Personalidad:
                        </h3>
                        <p className="text-azul-fondo/80 leading-relaxed text-lg">
                            {mascota.descripcion}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}