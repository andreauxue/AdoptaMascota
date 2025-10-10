// Importamos React para poder usar JSX
import React from 'react';
// Importamos el componente "Lista", que contiene todas las tarjetas de libros
import Lista from '../components/Lista';

// Definimos el componente funcional "Galeria"
const Galeria = () => {
  // El componente retorna la estructura de la galería
  return (
    <div
      // Contenedor principal
      // "container" centra el contenido y limita el ancho máximo
      // "mx-auto" centra horizontalmente
      // "p-4" añade padding (espaciado interno)
      className="container mx-auto p-4"
    >
      {/* Título principal de la página */}
      {/* Texto grande (3xl), en negrita, centrado y con margen inferior */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Mi Galería de Libros
      </h1>

      {/* Aquí se renderiza el componente Lista, que contiene todas las tarjetas */}
      <Lista />
    </div>
  );
};

// Exportamos el componente para poder usarlo en otras partes del proyecto (por ejemplo, en App.js)
export default Galeria;
