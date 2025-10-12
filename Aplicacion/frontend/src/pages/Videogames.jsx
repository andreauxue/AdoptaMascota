import Lista from "../components/ListaVideojuegos";

function Galeria() {
  return (
    <main className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-teal-400">Galería de Videojuegos</h1>
      <Lista />
    </main>
  );
}

export default Galeria;
