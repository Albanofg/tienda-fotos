import './foot.css';
import React from 'react';
import ignis from '../../assets/ignis.png';

const footer =()=> {
  return (
    <footer className='footer'>
        <div className='design'>
            entirely designed by <a href="#">Albano González Cartier</a>
        </div>

        <div>
            <img className='logo-foot' src={ignis} alt="ignis" />
        </div>
    </footer>


    )
}

export default footer   