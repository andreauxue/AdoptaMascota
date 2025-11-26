import { useNavigate, useLocation } from "react-router-dom";
import logoRecibido from "../assets/FormularioRecibido.png";

export default function FormularioRecibido() {
  const navigate = useNavigate();
  const location = useLocation();
  const mascotaNombre = location.state?.mascotaNombre || "la mascota";

  const handleAceptar = () => {
    // El botón "Aceptar" redirige a la Galería de mascotas
    navigate("/galeria");
  };

  return (
    <div className="min-h-screen bg-[#FFE6EC] p-10 flex justify-center items-center">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-pink-200 p-10 text-center">

        {/* Logo y título */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={logoRecibido}
            alt="MatchPaw Logo"
            className="w-40 drop-shadow-md mb-4"
          />

          <h1 className="text-4xl font-bold text-black">
            ¡Gracias por completar tu Formulario de Adopción!
          </h1>

          <p className="mt-5 max-w-xl text-gray-800 text-lg leading-relaxed">
            Hemos recibido tu solicitud para adoptar a <span className="font-semibold text-pink-700">{mascotaNombre}</span>.
            ¡Gracias por darte el tiempo de llenar el formulario y mostrar interés en darle un hogar lleno de amor!
          </p>

          <p className="mt-6 max-w-xl text-gray-600 text-base leading-relaxed">
            Nuestro equipo revisará tus respuestas en un plazo aproximado de <span className="font-semibold">3 a 7 días hábiles</span>.
            Te notificaremos por correo electrónico si tu solicitud fue aprobada o si necesitamos más información.
          </p>
        </div>

        {/* Botón Aceptar */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleAceptar}
            className="px-8 py-3 bg-[#ff85a2] hover:bg-[#ff6c8f] text-white font-bold rounded-full shadow-md transition active:scale-95"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
