import React from 'react'
import bird from '../../assets/home-bird.JPG'
import { Link } from 'react-router-dom'

const Home = () => {

return (
    <Link to='/gallery' className='nav-item'>
        <div className='home'>
                <p className='home-p'>welcome to our gallery</p>
                <img className='bird-home'  src={bird} alt="bird"/>
        </div>
    </Link>
  )
}

export default Home