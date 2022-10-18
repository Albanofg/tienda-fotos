import './error.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

export const PaginaError = () => {
  return (
    <>
      <div className='error'>
        <h1>ERROR404</h1>
        <h3>there's nothing here... at all</h3>
        <NavLink className="btn btn-warning" to="/gallery">
           go to gallery
        </NavLink>
      </div>
    </>
  )
}
