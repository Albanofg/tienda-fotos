import React from 'react';
import { useState } from 'react';
import foto1 from '../../assets/mdz2.jpg';

export const ItemCount = ({stock, inicial, addItem}) => {
  const [itemCount, setItemCount] = useState(inicial);

  const incrementar =()=>{
    if(itemCount<stock){
    setItemCount(itemCount + 1);
    }
  }
  
  const decrementar =()=>{
    if(itemCount>0){
    setItemCount(itemCount - 1);
    }

  }


  return (
    <div className='card-cart'>
          <ul>
            <img className='card-img' src={foto1}></img>
          </ul>
          <ul><p>items {itemCount}</p>
            <button className='button' onClick={decrementar}>-</button>
            <button className='button' onClick={incrementar}>+</button>
            <button className='button' onClick={()=>(addItem(itemCount))}>add to cart</button>
          </ul>
    </div>
  )
}
