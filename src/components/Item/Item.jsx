import './item.css'
import { Link} from 'react-router-dom'

const Item = ({ data }) => {
  const { name, img, price, stock, id} = data

  
  // console.log(tipoProducto);
  
  console.log(data.id)

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

