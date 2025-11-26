import { Heart, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function TarjetaMascota({ id, nombre, tipo, info, imagen }) {
  const [sexoTexto, edad] = info.split("•").map(t => t.trim());
  const sexoIcono = sexoTexto.includes("Hembra") ? "♀️" : "♂️";

  return (
    <div
      className="
      group relative max-w-xs overflow-hidden rounded-2xl 
      bg-white shadow-md border border-black 
      transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
      m-2
    "
    >
      {/* Etiqueta tipo */}
      <div className="absolute top-3 left-3 z-10 bg-amber-300 px-3 py-1 rounded-full text-black text-xs font-bold shadow">
        {tipo}
      </div>

      {/* Corazón */}
      <button className="absolute top-3 right-3 z-10 rounded-full bg-white p-2 shadow-md hover:bg-pink-100 transition">
        <Heart className="w-5 h-5 text-pink-500" />
      </button>

      {/* Imagen */}
      <div className="relative">
        <img
          src={imagen}
          alt={nombre}
          className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-2">
        {/* Nombre */}
        <h2 className="text-xl font-semibold text-[#8A5A44] tracking-tight">
          {nombre}
        </h2>

        <div className="flex flex-wrap gap-2">
          {/* Edad */}
          <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            🎂 {edad}
          </span>

          {/* Género */}
          <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            {sexoIcono} {sexoTexto}
          </span>
        </div>

        {/* Botón detalles */}
        <div className="flex justify-center pt-2">
          <Link
            to={`/mascota/${id}`}
            state={{ mascota: { nombre, tipo, info, imagen } }}
            className="
              inline-flex items-center gap-2 rounded-full 
              px-4 py-2 text-sm font-semibold 
              text-white transition-all duration-300
              bg-[#ff85a2] hover:bg-[#ff6c8f]
              shadow-md active:scale-95
            "
          >
            <Info className="w-4 h-4" />
            Más Detalles
          </Link>

        </div>
      </div>
    </div>
  );
}
