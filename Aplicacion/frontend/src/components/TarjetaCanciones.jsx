// src/components/TarjetaCanciones.jsx
import React from "react";

function TarjetaCanciones({ title, artist, album, cover, year, description }) {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-2xl shadow-2xl p-5 w-80 transform hover:scale-105 hover:shadow-blue-600/30 transition-all duration-300">
      <img
        src={cover}
        alt={title}
        className="rounded-xl w-full h-52 object-cover mb-4 shadow-md"
      />
      <h2 className="text-lg font-bold text-white mb-1">{title}</h2>
      <p className="text-sm text-blue-400 font-medium">{artist}</p>
      <p className="text-sm italic text-gray-400 mb-3">
        {album} · {year}
      </p>
      <p className="text-sm text-gray-200 leading-snug">{description}</p>
    </div>
  );
}

export default TarjetaCanciones;

