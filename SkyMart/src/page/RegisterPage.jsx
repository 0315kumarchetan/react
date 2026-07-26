import React from "react";
import {useNavigate} from 'react-router'
import { getCntxt } from "../hooks/cntxtHook";

const SignupPage = () => {
   let {
      navigate,
      register,
      handleSubmit,
      errors,
      registerFormSubmit
    } = getCntxt();
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-lime-400 text-black p-2 rounded-lg font-bold">⚡</div>
        <h1 className="text-xl font-semibold">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">
        
        <h2 className="text-2xl font-semibold mb-2">
          Create account
        </h2>
        <p className="text-gray-400 mb-6">
          Join SkyMart and start shopping
        </p>
      <form onSubmit={handleSubmit(registerFormSubmit)}>
        {/* Full Name */}
        <input
        {
          ...register("fullName",
            {
              required:"FullName is required!"
            }
          )
        }
          type="text"
          placeholder="Full name"
          className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:border-lime-400"
        />
        {
          errors.fullName && <p className="text-red-700">{errors.fullName.message}</p>
        }
        {/* Email */}
        <input
        {
          ...register("email",
            {
              required:"Email is required!"
            }
          )
        }
          type="email"
          placeholder="Email address"
          className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:border-lime-400"
        />
        {
          errors.email && <p className="text-red-700">{errors.email.message}</p>
        }
        {/* Password */}
        <input
        {
          ...register("password",
            {
              required:"Password is required!",
              minLength:{
                value:6,
                 message:"Password must contain atleast 6 characters"
              }
            }
          )
        }
          type="password"
          placeholder="Password (min 6 chars)"
          className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:border-lime-400"
        />
        {
          errors.password && <p className="text-red-700">{errors.password.message}</p>
        }
        {/* Confirm Password */}
        <input
        {
          ...register("confirmPassword",
            {
              required:"Confirm Password is required!",
              minLength:{
                value:6,
                 message:"Confirm Password must contain atleast 6 characters"
              }
            }
          )
        }
          type="password"
          placeholder="Confirm password"
          className="w-full mb-6 p-3 rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:border-lime-400"
        />
        {
          errors.confirmPassword && <p className="text-red-700">{errors.confirmPassword.message}</p>
        }

        {/* Button */}
        <button className="w-full bg-lime-400 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
          Create Account →
        </button>
      </form>
        {/* Footer */}
        <p className="text-gray-400 text-sm mt-6 text-center">
          Already have an account?{" "}
          <span onClick={()=>{
            navigate("/login");
          }} className="text-lime-400 cursor-pointer">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;