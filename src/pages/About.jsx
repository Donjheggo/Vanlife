import React from 'react'
import aboutimg from '/images/aboutbg.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <img src={aboutimg} alt="about-img" className='about-img'/>
      <div className='container about-text'>
        <p className='about-title'>Don’t squeeze in a sedan when you could relax in a van.</p>
        <p className='about-subtext'>
          Our mission is to enliven your road trip with 
          the perfect travel van rental. Our vans are recertified 
          before each trip to ensure your travel plans can go 
          off without a hitch.
          (Hitch costs extra 😉)
          <br/><br/>
          Our team is full of vanlife enthusiasts who know 
          firsthand the magic of touring the world on 4 wheels.
        </p>
      <div className='about-box'>
        <p>Your destination is waiting.<br/>
            Your van is ready.
        </p>
        <Link className='explore-btn' to="/vans">Explore our vans</Link>
      </div>
      </div>
    </div>
  )
}

export default About