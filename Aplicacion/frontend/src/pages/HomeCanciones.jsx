import ListaCanciones from "../components/ListaCanciones";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black p-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-4xl font-extrabold text-center text-blue-400 mb-8">Canciones chidas</h1>
                <ListaCanciones/>
            </div>
        </div>
    )
}