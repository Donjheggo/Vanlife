import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Pricing = () => {

  const {van} = useOutletContext()

  return (
    <div>
      <p className='host-vanroute-price'>
        ${van.price}
        <span className='host-vanroute-day'>/day</span>
      </p>
    </div>
  )
}

export default Pricing