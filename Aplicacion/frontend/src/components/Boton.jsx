export default function Boton ({ texto, onClick, color ="bg-verde-menta hover:bg-verde-menta/80" }) {
    return (
        <button
            onClick={onClick}
            className={`${color} text-black px-4 py-2 rounded-md hover:opacity-90 transition`}
        >
            {texto}
        </button>
    );
}

