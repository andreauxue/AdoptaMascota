import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";
import { mockPets, howItWorks } from "../data/mockData";

const Home = () => {
  const navigate = useNavigate();

  const featuredPets = mockPets.filter(pet => !pet.adoptada).slice(0, 3);

  const getIcon = (iconType) => {
    const icons = {
      search: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      ),
      heart: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      home: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      star: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    };
    return icons[iconType];
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Encuentra a tu <span className="text-yellow-300">Compañero Perfecto</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Miles de mascotas esperan un hogar lleno de amor. Da el primer paso para cambiar una vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                text="Explorar Mascotas"
                onClick={() => navigate("/galeria")}
                variant="secondary"
                className="text-lg px-8 py-3"
              />
              <Button
                text="Cómo Funciona"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo Funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              El proceso de adopción es simple y está diseñado para asegurar el mejor match entre tú y tu nueva mascota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 text-center h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-full mb-6">
                    {getIcon(step.icon)}
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mascotas Destacadas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce a algunas de las mascotas que están buscando un hogar amoroso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPets.map((pet) => (
              <Card
                key={pet.id}
                imagen={pet.imagen}
                nombre={pet.nombre}
                edad={pet.edad}
                especie={pet.especie}
                descripcion={pet.descripcion}
                adoptada={pet.adoptada}
                onVerMas={() => navigate("/galeria")}
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              text="Ver Todas las Mascotas"
              onClick={() => navigate("/galeria")}
              variant="primary"
              className="text-lg px-8 py-3"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Cambiar una Vida?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Cada adopción es una segunda oportunidad. Comienza tu viaje hoy y encuentra a tu nuevo mejor amigo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Crear Cuenta"
              onClick={() => navigate("/registro")}
              variant="secondary"
              className="text-lg px-8 py-3"
            />
            <Button
              text="Ver Galería"
              onClick={() => navigate("/galeria")}
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
