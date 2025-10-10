import Tarjeta from "./Tarjeta_LeyendasMexicanas";

import lloronaImg from "../assets/llorona.png";
import charroNegroImg from "../assets/charroNegro.png";
import nahualImg from "../assets/nahual.png";
import chanequeImg from "../assets/chaneque.png";
import planchadaImg from "../assets/planchada.png";

export default function Lista_LeyendasMexicanas() {
  const leyendas = [
    {
      id: 1,
      nombre: "La Llorona",
      quienEs: "Espíritu de una mujer condenada.",
      leyenda: "Vaga gritando por sus hijos que ahogó en un río por despecho e ira tras ser abandonada por el hombre que amaba.",
      miedoQueCausa: "Su llanto es desgarrador y su aparición es indicio de desgracias.",
      origen: "Prehispánico / Colonial",
      imagen: lloronaImg,
    },
    {
      id: 2,
      nombre: "El Charro Negro",
      quienEs: "Jinete elegante que pactó con el Diablo.",
      leyenda: "Aparece en las noches solitarias. Ofrece riqueza a cambio de tu alma para reemplazarlo, poniendo a prueba la avaricia humana.",
      miedoQueCausa: "Al aceptar su riqueza te conduce a un pacto eterno con el diablo.",
      origen: "Colonial",
      imagen: charroNegroImg,
    },
    
    {
      id: 3,
      nombre: "El Nahual",
      quienEs: "Persona capaz de transformarse en un animal o ser elemental.",
      leyenda: "Utiliza su poder para protegerse, dañar a otros, robar o cometer actos oscuros.",
      miedoQueCausa: "Lo misterioso que representa esta criatura fisicamente y su actuar.",
      origen: "Prehispánico",
      imagen: nahualImg,
    },
    {
      id: 4,
      nombre: "El Chaneque",
      quienEs: "Espíritu travieso de la naturaleza, generalmente con aspecto de pequeños duendes o niños.",
      leyenda: "Se le considera capaz de hacer acciones benignas o malignas, como ayudar o asustar a las personas, mover objetos, o causar enfermedades y desapariciones.",
      miedoQueCausa: "Ser víctima de sus bromas, resultando en desorientación, la pérdida del alma (tonal), o ser llevado a un lugar desconocido.",
      origen: "Prehispánico",
      imagen: chanequeImg,
    },
    {
      id: 5,
      nombre: "La Planchada",
      quienEs: "Enfermera fantasma, se caracteriza por su uniforme antiguo y perfectamente planchado.",
      leyenda: "Una decepción amorosa la llevó a descuidar su trabajo y persona hasta morir. Se aparece en los hospitales de México cuidando a los enfermos.",
      miedoQueCausa: "Ser atendido por ella sugiere que tu estado es tan grave que no hay salvación.",
      origen: "S. XIX/XX (CDMX)",
      imagen: planchadaImg,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center py-10 px-4">
      {leyendas.map((p) => (
        <Tarjeta
          key={p.id}
          nombre={p.nombre}
          quienEs={p.quienEs}
          leyenda={p.leyenda}
          miedoQueCausa={p.miedoQueCausa}
          origen={p.origen}
          imagen={p.imagen}
        />
      ))}
    </div>
  );
}
