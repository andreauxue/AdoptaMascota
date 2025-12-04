import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { mascotasService, especiesService } from "../services/api";

const PublishPet = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    especie_id: "",
    descripcion: "",
    vacunado: false,
    imagen: null
  });

  const [especies, setEspecies] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadingEspecies, setLoadingEspecies] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    fetchEspecies();
  }, []);

  const fetchEspecies = async () => {
    try {
      setLoadingEspecies(true);
      const data = await especiesService.getAll();
      setEspecies(data);
      if (data.length > 0) {
        setFormData(prev => ({ ...prev, especie_id: data[0].id }));
      }
    } catch (error) {
      console.error("Error al cargar especies:", error);
      setErrors({ general: "Error al cargar especies. Por favor recarga la página." });
    } finally {
      setLoadingEspecies(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === "checkbox") {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const file = files[0];
      if (file) {
        setFormData(prev => ({ ...prev, imagen: file }));
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.edad || formData.edad <= 0) {
      newErrors.edad = "La edad debe ser un número positivo";
    }

    if (!formData.especie_id) {
      newErrors.especie_id = "Debes seleccionar una especie";
    }

    if (!formData.descripcion.trim()) {
      newErrors.descripcion = "La descripción es requerida";
    } else if (formData.descripcion.length < 20) {
      newErrors.descripcion = "La descripción debe tener al menos 20 caracteres";
    }

    if (!formData.imagen) {
      newErrors.imagen = "Debes seleccionar una imagen";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await mascotasService.create({
        nombre: formData.nombre,
        edad: parseInt(formData.edad),
        especie_id: parseInt(formData.especie_id),
        descripcion: formData.descripcion,
        vacunado: formData.vacunado,
        imagen: formData.imagen
      });

      alert("¡Mascota publicada exitosamente!");
      navigate("/galeria");
    } catch (error) {
      console.error("Error al crear mascota:", error);
      setErrors({ general: error.message || "Error al publicar la mascota. Por favor intenta de nuevo." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (Object.values(formData).some(val => val !== "" && val !== false && val !== null)) {
      if (window.confirm("¿Estás seguro de que quieres cancelar? Se perderán los datos del formulario.")) {
        navigate("/galeria");
      }
    } else {
      navigate("/galeria");
    }
  };

  const descriptionLength = formData.descripcion.length;
  const maxDescriptionLength = 500;

  if (loadingEspecies) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <Spinner message="Cargando formulario..." />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Publicar Mascota
            </h1>
            <p className="text-xl text-center text-blue-100 max-w-2xl mx-auto">
              Ayuda a una mascota a encontrar su hogar ideal
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {errors.general && (
            <div className="mb-6">
              <ErrorMessage message={errors.general} onClose={() => setErrors(prev => ({ ...prev, general: "" }))} />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de la Mascota
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Nombre"
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      error={errors.nombre}
                      placeholder="Ej: Max"
                      required
                    />

                    <Input
                      label="Edad (años)"
                      type="number"
                      name="edad"
                      value={formData.edad}
                      onChange={handleChange}
                      error={errors.edad}
                      placeholder="Ej: 3"
                      min="0"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Especie
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <select
                      name="especie_id"
                      value={formData.especie_id}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      {especies.map((especie) => (
                        <option key={especie.id} value={especie.id}>
                          {especie.nombre}
                        </option>
                      ))}
                    </select>
                    {errors.especie_id && (
                      <p className="mt-1 text-sm text-red-600">{errors.especie_id}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Descripción
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleChange}
                      placeholder="Describe la personalidad, comportamiento y características especiales de la mascota..."
                      rows={5}
                      maxLength={maxDescriptionLength}
                      className={"w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " + (errors.descripcion ? 'border-red-400 bg-red-50 text-red-900' : 'border-gray-300 bg-white')}
                    />
                    <div className="flex justify-between items-center mt-2">
                      {errors.descripcion && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.descripcion}
                        </p>
                      )}
                      <span className={"text-sm ml-auto " + (descriptionLength > maxDescriptionLength * 0.9 ? 'text-orange-600' : 'text-gray-500')}>
                        {descriptionLength} / {maxDescriptionLength}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Imagen
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="file"
                      name="imagen"
                      accept="image/*"
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    {errors.imagen && (
                      <p className="mt-1 text-sm text-red-600">{errors.imagen}</p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="vacunado"
                      name="vacunado"
                      checked={formData.vacunado}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="vacunado" className="ml-2 text-sm text-gray-700">
                      La mascota está vacunada
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      text={isLoading ? "Publicando..." : "Publicar Mascota"}
                      type="submit"
                      variant="primary"
                      disabled={isLoading}
                      className="flex-1"
                      icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      }
                    />
                    <Button
                      text="Cancelar"
                      type="button"
                      variant="outline"
                      onClick={handleCancel}
                      disabled={isLoading}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Vista Previa
                </h3>

                {imagePreview ? (
                  <div className="mb-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-400">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Sin imagen</p>
                    </div>
                  </div>
                )}

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Nombre:</span>
                    <p className="text-gray-900">{formData.nombre || "Sin nombre"}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Edad:</span>
                    <p className="text-gray-900">{formData.edad ? formData.edad + " años" : "Sin edad"}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Especie:</span>
                    <p className="text-gray-900">{especies.find(e => e.id === parseInt(formData.especie_id))?.nombre || "No seleccionada"}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Vacunado:</span>
                    <p className="text-gray-900">{formData.vacunado ? "Sí" : "No"}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Descripción:</span>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {formData.descripcion || "Sin descripción"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PublishPet;
