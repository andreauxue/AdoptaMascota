import galleta from "../assets/galleta.png";
import { useNavigate } from "react-router-dom";

export default function GalletaDetalles() {
  const navigate = useNavigate(); 

  const irAFormulario = () => {
    navigate("/formulario-adopcion");   // ruta a tu nuevo formulario
  };

  return (
    <div className="min-h-screen bg-[#FFE6EC] p-10">

      {/* Título */}
      <h1 className="text-3xl font-bold text-center text-black mt-2 mb-10">
        Información Detallada
      </h1>

      {/* Contenedor principal */}
      <div className="flex justify-center items-center">
        
        {/* Animación */}
        <style>{`
          @keyframes zoomSlow {
            0% { transform: scale(1); }
            50% { transform: scale(1.07); }
            100% { transform: scale(1); }
          }
          .animate-zoomSlow {
            animation: zoomSlow 6s ease-in-out infinite;
          }
        `}</style>

        <div className="bg-white rounded-3xl shadow-2xl border border-pink-200 w-full max-w-5xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Imagen */}
          <div className="w-full lg:w-1/2 bg-pink-50 flex justify-center items-center p-6">
            <img
              src={galleta}
              alt="Galleta"
              className="rounded-2xl shadow-lg w-80 h-80 object-cover animate-zoomSlow"
            />
          </div>

          {/* Información */}
          <div className="w-full lg:w-1/2 p-10 space-y-6">

            <h1 className="text-4xl font-bold text-[#8A5A44]">Galleta</h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              Galleta es una perrita adulta muy noble y cariñosa. Le encanta tomar
              el sol y disfruta la compañía de las personas.
            </p>

            <hr className="border-pink-200" />

            <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
              <p><span className="font-bold text-pink-700">Especie:</span> Perro</p>
              <p><span className="font-bold text-pink-700">Género:</span> Hembra</p>
              <p><span className="font-bold text-pink-700">Edad:</span> 6 años</p>
              <p><span className="font-bold text-pink-700">Tamaño:</span> Mediano</p>
              <p><span className="font-bold text-pink-700">Vacunada:</span> Sí</p>
              <p><span className="font-bold text-pink-700">Esterilizada:</span> Sí</p>
              <p><span className="font-bold text-pink-700">Energía:</span> Tranquila</p>
              <p><span className="font-bold text-pink-700">Personalidad:</span> Cariñosa</p>
            </div>

            {/* Botón Adoptar */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={irAFormulario}
                className="
                  px-6 py-3 rounded-full text-white font-semibold
                  bg-[#ff85a2] hover:bg-[#ff6c8f] transition shadow-md active:scale-95
                "
              >
                Adoptar
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
