export default function TarjetaMascota({ nombre, tipo, info, imagen }) {
  return (
    <div className="group relative max-w-xs overflow-hidden rounded-2xl border border-black bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <img
        src={imagen}
        alt={nombre}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />

      <div className="space-y-1.5 p-4">

        {/* Nombre */}
        <h2 className="text-xl font-semibold tracking-tight" style={{ color: "#916431ff" }}>
          {nombre}
        </h2>

        {/* Tipo (Perro, Gato...) */}
        <p className="text-xs text-gray-500">
          {tipo}
        </p>

        {/* Edad o info */}
        <p className="text-base text-black">
          {info}
        </p>

        <div className="flex justify-center">
          <button
            className="
              inline-flex items-center justify-center
              rounded-full px-3 py-1.5 text-xs font-semibold 
              text-black shadow-sm transition-all duration-200 
              border border-black
              active:scale-95 focus:outline-none focus-visible:ring-2
            "
            style={{
              backgroundColor: "#F0E68C",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#dfd15bff")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#F0E68C")}
          >
            Más Detalles
          </button>
        </div>

      </div>
    </div>
  );
}
