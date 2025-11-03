export default function TarjetaPlatillo({ nombre, origen, descripcion, precio, imagen }) {
  return (
    <div className="group relative max-w-xs overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={imagen}
        alt={nombre}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
      />
      <div className="space-y-1.5 p-4">
        <h2 className="text-xl font-semibold tracking-tight text-amber-600">
          {nombre}
        </h2>
        <p className="text-sm font-medium text-amber-900/70">
          Origen: {origen}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          {descripcion}
        </p>
        <p className="mt-2 text-lg font-bold text-amber-700">
          ${precio} MXN
        </p>
        <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-amber-600 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
          Agregar al pedido
        </button>
      </div>
    </div>
  );
}
