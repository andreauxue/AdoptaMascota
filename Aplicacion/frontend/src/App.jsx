// Importamos React y el hook useRef
import React, { useRef } from "react";
// Importamos el componente Lista, que contiene las tarjetas de libros
import Lista from "./components/Lista";

// Definimos el componente principal de la aplicación
export default function App() {
  // Creamos una referencia (ref) para la sección de galería
  // Esto permitirá desplazarnos hacia esa parte de la página al hacer clic en un botón
  const galeriaRef = useRef(null);

  // Función que realiza un desplazamiento suave hasta la sección de galería
  const scrollToGaleria = () => {
    galeriaRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Retornamos el JSX principal de la aplicación
  return (
    <div className="bg-[#f5e6dc] min-h-screen font-serif">
      {/* =================== PORTADA =================== */}
      <section
        // Sección que ocupa toda la altura de la pantalla
        // Centra su contenido tanto vertical como horizontalmente
        // Usa un fondo con imagen (portada)
        className="h-screen flex flex-col justify-center items-center text-[#6b0f1a] bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/img/portada.jpg')" }}
      >
        {/* Título principal de la portada */}
        <h1
          className="text-6xl font-extrabold drop-shadow-lg mb-4 animate-pulse"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          EL REFUGIO DE LAS LETRAS
        </h1>

        {/* Subtítulo */}
        <p
          className="text-2xl drop-shadow-md mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Descubre la magia que se esconde entre las páginas...
        </p>

        {/* Botón para hacer scroll hacia la galería */}
        <button
          onClick={scrollToGaleria}
          className="bg-[#6b0f1a] text-[#f5e6dc] px-6 py-3 rounded-full hover:bg-[#8b1f2a] transition-colors duration-300 text-xl font-semibold"
        >
          Explorar
        </button>
      </section>

      {/* =================== GALERÍA =================== */}
      <section
        // Asociamos la referencia a esta sección
        ref={galeriaRef}
        className="container mx-auto p-6"
      >
        {/* Título de la galería */}
        <h2
          className="text-4xl font-bold text-center mb-6 text-[#6b0f1a]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Galería de Libros
        </h2>

        {/* Componente Lista: muestra las tarjetas con libros */}
        <Lista />
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="bg-[#f5e6dc] py-4 mt-6 shadow-inner hover:bg-[#e8d8c4] transition-colors duration-300">
        <p className="text-center text-[#6b0f1a] font-semibold">
          © 2025 Leslie Gerónimo Soto
        </p>
      </footer>
    </div>
  );
}
