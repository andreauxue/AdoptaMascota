import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export default function Logout() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    try {
      window.localStorage.removeItem("sessionUser");
    } catch (_) {
      // noop
    }
    navigate("/");
  };

  const handleCancel = () => navigate(-1);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-white border border-brand-200 rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-brand-400 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
          <FaSignOutAlt className="text-2xl" />
        </div>
        <h1 className="text-2xl font-bold text-brand-700 mb-2">Cerrar sesión</h1>
        <p className="text-gray-600 mb-6">¿Estás seguro que deseas salir?</p>
        <div className="flex gap-3 justify-center">
          <button onClick={handleCancel} className="px-4 py-2 rounded-xl border border-brand-300 text-brand-700 hover:bg-brand-50 transition">
            Cancelar
          </button>
          <button onClick={handleConfirm} className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 shadow">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}


