import TarjetaLibro from "./TarjetaLibro.jsx";
import crimen_castigo from "../assets/crimen_castigo.avif";
import frankenstein from "../assets/frankenstein.webp";
import body_no from "../assets/body_no.webp";

export default function ListaLibros() {
    const libros = [
        { id: 1, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", año: "1866", tema: "Culpa y resarcimiento" +
                " del ser", imagen: crimen_castigo },
        { id: 2, titulo: "Frankenstein", autor: "Mary Shelley", año: "1818", tema: "Dolor y sufrimiento humano", imagen: frankenstein },
        { id: 3, titulo: "When the body says no", autor: "Gabor Maté", año: "2021", tema: "Represión de estrés", imagen: body_no },
    ];

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 place-items-center py-6 px-4">
            {libros.map((m) => (
                <TarjetaLibro
                    key={m.id}
                    titulo={m.titulo}
                    autor={m.autor}
                    año={m.año}
                    tema={m.tema}
                    imagen={m.imagen}
                />
            ))}
        </div>
    );
}
