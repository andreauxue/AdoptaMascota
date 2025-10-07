import ListaPeliculas from "../components/ListaPeliculas";

export default function Home() {
    return (
        <div className="min-h-screen bg-white p-6 mt-5">
            <h1 className="font-medium text-3xl text-center">
                Mi top de películas
            </h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156 text-center mt-2'>Mi lista personal de películas que valen la pena.</p>
            <ListaPeliculas/>
        </div>
    )
}