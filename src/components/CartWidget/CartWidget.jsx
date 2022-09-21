import { useContext } from 'react';
import CartIcon from '../../assets/CartIcon.png';
import { CartContext } from '../../context/CartContext';



export const CartWidget = ()=>{
    const {getTotalProducts, productCartList} = useContext(CartContext);


    return(
        <div className='widget'>
           
               
            
            <img className='widgett' src={CartIcon} alt="carrito"/>
            <span className='bubble'>{getTotalProducts()}</span>

           
        </div>
    )
}