// src/components/TarjetaMascota.jsx
import { FaPaw, FaTrash, FaHeart } from "react-icons/fa";

export default function TarjetaMascota({ mascota, rol, onEliminar, onAdoptar }) {
  const userId = Number(localStorage.getItem("user_id"));

  const puedeEliminar =
    rol === "admin" ||
    (rol === "publicador" && mascota.publicador?.id === userId);

  const puedeAdoptar = rol === "adoptante" && !mascota.adoptada;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all max-w-xs overflow-hidden border border-pink-100">
      
      {/* IMAGEN */}
      <div className="relative">
        <img
          src={mascota.imagen}
          alt={mascota.nombre}
          className="w-full h-52 object-cover"
        />

        {/* Badge si ya está adoptada */}
        {mascota.adoptada && (
          <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Adoptada
          </span>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-pink-600 flex items-center gap-2">
          <FaPaw className="text-pink-400" />
          {mascota.nombre}
        </h2>

        <p className="text-sm text-gray-700 mt-1">
          <span className="font-semibold">Edad:</span> {mascota.edad}
        </p>

        <p className="text-gray-600 text-sm mt-2 leading-snug">
          {mascota.descripcion || "Sin descripción disponible"}
        </p>

        {/* BOTONES */}
        <div className="mt-4 flex flex-col gap-3">
          
          {/* Adoptar */}
          {puedeAdoptar && (
            <button
              onClick={onAdoptar}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium shadow-sm transition"
            >
              <FaHeart className="text-white" />
              Adoptar
            </button>
          )}

          {/* Mensaje de adoptada */}
          {mascota.adoptada && (
            <div className="text-center text-green-700 font-semibold text-sm">
              Ya está con una familia
            </div>
          )}

          {/* Eliminar */}
          {puedeEliminar && (
            <button
              onClick={onEliminar}
              className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium shadow-sm transition"
            >
              <FaTrash className="text-white" />
              Eliminar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
