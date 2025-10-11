export default function TarjetaManga({ titulo, autor, descripcion, imagen, genero }) {
  return (
    <div className="group relative max-w-xs overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={imagen}
        alt={titulo}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-orange-600">
            {titulo}
          </h2>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
            {genero}
          </span>
        </div>
        <p className="text-sm font-medium text-orange-900/70">Autor: {autor}</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {descripcion}
        </p>
        <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
          Leer ahora
        </button>
      </div>
    </div>
  );
}