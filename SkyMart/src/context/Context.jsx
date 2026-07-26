import { useState } from "react";
import { createContext } from "react";

export const Cntxt = createContext();

export const CntxtContextProvider=({children})=>{



   const [registeredUsers, setRegisteredUsers] = useState(
   JSON.parse( localStorage.getItem("registeredUsers"))||[]);


   const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))||null);

    const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))||null);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [products, setProducts] = useState([]);
   const [allProducts, setAllProducts] = useState(products)

  const [productCategories, setProductCategories] = useState([]);

  const [topRatedProduct, setTopRatedProduct] = useState([])

  
  return <Cntxt.Provider 
  value={{
    registeredUsers,
    setRegisteredUsers,
    loggedInUser,
    setLoggedInUser,
    isCartOpen, 
    setIsCartOpen,
    products, 
    setProducts,
    productCategories, 
    setProductCategories,
    topRatedProduct,
    allProducts, 
    setAllProducts,
    cart, setCart
    }
    }
  >
    {children}
  </Cntxt.Provider>
}
