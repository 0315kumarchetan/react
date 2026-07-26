import React from "react";
import { getCntxt } from "../hooks/cntxtHook";
  import {toast } from 'react-toastify';

const CartDrawer = ({ isOpen, onClose }) => {
    let {navigate,isCartOpen, setIsCartOpen,cart, setCart,updateCart,
    removeProductFromCart,
    increaseQty,
    decreaseQty} = getCntxt();

    

    const orderPlaced=()=>{
        const updatedCart = {...cart,products:[]};
        updateCart(updatedCart);
        setIsCartOpen(false);
        toast.success("Order placed");
    }
   
/*     const updateCart = (cart) => {
    cart.total = cart.products.reduce((a, i) => a + i.total, 0);
    cart.discountedTotal = cart.products.reduce(
      (a, i) => a + i.discountedTotal,
      0
    );
    cart.totalQuantity = cart.products.reduce(
      (a, i) => a + i.quantity,
      0
    );

     cart.totalProducts = cart.products.length;

    
    setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    };
    const removeProductFromCart=(id)=>{
        const updatedCart = {...cart,products: cart.products.filter((item) => item.id !== id)};
         console.log(cart);
        updateCart(updatedCart);
    }
    const increaseQty = (id) => {   
         const updatedCart = {...cart,products: 
             cart.products.map((item) => 
                {
                    if (item.id === id) {
                    item.quantity += 1;
                    item.total = item.price * item.quantity;
                    item.discountedTotal =
                        item.total * (1 - item.discountPercentage / 100);
                    }
                    return item;
                }
            )
        };
        updateCart(updatedCart);
    };
    const decreaseQty = (id) => {   
         const updatedCart = {...cart,products: 
             cart.products.map((item) => 
                {
                    if (item.id === id && item.quantity>0) {
                    item.quantity -= 1;
                    item.total = item.price * item.quantity;
                    item.discountedTotal =
                        item.total * (1 - item.discountPercentage / 100);
                    }
                    return item;
                }
            )
        };
        updateCart(updatedCart);
    }; */
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#0f0f0f] border-l border-white/10 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">🛒 Cart</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            ✕
          </button>
        </div>

        {/* Content */}
          <div className="h-[80%] overflow-y-auto px-4 py-3">
            {
                cart?.products?.length > 0 ? (
                    <div>
                    {/* 🛍 Product List */}
                    <div className="space-y-4">
                        {cart.products.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-3 bg-white/5 p-3 rounded-xl"
                        >
                            {/* Image */}
                            <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-14 h-14 object-cover rounded-md"
                            />

                            {/* Info */}
                            <div className="flex-1">
                            <h3 className="text-white text-sm font-medium line-clamp-1">
                                {item.title}
                            </h3>

                            <p className="text-white/60 text-xs">
                                Qty: {item.quantity}
                            </p>
                            <p className="text-white/60 text-xs">
                                 ${item.price} each 
                            </p>

                            <p className="text-lime-400 font-semibold text-sm">
                                ${(item.discountedTotal).toFixed(2)}
                            </p>


                            </div>

                            {/* ➕➖ Quantity Controls */}
                                <div className="flex items-center gap-3 mt-2">
                                <button
                                    className="w-6 h-8 rounded-lg border border-white/20 text-white"
                                    onClick={() => decreaseQty(item.id)}
                                >
                                    −
                                </button>

                                <span className="text-white font-semibold">
                                    {item.quantity}
                                </span>

                                <button
                                    className="w-6 h-8 rounded-lg border border-white/20 text-white"
                                    onClick={() => increaseQty(item.id)}
                                >
                                    +
                                </button>
                                </div>
                    

                            

                            

                            <button onClick={()=>removeProductFromCart(item.id)}  className="text-red-400 font-semibold text-sm hover:text-red-700">
                            ✕
                        </button>
                        </div>
                        ))}
                    </div>

                    {/* 💰 Summary */}
                    <div className="mt-6 border-t border-white/10 pt-4 space-y-2">
                        <div className="flex justify-between text-white/70 text-sm">
                        <span>Total Items</span>
                        <span>{cart.totalQuantity}</span>
                        </div>

                        <div className="flex justify-between text-white/70 text-sm">
                        <span>Total Price</span>
                        <span>${cart.total.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-lime-400 font-semibold">
                        <span>Final Price</span>
                        <span>${cart.discountedTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* 🛒 Checkout Button */}
                    <button onClick={orderPlaced} className="w-full mt-5 bg-lime-400 text-black py-2 rounded-full font-semibold">
                        Checkout
                    </button>
                    </div>
                ) :  
                (
                    
                    <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                        📦
                    </div>

                    <h3 className="text-white text-lg">Cart is empty</h3>
                    <p className="text-white/60 text-sm mb-4">
                        Go shop something cool!
                    </p>

                    <button
                        onClick={() => {
                        navigate("/main/shop");
                        setIsCartOpen(false);
                        }}
                        className="bg-lime-400 text-black px-5 py-2 rounded-full font-medium"
                    >
                        Browse Products
                    </button>
                    </div>
                )
            }
        </div>



      </div>
    </>
  );
};

export default CartDrawer;