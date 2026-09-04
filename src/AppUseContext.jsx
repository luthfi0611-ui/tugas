import { useState } from 'react'
import NameUserContext from './NameUserContext'
import Navbar from './TugasUseContext/Navbar'
import Profile from './TugasUseContext/Profile'

function AppUseContext() {
  const [nama, setNama] = useState('Fulan')

  return (
    <NameUserContext.Provider value={{ nama, setNama }}>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto space-y-5">

          <Navbar />

          <Profile />

          <button
            onClick={() => setNama('Ali')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Ganti Nama
          </button>

        </div>
      </div>
    </NameUserContext.Provider>
  )
}

export default AppUseContext