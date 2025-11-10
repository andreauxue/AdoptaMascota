import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Galeria from "./pages/Galeria";
import PetRegister from "./pages/PetRegister";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./components/Protected";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>

        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/galeria" element={<Galeria/>}/>
            <Route path="/registrar-mascota" element={<PetRegister/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </main>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

