import React from 'react';
import Van from '../../components/Van'
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import getVans from "../../api/api"

export const vansLoader = () => {
  return defer({vans: getVans()})
}

const Vans = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const filterType = searchParams.get("type")
  const vansLoader = useLoaderData()
  
  const simpleColor = filterType === 'Simple' ? "selected" : ""
  const luxuryColor = filterType === 'Luxury' ? "selected" : ""
  const ruggedColor = filterType === 'Rugged' ? "selected" : ""

  const renderVansElements = (loadedVans) => {
            
  const filteredVans = filterType ? loadedVans.filter(van => van.type === filterType) : loadedVans

  const elements = filteredVans.map(item => (
    <div key={item.id}>
      <Link 
        to={item.id} 
        state={
          {
            search: searchParams.toString(),
            type: filterType
          }
        }
      >
        <Van 
          key={item.id}
          name={item.name}
          price={item.price}
          type={item.type}
          image={item.image}
          btn={item.type}
        />
      </Link>
    </div>
    ) 
  )

  return (
    <>
    {elements}
    </>
  )
}

  return (
    <div className='vans container'>    
        <p className='vans-title'>Explore our van options</p>
       <div className='row'>                                   
        <button onClick={() => setSearchParams({type: 'Simple'})} className={`filter-btn simple col ${simpleColor}`}>Simple</button>
        <button onClick={() => setSearchParams({type: 'Luxury'})} className={`filter-btn luxury col ${luxuryColor}`}>Luxury</button>
        <button onClick={() => setSearchParams({type: 'Rugged'})} className={`filter-btn rugged col ${ruggedColor}`}>Rugged</button>
        {filterType && <button onClick={() => setSearchParams({})} className='clearfilter-btn col'>Clear filters</button>}
      </div>
      <div className='row-van vans-imgs'>
        <React.Suspense fallback={<h1>Loading vans...</h1>}>
          <Await resolve={vansLoader.vans}>
            {renderVansElements}
          </Await>
        </React.Suspense>
      </div>
    </div>
  )
}

export default Vans