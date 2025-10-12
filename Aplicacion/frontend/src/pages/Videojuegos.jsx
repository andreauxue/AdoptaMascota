import ListaVideojuegos from "../components/ListaVideojuegos";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white p-6">
      <h1 className="text-4xl font-extrabold text-center text-indigo-400 drop-shadow-lg mb-10 tracking-wide">
         Colección de Videojuegos
      </h1>

      <p className="text-center text-indigo-200 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
        Esos son algunos de mis videojuegos favoritos, que he seguido a lo largo del tiempo. 
        ¡Espero y puedas probarlos en algún momento!
      </p>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-lg border border-indigo-800/30">
        <ListaVideojuegos />
      </div>
    </div>
  );
}
