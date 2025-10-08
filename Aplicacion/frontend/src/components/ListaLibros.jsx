import TarjetaLibro from "./TarjetaLibro";
import web from "../assets/web.jpg";
import malware from "../assets/malware.jpg";
import forense from "../assets/forense.jpg";

const libros = [
  {
    titulo: "The Web Application Hacker's Handbook",
    autor: "D. Stuttard & M. Pinto",
    año: 2011,
    imagen:
      web,
    descripcion:
      "Guía avanzada para explotar y asegurar aplicaciones web: técnicas, vectores y metodologías.",
    etiquetas: ["web", "pentesting", "appsec"],
  },
  {
    titulo: "Practical Malware Analysis",
    autor: "M. Sikorski & A. Honig",
    año: 2012,
    imagen:
      malware,
    descripcion:
      "Análisis estático y dinámico de malware con laboratorios prácticos paso a paso.",
    etiquetas: ["malware", "reversing"],
  },
  {
    titulo: "The Art of Memory Forensics",
    autor: "M. Ligh et al.",
    año: 2014,
    imagen:
      forense,
    descripcion:
      "Forense de memoria en Windows, Linux y Mac: técnicas, herramientas y casos reales.",
    etiquetas: ["forense", "memoria"],
  },
];

export default function ListaLibros() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Libros de Ciberseguridad
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Selección para pentesters, analistas forense y reversing experimentados.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {libros.map((libro) => (
          <TarjetaLibro key={libro.titulo} {...libro} />
        ))}
      </div>
    </section>
  );
}
