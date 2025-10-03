
// Componente que muestra una tarjeta con la información de una canción
export default function TarjetaCancion({ titulo, artista, album, portada, link }) {
  return (
    <div className="bg-neutral-900 shadow-lg rounded-2xl overflow-hidden w-72 
                    border border-green-800/40 
                    transition-transform transform hover:scale-105 
                    hover:shadow-[0_0_25px_3px_rgba(34,197,94,0.6)]">
      <img src={portada} alt={titulo} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">{titulo}</h2>
        <p className="text-gray-300">{artista}</p>
        <p className="text-sm text-gray-400 italic">{album}</p>

        {/* Botón escuchar */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block w-full text-center bg-green-600 hover:bg-green-500 
                     text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Escuchar
        </a>
      </div>
    </div>
  );
}

