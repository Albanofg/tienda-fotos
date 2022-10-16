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
          <NavLink className='nav-item' activeClassName='active' to='/gallery'>gallery</NavLink>
          <NavLink className='nav-item' activeClassName='active' to='/contacto'>contact</NavLink>
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
    </nav>
  )
}

export default Navbar;
