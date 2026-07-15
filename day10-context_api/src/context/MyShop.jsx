import { Children, createContext, useState } from "react";
import { ContextProvider } from "./MyContext";

export const MyShop = createContext();

export const MyShopContextProvider = ({children})=>{
    const [toggle, setToggle] = useState(true)
    const [cartItems, setCartItems] = useState([])
    return <MyShop.Provider value={{toggle,setToggle,cartItems,setCartItems}}>{children}</MyShop.Provider>
}