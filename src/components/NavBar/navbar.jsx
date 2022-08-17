import React from 'react';
// import ignis from './imgs/ignis.png'


function Navbar() {
  return (
    <nav className="nav">
        <a href="#" className="marca">ignis</a>
        {/* <a href="#"><img src='' alt="IGNIS" /></a> */}
        <ul className="nav-menu">
            <li className="nav-item"><a href="#" className="nav-link"></a>home</li>
            <li className="nav-item"><a href="#" className="nav-link"></a>about</li>
            <li className="nav-item"><a href="#" className="nav-link"></a>gallery</li>
            <li className="nav-item"><a href="#" className="nav-link"></a>contact</li>
        </ul>
    </nav>
  )
}

export default Navbar;