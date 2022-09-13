import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import Ignis from '../../assets/ignis.png';
import './navstyle.css'
import { Link } from 'react-router-dom';

function Navbar () {
  
  return (
    <nav className="nav">
        <Link to='/'>
          <div>
            <img className='logo-nav' src={Ignis}/>
          </div>
        </Link>

        <div className='nav-menu'>
          <Link className='nav-item' to='/'>home</Link>
          <Link className='nav-item' to='/about'>about</Link>
          <Link className='nav-item' to='/gallery'>gallery</Link>
          <Link className='nav-item' to='/contacto'>contact</Link>
        </div>

        <div className="nav-cart">
          <Link to='/cart'>
            <CartWidget/>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar;