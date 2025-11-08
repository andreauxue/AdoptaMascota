/**
 * @fileoverview Componente ListaMascotas.
 * @version 1.0.0
 * @author Equipo Slytherin
 */

// NOTA: Estas imágenes deben existir en tu proyecto, de lo contrario, causarán errores de importación.
import pastor from "../assets/img/Pastor.jpg";
import mestizo from "../assets/img/Mestizo.jpg";
import gato from "../assets/img/Gato.png";
import labrador from "../assets/img/Labrador.jpg";

import React from 'react';
import TarjetaMascota from "./TarjetaMascota"; // <-- IMPORTAR TarjetaMascota

/**
 * Datos de ejemplo para las mascotas. Se utilizan si la prop 'mascotas' no se proporciona.
 * Cada objeto incluye propiedades necesarias para el componente TarjetaMascota (id, nombre, imagen, etc.).
 */
const mascotasDeEjemplo = [
    { 
        id: 1, 
        nombre: "Max", 
        imagen: labrador, 
        raza: "Labrador", 
        edad: "2 años", 
        descripcion: "Un labrador muy juguetón y leal.",
        genero: "macho"
    },
    { 
        id: 2, 
        nombre: "Luna", 
        imagen: mestizo, 
        raza: "Mestizo", 
        edad: "1 año",
        descripcion: "Mestizo pequeño y tranquilo, ideal para apartamentos.",
        genero: "hembra"
    },
    { 
        id: 3, 
        nombre: "Toby", 
        imagen: pastor, 
        raza: "Pastor Alemán", 
        edad: "3 años",
        descripcion: "Pastor Alemán activo, perfecto para exteriores y guardia.",
        genero: "macho"
    },
    { 
        id: 4, 
        nombre: "Bella", 
        imagen: gato, 
        raza: "Gato", 
        edad: "6 meses",
        descripcion: "Gatita curiosa y enérgica, necesita un hogar amoroso.",
        genero: "hembra"
    },
];

/**
 * Componente funcional ListaMascotas.
 *
 * Renderiza una cuadrícula de componentes TarjetaMascota para mostrar las opciones de adopción.
 * El diseño de cuadrícula es responsivo, ajustándose desde 1 a 4 columnas.
 *
 * @param {object} props Las propiedades del componente.
 * @param {Array<object>} [props.mascotas=mascotasDeEjemplo] Array de objetos de mascotas a mostrar.
 * @returns {JSX.Element} La cuadrícula de tarjetas de mascotas.
 */
export default function ListaMascotas({ mascotas = mascotasDeEjemplo }) {
    return (
        // Contenedor principal con diseño de cuadrícula responsiva (grid-cols-1 a lg:grid-cols-4)
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mascotas.map(mascota => (
                // Se mapea el array y se renderiza una TarjetaMascota por cada elemento.
                <TarjetaMascota
                    key={mascota.id}
                    id={mascota.id} // ID crucial para generar la URL de detalle (e.g., /adopta/1)
                    nombre={mascota.nombre}
                    edad={mascota.edad}
                    // Usa la descripción, si no existe, usa la raza (como fallback)
                    descripcion={mascota.descripcion || mascota.raza} 
                    imagen={mascota.imagen}
                    genero={mascota.genero}
                />
            ))}
        </div>
    );
}