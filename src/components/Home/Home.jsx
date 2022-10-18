import './home.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

return (
    <NavLink to='/gallery' className='home'>
        <div className='home'>
                <p className='home-p'>welcome to our gallery</p>
                <img className='bird-home'  src="https://www.mediafire.com/convkey/bdf2/smk797hp44uuqhf9g.jpg" alt="bird"/>
        </div>
    </NavLink>
  )
}

export default Home