export default function TarjetaCancion({
  titulo,
  artista,
  album,
  portada,
  enlace = "#",
  tema = "taylor", // "taylor" | "sabrina" | "olivia"
}) {
  const estilos = {
    taylor: {
      bg: "from-pink-50 to-violet-50",
      ring: "ring-pink-200",
      title: "text-violet-700",
      badge: "bg-pink-100 text-pink-700",
      btn: "bg-violet-600 hover:bg-violet-700 text-white",
    },
    sabrina: {
      bg: "from-yellow-50 to-amber-50",
      ring: "ring-amber-200",
      title: "text-amber-700",
      badge: "bg-amber-100 text-amber-700",
      btn: "bg-amber-600 hover:bg-amber-700 text-white",
    },
    olivia: {
      bg: "from-purple-50 to-fuchsia-50",
      ring: "ring-fuchsia-200",
      title: "text-fuchsia-700",
      badge: "bg-fuchsia-100 text-fuchsia-700",
      btn: "bg-fuchsia-600 hover:bg-fuchsia-700 text-white",
    },
  };

  const c = estilos[tema] ?? estilos.taylor;

  return (
    <article className={`group overflow-hidden rounded-2xl bg-gradient-to-br ${c.bg} shadow-md ring-1 ${c.ring} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl max-w-sm`}>
      <div className="relative">
        <img
          src={portada}
          alt={`${titulo} - ${artista}`}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${c.badge}`}>
          {artista}
        </span>
      </div>

      <div className="space-y-2 p-5">
        <h3 className={`text-xl font-extrabold tracking-tight ${c.title}`}>{titulo}</h3>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Álbum:</span> {album}
        </p>

        <a
          href={enlace}
          target="_blank"
          rel="noreferrer"
          className={`mt-3 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${c.btn}`}
        >
          Escuchar
        </a>
      </div>
    </article>
  );
}
