import {useState, useEffect} from 'react';
import getFetch from '../../helper/helper.js';
import Item from '../Item/Item';
import './ItemList.css';



const ItemList =()=>{
    const[item, setItem] = useState([])
    const[loading,setLoading] =useState(true)

    useEffect (()=>{
        getFetch.then(item=>{
            setItem(item)
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
                        {item.map(item=>(
                            <Item key={item.name} item={item}/>
                        ))}
                    </div>
            }

        </>
    )
}


export default ItemList