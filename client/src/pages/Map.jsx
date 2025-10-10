import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MapView from '../components/MapView';
import config from '../config.js';

const Map = () => {
  const navigate = useNavigate();
  const [watershedData, setWatershedData] = useState(null);
  const [wellData, setWellData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    fetchMapData();
  }, []);

  const fetchMapData = async () => {
    try {
      setLoading(true);
      
      const [watershedsResponse, wellsResponse] = await Promise.all([
        fetch(`${config.API_BASE_URL}/api/data/watersheds`),
        fetch(`${config.API_BASE_URL}/api/data/wells?limit=1000`)
      ]);
      
      if (!watershedsResponse.ok || !wellsResponse.ok) {
        throw new Error('Error loading map data');
      }
      
      const watershedsResult = await watershedsResponse.json();
      const wellsResult = await wellsResponse.json();
      
      setWatershedData(watershedsResult.data);
      setWellData(wellsResult.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching map data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    console.log('Feature clicked:', feature);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Cargando mapa del río Duero...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error al cargar el mapa</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
          >
            Volver al Inicio
          </button>
          <button 
            onClick={fetchMapData}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🗺️ GeoVisor Duero</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm">
            📍 {wellData?.metadata?.returned || 0} pozos • 
            🏞️ {watershedData?.features?.length || 0} cuencas
          </span>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Home
          </button>
        </div>
      </div>
      
      <div className="flex-1">
        <MapView 
          watershedData={watershedData}
          wellData={wellData}
          onFeatureClick={handleFeatureClick}
        />
      </div>
    </div>
  );
};

export default Map;
  