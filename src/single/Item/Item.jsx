import {useState} from 'react';
import './item.css'




const Item = ({ data }) => {
  const { name, img, price, stock } = data

  const [itemCount, setItemCount] = useState(1);

  const incrementar =()=>{
    if(itemCount<stock){
    setItemCount(itemCount + 1);
    }
    }
  
  const decrementar =()=>{
    if(itemCount>0){
    setItemCount(itemCount -1)
    }}

    console.log(+data.stock);

  return (
    <div>
      <div className="product" key={name}>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <h2>{price}</h2>
      </div>
      <div className="cards-uno">
        <p className="item-count">items {itemCount}</p>
        <button className="button-card" onClick={incrementar}>
          +
        </button>
        <button className="button-card" onClick={decrementar}>
          -
        </button>
        <button className="button-card" >
          add to cart
        </button>
      </div>
    </div>
  )
}

export default Item
