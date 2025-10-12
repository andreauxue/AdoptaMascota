import TarjetaJuego from "./TarjetaJuego";

import Tonic_Trouble from "../assets/Tonic_Trouble.jpg";
import zelda from "../assets/zelda.webp";
import supermario from "../assets/supermario.jpg";
import RainbowSixSiege from "../assets/RainbowSixSiegeStarterEdition.jpg"

export default function GaleriaJuegos() {
  const juegos = [
    { 
      id: 1, 
      titulo: "The Legend of Zelda: Ocarina of Time", 
      plataforma: "Nintendo 64", 
      lanzamiento: 1998, 
      descripcion: "Una épica aventura a través del tiempo para salvar Hyrule.", 
      imagen: zelda 
    },
    { 
      id: 2, 
      titulo: "Super Mario 64", 
      plataforma: "Nintendo 64", 
      lanzamiento: 1996, 
      descripcion: "Revolucionó los juegos de plataformas en 3D.", 
      imagen: supermario 
    },
    { 
      id: 3, 
      titulo: "Tonic Trouble", 
      plataforma: "Nintendo 64",
      lanzamiento: 1999,
      descripcion: "Un viaje en el tiempo para prevenir un futuro apocalíptico.", 
      imagen: Tonic_Trouble 
    },
    { 
      id: 4, 
      titulo: "Rainbow Six Siege", 
      plataforma: "PC, PlayStation 4/5, Xbox", 
      lanzamiento: 2015,
      descripcion: "FPS 5 vs 5 táctico, Inmersivo y realista.", 
      imagen: RainbowSixSiege 
    },
  ];
  
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 place-items-center py-6 px-4">
      {juegos.map((juego) => (
        <TarjetaJuego
          key={juego.id}
          titulo={juego.titulo}
          plataforma={juego.plataforma}
          lanzamiento={juego.lanzamiento}
          descripcion={juego.descripcion}
          imagen={juego.imagen}
        />
      ))}
    </div>
  );

}

