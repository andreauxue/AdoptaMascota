import { FaHeart } from 'react-icons/fa';

export default function TarjetaMascota({ 
    nombre, 
    edad, 
    descripcion, 
    imagen,
    genero,
    ubicacion,
    onAdoptarClick
}) {
    // Combinamos los datos en "Serie de datos"
    const serieDeDatos = `${edad} · ${genero} · ${ubicacion}`;

    return (
        <div className="w-full bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center p-4 gap-4 transition-all duration-300 hover:shadow-xl">
            
            {/* Imagen */}
            <img
                src={imagen} 
                alt={nombre}
                className="w-full h-48 md:w-32 md:h-32 object-cover rounded-lg bg-white"
            />

            {/* Contenido */}
            <div className="flex-grow flex flex-col justify-between h-full w-full">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#243B55] font-aclonica">
                        {nombre}
                    </h2>

                    <p className="text-sm text-[#127369] mt-1">
                        {serieDeDatos}
                    </p>

                    <p className="text-[#243B55] text-sm mt-2 line-clamp-2">
                        {descripcion}
                    </p>
                </div>

                {/* Botón de acción */}
                <button
                    onClick={onAdoptarClick}
                    className="mt-3 w-full md:w-auto md:self-start inline-flex items-center justify-center gap-2 rounded-md bg-[#127369] px-4 py-2 text-white font-semibold shadow-md transition-all duration-300 hover:bg-[#243B55] hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md cursor-pointer font-belleza">
                    <FaHeart className="text-sm"/>
                    <span>Adoptar Mascota</span>
                </button>
            </div>
        </div>
    );
}