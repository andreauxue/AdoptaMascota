export default function TarjetaPokemon({nombre, tipo, descripcion, imagen}){
    return(
        <div className="bg-green-300 rounded-lg shadow-xl w-40 overflow-hidden hover:shadow-2xl transition">
            <img src={imagen} alt={nombre} className="w-40 h-40 object-cover"/>
            <h2 className="text-black-700 text-center font-bold text-xl bg-green-400">{nombre}</h2>
            <p className="text-m font-semibold">Tipo: {tipo}</p>
            <p className="text-gray-700 text-sm mt-2 font-semibold">{descripcion}</p>
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400">Elige éste Pokemon
            </button>
        </div>
    )
}