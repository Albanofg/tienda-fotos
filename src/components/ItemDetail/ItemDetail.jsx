import { useState, useEffect } from "react";
import { ItemCount } from '../ItemCount/ItemCount'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../Utils/firebase';


export const ItemDetail = () => {

    const[item, setItem] = useState({});
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
                                <NavLink className='btn btn-warning' to='/cart'>
                                    go to cart
                                </NavLink>
                                <br />
                                <NavLink className='btn btn-light active' to='/gallery'>
                                    add more
                                </NavLink>
                            </>
                        }
                    </div>
                </div>
            </div>
    )

}


