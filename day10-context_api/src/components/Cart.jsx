import React, { useContext } from 'react';
import { MyShop } from '../context/MyShop';

const Cart = ({  }) => {

  let {cartItems} = useContext(MyShop);
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);

  return (
    <div className="col-span-5 p-6 max-w-5xl mx-auto flex flex-col h-[80vh] w-full">
      <h2 className="text-2xl font-bold mb-6">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 mt-10 text-lg">
          Cart is empty 😔
        </div>
      ) : (
        <div className="space-y-5">
          
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              
              {/* LEFT */}
              <div className="flex gap-4 items-center w-[60%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />

                <div>
                  <h3 className="font-semibold text-md line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ⭐ {item.rating?.rate} ({item.rating?.count})
                  </p>
                </div>
              </div>

              {/* CENTER */}
              <div className="text-center">
                <p className="text-gray-500 text-sm">Price</p>
                <p className="font-semibold">₹{item.price}</p>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p className="text-gray-500 text-sm">Qty</p>
                <p className="font-semibold">{item.quantity || 1}</p>

                <p className="mt-1 font-bold text-green-600">
                  ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                </p>
              </div>

            </div>
          ))}

          {/* TOTAL */}
          <div className="border-t pt-5 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total</h3>
            <h3 className="text-2xl font-bold text-blue-600">
              ₹{total.toFixed(2)}
            </h3>
          </div>

          {/* BUTTON */}
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
            Proceed to Checkout
          </button>

        </div>
      )}
    </div>
  );
};

export default Cart;