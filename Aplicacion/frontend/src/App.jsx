import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ListaMascotas from "./components/ListaMascotas";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-blanco">
          <Routes>
            <Route path="/login" element={<Register initialType="login" />} />
            <Route path="/register" element={<Register initialType="register" />} />
            <Route path="/" element={<Home/>}/>
            <Route path="/mascotas" element={<ListaMascotas/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}