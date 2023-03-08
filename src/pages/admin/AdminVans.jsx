import React from 'react'
import AdminVan from '../../components/admin/AdminVan'
import { Link } from 'react-router-dom'
import getVans from "../../api/api"

const AdminVans = () => {

  const [vans, setVans] = React.useState([])

  React.useEffect( () => {
      const getVansAPI = async() => {
        const data = await getVans()
        setVans(data)
      }
      getVansAPI()
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