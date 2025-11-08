/**
 * @fileoverview App.jsx: Componente principal que define la estructura del router
 * y el layout condicional de la aplicación (Navbar/Footer).
 * @version 1.0.1 (Modificación de visibilidad de Navbar/Footer)
 * @author Equipo Slytherin
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// Importación de Páginas
import Home from "./pages/Home";
import Register from "./pages/Register";
import Adoptar from "./pages/Adoptar";
import PublicarMascota from "./pages/PublicarMascota"; 
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
  const location = useLocation(); 

  // Rutas donde NO se mostrará la Navbar ni el Footer (SOLO HOME)
  // De esta manera, /register SÍ muestra la Navbar para permitir navegación.
  const noNavbarRoutes = ["/"]; 
  const showNavbar = !noNavbarRoutes.includes(location.pathname);
  
  return (
    <div className="flex flex-col min-h-screen shadow-lg">
      
      {/* Navbar Condicional */}
      {showNavbar && <Navbar />}
      
      <main className="flex-grow bg-verde-grisaseo p-6">
        <Routes>
          {/* -------------------- RUTAS PÚBLICAS -------------------- */}
          
          <Route path="/" element={<Home />} /> 
          
          {/* Al entrar a /register, la Navbar es visible */}
          <Route path="/register" element={<Register />} />
          
          <Route path="/adopta" element={<Adoptar />} />
          <Route path="/mascota/:id" element={<DetalleMascota />} /> 

          {/* -------------------- RUTAS PROTEGIDAS -------------------- */}
          
          <Route 
            path="/publicar" 
            element={<ProtectedRoute><PublicarMascota /></ProtectedRoute>} 
          /> 
          
          <Route 
            path="/perfil" 
            element={<ProtectedRoute><Perfil /></ProtectedRoute>} 
          />
          
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
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}