import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Pricing = () => {

  const {van} = useOutletContext()

  return (
    <div>
      <p className='admin-vanroute-price'>
        ${van.price}
        <span className='admin-vanroute-day'>/day</span>
      </p>
    </div>
  )
}

export default Pricing