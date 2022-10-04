import Item from '../Item/Item';
import {React, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../../Utils/firebase';
import { useState } from 'react';
import GridLoader from "react-spinners/GridLoader";

export const ItemList =()=>{

    const [loading,setLoading] = useState()
    const[item, setItem] = useState([])
    

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 350)

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
            {
                loading ?  
                <div className='loader'>
                    <GridLoader size={150} color={"#0d1938"} loading={loading}/>
                </div>

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