import React from "react";

const BookCard = ({ title, author, description, image }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-65 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-end p-3">
          <p className="text-white text-lg line-clamp-2">{description}</p>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">por {author}</p>
        <button className="mt-2 w-full py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition">
          Ver más
        </button>
      </div>
    </div>
  );
};


export default BookCard;
