import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router"
import Register from '../pages/Register';
import Login from '../pages/Login';
import AuthLayout from '../layout/AuthLayout';
import MainLayout from '../layout/MainLayout';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import Homepage from '../pages/Homepage';
import Userpage from '../pages/Userpage';
import Productpage from '../pages/Productpage';



const AppRoutes = () => {
    console.log("Auth rendering ...");
    let router = createBrowserRouter([
        {
            path:"/",
            element:<PublicRoutes/>,
            children:[
                {
                    path:"",
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
            ]

        },
        {
            path:"/main",
            element : <ProtectedRoutes/>,
            children:[
                    {
                        path:"",
                        element:<MainLayout/>,
                        children:[
                             {
                                path: "",
                                element: <Homepage/>,
                            },
                            {
                                path: "users",
                                element: <Userpage/>,
                            },
                            {
                                path: "products",
                                element: <Productpage/>,
                            }
                        ]
                    }
            ] 
        }

    ]);

  return  <RouterProvider router={router} />
}

export default AppRoutes
