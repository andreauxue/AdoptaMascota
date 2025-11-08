import logo from "../assets/logoRosa.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] p-6 flex flex-col items-center justify-start">
      
      {/* Logo y título */}
      <div className="flex flex-col items-center mb-12">
        <img src={logo} alt="MatchPaw Logo" className="w-50 h-24 mb-4" />
        <h1 className="text-4xl font-bold text-[#38657E] text-center">
          ¡Bienvenido a <span className="text-[#C59A6A]">MatchPaw</span>!
        </h1>
        <p className="mt-4 max-w-2xl text-center text-gray-700 text-lg">
          MatchPaw es una plataforma para conectar personas, familias e instituciones interesadas en adoptar mascotas con refugios y particulares que dan en adopción.
        </p>
      </div>

      {/* Descripción detallada */}
      <div className="max-w-4xl text-gray-800 mb-12 space-y-6">
        <p>
          Nuestro objetivo principal es facilitar y humanizar el proceso de adopción, asegurando la colocación responsable de animales mediante perfiles detallados y formularios de solicitud. Buscamos ser una solución digital en la promoción de la adopción responsable.
        </p>
      </div>

      {/* Objetivos */}
        <div className="max-w-4xl grid md:grid-cols-3 gap-6 mb-12">
            <div className="group bg-[#F0E68C] rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="font-bold text-lg mb-2">Facilitar la Adopción</h3>
                <p className="text-gray-800 text-sm">
                Simplificar el proceso de búsqueda, solicitud y aprobación de adopciones.
                </p>
            </div>

            <div className="group bg-[#F0E68C] rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="font-bold text-lg mb-2">Visibilidad de las Mascotas</h3>
                <p className="text-gray-800 text-sm">
                Proporcionar perfiles de calidad para aumentar significativamente la exposición de las mascotas disponibles.
                </p>
            </div>

            <div className="group bg-[#F0E68C] rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="font-bold text-lg mb-2">Compatibilidad</h3>
                <p className="text-gray-800 text-sm">
                Sistema de búsqueda filtrada que ayuda a encontrar mascotas compatibles con tu estilo de vida.
                </p>
            </div>
        </div>
    </div>
  );
}
