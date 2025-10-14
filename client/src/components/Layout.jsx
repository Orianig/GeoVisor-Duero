import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <div className="flex-shrink-0">
                <Navbar />
            </div>
            <div className="flex-1 overflow-hidden">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
