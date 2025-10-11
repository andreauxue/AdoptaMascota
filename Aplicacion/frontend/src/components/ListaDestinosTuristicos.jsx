import TarjetaDestinoTuristico from "./TarjetaDestinoTuristico";
import sydney from "../assets/sydney.jpg";
import machuPicchu from "../assets/machuPicchu.jpg";
import roma from "../assets/roma.jpg";
import bali from "../assets/bali.jpg";
import santorini from "../assets/santorini.jpg";
import kyoto from "../assets/kyoto.jpg";

export default function ListaMascotas() {
  const destinosTuristicos = [
    {id: 1,
     pais: "Australia",
     nombre: "Sydney",
     idioma: "Inglés",
     moneda: "Dólar australiano (AUD)",
     zonaHoraria: "GMT+10",
     costoPromedio: "$80 USD/día",
     atraccionesPrincipales: "Ópera de Sídney, Puente del Puerto, Bondi Beach",
     imagen: sydney
    },
    {id: 2,
     pais: "Perú",
     nombre: "Machu Picchu",
     idioma: "Español, Quechua",
     moneda: "Sol peruano (PEN)",
     zonaHoraria: "GMT-5",
     costoPromedio: "$40 USD/día",
     atraccionesPrincipales: "Templo del Sol, Intihuatana, Plaza Principal",
     imagen: machuPicchu
    },
    {id: 3,
     pais: "Italia",
     nombre: "Roma",
     idioma: "Italiano",
     moneda: "Euro (EUR)",
     zonaHoraria: "GMT+1",
     costoPromedio: "$90 USD/día",
     atraccionesPrincipales: "Coliseo, Vaticano, Fontana di Trevi",
     imagen: roma
    },
    {id: 4,
     pais: "Indonesia",
     nombre: "Bali",
     idioma: "Indonesio",
     moneda: "Rupia indonesia (IDR)",
     zonaHoraria: "GMT+8",
     costoPromedio: "$30 USD/día",
     atraccionesPrincipales: "Templos, playas, arrozales",
     imagen: bali
    },
    {id: 5,
     pais: "Grecia",
     nombre: "Santorini",
     idioma: "Griego",
     moneda: "Euro (EUR)",
     zonaHoraria: "GMT+2",
     costoPromedio: "$70 USD/día",
     atraccionesPrincipales: "Oia, Playa Roja, Fira",
     imagen: santorini
    },
    {id: 6,
     pais: "Japón",
     nombre: "Kyoto",
     idioma: "Japonés",
     moneda: "Yen japonés (JPY)",
     zonaHoraria: "GMT+9",
     costoPromedio: "$60 USD/día",
     atraccionesPrincipales: "Templo Kinkaku-ji, Bosque de Bambú, Fushimi Inari",
     imagen: kyoto
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center py-6 px-4">
      {destinosTuristicos.map((d) => (
        <TarjetaDestinoTuristico
          key={d.id}
          nombre={d.nombre}
          pais={d.pais}
          idioma={d.idioma}
          moneda={d.moneda}
          zonaHoraria={d.zonaHoraria}
          costoPromedio={d.costoPromedio}
          atraccionesPrincipales={d.atraccionesPrincipales}
          imagen={d.imagen}
        />
      ))}
    </div>
  );
}
