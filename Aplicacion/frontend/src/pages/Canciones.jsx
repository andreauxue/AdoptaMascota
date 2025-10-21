import ListaCanciones from "../components/ListaCanciones";

export default function Canciones() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Galería de Canciones
        </h1>
        <p className="mt-2 text-slate-600">
          Tarjetas temáticas por artista (Taylor Swift, Sabrina Carpenter, Olivia Rodrigo).
        </p>
      </header>
      <main>
        <ListaCanciones />
      </main>
      <footer className="pb-10 text-center text-xs text-slate-500">
        Hecho con React + Tailwind.
      </footer>
    </div>
  );
}
