import TarjetaCancion from "./TarjetaCancion";

export default function ListaCanciones() {
  const canciones = [
    {
      id: 1,
      titulo: "Anti-Hero",
      artista: "Taylor Swift",
      album: "Midnights",
      tema: "taylor",
      portada: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      enlace: "#"
    },
    {
      id: 2,
      titulo: "Love Story",
      artista: "Taylor Swift",
      album: "Fearless",
      tema: "taylor",
      portada: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
      enlace: "#"
    },
    {
      id: 3,
      titulo: "Espresso",
      artista: "Sabrina Carpenter",
      album: "Short n’ Sweet",
      tema: "sabrina",
      portada: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop",
      enlace: "#"
    },
    {
      id: 4,
      titulo: "Feather",
      artista: "Sabrina Carpenter",
      album: "emails i can’t send",
      tema: "sabrina",
      portada: "https://images.unsplash.com/photo-1482267553367-761fc3e589a7?q=80&w=1200&auto=format&fit=crop",
      enlace: "#"
    },
    {
      id: 5,
      titulo: "drivers license",
      artista: "Olivia Rodrigo",
      album: "SOUR",
      tema: "olivia",
      portada: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1200&auto=format&fit=crop",
      enlace: "#"
    },
    {
      id: 6,
      titulo: "vampire",
      artista: "Olivia Rodrigo",
      album: "GUTS",
      tema: "olivia",
      portada: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop",
      enlace: "#"
    },
  ];

  return (
    <section className="py-8 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid place-items-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {canciones.map((c) => (
            <TarjetaCancion
              key={c.id}
              titulo={c.titulo}
              artista={c.artista}
              album={c.album}
              portada={c.portada}
              enlace={c.enlace}
              tema={c.tema}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
