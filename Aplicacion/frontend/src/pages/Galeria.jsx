import TarjetaMascota from "../components/TarjetaMascota";

import angel from "../assets/angel.png";
import canela from "../assets/canela.png";
import chispa from "../assets/chispa.png";
import frank from "../assets/frank.png";
import galleta from "../assets/galleta.png";
import jaime from "../assets/jaime.png";
import mimi from "../assets/mimi.png";
import oreo from "../assets/oreo.png";
import paco from "../assets/paco.png";
import peluche from "../assets/peluche.png";


import reactLogo from "../assets/react.svg";

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-[#FFE6EC]">  
      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">

        <TarjetaMascota 
          imagen={galleta} 
          nombre="Galleta" 
          tipo="Perro" 
          info="Hembra • 6 años" 
        />

        <TarjetaMascota 
          imagen={mimi} 
          nombre="Mimí" 
          tipo="Gato" 
          info="Hembra • 2 años" 
        />

        <TarjetaMascota 
          imagen={paco} 
          nombre="Paco" 
          tipo="Perro" 
          info="Macho • 10 años" 
        />

        <TarjetaMascota 
          imagen={angel} 
          nombre="Ángel" 
          tipo="Perico" 
          info="Macho • 6 años" 
        />

        <TarjetaMascota  
          imagen={chispa} 
          nombre="Chispa" 
          tipo="Hámster" 
          info="Macho • 1 año" 
        />

        <TarjetaMascota 
          imagen={oreo} 
          nombre="Oreo" 
          tipo="Perro" 
          info="Macho • 2 años" 
        />

        <TarjetaMascota 
          imagen={canela} 
          nombre="Canela" 
          tipo="Conejo" 
          info="Hembra • 3 años" 
        />

        <TarjetaMascota 
          imagen={frank} 
          nombre="Frank" 
          tipo="Tortuga" 
          info="Macho • 7 años" 
        />

        <TarjetaMascota 
          imagen={jaime} 
          nombre="Jaime" 
          tipo="Gato" 
          info="Macho • 4 años" 
        />

        <TarjetaMascota 
          imagen={peluche} 
          nombre="Peluche" 
          tipo="Perro" 
          info="Macho • 1 año" 
        />

      </div>
    </div>
  );
}
