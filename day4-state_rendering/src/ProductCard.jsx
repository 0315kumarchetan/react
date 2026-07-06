import React from 'react'

const ProductCard = ({ product,del}) => {
  return (
    <div className='p-2 border-2 w-50 flex flex-col gap-4'>
        <div className='w-40' >
            <img src={product.image} alt='' className='w-full h-48 object-cover'></img>    
        </div>  
        <div>
            <p className='font-semibold w-full object-cover' >Name : {product.title.substring(0,10)} </p>
            <p className='text-sm'>Category : {product.category}</p>
            <p className='text-green-600'>Price : ${product.price}</p>
            <button className='p-2 bg-red-500 w-full' onClick={()=>{
                del(product.id);
            }}>Delete</button>
        </div>
      
    </div>
  )
}

export default ProductCard
