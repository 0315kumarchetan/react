import React from 'react'
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import CardSkeleton from '../components/CardSkeleton';
import { axiosInstance, axiosInstanceDummy } from '../config/axiosInterceptor';

const Productpage = () => {


  const [productData, setProductData] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(true);

  let getProductData = async ()=>{

    try{
      let res = await axiosInstanceDummy("/products");
      console.log(res.data.products);
      setProductData(res.data.products);
      setLoadingProduct(false);
    }catch(error){
      console.log("Error in products ",error);
    }
  }

  useEffect(()=>{getProductData();},[])

  if(loadingProduct){
      return (
        <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      );
    }

  return (
    <div className='flex grid grid-cols-4 gap-2'>
     {
      productData.map((val)=><ProductCard key={val.id} product={val}/>)
      }
    </div>
  )
}

export default Productpage
