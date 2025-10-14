import { FaEye, FaEyeSlash, FaMapMarkedAlt, FaWater } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';

const Sidebar = ({ 
  watershedData, 
  wellData, 
  layerVisibility, 
  onLayerToggle,
  visibleFeatures = { watersheds: 0, wells: 0 }
}) => {
  const stats = {
    totalWatersheds: watershedData?.features?.length || 0,
    totalWells: wellData?.metadata?.totalFeatures || 0,
    visibleWatersheds: layerVisibility.watersheds ? visibleFeatures.watersheds : 0,
    visibleWells: layerVisibility.wells ? visibleFeatures.wells : 0
  };

  const LayerToggle = ({ layerKey, icon: Icon, label, count, isVisible }) => (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center space-x-3">
        <Icon className={`w-4 h-4 ${isVisible ? 'text-blue-600' : 'text-gray-400'}`} />
        <div>
          <span className={`font-medium ${isVisible ? 'text-gray-900' : 'text-gray-500'}`}>
            {label}
          </span>
          <p className="text-sm text-gray-500">{count} elementos</p>
        </div>
      </div>
      <button
        onClick={() => onLayerToggle(layerKey)}
        className={`p-2 rounded-md transition-colors ${
          isVisible 
            ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
            : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
        }`}
      >
        {isVisible ? <FaEye className="w-4 h-4" /> : <FaEyeSlash className="w-4 h-4" />}
      </button>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
          <FaMapMarkedAlt className="w-5 h-5 mr-2 text-blue-600" />
          Control de Capas
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Gestiona la visualización de datos geográficos
        </p>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Estadísticas</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{stats.totalWatersheds}</div>
            <div className="text-xs text-blue-600">Cuencas totales</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{stats.totalWells}</div>
            <div className="text-xs text-green-600">Pozos totales</div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{stats.visibleWatersheds}</div>
            <div className="text-xs text-purple-600">Cuencas visibles</div>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{stats.visibleWells}</div>
            <div className="text-xs text-orange-600">Pozos visibles</div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Capas del mapa</h3>
        <div className="space-y-2">
          <LayerToggle
            layerKey="watersheds"
            icon={FaWater}
            label="Cuencas hidrográficas"
            count={stats.totalWatersheds}
            isVisible={layerVisibility.watersheds}
          />
          <LayerToggle
            layerKey="wells"
            icon={FaDroplet}
            label="Pozos de agua"
            count={stats.totalWells}
            isVisible={layerVisibility.wells}
          />
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Leyenda</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border border-[#21519e] bg-[#cad6eb] rounded"></div>
            <span className="text-sm text-gray-600">Cuencas hidrográficas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#ac62bd] rounded-full"></div>
            <span className="text-sm text-gray-600">Pozos de agua</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
