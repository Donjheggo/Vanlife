import React from 'react'
import { useParams } from 'react-router-dom'

const Pricing = () => {

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