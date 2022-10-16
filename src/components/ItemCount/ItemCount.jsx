import React from 'react';
import { useState } from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  

  const incrementar =()=>{
    if(count<stock){
    setCount(count + 1);
    }
  }
  
  const decrementar =()=>{
    if(count>1){
    setCount(count - 1);
    }
  }


  return (
    <div className='counter'>
          <p className=''> items {count}</p>
          <button className='btn btn-dark' onClick={decrementar}>-</button>
          <button className='btn btn-dark' onClick={incrementar}>+</button>
          <button className='btn btn-dark' onClick={()=>onAdd(count)}>add to cart</button>
          
    </div>
  )
}
