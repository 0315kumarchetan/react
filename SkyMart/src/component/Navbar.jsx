import React from 'react'
import { getCntxt } from '../hooks/cntxtHook';
import { Cntxt } from '../context/Context';
import { NavLink } from 'react-router';
import CartDrawer from './CartDrawer';

const Navbar = () => {
    let {loggedInUser,handleLogout,isCartOpen, setIsCartOpen} = getCntxt(Cntxt);
    let handleCartOpenClose=()=>{
         setIsCartOpen(true);
    }

    
  return (
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-lime-400">⚡ SkyMart</h1>

        <div className="flex ml-35 gap-10 text-gray-400">

        <NavLink className={({isActive})=>isActive?"text-lime-400 cursor-pointer":"cursor-pointer hover:text-white"} to={"/main/home"} end>Home</NavLink>
         <NavLink className={({isActive})=>isActive?"text-lime-400 cursor-pointer":"cursor-pointer hover:text-white"} to={"/main/shop"}>Shop</NavLink>
          <NavLink className={({isActive})=>isActive?"text-lime-400 cursor-pointer":"cursor-pointer hover:text-white"} to={"/main/about"}>About</NavLink>




        </div>

        <div className="flex gap-3">

          <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
            <div className="w-6 h-6 bg-lime-400 text-black rounded-lg flex items-center justify-center text-ink text-xs font-bold"> {loggedInUser?.fullName?.charAt(0) || "U"}</div>
            <span className="text-sm text-white/70 font-body max-w-[100px] truncate">{loggedInUser?.email}</span>
          </div>


          <button onClick={handleCartOpenClose} className="bg-gray-900 px-3 py-1 rounded-md">🛒</button>


          <button onClick={handleLogout}  className="p-2.5 bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                strokeLinejoin="round" className="lucide lucide-log-out">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>




          </button>

          <CartDrawer isOpen={isCartOpen} onClose={()=>setIsCartOpen(false)}/>
        </div>

      </div>
  )
}

export default Navbar
