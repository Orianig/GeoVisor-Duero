import { FaInfoCircle, FaTimes, FaMapPin, FaRuler, FaArrowUp } from 'react-icons/fa';
import { FaDroplet, FaWater } from 'react-icons/fa6';

const Details = ({ selectedFeature, onClearSelection }) => {
  if (!selectedFeature) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center flex-col gap-y-2 p-6">
         <div className="flex justify-center items-center gap-x-2"> <FaInfoCircle className="w-6 h-6 text-gray-400" />
          <h3 className="text-lg font-medium text-gray-600">
            Selecciona un elemento en el mapa
          </h3></div>
          <p className="text-sm text-gray-500">
            Haz clic en cualquier cuenca o pozo para ver sus detalles completos
          </p>
        </div>
      </div>
    );
  }

  const { properties, geometry } = selectedFeature;
  const isWell = geometry.type === 'Point';
  const isWatershed = geometry.type === 'Polygon' || geometry.type === 'MultiPolygon';

  const formatValue = (value, unit = '') => {
    if (value === null || value === undefined || value === '') return 'No disponible';
    return `${value}${unit}`;
  };

  const getFeatureIcon = () => {
    if (isWell) return <FaDroplet className="w-5 h-5 text-red-500" />;
    if (isWatershed) return <FaWater className="w-5 h-5 text-blue-500" />;
    return <FaMapPin className="w-5 h-5 text-gray-500" />;
  };

  const getFeatureTitle = () => {
    if (isWell) return properties.nombre || properties.id_pozo || 'Pozo sin nombre';
    if (isWatershed) return properties.nombre || properties.name || 'Cuenca sin nombre';
    return 'Elemento desconocido';
  };

  const getFeatureType = () => {
    if (isWell) return 'Pozo de agua';
    if (isWatershed) return 'Cuenca hidrográfica';
    return geometry.type;
  };

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          {getFeatureIcon()}
          <div>
            <h3 className="font-semibold text-gray-900">{getFeatureTitle()}</h3>
            <p className="text-sm text-gray-500">{getFeatureType()}</p>
          </div>
        </div>
        <button
          onClick={onClearSelection}
          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          title="Cerrar detalles"
        >
          <FaTimes className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FaInfoCircle className="w-4 h-4 mr-2" />
              Información básica
            </h4>
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Tipo de geometría:</span>
                <span className="text-sm font-medium">{geometry.type}</span>
              </div>
              {properties.id && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">ID:</span>
                  <span className="text-sm font-medium">{properties.id}</span>
                </div>
              )}
            </div>
          </div>

          {isWell && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FaDroplet className="w-4 h-4 mr-2" />
                Datos del pozo
              </h4>
              <div className="bg-blue-50 rounded-lg p-3 space-y-2">
                {properties.elevacion && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Elevación:</span>
                    <span className="text-sm font-medium flex items-center">
                      <FaArrowUp className="w-3 h-3 mr-1" />
                      {formatValue(properties.elevacion, ' m')}
                    </span>
                  </div>
                )}
                {properties.profundidad && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Profundidad:</span>
                    <span className="text-sm font-medium">{formatValue(properties.profundidad, ' m')}</span>
                  </div>
                )}
                {properties.caudal && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Caudal:</span>
                    <span className="text-sm font-medium">{formatValue(properties.caudal, ' L/s')}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {isWatershed && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FaWater className="w-4 h-4 mr-2" />
                Datos de la cuenca
              </h4>
              <div className="bg-green-50 rounded-lg p-3 space-y-2">
                {properties.area && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Área:</span>
                    <span className="text-sm font-medium flex items-center">
                      <FaRuler className="w-3 h-3 mr-1" />
                      {formatValue(properties.area, ' m²')}
                    </span>
                  </div>
                )}
                {properties.perimetro && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Perímetro:</span>
                    <span className="text-sm font-medium">{formatValue(properties.perimetro, ' m')}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Propiedades completas
            </h4>
            <div className="bg-gray-50 rounded-lg p-3">
              {Object.entries(properties).length > 0 ? (
                <div className="space-y-1">
                  {Object.entries(properties).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                      <span className="font-mono text-gray-800 max-w-32 truncate">
                        {formatValue(value)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No hay propiedades adicionales</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
