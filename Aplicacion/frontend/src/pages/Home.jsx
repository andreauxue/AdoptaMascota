import { Link } from "react-router-dom";
import placeholderImage from '../assets/image.png'; // Placeholder
import adopcionMascotas from '../assets/adopcion.jpg'; // Imagen de adopción de mascotas
export default function Home() {

    const buttonStyle = "w-full max-w-xs px-6 py-3 rounded-lg text-white font-semibold text-center hover:opacity-90 transition duration-300 shadow-md bg-[#10403B]";

    return (
        <div className="min-h-[70vh] bg-[#C1D9C1] flex items-center justify-center">
            <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-center gap-16">

                {/* Columna de Texto y Botones a la izquierda en desktop) */}
                <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <h1 className="text-5xl lg:text-6xl font-bold text-[#243B55]">
                        Huellitas en Casa
                    </h1>

                    <p className="text-lg text-[#243B55] my-8 leading-relaxed max-w-lg">
                        Texto describiendo la aplicación de manera llamativa pero concisa.
                        Descubre a tu nuevo mejor amigo peludo.
                    </p>

                    {/* Botones del Prototipo */}
                    <div className="flex flex-col gap-4 w-full items-center lg:items-start">
                        <Link
                            to="/register"
                            className={`hover:bg-[#243B55] hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md transition-all duration-300 cursor-pointer ${buttonStyle}`}
                        >
                            Registrarse
                        </Link>
                        <Link
                            to="/mascotas"
                            className={`hover:bg-[#243B55] hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md transition-all duration-300 cursor-pointer ${buttonStyle}`}
                        >
                            Muro de mascotas
                        </Link>
                    </div>
                </div>

                {/* 'hidden' para estar oculto en móvil y 'lg:block' para ser visible en 'lg' y superior */}
                <div className="hidden lg:block lg:w-1/2">
                    <img
                        src={adopcionMascotas}
                        alt="Perro y gato juntos"
                        className="rounded-lg shadow-2xl w-full h-auto max-w-lg mx-auto bg-[#FFFFFF] aspect-square object-cover"
                    />
                </div>

            </div>
        </div>
    );
}