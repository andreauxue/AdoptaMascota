export default function TarjetaVideojuegos({
  nombre,
  genero,
  plataforma,
  desarrolladora,
  imagen,
  alt,
}) {
  return (
    <div className="group relative w-72 h-[450px] overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white">
      
      {/* Imagen */}
      <div className="h-48 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          src={imagen}
          alt={alt}
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between h-[calc(100%-12rem)] p-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-center mb-2">
            {nombre}
          </h2>
          <ul className="text-sm font-medium text-gray-700">
            <li className="mt-1 leading-relaxed">Género: {genero}</li>
            <li className="mt-1 leading-relaxed">Plataforma: {plataforma}</li>
            <li className="mt-1 leading-relaxed">Desarrolladora: {desarrolladora}</li>
          </ul>
        </div>
        <button
          className="mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 text-white bg-slate-900 hover:bg-rose-400 focus-visible:ring-rose-200"
        >
          Comparar
        </button>
      </div>
    </div>
  );
}