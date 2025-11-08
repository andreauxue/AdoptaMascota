import ListaMascotas from "../components/ListaMascotas";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-brand-700">Galería de Mascotas</h1>
        <Link to="/agregar" className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold hover:from-brand-600 hover:to-brand-700 shadow">
          Registrar Mascota
        </Link>
      </div>
      <ListaMascotas />
    </div>
  );
}


