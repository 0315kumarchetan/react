import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router"
import Register from '../pages/Register';
import Login from '../pages/Login';
import AuthLayout from '../layout/AuthLayout';
import MainLayout from '../layout/MainLayout';
import ProtectedRoutes from './ProtectedRoutes';



const AppRoutes = () => {
    let router = createBrowserRouter([
        {
        path:"/",
        element : <AuthLayout/>,
        children:[
    
            {
                path: "",
                element: <Login/>,
            },
            {
                path: "register",
                element: <Register/>,
            }
        ]
        },
        {
            path:"/main",
            element : <ProtectedRoutes/>,
            children:[
                    {
                        path:"",
                        element:<MainLayout/>
                    }
            ] 
        }

    ]);

  return  <RouterProvider router={router} />
}

export default AppRoutes
