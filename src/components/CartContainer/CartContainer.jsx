import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';


export const CartContainer = () => {

    const{productCartList, emptyCart, isInCart}=useContext(CartContext);

    return (
        <div className='cart_container'>
          <h1>CartContainer</h1>
          <div>
            {
              productCartList.length>0 ?
              <>
                {
                  productCartList.map(item=>(
                    <CartItem key={item.id} item={item}/>
                  ))
                }

                <button onClick={emptyCart} className='btn btn-warning'>Empty Cart</button>
              
              </>
              :
              <p>There's nothing here... yet</p>
              
            }
          </div>
        </div>
      )
    }