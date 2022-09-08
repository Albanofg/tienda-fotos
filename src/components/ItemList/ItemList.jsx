import {useState, useEffect} from 'react';
import getFetch from '../../helper/helper.js';
import Item from '../Item/Item';
import './ItemList.css';



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
            <h1 className='card_title'>prints for sale</h1>

            {
                loading ? <h2>loading...</h2>

                :

                    <div className='cards '>
                        {data.map(data=>(
                            <Item key={data.name} data={data}/>
                        ))}
                    </div>
            }

        </>
    )
}


export default ItemList