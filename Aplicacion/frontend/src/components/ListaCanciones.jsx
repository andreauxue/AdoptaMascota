import TarjetaCancion from "./TarjetaCancion";
import proaño from "../assets/proaño.jpg";
import reze from "../assets/reze.jpg";
import everyday from "../assets/everyday.jpg";

// Lista de canciones
export default function ListaCanciones() {
  const canciones = [
    { id: 1, titulo: "Nueve", artista: "Enjambre", album: "Proaño", imagen: proaño, link: "https://open.spotify.com/intl-es/track/6qtDW5A9dgCyjhQZSGRlcu?si=98b8ac9030474c0d" },
    { id: 2, titulo: "Every Day", artista: "bo en", album: "Pale Machine", imagen: everyday, link: "https://open.spotify.com/intl-es/track/2pxftVTI1ACfpvcryvebxd?si=249b504023274327" },
    { id: 3, titulo: "IRIS OUT", artista: "Kenshi Yonezu", album: "Chainsaw Man", imagen: reze, link: "https://open.spotify.com/intl-es/track/59hVbgr8rfYkDbHfr8RcGI?si=6392503dd3764762"},
  ];

  // Renderiza la lista pasando el nuevo prop 'link'
  return (
    <div className="flex flex-col items-center gap-8 py-6 px-4">
      {canciones.map((c) => (
        <TarjetaCancion
          key={c.id}
          titulo={c.titulo}
          artista={c.artista}
          album={c.album}
          imagen={c.imagen}
          link={c.link} 
        />
      ))}
    </div>
  );
}