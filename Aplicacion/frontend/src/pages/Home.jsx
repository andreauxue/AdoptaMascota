import { Link } from "react-router-dom";
import placeholderImage from '../assets/image.png'; // Placeholder

export default function Home() {

    const buttonStyle = "w-full max-w-xs px-6 py-3 rounded-lg bg-gray-600 text-white font-semibold text-center hover:bg-gray-700 transition duration-300 shadow-md";

    return (
        <div className="min-h-[70vh] bg-white flex items-center justify-center">
            <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-center gap-16">

                {/* Columna de Texto y Botones a la izquierda en desktop) */}
                <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                        Huellitas en Casa
                    </h1>
                    
                    <p className="text-lg text-gray-700 my-8 leading-relaxed max-w-lg">
                        Texto describiendo la aplicación de manera llamativa pero concisa.
                        Descubre a tu nuevo mejor amigo peludo.
                    </p>

                    {/* Botones del Prototipo */}
                    <div className="flex flex-col gap-4 w-full items-center lg:items-start">
                        <Link 
                            to="/register"
                            className={buttonStyle}
                        >
                            Registrarse
                        </Link>
                        <Link 
                            to="/mascotas"
                            className={buttonStyle}
                        >
                            Muro de mascotas
                        </Link>
                    </div>
                </div>

                {/* 'hidden' para estar oculto en móvil y 'lg:block' para ser visible en 'lg' y superior */}
                <div className="hidden lg:block lg:w-1/2">
                    <img 
                        src={placeholderImage}
                        alt="Perro y gato juntos"
                        className="rounded-lg shadow-2xl w-full h-auto max-w-lg mx-auto bg-gray-300 aspect-square object-cover"
                    />
                </div>

            </div>
        </div>
    );
}