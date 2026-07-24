import React from 'react';
import { useContext } from 'react';
import { Auth } from '../context/AuthContext';
import {useNavigate} from 'react-router';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router'

const MainLayout = () => {
 

  return (
    <div className="h-screen p-2 flex grid grid-cols-[1fr_8fr]">
     <Navbar/>
     <div className='h-full p-2 overflow-auto'>
        <Outlet/>
      </div> 
     
    </div>
  );
};

export default MainLayout;