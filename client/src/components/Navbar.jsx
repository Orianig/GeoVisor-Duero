
import { Link, useLocation } from 'react-router-dom';
import { FaHouse } from 'react-icons/fa6';
import { FaMapMarkedAlt } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const getLinkClasses = (path) => {
    const baseClasses = 'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors';
    const activeClasses = 'bg-sky-100 text-sky-900';
    const inactiveClasses = 'text-gray-600 hover:text-gray-900 hover:bg-gray-50';
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };
  const navItems = [
    {
      path: '/',
      icon: FaHouse,
      label: 'Home'
    },
    {
      path: '/map',
      icon: FaMapMarkedAlt,
      label: 'Map'
    }
  ];
  
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className=" px-2 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex justify-around">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-sky-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GD</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">GeoVisor Duero</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={getLinkClasses(item.path)}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;