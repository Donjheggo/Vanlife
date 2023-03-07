import React from 'react'
import { useParams, NavLink, Outlet } from 'react-router-dom'

const AdminVanLayout = () => {

    const params = useParams()

    const [van, setVan] = React.useState([])

    React.useEffect( () => {
       fetch(`/api/vans/${params.id}`)
          .then(res => res.json())
          .then(data => setVan(data.vans))
    },[params.id])


    const btnColor = {
      backgroundColor: van.type === 'Simple' ? '#E17654' : van.type === 'Rugged' ? '#115E59' : '#161616'
  }


  return (
    <div className='container'>
      <div className='container bg-white pt-2 pb-2'>
        <div className='d-flex'>
          <img src={van.image} className="admin-van-img"/>
          <div className='admin-vanroute-data'>
            <button style={btnColor} className='admin-vanroute-btn mt-2'>{van.type}</button>
            <p className='admin-vanroute-name'>{van.name}<br/>
              <span className='admin-vanroute-price'>${van.price}<span className='admin-vanroute-day'>/day</span></span>
            </p>
          </div>
        </div>
        <nav className='admin-van-links'>
          <NavLink end to={`/admin/vans/${params.id}`} className={({isActive}) => isActive ? 'active-link' : ""}>Details</NavLink>
          <NavLink to={`/admin/vans/${params.id}/pricing`} className={({isActive}) => isActive ? 'active-link' : ""}>Pricing</NavLink>
          <NavLink to={`/admin/vans/${params.id}/photos`} className={({isActive}) => isActive ? 'active-link' : ""}>Photos</NavLink>
        </nav>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminVanLayout