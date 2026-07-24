import React from 'react';
import { createBrowserRouter,RouterProvider } from "react-router";
import MainLayout from '../layout/MainLayout';
import {Outlet,Navigate} from 'react-router'
import { useContext } from 'react';
import { Auth } from '../context/AuthContext';

const ProtectedRoutes = () => {

    let {loggedInUser} = useContext(Auth);

    if(!loggedInUser){
       return <Navigate to={"/"}/>
    }
    return <Outlet/>
}

export default ProtectedRoutes
