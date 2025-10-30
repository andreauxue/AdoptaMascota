import ListaPlatillos from "../components/ListaPlatillos";

export default function Platillos() {
    return (
        <div className="min-h-screen bg-amber-50 p-6">
            <h1 className="text-3xl font-bold text-center text-amber-700 mb-6">
                🍽️ Galería de Platillos
            </h1>
            <ListaPlatillos />
        </div>
  );
}
