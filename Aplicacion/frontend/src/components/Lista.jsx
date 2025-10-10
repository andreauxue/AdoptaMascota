// Importamos React para usar JSX
import React from "react";
// Importamos el componente Tarjeta (el que muestra cada libro)
import Tarjeta from "./Tarjeta";

// Importamos las imágenes que usaremos en las tarjetas
import img1 from "../assets/img/principito.jpg";
import img2 from "../assets/img/hp.jpg";
import img3 from "../assets/img/images.jpg";
import img4 from "../assets/img/rayas.jpg";
import img5 from "../assets/img/md.jpg";
import img6 from "../assets/img/oyp.jpg";

// Definimos el componente funcional "Lista"
// Este componente contendrá varias tarjetas de libros
const Lista = () => {
  // Arreglo de objetos, donde cada objeto representa un libro
  // Contiene título, autor, descripción, información extra e imagen
  const tarjetas = [
    {
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      descripcion: "Un clásico de la literatura infantil y filosófica.",
      infoExtra: "Publicado en 1943, aborda temas de amistad, amor y reflexión sobre la vida.",
      imagen: img1,
    },
    {
      titulo: "Harry Potter",
      autor: "J.K. Rowling",
      descripcion: "La saga de magia y aventuras del joven mago.",
      infoExtra: "Contiene 7 libros publicados entre 1997 y 2007, muy popular en todo el mundo.",
      imagen: img2,
    },
    {
      titulo: "Cien Años de Soledad",
      autor: "Gabriel García Márquez",
      descripcion: "Una novela emblemática del realismo mágico latinoamericano.",
      infoExtra: "Publicada en 1967, relata la historia de la familia Buendía a lo largo de varias generaciones.",
      imagen: img3,
    },
    {
      titulo: "El niño con el pijama de rayas",
      autor: "John Boyne",
      descripcion: "Una historia conmovedora ambientada en la Segunda Guerra Mundial.",
      infoExtra: "Publicada en 2006, narra la amistad entre un niño alemán y un niño judío en un campo de concentración.",
      imagen: img4,
    },
    {
      titulo: "Moby Dick",
      autor: "Herman Melville",
      descripcion: "La gran novela sobre la obsesión de cazar una ballena blanca.",
      infoExtra: "Publicado en 1851, es un clásico de la literatura estadounidense sobre aventura y destino.",
      imagen: img5,
    },
    {
      titulo: "Orgullo y Prejuicio",
      autor: "Jane Austen",
      descripcion: "Una historia de amor y crítica social en la Inglaterra del siglo XIX.",
      infoExtra: "Publicado en 1813, destaca por su ironía y desarrollo de personajes femeninos fuertes.",
      imagen: img6,
    },
  ];

  // Retornamos el JSX que muestra las tarjetas
  return (
    <div
      // Contenedor principal con una cuadrícula responsiva
      // 1 columna en pantallas pequeñas, 2 en medianas, 3 en grandes
      // gap-8 añade espacio entre las tarjetas
      // justify-items-center centra las tarjetas en su celda
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center"
    >
      {/* Recorremos el arreglo de tarjetas y creamos una <Tarjeta> por cada elemento */}
      {tarjetas.map((tarjeta, index) => (
        // Cada elemento necesita una key única (aquí usamos el índice)
        <div key={index} className="animate-fadeIn">
          {/* Pasamos todas las propiedades del objeto como props usando el spread operator */}
          <Tarjeta {...tarjeta} />
        </div>
      ))}
    </div>
  );
};

// Exportamos el componente para usarlo en otros archivos
export default Lista;
