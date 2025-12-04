import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaSignOutAlt, FaUserCircle, FaSave, FaTimes, FaEnvelope, FaLock } from "react-icons/fa";

export default function Perfil() {
    const { user, logout, updateUser } = useAuth();
    const navigate = useNavigate();
    
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        if (!user) {
            navigate("/login");
        } else {
            setFormData({
                username: user.username,
                email: user.email,
                password: ""
            });
        }
    }, [user, navigate]);

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            await updateUser(formData);
            setSuccessMsg("Perfil actualizado correctamente.");
            setIsEditing(false);
            // Limpiamos el campo contraseña después de guardar
            setFormData(prev => ({...prev, password: ""})); 
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (!user) return null;

    const inputStyle = "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#127369] focus:border-[#127369] outline-none transition-colors";
    const labelStyle = "block text-[#243B55] font-semibold mb-1 font-belleza";

    return (
        <div className="min-h-[70vh] flex items-center justify-center p-6">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden border-t-4 border-[#127369]">
                
                {/* Cabecera */}
                <div className="bg-gray-50 p-6 text-center border-b border-gray-100">
                    <div className="w-24 h-24 bg-[#C1D9C1] rounded-full mx-auto flex items-center justify-center mb-4 text-[#127369]">
                        <FaUserCircle size={50} />
                    </div>
                    <h2 className="text-3xl font-bold text-[#243B55] font-aclonica">
                        Hola, {user.username}
                    </h2>
                    <p className="text-gray-500 font-belleza">{user.email}</p>
                </div>

                {/* Contenido Principal */}
                <div className="p-8">
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
                            {error}
                        </div>
                    )}
                    {successMsg && (
                        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm text-center">
                            {successMsg}
                        </div>
                    )}

                    {!isEditing ? (
                        /* Vista de Menú */
                        <div className="space-y-4">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="w-full flex items-center justify-center gap-3 bg-[#243B55] text-white py-3 rounded-lg hover:bg-[#1a2b3e] transition-all duration-300 shadow-md hover:scale-[1.02] font-semibold font-belleza"
                            >
                                <FaUserEdit /> Editar Perfil
                            </button>

                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md hover:scale-[1.02] font-semibold font-belleza"
                            >
                                <FaSignOutAlt /> Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        /* Vista de Edición */
                        <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div>
                                <label className={labelStyle}>Nuevo Nombre de Usuario</label>
                                <div className="relative">
                                    <FaUserCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                                    <input 
                                        type="text" 
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className={`${inputStyle} pl-10`}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={labelStyle}>Nuevo Correo Electrónico</label>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`${inputStyle} pl-10`}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={labelStyle}>Nueva Contraseña (Opcional)</label>
                                <div className="relative">
                                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                                    <input 
                                        type="password" 
                                        name="password"
                                        placeholder="Dejar en blanco para no cambiar"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`${inputStyle} pl-10`}
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsEditing(false);
                                        setError(null);
                                        setFormData({
                                            username: user.username,
                                            email: user.email,
                                            password: ""
                                        });
                                    }}
                                    className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium flex items-center justify-center gap-2 font-belleza"
                                >
                                    <FaTimes /> Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex-1 py-2 px-4 bg-[#127369] text-white rounded-lg hover:bg-[#0e5850] transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-70 font-belleza"
                                >
                                    {isLoading ? "Guardando..." : <><FaSave /> Guardar</>}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}