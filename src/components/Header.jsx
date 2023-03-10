import React from 'react'
import {NavLink } from 'react-router-dom'
import signinImg from "/images/signin.svg"


const Header = () => {

  const fakeLogout = () => {
    localStorage.clear()
  }

  return (
      <header>
        
          <div className='nav-hero'>
            <NavLink 
              to="/"
            >
            #VANLIFE
            </NavLink>
          </div>
          <div className='links'>
            <NavLink 
              to="/admin" 
              className={({isActive}) => isActive ? "admin-link active-link" : "admin-link "}>
              Admin
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => isActive ? "about-link active-link" : "about-link "}>
              About
            </NavLink>
            <NavLink 
              to="/vans" 
              className={({isActive}) => isActive ? "vans-link active-link" : "vans-link "}>
              Vans
            </NavLink>
            <NavLink 
              to="/login" 
              className={({isActive}) => isActive ? "vans-link active-link" : "signin-link "}>
              <img src={signinImg} className="signin-logo"/>
            </NavLink>
            <NavLink onClick={fakeLogout}>
              Logout
            </NavLink>
          </div>
       
      </header>

  )
}

export default Header