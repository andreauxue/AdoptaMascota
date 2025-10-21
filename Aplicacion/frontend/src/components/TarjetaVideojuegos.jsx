export default function TarjetaVideojuegos({ nombre, tipo, descripcion, imagen, maincharacter }) {
  return (
    <div className="group relative max-w-xs overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={imagen}
        alt={nombre}
        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="space-y-1.5 p-4">
        <h2 className="text-xl font-bold tracking-tight text-indigo-600">
          {nombre}
        </h2>
        <p className="text-sm font-medium text-indigo-900/70">Género: {tipo}</p>
        <p className="text-sm font-medium text-indigo-900/70">Personaje principal: {maincharacter}</p>
        <p className="text-sm leading-relaxed text-gray-600">
          {descripcion}</p>
        <button className="inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-600 hover:shadow-md active:scale-95 focus:outline-none">
          Ver detalles
        </button>
      </div>
    </div>
  );
}
