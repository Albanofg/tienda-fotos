import {useState, useEffect} from 'react';
import getFetch from '../../helper/helper.js';
import Item from '../Item/Item';
import './ItemList.css';
import { Link, link } from 'react-router-dom';



const ItemList =()=>{
    const[data, setData] = useState([])
    const[loading,setLoading] =useState(true)

    useEffect (()=>{
        getFetch.then(data=>{
            setData(data)
            setLoading(false)
        })
    }, [])

    return (
        <>
            <h1 className='cards'>prints for sale</h1>

            {
                loading ? <h2>loading...</h2>

                :

                    <div className='cards col-4 row'>
                        {data.map(data=>(
                            <Item key={data.name} data={data}/>
                        ))}
                    </div>
            }

        </>
    )
}


export default ItemList