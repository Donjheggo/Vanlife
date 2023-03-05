import React from 'react';
import Van from '../components/Van'


const Vans = () => {

  const [vans, setVans] = React.useState([])

  React.useEffect( () => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => {
        const van = data.vans.map(van => ({
          id: van.id,
          image: van.image,
          name: van.name,
          type: van.type,
          description: van.description,
          price: van.price,
          isFiltered: false
        }))
        setVans(van)
      })
  },[])

  const filter = (type) => {
    setVans(prev => prev.map(van => {
      return van.type === type ? {...van, isFiltered: false} : {...van, isFiltered: true} 
    }))
  };

  const clearFilter = () => {
    setVanData(prev => prev.map(van => ({...van, isFiltered: false})))
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