import React, {  useContext } from 'react'
import { MyStore } from '../MyContext/MyStore'

const Navbar = () => {

  let {isCartOpen,setIsCartOpen} = useContext(MyStore);
  console.log(isCartOpen);
   
  return (
    <div className='h-10 bg-black flex items-center justify-between p-5 text-white'>
      <div>Logo</div>
      <div className=' flex justify-between gap-10 text-xl' >
        <p onClick={()=>setIsCartOpen(true)}>Home</p>
        <p onClick={()=>setIsCartOpen(false)}>Cart</p>
      </div>
      <div>
        <button>Create</button>
      </div>
    </div>
  )
}

export default Navbar
