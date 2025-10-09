import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from './config.js'

function App() {
  const [count, setCount] = useState(0)
  const [serverMessage, setServerMessage] = useState('')
  const [loading, setLoading] = useState(false)

  // Test connection to server
  const testServerConnection = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${config.API_BASE_URL}/api/data`)
      const data = await response.json()
      setServerMessage(data.message)
    } catch (error) {
      setServerMessage('Error connecting to server: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Test connection on component mount
    testServerConnection()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
            GeoVisor Duero
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Server Connection Test</h2>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                API Base URL: <code className="bg-gray-100 px-2 py-1 rounded">{config.API_BASE_URL}</code>
              </p>
              <button 
                onClick={testServerConnection}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded"
              >
                {loading ? 'Testing...' : 'Test Server Connection'}
              </button>
            </div>
            {serverMessage && (
              <div className={`p-3 rounded ${
                serverMessage.includes('Error') 
                  ? 'bg-red-100 text-red-700 border border-red-300' 
                  : 'bg-green-100 text-green-700 border border-green-300'
              }`}>
                <strong>Server Response:</strong> {serverMessage}
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">React Counter</h2>
            <div className="text-center">
              <button 
                onClick={() => setCount(count + 1)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
              >
                Count: {count}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
