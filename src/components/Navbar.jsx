import React from 'react'
import {Link } from 'react-router-dom'


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
      </div>

  )
}

export default Navbar