import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <nav className='admin-links'>
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

export default AdminLayout