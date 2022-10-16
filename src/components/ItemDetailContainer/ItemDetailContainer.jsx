import { RingLoader } from "react-spinners";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";




export const ItemDetailContainer = () => {

  const [loading, setLoading] = useState();


  useEffect(()=>{
    setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      })
    },350)


  return (
    <>
      {
        loading ? 

        <div>
          <RingLoader size={150} color={'#0d1938'} loading={loading} />
        </div>

        :

        <div className="containerFluid">
          <ItemDetail/>
        </div>
      }
    </>
  )
}
