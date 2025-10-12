import React from "react";
import TarjetaCancion from "./TarjetaCancion";

export default function ListaCanciones({ canciones }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {canciones.map((cancion, index) => (
        <TarjetaCancion
          key={index}
          titulo={cancion.titulo}
          artista={cancion.artista}
          descripcion={cancion.descripcion}
          imagen={cancion.imagen}
        />
      ))}
    </section>
  );
}
