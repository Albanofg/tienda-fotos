import { useState } from 'react'
import './item.css'
import { Link, useParams } from 'react-router-dom'

const Item = ({ data }) => {
  const { name, img, price, stock, id} = data

  
  // console.log(tipoProducto);
  
  console.log(data.id)

  return (
      <Link to={`/item/${id}`}>
        <div className="card bg-dark text-white" key={name}>
          <img className="card-img" src={img} alt="" />
          <div className="card-img-overlay">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </Link>
  )
}

export default Item

