import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ListaMascotas from "./components/ListaMascotas";
import Register from "./pages/Register";

//Componente Layout que va a mostrar e navbar dependiendo de la pagina

function Layout() { 
  const location = useLocation();

  //Definimos las rutas que no queremos Navbar
  const noNavbarRoutes = ["/", "/register"];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);
  
  return (
    <div className="flex flex-col min-h-screen shadow-lg">
      {showNavbar && <Navbar />}
      <main className="flex-grow bg-verde-grisaseo p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mascotas" element={<ListaMascotas />} />
          <Route path="/register" element={<Register />} />
          </Routes>
      </main>
      <Footer />  
    </div>
  );

}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}