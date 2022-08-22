import React from 'react';
// import ignislogo from './src/assets/img/ignis.png'
import { FontAwesomeIcon as CartWidget } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  return (
    <nav className="nav">
        <a href="#" className="marca">ignis</a>
        {/* <a><img src={ignislogo} className='logo' alt='ignis'/></a> */}
        <ul className="nav-menu">
            <li className="nav-item"><a href="#" className="nav-link">home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">about</a></li>
            <li className="nav-item"><a href="#" className="nav-link">gallery</a></li>
            <li className="nav-item"><a href="#" className="nav-link">contact</a></li>
        </ul>
        <ul className="nav-menu">
          <CartWidget icon={faBasketShopping}/>
        </ul>
    </nav>
  )
}

export default Navbar;