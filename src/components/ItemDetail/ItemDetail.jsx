import { useState, useEffect } from "react";
import getFetch from '../../helper/helper';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount'
import { useParams } from "react-router-dom";


export const ItemDetail = () => {
    const[data, setData] = useState({})
    const[loading, setLoading] = useState(true)
    const params = useParams();
    const onAdd =(count)=>{
        console.log("onAdd", count);
    }

    useEffect(() => {
        getFetch.then(response=>{
            setData(response.find(prod=>prod.id===params.productId))
            setLoading(false)
        })
    }, [])


   


    return(
        <div className="detail-container">
            {loading ? <h2>loading...</h2>

            :
            <div className="card mb-3">
                <div className="img-detail">
                    <img src={data.img}  className="img-fluid"/>
                </div>
                <div className="table-light">
                    <h2>{data.name}</h2>
                    <h3>{data.year}</h3>
                    <h1>${data.price}</h1>
                    <ItemCount initial={0} stock={data.stock} onAdd={onAdd}/>
                </div>
            </div>
            }
        </div>
    )
}



