import React from 'react'
import Card from './components/Card'
import Contact from './components/Contact'
import About from './components/About'
import { useState } from 'react'

const Web = () => {
   /*  const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") */

    const [formData, setFormData] = useState({})
    
    const handleEvent = ()=>{
        console.log("<<<< "+formData.name);
        console.log("<<<< "+formData.email);
         console.log("<<<< "+formData.password);        
    }
    const handleChange = (e)=>{
        let [name,value]=e.target;
        setFormData({...formData , [name]:value})
    }
  return (
    <div className='p-4 flex flex-col gap-4 w-60 bg-amber-100'>
      <input onChange={handleChange}
       name='name'
        className='border-2' 
        placeholder='name' 
        type='text' />
      <input onChange={handleChange}
         name='email'
         className='border-2' 
         type="text"
          placeholder='email' />
      <input onChange={handleChange}
      name='password'
        className='border-2'
         type="password"
          placeholder='password' />
      <button onClick={handleEvent}>Submit</button>

      <div>
        <h1>Name : {formData.name}</h1>
        <h1>Email : {formData.email}</h1>
        <h1>Password : {formData.password}</h1>
      </div>
    </div>
  )
}

export default Web
