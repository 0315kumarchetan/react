import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';
import Product from './components/Product';
import { MyStore } from './MyContext/MyStore';
import CartScreen from './pages/CartScreen';

const App = () => {

  const [products, setProducts] = useState([]); 
  
  let {isCartOpen,setIsCartOpen,cartItems, setCartItems} = useContext(MyStore);

  const productData = async ()=>{
      try{
        let res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data);
        setProducts(res.data);
      }catch(error){
        console.log(error);
      }
  }
 
  
  useEffect(()=>{
    productData();
  },[])
  return (
    <div className='p-2 p-screen'>
      <Navbar/>
      
      {
        isCartOpen?
        <div className='p-2 grid grid-cols-5 gap-2'>
        {
          products.map((item)=>{
            let isInCart = cartItems.find((cartItem)=>cartItem.id===item.id);
            return <Product key={item.id} product={item} isInCart={isInCart} />
          })
        }
      </div>
        :
       <div className=''>
       <CartScreen />
      </div>
     
      }
      
    </div>
  )
}

export default App
