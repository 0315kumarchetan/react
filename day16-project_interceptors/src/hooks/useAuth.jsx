import { useContext } from "react";
import {useNavigate } from "react-router";
import {useForm} from 'react-hook-form'
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

 export const useAuth =() =>{
  let navigate = useNavigate();
  let { register, handleSubmit, reset, formState: { errors } } = useForm();

  let {loggedInUser,setLoggedInUser,registeredUsers,setRegisteredUsers} = useContext(Auth);

  let findInRegisteredUsers=(user)=>{
    return registeredUsers.find((item)=>item.email===user.email && item.password===user.password);
  }
  let checkInRegisteredUsers=(data)=>{
      return registeredUsers.some((item)=>item.email===data.email);
    }

  let loginFormSubmit=(data)=>{
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
  }
  
  let registeredFormSubmit=(data)=>{
      if(data.password!==data.confirmPassword) {
        toast.error("Password and confirm password does not matched.")
        return;
      }
      if(checkInRegisteredUsers(data)){
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

  return {
    navigate,
    register, 
    handleSubmit, 
    reset, 
    errors,
    loggedInUser,
    setLoggedInUser,
    registeredUsers,
    setRegisteredUsers,
    loginFormSubmit,
    registeredFormSubmit


  }
}