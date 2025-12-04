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

        {cargando && <p>Cargando mascotas desde la API...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {mascotasApi.map((m) => (
          <TarjetaMascota
            key={m.id}
            id={m.id}
            imagen={m.imagen}
            nombre={m.nombre}
            tipo={m.especie_nombre}
            info={`${m.genero_nombre || "Desconocido"} • ${m.edad} años`}
          />
        ))}

      </div>
    </div>
  );
}
