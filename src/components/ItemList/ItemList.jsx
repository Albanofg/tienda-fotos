import './ItemList.css';
import Item from '../Item/Item';
import {React, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../../Utils/firebase';
import { useState } from 'react';




export const ItemList =()=>{

    const[item, setItem] = useState([])
    const{loading,setLoading} =useState(true)

    useEffect(()=>{
        const getData = async () =>{
          const query = collection(dataBase, "tienda-fotos");
          const response = await getDocs(query);
          const docs = response.docs;
          const item = docs.map(doc=>{return{...doc.data(), id:doc.id}})
          setItem(item);
        }
        getData();
      },[])
    
    return (
        <>
            <h1 className='card_title'>prints for sale</h1>

            {
                loading ? <h2>loading...</h2>

                :

                    <div className='cards '>
                        {item.map(item=>(
                            <Item key={item.id} item={item}/>
                        ))}
                    </div>
            }

        </>
    )
}