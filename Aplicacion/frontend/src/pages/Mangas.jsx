import ListaManga from "../components/ListaManga";

export default function Mangas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
            Mangas Más Vendidos y Conocidos
          </h1>
          <p className="text-lg text-gray-600">
            Descubre las series de manga/anime más populares del mundo
          </p>
        </div>
        <ListaManga />
      </div>
    </div>
  );
}