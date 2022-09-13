import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

export const CartItem = ({item}) => {
  
    const {removeProduct}=useContext(CartContext);
  
    return (
        <div className='cart_container'>
            <div className='container__img'>
                <img src={item.img} alt={item.name} style={{width: '25rem'}} />
            </div>
            <div className='container__info'>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.count}</p>
                <button className='btn btn-dark' onClick={()=>removeProduct(item.id)}>DeleteItem</button>

            </div>

        </div>
  )
}
