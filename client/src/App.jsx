
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Map from './pages/Map'
import Layout from './components/Layout'
function App() {

  return (
    <BrowserRouter basename="/GeoVisor-Duero/">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mapa" element={<Map />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App
