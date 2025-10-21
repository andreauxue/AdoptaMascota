import TarjetaPokemon from "./TarjetaPokemon ";
import pichu from "../assets/pichu.jpg"
import piplup from "../assets/piplup.png"
import jigglypuff from "../assets/jigglypuff.jpeg"

export default function ListaPokemon() {
    const pokemon = [
        {id: 1, nombre: "Pichu", tipo: "Eléctrico", descripcion: "Da toques", imagen: pichu},
        {id: 2, nombre: "Piplup", tipo: "Agua", descripcion: "Siempre tiene frio", imagen: piplup},
        {id: 3, nombre: "Jigglypuff", tipo: "Normal", descripcion: "Duerme mucho", imagen: jigglypuff}
    ];

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {pokemon.map((m) => (
                <TarjetaPokemon
                key={m.id}
                nombre={m.nombre}
                tipo={m.tipo}
                descripcion={m.descripcion}
                imagen={m.imagen}
                />
            ))}

        </div>
    )
}