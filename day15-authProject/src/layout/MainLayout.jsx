import React from 'react';
import { useContext } from 'react';
import { Auth } from '../context/AuthContext';
import {useNavigate} from 'react-router';

const MainLayout = () => {
  let {loggedInUser,setLoggedInUser} = useContext(Auth);
  let navigate = useNavigate();
  const handleLogout = () => {
    setLoggedInUser=null;
    localStorage.setItem("loggedInUser",null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-semibold">
          This is main layout
        </h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Your page content goes here */}
      </main>

    </div>
  );
};

export default MainLayout;