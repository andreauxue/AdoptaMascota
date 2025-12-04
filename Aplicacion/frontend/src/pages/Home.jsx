import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Boton from "../components/Boton";
import { FaHeart, FaPaw, FaSearch, FaDog, FaPlusCircle, FaCog } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, rol } = useContext(UserContext);

  // 🔥 BOTONES DINÁMICOS
  const renderBotonesPorRol = () => {
    if (!isAuthenticated) {
      // Visitante
      return (
        <>
          <Boton
            texto="Ver mascotas"
            icono={<FaSearch className="text-lg" />}
            onClick={() => navigate("/mascotas")}
          />
          <Boton
            texto="Registrarme"
            color="bg-pink-500 hover:bg-pink-600"
            icono={<FaPaw className="text-lg" />}
            onClick={() => navigate("/register")}
          />
        </>
      );
    }

    // Usuario autenticado
    if (rol === "admin") {
      return (
        <>
          <Boton
            texto="Panel Admin"
            icono={<FaCog className="text-lg" />}
            onClick={() => navigate("/admin")}
          />
          <Boton
            texto="Registrar Especie"
            color="bg-pink-500 hover:bg-pink-600"
            icono={<FaPlusCircle className="text-lg" />}
            onClick={() => navigate("/registrar-especie")}
          />
          <Boton
            texto="Registrar Mascota"
            color="bg-pink-500 hover:bg-pink-600"
            icono={<FaPlusCircle className="text-lg" />}
            onClick={() => navigate("/registrar-mascota")}
          />
        </>
      );
    }

    if (rol === "publicador") {
      return (
        <>
          <Boton
            texto="Mis Mascotas"
            icono={<FaDog className="text-lg" />}
            onClick={() => navigate("/publicador")}
          />
          <Boton
            texto="Registrar Mascota"
            color="bg-pink-500 hover:bg-pink-600"
            icono={<FaPlusCircle className="text-lg" />}
            onClick={() => navigate("/registrar-mascota")}
          />
        </>
      );
    }

    if (rol === "adoptante") {
      return (
        <>
          <Boton
            texto="Ver mascotas"
            icono={<FaDog className="text-lg" />}
            onClick={() => navigate("/mascotas")}
          />
          <Boton
            texto="Mi Panel"
            color="bg-pink-500 hover:bg-pink-600"
            icono={<FaHeart className="text-lg" />}
            onClick={() => navigate("/adoptante")}
          />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Sección principal */}
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <FaHeart className="text-4xl text-pink-500 animate-pulse" />
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              Adopta Amor
            </h1>
          </div>

          <h2 className="text-2xl lg:text-3xl font-semibold text-pink-700 mb-6">
            {isAuthenticated
              ? rol === "admin"
                ? "Bienvenido, administrador"
                : rol === "publicador"
                ? "Bienvenido, publicador"
                : "¡Bienvenido, adoptante!"
              : "Encuentra a tu compañero perfecto"}
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {isAuthenticated
              ? rol === "admin"
                ? "Gestiona el sistema, las especies y todas las mascotas desde un solo lugar."
                : rol === "publicador"
                ? "Registra y administra las mascotas que deseas publicar para adopción."
                : "Explora, elige y adopta a tu nuevo mejor amigo peludo."
              : "Miles de mascotas esperan un hogar lleno de amor. ¡Cambia una vida hoy!"}
          </p>

          {/* Botones dinámicos según rol */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {renderBotonesPorRol()}
          </div>
        </div>

        {/* Imagen lateral */}
        <div className="lg:w-1/2 relative">
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
              alt="Perro y gato juntos"
              className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200 rounded-full opacity-50 animate-float"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-300 rounded-full opacity-30 animate-float animation-delay-2000"></div>
        </div>
      </div>

      {/* Sección de beneficios */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-pink-600 mb-12">
            ¿Por qué adoptar con nosotros?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors">
              <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-pink-700 mb-2">
                Amor Garantizado
              </h4>
              <p className="text-gray-600">Cada mascota viene con amor infinito.</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors">
              <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPaw className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-pink-700 mb-2">
                Salud Verificada
              </h4>
              <p className="text-gray-600">Control veterinario completo.</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors">
              <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-pink-700 mb-2">
                Seguimiento
              </h4>
              <p className="text-gray-600">Apoyo durante la adaptación.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Llamado a la acción final */}
      <div className="bg-gradient-to-r from-pink-400 to-pink-500 py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para cambiar una vida?
          </h3>
          <p className="text-pink-100 text-lg mb-6 max-w-2xl mx-auto">
            Miles de mascotas esperan un hogar. Tu decisión puede marcar la diferencia.
          </p>
          <Boton
            texto={isAuthenticated ? "Ver mascotas" : "Comenzar ahora"}
            color="bg-pink-600 text-white hover:bg-pink-700"
            onClick={() => navigate("/mascotas")}
          />
        </div>
      </div>
    </div>
  );
}
