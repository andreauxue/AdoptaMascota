// Página principal de la galería de algoritmos
// Diseñada para tener un layout limpio y profesional
import ListaAlgoritmos from "../components/ListaAlgoritmos";

export default function GaleriaAlgoritmos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-10 px-4">
      
      {/* Banner superior con contexto */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Referencia Rápida de Algoritmos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Esta galería recopila algunos de los algoritmos más importantes en ciencias de la computación.
            Más allá de memorizar código, lo valioso es entender cuándo aplicar cada uno y por qué funcionan.
            La complejidad temporal importa, pero la claridad del código también.
          </p>
        </div>
      </div>

      {/* Componente de lista con todas las tarjetas */}
      <ListaAlgoritmos />

      {/* Sección adicional con recursos */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">¿Quieres profundizar?</h3>
          <p className="mb-6 text-blue-50">
            Los algoritmos son solo herramientas. Lo importante es desarrollar la intuición
            para reconocer patrones en los problemas. Practica en plataformas como Codeforces,
            AtCoder o LeetCode, y sobre todo, entiende por qué algo funciona antes de pasar al siguiente problema.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              Análisis de complejidad
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              Implementación limpia
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              Casos edge
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              Testing exhaustivo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
