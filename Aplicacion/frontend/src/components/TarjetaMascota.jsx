import { FaHeart } from 'react-icons/fa';

export default function TarjetaMascota({ 
    nombre, 
    edad, 
    descripcion, 
    imagen,
    genero,
    ubicacion
}) {
    // Combinamos los datos en "Serie de datos"
    const serieDeDatos = `${edad} · ${genero} · ${ubicacion}`;

    return (
        // Es 'flex-col' (vertical) por defecto (móvil)
        // Se convierte en 'md:flex-row' (horizontal) en pantallas medianas y más grandes
        <div className="w-full bg-gray-200 rounded-lg shadow-md flex flex-col md:flex-row items-center p-4 gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            
            {/* Imagen */}
            <img
                src={imagen} 
                alt={nombre}
                // En móvil ('w-full', 'h-48'): ocupa todo el ancho
                // En desktop ('md:w-32', 'md:h-32'): se hace pequeño
                className="w-full h-48 md:w-32 md:h-32 object-cover rounded-lg bg-gray-300"
            />

            {/* Contenido */}
            {/* 'w-full' para que ocupe el ancho en ambos diseños */}
            <div className="flex-grow flex flex-col justify-between h-full w-full">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        {nombre}
                    </h2>
                    
                    <p className="text-sm text-gray-700 mt-1">
                        {serieDeDatos}
                    </p>
                    
                    {/* DESCRIPCIÓN: siempre es visible. */}
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {descripcion}
                    </p>
                </div>

                {/* Botón de acción */}
                {/* Es 'w-full' (ancho completo) en móvil y 'md:w-auto' (ancho automático) en desktop */}
                <button className="mt-3 w-full md:w-auto md:self-start inline-flex items-center justify-center gap-2 rounded-md bg-gray-600 px-4 py-2 text-white font-semibold shadow-md transition-all duration-200 hover:bg-gray-700 active:scale-95">
                    <FaHeart className="text-sm" />
                    <span>Adoptar Mascota</span>
                </button>
            </div>
        </div>
    );
}