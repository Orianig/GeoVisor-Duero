import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
    return (
      <>
        <div className="min-h-screen bg-red-500 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
              GeoVisor Duero
            </h1>
          </div>
          <button onClick={() => navigate('/mapa')}>Mapa</button>
        </div>
      </>
    )
  }
  
  export default Home
  