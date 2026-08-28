import React from 'react'
import { createBrowserRouter } from 'react-router'
// import Profile from './reactrouter/Profile'
// import Home from './reactrouter/Home'
// import About from './reactrouter/About'
// import Contact from './reactrouter/Contact'
import NotFound from './reactrouter/NotFound'
// import ProfileDetail from './reactrouter/ProfileDetail'
import { DashboardSantri, DaftarSantri, DetailSantri } from './reactrouter/Tugas-08'

const router = createBrowserRouter([

    {
        path: '/',
        element: <DashboardSantri />,
    },
    {
        path: '/santri',
        element: <DaftarSantri />,
    },
    {
        path: '/santri/:id',
        element: <DetailSantri />,
    },
    // {
    //     path: '/home',
    //     element: <Home />,
    // },
    // {
    //     path: '/profile',
    //     element: <Profile />,
    // },
    // {
    //     path: '/about',
    //     element: <About />,
    // },
    // {
    //     path: '/contact',
    //     element: <Contact />,
    // },
    {
        path: '*',
        element: <NotFound />,
    },
    // {
    //     path: '/profile/:id',
    //     element: <ProfileDetail />,
    // },
    

])

export default router
