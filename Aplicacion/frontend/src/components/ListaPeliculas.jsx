import batman from "../assets/Batman.jpg"
import avengers from "../assets/Avengers.jpg"
import f1 from "../assets/f1.jpg"
import gt from "../assets/gt.jpg"
import tron from "../assets/tron.jpg"
import TarjetaPelicula from "./TarjetaPelicula";

export default function ListaPeliculas() {
  const peliculas = [
    { id: 1, nombre: "Batman: The Dark Knight Rises", descripcion: "Bruce vuelve del retiro para enfrentar a Bane y salvar Gotham mientras una conspiración hunde a la ciudad.",imagen: batman, anio: 2012},
    { id: 2, nombre: "Avengers: Infinity War", descripcion: "Thanos reúne las Gemas del Infinito y los Vengadores se dividen para detenerlo en Titán y en Wakanda.", imagen: avengers, anio: 2018 },
    { id: 3, nombre: "F1: La pelicula", descripcion: "Tras un accidente en los 90, Sonny Hayes regresa a la F1; un excompañero lo une al novato Joshua Pearce.",imagen: f1, anio: 2025 },
    { id: 4, nombre: "Gran Turismo", descripcion: "Un jugador experto en simuladores salta a las pistas reales y lucha por un lugar en el automovilismo élite.", imagen: gt, anio: 2023 },
    { id: 5, nombre: "TRON: Legacy", descripcion: "Sam Flynn ingresa a la Red digital para hallar a su padre y enfrenta a un régimen que domina el mundo virtual.", imagen: tron, anio: 2010 },
  ];

  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center py-10 px-6">
      {peliculas.map((p) => (
        <TarjetaPelicula
          key={p.id}
          nombre={p.nombre}
          anio={p.anio}
          descripcion={p.descripcion}
          imagen={p.imagen}
        />
      ))}
    </div>
  );
}