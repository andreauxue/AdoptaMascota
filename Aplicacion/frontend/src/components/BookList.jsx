import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((b) => (
        <BookCard key={b.title} {...b} />
      ))}
    </div>
  );
}


