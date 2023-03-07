import React from 'react'
import { useParams } from 'react-router-dom'


const Photos = () => {

  const params = useParams()

  const [van, setVan] = React.useState([])

  React.useEffect( () => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params.id])


  return (
    <div>
      <img src={van.image} className="admin-vanroute-img"/>
    </div>
  )
}

export default Photos