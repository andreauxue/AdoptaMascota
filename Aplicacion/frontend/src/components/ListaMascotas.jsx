// src/components/ListaMascotas.jsx
import { useState, useEffect } from "react";
import TarjetaMascota from "./TarjetaMascota";
import { FaPaw } from "react-icons/fa";

// función auxiliar para obtener csrftoken
function getCSRFCookie() {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; csrftoken=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default function ListaMascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const rol = localStorage.getItem("rol");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/mascotas/", {
      credentials: "include", // necesario cuando usas sesión
    })
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

  // ---- ELIMINAR ----
  const eliminarMascota = async (id) => {
    const csrfToken = getCSRFCookie();

    const res = await fetch(`http://127.0.0.1:8000/api/mascotas/${id}/`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "X-CSRFToken": csrfToken,
      },
    });

    if (res.ok) {
      setMascotas(mascotas.filter((m) => m.id !== id));
      alert("Mascota eliminada correctamente");
    } else {
      alert("No tienes permiso o no se pudo eliminar.");
    }
  };

  // ---- ADOPTAR ----
  const adoptarMascota = async (id) => {
    const csrfToken = getCSRFCookie();

    const res = await fetch(
      `http://127.0.0.1:8000/api/mascotas/${id}/adoptar/`,
      {
        method: "POST",
        credentials: "include",
        headers: { "X-CSRFToken": csrfToken },
      }
    );

    const data = await res.json();

    if (res.ok) {
      alert("Mascota adoptada con éxito");
      setMascotas(
        mascotas.map((m) =>
          m.id === id ? { ...m, adoptada: true } : m
        )
      );
    } else {
      alert(data.error || "No se pudo adoptar.");
    }
  };

  // ---- LOADING ----
  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20 text-pink-500">
        <FaPaw className="text-4xl animate-bounce mb-3" />
        <p className="text-lg font-medium">Cargando mascotas...</p>
      </div>
    );

  // ---- ERROR ----
  if (error)
    return (
      <div className="text-center text-red-500 py-10 font-semibold">
        {error}
      </div>
    );

  // ---- SIN MASCOTAS ----
  if (mascotas.length === 0)
    return (
      <div className="text-center text-gray-600 py-20">
        <p className="text-xl">No hay mascotas disponibles por ahora</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
        Mascotas en Adopción
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {mascotas.map((m) => (
          <TarjetaMascota
            key={m.id}
            mascota={m}
            rol={rol}
            onEliminar={() => eliminarMascota(m.id)}
            onAdoptar={() => adoptarMascota(m.id)}
          />
        ))}
      </div>
    </div>
  );
}
