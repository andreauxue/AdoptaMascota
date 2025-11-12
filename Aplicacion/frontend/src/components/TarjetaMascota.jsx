import { FaHeart, FaPaw, FaVenusMars } from "react-icons/fa";

export default function TarjetaMascota({
  nombre,
  edad,
  descripcion,
  imagen,
  genero = "macho",
  ubicacion = "Refugio Central",
}) {
  return (
    <div className="group relative max-w-sm overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Imagen con overlay */}
      <div className="relative overflow-hidden">
        <img
          src={imagen}
          alt={nombre}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://cdn-icons-png.flaticon.com/512/616/616408.png";
          }}
        />

        {/* Badge de género */}
        <div
          className={`absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-xs font-semibold ${
            genero.toLowerCase() === "hembra" ? "bg-pink-500" : "bg-blue-500"
          }`}
        >
          <FaVenusMars className="text-xs" />
          <span className="capitalize">{genero}</span>
        </div>

        {/* Overlay hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="space-y-3 p-6">
        {/* Nombre y edad */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
            {nombre}
          </h2>
          <div className="flex items-center gap-1 text-sm font-medium text-pink-700 bg-pink-50 px-3 py-1 rounded-full">
            <FaPaw className="text-xs" />
            <span>{edad}</span>
          </div>
        </div>

        {/* Ubicación */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          <span>{ubicacion}</span>
        </div>

        {/* Descripción */}
        <p className="text-gray-700 leading-relaxed line-clamp-3">
          {descripcion}
        </p>

        {/* Botón */}
        <button
          onClick={() => alert(`Gracias por interesarte en ${nombre} `)}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 text-white font-semibold shadow-md transition-all duration-200 hover:from-pink-600 hover:to-pink-700 hover:shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2"
        >
          <FaHeart className="text-sm" />
          <span>Quiero adoptar</span>
        </button>
      </div>

      {/* Efecto de borde al hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-pink-200 transition-colors duration-300 pointer-events-none" />
    </div>
  );
}
