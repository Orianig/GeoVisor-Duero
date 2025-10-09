import { useState, useEffect } from 'react';
import config from '../config.js';

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${config.API_BASE_URL}/api/data`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
        Cargando datos del servidor...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">📍 Puntos del Río Duero</h3>
      <p className="text-gray-600 mb-4">
        Datos obtenidos desde: <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          {config.API_BASE_URL}/api/data
        </code>
      </p>
      
      <div className="grid gap-4">
        {data.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>Lat: {item.lat}</p>
                <p>Lng: {item.lng}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        Total de puntos: {data.length}
      </div>
    </div>
  );
};

export default DataList;
