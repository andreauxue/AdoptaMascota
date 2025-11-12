import { useState, useEffect } from "react";
import TarjetaMascota from "./TarjetaMascota";
import { FaPaw } from "react-icons/fa";

export default function ListaMascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Llamada real al backend Django REST
    fetch("http://127.0.0.1:8000/api/mascotas/")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener mascotas");
        return res.json();
      })
      .then((data) => {
        setMascotas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar mascotas:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Estado de carga
  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20 text-pink-500">
        <FaPaw className="text-4xl animate-bounce mb-3" />
        <p className="text-lg font-medium">Cargando mascotas...</p>
      </div>
    );

  // Estado de error
  if (error)
    return (
      <div className="text-center text-red-500 py-10 font-semibold">
        {error}
      </div>
    );

  // Si no hay mascotas
  if (mascotas.length === 0)
    return (
      <div className="text-center text-gray-600 py-20">
        <p className="text-xl">No hay mascotas disponibles por ahora </p>
      </div>
    );

  // Render de las tarjetas
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
        Mascotas en Adopción
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {mascotas.map((m) => (
          <TarjetaMascota
            key={m.id}
            nombre={m.nombre}
            edad={m.edad || "Sin edad registrada"}
            descripcion={
              m.descripcion || "Esta mascota aún no tiene descripción "
            }
            imagen={
              m.imagen ||
              "https://cdn-icons-png.flaticon.com/512/616/616408.png" // imagen por defecto si no hay foto
            }
            genero={m.genero || "macho"}
            ubicacion={m.ubicacion || "Refugio Central"}
          />
        ))}
      </div>
    </div>
  );
}
