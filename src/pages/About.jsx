import React from 'react'
import aboutimg from '/images/aboutbg.jpg'

const About = () => {
  return (
    <div className='about'>
      <img src={aboutimg} alt="about-img" className='about-img'/>
      <h1 className="about-text">Don’t squeeze in a sedan when you could relax in a van.</h1>
    </div>
  )
}

export default About