export default function TarjetaPelicula({ titulo, director, año, poster, clasificacion, duracion, genero }) {
    return (
        <div className="group relative w-full overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:border-red-300 hover:border-4">
            <div className="flex">
                <div className="w-1/3 overflow-hidden flex-shrink-0">
                    <img
                        src={poster}
                        alt={titulo}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="flex-1 space-y-1.5 p-4 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold font-serif tracking-tight text-red-900">
                            {titulo}
                        </h2>
                        <p className="text-sm font-medium text-black-900/70">Dirección: {director}</p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-700">{año} · {duracion}</p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-500">{genero} · {clasificacion}</p>
                    </div>
                    <button className="inline-flex w-full items-center justify-center rounded-full bg-red-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300">
                        Comprar película
                    </button>
                </div>
            </div>
        </div>
    );
}