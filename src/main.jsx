import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import AppUseContext from './AppUseContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppUseContext />
  </StrictMode>,
)

// tolong jangan langsung membuat routerprovider tetapi menggunakan app.jsx 

