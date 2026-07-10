import React from 'react'
import { useState } from 'react';

const Register = ({setToggle,setUsers}) => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        image:""
    });
    

    const handleChange=(e)=>{
        let {name,value} = e.target;
        setFormData({...formData ,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUsers((prev)=>[...prev,formData]);
        setFormData({
            name:"",
            email:"",
            password:"",
            image:""
        })
    }

  return (
    <div className='bg-gray-300 h-screen flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='p-2 bg-white  flex flex-col gap-4 w-96 border-gray-500 rounded'>
            <input required value={formData.name} name="name" onChange={handleChange} type='text' placeholder='name' />
            <input required value={formData.email} name='email' onChange={handleChange} type='text' placeholder='email' />
            <input required value={formData.password} name='password' onChange={handleChange} type='password' placeholder='password' />
            <input required value={formData.image} name='image' onChange={handleChange} type='url' placeholder='image' />
            <button className='p-2 bg-blue-600 text-white rounded' type='submit'>Register</button>
            <p>Already have an account? 
                {console.log("In html ",setToggle)}
                <span onClick={()=>setToggle((curr)=>!curr)} className='text-blue-600 cursor-pointer'> Login here</span>
                {console.log("In html ",setToggle)}
            </p>
        </form>
    </div>
  )
}

export default Register
