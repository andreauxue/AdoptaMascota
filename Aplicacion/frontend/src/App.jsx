import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ListaMascotas from "./components/ListaMascotas";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RegistrarMascota from "./pages/RegistrarMascota";
import NotFound from "./pages/NotFound.jsx";
import Perfil from "./pages/Perfil.jsx"; // Importamos la nueva página
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-grow bg-[#C1D9C1] p-6">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/mascotas" element={<ListaMascotas/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/perfil" element={<Perfil/>}/>
              <Route path="/registrar-mascota" element={<RegistrarMascota/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}