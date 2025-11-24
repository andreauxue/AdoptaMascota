import { FaPaw, FaHome } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                <div className="relative mb-8">
                    <div className="text-9xl font-bold text-[#d4e7d4]">404</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaPaw className="text-[#127369] text-6xl animate-bounce" style={{ animationDelay: '0s' }} />
                    </div>
                    <FaPaw className="absolute top-0 left-1/4 text-[#1a8f83] text-3xl opacity-50 animate-pulse" />
                    <FaPaw className="absolute bottom-4 right-1/4 text-[#1a8f83] text-2xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>

                {/* Mensaje principal */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    ¡Ups! Mascota no encontrada.
                </h1>

                <p className="text-xl text-gray-600 mb-2">
                    Parece que esta página se escapó.
                </p>

                <p className="text-lg text-gray-500 mb-8">
                    No te preocupes, hay muchas mascotas esperando por ti en la página principal.
                </p>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="flex items-center gap-2 bg-[#127369] hover:bg-[#0f5f56] text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
                    >
                        <FaHome />
                        Volver al inicio
                    </button>

                    <button
                        onClick={() => window.location.href = '/adoptar'}
                        className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#127369] font-semibold px-8 py-3 rounded-full border-2 border-[#127369] transition-all transform hover:scale-105"
                    >
                        <FaPaw />
                        Ver mascotas
                    </button>
                </div>

                {/* Mensaje adicional */}
                <div className="mt-12 p-6 bg-white rounded-2xl shadow-md">
                    <p className="text-gray-700">
                        <span className="font-semibold">Consejo:</span> Si buscabas una mascota específica, intenta usar el buscador en la página principal.
                    </p>
                </div>
            </div>
        </div>
    );
}