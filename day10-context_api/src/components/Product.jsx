import React, { useContext } from 'react';
import { MyShop } from '../context/MyShop';

const Product = ({product}) => {

  let {setCartItems} = useContext(MyShop);

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
      <button onClick={()=>{setCartItems((prev)=>[...prev,product])}} className="w-full mt-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-900 hover:shadow-xl transition duration-400">
        Add to Cart
      </button>
      
    </div>
  );
};

export default Product;