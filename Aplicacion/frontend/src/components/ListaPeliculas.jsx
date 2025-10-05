import TarjetaPelicula from "./TarjetaPelicula";
import knives_out from "../assets/knives_out__poster.jpg";
import little_women from "../assets/little_women_poster.jpg";
import the_batman from "../assets/the_batman_poster.jpg";
import wall_e from "../assets/wall-e_poster.png";

export default function ListaPeliculas() {
    const pelis = [
    { id: 1, titulo: "Knives Out", director: "Rian Johnson", año: "2019", poster: knives_out, clasificacion: "B", duracion: "2h 10min", genero:"Drama"},
    { id: 2, titulo: "Little Women", director: "Greta Gerwig", año: "2019", poster: little_women, clasificacion: "A", duracion: "2h 15min", genero:"Drama"},
    { id: 3, titulo: "The Batman", director: "Matt Reeves", año: "2022", poster: the_batman, clasificacion: "B", duracion: "2h 56min", genero:"Acción"},
    { id: 4, titulo: "WALL·E", director: "Andrew Stanton", año: "2008", poster: wall_e, clasificacion: "AA", duracion: "1h 38min", genero:"Animación"},
    ];

    return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2 lg:gap-6 place-items-center py-6 px-4">
        {pelis.map((p) => (
        <TarjetaPelicula
            key = {p.id}
            titulo = {p.titulo}
            director = {p.director}
            año = {p.año}
            poster = {p.poster}
            clasificacion = {p.clasificacion}
            duracion = {p.duracion}
            genero = {p.genero}
        />
        ))}
    </div>
    );
}