import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router'

const AuthLayout = () => {
  console.log("Autuh rederuging");
  return (
    <div>
    {/*   <Navbar/> */}
      <Outlet/>
    </div>
  )
}

export default AuthLayout
