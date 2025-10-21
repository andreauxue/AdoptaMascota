// Importamos React y el hook useState desde la librería de React
import React, { useState } from "react";

// Definimos un componente funcional llamado "Tarjeta"
// Recibe props: titulo, autor, descripcion, imagen e infoExtra
const Tarjeta = ({ titulo, autor, descripcion, imagen, infoExtra }) => {
  // Definimos un estado local "verMas" para controlar si se muestra o no la información adicional
  // Por defecto está en "false" (oculto)
  const [verMas, setVerMas] = useState(false);

  // Retornamos la estructura JSX de la tarjeta
  return (
    <div
      // Contenedor principal de la tarjeta
      // Tailwind CSS: ancho máximo, bordes redondeados, sombra, fondo blanco
      // Efectos al pasar el mouse: se agranda un poco (scale-105) y aumenta la sombra
      className="max-w-xs rounded-2xl overflow-hidden shadow-2xl bg-white transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl"
    >
      {/* Imagen de la tarjeta */}
      {/* w-full ocupa todo el ancho, h-64 fija la altura, object-cover mantiene proporciones */}
      <img className="w-full h-64 object-cover" src={imagen} alt={titulo} />

      {/* Contenido de la tarjeta */}
      <div className="px-6 py-4">
        {/* Título del libro */}
        {/* Texto grande, negrita, color vino (#6b0f1a), margen inferior */}
        <div className="font-bold text-xl text-[#6b0f1a] mb-2">{titulo}</div>

        {/* Autor del libro */}
        <p className="text-gray-700 mb-2">Autor: {autor}</p>

        {/* Descripción corta del libro */}
        <p className="text-gray-600 text-sm">{descripcion}</p>

        {/* Si verMas es true, se muestra el bloque de información adicional */}
        {verMas && (
          <div className="mt-2 text-gray-800 text-sm">
            {infoExtra}
          </div>
        )}

        {/* Botón para alternar entre "Ver más" y "Ver menos" */}
        <button
          // Estilos del botón con Tailwind: color de fondo vino, texto claro, bordes redondeados
          // Efecto hover cambia el color del fondo
          className="mt-4 bg-[#6b0f1a] text-[#f5e6dc] px-4 py-2 rounded hover:bg-[#8b1f2a] transition-colors duration-300 font-semibold"
          // onClick cambia el valor de verMas (true/false)
          onClick={() => setVerMas(!verMas)}
        >
          {/* El texto del botón cambia dinámicamente */}
          {verMas ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </div>
  );
};

// Exportamos el componente para poder usarlo en otros archivos
export default Tarjeta;
