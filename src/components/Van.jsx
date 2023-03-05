import React from 'react'

const Van = (props) => {

  const btnColor = {
    backgroundColor: props.type === 'Simple' ? '#E17654' : props.type === 'Rugged' ? '#115E59' : '#161616'
  }


  return (
    <div className='col'>
        <img src={props.image} className="vans-img" />
        <div className='d-flex'>
            <div>
              <p className='vans-name'>{props.name}</p>
              <button className="vans-btn" style={btnColor}>{props.type}</button> 
            </div>
            <div className='ml-auto pr-1'>
              <p className='vans-price'>
                  ${props.price} 
                  <span className='price-perday'><br/>
                  /day
                  </span>
              </p>
            </div>

        </div>
        
    </div>
  )
}

export default Van