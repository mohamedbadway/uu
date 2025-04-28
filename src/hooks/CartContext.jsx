import {  createContext, useState } from "react";

const CartContext = createContext();
function CartProvider ({children}){
    let [counter, setCounter] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    
    return <CartContext.Provider value={{counter, setCounter , cartItems , setCartItems }}>{children}</CartContext.Provider>
}

export {CartContext , CartProvider};
