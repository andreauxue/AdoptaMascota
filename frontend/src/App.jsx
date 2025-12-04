import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import PublishPet from "./pages/PublishPet";

import ListaMascotas from "./components/ListaMascotas";
import AdminInicio from "./pages/AdminInicio";
import PublicadorInicio from "./pages/PublicadorInicio";
import AdoptanteInicio from "./pages/AdoptanteInicio";
import RegistrarMascota from "./pages/RegistrarMascota";
import RegistrarEspecie from "./pages/RegistrarEspecie";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/galeria" element={<Gallery />} />

          <Route
            path="/publicar"
            element={
              <ProtectedRoute>
                <PublishPet />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminInicio />
              </ProtectedRoute>
            }
          />

          <Route
            path="/publicador"
            element={
              <ProtectedRoute requiredRole="publicador">
                <PublicadorInicio />
              </ProtectedRoute>
            }
          />

          <Route
            path="/adoptante"
            element={
              <ProtectedRoute requiredRole="adoptante">
                <AdoptanteInicio />
              </ProtectedRoute>
            }
          />

          <Route
            path="/registrar-especie"
            element={
              <ProtectedRoute requiredRole="admin">
                <RegistrarEspecie />
              </ProtectedRoute>
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/mascotas" element={<ListaMascotas />} />

          <Route
            path="/registrar-mascota"
            element={
              <ProtectedRoute>
                <RegistrarMascota />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
