import TarjetaMascota from "./TarjetaMascota";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../apiService";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaTimes, FaUserPlus, FaSignInAlt, FaPaw, FaSearch, FaInfoCircle } from 'react-icons/fa';

export default function ListaMascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el buscador
  const [showAuthModal, setShowAuthModal] = useState(false); // Modal de "Necesitas cuenta"
  const [showAdoptionModal, setShowAdoptionModal] = useState(false); // Modal de "Próximamente"
  
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Cargar mascotas
  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        const response = await api.get("/api/mascotas/");
        console.log("Respuesta API:", response);
        const data = Array.isArray(response) ? response : [];
        setMascotas(data);
      } catch (error) {
        console.error("Error al obtener mascotas:", error);
        setMascotas([]);
      }
    };

    fetchMascotas();
  }, [location]);

  // Filtrar mascotas según la búsqueda
  const filteredMascotas = mascotas.filter(m => 
      m.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Manejador del clic en "Registrar Mascota"
  const handleRegistrarClick = () => {
    if (user) {
      navigate("/registrar-mascota");
    } else {
      setShowAuthModal(true);
    }
  };

  // Manejador del clic en Adoptar
  const handleAdoptarClick = () => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      // Si el usuario tiene sesión, mostramos el modal de "Próximamente"
      setShowAdoptionModal(true);
    }
  };

  const modalButtonStyle = "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#10403B] hover:bg-[#243B55] transition-all duration-300 text-white font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:ring-2 hover:ring-white/50 hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-0 font-belleza";

  return (
    <div className="relative py-6 px-4 min-h-screen">
      
      {/* Header: Título y Botón */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-[#127369]/20 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#243B55] font-aclonica text-center md:text-left">
          Mascotas disponibles para adoptar
        </h1>

        <button
          onClick={handleRegistrarClick}
          className="px-6 py-3 rounded-lg bg-[#127369] text-white font-semibold text-center hover:bg-[#243B55] hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md transition-all duration-300 cursor-pointer font-belleza whitespace-nowrap"
        >
          Registrar Mascota
        </button>
      </div>

      {/* Barra de Búsqueda */}
      <div className="max-w-md mx-auto mb-10 relative">
        <div className="relative group">
            <input 
                type="text"
                placeholder="Buscar mascota por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-[#127369]/50 focus:border-[#127369] focus:ring-4 focus:ring-[#127369]/20 outline-none transition-all shadow-md bg-white/80 backdrop-blur-sm"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#127369] text-lg group-hover:scale-110 transition-transform"/>
        </div>
      </div>

      {/* Cuadrícula de Mascotas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {filteredMascotas.length > 0 ? (
          filteredMascotas.map((m) => (
            <div key={m.id} className="w-full h-full">
              <div className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#243B55]/50">
                <TarjetaMascota
                  nombre={m.nombre}
                  edad={m.edad}
                  descripcion={m.descripcion}
                  imagen={m.imagen}
                  genero={m.genero}
                  ubicacion={m.ubicacion}
                  onAdoptarClick={handleAdoptarClick}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
             <p className="text-[#243B55] text-lg md:text-xl font-aclonica mt-12">
               {searchTerm ? 'No se encontraron mascotas con ese nombre.' : 'No hay mascotas registradas aún. ¡Sé el primero en registrar una!'}
             </p>
          </div>
        )}
      </div>

      {/* Modal de Autenticación (Login requerido) */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100 animate-in fade-in zoom-in duration-200 border-4 border-[#127369]">
            
            <div className="relative bg-[#127369] p-4 flex justify-end">
              <button 
                onClick={() => setShowAuthModal(false)}
                className="text-white hover:text-red-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
              >
                <FaTimes size={24} />
              </button>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <FaPaw className="text-white/20 text-6xl" />
              </div>
            </div>

            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-[#243B55] mb-4 font-aclonica">
                ¡Necesitas una cuenta!
              </h2>
              <p className="text-gray-600 mb-8 font-belleza text-lg leading-relaxed">
                Para poder adoptar o registrar una mascota y ayudarla a encontrar un hogar, es necesario que tengas una cuenta registrada.
              </p>

              <div className="flex flex-col gap-4">
                <button onClick={() => navigate("/register")} className={modalButtonStyle}>
                  <FaUserPlus className="text-lg" /> Crear Cuenta
                </button>
                <button onClick={() => navigate("/login")} className={modalButtonStyle}>
                  <FaSignInAlt className="text-lg" /> Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de "Próximamente" (Usuario logueado) */}
      {showAdoptionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100 animate-in fade-in zoom-in duration-200 border-4 border-[#243B55]">
            
            <div className="relative bg-[#243B55] p-4 flex justify-end">
              <button 
                onClick={() => setShowAdoptionModal(false)}
                className="text-white hover:text-red-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
              >
                <FaTimes size={24} />
              </button>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <FaInfoCircle className="text-white/20 text-6xl" />
              </div>
            </div>

            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-[#127369] mb-4 font-aclonica">
                ¡Gracias por tu interés!
              </h2>
              <p className="text-gray-600 mb-6 font-belleza text-lg leading-relaxed">
                Por ahora no es posible iniciar el proceso de adopción automáticamente, pero estamos trabajando duro para habilitarlo pronto.
              </p>
              <p className="text-[#243B55] font-bold font-belleza text-lg">
                ¡Estate atento a las próximas actualizaciones!
              </p>
              
              <div className="mt-8">
                <button 
                    onClick={() => setShowAdoptionModal(false)}
                    className="w-full bg-[#243B55] text-white px-6 py-3 rounded-lg hover:bg-[#10403B] transition-colors duration-300 shadow-lg font-belleza font-semibold"
                >
                    Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}