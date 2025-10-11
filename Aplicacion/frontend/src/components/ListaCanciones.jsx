import TarjetaCancion from "./TarjetaCancion";
import nhmqd from "../assets/nhmqd.jpg";
import vicio from "../assets/vicio.jpg";
import xolo from "../assets/xolo.jpg"
import sci_fi from "../assets/sci_fi.jpg";

export default function ListaCanciones() {
  const canciones = [
    { id: 1, nombre: "No Hay Mal Que Dure", artista: "Zoé", album: "Aztlán", descripcion: "Mi canción favorita de todos los tiempos. Siempre la canto.", imagen: nhmqd, link: "https://www.youtube.com/watch?v=SaZGEIeNddc"},
    { id: 2, nombre: "Miénteme", album: "Óleos", artista:"Camilo Séptimo", descripcion: "Tiene bonita letra. Para cuando uno está triste con su amor.", imagen: vicio, link: "https://www.youtube.com/watch?v=JdqkdV8ab1w" },
    { id: 3, nombre: "Xoloitzcuintle Chicloso", artista: "Porter", album: "Atemahawke", descripcion: "Te vas a arrepentir de perder algo tan chicloso tan jocoso, tan chisposo, tan sabroso, tan chistoso como yo.", imagen: xolo, link: "https://www.youtube.com/watch?v=N6ns-_Eo-ns" },
    { id: 4, nombre: "Sci-Fi", artista: "Tainy, Raw Alejandro", album: "Data", descripcion: "Lo que más me gusta de Data es su portada y lo que trata de transmitir, así como esta canción.", imagen: sci_fi, link: "https://www.youtube.com/watch?v=_dFjJmJdJjY" }
  ];

  return (
    <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 place-items-stretch py-6 px-4">
      {canciones.map((m) => (
        <TarjetaCancion
          key={m.id}
          nombre={m.nombre}
          descripcion={m.descripcion}
          imagen={m.imagen}
          artista={m.artista}
          album={m.album}
          link={m.link}
        />
      ))}
    </div>
  );
}
