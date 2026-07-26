import React from "react";
import Navbar from "../component/Navbar";
import ProductCategory from "../component/ProductCategory";
import { useContext } from "react";
import { Cntxt } from "../context/Context";
import { useEffect } from "react";
import { axiosInstance } from "../configs/axiosInterceptors";
import { getCntxt } from "../hooks/cntxtHook";
import TopRatedProduct from "../component/TopRatedProduct";
import NewArrivalProduct from "../component/NewArrivalProduct";




const HomePage = () => {

    let {productCategories, setProductCategories,products, setProducts,loggedInUser} = useContext(Cntxt);
    let {navigate} = getCntxt();
    let cart = JSON.parse(localStorage.getItem("cart"));

    
  const getProductCategories=async ()=>{
    try{
      let res = await axiosInstance.get("/products/categories");
      setProductCategories(res.data);     
    }catch(error){
      console.log("Error : ",error);
    }
  }
   const getProducts = async () => {
        try {
          let res = await axiosInstance.get("/products");
          console.log(res);
          setProducts(res.data.products);
        } catch (error) {
          console.log("Error:", error);
        }
      };

       useEffect(()=>{
    getProductCategories();
    getProducts();
  },[])

    let topRatedProduct=[...products]
    .sort((a,b)=>b.rating-a.rating)
    .slice(0,5);

     let newArrival=[...products]
    .sort((a,b)=>b.meta.createdAt-a.meta.createdAt)
    .slice(0,5);

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-10 py-6 space-y-20">

      {/* NAVBAR */}
     <Navbar />

      {/* HERO SECTION */}
      <div className="border border-gray-700 rounded-2xl p-8 flex justify-between items-center mb-10 bg-gradient-to-br from-black to-gray-900">

        <div>
          <p className="text-lime-400 mb-2">GOOD AFTERNOON 👋</p>

          <h1 className="text-5xl font-bold mb-4">
            Welcome back, <span className="text-lime-400">{loggedInUser.fullName}</span>
          </h1>

          <p className="text-gray-400 mb-6 max-w-lg">
            Discover today's picks — hand-curated products across electronics,
            fashion, and more.
          </p>

          <div className="flex gap-4">
            <button onClick={()=>navigate("/main/shop")} className="bg-lime-400 text-black px-6 py-2 rounded-full font-semibold">
              Shop Now →
            </button>
            <button onClick={()=>navigate("/main/shop")} className="border border-gray-600 px-6 py-2 rounded-full">
              View All Products
            </button>
          </div>
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-lime-400 text-black px-6 py-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold">20+</h2>
            <p>Products</p>
          </div>

          <div className="border border-gray-600 px-6 py-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold">Free</h2>
            <p className="text-gray-400">Delivery</p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {["Cart Items", "Cart Value"].map(
          (item, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-xl p-6 bg-gray-900"
            >

              <h2 className="text-xl font-semibold mb-2">{i===0?cart?.totalProducts:cart?.total}</h2>
              <p className="text-gray-400">{item}</p>
            </div>
          )
        )}
      </div>

      {/* TOP RATED + NEW ARRIVALS */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">

        {/* Top Rated */}
        <div className="bg-gray-200 text-black rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">⭐ Top Rated</h2>

          {
            
            topRatedProduct.map((item) => <TopRatedProduct key={item.id} product={item}/>)
          }
        </div>

        {/* New Arrivals */}
        <div className="bg-gray-200 text-black rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">⚡ New Arrivals</h2>

          {
            
            newArrival.map((item) => <NewArrivalProduct key={item.id} product={item}/>)
          }
        </div>
      </div>

      {/* CATEGORY SECTION */}
       <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {productCategories.map((cat, index) => <ProductCategory key={index} productCategory={cat} />
        )}
        </div>
      </div>
     
     

      

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {["Fast Delivery", "Secure Payments", "Best Prices"].map((item, i) => (
          <div
            key={i}
            className="border border-gray-700 p-6 rounded-xl text-center"
          >
            <h3 className="font-semibold">{item}</h3>
            <p className="text-gray-400 text-sm mt-1">
              Premium service guarantee
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 border-t border-gray-700 pt-6">
        <h2 className="text-lime-400 font-semibold mb-2">SkyMart</h2>
        <p>© 2026 SkyMart • Built with React + Tailwind</p>
      </div>
    </div>
  );
};

export default HomePage;