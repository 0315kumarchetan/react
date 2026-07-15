import React, { useContext } from 'react'
import { MyShop } from '../context/MyShop'

const Navbar = () => {

    let {setToggle} = useContext(MyShop);
   
  return (
    <div className='h-10 bg-black flex items-center justify-between p-5 text-white'>
      <div>Logo</div>
      <div className=' flex justify-between gap-10 text-xl' >
        <p onClick={()=>{setToggle(true)}}>Home</p>
        <p onClick={()=>{setToggle(false)}}>Cart</p>
      </div>
      <div>
        <button>Create</button>
      </div>
    </div>
  )
}

export default Navbar
