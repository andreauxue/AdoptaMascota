import TarjetaMascota from "./TarjetaMascota";
import tomillo from "../assets/tomillo.jpg";
import erizo from "../assets/erizo.jpg";
import pelusa from "../assets/pelusa.jpg";
import vikingo from "../assets/vikingo.jpg";
import stella from "../assets/stella.jpg";
import cheddar from "../assets/cheddar.jpg";
import yoshi from "../assets/yoshi.jpg";
import garfield from "../assets/garfield.jpg";
import srgato from "../assets/srgato.jpg";
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
      ubicacion: "Refugio Norte"
    },
    { 
      id: 3, 
      nombre: "Pelusa", 
      edad: "1 año", 
      descripcion: "Un conejo tranquilo que ama las zanahorias.", 
      imagen: pelusa,
      genero: "macho",
      ubicacion: "Refugio Central"
    },
    { 
      id: 4, 
      nombre: "Vikingo", 
      edad: "2 años", 
      descripcion: "Un perro pitbull leal, protector y siempre alerta. Le encanta jugar al aire libre.", 
      imagen: vikingo,
      genero: "macho",
      ubicacion: "Refugio Norte"
    },
    { 
      id: 5, 
      nombre: "Stella", 
      edad: "3 años", 
      descripcion: "Buldog francesa muy cariñosa. Le gusta estar cerca de las personas.", 
      imagen: stella,
      genero: "hembra",
      ubicacion: "Refugio Sur"
    },
    { 
      id: 6, 
      nombre: "Cheddar", 
      edad: "4 años", 
      descripcion: "Corgi macho energético y juguetón. Le gusta correr y saltar.", 
      imagen: cheddar,
      genero: "macho",
      ubicacion: "Refugio Sur"
    },
    { 
      id: 7, 
      nombre: "Yoshi", 
      edad: "3 años", 
      descripcion: "Oso polar de gran tamaño, tranquilo y cariñoso.", 
      imagen: yoshi,
      genero: "macho",
      ubicacion: "Refugio Norte"
    },
    { 
      id: 8, 
      nombre: "Garfield", 
      edad: "5 años", 
      descripcion: "Gato perezoso que adora dormir y comer lasaña. Es muy independiente.", 
      imagen: garfield,
      genero: "macho",
      ubicacion: "Refugio Central"
    },
    { 
      id: 9, 
      nombre: "Sr. Gato", 
      edad: "2 años", 
      descripcion: "Gato juguetón que disfruta de las alturas y explorar. Siempre curioso.", 
      imagen: srgato,
      genero: "macho",
      ubicacion: "Refugio Este"
    }
  ];

  return (
      <div className="relative py-6 px-4">

        {/* Cuadrícula de 3 columnas para las tarjetas como en el prototipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {mascotas.map((m) => (
              <div
                  key={m.id}
                  className="w-full h-full"
              >
                <div
                    className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#243B55]/50">
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
          ))}
        </div>

        {/* Botón "Registrar Mascota" */}
        <div className="flex justify-center md:justify-end mt-12">
          <Link
              to="/registrar-mascota"
              className="px-6 py-3 rounded-lg bg-[#5f0f2a] text-white font-semibold text-center hover:bg-[#243B55] hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md transition-all duration-300 cursor-pointer"
          >
            Registrar Mascota
          </Link>
        </div>
      </div>
  );
}