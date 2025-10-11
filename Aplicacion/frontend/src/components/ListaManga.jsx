import TarjetaManga from "./TarjetaManga";

export default function ListaManga() {
  const mangas = [
    {
      id: 1,
      titulo: "One Piece",
      autor: "Eiichiro Oda",
      genero: "Aventura",
      descripcion: "Sigue a Luffy en su viaje para convertirse en el Rey de los Piratas y encontrar el legendario tesoro One Piece.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuJ-sutGEfnlYJhME6VKtoSh1BE2Qkak56ZDod4BHfdslV5ThPnWO0L7BhbCY"
    },
    {
      id: 2,
      titulo: "Naruto",
      autor: "Masashi Kishimoto",
      genero: "Acción",
      descripcion: "La historia de Naruto Uzumaki, un joven ninja que sueña con ser Hokage y proteger su aldea.",
      imagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8YDR9P997lBuo_P_6npuA_3z6UzXIh0GNouQtPd5VNgQPwTiw_Krwf_TTw8Rl"
    },
    {
      id: 3,
      titulo: "Death Note",
      autor: "Tsugumi Ohba",
      genero: "Psicológico",
      descripcion: "Un estudiante descubre un cuaderno sobrenatural que le permite controlar la muerte de cualquier persona.",
      imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQFlpncZ-ibipEI8OoKqxDAt66UyGZ5A9A-9Btj2QSW7X3t5ln9sdde0qhl7ICA"
    },
    {
      id: 4,
      titulo: "My Hero Academia",
      autor: "Kohei Horikoshi",
      genero: "Superhéroes",
      descripcion: "En un mundo donde la mayoría tiene superpoderes, un chico sin ellos lucha por convertirse en un héroe.",
      imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHlxJ_UFZvr-2uQMng0t0_MiYkJLxOOqI70O7r84e42uNVwGG7GDa6P_v1jG-a"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 place-items-center py-6 px-4">
      {mangas.map((manga) => (
        <TarjetaManga
          key={manga.id}
          titulo={manga.titulo}
          autor={manga.autor}
          descripcion={manga.descripcion}
          imagen={manga.imagen}
          genero={manga.genero}
        />
      ))}
    </div>
  );
}