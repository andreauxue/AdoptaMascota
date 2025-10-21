import ListaVideojuegos from "../components/ListaVideojuegos";

export default function VHome() {
  return (
    <div className="min-h-screen bg-rose-200 p-6">
      <h1 className="text-3xl font-bold text-center text-slate-900 mb-6">Lista de Videojuegos</h1>
      <ListaVideojuegos />
    </div>
  );
}
