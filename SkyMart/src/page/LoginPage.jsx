import React from "react";
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import { useContext } from "react";
import { Cntxt } from "../context/Context";
import {  getCntxt } from "../hooks/cntxtHook";
const LoginPage = () => {
  let {
    navigate,
    register,
    handleSubmit,
    errors,
    loginFormSubmit
  } = getCntxt();
  return (
    <div className="min-h-screen bg-black text-white flex">
      
      {/* LEFT SECTION */}
      <div className="hidden md:flex flex-col justify-between w-1/2 p-12 bg-gradient-to-br from-black via-gray-900 to-black">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-lime-400 text-black p-2 rounded-lg font-bold">⚡</div>
          <h1 className="text-xl font-semibold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Content */}
        <div>
          <p className="text-lime-400 uppercase tracking-widest text-sm mb-4">
            Welcome Back
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Shop the future.
            <br />
            <span className="text-lime-400">Today.</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md">
            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-10">
            {[
              { value: "20K+", label: "Products" },
              { value: "50K+", label: "Users" },
              { value: "4.9★", label: "Rating" },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 px-6 py-4 rounded-xl text-center"
              >
                <h3 className="text-lime-400 text-xl font-bold">
                  {item.value}
                </h3>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="bg-[#111] p-8 rounded-2xl w-[90%] max-w-md border border-gray-800 shadow-lg">
          
          <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
          <p className="text-gray-400 mb-6">
            Enter your credentials to continue
          </p>
          <form onSubmit={handleSubmit(loginFormSubmit)}>
          {/* Email */}
          <input
            {
              ...register("email",
                {
                  required:"Email is required!",
                   minLength:{
                  value:6,
                  message:"Password must contain atleast 6 characters"
                }
                }

              )
            }
            type="email"
            placeholder="Email address"
            className="w-full mb-4 p-3 rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:border-lime-400" 
          />
            {
              errors.email &&  <p className="text-red-700">{errors.email.message}</p>
            }
          {/* Password */}
          <input
          {
            ...register("password",
              {
                required:"Password is required!"
              }
            )
          }

            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:border-lime-400"
          />
          {
            errors.password && <p className="text-red-700">{errors.password.message}</p>
          }

          {/* Button */}
          <button className="w-full bg-lime-400 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
            Sign in →
          </button>
          </form>

          {/* Footer */}
          <p className="text-gray-400 text-sm mt-6 text-center">
            Don’t have an account?{" "}
            <span onClick={()=>{
            navigate("/register");
          }} className="text-lime-400 cursor-pointer">
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;