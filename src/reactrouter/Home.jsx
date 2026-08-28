import React from 'react'
import { Link, NavLink } from 'react-router'

function Home() {
  return (
    <>

    <nav>
        <NavLink to="/about" className={({ isActive}) => 
        isActive ? "text-red-500" : ""
        }>About</NavLink>
    </nav>
    
    <Link to="/about">About</Link>

    <a target='_blank' href="https://www.google.com">Google</a>

    <div>homes</div>

        
    </>
  )
}

export default Home
