import TarjetaMascota from "./TarjetaMascota";
import { Link, useLocation} from "react-router-dom";

import { api } from "../apiService";
import {useEffect, useState} from "react";


export default function ListaMascotas() {
  const [mascotas, setMascotas]= useState([]);
  const location= useLocation();

  useEffect(() => {
        const fetchMascotas = async () => {
            try {
                const response = await api.get("/api/mascotas/");
                console.log("Respuesta API:", response);
                setMascotas(Array.isArray(response) ? response : []);
            } catch (error) {
                console.error("Error al obtener mascotas:", error);
                setMascotas([]);
            }
        };

        fetchMascotas();
    }, [location]);


  return (
      <div className="relative py-6 px-4">

        {/* Botón "Registrar Mascota" */}
        <div className="flex justify-center md:justify-end mb-10">
          <Link
              to="/registrar-mascota"
              className="px-6 py-3 rounded-lg bg-[#10403B] text-white font-semibold text-center hover:bg-[#243B55] hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md transition-all duration-300 cursor-pointer font-belleza"
          >
            Registrar Mascota
          </Link>
        </div>

        {/* Cuadrícula de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {mascotas.length > 0 ? (
  mascotas.map(m => (
    <div key={m.id} className="w-full h-full">
      <div className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#243B55]/50">
        <TarjetaMascota
          nombre={m.nombre}
          edad={m.edad}
          descripcion={m.descripcion}
          imagen={m.imagen}
          genero={m.genero}
          ubicacion={m.ubicacion}
        />
      </div>
    </div>
  ))
) : (
  <p className="text-center text-[#243B55] text-lg md:text-xl font-aclonica mt-12">
  No hay mascotas registradas. Comienza a registrar usando nuestro botón
</p>
)}
        </div>
      </div>
  );
}