import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1 className="text-2xl font-bold text-red-500 p-4">GeoVisor Duero</h1>
      </div>
    </>
  )
}

export default App
