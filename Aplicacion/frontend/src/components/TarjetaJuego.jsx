export default function TarjetaJuego({ titulo, plataforma, descripcion, imagen, lanzamiento }) {
    return (
      <div className="group relative max-w-xs overflow-hidden rounded-2xl border border-indigo-200 bg-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/50">
        <img
          src={imagen}
          alt={`Portada de ${titulo}`}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
        />
        <div className="space-y-1.5 p-4">
          <h2 className="text-xl font-bold tracking-tight text-indigo-400">
            {titulo}
          </h2>
          {/* Mostramos la plataforma y el año en la misma línea */}
          <p className="text-sm font-medium text-gray-300">
            {plataforma} - <span className="font-semibold text-gray-200">{lanzamiento}</span>
          </p>
          <p className="mt-1 text-sm leading-relaxed text-gray-400">
            {descripcion}
          </p>
          <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
            ¡Jugar ahora!
          </button>
        </div>
      </div>
    );
  }