import React from 'react'
import { useOutletContext } from 'react-router-dom'

const AdminVanDetails = () => {
  
  const {van} = useOutletContext()

  return (
    <div className='admin-vanroute-details'>
      <p>Name: <span className='f-w-normal'>{van.name}</span> </p>
      <p>Category: <span className='f-w-normal'>{van.type}</span> </p>
      <p>Description: <span className='f-w-normal'>{van.description}</span></p>
      <p>Visibility: <span className='f-w-normal'>Public</span> </p>
    </div>
  )
}

export default AdminVanDetails