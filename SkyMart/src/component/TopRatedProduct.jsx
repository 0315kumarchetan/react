import React from 'react'
import { getCntxt } from '../hooks/cntxtHook';

const TopRatedProduct = ({product}) => {
   let {loggedInUser,setIsCartOpen,cart,setCart} = getCntxt();
    const getCart = () => {
   /*  let cart = JSON.parse(localStorage.getItem("cart"));
 */
    if (!cart) {
      cart = {
        id: crypto.randomUUID(),
        products: [],
        total: 0,
        discountedTotal: 0,
        totalProducts: 0,
        totalQuantity: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
  };
     const handleCart=()=>{
        let cart = getCart();
        let existingProduct = cart.products.find(
            (item) => item.id === product.id
          );

            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.total = existingProduct.price * existingProduct.quantity;
                existingProduct.discountedTotal =
                  existingProduct.total *
                  (1 - existingProduct.discountPercentage / 100);
              } else {
                const productObject = {
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  quantity: 1,
                  total: product.price,
                  discountPercentage: product.discountPercentage,
                  discountedTotal:
                    product.price * (1 - product.discountPercentage / 100),
                  thumbnail: product.thumbnail,
                };

                cart.products.push(productObject);
              }

              cart.total = cart.products.reduce((acc, item) => acc + item.total, 0);

              cart.discountedTotal = cart.products.reduce(
                (acc, item) => acc + item.discountedTotal,
                0
              );

              cart.totalProducts = cart.products.length;

              cart.totalQuantity = cart.products.reduce(
                (acc, item) => acc + item.quantity,
                0
              );

              localStorage.setItem("cart", JSON.stringify(cart));
              setCart(cart);
              setIsCartOpen(true);
                
  }
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg mb-3">
        <div className="w-40" >
            <p className='truncate'>{product.title }</p>
        </div>
              
              <p>{product.rating} ⭐</p>
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                className="w-12 h-12 object-cover rounded"
              />
              <p>${product.price}</p>
              <button onClick={handleCart} className="bg-lime-400 px-3 py-1 rounded">
                +
              </button>
            </div>
  )
}

export default TopRatedProduct
