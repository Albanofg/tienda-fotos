import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';



export const CartContainer = () => {

    const{productCartList, emptyCart}=useContext(CartContext);

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

              <Link to='/gallery'>
                <button onClick={emptyCart} className='btn btn-warning'>Empty Cart</button>
              </Link>
              </>
              :
              <>
                <p>There's nothing here... yet</p>
              <hr/>
              <Link to='/gallery'>
                <button className='btn btn-warning' >Add Some</button>
              </Link>
              </>
            }
          </div>
        </div>
      )
    }