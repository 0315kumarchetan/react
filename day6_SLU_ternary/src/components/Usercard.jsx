import React from 'react'

const Usercard = ({setToggle,user}) => {
  return (

        <div className='p-2 w-50 rounded bg-red-200'>
        <div className='p-1 rounded border-red-800'>
            <img src='https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </div>
        <div className='text-xl'>
            <h1>Name : {user.name} </h1>
            <p>Email : {user.name}</p>
        </div>
        <div className=' text-white flex justify-between'>
            <button className='p-2 bg-blue-500 rounded'>Update</button>
            <button  className='p-2 bg-red-500 rounded' >Delete</button>
        </div>
        <p>Register more user
                    <span onClick={()=>setToggle((curr)=>!curr)} className='text-blue-600 cursor-pointer'> Register here</span>
                </p>
        </div>
  
  )
}

export default Usercard
