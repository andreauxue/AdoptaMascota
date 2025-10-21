export default function TarjetaLibro({
    titulo,
    autor,
    año,
    imagen,
    descripcion,
    etiquetas = [],
}) {
    return (
        <article className="group relative overflow-hidden rounded-2xl bg-white/80 shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl dark:bg-zinc-900/80 dark:ring-white/10">
      <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={imagen}
          alt={titulo}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {titulo}
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {autor} • {año}
        </p>

        <p className="mt-3 line-clamp-3 text-sm text-zinc-700 dark:text-zinc-300">
          {descripcion}
        </p>

        {etiquetas.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {etiquetas.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
    );
}