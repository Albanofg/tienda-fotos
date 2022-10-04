import { useState, useEffect } from "react";
import { ItemCount } from '../ItemCount/ItemCount'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../Utils/firebase';


export const ItemDetail = () => {

    const[item, setItem] = useState({})
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
            <div className="card-detail">
                <div>
                    <img className="img-detail" src={item.img} alt=""/>
                </div>
                <div className="table-light">
                    <h2>{item.name}</h2>
                    <h5>({item.year})</h5>
                    <h1>${item.price}</h1>
                    <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
                    {
                        quantity>0 &&
                        <>
                        <br />
                            <Link to='/cart'>
                                <button className="btn btn-warning">Go to cart</button>
                            </Link>
                            <br />
                            <Link to='/gallery'>
                                <button className="btn btn-light active">Add more</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
            }
        </div>
    )
}



