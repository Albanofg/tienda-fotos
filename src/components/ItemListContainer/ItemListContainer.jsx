import './itemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import {React, useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../../Utils/firebase';
import { useParams } from 'react-router-dom';


export function ItemListContainer(){

    const[data, setData] = useState([]);
    const {year} = useParams();
  

    useEffect(()=>{



      const getData = async()=>{
          try {
              let queryRef = !year ? collection(dataBase,"items") : query(collection(dataBase,"tienda-fotos"), where("year","==",year));
              const response = await getDocs(queryRef);
              const recieve = response.docs.map(doc=>{
                  const newDoc = {
                      ...doc.data(),
                      id:doc.id
                  }
                  return newDoc;
              });
              setData(recieve)
          } catch (error) {
              console.log(error);
          }
      }
  
      getData();
  },[year])
  

  return(
      <div className="item_list_container">
        {
        
          <div className="item-list-container">
            <ItemList data={data}/>
          </div>

        }
      </div>

  )  
}