import { useState, useEffect } from "react";
// import getFetch from '../../helper/helper';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({}) => {
    const[item, setItem] = useState({})
    const[loading, setLoading] = useState(true)
    const params = useParams();
    
    const {addProduct}=useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const onAdd =(count)=>{
        addProduct(item, count)
        setQuantity(count);
        // console.log("onAdd", count);
        
    }


    useEffect(() => {
        getFetch.then(response=>{
            setItem(response.find(prod=>prod.id===params.productId))
            setLoading(false)
        })
    }, [])
   


    return(
        <div className="detail-container">
            {loading ? <h2>loading...</h2>

            :
            <div className="card mb-3">
                <div className="img-detail">
                    <img src={item.img} alt=""  className="img-fluid" />
                </div>
                <div className="table-light">
                    <h2>{item.name}</h2>
                    <h3>{item.year}</h3>
                    <h1>${item.price}</h1>
                    <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
                    {
                        quantity>0 &&
                        <Link to='/cart'>
                            <button className="btn btn-dark">Purchase</button>
                        </Link>
                    }
                </div>
            </div>
            }
        </div>
    )
}



