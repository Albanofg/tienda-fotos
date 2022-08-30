import { useState} from 'react';
import React from 'react'
import Navbar from './components/NavBar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './app.css';




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
        <ul>
          <ItemListContainer/>
        </ul>
      </div>
    )
}



export default App;