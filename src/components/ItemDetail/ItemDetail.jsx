import { useState, useEffect } from "react";
import getFetch from '../../helper/helper';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount'
import { useParams } from "react-router-dom";


export const ItemDetail = () => {
    const[data, setData] = useState({})
    const[loading, setLoading] = useState(true)

    const [productId] = useParams();


    useEffect(() => {
        getFetch.then(response=>{
            setData(response.find(prod=>prod.id===productId))
            setLoading(false)
        })
    }, [])


    // console.log(data);
    return(
        <div className="detail-container">
            {loading ? <h2>loading...</h2>

            :
            <div className="item-detail col-4 row">
                <div className="img-detail row">
                    <img src={data.img}  />
                </div>
                <div>
                    <h2>{data.name}</h2>
                    <h3>{data.year}</h3>
                    <h1>{data.price}</h1>
                    <ItemCount/>
                </div>
            </div>
            }
        </div>
    )
}




