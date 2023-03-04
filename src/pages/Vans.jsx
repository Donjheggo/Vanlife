import React from 'react';
import Van from '../components/Van'
import vandata from '../vandata'


const Vans = () => {

  const vansElements = () => {
    let elements = []
    for(let i = 0; i < vandata.length; i ++){
      elements.push({
        id: vandata[i].id,
        image: vandata[i].image,
        name: vandata[i].name,
        price: vandata[i].price,
        type: vandata[i].type,
        isFiltered: false
      })
    }
    return elements;
  }

  const [vans, setVans] = React.useState(vansElements())


  const filter = (type) => {
    setVans(prev => prev.map(van => {
      return van.type === type ? {...van, isFiltered: false} : {...van, isFiltered: true} 
    }))
  };


  const clearFilter = () => {
    setVans(vansElements())
  }


  const filteredVans = vans.filter(van => !van.isFiltered)


  const elements = filteredVans.map(item => (
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
        <button onClick={() => filter('Simple')} className='filter-btn col'>Simple</button>
        <button onClick={() => filter('Luxury')} className='filter-btn col'>Luxury</button>
        <button onClick={() => filter('Rugged')} className='filter-btn col'>Rugged</button>
        <button onClick={clearFilter} className='clearfilter-btn col'>Clear filters</button>
      </div>
      <div className='row-van vans-imgs'>
        {elements}
      </div>
    </div>
  )
}

export default Vans