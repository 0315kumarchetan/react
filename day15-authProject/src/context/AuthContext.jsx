import { createContext } from "react";
import { useState } from "react";
import { Children } from "react";
import { useContext } from "react";

export const Auth = createContext();

export const AuthContextProvider=({children})=>{

    const [registeredUsers, setRegisteredUsers] = useState(
        JSON.parse(localStorage.getItem("registeredUsers")) ||[] 
    );
    const [loggedInUser, setLoggedInUser] = useState(
        JSON.parse(localStorage.getItem("loggedInUser"))||null
    )

    console.log("registeredUser >>>> ",registeredUsers);
    console.log("LoggedIn user >>>>> ",loggedInUser);

    return <Auth.Provider value={{registeredUsers,setRegisteredUsers,loggedInUser,setLoggedInUser}}>
        {children}
    </Auth.Provider>
}