import { useNavigate } from 'react-router-dom';
import DataList from '../components/DataList';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
            GeoVisor Duero
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Bienvenido</h2>
            <p className="text-gray-600 mb-4">
              Esta es la página principal de GeoVisor Duero.
            </p>
            <button 
              onClick={() => navigate('/mapa')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Ver Mapa
            </button>
          </div>

          <DataList />
        </div>
      </div>
    </>
  );
};

export default Home;
  