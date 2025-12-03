import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Galeria from "./pages/Galeria";
import PetRegister from "./pages/PetRegister";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetallesMascota from "./pages/DetallesMascota";
import FormularioAdopcion from "./pages/FormularioAdopcion";
import FormularioRecibido from "./pages/FormularioRecibido";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/registrar-mascota" element={<PetRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mascota/:id" element={<DetallesMascota />} />
            <Route path="/formulario-adopcion" element={<FormularioAdopcion />} />
            <Route path="/formulario-recibido" element={<FormularioRecibido />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

