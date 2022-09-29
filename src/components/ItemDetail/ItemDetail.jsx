import { useState, useEffect } from "react";
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../Utils/firebase';


export const ItemDetail = ({}) => {
    const[item, setItem] = useState({})


    // const[loading, setLoading] = useState(true)


    const {productId} = useParams();
    const {addProduct}=useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const onAdd =(count)=>{
        addProduct(item, count)
        setQuantity(count);
    }

    useEffect(()=> {
        
            const queryRef = doc(dataBase, "tienda-fotos", productId);
            getDoc(queryRef).then(response=>{
                const newItem = {...response.data(), id: response.id}
                setItem(newItem);
            }).catch(error=>console.log(error));
            
    },[productId])


    



    return(
        <div className="detail-container">
            {
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
                        <>
                            
                            <Link to='/cart'>
                                <button className="btn btn-warning">Purchase</button>
                            </Link>
                            <Link to='/gallery'>
                                <button className="btn btn-light active">Add some more</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
            }
        </div>
    )
}



