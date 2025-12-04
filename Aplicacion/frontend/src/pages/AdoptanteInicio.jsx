import { FaPaw, FaSearch, FaHeart, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AdoptanteInicio() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 p-10 flex flex-col items-center">

      {/* Encabezado */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-500 
                        rounded-full flex items-center justify-center mx-auto shadow-lg">
          <FaHome className="text-4xl text-white" />
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 
                       bg-clip-text text-transparent mt-6">
          Panel del Adoptante
        </h1>

        <p className="text-gray-600 max-w-md mt-3">
          Explora todas las mascotas disponibles y da el primer paso para 
          brindarles un hogar lleno de amor.
        </p>
      </div>

      {/* Sección de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

        {/* Tarjeta: Ver Mascotas */}
        <div
          onClick={() => navigate("/mascotas")}
          className="cursor-pointer bg-white rounded-2xl shadow-xl p-8 border border-pink-200
                     hover:shadow-pink-200 hover:scale-105 transition-all duration-300"
        >
          <FaSearch className="text-4xl text-pink-500 mb-4" />
          <h2 className="text-2xl font-bold text-pink-600 mb-2">Explorar Mascotas</h2>
          <p className="text-gray-600">
            Descubre perros, gatos y más amigos esperando por ti. ¡Adopta con un clic!
          </p>
        </div>

        {/* Tarjeta: Mis Adopciones */}
        <div
          onClick={() => navigate("/mis-adopciones")}
          className="cursor-pointer bg-white rounded-2xl shadow-xl p-8 border border-pink-200
                     hover:shadow-pink-200 hover:scale-105 transition-all duration-300"
        >
          <FaHeart className="text-4xl text-pink-500 mb-4" />
          <h2 className="text-2xl font-bold text-pink-600 mb-2">Mis Adopciones</h2>
          <p className="text-gray-600">
            Revisa las mascotas que ya has adoptado y mantén un registro especial.
          </p>
        </div>

      </div>

    </div>
  );
}
