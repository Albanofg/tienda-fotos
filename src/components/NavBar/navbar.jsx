import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import Ignis from '../../assets/ignis.png';
import './navstyle.css'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


function Navbar () {
  const {productCartList} = useContext(CartContext);
  
  return (
      <nav className="nav">
          <Link to='/'>
            <div>
              <img className='logo-nav' src={Ignis} alt=""/>
            </div>
          </Link>

          <div className='nav-menu'>
            <NavLink className='nav-item' activeClassName='active' to='/about'>about</NavLink>
            <NavLink className='nav-item' activeClassName='active' to='/contacto'>contact</NavLink>
            <NavLink className='nav-item' activeClassName='active' to='/gallery'>gallery</NavLink>
            <div className="nav-item">
              <p className="nav-item dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                year
              </p>
              <div className="nav-drop dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="nav-item-ddn" to='/gallery'>all</Link>
                <Link className="nav-item-ddn" to='/gallery/2018'>2018</Link>
                <Link className="nav-item-ddn" to='/gallery/2020'>2020</Link>
                <Link className="nav-item-ddn" to='/gallery/2021'>2021</Link>
                <Link className="nav-item-ddn" to='/gallery/2022'>2022</Link>
              </div>
            </div>

          </div>

          <div className="nav-cart">
        
            {
            productCartList.length>0&&
              <>
                <Link to='/cart'>
                  <CartWidget/>
                </Link>
              </>
            }
          </div>

            
            <div className="nav-item-toggle">
              <div className="nav-item dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className='toggler'>menu</div>
              </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <NavLink className='nav-item-ddn' activeClassName='active' to='/about'>about</NavLink>
                      <NavLink className='nav-item-ddn' activeClassName='active' to='/gallery'>gallery</NavLink>
                      <NavLink className='nav-item-ddn' activeClassName='active' to='/contacto'>contact</NavLink>
                </div>
            </div>

          
      </nav>
  )
}

export default Navbar;
