import { useState } from "react";
import { FaPaw, FaUpload } from "react-icons/fa";

export default function AddPet() {
  const [form, setForm] = useState({
    nombre: "",
    especie: "Perro",
    edad: "",
    descripcion: "",
    imagen: "",
    genero: "macho",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mascota registrada (simulado)", form);
    alert("Mascota registrada (simulado)");
    setForm({ nombre: "", especie: "Perro", edad: "", descripcion: "", imagen: "", genero: "macho" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white border border-brand-200 rounded-2xl shadow p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center">
            <FaPaw />
          </div>
          <h1 className="text-2xl font-bold text-brand-700">Registrar Mascota</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Nombre</label>
            <input name="nombre" value={form.nombre} onChange={handleChange} required className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Especie</label>
            <select name="especie" value={form.especie} onChange={handleChange} className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500">
              <option>Perro</option>
              <option>Gato</option>
              <option>Ave</option>
              <option>Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Edad</label>
            <input name="edad" value={form.edad} onChange={handleChange} placeholder="e.g., 6 meses" className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Descripción</label>
            <textarea name="descripcion" value={form.descripcion} onChange={handleChange} rows={4} className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Género</label>
            <select name="genero" value={form.genero} onChange={handleChange} className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500">
              <option value="macho">Macho</option>
              <option value="hembra">Hembra</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Imagen (URL)</label>
            <div className="flex items-center gap-2">
              <input name="imagen" value={form.imagen} onChange={handleChange} placeholder="https://..." className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
              <span className="text-brand-600"><FaUpload /></span>
            </div>
          </div>

          <div className="md:col-span-2 mt-2">
            <button type="submit" className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold hover:from-brand-600 hover:to-brand-700 shadow">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


