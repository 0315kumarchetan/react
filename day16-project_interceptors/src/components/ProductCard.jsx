import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 max-w-sm">
      
      {/* Image */}
      <div className="h-48 bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="mt-4">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h2>

        {/* Brand + Category */}
        <p className="text-sm text-gray-500">
          {product.brand} • {product.category}
        </p>

        {/* Price + Discount */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
            -{product.discountPercentage}%
          </span>
        </div>

        {/* Rating */}
        <div className="mt-2 text-sm text-yellow-600">
          ⭐ {product.rating} / 5
        </div>

        {/* Stock */}
        <p className="text-sm mt-1 text-gray-600">
          {product.stock > 0 ? (
            <span className="text-green-600 font-medium">
              In Stock ({product.stock})
            </span>
          ) : (
            <span className="text-red-500">Out of Stock</span>
          )}
        </p>

        {/* Shipping */}
        <p className="text-xs text-gray-500 mt-1">
          🚚 {product.shippingInformation}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {product.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;