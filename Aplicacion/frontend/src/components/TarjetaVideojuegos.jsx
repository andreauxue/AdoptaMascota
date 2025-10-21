function Tarjeta({ titulo, genero, descripcion, imagen }) {
  return (
    <div className="bg-gray-800 shadow-xl rounded-xl p-4 max-w-sm hover:scale-105 transition-transform">
      <img
        src={imagen}
        alt={titulo}
        className="rounded-t-xl w-full h-48 object-cover"
      />
      <h2 className="text-white text-xl font-bold mt-2">{titulo}</h2>
      <p className="text-stone-300 italic">{genero}</p>
      <p className="text-white mt-2">{descripcion}</p>
    </div>
  );
}

export default Tarjeta;
