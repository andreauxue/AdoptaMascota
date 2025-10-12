import BookList from "../components/BookList";

const books = [
  {
    title: "Competitive Programming 4",
    author: "Steven Halim & Felix Halim",
    coverUrl: "/books/cp4.jpg",
    description: "Guía práctica de algoritmos y técnicas para concursos.",
    level: "Advanced",
    rating: 5,
    pages: 1024,
    buyUrl: "https://www.lulu.com/shop/suhendry-effendy-and-felix-halim-and-steven-halim/competitive-programming-4-book-1/paperback/product-1q2pjn4n.html?page=1&pageSize=4",
  },
  {
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    coverUrl: "/books/ctci.jpg",
    description: "Patrones, tips y problemas típicos de entrevistas técnicas.",
    level: "Intermediate",
    rating: 4,
    pages: 696,
    buyUrl: "https://www.crackingthecodinginterview.com/",
  },
  {
    title: "Introduction to Algorithms (CLRS)",
    author: "Cormen, Leiserson, Rivest, Stein",
    coverUrl: "/books/clrs.jpg",
    description: "Texto clásico y riguroso de algoritmos y estructuras de datos.",
    level: "Advanced",
    rating: 5,
    pages: 1312,
    buyUrl: "https://www.amazon.com/Introduction-Algorithms-Thomas-H-Cormen/dp/0262033844",
  },
];

export default function Books() {
  return (
    <div className="min-h-screen bg-emerald-50 p-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900">Libros de Programación</h1>
          <p className="text-stone-600">Selección de títulos para preparación algorítmica y entrevistas</p>
        </header>
        <BookList books={books} />
      </div>
    </div>
  );
}


