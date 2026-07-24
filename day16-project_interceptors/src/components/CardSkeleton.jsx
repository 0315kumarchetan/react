import React from "react";

const UserCardSkeleton = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md p-5 animate-pulse">
      
      {/* Avatar + Name */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
        
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t"></div>

      {/* Info */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>

      {/* Address */}
      <div className="mt-4 space-y-2">
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-200 rounded"></div>
      </div>

      {/* Button */}
      <div className="mt-4 h-8 bg-gray-300 rounded-lg"></div>
    </div>
  );
};

export default UserCardSkeleton;