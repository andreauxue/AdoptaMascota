import { useState } from "react";

import logoRosa from "../assets/logoRosa.png";

export default function PetRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    especie: "",
    genero: "",
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
    data.append("nombre", formData.nombre);
    data.append("edad", formData.edad);
    data.append("especie", formData.especie);
    data.append("genero", formData.genero);
    data.append("foto", formData.foto);

    console.log("Datos enviados:");
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }

    setFormData({
      nombre: "",
      edad: "",
      especie: "",
      genero: "",
      foto: null,
    });

    e.target.reset();
  };

  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col items-center mb-12">
        <img src={logoRosa} alt="MatchPaw Logo" className="w-50 h-24 mb-4" />
        <h1 className="text-4xl font-bold text-[#38657E] text-center">
          Registrar Nueva Mascota para Adopción
        </h1>
        <p className="mt-4 max-w-2xl text-center text-gray-700 text-lg">
          Este es el formulario para poder registrar una mascota que necesite un
          nuevo hogar. Por favor, completa toda la información para poder ayudar
          a encontrarle un nuevo hogar.
        </p>

        <div className="flex flex-col mb-12 mt-10 items-start">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Ejemplo: Max"
                required
              />
            </div>

            <div className="mt-5">
              <label className="block font-semibold text-gray-700">Edad</label>
              <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Ejemplo: 2(años)"
                required
              />
            </div>

            <div className="mt-5">
              <label className="block font-semibold text-gray-700">
                Especie
              </label>
              <input
                type="text"
                name="especie"
                value={formData.especie}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Ejemplo: Perro, Gato, etc."
                required
              />
            </div>

            <div className="mt-5">
              <label className="block font-semibold text-gray-700">
                Genero
              </label>
              <select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="block font-semibold text-gray-700">Foto</label>
              <input
                type="file"
                name="foto"
                accept="image/*"
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-8 bg-[#F0E68C] text-[#38657E] font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors hover:text-white"
            >
              Registrar Mascota
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
