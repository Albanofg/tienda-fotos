import './app.css';
import React from 'react'
import Navbar from './components/NavBar/navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Contact } from './components/Contact/Contact';
import About from './components/About/About';
import { PaginaError } from './components/Error/PaginaError';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <React.Fragment>
          <div className='App'>
            <div>
              <Navbar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/gallery' element={<ItemListContainer/>} />
                <Route path='/item/:productId' element={<ItemDetailContainer/>} />
                <Route path='/contacto' element={<Contact/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='*' element={<PaginaError/>} />
              </Routes>
            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </CartProvider>
    )
}

export default App;