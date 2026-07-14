import React from 'react'
import { useForm } from 'react-hook-form';

const RHF = () => {
    console.log("RHF Rendering");
    let {
        register,
        handleSubmit,
        reset,
        formState:{error}
    } = useForm();

    console.log()

  return (
     <div className='w-80 h-srceen'>
    <h1>Product card</h1>
      <form 
       onSubmit={handleSubmit((data)=>{
        console.log(data)
        reset();   
    })}
      className='flex flex-col gap-4 p-6 rounded-lg bg-white'>
        <input  {...register("productName")} className='border border-gray-400 rounded' type='text' name="productName" placeholder='product name'/>
        <input  {...register("productPrice")} className='border border-gray-400 rounded' type="number" name="prductPrice" placeholder='product price' />
        <span>Select category :</span>
        <select {...register("productCategory")} className='border border-gray-400 rounded'>
            <option>MEN'S</option>
            <option>WOMEN'S</option>
            <option>KID'S</option>
        </select>
        <input {...register("productImage")}className='border border-gray-400 rounded' type='url' name="url" placeholder='url'/>
        <button  className='p-2 bg-blue-600 text-white cursor-pointer rounded'>CREATE</button>
      </form>
    </div>
  )
}

export default RHF
