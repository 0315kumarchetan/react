import React from "react";
import {useNavigate} from "react-router"
import {useForm} from 'react-hook-form'
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  let navigate = useNavigate();

  let {register,handleSubmit,reset,formState: { errors }} = useForm();
  let {registeredUsers,setRegisteredUsers,loggedInUser,setLoggedInUser} = useContext(Auth);
   let findInRegisteredUsers=(data)=>{
    return registeredUsers.some((item)=>item.email===data.email);
  }


  let formSubmit=(data)=>{
    if(data.password!==data.confirmPassword) {
      toast.error("Password and confirm password does not matched.")
      return;
    }
    if(findInRegisteredUsers(data)){
      toast.error("User already registered.")
      reset();
      return;
    }
    let arr = [...registeredUsers,data] ;
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers",JSON.stringify(arr));
    setLoggedInUser(data);
    localStorage.setItem("loggedInUser",JSON.stringify(data))
    reset();
    toast.success("User register successfully.");
    navigate("/main")
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h1>

        {/* Form */}
        <form  onSubmit={handleSubmit(formSubmit)}  className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
             {...register("fullName" , 
              {
                required : "Full name is required"
              }
            )}
              name="fullName" 
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
           
            {errors.fullName && <p className="text-red-700">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
            {...register("email",
              {
                required:"Email is required",
              }
            )}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            
            {errors.email && <p className="text-red-700">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
             {...register("password",
              {
                required:"Password is required",
                minLength:{
                  value:6,
                  message:"Password must contain atleast 6 characters"
                }
              }
            )}
              name="password"
              type="password"
              placeholder="Create password"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            
            {errors.password && <p className="text-red-700">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
            {...register("confirmPassword",
                {
                  required:"Confirm password is required",
                  minLength:{
                  value:6,
                  message:"Password must contain atleast 6 characters"
                }
                }
              )}
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
              
              {errors.confirmPassword && <p className="text-red-700">{errors.confirmPassword.message}</p>}
          </div>
          

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <button onClick={()=>navigate("/")} to="/login" className="text-green-500 hover:underline">
            Login here
          </button>
        </p>

      </div>
    </div>
  );
};

export default Register;