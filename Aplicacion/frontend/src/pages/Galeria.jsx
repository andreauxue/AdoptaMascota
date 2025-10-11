import ListaDestinosTuristicos from "../components/ListaDestinosTuristicos";

export default function Galeria() {
  return (
    <div className="min-h-screen bg-slate-900 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-amber-50 drop-shadow-md mb-4">
          Destinos Turísticos
        </h1>
        <h2 className="text-center text-amber-200 text-lg mb-10 max-w-xl mx-auto">
          Explora algunos de los destinos más fascinantes del mundo
        </h2>
        <input
          type="text"
          placeholder="Buscar destino..."
          className="block w-full max-w-md mx-auto mb-8 px-4 py-2 rounded-full border border-gray-100 shadow-sm focus:ring-2 focus:ring-gray-400"
        />

        <ListaDestinosTuristicos />
      </div>
    </div>
  );
}