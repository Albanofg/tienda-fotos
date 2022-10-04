import React from 'react'
import bokeh from '../../assets/bokeh.JPG'


const Contact = () => {
  return (
          
    <>
    <div className='contact'>

        <div className='grid-elm'>
          <a className='ext-link' href='https://www.instagram.com/fabiodrifotograf/' target="_blank" rel="noreferrer">
            <span className='p-ig'>instagram</span>
          </a>
        </div>
      
        <div className='grid-elm'>
          <a className='ext-link' href='http://wa.me/+543407411721' target="_blank" rel="noreferrer">
            <p className='p-wh'>whatsapp</p>
          </a>
        </div>

        <div className='grid-elm'>
          <a className='ext-link' href='http://mailto:albanofgonzalez@gmail.com' target="_blank" rel="noreferrer">
            <p className='p-em'>email</p>
          </a>
        </div>
        
        
    </div>
    <img className='bokeh' src={bokeh} alt="bokeh"/>
    </>
  )
        

}

      

export default Contact