import TarjetaMascota from "./TarjetaMascota";
import tomillo from "../assets/tomillo.jpg";
import erizo from "../assets/erizo.jpg";

export default function ListaMascotas() {
  const mascotas = [
    { id: 1, nombre: "Tomillo", edad: "5 meses", descripcion: "Es una bolilla", imagen: tomillo },
    { id: 2, nombre: "Erizo", edad: "9 meses", descripcion: "Cuidado porque pica", imagen: erizo },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10 place-items-center py-6 px-4">
      {mascotas.map((m) => (
        <TarjetaMascota
          key={m.id}
          nombre={m.nombre}
          edad={m.edad}
          descripcion={m.descripcion}
          imagen={m.imagen}
        />
      ))}
    </div>
  );
}
