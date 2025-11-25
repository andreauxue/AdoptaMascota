import { useEffect, useState } from "react";
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

export default function Home() {

  const [mascotasApi, setMascotasApi] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarMascotas() {
      try {
        const res = await fetch("/api/mascotas/");
        if (!res.ok) throw new Error("No se pudieron cargar las mascotas.");
        const data = await res.json();
        setMascotasApi(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setCargando(false);
      }
    }
    cargarMascotas();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-[#FFE6EC]">

      {/* Título */}
      <h1 className="text-3xl font-bold text-center text-black mt-8 mb-10">
        Galería de Mascotas en Adopción
      </h1>

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

        {cargando && <p>Cargando mascotas desde la API...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {mascotasApi.length > 0 && (
          <div className="mt-6 bg-white rounded-2xl p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">
              Mascotas cargadas desde la base de datos
            </h2>
            <ul className="list-disc list-inside">
              {mascotasApi.map((m) => (
                <li key={m.id}>
                  {m.nombre} — {m.edad} años
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}
