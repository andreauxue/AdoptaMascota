export default function TarjetaCancion({ nombre, artista, album, descripcion, imagen, link }) {

    const handleClick = () => {
    window.open(link, '_blank');
    };

  return (
    <article className="w-full max-w-3xl bg-black text-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.1]">
      <div className="md:flex">
        <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
          <img
            src={imagen}
            alt={nombre}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-400 leading-tight break-words">{nombre}</h2>
            <p className="mt-2 text-sm text-blue-200"><span className="font-semibold text-orange-400">Artista:</span> {artista}</p>
            <p className="text-sm text-blue-200"><span className="font-semibold text-orange-400">Álbum:</span> {album}</p>

            <p className="mt-4 text-sm text-gray-300">{descripcion}</p>
          </div>

          <div className="mt-4">
            <button className="w-full rounded-full bg-orange-500 text-black font-semibold py-2 px-4 hover:bg-orange-600 transition-colors" onClick={handleClick}>
              Escúchala
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
  