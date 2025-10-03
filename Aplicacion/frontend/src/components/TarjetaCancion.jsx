// Componente que ahora acepta un 'link' y lo usa en el botón
export default function TarjetaCancion({ titulo, artista, album, imagen, link }) {
  return (
    <div className="group relative flex flex-col md:flex-row max-w-md overflow-hidden rounded-2xl border-purple-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="md:w-1/3">
        <img
          src={imagen}
          alt={titulo}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2 md:w-2/3">
        <h2 className="text-xl font-semibold tracking-tight text-purple-700">
          {titulo}
        </h2>
        <p className="text-sm font-medium text-pink-500">{artista}</p>
        <p className="text-sm text-gray-600">
          {album}
        </p>
        {}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-yellow-500 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
        >
          Escuchar ahora
        </a>
      </div>
    </div>
  );
}