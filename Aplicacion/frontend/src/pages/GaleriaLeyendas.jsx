// import React from "react";
import Lista_LeyendasMexicanas from "../components/Lista_LeyendasMexicanas";

export default function GaleriaLeyendas() {
  return (
    
    <div className="min-h-screen bg-black p-6 text-gray-100">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 text-center mb-6">
        Personajes de Leyendas Mexicanas
      </h1>
      <p className="text-center text-gray-300 mb-6">
        Karen Cristóbal Morales
      </p>
      <Lista_LeyendasMexicanas />
    </div>
  );
}
