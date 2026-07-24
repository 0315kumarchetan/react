import React from "react";
import { useAuth } from "../hooks/useAuth";
import { axiosInstanceDummy } from "../config/axiosInterceptor";
import { useState } from "react";
import { useEffect } from "react";
import CardSkeleton from "../components/CardSkeleton";
import ProductCard from "../components/ProductCard";


const Homepage = () => {
  let {navigate,register, handleSubmit, errors,registeredFormSubmit} = useAuth();

  const [productData, setProductData] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(true);

   /*  let handleCategoryClick = (cat) =>{
      console.log(cat.toLowerCase());
       try{
      let res = await axiosInstanceDummy("/products/category/"+cat.toLowerCase());
      console.log(res);
      setProductData(res.data.products);
      setLoadingProduct(false);
    }catch(error){
      console.log("Error in products ",error);
    }
    }
 */
  let getProductData = async (cat)=>{

    try{
      let res = await axiosInstanceDummy("/products/category/"+cat);
      console.log(res);
      setProductData(res.data.products);
      setLoadingProduct(false);
    }catch(error){
      console.log("Error in products ",error);
    }
  }

  useEffect(()=>{getProductData();},[])

  

  if(loadingProduct){
      return (
           <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-10 rounded-b-3xl">
        <h1 className="text-4xl font-bold">Welcome to E-comm</h1>
        <p className="mt-2 text-lg">Find the best products at amazing prices</p>
        <button onClick={()=>{navigate("/main/products")}} className="mt-5 bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

      {/* Categories */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Electronics", "Fashion", "Men", "Women"].map((cat, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer text-center"
            >
              <p className="font-medium text-gray-700">{cat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products (UI only) */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>

        

         <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>

    </div>



       
      );
    }

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-10 rounded-b-3xl">
        <h1 className="text-4xl font-bold">Welcome to E-comm</h1>
        <p className="mt-2 text-lg">Find the best products at amazing prices</p>
        <button onClick={()=>{navigate("/main/products")}} className="mt-5 bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

      {/* Categories */}
       <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches"].map((cat, i) => (
          <div
            key={i}
            onClick={() =>getProductData(cat)}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer text-center hover:bg-purple-50 transition"
          >
            <p className="font-medium text-gray-700">{cat}</p>
          </div>
        ))}
      </div>
    </div>

      {/* Featured Products (UI only) */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>

         <div className='flex grid grid-cols-4 gap-2'>
          {
            productData.map((val)=><ProductCard key={val.id} product={val}/>)
          }
        </div>
      </div>

    </div>
  );
};

export default Homepage;
