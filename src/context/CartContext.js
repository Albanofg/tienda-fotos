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
            setProductCartList(newList);
        }else{
            const newProduct={...product, count: quantity}
            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
            console.log("New product", newProduct);}
    }

    const removeProduct = (idProduct)=>{
        const copyArray=[...productCartList];
        const newArray=copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const emptyCart =()=>{
        setProductCartList([]);
    }

    



return(
    <CartContext.Provider value={{productCartList, addProduct, removeProduct, emptyCart, isInCart}}>
            {children}
    </CartContext.Provider>    
    )
    
}