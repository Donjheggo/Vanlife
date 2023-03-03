import React from 'react'
import one from '/images/vans/1.jpg';
import two from '/images/vans/2.jpg';
import three from '/images/vans/3.jpg';
import four from '/images/vans/4.jpg';
import five from '/images/vans/5.jpg';
import six from '/images/vans/6.jpg';


const Van = (props) => {
  return (
    <div className='col'>
        <img src={props.image} className="van-img" />
        <div className='d-flex'>
            <p className='van-name'>{props.name}</p>
            <p className='van-price ml-auto pr-1'>
                ${props.price} 
                <span className='price-perday'><br/>
                /day
                </span>
            </p>
        </div>
        <button className="van-btn">{props.type}</button> 
    </div>
  )
}

export default Van