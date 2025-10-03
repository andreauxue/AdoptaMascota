import ListaCanciones from "../components/ListaCanciones";

// Página principal de canciones
export default function SongsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <h1 className="text-4xl font-extrabold text-center text-green-500 p-8">
        Canciones Favoritas
      </h1>
      <ListaCanciones />
    </div>
  );
}
