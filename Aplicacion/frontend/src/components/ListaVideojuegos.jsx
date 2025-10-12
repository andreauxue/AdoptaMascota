import Tarjeta from "./TarjetaVideojuegos";
import cyberpunk from "../assets/juegos/cyberpunk.jpg";
import gow from "../assets/juegos/gow.jpg";
import rdr2 from "../assets/juegos/rdr2.avif";
import minecraft from "../assets/juegos/minecraft.avif";
import outerWilds from "../assets/juegos/outerWilds.jpg";

const videojuegos = [
    {titulo: "Red Dead Redemption 2", genero: "Aventura, Western", descripcion: "Explora el salvaje oeste en una historia de forajidos.", imagen: rdr2},
    {titulo: "Outer Wilds", genero: "Aventura, Exploracion espacial", descripcion: "Explora un sistema solar y descubre sus secretos.", imagen: outerWilds },
    {titulo: "Minecraft",genero: "Sandbox", descripcion: "Crea y explora mundos con bloques, tu imaginación es el límite.", imagen: minecraft},
    {titulo: "Cyberpunk 2077", genero: "RPG, Ciencia Ficción", descripcion: "Explora Night City en un futuro distópico y conviertete en un mercenario.", imagen: cyberpunk },
    {titulo: "God of War", genero: "Acción", descripcion: "Viaja con Kratos y su hijo en una aventura épica.", imagen: gow},
  
];

function Lista() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6">
      {videojuegos.map((m) => (
              <Tarjeta
                key={m.titulo}
                titulo={m.titulo}
                genero={m.genero}
                descripcion={m.descripcion}
                imagen={m.imagen}
              />
            ))}
    </div>
  );
}

export default Lista;
