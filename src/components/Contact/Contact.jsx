import './contact.css'
import React from 'react'


const Contact = () => {
  return (
          
    <>
    <div className='contact'>

        <div className='grid-elm1'>
          <a className='ext-link' href='https://www.instagram.com/albanogonzalezcartier/' target="_blank" rel="noreferrer">
            <span className='p-ig'>instagram</span>
          </a>
        </div>
      
        <div className='grid-elm2'>
          <a className='ext-link' href='http://wa.me/+543407411721' target="_blank" rel="noreferrer">
            <p className='p-wh'>whatsapp</p>
          </a>
        </div>

        <div className='grid-elm3'>
          <a className='ext-link' href='mailto:albanofgonzalez@gmail.com' target="_blank" rel="noreferrer">
            <p className='p-em'>email</p>
          </a>
        </div>
        
        
    </div>
    <img className='bokeh' src='https://www.mediafire.com/convkey/9974/tpfmtuwk3soernz9g.jpg' alt="bokeh"/>
    </>
  )
        

}

      

export default Contact