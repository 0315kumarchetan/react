import { useContext } from "react";
import { useNavigate } from "react-router";
import { Cntxt } from "../context/Context";
import {useForm} from "react-hook-form";
import { toast } from "react-toastify";

export const getCntxt=()=>{
  let navigate = useNavigate();
  let {register,handleSubmit,reset,formState:{errors}} = useForm();
  let { registeredUsers,setRegisteredUsers,loggedInUser,setLoggedInUser,isCartOpen, 
    setIsCartOpen,products, setProducts,productCategories, 
    setProductCategories,topRatedProduct,allProducts, setAllProducts,cart, setCart} = useContext(Cntxt);
  let findInRegisteredUser=(data)=>{
    return registeredUsers.find((val)=>val.email===data.email && data.password===val.password);
  }
  let loginFormSubmit=(data)=>{
    let exisstingUser = findInRegisteredUser(data);
    console.log(exisstingUser);
    if(exisstingUser){
      setLoggedInUser(exisstingUser);
      localStorage.setItem("loggedInUser",JSON.stringify(exisstingUser));
      navigate("/main/home");
      reset();
      toast.success("User logged in successfully.");
      return;
    }else{
      reset();
      toast.error("User not found or Invalid credential!");
      return;
    }  
  }
 
  let registerFormSubmit=(data)=>{
    if(data.password!==data.confirmPassword){
      toast.error("Password and confirmPassword do not matched!");
      reset();
      return;
    }
    if(registeredUsers.some((val)=>{val.email===data.email})){
      toast.error("User already registered!");
      reset();
      return;
    }

    setRegisteredUsers((prev)=>{
      let updated =  [...prev,data];
      setRegisteredUsers(updated);
      localStorage.setItem("registeredUsers",JSON.stringify(updated));
      setLoggedInUser(data);
      localStorage.setItem("loggedInUser",JSON.stringify(data));
      navigate("/main/home");
      reset();
      toast.success("User created logged in successfully.")
      return updated;
    })
    reset();
  }

  let handleLogout=()=>{
        setLoggedInUser(null);
        localStorage.removeItem("loggedInUser");
        navigate("/login");
        toast.success("Logged out successfully.");
    }




     const updateCart = (cart) => {
    cart.total = cart.products.reduce((a, i) => a + i.total, 0);
    cart.discountedTotal = cart.products.reduce(
      (a, i) => a + i.discountedTotal,
      0
    );
    cart.totalQuantity = cart.products.reduce(
      (a, i) => a + i.quantity,
      0
    );

     cart.totalProducts = cart.products.length;

    
    setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    if(cart.products.length===0){
      setIsCartOpen(false);
    }
    };
    const removeProductFromCart=(id)=>{
        const updatedCart = {...cart,products: cart.products.filter((item) => item.id !== id)};
         console.log(cart);
        updateCart(updatedCart);
    }
    const increaseQty = (id) => {   
         const updatedCart = {...cart,products: 
             cart.products.map((item) => 
                {
                    if (item.id === id) {
                    item.quantity += 1;
                    item.total = item.price * item.quantity;
                    item.discountedTotal =
                        item.total * (1 - item.discountPercentage / 100);
                    }
                    return item;
                }
            )
        };
        updateCart(updatedCart);
    };
    const decreaseQty = (id) => {   
         const updatedCart = {...cart,products: 
             cart.products.map((item) => 
                {
                    if (item.id === id && item.quantity>0) {
                    item.quantity -= 1;
                    item.total = item.price * item.quantity;
                    item.discountedTotal =
                        item.total * (1 - item.discountPercentage / 100);
                    }
                    return item;
                }
            )
        };
        updateCart(updatedCart);
    };


    


    
  return {

    updateCart,
    removeProductFromCart,
    increaseQty,
    decreaseQty,
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registeredUsers,
    setRegisteredUsers,
    loggedInUser,
    setLoggedInUser,
    loginFormSubmit,
    registerFormSubmit,
    handleLogout,
    isCartOpen, 
    setIsCartOpen,
    products, 
    setProducts,
    productCategories, 
    setProductCategories,
    topRatedProduct,
    allProducts, 
    setAllProducts,
    cart, 
    setCart

  }
}