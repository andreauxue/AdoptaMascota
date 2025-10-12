import TarjetaMusica from "./TarjetaMusica";
import billie from "../assets/billie.jpg";
import bb from "../assets/bb.jpg";
import relsb from "../assets/relsb.jpg";

export default function ListaMusica() {
  const canciones = [
    {
      id: 1,
      nombre: "The greatest",
      artista: "Billie Eilish",
      genero: "Pop",
      imagen: billie,
    },
    {
      id: 2,
      nombre: "Super",
      artista: "BB trickz",
      genero: "Hip hop/rap",
      imagen: bb,
    },
    {
      id: 3,
      nombre: "Cuéntaselo a otro",
      artista: "Rels B",
      genero: "Hip hop",
      imagen: relsb,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center py-6 px-4">
      {canciones.map((c) => (
        <TarjetaMusica
          key={c.id}
          nombre={c.nombre}
          artista={c.artista}
          genero={c.genero}
          imagen={c.imagen}
        />
      ))}
    </div>
  );
}
