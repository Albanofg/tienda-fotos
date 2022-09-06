import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({stock, inicial, addItem, id}) => {
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
    // console.log(itemCount);

  }


  return (
    <div className='cards-uno'>
          <p className='item-count'> items {itemCount}</p>
          <button className='button-card' onClick={incrementar}>+</button>
          <button className='button-card' onClick={decrementar}>-</button>
          <button className='button-card' onClick={()=>(addItem(itemCount))}>AddToCart</button>
          
    </div>
  )
}
