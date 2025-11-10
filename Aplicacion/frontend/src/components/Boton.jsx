export default function Boton ({ texto, onClick, color ="bg-brand-500 hover:bg-brand-600"}) {
    return (
        <button
            onClick={onClick}
            className={`${color} text-white px-4 py-2 rounded-md hover:opacity-90 transition`}
        >
            {texto}
        </button>
    );
}

