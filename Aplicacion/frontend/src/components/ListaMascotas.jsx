import TarjetaMascota from "./TarjetaMascota";
import tomillo from "../assets/tomillo.jpg";
import erizo from "../assets/erizo.jpg";
import { Link } from "react-router-dom";

export default function ListaMascotas() {
  
  // Datos de mascotas de ejemplo
  const mascotas = [
    { 
      id: 1, 
      nombre: "Tomillo", 
      edad: "5 meses", 
      descripcion: "Es una bolilla blanca, muy tierno y amigable. Le encanta dormir.", 
      imagen: tomillo,
      genero: "macho",
      ubicacion: "Refugio Central"
    },
    { 
      id: 2, 
      nombre: "Erizo", 
      edad: "9 meses", 
      descripcion: "Cuidado porque pica, pero es solo al principio. Es tímido.", 
      imagen: erizo,
      genero: "hembra",
      ubicacion: "Casa de Cuidado (Norte)"
    },
    { 
      id: 3, 
      nombre: "Pelusa", 
      edad: "1 año", 
      descripcion: "Un conejo tranquilo que ama las zanahorias.", 
      imagen: tomillo,
      genero: "macho",
      ubicacion: "Refugio Central"
    },
  ];

  return (
    <div className="relative py-6 px-4">
        
        {/* Cuadrícula de 3 columnas para las tarjetas como en el prototipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {mascotas.map((m) => (
            <TarjetaMascota
            key={m.id}
            nombre={m.nombre}
            edad={m.edad}
            descripcion={m.descripcion}
            imagen={m.imagen}
            genero={m.genero}
            ubicacion={m.ubicacion}
            />
        ))}
        </div>

        {/* Botón "Registrar Mascota" */}
        <div className="flex justify-center md:justify-end mt-12">
             <Link 
                to="/registrar-mascota"
                className="px-6 py-3 rounded-lg bg-gray-600 text-white font-semibold text-center hover:bg-gray-700 transition duration-300 shadow-md"
            >
                Registrar Mascota
            </Link>
        </div>
    </div>
  );
}