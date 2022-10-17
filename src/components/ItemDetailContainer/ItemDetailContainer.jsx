import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { dataBase } from "../../Utils/firebase";
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import  RingLoader from "react-spinners/RingLoader";

export function ItemDetailContainer () {

  
  const {productId} = useParams();
  const [item, setItem] = useState({});
  const [load, setLoad] = useState(false);
 

  useEffect(()=> {

          setLoad(true);
            setTimeout(()=>{
              setLoad(false)
            }, 1000)

          const queryRef = doc(dataBase, "tienda-fotos", productId);
          getDoc(queryRef).then(response=>{
              const newItem = {...response.data(), id: response.id}
              setItem(newItem);
          }).catch(error=>console.log(error));
  },[productId])



  return (
    <>
      {
        load ?

        <div className="loader">
              <RingLoader size={500} color={"#0d1938"} load={load}/>
        </div>
      :

        <div className="containerFluid">
          <ItemDetail data={item}/>
        </div>
      }
    </>
  )
}