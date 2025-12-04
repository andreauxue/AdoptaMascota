import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { mascotasService } from "../services/api";

const Gallery = () => {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("all");
  const [showAdopted, setShowAdopted] = useState(true);

  useEffect(() => {
    fetchMascotas();
  }, []);

  const fetchMascotas = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await mascotasService.getAll();
      setMascotas(data);
    } catch (err) {
      console.error("Error al cargar mascotas:", err);
      setError(err.message || "Error al cargar las mascotas. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const filteredPets = mascotas.filter(pet => {
    const matchesSearch = pet.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.descripcion.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecies = selectedSpecies === "all" ||
                          pet.especie.nombre.toLowerCase() === selectedSpecies.toLowerCase();

    const matchesAdopted = showAdopted || !pet.adoptada;

    return matchesSearch && matchesSpecies && matchesAdopted;
  });

  const species = [...new Set(mascotas.map(pet => pet.especie.nombre))];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Galería de Mascotas
            </h1>
            <p className="text-xl text-center text-blue-100 max-w-2xl mx-auto">
              Encuentra a tu compañero ideal entre nuestras mascotas disponibles
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar por nombre o descripción..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Especie
                </label>
                <select
                  value={selectedSpecies}
                  onChange={(e) => setSelectedSpecies(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="all">Todas las especies</option>
                  {species.map((especie) => (
                    <option key={especie} value={especie}>
                      {especie}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="showAdopted"
                checked={showAdopted}
                onChange={(e) => setShowAdopted(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="showAdopted" className="ml-2 text-sm text-gray-700">
                Mostrar mascotas adoptadas
              </label>
            </div>
          </div>

          {error && (
            <div className="mb-6">
              <ErrorMessage message={error} onClose={() => setError(null)} />
            </div>
          )}

          {loading ? (
            <Spinner message="Cargando mascotas..." />
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Mostrando <span className="font-semibold text-blue-600">{filteredPets.length}</span> mascota{filteredPets.length !== 1 ? 's' : ''}
                </p>
              </div>

              {filteredPets.length === 0 ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No se encontraron mascotas
                  </h3>
                  <p className="text-gray-600">
                    Intenta ajustar tus filtros de búsqueda
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                  {filteredPets.map((pet) => (
                    <Card
                      key={pet.id}
                      imagen={pet.imagen}
                      nombre={pet.nombre}
                      edad={pet.edad + " años"}
                      especie={pet.especie.nombre}
                      descripcion={pet.descripcion}
                      adoptada={pet.adoptada}
                      publicador={pet.publicador.username}
                      onAdoptar={() => alert("Funcionalidad de adopción - Por implementar")}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
