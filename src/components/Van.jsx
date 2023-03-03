import React from 'react'
import one from '/images/vans/1.jpg';
import two from '/images/vans/2.jpg';
import three from '/images/vans/3.jpg';
import four from '/images/vans/4.jpg';
import five from '/images/vans/5.jpg';
import six from '/images/vans/6.jpg';


const Van = (props) => {

  const btnColor = {
    backgroundColor: props.type === 'Simple' ? '#E17654' : props.type === 'Rugged' ? '#115E59' : '#161616'
  }


  return (
    <div className='col'>
        <img src={props.image} className="van-img" />
        <div className='d-flex'>
            <div>
              <p className='van-name'>{props.name}</p>
              <button className="van-btn" style={btnColor}>{props.type}</button> 
            </div>
            <div className='ml-auto pr-1'>
              <p className='van-price'>
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