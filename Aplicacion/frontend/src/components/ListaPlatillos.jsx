import TarjetaPlatillo from "./TarjetaPlatillo";
import tacos from "../assets/tacos.jpg";
import sushi from "../assets/sushi.jpg";
import pasta from "../assets/pasta.jpg";

export default function ListaPlatillos() {
  const platillos = [
    {
      id: 1,
      nombre: "Tacos al Pastor",
      origen: "México",
      descripcion: "Deliciosos tacos de cerdo marinados con especias tradicionales.",
      precio: 80,
      imagen: tacos,
    },
    {
      id: 2,
      nombre: "Sushi",
      origen: "Japón",
      descripcion: "Rollo de arroz con pescado fresco, verduras y algas.",
      precio: 150,
      imagen: sushi,
    },
    {
      id: 3,
      nombre: "Pasta",
      origen: "Italia",
      descripcion: "Fideos acompañados de salsa cremosa, tomate, hierbas y queso.",
      precio: 130,
      imagen: pasta,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 place-items-center py-6 px-4">
      {platillos.map((p) => (
        <TarjetaPlatillo
          key={p.id}
          nombre={p.nombre}
          origen={p.origen}
          descripcion={p.descripcion}
          precio={p.precio}
          imagen={p.imagen}
        />
      ))}
    </div>
  );
}
