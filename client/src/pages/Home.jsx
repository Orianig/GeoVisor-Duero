import { useNavigate } from 'react-router-dom';
import { FaMapMarkedAlt, FaWater, FaChartLine, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaArrowRight, FaCode, FaDatabase, FaGlobe, FaDroplet } from 'react-icons/fa6';

const Home = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: FaMapMarkedAlt,
      title: "Visualización Interactiva",
      description: "Explora cuencas hidrográficas del río Duero con mapas dinámicos y controles avanzados"
    },
    {
      icon: FaChartLine,
      title: "Estadísticas en Tiempo Real",
      description: "Datos actualizados automáticamente según el área visible del mapa"
    },
    {
      icon: FaWater,
      title: "Datos Geoespaciales",
      description: "Información detallada de cuencas hidrográficas y pozos de agua"
    }
  ];

  const techStack = [
    { icon: FaCode, name: "React + Vite", color: "text-sky-500" },
    { icon: FaGlobe, name: "Leaflet Maps", color: "text-green-500" },
    { icon: FaDatabase, name: "Node.js + Express", color: "text-yellow-500" }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50 overflow-y-auto">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/10 to-sky-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center shadow-xl">
                <FaMapMarkedAlt className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-sky-600 to-sky-600 bg-clip-text text-transparent">
                GeoVisor
              </span>
              <br />
              <span className="text-gray-700">Duero</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Aplicación web moderna para la visualización y análisis de datos geoespaciales 
              del río Duero. Desarrollada con tecnologías de vanguardia para demostrar 
              capacidades full-stack.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/map')}
                className="group bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <FaMapMarkedAlt className="mr-3 w-5 h-5" />
                Explorar Mapa
                <FaArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.open('https://github.com/Orianig/GeoVisor-Duero', '_blank')}
                className="group bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <FaGithub className="mr-3 w-5 h-5" />
                Ver Código
                <FaArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Características Principales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una aplicación completa que demuestra dominio en desarrollo frontend, backend y visualización de datos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stack Tecnológico</h2>
            <p className="text-lg text-gray-600">Tecnologías modernas para una experiencia óptima</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
                <tech.icon className={`w-12 h-12 ${tech.color} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="flex items-center justify-center mb-4">
                <FaWater className="w-8 h-8 mr-3" />
                <span className="text-4xl font-bold">15+</span>
              </div>
              <p className="text-xl text-sky-100">Cuencas Hidrográficas</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <FaDroplet className="w-8 h-8 mr-3" />
                <span className="text-4xl font-bold">1000+</span>
              </div>
              <p className="text-xl text-sky-100">Pozos de Agua</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <FaMapMarkedAlt className="w-8 h-8 mr-3" />
                <span className="text-4xl font-bold">100%</span>
              </div>
              <p className="text-xl text-sky-100">Interactivo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Listo para explorar?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Descubre las capacidades completas de esta aplicación geoespacial
          </p>
          <button 
            onClick={() => navigate('/map')}
              className="group bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-10 py-5 rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto cursor-pointer"
          >
            <FaMapMarkedAlt className="mr-4 w-6 h-6" />
            Comenzar
            <FaArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
  