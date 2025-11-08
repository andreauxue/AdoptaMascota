/**
 * @fileoverview App.jsx: Componente principal que define la estructura del router
 * y el layout condicional de la aplicación (Navbar/Footer).
 * @version 1.0.0
 * @author Equipo Slytherin
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// Importación de Páginas
import Home from "./pages/Home";
import Register from "./pages/Register";
import Adoptar from "./pages/Adoptar";
import PublicarMascota from "./pages/PublicarMascota"; // <-- Importación corregida y esencial
import Perfil from "./pages/Perfil"; 
import DetalleMascota from "./pages/DetalleMascota"; 
// Importación de Componentes de Layout y Seguridad
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute"; 


/**
 * Componente Layout.
 *
 * Determina si la Navbar y el Footer deben ser mostrados basándose en la ruta actual.
 * Contiene la definición de todas las rutas de la aplicación.
 *
 * @returns {JSX.Element} El esqueleto de la aplicación con rutas dinámicas.
 */
function Layout() { 
  const location = useLocation(); // Hook para obtener la ruta actual

  // Rutas donde NO se mostrará la Navbar ni el Footer (Home y Register/Login)
  const noNavbarRoutes = ["/", "/register"];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);
  
  return (
    <div className="flex flex-col min-h-screen shadow-lg">
      
      {/* Navbar Condicional */}
      {showNavbar && <Navbar />}
      
      <main className="flex-grow bg-verde-grisaseo p-6">
        <Routes>
          {/* -------------------- RUTAS PÚBLICAS -------------------- */}
          
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} />
          
          {/* El muro de adopción es accesible para todos */}
          <Route path="/adopta" element={<Adoptar />} />
          
          {/* Ruta dinámica para el detalle de la mascota */}
          <Route path="/mascota/:id" element={<DetalleMascota />} /> 

          {/* -------------------- RUTAS PROTEGIDAS -------------------- */}
          
          {/* Para Publicar y Perfil, se requiere que el usuario esté autenticado. */}
          
          <Route 
            path="/publicar" 
            element={<ProtectedRoute><PublicarMascota /></ProtectedRoute>} 
          /> 
          
          <Route 
            path="/perfil" 
            element={<ProtectedRoute><Perfil /></ProtectedRoute>} 
          />
          
          {/* ---------------------------------------------------------- */}
          
        </Routes>
      </main>
      
      {/* Footer Condicional */}
      {showNavbar && <Footer />}  
    </div>
  );
}

/**
 * Componente principal App.
 *
 * Monta el BrowserRouter para habilitar el enrutamiento y renderiza el Layout.
 * @returns {JSX.Element} El componente App.
 */
export default function App() {
  // NOTA: Asegúrate de que AuthProvider (del AuthContext) envuelva a este componente
  // en tu archivo index.js o main.jsx para que las ProtectedRoutes funcionen.
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}