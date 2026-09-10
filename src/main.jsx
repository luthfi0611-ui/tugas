import React from 'react'
import ReactDOM from 'react-dom/client'
// import { RouterProvider } from 'react-router'
// import { router } from './Router'
// import { TooltipProvider } from './components/ui/tooltip' // Import ini
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider> */}
  </React.StrictMode>
)