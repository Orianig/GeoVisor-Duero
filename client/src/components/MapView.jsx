import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapView = ({ 
  watershedData = null,
  wellData = null,
  onFeatureClick 
}) => {
  const DUERO_CENTER = [41.4, -4.75];
  const INITIAL_ZOOM = 8;

  const getLayerStyle = (layerType) => {
    const styles = {
      watersheds: { 
        color: '#3B82F6', 
        weight: 2, 
        fillOpacity: 0.1,
        fillColor: '#3B82F6'
      },
      wells: { 
        color: '#EF4444', 
        weight: 3, 
        fillOpacity: 0.9,
        fillColor: '#EF4444',
        radius: 6,
        interactive: true,
        bubblingMouseEvents: false
      }
    };
    return styles[layerType] || { color: '#6B7280', weight: 1 };
  };

  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, getLayerStyle('wells'));
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        if (onFeatureClick) {
          onFeatureClick(feature);
        }
      }
    });

    if (feature.properties) {
      const props = feature.properties;
      const popupContent = `
        <div class="p-2">
          <h3 class="font-semibold text-lg">${props.nombre || props.id_pozo || 'Sin nombre'}</h3>
          <p class="text-sm text-gray-600">Tipo: ${feature.geometry.type}</p>
          ${props.elevacion ? `<p class="text-sm">Elevación: ${props.elevacion}m</p>` : ''}
          ${props.area ? `<p class="text-sm">Área: ${props.area} m²</p>` : ''}
        </div>
      `;
      layer.bindPopup(popupContent);
    }
  };

  return (
    <div className="h-full w-full">
      <MapContainer
        center={DUERO_CENTER}
        zoom={INITIAL_ZOOM}
        className="h-full w-full rounded-lg shadow-lg"
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          maxZoom={19}
          minZoom={2}
        />
        {watershedData && (
          <GeoJSON
            key="watersheds"
            data={watershedData}
            style={() => getLayerStyle('watersheds')}
            onEachFeature={onEachFeature}
            pane="overlayPane"
          />
        )}
        {wellData && (
          <GeoJSON
            key="wells"
            data={wellData}
            pointToLayer={pointToLayer}
            onEachFeature={onEachFeature}
            pane="markerPane"
          />
        )}
      </MapContainer>
    </div>
  );
};

export default MapView;
