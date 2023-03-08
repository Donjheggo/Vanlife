import React from 'react';
import Van from '../../components/Van'
import { Link, useSearchParams } from 'react-router-dom';
import getVans from "../../api/api"


const Vans = () => {

  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  
    React.useEffect( () => {
      const getVansAPI = async () => {
        setLoading(true)
        try{
          const data = await getVans()
          setVans(data)
        }catch(err){
          console.log(err)
          setError(err)
        }finally{
          setLoading(false)
        }
      }
      getVansAPI()
  },[])


  const [searchParams, setSearchParams] = useSearchParams()

  const filterType = searchParams.get("type")

  const filteredVans = filterType ? vans.filter(van => van.type === filterType) : vans

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

 const simpleColor = filterType === 'Simple' ? "selected" : ""
 const luxuryColor = filterType === 'Luxury' ? "selected" : ""
 const ruggedColor = filterType === 'Rugged' ? "selected" : ""


 if(loading){
  return <div className='container'> <h1> Loading...</h1> </div>
 }

 if(error){
  return <div className='container'> <h1> Error: {error.message}</h1></div>
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
        {elements}
      </div>
    </div>
  )
}

export default Vans