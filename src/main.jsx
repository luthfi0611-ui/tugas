import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from "react-router"
import  router  from "./Router.jsx"
import { TooltipProvider } from "./components/ui/tooltip";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
 
  </React.StrictMode>
)




  //  <App/> <App/>