import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Vans from '../pages/Vans'
import Home from '../pages/Home'


const Navbar = () => {
  return (
      <div>
        <nav>
          <div className='nav-hero'>
            <Link to="/">#VANLIFE</Link>
          </div>
          <div className='links'>
            <Link to="/about"><span className='about-link' >About</span></Link>
            <Link className='vans-link' to="/vans">Vans</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<Vans />}/>
        </Routes>
      </div>

  )
}

export default Navbar