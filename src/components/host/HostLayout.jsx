import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <div>
        <nav className='host-links'>
            <NavLink 
              to="." 
              end
              className={({isActive}) => isActive ? "active-link" : ""}>
              Dashboard
            </NavLink>

            <NavLink 
              to="income"
              className={({isActive}) => isActive ? "active-link" : ""}>
              Income
            </NavLink>

            <NavLink 
              to="vans"
              className={({isActive}) => isActive ? "active-link" : ""}>
              Vans
            </NavLink>

            <NavLink 
              to="reviews"
              className={({isActive}) => isActive ? "active-link" : ""}>
              Reviews
            </NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default HostLayout