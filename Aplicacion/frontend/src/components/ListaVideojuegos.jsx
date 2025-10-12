import TarjetaVideojuegos from "./TarjetaVideojuegos";

export default function ListaVideojuegos() {
  const videojuegos = [
    {
      id: 1,
      nombre: "The Legend of Zelda: Breath of the Wild",
      genero: "Aventura / Mundo abierto",
      plataforma: "Nintendo Switch",
      desarrolladora: "Nintendo EPD",
      imagen:
        "https://media.es.wired.com/photos/638fd68c7db986e0c2d6b19a/16:9/w_2240,c_limit/Breath-of-the-Wild-Casual-Gamer-Culture.jpg",
      alt: "The Legend of Zelda: Breath of the Wild",
    },
    {
      id: 2,
      nombre: "God of War: Ragnarök",
      genero: "Acción / Aventura",
      plataforma: "PlayStation 5",
      desarrolladora: "Santa Monica Studio",
      imagen:
        "https://cineytele.com/play/wp-content/uploads/2022/11/KYIGZ47NUNAPDLCIAQPQIUDWS4.jpeg",
      alt: "God of War: Ragnarök",
    },
    {
      id: 3,
      nombre: "Elden Ring",
      genero: "RPG / Mundo abierto",
      plataforma: "PlayStation, Xbox, PC",
      desarrolladora: "FromSoftware",
      imagen:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/06/elden-ring-2367193.jpg?tf=3840x",
      alt: "Elden Ring",
    },
    {
      id: 4,
      nombre: "Cyberpunk 2077",
      genero: "RPG / Acción",
      plataforma: "PC, PlayStation, Xbox",
      desarrolladora: "CD Projekt Red",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
      alt: "Cyberpunk 2077",
    },
    {
      id: 5,
      nombre: "Minecraft",
      genero: "Sandbox / Supervivencia",
      plataforma: "PC, Consolas, Móvil",
      desarrolladora: "Mojang Studios",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png",
      alt: "Minecraft",
    },
    {
      id: 6,
      nombre: "Hollow Knight",
      genero: "Metroidvania / Aventura",
      plataforma: "PC, Nintendo Switch, PlayStation, Xbox",
      desarrolladora: "Team Cherry",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/274px-Hollow_Knight_first_cover_art.webp.png",
      alt: "Hollow Knight",
    },
    {
      id: 7,
      nombre: "Red Dead Redemption 2",
      genero: "Acción / Aventura / Mundo abierto",
      plataforma: "PlayStation, Xbox, PC",
      desarrolladora: "Rockstar Games",
      imagen:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/10/red-dead-redemption-2-caratula-provisional.jpg?tf=384x",
      alt: "Red Dead Redemption 2",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-10 place-items-center py-6 px-4">
      {videojuegos.map((v) => (
        <TarjetaVideojuegos
          key={v.id}
          nombre={v.nombre}
          genero={v.genero}
          plataforma={v.plataforma}
          desarrolladora={v.desarrolladora}
          imagen={v.imagen}
          alt={v.alt}
        />
      ))}
    </div>
  );
}
