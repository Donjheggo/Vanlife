import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <nav className='admin-links'>
            <NavLink 
            className={({isActive}) => isActive ? "active-link" : ""}
            to="/admin" end>Dashboard</NavLink>
            <NavLink 
            className={({isActive}) => isActive ? "active-link" : ""}
            to="/admin/income">Income</NavLink>
            <NavLink 
            className={({isActive}) => isActive ? "active-link" : ""}
            to="/admin/vans">Vans</NavLink>
            <NavLink 
            className={({isActive}) => isActive ? "active-link" : ""}
            to="/admin/reviews">Reviews</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default AdminLayout