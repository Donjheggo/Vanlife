import React from 'react'
import { useParams, NavLink, Outlet } from 'react-router-dom'
import backimg from "/images/backicon.svg"

const HostVanLayout = () => {

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
    <div className='container mb-5'>
      <div className='mt-4'>
        <NavLink to=".." relative="path"> <img src={backimg} /> Back to all vans</NavLink>
      </div>
      <div className='container bg-white pt-2 pb-2 mt-2'>
        <div className='d-flex'>
          <img src={van.image} className="host-van-img"/>
          <div className='host-vanroute-data'>
            <button style={btnColor} className='host-vanroute-btn mt-2'>{van.type}</button>
            <p className='host-vanroute-name'>{van.name}<br/>
              <span className='host-vanroute-price'>${van.price}<span className='host-vanroute-day'>/day</span></span>
            </p>
          </div>
        </div>
        <nav className='host-van-links'>
          <NavLink end to="." className={({isActive}) => isActive ? 'active-link' : ""}>Details</NavLink>
          <NavLink to="pricing" className={({isActive}) => isActive ? 'active-link' : ""}>Pricing</NavLink>
          <NavLink to="photos" className={({isActive}) => isActive ? 'active-link' : ""}>Photos</NavLink>
        </nav>
        <Outlet context={{van}}/>
      </div>
    </div>
  )
}

export default HostVanLayout