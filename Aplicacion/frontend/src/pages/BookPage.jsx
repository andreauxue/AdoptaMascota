import ListaLibros from "../components/ListaLibros";

export default function Home() {
    return (
        <div className="min-h-screen bg-lime-100 p-6">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
                ¿Cuál va a ser tu próxima lectura?
            </h1>
            <ListaLibros/>
        </div>
    )
}