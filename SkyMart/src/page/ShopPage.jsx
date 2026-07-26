import React from "react";
import Navbar from "../component/Navbar";
import ProductCard from "../component/ProductCard";
import { useContext } from "react";
import { Cntxt } from "../context/Context";
import { axiosInstance } from "../configs/axiosInterceptors";
import { useEffect } from "react";
import { useState } from "react";

const ShopPage = () => {

  let {products, setProducts,productCategories, setProductCategories,allProducts, setAllProducts} = useContext(Cntxt);
 
  const [searchData, setSearchData] = useState(null)

  let handleOnChange= async (e)=>{
      try {
        let res;
        if(e.target.value!=='All Categories'){
           res = await axiosInstance.get("/products/category/"+e.target.value);
        }else{
           res = await axiosInstance.get("/products");
        }
          console.log(res);
          setProducts(res.data.products);
        } catch (error) {
          console.log("Error:", error);
        }
  }



  const getProductCategories=async ()=>{
    try{
      let res = await axiosInstance.get("/products/categories");
      setProductCategories(res.data);     
    }catch(error){
      console.log("Error : ",error);
    }
  }
  useEffect(()=>{
    getProductCategories();
  },[])



  useEffect(() => {
  const getProducts = async () => {
    try {
      let res = await axiosInstance.get("/products");
      setProducts(res.data.products);
      setAllProducts(res.data.products);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  getProducts();
}, []);

  let handleSortOnChange =(e)=>{
      try {
        let res;
        if(e.target.value!==""){
          if(e.target.value==="rating"){
           res =[...products]
                .sort((a,b)=>b.rating-a.rating);
          }else if(e.target.value==='hl'){
             res =[...products]
                .sort((a,b)=>b.price-a.price);
          }else if(e.target.value==='lh'){
              res =[...products]
                .sort((a,b)=>a.price-b.price);
          }
        }else{
           return;
        }
        setProducts(res);
        } catch (error) {
          console.log("Error:", error);
        }
  }
    const handleSearchProduct = () => { 

      const filtered = allProducts.filter((item) =>
        item.title.toLowerCase().includes(searchData.toLowerCase())
      );
      console.log("filtered data ",filtered)
      console.log("allProducts ",allProducts.length)
      setProducts(filtered);
    };

    useEffect(()=>{
       if(!searchData){
        setProducts(allProducts);
        return;
       }
      let timeout = setTimeout(() => {
        handleSearchProduct();
      }, 1000);

     return ()=>clearTimeout(timeout);
    },[searchData,allProducts]);


  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-10 py-6 space-y-20">
      
      <Navbar />

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-semibold">All Products</h1>
        <p className="text-white/40 mt-1">
          {products.length} products found
        </p>
      </div>

      {/* Search + Filters */}
      <div className="border border-white/20 rounded-2xl p-4 flex gap-4 items-center mb-8">
        
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none"
          onChange={(e)=>setSearchData(e.target.value)}
        />

        <select onChange={handleOnChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2">
          <option>All Categories</option>
          {
             productCategories.map((item,idx)=>(
              <option key={idx} value={item.slug}>{item.name}</option>
             ))
          }
        </select>

        <select onChange={handleSortOnChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2">
          <option value={""}>Featured</option>
          <option value={"lh"}>Price Low → High</option>
          <option value={"hl"}>Price High → Low</option>
          <option value={"rating"}>Rating</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-white/40">
        <h2 className="text-lime-400 text-xl mb-2">SkyMart</h2>
        <p>© 2026 SkyMart • Built with React</p>
      </div>
    </div>
  );
};

export default ShopPage;