import { useState, useEffect, useCallback } from 'react';
import L from 'leaflet';
import MapView from '../components/MapView';
import Sidebar from '../components/Sidebar';
import Details from '../components/Details';
import config from '../config.js';

const Map = () => {
  const [watershedData, setWatershedData] = useState(null);
  const [wellData, setWellData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [layerVisibility, setLayerVisibility] = useState({
    watersheds: true,
    wells: true
  });
  const [visibleFeatures, setVisibleFeatures] = useState({
    watersheds: 0,
    wells: 0
  });

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
    } finally {
      setLoading(false);
    }
  };

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const handleLayerToggle = (layerName) => {
    setLayerVisibility(prev => ({
      ...prev,
      [layerName]: !prev[layerName]
    }));
  };

  const handleMapBoundsChange = useCallback((bounds) => {
    if (!bounds) return;

    let visibleWells = 0;
    let visibleWatersheds = 0;

    if (wellData?.features) {
      visibleWells = wellData.features.filter(feature => {
        const [lng, lat] = feature.geometry.coordinates;
        return bounds.contains([lat, lng]);
      }).length;
    }

    if (watershedData?.features) {
      const mapCenter = bounds.getCenter();
      visibleWatersheds = watershedData.features.filter(feature => {
        if (feature.geometry.type === 'Polygon') {
          const coords = feature.geometry.coordinates[0].map(([lng, lat]) => [lat, lng]);
          return L.polygon(coords).getBounds().contains(mapCenter);
        }
        if (feature.geometry.type === 'MultiPolygon') {
          return feature.geometry.coordinates.some(polygon => {
            const coords = polygon[0].map(([lng, lat]) => [lat, lng]);
            return L.polygon(coords).getBounds().contains(mapCenter);
          });
        }
        return false;
      }).length;
    }

    setVisibleFeatures({
      wells: visibleWells,
      watersheds: visibleWatersheds
    });
  }, [wellData, watershedData]);

  useEffect(() => {
    if (watershedData && wellData) {
      const initialBounds = L.latLngBounds([
        [40.5, -6.0],  
        [42.5, -3.5]   
      ]);
      handleMapBoundsChange(initialBounds);
    }
  }, [watershedData, wellData, handleMapBoundsChange]);

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

  const detailsHeight = selectedFeature ? '35%' : '15%';
  const mapHeight = selectedFeature ? '65%' : '85%';

  return (
    <div className="h-full flex overflow-hidden">
      <div className="w-80 bg-white border-r border-gray-200 flex-shrink-0">
        <Sidebar 
          watershedData={watershedData}
          wellData={wellData}
          layerVisibility={layerVisibility}
          onLayerToggle={handleLayerToggle}
          visibleFeatures={visibleFeatures}
        />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-shrink-0 transition-all duration-300" style={{ height: mapHeight }}>
          <MapView 
            watershedData={layerVisibility.watersheds ? watershedData : null}
            wellData={layerVisibility.wells ? wellData : null}
            onFeatureClick={handleFeatureClick}
            onBoundsChange={handleMapBoundsChange}
          />
        </div>
        
        <div 
          className="bg-white border-t border-gray-200 flex-shrink-0 transition-all duration-300" 
          style={{ height: detailsHeight }}
        >
          <Details 
            selectedFeature={selectedFeature}
            onClearSelection={() => setSelectedFeature(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
  