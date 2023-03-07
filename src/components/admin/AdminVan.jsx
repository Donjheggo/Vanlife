import React from 'react'

const AdminVan = (props) => {
  return (
    <div className='admin-van d-flex mt-2'>
      <img src={props.image} className='admin-van-img'/>
        <div className='admin-van-data'>
          <p className='admin-van-name'>{props.name}<br/>
          <span className='admin-van-price'>${props.price}/day</span>
          </p>
        </div>
    </div>
  )
}

export default AdminVan