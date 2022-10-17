import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import FinalForm from '../FinalForm/FinalForm';

export const CartContainer = () => {

    const{productCartList, emptyCart, getTotalPrice}=useContext(CartContext);
    
    return (
        <div className='final_cart'>
          <div className='cart_general'>
            {
              productCartList.length>0 ?
              <>
                  {
                    productCartList.map(item=>(
                      <CartItem key={item.id} item={item}/>
                      
                    ))
                  }
                  <h2 className='final-price'>Total: ${getTotalPrice()}</h2>
                <FinalForm/>

                <Link to='/gallery'>
                  <button onClick={emptyCart} className='btn btn-danger'>empty cart</button>
                </Link>
               
              </>
              :
              <>
                  <p>There's nothing here... yet</p>
                  <hr/>
                  <Link to='/gallery'>
                    <button className='btn btn-warning'>add some</button>
                  </Link>
              </>
            }
          </div>
        </div>
      )
    }