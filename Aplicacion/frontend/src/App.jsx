import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Galeria from "./pages/Galeria";


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>

        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/galeria" element={<Galeria/>}/>
          </Routes>
        </main>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

