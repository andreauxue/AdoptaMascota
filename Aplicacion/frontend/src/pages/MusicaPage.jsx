import ListaMusica from "../components/ListaMusica";

export default function MusicaPage() {
  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Galería Musical
      </h1>
      <ListaMusica/>
    </div>
  );
}
