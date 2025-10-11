import React from "react";
import BookCard from "./TarjetaLibro";
import hunger from "../assets/hunger.jpeg";
import neverSplit from "../assets/never.png";
import cien from "../assets/cien.jpeg";

const books = [
  {
    title: "Los juegos del hambre",
    author: "Suzanne Collins",
    description: "Una historia distópica sobre la lucha por la supervivencia.",
    image: hunger
  },
  {
    title: "Never Split the Difference",
    author: "Chris Voss",
    description: "Un libro sobre técnicas de negociación efectivas.",
    image: neverSplit
  },
  {
    title: "100 Años de Soledad",
    author: "Gabriel García Márquez",
    description: "Una novela sobre la familia Buendía y el pueblo de Macondo.",
    image: cien
  }
];

const BookList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
};

export default BookList;