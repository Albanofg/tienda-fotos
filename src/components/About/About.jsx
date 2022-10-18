import './about.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import albums from '../../assets/albums.jpg'

const About = () => {
  return (
    <div className='about'>
      <img src={albums} alt="albums" className='bg-about' />
      <p className='p-about'>
        We are a group of photographers from various genres and various parts of the world who have come together to share photos from the past that we are finally going to sell as prints in the best quality we can achieve.
        
        <NavLink className="btn btn-light" to="/gallery">
           go to gallery
        </NavLink>
        
      </p>
    </div>
  )
}

export default About