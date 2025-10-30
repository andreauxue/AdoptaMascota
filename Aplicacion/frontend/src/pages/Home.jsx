import Boton from "../components/Boton";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaPaw, FaSearch } from 'react-icons/fa';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
            <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                        <FaHeart className="text-4xl text-pink-500 animate-pulse" />
                        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                            Adopta Amor
                        </h1>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-semibold text-pink-700 mb-6">
                        Encuentra a tu compañero perfecto
                    </h2>
                    
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Descubre a tu nuevo mejor amigo peludo. Miles de mascotas esperan un hogar 
                        lleno de amor y cuidados. ¡Haz la diferencia en una vida hoy!
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center lg:justify-start gap-8 mb-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-pink-600">500+</div>
                            <div className="text-sm text-gray-600">Mascotas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-pink-600">300+</div>
                            <div className="text-sm text-gray-600">Familias</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-pink-600">98%</div>
                            <div className="text-sm text-gray-600">Éxito</div>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Boton 
                            texto="Ver mascotas" 
                            icono={<FaSearch className="text-lg" />}
                            onClick={() => navigate("/mascotas")}
                        />
                        <Boton 
                            texto="Registrarme" 
                            color="bg-pink-500 hover:bg-pink-600"
                            icono={<FaPaw className="text-lg" />}
                            onClick={() => navigate("/register")}
                        />
                    </div>
                </div>

                {/* Imágen */}
                <div className="lg:w-1/2 relative">
                    <div className="relative z-10">
                        <img 
                            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                            alt="Perro y gato juntos"
                            className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200 rounded-full opacity-50 animate-float"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-300 rounded-full opacity-30 animate-float animation-delay-2000"></div>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center text-pink-600 mb-12">
                        ¿Por qué adoptar con nosotros?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
                            <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaHeart className="text-2xl text-white" />
                            </div>
                            <h4 className="text-xl font-semibold text-pink-700 mb-2">Amor Garantizado</h4>
                            <p className="text-gray-600">Cada mascota viene con amor infinito y gratitud</p>
                        </div>
                        
                        <div className="text-center p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
                            <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaPaw className="text-2xl text-white" />
                            </div>
                            <h4 className="text-xl font-semibold text-pink-700 mb-2">Salud Verificada</h4>
                            <p className="text-gray-600">Todas nuestras mascotas tienen control veterinario</p>
                        </div>
                        
                        <div className="text-center p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
                            <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaSearch className="text-2xl text-white" />
                            </div>
                            <h4 className="text-xl font-semibold text-pink-700 mb-2">Seguimiento</h4>
                            <p className="text-gray-600">Acompañamos el proceso de adaptación</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-pink-400 to-pink-500 py-12">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        ¿Listo para cambiar una vida?
                    </h3>
                    <p className="text-pink-100 text-lg mb-6 max-w-2xl mx-auto">
                        Miles de mascotas esperan un hogar. Tu decisión puede marcar la diferencia.
                    </p>
                    <Boton 
                        texto="Comenzar ahora" 
                        color="bg-pink-600 text-white hover:bg-pink-50"
                        onClick={() => navigate("/mascotas")}
                    />
                </div>
            </div>
        </div>
    );
}