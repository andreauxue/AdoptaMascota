import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import galleta from "../assets/galleta.png";

export default function DetallesMascota() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [mascota, setMascota] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.state?.mascota) {
      setMascota(location.state.mascota);
      setLoading(false);
      return;
    }

    const isNumeric = /^\d+$/.test(id);

    if (isNumeric) {
      fetch(`/api/mascotas/${id}/`)
        .then(res => {
          if (!res.ok) throw new Error("No se pudo cargar la mascota");
          return res.json();
        })
        .then(data => {
          setMascota({
            nombre: data.nombre,
            imagen: data.imagen, // URL completa o relativa
            tipo: data.especie_nombre,
            info: `${data.genero_nombre} • ${data.edad} años`,
            descripcion: data.descripcion,
            detalles: {
              especie: data.especie_nombre,
              genero: data.genero_nombre,
              edad: `${data.edad} años`,
              tamanio: data.tamanio_nombre,
              vacunado: data.vacunado ? "Sí" : "No",
              esterilizado: data.esterilizado ? "Sí" : "No",
              energia: data.energia_nombre,
              personalidad: "Desconocida" // No está en el modelo actual
            }
          });
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    } else {
      setError("Mascota no encontrada o recarga no soportada para estáticos.");
      setLoading(false);
    }
  }, [id, location.state]);

  const irAFormulario = () => {
    navigate("/formulario-adopcion", { state: { mascotaNombre: mascota.nombre } });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  if (!mascota) return <div className="min-h-screen flex items-center justify-center">Mascota no encontrada</div>;

  const [sexo, edad] = mascota.info ? mascota.info.split("•").map(s => s.trim()) : ["?", "?"];

  return (
    <div className="min-h-screen bg-[#FFE6EC] p-10">

      {/* Título */}
      <h1 className="text-3xl font-bold text-center text-black mt-2 mb-10">
        Perfil de Mascota
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
              src={mascota.imagen}
              alt={mascota.nombre}
              className="rounded-2xl shadow-lg w-80 h-80 object-cover animate-zoomSlow"
            />
          </div>

          {/* Información */}
          <div className="w-full lg:w-1/2 p-10 space-y-6">

            <h1 className="text-4xl font-bold text-[#8A5A44]">{mascota.nombre}</h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              {mascota.descripcion || `${mascota.nombre} es una mascota adorable que busca un hogar.`}
            </p>

            <hr className="border-pink-200" />

            <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
              <p><span className="font-bold text-pink-700">Especie:</span> {mascota.detalles?.especie || mascota.tipo}</p>
              <p><span className="font-bold text-pink-700">Género:</span> {mascota.detalles?.genero || sexo}</p>
              <p><span className="font-bold text-pink-700">Edad:</span> {mascota.detalles?.edad || edad}</p>
              <p><span className="font-bold text-pink-700">Tamaño:</span> {mascota.detalles?.tamanio || "N/A"}</p>
              <p><span className="font-bold text-pink-700">Vacunada:</span> {mascota.detalles?.vacunado || "N/A"}</p>
              <p><span className="font-bold text-pink-700">Esterilizada:</span> {mascota.detalles?.esterilizado || "N/A"}</p>
              <p><span className="font-bold text-pink-700">Energía:</span> {mascota.detalles?.energia || "N/A"}</p>
              <p><span className="font-bold text-pink-700">Personalidad:</span> {mascota.detalles?.personalidad || "Cariñosa"}</p>
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
