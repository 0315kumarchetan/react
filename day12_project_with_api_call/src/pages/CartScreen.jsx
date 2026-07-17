import React, { useContext } from "react";
import { MyStore } from "../MyContext/MyStore";


const CartScreen = () => {
  const { cartItems, setCartItems,incrementQuantity,decrementQuantity } = useContext(MyStore);
console.log(cartItems);
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price*item.quantity), 0);

    const handleQtyDec=(item)=>{
     decrementQuantity(item.id);
  }
  const handleQtyInc=(item)=>{
   incrementQuantity(item.id);
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">🛒 Cart</h1>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                {/* Details */}
                <div className="flex-1">
                  <h2 className="font-semibold text-lg line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {item.category}
                  </p>

                  <p className="text-green-600 font-bold mt-2">
                    ₹{item.price}
                  </p>
                   <div className="grid grid-cols-2 gap-2">
                     <button className='w-full mt-2 px-3 py-1 text-white bg-gray-400 flex justify-center gap-2 rounded hover:shadow-xl transition duration-400'>
                            <span onClick={()=> handleQtyDec(item)} className='text-4xl'>-</span>
                            <span className='text-4xl'>{item.quantity<=0?removeItem(item.id):item.quantity}</span>
                            <span onClick={()=>handleQtyInc(item)} className='text-4xl'>+</span>
                        </button>

                         <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                    
                    </div> 

                 


                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              Total: ₹{totalPrice.toFixed(2)}
            </h2>

            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
