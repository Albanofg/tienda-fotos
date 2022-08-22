import React from 'react'
import Navbar from './components/NavBar/navbar'
import navstyle from './components/NavBar/navstyle.css'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer tituloA='React Coderhouse 41590'/>
      <ItemListContainer textoA='Albano González'>
        <a href='https://plataforma.coderhouse.com/cursos/41590/reactjs'><button className='button'>ir al curso</button></a>
      </ItemListContainer>
    </div>
  )
}

export default App;