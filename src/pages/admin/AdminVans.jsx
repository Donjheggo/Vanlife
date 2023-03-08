import React from 'react'
import AdminVan from '../../components/admin/AdminVan'
import { Link } from 'react-router-dom'

const AdminVans = () => {

  const [vans, setVans] = React.useState([])

  React.useEffect( () => {
      fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
  }, [])

  const elements = vans.map(van => (
  <div key={van.id}>
    <Link to={van.id}>
      <AdminVan
        name={van.name}
        price={van.price}
        image={van.image}
      />
    </Link>
  </div>
  )
  )


  return (
    <div className='container mb-2'>
      <p className='admin-title'>Your listed vans</p>

      {elements}

    </div>
  )
}

export default AdminVans