import { BrowserRouter, Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar colorBg={"bg-blue-400"} />
      <Home />
      <Footer
        color={"bg-blue-400"}
        texto={"En MatchPaw encotramos tu mascota perfecta"}
      />
    </div>
  );
}
