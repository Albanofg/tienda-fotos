import './itemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';




const ItemListContainer = () => {

    return (
        <div className='itemList'>
            <ItemList/>
        </div>
    )
}   


export default ItemListContainer





