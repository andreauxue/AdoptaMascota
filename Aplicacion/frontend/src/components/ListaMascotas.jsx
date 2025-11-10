import CardMascota from "./CardMascota";
import { pets } from "../data/pets";

export default function ListaMascotas() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10 place-items-center py-6 px-4">
      {pets.map((m) => (
        <CardMascota
          key={m.id}
          nombre={m.nombre}
          edad={m.edad}
          descripcion={m.descripcion}
          imagen={m.imagen}
          genero={m.genero}
          ubicacion={m.ubicacion}
          especie={m.especie}
        />
      ))}
    </div>
  );
}
