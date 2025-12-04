import { useNavigate } from "react-router-dom";
import { FaPaw, FaPlusCircle } from "react-icons/fa";

export default function AdminInicio() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-start py-12 px-4">
      
      <div className="bg-white rounded-2xl shadow-xl border border-pink-100 p-10 max-w-2xl w-full text-center">

        {/* Encabezado */}
        <div className="flex justify-center mb-4">
          <FaPaw className="text-pink-400 text-4xl drop-shadow-md" />
        </div>

        <h1 className="text-4xl font-extrabold text-pink-700 mb-3">
          Panel de Administración
        </h1>

        <p className="text-gray-600 text-lg mb-10 max-w-lg mx-auto">
          Administra todas las especies y mascotas registradas en el sistema.
          Desde aquí puedes agregar nuevos registros y gestionar la información.
        </p>

        {/* Botones */}
        <div className="flex justify-center gap-6 flex-wrap">

          <button
            onClick={() => navigate("/registrar-mascota")}
            className="
              flex items-center gap-2 px-7 py-3 
              rounded-full font-semibold 
              bg-gradient-to-r from-pink-400 to-pink-500 
              text-white shadow-md 
              hover:shadow-pink-200/70 hover:scale-105 
              transition-all duration-300
            "
          >
            <FaPlusCircle className="text-lg" />
            Registrar Mascota
          </button>

          <button
            onClick={() => navigate("/registrar-especie")}
            className="
              flex items-center gap-2 px-7 py-3 
              rounded-full font-semibold 
              bg-gradient-to-r from-pink-300 to-pink-400 
              text-white shadow-md 
              hover:shadow-pink-200/70 hover:scale-105 
              transition-all duration-300
            "
          >
            <FaPlusCircle className="text-lg" />
            Registrar Especie
          </button>
        </div>

      </div>
    </div>
  );
}
