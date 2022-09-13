import { useState, useEffect } from "react";
import getFetch from '../../helper/helper';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({}) => {
    const[item, setItem] = useState({})
    const[loading, setLoading] = useState(true)
    const params = useParams();
    
    const {addProduct}=useContext(CartContext);

    const onAdd =(count)=>{
        addProduct(item, count)
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
                    <ItemCount initial={0} stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
            }
        </div>
    )
}



