import { useState, useEffect } from "react";
import { FaPaw, FaFileImage, FaPen, FaCalendarAlt, FaMapMarkerAlt, FaVenusMars } from 'react-icons/fa';

export default function RegistrarMascota() {
    const [formData, setFormData] = useState({ 
        nombre: "", 
        descripcion: "", 
        edad: "",
        ubicacion: "",
        genero: "macho", 
        imagen: null 
    });
    
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => 
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleImageChange = (e) => {
        const file = e.target.files[0]; 
        if (file) {
            setFormData({ ...formData, imagen: file });
            if (imagePreview) URL.revokeObjectURL(imagePreview);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        return () => { if (imagePreview) URL.revokeObjectURL(imagePreview); };
    }, [imagePreview]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            console.log("Datos de la nueva mascota:", formData); 
            setIsLoading(false);
            alert("Mascota registrada");
        }, 1500);
    };

    // Estilo de Input del prototipo
    const inputStyle = "w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500";

    return (
        // Fondo blanco y formulario centrado
        <div className="min-h-[70vh] bg-white flex items-center justify-center p-4">
            
            {/* Tarjeta del formulario */}
            <form onSubmit={handleSubmit} className="bg-gray-200 rounded-lg shadow-xl p-8 w-full max-w-lg">
                
                <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                    Registrar mascota
                </h2>
                <h3 className="text-xl text-gray-800 text-center mb-6">
                    Rellena el formulario
                </h3>

                <div className="space-y-4">
                    
                    {/* Usamos el inputStyle definido arriba */}
                    <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required className={inputStyle} />
                    <input name="edad" placeholder="Edad (ej. 5 meses)" value={formData.edad} onChange={handleChange} required className={inputStyle} />
                    <input name="ubicacion" placeholder="Ubicación (ej. Refugio Central)" value={formData.ubicacion} onChange={handleChange} required className={inputStyle} />
                    
                    {/* Género */}
                    <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
                        <label className="text-gray-700 font-medium">Sexo:</label>
                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="genero" value="macho" checked={formData.genero === "macho"} onChange={handleChange} className="h-4 w-4 text-gray-600 border-gray-400 focus:ring-gray-500" />
                                <span className="ml-2 text-gray-700">Macho</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="genero" value="hembra" checked={formData.genero === "hembra"} onChange={handleChange} className="h-4 w-4 text-gray-600 border-gray-400 focus:ring-gray-500" />
                                <span className="ml-2 text-gray-700">Hembra</span>
                            </label>
                        </div>
                    </div>
                    
                    {/* Descripción */}
                    <textarea name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange} rows="3" className={inputStyle} />
                    
                    {/* Input de Imagen */}
                    <label className={`${inputStyle} flex items-center gap-3 cursor-pointer hover:bg-gray-50`}>
                        <FaFileImage className="text-gray-500" />
                        <span className="text-gray-600">
                            {imagePreview ? "Cambiar imagen" : "Subir imagen"}
                        </span>
                        <input type="file" name="imagen" onChange={handleImageChange} className="hidden" accept="image/png, image/jpeg" />
                    </label>

                    {/* Previsualización */}
                    {imagePreview && (
                        <img src={imagePreview} alt="Previsualización" className="w-full h-48 object-cover rounded-md border border-gray-300 shadow-sm" />
                    )}
                </div>

                {/* Botón de envío */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full mt-6 py-3 px-4 rounded-md font-semibold text-white transition-all duration-200 shadow-md ${
                        isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-700'
                    }`}
                >
                    {isLoading ? "Procesando..." : "Subir"}
                </button>
            </form>
        </div>
    );
}