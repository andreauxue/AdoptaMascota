import GaleriaJuegos from '../components/GaleriaJuegos';

function MiGaleriaPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-10">
      <h1 className="text-5xl font-bold text-center text-white mb-8">
        Mi Galería de Videojuegos
      </h1>
      <GaleriaJuegos />
    </div>
  );
}

export default MiGaleriaPage;