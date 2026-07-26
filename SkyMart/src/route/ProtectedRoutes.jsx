import React from 'react'
import { useContext } from 'react';
import {Navigate, Outlet} from 'react-router'
import { Cntxt } from '../context/Context';

const ProtectedRoutes = () => {
   let {loggedInUser} = useContext(Cntxt);

    if(!loggedInUser){
       return <Navigate to={"/login"}/>
    }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoutes
