export default function TarjetaPelicula({titulo, director, año, poster, clasificacion, duracion, genero}) {
    return (
        <div className="group relative max-w-xs overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:border-red-600">
            <div className="overflow-hidden">
                <img
                    src={poster}
                    alt={titulo}
                    className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="space-y-1.5 p-4">
                <h2 className="text-xl font-semibold tracking-tight text-red-900">
                    {titulo}
                </h2>
                <p className="text-sm font-medium text-black-900/70">Dirección: {director}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-700">{año} · {duracion}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">{genero} · {clasificacion}</p>
                <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-red-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300">
                    Comprar película
                </button>
            </div>
        </div>
    );
}