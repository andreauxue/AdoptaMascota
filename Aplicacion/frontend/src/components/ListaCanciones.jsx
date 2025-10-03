import TarjetaCancion from "./TarjetaCancion";

// Muestra una lista de canciones en tarjetas
export default function ListaCanciones() {

    // Datos de canciones
  const canciones = [
  {
    titulo: "plan",
    artista: "Alex Ponce",
    album: "ser humano",
    portada: "https://i.scdn.co/image/ab67616d0000b2738cbbb3714de8a6cb6720bd51",
    link:"https://youtu.be/NuGFGvX4wAQ?si=MU_MT7J5g4_paGm6"
  },
  {
    titulo: "LOS DOS",
    artista: "Grupo Frontera, Morat",
    album: "JUGANDO A QUE NO PASA NADA",
    portada: "https://i.scdn.co/image/ab67616d0000b273cfc8a4003989625ebc20de4e",
    link:"https://youtu.be/PeoHibaMD2s?si=Tn602ZfkKLK2UVXs"
  },
  {
    titulo: "Si Preguntan Por Mi",
    artista: "Chris Lebron, Manuel Turizo",
    album: "Si Preguntan Por Mi",
    portada: "https://i.scdn.co/image/ab67616d0000b273502e78245ec96a1ecb926f8d",
    link: "https://youtu.be/Ed1ppokd4N0?si=AjoqnDvUnd1yaH8f"
  },
  {
    titulo: "Callejon de los Secretos",
    artista: "Raw Alejandro, Mon Laferte",
    album: "Cosa Nuestra: Capitulo 0 ",
    portada: "https://lh3.googleusercontent.com/BQMrj-gWq5Cy1azjbafW2XV1jrD68mRDuNRDY9C_DFwbdj56V4xdpyFftNEYH6i5W0V5MtGc8GW0sftO=w544-h544-l90-rj",
    link:"https://youtu.be/Td81qKN4BHs?si=jUohb7A_C5ZpSsPe"
  },
  {
    titulo: "Enemy",
    artista: "Imagine Dragons",
    album: "Mercury - Acts1&2",
    portada: "https://i.scdn.co/image/ab67616d0000b273fc915b69600dce2991a61f13",
    link:"https://youtu.be/D9G1VOjN_84?si=d2aqtNGQ-77QYWrg"
  }
];

  // Contenedor que organiza las tarjetas en filas
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {canciones.map((cancion, index) => (
        <TarjetaCancion
          key={index}
          titulo={cancion.titulo}
          artista={cancion.artista}
          album={cancion.album}
          portada={cancion.portada}
          link={cancion.link}
        />
      ))}
    </div>
  );
}

