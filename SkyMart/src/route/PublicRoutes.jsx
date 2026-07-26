import React from 'react'
import {Navigate, Outlet} from 'react-router'
import { Cntxt } from '../context/Context';
import { useContext } from 'react';

const PublicRoutes = () => {
   let {loggedInUser} = useContext(Cntxt);

    if(loggedInUser){
       return <Navigate to={"/main/home"}/>
    }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicRoutes
