import React from 'react'
import { useParams } from 'react-router-dom'

const Pricing = () => {

  const params = useParams()

  const [van, setVan] = React.useState([])

  React.useEffect( () => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params.id])

  return (
    <div>
      <p className='admin-vanroute-price'>
        ${van.price}
        <span className='admin-vanroute-day'>/day</span>
      </p>
    </div>
  )
}

export default Pricing