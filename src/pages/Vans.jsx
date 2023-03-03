import React from 'react';
import Van from '../components/Van'
import vandata from '../vandata'


const Vans = () => {

  const elements = vandata.map(item => (
    <Van 
      key={item.id}
      name={item.name}
      price={item.price}
      type={item.type}
      image={item.image}
      btn={item.type}
    />
    ) 
  )

  return (
    <div className='vans container'> 
      <p className='vans-title'>Explore our van options</p>
      <div className='row'>
        <button className='filter-btn col'>Simple</button>
        <button className='filter-btn col'>Luxury</button>
        <button className='filter-btn col'>Rugged</button>
        <button className='clearfilter-btn col'>Clear filters</button>
      </div>
      <div className='row-van vans-imgs'>
        {elements}
      </div>
    </div>
  )
}

export default Vans