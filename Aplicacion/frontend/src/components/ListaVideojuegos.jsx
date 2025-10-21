import TarjetaVideojuegos from "./TarjetaVideojuegos";
import halo from "../assets/halo.webp";
import zelda from "../assets/zelda.jpg";
import silk from "../assets/silksong.webp";

export default function ListaVideojuegos() {
  const videojuegos = [
    {
      id: 1,
      nombre: "Halo Infinite",
      tipo: "Shooter / Ciencia Ficción",
      descripcion:
        " La historia se centra en el conflicto entre la humanidad y una alianza alienígena llamada el Covenant, y sigue las aventuras del super-soldado conocido como el Jefe Maestro.",
      imagen: halo,
      maincharacter: "Master Chief",
    },
    {
      id: 2,
      nombre: "The Legend of Zelda: Breath of the Wild",
      tipo: "Aventura / Mundo abierto",
      descripcion:
        "Es una saga de videojuegos de acción y aventura creada por Nintendo, conocida por su mezcla de exploración, resolución de puzles y combate. En la mayoría de los juegos, el jugador controla a Link, un héroe que debe rescatar a la princesa Zelda y derrotar al malvado Ganon en la tierra de Hyrule",
      imagen: zelda,
      maincharacter: "Link",
    },
    {
      id: 3,
      nombre: "Hollow Knight: Silksong",
      tipo: "Metroidvania / Acción",
      descripcion:
        "Es la secuela del aclamado videojuego Hollow Knight, en la que el jugador controla a Hornet en una nueva aventura. Ambientado en el reino de Telalejana, el juego presenta una historia épica donde Hornet debe ascender a la cima de la Ciudadela para desentrañar misterios y escapar de una prisión",
      imagen: silk,
      maincharacter: "Hornet",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center py-6 px-4">
      {videojuegos.map((v) => (
        <TarjetaVideojuegos
          key={v.id}
          nombre={v.nombre}
          tipo={v.tipo}
          descripcion={v.descripcion}
          imagen={v.imagen}
          maincharacter={v.maincharacter}
        />
      ))}
    </div>
  );
}
