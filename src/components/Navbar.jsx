import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Vans from '../pages/Vans'
import Home from '../pages/Home'


const Navbar = () => {
  return (
    <BrowserRouter>
      <nav>
        <div className='nav-hero'>
          <Link to="/">#VANLIFE</Link>
        </div>
        <div className='links'>
          <Link className='about-link' to="/about">About</Link>
          <Link className='vans-link' to="/vans">Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navbar