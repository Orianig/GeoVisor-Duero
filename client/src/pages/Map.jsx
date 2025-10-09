import { useNavigate } from 'react-router-dom'




const Map = () => {
  const navigate = useNavigate()
    return (
      <>
        <div className="min-h-screen bg-red-500 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
              Soy mapa
            </h1>
          </div>
          <button onClick={() => navigate('/')}>Home</button>
        </div>
      </>
    )
  }
  
  export default Map
  