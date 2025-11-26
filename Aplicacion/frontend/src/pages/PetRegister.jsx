import { useState } from "react";
import logoRosa from "../assets/logoRosa.png";

export default function PetRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    especie: "",
    genero: "",
    tamano: "",
    vacunado: "",
    esterilizado: "",
    energia: "",
    descripcion: "",
    foto: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        console.log("Archivo seleccionado:", file.name, file.type, file.size);
        setFormData({
          ...formData,
          [name]: file,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Limpiar mensajes al editar
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validar que haya una foto antes de enviar
    if (!formData.foto) {
      setError("Por favor selecciona una foto");
      setLoading(false);
      return;
    }

    // Crear FormData para enviar al backend
    const data = new FormData();
    data.append("nombre", formData.nombre);
    data.append("edad", formData.edad);
    data.append("especie", formData.especie);
    data.append("genero", formData.genero);
    data.append("tamano", formData.tamano);
    data.append("vacunado", formData.vacunado);
    data.append("esterilizado", formData.esterilizado);
    data.append("energia", formData.energia);
    data.append("descripcion", formData.descripcion);
    data.append("foto", formData.foto, formData.foto.name);

    // Debug: Ver qué se está enviando
    console.log("=== Datos que se enviarán ===");
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/registrar-mascota/",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Error al registrar la mascota");
      }

      // Éxito
      setSuccess("¡Mascota registrada exitosamente!");

      // Limpiar formulario
      setFormData({
        nombre: "",
        edad: "",
        especie: "",
        genero: "",
        tamano: "",
        vacunado: "",
        esterilizado: "",
        energia: "",
        descripcion: "",
        foto: null,
      });

      // Resetear el input file manualmente
      e.target.reset();

      // Auto-ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (err) {
      setError(err.message || "Error al conectar con el servidor");
      console.error("Error:", err);

      // Auto-ocultar mensaje de error después de 5 segundos
      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[#FFE6EC] flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-pink-200">
        <div className="flex flex-col items-center mb-10">
          <img
            src={logoRosa}
            alt="MatchPaw Logo"
            className="w-40 mb-4 drop-shadow-md"
          />

          <h1 className="text-4xl font-bold text-[#000000] text-center">
            Registrar Nueva Mascota
          </h1>
          <p className="mt-4 max-w-xl text-center text-gray-700 text-base leading-relaxed">
            Completa la información de la mascota para que podamos ayudarla a
            encontrar un nuevo hogar lleno de amor.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Ejemplo: Luna"
              required
              disabled={loading}
            />
          </div>

          {/* Edad */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              Edad
            </label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Ejemplo: 3"
              min="0"
              max="30"
              required
              disabled={loading}
            />
          </div>

          {/* Especie */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              Especie
            </label>
            <select
              name="especie"
              value={formData.especie}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
              disabled={loading}
            >
              <option value="">Selecciona una especie</option>
              <option value="Conejo">Conejo</option>
              <option value="Erizo">Erizo</option>
              <option value="Gato">Gato</option>
              <option value="Hamster">Hamster</option>
              <option value="Perro">Perro</option>
              <option value="Tortuga">Tortuga</option>
            </select>
          </div>

          {/* Género */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              Género
            </label>
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
              disabled={loading}
            >
              <option value="">Selecciona una opción</option>
              <option value="Macho">Macho ♂️</option>
              <option value="Hembra">Hembra ♀️</option>
            </select>
          </div>

          {/* Tamaño */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              Tamaño
            </label>
            <select
              name="tamano"
              value={formData.tamano}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
              disabled={loading}
            >
              <option value="">Selecciona una opción</option>
              <option value="Chico">Chico</option>
              <option value="Mediano">Mediano</option>
              <option value="Grande">Grande</option>
            </select>
          </div>

          {/* Vacunado */}
          <div>
            <label className="block font-semibold text-pink-700">
              Vacunado
            </label>
            <div className="flex gap-6 mt-2">
              {["Sí", "No"].map((op) => (
                <label
                  key={op}
                  className={`flex items-center gap-2 text-gray-700 ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                    }`}
                >
                  <input
                    type="radio"
                    name="vacunado"
                    value={op}
                    checked={formData.vacunado === op}
                    onChange={handleChange}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-300 disabled:cursor-not-allowed"
                    disabled={loading}
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>

          {/* Esterilizado */}
          <div>
            <label className="block font-semibold text-pink-700">
              Esterilizado
            </label>
            <div className="flex gap-6 mt-2">
              {["Sí", "No"].map((op) => (
                <label
                  key={op}
                  className={`flex items-center gap-2 text-gray-700 ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                    }`}
                >
                  <input
                    type="radio"
                    name="esterilizado"
                    value={op}
                    checked={formData.esterilizado === op}
                    onChange={handleChange}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-300 disabled:cursor-not-allowed"
                    disabled={loading}
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>

          {/* Energía */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              Nivel de Energía
            </label>
            <select
              name="energia"
              value={formData.energia}
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
              disabled={loading}
            >
              <option value="">Selecciona una opción</option>
              <option value="Tranquilo">Tranquilo 💤</option>
              <option value="Moderado">Moderado 🙂</option>
              <option value="Muy Activo">Muy Activo ⚡</option>
            </select>
          </div>

          {/* Descripción General */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              Descripción General
            </label>
            <textarea
              name="descripcion"
              rows="4"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Ejemplo: Es una perrita muy cariñosa, le encantan los niños..."
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
              disabled={loading}
            ></textarea>
          </div>

          {/* Foto */}
          <div>
            <label className="block font-semibold text-pink-700 mb-1">
              Foto
            </label>
            <input
              type="file"
              name="foto"
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm bg-white focus:ring-2 focus:ring-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
              disabled={loading}
            />
            {formData.foto && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Archivo seleccionado:{" "}
                <span className="font-semibold">{formData.foto.name}</span> (
                {(formData.foto.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          {/* Botón para registrar mascota */}
          <button
            type="submit"
            disabled={loading}
            className={`
              mt-6 w-full py-3 rounded-full
              text-white font-bold text-lg
              shadow-md transition-all duration-200
              ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#ff85a2] hover:bg-[#ff6c8f] active:scale-95"
              }
            `}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Registrando...
              </span>
            ) : (
              "Registrar Mascota"
            )}
          </button>

          {/* Mensajes de error y éxito */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg flex items-start gap-3 animate-fade-in">
              <svg
                className="w-6 h-6 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold">Error</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg flex items-start gap-3 animate-fade-in">
              <svg
                className="w-6 h-6 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold">¡Éxito!</p>
                <p className="text-sm">{success}</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
