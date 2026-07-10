import React from 'react'

const Login = ({setToggle}) => {
    
  return (
    <div className='bg-gray-300 h-screen flex justify-center items-center'>
        <form className='p-2 bg-white  flex flex-col gap-4 w-96 border-gray-500 rounded'>
            <input type='text' placeholder='email' />
            <input type='password' placeholder='password' />
            <button className='p-2 bg-blue-600 text-white rounded' type='submit'>Login</button>
            <p>Didn't have an account? 
                <span onClick={()=>setToggle((curr)=>!curr)}  className='text-blue-600 cursor-pointer'>Register here</span>
            </p>
        </form>
    </div>
  )
}

export default Login
