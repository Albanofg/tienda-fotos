import './itemListContainer.css'
import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../../Utils/firebase';



export const ItemListContainer = ( ) =>{
    // const {categoria} = useParams();
    // const [productos, setProductos] = useEffect([]);

    // useEffect(()=>{
    //     const getData = async()=>{
    //         try {
    //             const queryRef = collection(dataBase,"tienda-fotos");
    //             const response = await getDocs(queryRef);
    //             const docs = response.docs;
    //             const data = docs.map(doc=>{return{...doc.data(), id:doc.id}});
    //             setProductos(data)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getData();
       
    // },[categoria])

    return(
        <div className="item-list-container">
            <ItemList items={productos}/>
        </div>
    )
}




