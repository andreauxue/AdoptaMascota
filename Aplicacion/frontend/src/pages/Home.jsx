import { Link } from "react-router-dom";
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from "react";
import adopcionMascotas from '../assets/adopcion.jpg'; 

// Imports de imágenes de mascotas
import tomillo from "../assets/tomillo.jpg";
import erizo from "../assets/erizo.jpg";
import pelusa from "../assets/pelusa.jpg";
import vikingo from "../assets/vikingo.jpg";
import stella from "../assets/stella.jpg";
import cheddar from "../assets/cheddar.jpg";
import yoshi from "../assets/yoshi.jpg";
import garfield from "../assets/garfield.jpg";
import srgato from "../assets/srgato.jpg";
import Langosta from "../assets/Langosta.webp";

export default function Home() {

    const buttonStyle = "w-full max-w-xs px-6 py-3 rounded-lg text-white font-semibold text-center hover:opacity-90 transition duration-300 shadow-md bg-[#10403B] font-belleza";

    // Lógica del carrusel de imágenes
    const scrollContainerRef = useRef(null);
    const galleryImages = [
        tomillo, erizo, pelusa, vikingo, stella, cheddar, yoshi, garfield, srgato, Langosta
    ];
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollContainerRef.current.scrollLeft += scrollAmount;
        }
    };

    // logica carrusel
    const heroImages = [adopcionMascotas, tomillo, vikingo, stella];
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="min-h-[70vh] bg-[#C1D9C1] flex items-center justify-center">
                <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-center gap-16">
                    <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#243B55] font-aclonica">
                            Huellitas en Casa
                        </h1>
                        <p className="text-lg text-[#243B55] my-8 leading-relaxed max-w-lg">
                            Encuentra a tu compañero ideal. Nuestra plataforma conecta a mascotas que necesitan un hogar con personas maravillosas dispuestas a dárselo. Sube mascotas para adopción o navega por los perfiles para encontrar a tu nuevo mejor amigo.
                        </p>
                        <div className="flex flex-col gap-4 w-full items-center lg:items-start">
                            <Link to="/register" className={buttonStyle}>
                                Registrarse
                            </Link>
                            <Link to="/mascotas" className={buttonStyle}>
                                Muro de mascotas
                            </Link>
                        </div>
                    </div>
                    <div className="relative hidden lg:block lg:w-1/2">
                        <img
                            src={heroImages[currentIndex]}
                            alt={`Imagen ${currentIndex + 1}`}
                            className="rounded-lg shadow-2xl w-full h-auto max-w-lg mx-auto bg-white aspect-square object-cover transition-all duration-700 ease-in-out"
                        />
                        <button
                            onClick={prevSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 text-[#10403B] rounded-full p-2 shadow-md hover:bg-white active:scale-95"
                        >
                        <FaArrowLeft />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 text-[#10403B] rounded-full p-2 shadow-md hover:bg-white active:scale-95"
                        >
                        <FaArrowRight />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                            {heroImages.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#10403B]' : 'bg-white/70'}`}
                                ></span>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#10403B]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto block">
                    <path fill="#C1D9C1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>

            {/* Contenido de la olita de "Misión" */}
            <div className="bg-[#10403B] shadow-inner -mt-1">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4 font-aclonica">
                        Nuestra Misión
                    </h2>
                    <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed font-belleza">
                        Huellitas en Casa es una fundación dedicada a facilitar el proceso de adopción,
                        conectando refugios y rescatistas con familias amorosas.
                        Creemos que cada mascota merece una segunda oportunidad y un hogar lleno de cariño.
                    </p>
                </div>
            </div>
            
            <div className="bg-[#10403B]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto block -mt-1">
                    <path fill="#C1D9C1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                </svg>
            </div>

            {/* Sección de carrusel de imágenes */}
            <div className="bg-[#C1D9C1] py-16 -mt-2">
                <div className="container mx-auto px-4 relative">
                    <h2 className="text-3xl font-bold text-[#243B55] text-center mb-10 font-aclonica">
                        Conoce a algunos amigos
                    </h2>

                    {/* Botón izquierda */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 z-10 p-3 bg-white/70 rounded-full shadow-md text-[#10403B] hover:bg-white transition -translate-y-1/2 active:scale-95"
                        aria-label="Scroll Izquierda"
                    >
                        <FaArrowLeft />
                    </button>

                    {/* Contenedor del Carrusel */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto space-x-6 py-4 px-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
                    >
                        {galleryImages.map((imagen, index) => (
                            <img
                                key={index}
                                src={imagen}
                                alt={`Mascota de galería ${index + 1}`}
                                className="
                                    w-64 h-80 object-cover rounded-lg flex-none snap-center 
                                    border-4 border-white 
                                    shadow-lg shadow-white/40 
                                    hover:scale-105 transition-transform duration-300
                                "
                            />
                        ))}
                    </div>

                    {/* Botón derecha */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 z-10 p-3 bg-white/70 rounded-full shadow-md text-[#10403B] hover:bg-white transition -translate-y-1/2 active:scale-95"
                        aria-label="Scroll Derecha"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </>
    );
}