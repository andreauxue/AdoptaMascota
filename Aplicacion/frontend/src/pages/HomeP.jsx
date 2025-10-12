import ListaPokemon from "../components/ListaPokemon";

export default function HomeP() {
    return(
        <div className=" min-h-screen bg-green-100 p-6">
            <h1 className="bg-blue-200 text-3xl font-bold text-center text-blue-600 mb-9">
                Elige a tu Pokemon
            </h1>
            <ListaPokemon/>
        </div>
    )
}