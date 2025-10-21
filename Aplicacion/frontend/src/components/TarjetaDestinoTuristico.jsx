export default function TarjetaDestinoTuristico({nombre, pais, idioma, moneda, zonaHoraria, costoPromedio, atraccionesPrincipales, imagen}) {
  const estiloFondo = imagen
  ? { backgroundImage: `url('${imagen}')` }
  : { backgroundColor: '#4b4c4dff' }; // Fondo de color si no hay imagen.

  return (
    <div
      className="relative w-full max-w-[360px] h-96 overflow-hidden rounded-2xl shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl bg-cover bg-center"
      style={estiloFondo}
    >
      {/* Degradado del fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent"></div>

      {/* Contenido */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white space-y-1.5 ">
        
        {/* Nombre y pais al inicio de la card */}
        <h2 className="text-xl font-semibold tracking-tight text-center drop-shadow-lg">
          {nombre}, {pais}
        </h2>
        {/* Contenido hasta el fondo de la card */}
        <div className="space-y-1.5">
          <p className="text-sm font-medium">
            Idioma: <span className="font-normal">{idioma}</span>
          </p>
          <p className="text-sm font-medium">
            Moneda: <span className="font-normal">{moneda}</span>
          </p>
          <p className="text-sm font-medium">
            Zona horaria: <span className="font-normal">{zonaHoraria}</span>
          </p>
          <p className="text-sm font-medium">
            Costo promedio: <span className="font-normal">{costoPromedio}</span>
          </p>
          <p className="text-sm font-medium">
            Atracciones: <span className="font-normal">{atraccionesPrincipales}</span>
          </p>
          <button
            className="mt-2 w-full rounded-full bg-orange-700 py-2.5 text-sm font-semibold shadow-md transition-all duration-200 hover:bg-gray-700 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => alert(`Más info sobre ${nombre}`)}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}
  