import React from 'react'
import { createBrowserRouter } from 'react-router'
import SantriDetail from "./santri/SantriDetail.jsx"

import AppLayout from '@/layout/Applayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Santri from './pages/Santri.jsx'
import SantriLayout from './layout/SantriLayout.jsx'
import SantriList from './santri/SantriList.jsx'
import SantriNilai from './santri/SantriNilai.jsx'
import SantriAbsensi from './santri/SantriAbsensi.jsx'
import SantriTambah from './santri/SantriTambah.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'santri',
        element: <SantriLayout />,
        children: [
            {
                index: true,
                element: <SantriList />,
            },
            {
                path: "nilai",
                element: <SantriNilai />,
            },
            {
                path: 'tambah',
                element: <SantriTambah />,
            },
            {
                path: "absensi",
                element: <SantriAbsensi />,
            },
            {
                 path: "list/:santri_id",
                element: <SantriDetail /> 
            },
        ]
      },
    ],
  },
  
])

export default router