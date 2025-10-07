export default function TarjetaPelicula({ nombre, descripcion, anio, imagen }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-500/30 w-80 h-[28rem] shadow-lg hover:-translate-y-1 transition-all duration-500">
                <img className="w-full h-64 object-cover object-center" src={imagen} alt={nombre} />
                <div className="flex flex-col items-center mt-2">
                    <p className="font-medium mt-3">{nombre}</p>
                    <p className="text-sm text-gray-500 mb-4 px-4 mt-2">{descripcion}</p>
                    <p className='text-sm text-gray-500 mb-2'>{anio}</p>
                </div>
            </div>
        </div>
    );
  }