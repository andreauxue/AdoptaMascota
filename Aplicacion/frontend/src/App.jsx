// import { BrowserRouter, Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Galeria from "./pages/Galeria";


export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col">
      <Navbar colorBg={"bg-blue-400"} />

      {/* Contenedor que se expande */}
      <main className="flex-1">
        <Galeria />
      </main>

      <Footer
        color={"bg-blue-400"}
        texto={"En MatchPaw encontramos tu mascota perfecta"}
      />
    </div>
  );
}

