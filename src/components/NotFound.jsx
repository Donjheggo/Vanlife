import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container mt-10 mb-10'>
      <p className='error-text'>Sorry, the page you were looking for was not found.</p>
      <Link to="." className='return-home-btn'>Return to home</Link>
    </div>
  )
}

export default NotFound