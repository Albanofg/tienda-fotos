import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  const { name, img, id} = item

  
  // console.log(tipoProducto);
  
  // console.log(item.id)

  return (
      <Link to={`/item/${id}`}>
        <div className="card bg-dark text-white" key={name}>
          <img className="card-img" src={img} alt="" />
          <div className="card-img-overlay">
            <h3 className="card-title">{name}</h3>
          </div>
        </div>
      </Link>
  )
}

export default Item

