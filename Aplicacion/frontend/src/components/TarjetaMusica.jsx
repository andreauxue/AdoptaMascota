export default function TarjetaMusica({ nombre, artista, genero, imagen }) {
  return (
    <div className="max-w-xs rounded-xl border border-blue-200 bg-gradient-to-b from-indigo-50 to-blue-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <img
        src={imagen}
        alt={nombre}
        className="h-48 w-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-[1.02]"
      />
      
      <div className="p-4 space-y-2 bg-white/90 backdrop-blur-sm rounded-b-xl">
        <h2 className="text-xl font-bold text-blue-800">{nombre}</h2>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-blue-700">Artista:</span> {artista}
        </p>
        <p className="text-sm text-gray-700 mb-4">
          <span className="font-semibold text-blue-700">Género:</span> {genero}
        </p>

        <button className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
          Escucha
        </button>
      </div>
    </div>
  );
}
