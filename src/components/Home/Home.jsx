import React from 'react'
import bird from '../../assets/home-bird.JPG'
import { NavLink } from 'react-router-dom'

const Home = () => {

return (
    <NavLink to='/gallery' className='home'>
        <div className='home'>
                <p className='home-p'>welcome to our gallery</p>
                <img className='bird-home'  src={bird} alt="bird"/>
        </div>
    </NavLink>
  )
}

export default Home