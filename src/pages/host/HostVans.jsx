import React from 'react'
import HostVan from '../../components/host/HostVan'
import { Link, defer, Await, useLoaderData } from 'react-router-dom'
// import getVans from "../../api/api"
import { getHostVans } from '../../api/firebase'


export const vansHostLoader = () => {
  return defer({vans: getHostVans()})
}

const HostVans = () => {

  const vansLoader = useLoaderData()

  const renderVansElements = (vansLoaded) => {
    const elements = vansLoaded.map(van => (
      <div key={van.id}>
        <Link to={van.id}>
          <HostVan
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
      <p className='host-title'>Your listed vans</p>
      
      <React.Suspense fallback={<h1>Loading vans...</h1>}>
        <Await resolve={vansLoader.vans}>
          {renderVansElements}
        </Await>
      </React.Suspense>

    </div>
  )
}

export default HostVans