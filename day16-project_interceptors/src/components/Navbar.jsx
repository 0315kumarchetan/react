import React from 'react'
import { useContext } from 'react';
import { NavLink ,useNavigate} from 'react-router';
import { Auth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  let {loggedInUser,setLoggedInUser} = useContext(Auth);
  let navigate = useNavigate();
   
  let handleLogout=()=>{
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
    navigate("/");
    toast.info("User logged out");
  }
  return (
    <div className='border-r border-gray-700 p-2 flex flex-col justify-between'>
      
      <div>
          <h1 className='text-3xl text-semibold text-purple-900'>E-comm</h1>
        <div className='flex flex-col gap-4 mt-10 ml-5'>

            <NavLink className={({isActive})=>
              isActive? "text-purple-500 font-semibold border-b  border-purple-200":"text-black  border-b border-purple-200"
            } to={"/main"} end>Home</NavLink>
            <NavLink className={({isActive})=>
              isActive? "text-purple-500 font-semibold border-b  border-purple-200":"text-black  border-b border-purple-200"
            } to={"/main/users"}>Users</NavLink>
            <NavLink className={({isActive})=>
              isActive? "text-purple-500 font-semibold border-b  border-purple-200":"text-black  border-b border-purple-200"
            } to={"/main/products"}>Products</NavLink>

        </div>
      </div>

      {/* Logout Button (Bottom) */}
      <div className="p-2">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>


    </div>
  )
} 

export default Navbar;
