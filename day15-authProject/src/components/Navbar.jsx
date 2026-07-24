import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"}></NavLink>
      <NavLink to={"/register"}></NavLink>
    </div>
  )
} 

export default Navbar;
