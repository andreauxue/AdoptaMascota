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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) data.append(key, formData[key]);

    console.log("Datos enviados:");
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }

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

    e.target.reset();
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
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              placeholder="Ejemplo: Luna"
              required
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
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              placeholder="Ejemplo: 3"
              required
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
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              required
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
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              required
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
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              required
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
                  className="flex items-center gap-2 text-gray-700"
                >
                  <input
                    type="radio"
                    name="vacunado"
                    value={op}
                    checked={formData.vacunado === op}
                    onChange={handleChange}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-300"
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
                  className="flex items-center gap-2 text-gray-700"
                >
                  <input
                    type="radio"
                    name="esterilizado"
                    value={op}
                    checked={formData.esterilizado === op}
                    onChange={handleChange}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-300"
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
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              required
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
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-300"
              required
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
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-pink-200 rounded-xl p-3 shadow-sm bg-white focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          {/* Botón para registrar mascota */}
          <button
            type="submit"
            className="
              mt-6 w-full py-3 rounded-full
              bg-[#ff85a2] hover:bg-[#ff6c8f]
              text-white font-bold text-lg
              shadow-md active:scale-95 transition
            "
          >
            Registrar Mascota
          </button>
        </form>
      </div>
    </div>
  );
}
