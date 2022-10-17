import { useState, useContext } from "react";
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";


export function ItemDetail ({data}) {


    const [quantity, setQuantity] = useState(0);
    const {addProduct}=useContext(CartContext);
    

    const onAdd = (count)=>{
        const newProduct = {...data, quantity:count}
        addProduct(newProduct, count)
        setQuantity(count);
    }

    return(
            <div className="detail-container">
                <div className="card-detail">
                    <div>
                        <img className="img-detail" src={data.img} alt={data.name} />
                    </div>
                    <div className="table-light">
                        <h2>{data.name}</h2>
                        <h5>({data.year})</h5>
                        <h1>${data.price}</h1>
                        <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
                        {
                            quantity>0 &&
                            <>
                            <br />
                                <NavLink className='btn btn-danger' to='/cart'>
                                    go to cart
                                </NavLink>
                                <br />
                                <NavLink className='btn btn-warning ' to='/gallery'>
                                    add more
                                </NavLink>
                            </>
                        }
                    </div>
                </div>
            </div>
          )
    }
