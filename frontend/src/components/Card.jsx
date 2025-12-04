import PropTypes from 'prop-types';
import Button from './Button';

const Card = ({
  imagen,
  nombre,
  edad,
  especie,
  descripcion,
  publicador,
  onVerMas,
  onAdoptar,
  adoptada = false,
  className = ''
}) => {
  return (
    <div className={"bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 " + className}>
      <div className="relative h-56 overflow-hidden">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300?text=Sin+Imagen";
          }}
        />
        {adoptada && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
            Adoptado
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white text-2xl font-bold">{nombre}</h3>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <span className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
            </svg>
            {edad}
          </span>
          <span className="flex items-center gap-1.5 bg-green-50 px-3 py-1 rounded-full">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {especie}
          </span>
        </div>

        {publicador && (
          <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span>Publicado por <span className="font-medium text-gray-700">{publicador}</span></span>
          </div>
        )}

        <p className="text-gray-600 mb-4 line-clamp-2 h-12">
          {descripcion || 'Sin descripción disponible'}
        </p>

        <div className="flex gap-2 mt-4">
          {onVerMas && (
            <Button
              text="Ver más"
              onClick={onVerMas}
              variant="outline"
              className="flex-1"
            />
          )}
          {onAdoptar && !adoptada && (
            <Button
              text="Adoptar"
              onClick={onAdoptar}
              variant="secondary"
              className="flex-1"
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.string.isRequired,
  especie: PropTypes.string.isRequired,
  descripcion: PropTypes.string,
  publicador: PropTypes.string,
  onVerMas: PropTypes.func,
  onAdoptar: PropTypes.func,
  adoptada: PropTypes.bool,
  className: PropTypes.string
};

export default Card;
