import { useState, useEffect } from "react";
import { FaFileImage, FaPaw, FaMapMarkerAlt, FaBirthdayCake, FaVenusMars } from 'react-icons/fa';
import { api } from "../apiService";
import { useNavigate } from "react-router-dom";

export default function RegistrarMascota() {
    const navigate = useNavigate();

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
    const [focusedField, setFocusedField] = useState(null);
    const maxDescriptionLength = 500;

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

    useEffect(() => {
        api.get("/api/get-csrf/").catch(err => {
            console.warn("No se pudo obtener el token CSRF inicial", err);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const data = new FormData();

            data.append("nombre", formData.nombre);
            data.append("descripcion", formData.descripcion);
            data.append("edad", formData.edad);
            data.append("ubicacion", formData.ubicacion);
            data.append("genero", formData.genero);
            data.append("imagen", formData.imagen);

            const response = await api.post("api/registrar-mascota/", data);

            alert("Mascota registrada con éxito.");
            navigate("/mascotas");
        }
        catch (error){
            console.error("Error al registrar la mascota:", error);
            alert("Hubo un error al registrar la mascota. Por favor, intenta de nuevo.");
        }

        setIsLoading(false);
    };

    // Estilos
    const inputStyle = "w-full px-4 py-3 pl-12 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#127369] focus:border-[#127369] focus:outline-none transition-all duration-300 hover:border-[#127369]/50";

    const iconContainerStyle = "absolute left-4 top-1/2 -translate-y-1/2 text-[#127369] transition-all duration-300";

    return (
        <div className="min-h-[70vh] bg-[#C1D9C1] flex items-center justify-center p-4">

            {/* Tarjeta del formulario */}
            <form onSubmit={handleSubmit} className="bg-[#FFFFFF] rounded-lg shadow-xl p-8 w-full max-w-lg">

                <h2 className="text-4xl font-bold text-[#243B55] mb-4 text-center drop-shadow-md font-aclonica">
                    Registrar mascota
                </h2>
                <h3 className="text-xl text-[#243B55] text-center mb-6 drop-shadow-sm font-aclonica">
                    Rellena el formulario
                </h3>

                <div className="space-y-5">

                    {/* Nombre con icono */}
                    <div className="relative group">
                        <div className={iconContainerStyle}>
                            <FaPaw className={`text-xl ${focusedField === 'nombre' ? 'scale-110' : ''} transition-transform duration-300`} />
                        </div>
                        <input
                            name="nombre"
                            placeholder="Nombre de la mascota"
                            value={formData.nombre}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('nombre')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={inputStyle}
                        />
                    </div>

                    {/* Edad con icono */}
                    <div className="relative group">
                        <div className={iconContainerStyle}>
                            <FaBirthdayCake className={`text-xl ${focusedField === 'edad' ? 'scale-110' : ''} transition-transform duration-300`} />
                        </div>
                        <input
                            name="edad"
                            placeholder="Edad (ej. 5 meses, 2 años)"
                            value={formData.edad}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('edad')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={inputStyle}
                        />
                    </div>

                    {/* Ubicación con icono */}
                    <div className="relative group">
                        <div className={iconContainerStyle}>
                            <FaMapMarkerAlt className={`text-xl ${focusedField === 'ubicacion' ? 'scale-110' : ''} transition-transform duration-300`} />
                        </div>
                        <input
                            name="ubicacion"
                            placeholder="Ubicación (ej. Refugio Central)"
                            value={formData.ubicacion}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('ubicacion')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={inputStyle}
                        />
                    </div>

                    {/* Género con diseño mejorado */}
                    <div className="p-5 bg-gradient-to-br from-white to-gray-50 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center gap-2 mb-3">
                            <FaVenusMars className="text-[#127369] text-lg" />
                            <label className="text-[#243B55] font-semibold">Sexo:</label>
                        </div>
                        <div className="flex gap-4">
                            <label className="flex items-center cursor-pointer group">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="genero"
                                        value="macho"
                                        checked={formData.genero === "macho"}
                                        onChange={handleChange}
                                        className="h-5 w-5 text-[#127369] accent-[#127369] border-gray-400 focus:ring-[#127369] cursor-pointer"
                                    />
                                </div>
                                <span className="ml-2 text-[#243B55] font-medium group-hover:text-[#127369] transition-colors duration-300">Macho</span>
                            </label>
                            <label className="flex items-center cursor-pointer group">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="genero"
                                        value="hembra"
                                        checked={formData.genero === "hembra"}
                                        onChange={handleChange}
                                        className="h-5 w-5 text-[#127369] accent-[#127369] border-gray-400 focus:ring-[#127369] cursor-pointer"
                                    />
                                </div>
                                <span className="ml-2 text-[#243B55] font-medium group-hover:text-[#127369] transition-colors duration-300">Hembra</span>
                            </label>
                        </div>
                    </div>

                    {/* Descripción con contador */}
                    <div className="relative">
                        <textarea
                            name="descripcion"
                            placeholder="Cuéntanos sobre la personalidad, comportamiento y características especiales..."
                            value={formData.descripcion}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('descripcion')}
                            onBlur={() => setFocusedField(null)}
                            rows="4"
                            maxLength={maxDescriptionLength}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#127369] focus:border-[#127369] focus:outline-none transition-all duration-300 hover:border-[#127369]/50 resize-none"
                        />
                        <div className="absolute bottom-2 right-3 text-xs text-gray-500">
                            {formData.descripcion.length}/{maxDescriptionLength}
                        </div>
                    </div>

                    {/* Input de Imagen mejorado */}
                    <label className={`${inputStyle} flex items-center gap-3 cursor-pointer hover:bg-gradient-to-r hover:from-[#127369]/5 hover:to-[#243B55]/5 group`}>
                        <FaFileImage className="text-[#127369] text-2xl group-hover:scale-110 transition-transform duration-300"/>
                        <span className="text-[#243B55] font-medium">
                            {imagePreview ? " Cambiar imagen" : " Subir imagen de la mascota"}
                        </span>
                        <input
                            type="file"
                            name="imagen"
                            onChange={handleImageChange}
                            className="hidden"
                            accept="image/png, image/jpeg, image/jpg, image/webp"
                        />
                    </label>

                    {/* Previsualización mejorada */}
                    {imagePreview && (
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md pointer-events-none z-10"></div>
                            <img
                                src={imagePreview}
                                alt="Previsualización"
                                className="w-full h-56 object-cover rounded-md border-2 border-[#127369]/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                            />
                            <div className="absolute top-3 right-3 bg-[#127369] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                                Vista previa
                            </div>
                        </div>
                    )}
                </div>

                {/* Botón de envío */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full mt-6 py-3 px-4 rounded-md font-semibold text-white transition-all duration-300 font-belleza ${
                        isLoading
                            ? 'bg-gray-400 cursor-not-allowed shadow-md'
                            : 'bg-[#127369] hover:bg-[#243B55] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#243B55]/40 hover:ring-2 hover:ring-white active:translate-y-0 active:shadow-md cursor-pointer shadow-md'
                    }`}
                >
                    {isLoading ? "Procesando..." : "Subir"}
                </button>
            </form>
        </div>
    );
}