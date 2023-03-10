import React from 'react'
import AdminVan from '../../components/admin/AdminVan'
import { Link, defer, Await, useLoaderData } from 'react-router-dom'
import getVans from "../../api/api"


export const vansAdminLoader = () => {
  return defer({vans: getVans()})
}

const AdminVans = () => {

  const vansLoader = useLoaderData()

  const renderVansElements = (vansLoaded) => {
    const elements = vansLoaded.map(van => (
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
        <>
          {elements}
        </>
      )
  }

  return (
    <div className='container mb-2'>
      <p className='admin-title'>Your listed vans</p>
      
      <React.Suspense fallback={<h1>Loading vans...</h1>}>
        <Await resolve={vansLoader.vans}>
          {renderVansElements}
        </Await>
      </React.Suspense>

    </div>
  )
}

export default AdminVans