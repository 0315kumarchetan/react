import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router";
import MainLayout from '../layout/MainLayout';
import {Outlet,Navigate} from 'react-router'
import { useContext } from 'react';
import { Auth } from '../context/AuthContext';

const PublicRoutes = () => {
    let {loggedInUser} = useContext(Auth);

    if(loggedInUser){
       return <Navigate to={"/main"}/>
    }
    return <Outlet/>
}
export default PublicRoutes
