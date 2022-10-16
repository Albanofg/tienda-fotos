import './finalForm.css'
import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { dataBase } from '../../Utils/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

const FinalForm = () => {
  const [letters, setLetters] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null);
  const { productCartList, getTotalPrice, emptyCart } = useContext(CartContext)
  const naivgateTo = useNavigate()

  


  const buyOrder = (e) => {
    e.preventDefault()

    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        address1: e.target[2].value,
        address2: e.target[3].value,
        email: e.target[4].value,
        card: e.target[5].value,
        cvv: e.target[6].value,
        
      },

      items: {
        items: productCartList,
        total: getTotalPrice(),
        created: serverTimestamp(),
      },
    }

    const goTo = () => {
      naivgateTo('/gallery')
    }

    const callbackNewOrder = (data) => {

        const alerta = () => {
          swal({
            title: 'pst! tracking code for your order',
            text: data.id,
            button: 'ok',
          })
          goTo()
          emptyCart()
        }
        alerta();
    }
    const queryRef = collection(dataBase, 'orders')
    addDoc(queryRef, order).then(callbackNewOrder)
  }


  const forceLetters = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, ' ');
    setLetters(result);
  };

  const emailValidation =(email)=> {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
  }
  
  const emailRegex = (e) =>{
    if (!emailValidation(e.target.value)) {
      setError('enter a valid email adress');
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };



  return (
    <form onSubmit={buyOrder}>
        <input type="text" value={letters} onChange={forceLetters} placeholder="name"/>
      <hr />
        <input onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); }}} placeholder="phone" maxLength={10}/>
      <hr />
        <input type="text" placeholder="address (first line)"/>
        <input type="text" placeholder="(second line)"/>
      <hr />
        <div>
          <input type="email" value={email} onChange={emailRegex} placeholder="email"/>{error && <h6 className='span'>{error}</h6>}
        </div>
      <hr />
        <input onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); }}} placeholder="card number" maxLength={16} />
        <input onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); }}} placeholder="cvv" maxLength={3} style={{width: '3rem'}} />
      <hr />
        <button type="submit"  className="btn btn-warning">
          buy
        </button>
      <hr />
      <NavLink className='btn btn-warning' to='/gallery'>
        back to gallery
      </NavLink>
    </form>
  )
}

export default FinalForm
