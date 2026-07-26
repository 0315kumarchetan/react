import React from "react";
import { getCntxt } from "../hooks/cntxtHook";

const ProductCard = ({ product }) => {
  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
 const cartId = crypto.randomUUID();
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
    <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-lime-400 transition-all duration-300 group">
      
      {/* Top Badge */}
      <div className="absolute mt-3 ml-3 bg-red-500/90 text-white text-xs px-2 py-1 rounded">
        {product.availabilityStatus}
      </div>

      {/* Image */}
      <div className="bg-white p-5 flex justify-center items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-36 object-contain group-hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Brand + Category */}
        <div className="flex justify-between text-xs text-white/40">
          <span>{product.brand}</span>
          <span className="uppercase">{product.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-white font-medium line-clamp-2">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-xs line-clamp-2">
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {product.tags?.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/60"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400 text-sm">
          {"★".repeat(Math.round(product.rating))}
          <span className="text-white/40 text-xs ml-1">
            ({product.rating})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lime-400 font-bold text-lg">
            ${product.price}
          </span>
          <span className="text-white/40 text-sm line-through">
            ${originalPrice}
          </span>
          <span className="text-xs text-green-400">
            {product.discountPercentage}% OFF
          </span>
        </div>

        {/* Extra Info */}
        <div className="text-xs text-white/40 space-y-1 mt-2">
          <p>Stock: {product.stock}</p>
          <p>{product.shippingInformation}</p>
          <p>{product.warrantyInformation}</p>
        </div>

        {/* Button */}
        <button 
        onClick={handleCart} 
        className="w-full mt-3 bg-lime-400 text-black py-2 rounded-xl font-medium hover:scale-105 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;