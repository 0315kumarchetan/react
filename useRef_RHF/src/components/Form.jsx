import React, { useRef, useState } from 'react'

const Form = () => {
    console.log("Form rerendering...")
   let formRef = useRef({});
   let [product, setProduct] = useState({});
    const handleSubmit=(e)=>{
        e.preventDefault();

        let obj={
            productName:formRef.current.productName.value,
            productPrice:formRef.current.productPrice.value,
            productCategory:formRef.current.productCategory.value,
            productImage:formRef.current.productImage.value
        }
       setProduct( obj);
    }
    console.log(product);

  return (
    <div className='w-80 h-srceen'>
    <h1>Product card</h1>
      <form 
        onSubmit={(handleSubmit)}
      className='flex flex-col gap-4 p-6 rounded-lg bg-white'>
        <input ref={(e)=>{formRef.current.productName = e}} className='border border-gray-400 rounded' type='text' name="product" placeholder='product name'/>
        <input ref={(e)=>{formRef.current.productPrice = e}}  className='border border-gray-400 rounded' type="number" name="price" placeholder='product price' />
        <span>Select category :</span>
        <select ref={(e)=>{formRef.current.productCategory = e}} className='border border-gray-400 rounded'>
            <option>MEN'S</option>
            <option>WOMEN'S</option>
            <option>KID'S</option>
        </select>
        <input ref={(e)=>{formRef.current.productImage = e}} className='border border-gray-400 rounded' type='url' name="url" placeholder='url'/>
        <button  className='p-2 bg-blue-600 text-white cursor-pointer rounded'>CREATE</button>
      </form>


      <h1>{product.productName}</h1>
      <h1>{product.productPrice}</h1>
      <h1>{product.productCategory}</h1>
      <h1>{product.productImage}</h1>
    </div>
  )
}

export default Form
