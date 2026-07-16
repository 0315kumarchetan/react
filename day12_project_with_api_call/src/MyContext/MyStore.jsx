import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyStoreContextProvider = ({children})=>{

    const [isCartOpen, setIsCartOpen] = useState(true);
    const [data, setData] = useState({})
    const [cartItems, setCartItems] = useState([])
     const [products, setProducts] = useState([]);
     
     const incrementQuantity=(id)=>{
        console.log("here1");
            setCartItems((prev)=>{
                return prev.map((val)=>{
                    return val.id===id? {...val , quantity : val.quantity+1}:val;
                })
            })
     }
     const decrementQuantity=(id)=>{
        console.log("here2");
            setCartItems((prev)=>{
                return prev.map((val)=>{
                    return val.id===id? {...val , quantity : val.quantity-1/* (val.quantity>1?val.quantity-1:val.quantity) */}:val;
                })
            })
     }

    return <MyStore.Provider value={

        {data,setData,isCartOpen,setIsCartOpen,cartItems,setCartItems,products, setProducts,incrementQuantity,decrementQuantity}

        }>{children}</MyStore.Provider>
}