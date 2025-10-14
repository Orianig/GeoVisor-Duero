import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    const isMapPage = location.pathname === '/map';
    
    return (
        <div className={isMapPage ? "h-screen flex flex-col overflow-hidden" : "min-h-screen flex flex-col"}>
            <div className="flex-shrink-0">
                <Navbar />
            </div>
            <div className={isMapPage ? "flex-1 overflow-hidden" : "flex-1"}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
