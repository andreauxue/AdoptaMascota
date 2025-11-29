// Componente para mostrar información de algoritmos clásicos
// Pensado para estudiantes y competidores que quieran un vistazo rápido de complejidad y uso
import { FaCode, FaClock, FaChartLine } from "react-icons/fa";

export default function TarjetaAlgoritmo({ titulo, categoria, complejidad, descripcion, imagen, usoComun }) {
  
  // Función auxiliar para determinar el color del badge según la categoría
  const obtenerColorCategoria = (cat) => {
    const colores = {
      "Ordenamiento": "bg-blue-500",
      "Búsqueda": "bg-green-500",
      "Grafos": "bg-purple-500",
      "Divide y Conquista": "bg-orange-500",
      "Programación Dinámica": "bg-red-500",
      "Greedy": "bg-yellow-500"
    };
    return colores[cat] || "bg-gray-500";
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 transform hover:-translate-y-1">
      
      {/* Imagen con overlay del nombre del algoritmo */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h2 className="text-white text-2xl font-bold p-4 flex items-center gap-2">
            <FaCode className="text-blue-400" />
            {titulo}
          </h2>
        </div>
      </div>

      {/* Contenido principal de la tarjeta */}
      <div className="p-5">
        
        {/* Badge de categoría */}
        <div className="mb-3">
          <span className={`${obtenerColorCategoria(categoria)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
            {categoria}
          </span>
        </div>

        {/* Descripción del algoritmo */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {descripcion}
        </p>

        {/* Complejidad temporal */}
        <div className="flex items-center gap-2 mb-3 text-sm">
          <FaClock className="text-blue-500" />
          <span className="font-semibold text-gray-700">Complejidad:</span>
          <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono">
            {complejidad}
          </code>
        </div>

        {/* Caso de uso común */}
        <div className="flex items-start gap-2 text-sm">
          <FaChartLine className="text-green-500 mt-1" />
          <div>
            <span className="font-semibold text-gray-700">Uso común:</span>
            <p className="text-gray-600 mt-1">{usoComun}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
