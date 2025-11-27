export default function TarjetaLibro({ titulo, autor, año, tema, imagen }) {
    return (
        <div className="group relative flex flex-col max-w-xs overflow-hidden rounded-2xl bg-[repeating-linear-gradient(135deg,_#f472b6_0_10px,_#ffffff_10px_20px)] p-[3px] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex flex-col flex-1 rounded-2xl bg-gradient-to-b from-white to-rose-50 p-5">
                <img
                    src={imagen}
                    alt={titulo}
                    className="h-80 w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />

                <div className="flex flex-col flex-1 justify-between mt-4">
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold tracking-tight text-rose-800 group-hover:text-rose-700 transition-colors">
                            {titulo}
                        </h2>
                        <p className="text-sm font-medium text-blue-900">
                            Autor: {autor}
                        </p>
                        <p className="text-sm text-gray-700">
                            Año de publicación: <span className="font-semibold">{año}</span>
                        </p>
                        <p className="text-sm text-gray-700">
                            Habla de: <span className="italic text-gray-800">{tema}</span>
                        </p>
                    </div>

                    <button
                        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-lime-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-lime-700 hover:shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2">
                        Quiero leer este libro
                    </button>
                </div>
            </div>
        </div>
    );
}
