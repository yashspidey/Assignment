import React from 'react'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Photo Gallery</h1>
        <Gallery />
      </div>
    </div>
  )
}

export default App