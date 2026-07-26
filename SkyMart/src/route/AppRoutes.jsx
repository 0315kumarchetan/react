import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router";
import PublicRoutes from './PublicRoutes';
import AuthLayout from '../layout/AuthLayout';
import ProtectedRoutes from './ProtectedRoutes';
import MainLayout from '../layout/MainLayout';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import HomePage from '../page/HomePage';
import AboutPage from '../page/AboutPage';
import ShopPage from '../page/ShopPage';


const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path:"/",
            element: <PublicRoutes/>,
            children : [
                {
                    path:"",
                    element:<AuthLayout/>,
                    children:[
                        {
                            path:"",
                            element:<LoginPage/>
                        },
                        {
                            path:"login",
                            element:<LoginPage/>
                        },
                        {
                            path:"register",
                            element:<RegisterPage/>
                        }
                    ]
                }
            ]
        },
        {
            path:"/main",
            element: <ProtectedRoutes/>,
            children : [
                {
                    path:"",
                    element:<MainLayout/>,
                    children:[
                        {
                            path:"",
                            element:<HomePage/>
                        },
                        {
                            path:"home",
                            element:<HomePage/>
                        },
                        {
                            path:"shop",
                            element:<ShopPage/>
                        },
                        {
                            path:"about",
                            element:<AboutPage/>
                        }
                    ]
                }
            ]
        }
    ]);
  return <RouterProvider  router={router}/>;
}

export default AppRoutes
