// src/components/GaleriaCanciones.jsx
import React from "react";
import TarjetaCanciones from "./TarjetaCanciones";

// Imágenes locales
import theLifeOfAShowgirl from "../assets/showgirl.jpg";
import theAbyss from "../assets/hurryUp.jpg";
import taylor1989 from "../assets/1989.jpg";

function GaleriaCanciones() {
  const songs = [
    {
      title: "The Fate of Ophelia",
      artist: "Taylor Swift",
      album: "The Life of a Showgirl",
      year: 2025,
      description:
        "En esta nueva etapa, Taylor combina narrativa teatral con sonidos cinematográficos y letras introspectivas, mostrando su faceta más madura y poética.",
      cover: theLifeOfAShowgirl,
    },
    {
      title: "The Abyss",
      artist: "The Weeknd",
      album: "The Abyss (Single)",
      year: 2024,
      description:
        "Una composición oscura y emocional, con producción envolvente y tintes electrónicos, reflejando el estilo melancólico característico de The Weeknd.",
      cover: theAbyss,
    },
    {
      title: "All You Had To Do Was Stay",
      artist: "Taylor Swift",
      album: "1989 (Taylor’s Version)",
      year: 2023,
      description:
        "Una canción icónica de su era pop, ahora regrabada con una energía más pulida. Parte esencial de la reinvención sonora de Taylor Swift.",
      cover: taylor1989,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-white drop-shadow-lg text-center flex items-center gap-2">
        🎵 Galería: Taylor Swift & The Weeknd
      </h1>

      <div className="flex flex-wrap gap-10 justify-center">
        {songs.map((song, index) => (
          <TarjetaCanciones key={index} {...song} />
        ))}
      </div>
    </div>
  );
}

export default GaleriaCanciones;
