import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Vans from '../pages/Vans'
import Home from '../pages/Home'
import VanDetails from '../pages/VanDetails'


const Navbar = () => {

  const anchorStyle = {
    fontSize: 'inherit', 
    color: 'inherit'
  }

  return (
      <div>
        <nav>
          <div className='nav-hero'>
            <Link to="/" style={anchorStyle}>#VANLIFE</Link>
          </div>
          <div className='links'>
            <Link to="/about" style={anchorStyle}><span className='about-link' >About</span></Link>
            <Link className='vans-link' to="/vans" style={anchorStyle}>Vans</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetails />}/>
        </Routes>
      </div>

  )
}

export default Navbar