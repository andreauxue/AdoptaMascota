import { useState, useEffect } from "react";

import perro1 from "../assets/img/perro2.png";
import perro2 from "../assets/img/adoptame-perro.jpg";
import perro3 from "../assets/img/imagenHome.jpg";

const imagenes = [perro1, perro2, perro3];
const extendidas = [...imagenes, imagenes[0]]; 

export default function CarruselMascotas({className}) {
  const [indice, setIndice] = useState(0);
  const [conTransicion, setConTransicion] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => prev + 1);
      setConTransicion(true);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  const handleTransitionEnd = () => {
    if (indice === imagenes.length) {
      setConTransicion(false);
      setIndice(0);
    }
  };

  useEffect(() => {
    if (!conTransicion) {
      const id = requestAnimationFrame(() => setConTransicion(true));
      return () => cancelAnimationFrame(id);
    }
  }, [conTransicion]);

  return (
    <div className="flex justify-center">
      <div
        className={`relative overflow-hidden bg-verde-grisaseo/30 rounded-3xl p-0 aspect-[4/3] shadow-inner ${className}`}
      >
        {/* Carril de slides */}
        <div
          className="flex h-full"
          style={{
            width: `${extendidas.length * 100}%`,
            transform: `translateX(-${indice * (100 / extendidas.length)}%)`,
            transition: conTransicion ? "transform 0.8s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendidas.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full h-full flex items-center justify-center"
              style={{ width: `${100 / extendidas.length}%` }}
            >
              <img
                src={img}
                alt={`Mascota ${i + 1}`}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
