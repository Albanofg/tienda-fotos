import { collection, getDocs } from 'firebase/firestore';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Utils/firebase.js';
import Item from '../Item/Item';
import './ItemList.css';



export const ItemList =()=>{
    const[item, setItem] = useState([])
    const {categoria} = useParams();
    const [productos, setProductos] = useEffect([]);


    useEffect (()=>{
        const getData = async () => {
            try{
                const query = collection(dataBase, "tienda-fotos");
                const response = await getDocs(query)
                const docs = response.docs;
                const data = docs.map(doc=>{return{...doc.data(), id:doc.id}})
                setProductos(data);
                // console.log(data)
        } catch (error) {
            console.log(error)
        }
        }
    },[categoria])

    return (
        <>
            <h1 className='card_title'>prints for sale</h1>

                    <div className='cards '>
                        {item.map(producto=>(
                            <Item key={producto.id} item={producto}/>
                        ))}
                    </div>

        </>
    )
}
