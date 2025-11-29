// Lista de algoritmos fundamentales para programación competitiva
// Incluye los más usados en Codeforces, AtCoder y entrevistas técnicas
import TarjetaAlgoritmo from "./TarjetaAlgoritmo";

export default function ListaAlgoritmos() {
  
  // Dataset con algoritmos clásicos que todo competitivo debería conocer
  const algoritmos = [
    {
      titulo: "Merge Sort",
      categoria: "Ordenamiento",
      complejidad: "O(n log n)",
      descripcion: "Algoritmo de ordenamiento estable basado en divide y conquista. Divide el arreglo en mitades, las ordena recursivamente y luego las combina. Es especialmente útil cuando necesitas estabilidad en el ordenamiento.",
      imagen: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop",
      usoComun: "Ideal para ordenar estructuras enlazadas y cuando necesitas garantizar O(n log n) en el peor caso."
    },
    {
      titulo: "Binary Search",
      categoria: "Búsqueda",
      complejidad: "O(log n)",
      descripcion: "Búsqueda eficiente en arreglos ordenados mediante división repetida del espacio de búsqueda. Fundamental en problemas de optimización donde puedes definir una función monótona.",
      imagen: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      usoComun: "Búsqueda en arrays ordenados, búsqueda binaria sobre la respuesta, encontrar límites en rangos."
    },
    {
      titulo: "Dijkstra",
      categoria: "Grafos",
      complejidad: "O((V + E) log V)",
      descripcion: "Encuentra el camino más corto desde un nodo fuente a todos los demás en grafos con pesos no negativos. Usa una cola de prioridad para explorar nodos en orden de distancia creciente.",
      imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      usoComun: "Rutas más cortas en mapas, redes de transporte, problemas de optimización de costos."
    },
    {
      titulo: "Quick Sort",
      categoria: "Divide y Conquista",
      complejidad: "O(n log n) promedio",
      descripcion: "Algoritmo de ordenamiento in-place que elige un pivote y particiona el arreglo. Muy eficiente en la práctica aunque tiene peor caso O(n²). La randomización mejora su comportamiento.",
      imagen: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop",
      usoComun: "Ordenamiento general cuando el espacio extra es limitado. Base de muchas implementaciones de sort() en lenguajes."
    },
    {
      titulo: "Knapsack DP",
      categoria: "Programación Dinámica",
      complejidad: "O(n × W)",
      descripcion: "Problema clásico de optimización: maximizar valor con límite de peso. Enseña la esencia de DP: construir soluciones óptimas a partir de subproblemas óptimos.",
      imagen: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
      usoComun: "Problemas de optimización con restricciones, asignación de recursos, subset sum."
    },
    {
      titulo: "Kruskal MST",
      categoria: "Greedy",
      complejidad: "O(E log E)",
      descripcion: "Encuentra el árbol de expansión mínima ordenando aristas por peso y agregándolas si no forman ciclo. Usa Union-Find para detectar ciclos eficientemente.",
      imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      usoComun: "Diseño de redes con costo mínimo, clustering, problemas de conectividad."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      
      {/* Header de la galería */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Algoritmos Fundamentales
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Una colección de algoritmos clásicos que forman la base de la programación competitiva.
          Cada uno tiene su lugar en el arsenal de un buen programador.
        </p>
      </div>

      {/* Grid responsive de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {algoritmos.map((algo, index) => (
          <TarjetaAlgoritmo
            key={index}
            titulo={algo.titulo}
            categoria={algo.categoria}
            complejidad={algo.complejidad}
            descripcion={algo.descripcion}
            imagen={algo.imagen}
            usoComun={algo.usoComun}
          />
        ))}
      </div>

      {/* Footer con nota adicional */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Estos algoritmos son fundamentales, pero recuerda: entender cuándo NO usarlos 
          es tan importante como saber implementarlos.
        </p>
      </div>
    </div>
  );
}
