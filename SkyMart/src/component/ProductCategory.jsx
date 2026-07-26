import React from 'react'
import { useContext } from 'react';
import { useNavigate } from "react-router";
import { Cntxt } from '../context/Context';
import { useEffect } from 'react';
import { axiosInstance } from "../configs/axiosInterceptors";


const ProductCategory = ({productCategory}) => {

       let navigate = useNavigate();
       let {products, setProducts} = useContext(Cntxt);

        const handleOnClick= async(cat)=>{
        try{
            let res = await axiosInstance.get("/products/category/"+cat);
            setProducts(res.data.products);
            /* navigate("/main/shop"); */
            }catch(error){
            console.log("Error : ",error);
            }
        }
            
  return (
     <div className="bg-white/5 border border-white/10 text-white p-6 rounded-xl text-center cursor-pointer hover:scale-105 hover:border-lime-400 transition-all duration-300">
      {/* Name */}
      <p onClick={()=>handleOnClick(productCategory.slug)} className="font-medium uppercase tracking-wide">
        {productCategory.name}
      </p>
    </div>
  )
}

export default ProductCategory
