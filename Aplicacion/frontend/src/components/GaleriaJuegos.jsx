import TarjetaJuego from "./TarjetaJuego";

const zeldaImg = "https://upload.wikimedia.org/wikipedia/en/4/41/Ocarina_of_Time_box_art.png";
const marioImg = "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_64_box_cover.jpg";
const chronoImg = "https://upload.wikimedia.org/wikipedia/en/a/a7/Chrono_Trigger_Box_Art.jpg";

export default function GaleriaJuegos() {
  const juegos = [
    { id: 1, titulo: "The Legend of Zelda: Ocarina of Time", consola: "Nintendo 64", descripcion: "Una épica aventura a través del tiempo para salvar Hyrule.", imagen: zeldaImg },
    { id: 2, titulo: "Super Mario 64", consola: "Nintendo 64", descripcion: "Revolucionó los juegos de plataformas en 3D.", imagen: marioImg },
    { id: 3, titulo: "Chrono Trigger", consola: "SNES", descripcion: "Un viaje en el tiempo para prevenir un futuro apocalíptico.", imagen: chronoImg },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 place-items-center py-6 px-4">
      {juegos.map((juego) => (
        <TarjetaJuego
          key={juego.id}
          titulo={juego.titulo}
          consola={juego.consola}
          descripcion={juego.descripcion}
          imagen={juego.imagen}
        />
      ))}
    </div>
  );
}