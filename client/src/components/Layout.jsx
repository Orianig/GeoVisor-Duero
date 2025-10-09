import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
                   <div className='bg-red-200'><Navbar /></div>
                   <div className='bg-blue-200'> <Outlet /></div>
        </div>
    )
}

export default Layout
