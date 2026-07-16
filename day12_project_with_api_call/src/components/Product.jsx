import React, { useContext, useState } from 'react';
import { MyStore } from '../MyContext/MyStore';


const Product = ({product,isInCart}) => {

  let {cartItems,setCartItems,incrementQuantity,decrementQuantity} = useContext(MyStore); 

  const [isProductInCart, setIsProductInCart] = useState(false);
 
  const handleQtyDec=(product)=>{
     decrementQuantity(product.id);
     
  }
  const handleQtyInc=(product)=>{
   incrementQuantity(product.id);
  }

  const handleCart=()=>{
    setCartItems((prev)=>[...prev,{...product,quantity:1}])
    alert("Product added into cart.");
  }
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };
  

  return (
    <div className="border rounded-lg  bg-gray-300 shadow-md p-2 w-60 hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <div className="h-48 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-sm font-semibold mt-3 line-clamp-2">
        {product.title}
      </h2>

      {/* Category */}
      <p className="text-gray-500 text-xs mt-1 capitalize">
        {product.category}
      </p>

      {/* Price */}
      <p className="text-lg font-bold text-green-600 mt-2">
        ₹ {product.price}
      </p>

      {/* Rating */}
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">⭐</span>
        <span className="ml-1 text-sm">
          {product.rating.rate} ({product.rating.count})
        </span>
      </div>

      {/* Button */}

     {
      isInCart?
      <button className='w-full mt-3  text-white bg-gray-400 flex justify-center gap-2 rounded hover:shadow-xl transition duration-400'>
        <span onClick={()=> handleQtyDec(product)} className='text-4xl'>-</span>
        <span className='text-4xl'>{isInCart.quantity<=0?removeItem(isInCart.id):isInCart.quantity}</span>
        <span onClick={()=>handleQtyInc(product)} className='text-4xl'>+</span>
      </button>
      :
       <button onClick={()=>{
          handleCart()
        }} 
        className="w-full mt-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-900 hover:shadow-xl transition duration-400">
        Add to Cart
      </button>
     }

      
      
    </div>
  );
};

export default Product;