import Item from '../Item/Item';
import {React, useEffect } from 'react';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { dataBase } from '../../Utils/firebase';
import { useState } from 'react';
import RingLoader from "react-spinners/RingLoader";
import { useParams } from 'react-router-dom';


export const ItemList =()=>{

    const [loading, setLoading] = useState(false)
    const[item, setItem] = useState([])
    const {year} = useParams()
    

    useEffect(()=>{
        setLoading(true);
            setTimeout(()=>{
                setLoading(false);
            }, 1500)

        const getData = async () =>{
          const queryRef = !year ? collection(dataBase, "tienda-fotos") :query(collection(dataBase, 'tienda-fotos'), where('year', '==', year) );
          const response = await getDocs(queryRef);
          const docs = response.docs;
          const item = docs.map(doc=>{return{...doc.data(), id:doc.id}})
          setItem(item);
        }
        getData();
      },[year])
    
    return (
        <>
            {
                loading ?  
                
                <div className='loader'>
                    <RingLoader size={200} color={"#ffb42a"} loading={loading}/>
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