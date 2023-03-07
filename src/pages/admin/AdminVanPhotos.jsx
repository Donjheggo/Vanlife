import React from 'react'
import { useOutletContext } from 'react-router-dom'


const Photos = () => {

  const {van} = useOutletContext()

  return (
    <div>
      <img src={van.image} className="admin-vanroute-img"/>
    </div>
  )
}

export default Photos