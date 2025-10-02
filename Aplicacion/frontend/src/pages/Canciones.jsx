import ListaCanciones from "../components/ListaCanciones";

// Página para mostrar la galería de canciones con un fondo degradado
export default function Musica() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-pink-300 to-purple-400 p-6">
            <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
                Canciones Recomendadas
            </h1>
            <ListaCanciones />
        </div>
    )
}