import ListaLibros from "../components/ListaLibros";

export default function LibrosCyber() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto max-w-7xl">
        <div className="px-4 pt-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
            Bóveda: Alejandría Libros de Ciberseguridad
          </h1>
          <p className="mt-2 max-w-prose text-zinc-700 dark:text-zinc-300">
            Explora títulos clave para desarrollarte de manera exponencial en tu camino de readteaming y blueteaming. Mensaje Adicional: bm8gdGUgaGUgdmlzdG8geSB5YSBzZSBxdWUgdGUgdmVzIHN1cGVyIGxpbmRh (hint: está en base64)
          </p>
        </div>
        <ListaLibros />
      </div>
    </main>
  );
}
