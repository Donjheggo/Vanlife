import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'> 
        <h1 className='home-text'>You got the travel plans, we got the travel vans.</h1>
        <h5 className='home-sub-text'>
        Add adventure to your life by joining the #vanlife movement. <br/>
        Rent the perfect van to make your perfect road trip.
        </h5>
        <div className='pb-3 pt-3'>
          <Link className='find-btn' to="/vans">Find your van</Link>
        </div>
      </div>
    </div>
  )
}

export default Home