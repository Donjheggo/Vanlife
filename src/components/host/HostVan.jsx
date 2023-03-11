import React from 'react'

const HostVan = (props) => {
  return (
    <div className='host-van d-flex mt-2'>
      <img src={props.image} className='host-van-imgs'/>
        <div className='host-van-data'>
          <p className='host-van-name'>{props.name}<br/>
          <span className='host-van-price'>${props.price}/day</span>
          </p>
        </div>
    </div>
  )
}

export default HostVan