import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";

const MainNavbar = () => {
  const { loggedInUser } = useContext(Auth);
 

  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-end">
    

      {/* Right: User + Cart */}
      <div className="flex items-center gap-4 mb-5">
    

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500 text-white flex items-center justify-center rounded-full">
            {loggedInUser?.fullName?.charAt(0) || "U"}
          </div>
          <p className="hidden md:block text-sm font-medium text-gray-700">
            {loggedInUser?.fullName || "User"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
