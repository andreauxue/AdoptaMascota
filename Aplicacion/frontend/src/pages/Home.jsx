import ListaCoffee from "../components/ListaCoffee";




export default function Home() {
    return (
        <div className="mt-auto bg-yellow-950/90 min-h-screen p-6 w-full  inset-shadow-sm inset-shadow-indigo-500">
                <h1 className="text-center font-serif text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-white drop-shadow-lg tracking-wide leading-tight">Nuestro café</h1>
            <ListaCoffee />
           

        </div>
    )
}