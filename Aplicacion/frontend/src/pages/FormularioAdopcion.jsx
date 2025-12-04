import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import logoRosa from "../assets/logoRosa.png";

export default function FormularioAdopcion() {
  const navigate = useNavigate(); 
  const location = useLocation();
  const mascotaNombre = location.state?.mascotaNombre || "la mascota";
  const [formData, setFormData] = useState({
    razon: "",
    vivienda: "",
    experiencia: "",
    gastos: "",
    estiloVida: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulario de Adopción:", formData);
    navigate("/formulario-recibido", { state: { mascotaNombre } });

    setFormData({
      razon: "",
      vivienda: "",
      experiencia: "",
      gastos: "",
      estiloVida: "",
    });

    e.target.reset();
  };

  return (
    <div className="min-h-screen p-6 bg-[#FFE6EC] flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-pink-200">

        {/* Encabezado */}
        <div className="flex flex-col items-center mb-10">
          <img src={logoRosa} alt="MatchPaw Logo" className="w-40 mb-4 drop-shadow-md" />
          <h1 className="text-4xl font-bold text-black text-center">Formulario de Adopción</h1>
          <p className="mt-4 max-w-xl text-center text-gray-700 text-base leading-relaxed">
            Queremos conocerte un poco más para asegurar una adopción responsable.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Pregunta 1 */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              1. ¿Cuál es la razón principal por la que desea adoptar una mascota?
            </label>
            <textarea
              name="razon"
              rows="3"
              value={formData.razon}
              onChange={handleChange}
              placeholder="Escribe tu respuesta..."
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          {/* Pregunta 2 */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              2. ¿Cómo es el lugar donde vivirá la mascota (casa/depa, con o sin patio)?
            </label>
            <textarea
              name="vivienda"
              rows="3"
              value={formData.vivienda}
              onChange={handleChange}
              placeholder="Describe el espacio donde vivirá..."
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          {/* Pregunta 3 */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              3. ¿Tienes otras mascotas o experiencia previa cuidando mascotas?
            </label>
            <textarea
              name="experiencia"
              rows="3"
              value={formData.experiencia}
              onChange={handleChange}
              placeholder="Comparte tu experiencia..."
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          {/* Pregunta 4 */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              4. ¿Puedes cubrir gastos veterinarios y de cuidado?
            </label>
            <textarea
              name="gastos"
              rows="3"
              value={formData.gastos}
              onChange={handleChange}
              placeholder="Escribe tu respuesta..."
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          {/* Pregunta 5 */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              5. Describe ¿cómo es tu estilo de vida en un día cotidiano?
            </label>
            <textarea
              name="estiloVida"
              rows="3"
              value={formData.estiloVida}
              onChange={handleChange}
              placeholder="Cuéntanos un poco de ti..."
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          {/* Botón Enviar */}
          <button
            type="submit"
            className="
              mt-6 w-full py-3 rounded-full
              bg-[#ff85a2] hover:bg-[#ff6c8f]
              text-white font-bold text-lg
              shadow-md active:scale-95 transition
            "
          >
            Enviar Formulario
          </button>
        </form>
      </div>
    </div>
  );
}
