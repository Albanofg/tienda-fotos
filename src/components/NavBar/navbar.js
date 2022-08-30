import React from 'react';
import { FontAwesomeIcon as CartWidget } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import Ignis from '../../assets/ignis.png';
import './navstyle.css'

function Navbar () {
  
  return (
    <nav className="nav">
        {/* <a href="#" className="marca">ignis</a> */}
        <a >
          <img className='logo-nav' src={Ignis}/>
        </a>
        <ul className="nav-menu">
            <li className="nav-item"><a href="#" className="nav-link">home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">about</a></li>
            <li className="nav-item"><a href="#" className="nav-link">gallery</a></li>
            <li className="nav-item"><a href="#" className="nav-link">contact</a></li>
        </ul>
        <ul className="nav-cart">
          <CartWidget icon={faBasketShopping}/>
        </ul>
    </nav>
  )
}

export default Navbar;