import React from "react";

export default function TarjetaCancion({ titulo, artista, descripcion, imagen }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden max-w-xs">
      <img
        src={imagen}
        alt={`Portada de ${titulo}`}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{titulo}</h3>
        <p className="text-sm text-gray-500 mb-2">Artista: {artista}</p>
        <p className="text-sm text-gray-700 line-clamp-3">{descripcion}</p>
      </div>
      <div className="p-4 pt-0">
        <button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-medium transition"
          type="button"
        >
          Escuchar
        </button>
      </div>
    </article>
  );
}
