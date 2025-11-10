// xim28-25/adoptamascota/AdoptaMascota-Slytherin/Aplicacion/frontend/src/pages/DetalleMascota.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { FaPaw, FaMapMarkerAlt, FaVenusMars, FaHeart } from 'react-icons/fa';

export default function DetalleMascota() {
    // Captura el ID de la mascota de la URL
    const { id } = useParams(); 
    
    // Simulación de datos (En una aplicación real, se haría una llamada a la API usando 'id')
    const mascota = {
        nombre: "Max (Simulado)",
        edad: "2 Años",
        ubicacion: "Refugio Central",
        sexo: "Macho",
        descripcion: "Max es un labrador muy activo y cariñoso. Ideal para familias con patio y niños. Le encanta jugar a la pelota y necesita mucho ejercicio diario.",
        imagen: "URL_DE_IMAGEN_GRANDE"
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl mt-10">
            <h1 className="text-3xl font-bold text-azul-fondo mb-8 border-b pb-4">
                Todo lo que debes de saber de: <span className="text-durazno">{mascota.nombre}</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8">
                
                {/* Columna Izquierda: Imagen */}
                <div className="md:w-1/2">
                    <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center mb-4">
                        <FaPaw className="text-gray-400 text-6xl" />
                    </div>
                    
                    <div className="flex justify-center">
                        <button className="bg-verde-menta text-azul-fondo py-2 px-6 rounded-full font-semibold hover:bg-verde-menta/80 transition-colors flex items-center gap-2">
                            <FaHeart /> Quiero Adoptar
                        </button>
                    </div>
                </div>

                {/* Columna Derecha: Detalles y Descripción */}
                <div className="md:w-1/2 space-y-6">
                    {/* Fila de Datos Cortos */}
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <p className="bg-verde-grisaseo/20 p-3 rounded-lg flex items-center gap-2">
                            <span className="font-semibold">Edad:</span> {mascota.edad}
                        </p>
                        <p className="bg-verde-grisaseo/20 p-3 rounded-lg flex items-center gap-2">
                            <FaMapMarkerAlt className="text-durazno" /> <span className="font-semibold">Ubicación:</span> {mascota.ubicacion}
                        </p>
                        <p className="bg-verde-grisaseo/20 p-3 rounded-lg col-span-2 flex items-center gap-2">
                            <FaVenusMars className="text-durazno" /> <span className="font-semibold">Sexo:</span> {mascota.sexo}
                        </p>
                    </div>

                    {/* Descripción */}
                    <div>
                        <h3 className="font-bold text-azul-fondo mb-2">Descripción de la Mascota:</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {mascota.descripcion}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}