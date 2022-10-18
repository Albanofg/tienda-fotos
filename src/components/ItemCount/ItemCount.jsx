import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);
  const [condition, setCondition] = useState(false);

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

  const Render = ({condition}) => {
      return (
        <div className='counter'>
              <p className=''> items {count}</p>
              <button className='btn btn-dark' onClick={decrementar}>-</button>
              <button className='btn btn-dark' onClick={incrementar}>+</button>
              <button className='btn btn-dark' onClick={()=> {onAdd(count); setCondition (true);}}>add to cart</button>
        </div>
      )
    }
  return(<Render condition={condition}></Render>)
}
