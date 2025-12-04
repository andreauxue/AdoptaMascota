import { useState } from "react";
import { FaLeaf } from "react-icons/fa";

export default function FormularioEspecie({ onSubmit }) {
  const [nombre, setNombre] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      alert("El nombre de la especie es obligatorio");
      return;
    }

    setIsLoading(true);
    onSubmit({ nombre });
    setNombre("");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-pink-200"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-md">
            <FaLeaf className="text-4xl text-white" />
          </div>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent mt-4">
            Registrar Especie
          </h2>

          <p className="text-gray-600 mt-2">
            Agrega una nueva especie para clasificar a las mascotas.
          </p>
        </div>

        {/* Campo */}
        <div className="space-y-4">
          <input
            type="text"
            value={nombre}
            placeholder="Ej: Perro, Gato, Ave..."
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 
                       focus:ring-pink-400 focus:border-pink-400 transition text-gray-700"
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full mt-6 py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-lg hover:shadow-pink-200"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Guardando...
            </span>
          ) : (
            "Registrar Especie"
          )}
        </button>
      </form>
    </div>
  );
}
