import React from "react";
import BookList from "../components/ListaLibros";

const BooksPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-center py-6">Galería de Libros</h1>
      <BookList />
    </div>
  );
};

export default BooksPage;
