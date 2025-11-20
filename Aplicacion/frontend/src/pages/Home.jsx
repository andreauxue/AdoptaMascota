import { PawPrint, HeartHandshake, Search } from "lucide-react";
import logo from "../assets/logoRosa.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFE6EC] p-8 flex flex-col items-center font-poppins">

      {/* Logo y título */}
      <div className="flex flex-col items-center mb-12 text-center">
        <img
          src={logo}
          alt="MatchPaw Logo"
          className="w-44 h-auto drop-shadow-md mb-4"
        />

        <h1 className="text-4xl font-bold text-[#000000] text-center">
          ¡Bienvenido a <span className="text-[#38657E]">MatchPaw</span>!
        </h1>

        <p className="mt-4 max-w-2xl text-black text-lg">
          La plataforma para conectar hogares amorosos con refugios y 
          particulares que dan en adopción animales que buscan una familia. 
        </p>
      </div>

      {/* Objetivo */}
      <div className="max-w-4xl text-gray-800 mb-14 bg-white rounded-2xl p-8 shadow-lg border border-pink-200">
        <p className="leading-relaxed text-center text-md">
          Nuestro objetivo principal es facilitar y humanizar el proceso de adopción, 
          asegurando la colocación responsable de animales mediante perfiles detallados y 
          formularios de solicitud. 
        </p>
        <p className="leading-relaxed text-center text-md">  
          Buscamos ser una solución digital en la promoción 
          de la adopción responsable.
        </p>
      </div>

      {/* Lo que ofrece MatchPaw */}
      <h2 className="text-3xl font-bold text-[#CA2B5A] mb-6 text-center drop-shadow-sm">
        ¿Qué ofrece MatchPaw?
      </h2>

      <div className="max-w-5xl grid md:grid-cols-3 gap-8 mb-16">

        {/* Tarjeta 1 */}
        <div className="group bg-white rounded-2xl border border-pink-300 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <PawPrint className="w-12 h-12 text-pink-600 mx-auto mb-3 group-hover:scale-110 transition" />
          <h3 className="font-bold text-xl text-pink-800 mb-2">
            Facilidad de Adopción
          </h3>
          <p className="text-gray-700 text-sm">
            Simplificar el proceso de búsqueda, solicitud y aprobación de adopciones.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="group bg-white rounded-2xl border border-pink-300 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <HeartHandshake className="w-12 h-12 text-pink-600 mx-auto mb-3 group-hover:scale-110 transition" />
          <h3 className="font-bold text-xl text-pink-800 mb-2">
            Visibilidad de Mascotas
          </h3>
          <p className="text-gray-700 text-sm">
            Proporcionar perfiles de calidad para aumentar significativamente la exposición de la mascota para que no pase desapercibida.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className="group bg-white rounded-2xl border border-pink-300 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <Search className="w-12 h-12 text-pink-600 mx-auto mb-3 group-hover:scale-110 transition" />
          <h3 className="font-bold text-xl text-pink-800 mb-2">
            Búsqueda Compatible
          </h3>
          <p className="text-gray-700 text-sm">
            Sistema de búsqueda filtrada que ayuda a encontrar mascotas compatibles con tu estilo de vida.
          </p>
        </div>

      </div>

      {/* Botón para ver galería de mascotas */}
      <a
        href="/galeria"
        className="
          bg-[#ff85a2] hover:bg-[#ff6c8f] 
          text-white px-8 py-3 rounded-full
          text-lg font-semibold shadow-lg
          transition-all duration-300 active:scale-95
        "
      >
        Ver Galería de Mascotas 🐶🐱
      </a>

    </div>
  );
}
