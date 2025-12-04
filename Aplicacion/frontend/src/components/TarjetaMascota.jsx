export default function TarjetaMascota({ nombre, edad, descripcion, imagen }) {
    return (
      <div className="group relative max-w-xs overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <img
          src={imagen}
          alt={nombre}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="space-y-1.5 p-4">
          <h2 className="text-xl font-semibold tracking-tight text-pink-600">
            {nombre}
          </h2>
          <p className="text-sm font-medium text-pink-900/70">Edad: {edad}</p>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">
            {descripcion}
          </p>
          <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-pink-600 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300">
            Quiero adoptarla
          </button>
        </div>
      </div>
    );
  }
  