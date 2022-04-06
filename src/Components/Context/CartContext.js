import React from "react";
import { createContext,useState} from "react";

const CartContext = createContext();

const CartProvider = ({children})=>{

    const[cartProducts, setCartProducts]=useState([]);
    
    const addToCart = (product) =>{

        console.log("Ashe",product)
    }

    const data ={
        cartProducts,
        addToCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider};
export default CartContext;
