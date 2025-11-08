import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ListaMascotas from "./components/ListaMascotas";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import Logout from "./pages/Logout";
import AddPet from "./pages/AddPet";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow bg-brand-50 p-6">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mascotas" element={<ListaMascotas/>}/>
            <Route path="/galeria" element={<Gallery/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/agregar" element={<AddPet/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}