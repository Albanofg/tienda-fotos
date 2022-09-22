import { createContext, useState } from "react";
import item from "../components/Item/Item";

export const CartContext=createContext();

export const CartProvider = ({children})=>{

    const [productCartList, setProductCartList] = useState ([]);

    const isInCart=(id)=>{
        const isThere = productCartList.some((element)=>element.id===id)
        return isThere;
    }

    const addProduct = (product, quantity) => {
        const newList=[...productCartList];

        if (isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].count = newList[productIndex].count+quantity
            newList[productIndex].totalPrice=newList[productIndex].count*newList[productIndex].price;
            setProductCartList(newList);
        }else{
            const newProduct={...product, count: quantity, totalPrice:quantity*product.price}
            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
            }
    }

    const removeProduct = (idProduct)=>{
        const copyArray=[...productCartList];
        const newArray=copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const emptyCart =()=>{
        setProductCartList([]);
    }

    const getTotalProducts = () =>{
        const totalProducts = productCartList.reduce((acc, item)=> acc+item.count,0)
        return totalProducts;
        }

    const getTotalPrice =()=>{
        const finalPrice = productCartList.reduce((acc, item)=>acc+item.totalPrice,0);
        return finalPrice;
    }


return(
    <CartContext.Provider value={{productCartList, addProduct, removeProduct, emptyCart, isInCart, getTotalProducts, getTotalPrice}}>
            {children}
    </CartContext.Provider>    
    )
    
}