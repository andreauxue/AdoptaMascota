import React from "react";
import ListaCanciones from "../components/ListaCanciones";

export default function GaleriaCanciones() {
  const canciones = [
    {
      titulo: "Rain On Me",
      artista: "Lady Gaga & Ariana Grande",
      descripcion:
        "Un himno pop lleno de energía y esperanza, combinando las potentes voces de Gaga y Ariana.",
      imagen: "/images/rainonme.jpeg",
    },
    {
      titulo: "Dance The Night",
      artista: "Dua Lipa",
      descripcion:
        "Parte del soundtrack de Barbie, esta canción celebra la diversión, la moda y la libertad.",
      imagen: "/images/dancethenight.jpeg",
    },
    {
      titulo: "Motomami",
      artista: "Rosalía",
      descripcion:
        "Una fusión innovadora de géneros que refleja la dualidad entre fuerza y vulnerabilidad.",
      imagen: "/images/motomami.jpg",
    },
  ];

  return (
    <main className="p-6">
      <header className="max-w-4xl mx-auto mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">🎶 Galería de canciones</h1>
        <p className="text-gray-600 mt-2">
          Una colección musical creada con React y Tailwind CSS.
        </p>
      </header>

      <div className="max-w-6xl mx-auto">
        <ListaCanciones canciones={canciones} />
      </div>
    </main>
  );
}
