import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import {dataBase} from '../../Utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';


export const CartContainer = () => {

    const{productCartList, emptyCart, getTotalPrice}=useContext(CartContext);
    const [orderId, setOrderId]=useState("");
    

    const buyOrder=(e)=>{
      e.preventDefault();
      
      const order = {
        buyer:{
          name: e.target[0].value,
          phone:e.target[1].value,
          email:e.target[2].value
        },
        items:{
          items: productCartList,
          total: getTotalPrice()
        }
      }
      // console.log(order);

      const queryRef= collection(dataBase, 'orders');
      addDoc(queryRef, order).then(respuesta=>setOrderId(respuesta.id))

    }

    

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

                
                

                <p>Total:{getTotalPrice()}</p>

                <form onSubmit={buyOrder}>
                  <input type="text" placeholder='name'/>
                  <hr />
                  <input type="text" placeholder='phone'/>
                  <hr />
                  <input type="email" placeholder='email'/>
                  <hr />
                  <button type="submit" className='btn btn-warning'>BUY</button>  
                </form>

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