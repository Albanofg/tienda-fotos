import { useState, useEffect } from 'react';
import React from 'react'
import Navbar from './components/NavBar/navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './style.css';
import { ItemCount } from './components/ItemCount/ItemCount';



function App() {

  const[itemNum, setItemNum]= useState(0);

  const addToCart =(productos)=>{
    console.log("added", productos);
    setItemNum(productos);
  }  


  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <ul className='cards'>
        <ItemListContainer textoA='Alumno' tituloA='Albano González'>
          <a href='https://plataforma.coderhouse.com/cursos/41590/reactjs'><button className='button'>ir al curso</button></a>
        </ItemListContainer>
      </ul>

      <ul>
        <ItemCount stock={10} inicial={0} addItem={addToCart}/>
        <p className='cart-final'>{itemNum} items added</p>
      </ul>
     
    </div>
    )
}



export default App;