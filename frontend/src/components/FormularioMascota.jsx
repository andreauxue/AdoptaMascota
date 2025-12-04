import { useState, useEffect } from "react";
import { FaPaw, FaImage } from "react-icons/fa";

export default function FormularioMascota({ onSubmit }) {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    edad: "",
    vacunado: false,
    especie_id: "",
    imagen: null,
  });

  const [especies, setEspecies] = useState([]);

  // Cargar especies
  useEffect(() => {
    fetch("http://127.0.0.1:8005/api/especies/")
      .then((res) => res.json())
      .then((data) => setEspecies(data))
      .catch((err) => console.error("Error cargando especies:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-pink-200"
      >
        {/* Encabezado */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-md">
            <FaPaw className="text-4xl text-white" />
          </div>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent mt-4">
            Registrar Mascota
          </h2>

          <p className="text-gray-600 mt-2">
            Completa la información para agregar una nueva mascota.
          </p>
        </div>

        {/* Campos */}
        <div className="space-y-4">

          {/* Nombre */}
          <input
            name="nombre"
            placeholder="Nombre de la mascota"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 
                       focus:ring-pink-400 focus:border-pink-400 transition"
          />

          {/* Descripción */}
          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={form.descripcion}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl h-28 focus:ring-2 
                       focus:ring-pink-400 focus:border-pink-400 transition"
          />

          {/* Edad */}
          <input
            type="number"
            name="edad"
            placeholder="Edad"
            value={form.edad}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 
                       focus:ring-pink-400 focus:border-pink-400 transition"
          />

          {/* Vacunado */}
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              name="vacunado"
              checked={form.vacunado}
              onChange={handleChange}
              className="w-5 h-5 accent-pink-500 cursor-pointer"
            />
            <span className="text-gray-700">Vacunado</span>
          </label>

          {/* Select de especies */}
          <select
            name="especie_id"
            value={form.especie_id}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl text-gray-700 
                       focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
          >
            <option value="">Selecciona una especie</option>
            {especies.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nombre}
              </option>
            ))}
          </select>

          {/* Imagen */}
          <label
            className="flex items-center justify-center gap-3 bg-pink-50 border border-pink-200 
                       py-4 px-4 rounded-xl cursor-pointer hover:bg-pink-100 
                       transition shadow-sm"
          >
            <FaImage className="text-pink-500 text-xl" />
            <span className="text-gray-700">
              {form.imagen ? "Imagen seleccionada" : "Subir imagen"}
            </span>

            <input
              type="file"
              name="imagen"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
              required
            />
          </label>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full mt-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 
                     hover:from-pink-600 hover:to-pink-700 text-white rounded-xl 
                     font-semibold shadow-lg hover:shadow-pink-200 transition-all"
        >
          Registrar Mascota
        </button>
      </form>
    </div>
  );
}
