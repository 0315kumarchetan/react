import React from "react";
import {useNavigate} from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

  let {navigate,register, handleSubmit, errors,loginFormSubmit} = useAuth();
  

 /*  let navigate = useNavigate();
  let { register, handleSubmit, reset, formState: { errors } } = useForm();

  let {loggedInUser,setLoggedInUser,registeredUsers} = useContext(Auth);

  let findInRegisteredUsers=(user)=>{
    return registeredUsers.find((item)=>item.email===user.email && item.password===user.password);
  }

  let formSubmit=(data)=>{
    let existingUser = findInRegisteredUsers(data);
    
    if(existingUser){
      setLoggedInUser(existingUser);
      localStorage.setItem("loggedInUser",JSON.stringify(existingUser));
      reset();
      toast.success("LoggedIn successfully.");
      navigate("/main")
    }else{
      toast.error("User not found or Invalid credential.")
      reset();
      return;
    }
  } */

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(loginFormSubmit)} className="space-y-4">
          
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


          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Not registered?{" "}
          <button onClick={()=>navigate("/register")} to="/register" className="text-blue-500 hover:underline">
            Register here
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;