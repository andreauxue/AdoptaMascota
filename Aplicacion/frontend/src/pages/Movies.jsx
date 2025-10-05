import ListaPeliculas from "../components/ListaPeliculas";

export default function Movies() {
    return (
        <div className="min-h-screen bg-yellow-50 p-5">
            <h1 className="text-3xl font-bold text-center text-red-800 mb-6">
                Compra una película
            </h1>
            <ListaPeliculas/>
        </div>
    )
}