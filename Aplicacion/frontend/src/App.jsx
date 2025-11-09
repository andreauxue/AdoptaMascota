import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ListaMascotas from "./components/ListaMascotas";
import Register from "./pages/Register";
import MuroMascotas from "./pages/MuroMascotas";
import Anuncio from "./pages/Anuncio";

function AppContent() {
    const location = useLocation();
    
    // Lista de rutas donde no se muestra la navbar
    const noNavbarRoutes = ['/login', '/register'];

    const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Solo muestra el Navbar si no se esta en Login o Register */}
            {shouldShowNavbar && <Navbar/>}
            
            <main className="flex-grow bg-blanco">
              <Routes>
                {/* Rutas de Autenticación */}
                <Route path="/login" element={<Register initialType="login" />} />
                <Route path="/register" element={<Register initialType="register" />} />
                
                {/* Rutas de Contenido */}
                <Route path="/muro" element={<MuroMascotas/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/mascotas" element={<ListaMascotas/>}/>
                <Route path="/publicar" element={<Anuncio />} />
              </Routes>
            </main>
            <Footer/>
        </div>
    );
}

// El componente App solo se encarga de envolver con BrowserRouter
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}