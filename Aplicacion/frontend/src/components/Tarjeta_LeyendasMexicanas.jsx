export default function Tarjeta_LeyendasMexicanas({ nombre, quienEs, leyenda, miedoQueCausa, origen, imagen }) {
  return (
    <div className="group relative max-w-xs overflow-hidden rounded-2xl border border-amber-900 bg-blue-200/10 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-700">
      <img
        src={imagen}
        alt={nombre}
        className="h-82 w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
      />
      <div className="space-y-2 p-4">
        <h2 className="text-xl font-semibold tracking-tight text-yellow-600 text-center">
          {nombre}
        </h2>
        <p className="text-sm font-medium text-gray-300">
          <span className="text-amber-700 font-semibold">Quién es:</span> {quienEs}
        </p>
        <p className="text-xs text-gray-500 italic">
          Origen: {origen}
        </p>
        <hr className="border-gray-800" />
        <p className="mt-1 text-sm leading-relaxed text-gray-200 line-clamp-4">
          <span className="text-amber-700 font-semibold">Leyenda:</span> {leyenda}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-gray-400 line-clamp-4">
          <span className="text-amber-700 font-semibold">Miedo que causa:</span> {miedoQueCausa}
        </p>
        <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-800 hover:shadow-red-700 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600">
          Conoce más
        </button>
      </div>
    </div>
  );
}
